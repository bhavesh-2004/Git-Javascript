let randomNumber = Math.floor(Math.random() * 100) + 1;
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const resultParas = document.querySelector('.resultParas');

let prevGuess = [];
let numGuess = 0;
let playGame = true;

submit.addEventListener('click', function(e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
});

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1 || guess > 100) {
        alert('Please enter a number between 1 and 100');
    } else {
        numGuess++;
        prevGuess.push(guess);
        displayGuess(guess);
        checkGuess(guess);
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage('Congratulations! You guessed it right!');
        endGame();
    } else if (numGuess >= 10) {
        displayMessage(`Game over. The random number was ${randomNumber}.`);
        endGame();
    } else {
        displayMessage(guess < randomNumber ? 'Too low!' : 'Too high!');
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    remaining.innerHTML = `${10 - numGuess}`;
}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', 'true');
    const newGameButton = document.createElement('button');
    newGameButton.innerHTML = 'Start New Game';
    resultParas.appendChild(newGameButton);
    newGameButton.addEventListener('click', newGame);
    playGame = false;
}

function newGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    prevGuess = [];
    numGuess = 0;
    guessSlot.innerHTML = '';
    remaining.innerHTML = '10';
    userInput.removeAttribute('disabled');
    lowOrHigh.innerHTML = '';
    resultParas.removeChild(resultParas.lastChild);
    playGame = true;
}