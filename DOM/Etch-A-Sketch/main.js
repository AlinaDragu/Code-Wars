
const container = document.getElementById('container');
const button = document.createElement('button');
button.textContent = 'Generate Colors';
button.addEventListener('click', () => {
    toggleColorEffect();
});
button.classList.add('btn');

document.body.appendChild(button);

let initialColor = 'rgb(0, 0, 0)';
let multiColorHoverEnabled = false;
let clickCount = 0;

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

function toggleColorEffect() {
    clickCount++;
    if (clickCount === 2) {
        multiColorHoverEnabled = false;
        clickCount = 0;
    } else {
        multiColorHoverEnabled = true;
    }
    enableHoverEffect();
}

function enableHoverEffect() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', multiColorHoverEnabled ? handleMultiColorHover : handleInitialHover);
    });
}

function generateColors() {
    initialColor = 'rgb(0, 0, 0)';
    enableHoverEffect();
}

createGrid(16, 16);
enableHoverEffect();
