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
