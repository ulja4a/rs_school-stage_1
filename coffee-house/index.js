let burger = document.querySelector('.header__hamburger');
let burgerMenu = document.querySelector('.menu');
let menuItem = document.querySelectorAll('.menu__list-item');


//---------------------Burger Menu-----------------------------------------
burger.addEventListener('click', function() {
  burger.classList.toggle('hamburger-activ');
  burgerMenu.classList.toggle('menu-activ')
})

menuItem.forEach(function(e) {
  e.addEventListener('click', function() {
    burger.classList.remove('hamburger-activ');
    burgerMenu.classList.remove('menu-activ');
  })
})

document.body.addEventListener('click', function(el) {
  if(el.target != burgerMenu && el.target != burger) {
    burger.classList.remove('hamburger-activ');
    burgerMenu.classList.remove('menu-activ');
  }
})
//--------------end Burger Menu
