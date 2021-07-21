let colors = ['red', 'yellow', 'violet', 'blue', 'green'];
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let body = document.body
let scoreElement = document.querySelector(".score")
let score = 0;

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

    //this would animate the balloon after creation
    animateBalloon(div);
}

function animateBalloon(element) {
    //this sets the initial position of the balloon
    let pos = 0;
    //this executes the frame function every x ms
    let interval = setInterval(frame, 10);

    function frame() {
        // if the balloon's position is oast the height of the window + balloon, it will stop
        if (pos >= (windowHeight + 200)) {
            clearInterval(interval);
            deleteBalloon(element);
        } else {
            // if not, the balloon will gradually increase
            pos++;
            element.style.top = windowHeight - pos + 'px';
        }
    }
}

function deleteBalloon(element) {
    element.remove();
}

//this adds balloon popping functionality through event delegation
document.addEventListener('click', function (event) {
    if (event.target.classList.contains("balloon")) {
        deleteBalloon(event.target);
        score += 1;
        scoreElement.innerText = score;
    }
})