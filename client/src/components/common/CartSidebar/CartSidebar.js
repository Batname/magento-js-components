import _ from 'lodash';
import CommonStore from '../../../stores/CommonStore';
import withStyles from '../../../decorators/withStyles';
import styles from './CartSidebar.scss';
import template from './CartSidebar.jade';

@withStyles(styles)
class CartSidebar{
  constructor(options){
    _.assign(this, options);
    this.componentWillMount();
  }
  componentWillMount() {
    CommonStore.onChange(this.onChange, this);
  }
  onChange(){
    this.setComponentData('qty', CommonStore.getQty());
    this.setComponentData('cart', CommonStore.getCartData());
    this.render();
  }
  render(){
    this.toggleCSSClass('display-none');
    let totals = {
      qty: _.chain(this.componentData.cart.response).pluck('qty').sum().value(),
      total: _.chain(this.componentData.cart.response).map((item) => item.qty * item.price).sum().round(2).value(),
      response: _.chain(this.componentData.cart.response).sortByOrder(['updated'], ['desc']).value()
    };
    this.elem.innerHTML = template(_.assign(this.componentData.cart, totals));
  }
}

export default CartSidebar;