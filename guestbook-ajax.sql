select no, name, date_format(reg_date, '%Y/%m/%d %H:%i:%s') as reg_date, message
			from guestbook 
			order by no desc
            limit 0, 3; 
            --  이게 맨 처음 쿼리, 기준 없이 무조권 가져오는거.
            
select no, name, date_format(reg_date, '%Y/%m/%d %H:%i:%s') as reg_date, message
			from guestbook 
            where no < 65
            order by no desc
            limit 0, 3;          
            -- 랜더링하고 no값을 no에 입력, 
            -- 0부터 클 경우,(동적쿼리사용) 맨 마지막 값을 no에 넣고, 컨트롤러에 넘긴 후 그걸g
            -- 기준으로 새롭게 찾는것. 

select * from guestbook;