let min = 00;
let seconds = 00;
let tens = 00;

let getMinutes = document.querySelector(".min");
let getSeconds = document.querySelector(".sec");
let getTens = document.querySelector(".tens");

let btnStart = document.querySelector(".btn-start");
let btnStop = document.querySelector(".btn-stop");
let btnReset = document.querySelector(".btn-reset");

let interval;

btnStart.addEventListener("click", () => {
  interval = setInterval(startTimer, 10);
});
btnStop.addEventListener("click", () => {
  clearInterval(interval);
});
btnReset.addEventListener("click", () => {
  clearInterval(interval);

  tens = "00";
  seconds = "00";
  min = "00";
  getSeconds.innerHTML = seconds;
  getTens.innerHTML = tens;
  getMinutes.innerHTML = min;
});

function startTimer() {
  tens++;
  if (tens <= 9) {
    getTens.innerHTML = "0" + tens;
  } else {
    getTens.innerHTML = tens;
  }

  if (tens > 99) {
    seconds++;
    getSeconds.innerHTML = "0" + seconds;
    tens = 0;
    getTens.innerHTML = "0" + 0;
  }
  if (seconds > 9) {
    getSeconds.innerHTML = seconds;
  }

  if (seconds > 59) {
    min++;
    getMinutes.innerHTML = "0" + min;
    seconds = 0;
    getSeconds.innerHTML = "0" + 0;
  }
  if (min > 9) {
    getMinutes.innerHTML = min;
  }
}
