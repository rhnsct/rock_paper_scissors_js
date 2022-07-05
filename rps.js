const options = ['rock', 'paper', 'scissors'];
const possibleHands = ['rock>scissors', 'scissors>paper', 'paper>rock']

function computerPlay(){
    let choice = options[Math.floor(Math.random()*options.length)];
    return choice
};

function playerSelection(){
    let choice = prompt('Choose your hand rock/paper/scissors!').toLowerCase();
    if (options.includes(choice)) {
        return choice
    } else {
        alert(`Invalid input: "${choice}"`);
        let chooseAgain = playerSelection();
        return chooseAgain
    }
};

function playRound(computerPlay, playerSelection){
    let compete = `${computerPlay}>${playerSelection}`
    if (computerPlay == playerSelection){
        alert("It's a draw!")
        return 0
    } else if (possibleHands.includes(compete)){
        alert(`Computer wins! ${computerPlay.charAt(0).toUpperCase() + computerPlay.slice(1)} beats ${playerSelection}.`)
        return 1
    } else {
        alert(`Player wins! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerPlay}.`)
        return 2
    }
};

function game(){
    let computerScore = 0
    let playerScore = 0
    for (let i = 0; i < 5; ++i){
        let go = playRound(computerPlay(), playerSelection());

        if (go == 0) {
            --i
            console.log(go)
        } else if (go == 1){
            computerScore += 1
            console.log(go)
        } else {
            playerScore += 1
            console.log(go)
        }
        console.log('Player Score =' + playerScore + ' Computer Score = ' + computerScore)
    }
    return declareWinner(computerScore, playerScore)
};

function declareWinner(compScore, playerScore) {
    if (compScore > playerScore) {
        return "Player loses!"
    } else {
        return "Player wins!"
    }
};

console.log(game())