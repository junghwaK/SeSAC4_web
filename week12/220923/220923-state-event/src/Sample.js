import React from 'react';

const Sample = () => {
    const fashion = ["청바지", "패딩", "반팔", "운동화"];
    const fashionList = fashion.map(fashion => <li>{fashion}</li>);

    return(
        <ul>{fashionList}</ul>
    );
}

//map
// let numbers = [1, 2, 3, 4, 5];

// let mul = numbers.map(function(num){
//     return num*num;
// })
// console.log(mul);
//=> 1,4,9,16,25 map함수는 기존배여로 새로운 배열을 만드는 역할을 한다.
// const number = [1,2,3,4,5];
// const result = numbers.map(num => num*num);
// console.log(result);
//위의 코드를 ES6문법으로 작성하면 이렇게 된다. 
//let 대신const, function(){}대신 화살표 함수를 이용한것.


export default Sample;