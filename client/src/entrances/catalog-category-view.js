import _ from 'lodash';
import FastClick from 'fastclick';
const MagentoClient = require('../libs/MagentoClient')();
import AddToCartButton from '../components/common/AddToCartButton';
import CartSidebar from '../components/common/CartSidebar';
import CommonStore from '../stores/CommonStore';

// Get elements
const cartSidebarElem = document.getElementById('cart-sidebar');
const buttonsElems = document.querySelectorAll('[data-add-to-cart-button]');

function run() {

  // register Events
  CommonStore.registerEvents();

  // Create components
  MagentoClient.createComponent(CartSidebar, {elem: cartSidebarElem});
  _.forEach(buttonsElems, e => MagentoClient.createComponent(AddToCartButton, {elem: e}));
}


let runPromise = new Promise((resolve) => {
  if (window.addEventListener) {
    window.addEventListener('DOMContentLoaded', resolve);
  } else {
    window.attachEvent('onload', resolve);
  }
});

runPromise
.then(() => FastClick.attach(document.body))
.then(run);