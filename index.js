"use strict";
const numEl = document.getElementById("inputNum");
const resultEl = document.getElementById("result");
const theNumber = Math.floor(Math.random() * 100) + 1;
const Guess = () => {
    const guessNumber = parseInt(numEl.value);
    if (IsCorrect(guessNumber)) {
        resultEl.innerText = "Eltaláltad";
    }
    else {
        if (guessNumber < theNumber) {
            resultEl.innerText = "A gondolt szám nagyobb!";
        }
        else {
            resultEl.innerText = "A gondolt szám kisebb!";
        }
    }
};
const IsCorrect = (guessNumber) => {
    return guessNumber === theNumber;
};
