import _ from 'lodash';
import CommonStore from '../../../stores/CommonStore';
import withStyles from '../../../decorators/withStyles';
import styles from './CartSidebar.scss';
import template from './CartSidebar.jade';

@withStyles(styles)
class CartSidebar{
  constructor(options){
    _.assign(this, options);
    CommonStore.cartChangeSubscription(this);
    CommonStore.loaderSubscription(this);
    CommonStore.loadedSubscription(this);
  }
  render(){
    let totals = {
      qty: _.chain(this.componentData.cart.response).pluck('qty').sum().value(),
      total: _.chain(this.componentData.cart.response).map((item) => item.qty * item.price).sum().round(2).value(),
      response: _.chain(this.componentData.cart.response).sortByOrder(['updated'], ['desc']).value()
    };
    this.elem.innerHTML = template(_.assign(this.componentData.cart, totals));
  }
}

export default CartSidebar;