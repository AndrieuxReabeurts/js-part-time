//// 2. email and password verifier

function login(address, password) {
	if (validAddr(address) && validPW(password)) {
		return "valid";
	}
	else if (!(validAddr(address)) && validPW(password)) {
		return "invalid address";
	}
	else if (validAddr(address) && !(validPW(password))) {
		return "invalid password";
	}
	else { //address is invalid && password is invalid
		return "invalid address and password";
	}
}

function validPW(password) {
	if (password === "12345678" && password.length > 7) {
		return true;
	}
	else {
		return false;
	}
}

function validAddr(address) {
	var container_string = "";
	for (var i = 0; i < address.length; i++) {
		if (address[i] == "@" || address[i] == ".") {
			container_string += address[i];
		}
	}

	if (address == "example@ok.com" && container_string == "@.") {
		return true;
	}
}
 
// console.log(login("example@ok.com", "12345678"));
// console.log(login("example@ok", "12345678"));
// console.log(login("example@ok.com", "1234567"));
// console.log(login("example@ok", "1234567"));