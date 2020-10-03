const $number = document.querySelector(".number");
const $inputNumber = document.querySelector(".input-number");
const $tryNumber = document.querySelector(".try-number");
const $tips = document.querySelector(".tips");

const secretNumber = ((Math.random() * 100) % 100).toFixed(0);

$tryNumber.addEventListener("click", function () {
  let value = parseInt($inputNumber.value);

  if (!value) $tips.textContent = "Must be a number and between 0 and 100.";
  else if (value < secretNumber) $tips.textContent = "Try a bigger one.";
  else if (value > secretNumber) $tips.textContent = "Try less.";
  else if (value == secretNumber) {
    $tips.textContent = `Congratulations! ${value} is the right number`;
    $number.textContent = value;
  }
});
