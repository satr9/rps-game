// create three variables with int values that stand for the three choices in the game
let rock = 1;
let paper = 2;
let scissors = 3;

// create the hard coded value for the player
let player = 1;

// create the function that gets a random number between 1-3 inc to represent computer choice. Use Math.random with Math.floor
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    return computerChoice;
}

// create a function that plays one round of the game with conditional statements
function playRound() {
    let computer = getComputerChoice();
    let result = "";
    if (computer === 1 && player === 1) {
        result = "It's a tie. You both chose rock.";
    } else if (computer === 1 && player === 2) {
        result = "You win. Paper beats rock.";
    } else if (computer === 1 && player === 3) {
        result = "You lose. Rock beats scissors.";
    } else if (computer === 2 && player === 1) {
        result = "You lose. Paper beats rock.";
    } else if (computer === 2 && player === 2) {
        result = "It's a tie. You both chose paper.";
    } else if (computer === 2 && player === 3) {
        result = "You win. Scissors beats paper.";
    } else if (computer === 3 && player === 1) {
        result = "You win. Rock beats scissors.";
    } else if (computer === 3 && player === 2) {
        result = "You lose. Scissors beats paper.";
    } else {
        result = "It's a tie. You both chose scissors.";
    }
    return result;
}
