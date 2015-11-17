//// 1. return square of num function(s)

function squarer(numToSquare) {
	return numToSquare * numToSquare;
}

function squarerNoMultOperator(numToSquare) {
	var container = 0;
	for (var i = 0; i < numToSquare; i++) {
		container += numToSquare;
	}
	return container;
}

// console.log(squarer(8));
// console.log(squarerNoMultOperator(8));