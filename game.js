let options = ['Rock', 'Paper', 'Scissors']
function getComputerChoice(){
    let index = Math.floor(Math.random() * 3);
    return (options[index].toLowerCase());
};

let result, playerScore = 0, computerScore = 0;

function displayResult(){
    let div = document.createElement('div');
    let p = document.createElement('p');
    if(playerScore > computerScore){
        p.textContent = `Computer scores ${computerScore - 1} \n You score ${playerScore - 1} \n You win!`;
        div.appendChild(p);
        body.appendChild(div);
    }
    else if(playerScore === computerScore){
        p.textContent = `Computer scores ${computerScore - 1} \n You score ${playerScore - 1} \n It's a tie!`;
        div.appendChild(p);
        body.appendChild(div);
    }
    else{
        p.textContent = `Computer scores ${computerScore - 1} \n You score ${playerScore - 1} \n Computer wins!`;
        div.appendChild(p);
        body.appendChild(div);
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    while(playerScore !== 6){
        if(computerSelection === playerSelection){
            return 'It is a tie.';
        }
        if(playerSelection === 'rock' && computerSelection === 'paper'){
            ++computerScore;
            return 'You lose! Paper beats Rock';
        }
        if(playerSelection === 'paper' && computerSelection === 'rock'){
            ++playerScore;
            return `You win! Paper beats Rock. Your score is ${playerScore}`;
        }
        if(playerSelection === 'rock' && computerSelection === 'scissors'){
            ++playerScore;
            return `You win! Rock beats Scissors. Your score is ${playerScore}`;
        }
        if(playerSelection === 'scissors' && computerSelection === 'rock'){
            ++computerScore;
            return 'You lose! Rock beats Scissors';
        }
        if(playerSelection === 'paper' && computerSelection === 'scissors'){
            ++computerScore;
            return 'You lose! Scissors beats Paper';
        }
        if(playerSelection === 'scissors' && computerSelection === 'paper'){
            ++playerScore;
            return `You win! Scissors beats Paper. Your score is ${playerScore}`;
        }
    }
    displayResult();
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


/**
 * problems
 * how to display the p1 text once and it would just be updated and not repeated or appended
 * how to stop the entire game once the player score is 5 and display Results (kind of fixed)
 */

rock.addEventListener('click', e=>{
    let div = document.createElement('div');
    let p = document.createElement('p');
    p.textContent = playRound('rock', getComputerChoice());
    if(playerScore <= 5){
        let p1 = document.createElement('p');
        p1.textContent = 'Rock round: ' + p.textContent;
        div.appendChild(p1);    
        body.appendChild(div);
    }
 
});
scissors.addEventListener('click', e=>{
    let div = document.createElement('div');
    let p = document.createElement('p');
    p.textContent = playRound('scissors', getComputerChoice());
    if(playerScore <= 5){
        let p1 = document.createElement('p');
        p1.textContent = 'Scissors round: ' + p.textContent;
        div.appendChild(p1);    
        body.appendChild(div);
    }

});
paper.addEventListener('click', e=>{
    let div = document.createElement('div');
    let p = document.createElement('p');
    p.textContent = playRound('paper', getComputerChoice());
    if(playerScore <= 5){
        let p1 = document.createElement('p');
        p1.textContent = 'Paper round: ' + p.textContent;
        div.appendChild(p1);    
        body.appendChild(div);
    }

});



// rock.addEventListener('click', e=>{
//     let div = document.createElement('div');
//     let p = document.createElement('p');
//     p.textContent = playRound('rock', getComputerChoice());
//     if(playerScore <= 5){
//         let p1 = document.createElement('p');
//         p1.textContent = 'This round: ' + p.textContent;
//         div.appendChild(p1);    
//         body.appendChild(div);
//     }
//     else{
//         if(playerScore > computerScore){
//             p.textContent = `Computer scores ${computerScore} \n You score ${playerScore} \n You win!`;
//             div.appendChild(p);
//             body.appendChild(div);
//         }
//         else{
//             p.textContent = `Computer scores ${computerScore} \n You score ${playerScore} \n Computer wins!`;
//             div.appendChild(p);
//             body.appendChild(div);
//         }
//     }
    
// });

// scissors.addEventListener('click', e=>{
//     let div = document.createElement('div');
//     let p = document.createElement('p');
//     p.textContent = playRound('scissors', getComputerChoice());
//     if(p.textContent !== 'Done'){
//         let p1 = document.createElement('p');
//         p1.textContent = 'This round: ' + p.textContent;
//         div.appendChild(p1);    
//         body.appendChild(div);
//     }
//     else{
//         if(playerScore > computerScore){
//             p.textContent = `Computer scores ${computerScore} \n You score ${playerScore} \n You win!`;
//             div.appendChild(p);
//         }
//         else{
//             p.textContent = `Computer scores ${computerScore} \n You score ${playerScore} \n Computer wins!`;
//             div.appendChild(p);
//         }
//     }
// });

// paper.addEventListener('click', e=>{
//     let div = document.createElement('div');
//     let p = document.createElement('p');
//     p.textContent = playRound('paper', getComputerChoice());
//     if(p.textContent !== 'Done'){
//         let p1 = document.createElement('p');
//         p1.textContent = 'This round: ' + p.textContent;
//         div.appendChild(p1);    
//         body.appendChild(div);
//     }
//     else{
//         if(playerScore > computerScore){
//             p.textContent = `Computer scores ${computerScore} \n You score ${playerScore} \n You win!`;
//             div.appendChild(p);
//         }
//         else{
//             p.textContent = `Computer scores ${computerScore} \n You score ${playerScore} \n Computer wins!`;
//             div.appendChild(p);
//         }
//     }
// })

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