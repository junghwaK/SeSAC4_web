
function call( name){
    return new Promise (function (resolve, reject) {
        setTimeout(function() {
            resolve(name);
        }, 1000);
    })
}
function back(  ){
    return new Promise( function (resolve, reject) {
        setTimeout(function(){
            resolve("back");
        }, 1000 );
    });
}
function hell(  ){
    return new Promise( function (resolve, reject){
        setTimeout(function(){
            resolve("hell");
        }, 1000);
    })
}
async function exec (){
    let name = await call ("kim")
        console.log( name + "반가워" );
    let txt = await back() 
        console.log(txt + "을 실행했구나");
    let message = await hell ()
        console.log ( "여기는" + message);
}

exec();