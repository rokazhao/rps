console.log("hello world!");

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    let choice;
    switch (number) {
        case 0:
            choice = "rock";
            console.log(choice);
            return choice;
        case 1:
            choice = "scissors";
            console.log(choice);
            return choice;
        case 2:
            choice = "paper";
            console.log(choice);
            return choice;
    }
}

// function getHumanChoice() {
//     let choiceName;
//     while (choiceName == null) {
//         let choice = prompt("Pick 1 for rock, 2 for scissors, 3 for paper");
//         if (choice == "1") {
//             choiceName = "rock";
//         } else if (choice == "2") {
//             choiceName = "scissors";
//         } else if (choice == "3") {
//             choiceName = "paper";
//         } else {
//             console.log("Invalid choice.");
//         }
//     }
//     console.log("You chose " + choiceName + ".");
//     return choiceName;
// }

let rounds = 0;

function playRound(humanChoice, computerChoice) {
    winner.textContent = "";
    if (humanChoice == "rock") {
        if (computerChoice == "scissors") {
            results.textContent = ("You win! " + humanChoice + " beats " + computerChoice + ".");
            humanScore++;
        } else if (computerChoice == "rock") {
            results.textContent = ("Draw! " + humanChoice + " draws with " + computerChoice + ".");
        } else {
            results.textContent = ("You lose! " + humanChoice + " loses to " + computerChoice + ".");
            computerScore++;
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "paper") {
            results.textContent = ("You win! " + humanChoice + " beats " + computerChoice + ".");
            humanScore++;
        } else if (computerChoice == "scissors") {
            results.textContent = ("Draw! " + humanChoice + " draws with " + computerChoice + ".");
        } else {
            results.textContent = ("You lose! " + humanChoice + " loses to " + computerChoice + ".");
            computerScore++;
        }
    } else {
        if (computerChoice == "rock") {
            results.textContent = ("You win! " + humanChoice + " beats " + computerChoice + ".");
            humanScore++;
        } else if (computerChoice == "paper") {
            results.textContent = ("Draw! " + humanChoice + " draws with " + computerChoice + ".");
        } else {
            results.textContent = ("You lose! " + humanChoice + " loses to " + computerChoice + ".");
            computerScore++;
        }
    }
    scoreboard.textContent = ("Human: " + humanScore + " - Computer: " + computerScore);
}


let humanScore = 0;
let computerScore = 0;

const scoreboard = document.getElementById("scoreboard");
const results = document.getElementById("results");
const winner = document.getElementById("winner");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const playAgain = document.getElementById("playAgain");

rock.addEventListener("click", function () {
    initRound("rock");
});

paper.addEventListener("click", function () {
    initRound("paper");
});

scissors.addEventListener("click", function () {
    initRound("scissors");
});

playAgain.addEventListener("click", function () {
    rock.style.display = "inline-block";
    paper.style.display = "inline-block";
    scissors.style.display = "inline-block";
    results.textContent = "";
    winner.textContent = "";
    scoreboard.textContent = ("Human: " + humanScore + " - Computer: " + computerScore);
    playAgain.style.display = "none";
})

function initRound(humanChoice) {
    rounds++;
    const humanSelection = humanChoice;
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    if (rounds == 5) {
        console.log("Final Score:");
        console.log("Human: " + humanScore);
        console.log("Computer: " + computerScore);
        if (humanScore > computerScore) {
            winner.textContent = ("Congrats! You won!");
        } else if (humanScore < computerScore) {
            winner.textContent = ("You lost... Better luck next time!");
        } else {
            winner.textContent = ("Draw! A close match!");
        }
        scoreboard.textContent = ("Human: " + humanScore + " - Computer: " + computerScore);
        rounds = 0;
        humanScore = 0;
        computerScore = 0;
        rock.style.display = "none";
        paper.style.display = "none";
        scissors.style.display = "none";
        playAgain.style.display = "block";
    }
}


// console.log("Final Score:");
// console.log("Human: " + humanScore);
// console.log("Computer: " + computerScore);
// if (humanScore > computerScore) {
//     console.log("Congrats! You won!");
// } else if (humanScore < computerScore) {
//     console.log("You lost... Better luck next time!");
// } else {
//     console.log("Draw! A close match!");
// }
