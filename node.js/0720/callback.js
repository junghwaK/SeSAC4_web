function func1(callback){
    callback();
}
function func2(){
    console.log( "HELLO");
}

func1(func2)