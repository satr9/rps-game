// create the function that gets a random number between 1-3 inc to represent computer choice. Use Math.random with Math.floor. Assign 1 to the string 'rock', 2 to 'paper', 3 to 'scissors'.
function getComputerChoice() {
    let result = "";
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1) {
        result = "Rock";
    } else if (computerChoice === 2) {
        result = "Paper";
    } else if (computerChoice === 3) {
        result = "Scissors";
    }
    return result;
}

// get the player's choice and make it case insensitive, then return the choice as a capitalized string.
function getUserChoice() {
    let userChoice = prompt("What do you pick?");
    let lower = userChoice.toLocaleLowerCase();
    let initial = lower[0].toUpperCase();
    return initial + lower.slice(1);
}

// create a function that plays one round of the game with conditional statements
function playRound() {
    let user = getUserChoice();
    let computer = getComputerChoice();
    if (user === "Rock" && computer === "Rock") {
        return "It's a tie. You both chose rock.";
    } else if (user === "Rock" && computer === "Paper") {
        return "Computer wins. Paper beats rock.";
    } else if (user === "Rock" && computer === "Scissors") {
        return "You win! Rock beats scissors.";
    } else if (user === "Paper" && computer === "Rock") {
        return "You win! Paper beats rock.";
    } else if (user === "Paper" && computer === "Paper") {
        return "It's a tie. You both chose paper.";
    } else if (user === "Paper" && computer === "Scissors") {
        return "Computer wins. Scissors beats paper.";
    } else if (user === "Scissors" && computer === "Rock") {
        return "Computer wins. Rock beats scissors.";
    } else if (user === "Scissors" && computer === "Paper") {
        return "You win! Scissors beats paper.";
    } else if (user === "Scissors" && computer === "Scissors") {
        return "It's a tie. You both chose scissors.";
    }
}
