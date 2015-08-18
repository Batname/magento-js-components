import 'babel/polyfill';

import AddToCartButton from '../components/common/AddToCartButton';
import CartSidebar from '../components/common/CartSidebar';
import InputQty from '../components/common/InputQty';
import Spinner from '../components/common/Spinner';
import CommonStore from '../stores/CommonStore';
const MagentoClient = require('../libs/MagentoClient')();

// Get elements
const cartSidebarElem = document.getElementById('cart-sidebar-component');
const addToCartButtonElem = document.getElementById('product-addtocart-button');
const inputQtyElem = document.getElementById('qty');
const spinnerElem = document.getElementById('spinner-component');

function run() {

  // register Events
  CommonStore.registerEvents();

  // Create components
  MagentoClient.createComponent(CartSidebar, {elem: cartSidebarElem});
  MagentoClient.createComponent(AddToCartButton, {elem: addToCartButtonElem});
  MagentoClient.createComponent(InputQty, {elem: inputQtyElem});
  MagentoClient.createComponent(Spinner, {elem: spinnerElem});
}

// Run App
MagentoClient.init(run);
