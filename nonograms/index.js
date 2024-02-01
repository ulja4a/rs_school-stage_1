const title = document.createElement('h1');
const wrapper = document.createElement('div');
const wrap = document.createElement('div');
const selectField = document.createElement('div');
const board = document.createElement('div');
const sizeBoard = document.createElement('div');

document.body.classList.add('body');
title.classList.add('title');
title.textContent = 'Nonograms';
document.body.appendChild(title);
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);


selectField.classList.add('selection-wrap');
wrapper.appendChild(selectField);
wrap.classList.add('grid-wrap');
wrapper.appendChild(wrap);
board.classList.add('board');
wrap.appendChild(board);
sizeBoard.classList.add('size');
wrapper.appendChild(sizeBoard);

let sizes = [5, 10, 15];

sizes.forEach(function (size) {
  let label = document.createElement('label');
  let radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'grid-size';
    radio.value = size;
    if (size === 5) {
      radio.checked = true;
    }

  label.appendChild(radio);
  label.appendChild(document.createTextNode(' ' + size + 'x' + size));
  sizeBoard.appendChild(label);
  });

sizeBoard.addEventListener('change', function (event) {
  let newSize = parseInt(event.target.value, 10);
  updateGameBoard(newSize);
});

updateGameBoard(5);


function updateGameBoard(size) {
  let board = document.querySelector('.board');
  board.innerHTML = '';

  // Используйте новый размер при создании сетки
  board.style.gridTemplateColumns = `repeat(${size}, 30px)`;
  board.style.gridTemplateRows = `repeat(${size}, 30px)`;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.row = i;
      cell.dataset.col = j;
      board.appendChild(cell);
    }
  }
}



/*let gridMatrix = [
  [1, 0, 1, 0, 1], 
  [1, 0, 1, 0, 1],
  [0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0]
]

for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[i].length; j++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.backgroundColor = grid[i][j] === 1 ? 'black' : 'white';
    board.appendChild(cell);
  }
}*/