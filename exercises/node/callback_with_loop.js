function callBack(returnData) {
	console.log(returnData)
}

function calling(callBack, determinant) {
	var array = ["apple", "orange", "steak"]
	for (var i = 0; i < array.length; i++) {
		if(array[i] === determinant) {
			return callBack(array[i])
		}
	}
	callBack("no match");
};
calling(callBack, "apple");
calling(callBack, "pizza");
