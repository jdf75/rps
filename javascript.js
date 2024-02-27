// rock, paper, scissors! //

let playerSelection;
let computerSelection;

const maxRound = 5;
let round = 1;

while (round <= maxRound) {
    computerSelection = getComputerChoice();
    playerSelection = prompt();
    console.log(playRound(playerSelection, computerSelection));
    round++;
}




function playRound(playerSelectionIN, computerSelection) {
    let result = 0; // 1 = tie, 2 = win, 3 = lose //
    let playerSelection = playerSelectionIN.toLowerCase();
    if (playerSelection === 'rock') {
        switch (computerSelection) {
            case 'rock': {result = 1; break};
            case 'paper': {result = 3; break};
            case 'scissors': {result = 2; break};
        }
    }
    else if (playerSelection === 'paper') {
        switch (computerSelection) {
            case 'rock': {result = 2; break};
            case 'paper': {result = 1; break};
            case 'scissors': {result = 3; break};
        }
    }
    else if (playerSelection === 'scissors') {
        switch (computerSelection) {
            case 'rock': {result = 3; break};
            case 'paper': {result = 2; break};
            case 'scissors': {result = 1; break};
        }
    }
    else return('Error');
    if (result === 1) return(`Tie - you both picked ${playerSelection}!`);
    if (result === 2) return(`You win - ${playerSelection} beats ${computerSelection}!`);
    if (result === 3) return(`You lose - ${computerSelection} beats ${playerSelection}!`);
}

function getComputerChoice() {
    let x = Math.floor(Math.random() * 3) + 1;
    switch (x) {
        case 1: return 'rock';
        case 2: return 'paper';
        case 3: return 'scissors';
    }
}