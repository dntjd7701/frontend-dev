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
			password: "passsswoooorddd",
			email: "dooly@gmail.com",
			gender: "male"
		};
		
		$("#create").click(function(){
			$.ajax({
				url: "${pageContext.request.contextPath }/api/user",
				dataType: "json", // xml or json
				type: "post",
				contentType: "application/json",
				data: JSON.stringify(vo),
				success : function(response){ // callback
					console.log(response);
				}   
			})
		});
		
		$("#read").click(function(){
			$.ajax({
				url: "${pageContext.request.contextPath }/api/user/10",
				dataType: "json", // xml or json
				type: "get",
				success : function(response){ // callback
					console.log(response);
				}   
			})
		});
		
		$("#update").click(function(){
			const vo = {
					name: "dooly",
					password: "",
					email: "dooly@gmail.com",
					gender: "male"
				};
			
			$.ajax({
				url: "${pageContext.request.contextPath }/api/user/10",
				dataType: "json", // xml or json
				type: "put",
				contentType: "application/json",
				data: JSON.stringify(vo),
				success : function(response){ // callback
					console.log(response);
					}  
				})
			});
		
		$("#delete").click(function(){
			$.ajax({
				url: "${pageContext.request.contextPath }/api/user/10",
				dataType: "json", // xml or json
				type: "delete",
				data: "password=1234",
				success : function(response){ // callback
					console.log(response);
					}  
				})
		});
		
	});
</script>
</head>
<body>
	<h1>AJAX Test - Restful API</h1>
	<button id="create">Create(post)</button>
	<br/>
	<br/>
	<button id="read">Read(get)</button>
	<br/>
	<br/>
	<button id="update">Update(put)</button>
	<br/>
	<br/>
	<button id="delete">Delete(delete)</button>
</body>
</html>