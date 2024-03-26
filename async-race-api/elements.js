//класс для добавления элементов на html страницу
class ElementDiv {
  constructor (parentNode = null, tagName = 'div', className = '', content = '', additionalClass = '') {
    const el = document.createElement(tagName);
    el.className = `${className} ${additionalClass}`.trim();
    el.innerHTML = content;
    parentNode && parentNode.appendChild(el);
    this.node = el;
  }
}

//класс для добавления кнопок
class Button extends ElementDiv {
  constructor (parentNode, label, onclick, buttonClass) {
    super(parentNode, 'button', 'button', '', buttonClass);
    this.label = label;
    this.onclick = onclick;

    this.initButton();
  }
  initButton() {
    this.node.textContent = this.label;
    this.node.addEventListener('click', this.onclick);
  }
}

//класс для добавления input
class Input extends ElementDiv {
  constructor (parentNode, inputType, inputClass) {
    super(parentNode, 'input', '', '', inputClass);
    this.type = inputType;

    this.initInput();
  }
  initInput() {
    this.node.type = this.type;
  }
}

const wrapper = new ElementDiv(document.body, 'div', 'wrapper');

const header = new ElementDiv(wrapper.node, 'div', 'header');
const buttonGarage = new Button(header.node, 'To Garage', () => {
  // Обработчик события клика на кнопку "Garage"
  console.log('Кнопка "Garage" нажата');
}, 'button-garage');
const buttonWinners = new Button(header.node, 'To Winners', () => {
  // Обработчик события клика на кнопку "Winners"
  console.log('Кнопка "Winners" нажата');
}, 'button-winners');

const controls = new ElementDiv(wrapper.node, 'div', 'controls');
const controlsCreate = new ElementDiv(controls.node, 'div', 'controls-create');
const controlsUpdate = new ElementDiv(controls.node, 'div', 'controls-update');
const inputCreate = new Input(controlsCreate.node, '', 'input-car-name');
const inputColorCreate = new Input(controlsCreate.node, 'color', 'input-car-color');
const inputCreateButton = new Button(controlsCreate.node, 'Create', () => {
  // Обработчик события клика на кнопку "Garage"
  console.log('Кнопка "Create" нажата');
}, 'button-create');
const inputUpdate = new Input(controlsUpdate.node, '', 'input-car-name');
const inputColorUpdate = new Input(controlsUpdate.node, 'color', 'input-car-color');
const inputUpdateButton = new Button(controlsUpdate.node, 'Update', () => {
  // Обработчик события клика на кнопку "Garage"
  console.log('Кнопка "Update" нажата');
}, 'button-update');

const actionButtons = new ElementDiv(wrapper.node, 'div', 'action-buttons');
const buttonRace = new Button(actionButtons.node, 'Race', () => {
  // Обработчик события клика на кнопку "Garage"
  console.log('Кнопка "Race" нажата');
}, 'button-race');
const buttonReset = new Button(actionButtons.node, 'Reset', () => {
  // Обработчик события клика на кнопку "Garage"
  console.log('Кнопка "Reset" нажата');
}, 'button-reset');
const buttonGenerate = new Button(actionButtons.node, 'Generate', () => {
  // Обработчик события клика на кнопку "Garage"
  console.log('Кнопка "Generate" нажата');
}, 'button-generate');

const garageHeader = new ElementDiv(wrapper.node, 'div', 'garage-header');
const garageTitle = new ElementDiv(garageHeader.node, 'h1', 'garage-title', 'Garage:');
const garageNum = new ElementDiv(garageHeader.node, 'p', 'garage-num', '()');