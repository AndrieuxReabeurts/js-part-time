// COUNT OF OCCURRENCES OF WORDS IN SENTENCE (MODE FINDER)

function modeFinder(sentence) {
	var sentenceArray = sentence.split(" ");
	var wordCountObject = {};
	for (var i = 0; i < sentenceArray.length; i++) {
		if (wordCountObject[sentenceArray[i]] === undefined) {
			wordCountObject[sentenceArray[i]] = 1;
		}
		else {
			wordCountObject[sentenceArray[i]]++;
		}
	}
	return wordCountObject;
}

var testSentence = "one one one one two";
// console.log(modeFinder(testSentence));