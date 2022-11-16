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
        return "You lose. Paper beats rock.";
    } else if (user === "Rock" && computer === "Scissors") {
        return "You win! Rock beats scissors.";
    } else if (user === "Paper" && computer === "Rock") {
        return "You win! Paper beats rock.";
    } else if (user === "Paper" && computer === "Paper") {
        return "It's a tie. You both chose paper.";
    } else if (user === "Paper" && computer === "Scissors") {
        return "You lose. Scissors beats paper.";
    } else if (user === "Scissors" && computer === "Rock") {
        return "You lose. Rock beats scissors.";
    } else if (user === "Scissors" && computer === "Paper") {
        return "You win! Scissors beats paper.";
    } else if (user === "Scissors" && computer === "Scissors") {
        return "It's a tie. You both chose scissors.";
    }
}

// create a new function that plays a certain number of rounds of the game using for loops
function game() {
    let userScore = 0;
    let computerScore = 0;
    let round;
    for (let i = 1; i < 6; i++) {
        // to keep score, each iteration it checks if the playRound function returns the string "win" and then adds one to userScore, else adds one to computerScore. If it's a tie, no score is added. The game function returns a string summing up the entire game with all the relevant scores displayed using a conditional statement.
        console.log(`round ${i}`);
        round = playRound();
        console.log(round);
        if (round.includes("win")) {
            userScore++;
        } else if (round.includes("lose")) {
            computerScore++;
        }
        console.log(`Player: ${userScore} - Computer: ${computerScore}`);
    }
    let result =
        userScore === 5
            ? "Congratulations, you win the game!"
            : "Sorry, computer wins. Better luck next time...";
    return result;
}

game();

// this works but only for ***five rounds of actual play*** instead of first player reaching five points...
