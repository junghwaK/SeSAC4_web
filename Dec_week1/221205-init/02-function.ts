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

let person = {name:'코딩온', age: 10};
function getInfo(obj: {name: string, age: number}){

}
//interface는 미리 정해진 규칙을 말한ㄷ다. 
interface PersonData{
    readonly name: string;
    age: number;
    nickname?: string;
}
function getInfo2(obj: PersonData){

}
// getInfo(person)
let person2:PersonData = {name:'코딩온', age: 10}; //여러군데에서 사용할때 interface를 사용함
person2.age = person2.age + 1;
//readonly하면 읽기전용 속성이된다. 
// person2.name = "dd";

interface login {
    (id: string, pw: string):boolean
};
let loginUser:login = (id, pw) => {
    return true; //login이 boolean이여서 ture;로 return해도 오류가 안남
}

interface Book {
    title: string;
    getInfo(): void;
    changeTitle(newTitle: string): void;
}
//바로위의 규칙들이 다 지켜져서 아래에 있어야합니다
class MyBook implements Book {
    title: 'The story of the book';
    getInfo(){
        console.log("information")
    }
    changeTitle(newTitle: string): void{

    }
}