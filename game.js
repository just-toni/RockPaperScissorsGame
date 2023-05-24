let options = ['Rock', 'Paper', 'Scissors']
function getComputerChoice(){
    let index = Math.floor(Math.random() * 3);
    console.log(options[index]);
};

getComputerChoice();