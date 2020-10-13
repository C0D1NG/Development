
const clock = () => {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);

    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
    let t = setTimeout(clock, 500);
}

const checkTime = (i) => {
    if (i < 10) {
        i = "0" + i;
    };
    return i;
}
