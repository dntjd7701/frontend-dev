
const ex02 = require('./ex02');

const ex03 = async function(param){
    try {
      const res =  await ex02(param); // Blocking
      console.log(res);
    } catch (error) {
        console.error(error.message);
    }
}
if(require.main == module){
    //test01 : success
    ex03("param-data");
    
    // test02 : fail
    ex03("param-error");

    console.log('.... waits');
} else {
    module.exports = ex03;
}