// 비동기를 처리하는 방법
// 1. callback
// 2. Promise

// 비동기 callback
const ex01 = function(param, callback){
    // 비동기 코드
    // ex) 파일 시스템 접근, SQL to DB, 네트워크 통신, setTimeout
    // callback 의 형식은 정해져있음(error, data)
    setTimeout(function(){
        if(param == 'param-data'){
            callback(null, 'ok'); // (error, data)
        } else {
            callback(new Error('fail'));
        }
    }, 1000)
}

if(require.main == module){
// test01 - true
ex01("param-data", function(err, res){
    if(err){
        console.error(err);
    } else {
        console.log(res);
    }
});

// test02 - error
ex01("param-error", function(err, res){
    if(err){
        console.error(err.message);
    } else {
        console.log(res);
    }
});

console.log("waits...");

} else{
    module.exports = ex01;
}