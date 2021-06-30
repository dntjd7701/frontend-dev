// function 객체 메소드 call
// function 은 다 call을 불러서 쓸 수 있다.

console.log("=========global=========");
global.name = "둘리"; // var name = "둘리" 처럼 작동.
var email = "dooly@gmail.com";
console.log(name, global.email);

console.log("=========function 객체 메서드 apply=========");

var f1 = function () {
  console.log(this.name);
};

f1();
// this 바꾸기
var o = {
  name: "마이콜",
};

f1.apply(o); // parameter가 없는 함수를 이용할 때.

console.log("=========function 객체 메서드 call=========");
var f2 = function (s) {
  console.log(s + " " + this.name);
};

f2.call(o, "hi"); // hi는 parameter로, object는 this로 들어간다.
// 단 이 방법은 함수를 호출하면서 바꾸는 것이다.
// 이벤트를 등록하여 실행하게 할 수 있다.

// --> apply, call은 호출과 동시에 'this'를 binding 한다. (real time)
// 비동기 callback 함수에서의 this binding에서 문제가 발생한다.
// 'setTimeout' 예제를 통해 알아보도록 하자.
