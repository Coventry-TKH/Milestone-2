var numSquares = 6;
var colors = [];
var bgColor = "#232323";
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();


resetButton.addEventListener("click", function() {
	reset();
});

function init() {
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons() {
	// Mode buttons event listeners
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected")
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;	
			reset();
		});
	}
}

function setupSquares() {
	// Squares event listeners
	for(var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor) {
				changeColors(clickedColor);
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				h1.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = bgColor;
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}
function reset() {
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";	
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
				squares[i].style.display = "none";
		}		
	}
	h1.style.backgroundColor = "steelblue";
}

function changeColors(color) {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make array
	var arr = []
	//add num*randomColors to array
	for(var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	//return array
	return arr
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}