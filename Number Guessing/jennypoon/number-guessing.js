const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const randomNumber = Math.floor(Math.random() * 20);
let counter = 0

const checkNumber = (userGuess) => {
  if (isNaN(userGuess)) {
    console.log("Uh... I don't think that's a number! Guess try again.")
    return false
  }
  if (userGuess == randomNumber) {
    console.log(`Good job, you got it! You took ${counter} attempts!`)
    return true
  }
  userGuess > randomNumber ? console.log("Too High!") :  console.log("Too Low!")
  counter++  
  return false
}

const numberGuessingGame = () => rl.question("Guess a number:", guess => 
    checkNumber(guess) ? rl.close() : numberGuessingGame() 
);


numberGuessingGame()
