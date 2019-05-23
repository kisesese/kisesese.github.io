$(function() {
	//进行轮播
	function carousel(num) {

		set = setInterval(() => {
			$(".carousel > .img li").eq(num).show().siblings("li").hide();
			$(".carousel > .sup li").eq(num).addClass("action").siblings("li").removeClass("action");
			num++;
			if(num == 5) {
				num = 0
			}
		}, 1000);

	}
	carousel(0);

	function sup() {
		//图片下面的li的变化
		$(".carousel > .sup li").on({
			"mousemove": function() {
				clearInterval(set);
				$(this).addClass("action").siblings("li").removeClass("action");
				$(".carousel > .img li").eq($(this).index()).show().siblings("li").hide();
			},
			"mouseout": function() {
				carousel($(this).index() + 1);
			}
		})
		
		//改变进入标签时的颜色
		$(".sider-right > #colligate li a").on({
			"mousemove": function() {
				if($(this).parent().index() == 1 || $(this).parent().index() == 2 || $(this).parent().index() == 3) {
					$(this).css("color", "#6388c5");
				} else if($(this).parent().index() == 4 || $(this).parent().index() == 6) {
					$(this).css("color", "#bb9a6c");
				} else if($(this).parent().index() == 5) {
					$(this).css("color", "#e9852d");
				}
			},
			"mouseout": function() {
				$(this).css("color", "#676767")
			}
		})
		
		
	}

	function chengColor(pag, color) {
		$(pag).on({
			"mousemove": function() {
				console.log("aaa")
				$(this).css("color", color);
			},
			"mouseout": function() {
				$(this).css("color", "#676767")
			}
		})
	}
	chengColor(".sider-right > #notice li a", "#bb9a6c");
	chengColor(".sider-right > #game li a", "#6388c5");
	chengColor(".sider-right > #strategy li a", "#4ba36a");
	chengColor(".sider-right > #community li a", "#bb9a6c");
	sup();
	//移动到一张图片时另一张图片显示出来
	var img = $(".edition .left li:eq(1)").find("img");
	$(img[0]).show().siblings("img").hide()
	$(".edition .left li:eq(1)").on({
		"mousemove": function() {
			$(img[1]).show().siblings("img").hide();
		},
		"mouseout": function() {
				$(img[0]).show().siblings("img").hide()
			}
	})
	//正在活动时所有li的：after显示
	
	$(".sider-right > ul").eq(1).show().siblings(".sider-mider").hide();
	$(".sider-right > .sider-top li").mousemove(function() {
			$(".sider-right > ul").eq($(this).index() + 1).show().siblings(".sider-mider").hide();
			$(this).addClass("active").siblings("li").removeClass("active");
		})
	$(".campaign > div").eq(1).show().siblings(".campaign-img").hide();
		$(".campaign .campaign-nav ul > li").mousemove(function() {
			console.log("aa");
			$(".campaign > div").eq($(this).index() + 1).show().siblings(".campaign-img").hide();
			$(this).addClass("action").siblings("li").removeClass("action");
		})
		$(".video > .recommendAll").eq(0).show().siblings(".recommendAll").hide();
	$(".recommend .recommend-top > li").mousemove(function(){
		$(this).addClass("action").siblings("li").removeClass("action");
		$(".video .recommendAll").eq($(this).index()).show().siblings(".recommendAll").hide();
	})
	
})