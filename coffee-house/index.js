import jsonMenu from './products.json' assert {type: "json"};
console.log(jsonMenu[0]["name"]);

let burger = document.querySelector('.header__hamburger');
let burgerMenu = document.querySelector('.menu');
let menuItem = document.querySelectorAll('.menu__list-item');
let body = document.getElementsByTagName('body');

let slider = document.querySelector('.slider__list');
let sliderCard = document.querySelectorAll('.slider__card');
let prev = document.querySelector('.slide__icon-prev');
let next = document.querySelector('.slide__icon-next');
let dots = document.querySelectorAll('.element__pagination');

let autoPlaySlider;
if (typeof next !== 'undefined' && next !== null) {
  autoPlaySlider = setInterval(() => {next.click()}, 5000);
}
//---------------------Burger Menu-----------------------------------------
burger.addEventListener('click', function(event) {
  event.stopPropagation();

  stopSliderInterval();

  burger.classList.toggle('hamburger-activ');
  burgerMenu.classList.toggle('menu-activ')
  document.body.classList.toggle('hidden');

  startSliderInterval();
})

menuItem.forEach(function(e) {
  e.addEventListener('click', function(event) {
    burger.classList.remove('hamburger-activ');
    burgerMenu.classList.remove('menu-activ');
    document.body.classList.remove('hidden');

    if (!autoPlaySlider) {
      startSliderInterval();
    }
  })
})

document.body.addEventListener('click', function(el) {
  if(el.target != menuItem && el.target != burger) {
    burger.classList.remove('hamburger-activ');
    burgerMenu.classList.remove('menu-activ');
    document.body.classList.remove('hidden');
  }
})
//--------------end Burger Menu

//-------------Slider Favorite Coffee--------------------------

let activeSlide = 0;
let lastSlide = sliderCard.length - 1;

function startSliderInterval() {
  autoPlaySlider = setInterval(function() {
    activeSlide = (activeSlide + 1) % sliderCard.length;
    reloadSlider();
  }, 5000);
}

function stopSliderInterval() {
  if (autoPlaySlider) {
    clearInterval(autoPlaySlider);
  }
}

if (next) {
next.addEventListener('click', function() {
  if (activeSlide + 1 > lastSlide) {
    activeSlide = 0;
  } else {
    activeSlide += 1;
  }
  reloadSlider();
  stopSliderInterval();
  startSliderInterval();
})
}

if (prev) {
prev.addEventListener('click', function() {
  if (activeSlide - 1 < 0) {
    activeSlide = lastSlide;
  } else {
    activeSlide -= 1;
  }
  reloadSlider();
  stopSliderInterval();
  startSliderInterval();
})
}


function reloadSlider() {
  let checkLeft = sliderCard[activeSlide].offsetLeft;
  slider.style.left = -checkLeft + 'px';
  let lastActiveDot = document.querySelector('.active');
  lastActiveDot.classList.remove('active');
  dots[activeSlide].classList.add('active');
}

window.onresize = function(event) {
  reloadSlider();
};