let burger = document.querySelector('.header__hamburger');
let burgerMenu = document.querySelector('.menu');
let menuItem = document.querySelectorAll('.menu__list-item');

let slider = document.querySelector('.slider__list');
let sliderCard = document.querySelectorAll('.slider__card');
let prev = document.querySelector('.slide__icon-prev');
let next = document.querySelector('.slide__icon-next');
let dots = document.querySelectorAll('.element__pagination');




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

//-------------Slider Favorite Coffee--------------------------

let activeSlide = 0;
let lastSlide = sliderCard.length - 1;

let autoPlaySlider = setInterval(() => {next.click()}, 5000);


next.addEventListener('click', function() {
  if (activeSlide + 1 > lastSlide) {
    activeSlide = 0;
  } else {
    activeSlide += 1;
  }
  reloadSlider();
  console.log(autoPlaySlider);
})

prev.addEventListener('click', function() {
  if (activeSlide - 1 < 0) {
    activeSlide = lastSlide;
  } else {
    activeSlide -= 1;
  }
  reloadSlider();
})


function reloadSlider() {
  let checkLeft = sliderCard[activeSlide].offsetLeft;
  slider.style.left = -checkLeft + 'px';

  let lastActiveDot = document.querySelector('.active');
  lastActiveDot.classList.remove('active');
  dots[activeSlide].classList.add('active');
  clearTimeout(autoPlaySlider);
  autoPlaySlider = setInterval(() => {next.click()}, 5000);
}

