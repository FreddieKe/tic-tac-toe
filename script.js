
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
    if (computerChoice === playerChoice) { //checks if computer and player have  same hand
        console.log(`Computer: ${computerChoice} Player: ${playerChoice} - It\'s a draw!`);
    } else if ((computerChoice === 'rock' && playerChoice === 'scissors')||
    (computerChoice === 'scissors' && playerChoice === 'paper'||
    (computerChoice === 'paper' && playerChoice === 'rock'))) { //checks if computer has better hand
        console.log(`Computer: ${computerChoice} Player: ${playerChoice} - Computer wins!`);
        ++computerScore;
    } else if ((playerChoice === 'rock' && computerChoice === 'scissors')||
    (playerChoice === 'scissors' && computerChoice === 'paper'||
    (playerChoice === 'paper' && computerChoice === 'rock'))) { //checks if player has better hand
        console.log(`Computer: ${computerChoice} Player: ${playerChoice} - Player wins!`);
        ++playerScore;
    } else {
        console.log(`Computer: ${computerChoice} Player: ${playerChoice} I\'m sorry, I did not understand that.`)
    }
}

let computerScore = 0
let playerScore = 0

//runs five rounds
function playGame() {
    for (let i = 0; i < 5; i++) {
        let computerChoice = computerPlay();
        let playerChoice = playerPlay();
        playRound(computerChoice,playerChoice);
    }
    if (computerScore > playerScore) {
        console.log(`Computer: ${computerScore} Player: ${playerScore} - Computer wins!`)
    } else if (computerScore < playerScore) {
        console.log(`Computer: ${computerScore} Player: ${playerScore} - Player wins!`)
    } else {
        console.log(`Computer: ${computerScore} Player: ${playerScore} - It's a draw!`)
    }
    computerScore = 0
    playerScore = 0
}

playGame()