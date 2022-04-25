//array /basic.js

//reduce(); map=>새로운 배열, filter()=

const numbers = [23, 4, 77, 51, 63];
let result = numbers.reduce(function(accum, elem, ind, ary){
  console.log(accum, elem, ind, ary);
  return accum;
}, 0 );

//배열요소의 *2 => 새로운 배열
result = numbers.reduce(function(accum, elem){
   accum.push(elem *2);//[46, 8, 154, 102, 126]
   return accum;
},[]);


//filter : 50보다 큰 숫자를 가지는 새로운 배열
result = numbers.reduce(function (accum, elem){
  if(elem >= 50){
    accum.push(elem)
  }
  return accum; // 반환되는 값은 다음 순번의 초기값 (accum)
},[]);
console.log(result);