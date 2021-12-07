'use strict';

console.log('>> Ready :)');

const cardsElement = document.querySelector('.js-cards');

function getProductHtmlCode(name, price) {
  console.log(name, price);
  console.log(price, name);
  let htmlCode = `<article class="card">`;
  htmlCode += `<img src="./assets/images/node-js.jpg" class="card__img" alt="Camiseta de Node JS">`;
  htmlCode += `<h3 class="card__title">${name}</h3>`;
  htmlCode += `<p class="card__description">${price} €</p>`;
  htmlCode += `<button class="card__btn">Añadir a la cesta</button>`;
  htmlCode += `</article>`;
  return htmlCode;
}

const htmlCode = getProductHtmlCode('Node JS', 13.2);

cardsElement.innerHTML = htmlCode;
