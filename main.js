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
        return "It's a Tie! Play agin."
    }
}

let playerChoice = prompt("choose either rock, paper, or scissors");
let computerChoice = getComputerChoice();
playerChoice = playerChoice.toLowerCase();

console.log(computerChoice);
console.log(playRound(playerChoice, computerChoice));

if (playerChoice === computerChoice){
    while(playerChoice === computerChoice){
        playerChoice = prompt("choose either rock, paper, or scissors");
        computerChoice = getComputerChoice();
        console.log(playRound(playerChoice, computerChoice));
    }
}
