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

const newPersons = persons.map(function(val, idx) {

  let newObj = {};//오브젝트 타입을 선언
  newObj.index = idx + 1;//오브젝트에게 0부터시작해 1씩 증가하는 속성을 추가한다
  newObj.index = idx;
  newObj.fName = val.fullName;
  newObj.age = val.age;
  newObj.height = val.height;

  return newObj;
});

console.log(newPersons);

function tableList(personAry) {
  document.write('<table border=1>');
  document.write(`<tr><th>순번</th><th>이름</th><th>나이</th><th>키</th></tr>`);

  for(let person of personAry){//line 생성
    document.write('<tr>');
    for(let field in person){//칼럼생성
      document.write(`<td>${person[field]}</td>`);
    }
    document.write('</tr>');
  }
  document.write('</table>');
}
//함수실행.
tableList(newPersons);