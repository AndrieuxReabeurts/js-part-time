function ifElseShortCircuit() {
	if (1 === 2) {
		return "one equals one";
	}
	else if (2 === 2) {
		return "two equals two";
	}
	else {
		return "too much truth for the else case";
	}
}

// console.log(ifElseShortCircuit());