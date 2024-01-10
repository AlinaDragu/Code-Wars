const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const red = document.createElement('p');
red.classList.add('red');
red.textContent = 'Hey I’m red!';
red.setAttribute('style', 'color: red;')

container.appendChild(red);

const blue = document.createElement('h3');
blue.classList.add('blue');
blue.textContent = 'I’m a blue h3!';
blue.setAttribute('style', 'color: blue;')

container.appendChild(blue);


const container2 = document.createElement('div');
  container2.style.border = '2px solid black';
  container2.style.backgroundColor = 'pink';

const text = document.createElement('h1');
text.classList.add('text');
text.textContent = 'I’m in a div';

const paragraph = document.createElement('p');
paragraph.classList.add('paragraph');
paragraph.textContent = 'ME TOO';

container2.appendChild(text);
container2.appendChild(paragraph);


container.appendChild(container2);
