/** @format */

"use strict";

const btnNewGame = document.querySelector(".btn--new");

const newGame = function () {
    document.querySelector("#score--0").textContent = 0;
    document.querySelector("#score--1").textContent = 0;
    document.querySelector("#current--0").textContent = 0;
    document.querySelector("#current--1").textContent = 0;
};

newGame();

// New Game
btnNewGame.addEventListener("click", newGame);
