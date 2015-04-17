$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
		$('.ryu-throwing').hide();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show().animate(
			{'left': '1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '520px');
			});
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
		//vuelve a la posicion "listo"
	})
	$("body").keydown(function(x) {
		if (x.which == 88) {
			$(".ryu-ready").hide();
			$(".ryu-cool").show();
		}
	})
	$("body").keyup(function(x) {
		if (x.which == 88) {
			$(".ryu-ready").show();
			$(".ryu-cool").hide();

		}
	});

});


function playHadouken (){
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

