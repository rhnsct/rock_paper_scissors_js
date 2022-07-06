const options = ['rock', 'paper', 'scissors'];
const possibleHands = ['rock>scissors', 'scissors>paper', 'paper>rock'];

let computerScore = 0;
let playerScore = 0;

function computerPlay(){
    // chooses a random option from the given list and returns it
    let choice = options[Math.floor(Math.random()*options.length)];
    return choice
};

function round(computerPlay, playerSelection){
    // takes given input from computerPlay() and players choice and decides who wins or if it's a draw
    // returns a value associated with that result
    let compete = `${computerPlay}>${playerSelection}`;
    
    if (computerPlay == playerSelection){
        return 0
    } else if (possibleHands.includes(compete)){
        return 1
    } else {
        return 2
    };
};

function changeResultText(content) {
    let resultText = document.getElementById('resultText');
    resultText.textContent = content;
};

function hideShow() {
    // hides starter screen
    let choicesDiv = document.getElementById('choices');
    choicesDiv.setAttribute('style', 'display: none');

    let title = document.getElementById('title');
    title.setAttribute('style', 'display: none');

    let scoreboard = document.getElementById('scoreboard');
    scoreboard.setAttribute('style', 'margin-top: 5em');

    let endgame = document.getElementById('endgame');
    endgame.setAttribute('style', 'display: flex');
};

function showHide() {
    // reverse changes of hideShow
    
    let choicesDiv = document.getElementById('choices');
    choicesDiv.setAttribute('style', 'display: flex');

    let title = document.getElementById('title');
    title.setAttribute('style', 'display: flex');

    let scoreboard = document.getElementById('scoreboard');
    scoreboard.setAttribute('style', 'margin-top: 0');

    let endgame = document.getElementById('endgame');
    endgame.setAttribute('style', 'display: none');

};

function endScreen(color) {
    // edits the end screen background depending on the input

    let screenEnd = document.getElementById('endgame');
    if (color == 'red'){
        screenEnd.style.backgroundColor = 'rgb(179, 10, 10)';
    } else {
        screenEnd.style.backgroundColor = 'rgb(8, 75, 6)';
    }  ;
}

function winnerText(text) {
    let endText = document.getElementById('finalResult');
    endText.textContent = text;
}


function declareWinner(compScore, playerScore) {
    // takes scores and decides the winner
    hideShow();

    if (compScore > playerScore) {
        endScreen('red');
        return "Player loses!";
    } else {
        endScreen('green');
        return "Player wins!";
    };
};

function updateScores(computerScore, playerScore) {
    // updates cores on scoreboard to the inputed scores

    let computerScoreText = document.getElementById('computerScore');
    let playerScoreText = document.getElementById('playerScore');
    computerScoreText.textContent = `${computerScore}`;
    playerScoreText.textContent = `${playerScore}`;

};


function play(clicked_id) {

// plays one complete round of rock-paper-scissors and then checks if anyone has reached 5 points
// doesn't add points for draws
// updates scoreboard

    let go = round(computerPlay(), clicked_id);
    if (go == 0) {
        changeResultText('Draw!')
    } else if (go == 1){
        changeResultText(`Computer wins! ${computerPlay.charAt(0).toUpperCase() + computerPlay.slice(1)} beats ${playerSelection}.`);
        computerScore += 1;
        updateScores(computerScore, playerScore);
    } else {
        playerScore += 1;
        updateScores(computerScore, playerScore);
    };
    
    if (playerScore >= 5 || computerScore >= 5) {
        winnerText(declareWinner(computerScore, playerScore));
    };
};

function reset(){
    // resets game screen to begining
    playerScore = 0;
    computerScore = 0;
    changeResultText('Make a choice to begin.');
    updateScores(computerScore, playerScore);
    showHide();
};