var firstNumber;
var secondNumber;
var answer;
var operations;

function numberOne() {
  if (
    document.lcdform.lcds.value == '0' ||
    document.lcdform.lcds.value == answer
  ) {
    document.lcdform.lcds.value = '1';
  } else {
    documentdocument.lcdform.lcds.value = document.lcdform.lcds.value + '1';
  }
}

function numberTwo() {
  if (
    document.lcdform.lcds.value == '0' ||
    document.lcdform.lcds.value == answer
  ) {
    document.lcdform.lcds.value = '2';
  } else {
    documentdocument.lcdform.lcds.value = document.lcdform.lcds.value + '2';
  }
}

function numberThree() {
  if (
    document.lcdform.lcds.value == '0' ||
    document.lcdform.lcds.value == answer
  ) {
    document.lcdform.lcds.value = '3';
  } else {
    documentdocument.lcdform.lcds.value = document.lcdform.lcds.value + '3';
  }
}

function numberFour() {
  if (
    document.lcdform.lcds.value == '0' ||
    document.lcdform.lcds.value == answer
  ) {
    document.lcdform.lcds.value = '4';
  } else {
    documentdocument.lcdform.lcds.value = document.lcdform.lcds.value + '4';
  }
}

function numberFive() {
  if (
    document.lcdform.lcds.value == '0' ||
    document.lcdform.lcds.value == answer
  ) {
    document.lcdform.lcds.value = '5';
  } else {
    documentdocument.lcdform.lcds.value = document.lcdform.lcds.value + '5';
  }
}

function numberSix() {
  if (
    document.lcdform.lcds.value == '0' ||
    document.lcdform.lcds.value == answer
  ) {
    document.lcdform.lcds.value = '6';
  } else {
    documentdocument.lcdform.lcds.value = document.lcdform.lcds.value + '6';
  }
}

function numberSeven() {
  if (
    document.lcdform.lcds.value == '0' ||
    document.lcdform.lcds.value == answer
  ) {
    document.lcdform.lcds.value = '7';
  } else {
    documentdocument.lcdform.lcds.value = document.lcdform.lcds.value + '7';
  }
}

function numberEight() {
  if (document.lcdform.lcds.value == '0') {
    document.lcdform.lcds.value = '8';
  } else if (document.lcdform.lcds.value == answer) {
    document.lcdform.lcds.value = '8';
  } else {
    documentdocument.lcdform.lcds.value = document.lcdform.lcds.value + '8';
  }
}

function numberNine() {
  if (
    document.lcdform.lcds.value == '0' ||
    document.lcdform.lcds.value == answer
  ) {
    document.lcdform.lcds.value = '9';
  } else {
    documentdocument.lcdform.lcds.value = document.lcdform.lcds.value + '9';
  }
}

function numberZero() {
  if (document.lcdform.lcds.value == '0') {
    document.lcdform.lcds.value = '0';
  } else if (document.lcdform.lcds.value == answer) {
    document.lcdform.lcds.value = '0';
  } else {
    documentdocument.lcdform.lcds.value = document.lcdform.lcds.value + '0';
  }
}

function numberButtonZero() {
  if (
    document.lcdform.lcds.value == '0' ||
    document.lcdform.lcds.value == answer
  ) {
    return;
  } else {
    documentdocument.lcdform.lcds.value = document.lcdform.lcds.value + '00';
  }
}

function clr() {
  document.lcdform.lcds.value = '0';
  document.lcdform.lcdsu.value = '';
  return;
}

function operationPlus() {
  operation = '+';
  firstNumber = parseInt(document.lcdform.lcds.value);
  document.lcdform.lcds.value = '0';
  document.lcdform.lcdsu.value = firstNumber + operation;
}

function operationMultiplication() {
  operation = '*';
  firstNumber = parseInt(document.lcdform.lcds.value);
  document.lcdform.lcds.value = '0';
  document.lcdform.lcdsu.value = firstNumber + operation;
}

function operationMinus() {
  operation = '-';
  firstNumber = parseInt(document.lcdform.lcds.value);
  document.lcdform.lcds.value = '0';
  document.lcdform.lcdsu.value = firstNumber + operation;
}

function operationDivide() {
  operation = '/';
  firstNumber = parseInt(document.lcdform.lcds.value);
  document.lcdform.lcds.value = '0';
  document.lcdform.lcdsu.value = firstNumber + operation;
}

function operationPercentage() {
  operation = '%';
  firstNumber = parseInt(document.lcdform.lcds.value);
  document.lcdform.lcds.value = '0';
  document.lcdform.lcdsu.value = firstNumber + operation;
}

function equalsTo() {
  secondNumber = parseInt(document.lcdform.lcds.value);

  if (operation == '+') {
    answer = firstNumber + secondNumber;
  } else if (operation == '*') {
    answer = firstNumber * secondNumber;
  } else if (operation == '-') {
    answer = firstNumber - secondNumber;
  } else if (operation == '/') {
    answer = firstNumber / secondNumber;
  } else if (operation == '%') {
    if (document.lcdform.lcds.value == '0') {
      answer = firstNumber / 100;
      document.lcdform.lcdsu.value = firstNumber + operation + '100';
    } else if (document.lcdform.lcds.value != '0') {
      answer = (firstNumber / secondNumber) * 100;
      document.lcdform.lcdsu.value =
        firstNumber + operation + secondNumber + '*100 = ' + answer;
    }
  } else if (operation == '^') {
    for (var i = 0; i < secondNumber; i++) {
      answer = firstNumber * i;
    }
  }
  document.lcdform.lcds.value = '';
  document.lcdform.lcds.value = answer.toString();
  document.lcdform.lcdsu.value =
    firstNumber + operation + secondNumber + ' = ' + answer.toString();
  return;
}

function sqrots() {
  firstNumber = document.lcdform.lcds.value;
  answer = Math.sqrt(parseInt(document.lcdform.lcds.value));
  document.lcdform.lcds.value = answer;
  document.lcdform.lcdsu.value = 'sqrt(' + firstNumber + ') = ' + answer;
}

function operationraistop() {
  operation = '^';
  firstNumber = parseInt(document.lcdform.lcds.value);
  document.lcdform.lcds.value = '0';
}
