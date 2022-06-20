let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

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
        return 'Something went wrong with the AI...'
    }
}

body = document.querySelector('body');

function playRound (event){
    playerSelection = event.target.id;
    computerSelection = computerPlay();
    let playRoundResult = 0;
    let allDivs = document.querySelectorAll('div');
    if (allDivs) {allDivs.forEach(div => {body.removeChild(div)});}
        // body.removeChild(allDiv);}
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    div1.textContent =`You chose ${playerSelection}. The computer chose ${computerSelection}.`;
    function calculategameScore (){
        if (playerSelection===computerSelection){
            playRoundResult = 0;
            // return `${message} ${playerSelection} vs ${computerSelection} results in a tie!!`;
        }
        else if (playerSelection==='paper'&&computerSelection==='scissors') {
            playRoundResult = 1;
            // computerScore++;
            // return `${message} ${computerSelection} beats ${playerSelection}. You lose this round!`;
        }
        else if (playerSelection==='rock'&&computerSelection==='paper') {
            playRoundResult = 1;
            // computerScore++;
            // return `${message} ${computerSelection} beats ${playerSelection}. You lose this round!`;
        }
        else if (playerSelection==='scissors'&&computerSelection==='rock') {
            playRoundResult = 1;
            // computerScore++;
            // return `${message} ${computerSelection} beats ${playerSelection}. You lose this round!`;
        }
        else if (playerSelection==='scissors'&&computerSelection==='paper') {
            playRoundResult = 2;
            // playerScore++;
            // return `${message} ${playerSelection} beats ${computerSelection}. You win this round!`;
        }
        else if (playerSelection==='paper'&&computerSelection==='rock') {
            playRoundResult = 2;
            // playerScore++;
            // return `${message} ${playerSelection} beats ${computerSelection}. You win this round!`;
        }
        else if (playerSelection==='rock'&&computerSelection==='scissors') {
            playRoundResult = 2;
            // playerScore++;
            // return `${message} ${playerSelection} beats ${computerSelection}. You win this round!`;
        }
    }
    function updateScores() {
        if (playRoundResult===1){
            computerScore++;
            div2.textContent = `${computerSelection} beats ${playerSelection}. You lose this round!`;
        }
        else if (playRoundResult===2){
            playerScore++;
            div2.textContent = `${playerSelection} beats ${computerSelection}. You win this round!`;
        }
        else {
            div2.textContent = `${playerSelection} vs ${computerSelection} results in a tie!!`;
        }
    }
    function showGameScore(){
        let h2 = document.querySelector('h2');
        if (h2) {body.removeChild(h2);}
        // gameMessage = checkGameOver();
        // gameScore = `YOU:${playerScore} || COMPUTER: ${computerScore}`
        h2 = document.createElement('h2');
        h2.textContent = `YOU:${playerScore} || COMPUTER: ${computerScore}`;
        body.appendChild(h2);
    }

    function checkGameOver()  {
        if (computerScore===5) {
        
            h1 = document.createElement('h1');
            h1.textContent = 'You lost the game.';
            body.appendChild(h1);
            computerScore=0;
            playerScore=0;
        }
        else if (playerScore===5) {
            h1 = document.createElement('h1');
            h1.textContent = 'Congratulations! You won the game!';
            body.appendChild(h1);
            computerScore=0;
            playerScore=0;
        }
    }

    let h1 = document.querySelector('h1');
    if (h1) {body.removeChild(h1);}

    calculategameScore ();
    updateScores ();
    body.appendChild(div1);
    body.appendChild(div2);
    showGameScore ();
    checkGameOver();
}


 
buttons = document.querySelectorAll('button');
buttons.forEach(button => {button.addEventListener('click',playRound)
    
});


// function game(){
//     for (let i=0;i<5; i++) {
        // console.log(playRound(playerSelection,computerSelection));
//     }
// }

// game();