var random = 1;
var colors = {
	1 : "#52CCB3",
	2 : "#EE776B",
	3 : "#F4D248",
	4 : "#3B5998"
};
var colors_ball = {
	1 : "#EE776B",
	2 : "#52CCB3",
	3 : "#3B5998",
	4 : "#F4D248"
};
$(document).ready(function() {

	$("body").css("background-color", colors[random]);
	$(".turquoise").css("background-color", colors[random]);
	$(".ch-info").css("background-color", colors[random]);
	$(".ch-info-back").css("background-color", colors[random]);

	$('.share-action').attr("style", "background-color:" + colors_ball[random] + " !important;");
	$(".spin-id").css("background-color", colors_ball[random]);
	$(".footer-user").css("color", colors_ball[random]);

	$('#search').attr("style", "background-color: " + colors_ball[random] + " ;");

	$("#next-arrow").click(function() {
		if (4 > random) {
			random++;
		}
		$("body").css("background-color", colors[random]);
		$(".turquoise").css("background-color", colors[random]);
		$(".ch-info").css("background-color", colors[random]);
		$(".ch-info-back").css("background-color", colors[random]);

		$('.share-action').attr("style", "background-color:" + colors_ball[random] + " !important;");
		$(".spin-id").css("background-color", colors_ball[random]);
		$(".footer-user").css("color", colors_ball[random]);

		$('#search').attr("style", "background-color: " + colors_ball[random] + " ;");

	});

	$("#prev-arrow").click(function() {
		if (1 < random) {
			random--;
		}
		$("body").css("background-color", colors[random]);
		$(".turquoise").css("background-color", colors[random]);
		$(".ch-info").css("background-color", colors[random]);
		$(".ch-info-back").css("background-color", colors[random]);

		$('.share-action').attr("style", "background-color:" + colors_ball[random] + " !important;");
		$(".spin-id").css("background-color", colors_ball[random]);
		$(".footer-user").css("color", colors_ball[random]);

		$('#search').attr("style", "background-color: " + colors_ball[random] + " ;");
	});

}); 