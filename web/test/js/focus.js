//<![CDATA[
$(function(){
	(function(){
		var curr = 0;
		$(".focus li").each(function(i){
			$(this).click(function(){
				curr = i;
			
				$(".focus  p").eq(i).fadeIn("slow").siblings("p").hide();
				$(this).siblings("li").removeClass("focus_L").end().addClass("focus_L");
				return false;
			});
		});
		
		var pg = function(flag){
			//flag:true��ʾǰ���� false��ʾ��
			if (flag) {
				if (curr == 0) {
					todo = 1;
				} else {
					todo = (curr - 1) % 3;
				}
			} else {
				todo = (curr + 1) % 3;
			}
			$(".focus li").eq(todo).click();
		};
		
		//�Զ���
		var timer = setInterval(function(){
			todo = (curr + 1) % 3;
			$(".focus li").eq(todo).click();
		},5000);
		
		//�����ͣ�ڴ�������ʱֹͣ�Զ���
		$(".focus p").hover(function(){
				clearInterval(timer);
			},
			function(){
				timer = setInterval(function(){
				todo = (curr + 1) % 3;
				$(".focus li").eq(todo).click();
				},5000);			
			}
		);
	})();
});

//cl_focus
$(function(){
	(function(){
		var curr = 0;
		$(".cl_focus li").each(function(i){
			$(this).click(function(){
				curr = i;
			
				$(".cl_focus  p").eq(i).fadeIn("slow").siblings("p").hide();
				$(this).siblings("li").removeClass("cl_focus_L").end().addClass("cl_focus_L");
				return false;
			});
		});
		
		var pg = function(flag){
			//flag:true��ʾǰ���� false��ʾ��
			if (flag) {
				if (curr == 0) {
					todo = 1;
				} else {
					todo = (curr - 1) % 3;
				}
			} else {
				todo = (curr + 1) % 3;
			}
			$(".cl_focus li").eq(todo).click();
		};
		
		//�Զ���
		var timer = setInterval(function(){
			todo = (curr + 1) % 3;
			$(".cl_focus li").eq(todo).click();
		},5000);
		
		//�����ͣ�ڴ�������ʱֹͣ�Զ���
		$("cl_.focus p").hover(function(){
				clearInterval(timer);
			},
			function(){
				timer = setInterval(function(){
				todo = (curr + 1) % 3;
				$(".cl_focus li").eq(todo).click();
				},5000);			
			}
		);
	})();
});