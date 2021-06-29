//Date

// current time
var now = new Date();
console.log(now);

// 2021. 06. 29
var d = new Date(2021, 5, 29); //month -1
console.log(d);

// 2021년 06월 29일 12:30:40
var d2 = new Date(2021, 5, 29, 12, 30, 40); //month -1
console.log(d2);

// Object method
console.log(
  "년도:" +
    d2.getFullYear() +
    "\n" +
    "월:" +
    (d2.getMonth() + 1) +
    "\n" +
    "일:" +
    d2.getDate() +
    "\n" +
    "시:" +
    d2.getHours() +
    "\n" +
    "분:" +
    d2.getMinutes() +
    "\n" +
    "초:" +
    d2.getSeconds() +
    "\n" +
    "mili:" +
    d2.getMilliseconds() +
    "\n"
);

d2.setFullYear(2922);
console.log(d2);
d2.setMonth(13);
console.log(d2);
