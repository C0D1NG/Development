const hand = ["stone", "paper", "scissors"];
const status = ["Lose", "Win", "Draw"]

const round = document.querySelector('.roundCount');
const computerSvg = document.querySelector('.hand__icon.computer');
const humanSvg = document.querySelector('.hand__icon.human');
const nameComputer = document.querySelector('.name.computer');
const nameHuman = document.querySelector('.name.human');
const options = document.querySelector('.options').children;
const gameStatus = document.querySelector('.game');
const msg = document.querySelector('.msg');
const overlay = document.querySelector('.overlay');
const cscore = document.querySelector('.cscore');
const hscore = document.querySelector('.hscore');
const restart = document.querySelector('.restart');

restart.addEventListener('click', () => {
  roundCount = 1;
  scoreComputer = 0;
  scoreHuman = 0;
  nameComputer.innerText = '';
  nameHuman.innerText = '';
  gameStatus.innerText = '';
  overlay.classList.add('hidden');
})

let roundCount = 1;
let scoreHuman = 0;
let scoreComputer = 0;
const svgHTML = (hand) => `<use xlink:href="./sprite.svg#${hand}" />`

function gameEnd() {
  round.innerText = 1;
  overlay.classList.remove('hidden');
  if (scoreComputer === scoreHuman) {
    msg.innerText = `Game ${status[2]}!!!`;
  } else if (scoreHuman > scoreComputer) {
    msg.innerHTML = `You ${status[1]}!!!`;
  } else {
    msg.innerHTML = `You ${status[0]}!!!`;
  }
  cscore.innerHTML = scoreComputer;
  hscore.innerHTML = scoreHuman;
}

function played(e) {
  let state = 0;
  const computer = hand[Math.floor(Math.random() * hand.length)];
  const human = e.currentTarget.dataset.do;
  roundCount++;

  nameComputer.classList.remove('hidden');
  nameHuman.classList.remove('hidden');
  gameStatus.parentNode.classList.remove('hidden');
  computerSvg.innerHTML = svgHTML(computer);
  nameComputer.innerText = computer;
  humanSvg.innerHTML = svgHTML(human);
  nameHuman.innerText = human;
  gameStatus.innerText = status[state];

  if (human === computer) {
    state = 2;
  } else if (computer === "stone" && human === "paper" || computer === "paper" && human === "scissors" || computer === "scissors" && human === "stone") {
    state = 1;
    scoreHuman++;
  } else {
    scoreComputer++;
  }
  gameStatus.innerText = status[state];
  round.innerText = roundCount;

  if (roundCount > 7) {
    gameEnd();
  }
}

Array.from(options).forEach(option => {
  option.addEventListener('click', played);
})