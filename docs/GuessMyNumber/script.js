"use strict";
/*
console.log(document.querySelector('.message').textContent);
// ----------------   DOM => Document Object Model
// Structured Representation of HTML Documents. Allows JS to access HTML Elements and Styles to manipulate them
//  DOM and DOM Methods/ Properties are part of Web API's and we can acess those through JS.

document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 22;

document.querySelector('.guess').value = 25;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  //   console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (score <= 0) {
    displayMessage("You Lost the Game !!!");
    return;
  }

  if (!guess) {
    displayMessage("No Number! Please Enter a Number to check the guess.");
  } else if (guess === secretNumber) {
    // when Player wins
    displayMessage("Wohoo !! Correct Number!!");
    document.querySelector(".number").textContent = secretNumber;
    if (score > highScore) {
      highScore = Math.max(score, highScore);
      document.querySelector(".highscore").textContent = highScore;
    }

    document.querySelector("body").style.backgroundColor = "#60b437";
    document.querySelector(".number").style.width = "30rem";
  } else if (guess > secretNumber) {
    displayMessage("Too High Guess!! Please Lower your guess!!");
    score--;
    document.querySelector(".score").textContent = score;
  } else if (guess < secretNumber) {
    displayMessage("Too Low Guess!! Please increase your guess!!");
    score--;
    document.querySelector(".score").textContent = score;
  }
});

//  Coding Challenge => Set Again Button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".guess").value = null;
  displayMessage("Start guessing...");

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
