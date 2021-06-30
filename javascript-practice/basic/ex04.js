/**
 * 변수의 범위(Scope)
 * 1. JavaScript, 어휘에서 범위를 알 수 있는 정적 범위이다. -> Lexical Scope
 * 2. EC6 이전에는 JavaScript에는 자바와 같은 Block Scope은 없다.
 *   - EC6 이전에는 함수 범위(Function Scope)만 지원 했었다.
 *          - function(){} 안에서 변수에 var 키워드를 붙이면 함수 범위를 가지게 된다.
 *          - 만일, var 키워드 없이 변수를 정의한다면 전역 범위를 가지게 된다.(Hoisting)
 * 3. EC6 에서는 새롭게 Block Scope를 가지게 하는 두 가지 키워드를 지원한다.
 *      1) let : 변수
 *      2) const : 상수
 *
 */

var i = 10;
var f = function () {
  var i = 20;
  j = 100;
  console.log(i); // 20
  i = j - i;
  console.log(i); // 80
};

f(); // 20, 80
console.log(i); // 10
console.log(j); // 100 (hoisting)

{
  // JSON도 되야하고, 실행되는 블럭도 되야하는거.(EC6부터. - let의 출현)
  // Block 안의 변수를 담는 Context가 새로 생긴것.
  let x = 100000000;
  const PI = 3.14;
  x = 50;

  PI = 0; // 상수에 값을 두 번 대입하려 했기에 error 발생
}
console.log(x); // error 발생. 접근 불가 ㅇㅇ
