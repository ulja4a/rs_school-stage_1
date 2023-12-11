import jsonMenu from '../products.json' assert {type: "json"};

let cardsMenu = document.querySelector('.cards__menu');
let menuButtons = document.querySelectorAll('.menu__button');

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


function loadCards(category) {
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
  });
}
  loadCards('coffee');

