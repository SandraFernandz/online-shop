'use strict';

console.log('>> Ready :)');

const cardsElement = document.querySelector('.js-cards');

function getProductHtmlCode() {
  const htmlCode = '<p>Camiseta 1</p>';
  return htmlCode;
}

const htmlCode = getProductHtmlCode();

cardsElement.innerHTML = htmlCode;
