//dom/basic.js

//dom : 생성, 속성, 삭제, 부모-자식 관계.
//addEventListener('이벤트이름', '실행할 이벤트 핸들러')


document.addEventListener('DOMContentLoaded',function(){//사용자의 행동을 감지하는 영역
 
  let h3Tag = document.getElementsByTagName('h3');//HTMLCollection
  console.log(h3Tag);
  h3Tag[1].innerHTML = 'Git Test';
  
  let first = document.getElementById('first');//element 하나 갖고옴
  console.log(first);
  first.innerHTML = 'Git Changed';

  let second = document.getElementsByClassName('first');
  second[0].innerHTML = '사과';

  //CSS의 선택자
  // document.querySelector('ul > li');//한건만
  let list = document.querySelectorAll('ul > li'); // 싹다
  console.log(list);
  list[1].style.backgroundColor = 'yellow';

  //DOM 생성.
  let newList = document.createElement('li');
  newList.innerHTML = 'Mango';

  //ul 하위요소 <li>mango</li>
  console.log(newList);
 let ulTag = document.querySelector('ul');
 ulTag.appendChild(newList);
}); 
