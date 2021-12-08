'use strict';

console.log('>> Ready :)');

// data

const product1Name = 'Node JS';
const product1Price = 12;
const product1ImageUrl = './assets/images/node-js.jpg';
let product1Quantity = 1;

const product2Name = 'JavaScript';
const product2Price = 13;
const product2ImageUrl = './assets/images/javascript.jpg';
let product2Quantity = 1;

const product3Name = 'React';
const product3Price = 13;
const product3ImageUrl = './assets/images/react.jpg';
let product3Quantity = 1;

// bring elements from HTML to JS
const cardsElement = document.querySelector('.js-products');
const cartElement = document.querySelector('.js-cart');
const fakeBtn = document.querySelector('.js-fake-btn');

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

// function that generates shopping cart

function getCartItemHtmlCode(name, price, quantity) {
  let htmlCode = `<tr>`;
  htmlCode += `<td>${name}</td>`;
  htmlCode += `<td>${price}</td>`;
  htmlCode += `<td>`;
  htmlCode += `<button class="card__btn">-</button>`;
  htmlCode += `${quantity}`;
  htmlCode += `<button class="card__btn">+</button>`;
  htmlCode += ` </td>`;
  htmlCode += ` <td class="text-align-right">${price * quantity}</td>`;
  htmlCode += ` </tr>`;
  return htmlCode;
}

// function that calculates total sum (itemprice * quantity)

function getCartTotalHtmlCode(totalPrice) {
  let htmlCode = '';
  htmlCode += ` <tr class="text--bold">`;
  htmlCode += `  <td>Total</td>`;
  htmlCode += `  <td colspan="3" class="text-align-right">
        ${totalPrice}</td>`;
  htmlCode += `</tr>`;
  return htmlCode;
}

// function that paints all cartItems and calculates totalprice

function paintCartItems() {
  cartElement.innerHTML = '';
  const totalPrice =
    product1Price * product1Quantity +
    product2Price * product2Quantity +
    product3Price * product3Quantity;
  const item1 = getCartItemHtmlCode(
    product1Name,
    product1Price,
    product1Quantity
  );
  const item2 = getCartItemHtmlCode(
    product2Name,
    product2Price,
    product2Quantity
  );
  const item3 = getCartItemHtmlCode(
    product3Name,
    product3Price,
    product3Quantity
  );
  const total = getCartTotalHtmlCode(totalPrice);
  cartElement.innerHTML = item1 + item2 + item3 + total;
}

paintCartItems();

// listen to button event

function handleFakeBtn() {
  product1Quantity += 1;
  paintCartItems();
}

fakeBtn.addEventListener('click', handleFakeBtn);
