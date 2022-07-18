const os =require("os");

console.log(os.freemem());
console.log(os.totalmem());
console.log(os.homedir());


const path = require("path");

console.log(path.sep);
console.log(path.extname(__filename));
console.log(path.parse(__filename));