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
        return result = "You Lose! Paper beats Rock";
    }
    else if((playerSelection == "rock") && (computerSelection == "scissors")){
        return result = "You Win! Rock beats Scissors";
    }
    else if((playerSelection == "rock") && (computerSelection == "rock")){
        return result = "It's a Tie! Play again";
    }
    else if ((playerSelection == "paper") && (computerSelection == "rock")){
        return result = "You Win! Paper beats Rock";
    }
    else if ((playerSelection == "paper") && (computerSelection == "paper")){
        return result = "It's a Tie! Play again";
    }
    else if ((playerSelection == "paper") && (computerSelection) == "scissors"){
        return result = "You Lose! Scissors beats Paper";
    }
    else if((playerSelection == "scissors") && (computerSelection == "rock")){
        return result = "You Lose! Rock beats Scissors";
    }
    else if((playerSelection == "scissors") && (computerSelection == "paper")){
        return result = "You Win! Scissors beats Paper";
    }
    else if((playerSelection == "scissors") && (computerSelection == "scissors")){
        return result = "It's a Tie! Play again";
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    let playerChoice;
    let result;

    //commented best of five round logic
    //for (let i = 0; i < 5; i++) {
        const rockBtn = document.querySelector("#rock");
        rockBtn.addEventListener('click', () => {
            playerChoice = "rock";
            let computerChoice = getComputerChoice();
            let result = playRound(playerChoice, computerChoice);
            console.log(result);
        });

        const paperBtn = document.querySelector("#paper");
        paperBtn.addEventListener('click', () =>{
            playerChoice = "paper";
            let computerChoice = getComputerChoice();
            let result = playRound(playerChoice, computerChoice);
            console.log(result);
        });

        const scissorsBtn = document.querySelector("#scissors");
        scissorsBtn.addEventListener('click', () =>{
            playerChoice = "scissors";
            let computerChoice = getComputerChoice();
            let result = playRound(playerChoice, computerChoice);
            console.log(result);
        });

        //let playerChoice = prompt("choose either rock, paper, or scissors");
        //let computerChoice = getComputerChoice();
        //let result = playRound(playerChoice, computerChoice);
        //console.log(result);

        let formattedResult = String(result);

        if(formattedResult.charAt(4) === "W"){
            playerScore += 1;
            if (playerScore === 3){
                console.log("You Won!");
               // break;
            }
        }
        else if (formattedResult.charAt(4) == "L"){
            computerScore += 1;
            if (computerScore === 3){
                console.log("You Lost!");
                //break;
            }
        //}

        if (playerChoice === computerChoice){
            while(playerChoice === computerChoice){
                playerChoice = prompt("choose either rock, paper, or scissors");
                playerChoice = playerChoice.toLowerCase();
                computerChoice = getComputerChoice();
                result = playRound(playerChoice, computerChoice);
                console.log(result);

                formattedResult = String(result);

                if(formattedResult.charAt(4) === "W"){
                    playerScore += 1;
                    if (playerScore === 3){
                        console.log("The Player Wins!");
                        break;
                    }
                }
                else if (formattedResult.charAt(4) == "L"){
                    computerScore += 1;
                    if (computerScore === 3){
                        console.log("The Computer Wins!");
                        break;
                    }
                }
            }
        }
        
    }
}

console.log(game());
