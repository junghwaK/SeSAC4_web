// const func1 = new Promise( ( resolve, reject ) => {
//     var flag = true;
//     if ( flag ) resolve( "sucess" );
//     else reject("fail");
// })

// func1.then( value => {
//     console.log( value );
// }).catch( err => {
//     console.log( err );
// });







//callback hell -> promise method

// function login(id, pw, cb) {
//     setTimeout(() => {
//         console.log("사용자 입장");
//         cb(id);
//     },3000);
// }

// function getVideo( id, cb ) {
//     setTimeout(() => {
//         cb( ['아이언맨1', '아이언맨2']);
//     }, 2000);
// }

// function getDetail( video, cb ) {
//     setTimeout(() => {
//         cb("비디오 제목은 : " + video );
//     }, 1000);
// }
// login('kim', '1234', 'user' => {
//     console.log('user님 환영');
//     getVideo(user,(videos) => {
//         console.log(videos);
//         getDetail(vidoes[0], title => {
//             console.log(title);
//         });
//     });
// });

// below 




function login(id, pw) {
    return new Promise( function (resolve, reject ) {
        setTimeout(function() {
            console.log( "사용자 입장" );
            resolve(id);
        }, 3000);
    })
}
function getVideo(id) {
    return new Promise( function(resolve, reject){
        setTimeout( function() {
            resolve(['ironman1', 'ironman2']);
        }, 2000);
    });
}
function getDetail(video) {
    return new Promise( function( resolve, reject ){
        setTimeout(function() {
            resolve( "The name of video: " + video);
        });
    });
}
login( 'kim', '1234' )
    .then( function(user){
        console.log( 'welcome user');
        return getVideo(user);
    })
    .then( function(vidoes){
        console.log( vidoes);
        return getDetail(vidoes[0]);
    })
    .then( function(title){
        console.log( title );
    })
