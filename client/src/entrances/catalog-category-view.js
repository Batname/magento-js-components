import _ from 'lodash';
const MagentoClient = require('../libs/MagentoClient')();
import AddToCartButton from '../components/common/AddToCartButton';

let buttons = document.querySelectorAll('[data-add-to-cart-button]');

_.forEach(buttons, e => MagentoClient.createComponent(AddToCartButton, {elem: e}));
