/**
 *  JavaScript object 3
 */

var o = {
  // Data 교환용 포맷은 ""을 붙여야 하는게 정석이다.(통신용)
  // 스크립트 코드 내에서 사용하는 객체에서는 붙이지 않아도된다.
  name: "둘리",
  age: 10,
  isFemale: false,
};

console.log(o);
var f = function () {
  console.log("Hello World");
};
f();
console.log(
  "-------------------기본 타입은 확장이 되지 않는다.-----------------------"
);
var i1 = 10;
var i2 = new Number(10);
i2.another = {};
console.log(f2);

i1.another = {};
console.log(f1);

console.log("-------------------객체의 확장 -----------------------");
o.another = {
  name: "마이콜",
  age: 30,
};

console.log(o);

f.another = {
  name: "마이콜",
  age: 30,
  info: function () {
    console.log(this.name + ":" + this.age);
  },
};

console.log(f.another);
f.another.info();
