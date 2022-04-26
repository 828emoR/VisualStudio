// dom/practice1.js

document.addEventListener('DOMContentLoaded', function(){
  let menus = ['아아', '카페라떼', '라무네'];
  let ulTag = document.createElement('ul'); //element node




for (let i= 0; i< menus.length; i++){
  //1)아아
  let liTag = document.createElement('li');
  liTag.innerHTML = menus[i];

  ulTag.appendChild(liTag);

}


//   let liTag = document.createElement('li');
//   liTag.innerHTML = '아아';
//   ulTag.appendChild(liTag);

//  liTag = document.createElement('li');
//   liTag.innerHTML = '카페라떼';
//   //하위요소로 추가
//   ulTag.appendChild(liTag);//<= 반드시 필요

//  liTag = document.createElement('li');
//   liTag.innerHTML = '라무네';
//   ulTag.appendChild(liTag);

//   console.log(ulTag);
  let divShow = document.getElementById('show');
  divShow.appendChild(ulTag);
});