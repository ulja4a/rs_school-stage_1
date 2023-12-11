import jsonMenu from '../products.json' assert {type: "json"};


let cardsMenu = document.querySelector('.cards__menu');
let menuButtons = document.querySelectorAll('.menu__button');
let loadButton = document.querySelector('.menu__load');
let body = document.getElementsByTagName('body');


menuButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    menuButtons.forEach(function(btn) {
      btn.classList.remove('button_colored');
    });

    const category = button.getAttribute('data-category');
    loadCards(category);
    
    button.classList.add('button_colored');
  });
});

let currentCategory;


function loadCards(category) {
  currentCategory = category;
  cardsMenu.innerHTML = "";
  const filteredData = jsonMenu.filter(item => item.category === category);
  filteredData.forEach(function (item) {
    const cardMenu = document.createElement("div");
    cardMenu.classList.add("card_menu");

    const cardMenuImage = document.createElement("div");
    cardMenuImage.classList.add("card_menu-image");

    const img = document.createElement("img");
    img.src = item.img;
    img.alt = item.name;
    img.classList.add("menu-img");

    const cardMenuContent = document.createElement("div");
    cardMenuContent.classList.add("card_menu-content");

    const cardMenuText = document.createElement("div");
    cardMenuText.classList.add("card_menu-text");

    const title = document.createElement("p");
    title.classList.add("card_menu-title");
    title.textContent = item.name;

    const description = document.createElement("p");
    description.classList.add("card_menu-description");
    description.textContent = item.description;

    const price = document.createElement("p");
    price.classList.add("card_menu-price");
    price.textContent = `$${item.price}`;

    cardMenuImage.appendChild(img);
    cardMenuText.appendChild(title);
    cardMenuText.appendChild(description);
    cardMenuContent.appendChild(cardMenuText);
    cardMenuContent.appendChild(price);
    cardMenu.appendChild(cardMenuImage);
    cardMenu.appendChild(cardMenuContent);

    cardsMenu.appendChild(cardMenu);
    updateDisplay()
    modal();
  });
}

function updateDisplay() {
  const loadedCards = document.querySelectorAll('.card_menu');
  
  if (loadedCards.length <= 4) {
    document.querySelector('.menu__load').style.display = 'none';
  } else {
      if (window.innerWidth <= 768) {
        loadButton.style.display = 'flex';
      } else {
          loadButton.style.display = 'none';
        }
    }
}

loadButton.addEventListener('click', function() {
  let loadCardsHidden = document.querySelectorAll('.card_menu:nth-of-type(n+5)');
  loadCardsHidden.forEach(function(itemHidden) {
    itemHidden.style.display = 'flex';
  })
  
  loadButton.style.display = 'none';
})

function modal() {
  let loadedCards = document.querySelectorAll('.card_menu');
  let modalMenu = document.querySelector('.modal__menu');
  let overlay = document.querySelector('.overlay');
  let modalImg = document.querySelector('.modal__img');
  let modalName = document.querySelector('.content-name_title');
  let modalDescription = document.querySelector('.content-name_description');
  let modalSizeS = document.querySelector('.size-value.S');
  let modalSizeM = document.querySelector('.size-value.M');
  let modalSizeL = document.querySelector('.size-value.L');
  let modalAdditivesOne = document.querySelector('.additives-value.one');
  let modalAdditivesTwo = document.querySelector('.additives-value.two');
  let modalAdditivesThree = document.querySelector('.additives-value.three');
  let modalPrice = document.querySelector('.content-price_price');
  

  loadedCards.forEach(function(item, index) {
    item.addEventListener('click', ()=> {
      document.body.style.overflow = 'hidden';
      overlay.classList.add('overlay-visible');
      modalMenu.classList.add('modal-visible');

      let imagePath = jsonMenu.filter(product => product.category === currentCategory)[index].img;
      modalImg.style.backgroundImage = `url(${imagePath})`;

      let name = jsonMenu.filter(product => product.category === currentCategory)[index].name;
      modalName.textContent = `${name}`;

      let description = jsonMenu.filter(product => product.category === currentCategory)[index].description;
      modalDescription.textContent = `${description}`;

      let sizeS = jsonMenu.filter(product => product.category === currentCategory)[index].sizes.s.size;
      modalSizeS.textContent = `${sizeS}`;

      let sizeM = jsonMenu.filter(product => product.category === currentCategory)[index].sizes.m.size;
      modalSizeM.textContent = `${sizeM}`;

      let sizeL = jsonMenu.filter(product => product.category === currentCategory)[index].sizes.l.size;
      modalSizeL.textContent = `${sizeL}`;

      let additiveOne = jsonMenu.filter(product => product.category === currentCategory)[index].additives[0].name;
      modalAdditivesOne.textContent = `${additiveOne}`;

      let additiveTwo = jsonMenu.filter(product => product.category === currentCategory)[index].additives[1].name;
      modalAdditivesTwo.textContent = `${additiveTwo}`;

      let additiveThree = jsonMenu.filter(product => product.category === currentCategory)[index].additives[2].name;
      modalAdditivesThree.textContent = `${additiveThree}`;

      let price = jsonMenu.filter(product => product.category === currentCategory)[index].price;
      modalPrice.textContent = `$${price}`;
    })
  })

  overlay.addEventListener('click', ()=> {
    document.body.style.overflow = '';
    overlay.classList.remove('overlay-visible');
    modalMenu.classList.remove('modal-visible');
  })
}

  window.addEventListener('resize', updateDisplay);
  loadCards('coffee');


