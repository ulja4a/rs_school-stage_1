export function displayMainElements() {
  const body = document.querySelector('body') as HTMLElement;

  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  body.append(wrapper);

  const main = document.createElement('div');
  main.classList.add('main');
  wrapper.append(main);

  const card = document.createElement('div');
  card.classList.add('card');
  main.append(card);

  const title = document.createElement('h1');
  title.classList.add('title');
  title.textContent = 'Autorization';
  card.append(title);

  const fields = document.createElement('div');
  fields.classList.add('fields');
  card.append(fields);

  const form = document.createElement('form');
  form.classList.add('form');
  form.name = 'form';
  fields.append(form);

  const actions = document.createElement('div');
  actions.classList.add('actions');
  card.append(actions);

  const link = document.createElement('a');
  link.classList.add('link');
  actions.append(link);

  //////// * inputs
  const inputFieldLogin = document.createElement('div');
  inputFieldLogin.classList.add('input-field-login');
  inputFieldLogin.setAttribute('data-name', 'login');
  form.append(inputFieldLogin);

  const labelLogin = document.createElement('label');
  labelLogin.classList.add('label-login');
  labelLogin.setAttribute('for', 'login');
  labelLogin.textContent = 'Login';
  inputFieldLogin.append(labelLogin);

  const containerInputLogin = document.createElement('div');
  containerInputLogin.classList.add('container-input-login');
  inputFieldLogin.append(containerInputLogin);

  const inputLogin = document.createElement('input');
  inputLogin.classList.add('input-login');
  inputLogin.type = 'login';
  inputLogin.name = 'login';
  inputLogin.id = 'login';
  inputLogin.setAttribute('data-reg', '(?!^d+$)[A-Za-z0-9_]{3,20}');
  inputLogin.placeholder = 'Enter name';
  containerInputLogin.append(inputLogin);

  const labelLoginError = document.createElement('label');
  labelLoginError.classList.add('label-login-error');
  labelLoginError.textContent = 'From 3 to 20 characters, Latin alphabet, without spaces, without special characters.';
  containerInputLogin.append(labelLoginError);

  const inputFieldPassword = document.createElement('div');
  inputFieldPassword.classList.add('input-field-password');
  inputFieldPassword.setAttribute('data-name', 'password');
  form.append(inputFieldPassword);

  const labelPassword = document.createElement('label');
  labelPassword.classList.add('label-password');
  labelPassword.textContent = 'Password';
  inputFieldPassword.append(labelPassword);

  const containerInputPassword = document.createElement('div');
  containerInputPassword.classList.add('container-input-password');
  inputFieldPassword.append(containerInputPassword);

  const inputPassword = document.createElement('input');
  inputPassword.classList.add('input-password');
  inputPassword.type = 'password';
  inputPassword.name = 'password';
  inputPassword.id = 'password';
  inputPassword.setAttribute('data-reg', '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?!.*\\s)(?!.*[_])[\\w]{6,20}$');
  inputPassword.placeholder = 'Enter password';
  containerInputPassword.append(inputPassword);

  const labelPasswordError = document.createElement('label');
  labelPasswordError.classList.add('label-password-error');
  labelPasswordError.textContent =
    'From 6 to 20 characters, Latin alphabet, at least one digit, one lowercase letter, and one uppercase letter must be present';
  containerInputPassword.append(labelPasswordError);

  //////// * buttons
  const buttonAutorization = document.createElement('button');
  buttonAutorization.classList.add('button-autorization');
  buttonAutorization.type = 'submit';
  buttonAutorization.setAttribute('disabled', 'true');
  buttonAutorization.textContent = 'Enter to App';
  form.append(buttonAutorization);

  const buttonAbout = document.createElement('button');
  buttonAbout.classList.add('button-about');
  buttonAbout.type = 'button';
  buttonAbout.textContent = 'About App';
  form.append(buttonAbout);
}
