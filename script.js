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

console.log(computerChoice());

/*******  Step 1: get the computer's choice  ******/
