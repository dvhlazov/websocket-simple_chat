import httpRunner from './runners/http.js';
import dbRunner from './runners/db.js';
import fileRunner from './runners/file.js';
import wsRunner from './runners/ws.js';
import rtcRunner from './runners/rtc.js';


await httpRunner();
await dbRunner();
await fileRunner();
await wsRunner();
await rtcRunner();