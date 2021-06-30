/**
 *  let : Block Scope의 변수 정의
 *   var 대신 let 쓰자
 */

// let의 블록 범위
try {
  if (true) {
    var i = 10;
    let j = 20; // Block Scope 안에서 사용되므로..error 발생
  }

  console.log(i + ":" + j);
} catch (e) {
  console.error("errors:" + e);
}

// function scope
// var의 함수 범위
try {
  var f = function () {
    var m = 20;
  };

  f();

  console.log(m);
} catch (e) {
  console.error("errors:" + e);
}
