let burger = document.querySelector('.header__hamburger');
let burgerMenu = document.querySelector('.menu');
let menuItem = document.querySelectorAll('.menu__list-item');
let body = document.getElementsByTagName('body');


burger.addEventListener('click', function(event) {
  event.stopPropagation();

  //stopSliderInterval();

  burger.classList.toggle('hamburger-activ');
  burgerMenu.classList.toggle('menu-activ')
  document.body.classList.toggle('hidden');

  //startSliderInterval();
})

menuItem.forEach(function(e) {
  e.addEventListener('click', function(event) {
    burger.classList.remove('hamburger-activ');
    burgerMenu.classList.remove('menu-activ');
    document.body.classList.remove('hidden');

    /*if (!autoPlaySlider) {
      startSliderInterval();
    }*/
  })
})

document.body.addEventListener('click', function(el) {
  if(el.target != menuItem && el.target != burger) {
    burger.classList.remove('hamburger-activ');
    burgerMenu.classList.remove('menu-activ');
    document.body.classList.remove('hidden');
  }
})
