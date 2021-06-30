/*  Array Method(Array Prototype에 있는 메소드)

    1.concat
    2.join
    3.pop,push : stack 지원
    4.reverse
    5.shift
    6.slice
    7.sort
    8.splice
 */

// 1. concat - 두 배열을 합친다.
var colors = ["black", "deeppink", "orange", "skyblue"];
var fruits = ["watermelon", "banana", "mango", "peach"];

var a1 = fruits.concat(colors);
console.log(a1);

// 2. join - 각각의 요소들을 argument를 삽입하여 스트링으로 만들어낸다.
var str = fruits.join(":");
console.log(str);

//3. pop,push : stack
var color = colors.pop(); // 배열의 제일 마지막 요소를 뽑아낸다.
console.log(color);
console.log(colors);

colors.push("yellow"); // 배열의 제일 마지막에 argument를 추가시킨다.
console.log(colors);

//4. reverse - 배열을 뒤집는다.
console.log(fruits);
fruits.reverse();
console.log(fruits);

//5. shift
var numbers = [3, 23, 4, 5, 6];
console.log(numbers);
var n = numbers.shift();
console.log(n, numbers);

// 6. slice - 잘라낸다.(n, k) -> n ~ k-1
console.log(numbers);
var numbers2 = numbers.slice(1, 3);
console.log(numbers2, numbers);

// 7. sort
console.log(numbers);
numbers.sort();
console.log(numbers);

// 8. splice
//index부터 count개를 삭제 후 삭제된 요소를 배열로 반환
console.log(fruits);
var fruits2 = fruits.splice(0 /*index*/, 2 /*count*/);
console.log(fruits2, fruits);

var a1 = [0, 1, 2, 3, 4];
var a2 = a1.splice(1, 3, 10);
console.log(a2, a1);

var a1 = [0, 1, 2, 3, 4];
var a2 = a1.splice(1, 1, 10); // 치환
console.log(a2, a1);

var a1 = [0, 1, 2, 3, 4];
var a2 = a1.splice(1, 0, 10); // 삽입
console.log(a2, a1);
