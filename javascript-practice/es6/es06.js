/**
 *  Destructuring(구조분해)
 */

// ex1 - basic

const user = {
  firstName: "둘",
  lastName: "리",
  email: "dooly@gmail.com",
};

({ firstName, lastName } = user);
console.log(firstName + lastName);

// ex2 - Default Value

const goods = {
  name: "TV",
  price: 10000,
  stockCount: 30,
};
let { name, price, soldCount = 0, stockCount = 10 } = goods;
/* 여기서 초기화는 안됌(stockCount) */
// stockCount = 0; 초기화 됌

console.log(
  `${name}의 가격은 ${price}입니다. 판매량 : ${soldCount} 재고량 : ${stockCount}`
);

// ex3 - Diffrent Varaiable Names
const person = {
  name: "woosung",
  country: "Korea",
};

// 원래의 이름과 다른 변수명으로 바꿔 받을 수 있음.
let { name: fullName, country: place } = person;
console.log(`name:${fullName}, country:${place}`);

// ex4 - 내부 객체의 구조 분해(Nested Object)
const student = {
  name: "amanda",
  age: 30,
  scores: {
    math: 69,
    korean: 80,
    english: 100,
    computer: 100,
  },
};

const {
  name: studentName,
  age: studentAge,
  scores: { math = 0, korean = 0, english = 0, science = 0 },
} = student;

console.log(`${studentName} : ${studentAge} : ${math} : ${science}`);

// ex5 - 함수의 파라미터 -- 이거 좋다.

var averageScore = function ({
  name,
  scores: { math = 0, korean = 0, english = 0, science = 0 },
}) {
  console.log(
    `${name}의 평균은 ${(math + korean + english + science) / 4}점 입니다.`
  ); // 둘리의 평균은 ~점 입니다.
};

averageScore(student);

// ex7.1 - 배열의 구조분해, 기본
const color = [242, 115, 695];
[red, green, blue] = color;
console.log(red, green, blue);

// ex7.2  - 배열의 구조분해, 디폴트 값
[red = 0, green = 0, blue = 0, alpha = 0] = color;

console.log(red, green, blue, alpha);

// ex7.3  - 배열의 구조분해, skip values (index)
[, , asfsdblue = 0] = color;
console.log(asfsdblue);

// ex8 - swap values
let x = 10;
let y = 20;
console.log(x, y);
let temp = x;
x = y;
y = temp;
console.log(x, y);
[x, y] = [y, x];
console.log(x, y);

// ex9 - ...array spread operator
const rainbow = ["red", "orange", "yellow", "green", "blue", "purple"];
let [firstColor, secondColor, ...otherColor] = rainbow;
console.log(firstColor, secondColor, otherColor);

console.log("Colors of Rainbow", rainbow);
console.log("Colors of Rainbow", ...rainbow);

// red:orange:yellow
var f = function (...colors) {
  // console.log(colors);
  // console.log(arguments);
  return colors.join(":");
};

console.log(f("red", "orange", "yellow"));

s = ((...colors) => colors.join(":"))("red", "orange", "yellow");
console.log(s);

var f = (...colors) => colors.join(":");
console.log(f("hi", "hihihi"));
