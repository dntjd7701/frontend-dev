// this에 대한 부분을 확실하게 해야함. **

var imageViewer = {
	init: function(){
		var _this = this;
		$(function(){
			$("#btn-change").click(_this._changeImage.bind(_this));
		});
	},
	_changeImage: function(){
		var result = Math.floor(Math.random() * this._images.length);
		var data = this._images[result];
		
		console.log(data);
	},
	
	_images: [ 
		"국화:Chrysanthemum.jpg", 
		"사막:Desert.jpg", 
		"수국:Hydrangeas.jpg", 
		"해파리:Jellyfish.jpg", 
		"코알라:Koala.jpg", 
		"등대:Lighthouse.jpg", 
		"펭귄:Penguins.jpg", 
		"툴립:Tulips.jpg" 
	]
}




