package com.douzone.frontdev.ch08.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

// XmlHttpRequest의 요청을 처리하는 API Conrtroller, 데이터 처리하자 

@Controller
@RequestMapping("/api")
public class ApiController {
	
	// MessageConverter -> RequestBody -> string 보내기 
	@ResponseBody
	@RequestMapping("/text")
	public String text() {
		return "Text 데이터";
	}
}
