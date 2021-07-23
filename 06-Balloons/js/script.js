let colors = ['red', 'yellow', 'violet', 'blue', 'green'];
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let body = document.body
let scores = document.querySelectorAll(".score")
let totalScore = 0;
let endScore = 10;
let currentBalloon = 0;
let gameOver = false;
let totalShadow = document.querySelector('.total-shadow')

function createBalloon() {
    let div = document.createElement('div');

    //randomizing color
    let randColor = Math.floor(Math.random() * colors.length)
    div.className = "balloon balloon-" + colors[randColor];

    //randomizing position
    let randPos = Math.floor(Math.random() * (windowWidth - 100));
    div.style.left = randPos + 'px';

    // assigning a data number to each balloon created so that the deleteBalloon function will work properly
    div.dataset.number = currentBalloon;
    currentBalloon++

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
        if (pos >= (windowHeight + 200) && (document.querySelector('[data-number="' + element.dataset.number + '"]') !== null)) {
            clearInterval(interval);
            gameOver = true;
        } else {
            // if not, the balloon will gradually increase
            pos++;
            element.style.top = windowHeight - pos + 'px';
        }
    }
}

function deleteBalloon(element) {
    element.remove();
    totalScore++;
    updateScore();
}

function updateScore() {
    for (let i = 0; i < scores.length; i++) {
        scores[i].textContent = totalScore;
    }
}


//this function would start the game through timed creation of balloons
function startGame() {
    let loop = setInterval(function () {
        if (!gameOver && totalScore !== endScore) {
            createBalloon();
        } else if (totalScore !== endScore) {
            clearInterval(loop);
            totalShadow.style.display = 'flex';
            totalShadow.querySelector('.lose').style.display = 'block';
        } else if (totalScore === endScore) {
            clearInterval(loop);
            totalShadow.style.display = 'flex';
            totalShadow.querySelector('.win').style.display = 'block';
        }

    }, 800)
}

function restartGame() {
    let fullRemove = document.querySelectorAll('.balloon');
    for (let i = 0; i < fullRemove.length; i++) {
        fullRemove[i].remove();
    }

    totalShadow.style.display = 'none';
    totalShadow.querySelector('.lose').style.display = 'none';
    totalShadow.querySelector('.win').style.display = 'none';
    gameOver = false;
    totalScore = 0;
    startGame();
}

//this adds balloon popping functionality through event delegation
document.addEventListener('click', function (event) {
    if (event.target.classList.contains("balloon")) {
        deleteBalloon(event.target);
    }
})

//adding button functionality (lose screen)
document.querySelector('.restart').addEventListener('click', function () {
    restartGame();
})

document.querySelector('.cancel').addEventListener('click', function () {
    totalShadow.style.display = 'none';
})


startGame()