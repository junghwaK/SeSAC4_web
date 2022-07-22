// const { exec } = require("child_process");

const fs = require("fs").promises;

// fs.readFile("./test.txt", function(err, data){
//     if( err ) throw err;

//     console.log( data );

//     console.log( data.toString() );
// });

// fs.writeFile('./write.txt', 'Hello')
//     .then(() => {
//         console.log( "write it all" );
//     })
//     .catch((err) => {
//         console.log( err );
//     });

// fs.copyFile("./write.txt", "./new.txt")
//     .then(() => {
//         console.log("copy all done");
//     })
//     .catch((err) => {
//         console.log( err );
//     });

async function exec(){
    await fs.writeFile("./write.txt", "HEllO")
    await fs.copyFile("./write.txt", "./new2.txt")
}
exec();