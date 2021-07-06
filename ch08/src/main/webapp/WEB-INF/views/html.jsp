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
			// ajax 통신으로 로딩하는 방법 
			// 응답하는 text 내용이 로딩됌 
			// JS와 JSP의 혼용. 
			// JSP 엔진에서 실행. 
			$("p").load("${pageContext.request.contextPath }/api/html h1");	// Selector 사용 가능 	
		})
	});
</script>
</head>
<body>
	<h1>AJAX Test- html format message(data)</h1>
	<button>change</button>
	<p>Before change</p>
</body>
</html>