function displayTime(){
    let dateTime= new Date();
    let hrs= dateTime.getHours();
    let mins= dateTime.getMinutes();
    let sec= dateTime.getSeconds();
    let time= document.getElementById('time');

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('mins').innerHTML = mins;
    document.getElementById('sec').innerHTML = sec;

    if(hrs >= 12){
        time.innerHTML = 'PM';
    }
    else{
        time.innerHTML = 'AM';
    }
   
}
setInterval(displayTime, 10);