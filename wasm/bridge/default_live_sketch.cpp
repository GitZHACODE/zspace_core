#include "live_sketch.h"

namespace zspace_live::sketch
{
	const char* name() { return "zspace_core"; }
	const char* description() { return "Default zspace_core WASM bridge scene."; }
	const char* author() { return "zspace_core"; }
	void setup() {}
	void update(float) {}
	void draw(SketchScene&) {}
	void setParam(const char*, double) {}
}
