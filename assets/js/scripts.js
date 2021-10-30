//Add event listeners to game controls after DOM loads
//Deactivate player controls

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
                if (this.getAttribute("data-type") === "play") {
                    alert('Game controls will be activated');
                } else if (this.getAttribute('data-type') === "rules") {
                    alert('Rule box will be displayed');
                } else if (this.getAttribute('data-type') === "quit") {
                    alert('Quit message to check game status')
                } else {
                    let buttonType = this.getAttribute("data-type")
                    alert(`Button not defined: ${buttonType}`);
                }
            })
    }
    
})

//Play function to activate game controls
function activateGame() {

}

//Define array for player options and random game selection
const playerOptions = [];

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