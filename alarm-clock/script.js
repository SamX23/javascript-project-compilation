let timer = document.getElementById("timer");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let ampm = document.getElementById("ampm");
let startstop = document.getElementById("startstop");

let currentTime;
let alarmElement;
let activeAlarm = false;
let sound = null;
sound.loop = true;

function showTime() {
  let now = new Date();
  currentTime = now.toLocaleString();
  timer.textContext = currentTime;
  setTimeout(showTime, 1000);
}

showTime();


function addMinSec(id){
  let select = id
  let min - 59

  for (let i = 0; i <= min; i++) {
    select.options[i]
  }
}
