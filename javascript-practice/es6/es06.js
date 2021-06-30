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
