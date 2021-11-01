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
let reason;

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
}))

// Event listeners for pop up windows
document.querySelector('.close-btn').addEventListener("click", function() {
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
        console.log(result);
        console.log(resultChoice);
    }
    else if (playerSelected === 'rock' && (gameSelected === 'lizard' || gameSelected === 'scissors')) {
        result = 'You Won!';
        resultChoice = `You chose ${playerSelected} and the Game chose ${gameSelected}`;
        reason = 'Rock crushes Lizard and Scissors';
        console.log(result);
        console.log(resultChoice);
        console.log(reason);
    }
    else if (playerSelected === 'paper' && (gameSelected === 'rock' || gameSelected === 'spock')) {
        result = 'You Won!';
        resultChoice = `You chose ${playerSelected} and the Game chose ${gameSelected}`;
        reason = 'Paper covers rock and disproves Spock.';
        console.log(result);
        console.log(resultChoice);
        console.log(reason);
    } 
    else if (playerSelected === 'scissors' && (gameSelected === 'paper' || gameSelected === 'lizard')) {
        result = 'You Won!';
        resultChoice = `You chose ${playerSelected} and the Game chose ${gameSelected}`;
        reason = 'Scissors cuts Paper and decapitates Lizard.';
        console.log(result);
        console.log(resultChoice);
        console.log(reason);
    }
    else if (playerSelected === 'lizard' && (gameSelected === 'spock' || gameSelected === 'paper')) {
        result = 'You Won!';
        resultChoice = `You chose ${playerSelected} and the Game chose ${gameSelected}`;
        reason = 'Lizard poisons Spock and eats Paper.';
        console.log(result);
        console.log(resultChoice);
        console.log(reason);
    } 
    else if (playerSelected === 'spock' && (gameSelected === 'scissors' || gameSelected === 'rock')) {
        result = 'You Won!';
        resultChoice = `You chose ${playerSelected} and the Game chose ${gameSelected}`;
        reason = 'Spock smashes Scissors and vaporizes Rock';
        console.log(result);
        console.log(resultChoice);
        console.log(reason);
    }
    else {
        result = 'You Lost!';
        resultChoice = `You chose ${playerSelected} and the Game chose ${gameSelected}`;
        if (gameSelected === 'rock') {
            let reason = 'Rock crushes Lizard and Scissors';
            console.log(result);
            console.log(resultChoice);
            console.log(reason);
        } else if (gameSelected === 'paper') {
            let reason = 'Paper covers Rock and disproves Spock.';
            console.log(result);
            console.log(resultChoice);
            console.log(reason);
        } else if (gameSelected === 'scissors') {
            let reason = 'Scissors cuts Paper and decapitates Lizard.';
            console.log(result);
            console.log(resultChoice);
            console.log(reason);
        } else if (gameSelected === 'lizard') {
            let reason = 'Lizard poisons Spock and eats Paper.';
            console.log(result);
            console.log(resultChoice);
            console.log(reason);
        } else if (gameSelected === 'spock') {
            let reason = 'Spock smashes Scissors and vaporizes Rock';
            console.log(result);
            console.log(resultChoice);
            console.log(reason);
        }
    }
}

//Display round pop up window
function roundResult() {
    document.getElementById('rounds-won').style.display = "block";
    document.getElementById('round-status').innerHTML = result;
}

//Increment round score
function incrementRoundScore() {
    if (result === 'You Won!') {
        document.getElementById('player-result').innerHTML = ++playerRoundScore;
    } if (result === 'You Lost!') {
        document.getElementById('game-result').innerHTML = ++gameRoundScore;
    }
}
//Display game score
function gameResult() {

}

//Increment game score
function incrementGameScore() {

}

//Continue Game

//Display game rules

//Quit game, deactive game controls and reset scores