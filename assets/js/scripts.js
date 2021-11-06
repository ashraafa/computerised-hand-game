//Variables and Constants

const navBtns = document.getElementsByClassName('btn');
const playerControls = document.querySelectorAll(".hand-btn, .icon");

let gameSelected;
const gameAnswerRound = document.getElementById('game-ans-round');
const gameAnswerGame = document.getElementById('game-ans-game');
let playerSelected;
const playerAnswerRound = document.getElementById('player-ans-round')
const playerAnswerGame = document.getElementById('player-ans-game')

const playerOptions = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
let result;
let resultChoice;
let resultReason;

let playerRoundScore = 0;
let gameRoundScore = 0;

let roundStatus;
let gameScoreWon = 0;
let gameScoreLost = 0;

//Add event listeners to game controls after DOM loads
//Deactivate player controls

document.addEventListener("DOMContentLoaded", function () {

    for (let btn of navBtns)
        btn.addEventListener("click", function () {
            if (this.getAttribute('data-type') === "rules") {
                document.getElementById('rules').style.display = "block";
                document.getElementById('play').disabled = true;
            } else if (this.getAttribute('data-type') === "play") {
                document.getElementById('game-con').style.display = "block";
                document.getElementById('game-score').style.display = "flex";
                document.getElementById('quit').disabled = false;
                document.getElementById('play').disabled = true;
            }
            if (this.getAttribute('data-type') === "quit") {
                document.getElementById('rounds-won').style.display = "none"
                document.getElementById('games-won').style.display = "none"
                document.getElementById('game-con').style.display = "none"
                document.getElementById('game-score').style.display = "none";
                document.getElementById('final-result').style.display ="none"
                document.getElementById('winner').style.display = "none"
                document.getElementById('loser').style.display = "none"
                document.getElementById('play').disabled = false;
                resetRoundScore();
                resetGameScore();
            }
        })
    document.getElementById('quit').disabled = true;
});

//Event listener for game controls

playerControls.forEach(playerControl => playerControl.addEventListener('click', (event) => {
    playerSelected = event.target.dataset.type;
    playGame();
}))

// Event listeners for pop up windows

document.querySelector('#close-btn-rules').addEventListener("click", function () {
    document.getElementById('rules').style.display = "none";
    document.getElementById('play').disabled = false;
})

document.querySelector('#close-btn-round').addEventListener("click", function () {
    document.getElementById('rounds-won').style.display = "none";
    document.getElementById('game-con').style.display = "block"
})

document.querySelector('#close-btn-game').addEventListener("click", function () {
    document.getElementById('games-won').style.display = "none"
    document.getElementById('game-con').style.display = "block"
    resetRoundScore();
})

//Function to run game

function playGame() {
    gameChoice();
    playerChoice();
    calculateResult();
    roundResult();
    incrementRoundScore();
    gameResult();
    incrementGameScore();
    winnerResult()
}

//Function to retrieve choices

function gameChoice() {

    gameSelected = playerOptions[Math.floor(Math.random() * playerOptions.length)];
    gameAnswerRound.className = `far fa-hand-${gameSelected}`;
    gameAnswerGame.className = `far fa-hand-${gameSelected}`;
    console.log(gameSelected);
}

function playerChoice() {

    playerAnswerRound.className = `far fa-hand-${playerSelected}`;
    playerAnswerGame.className = `far fa-hand-${playerSelected}`;
    console.log(playerSelected);

}


//Function to calculate result and feedback
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

    console.log(result);
    console.log(resultChoice);
    console.log(resultReason);
}

//Display round pop up window
function roundResult() {
    document.getElementById('rounds-won').style.display = "block";
    document.getElementById('round-status').innerHTML = result;
    document.getElementById('game-con').style.display = "none"
}

//Increment round score and provide result reason
function incrementRoundScore() {
    if (result === 'You Won!') {
        document.getElementById('player-result').innerHTML = ++playerRoundScore;
    }
    if (result === 'You Lost!') {
        document.getElementById('game-result').innerHTML = ++gameRoundScore;
    }

    document.getElementById('score-reason').innerHTML = resultReason;

    console.log(playerRoundScore, gameRoundScore)
}

//Display game score
function gameResult() {
    if (playerRoundScore === 2 || gameRoundScore === 2) {
        document.getElementById('rounds-won').style.display = "none";
        document.getElementById('games-won').style.display = "block";
        document.getElementById('game-con').style.display = "none"
        document.getElementById('games-won-result').innerHTML = resultChoice;
        document.getElementById('games-won-reason').innerHTML = resultReason;

    }
    if (playerRoundScore === 2) {
        document.getElementById('game-status').innerText = 'You won this Game!';
        roundStatus = "won";

    }else if (gameRoundScore === 2) {
        document.getElementById('game-status').innerText = 'You lost this Game!';
        roundStatus = "lost";
    }

    console.log(roundStatus);
    console.log(resultChoice);
}

//Increment game score and reset round score
function incrementGameScore() {
    if (roundStatus === 'won') {
        document.getElementById('won-result-score').innerHTML = ++gameScoreWon;
    } else if (roundStatus === 'lost') {
        document.getElementById('lost-result-score').innerHTML = ++gameScoreLost;
    }

    console.log(gameScoreWon, gameScoreLost);
}

function resetRoundScore() {
    gameRoundScore = 0;
    playerRoundScore = 0;
    roundStatus = "Next Game";
    document.getElementById('player-result').innerHTML = 0;
    document.getElementById('game-result').innerHTML = 0;
    console.log(playerRoundScore, gameRoundScore);
}

function resetGameScore() {
    gameScoreWon = 0;
    gameScoreLost = 0;
    document.getElementById('won-result-score').innerHTML = 0;
    document.getElementById('lost-result-score').innerHTML = 0;
}

//Calculate winner of game

function winnerResult() {
        if (gameScoreWon === 3 || gameScoreLost === 3) {
            document.getElementById('games-won').style.display = "none";
            document.getElementById('game-con').style.display = "none"
            document.getElementById('final-result').style.display ="block"
    
        }
        if (gameScoreWon === 3) {
            document.getElementById('winner').style.display = "block"
            document.getElementById('loser').style.display = "none"
            document.getElementById('result-msg').innerText = "Awesome - You won the Game!"
    
        }else if (gameScoreLost === 3) {
            document.getElementById('loser').style.display = "block"
            document.getElementById('winner').style.display = "none"
            document.getElementById('result-msg').innerText = "Better luck next time!"
        
        }

}