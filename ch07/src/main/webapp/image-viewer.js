// this에 대한 부분을 확실하게 해야함. **

var imageViewer = {
  init: function () {
    var that = this;
    $(function () {
      $("#btn-change").click(that._changeImage.bind(that));
      $("#btn-slideshow").click(that._slideShow.bind(that));
      $(".image-viewer img").dblclick(that._consoleLog);
      
      
      that._changeImage();
    });
  },
  _consoleLog: function(){
 	var name = $(this).attr("alt");
 	console.log(name); 	
 },
  _slideShow: function () {
  	if(this._intervalId){
  		
  		// 슬라이드쇼 진행 상태 
  		// 1. 타이머 중지
  		// 2. 슬라이드쇼 시작

		clearInterval(this._intervalId);
		this._intervalId = null;  		 
  		$("#btn-slideshow").text("슬라이드쇼 시작");
  		
  	} else {
  		
  		// 슬라이드쇼 중지 상태
  		// 1. 타이머 시작 
  		// 2. 슬라이드쇼 중지
  		
  		var that = this;
  		that._intervalId = setInterval(that._changeImage.bind(that), 2000);
  		
  		$("#btn-slideshow").text("슬라이드쇼 중지");
  		 
  	}
  },
  
  _intervalId:null,
  
  _changeImage: function () {
    var index = Math.floor(Math.random() * this._images.length);
    var info = this._images[index];

    $(".image-viewer img").attr({
      src: "images/" + info.file,
      alt: info.name,
      title: info.name,
    });
  },

  _images: [
    {
      name: "국화",
      file: "Chrysanthemum.jpg",
    },
    {
      name: "사막",
      file: "Desert.jpg",
    },
    {
      name: "수국",
      file: "Hydrangeas.jpg",
    },
    {
      name: "해파리",
      file: "Jellyfish.jpg",
    },
    {
      name: "코알라",
      file: "Koala.jpg",
    },
    {
      name: "등대",
      file: "Lighthouse.jpg",
    },
    {
      name: "펭귄",
      file: "Penguins.jpg",
    },
    {
      name: "툴립",
      file: "Tulips.jpg",
    },
  ],
};
