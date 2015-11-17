//PALINDROME FINDER

function palindrome(string) {
	var splitString = string.split("");
	for (var i=0; i<splitString.length; i++) {
		if (splitString[i] === splitString[splitString.length - (i+1)]) {
			return "found a one";
		}
		else {
			return "not a palindrome"
		}
	}
}

// console.log(palindrome("asdf"))
// console.log(palindrome("madam"))
// console.log(palindrome("abba"))