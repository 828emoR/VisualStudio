
let data = [
{studNo: 101, studName: '맹빈아', engScore: 90, korScore: 80},
{studNo: 102, studName: '황근출', engScore: 88, korScore: 91},
{studNo: 103, studName: '톤톤정', engScore: 92, korScore: 89},
{studNo: 104, studName: '무모칠', engScore: 92, korScore: 83}];


//초기화
let list = document.getElementById('list');
data.forEach(function(elem, idx, ary){
  list.appendChild(makeTr(elem));
});

//변경버튼 이벤트.
let changeBut = document.querySelector('input[type="button"]');
changeBut.addEventListener('click', function(e){
  let targetTr = document.querySelectorAll('#list>tr');
  console.log(targetTr);
  let sno = document.getElementById('sno').value;
  let chsno = document.getElementById('chsno').value;
  let cname = document.getElementById('cname').value;
  let escore = document.getElementById('escore').value;
  let kscore = document.getElementById('kscore').value;
  targetTr.forEach(function(tr){
   if (tr.children[0].innerHTML == sno){
    tr.children[0].innerHTML = chsno;
    tr.children[1].innerHTML = cname;
    tr.children[2].innerHTML = escore; // 영어점수변경
    tr.children[3].innerHTML = kscore;
   } 
 })
});
//대상을 찾아오게 만드는



function changeCallBack1(e){
  e.preventDefault();//기본기능 차단.
  console.log('hhhhh');
  let sno = document.getElementById('sno').value;
  let sname = document.getElementById('sname').value;
  let engSco = document.getElementById('engSco').value;
  let korSco = document.getElementById('korSco').value;
if(!(sno && sname && engSco && korSco)) {
  alert('아쎄이..정신머리!')
  return;
}

  // if(!sno){
  //   alert('변경할 아이디를 선택해주세요');
  //   return;
  // }
  // if(!sname){
  //   alert('변경할 이름을 선택해주세요');
  //   return;
  // }
  // if(!engSco){
  //   alert('변경할 영어 점수를 선택해주세요');
  //   return;
  // }
  // if(!korSco){
  //   alert('변경할 국어 점수를 선택해주세요');
  //   return;
  // }
  let searchTr = document.getElementById(`s_${sno}`);
  searchTr.children[1].innerHTML = document.getElementById('sname').value;
  searchTr.children[2].innerHTML = document.getElementById('engSco').value;
  searchTr.children[3].innerHTML = document.getElementById('korSco').value;

  console.log(searchTr);
}


// student 한건 -> <tr><td>학번</td><td>학이름</td><td>영어</td><td>국어</td></tr>
function makeTr(student){
  let tr = document.createElement('tr');
  tr.setAttribute('id', 's_' + student.studNo);
  tr.addEventListener('click', function(e){
    // e.stopPropagation();
    console.log(this.children[0].innerHTML);

    document.getElementById('sno').value = this.children[0].innerHTML
    document.getElementById('sname').value = this.children[1].innerHTML;
    document.getElementById('engSco').value = this.children[2].innerHTML;
    document.getElementById('korSco').value = this.children[3].innerHTML;

  }, true);// true: 상위-> 하위. false: 하위->상위
  for(let field in student) { //student['studNo']
    let td = document.createElement('td');
    td.innerHTML = student[field];
    tr.appendChild(td);
  }
  //버튼 : 삭제.
  let but = document.createElement('button');
  but.innerHTML = 'del';
  but.addEventListener('click', function(ev){
    // e.stopPropagation(); //이벤트의 전파 차단
    console.log(this);
    // e.target.parentElement.parentElement.remove();
  }, true);
  let td = document.createElement('td');
  td.appendChild(but);
  tr.appendChild(td);
  
  return tr;
}