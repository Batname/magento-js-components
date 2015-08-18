import 'babel/polyfill';

import _ from 'lodash';
import AddToCartButton from '../components/common/AddToCartButton';
import CartSidebar from '../components/common/CartSidebar';
import Spinner from '../components/common/Spinner';
import CommonStore from '../stores/CommonStore';
const MagentoClient = require('../libs/MagentoClient')();

// Get elements
const cartSidebarElem = document.getElementById('cart-sidebar-component');
const buttonsElems = document.querySelectorAll('[data-add-to-cart-button]');
const spinnerElem = document.getElementById('spinner-component');

function run() {

  // register Events
  CommonStore.registerEvents();

  // Create components
  MagentoClient.createComponent(CartSidebar, {elem: cartSidebarElem});
  _.forEach(buttonsElems, e => MagentoClient.createComponent(AddToCartButton, {elem: e}));
  MagentoClient.createComponent(Spinner, {elem: spinnerElem});
}

// Run App
MagentoClient.init(run);
