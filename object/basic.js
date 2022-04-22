//object/basic.js

const member = {
  memberId: 'user1',
  memberName: 'hong',
  getMemberName: function(){
    return `회원이름은 ${this.memberName}`;
  },
  setMemberName:function (name){
    this.menberName = name;
  }
}
console.log(member.memberId)
member.setMemberName('Hwang');
console.log(member.getMemberName());

member.memberAge = 20;
delete member.memberAge;
member['memberPoint'] = 1000;
member.grade = function (){
  if(this.memberPoint > 500){//this=member가 가지고 있는 object를 지정함.
   return 'gold'
  }else if (this.memberPoint > 1000){
    return 'platinum'
  }
}
console.log(member.grade());


//클래스, Constructor 함수. => object 생성.
class Student {
  constructor(sno, sname){
    this.sno = sno;
    this.sname= sname;
  }
  set mathScore(score){
    this._mathScore = score;//생성자에 선언되지 않은 속성을 추가.
  }
  get mathScore(){
    return this._mathScore;// _math속성값을 읽어오겠음.
  }
  getSno(){
    return this.sno;
  }
  setSno(sno){
    this.sno = sno;
  }
}

const s1 = new Student('1111','hong');
const s2 = new Student('2222', 'Hwang');
console.log('학생번호' + s1.getSno());
s1.engScore = 80;
s1.mathScore = 90;
console.log('의 영어 점수는'+s1.engScore);
console.log('의 수학 점수는'+s1.mathScore);

function Person(ssn, sname){
  this.ssn = ssn;
  this.sname = sname;
  this.getInfo = function(){
    return `주민번호 ${this.ssn}, 이름 ${this.sname}`;
  }
}
const p1 =new Person('951111-1111111, hong');
const p2 =new Person('971111-2222222, hwang');
const p3 =new Person('111111-3333333, parl');
console.log(p1.getInfo());