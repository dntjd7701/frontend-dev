const mod01 = require("./error_mod01");
const mod02 = require("./error_mod02");
const mod03 = require("./error_mod03");

console.log(mod01); // 빈 깡통 출력
mod02(); // function02가 나오지 않음. -> module.exports가 리턴되기 때무누에
console.log(mod03); // 혼용. 덮어씌워짐, exports.으로 통일하는게 낫다.
