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
	
	@RequestMapping("/ex2")
	public String ex2() {
		return "gb/ex2";
	}
	

	@RequestMapping("/ex3")
	public String ex3() {
		return "gb/ex3";
	}
}
