var http = require('http');

http.createServer(function(request, response){
	response.writeHead(200,{Content: "text/html"});
	response.write("<div>hello-world</div>");
	response.end();
}).listen(8888);