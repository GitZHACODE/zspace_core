#if defined(ZSPACE_IO_OPENUSD)
// Include the SDK before legacy zSpace macros/global using directives.
#include <pxr/base/gf/vec3f.h>
#include <pxr/base/tf/errorMark.h>
#include <pxr/base/tf/stringUtils.h>
#include <pxr/base/work/threadLimits.h>
#include <pxr/usd/sdf/assetPath.h>
#include <pxr/usd/usd/primRange.h>
#include <pxr/usd/usd/stage.h>
#include <pxr/usd/usdGeom/mesh.h>
#include <pxr/usd/usdGeom/metrics.h>
#include <pxr/usd/usdGeom/primvarsAPI.h>
#include <pxr/usd/usdGeom/xformCache.h>
#include <pxr/usd/usdGeom/xform.h>
#include <pxr/usd/usdUtils/usdzPackage.h>
#include <algorithm>
#include <atomic>
#include <cctype>
#include <chrono>
#include <filesystem>
#include <cmath>
#include <unordered_set>
#include <depends/nlohmann/json.hpp>
#endif

#include <src/zIO/codecs/zCodecUSD.h>

namespace zSpace::io_detail
{
#if defined(ZSPACE_IO_OPENUSD)
void setUSDConcurrencyLimit(unsigned limit) { PXR_NS::WorkSetConcurrencyLimit(limit); }
namespace
{
    PXR_NAMESPACE_USING_DIRECTIVE

    zIOResult failure(const std::string& message, TfErrorMark& mark)
    {
        std::string detail = message;
        for (const auto& error : mark) detail += " " + error.GetCommentary();
        mark.Clear();
        return zIOResult::error(detail);
    }

    template <typename T>
    bool readPrimvar(const UsdGeomPrimvarsAPI& api, const char* name, T& values)
    {
        const auto primvar = api.GetPrimvar(TfToken(name));
        return primvar && primvar.ComputeFlattened(&values);
    }

    void readColors(const UsdGeomPrimvarsAPI& api, const char* name,
        const char* opacityName, zColorArray& destination, const char* legacyOpacity = nullptr)
    {
        VtVec3fArray colors;
        VtFloatArray opacity;
        if (!readPrimvar(api, name, colors)) return;
        if (!readPrimvar(api, opacityName, opacity) && legacyOpacity)
            readPrimvar(api, legacyOpacity, opacity);
        for (size_t i = 0; i < colors.size(); ++i)
        {
            const float alpha = opacity.size() == 1 ? opacity[0] :
                (i < opacity.size() ? opacity[i] : 1.0f);
            destination.emplace_back(colors[i][0], colors[i][1], colors[i][2], alpha);
        }
    }

    template <typename T>
    bool authorPrimvar(const UsdGeomPrimvarsAPI& api, const char* name,
        const SdfValueTypeName& type, const T& values, const TfToken& interpolation,
        int elementSize = -1)
    {
        if (values.empty()) return true;
        return api.CreatePrimvar(TfToken(name), type, interpolation, elementSize).Set(values);
    }

    bool authorColors(const UsdGeomPrimvarsAPI& api, const char* name,
        const char* opacityName, const zColorArray& colors, const TfToken& interpolation)
    {
        VtVec3fArray rgb;
        VtFloatArray opacity;
        for (const auto& color : colors)
        {
            rgb.push_back(GfVec3f(color.r, color.g, color.b));
            opacity.push_back(color.a);
        }
        return authorPrimvar(api, name, SdfValueTypeNames->Color3fArray, rgb, interpolation) &&
            authorPrimvar(api, opacityName, SdfValueTypeNames->FloatArray, opacity, interpolation);
    }

    struct TemporaryLayer
    {
        std::filesystem::path path;
        ~TemporaryLayer() { std::error_code error; std::filesystem::remove(path, error); }
    };
}

static zIOResult decodeMesh(const PXR_NS::UsdGeomMesh& mesh, MeshData& data)
{
    PXR_NAMESPACE_USING_DIRECTIVE
    TfErrorMark mark;

    VtVec3fArray points;
    VtIntArray counts, indices;
    if (!mesh.GetPointsAttr().Get(&points) || !mesh.GetFaceVertexCountsAttr().Get(&counts) ||
        !mesh.GetFaceVertexIndicesAttr().Get(&indices))
        return failure("USD mesh has no default geometry values.", mark);
    std::string reason;
    if (!UsdGeomMesh::ValidateTopology(indices, counts, points.size(), &reason))
        return failure("Invalid USD mesh topology: " + reason, mark);

    MeshData result;
    for (const auto& point : points) result.positions.emplace_back(point[0], point[1], point[2]);
    result.polygonCounts.assign(counts.begin(), counts.end());
    result.polygonConnects.assign(indices.begin(), indices.end());
    const UsdGeomPrimvarsAPI api(mesh);
    VtVec3fArray normals;
    const auto normalPrimvar = api.GetPrimvar(TfToken("normals"));
    if (normalPrimvar && normalPrimvar.GetInterpolation() == UsdGeomTokens->uniform)
        normalPrimvar.ComputeFlattened(&normals);
    else if (!normalPrimvar && mesh.GetNormalsInterpolation() == UsdGeomTokens->uniform)
        mesh.GetNormalsAttr().Get(&normals);
    for (const auto& normal : normals) result.faceNormals.emplace_back(normal[0], normal[1], normal[2]);

    const auto colorPrimvar = api.GetPrimvar(TfToken("displayColor"));
    if (colorPrimvar)
    {
        const auto interpolation = colorPrimvar.GetInterpolation();
        if (interpolation == UsdGeomTokens->uniform)
            readColors(api, "displayColor", "displayOpacity", result.faceColors);
        else if (interpolation == UsdGeomTokens->vertex || interpolation == UsdGeomTokens->varying ||
            interpolation == UsdGeomTokens->constant)
        {
            readColors(api, "displayColor", "displayOpacity", result.vertexColors);
            if (interpolation == UsdGeomTokens->constant && result.vertexColors.size() == 1)
                result.vertexColors.resize(points.size(), result.vertexColors.front());
        }
    }
    zColorArray customFaceColors;
    readColors(api, "zspace:faceColor", "zspace:faceOpacity", customFaceColors, "zspace:faceColorOpacity");
    if (!customFaceColors.empty()) result.faceColors = std::move(customFaceColors);
    readColors(api, "zspace:edgeColor", "zspace:edgeOpacity", result.edgeColors, "zspace:edgeColorOpacity");
    VtIntArray edges;
    VtFloatArray weights;
    if (readPrimvar(api, "zspace:edgeVertexIndices", edges))
        result.edgeConnects.assign(edges.begin(), edges.end());
    if (readPrimvar(api, "zspace:edgeWeight", weights))
        result.edgeWeights.assign(weights.begin(), weights.end());
    if (!mark.IsClean()) return failure("Could not decode USD mesh attributes.", mark);
    data = std::move(result);
    return zIOResult::ok();
}

zIOResult readMeshUSD(const std::string& path, MeshData& data)
{
    PXR_NAMESPACE_USING_DIRECTIVE
    TfErrorMark mark;
    const auto stage = UsdStage::Open(path);
    if (!stage) return failure("Could not read USD mesh.", mark);
    for (const auto& prim : stage->Traverse())
        if (prim.IsA<UsdGeomMesh>()) return decodeMesh(UsdGeomMesh(prim), data);
    return failure("USD stage contains no mesh prim.", mark);
}

static zIOResult authorMesh(PXR_NS::UsdGeomMesh mesh, const MeshData& data)
{
    PXR_NAMESPACE_USING_DIRECTIVE
    TfErrorMark mark;
    VtVec3fArray points, normals;
    for (const auto& point : data.positions) points.push_back(GfVec3f(point.x, point.y, point.z));
    for (const auto& normal : data.faceNormals) normals.push_back(GfVec3f(normal.x, normal.y, normal.z));
    VtIntArray counts(data.polygonCounts.begin(), data.polygonCounts.end());
    VtIntArray indices(data.polygonConnects.begin(), data.polygonConnects.end());
    std::string reason;
    if (!UsdGeomMesh::ValidateTopology(indices, counts, points.size(), &reason))
        return failure("Invalid USD mesh topology: " + reason, mark);
    if (!mesh.CreatePointsAttr().Set(points) || !mesh.CreateFaceVertexCountsAttr().Set(counts) ||
        !mesh.CreateFaceVertexIndicesAttr().Set(indices) ||
        !mesh.CreateSubdivisionSchemeAttr().Set(UsdGeomTokens->none))
        return failure("Could not author USD mesh geometry.", mark);
    if (!normals.empty() && (!mesh.CreateNormalsAttr().Set(normals) ||
        !mesh.SetNormalsInterpolation(UsdGeomTokens->uniform)))
        return failure("Could not author USD face normals.", mark);
    const UsdGeomPrimvarsAPI api(mesh);
    if (!authorColors(api, "displayColor", "displayOpacity", data.vertexColors, UsdGeomTokens->vertex) ||
        !authorColors(api, "zspace:faceColor", "zspace:faceOpacity", data.faceColors, UsdGeomTokens->uniform) ||
        !authorColors(api, "zspace:edgeColor", "zspace:edgeOpacity", data.edgeColors, UsdGeomTokens->constant))
        return failure("Could not author USD colors.", mark);
    VtIntArray edges(data.edgeConnects.begin(), data.edgeConnects.end());
    VtFloatArray weights;
    for (double weight : data.edgeWeights) weights.push_back(static_cast<float>(weight));
    if (!authorPrimvar(api, "zspace:edgeVertexIndices", SdfValueTypeNames->IntArray,
        edges, UsdGeomTokens->constant, 2) ||
        !authorPrimvar(api, "zspace:edgeWeight", SdfValueTypeNames->FloatArray, weights, UsdGeomTokens->constant))
        return failure("Could not author USD edge attributes.", mark);
    if (!mark.IsClean()) return failure("Could not author USD mesh attributes.", mark);
    return zIOResult::ok();
}

static zIOResult saveStage(const PXR_NS::UsdStageRefPtr& stage, const std::string& path,
    const std::string& schema = "zspace.mesh.v1")
{
    PXR_NAMESPACE_USING_DIRECTIVE
    TfErrorMark mark;
    UsdGeomSetStageMetersPerUnit(stage, 0.01);
    UsdGeomSetStageUpAxis(stage, UsdGeomTokens->z);
    VtDictionary metadata;
    metadata["generator"] = VtValue(std::string("zSpace_IO"));
    metadata["schema"] = VtValue(schema);
    stage->GetRootLayer()->SetCustomLayerData(metadata);

    std::string extension = std::filesystem::path(path).extension().string();
    std::transform(extension.begin(), extension.end(), extension.begin(),
        [](unsigned char value) { return static_cast<char>(std::tolower(value)); });
    bool saved = false;
    if (extension == ".usdz")
    {
        static std::atomic<unsigned long long> serial{0};
        const auto stamp = std::chrono::steady_clock::now().time_since_epoch().count();
        TemporaryLayer temporary{std::filesystem::temp_directory_path() /
            ("zspace_usdz_" + std::to_string(stamp) + "_" + std::to_string(serial++) + ".usdc")};
        saved = stage->GetRootLayer()->Export(temporary.path.string()) &&
            UsdUtilsCreateNewUsdzPackage(SdfAssetPath(temporary.path.string()), path, "Mesh.usdc");
    }
    else
    {
        SdfLayer::FileFormatArguments arguments;
        // Preserve .usd text export; .usdc explicitly selects crate format.
        arguments["format"] = extension == ".usdc" ? "usdc" : "usda";
        saved = stage->GetRootLayer()->Export(path, std::string(), arguments);
    }
    if (!saved || !mark.IsClean()) return failure("Could not write USD mesh.", mark);
    return zIOResult::ok();
}

zIOResult writeMeshUSD(const std::string& path, const MeshData& data)
{
    PXR_NAMESPACE_USING_DIRECTIVE
    TfErrorMark mark;
    const auto stage = UsdStage::CreateInMemory();
    if (!stage) return failure("Could not create USD stage.", mark);
    const auto mesh = UsdGeomMesh::Define(stage, SdfPath("/Mesh"));
    stage->SetDefaultPrim(mesh.GetPrim());
    const auto result = authorMesh(mesh, data);
    return result ? saveStage(stage, path) : result;
}

namespace
{
    using SceneJson = nlohmann::json;

    SceneJson colorsJSON(const zColorArray& values)
    {
        auto result = SceneJson::array();
        for (const auto& value : values) result.push_back({value.r, value.g, value.b, value.a});
        return result;
    }

    void colorsFromJSON(const SceneJson& object, const char* key, zColorArray& colors)
    {
        if (!object.contains(key)) return;
        for (const auto& value : object.at(key))
        {
            if (!value.is_array() || (value.size() != 3 && value.size() != 4))
                throw std::runtime_error(std::string("Invalid USD scene color: ") + key);
            colors.emplace_back(value.at(0).get<float>(), value.at(1).get<float>(),
                value.at(2).get<float>(), value.size() == 4 ? value.at(3).get<float>() : 1.0f);
        }
    }
}

zIOResult readSceneUSD(const std::string& path, USDSceneData& destination)
{
    PXR_NAMESPACE_USING_DIRECTIVE
    TfErrorMark mark;
    const auto stage = UsdStage::Open(path);
    if (!stage) return failure("Could not open USD scene (supply referenced assets or a self-contained USDZ).", mark);
    if (!stage->GetCompositionErrors().empty())
        return failure("USD scene has unresolved composition dependencies; supply a self-contained USDZ.", mark);
    USDSceneData scene;
    UsdGeomXformCache transforms;
    const double scale = UsdGeomGetStageMetersPerUnit(stage) / 0.01;
    const bool yUp = UsdGeomGetStageUpAxis(stage) == UsdGeomTokens->y;
    if (!std::isfinite(scale) || scale <= 0) return failure("Invalid USD stage units.", mark);
    for (const auto& prim : UsdPrimRange(stage->GetPseudoRoot(), UsdTraverseInstanceProxies()))
    {
        if (!prim.IsA<UsdGeomMesh>())
        {
            if (prim.IsA<UsdGeomImageable>() && !prim.IsA<UsdGeomXform>())
                scene.warnings.push_back("Skipped unsupported prim " + prim.GetPath().GetString());
            continue;
        }
        const UsdGeomMesh mesh(prim);
        MeshData data;
        const auto decoded = decodeMesh(mesh, data);
        if (!decoded) return failure(prim.GetPath().GetString() + ": " + decoded.message(), mark);
        if (data.polygonCounts.empty()) continue;
        const auto matrix = transforms.GetLocalToWorldTransform(prim);
        TfToken orientation;
        mesh.GetOrientationAttr().Get(&orientation);
        if ((orientation == UsdGeomTokens->leftHanded) != (matrix.GetDeterminant() < 0))
        {
            size_t start = 0;
            for (int count : data.polygonCounts)
            {
                std::reverse(data.polygonConnects.begin() + start, data.polygonConnects.begin() + start + count);
                start += count;
            }
        }
        for (auto& point : data.positions)
        {
            auto world = matrix.Transform(GfVec3d(point.x, point.y, point.z)) * scale;
            if (yUp) world = GfVec3d(world[0], -world[2], world[1]);
            if (!std::isfinite(world[0]) || !std::isfinite(world[1]) || !std::isfinite(world[2]))
                return failure("USD scene contains non-finite points.", mark);
            point = zPoint(static_cast<float>(world[0]), static_cast<float>(world[1]), static_cast<float>(world[2]));
        }
        auto color = UsdGeomPrimvarsAPI(mesh).GetPrimvar(TfToken("displayColor"));
        if (color && color.GetInterpolation() == UsdGeomTokens->faceVarying)
            scene.warnings.push_back("Face-varying colors are not represented: " + prim.GetPath().GetString());
        if (mesh.GetPointsAttr().ValueMightBeTimeVarying() || transforms.TransformMightBeTimeVarying(prim))
            scene.warnings.push_back("Imported default-time geometry only: " + prim.GetPath().GetString());
        const auto displayName = prim.GetDisplayName();
        scene.meshes.push_back({displayName.empty() ? prim.GetName().GetString() : displayName,
            prim.GetPath().GetString(), mesh.ComputeVisibility() != UsdGeomTokens->invisible, std::move(data)});
    }
    if (scene.meshes.empty()) return failure("USD scene contains no polygon meshes.", mark);
    // Unresolved composition errors must not silently publish a partial scene.
    if (!mark.IsClean()) return failure("Could not compose USD scene; check referenced assets.", mark);
    destination = std::move(scene);
    return zIOResult::ok();
}

zIOResult readSceneUSD(const std::string& path, std::string& document)
{
    USDSceneData data;
    const auto result = readSceneUSD(path, data);
    if (!result) return result;
    SceneJson scene = {{"schema", "zspace.usd.scene.v1"}, {"objects", SceneJson::array()}, {"warnings", data.warnings}};
    for (const auto& object : data.meshes)
    {
        auto positions = SceneJson::array();
        for (const auto& point : object.mesh.positions) positions.push_back({point.x, point.y, point.z});
        scene["objects"].push_back({{"name", object.name}, {"path", object.path}, {"visible", object.visible},
            {"mesh", {{"schema", "zspace.mesh.v2"}, {"positions", std::move(positions)},
                {"polygonCounts", object.mesh.polygonCounts}, {"polygonConnects", object.mesh.polygonConnects},
                {"vertexColors", colorsJSON(object.mesh.vertexColors)}, {"faceColors", colorsJSON(object.mesh.faceColors)},
                {"edgeConnects", object.mesh.edgeConnects}, {"edgeColors", colorsJSON(object.mesh.edgeColors)},
                {"edgeWeights", object.mesh.edgeWeights}}}});
    }
    document = scene.dump();
    return zIOResult::ok();
}

zIOResult writeSceneUSD(const std::string& path, const USDSceneData& scene)
{
    PXR_NAMESPACE_USING_DIRECTIVE
    TfErrorMark mark;
    if (scene.meshes.empty()) return failure("USD scene contains no mesh objects.", mark);
    const auto stage = UsdStage::CreateInMemory();
    if (!stage) return failure("Could not create USD scene.", mark);
    const auto root = UsdGeomXform::Define(stage, SdfPath("/Scene"));
    stage->SetDefaultPrim(root.GetPrim());
    std::unordered_set<std::string> names;
    for (const auto& object : scene.meshes)
    {
        const auto& data = object.mesh;
        for (const auto& point : data.positions)
            if (!std::isfinite(point.x) || !std::isfinite(point.y) || !std::isfinite(point.z))
                return failure("Non-finite USD scene point.", mark);
        if ((!data.vertexColors.empty() && data.vertexColors.size() != data.positions.size()) ||
            (!data.faceColors.empty() && data.faceColors.size() != data.polygonCounts.size()))
            return failure("USD scene color counts do not match geometry.", mark);
        const auto baseName = TfMakeValidIdentifier(object.name);
        std::string primName = baseName.empty() ? "Mesh" : baseName;
        const auto uniqueBase = primName;
        int suffix = 1;
        while (!names.insert(primName).second) primName = uniqueBase + "_" + std::to_string(++suffix);
        const auto mesh = UsdGeomMesh::Define(stage, SdfPath("/Scene/" + primName));
        mesh.GetPrim().SetDisplayName(object.name);
        mesh.GetPrim().SetCustomDataByKey(TfToken("zspace:sourcePath"), VtValue(object.path));
        if (!object.visible) mesh.CreateVisibilityAttr().Set(UsdGeomTokens->invisible);
        const auto result = authorMesh(mesh, data);
        if (!result) return result;
    }
    return saveStage(stage, path, "zspace.usd.scene.v1");
}

zIOResult writeSceneUSD(const std::string& path, const std::string& document)
{
    try
    {
        const auto inputScene = SceneJson::parse(document);
        if (inputScene.value("schema", "") != "zspace.usd.scene.v1" || !inputScene.at("objects").is_array())
            return zIOResult::error("Invalid USD scene document.");
        USDSceneData scene;
        for (const auto& object : inputScene.at("objects"))
        {
            const auto& input = object.at("mesh");
            MeshData data;
            for (const auto& value : input.at("positions"))
            {
                if (!value.is_array() || value.size() != 3) throw std::runtime_error("Invalid USD scene point.");
                const double x = value.at(0).get<double>(), y = value.at(1).get<double>(), z = value.at(2).get<double>();
                if (!std::isfinite(x) || !std::isfinite(y) || !std::isfinite(z)) throw std::runtime_error("Non-finite USD scene point.");
                data.positions.emplace_back(static_cast<float>(x), static_cast<float>(y), static_cast<float>(z));
            }
            data.polygonCounts = input.at("polygonCounts").get<zIntArray>();
            data.polygonConnects = input.at("polygonConnects").get<zIntArray>();
            colorsFromJSON(input, "vertexColors", data.vertexColors);
            colorsFromJSON(input, "faceColors", data.faceColors);
            colorsFromJSON(input, "edgeColors", data.edgeColors);
            data.edgeConnects = input.value("edgeConnects", zIntArray{});
            data.edgeWeights = input.value("edgeWeights", zDoubleArray{});
            if ((!data.vertexColors.empty() && data.vertexColors.size() != data.positions.size()) ||
                (!data.faceColors.empty() && data.faceColors.size() != data.polygonCounts.size()))
                return zIOResult::error("USD scene color counts do not match geometry.");
            scene.meshes.push_back({object.value("name", "Mesh"), object.value("path", ""),
                object.value("visible", true), std::move(data)});
        }
        return writeSceneUSD(path, scene);
    }
    catch (const std::exception& error) { return zIOResult::error("Invalid USD scene: " + std::string(error.what())); }
}

#else
void setUSDConcurrencyLimit(unsigned) {}
zIOResult readMeshUSD(const std::string&, MeshData&)
{
    return zIOResult::error("USD support is disabled. Configure with ZSPACE_IO_WITH_OPENUSD=ON and ZSPACE_OPENUSD_ROOT.");
}
zIOResult writeMeshUSD(const std::string&, const MeshData&)
{
    return zIOResult::error("USD support is disabled. Configure with ZSPACE_IO_WITH_OPENUSD=ON and ZSPACE_OPENUSD_ROOT.");
}
zIOResult readSceneUSD(const std::string&, USDSceneData&)
{
    return zIOResult::error("USD scene IO requires an OpenUSD-enabled runtime.");
}
zIOResult writeSceneUSD(const std::string&, const USDSceneData&)
{
    return zIOResult::error("USD scene IO requires an OpenUSD-enabled runtime.");
}

zIOResult readSceneUSD(const std::string&, std::string&)
{
    return zIOResult::error("USD scene IO requires an OpenUSD-enabled runtime.");
}
zIOResult writeSceneUSD(const std::string&, const std::string&)
{
    return zIOResult::error("USD scene IO requires an OpenUSD-enabled runtime.");
}
#endif
}
