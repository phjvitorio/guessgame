'use strict';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const answer = getRandomInt(1, 20);

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  let guess = document.querySelector('.guess').value;

  if (guess !== answer) {
    document.querySelector('.message').textContent =
      guess > answer ? '📈 Muito alto!' : '📉 Muito baixo!';
    score -= 1;
    document.querySelector('.score').innerHTML = score;
  }

  if (guess == answer) {
    document.querySelector('.message').textContent = '✨ Numero correto!';
    document.querySelector('.highscore').innerHTML = score;
    document.querySelector('.number').textContent = answer;

    document.querySelector('body').style.backgroundColor = 'green';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  console.log('clicked');
  window.location.reload();
});
