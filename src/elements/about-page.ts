import { createElement } from '../components.ts/createElement';

export function aboutPageElements() {
  const wrapper = createElement('div', 'wrapper');
  const aboutCard = createElement('div', 'about-card', '', 'unvisable-authorisation');
  const aboutTitle = createElement('h1', 'about-title', 'Fan Chat');
  const aboutText = createElement(
    'p',
    'about-text',
    'Приложение разработано для демонстрации задания Fun Chat в рамках курса RSSchool JS/FE 2023Q3'
  );
  const aboutLink = createElement('a', 'about-link', 'Ulja4a');
  aboutLink.setAttribute('href', 'https://github.com/ulja4a');
  const buttonReturn = createElement('button', 'button-return', 'Return', '', {
    type: 'button',
  });
  wrapper.appendChild(aboutCard);
  aboutCard.appendChild(aboutTitle);
  aboutCard.appendChild(aboutText);
  aboutCard.appendChild(aboutLink);
  aboutCard.appendChild(buttonReturn);

  return {
    aboutCard,
    aboutTitle,
    aboutText,
  };
}
