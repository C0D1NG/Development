// Winning message
const winningMessage = () => {
  document.querySelector('.winner').classList.remove('hidden');
  setTimeout(() => {
    document.querySelector('.winner').classList.add('hidden');
    document.querySelector('.next-game').classList.remove('hidden');
  }, 3000);
};

// Game over message
const gameOverMessage = () => {
  document.querySelector('.time-out').classList.remove('hidden');
  setTimeout(() => {
    document.querySelector('.time-out').classList.add('hidden');
    newGame();
  }, 10000);
};
