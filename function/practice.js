//practice.js
const numbers = [23, 45, 32, 55, 34, 72];

let sum = 0;

for(let i = 0; i < numbers.length; i++) {
  sum+=numbers[i];
}
console.log('합: '+sum);

//상기 식과 같은 동작이다.
sum = 0;
for(let number of numbers){
  if(number %2 ==0){
    sum += number;
  }
}
console.log('합: '+sum);


//함수 표현식 1
//let evenSum = ; <임의의 함수 설정.
//evenSum = 짝수 사용
let evenSum = function(pepe){ //굳이 pepe가 아니더라도 원하는 이름 또는 관련된 네이밍을 적당히 넣어주자.
  if(pepe % 2 == 0){
    sum += pepe;
  }
};

//표현식 2
//oddSum = 홀수사용
let oddSum = (pepe, idx) =>{
  console.log(pepe, idx);
  if(pepe % 2 == 1){
    sum+= pepe;
  }
};

//!! 이것도 된다 !!//
/*
numbers.forEach((pepe % 2 == 0){
    sum += pepe;
  }
});
console.log('합: ' + sum);
*/


sum = 0;
numbers.forEach((pepe, idx) => {
  console.log(pepe, idx);
  if(pepe % 2 == 0){
    sum += pepe;
  }
});



numbers.forEach(evenSum);
console.log('합: ' + sum);

