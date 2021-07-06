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
		$("button").click(function(){
			$.ajax({
				url: "${pageContext.request.contextPath }/api/xml",
				dataType: "xml", // xml or json
				success : function(response){ // callback
					const $data = $("data", response);
					const $no = $("no", $data);
					const $name = $("name", $data);
					const $message = $("message", $data);
					
					const no = $no.text();
					const name = $name.text();
					const message = $message.text();
					
					//rendering
					let html = "";
					html += "<h4>" + no + "</h4>";
					html += "<h5>" + name + "</h5>";
					html += "<p>" + message + "</p>";
					
					$("#data").append(html);
				}   
			})
		})
	});
</script>
</head>
<body>
	<h1>AJAX Test- xml format data</h1>
	<button>Bring data</button>
	<div id="data"></div>
</body>
</html>