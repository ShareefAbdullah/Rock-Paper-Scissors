let playerScore = 0;
let computerScore = 0;
const round = document.querySelector("#round");
const result = document.querySelector("#result");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors")
let playerSelection;

  rock.addEventListener("click", () => {
  playerSelection = "ROCK";
  game();
})
  paper.addEventListener("click", () => {
  playerSelection = "PAPER";
  game();
})
  scissors.addEventListener("click", () => {
  playerSelection = "SCISSORS";
  game();
})

function getComputerChoice () {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
    if (randomNumber <= 33){
        return "Rock";
    } else if (randomNumber > 33 && randomNumber <= 66){
        return "Paper";
    } else if (randomNumber > 66 ) {
        return "Scissors";
    }
}

function playRound (){

    
    let computerSelection = getComputerChoice();

    if (playerSelection === "ROCK" && computerSelection === "Paper"){
        computerScore += 1;
        round.innerText = "You lose! Paper beats Rock";
    } else if (playerSelection === "ROCK" && computerSelection === "Scissors"){
        playerScore += 1;
        round.innerText = "You win! Rock beats Scissors";
    } else if (playerSelection === "PAPER" && computerSelection === "Scissors"){
        computerScore += 1;
        round.innerText = "You lose! Scissors beat Paper";
    } else if (playerSelection === "PAPER" && computerSelection === "Rock"){
        playerScore += 1;
        round.innerText = "You win! Paper beats Rock";
    } else if (playerSelection === "SCISSORS" && computerSelection === "Rock"){
        computerScore += 1;
        round.innerText = "You lose! Rock beats Scissors";
    } else if (playerSelection ==="SCISSORS" && computerSelection === "Paper"){
        playerScore += 1;
        round.innerText = "You win! Scissors beat Paper";
    } else{
        round.innerText = "It's a draw! One more round";
    }
}

function game() {
    if(playerScore >= 5){
    round.innerText = "The game is over! You won!";
    result.innerText = `Score: Player - ${playerScore} ; Computer - ${computerScore};`;
} else if(computerScore >= 5){
    round.innerText = "The game is over! You lost!";
    result.innerText = `Score: Player - ${playerScore} ; Computer - ${computerScore};`;
} else{
    
    console.log(playRound());
    result.innerText = `Score: Player - ${playerScore} ; Computer - ${computerScore};`;
  }
}