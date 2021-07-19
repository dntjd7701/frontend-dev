const request01 = function (url, callback) {
  // request01: db.query, $.ajax
  console.log("req01 [" + url + "]");
  setTimeout(function () {
    const resp = {
      data: "Hello World",
    };
    callback(resp);
  }, 1000);
};

const request02 = function (url) {
  // request02: db.query, $.ajax Promise 객체를 리턴하는 promise화된 함수(promify)
  console.log("req02 [" + url + "]");
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const resp = {
        data: "Hello World",
      };
      resolve(resp);
      //error
      //reject('fail: request02');
    }, 2000);
  });
};

const fetch = async function (url) {
  // ex)model.findAll, model.insert ...
  const response = await request02(url);
  return response;
};

// request01("http://www.kickscar.com/api", function (response) {
//   console.log(response);
// });

// request02("http://www.kickscar.com/api")
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (err) {
//     console.error(err);
//   });

// const response = fetch("http://www.kickscar.com/api").then(function (response) {
//   console.log(response);
// });

const f = async function () {
  const response = await fetch("http://www.kickscar.com/api");
  return response;
};
console.log("do something");
