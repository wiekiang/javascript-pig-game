/** @format */

"use strict";

let randomDice, activePlayer, currentScore;
const scores = [0, 0];

const scoreTotalPlayer1 = document.querySelector("#score--0");
const scoreTotalPlayer2 = document.querySelector("#score--1");
const scoreCurrentPlayer1 = document.querySelector("#current--0");
const scoreCurrentPlayer2 = document.querySelector("#current--1");
const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");

const btnNewGame = document.querySelector(".btn--new");
const btnRollDice = document.querySelector(".btn--roll");
const btnHoldScore = document.querySelector(".btn--hold");
const diceImage = document.querySelector(".dice");

const switchPlayer = function () {
    player1.classList.toggle("player--active");
    player2.classList.toggle("player--active");
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
};

const init = function () {
    // Reset score to 0
    scoreTotalPlayer1.textContent = 0;
    scoreTotalPlayer2.textContent = 0;
    scoreCurrentPlayer1.textContent = 0;
    scoreCurrentPlayer2.textContent = 0;

    // Reset hidden button
    btnRollDice.classList.remove("hidden");
    btnHoldScore.classList.remove("hidden");

    // Reset player win class
    player1.classList.remove("player--winner");
    player2.classList.remove("player--winner");

    // Set player 1 as starting player
    if (
        !document
            .querySelector(".player--0")
            .classList.contains("player--active")
    ) {
        player1.classList.add("player--active");
        player2.classList.remove("player--active");
    }

    // Hide dice image
    diceImage.classList.add("hidden");

    // Set the active player
    activePlayer = 0;
    currentScore = 0;
};

init();

// New game
btnNewGame.addEventListener("click", init);

// Roll dice
btnRollDice.addEventListener("click", function () {
    // Generate random dice
    randomDice = Math.trunc(Math.random() * 6) + 1;

    // Display dice roll
    diceImage.classList.remove("hidden");
    diceImage.src = `images/dice-${randomDice}.png`;

    // Display score
    if (randomDice === 1) {
        document.querySelector(`#current--${activePlayer}`).textContent = 0;
        switchPlayer();
    } else {
        currentScore += randomDice;
        document.querySelector(`#current--${activePlayer}`).textContent =
            currentScore;
    }
});

// Hold score
btnHoldScore.addEventListener("click", function () {
    // Add current score to total
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
        scores[activePlayer];

    // Rest current score
    currentScore = 0;

    // Check for winner
    if (scores[activePlayer] >= 100) {
        btnRollDice.classList.toggle("hidden");
        btnHoldScore.classList.toggle("hidden");
        document
            .querySelector(`.player--${activePlayer}`)
            .classList.add("player--winner");
        document
            .querySelector(`.player--${activePlayer}`)
            .classList.remove("player--active");
    } else {
        // Set current score to 0 and switch player
        document.querySelector(`#current--${activePlayer}`).textContent = 0;
        switchPlayer();
    }
});
