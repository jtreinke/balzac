$(document).scroll(function(){

	var y = $(document).scrollTop();
	$("#update").html(y);

	if (y > 0) {
		$("#one").fadeIn();
	}
	else {
		$("#one").fadeOut();
	}
	if (y > 250) {
		$("#two").fadeIn();
	}
	else {
		$("#two").fadeOut();
	}
	if (y > 400) {
		$("#three").fadeIn();
	}
	else {
		$("#three").fadeOut();
	}
	if (y > 600) {
		$("#four").fadeIn();
	}
	else {
		$("#four").fadeOut();
	}
	if (y > 800) {
		$("#five").fadeIn();
	}
	else {
		$("#five").fadeOut();
	}
	if (y > 950) {
		$("#six").fadeIn();
	}
	else {
		$("#six").fadeOut();
	}
	
	if (y > 1200) {
		$("#container").css({"position": "relative"});
		$("#container").css({"top": "0px"});
	}
	
	else {
	$("#container").css({"position": "fixed"});
	$("#container").css({"top": "0px"});
	}

});



