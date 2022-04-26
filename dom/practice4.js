//dom/practice4.js
document.addEventListener('DOMContentLoaded', function(){
  let showDiv = document.querySelector('#show');
  showDiv.style.width='150px';
  showDiv.style.height='150px';
  showDiv.style.backgrouncolor ='yellow';


 let inputTag = document.getElementById('userName');
  let add = document.getElementById('addBtn');

  add.addEventListener('click', function() {
    let span = document.createElement('span');
    span.style.display = 'inline-block';//스판=인라인레벨
    span.style.paddingLeft = '2px';
    span.style.paddingRight = '2px';
    span.style.marginRight = '2px';
    span.style.marginLeft = '2px';
    span.style.backgroundColor = 'red';
    span.style.Color = 'white';
    span.innerHTML = document.querySelector('#userName').value;
    showDiv.appendChild(span);

    document.querySelector('#userName').value = '';
  })

 
  inputTag.addEventListener('change', function (){
    let span = document.createElement('span');
    span.style.display = 'inline-block';//스판=인라인레벨
    span.style.paddingLeft = '2px';
    span.style.paddingRight = '2px';
    span.style.marginRight = '2px';
    span.style.marginLeft = '2px';
    span.style.backgroundColor = 'red';
    span.style.Color = 'white';
    span.innerHTML = document.querySelector('#userName').value;
    showDiv.appendChild(span);

    document.querySelector('#userName').value = '';
  })
})