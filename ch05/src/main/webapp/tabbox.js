//DOM Level 2Event 처리 : element의 event attribute를 사용하는 방식
//2. HTML Tag 에 바로 적용하기

var tabBox = {
  init: function () {
    window.addEventListener("load", this._onWindowLoad.bind(this));
  },
  _onWindowLoad: function () {
    var divTabBox = document.getElementsByClassName("tab-box")[0];
    var ul = divTabBox.childNodes[1];
    var liTabs = ul.getElementsByTagName("li");

    console.log(this);
    for (var i = 0; i < liTabs.length; i++) {
      liTabs[i].addEventListener("click", this._onTabClicked);
    }
  },
  _onTabClicked: function () {
    // unselected
    var lisSelected = document.getElementsByClassName("selected");
    lisSelected.length == 1 && (lisSelected[0].className = "");

    // selected
    this.className = "selected";
  },
};
