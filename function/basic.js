//funtion/basic.js

function sum(num1, num2){
  console.log(num1, num2);
  return num1 + num2;
}
//=> let sum = function(num1, num2){ }
let result = sum(10, 20, 30);
console.log('결과는' + result);

let myfnc = function(val1, val2) {
  var myVal = 10;
  return val1 + val2 + myVal;
}
console.log(typeof myfnc, myfnc);
result = myfnc(10,20);
console.log(result);

let mysum = myfnc;
result = mysum(20,30);
console.log(result);

const person = {
  fullName: 'hong',
  age: 20,
  height:175.3
}
const person1 = {
  fullName: 'hwang',
  age: 22,
  height:178.4
}
const person2 = {
  fullName: 'park',
  age: 25,
  height:165.3
}
//함수 표현식 myinfo
let myinfo = function (obj){
  var info = `${obj.fullName}이고${obj.age}살이고 키는 ${obj.height}입니다.`
  return info;
}
result = myinfo(person);
console.log(result);




//배열을 활용.출력.
const persons = [person, person1, person2];
for(let pers of persons) { 
  let result = myinfo(person);
  console.log(result);
}

console.clear();
//자바스크립트에서 문자열, 숫자, boolean, 배열 =>매개값으로 사용
//함수를 매개변수로 사용가능.
// let funcParam = function(val, ind, ary){ 
let funcParam = (val, ind, ary) => { /*람다식으로 표현 가능.*/
  // console.log(val, ind, ary);
  console.log(myinfo(val));
};
persons.forEach(funcParam); //메소드의 매개값으로 활용되는 함수 => 콜백함수
//배열에 들어있는 개수만큼 