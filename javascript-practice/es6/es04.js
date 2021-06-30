/**
 *  default parameter
 */

const print = function (strs, e = "\n") {
  console.log(strs.join(e));
};

print(["Welcome", "Mr.", "Kang"]); // parameter를 안준 경우, default parameter 인 \n 출력
print(["Welcome", "Mr.", "Kang"], " "); // parameter를 준 경우, " "출력
