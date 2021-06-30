/**
 * Template Literal
 */

let no = 10;
let name = "dooly";
let email = "dooly@gmail.com";

// ex1 - el 사용
console.log("no : 10, name : dooly, email: dooly@gmail.com");
console.log("no : " + no + ", name : " + name + ", email: " + email);
// ******************

console.log(`Template Literal -- no : ${no}, name : ${name}, email: ${email}`);

// ex2 - 다중행 지원
console.log(`no:${no}
name:${name}
email:${email}
`);
