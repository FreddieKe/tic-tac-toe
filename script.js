
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

function playGame(computerChoice,playerChoice) {
    if (computerChoice === playerChoice) { //checks if computer and player have  same hand
        console.log(`Computer: ${computerChoice} Player: ${playerChoice} - It\'s a draw!`);
    } else if ((computerChoice === 'rock' && playerChoice === 'scissors')||
    (computerChoice === 'scissors' && playerChoice === 'paper'||
    (computerChoice === 'paper' && playerChoice === 'rock'))) { //checks if computer has better hand
        console.log(`Computer: ${computerChoice} Player: ${playerChoice} - Computer wins!`)
    } else if ((playerChoice === 'rock' && computerChoice === 'scissors')||
    (playerChoice === 'scissors' && computerChoice === 'paper'||
    (playerChoice === 'paper' && computerChoice === 'rock'))) { //checks if player has better hand
        console.log(`Computer: ${computerChoice} Player: ${playerChoice} - Player wins!`);
    } else {console.log(`Computer: ${computerChoice} Player: ${playerChoice} I\'m sorry, I did not understand that.`)}
}

//game initialises 
let computerChoice = computerPlay();
let playerChoice = playerPlay();
for (let i = 0; i < 5; i++) {
    playGame(computerChoice,playerChoice)
};


