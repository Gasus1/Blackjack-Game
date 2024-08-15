let hasBlackJack = false;
let isAlive = false;
let cards = [];
let sum = 0;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {
    name: "Pablo",
    chips: 1000
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = `${player.name}: ${player.chips}$`

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = cards[0] + cards[1];
    renderGame();
}

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1;

    if (randomCard === 1) {
        randomCard = 11;
    } else if (randomCard > 10) {
        randomCard = 10;
    }

    return randomCard;
}

function renderGame() {
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
    if (isAlive && !hasBlackJack) {
        let newNumber = getRandomCard();
        cards.push(newNumber);
        sum += newNumber;
        renderGame();
    }
}



