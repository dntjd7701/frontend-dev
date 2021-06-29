/**
 *  Array - 배열
 *
 */
// 1. 생성자 함수
console.log("=============생성자 함수============");
console.log(typeof Array);
var a1 = new Array();
console.log(typeof a1, a1 instanceof Array, a1.length);
a1[0] = "hi";
console.log(a1[0]);

// 배열을 정의할 때 크기 지정은 별 의미가 없다.
var a2 = new Array(10);
a2[0] = 0;
a2[10] = 10;
a2[11] = 12;
a2[12] = 12;
console.log(a2[0], a2[1], a2[10], a2.length); // 배열 요소에 값을 지정하지 않으면 값은 undefined로 나온다.

// 초기값을 지정할 수 있다.
var a3 = new Array(0, 1, 2, 3, 4, 5);
console.log(a3.length);

// Array VS Object

console.log("=============Array VS Object============");
a4 = [];
a4[0] = 0;
a4["1"] = 1;
a4["name"] = "둘리"; // 속성으로 들어갔을뿐, 길이에는 영향을 끼치지 않는다. 즉 인덱스의 길이에 포함되지 않는다.
a4[4] = 4;
a4[5] = 5;

console.log(a4["0"], a4[1], a4["name"], a4[3], a4.length); // 출력 : 0 1 둘리 undefined 6
for (property in a4) {
  console.log("property : " + property + " : " + a4 + " : " + a4[property]);
}

a4.forEach(function (element) {
  console.log(element);
});

o4 = {};
o4["0"] = 0;
o4["1"] = 1;
o4["2"] = 2;
o4["5"] = 5;
o4["name"] = "마이콜";

console.log(o4["0"], o4[1], o4["name"], o4[3], o4.length);

for (property in o4) {
  console.log("property : " + property + " : " + o4 + " : " + typeof property);
}
console.log("=============리터럴============");
var a5 = [
  function () {
    console.log("hello");
  },
  20,
  "JavaScript",
  true,
  {
    email: "dooly@gmail.com",
    name: "mike",
  },
  null,
  undefined,
];

// console.log(a5.length);
for (var i = 0; i < a5.length; i++) {
  console.log(a5[i]);
}
a5[0]();
