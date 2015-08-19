import CommonConstants from '../constants/CommonConstants';

let cartData = {};
let qty = 1;
let chengeEvent;
let chengeCallbacks =[];
const CHANGE_EVENT = 'change';

const CommonStore = {

  getCartData(){
    return cartData;
  },

  getQty(){
    return qty;
  },

  emitChange() {
    document.dispatchEvent(chengeEvent);
  },

  onChange(callback, context) {
    chengeCallbacks.push({callback: callback, context: context});
    chengeEvent = new CustomEvent(CHANGE_EVENT, {
      detail: callback
    });
  },

  registerEvents(){
    document.addEventListener(CHANGE_EVENT, () => {
      chengeCallbacks.each((cb)=>{
        let e = cb.callback.bind(cb.context);
        e();
      });
    });

    document.addEventListener(CommonConstants.ADD_TO_CART, (event) => {
      cartData = event.detail;
      qty = 1;
      this.emitChange();
    });

    document.addEventListener(CommonConstants.CHANGE_PRODUCT_QTY, (event) => {
      qty = event.detail.elem.value;
      this.emitChange();
    });

    document.addEventListener(CommonConstants.LOADER, () => {
      this.emitChange();
    });

  }
};

export default CommonStore;
