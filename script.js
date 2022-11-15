// create three variables with int values that stand for the three choices in the game
let rock = 1;
let paper = 2;
let scissors = 3;

// create the hard coded value for the player
let playerChoice = 1;

// create the function that gets a random number between 1-3 inc to represent computer choice.
// Use Math.random with Math.floor
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    return computerChoice;
}
