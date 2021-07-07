package com.douzone.frontdev.ch08.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.douzone.frontdev.ch08.dto.JsonResult;
import com.douzone.frontdev.ch08.vo.GuestbookVo;

// 예시용
// 가라데이터용 

@Controller
@RequestMapping("/guestbook/api")
public class GuestbookApiController {
	// RestController 쓰면 이거 안해도 ㅇ
	@ResponseBody
	@RequestMapping("/list")
	public JsonResult ex1() {
		List<GuestbookVo> list = new ArrayList<>();
		// 가라 데이터 
		return JsonResult.success(list);
	}
}
