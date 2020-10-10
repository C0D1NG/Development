let round = 0;
let computerScore = 0;
let playerScore = 0;
let draw = 0;
let playerChoice;
let computerChoice;


//Game function
function game () {
    if ((playerScore > computerScore || playerScore < computerScore) && round >= 5) {
        return;
    }
getComputerSelection()
result(computerChoice, playerChoice)
playRound()

}
//Generates computer choice
function getComputerSelection () {
    computerNumber = Math.floor(Math.random() * 3);
    if (computerNumber === 0) {
        return computerChoice = "ROCK";
    } else if (computerNumber === 1) {
        return computerChoice = "SCISSORS";
    } else {
        return computerChoice = "PAPER";
    }
    
    
}
//Generates player choice
function playerSelectionRock () {
    return playerChoice = "ROCK";
    
  }
function playerSelectionPaper () {
    return playerChoice = "PAPER";
    
}
function playerSelectionScissors () {
    return playerChoice = "SCISSORS";
    
}
//Increments score
function playRound(){
    if (round === 5 && playerScore > computerScore) {
        printResult.textContent = `You won!`
    } else if (round === 5 && playerScore < computerScore) {
        printResult.textContent = `You lost`
    } 
}
function result (computerChoice, playerChoice){
        //Defeat Message
         if (computerChoice === "ROCK" && playerChoice === "SCISSORS" || computerChoice === "PAPER" && playerChoice === "ROCK" || computerChoice === "SCISSORS" && playerChoice === "PAPER") {
        ++round
        ++computerScore
        printResult.textContent = `${playerChoice} vs ${computerChoice}
        You lose`;
        computerScorePrint.textContent = `Computer Score: ${computerScore}`;
        roundNumber.textContent = `Round: ${round}`
        //Victory Message
        } else if (playerChoice === "ROCK" && computerChoice === "SCISSORS" || playerChoice === "PAPER" && computerChoice=== "ROCK" || playerChoice === "SCISSORS" && computerChoice === "PAPER") {
        ++round
        ++playerScore
        printResult.textContent = ` ${playerChoice} vs ${computerChoice}
        You win!`
        playerScorePrint.textContent = `Player Score: ${playerScore}`;
        roundNumber.textContent = `Round: ${round}`
        //Draw Message
        } else {
        ++round
        ++draw
        printResult.textContent = ` ${playerChoice} vs ${computerChoice}
        It's a draw!`;
        drawScore.textContent = `Draws: ${draw}`
        roundNumber.textContent = `Round: ${round}`

        }
}

const btnRock = document.querySelector("#btnRock");
btnRock.addEventListener('click', playerSelectionRock);
btnRock.addEventListener('click', game)

const btnPaper = document.querySelector("#btnPaper");
btnPaper.addEventListener('click', playerSelectionPaper);
btnPaper.addEventListener('click', game)

const btnScissors = document.querySelector("#btnScissors");
btnScissors.addEventListener('click', playerSelectionScissors);
btnScissors.addEventListener('click', game);

const printResult = document.querySelector("#printResult")
const playerScorePrint = document.querySelector(".playerScore")
const computerScorePrint = document.querySelector(".computerScore")
const roundNumber = document.querySelector(".roundNumber")
const drawScore = document.querySelector(".drawScore")







