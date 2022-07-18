const url = require("url");
const { URL } = url;

const string = 
"https://search.naver.com/search.naver?where=image&sm=tab_jum&query=%EC%83%88%EC%8B%B9#imgId=image_sas%3Anshopping6741014310_867767840"

const naver = new URL(string);


console.log( url.format( naver ) );
console.log( url.parse(string) );

console.log( naver.searchParams );
