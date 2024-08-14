let hasBlackJack = false;
let isAlive = true;
let firstNumber = Math.floor(Math.random() * 10) + 2;
let secondNumber = Math.floor(Math.random() * 10) + 2;
let cards = [firstNumber, secondNumber];
let sum = firstNumber + secondNumber;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let gameStarted = false;

function startGame() {
    renderGame();
}

function renderGame() {
    gameStarted = true;
    if (sum <= 20) {
        message = "Do you want to pick another card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You are out of the game";
        isAlive = false;
    }

    messageEl.textContent = message;

    sumEl.textContent = "Sum: " + sum;

    cardsEl.textContent = "Cards: ";

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

}

function newCard() {
    if (gameStarted) {
        let newNumber = Math.floor(Math.random() * 10) + 2;
        cards.push(newNumber);
        sum += newNumber;
        renderGame();
    }
}



