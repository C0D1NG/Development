const calculatorDisplay = document.querySelector('h1');
const inputButtons = document.querySelectorAll('button');
const clearButton = document.querySelector('#clear-btn');

let firstValue = 0;
let operatorValue = '';
let awaitingNextvalue = false;

function sendNumberValue(number) {
  // Reset Current Display Value if First Value is Entered
  if(awaitingNextvalue) {
    calculatorDisplay.textContent = number;
    awaitingNextvalue = false;
  } else {
    // if Current Display is value is 0, Replace It, If Not Add Number
    const displayValue = calculatorDisplay.textContent;
    calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
  }
}

function addDecimal() {
  // If Opearator Pressed, Don't Add Decimal
  if(awaitingNextvalue) return;
  // If No Decimal, Add One
  if(!calculatorDisplay.textContent.includes('.')) {
    calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
  }
}

// Calculate First and Second Value Depending on Operatot
const calculate = {
  '/': (firstNumber, secondNumber) => firstNumber / secondNumber,
  '*': (firstNumber, secondNumber) => firstNumber * secondNumber,
  '+': (firstNumber, secondNumber) => firstNumber + secondNumber,
  '-': (firstNumber, secondNumber) => firstNumber - secondNumber,
  '=': (firstNumber, secondNumber) => secondNumber
};

function useOperator(operator) {
  const currentValue = Number(calculatorDisplay.textContent);
  // Prevent Multiple Operators
  if(operatorValue && awaitingNextvalue) {
    operatorValue = operator;
    return;
  }
  // Assign firstValue if No Value
  if(!firstValue) {
    firstValue = currentValue;
  } else {
    const calculation = calculate[operatorValue](firstValue, currentValue);
    calculatorDisplay.textContent = calculation;
    firstValue = calculation;
  }
  // Ready for the Next Value, Store Operator
  awaitingNextvalue = true;
  operatorValue = operator;
}

// Add Event Listeners for Number, Operators, and Decimal Buttons
inputButtons.forEach(inputButton => {
  if(inputButton.classList.length === 0) {
    inputButton.addEventListener('click', () => sendNumberValue(inputButton.value));
  } else if(inputButton.classList.contains('operator')) {
    inputButton.addEventListener('click', () => useOperator(inputButton.value));
  } else if(inputButton.classList.contains('decimal')) {
    inputButton.addEventListener('click', addDecimal);
  }
});

// Reset All Values
function resetAll() {
  firstValue = 0;
  operatorValue = '';
  awaitingNextvalue = false;
  calculatorDisplay.textContent = '0';
}

// Event Listener
clearButton.addEventListener('click', resetAll);
