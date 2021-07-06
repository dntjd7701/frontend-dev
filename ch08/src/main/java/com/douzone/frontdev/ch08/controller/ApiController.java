package com.douzone.frontdev.ch08.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.douzone.frontdev.ch08.dto.JsonResult;
import com.douzone.frontdev.ch08.dto.XmlResult;
import com.douzone.frontdev.ch08.vo.GuestbookVo;

// XmlHttpRequest의 요청을 처리하는 API Conrtroller, 데이터 처리하자 

@Controller
@RequestMapping("/api")
public class ApiController {
	
	// MessageConverter -> RequestBody -> string 보내기 
	// test
	@ResponseBody
	@RequestMapping("/text")
	public String text() {
		return "Text 데이터";
	}
	
	// message converter에서 바꿔줌. 
	// html
	@ResponseBody
	@RequestMapping("/html")
	public String html() {
		return "<h1>AJAX Practice</h1> <p>HTML data</p>";
	}
	
	// xml
	// object->xml(mashalling), xml->object(unmashalling)
	// xml message converter가 필요하다. 
	@ResponseBody
	@RequestMapping("/xml")
	public Object xml() {
		XmlResult.GuestbookVo vo = new XmlResult.GuestbookVo();
		vo.setNo(1L);
		vo.setName("mike");
		vo.setMessage("WOWOWWOWOWO!!!");
		
		return XmlResult.success(vo);
	}
	
	@ResponseBody
	@RequestMapping("/json")
	public Object json() {
		GuestbookVo vo = new GuestbookVo();
		vo.setNo(1L);
		vo.setName("json");
		vo.setMessage("It is!!!!!!!!");
		return JsonResult.success(vo);
	}
}
