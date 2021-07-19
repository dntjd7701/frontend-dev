# Test

## JavaScript 단위 테스트 도구    

1. JavaScript 단위 테스트 도구는 20여가지가 넘게 있다. 
2. Java : JUnit == JavaScript : JSUnit(개발 중지, 2009년)   
3. JSUnit project  --->  Jasmine(2010년 ~ 현재)   
    : 자체 assertion을 가지고 있다.   
    : BDD 기반의 개발 표준 테스팅에 맞는 문법을 작성할 수 있다.   
4. DOM 직접 조작 application(jQuery 기반) -> QUnit   
    : Promise 기반 비동기 테스트   
    : 세팅하기 쉽고 간편하게 테스트   
5. Node 기반 백엔드 어플리케이션 테스트 -> Mocha   
    : Promise 기반 비동기 테스트  
    : 자체 Assertion이 없다.   
    : 대신, Node 코어 모듈 중에 assert 모듈 뿐만 아니라 외부 assertion 라이브러리를 다양하게   지원한다.(chai, should.js, expect.js)   
6. Jasmine, QUnit, ***Mocha***, Jest(React 개발 테스트 도구)


---

## Mocha Installation

```bash
$ npm i -D mocha
$ npx mocha --version
(mocha의 실행 가능한 스크립트를 실행하게 한다.)
(node ./node_module/mocha/index.js ...) -> mocha

```
mocha 가 자바스크립트로 쓰여진 테스트 케이스를 읽어 실행한다.



## Mocha 테스트 케이스 모듈(.js) 작성

[ex01.js]
```javascript
exports.hello = () => 'Hello World';
```

[test/ex01.js] - 테스트 케이스
```javascript
const assert = require('assert');
const { hello } = require('../ex01');

// mocha로 실행하고
// 테스트 케이스를 mocha 문법에 맞게 작성 
// 테스트 케이스 안의 callback은 람다로 되도록 하지 않는다.(오류 발생 가능성)
describe('hello()', function(){
    it('"Hello World" 문자열을 반환해야 한다.', function(){
       // 여기의 assert를 mocha가 지원하지 않는다.
       // 지금은 Node의 기본 내장을 사용.  
        assert.strictEqual(hello(), "Hello World")
    });
});

```

- 테스트 수행 (1) - 개별 실행 
```bash
$ npx mocha test/ex01
```
- 테스트 수행 (2) - 일괄 실행, test 밑에 애들
```bash
$ npx mocha -r(--resursive)
```

- 테스트 수행 (3) - npm scripts stage 
1. package.json 에 scripts test stage setting 
```json
.
.
"scripts": {
    "test": "npx mocha"
  },
.
.

```
2. 테스트 수행 
```bash
$ npm test
```

---

## Assertion 기초 

[ex02.js]
```javascript
const { add } = require('./ex02');
const assert = require('assert');
// assert는 try~catch 걸어야함
// 통과를 못하면 에러 객체를 던지니깐

try {
    assert.equal(add(10,20)/* actual */, 20/* expect */); // ==
    assert.strictEqual(add(10,20), '30')                  // ===
    console.log('ok');
} catch (err) {
    console.log("fail : " + err.message);

}

```
Strict mode(===, !===, 객체인 경우 동일성)로 assertion을 하여야 한다. 
1. equal(deprecteds) -> strictEqual
2. notEqual(deprecteds) -> strictNotEqual
3. deepEqual(deprecteds) -> strictDeepEqual
3. notDeepEqual(deprecteds) -> notStrictDeepEqual

[ex02.test01.js]