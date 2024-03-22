let secretNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;

function checkGuess() {
    let guess = document.getElementById('guess').value;
    let message = document.getElementById('message');

    guessCount++;

    if (guess == secretNumber) {
        message.textContent = 'Congratulations! You got it right! You guessed ' + guessCount + ' times.';
    } else if (guess < secretNumber) {
        message.textContent = 'Too low! Try again.';
    } else if (guess > secretNumber) {
        message.textContent = 'Too high! Try again.';
    }
}

function resetGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('guess').value = '';
    document.getElementById('message').textContent = '';
    guessCount = 0;
}