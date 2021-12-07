'use strict';

console.log('>> Ready :)');
// data

const product1Name = 'Node JS';
const product1Price = '12,50';
const product1ImageUrl = './assets/images/node-js.jpg';
//let product1Quantity = 1;

const product2Name = 'JavaScript';
const product2Price = '13,10';
const product2ImageUrl = './assets/images/javascript.jpg';
//let product2Quantity = 1;

const product3Name = 'React';
const product3Price = '13,20';
const product3ImageUrl = './assets/images/react.jpg';
//let product3Quantity = 1;

// bring elements from HTML to JS
const cardsElement = document.querySelector('.js-cards');
const cartElement = document.querySelector('.js-cart');

// función que genera camisetas dinámicamente y usando parámetros para personalizar cada card

function getProductHtmlCode(name, price, imageUrl) {
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
    product1Name,
    product1Price,
    product1ImageUrl
  );

  const product2 = getProductHtmlCode(
    product2Name,
    product2Price,
    product2ImageUrl
  );

  const product3 = getProductHtmlCode(
    product3Name,
    product3Price,
    product3ImageUrl
  );

  cardsElement.innerHTML = product1 + product2 + product3;
}

paintProducts();
