const request01 = function (url, callback) {
  console.log("req01 [" + url + "]");
  setTimeout(function () {
    const resp = {
      data: "Hello World",
    };
    callback(resp);
  }, 1000);
};

request01("http://www.kickscar.com/api", function (response) {
  console.log(response);
});
