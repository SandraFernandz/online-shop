'use strict';

console.log('>> Ready :)');

const cardsElement = document.querySelector('.js-cards');

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

const htmlCode = getProductHtmlCode(
  'Node JS',
  '13,20',
  `./assets/images/node-js.jpg`
);

cardsElement.innerHTML = htmlCode;
