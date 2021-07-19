const { X } = require('./ex02');
const assert = require('assert');
// assert는 try~catch 걸어야함
// 통과를 못하면 에러 객체를 던지니깐

try {
    const a = new X();
    const b = new X();
    const c = a;
    assert.equal(a, c,  'fail : a === c');
    // assert.equal(a, b,  'fail : a === b');
    assert.deepEqual(a, c,  'fail : deepEqual1');
    assert.deepEqual(a, b,  'fail : deepEqual2');
    
    b.bar = 'foo';
    assert.notDeepEqual(a, b,  'fail : notDeepEqual');

    console.log('ok');
} catch (err) {
    console.log("fail : " + err.message);

}
