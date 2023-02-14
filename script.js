/** @format */

"use strict";

let randomDice;
let activePlayer;

const btnNewGame = document.querySelector(".btn--new");
const btnRollDice = document.querySelector(".btn--roll");
const btnHoldScore = document.querySelector(".btn--hold");

const switchPlayer = function () {
    document.querySelector(".player--0").classList.toggle("player--active");
    document.querySelector(".player--1").classList.toggle("player--active");
    activePlayer = activePlayer === 0 ? 1 : 0;
};

const newGame = function () {
    // Reset score to 0
    document.querySelector("#score--0").textContent = 0;
    document.querySelector("#score--1").textContent = 0;
    document.querySelector("#current--0").textContent = 0;
    document.querySelector("#current--1").textContent = 0;

    btnRollDice.style.display = "block";
    btnHoldScore.style.display = "block";

    // Set player 1 as starting player
    if (
        !document
            .querySelector(".player--0")
            .classList.contains("player--active")
    )
        switchPlayer();

    // Hide dice image
    document.querySelector(".dice").style.display = "none";

    // Set the active player
    activePlayer = 0;
};

newGame();

// New game
btnNewGame.addEventListener("click", newGame);

// Roll dice
btnRollDice.addEventListener("click", function () {
    // Generate random dice
    randomDice = Math.trunc(Math.random() * 6) + 1;

    // Display dice roll
    document.querySelector(".dice").style.display = "block";
    document.querySelector(".dice").src = `images/dice-${randomDice}.png`;

    // Display score
    if (randomDice === 1) {
        document.querySelector(`#current--${activePlayer}`).textContent = 0;
        switchPlayer();
    } else {
        document.querySelector(`#current--${activePlayer}`).textContent =
            Number(
                document.querySelector(`#current--${activePlayer}`).textContent
            ) + randomDice;
    }
});

// Hold score
btnHoldScore.addEventListener("click", function () {
    // Add current score to total
    document.querySelector(`#score--${activePlayer}`).textContent =
        Number(document.querySelector(`#score--${activePlayer}`).textContent) +
        Number(document.querySelector(`#current--${activePlayer}`).textContent);

    if (
        Number(document.querySelector(`#score--${activePlayer}`).textContent) >=
        10
    ) {
        btnRollDice.style.display = "none";
        btnHoldScore.style.display = "none";
    } else {
        // Set current score to 0 and switch player
        document.querySelector(`#current--${activePlayer}`).textContent = 0;
        switchPlayer();
    }
});
