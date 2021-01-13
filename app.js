// Rock Paper Scissors

// Variables
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const usrScoreDisplay = document.querySelector("#usrScoreDisplay");
const compScoreDisplay = document.querySelector("#compScoreDisplay");
const textResults = document.querySelector("#textResults");
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
    checkGame();
})

scissorsBtn.addEventListener('click', () => {
    usrValue = parseInt(scissorsBtn.value);
    compValue = computerThrow();
    checkGame();
})


// Functions
// These functions use 0 for rock, 1 for paper, 2 for scissors
const computerThrow = () => {
    return Math.floor(Math.random() * 3)
}

const checkGame = () => {
    if (usrValue === compValue) {
        gameResult = "Tie!"
        textResults.textContent = gameResult;
    } else if (usrValue === 0 && compValue === 1) {
        gameResult = "Paper covers Rock! You lose...";
        textResults.textContent = gameResult;
        compScore++;
        compScoreDisplay.textContent = compScore;
    } else if (usrValue === 1 && compValue === 2) {
        gameResult = ("Scissors cut Paper! You lose...")
        textResults.textContent = gameResult;
        compScore++;
        compScoreDisplay.textContent = compScore;
    } else if (usrValue === 2 && compValue === 0) {
        gameResult = "Rock breaks Scissors! You Lose..."
        textResults.textContent = gameResult;
        compScore++;
        compScoreDisplay.textContent = compScore;
    } else if (usrValue === 0 && compValue === 2) {
        gameResult = "Rock breaks Scissors! You win!"
        textResults.textContent = gameResult;
        usrScore++;
        usrScoreDisplay.textContent = usrScore;
    } else if (usrValue === 1 && compValue === 0) {
        gameResult = "Paper covers Rock! You win!";
        textResults.textContent = gameResult;
        usrScore++;
        usrScoreDisplay.textContent = usrScore;
    } else {
        gameResult = "Scissors cut Paper! You win!"
        textResults.textContent = gameResult;
        usrScore++;
        usrScoreDisplay.textContent = usrScore;
    }
}