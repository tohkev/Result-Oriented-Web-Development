let clockS = document.querySelector(".clock-seconds");
let clockM = document.querySelector(".clock-minutes");
let clockH = document.querySelector(".clock-hours");

let second = 1000;
let minute = second * 60;
let hour = minute * 60;
let day = hour * 24;
let finalDate = new Date('Jul 26, 2021 00:00:00');

let countdownD = document.querySelector('.countdown-days');
let countdownH = document.querySelector('.countdown-hours');
let countdownM = document.querySelector('.countdown-minutes');
let countdownS = document.querySelector('.countdown-seconds');


let startClock = () => {
    updateTime();
    updateCountdown();
    setInterval(function () {
        updateTime();
        updateCountdown();
    }, 1000);
}

let updateTime = () => {
    let now = new Date();
    let hours = now.getHours() % 12;
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    clockH.style.transform = `rotate(${hours * 360 / 12}deg)`;
    clockM.style.transform = `rotate(${minutes * 360 / 60}deg)`;
    clockS.style.transform = `rotate(${seconds * 360 / 60}deg)`;
}

let convertMsToDHMS = (ms) => {
    let days = Math.floor(ms / day);
    let hours = Math.floor((ms % day) / hour);
    let minutes = Math.floor((ms % hour) / minute);
    let seconds = Math.floor((ms % minute) / second);
    return { days, hours, minutes, seconds };
}

let updateCountdown = () => {
    let now = new Date();
    let diff = finalDate - now;
    let diffObject = convertMsToDHMS(diff);
    // using ternary operators to check if it is a single digit number, if so the value will be modified
    countdownD.textContent = diffObject.days >= 10 ? diffObject.days : '0' + diffObject.days;
    countdownH.textContent = diffObject.hours >= 10 ? diffObject.hours : '0' + diffObject.hours;
    countdownM.textContent = diffObject.minutes >= 10 ? diffObject.minutes : '0' + diffObject.minutes;
    countdownS.textContent = diffObject.seconds >= 10 ? diffObject.seconds : '0' + diffObject.seconds;
}


startClock();