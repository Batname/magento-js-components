import CommonConstants from '../constants/CommonConstants';
import CartApi from '../api/CartApi';

async function addToCart(component){
  try{

    let cartData = await CartApi.addToCartUrl(component.postOptions);
    let event = new CustomEvent(CommonConstants.ADD_TO_CART, {
      detail: cartData
    });
    document.dispatchEvent(event);
  } catch (err) {
    console.log(err);
  }
}


export default {
  addToCart: addToCart
};