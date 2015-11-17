$(document).ready(function(){

	$("li").on("mouseenter", function(){
		$(this).addClass("hover-class");
	});

	$("li").on("mouseleave", function(){
		$(this).removeClass("hover-class");
	});

	// var container = "";

	// $("li").on("click", function(){
	// 	if ($(this).text() !== "clicked") {
	// 		container = $(this).text();
	// 		$(this).text("clicked");
	// 	}
	// 	else { //text on li is "clicked"
	// 		$(this).text(container);
	// 	}
	// });

	var container = {};

	$("li").on("click", function(){
		if ($(this).text() !== "clicked") {
			container[$(this).index()] = $(this).text();
			console.log(container);
			$(this).text("clicked");
		}
		else {
			$(this).text(container[$(this).index()]);
		}
	});

});