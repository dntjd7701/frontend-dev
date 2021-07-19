// mocha test case

// 동위성(equality)과 동질성(deep)-내용 -> 연산자를 사용할 수 없음. 
const assert = require('assert').strict;
const { add, na, X } = require('../ex02');

describe('ex02', function(){
    describe('add(10, 20)', function(){
        it('should equal to 30', function(){
            assert.equal(add(10,20), 30);
        });
        it('should not equal to 30', function(){
            assert.notEqual(add(10,20), '30');
        });

    });
    describe('na()', function(){
        it('should equal to [2,4,6] deeply', function(){
            assert.deepEqual(na(), [2,4,6]);
        });
        it('should not equal to [2,4,6]', function(){
            assert.notEqual(na(), [2,4,6]);
        });

    });
    describe('X() constructor', function(){
        it('equality(a === c)', function(){
            const a = new X();
            const c = a;

            assert.equal(a,c);
        });

        it('not equality(a !== c)', function(){
            const a = new X();
            const b = new X();

            assert.notEqual(a,b);
        });

        it('Equality Between a and c', function(){
            const a = new X();
            const b = new X();

            assert.deepEqual(a,b);
        });

        it('Not Equality Between a and c', function(){
            const a = new X();
            const b = new X();
            b.bar = 'foo';

            assert.notDeepEqual(a,b);
        });
    });
});