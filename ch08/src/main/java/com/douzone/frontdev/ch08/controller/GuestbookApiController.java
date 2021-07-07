package com.douzone.frontdev.ch08.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.douzone.frontdev.ch08.dto.JsonResult;
import com.douzone.frontdev.ch08.vo.GuestbookVo;

// 예시용
// 가라데이터용 

@Controller
@RequestMapping("/guestbook/api")
public class GuestbookApiController {
	
	@ResponseBody // RestController 쓰면 이거 안해도 ㅇ
	@RequestMapping("/list")
	public JsonResult ex1() {
		List<GuestbookVo> list = new ArrayList<>();
		// 가라 데이터
		GuestbookVo vo3 = new GuestbookVo();
	      vo3.setNo(3L);
	      vo3.setName("둘리3");
	      vo3.setMessage("호이3");
	      list.add(vo3);
	      
	      GuestbookVo vo2 = new GuestbookVo();
	      vo2.setNo(2L);
	      vo2.setName("둘리2");
	      vo2.setMessage("호이2");
	      list.add(vo2);
	      
	      GuestbookVo vo1 = new GuestbookVo();
	      vo1.setNo(1L);
	      vo1.setName("둘리1");
	      vo1.setMessage("호이1");
	      list.add(vo1);
		return JsonResult.success(list);
	}
	
	@ResponseBody
	@RequestMapping("/add")
	public JsonResult ex2(@RequestBody GuestbookVo vo) {
		// 등록 작업을 했다~(GuestbookService)
		// 이제 그 놈을 받아와야해 (no가 있음)
		vo.setNo(11L); //이건 그냥 예시로 
		vo.setPassword("");
		
		return JsonResult.success(vo);
	}
	
	
	@ResponseBody
	@RequestMapping("/delete/{no}")
	public JsonResult ex2(
			@PathVariable("no") Long no,
			String password) {
		// 삭제 작업을 했다~(GuestbookService)
		Long data = 0L;
		// 1. 삭제가 안된 경우(false 리턴)
		// data = -1L;
		
		// 2. 삭제가 성공한 경우
		data = no;
		
		
		return JsonResult.success(data);
	}
	
}
