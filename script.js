/*******  Step 1: get the computer's choice  ******/

let computerChoice = function() {
    let randomNumber = Math.random();
    if (randomNumber < .33) {
        return "rock";
    } else if (randomNumber >= .33 && randomNumber < .67) {
        return "paper";
    } else {
        return "scissors";
    }
};



/******* Step 2: get the human's choice  ******/

let humanChoice = function() {
    let input = prompt("Please enter your choice.");
    return input.toLowerCase();
}



/******* Step 3: keep track of the score  ******/

let computerScore = 0;
let humanScore = 0;



/******* Step 4: play a single round  ******/

let playRound = function(human, computer) {
    if (human === "rock" && computer === "paper") {
        computerScore = computerScore + 1;
        console.log("You lose! Paper beats Rock.");
    } else if (human === "rock" && computer === "scissors") {
        humanScore = humanScore + 1;
        console.log("You win! Rock beats Scissors.");
    } else if (human === "rock" && computer === "rock") {
        console.log("No winner! Both chose Rock.");
    } else if (human === "paper" && computer === "rock") {
        humanScore = humanScore + 1;
        console.log("You win! Paper beats Rock.");
    } else if (human === "paper" && computer === "scissors") {
        computerScore = computerScore + 1;
        console.log("You lose! Scissors beats Paper.");
    } else if (human === "paper" && computer === "paper") {
            console.log("No winner! Both chose Paper.");
    } else if (human === "scissors" && computer === "rock") {
        computerScore = computerScore + 1;
        console.log("You lose! Rock beats Scissors.");
    } else if (human === "scissors" && computer === "paper") {
        humanScore = humanScore + 1;
        console.log("You win! Scissors beats Paper.");
    } else if (human === "scissors" && computer === "scissors") {
        console.log("No winner! Both chose Scissors.");
    }
}

playRound(humanChoice(), computerChoice());
console.log("Computer Score is : ", computerScore);
console.log("Human Score is : ", humanScore);