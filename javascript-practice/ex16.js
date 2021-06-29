/**
 *  function type object(function)
 */

// 함수를 생성하는 방법 (1)
function f1(a, b) {
  return a + b;
}
console.log(f1(10, 20), typeof f1);

// 함수를 생성하는 방법 (2) ** 추천
// 함수 리터럴 사용  var i = 10; << 10을 리터럴이라 부름.
var f2 = function (a, b) {
  return a + b;
};
console.log(f2(10, 20), typeof f2);

// 함수를 생성하는 방법 (3) : new 연산자와 함께 Function() 생성자 함수를 사용
var f3 = new Function("a", "b", "return a+b;");

console.log(f3(10, 20), typeof f3);

// 함수를 생성하는 방법 (4) : 익명(Anonymous) 함수
// callback
// 통신 상황에서 다중 통신을 해야하게되면 코드가 길어져 복잡도가 증가한다.
// 이를 해결하기 위한 새로운 방법이 있다.
setTimeout(function () {
  console.log("time out !!!!");
}, 1000);

// 비동기 방식이기 때문에 위의 setTimeout을 모두 기다리지 않고 실행된다.
console.log("!");

// 즉시 실행하는 함수
var s = (function (a, b) {
  return a + b;
})(5, 20);

console.log(s);

// 가변 파라미터 함수
var sum = function () {
  // 함수 실행 cotext안에는 arguments라는게 꼬옥 있다.
  var s = 0;
  // arguments는 Array가 아닌 유사 배열이다.
  //  console.log(arguments instanceof Array); -- false
  // 구현 1
  for (var i = 0; i < arguments.length; i++) {
    s += arguments[i];
  }
  //   arguments.forEach(function (e) {
  //     s += e;
  //   });

  // 구현 2 (Array.prototype.forEach + caller 바꾸기)
  Array.prototype.forEach.call(arguments, function (e) {
    s += e;
  });
  return s;
};
console.log(sum(1, 2));
console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5, 6));
