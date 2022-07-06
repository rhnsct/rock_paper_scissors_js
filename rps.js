const options = ['rock', 'paper', 'scissors'];
const possibleHands = ['rock>scissors', 'scissors>paper', 'paper>rock']

let computerScore = 0;
let playerScore = 0;

function computerPlay(){
    let choice = options[Math.floor(Math.random()*options.length)];
    return choice
};


function playerSelection(){
    let choice = replyClick();
    if (options.includes(choice)) {
        return choice
    } else {
        alert(`Invalid input: "${choice}"`);
        let chooseAgain = playerSelection();
        return chooseAgain
    }
};

function round(computerPlay, playerSelection){
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
    };
};

function game(clicked_id){
    play(clicked_id);  
    
};

function hideShow() {
    let choicesDiv = document.getElementById('choices')
    choicesDiv.setAttribute('style', 'display: none')
    let endgame = document.getElementById('endgame')
    endgame.setAttribute('style', 'display: flex')
};

function showHide() {
    
    let choicesDiv = document.getElementById('choices')
    choicesDiv.setAttribute('style', 'display: flex')
    let endgame = document.getElementById('endgame')
    endgame.setAttribute('style', 'display: none')

}

function declareWinner(compScore, playerScore) {
    
    hideShow();

    if (compScore > playerScore) {
        return "Player loses!"
    } else {
        return "Player wins!"
    };
};

function updateScores(computerScore, playerScore) {
    let computerScoreText = document.getElementById('computerScore');
    let playerScoreText = document.getElementById('playerScore');
    computerScoreText.textContent = `${computerScore}`
    playerScoreText.textContent = `${playerScore}`

}


function play(clicked_id) {
    let go = round(computerPlay(), clicked_id);
    
    
    if (go == 0) {
        console.log(go);
    } else if (go == 1){
        computerScore += 1;
        updateScores(computerScore, playerScore);
    } else {
        playerScore += 1;
        updateScores(computerScore, playerScore);
        console.log(go);
    };
    
    console.log(typeof(playerScore))
    console.log(playerScore >= 5)
    if (playerScore >= 5 || computerScore >= 5) {
        console.log('working')
        declareWinner(computerScore, playerScore);
    } else {
        console.log('test');
    };
};

function reset(){
    playerScore = 0
    computerScore = 0
    updateScores(computerScore, playerScore);
    showHide()
};