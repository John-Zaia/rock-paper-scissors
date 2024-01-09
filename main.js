function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    if(computerChoice == 1){
        computerChoice = "rock";
        return computerChoice;
    }
    else if (computerChoice == 2){
        computerChoice = "paper";
        return computerChoice;
    }
    else{
        computerChoice = "scissors";
        return computerChoice;
    }
}

function playRound(playerSelection, computerSelection){
    if((playerSelection == "rock") && (computerSelection == "paper")){
        return "You Lose! Paper beats Rock";
    }
    else if((playerSelection == "rock") && (computerSelection == "scissors")){
        return "You Win! Rock beats Scissors";
    }
    else if((playerSelection == "rock") && (computerSelection == "rock")){
        return "It's a Tie! Play again"
    }
    else if ((playerSelection == "paper") && (computerSelection == "rock")){
        return "You Win! Paper beats Rock"
    }
    else if ((playerSelection == "paper") && (computerSelection == "paper")){
        return "It's a Tie! Play again"
    }
    else if ((playerSelection == "paper") && (computerSelection) == "scissors"){
        return "You Lose! Scissors beats Paper"
    }
    else if((playerSelection == "scissors") && (computerSelection == "rock")){
        return "You Lose! Rock beats Scissors"
    }
    else if((playerSelection == "scissors") && (computerSelection == "paper")){
        return "You Win! Scissors beats Paper"
    }
    else if((playerSelection == "scissors") && (computerSelection == "scissors")){
        return "It's a Tie! Play again"
    }
}

function game(){
    for (let i = 0; i < 5; i++) {
        playerChoice = prompt("choose either rock, paper, or scissors");
        computerChoice = getComputerChoice();
        console.log(playRound(playerChoice, computerChoice));

        if (playerChoice === computerChoice){
            while(playerChoice === computerChoice){
                playerChoice = prompt("choose either rock, paper, or scissors");
                playerChoice = playerChoice.toLowerCase();
                computerChoice = getComputerChoice();
                console.log(playRound(playerChoice, computerChoice));
            }
        }
        
    }
}

console.log(game());
