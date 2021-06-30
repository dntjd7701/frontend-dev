/**
 *  Arrow Function
 */

const power = function (x) {
  return x * x;
};

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
  process.stdout.write(`${number} : ${power(number)} \t`);
});

// ex1

const power2 = (x) => x * x;

/**
 numbers.forEach(function (number) {
  process.stdout.write(`${number} : ${(function(x){
      return x*x;
  })(number)} \t`);
});

 * 
 * 
 * 
 * 
  numbers.forEach(function (number) {
  process.stdout.write(`${number} : ${((x) => {
      return x*x;
  })(number)} \t`);
});

 * 
 */
console.log("\n---------");

// 람다는 순수함수로, 기본적으로 리턴을 하게 되어있다. 그렇기 때문에 return을 적지 않아도 된다.
numbers.forEach(function (number) {
  process.stdout.write(`${number} : ${((x) => x * x)(number)} \t`);
});

console.log("\n---------");

numbers.forEach(function (number) {
  process.stdout.write(`${number} : ${power2(number)} \t`);
});

// ex3
console.log("\n---------");
numbers.forEach((n) => process.stdout.write(`${n} : ${((x) => x * x)(n)} \t`));

// ex4 - 다중행 함수
[5, 3, 14, 2421, 42, 45].forEach((e) => {
  if (e % 5 === 0) {
    process.stdout.write(`${e}\t`);
  }
});

// ex5 - this를 어휘적으로 binding - Lexical Binding

console.log("\n--------------------------");

const dooly = {
  name: "둘리",
  friends: ["또치", "마이콜", "희도잉", "아저씨"],
  printFriends: function () {
    this.friends.forEach((friend) =>
      console.log(`${this.name}의 친구 ${friend}`)
    );
  },
};

dooly.printFriends();

// ex6
