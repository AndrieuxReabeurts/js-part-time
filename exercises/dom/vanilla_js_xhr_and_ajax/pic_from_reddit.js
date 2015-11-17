$(document).ready(function(){

	// var xhr = new XMLHttpRequest();
	// console.log(xhr);

	// xhr.onload = function() {
	// 	if (xhr.status === 200) {
	// 		console.log(JSON.parse(xhr.responseText).kind);
	// 		console.log(JSON.parse(xhr.responseText));
	// 		console.log(JSON.parse(xhr.responseText).data.children[22].data.preview.images[0].source.url);
	// 	}
	// }

	// xhr.open('GET', 'https://www.reddit.com/r/aww.json', true);
	// xhr.send();

	$("#btn2").on("click", function(){
		event.preventDefault();
		$.ajax({
			url: 'https://www.reddit.com/r/aww.json',
			method: 'GET',
			success: function(data, response){
				console.log(response)
				var newimg = $("<img>");
				newimg.attr("src", data.data.children[22].data.preview.images[0].source.url)
				$("body").append(newimg);
			},
			error: function(response){
				console.log("failed");
			}
		})

	})

});