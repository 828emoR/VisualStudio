//practice2.js

//얘는 오브젝트가 아니다.
const num1=10;

/*하단 구문들은 모드 하나의 오브젝트이다. 자바에서는 인스턴스 로도 부르는데. 
각자가 참조 및 기능을 할 수 있으므로 중요하다.*/

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

/* "{}"기호는 오브젝트 표현,
"[]"기호는 배열의 표시 */

const persons = [person, person1, person2];

const newPersons = persons.map(function(val, idx){
  return val.fullName;
});
console.log(newPersons);

let avgAge = 0;
let sum = 0
for(let person of persons){
    sum += person.age;
}


avgAge = sum / persons.length;
console.log(`평균나이: ${avgAge}`)

console.clear();
sum = 0;
persons.forEach(function (val){
  sum += val.age;
});
let avgAgeFnc = function (val){
  sum += val.age;
}

let avgHeightFnc = function (val){
  sum+= val.height;
}
sum = 0;
persons.forEach(avgAgeFnc);
avgAge = sum / persons.length;
console.log(`평균나이: ${avgAge}`)

let tag = "";
// * 이름, 나이, 키
// * 이름, 나이, 키
// * 이름, 나이, 키
persons.forEach(function (val,idx){
  if (idx ==0){
    tag += '<ul>';
  }
  tag+=`<li>${val.fullName}, ${val.age}, ${val.height} </li>`;
  if(idx == persons.length - 1){
    tag += '</ul>';
  }
});
let over170 = function (val, idx) {
  if (idx ==0){
    tag += '<ul>';
  }
  if (val.height >=170)
    tag+=`<li>${val.fullName}, ${val.age}, ${val.height} </li>`;
  if(idx == persons.length - 1){
    tag += '</ul>';
  }
}
persons.forEach(over170);
console.log(tag);
document.write(tag);