// object/practice.js

const jsonObj =
`[{"id":1,"first_name":"Cordula","last_name":"Asplen","email":"casplen0@wikimedia.org","gender":"Agender","ip_address":"150.216.180.181"},
{"id":2,"first_name":"Adriano","last_name":"Jakubowski","email":"ajakubowski1@xing.com","gender":"Male","ip_address":"110.102.118.16"},
{"id":3,"first_name":"Alexander","last_name":"Chastel","email":"achastel2@wufoo.com","gender":"Male","ip_address":"14.159.89.40"},
{"id":4,"first_name":"Paolina","last_name":"Dymott","email":"pdymott3@whitehouse.gov","gender":"Female","ip_address":"147.230.46.138"},
{"id":5,"first_name":"Winny","last_name":"Kahen","email":"wkahen4@rambler.ru","gender":"Female","ip_address":"90.37.201.65"},
{"id":6,"first_name":"Kale","last_name":"Wedgwood","email":"kwedgwood5@sogou.com","gender":"Non-binary","ip_address":"181.28.224.168"},
{"id":7,"first_name":"Franny","last_name":"Turfrey","email":"fturfrey6@qq.com","gender":"Male","ip_address":"183.46.135.32"},
{"id":8,"first_name":"Darby","last_name":"McGrail","email":"dmcgrail7@huffingtonpost.com","gender":"Male","ip_address":"57.136.110.173"},
{"id":9,"first_name":"Teriann","last_name":"Rayment","email":"trayment8@loc.gov","gender":"Female","ip_address":"70.182.163.52"},
{"id":10,"first_name":"Giorgi","last_name":"Tomczykowski","email":"gtomczykowski9@seesaa.net","gender":"Male","ip_address":"153.110.175.216"},
{"id":11,"first_name":"Cal","last_name":"Ismay","email":"cismaya@cnbc.com","gender":"Male","ip_address":"37.138.123.138"},
{"id":12,"first_name":"Haslett","last_name":"Eyres","email":"heyresb@msn.com","gender":"Male","ip_address":"246.70.39.254"},
{"id":13,"first_name":"Coriss","last_name":"Cowely","email":"ccowelyc@jugem.jp","gender":"Female","ip_address":"169.59.236.129"},
{"id":14,"first_name":"Lawry","last_name":"Egel","email":"legeld@go.com","gender":"Male","ip_address":"206.31.227.56"},
{"id":15,"first_name":"Marnie","last_name":"Jaouen","email":"mjaouene@diigo.com","gender":"Female","ip_address":"107.100.134.178"}]`;
`{"id":15, "first_name": "Dotti"} `

//json 문자열 => javascript 오브젝트 변경.

const objAry = JSON.parse(jsonObj);
console.log(objAry);//id:?, first_name:?, last_name :?


let fields = ['id', 'first_name', 'last_name', 'email'];

function showTable(ary){
  let tableTag = "";
  //<table>
  //<thead><tr><th></th>*항목갯수 <tr></head>
  //<tbody><tr><td></td>*항목갯수</tr>*건 수</tbody>
  //</table>

  tableTag +='<table>'
  tableTag += createHead();
  tableTag += createBody(ary);
  tableTag +='</table>'

  document.write(tableTag);
}
function createHead(){
//<thead><tr><th></th>*항목갯수 <tr></head>
  let headTag = "";
  headTag +='<thead><tr>';
  fields.forEach(function(val){
    headTag+=`<th>${val}</th>`;
  });
  headTag +='</tr></thead>';
  console.log(headTag);
  return headTag;
}
function createBody(ary){
  //<tbody><tr><td></td>*항목갯수</tr>*건 수</tbody>
  let bodyTag = "";
  bodyTag +='<tbody>';
  ary.forEach(function (val, idx){
    bodyTag += '<tr>';
    fields.forEach(function(field){
      bodyTag += `<td>${val[field]}</td>`;
    });
    bodyTag+='</tr>';
  });
  bodyTag +='</tbody>';
  console.log(bodyTag);
  return bodyTag;
}
showTable(objAry);