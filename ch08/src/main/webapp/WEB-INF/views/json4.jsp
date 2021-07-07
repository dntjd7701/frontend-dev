<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>    
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>    
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>    
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="${pageContext.request.contextPath }/jquery/jquery-3.6.0.js"></script>
<script>
	$(function(){
		const vo = {
			name: "dooly",
			password: "1234",
			message: "hello"
		};
		
		$("button").click(function(){
			$.ajax({
				url: "${pageContext.request.contextPath }/api/post02",
				dataType: "json", // xml or json
				type: "post",
				// 1. form data format (default)
				contentType: "application/json",
				data: JSON.stringify(vo),
				success : function(response){ // callback
					
					//rendering
					let html = "";
					html += "<h4>" + response.data.no + "</h4>";
					html += "<h5>" + response.data.name + "</h5>";
					html += "<p>" + response.data.message + "</p>";
					$("#data").append(html);
				}   
			})
		});
		
	});
</script>
</head>
<body>
	<h1>AJAX Test- post data(JSON format)</h1>
	<button>Send data</button>
	<div id="data"></div>
</body>
</html>