
const container = document.getElementById('container');
const button = document.createElement('button');
button.textContent = 'Generate Colors';
button.addEventListener('click', () => {
    enableMultiColorHoverEffect();
});
button.classList.add('btn');

document.body.appendChild(button);

let initialColor = 'rgb(56, 5, 127)';
let multiColorHoverEnabled = false;

function createGrid(rows, cols) {
    for (let i = 0; i < rows * cols; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
}

function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

function handleInitialHover(e) {
    if (e.target.style.backgroundColor !== initialColor) {
        e.target.style.backgroundColor = initialColor;
    }
}

function handleMultiColorHover(e) {
    if (multiColorHoverEnabled) {
        const randomColor = getRandomColor();
        e.target.style.backgroundColor = randomColor;
    }
}

function enableInitialHoverEffect() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', handleInitialHover);
    });
}

function enableMultiColorHoverEffect() {
    multiColorHoverEnabled = true;
    enableInitialHoverEffect();
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', handleMultiColorHover);
    });
}

function generateColors() {
    initialColor = 'rgb(56, 5, 127)';
    enableInitialHoverEffect();
}

createGrid(16, 16);
enableInitialHoverEffect();
