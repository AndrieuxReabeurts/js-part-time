// WORDS AS NUMBERS CONVERTED TO INTEGERS

function wordsToNumbers(sentence){
	var wordNumsObject = {};
	var wordNumsArray = ["one", 
							"two", 
							"three", 
							"four", 
							"five", 
							"six", 
							"seven", 
							"eight", 
							"nine"];

	for (var i = 0; i < wordNumsArray.length; i++) {
		wordNumsObject[wordNumsArray[i]] = (i + 1);
	}

	var sentenceArray = sentence.split(" ");

	for (var i = 0; i < sentenceArray.length; i++) {
		if (wordNumsObject[sentenceArray[i]] !== undefined) {
			sentenceArray[i] = wordNumsObject[sentenceArray[i]]
		}
	}
	return sentenceArray.join();

}

var testSentence = "not us words one one one one two";
// console.log(wordsToNumbers(testSentence));