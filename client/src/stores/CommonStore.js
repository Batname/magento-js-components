import _ from 'lodash';
import CommonConstants from '../constants/CommonConstants';

let subscribers = {};
let cartData = {};
let qty = 1;

const CommonStore = {

  getCartData(){
    return cartData;
  },

  getQty(){
    return qty;
  },

  cartChangeSubscription(component){
    if(_.isUndefined(subscribers.cart)) subscribers.cart = [];
    subscribers.cart.push(component);
  },

  qtyChangeSubscription(component){
    if(_.isUndefined(subscribers.qty)) subscribers.qty = [];
    subscribers.qty.push(component);
  },

  emitChanges(subscribe_type, data, render=false){
    subscribers[subscribe_type].each((component) => {
      component.setComponentData(subscribe_type, data);
      if(render) component.render();
    });
  },

  registerEvents(){
    document.addEventListener(CommonConstants.ADD_TO_CART, (event) => {
      cartData = event.detail;
      qty = 1;
      this.emitChanges('cart', cartData, true);
      this.emitChanges('qty', qty);
    });

    document.addEventListener(CommonConstants.CHANGE_PRODUCT_QTY, (event) => {
      qty = event.detail.elem.value;
      this.emitChanges('qty', qty);
    });

  }
};

export default CommonStore;
