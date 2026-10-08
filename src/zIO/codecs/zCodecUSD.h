#ifndef ZSPACE_CODEC_USD_H
#define ZSPACE_CODEC_USD_H

#include <zspace/zIO/zIOResult.h>

#include <src/zIO/internal/zIOData.h>

#include <string>

namespace zSpace::io_detail
{
	struct USDMeshData
	{
		std::string name;
		std::string path;
		bool visible = true;
		MeshData mesh;
	};
	struct USDSceneData
	{
		std::vector<USDMeshData> meshes;
		std::vector<std::string> warnings;
	};
	// Typed internal scene boundary. No text serialization is required.
	zIOResult readSceneUSD(const std::string& path, USDSceneData& scene);
	zIOResult writeSceneUSD(const std::string& path, const USDSceneData& scene);
	// Called explicitly by the browser host after SDK static initialization.
	void setUSDConcurrencyLimit(unsigned limit);
	zIOResult readMeshUSD(const std::string& path, MeshData& data);
	zIOResult writeMeshUSD(const std::string& path, const MeshData& data);

	// Compatibility document overloads. The viewer uses the typed scene boundary
	// above; the existing single-mesh API keeps object-space semantics.
	zIOResult readSceneUSD(const std::string& path, std::string& document);
	zIOResult writeSceneUSD(const std::string& path, const std::string& document);
}

#endif
