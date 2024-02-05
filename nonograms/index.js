const title = document.createElement('h1');
const wrapper = document.createElement('div');
const wrap = document.createElement('div');
const board = document.createElement('div');
const chooseGame = document.createElement('div');
const hintsColumn = document.createElement('div');
const hintsRow = document.createElement('div');
const boardColumn = document.createElement('div');
const modalWin = document.createElement('div');
const winContent = document.createElement('div');


document.body.classList.add('body');
title.classList.add('title');
title.textContent = 'Nonograms';
document.body.appendChild(title);
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);

chooseGame.classList.add('choose-game');
wrapper.appendChild(chooseGame);
wrap.classList.add('grid-wrap');
wrapper.appendChild(wrap);
hintsRow.classList.add('hints-row');
wrap.appendChild(hintsRow);
boardColumn.classList.add('board-column');
wrap.appendChild(boardColumn);
hintsColumn.classList.add('hints-column');
boardColumn.appendChild(hintsColumn);
board.classList.add('board');
boardColumn.appendChild(board);


modalWin.classList.add('modal-win');
winContent.classList.add('win-content');
winContent.textContent = 'Great! You have solved the nonogram!'

document.body.appendChild(modalWin);
modalWin.appendChild(winContent);


let gridSelectionEasy = [
  {
    name: 'trident',
    field: [
            [1,0,1,0,1], 
            [1,0,1,0,1],
            [0,1,1,1,0],
            [0,1,1,1,0],
            [0,0,1,0,0]]
  },
  {
    name: 'dog',
    field: [
            [0,0,0,1,0],
            [1,0,1,1,1],
            [0,1,1,1,0],
            [0,1,0,1,0],
            [0,1,0,1,0]]
  },
  {
    name: 'smile',
    field: [
            [1,1,0,1,1],
            [1,1,0,1,1],
            [0,0,0,0,0],
            [1,0,0,0,1],
            [0,1,1,1,0]
    ]
  },
  {
    name: 'window',
    field: [
            [1,1,1,1,1],
            [1,0,1,0,1],
            [1,1,1,0,1],
            [1,0,1,0,1],
            [1,1,1,1,1]
    ]
  },
  {
    name: 'hourglass',
    field: [
            [1,1,1,1,1],
            [0,1,1,1,0],
            [0,0,1,0,0],
            [0,1,0,1,0],
            [1,1,1,1,1]
    ]
  }
]

gridSelectionEasy.forEach(function(option, index) {
  let inputSelect = document.createElement('input');

  inputSelect.type = 'radio';
  inputSelect.name = 'game-selection';
  inputSelect.value = option.name;
  if (index === 0) {
    inputSelect.checked = true;
  }
  
  let labelSelect = document.createElement('label');
  labelSelect.classList.add('select-game');
  labelSelect.appendChild(inputSelect);
  labelSelect.appendChild(document.createTextNode(' ' + option.name));

  inputSelect.addEventListener('change', function() {
    updateGameBoard(option.field.length, option.field);
    updateHintsRow(option.field);
    updateHintsColumn(option.field);
  });

  chooseGame.appendChild(labelSelect);
});

updateGameBoard(gridSelectionEasy[0].field.length, gridSelectionEasy[0].field);
updateHintsRow(gridSelectionEasy[0].field);
updateHintsColumn(gridSelectionEasy[0].field);


//updateGameBoard(5);
//updateHintsRow(field);
//updateHintsColumn(field);

function updateGameBoard(size) {
  let board = document.querySelector('.board');
  board.innerHTML = '';

  
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
  updateHintsRowHeight(size);
updateHintsColumnWidth(size);
}


function updateHintsRow(field) {
  let hintsRow = document.querySelector('.hints-row');
  hintsRow.innerHTML = '';

  field.forEach(function(row, index) {
    const hintRow = document.createElement('div');
    hintRow.classList.add('hint-row');
    const hints = calculateHints(row);
    hints.forEach(function(hint) {
      const hintCell = document.createElement('div');
      hintCell.classList.add('hint-cell');
      console.log(hint)
      hintCell.textContent = hint;
      hintRow.appendChild(hintCell);
    });
    hintsRow.appendChild(hintRow);
  });
}

function updateHintsColumn(field) {
  let hintsColumn = document.querySelector('.hints-column');
  hintsColumn.innerHTML = '';

  for (let i = 0; i < field.length; i++) {
    const hintColumn = document.createElement('div');
    hintColumn.classList.add('hint-column');
    const column = field.map(row => row[i]);
    const hints = calculateHints(column);
    hints.forEach(function(hint) {
      const hintCell = document.createElement('div');
      hintCell.classList.add('hint-cell');
      hintCell.textContent = hint;
      hintColumn.appendChild(hintCell);
    });
    hintsColumn.appendChild(hintColumn);
  }
}

function calculateHints(row) {
  let hints = [];
  let count = 0;

  for (let i = 0; i < row.length; i++) {
    if (row[i] === 1) {
      count++;
    } else if (count > 0) {
      hints.push(count);
      count = 0;
    }
  }

  if (count > 0) {
    hints.push(count);
  }

  return hints;
}

function updateHintsRowHeight(size) {
  let hintsRow = document.querySelector('.hints-row');
  hintsRow.style.height = size * 30 + 'px'; 
}

function updateHintsColumnWidth(size) {
  let hintsColumn = document.querySelector('.hints-column');
  hintsColumn.style.width = size * 30 + 'px'; 
}

// обработчик клика для каждой клетки поля
board.addEventListener('click', function(event) {
  if (event.target.classList.contains('cell')) {
    toggleCellColor(event.target);
    checkForVictory();
  }
});

// закрашивания/очистки клетки
function toggleCellColor(cell) {
  cell.classList.toggle('filled');
}

// проверка на победу
function checkForVictory() {
  let currentField = getCurrentFieldState();

  // Проверяем совпадение текущего поля с массивами из gridSelectionEasy
  let isVictory = gridSelectionEasy.some(option => arraysAreEqual(option.field, currentField));

  if (isVictory) {
    showVictoryModal();
    //modalWin.style.display = 'block';
  console.log('Поздравляю, вы победили!');
  }
}

// Функция для получения текущего состояния поля в виде двумерного массива
function getCurrentFieldState() {
  let currentField = [];

  document.querySelectorAll('.cell').forEach(cell => {
    let row = parseInt(cell.dataset.row, 10);
    let col = parseInt(cell.dataset.col, 10);

    if (!currentField[row]) {
      currentField[row] = [];
    }

    currentField[row][col] = cell.classList.contains('filled') ? 1 : 0;
  });

  return currentField;
}

// Функция для сравнения двух двумерных массивов
function arraysAreEqual(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

board.addEventListener('contextmenu', function(event) {
  event.preventDefault(); // Отменяем стандартное контекстное меню

  let cell = event.target.closest('.cell');

    if (cell) {
      toggleCross(cell);
      console.log(444);
    }
});

function toggleCross(cell) {
  let existingCross = cell.querySelector('.cross');
  let existingFilled = cell.querySelector('.filled');
  
  if (existingCross) {
    console.log(555)
    existingCross.remove();
  } else {
    
    let cross = document.createElement('div');
    cross.classList.add('cross');
    cell.appendChild(cross);
  }

}

function showVictoryModal() {
  openModal();
}


let modal = modalWin.querySelector('.modal-win');

function openModal() {
  modalWin.style.display = 'block';
}

function closeModal() {
  if (modalWin) {
  modalWin.style.display = 'none';
  resetGame();
  }
}

window.onclick = function(event) {
  if (modalWin && event.target === modalWin) {
    closeModal();
  }
};

function resetGame() {
  updateGameBoard(5);
}

/*let sizes = [5, 10, 15];

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



let gridSelectionEasy = [
  {
    name: 'trident',
    field: [
            [1, 0, 1, 0, 1], 
            [1, 0, 1, 0, 1],
            [0, 1, 1, 1, 0],
            [0, 1, 1, 1, 0],
            [0, 0, 1, 0, 0]]
  },
  {
    name: 'dog',
    field: [
            [0, 0, 0, 1, 0],
            [1, 0, 1, 1, 1],
            [0, 1, 1, 1, 0],
            [0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0]]
  }
]

let gridSelectionMedium = [
  {
    name: 'trident',
    field: [
            [1, 0, 1, 0, 1, 0], 
            [1, 0, 1, 0, 1, 0],
            [0, 1, 1, 1, 0, 0],
            [0, 1, 1, 1, 0, 0],
            [0, 0, 1, 0, 0, 0]
            [0, 0, 1, 0, 0, 0]]
  },
  {
    name: 'dog',
    field: [
            [0, 0, 0, 1, 0, 0],
            [1, 0, 1, 1, 1, 0],
            [0, 1, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 0]
            [0, 1, 0, 1, 0, 0]]
  }
]

let gridSelectionHard = [
  {
    name: 'trident',
    field: [
            [1, 0, 1, 0, 1, 0, 0], 
            [1, 0, 1, 0, 1, 0, 0],
            [0, 1, 1, 1, 0, 0, 0],
            [0, 1, 1, 1, 0, 0, 0],
            [0, 0, 1, 0, 0, 0, 0]
            [0, 0, 1, 0, 0, 0, 0]
            [0, 0, 1, 0, 0, 0, 0]]
  },
  {
    name: 'dog',
    field: [
            [0, 0, 0, 1, 0, 0, 0],
            [1, 0, 1, 1, 1, 0, 0],
            [0, 1, 1, 1, 0, 0, 0],
            [0, 1, 0, 1, 0, 0, 0],
            [0, 1, 0, 1, 0, 0, 0]
            [0, 1, 0, 1, 0, 0, 0]]
  }
]

let selectionWrap = document.querySelector('.selection-wrap');


gridSelectionEasy.forEach(function(option, index) {
  let radio = document.createElement('input');
  radio.type = 'radio';
  radio.name = 'field-selection';
  radio.value = option.name;

  if (index === 0) {
    radio.checked = true;
  }

  let label = document.createElement('label');
  label.appendChild(radio);
  label.appendChild(document.createTextNode(' ' + option.name));

  selectionWrap.appendChild(label);
});

selectionWrap.addEventListener('change', function(event) {
  let selectedFieldName = event.target.value;
  let selectedField = gridSelectionEasy.find(option => option.name === selectedFieldName).field;

  
  useSelectedField(selectedField);
});
useSelectedField(gridSelectionEasy[0]);


// Функция для использования выбранного поля (замените этот код на свою логику)
function useSelectedField(field) {
  console.log('Выбранное поле:', field);
  // Добавьте свою логику обработки выбранного поля
}

/*for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[i].length; j++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.backgroundColor = grid[i][j] === 1 ? 'black' : 'white';
    board.appendChild(cell);
  }
}*/

