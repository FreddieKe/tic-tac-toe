let playerScore = 0;
let computerScore = 0;

// selects rock, paper or scissors for computer 
function computerPlay() {
    let computerGesture = Math.floor((Math.random()*3)+1);
    if (computerGesture === 1) {
        return 'rock';
    } else if (computerGesture === 2) {
        return 'paper';
    } else {
        return 'scissors'
    }
}

//player chooses play
function playerPlay() {
    let playerGesture = ((prompt('Rock, paper or scissors?')).toLowerCase());
    return playerGesture;
}

function playRound(computerChoice,playerChoice) {
    const resultLine = document.querySelector(".resultLine")
    if (computerChoice === playerChoice) { //checks if computer and player have  same hand
        resultLine.textContent = `Computer: ${computerChoice} Player: ${playerChoice} - It\'s a draw!`;
    } else if ((computerChoice === 'rock' && playerChoice === 'scissors')||
    (computerChoice === 'scissors' && playerChoice === 'paper'||
    (computerChoice === 'paper' && playerChoice === 'rock'))) { //checks if computer has better hand
        resultLine.textContent = `Computer: ${computerChoice} Player: ${playerChoice} - Computer wins!`;
        computerScore++
    } else if ((playerChoice === 'rock' && computerChoice === 'scissors')||
    (playerChoice === 'scissors' && computerChoice === 'paper'||
    (playerChoice === 'paper' && computerChoice === 'rock'))) { //checks if player has better hand
        resultLine.textContent = `Computer: ${computerChoice} Player: ${playerChoice} - Player wins!`;
        playerScore ++
    } else {
        resultLine.textContent = `Computer: ${computerChoice} Player: ${playerChoice} I\'m sorry, I did not understand that.`
    }
}

function updateScore() { //updatesScore
    const scoreLine = document.querySelector(".scoreLine");
    scoreLine.textContent = `Computer: ${computerScore} - Player: ${playerScore}`;
}

function displayPlayerWin() {
    const scoreLine = document.querySelector(".scoreLine");
    scoreLine.textContent = `Computer: ${computerScore} - Player: ${playerScore} - Player wins!`;
}

function displayComputerWin() {
    const scoreLine = document.querySelector(".scoreLine");
    scoreLine.textContent = `Computer: ${computerScore} - Player: ${playerScore} - Computer wins!`;
}
const buttons = document.getElementsByClassName("playerChoice");
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', () => {
        if (playerScore >= 5) {
            displayPlayerWin();
        } else if (computerScore >= 5) {
            displayerComputerWin();
        } else {
        playRound(computerPlay(),button.id)
        updateScore();
    }})})
