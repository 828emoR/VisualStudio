//array/basic.js

//배열 선언 : [], new Array();
let arr = [1, 2];
let newAry = [3, 4, 5, 6];

//추가 : push: 마지막 위치, unshift:첫번째 위치
arr.push(3);
arr.unshift(0);

//제거: pop(), shift();
arr.pop();
arr.shift();

//forEach
newAry.forEach(function (elem){
  // arr.push(elem);
  arr.unshift(elem); //6, 5, 4, 3, 1, 2
});

arr.pop(); //6, 5, 4, 3, 1
arr.pop(); //6, 5, 4, 3
arr.shift(); //5, 4, 3

//splice(위치, 크기, 대체값) : 추가 , 수정, 삭제
newAry.forEach(function (elem){
  arr.splice(1, 0, elem)//5,6, 5, 4, 3, 4, 3
                        //
});

let names = [];
let anonym = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptates nostrum reiciendis, at quidem alias inventore dolor et vel. Neque at, autem reiciendis quidem magni cumque iste porro eligendi in'
anonym.split(' ').forEach(function (elem){
  names.push(elem);
});
console.log(arr.toString());//배열, 배열,....
console.log(names); //배열,배열...

//forEach() : 반환 x
//map(): 각 요소 => mappring 작업 (다른 형태 반환)
//filter() :return 조건을 만족하는 값만 반환.
let result = names.map(function (elem){
  return elem.toUpperCase();
});//새로운 배열

result = result.filter(function (elem){
  return elem.length>=10;
});

result = names//
  .map(elem => elem.toUpperCase())//
  .filter(elem => elem.length >= 10); //chain rules
console.log(result);