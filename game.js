let options = ['Rock', 'Paper', 'Scissors']
function getComputerChoice(){
    let index = Math.floor(Math.random() * 3);
    return (options[index].toLowerCase());
};

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(computerSelection === playerSelection){
        return 'It is a tie.';
    }
    if(playerSelection === 'rock' && computerSelection === 'paper'){
        return 'You lose! Paper beats Rock';
    }
    if(playerSelection === 'paper' && computerSelection === 'rock'){
        return 'You win! Paper beats Rock';
    }
    if(playerSelection === 'rock' && computerSelection === 'scissors'){
        return 'You win! Rock beats Scissors';
    }
    if(playerSelection === 'scissors' && computerSelection === 'rock'){
        return 'You lose! Rock beats Scissors';
    }
    if(playerSelection === 'paper' && computerSelection === 'scissors'){
        return 'You lose! Scissors beats Paper';
    }
    if(playerSelection === 'scisspors' && computerSelection === 'paper'){
        return 'You win! Scissors beats Paper';
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));