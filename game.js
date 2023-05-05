function getComputerChoice(){
    let randomValue = Math.floor(Math.random() * 2)
    if(randomValue === 0){
        return 'Rock'
    }
    else if (randomValue === 1){
        return "Paper"
    }
    else if(randomValue === 2){
        return 'Scissors'
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    // computerSelection = computerSelection.toLowerCase()
    if(playerSelection === 'rock' && computerSelection === 'Rock'){
        return `It's a tie`
    }
    else if(playerSelection === 'rock' && computerSelection === 'Paper'){
        return `You win! Rock beats Paper`
    }
    else if (playerSelection === 'paper' && computerSelection === 'Rock'){
        return `You lose! Rock beats Paper`
    }
    else if(playerSelection === 'scissors' && computerSelection === 'Paper'){
        return `You win! Scissors beats Paper`
    }
    else if (playerSelection === 'paper' && computerSelection === 'Scissors'){
        return `You lose! Scissors beats Paper`
    }    
    else if(playerSelection === 'rock' && computerSelection === 'Scissors'){
        return `You win! Rock beats Scissors`
    }
    else if (playerSelection === 'scissors' && computerSelection === 'Rock'){
        return `You lose! Rock beats Scissors`
    }
    else if (playerSelection === 'paper' && computerSelection === 'Paper'){
        return `It's a tie`
    }
    else if (playerSelection === 'scissors' && computerSelection === 'Scissors'){
        return `It's a tie`
    }
}

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

function game(){
    let numOfRounds = prompt("How many rounds would you like to play?")
    let computerScore = 0
    let playerScore = 0
    for (let index = 0; index < numOfRounds; index++) {
        let result = playRound(prompt("Rock, Paper or Scissors"), getComputerChoice())
        if(result.startsWith(`You win`)){
            playerScore++
        }
        else if(result.startsWith(`You lose`)){
            computerScore++
        }
        console.log(result)
    }
    return Math.max(playerScore, computerScore) ? 'Player wins' : 'Computer wins'
}

console.log(game())