//SQUARES IN A RANGE

function squaresInRange(num1, num2) {
	var count = 0;
	for (var i = 0; i < num2; i++) {
		if (i * i >= num1 && i * i <= num2) {
			count++;
		}
	}
	return count;
}

// console.log(squaresInRange(4, 17));