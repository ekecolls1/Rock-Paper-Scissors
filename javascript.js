console.log("Hello World");

const options = ["rock", "paper", "scissors"];


function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ) {
        return "player";
    }
    else {
        return "computer";
    }
}
function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie") {
        return "It's a Tie!"
    }
    else if (result == "player") {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

 
function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt ("Rock Paper Scissors");
        if(choice == null){
            continue;
        }

        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}


function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));

        console.log("-------")
        
        if(checkWinner(playerSelection, computerSelection) == "player"){
            scorePlayer++;
        }
        else if(checkWinner(playerSelection, computerSelection) == "computer"){
            scoreComputer++;
        }
    }
    console.log("Game over");
    if(scorePlayer > scoreComputer){
        console.log("Player was the winner!")
    }
    else if(scorePlayer < scoreComputer){
        console.log("Computer was the winner!")
    }
    else{
        console.log("It is a tie, nobody won!")
    }
}
game()


