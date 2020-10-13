window.onload = async function(){
 

var confirm = document.querySelector(".confirm");
var active = document.querySelector(".active");
var death = document.querySelector(".death");
var recover = document.querySelector(".recover");
var title = document.querySelector(".title")



const res = await fetch('https://covid19.mathdro.id/api')
    const data = await res.json()
    //console.log(JSON.stringify(data))
    confirm.innerHTML = data.confirmed.value;
    death.innerHTML = data.deaths.value;
    recover.innerHTML = data.recovered.value;
active.innerHTML = parseInt(data.confirmed.value-(data.recovered.value + data.deaths.value));
title.innerHTML = "WORLD";


    //alert(data.error.message)
    }
