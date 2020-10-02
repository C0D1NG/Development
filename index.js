const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");
const result_div = document.querySelector("#result > h1");

function getcomputerChoice() {
  choice = ["r", "p", "s"];
  random = Math.floor(Math.random() * 3);
  return choice[random];
}

function shownResult(letter) {
  if (letter === "r") {
    return "Rock";
  }
  if (letter === "s") return "Scissors";
  if (letter === "p") return "Paper";
}

let userScore = 0;
let computerScore = 0;
function win(userChoice, computerChoice) {
  userScore++;

  userScore_span.textContent = userScore;

  result_div.textContent = `${shownResult(userChoice)} beats ${shownResult(
    computerChoice
  )}. You Win.`;
}
function lose(userChoice, computerChoice) {
  computerScore++;
  computerScore_span.innerText = computerScore;
  result_div.innerText = `${shownResult(userChoice)} loses to ${shownResult(
    computerChoice
  )}. You Lose.`;
}
function draw(userChoice, computerChoice) {
  result_div.innerText = "DRAW";
}

function game(userChoice) {
  const computerChoice = getcomputerChoice();

  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;

    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock.addEventListener("click", function () {
    game("r");
  });
  paper.addEventListener("click", function () {
    game("p");
  });
  scissors.addEventListener("click", function () {
    game("s");
  });
}
main();
