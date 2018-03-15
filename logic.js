var weapons = ["fatboy","laser rifle", "railway rifle"];

var chosenword = "";

var letterInchosenword = [];

var numBlanks = 0;

var blanksAndsucesses = [];

var wrongGuesses = [];

var letterGuessed = "";


var winCounter = 0;
var lossCounter = 0;
var numGuesses = 10;




function startGame() {

	numGuesses = 10;

	chosenword = weapons[Math.floor(Math.random() * weapons.length)];

	letterInchosenword = chosenword.split("");

	numBlanks = letterInchosenword.length;

	console.log(chosenword);

}