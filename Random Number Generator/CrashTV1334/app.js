var css = '#myBtn:hover{ background-color: red }';
var body = document.querySelector("body");
var printNum = document.querySelector("#randomNum");
var myBtn = document.querySelector("#myBtn");

// background of the body
var background = [
    '#99B898',
    '#FF847C',
    '#2A363B'
];

// color of random number
var fontColor = [
    '#2A363B',
    'rgb(139, 0, 0)',
    'rgb(246, 114, 128)'
];

// transparent color of button
var btnBackground = [
    'rgba(42, 52, 59, 0.5)',
    'rgba(139, 0, 0, 0.5)',
    'rgb(246, 114, 128, 0.5)'
];

var indx = 0;
var number = Math.ceil(Math.random() * 100000000);

printNum.textContent = number;

var prev = indx;

myBtn.addEventListener("click", function () {
    prev = indx;
    indx = (indx + 1) % 3;
    number = Math.ceil(Math.random() * 100000000);
    body.style.backgroundColor = background[indx];
    body.style.color = fontColor[indx];
    myBtn.style.backgroundColor = btnBackground[indx];
    myBtn.style.borderColor = fontColor[indx];
    printNum.textContent = number;
});

myBtn.onmouseover = function () {
    this.style.backgroundColor = fontColor[indx];
};
myBtn.onmouseout = function () {
    this.style.backgroundColor = btnBackground[indx];
};