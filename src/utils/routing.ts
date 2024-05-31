import { aboutPageElements } from '../elements/about-page';

export function routingToMain() {
  console.log('main page');
}

export function routingToAbout() {
  const elemetsAbout = aboutPageElements();
  elemetsAbout.aboutCard.classList.remove('unvisable-authorisation');
  console.log('about');
}

// export function routing() {
//   const currentURL = window.location.href;
//   console.log(currentURL);
//   const buttonAutorization = document.querySelector('.button-autorization');
//   const buttonAbout = document.querySelector('button-about');

//   function navigateTo(path: string) {
//     window.location.href = path;
//   }

//   function addCurrentURLToPath(path: string) {
//     // Проверяем, есть ли в пути уже параметры
//     const separator = path.includes('?') ? '&' : '?';
//     // Добавляем текущий URL к новому пути
//     return `${path}${separator}from=${encodeURIComponent(currentURL)}`;
//   }

//   if (!buttonAbout || !buttonAutorization) {
//     console.error('Buttons not found');
//   } else {
//     buttonAutorization.addEventListener('click', () => {
//       const newPath = addCurrentURLToPath('/login');
//       navigateTo(newPath);
//     });

//     buttonAbout.addEventListener('click', () => {
//       console.log(1);
//       const newPath = addCurrentURLToPath('/about');
//       navigateTo(newPath);
//     });
//   }
// }
