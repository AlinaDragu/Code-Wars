 const container = document.getElementById('container');

    function createGrid(rows, cols) {
        for (let i = 0; i < rows * cols; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            container.appendChild(square);
        }
    }
   createGrid(16, 16);

   function handleHover(e) {
    e.target.classList.add('active');
}

function addHoverEffect() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', handleHover);
        square.style.backgroundColor = ''; // Set the initial background color to transparent
    });
}

addHoverEffect();
