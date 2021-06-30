/**
 *  1. JavaScript 객체는 function, object 타입 객체 2가지가 있다.
 *  2. function type object -> "함수"라고 부른다.
 *      따라서, JavaScript object라 부르는 것은 object type의 객체를 가리킨다.
 *
 */

//      생성 방법 1  - 생성자 함수를 사용하는 방법
// '내장 객체'(생성자 함수), 라고 부르지만 생성자 함수라고 이해한다.
// Number(),
// Boolean(),
// String(),
// Object(),
// Array() ....
// 그리고 사용자 정의 생성자 함수
var o1 = new Object();
o1.name = "둘리";
o1.age = 10;
o1.another = new Object();
o1.another.name = "마이클";
o1.another.age = 30;

console.log(o1);

//      생성 방법 2
// {} literal 사용하는 방법
o2 = {};
o2.name = "둘리";
o2.age = 10;
o2.another = new Object();
o2.another.name = "마이클";
o2.another.age = 30;

console.log(o2);

//      생성 방법 3 - JSON(JavaScript Object Notation)
o3 = {
  name: "둘리",
  age: 10,
  another: {
    name: "마이클",
    age: 30,
  },
};

// XmlHttpRequest 호스트 객체(브라우저) 사용해서 통신을 한다. (AJAX)
// JSON 이 message converter 써서 이런식으로 응답해줌.
var response = '{name: "둘리", age: 10, email: "dooly@gmail.com"}';
var userVo = eval("(" + response + ")");
console.log(userVo.name + ":" + userVo.email);
