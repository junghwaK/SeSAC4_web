const fs = require("fs").promises;

//^ fs.mkdir("sesac", (err) => {
//^     if (err) throw err;
//^ });

// fs.readFile(".sesac/sesac.txt", function(err,data) {
//     console.log( data );
// })

// fs.appendFile(".sesac/sesac.txt", "반갑습니다", function(err) {
//     if (err) throw err;
//     console.log( 'saved!' );
// });

// fs.copyFile(".sesac/sesac.txt", ".sesac/sesac2.txt", function(err){
//     if (err) throw err;
//     console.log( data );
// });


// fs.rename("sesac2.txt", "new.txt", function(err){
//     if (err) throw err;
//     console.log('File Renamed!')
// })

async function exec(){
    await fs.mkdir("./sesac")
    await fs.writeFile("/sesac.txt", "HEllO")
    await fs.copyFile("./write.txt", "./new2.txt")
}
exec();