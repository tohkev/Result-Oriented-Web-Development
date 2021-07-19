let block = document.querySelector('#block');
let scaleCoeff = 1;
let rotateDeg = 1;

window.addEventListener('load', function () {
    // Pos Y manipulation
    let posY = document.querySelector('#pos-y');
    posY.addEventListener('input', function () {
        block.style.top = posY.value + 'px';
    })

    // Pos X Manipulation
    let posX = document.querySelector('#pos-x');
    posX.addEventListener('input', function () {
        block.style.left = posX.value + 'px';
    })

    // Size Manipulation
    let size = document.querySelector('#size');
    size.addEventListener('input', function () {
        scaleCoeff = size.value;
        block.style.transform = `scale(${scaleCoeff}) rotate(${rotateDeg}deg)`;
    })

    //Opacity Manipulation
    let opacity = document.querySelector('#opacity');
    opacity.addEventListener('input', function () {
        block.style.opacity = this.value;
    })

    // Shape Manipulation
    let okButton = document.querySelector('#ok-shape');
    let selector = document.querySelector('#shape-select')
    okButton.addEventListener('click', function () {
        let option = selector.value;
        if (option === "1") {
            rotateDeg = 0;
            block.style.borderRadius = '0';
            block.style.transform = `scale(${scaleCoeff}) rotate(${rotateDeg}deg)`;
        } else if (option === "2") {
            rotateDeg = 0;
            block.style.borderRadius = '50%';
            block.style.transform = `scale(${scaleCoeff}) rotate(${rotateDeg}deg)`;
        } else if (option === "3") {
            rotateDeg = 45;
            block.style.borderRadius = '0';
            block.style.transform = `scale(${scaleCoeff}) rotate(${rotateDeg}deg)`;
        }
    })

    //Hex Manipulation
    let hex = document.querySelector('#hex');
    hex.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            block.style.backgroundColor = `#${hex.value}`;
        }
    })

    //RGBA Manipulation
    let rValue = document.querySelector('#value-r');
    let gValue = document.querySelector('#value-g');
    let bValue = document.querySelector('#value-b');
    let aValue = document.querySelector('#value-a');
    let rgba = document.querySelectorAll(".rgba-container");

    rgba.forEach(function (element) {
        element.addEventListener('input', function () {
            block.style.backgroundColor = `rgba(${rValue.value}, ${gValue.value}, ${bValue.value}, ${aValue.value})`;
        })
    })
})