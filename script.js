
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

console.log(computerPlay())
