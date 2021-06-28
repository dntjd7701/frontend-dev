// null vs undefiend

// var myVal1 = undefined; 명시적으로 undefined 대입
var myVal1; // 암시적으로 undefined 대입
// 즉, JavaScript에서 선언은 없다. 정의만

var myVal2 = null;

// 이건 대입식이기 때문에 변수가 생김. 하지만,
var i = 10;
i = 10;
u; // 이건 할 수 없음. 이건 정의를 하는게 아니라. 값을 찾으려고 들어가는 것이기 때문에.
var u;

console.log(myVal1 + " : " + myVal2);
console.log(typeof myVar1 + " : " + typeof myVal2);

// 이 때에는, 값을 비교하는 것이기 때문에 타입이 다르지만, value로 들어가는 것은 같기 때문에 true가 나온다.
// 즉, undefined 의 value는 null이 들어가고 null 또한 null 이 들어간다는것.

console.log(myVal1 == myVal2); // 값 비교
console.log(myVal1 === myVal2); // 타입 비교 + 값 비교

console.log("==========================================");

/**
 *  == : equality, 값의 등치성, 형변환 O
 *  var s = "4" 와 , var n = 4를 비교할 때, Java에서는 당연히 에러가 뜨겠지만
 *  JavaScript에서는 형변환을 통해 비교를 하려한다.
 */
console.log(4 == "4");
console.log(true == 1);
console.log("abc" == new String("abc"));
console.log("abc" === new String("abc"));
// 산술연산으로서 true를 1이라는 수로 형변환 시킨다.
console.log(true + 10);
console.log("abc" + new String("abc"));
// number->string
console.log(1 + "1");
console.log("1" + 1);

console.log("==========================================");
/**
 *  추천 !!
 *  엄격하게 형변환을 해서 두 피연산자의 타입을 일치시킨다.
 *  (Java에서 하는것과 같이. 언어적으로 JavaScript가 막지 않고, 애매한 부분들이 많기 때문에 직접 형변환을 정확하게 한다.)
 *  -> 이런 언어적인 부분을 엄격하게 해결한게 바로 'TypeScript'이다.
 */
var str = "5";
console.log(parseInt(str) == 5);

console.log("==========================================");

/**
 *  === : identity
 * 1. 타입의 동일성
 * 2. 값의 동일성 또는 객체의 동일성
 * 3. 형변환 x
 */
console.log("2" === 2);
console.log(true === 1);
console.log(2 === 1);
console.log(new Number(1) === new Number(1));
