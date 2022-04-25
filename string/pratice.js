// string/pratice.js

let str1 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptates nostrum reiciendis, at quidem alias inventore dolor et vel. Neque at, autem reiciendis quidem magni cumque iste porro eligendi in.';
//단어의 길이가 10개 이상인 값을 골라내서
//consetetur, adopisicing, exercitationem, .....
console.log('hello'.length)

result = str1.split(' ').filter(word => word.length >=10).join(',')
//join= 구분자. ''안에 들어간 어떤 문자던 구분자가 될 수 있다.


console.log(result);