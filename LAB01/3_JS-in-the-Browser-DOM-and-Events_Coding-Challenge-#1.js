let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Selecting the necessary elements
const againButton = document.querySelector('.again');
const checkButton = document.querySelector('.check');
const scoreElement = document.querySelector('.score');
const numberElement = document.querySelector('.number');
const messageElement = document.querySelector('.message');
const guessInput = document.querySelector('.guess');
const bodyElement = document.querySelector('body');

// Function to display messages
const displayMessage = function (message) {
    messageElement.textContent = message;
};

// Functionality when the 'Check' button is clicked (basic game logic)
checkButton.addEventListener('click', function () {
    const guess = Number(guessInput.value);

    if (!guess) {
        displayMessage('⛔ No number!');
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        numberElement.textContent = secretNumber;

        // Change styles for winning
        bodyElement.style.backgroundColor = '#60b347';
        numberElement.style.width = '30rem';
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            scoreElement.textContent = `Score: ${score}`;
        } else {
            displayMessage('💥 You lost the game!');
            scoreElement.textContent = `Score: 0`;
        }
    }
});

// Event listener for the 'Again' button (Reset functionality)
againButton.addEventListener('click', function () {
    // 2. Restore initial values of score and secretNumber
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // 3. Restore initial conditions of message, number, score, and guess input fields
    displayMessage('Start guessing...');
    numberElement.textContent = '?';
    scoreElement.textContent = `Score: ${score}`;
    guessInput.value = '';

    // 4. Restore original background color and number width
    bodyElement.style.backgroundColor = '#222';
    numberElement.style.width = '15rem';
});