

let playGame = function() {

    let computerScore = 0;
    let humanScore = 0;

    const body = document.querySelector("body");
    let results = document.createElement("div");
    results.style.paddingTop = "16px";
    results.textContent = "Human: " + humanScore + " | Computer: "+ computerScore;
    body.appendChild(results);
              

    let playRound = function(human, computer) {
        if ((humanScore < 5) && (computerScore < 5)) {
            if (human === "rock" && computer === "paper") {
                computerScore += 1;
                results.textContent = "Human: " + humanScore + " | Computer: " + computerScore;
                if (computerScore === 5) {
                    results.textContent = "The Computer Wins!";
                };
            } else if (human === "rock" && computer === "scissors") {
                humanScore += 1;
                results.textContent = "Human: " + humanScore + " | Computer: " + computerScore;
                if (humanScore === 5) {
                    results.textContent = "The Human Wins!";
                };
            } else if (human === "paper" && computer === "rock") {
                humanScore += 1;
                results.textContent = "Human: " + humanScore + " | Computer: " + computerScore;
                if (humanScore === 5) {
                    results.textContent = "The Human Wins!";
                };
            } else if (human === "paper" && computer === "scissors") {
                computerScore += 1;
                results.textContent = "Human: " + humanScore + " | Computer: " + computerScore;
                if (computerScore === 5) {
                    results.textContent = "The Computer Wins!";
                };
            } else if (human === "scissors" && computer === "rock") {
                computerScore += 1;
                results.textContent = "Human: " + humanScore + " | Computer: " + computerScore;
                if (computerScore === 5) {
                    results.textContent = "The Computer Wins!";
                };
            } else if (human === "scissors" && computer === "paper") {
                humanScore += 1;
                results.textContent = "Human: " + humanScore + " | Computer: " + computerScore;
                if (humanScore === 5) {
                    results.textContent = "The Human Wins!";
                };
            }

        } else { return; }
        
        body.appendChild(results);
    }

    // get the computer's choice
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

    // get the human's choice
    let btn = document.querySelectorAll('button');

    btn.forEach((btn) => {
            btn.addEventListener('click', function(event) {
                    let humanChoice = event.target.textContent;
                    let humanSelection = humanChoice.toLowerCase();
                    let computerSelection = computerChoice();
                    playRound(humanSelection, computerSelection);
                    console.log("HUM -> " + humanSelection + " COMP -> " + computerSelection);
            });
    });

}

playGame();