////////OBJECT LITERAL JEALOUS SIBLINGS

var siblingOne = {
	name: "jeff",
	speak: function(siblingsName){ 
		return "I'm " + this.name + " and mom loves me more because I was born before " + siblingsName.name;;}
}

var siblingTwo = {
	name: "steve",
	speak: function(siblingsName){ 
		return "I'm " + this.name + " and mom loves me more because I was born before " + siblingsName.name;}
}

console.log(siblingOne.speak(siblingTwo))
console.log(siblingTwo.speak(siblingOne))

// console.log(siblingOne.speak(siblingTwo.name))

var ObjectOne = function(name, objectTwo) {
	this.name = name;
	this.sibling = objectTwo;
	this.speak = function() {
		return "I'm " + this.name + " and mom loves me more because I was born before " + this.sibling.name;
	}
}

var ObjectTwo = function(name, objectOne) {
	this.name = name;
	this.sibling = objectOne;
	this.speak = function() {
		return "I'm " + this.name + " and mom loves me more because I was born before " + this.sibling.name;
	}
}


////////CONSTRUCTOR JEALOUS SIBLINGS WITH PROTOTYPE


var ObjectOne = function(name, objectTwo) {
	this.name = name;
	this.sibling = objectTwo;
}

ObjectOne.prototype.tellMeYouLoveMe = function() {
	return "I'm " + this.name + " and mom loves me more because I was born before " + this.sibling.name;
}

var ObjectTwo = function(name, objectOne) {
	this.name = name;
	this.beloved = objectOne;
}

ObjectTwo.prototype.tellMeYouLoveMe = function() {
	return "I'm " + this.name + " and mom loves me more than " + this.beloved.name + " because I'm newer.";
}

var objectOne = new ObjectOne("fred");
var objectTwo = new ObjectTwo("sam");
objectOne.beloved = objectTwo;
objectTwo.beloved = objectOne;
// console.log(objectOne.tellMeYouLoveMe())
// console.log(objectTwo.tellMeYouLoveMe())