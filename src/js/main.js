'use strict';

console.log('>> Ready :)');

// data

// const product1 = ;
// const product2 = ;
// const product3 = ;

const products = [
  {
    name: 'Node JS',
    price: 12,
    imageUrl: './assets/images/node-js.jpg',
    quantity: 1,
    incQuantity: incQuantityFunction,
    decQuantity: decQuantityFunction,
  },
  {
    name: 'JavaScript',
    price: 15,
    imageUrl: './assets/images/javascript.jpg',
    quantity: 1,
    incQuantity: incQuantityFunction,
    decQuantity: decQuantityFunction,
  },
  {
    name: 'React JS',
    price: 13,
    imageUrl: './assets/images/react.jpg',
    quantity: 1,
    incQuantity: incQuantityFunction,
    decQuantity: decQuantityFunction,
  },
];

// const product1Name = 'Node JS';
// const product1Price = 12;
// const product1ImageUrl = './assets/images/node-js.jpg';
// let product1Quantity = 1;

// const product2Name = 'JavaScript';
// const product2Price = 13;
// const product2ImageUrl = './assets/images/javascript.jpg';
// let product2Quantity = 1;

// const product3Name = 'React';
// const product3Price = 13;
// const product3ImageUrl = './assets/images/react.jpg';
// let product3Quantity = 1;

// bring elements from HTML to JS

const productsElement = document.querySelector('.js-products');
const cartElement = document.querySelector('.js-cart');

// 1- función que genera camisetas dinámicamente usando parámetros para personalizar cada card
// 7 - using object as paramater instead of multiple parameters (price, name, image)

function getProductHtmlCode(product) {
  let htmlCode = '';
  htmlCode += `<article class="card">`;
  htmlCode += `<img src= ${product.imageUrl} class="card__img" alt="Camiseta de ${product.name}">`;
  htmlCode += `<h3 class="card__title">${product.name}</h3>`;
  htmlCode += `<p class="card__description">${product.price} €</p>`;
  htmlCode += `<button class="card__btn">Añadir a la cesta</button>`;
  htmlCode += `</article>`;
  return htmlCode;
}

// 2- función pintar tarjetas cards
// 8- using object

function paintProducts() {
  // 11- iteramos con for of (ppio a fin)
  let productsCode = '';
  for (const product of products) {
    productsCode += getProductHtmlCode(product);
    console.log(product);
  }
  productsElement.innerHTML = productsCode;
  // const _product1 = getProductHtmlCode(product1);
  // const _product2 = getProductHtmlCode(product2);
  // const _product3 = getProductHtmlCode(product3);

  // productsElement.innerHTML = _product1 + _product2 + _product3;
}

paintProducts();

// 3- function that generates each item´s row in shopping cart
// 9- converting items into objects

function getCartItemHtmlCode(product) {
  let htmlCode = '';
  htmlCode += `<tr>`;
  htmlCode += `<td>${product.name}</td>`;
  htmlCode += `<td>${product.price}</td>`;
  htmlCode += `<td>`;
  htmlCode += `<button class="js-dec-btn card__btn">-</button>`;
  htmlCode += `${product.quantity}`;
  htmlCode += `<button class="js-inc-btn card__btn">+</button>`;
  htmlCode += ` </td>`;
  htmlCode += ` <td class="text-align-right">${
    product.price * product.quantity
  }</td>`;
  htmlCode += ` </tr>`;
  return htmlCode;
}

// 4- function that generates and calculates total sum (itemprice * quantity) in shopping cart

function getCartTotalHtmlCode(totalPrice) {
  let htmlCode = '';
  htmlCode += ` <tr class="text--bold">`;
  htmlCode += `  <td>Total</td>`;
  htmlCode += `  <td colspan="3" class="text-align-right">
        ${totalPrice}</td>`;
  htmlCode += `</tr>`;
  return htmlCode;
}

// 5- function that paints all cartItems and calculates totalprice
// 8- transfer items with properties to object

function paintCartItems() {
  cartElement.innerHTML = '';
  for (let index = 0; index < products.length; index++) {
    cartElement.innerHTML += getCartItemHtmlCode(products[index]);
  }
  // const totalPrice =
  //   product1.price * product1.quantity +
  //   product2.price * product2.quantity +
  //   product3.price * product3.quantity;
  // const item1 = getCartItemHtmlCode(product1);
  // const item2 = getCartItemHtmlCode(product2);
  // const item3 = getCartItemHtmlCode(product3);
  // const total = getCartTotalHtmlCode(totalPrice);
  // cartElement.innerHTML = item1 + item2 + item3 + total;
  // // after re-painting, we listen w/ addEventListener again
  // listenCartBtns();
}

paintCartItems();

// 6- listen to button event
// when moved, these buttons don´t work because they haven´t been painted yet??

function handleQuantityBtn(ev) {
  const currentTarget = ev.currentTarget;
  if (currentTarget.classList.contains('js-inc-btn')) {
    product1.incQuantity();
    //product1.quantity += 1;
  } else {
    product1.decQuantity();
    //product1.quantity -= 1;
  }
  paintCartItems();
}

// 10 - using "this" for a function being used from an object, where "this" is the object.

function incQuantityFunction() {
  this.quantity += 1;
}

function decQuantityFunction() {
  if (this.quantity > 0) {
    this.quantity -= 1;
  }
}

function listenCartBtns() {
  const decBtn = document.querySelector('.js-dec-btn');
  const incBtn = document.querySelector('.js-inc-btn');
  incBtn.addEventListener('click', handleQuantityBtn);
  decBtn.addEventListener('click', handleQuantityBtn);
}

// 9 - creating object with form input

const userAddress = {};

const address = document.querySelector('.js-address');
const city = document.querySelector('.js-city');
const zip = document.querySelector('.js-zip');

function handleAddress(ev) {
  const name = ev.currentTarget.name;
  userAddress[name] = ev.currentTarget.value;
  console.log('Dirección', userAddress);
  paintAddress();
}

function paintAddress() {
  document.querySelector('.js-address-info').innerHTML = `${
    userAddress.address || ''
  } ${userAddress.city || ''} ${userAddress.zip || ''}`;
}

address.addEventListener('keyup', handleAddress);
city.addEventListener('keyup', handleAddress);
zip.addEventListener('keyup', handleAddress);
