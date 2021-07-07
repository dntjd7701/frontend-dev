package com.douzone.frontdev.ch08.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

// 랜더링 예시 
// 예시용 

@Controller
@RequestMapping("/test/gb")
public class GuestbookTestController {
	
	@RequestMapping("/ex1")
	public String ex1() {
		return "gb/ex1";
	}
}
