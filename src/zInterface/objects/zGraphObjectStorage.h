#ifndef ZSPACE_GRAPH_OBJECT_STORAGE_H
#define ZSPACE_GRAPH_OBJECT_STORAGE_H

#pragma once

#include <src/zCore/geometry/detail/zGraphEdgeListStorage.h>
#include <src/zCore/geometry/detail/zGraphStorage.h>
#include <zspace/zInterface/objects/zObjectGraph.h>

#include <memory>
#include <stdexcept>
#include <utility>

namespace zSpace
{
	class zObjectGraph::Impl
	{
	public:
		detail::zGraphEdgeListStorage edgeList;
		mutable std::unique_ptr<zGraph> topology;
		mutable bool topologyDirty = true;
		mutable bool edgeListDirty = false;
		// Once writable topology escapes, queries retain the legacy synchronization
		// path: a caller may write through that reference again after a query.
		mutable bool topologyMutableAccess = false;
		// A flat pointer can remain valid through first materialization. Keep
		// legacy read/sync side effects until that storage is actually replaced.
		mutable bool flatMutableAccess = false;
#ifdef ZSPACE_GRAPH_PROFILE
		mutable std::size_t topologyBuilds = 0;
		mutable std::size_t edgeListSyncs = 0;
#endif

		Impl() = default;
		Impl(const Impl& other)
			: edgeList(other.edgeList),
			  topology(other.topology ? std::make_unique<zGraph>(*other.topology) : nullptr),
			  topologyDirty(other.topologyDirty),
			  edgeListDirty(other.edgeListDirty),
			  topologyMutableAccess(other.topologyMutableAccess),
			  flatMutableAccess(other.flatMutableAccess)
		{
		}
	};

	class zGraphObjectStorage
	{
		static void buildTopology(const zObjectGraph& object)
		{
			auto& impl = *object.impl;
			if (impl.edgeListDirty) syncEdgeList(object);
			if (impl.topology && !impl.topologyDirty) return;

			std::string error;
			if (!impl.edgeList.validate(&error)) throw std::invalid_argument(error);

			auto topology = std::make_unique<zGraph>();
			zPointArray positions = impl.edgeList.positions;
			zIntArray edgeConnects = impl.edgeList.edgeVertexIndices;
			topology->create(positions, edgeConnects, false);
			topology->vertexColors = impl.edgeList.vertexColors;
			topology->edgeColors = impl.edgeList.edgeColors;
			topology->vertexWeights = impl.edgeList.vertexWeights;
			topology->edgeWeights = impl.edgeList.edgeWeights;

			impl.topology = std::move(topology);
			impl.topologyMutableAccess = false;
#ifdef ZSPACE_GRAPH_PROFILE
			++impl.topologyBuilds;
#endif
			impl.topologyDirty = false;
			impl.edgeListDirty = false;
		}

		static void syncEdgeList(const zObjectGraph& object)
		{
			auto& impl = *object.impl;
			if (!impl.edgeListDirty || !impl.topology) return;
#ifdef ZSPACE_GRAPH_PROFILE
			++impl.edgeListSyncs;
#endif
			zGraph& topology = *impl.topology;

			zPointArray positions;
			zColorArray vertexColors;
			zDoubleArray vertexWeights;
			std::vector<int> vertexMap(topology.vertices.size(), -1);
			for (std::size_t i = 0; i < topology.vertices.size(); ++i)
			{
				if (!topology.vertices[i].isActive()) continue;
				vertexMap[i] = static_cast<int>(positions.size());
				positions.push_back(topology.vertexPositions[i]);
				if (i < topology.vertexColors.size()) vertexColors.push_back(topology.vertexColors[i]);
				if (i < topology.vertexWeights.size()) vertexWeights.push_back(topology.vertexWeights[i]);
			}

			zIntArray edgeConnects;
			zColorArray edgeColors;
			zDoubleArray edgeWeights;
			for (std::size_t i = 0; i < topology.edges.size(); ++i)
			{
				if (!topology.edges[i].isActive()) continue;
				const int he0 = topology.edges[i].getHalfEdge(0);
				const int he1 = topology.edges[i].getHalfEdge(1);
				if (he0 < 0 || he1 < 0 ||
					he0 >= static_cast<int>(topology.halfEdges.size()) ||
					he1 >= static_cast<int>(topology.halfEdges.size())) continue;

				const int oldA = topology.halfEdges[he1].getVertex();
				const int oldB = topology.halfEdges[he0].getVertex();
				if (oldA < 0 || oldB < 0 ||
					oldA >= static_cast<int>(vertexMap.size()) ||
					oldB >= static_cast<int>(vertexMap.size()) ||
					vertexMap[oldA] < 0 || vertexMap[oldB] < 0) continue;

				edgeConnects.push_back(vertexMap[oldA]);
				edgeConnects.push_back(vertexMap[oldB]);
				if (i < topology.edgeColors.size()) edgeColors.push_back(topology.edgeColors[i]);
				if (i < topology.edgeWeights.size()) edgeWeights.push_back(topology.edgeWeights[i]);
			}

			detail::zGraphEdgeListStorage rebuilt;
			rebuilt.set(positions, edgeConnects);
			if (vertexColors.size() == positions.size()) rebuilt.vertexColors = std::move(vertexColors);
			if (vertexWeights.size() == positions.size()) rebuilt.vertexWeights = std::move(vertexWeights);
			if (edgeColors.size() == rebuilt.numEdges()) rebuilt.edgeColors = std::move(edgeColors);
			if (edgeWeights.size() == rebuilt.numEdges()) rebuilt.edgeWeights = std::move(edgeWeights);

			impl.edgeList = std::move(rebuilt);
			impl.flatMutableAccess = false;
			impl.edgeListDirty = false;
			impl.topologyDirty = false;
		}

	public:
#ifdef ZSPACE_GRAPH_PROFILE
		static std::pair<std::size_t, std::size_t> profileCounts(const zObjectGraph& object)
		{
			return { object.impl->topologyBuilds, object.impl->edgeListSyncs };
		}
#endif
		static zGraph& get(zObjectGraph& object)
		{
			buildTopology(object);
			object.impl->topologyMutableAccess = true;
			object.impl->edgeListDirty = true;
			return *object.impl->topology;
		}

		// Internal read-only access. zHEGeomTypes getters are not const, hence
		// the reference type; callers must neither modify nor expose it.
		static zGraph& inspect(zObjectGraph& object)
		{
			if (object.impl->topologyMutableAccess || object.impl->flatMutableAccess) return get(object);
			buildTopology(object);
			return *object.impl->topology;
		}

		static const zGraph& get(const zObjectGraph& object)
		{
			buildTopology(object);
			return *object.impl->topology;
		}

		static const detail::zGraphEdgeListStorage& read(const zObjectGraph& object)
		{
			syncEdgeList(object);
			return object.impl->edgeList;
		}

		static detail::zGraphEdgeListStorage& edit(zObjectGraph& object)
		{
			syncEdgeList(object);
			object.impl->topologyDirty = true;
			object.impl->topology.reset();
			object.impl->topologyMutableAccess = false;
			return object.impl->edgeList;
		}

		static detail::zGraphEdgeListStorage& expose(zObjectGraph& object)
		{
			auto& data = edit(object);
			object.impl->flatMutableAccess = true;
			return data;
		}

		static void set(zObjectGraph& object, const zPointArray& positions, const zIntArray& edgeConnects)
		{
			object.impl->edgeList.set(positions, edgeConnects);
			object.impl->topology.reset();
			object.impl->topologyMutableAccess = false;
			object.impl->topologyDirty = true;
			object.impl->edgeListDirty = false;
		}

	};
}

#endif
