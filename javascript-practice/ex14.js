// URL 문자열 다루기
// Sring, Web에서의 활용

var url = "http://naver.com/usr";
// JavaScript에선 location으로 접근함.

// url을 보내줄땐 escape를 시켜줘야함. 그것에 대한 방법(위에선, 둘리와 같은 것. or @..)
// 1. escape() : url을 전부다 encoding XXXXXXXXXXX, deprecated, 쓰지말것 !!!!
var url2 = escape(url);
console.log(url2);

// 2. encodeURI : 파라미터 부분만 인위적으로 encoding
var url3 = encodeURI(url);
console.log(url3);

// 3. encodeURIComponent : 값만 엔코딩 해야 하는 경우
var url4 = encodeURIComponent(url); // 안좋은 사용 예
console.log(url4);

var toQueryString = function (o) {
  var qs = [];
  for (prop in o) {
    qs.push(prop + "=" + encodeURIComponent(o[prop]));
  }
  return qs.join("&");
};

var url = "http://mysite.com/user";
var param = {
  no: 10,
  name: "안대혁",
  email: "kickscar@gmail.com",
};

var url5 = url + "?" + toQueryString(param);
console.log(url5);
