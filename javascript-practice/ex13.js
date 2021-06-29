// String

// 배열처럼 접근이 가능하다.
var str1 = "Hello World";
for (var i = 0; i < str1.length; i++) {
  console.log(str1[i]);
}

// 문자열 합치기
var str2 = "Hello";
var str3 = "World";
console.log(str2 + " " + str3);

// casting
var str4 = 5 + "5";
console.log(str4);

var str6 = "boolean : " + true;

console.log(str6);

// Method
var str7 = "string1 string2 string3";
console.log(str7.length);

var index = str7.indexOf("string2");
console.log(index);

var index = str7.indexOf("string4");
console.log(index); // 찾지 못하면 -1 출력

var str8 = str7.substr(10); // 10번째부터 끝까지
console.log(str8);

var str9 = str7.substr(10, 3);
console.log(str9);

var str10 = str7.substring(10, 13); // last index -1
console.log(str10);

var a = str7.split(" ");
console.log(a);

var str11 = "abcdef";
var a1 = str11.split(":");
console.log(a1);
