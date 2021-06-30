/**
 *  JavaScript 4
    - prototype 기반의 상속, 오버라이딩(객체 스크립트)
 */

var MyObject = function (name, age) {
  this.name = name;
  this.age = age;
};

MyObject.prototype.school = "bit";
MyObject.prototype.course = "douzone";
MyObject.prototype.info = function () {
  console.log(
    this.name + ":" + this.age + ":" + this.school + ":" + this.course
  );
};
// MyObject 객체 생성 1
var o1 = new MyObject("둘리", 10);
o1.school = "천안월봉고";
o1.info();

// MyObject 객체 생성 2
var o2 = new MyObject("마이콜", 30);
o2.info();

// 오버라이딩
o2.info = function () {
  console.log("비밀!!");
};
o2.info();

// 출력
/**
    둘리:10:천안월봉고:douzone
    마이콜:30:bit:douzone
    비밀!!
 */
