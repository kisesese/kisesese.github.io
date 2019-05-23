$(function(){
	$(document).scroll(function() {
//		for (var i =0;i < $(".x-hider .container .x-row1 > div").length;i++) {
//			if ($(".x-hider .container .x-row1 > div").eq(i).offset().top - $(window).height() + 50< $(document).scrollTop()) {
//
//					$(".x-hider .container .x-row1 > div").eq(i).css("animation-play-state",'running')
//			}
//		}
		$(".x-hider .container .x-row1 > div").each(function(index,element){
			if ($(element).offset().top - $(window).height() + 50< $(document).scrollTop()) {

					$(element).css("animation-play-state",'running')
					console.log($(element).offset().top)
			}
		})
		$(".x-hider .container .x-row2 > div").each(function(index,element){
			if ($(element).offset().top - $(window).height() + 50< $(document).scrollTop()) {

					$(element).css("animation-play-state",'running')
					console.log($(element).offset().top)
			}
		})
			})
})