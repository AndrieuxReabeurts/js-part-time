// vowel finder(s)

function vowelsWithNestedLoops(sentence){
	var vowelsArray = ["a", "e", "i", "o", "u"];
	var vowelsCount = 0;
	for (var i = 0; i < sentence.length; i++) {
		for (var j = 0; j < vowelsArray.length; j++) {
			if (sentence[i] == vowelsArray[j]) {
				vowelsCount += 1;
			}
		}
	}
	return vowelsCount;
}

// console.log(vowels("there are severe uses of the letter \"e\n everywhere"));

function vowelsWithObject(sentence){
	var vowelsObject = {"a": 0, "e": 0, "i": 0, "o": 0, "u": 0, total: 0};
	for (var i = 0; i < sentence.length; i++) {
		if (vowelsObject[sentence[i]] !== undefined) {
			vowelsObject[sentence[i]]++;
			vowelsObject.total++;
		}
	}
	return vowelsObject
}

// console.log(vowelsWithObject("there are severe uses of the letter \"e\n everywhere"));
