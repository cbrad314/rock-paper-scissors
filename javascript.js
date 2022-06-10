let playerPrompt = prompt('Rock, Paper, Scissors, Go!!','');
let playerSelection = playerPrompt.toLowerCase();
let computerSelection = computerPlay();
function computerPlay () {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    const computerPlayResult = getRandomInt(1,4);
    if (computerPlayResult===1){
        return 'rock';
    }
    else if (computerPlayResult===2){
        return 'paper';
    }
    else if (computerPlayResult===3){
        return 'scissors';
    }
    else {
        return 'Something went wrong...'
    }
}

function determineWinner (playerSelection,computerSelection){
    
    if (playerSelection===computerSelection){
        return `${playerSelection} vs ${computerSelection} results in a tie!!`;
    }
    else if (playerSelection==='paper'&&computerSelection==='scissors') {
        return `${computerSelection} beats ${playerSelection}. You lose!`;
    }
    else if (playerSelection==='rock'&&computerSelection==='paper') {
        return `${computerSelection} beats ${playerSelection}. You lose!`;
    }
    else if (playerSelection==='scissors'&&computerSelection==='rock') {
        return `${computerSelection} beats ${playerSelection}. You lose!`;
    }
    else if (playerSelection==='scissors'&&computerSelection==='paper') {
        return `${playerSelection} beats ${computerSelection}. You win!`;
    }
    else if (playerSelection==='paper'&&computerSelection==='rock') {
        return `${playerSelection} beats ${computerSelection}. You win!`;
    }
    else if (playerSelection==='rock'&&computerSelection==='scissors') {
        return `${playerSelection} beats ${computerSelection}. You win!`;
    }
    else {return 'Something went wrong...'}
}
console.log(determineWinner(playerSelection,computerSelection));