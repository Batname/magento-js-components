import 'babel/polyfill';

import _ from 'lodash';
import AddToCartButton from '../components/common/AddToCartButton';
import CartSidebar from '../components/common/CartSidebar';
import CommonStore from '../stores/CommonStore';
const MagentoClient = require('../libs/MagentoClient')();

// Get elements
const cartSidebarElem = document.getElementById('cart-sidebar-component');
const buttonsElems = document.querySelectorAll('[data-add-to-cart-button]');

function run() {

  // register Events
  CommonStore.registerEvents();

  // Create components
  MagentoClient.createComponent(CartSidebar, {elem: cartSidebarElem});
  _.forEach(buttonsElems, e => MagentoClient.createComponent(AddToCartButton, {elem: e}));
}

// Run App
MagentoClient.init(run);
