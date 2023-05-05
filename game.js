function getComputerChoice(){
    let randomValue = Math.floor(Math.random() * 2)
    if(randomValue === 0){
        return 'Rock'
    }
    if (randomValue === 1){
        return "Paper"
    }
    if(randomValue === 2){
        return 'Scissors'
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    if(playerSelection === 'rock' && computerSelection === 'rock'){
        return `It's a tie`
    }
    else if(playerSelection === 'rock' && computerSelection === 'paper'){
        return `You win! Rock beats Paper`
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock'){
        return `You lose! Rock beats Paper`
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        return `You win! Scissors beats Paper`
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        return `You lose! Scissors beats Paper`
    }    
    else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        return `You win! Rock beats Scissors`
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        return `You lose! Rock beats Scissors`
    }
    else if (playerSelection === 'paper' && computerSelection === 'paper'){
        return `It's a tie`
    }
    else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
        return `It's a tie`
    }
}