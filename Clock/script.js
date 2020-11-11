const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

let date = new Date();

let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
console.log(hour, minute, second);

let secondPosition = (second * 360) / 60;
let minutePosition = (minute * 360) / 60 + secondPosition / 60;
let hourPosition = (hour * 360) / 12 + minutePosition / 12;
console.log(secondPosition, minutePosition, hourPosition);

const ClockRun = () => {
  hourPosition = hourPosition + 3 / 360;
  minutePosition = minutePosition + 6 / 60;
  secondPosition = secondPosition + 6;
  // 6 is from 360 degress / 60 sec

  SECONDHAND.style.transform = "rotate(" + secondPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minutePosition + "deg)";
  HOURHAND.style.transform = "rotate(" + hourPosition + "deg)";
};

var interval = setInterval(ClockRun, 1000);

// disabling the animation will solved the throttling issue
