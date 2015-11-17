function demo(funcInFunction){ //un-fired function here
	console.log("in this function first");
	var dataCreatedAndPassed = "assigned in demo"
	funcInFunction(dataCreatedAndPassed); // fired with parentheses
}

///////////

demo(function(dataFromDemo){
	console.log("in this function");
	console.log(dataFromDemo);
	dataFromDemo = "now back in the other function";
	console.log(dataFromDemo);
});


