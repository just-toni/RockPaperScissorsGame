let options = ['Rock', 'Paper', 'Scissors']
function getComputerChoice(){
    let index = Math.floor(Math.random() * 3);
    return (options[index].toLowerCase());
};

let result, playerScore = 0, computerScore = 0;

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(computerSelection === playerSelection){
        return 'It is a tie.';
    }
    if(playerSelection === 'rock' && computerSelection === 'paper'){
        computerScore++;
        return 'You lose! Paper beats Rock';
    }
    if(playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore++;
        return 'You win! Paper beats Rock';
    }
    if(playerSelection === 'rock' && computerSelection === 'scissors'){
        playerScore++;
        return 'You win! Rock beats Scissors';
    }
    if(playerSelection === 'scissors' && computerSelection === 'rock'){
        computerScore++;
        return 'You lose! Rock beats Scissors';
    }
    if(playerSelection === 'paper' && computerSelection === 'scissors'){
        computerScore++;
        return 'You lose! Scissors beats Paper';
    }
    if(playerSelection === 'scisspors' && computerSelection === 'paper'){
        playerScore++;
        return 'You win! Scissors beats Paper';
    }
}

let body = document.querySelector('body');

let rock = document.createElement('button');
rock.textContent = 'Rock';
let scissors = document.createElement('button');
scissors.textContent = 'Scissors';
let paper = document.createElement('button');
paper.textContent = 'Paper';

body.appendChild(rock);
body.appendChild(scissors);
body.appendChild(paper);

rock.addEventListener('click', e=>{
    let div = document.createElement('div');
    div.textContent = playRound('rock', getComputerChoice());
    body.appendChild(div);
});

scissors.addEventListener('click', e=>{
    let div = document.createElement('div');
    div.textContent = playRound('scissors', getComputerChoice());
    body.appendChild(div);
});

paper.addEventListener('click', e=>{
    let div = document.createElement('div');
    div.textContent = playRound('paper', getComputerChoice());
    body.appendChild(div);
})

// const playerSelection = "rock";
const computerSelection = getComputerChoice();
// console.log(computerSelection);
// console.log(playRound(playerSelection, computerSelection));

function game(){
    let result, playerScore = 0, computerScore = 0;
    // for (let index = 0; index < 5; index++) {
        result = playRound(prompt('Rock, Paper, Scissors'), computerSelection);
        // console.log(result);
        if(result.startsWith('You win')){
            playerScore++;
        }
        else if(result.startsWith('You lose')){
            computerScore++;
        }
    // }
    playerScore > computerScore ? console.log('Player Wins') : console.log('Computer wins');
}
// game();