#pragma once
#include <fstream>
#include <sstream>
#include <map>

// Optional local fixture: the first 13 faces of CCF_05a border its 24 peak edges.
void testCurvedOrigamiInput(const char* path, double facet = .7, double axial = 20)
{
    using namespace zSpace;
    std::ifstream input(path);
    if (!input) throw std::runtime_error("Cannot open curved origami fixture.");
    zPointArray points; zIntArray counts, connects;
    std::map<std::pair<int,int>,std::vector<int>> uses;
    std::string line;
    while (std::getline(input,line)) {
        std::istringstream row(line); std::string kind; row >> kind;
        if (kind=="v") {
            double x,y,z;
            if(!(row>>x>>y>>z)) throw std::runtime_error("Invalid fixture vertex.");
            points.emplace_back(x,y,z);
        }
        if (kind!="f") continue;
        std::vector<int> face;std::string token;
        while(row>>token) {
            const int id=std::stoi(token)-1;
            if(id<0||id>=static_cast<int>(points.size())) throw std::runtime_error("Invalid fixture vertex index.");
            face.push_back(id);
        }
        if(face.size()<3) throw std::runtime_error("Invalid fixture face.");
        for(std::size_t j=0;j<face.size();++j) {
            const int a=face[j],b=face[(j+1)%face.size()];
            uses[{std::min(a,b),std::max(a,b)}].push_back(static_cast<int>(counts.size()));
        }
        counts.push_back(static_cast<int>(face.size()));connects.insert(connects.end(),face.begin(),face.end());
    }
    if(points.size()!=81||counts.size()!=61) throw std::runtime_error("Expected CCF_05a topology.");
    zObjectMesh mesh;zFnMesh fn(mesh);fn.create(points,counts,connects);
    zFnMeshDynamics dynamics;dynamics.create(mesh,false);dynamics.prepareOrigami();
    zIntArray edges;fn.getEdgeData(edges);int creaseCount=0;
    for(std::size_t i=0;i<edges.size();i+=2) {
        const auto& adjacent=uses.at({std::min(edges[i],edges[i+1]),std::max(edges[i],edges[i+1])});
        if(adjacent.size()==2 && (adjacent[0]<13)!=(adjacent[1]<13)) {
            dynamics.setOrigamiCrease(static_cast<int>(i/2),-1,179*3.141592653589793/180);++creaseCount;
        }
    }
    if(creaseCount!=24) throw std::runtime_error("Expected 24 peak edges.");
    zOrigamiSettings settings;settings.foldAmount=.62;settings.facet=facet;settings.axial=axial;
    zOrigamiDiagnostics diagnostics;
    for(int i=1;i<=300000;++i) {
        dynamics.stepOrigami(settings,.01,diagnostics);
        if(i%60000==0) std::cout << "substeps=" << i << " crease=" << diagnostics.maxCreaseAngleError*180/3.141592653589793
            << " panel=" << diagnostics.maxPanelAngleError*180/3.141592653589793
            << " strain=" << diagnostics.maxStrain << " speed=" << diagnostics.maxSpeed << std::endl;
    }
    if(!std::isfinite(diagnostics.maxAngleError)) throw std::runtime_error("Nonfinite curved fixture.");
}
