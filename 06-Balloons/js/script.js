let colors = ['red', 'yellow', 'violet', 'blue', 'green'];
let windowWidth = window.innerWidth;
let body = document.body

function createBalloon() {
    let div = document.createElement('div');

    //randomizing color
    let randColor = Math.floor(Math.random() * colors.length)
    div.className = "balloon balloon-" + colors[randColor];

    //randomizing position
    let randPos = Math.floor(Math.random() * (windowWidth - 100));
    div.style.left = randPos + 'px';

    //creates the balloon
    body.appendChild(div);
}