///// LOCAL AND GLOBAL SCOPE

var localVar = "I'm the global version";
// console.log(localVar);

function localGlobal(varAsArg){
	console.log("INSIDE THE FUNCTION!!!");
 	// console.log(localVar);	
 	localVar = "I'm the local version";
 	console.log(varAsArg);
}

// localGlobal(localVar);
//console.log(localVar)
localVar = "STILL global, reassignment taking place in GLOBAL SCOPE";
// console.log(localVar);