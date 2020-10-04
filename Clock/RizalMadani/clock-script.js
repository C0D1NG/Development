var time_in_second;
var time_bar, notif;
var tick;
var notif_text = ["Time Out!", "Invalid input", "Input new timer"];

function setTimer(){
    clearInterval(tick);

    let hour = document.getElementById("input-hour").value;
    let minute = document.getElementById("input-minute").value;
    let second = document.getElementById("input-second").value;
    notif = document.getElementById("notif");

    hour = checkInput(hour);
    minute = checkInput(minute);
    second = checkInput(second);

    time_in_second = hour*60*60 + minute*60 + second;

    if (time_in_second > 0) {
        time_bar = document.getElementById("time-bar");
        time_bar.max = time_in_second;

        notif.style.display = "none";

        print();
        tick = setInterval(print, 1000);
    } else {
        notif.innerText = notif_text[1];
        notif.style.display="initial";
    }

}

function checkInput(input) {
    if(!input)
        return 0;
    else
        return parseInt(input);
}

function print(){
    let hour = document.getElementById("hour");
    let minute = document.getElementById("minute");
    let second = document.getElementById("second");

    hour.innerText = formater( Math.floor(time_in_second / (60*60) ) );
    minute.innerText = formater( Math.floor( (time_in_second % (60*60) ) / 60 ) );
    second.innerText = formater( time_in_second % 60 );

    time_bar.value = time_in_second;

    time_in_second--;

    if(time_in_second < 0){
        clearInterval(tick);

        notif.innerText = notif_text[0];
        notif.style.display = "initial";
    }
}

function formater(number) {
    if(number.toString().length < 2)
        return "0"+number;
    else
        return number;
}

function resetTimer() {
    clearInterval(tick);

    let hour = document.getElementById("hour");
    let minute = document.getElementById("minute");
    let second = document.getElementById("second");

    hour.innerText = "00";
    minute.innerText = "00";
    second.innerText = "00";

    time_bar = document.getElementById("time-bar");
    time_bar.value = 0;

    notif = document.getElementById("notif");
    notif.innerText = notif_text[2];
    notif.style.display="initial";
}