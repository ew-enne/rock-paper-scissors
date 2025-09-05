/*******  Step 1: get the computer's choice  ******/

let computerChoice = function() {
    let randomNumber = Math.random();
    if (randomNumber < .33) {
        return "Rock";
    } else if (randomNumber >= .33 && randomNumber < .67) {
        return "Paper";
    } else {
        return "Scissors";
    }
};

//console.log(computerChoice());



/******* Step 2: get the human's choice  ******/

let humanChoice = function() {
    let input = prompt("Please enter your choice.");
    return input;
}

//console.log(humanChoice());



/******* Step 3: keep track of the score  ******/

let computerScore = 0;
let humanScore = 0;

