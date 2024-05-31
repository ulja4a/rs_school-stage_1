import { displayMainElements } from '../elements/display-main-page';
import { routingToMain } from './routing';

export function validation() {
  const elements = displayMainElements();
  const inputLogin = elements.inputLogin as HTMLInputElement;
  const inputPassword = elements.inputPassword as HTMLInputElement;
  const inputs = [inputLogin, inputPassword];

  inputs.forEach((input) => {
    input.addEventListener('input', inputHandler);
  });

  function inputHandler() {
    const isValidInputs = inputs.every((input) => isValidInput(input));
    if (isValidInputs) {
      elements.buttonAuthorization.removeAttribute('disabled');
      elements.buttonAuthorization.addEventListener('click', routingToMain);
    } else {
      elements.buttonAuthorization.setAttribute('disabled', 'true');
    }
  }

  function isValidInput(input: HTMLInputElement): boolean {
    const inputValue = input.value;
    const dataReg = input.getAttribute('data-reg');
    if (dataReg) {
      const reg = new RegExp(dataReg);
      if (reg.test(inputValue)) {
        console.log('good');
        input.style.boxShadow = 'inset 0 0 0 2px #056b1b, 0 0 7px #056b1b';
        return true;
      } else {
        input.style.boxShadow = 'inset 0 0 0 2px #dd1c1c, 0 0 7px #dd1c1c';
        console.log('error');
        return false;
      }
    }
    return false;
  }
}
