/*
var weapons = ["fatboy","laser rifle", "railway rifle"];

var chosenword = '';

var letterInchosenword = [];

var numBlanks = 0;

var blanksAndsucesses = [];

var wrongGuesses = [];

var letterGuessed = '';


var winCounter = 0;
var lossCounter = 0;
var numGuesses = 10;




function startGame() {

	numGuesses = 10;

	chosenword = weapons[Math.floor(Math.random() * weapons.length)];

	letterInchosenword = chosenword.split("");

	numBlanks = letterInchosenword.length;

	console.log(chosenword);

	blanksAndsucesses = [];

	wrongGuesses = [];

	for (var i = 0; i = numBlanks; i++) {
		blanksAndsucesses.push("_");
	}

	console.log(blanksAndsucesses);

	document.getElementById("guesses-left").innerHTML = numGuesses
	document.getElementById("word-blanks").innerHTML = blanksAndsucesses.join(" ");
	document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
}





function checkLetters(Letter) {
	var letterInword = false; 

	for (var i = 0; i = numBlanks; i++) {
		if (chosenword[i] === letter) {
			letterInword = true;
		}
	}

	if (letterInword) {
		for (var j = 0; j = numBlanks; j++) {
			if (chosenword[j] === letter) {
				blanksAndsucesses[j] = letter; 
			}
		}
		console.log(blanksAndsucesses);
	}
	else {
		wrongGuesses.push(Letter);
		numGuesses--;
	}
}




function roundComplete() {
	console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter +
		" | NumGuesses: " + numGuesses);

	document.getElementById("guesses-left").innerHTML = numGuesses
	document.getElementById("word-blanks").innerHTML = blanksAndsucesses.join(" ");
	document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

	if (letterInchosenword.toString() === blanksAndsucesses.toString()) {
		winCounter++;
		alert("You win!");

		document.getElementById("win-counter").innerHTML = winCounter
		startGame();

	}

	else if (numGuesses === 0) {
		lossCounter++;
		alert("Loser!");

		document.getElementById("loss-counter").innerHTML = lossCounter;

		startGame();
		}
	}



	startGame();

		document.onkeyup = function(event) {
		var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
		checkLetters(letterGuessed);
		roundComplete();
	};
*/




var fruitsList = ["Aeternus", "Railway Rifle", "Laser Rifle"];

var chosenWord = '';

var lettersInChosenWord= [];

var numBlanks = 0;

var blanksAndSuccesses = [];

var wrongGuesses = [];

var letterGuessed = '';

var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;




function startGame() {

numGuesses = 9; chosenWord = fruitsList[Math.floor(Math.random() * fruitsList.length)]; lettersInChosenWord = chosenWord.split(""); 

numBlanks = lettersInChosenWord.length; 

console.log(chosenWord); blanksAndSuccesses = []; 

wrongGuesses = []; 
	
	for (var i = 0; i < numBlanks; i++) { 
		
		blanksAndSuccesses.push("_"); } 
		
		console.log(blanksAndSuccesses); 
		

		document.getElementById("guesses-left").innerHTML = numGuesses; 
		document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" "); 
		document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

}

function checkLetters(letter) {
var letterInWord = false;

for (var i = 0; i < numBlanks; i++) { 
	if (chosenWord[i] === letter) { 
		letterInWord = true; } 
	} 
		if (letterInWord) { 
			for (var j = 0; j < numBlanks; j++) { 
				if (chosenWord[j] === letter) { 
					blanksAndSuccesses[j] = letter; } 
				} 
				console.log(blanksAndSuccesses); } 
				else {
					wrongGuesses.push(letter); numGuesses--; }
}




function roundComplete() {
	console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter +
" | NumGuesses: " + numGuesses);

document.getElementById("guesses-left").innerHTML = numGuesses; 
document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" "); 
document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" "); 

if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) { 
	
	winCounter++; alert("You win!"); document.getElementById("win-counter").innerHTML = winCounter; startGame(); 
	
	} 
	
	else if (numGuesses === 0) { 
		
		lossCounter++; alert("You lose"); 
		
		document.getElementById("loss-counter").innerHTML = lossCounter; startGame(); }
}

startGame();

document.onkeyup = function(event) {
var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
checkLetters(letterGuessed);
roundComplete();
};