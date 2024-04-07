export function validation() {
  const form = document.querySelector('.form');
  const inputs = form?.getElementsByTagName('input');
  const buttonAutorization = document.querySelector('.button-autorization');

  if (!inputs || !buttonAutorization) {
    console.error('Inputs not found');
    return;
  }

  const inputsArray = Array.from(inputs) as HTMLInputElement[];
  inputsArray.forEach((input) => {
    input.addEventListener('input', inputHandler);
  });

  function inputHandler() {
    if (buttonAutorization) {
      const isValidInputs = inputsArray.every((input) => inputCheck(input));
      if (isValidInputs) {
        buttonAutorization.removeAttribute('disabled');
      } else {
        buttonAutorization.setAttribute('disabled', 'true');
      }
    } else {
      console.error('Button authorization not found');
    }
  }

  function inputCheck(el: HTMLInputElement): boolean {
    const inputValue = el.value;
    const dataReg = el.getAttribute('data-reg');
    console.log(inputValue, dataReg);
    if (dataReg) {
      const reg = new RegExp(dataReg);
      if (reg.test(inputValue)) {
        console.log('good');
        el.style.boxShadow = 'inset 0 0 0 2px #056b1b, 0 0 7px #056b1b';
        return true;
      } else {
        el.style.boxShadow = 'inset 0 0 0 2px #dd1c1c, 0 0 7px #dd1c1c';
        console.log('error');
        return false;
      }
    }
    return false;
  }
}
