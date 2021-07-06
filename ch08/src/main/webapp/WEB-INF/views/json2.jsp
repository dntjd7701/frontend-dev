<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>    
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>    
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>    
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script>
// no jquery ver(바닐라)

// DOM Load Event
// 1. load : ALL(DOM, CSSom, Image)
// 2. DOMContentLoaded : DOM만 다 완성(CSS X -> CSSom, Image X)
window.addEventListener("DOMContentLoaded", function(){
	document.getElementsByTagName("button")[0].addEventListener("click", function(){ // HTML Element
		
		let xhr = null;
		if(window.ActiveXObject){ // <=IE6
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		} else if(window.XMLHttpRequest) {		// other standars and IE7+
			xhr = new XMLHttpRequest();
		} else {
			console.log("Ajax 기능을 사용할 수 없습니다.");
			return;
		}

		xhr.addEventListener("readystatechange", function(){
			if(this.readyState == XMLHttpRequest.UNSET){ //readyState:0
				// request 초기화 전 
				console.log("State UNSET: ");
			}else if(this.readyState == XMLHttpRequest.OPENED){ //readyState:1
				// 서버와 연결이 성공 
				console.log("State OPENED: ");
			}else if(this.readyState == XMLHttpRequest.HEADER_RECEIVED){ //readyState:2
				// 서버가 request를 받음  
				console.log("State HEADER_RECEIVED: ");
			}else if(this.readyState == XMLHttpRequest.LOADING){  //readyState:3
				// response 처리 중  
				console.log("State LOADING: ");
			}else if(this.readyState == XMLHttpRequest.DONE){  //readyState:4
				// response 처리 완료 
				console.log("State DONE : ");
				
				if(this.status != 200){
					console.error(this.status);
					return;
				} 
				
				const response = JSON.parse(this.responseText);

				let html = "";
				html += "<h4>" + response.data.no + "</h4>";
				html += "<h5>" + response.data.name + "</h5>";
				html += "<p>" + response.data.message + "</p>";
				document.getElementById("data").innerHTML = html;
			}
		});
		xhr.open("GET", "${pageContext.request.contextPath }/api/json", true);
		xhr.send();
	});
});


</script>
</head>
<body>
	<h1>AJAX Test- XmlHttpRequest</h1>
	<button>Bring data</button>
	<div id="data"></div>
</body>
</html>