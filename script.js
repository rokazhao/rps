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

function getHumanChoice() {
    let choiceName;
    while (choiceName == null) {
        let choice = prompt("Pick 1 for rock, 2 for scissors, 3 for paper");
        if (choice == "1") {
            choiceName = "rock";
        } else if (choice == "2") {
            choiceName = "scissors";
        } else if (choice == "3") {
            choiceName = "paper";
        } else {
            console.log("Invalid choice.");
        }
    }
    console.log("You chose " + choiceName + ".");
    return choiceName;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock") {
        if (computerChoice == "scissors") {
            console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
            humanScore++;
        } else if (computerChoice == "rock") {
            console.log("Draw! " + humanChoice + " draws with " + computerChoice + ".");
        } else {
            console.log("You lose! " + humanChoice + " loses to " + computerChoice + ".");
            computerScore++;
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "paper") {
            console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
            humanScore++;
        } else if (computerChoice == "scissors") {
            console.log("Draw! " + humanChoice + " draws with " + computerChoice + ".");
        } else {
            console.log("You lose! " + humanChoice + " loses to " + computerChoice + ".");
            computerScore++;
        }
    } else {
        if (computerChoice == "rock") {
            console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
            humanScore++;
        } else if (computerChoice == "paper") {
            console.log("Draw! " + humanChoice + " draws with " + computerChoice + ".");
        } else {
            console.log("You lose! " + humanChoice + " loses to " + computerChoice + ".");
            computerScore++;
        }
    }
}



for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

console.log("Final Score:");
console.log("Human: " + humanScore);
console.log("Computer: " + computerScore);
if (humanScore > computerScore) {
    console.log("Congrats! You won!");
} else if (humanScore < computerScore) {
    console.log("You lost... Better luck next time!");
} else {
    console.log("Draw! A close match!");
}
