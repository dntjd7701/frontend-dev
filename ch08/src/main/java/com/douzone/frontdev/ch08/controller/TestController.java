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
}