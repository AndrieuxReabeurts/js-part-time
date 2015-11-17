window.onload = function() {

	var container = document.querySelector(".cont");
 
	for (var i = 0; i < 24; i++) {
		if (i % 6 === 0) {
			var newRow = document.createElement("div");
			newRow.setAttribute("class", "row");
			container.appendChild(newRow);
		}
		var newSeat = document.createElement("div");
		newSeat.setAttribute("class", "size");
		newRow.appendChild(newSeat);
	}

};