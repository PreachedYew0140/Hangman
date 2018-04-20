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



// Array of word option (all lowercase)
var fruitsList = ["Aeternus", "Railway Rifle", "Laser Rifle"];

// Computer selected solution will be here
var chosenWord = '';

// Breaks the solution into individual letters
var lettersInChosenWord= [];

// Number of blanks we show based on the solution
var numBlanks = 0;

// Holds a mux of blanks and solved letters
var blanksAndSuccesses = [];

var wrongGuesses = [];

var letterGuessed = '';

// Game counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;




function startGame() {

	// Resets the guesses back to 0
	numGuesses = 9; 

	// Solution chosen randomly from wordlist
	chosenWord = fruitsList[Math.floor(Math.random() * fruitsList.length)]; 

	// The word is broken into indiviual letters
	lettersInChosenWord = chosenWord.split(""); 

	// Counts the number of letters in the word
	numBlanks = lettersInChosenWord.length; 

	//Prints the solution in the console (for testing purposes)
	console.log(chosenWord); 
	
	// Resets the guess and success array at each round
	blanksAndSuccesses = []; 

	// Resets the wrong guesses from the previous round
	wrongGuesses = []; 
	
	/* Fills up the blanksAndSuccesses list with the appropiate number of blanks
	which is based on the number of letter in the solution */
	for (var i = 0; i < numBlanks; i++) { 
		blanksAndSuccesses.push("_"); 
	} 
		
	// Prints the initial blanks in the console
		console.log(blanksAndSuccesses); 
		
		// Reprints the guesses left to 9
		document.getElementById("guesses-left").innerHTML = numGuesses; 
		
		//Prints the blanks at the beginning of each round in the HTML
		document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
		
		// Clears the wrong guesses from the previous round
		document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

}

// Where we will do all of the comparisons for matches
function checkLetters(letter) {
	// boolean which will be changed based on whether or not
	// a user letter is found in the word
	var letterInWord = false;

	// Check if a letter exists inside the array at all
	for (var i = 0; i < numBlanks; i++) { 
		if (chosenWord[i] === letter) { 
			// If the the letter exists then change this boolean to true
			//This will be used in the next step
			letterInWord = true; 
		} 
	} 

	//If the letter exists somewhere in the word, then figure out
	// exactly where (which indices)
	if (letterInWord) { 
		// Loop through the word
		for (var j = 0; j < numBlanks; j++) { 
			//Ppoopulate the blanksAndSucceses with every instance of the letter 
			if (chosenWord[j] === letter) { 
				// Set specific blank spaces to equal the correct letter
				// When there is a match
				blanksAndSuccesses[j] = letter; } 
			} 
		}
	// Log the current blanks and successes for testing purposes
	console.log(blanksAndSuccesses); 
} 
	else {
		// Then we add the letter to the lisut of wrong letter 
		wrongGuesses.push(letter); 
		// We also subtract one of the guesses (decrement the guesses)
		numGuesses--; 
	}
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