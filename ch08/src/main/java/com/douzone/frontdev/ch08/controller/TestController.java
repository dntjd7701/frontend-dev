package com.douzone.frontdev.ch08.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

// 주로 jsp 응답, HTML/CSS/JS
// JSP->JS 랜딩

@Controller
@RequestMapping("/test")
public class TestController {

	@RequestMapping("/text")
	public String text() {
		return "text";
	}
	
	@RequestMapping("/html")
	public String html() {
		return "html";
	}
	
	@RequestMapping("/xml")
	public String xml() {
		return "xml";
	}
	
	@RequestMapping("/json1")
	public String json1() {
		return "json1";
	}
	
	@RequestMapping("/json2")
	public String json2() {
		return "json2";
	}
}