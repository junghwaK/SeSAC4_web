

console.log( process.version );
console.log( process.arch );
console.log( process.platform );
console.log( process.uptime() );
console.log( process.exePath );
console.log( process.cpuUsage() );
console.log( process.env );

const os =require("os");

console.log( os.hostname() );

const path = require("path");
//어떤 파일경로를 조작할지가 있어야한다.
const string = __filename;
console.log( path.extname(string) );
