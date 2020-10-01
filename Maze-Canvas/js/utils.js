// Buttons
const nextButton = document.querySelector('#next');
const menuButton = document.querySelector('.menu-btn');
const readyButton = document.querySelector('#ready');

// Menu options
const menuNewGame = document.querySelector('#menu-new');

//  Containers / Inputs
const menuContainer = document.querySelector('.menu-container');
const score = document.querySelector('.score');
const round = document.querySelector('.round');
const timer = document.querySelector('.timer');

// ------------ GLOBAL VARIABLES ----------------- //

let intervalId; // timer
let storedRound = Number(localStorage.getItem('round'));
let storedScore = Number(localStorage.getItem('score'));
let storedTotal = Number(localStorage.getItem('total'));
let storedCellsX = Number(localStorage.getItem('cellsx'));
let storedCellsY = Number(localStorage.getItem('cellsx'));

let cellsHorizontal = storedCellsX > 6 ? storedCellsX : 6;
let cellsVertical = storedCellsY > 4 ? storedCellsY : 3;

// ------------ GLOBAL VARIABLES END ------------- //

// ------------ LISTENERS ------------------------ //

// Ready button
readyButton.addEventListener('click', (event) => {
  Body.setStatic(ball, false);
  timerStart();
  readyButton.classList.add('hidden');
  rounds();
});

// Menu button
menuButton.addEventListener('click', (event) => {
  if (menuContainer.classList.contains('hidden')) {
    menuContainer.classList.remove('hidden');
    clearInterval(count);
  } else {
    menuContainer.classList.add('hidden');
  }
});

// Menu option new game
menuNewGame.addEventListener('click', (event) => {
  newGame();
});

// Next game button
nextButton.addEventListener('click', (event) => {
  location.reload();
});

// ------------- LISTENERS END ------------------- //

// ------------- GAME CONTROLS ---------------------- //

// New Game
const newGame = () => {
  location.reload();
  localStorage.clear();
};

// Increase X/Y Cells
const increaseCells = () => {
  let addCellsX = cellsHorizontal + 2;
  let addCellsY = Math.floor((cellsHorizontal + 2) * 0.67);

  storage('cellsx', addCellsX);
  storage('cellsy', addCellsY);
};

// Total Score
const totalScore = () => {
  let total = storedScore + storedTotal;

  storage('total', total);
};

// Increment Rounds
const rounds = () => {
  let rounds = Number(round.innerHTML);
  let nextRound = rounds + 1;

  round.innerHTML = nextRound;
  storage('round', nextRound);
};

// Update Round Points
const roundPoints = (points) => {
  let remainingTime = Number(timer.innerHTML);
  let totalNewPoints = round.innerHTML * remainingTime;

  storage('score', totalNewPoints);
};

// Timer Start
const timerStart = () => {
  intervalId = setInterval(() => {
    let timeLeft = timer.innerHTML;

    if (timeLeft > 0) {
      timer.innerHTML = timeLeft - 1;
    } else {
      clearInterval(intervalId);
      gameOverMessage();
    }
  }, 10);
};

// Timer Stop
const timerStop = () => {
  clearInterval(intervalId);
  roundPoints();
  totalScore();
};
// ------------- GAME CONTROLS END ------------------- //

// =========== Local Storage =============================================
const storage = (key, value) => {
  if (key === 'round') {
    localStorage.setItem('round', value);
  }
  if (key === 'score') {
    localStorage.setItem('score', value);
  }
  if (key === 'total') {
    localStorage.setItem('total', value);
  }
  if (key === 'cellsx') {
    localStorage.setItem('cellsx', value);
  }
  if (key === 'cellsy') {
    localStorage.setItem('cellsy', value);
  }
};

// =========== Local Storage End =========================================

// Update Scoreboard
window.onload = () => {
  score.innerHTML = storedScore + storedTotal;
  round.innerHTML = storedRound;
};
