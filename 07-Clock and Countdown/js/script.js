let clockS = document.querySelector(".clock-seconds");
let clockM = document.querySelector(".clock-minutes");
let clockH = document.querySelector(".clock-hours");

let second = 1000;
let minute = second * 60;
let hour = minute * 60;
let day = hour * 24;
let finalDate = new Date('Jul 25, 2021 00:00:00');

let countdownD = document.querySelector('.countdown-days');
let countdownH = document.querySelector('.countdown-hours');
let countdownM = document.querySelector('.countdown-minutes');
let countdownS = document.querySelector('.countdown-seconds');


let startClock = () => {
    updateTime()
    setInterval(updateTime, 1000)
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
    console.log(convertMsToDHMS(diff));
}


startClock();