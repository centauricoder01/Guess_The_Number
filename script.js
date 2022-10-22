'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// function to display the message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// when we click on check
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // when there is no input

  if (!guess) {
    displayMessage('⛔ No number!');
    //When the player wins
  } else if (guess === number) {
    displayMessage('🎉Correct Number!');
    document.querySelector('.number').textContent = number;
    // styless applied when we win
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // showing the highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // when the answer is wrong
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? '📈 Too high!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😢 You Lost The Game!');
      // styles applied when we lose
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#880808';
    }
  }
});
// when we click on again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
