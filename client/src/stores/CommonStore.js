import _ from 'lodash';
import CommonConstants from '../constants/CommonConstants';

let subscribers = {};
let cartData = {};

const CommonStore = {

  getCartData(){
    return cartData;
  },

  cartChangeSubscription(component){
    if(_.isUndefined(subscribers.cart)) subscribers.cart = [];
    subscribers.cart.push(component);
  },

  emitChange(subscribe_type, data){
    subscribers[subscribe_type].each((component) => {
      component.setComponentData(subscribe_type, data);
      component.render();
    });
  },

  registerEvents(){
    document.addEventListener(CommonConstants.ADD_TO_CART, (event) => {
      cartData = event.detail;
      this.emitChange('cart', cartData);
    });
  }
};

export default CommonStore;
