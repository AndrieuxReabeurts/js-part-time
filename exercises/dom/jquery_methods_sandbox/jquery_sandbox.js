$(document).ready(function(){
// 	$('#clickme').click(function(){
// 		$('#burger').animate({
// 			opacity: 0.25,
// 			left: "+=50",
// 			height:'400px'
// 		}, 0);
// 	})
// 	$('input').keypress(function(){
// 		var a = Math.floor(Math.random()*255)
// 		var b = Math.floor(Math.random()*255)
// 		var c = Math.floor(Math.random()*255)

// 		$('div').css("background-color",getRandomColor());
// 	});

// function getRandomColor() {
//         var letters = '0123456789ABCDEF'.split('');
//         var color = '#';
//         for (var i = 0; i < 6; i++ ) {
//             color += letters[Math.floor(Math.random() * 16)];
//         }
//         return color;
//     }
	// $('#div1').click(function(){

	// 	$('#div1').slideUp('slow',function(){

	// 	});
	// });
	$('button').click(function(click){
		$(".divClass").toggleClass("divClass2");

	});

});

