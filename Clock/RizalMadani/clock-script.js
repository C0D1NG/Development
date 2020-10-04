var time_in_second, full_time;
var tick;

function setTimer(){
    let hour = document.getElementById("input-hour").value;
    let minute = document.getElementById("input-minute").value;
    let second = document.getElementById("input-second").value;

    hour = checkInput(hour);
    minute = checkInput(minute);
    second = checkInput(second);

    time_in_second = full_time = hour*60*60 + minute*60 + second;

    tick = setInterval(print, 1000);
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

    hour.innerText = Math.floor(time_in_second / (60*60) );
    minute.innerText = Math.floor( (time_in_second % (60*60) ) / 60 );
    second.innerText = time_in_second % 60;

    let time_bar = document.getElementById("time-bar");
    time_bar.value = Math.floor( (time_in_second/full_time) * 100 );

    time_in_second--;

    if(time_in_second<0){
        clearInterval(tick);

        document.getElementById("notif").style.display = "initial";
    }
}