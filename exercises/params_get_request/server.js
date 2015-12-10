var express = require("express");
var app = express();
var http = require('http');
var concat = require("concat-stream"); 

app.use(express.static(__dirname))

app.get("/api", function(req, res){
	console.log(req.query);
	console.log(req.query.beer);
	http.get("https://www.reddit.com/r/"+req.query.url,
		function(response){
			response.pipe(concat(function(data){
				res.json(JSON.parse(data));
		}));
	});
});

app.listen(8000);

app.get("*", function(req, res){
	res.sendFile(__dirname+"/index.html");
});