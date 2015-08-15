import CommonConstants from '../constants/CommonConstants';

const CommonActions = {
  addToCart(component){
    let event = new CustomEvent(CommonConstants.ADD_TO_CART, {
      detail: component
    });

    document.dispatchEvent(event);
  }
};

export default CommonActions;