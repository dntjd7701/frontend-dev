const ex01 = require('../ex01');
// mocha 자체의 비동기 테스트시 setTimeout 2초로 잡는가보다.
// callback에서 2초가 넘으면 error가 나옴.
// ex01의 setTimeout을 1초로 바꾸니 에러가 해결됌
describe('ex01', function(done){
    this.timeout(5000);
    it('should run without error', function(done){
        ex01('param-data', done);
    })
})