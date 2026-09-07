#pragma once

#include <sys/stat.h>
#include <unistd.h>

#ifndef _mkdir
#define _mkdir(path) mkdir((path), 0777)
#endif

#ifndef _rmdir
#define _rmdir(path) rmdir(path)
#endif

#ifndef _getcwd
#define _getcwd(buffer, size) getcwd((buffer), (size))
#endif

#ifndef _chdir
#define _chdir(path) chdir(path)
#endif
