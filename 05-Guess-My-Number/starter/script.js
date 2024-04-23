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

document.querySelector('.check').addEventListener('click', function () {
  //   console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent =
      'No Number! Please Enter a Number to check the guess.';
  }
});
