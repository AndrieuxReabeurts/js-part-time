var express = require('express');
var app = express();
var http = require('http');
var concat = require("concat-stream");

app.use(express.static(__dirname+'/public')); 

app.get("/root", function(req, res){
	res.json(2 + 2);
})

app.listen(process.env.PORT || 5000); //HEROKU

app.get("*", function(req, res) {
	res.sendfile('./public/index.html'); //load single view file
});