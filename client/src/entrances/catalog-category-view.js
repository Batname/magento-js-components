import _ from 'lodash';
import AddToCartButton from '../components/common/AddToCartButton';

let buttons = document.querySelectorAll('[data-add-to-cart-button]');

_.forEach(buttons, e => new AddToCartButton({elem: e}));
