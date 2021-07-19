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
