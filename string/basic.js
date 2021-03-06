//string/basic.js
// 문자열vs 문자열 객체

let str1= '문자열';
console.log(typeof str1);

let str2 = new String('문자열'); //new로 생성되는 오브젝트는 string타입
console.log(typeof str2);

console.log(str1 == str2);//비교연산자 == 값을 비교.
console.log(str1 === str2);//비교연산자 ===는 값과 타입을 비교함.

let result = str1.substring(0.2); // index:0 ~ index:2 까지의 값을 잘라서 가져옴
console.log(result);
result =str2.substr(0.2); // index:0 크기 2개 잘라내기
console.log(result);

const cal1 = '1 + 2 * 3';//문자열이 아니므로 사용불가
const cal2 = new String('1 + 2 * 3');//오브젝트 타입

//eval() : 믄자열 => 수치로 변경
console.log(eval(cal1)); //1+2*3=>7
console.log(eval(cal2)); //object타입은 eval 타입을 써도 object임.
console.log(eval(cal2.valueOf()));//object 를 수치로 변경해줌 

//trim() : 좌우의 여백을 잘라내기
console.log(' 문자열 공백 테스트 '.trim());
console.log(' 문자열 공백 테스트 ' .trimStart().trimEnd());


//문자열의 공백을 제거
result = ' 문자열 공백 테스트 '.split('');// 매개값을 기준으로 문장 잘라서 배열
result = result.filter(function(val){
  return val;
}); //배열의 각
  //['', '문자열','공백','','테스트','']
console.log(result);

console.log(result.join(''));

' 문자열 공백 테스트 '.split(' ').filter(length => 10).join(', ')
//자바스크립트 boolean 값: null, '' , indefined =>false
if (!null){// null, false
  console.log('false 값')
}

if ('문자열'){// null, false
  console.log('false 값')
}

// slice, substring, substr(Deprecated);
console.log('안녕하세요, 반갑습니다.'.slice(0.-6));//인덱스 값을 기준으로 0~5 잘라내기
console.log('안녕하세요, 반갑습니다.'.substring(0, 6));//인덱스 값을 기준으로 0~5 잘라내기
console.log('안녕하세요, 반갑습니다.'.substr(2, 3));//인덱스 값을 기준으로 0~5 잘라내기

// toString(문자열로 변환).
let num1 = 123;
console.log (typeof num1);
num1 = num1.toString();
console.log(typeof num1);

true.toString;//true

let obj = {
  key: 'Hong',
  value: 15
}
console.log(obj.toString());
console.log(obj.key.toString());
console.log(obj.value.toString());