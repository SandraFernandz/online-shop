'use strict';

console.log('>> Ready :)');

// 1- fetch y guardamos objeto resultado del fetch en un objeto y así no perderlo y poder llamarlo desde cualquier lugar del prog

let products = [];
// 8- array of chosen items
let cart = [];

const getApiData = () => {
  // ./ estamos en misma carpeta madre, vamos a carpeta hermana
  fetch('./api/data.json')
    .then((response) => response.json())
    .then((data) => {
      products = data.cart.items;
      paintProducts();
      //paintCartItems();
    });
};

// bring elements from HTML to JS

const productsElement = document.querySelector('.js-products');
const cartElement = document.querySelector('.js-cart');

// 3- generar html de 1 producto

const getProductHtmlCode = (product) => {
  let htmlCode = '';
  htmlCode += `<article class="card">`;
  htmlCode += `<img src= "${product.imageUrl}" class="card__img" alt="Camiseta de ${product.name}">`;
  htmlCode += `<h3 class="card__title">${product.name}</h3>`;
  htmlCode += `<p class="card__description">${product.price} €</p>`;
  // 7- añadimos id para saber cuál ha sido el target. usamos data-id para futuros pasos(podremos acceder a los atributos del elemento html con la propiedad ev.target.dataset del objeto, dde dataset es una propiedad por defecto)
  htmlCode += `<button class="card__btn js-add-product" data-id= "${product.id}">Añadir a la cesta</button>`;
  htmlCode += `</article>`;
  return htmlCode;
};

// 3- función que recorre todos los productos (cards) y los pinta

function paintProducts() {
  // iteramos con for of (ppio a fin)
  let productsCode = '';
  for (const product of products) {
    productsCode += getProductHtmlCode(product);
  }
  productsElement.innerHTML = productsCode;
  // 5- repinto botones con la clase añadida para el addEventListener
  listenAddProductsBtns();
}

// 4- escuchar el botón de las tarjetas de producto. ATT que traemos elemento de html a js dentro de la función para escuchar el evento

function listenAddProductsBtns() {
  const productBtns = document.querySelectorAll('.js-add-product');

  for (const productBtn of productBtns) {
    productBtn.addEventListener('click', handleIncProduct);
    console.log(productBtn);
  }
}

// 21- limpiar código. creamos función contadora para hacer más corta función de inc/decrementar con botones. llamamos a estas funciones HELPERS

// HELPERS

function findInArray(id, arr) {
  //let foundItem;
  for (const item of arr) {
    if (item.id === id) {
      //foundItem = item;
      return item;
    }
  }
  //return foundItem;
  return undefined;
}

// 25- Creo siguiente helper

function findIndexInArray(id, arr) {
  //let foundIndex;
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index].id === id) {
      //foundIndex = index;
      return index;
    }
  }
  return undefined;
}

// 6- creamos función manejadora del evento

function handleIncProduct(ev) {
  // 9- con ev.target.dataset accedemos a los atributos del elemento html que empiezan con data
  console.log(products, ev.target.dataset.id);
  console.log('me han clickado');
  //10- obtengo el elemento clickado
  const clickedId = ev.target.dataset.id;
  // 22- substituimos bucle for para encontrar item por función con parámetro.
  let foundItem = findInArray(clickedId, cart);
  // for (const item of cart) {
  //   if (item.id === clickedId) {
  //     foundItem = item;
  //   }
  // }

  if (foundItem === undefined) {
    // 11- si no está en la cesta
    //busco el producto clickado
    // 24- aplico función helper que busca en un array
    let foundProduct = findInArray(clickedId, products);
    // for (const product of products) {
    //   if (product.id === clickedId) {
    //     foundProduct = product;
    //   }
    // }
    console.log('Bien', foundProduct);
    //11- añado el producto al carro cart
    cart.push({
      id: foundProduct.id,
      name: foundProduct.name,
      price: foundProduct.price,
      quantity: 1,
    });
  } else {
    // 12- si sí está lo incremento
    foundItem.quantity += 1;
  }
  console.log(cart);
  //12- pinto la cesta cada vez que modifico el num de productos comprados
  // 28- guardamos en localStorage cd Increm/Decrem
  setInLocalStorage();
  paintCartItems();
}

// 17- función decrementar de shopping cart

function handleDecProduct(ev) {
  // 18- obtengo el producto de la cesta clickado
  const clickedId = ev.target.dataset.id;
  // 19- busco el producto clickado
  // 23- substituyo bucle for por función con parámetros para encontrar dentro del array
  let foundItem = findInArray(clickedId, cart);
  // for (const item of cart) {
  //   if (item.id === clickedId) {
  //     foundItem = item;
  //   }
  // }
  // 20- compruebo si tengo más de una unidad en el producto
  console.log(foundItem.quantity);
  if (foundItem.quantity > 1) {
    foundItem.quantity -= 1;
  } else {
    //  cuando sólo tengo un elemento en el shopping cart y decremento (usamos el índex para borrar ese elemento). foundIndex busca índice de el clickado
    // 26- usamos función helper para encontrar índice en el array
    //let foundIndex; buscar posicion del el clickado en cart
    let foundIndex = findIndexInArray(clickedId, cart);
    // uso for clásico para trabajar con índices
    // for (let index = 0; index < cart.length; index += 1) {
    //   if (cart[index].id === clickedId) {
    //     foundIndex = index;
    //   }
    // }
    // borrar el elemento que está en esa posición, índice
    cart.splice(foundIndex, 1);
  }
  console.log(foundItem.quantity);
  console.log(ev.target.dataset.id, 'me han clickado');
  setInLocalStorage();
  paintCartItems();
}

// function that generates each item´s row in shopping cart
// converting items into objects

function getCartItemHtmlCode(item) {
  let htmlCode = '';
  htmlCode += `<tr>`;
  htmlCode += `<td>${item.name}</td>`;
  htmlCode += `<td>${item.price}</td>`;
  htmlCode += `<td>`;
  htmlCode += `<button class="js-dec-btn card__btn" data-id="${item.id}">-</button>`;
  htmlCode += `${item.quantity}`;
  htmlCode += `<button class="js-inc-btn card__btn" data-id="${item.id}">+</button>`;
  htmlCode += ` </td>`;
  htmlCode += ` <td class="text-align-right">${
    item.price * item.quantity
  }</td>`;
  htmlCode += ` </tr>`;
  return htmlCode;
}

//function that generates and calculates total sum (itemprice * quantity) in shopping cart

function getCartTotalHtmlCode() {
  let htmlCode = '';
  htmlCode += ` <tr class="text--bold">`;
  htmlCode += `  <td>Total</td>`;
  htmlCode += `  <td colspan="3" class="text-align-right">
        ${getTotalPrice()} €</td>`;
  htmlCode += `</tr>`;
  return htmlCode;
}

// 13 function that paints all cartItems and calculates totalprice
// transfer items with properties to object

function paintCartItems() {
  cartElement.innerHTML = '';
  for (const item of cart) {
    //14- para cada elemento creamos su html
    cartElement.innerHTML += getCartItemHtmlCode(item);
  }
  //15- añadimos línea de 'total' al carro de la compra
  cartElement.innerHTML += getCartTotalHtmlCode();
  listenCartBtns();
}

function getTotalPrice() {
  let total = 0;
  for (const item of cart) {
    total += item.price * item.quantity;
  }
  return total;
}

getApiData();
paintCartItems();

// listen to button event
// when moved, these buttons don´t work because they haven´t been painted yet??

// function handleQuantityBtn(ev) {
//   const currentTarget = ev.currentTarget;
//   if (currentTarget.classList.contains('js-inc-btn')) {
//     incQuantity(foundProduct);
//     //product1.quantity += 1;
//   } else if (currentTarget.classList.contains('js-dec-btn')) {
//     decQuantity(foundProduct);
//     //product1.quantity -= 1;
//   }
//   paintCartItems();
// }

// using "this" for a function being used from an object, where "this" is the object.
// item functions

// function incQuantity(item) {
//   //this.quantity += 1;
//   item.quantity += 1;
// }

// function decQuantity(item) {
//   if (item.quantity > 0) {
//     item.quantity -= 1;
//   }
// }

// 15- escuchamos botones cesta compra

function listenCartBtns() {
  const decBtns = document.querySelectorAll('.js-dec-btn');
  for (const decBtn of decBtns) {
    decBtn.addEventListener('click', handleDecProduct);
  }
  const incBtns = document.querySelectorAll('.js-inc-btn');
  for (const incBtn of incBtns) {
    incBtn.addEventListener('click', handleIncProduct);
  }
}
// 27- Guardar en el localStorage

const setInLocalStorage = () => {
  const stringifyCart = JSON.stringify(cart);
  // param 1 nombre, param 2 valor que guardamos
  localStorage.setItem('cart', stringifyCart);
};

// creating object with form input

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
  const addressInfo = document.querySelector('.js-address-info');
  addressInfo.innerHTML = `${userAddress.address || ''} ${
    userAddress.city || ''
  } ${userAddress.zip || ''}`;
}

address.addEventListener('keyup', handleAddress);
city.addEventListener('keyup', handleAddress);
zip.addEventListener('keyup', handleAddress);
