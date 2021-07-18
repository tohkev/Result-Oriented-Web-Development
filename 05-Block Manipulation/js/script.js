let block = document.querySelector('#block');

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
        block.style.transform = `scale(${this.value}, ${this.value})`;
    })

    //Opacity Manipulation
    let opacity = document.querySelector('#opacity');
    opacity.addEventListener('input', function () {
        block.style.opacity = this.value;
    })
})