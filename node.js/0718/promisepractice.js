// function call(name, cb ){
//     setTimeout( function(){
//         console.log( name );
//         cb( name );
//     }, 1000 );
// }
// function back( cb ){
//     setTimeout( function() {
//         console.log( "back" );
//         cb( "back" );
//     }, 1000 );
// }
// function hell( cb ){
//     setTimeout( function() {
//         cb( "callback hell" );
//     }, 1000 );
// }
// call( 'kim', function( name ){
//     console.log( name + "반가워" );
//     back( function(txt) {
//         console.log( txt + "을 실행했구나" );
//         hell( function( message ){
//             console.log( "여기는 " + message );
//         } );
//     });
// });

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
call('kim')
    .then(function(name){
        console.log( name + "반가워" );
        return back(name);
    })
    .then(function(txt){
        console.log(txt + "을 실행했구나");
        return hell(txt);
    })
    .then(function(messaage){
        console.log ( "여기는" + messaage);
    })