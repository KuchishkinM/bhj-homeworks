const plus = Array.from(document.getElementsByClassName('product__quantity-control_inc'))
const minus = Array.from(document.getElementsByClassName('product__quantity-control_dec'))
const quantityValue = Array.from(document.getElementsByClassName('product__quantity-value'))
const productAdd = Array.from(document.getElementsByClassName('product__add'))
const cart = document.querySelector('.cart__products')
const product = document.getElementsByClassName('product')

for (let i = 0; i < quantityValue.length; i++) {
  plus[i].addEventListener('click', () => {
    quantityValue[i].textContent++
  });

  minus[i].addEventListener('click', () => {
    if (quantityValue[i].textContent > 1) {
      quantityValue[i].textContent--
    }
  });

  productAdd[i].addEventListener('click', () => {
    addProduct(i);
  })
};

// function addProduct(i) {
//   for (let p = 0; p < divCart.children.length; p++) {
//     if (divCart.children[p].dataset.id === product[i].dataset.id) {
//       let cartProductsCount = divCart.children[p].querySelector('.cart__product-count').textContent
//       cartProductsCount = Number(cartProductsCount) + Number(quantityValue[p].textContent)
//       return divCart.children[p].querySelector('.cart__product-count').textContent = cartProductsCount
//     }
//   };

//   divCart.insertAdjacentHTML('beforeEnd', `<div class="cart__product" data-id="${product[i].dataset.id}"><img class="cart__product-image" src="${product[i].querySelector('img').getAttribute('src')}"><div class="cart__product-count">${quantityValue[i].textContent}</div></div>`)
// };

const productInCart = cart.find
