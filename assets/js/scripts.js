//Add event listeners to game controls after DOM loads
//Deactivate player controls

const navBtns = document.getElementsByClassName('btn')
const playerControls = document.querySelectorAll(".hand-btn, .icon");

let gameSelected;
const gameAnswer = document.getElementById("game-ans");
let playerSelected;
const playerAnswer = document.getElementById("player-ans");

const playerOptions = ['rock', 'paper', 'scissors', 'spock', 'lizard'];

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

//Play function to activate game controls

playerControls.forEach(playerControl => playerControl.addEventListener('click', (event) => {
    playerSelected = event.target.dataset.type;
    console.log(playerSelected);
    gameChoice();
    playerChoice();

}))


//Function to retrieve choices

function gameChoice() {

    gameSelected = playerOptions[Math.floor(Math.random() * playerOptions.length)];
    gameAnswer.className = `far fa-hand-${gameSelected}`;
    console.log(gameSelected);
}

function playerChoice() {

    playerAnswer.className = `far fa-hand-${playerSelected}`;

}


function selectedChoice(gameType) {

    playerChoice();
    gameChoice();
}


//Main function to run game and calculate result
function playGame() {


}

//Display result score
function roundResult() {

}

//Increment round score
function incrementRoundScore() {

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