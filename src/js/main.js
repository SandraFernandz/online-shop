'use strict';

console.log('>> Ready :)');

const cardsElement = document.querySelector('.js-cards');

// función que genera camisetas dinámicamente y usando parámetros para personalizar cada card

function getProductHtmlCode(name, price, imageUrl) {
  console.log(name, price);
  console.log(price, name);
  let htmlCode = `<article class="card">`;
  htmlCode += `<img src= ${imageUrl} class="card__img" alt="Camiseta de ${name}">`;
  htmlCode += `<h3 class="card__title">${name}</h3>`;
  htmlCode += `<p class="card__description">${price} €</p>`;
  htmlCode += `<button class="card__btn">Añadir a la cesta</button>`;
  htmlCode += `</article>`;
  return htmlCode;
}

// función pintar tarjetas cards

function paintProducts() {
  const product1 = getProductHtmlCode(
    'Node JS',
    '13,20',
    `./assets/images/node-js.jpg`
  );

  const product2 = getProductHtmlCode(
    'JavaScript',
    '13,50',
    `./assets/images/javascript.jpg`
  );

  const product3 = getProductHtmlCode(
    'JavaScript',
    '13,50',
    `./assets/images/react.jpg`
  );

  cardsElement.innerHTML = product1 + product2 + product3;
}

paintProducts();
