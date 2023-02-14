/** @format */

"use strict";

const btnNewGame = document.querySelector(".btn--new");

const newGame = function () {
    // Reset score to 0
    document.querySelector("#score--0").textContent = 0;
    document.querySelector("#score--1").textContent = 0;
    document.querySelector("#current--0").textContent = 0;
    document.querySelector("#current--1").textContent = 0;

    // Set player 1 as starting player
    if (
        !document
            .querySelector(".player--0")
            .classList.contains("player--active")
    ) {
        document.querySelector(".player--0").classList.toggle("player--active");
        document.querySelector(".player--1").classList.toggle("player--active");
    }
};

newGame();

// New Game
btnNewGame.addEventListener("click", newGame);
