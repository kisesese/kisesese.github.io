$(function () {
	$("#img2").click(function () {
		var n = Math.floor(Math.random() * 8);
		var arr = [
			"免单4999元",
			"很遗憾，没有中奖呦！！",
			"提高白条额度",
			"免分期服务费",
			"免单5元",
			"免单10元",
			"免单50元",
			

		]
		rotateFn(n, arr[n]);
	})
	function move() {
		setInterval(function () {
			$("#ul ul").animate({
				marginTop: "-21px"
			}, 500)
			$("#ul ul li:first").appendTo($("#ul ul"));
		}, 1000)
	}
	move()
	function rotateFn(rdg, value) {
		$("#img2").rotate({
			angle: 0,
			duration: 4000,
			animateTo: rdg * (360 / 8) + 360 * 3,
			callback: function () {
				$('#alret').show();
				$('#alret p').text(value);
			}
		})
		$("sub").click(function () {
			$('#alret').hide();
		})

	}
})