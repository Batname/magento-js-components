import CommonConstants from '../constants/CommonConstants';
import CartApi from '../api/CartApi';

async function addToCart(options){
  try{
    document.dispatchEvent(new CustomEvent(CommonConstants.LOADER));
    let cartData = await CartApi.addToCartUrl(options);
    let event = new CustomEvent(CommonConstants.ADD_TO_CART, {
      detail: cartData
    });
    document.dispatchEvent(event);
  } catch (err) {
    console.log(err);
  }
}

function setInputValue(component){
  let event = new CustomEvent(CommonConstants.CHANGE_PRODUCT_QTY, {
    detail: component
  });
  document.dispatchEvent(event);
}


export default {
  addToCart: addToCart,
  setInputValue: setInputValue
};