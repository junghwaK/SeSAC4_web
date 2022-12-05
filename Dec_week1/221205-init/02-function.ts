// function 함수이름 (변수명: 타입) : 반환타입 {}

// const testfunction = () => {
//     return 'test';
// }
// console.log(testfunction);

function sum1(a, b) {
    return a + b;
}
console.log( sum1(1, 'a') );
console.log( sum1(1, null) );
function sum2( a:number, b:number):number {
    return a+b;
}
console.log( sum2(1,2) );
function sum3( a:number, b?:number):number {
    return a + b;
}
console.log( "sum3 : ", sum3(1) );

