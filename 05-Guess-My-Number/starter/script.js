'use strict';
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

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  //   console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (score <= 0) {
    document.querySelector('.message').textContent = 'You Lost the Game !!!';
    return;
  }

  if (!guess) {
    document.querySelector('.message').textContent =
      'No Number! Please Enter a Number to check the guess.';
  } else if (guess === secretNumber) {
    // when Player wins
    document.querySelector('.message').textContent =
      'Wohoo !! Correct Number!!';

    document.querySelector('body').style.backgroundColor = '#60b437';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent =
      'Too High Guess!! Please Lower your guess!!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent =
      'Too Low Guess!! Please increase your guess!!';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
