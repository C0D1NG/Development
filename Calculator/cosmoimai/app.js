var str = "";

function insertNum(num) {
  document.getElementById("answer").innerHTML += num;
  str += num;
}

//function to show final result when clicked = button

function finalResult() {
  let storedValue = document.getElementById("answer").innerHTML;
  storedValue = str;
  if (storedValue) {
    str = eval(str);
    document.getElementById("answer").innerHTML = eval(storedValue);
  }
}

// functionality to clear button

function clearValue() {
  document.getElementById("answer").innerHTML = "";
  str = "";
}

//functionality to back button

function back() {
  var value = document.getElementById("answer").innerHTML;
  value = str;
  str = value.substr(0, value.length - 1);
  document.getElementById("answer").value = value.substr(0, value.length - 1);
  document.getElementById("answer").innerHTML = str;
}
