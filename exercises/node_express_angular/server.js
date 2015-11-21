var express = require('express');
var app = express();
var http = require('http');
var concat = require("concat-stream");

app.use(express.static(__dirname+'/public')); 

app.get("/api", function(req, res){
	console.log(req);
	http.get("http://www.reddit.com/r/aww.json",
		function (response){
			console.log(response);
			response.pipe(concat(function (data){
				// console.log(data.toString());
				res.json(JSON.parse(data));
			}))
			
		})
})
app.listen(3000);

app.get("*", function(req, res) {
	res.sendfile('./public/index.html'); //load single view file
});