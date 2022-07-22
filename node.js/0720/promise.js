function promise(flag){
    return new Promise( function( resolve, reject){
        if(flag) {
            resolve( "then 으로 연결 ");
        } else {
            reject("catch 로 연결")
        }
    });
}

promise1(true)
    .then( function(result){
        console.log( "then :", result);
    })
    .catch(function(err){
        console.log( "catch :", err);
    });

promise1(false)
    .then( function(result){
        console.log( "then :", result);
    })
    .catch(function(err){
        console.log( "catch :", err);
    });
    