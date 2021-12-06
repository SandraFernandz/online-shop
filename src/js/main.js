'use strict';

console.log('>> Ready :)');

const cardsElement = document.querySelector('.js-cards');

function getProductHtmlCode() {
  let htmlCode = `<article class="card">`;
  htmlCode += `<img src="./assets/images/node-js.jpg" class="card__img" alt="Camiseta de Node JS">`;
  htmlCode += `<h3 class="card__title">Node JS desde JS</h3>`;
  htmlCode += `<p class="card__description">12,00 €</p>`;
  htmlCode += `<button class="card__btn">Añadir a la cesta</button>`;
  htmlCode += `</article>`;
  return htmlCode;
}

const htmlCode = getProductHtmlCode();

cardsElement.innerHTML = htmlCode;
