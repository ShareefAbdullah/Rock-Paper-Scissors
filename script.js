function getComputerChoice () {

    let randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 33){
        return "Rock";
    } else if (randomNumber > 33 && randomNumber < 66){
        return "Paper";
    } else if (randomNumber >= 66) {
        return "Scissors";
    }

}

function playRound (){

    let playerSelection = prompt().toUpperCase();
    let computerSelection = getComputerChoice();

    if (playerSelection === "ROCK" && computerSelection === "Paper"){
        return "You lose! Paper beats Rock";
    } else if (playerSelection === "ROCK" && computerSelection === "Scissors"){
        return "You win! Rock beats Scissors";
    } else if (playerSelection === "PAPER" && computerSelection === "Scissors"){
        return "You lose! Scissors beat Paper";
    } else if (playerSelection === "PAPER" && computerSelection === "Rock"){
        return "You win! Paper beats Rock";
    } else if (playerSelection === "SCISSORS" && computerSelection === "Rock"){
        return "You lose! Rock beats Scissors";
    } else if (playerSelection ==="SCISSORS" && computerSelection === "Paper"){
        return "You win! Scissors beat Paper";
    } else{
        return "It's a draw! One more round";
    }
}

function game() {

    for(let i = 0; i < 5; i ++){
        console.log(playRound());
    }
}

game();