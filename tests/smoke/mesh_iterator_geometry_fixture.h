#pragma once

// Golden triangulation order is captured from the pre-migration iterator.
void testMeshIteratorGeometry()
{
	using namespace zSpace;
	zObjectMesh mesh;
	zFnMesh fn(mesh);
	zPointArray positions = {zPoint(0,0,0), zPoint(2,0,0), zPoint(2,2,0),
		zPoint(1,1,0), zPoint(0,2,0)};
	zIntArray counts = {5}, connects = {0,1,2,3,4};
	fn.create(positions, counts, connects);
	for (zItMeshEdge edge(mesh); !edge.end(); edge++) {
		zIntArray ids; edge.getVertices(ids);
		zVector expected = (positions[ids[0]] + positions[ids[1]]) * 0.5;
		require((edge.getCenter() - expected).length() < 1e-10, "iterator edge center parity");
		require(std::abs(edge.getLength() - positions[ids[0]].distanceTo(positions[ids[1]])) < 1e-10,
			"iterator edge length parity");
	}
	zItMeshFace face(mesh, 0);
	require(face.getNumVertices() == 5, "iterator face corner count");
	require((face.getCenter() - zVector(1,1,0)).length() < 1e-10, "iterator concave face center");
	int numTris = 0; zIntArray tris;
	face.getTriangles(numTris, tris);
	require(tris == zIntArray({1,2,3,0,1,3,0,3,4}), "iterator concave golden triangle order");
	require(numTris == 3, "iterator concave triangle count");
	face.updateNormal();
	require((face.getNormal() - zVector(0,0,6)).length() < 1e-10,
		"iterator polygon updateNormal retains area-weighted normal");

	zObjectMesh square; zFnMesh squareFn(square);
	zPointArray squarePoints = {zPoint(0,0,0),zPoint(1,0,0),zPoint(1,1,0),zPoint(0,1,0)};
	zIntArray squareCounts = {4}, squareConnects = {0,1,2,3};
	squareFn.create(squarePoints, squareCounts, squareConnects);
	zItMeshFace squareFace(square,0);
	zPointArray offsets;
	squareFace.getOffsetFacePositions(0.1, offsets);
	zPointArray expectedOffsets = {zPoint(.1,.1,0),zPoint(.9,.1,0),zPoint(.9,.9,0),zPoint(.1,.9,0)};
	require(offsets.size() == expectedOffsets.size(), "iterator offset count");
	for (std::size_t i=0;i<offsets.size();++i)
		require((offsets[i]-expectedOffsets[i]).length()<1e-10, "iterator constant offset parity");
	numTris = 0; tris.clear();
	squareFace.getTriangles(numTris,tris);
	require(numTris==2 && tris==zIntArray({3,0,1,1,2,3}), "iterator quad golden triangle order");
	zVector volumeCenter(.5f,.5f,1);
	require(std::abs(squareFace.getVolume(tris,volumeCenter,false)+1.0/3.0)<1e-6,
		"iterator supplied-triangle signed pyramid volume");
	require(std::abs(squareFace.getVolume(tris,volumeCenter,true)-1.0/3.0)<1e-6,
		"iterator absolute pyramid volume");
	zIntArray generatedTris;
	require(std::abs(squareFace.getVolume(generatedTris,volumeCenter,false)+1.0/3.0)<1e-6 && generatedTris==tris,
		"iterator auto-triangulated volume matches supplied triangles");
	zVector defaultCenter; generatedTris.clear();
	require(std::abs(squareFace.getVolume(generatedTris,defaultCenter,false))<1e-6 &&
		(defaultCenter-zVector(.5f,.5f,0)).length()<1e-6, "iterator flat volume fills default center");
	zObjectMesh nonManifold; zFnMesh nonManifoldFn(nonManifold);
	zPointArray nmPoints=squarePoints; nmPoints.emplace_back(.5f,-1,0);nmPoints.emplace_back(.5f,0,1);
	zIntArray nmCounts={4,3,3},nmConnects={0,1,2,3,1,0,4,0,1,5};
	nonManifoldFn.create(nmPoints,nmCounts,nmConnects);
	zItMeshFace nmFace(nonManifold,0);generatedTris.clear();
	require(std::abs(nmFace.getVolume(generatedTris,volumeCenter,false)+1.0/3.0)<1e-6,
		"non-manifold quad volume avoids topology construction");
	numTris=0; tris={99};
	squareFace.getTriangles(numTris,tris);
	require(tris==zIntArray({99,3,0,1,1,2,3}), "iterator triangulation retains append convention");
	// Queries must also see changes made through the explicit topology backend.
	zVector moved(0,0,1);
	zMeshObjectStorage::get(square).vertexPositions[0] = moved;
	require((squareFace.getCenter()-zVector(.5f,.5f,.25f)).length()<1e-10,
		"flat geometry synchronizes dirty topology before reading");
	zItMeshVertex squareVertex(square,0);
	squareVertex.setPosition(zPoint(0,0,0));
	require((squareFace.getCenter()-zVector(.5f,.5f,0)).length()<1e-10,
		"flat geometry sees subsequent iterator position edit");

	// The legacy corner-count query returned zero for an exhausted iterator.
	squareFace++;
	require(squareFace.getNumVertices()==0, "inactive face corner count");

	zObjectMesh degenerate; zFnMesh degenerateFn(degenerate);
	zPointArray line = {zPoint(0,0,0),zPoint(1,0,0),zPoint(2,0,0)};
	zIntArray triangleCounts={3}, triangleConnects={0,1,2};
	degenerateFn.create(line,triangleCounts,triangleConnects);
	zItMeshFace degenerateFace(degenerate,0);
	bool rejected=false;
	numTris=0; tris.clear();
	try {degenerateFace.getTriangles(numTris,tris);}
	catch (const std::invalid_argument&) {rejected=true;}
	require(rejected, "degenerate triangulation still reports no ears");
}

void testSmoothBatchAndBounds()
{
	using namespace zSpace;
	zPointArray positions={zPoint(0,0,0),zPoint(1,0,.1f),zPoint(1,1,0),zPoint(0,1,0),zPoint(2,0,0)};
	zIntArray counts={4,3}, connects={0,1,2,3,1,4,2};
	for(bool smoothCorner : {false,true}) {
		zObjectMesh batch,steps; zFnMesh a(batch),b(steps);
		a.create(positions,counts,connects); b.create(positions,counts,connects);
		a.smoothMesh(3,smoothCorner); for(int i=0;i<3;++i)b.smoothMesh(1,smoothCorner);
		zPointArray pa,pb; a.getVertexPositions(pa);b.getVertexPositions(pb);
		require(pa.size()==pb.size(), "batch smooth vertex count");
		for(std::size_t i=0;i<pa.size();++i)require((pa[i]-pb[i]).length()==0,"batch smooth exact positions");
		zIntArray ca,cb,fa,fb; a.getPolygonData(ca,fa);b.getPolygonData(cb,fb);
		require(ca==cb&&fa==fb,"batch smooth exact connectivity");
		zVectorArray na,nb; a.getVertexNormals(na);b.getVertexNormals(nb);
		for(std::size_t i=0;i<na.size();++i)require((na[i]-nb[i]).length()==0,"batch smooth final normal parity");
		zPointArray unchanged=pa; a.smoothMesh(0,smoothCorner);a.getVertexPositions(pa);
		for(std::size_t i=0;i<pa.size();++i)require((pa[i]-unchanged[i]).length()==0,"zero divisions preserve mesh");
	}
	zObjectMesh mesh; zFnMesh fn(mesh);
	fn.create(positions,counts,connects);
	zVector min,max,expectedMin,expectedMax; zUtilsCore utils;
	utils.getBounds(positions,expectedMin,expectedMax);fn.getBounds(min,max);
	require((min-expectedMin).length()==0&&(max-expectedMax).length()==0,"bounds output parity");
	zPoint* raw=fn.getRawVertexPositions();
	fn.getBounds(raw[0],max);
	require((raw[0]-expectedMin).length()==0&&(max-expectedMax).length()==0,"bounds preserves aliased raw output");
	fn.clear();fn.getBounds(min,max);
	require(min.x==10000&&max.x==-10000,"empty bounds retains existing sentinels");
}

void testFlatGeometryTopologyMigration()
{
	using namespace zSpace;
	zObjectMesh mesh,legacy; zFnMesh fn(mesh),old(legacy);
	zPointArray points={zPoint(0,0,0),zPoint(2,0,0),zPoint(2,1,0),zPoint(0,1,0),
		zPoint(.1234567f,0,0),zPoint(.1234567f,0,0),zPoint(-.0000001f,0,0)};
	zIntArray counts={4},connects={0,1,2,3};fn.create(points,counts,connects);old.create(points,counts,connects);
	auto& topology=zMeshObjectStorage::get(legacy);
	for(int precision:{-1,0,3,6,8})for(auto p:points){
		int expected=-1;bool found=topology.vertexExists(p,expected,precision);
		zItMeshVertex actual(mesh,0);bool matched=fn.vertexExists(p,actual,precision);
		require(found==matched&&(!found||actual.getId()==expected),"flat lookup preserves precision, signed zero and last duplicate");
	}
	require(!zMeshObjectStorage::hasTopology(mesh),"position lookup does not create halfedges");
	for(zItMeshEdge edge(mesh);!edge.end();edge++){
		zItMeshEdge reference(legacy,edge.getId());
		require((edge.getVector()-reference.getVector()).length()==0,"flat edge vector preserves legacy direction");
	}
	zItMeshFace face(mesh,0);auto center=face.getCenter(),normal=face.getNormal();
	std::vector<double> offsets={.1,.2,.3,.4};zPointArray flat,reference;
	face.getOffsetFacePositions_Variable(offsets,center,normal,flat);
	zItMeshFace refFace(legacy,0);refFace.getOffsetFacePositions_Variable(offsets,center,normal,reference);
	require(flat.size()==reference.size(),"variable offset output size");
	for(std::size_t i=0;i<flat.size();++i)require((flat[i]-reference[i]).length()==0,"variable offset retains corner order");
	(void)face.getPrincipalCurvature();
	require(!zMeshObjectStorage::hasTopology(mesh),"face-local geometry does not create halfedges");
	zItMeshVertex vertex(mesh,4);vertex.setPosition(zPoint(.7f,0,0));
	zItMeshVertex found(mesh,0);require(fn.vertexExists(zPoint(.7f,0,0),found,6)&&found.getId()==4,"flat position lookup invalidates on edit");
	zObjectMesh copied=mesh;zFnMesh copiedFn(copied);zItMeshVertex copiedVertex(copied,0);
	require(copiedFn.vertexExists(zPoint(.7f,0,0),copiedVertex,6)&&copiedVertex.getId()==4,"copied mesh lookup independent cache");
	// The explicit halfedge API still materializes its backend.
	zItMeshHalfEdge halfEdge(mesh,0);(void)halfEdge;
	require(zMeshObjectStorage::hasTopology(mesh),"explicit halfedge access builds topology");
	// Edge IDs may change on a rebuild, but endpoint-matched attributes must
	// survive and the new IDs/direction must follow first face encounter.
	auto& data=zMeshObjectStorage::edit(mesh);
	data.edgeWeights={10,11,12,13};
	data.faceVertexIndices={0,3,2,1};
	data.rebuildEdges();
	require(data.edgeWeights==zDoubleArray({13,12,11,10}),"edge rebuild preserves endpoint-matched weights");
	require(data.edgeVertexIndices==zIntArray({0,3,2,3,1,2,0,1}),"edge rebuild preserves first-encounter IDs");
	require(data.edgeFirstVertices==zIntArray({0,3,2,1})&&data.edgeUseCounts==zIntArray({1,1,1,1}),"edge rebuild preserves directed starts and uses");
}
