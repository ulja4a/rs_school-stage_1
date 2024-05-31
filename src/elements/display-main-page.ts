import { createElement } from '../components.ts/createElement';
import { routingToAbout } from '../utils/routing';

export function displayMainElements() {
  const wrapper = createElement('div', 'wrapper');
  const card = createElement('div', 'card');
  const title = createElement('h1', 'title', 'Autorization');
  const fields = createElement('div', 'fields');
  const form = createElement('div', 'form');
  const inputFieldLogin = createElement('div', 'input-field-login');
  inputFieldLogin.setAttribute('data-name', 'login');
  const labelLogin = createElement('label', 'label-login', 'Login');
  labelLogin.setAttribute('for', 'login');
  const containerInputLogin = createElement('div', 'container-input-login');
  const inputLogin = createElement('input', 'input-login', '', '', {
    type: 'text',
    placeholder: 'Enter name',
    id: 'login',
  });
  inputLogin.setAttribute('data-reg', '(?!^d+$)[A-Za-z0-9_]{3,20}');
  inputLogin.setAttribute('required', 'true');
  const labelLoginError = createElement(
    'label',
    'label-login-error',
    'From 3 to 20 characters, Latin alphabet, without spaces, without special characters.'
  );
  const inputFieldPassword = createElement('div', 'input-field-password');
  inputFieldPassword.setAttribute('data-name', 'password');
  const labelPassword = createElement('label', 'label-password', 'Password');
  const containerInputPassword = createElement('div', 'container-input-password');
  const inputPassword = createElement('input', 'input-password', '', '', {
    type: 'password',
    placeholder: 'Enter password',
    id: 'password',
  });
  inputPassword.setAttribute('data-reg', '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?!.*\\s)(?!.*[_])[\\w]{6,20}$');
  inputPassword.setAttribute('required', 'true');
  const labelPasswordError = createElement(
    'label',
    'label-password-error',
    'From 6 to 20 characters, Latin alphabet, at least one digit, one lowercase letter, and one uppercase letter must be present'
  );
  const buttonAuthorization = createElement('button', 'button-authorization', 'Enter to App', '', {
    type: 'submit',
  });
  buttonAuthorization.setAttribute('disabled', 'true');
  const buttonAbout = createElement('button', 'button-about', 'About App', '', {
    type: 'button',
  });
  buttonAbout.addEventListener('click', routingToAbout);

  wrapper.appendChild(card);
  card.appendChild(title);
  card.appendChild(fields);
  fields.appendChild(form);
  form.appendChild(inputFieldLogin);
  inputFieldLogin.appendChild(labelLogin);
  inputFieldLogin.appendChild(containerInputLogin);
  containerInputLogin.appendChild(inputLogin);
  containerInputLogin.appendChild(labelLoginError);
  form.appendChild(inputFieldPassword);
  inputFieldPassword.appendChild(labelPassword);
  inputFieldPassword.appendChild(containerInputPassword);
  containerInputPassword.appendChild(inputPassword);
  containerInputPassword.appendChild(labelPasswordError);
  form.appendChild(buttonAuthorization);
  form.appendChild(buttonAbout);
  return {
    wrapper,
    card,
    title,
    fields,
    form,
    inputFieldLogin,
    labelLogin,
    containerInputLogin,
    inputLogin,
    labelLoginError,
    inputFieldPassword,
    labelPassword,
    containerInputPassword,
    inputPassword,
    labelPasswordError,
    buttonAuthorization,
    buttonAbout,
  };
}
