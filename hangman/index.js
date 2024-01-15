
let comtainer = document.createElement('div');
let gallows = document.createElement('div');
let gallowsImg = document.createElement('img');
let nameGame = document.createElement('h1');
let gameBox = document.createElement('div');
let wordDisplay = document.createElement('ul');
let letter = document.createElement('li');
let question = document.createElement('h4');
let guesses = document.createElement('h4');
let score = document.createElement('span');
comtainer.classList.add('wrapper');
gallows.classList.add('gallows');
gallowsImg.classList.add('gallows-img');
gallowsImg.src = './images/gallows.svg';
gallowsImg.alt = 'gallows picture';
nameGame.classList.add('name-game');
nameGame.textContent = 'Hangman Game';
gameBox.classList.add('game-box');
wordDisplay.classList.add('word-display');
letter.classList.add('letter');
question.classList.add('question');
question.textContent = 'How djhgithjoyjkojk';
guesses.classList.add('guesses');
guesses.textContent = 'Incorrect guesses: ';
score.textContent = '0 / 6';
document.body.append(comtainer);
comtainer.append(gallows);
gallows.append(gallowsImg);
gallows.append(nameGame);
comtainer.append(gameBox);
gameBox.append(wordDisplay);
wordDisplay.append(letter);
gameBox.append(question);
gameBox.append(guesses);
guesses.append(score);

// add keyboards buttons
let keyboardDiv = document.createElement('div');
keyboardDiv.classList.add('keyboard');
gameBox.append(keyboardDiv);

for (let i = 97; i <= 122; i++) {
  let button = document.createElement('button');
  button.innerText = String.fromCharCode(i);
  keyboardDiv.appendChild(button);
}