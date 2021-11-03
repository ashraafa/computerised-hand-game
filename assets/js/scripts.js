//Variables and Constants

const navBtns = document.getElementsByClassName('btn');
const playerControls = document.querySelectorAll(".hand-btn, .icon");

let gameSelected;
const gameAnswer = document.getElementById("game-ans");
let playerSelected;
const playerAnswer = document.getElementById("player-ans");

const playerOptions = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
let result;
let resultChoice;
let resultReason;

let playerRoundScore = 0;
let gameRoundScore = 0;

//Add event listeners to game controls after DOM loads
//Deactivate player controls

document.addEventListener("DOMContentLoaded", function () {

    for (let btn of navBtns)
        btn.addEventListener("click", function () {
            if (this.getAttribute('data-type') === "rules") {
                alert('Rule box will be displayed');
            }
            if (this.getAttribute('data-type') === "quit") {
                alert('Quit message to check game status')
            }
        })

});

//Event listener for game controls

playerControls.forEach(playerControl => playerControl.addEventListener('click', (event) => {
    playerSelected = event.target.dataset.type;
    console.log(playerSelected);
    gameChoice();
    playerChoice();
    calculateResult();
    roundResult();
    incrementRoundScore();
    gameResult();
}))

// Event listeners for pop up windows
document.querySelector('.close-btn').addEventListener("click", function () {
    document.getElementById('rounds-won').style.display = "none";
})

//Function to retrieve choices

function gameChoice() {

    gameSelected = playerOptions[Math.floor(Math.random() * playerOptions.length)];
    gameAnswer.className = `far fa-hand-${gameSelected}`;
    console.log(gameSelected);
}

function playerChoice() {

    playerAnswer.className = `far fa-hand-${playerSelected}`;

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
}

//Display game score
function gameResult() {
    if (playerRoundScore >= 2) {
        document.getElementById('rounds-won').style.display = "none";
        document.getElementById('games-won').style.display = "block";
        document.getElementById('games-won-result').innerHTML = resultChoice;
        document.getElementById('games-won-reason').innerHTML = resultReason;
    }

}

//Increment game score
function incrementGameScore() {

}

//Continue Game

//Display game rules

//Quit game, deactive game controls and reset scores