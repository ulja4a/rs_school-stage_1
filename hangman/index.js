
let comtainer = document.createElement('div');
let gallows = document.createElement('div');
let gallowsImg = document.createElement('img');
let nameGame = document.createElement('h1');
let gameBox = document.createElement('div');
let wordDisplay = document.createElement('ul');
//let letter = document.createElement('li');
let questionDisplay = document.createElement('h4');
let guesses = document.createElement('h4');
let score = document.createElement('span');
comtainer.classList.add('wrapper');
gallows.classList.add('gallows');
gallowsImg.classList.add('gallows-img');
gallowsImg.src = './images/gallows-0.png';
gallowsImg.alt = 'gallows picture';
nameGame.classList.add('name-game');
nameGame.textContent = 'Hangman Game';
gameBox.classList.add('game-box');
wordDisplay.classList.add('word-display');
//letter.classList.add('letter');
questionDisplay.classList.add('question');
//question.textContent = 'How djhgithjoyjkojk';
guesses.classList.add('guesses');
guesses.textContent = 'Incorrect guesses: ';
score.textContent = '0 / 6';
document.body.append(comtainer);
comtainer.append(gallows);
gallows.append(gallowsImg);
gallows.append(nameGame);
comtainer.append(gameBox);
gameBox.append(wordDisplay);
//wordDisplay.append(letter);
gameBox.append(questionDisplay);
gameBox.append(guesses);


// add keyboards buttons
let keyboardDiv = document.createElement('div');
keyboardDiv.classList.add('keyboard');
gameBox.append(keyboardDiv);

let currentGuesses = 0;
let maxGuesses = 6;

let initGame = (button, clickedLetter) => {
  console.log(button, clickedLetter);
  if(currentWord.includes(clickedLetter)) {
    [...currentWord].forEach((letter, index) => {
      if(letter === clickedLetter) {
        wordDisplay.querySelectorAll('li')[index].innerText = letter;
        wordDisplay.querySelectorAll('li')[index].classList.add('active');
      }
    })
  } else {
    currentGuesses++;
    gallowsImg.src = `./images/gallows-${currentGuesses}.png`
  }
  button.disabled = true;
  score.innerText = `${currentGuesses} / ${maxGuesses}`;
}
guesses.append(score);

for (let i = 97; i <= 122; i++) {
  let button = document.createElement('button');
  button.innerText = String.fromCharCode(i);
  keyboardDiv.appendChild(button);
  button.addEventListener('click', (e) => initGame(e.target, String.fromCharCode(i)));
}

// add word list
let wordList = [
  {
    word: "nile",
    question: "Longest river in the world"
  },
  {
    word: "hydrogen",
    question: "Element with the symbol 'H'"
  },
  {
    word: " paris",
    question: "Capital of France"
  },
  {
    word: "armstrong",
    question: "First man to step on the moon"
  },
  {
    word: "mars",
    question: "Planet known as the Red Planet"
  },
  {
    word: "pacific",
    question: "Largest ocean on Earth"
  },
  {
    word: "einstein",
    question: "Famous physicist who formulated the theory of relativity"
  },
  {
    word: "skin",
    question: "Human body's largest organ"
  },
  {
    word: "mercury",
    question: "Smallest planet in our solar system"
  },
  {
    word: "himalayas",
    question: "Mountain range that includes Mount Everest"
  }
]

let currentWord;

// add random quation and word
let getRandomWord = () => {
  let { word, question } = wordList[Math.floor(Math.random() * wordList.length)];
  currentWord = word;
  console.log(word);
  questionDisplay.innerText = question;
  wordDisplay.innerHTML = word.split("").map(() => `<li class="letter"></li>`).join("");
}
getRandomWord();