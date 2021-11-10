/*jshint esversion: 6 */

//Variables and Constants

const navBtns = document.getElementsByClassName('btn');
const playerControls = document.querySelectorAll(".hand-btn, .icon");

let gameSelected;
let playerSelected;
const playerOptions = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
let result;
let resultChoice;
let resultReason;

let playerRoundScore = 0;
let gameRoundScore = 0;

let roundStatus;
let gameScoreWon = 0;
let gameScoreLost = 0;

/*
Add event listeners to the game control buttons after DOM
loads.  Get the data-type attribute and to disables buttons,
enabled and disables HTML elments
*/
document.addEventListener("DOMContentLoaded", function () {

    for (let btn of navBtns)
        btn.addEventListener("click", function () {
            if (this.getAttribute('data-type') === "rules") {
                document.getElementById('rules').style.display = "block";
                document.getElementById('play').disabled = true;
            } else if (this.getAttribute('data-type') === "play") {
                document.getElementById('video-wrapper').style.display = "none";
                document.getElementById('game-con').style.display = "block";
                document.getElementById('game-score').style.display = "flex";
                document.getElementById('quit').disabled = false;
                document.getElementById('play').disabled = true;
            } else if (this.getAttribute('data-type') === "quit") {
                document.getElementById('rounds-won').style.display = "none";
                document.getElementById('games-won').style.display = "none";
                document.getElementById('game-con').style.display = "none";
                document.getElementById('game-score').style.display = "none";
                document.getElementById('final-result').style.display = "none";
                document.getElementById('winner').style.display = "none";
                document.getElementById('loser').style.display = "none";
                document.getElementById('play').disabled = false;
                document.getElementById('video-wrapper').style.display = "block";
                document.getElementById('rules-btn').disabled = false;
            }
        });
    document.getElementById('quit').disabled = true;
});

//Event listener to identify data-type of button for the player's choice
playerControls.forEach(playerControl => playerControl.addEventListener('click', (event) => {
    playerSelected = event.target.dataset.type;
    playGame();
}));

/* Event listener to disable Play, hide rules modal when when user clicks
the close button on rules
*/
document.querySelector('#close-btn-rules').addEventListener("click", function () {
    document.getElementById('rules').style.display = "none";
    document.getElementById('play').disabled = false;
});

//Event listener to stop Youtube video when Play button is selected
document.querySelector('#play').addEventListener("click", function () {
    stopVideo();
});

/*Event listener to reset round and game scores, stop Youtube video when 
Quit button is selected
*/
document.querySelector('#quit').addEventListener("click", function () {
    resetRoundScore();
    resetGameScore();
    stopVideo();
});

/*Event listener to enable game buttons and hide result modal message when 
closing icon is selected
*/
document.querySelector('#close-btn-round').addEventListener("click", function () {
    document.getElementById('rounds-won').style.display = "none";
    document.getElementById('game-con').style.display = "block";
});

/* Event listener to enable game buttons, reset round score and hide game result
modal message when close icon is selected
*/
document.querySelector('#close-btn-game').addEventListener("click", function () {
    document.getElementById('games-won').style.display = "none";
    document.getElementById('game-con').style.display = "block";
    resetRoundScore();
});

/**
 * Main function to execute all required functions to play and complete
 * the game.
 */
function playGame() {
    gameChoice();
    playerChoice();
    calculateResult();
    roundResult();
    incrementRoundScore();
    gameResult();
    incrementGameScore();
    winnerResult();
}

/**
 * Function to retrieve DOM objects and insert player's choice into the 
 * Games Won and Rounds Won modal message
 */
function playerChoice() {
    document.getElementById('player-ans-round').className = `far fa-hand-${playerSelected}`;
    document.getElementById('player-ans-game').className = `far fa-hand-${playerSelected}`;
    document.getElementById('player-answer').innerHTML = `${playerSelected}`;
}

/**
 * Function to calculate game's random choice and insert choice into the Games Won and Rounds Won message
 */
function gameChoice() {
    gameSelected = playerOptions[Math.floor(Math.random() * playerOptions.length)];
    document.getElementById('game-ans-round').className = `far fa-hand-${gameSelected}`;
    document.getElementById('game-ans-game').className = `far fa-hand-${gameSelected}`;
    document.getElementById('game-answer').innerHTML = `${gameSelected}`;
}

/**
 * Function to calculate a result and set values for declared variables. The values will be retrived  
 * by functions to display results to the user
 */
function calculateResult() {
    if (playerSelected === gameSelected) {
        result = 'Draw';
        resultChoice = `You chose ${playerSelected} and the Game chose ${gameSelected}`;
        resultReason = 'Draw';
    } else if (playerSelected === 'rock' && (gameSelected === 'lizard' || gameSelected === 'scissors')) {
        result = 'You Won!';
        resultChoice = `You chose ${playerSelected} and the Game chose ${gameSelected}`;
        resultReason = 'Rock crushes Lizard and Scissors';
    } else if (playerSelected === 'paper' && (gameSelected === 'rock' || gameSelected === 'spock')) {
        result = 'You Won!';
        resultChoice = `You chose ${playerSelected} and the Game chose ${gameSelected}`;
        resultReason = 'Paper covers rock and disproves Spock';
    } else if (playerSelected === 'scissors' && (gameSelected === 'paper' || gameSelected === 'lizard')) {
        result = 'You Won!';
        resultChoice = `You chose ${playerSelected} and the Game chose ${gameSelected}`;
        resultReason = 'Scissors cuts Paper and decapitates Lizard';
    } else if (playerSelected === 'lizard' && (gameSelected === 'spock' || gameSelected === 'paper')) {
        result = 'You Won!';
        resultChoice = `You chose ${playerSelected} and the Game chose ${gameSelected}`;
        resultReason = 'Lizard poisons Spock and eats Paper';
    } else if (playerSelected === 'spock' && (gameSelected === 'scissors' || gameSelected === 'rock')) {
        result = 'You Won!';
        resultChoice = `You chose ${playerSelected} and the Game chose ${gameSelected}`;
        resultReason = 'Spock smashes Scissors and vaporizes Rock';
    } else {
        result = 'You Lost!';
        resultChoice = `You chose ${playerSelected} and the Game chose ${gameSelected}`;
        if (gameSelected === 'rock') {
            resultReason = 'Rock crushes Lizard and Scissors';
        } else if (gameSelected === 'paper') {
            resultReason = 'Paper covers Rock and disproves Spock.';
        } else if (gameSelected === 'scissors') {
            resultReason = 'Scissors cuts Paper and decapitates Lizard.';
        } else if (gameSelected === 'lizard') {
            resultReason = 'Lizard poisons Spock and eats Paper';
        } else if (gameSelected === 'spock') {
            resultReason = 'Spock smashes Scissors and vaporizes Rock';
        }
    }
}

/**
 * Function to display results message modal and hide game controls after completing a round
 */
function roundResult() {
    document.getElementById('rounds-won').style.display = "block";
    document.getElementById('round-status').innerHTML = result;
    document.getElementById('game-con').style.display = "none";
}

/**
 * Function to increment round score base on value of the result variable result and 
 * subsequently update the results modal message.
 */
function incrementRoundScore() {
    if (result === 'You Won!') {
        document.getElementById('player-result').innerHTML = ++playerRoundScore;
    }
    if (result === 'You Lost!') {
        document.getElementById('game-result').innerHTML = ++gameRoundScore;
    }
    document.getElementById('score-reason').innerHTML = resultReason;
    console.log(playerRoundScore, gameRoundScore);
}

/**
 * Function to display game results modal if any player reaches a score of 2, update modal message
 * with result choice and reason values.
 */

function gameResult() {
    if (playerRoundScore === 2 || gameRoundScore === 2) {
        document.getElementById('rounds-won').style.display = "none";
        document.getElementById('games-won').style.display = "block";
        document.getElementById('game-con').style.display = "none";
        document.getElementsByClassName('games-won-result')[0].innerHTML = resultChoice;
        document.getElementsByClassName('games-won-result')[1].innerHTML = resultChoice;
        document.getElementsByClassName('games-won-reason')[0].innerHTML = resultReason;
        document.getElementsByClassName('games-won-reason')[1].innerHTML = resultReason;
    } 
    if (playerRoundScore === 2) {
        document.getElementById('game-status').innerText = 'You won this Game!';
        roundStatus = "won";
    } else if (gameRoundScore === 2) {
        document.getElementById('game-status').innerText = 'You lost this Game!';
        roundStatus = "lost";
    }
}

/**
 * Function to increment game scores and update values in HTML
 */
function incrementGameScore() {
    if (roundStatus === 'won') {
        document.getElementById('won-result-score').innerHTML = ++gameScoreWon;
    } else if (roundStatus === 'lost') {
        document.getElementById('lost-result-score').innerHTML = ++gameScoreLost;
    }
}

/**
 * Function to reset game and round score variable values, update HTML values and 
 * set round status value.
 */
function resetRoundScore() {
    gameRoundScore = 0;
    playerRoundScore = 0;
    roundStatus = "Next Game";
    document.getElementById('player-result').innerHTML = 0;
    document.getElementById('game-result').innerHTML = 0;
}

/**
 * Function to reset game score variable and innerHTML
 */
function resetGameScore() {
    gameScoreWon = 0;
    gameScoreLost = 0;
    document.getElementById('won-result-score').innerHTML = 0;
    document.getElementById('lost-result-score').innerHTML = 0;
}

/**
 * Function to display final result window if any player wins 3 games, display HTML element
 * for win or lose.Disable rules and play button.
 */
function winnerResult() {
    if (gameScoreWon === 3 || gameScoreLost === 3) {
        document.getElementById('games-won').style.display = "none";
        document.getElementById('game-con').style.display = "none";
        document.getElementById('final-result').style.display = "block";
        document.getElementById('rules-btn').disabled = true;
        document.getElementById('play').disabled = true;
        
    }
    if (gameScoreWon === 3) {
        document.getElementById('winner').style.display = "block";
        document.getElementById('loser').style.display = "none";
        document.getElementById('result-msg').innerText = "Awesome - You won the Game!";
    } else if (gameScoreLost === 3) {
        document.getElementById('loser').style.display = "block";
        document.getElementById('winner').style.display = "none";
        document.getElementById('result-msg').innerText = "Better luck next time!";
    }
}

//Credit to https://stackoverflow.com/questions/13598423/stop-all-playing-iframe-videos-on-click-a-link-javascript
/**
 * Function to stop video from playing
 */
function stopVideo() {
    let iframe = document.getElementById('video');
    iframe.src = iframe.src;
}