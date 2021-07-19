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
    : 대신 외부 assertion 라이브러리를 다양하게   지원한다.(chai, should.js, expect.js)   
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

[test/ex01.js]
```javascript
```



