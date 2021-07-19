const ex02 = require('../ex02');
// const assert = require('assert').strict;

// chai
const should = require('chai').should();


//Promise ver
describe('ex02', function(){
    this.timeout(5000);
    it('should return "ok"',async function(){
        const res = await ex02('param-data');
        // assert.equal(res,'ok'); // 기본 타입이니까 단순 값 비교이므로 Deep 안써도 된다.
        res.should.equal('ok');
    });
});