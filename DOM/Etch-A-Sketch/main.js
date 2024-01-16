const container = document.getElementById('container');

function createGrid(rows, cols) {
    for (let i = 0; i < rows * cols; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
}
 
function getRandomColor() {
    let r = Math.floor(Math.random() *256)
    let g = Math.floor(Math.random() *256)
    let b = Math.floor(Math.random() *256)
    return `rgb(${r},${g},${b})`

}

function handleHover(e) {
    const randomColor = getRandomColor();
    e.target.style.backgroundColor = randomColor;
}

function addHoverEffect() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', handleHover);
    });
}

createGrid(16, 16);
addHoverEffect();