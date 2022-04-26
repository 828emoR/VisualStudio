//dom/practice2.js

document.addEventListener('DOMContentLoded',function(){
  let div = document.createElement('div')
  let spanName = document.createElement('span')
  // spanName.innerHTML = '홍길동';
let name = document.createTextNode('홍길동');
spanName.appendChild(name); //<span>홍길동</span>
 
  spanAge = document.createElement('span')
  spanName.setAttribute('id', 'name');
  // spanAge.innerHTML = '20살';

  let age = document.createTextNode('20살');
  spanAge.appendChild(age);

  let hypen = document.createTextNode(' - ');

  div.appendChild(spanName);
  div.appendChild(spanAge);
  div.appendChild(hypen);

  // div.innerHTML = '-';

let divShow = document.getElementById('show').appendChild(divTag);      
})