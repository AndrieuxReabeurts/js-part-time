window.onload = function() {

	var users = [
		{ 
			username: "exampledude",
			password: "12341234"
		},
		{
			username: "examplegal",
			password: "12345678"
		},
		{	
			username: "examplist",
			password: "11111111"
		}
	];
	
	var ok = document.getElementById('button');
	ok.addEventListener("click", turnGreen);

	function turnGreen(){
		var userName = document.getElementById('username');
		var password = document.getElementById('password');

		checkUserName(userName);
		checkPassword(password, userName);
	}

	function checkUserName(userName){
		var check = true, index = 0;

		while (check && index < users.length) {
			if (users[index].username === userName.value) {
				userName.parentNode.className = "accepted green-bg";
				check = false;
			}
			else {
				userName.parentNode.className = "accepted red-bg";
				index++;
			}
		}
	}

	function checkPassword(password, userName){
		var check = true, index = 0;

		while (check && index < users.length) {
			if (users[index].password === password.value && users[index].username === userName.value) {
				password.parentNode.className = "accepted green-bg";
				check = false;
			}
			else {
				password.parentNode.className = "accepted red-bg";
				index++;
			}
		}
	}

};