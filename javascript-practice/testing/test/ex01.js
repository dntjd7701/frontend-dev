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
