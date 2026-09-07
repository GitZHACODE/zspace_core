#pragma once

#include <zspace/zCore/base/zTypeDef.h>
#include <zspace/zInterface/functionsets/zFnGraph.h>
#include <zspace/zInterface/functionsets/zFnMesh.h>
#include <zspace/zInterface/objects/zObjectGraph.h>
#include <zspace/zInterface/objects/zObjectMesh.h>

#include <vector>

#define ZSPACE_SKETCH_PARAM_FLOAT(NAME, LABEL, DEFAULT_VALUE, MIN_VALUE, MAX_VALUE, STEP_VALUE, PRECISION_VALUE)
#define ZSPACE_SKETCH_PARAM_INT(NAME, LABEL, DEFAULT_VALUE, MIN_VALUE, MAX_VALUE, STEP_VALUE)
#define ZSPACE_REGISTER_SKETCH_AUTO(SKETCH_ID)

namespace zspace_live
{
	struct SketchPointDraw
	{
		zSpace::zPoint position;
		zSpace::zColor color = zSpace::zColor(1, 0, 0, 1);
		float size = 7.0f;
	};

	struct SketchLineDraw
	{
		zSpace::zPoint start;
		zSpace::zPoint end;
		zSpace::zColor color = zSpace::zColor(0, 0, 0, 1);
		float weight = 1.0f;
	};

	struct SketchVectorDraw
	{
		zSpace::zPoint origin;
		zSpace::zVector vector;
		zSpace::zColor color = zSpace::zColor(0.0f, 0.45f, 1.0f, 1.0f);
		float weight = 1.0f;
	};

	struct SketchPolygonDraw
	{
		zSpace::zPointArray positions;
		zSpace::zColor color = zSpace::zColor(0, 0, 0, 1);
		float weight = 1.0f;
	};

	class SketchScene
	{
	public:
		void clear()
		{
			mesh_ = nullptr;
			points_.clear();
			lines_.clear();
			vectors_.clear();
			polygons_.clear();
		}

		void draw(zSpace::zObjectMesh& mesh) { mesh_ = &mesh; }

		void draw(zSpace::zObjectGraph& graph, zSpace::zColor color = zSpace::zColor(0.0f, 0.75f, 0.95f, 1.0f), float weight = 2.0f)
		{
			zSpace::zFnGraph graphFn(graph);
			zSpace::zPointArray positions;
			zSpace::zIntArray edgeConnects;
			zSpace::zColorArray vertexColors;
			zSpace::zColorArray edgeColors;
			zSpace::zDoubleArray edgeWeights;
			graphFn.getVertexPositions(positions);
			graphFn.getEdgeData(edgeConnects);
			graphFn.getVertexColors(vertexColors);
			graphFn.getEdgeColors(edgeColors);
			graphFn.getEdgeWeights(edgeWeights);

			for (std::size_t i = 0; i < positions.size(); ++i)
			{
				const zSpace::zColor vertexColor = i < vertexColors.size()
					? vertexColors[i]
					: color;
				drawPoint(positions[i], vertexColor, 7.0f);
			}
			for (std::size_t i = 0; i + 1 < edgeConnects.size(); i += 2)
			{
				const int a = edgeConnects[i];
				const int b = edgeConnects[i + 1];
				if (a < 0 || b < 0) continue;
				if (static_cast<std::size_t>(a) >= positions.size() || static_cast<std::size_t>(b) >= positions.size()) continue;
				const std::size_t edgeId = i / 2;
				const zSpace::zColor edgeColor = edgeId < edgeColors.size()
					? edgeColors[edgeId]
					: color;
				const float edgeWeight = edgeId < edgeWeights.size()
					? static_cast<float>(edgeWeights[edgeId])
					: weight;
				drawLine(positions[a], positions[b], edgeColor, edgeWeight);
			}
		}

		void drawPoint(const zSpace::zPoint& position, zSpace::zColor color = zSpace::zColor(1, 0, 0, 1), float size = 7.0f)
		{
			points_.push_back({ position, color, size });
		}

		void drawPoints(const zSpace::zPointArray& positions, zSpace::zColor color = zSpace::zColor(1, 0, 0, 1), float size = 7.0f)
		{
			for (const auto& position : positions) drawPoint(position, color, size);
		}

		void drawLine(const zSpace::zPoint& start, const zSpace::zPoint& end, zSpace::zColor color = zSpace::zColor(0, 0, 0, 1), float weight = 1.0f)
		{
			lines_.push_back({ start, end, color, weight });
		}

		void drawPolyline(const zSpace::zPointArray& positions, bool closed = false, zSpace::zColor color = zSpace::zColor(0, 0, 0, 1), float weight = 1.0f)
		{
			if (positions.size() < 2) return;
			for (std::size_t i = 0; i + 1 < positions.size(); ++i)
				drawLine(positions[i], positions[i + 1], color, weight);
			if (closed) drawLine(positions.back(), positions.front(), color, weight);
		}

		void drawPolygon(const zSpace::zPointArray& positions, zSpace::zColor color = zSpace::zColor(0, 0, 0, 1), float weight = 1.0f)
		{
			if (positions.size() >= 3) polygons_.push_back({ positions, color, weight });
			drawPolyline(positions, true, color, weight);
		}

		void drawVector(const zSpace::zPoint& origin, const zSpace::zVector& vector, zSpace::zColor color = zSpace::zColor(0.0f, 0.45f, 1.0f, 1.0f), float weight = 1.0f)
		{
			vectors_.push_back({ origin, vector, color, weight });
		}

		zSpace::zObjectMesh* mesh() const { return mesh_; }
		const std::vector<SketchPointDraw>& points() const { return points_; }
		const std::vector<SketchLineDraw>& lines() const { return lines_; }
		const std::vector<SketchVectorDraw>& vectors() const { return vectors_; }
		const std::vector<SketchPolygonDraw>& polygons() const { return polygons_; }
		bool hasDrawables() const { return mesh_ || !points_.empty() || !lines_.empty() || !vectors_.empty() || !polygons_.empty(); }

	private:
		zSpace::zObjectMesh* mesh_ = nullptr;
		std::vector<SketchPointDraw> points_;
		std::vector<SketchLineDraw> lines_;
		std::vector<SketchVectorDraw> vectors_;
		std::vector<SketchPolygonDraw> polygons_;
	};

	namespace sketch
	{
		const char* name();
		const char* description();
		const char* author();
		void setup();
		void update(float deltaTime);
		void draw(SketchScene& scene);
		void setParam(const char* name, double value);
	}
}
