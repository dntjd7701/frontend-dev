/**
 *  변수와 데이터 타입
 * 
 *  [ 기본타입(primitive type) ]
 *  1. number
 *  2. boolean
 *  3. string
 *  4. undefined
 * 
 *  [ 객체 ] 
 *  Number()
 *  String()
 *  Boolean()
 *  
 * 
 */

 var u; // var u = undefiend 와 동일, 자바스크립트는 선언과 정의가 구분되어있지 않다.
 var i = 10;
 var b = true;
 var s = "Hello world";

 console.log("i : " + typeof(i));
 console.log("u : " + typeof(u));
 console.log("b : " + typeof(b));
 console.log("s : " + typeof(s));

// 잠깐, 기본형을 왜 객체처럼 사용할 수 있느냐 ? (메소드를 불러쓸 수 있는것.)
// 기본 타입인건 맞지만, 사용시에 객체로 잠깐 변경이 되는거야. 
// 작동이 끝나고 나면, 다시 원래대로 돌아와. 객체는 사라지는거고. 
// 이걸 '유사객체', '임시객체'라고 해

// console.log(new String(s.toUpperCase()));
console.log(s.toUpperCase());

 
 
 