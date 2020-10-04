const colors = [
  "#E74C3C",
  "#E67E22",
  "#F39C12",
  "#2ECC71",
  "#16A085",
  "#3498DB",
  "#9B59B6",
  "#C06C84",
  "#F67280",
  "#E84A7C",
  "#A8E6CE",
  "#E8175D",
  "#E5FC",
  "#FF4E50",
  "#F9D423",
  "#45ADA8",
  "#FE4365",
];

const init = 0;
const stepH = -110;

const hrsOnes = document.querySelector(".hrs.ones").children;
const hrsTens = document.querySelector(".hrs.tens").children;
const minOnes = document.querySelector(".min.ones").children;
const minTens = document.querySelector(".min.tens").children;
const secOnes = document.querySelector(".sec.ones").children;
const secTens = document.querySelector(".sec.tens").children;
const periods = document.querySelector(".periods").children;
const line = document.querySelector(".wrapOne");

const getDate = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return [hours, minutes, seconds];
};

function doHours(hours) {
  hours = hours + "";
  if (hours.length === 1) {
    hours = "0" + hours;
  }
  hoursPrt = hours.split("").map((el) => +el);

  Array.from(hrsOnes).forEach((el) => {
    el.style.transform = `translateY(${init + hoursPrt[0] * stepH}px)`;
  });
  Array.from(hrsTens).forEach((el) => {
    el.style.transform = `translateY(${init + (hoursPrt[1] - 1) * stepH}px)`;
  });
}

function doMinutes(minutes) {
  minutes = minutes + "";
  if (minutes.length === 1) {
    minutes = "0" + minutes;
  }
  minutesPrt = minutes.split("").map((el) => +el);

  Array.from(minOnes).forEach((el) => {
    el.style.transform = `translateY(${init + minutesPrt[0] * stepH}px)`;
  });
  Array.from(minTens).forEach((el) => {
    el.style.transform = `translateY(${init + minutesPrt[1] * stepH}px)`;
  });
}

function doSeconds(seconds) {
  seconds = seconds + "";
  if (seconds.length === 1) {
    seconds = "0" + seconds;
  }
  secondsPrt = seconds.split("").map((el) => +el);

  Array.from(secOnes).forEach((el) => {
    el.style.transform = `translateY(${init + secondsPrt[0] * stepH}px)`;
  });
  Array.from(secTens).forEach((el) => {
    el.style.transform = `translateY(${init + secondsPrt[1] * stepH}px)`;
  });
}

function doPeriod(isPM) {
  let move = isPM === 1 ? stepH - 15 : 0;

  Array.from(periods).forEach((el) => {
    el.style.transform = `translateY(${init + move}px)`;
  });
}

let colorInd = 0;
const interval = setInterval(() => {
  let [hours, minutes, seconds] = getDate();
  let period = 0;
  if (hours > 12) {
    hours -= 12;
    period = 1;
  }
  doHours(hours);
  doMinutes(minutes);
  doSeconds(seconds);
  doPeriod(period);
  line.style.borderColor = colors[colorInd++ % colors.length];
}, 1000);

const endtime = "Octuber 31 2020";
const remInterval = setInterval(() => {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  document.querySelector(".days-rem").innerText = days;
  document.querySelector(".hrs-rem").innerText = hours;
  document.querySelector(".min-rem").innerText = minutes;
  document.querySelector(".sec-rem").innerText = seconds;
}, 1000);