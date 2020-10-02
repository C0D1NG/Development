const DateNow = document.querySelector('.dateNow');
const TimeNow = document.querySelector('.timeNow');
const CountTime = document.querySelector('.countTime');

// Set the date we're counting down to
//var countDownDate = new Date("Feb 2, 2020 17:30:00").getTime();
var countDownDate = new Date("Oct 31, 2020 00:00:00").getTime();

function timeOut(){
    CountTime.innerHTML = "TIME'S UP";
    CountTime.classList.add("timerOut");
    CountTime.classList.remove("clignotement");
    CountTime.style.letterSpacing = "-3px";
}

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    let now = new Date().getTime();
    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + (days * 24);
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    function checkTime(time) {
        if (time == 9 || time == 8 || time == 7 || time == 6 || time == 5 || time == 4 || time == 3 || time == 2 || time == 1 || time == 0) {
            time = "0" + time;
        }
        return time;
    }

    hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);

    // Output the result in an element with id="demo"
    CountTime.innerHTML = hours + ":" +
        minutes + ":" + seconds;

    if(hours >= 48){
        CountTime.style.color = "rgb(220, 220, 220)";
    }

        if(hours <= 0){
        CountTime.style.color = "rgb(148, 24, 24)";

        if(minutes <= 30){
            CountTime.classList.add("clignotement");
        }
    
        else if(minutes <= 15){
            CountTime.style.animationDuration = "0.5s";
        }
    
        else if(minutes <= 5){
            CountTime.style.animationDuration = "0.3s";
        }
    
        else if(minutes <= 0){
            CountTime.style.animationDuration = "0.2s";
        }
    };



    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        timeOut()
    };

    let now2 = new Date();
    TimeNow.innerHTML = now2.toLocaleTimeString();
});