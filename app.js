// Rock Paper Scissors

// Variables
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const usrScoreDisplay = document.querySelector("#usrScoreDisplay");
const compScoreDisplay = document.querySelector("#compScoreDisplay");
let usrValue;
let compValue;
let gameResult;
let usrScore = 0;
let compScore = 0;

// Listeners
rockBtn.addEventListener('click', () => {
    usrValue = parseInt(rockBtn.value);
    compValue = computerThrow();
    console.log(usrValue, compValue);
    checkGame();
    console.log(gameResult);
})

paperBtn.addEventListener('click', () => {
    usrValue = parseInt(paperBtn.value);
    compValue = computerThrow();
    console.log(usrValue, compValue);
    checkGame();
    console.log(gameResult);
})

scissorsBtn.addEventListener('click', () => {
    usrValue = parseInt(scissorsBtn.value);
    compValue = computerThrow();
    console.log(usrValue, compValue);
    checkGame();
    console.log(gameResult);
})


// Functions
// These functions use 0 for rock, 1 for paper, 2 for scissors
const computerThrow = () => {
    return Math.floor(Math.random() * 3)
}

const checkGame = () => {
    if (usrValue === compValue) {
        gameResult = "Tie"
    } else if (
        (usrValue === 0 && compValue === 1) ||
        (usrValue === 1 && compValue === 2) ||
        (usrValue === 2 && compValue === 0)) {
        gameResult = "You Lose..."
        compScore++;
        compScoreDisplay.textContent = compScore;
    } else {
        gameResult = "You Win!"
        usrScore++;
        usrScoreDisplay.textContent = usrScore;
    }
}