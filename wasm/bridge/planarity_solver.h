#pragma once
#include <depends/nlohmann/json.hpp>
#include <fstream>

// Persistent constraint data; changing force parameters does not rebuild these groups.
struct PlanaritySettings
{
    bool enabled[3] = {true, false, false};
    double strength[3] = {1, 0.1, 0.1};
    double tolerance[3] = {0.000001, 0.001, 0.005};
    bool quad = false;
    std::vector<zSpace::zIntArray> groups;
    zSpace::zPointArray origins;
    zSpace::zVectorArray normals;
    zSpace::zIntPairArray pairs;
    zSpace::zDoubleArray lengths;
};

inline PlanaritySettings readPlanarityConstraints(const char* text, int vertexCount)
{
    nlohmann::json json;
    if (text[0] == '/') {
        std::ifstream input(text);
        if (!input) throw std::invalid_argument("Cannot read planarity constraint file.");
        input >> json;
    } else json = nlohmann::json::parse(text);
    PlanaritySettings out;
    auto validId = [&](int id) {
        if (id < 0 || id >= vertexCount) throw std::invalid_argument("Planarity vertex ID out of range.");
        return id;
    };
    for (const auto& group : json.at("groups")) {
        auto ids = group.at("vertices").get<std::vector<int>>();
        if (ids.empty()) throw std::invalid_argument("Empty plane group.");
        for (int id : ids) validId(id);
        const auto o = group.at("origin").get<std::vector<double>>();
        const auto n = group.at("normal").get<std::vector<double>>();
        if (o.size() != 3 || n.size() != 3) throw std::invalid_argument("Plane requires 3D origin and normal.");
        for (double v : o) if (!std::isfinite(v)) throw std::invalid_argument("Invalid plane origin.");
        for (double v : n) if (!std::isfinite(v)) throw std::invalid_argument("Invalid plane normal.");
        zSpace::zVector normal(n[0], n[1], n[2]);
        if (normal.length() < 1e-9) throw std::invalid_argument("Zero plane normal.");
        normal.normalize();
        out.groups.push_back(ids);
        out.origins.emplace_back(o[0], o[1], o[2]);
        out.normals.push_back(normal);
    }
    for (const auto& pair : json.at("pairs")) {
        const int a = validId(pair.at(0).get<int>()), b = validId(pair.at(1).get<int>());
        const double length = pair.at(2).get<double>();
        if (a == b || !std::isfinite(length) || length < 0) throw std::invalid_argument("Invalid rigid pair.");
        out.pairs.emplace_back(a, b);
        out.lengths.push_back(length);
    }
    return out;
}
