<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>    
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>    
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>    
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<!-- alert를 이쁘게 꾸미기 위한 dialog 받기 -->
<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<script type="text/javascript" src="${pageContext.request.contextPath }/jquery/jquery-3.6.0.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/ejs/ejs.js"></script>
<!-- alert를 이쁘게 꾸미기 위한 dialog 받기 -->
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script>
// EJS-1) EJS Template 엔진의 준비 (Rendering)
var listItemEJS = new EJS({
	url : "${pageContext.request.contextPath }/ejs/listitem-template.ejs",
})

var messageBox = function(error, message){
	$("#dialog-message").dialog({
		modal:true, // 뒷 부분 투명하게.
		buttons: {
			"확인": function(){
				$(this).dialog("close");
			}
		}
	}).text(message).attr("title", error);
}

$(function(){
	$("#add-form").submit(function(event){
		event.preventDefault();
		vo = {}
		
		// val == value
		// alert는 구리니까, 이쁜 dialog쓰자. jQuery ui 쓰면 돼 
		
		// validation (name)
		vo.name = $("#input-name").val();
		if(vo.name == ""){
			messageBox("오류", "아이디가 없습니다.");
			return;
		}
		// validation (password)
		vo.password = $("#input-password").val();
		// validation (message)
		vo.message = $("#tx-content").val();
		
		// ajax
		$.ajax({
				url: "${pageContext.request.contextPath }/guestbook/api/add",
				dataType: "json",
				type: "post",
				contentType: "application/json",
				data: JSON.stringify(vo),
				success : function(response){ // callback
					// EJS-2) EJS 엔진의 가동 (데이터 삽입)
					html = listItemEJS.render(response.data);
					$("#list-guestbook").prepend(html);
				}   
			});
		
	});
});
</script>
</head>
<body>
<div id="guestbook">
				<h1>방명록</h1>
				
				<form id="add-form" action="" method="post">
					<input type="text" id="input-name" placeholder="이름">
					<input type="password" id="input-password" placeholder="비밀번호">
					<textarea id="tx-content" placeholder="내용을 입력해 주세요."></textarea>
					<input type="submit" value="보내기" />
				</form>
				<!-- list -->
				<ul id="list-guestbook">

					<li data-no=''>
						<strong>지나가다가</strong>
						<p>
							별루입니다.<br>
							비번:1234 -,.-
						</p>
						<strong></strong>
						<a href='' data-no=''>삭제</a> 
					</li>
					
					<li data-no=''>
						<strong>둘리</strong>
						<p>
							안녕하세요<br>
							홈페이지가 개 굿 입니다.
						</p>
						<strong></strong>
						<a href='' data-no=''>삭제</a> 
					</li>

					<li data-no=''>
						<strong>주인</strong>
						<p>
							아작스 방명록 입니다.<br>
							테스트~
						</p>
						<strong></strong>
						<a href='' data-no=''>삭제</a> 
					</li>
				</ul>
			</div>
			<!-- alert대신 사용할 dialog  -->
			<div id="dialog-message" title="예제" style="display:none">
  				<p>안녕하세요~</p>
			</div>
		
</body>
</html>