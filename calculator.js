var display = document.getElementById('display');

var btns = document.querySelectorAll('.btn');

var memoryResult;
var resetAfterEqual = 0;

btns.forEach(function(btn) {
	btn.addEventListener("click", function() {
		if(btn.getAttribute("data-value") == "=") {
			equal();
			resetAfterEqual += 1;
		}
		else if(btn.getAttribute("data-value") == "c") {
			clean();
		}
		else if(btn.getAttribute("data-value") == "m+") {
			stockMemory("+"+display.textContent);
		}
		else if(btn.getAttribute("data-value") == "m-") {
			stockMemory("-"+display.textContent);
		}
		else if(btn.getAttribute("data-value") == "mrc") {
			displayMemory();
		}
		else if(btn.getAttribute("data-value") == "<") {
			modify();
		}
		else {
			insert(btn.getAttribute("data-value"));
		}
	});
});

function insert(num) {
	if(display.textContent == 0) {
		display.innerHTML = num;
	}
	else if(resetAfterEqual > 0) {
		display.innerHTML = num;
		resetAfterEqual = 0;
	}
	else {
		display.innerHTML = display.textContent+num;
	}
}

function equal(){
	if(display.textContent) {
		display.textContent = eval(display.textContent);
	}
}

function clean() {
	display.innerHTML = "";
}

function stockMemory(num) {
	if(memoryResult == undefined) {
		memoryResult = eval(0 + num);
	}else {
		memoryResult = eval(memoryResult + num);
	}
}

function displayMemory() {
	display.innerHTML = memoryResult;
}

function modify() {
	display.innerHTML = display.textContent.slice(0, display.textContent.length - 1);
}

