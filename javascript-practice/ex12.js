// Array extension : List 메서드 추가 prototype 확장

Array.prototype.insert = function (index, values) {
  if (values instanceof Array) {
    // for (var i = 0; i < values.length; i++) {
    //   this.splice(index++, 0, values[i]);
    // }
    var _this = this;
    values.forEach(function (e) {
      //   console.log(that);
      // 함수가 실행되지 않았던 이유, this가 다르기 때문이다.
      _this.splice(index++, 0, e);
    });
  } else {
    this.splice(index, 0, values);
  }
};

Array.prototype.remove = function (index) {
  this.splice(index, 1);
};

// 리스트로 사용하기
var a = [1, 2, 4];
console.log(a);

console.log("insert 실행");
a.insert(2, 3);
console.log(a);

console.log("remove 실행");
a.remove(3);
console.log(a);

a.insert(2, ["a", "b", "c"]); // 기대 [1, 2, "a", "b", "c", 3]
console.log(a);

var f = function (param) {
  console.log(this + " : " + param);
};
f(); // Node에서 global은 window가 아니라 전역을 의미. 즉 호출자는 global임

// 이 호출자를 바꾸는 방법.
// 모든 함수는 call, apply 를 가지고 있음. this를 세팅하는 애들.

o = {
  name: "me!!",
};
f.call(o, "dooly@gmail.com"); // 이러면 함수의 this는 o객체가 됌, 실행이 되고, o로 바인딩됌. apply와 달리 parameter도 넘길 수 있음.
f.apply(o); // binding만 가능.
