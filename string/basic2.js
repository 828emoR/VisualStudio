//string/basic2.js

//indexOf(), lastidexOf() : 찾을 문자열의 위치인덱스 반환, 찾는 값이 없으면 -1 반환
let result = '안녕하세요 홍길동입니다, 대구의 홍길동입니다.'.indexOf('홍길동'); //6 반환
result = '안녕하세요 홍길동입니다, 대구의 홍길동입니다.'.indexOf('홍태식'); //-1 반환
result = '안녕하세요 홍길동입니다,서울의 홍길동, 대구의 홍길동입니다.'.indexOf('홍길동' , 15); 

let str1 = '안녕하세요 홍길동입니다,서울의 홍길동,부산의 홍길동, 대구의 홍길동입니다.'.indexOf('홍길동' , 15); 
//let position = str1.indexOf('부산'); //'부산' 의 위치인덱스 출력
//result = str1.indexOf('홍길동', position);//


//charAt(인덱스) : 인덱스 위치의 문자 반환.
//let str2 = str1.charAt(result);

//toLowerCase(), toUpperCase() : 문자변셩.
let str3 ='Lorem ipsum DOLOR sit amet, consectetur Dolor';
console.log(str3.toUpperCase().toLowerCase());

//includes('찾을 문자열') : true, false
result = str3.includes('dolor');
console.log(result);

//search('찾을 문자열') 추가기능:search(정규표현식); 찾을 문자열의 인덱스 반환.
//정규표현식 오브젝트 / /(new RegExp()) , 배열[](new Array(1,2)), 
result = str3.toLowerCase().search('dolor');
result = str3.search('dolor');
result = str3.search(/dolor/i);
console.log(result);

//match('찾을 문자열') : 문자열 or null 반환.
let str4 = 'bad MORNING, GOOD AFTERNOON, good evening, and good night';
result = str4.match('goods');
result = str4.match(/good\s\w+/gi);//표현식// s : 공백, w: 문자 하나
console.log(result);

//replace ('찾을 문자열', '바꿀 문자열');
result =str4.replace('good', 'better');
result =str4.replace(/good/ig , 'better');
result =str4.replace(/\W/ig , '-');// W: 문자 이외 d:숫자 D:숫자이외.

result ='morning1 morning2 morning123'.replace(/\D/g, ''); 

let sso=['970101-1234567', '970101 1234567', '9701011234567', '970101/123456'];
sso.forEach(num => console.log(num.replace(/\D/g, '')));

console.log(result);

//문자열 힙치기 : +, cat
console.log('hello'+'wolrd');
console.log