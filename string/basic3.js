//string/basic3.js
//'hello', "hello", `hello` => 문자열
let str1 = 'hello';

console.log(`${str1}`);
let str2= `Welcome
to my home,
This is house.
`;
console.log(str2);


str2= `Welcome\nto my home,\nThis is house.\n`;
console.log(str2);

let age = 22;
console.log(`${age>20? '청소년':'성인'}`);