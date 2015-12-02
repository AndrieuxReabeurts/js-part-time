heroku_guide

1. set up a heroku account
2. download the heroku toolbelt
3. either clone or pull from master to get the sample app, navigate into it's root directory.  Run "ls -la" and if there is no .git file listed, run git init to create a local repo
4. run "heroku login" in terminal
5. npm init to create a package.json file
6. npm install to include the dependencies we need for this project
	npm install express --save
	npm install concat-stream --save
7. add data identifying your version of node to your package.json file
	"engines": {
		"node": "0.?.0"  //run node -v in terminal to get your version
	}
8. create a Procfile that includes this line - web: node server.js
9. add a "start" script to our "scripts" object in package.json - "start": "node server.js"
10. run heroku local web to run the app locally
11. add "process.env.PORT" to your server.js to establish where your app should listen remotely and locally
12. run "heroku create"

13. run "git add ." to add all code, "git commit" to commit the additions, then "git push heroku master" to send everything up to heroku's remote repo.
14. make sure at least one instance is running "heroku ps:scale web=1"
15. run "heroku open"

