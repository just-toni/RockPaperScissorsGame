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

