window.onload = function(){

	var radios = document.getElementsByClassName('radio');

	// console.log(parseInt(radios.value));

	for (var i = 0; i < radios.length; i++) {
		radios[i].addEventListener("change", radioChosen);
	}

	function radioChosen() {
		var subTotal = parseFloat(document.getElementById("sub-total").value);
		var floatPercent = parseFloat("0." + this.value);
		var total = getTotal(subTotal, floatPercent).toFixed(2);
		var totalDiv = document.createElement("div");
		totalDiv.innerHTML = total;
		document.body.appendChild(totalDiv);
	}

	function getTotal(subTotal, tipPercent) {
		return subTotal + (subTotal * tipPercent);
	}

};

