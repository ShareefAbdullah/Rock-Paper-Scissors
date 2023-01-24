let randomNumber = Math.floor(Math.random() * 100) + 1;


function getComputerChoice () {
    if (randomNumber <= 33){
        return "Rock";
    } else if (randomNumber > 33 && randomNumber < 66){
        return "Paper";
    } else if (randomNumber >= 66) {
        return "Scissors";
    }

}

let userChoice = prompt().toUpperCase();
console.log(userChoice);
