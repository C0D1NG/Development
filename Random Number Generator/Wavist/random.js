
let randomNumber = Math.floor(Math.random() * 100) + 1;

const result = document.querySelector('.result');

const resultSubmit = document.querySelector('.resultSubmit');
const inputField = document.querySelector('.inputField');


inputField.focus();

function checkGuess() {
  let userGuess = Number(inputField.value);

  result.textContent = Math.floor(Math.random()*userGuess) + 1;

  resultSubmit.focus();
}

resultSubmit.addEventListener('click',checkGuess);
