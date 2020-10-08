// global varaibles
let number;
let ans = document.getElementById("answer");

// generate random number.
const randomNumber = () => {
    number = Math.floor(Math.random() * 1000);
    ans.style.display = "block";
    ans.innerHTML = number;
}