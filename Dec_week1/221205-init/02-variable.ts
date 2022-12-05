// : 타입 표기(type Annotation)
let atr: string = 'hi';
let num: number = 1;
let flag: boolean = true;
let age: number | string;
age = 10;
age = 'a';
age = true; //boolean은 허용안해서 얘는 안됨
let any: any; //type을 지정하지않고 모든 타입을 이용할 때

//Array
let arr1: number[] = [1, 2, 3, 4, 5];
let arr2: string[] = ['a', 'b', 'c', 'd'];
let arr3: Array<number> = [1, 2, 3, 4, 5];

//tuple : 배열이 정해져있는친구들, 타입과 길이가 지정되어있다. 
let arr4: [string, number] = ['str', 1];
arr4[1].concat() //concat은 문자연결하는 애라서 안됨 []안에 넘버가 들어가기 때문

//Enum: c나 java를 할 때 본다.
enum Names { 홍길동, 코딩온, 새싹}
let name1: Names = Names.홍길동; //{}안의 친구들만 선택 가능하다
name1 = Names.코딩온;

// void 
// 함수 : 반환값이 없는 친구 / 변수 undefined와 null만 들어갈 수 있다. 
let void1: void = undefined;
function void2(): void {
    console.log('11');
}

// never : 함수에 사용. 함수의 끝에 절대 도달하지 않는다. 잘못실행하면 안끝납니다,,
function neverEnd(): never{
    while(true){

    }
}

let test: any; //모든 타입 허용
test = 1;
test = [1, 2, 3];

let test2: object; //기본타입을 제외한 나머지 모두 (array, tuple 등)
// test2 = 1;
test2 = [1, 2, 3];
