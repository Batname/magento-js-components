import _ from 'lodash';
import styles from './AddToCartButton.scss';
import template from './AddToCartButton.jade';
import CommonActions from '../../../actions/CommonActions';
import withStyles from '../../../decorators/withStyles';
import withEvents from '../../../decorators/withEvents';
import CommonStore from '../../../stores/CommonStore';


@withStyles(styles)
@withEvents(true)
class AddToCartButton{
  constructor(options){
    _.assign(this, options);
    this.getInitComponentData();
  }
  click(){
    CommonStore.cartChangeSubscription(this);
    CommonStore.qtyChangeSubscription(this);
    let postData = _.assign(this.elem.dataset, {qty: this.componentData.qty || this.elem.dataset.qty});
    CommonActions.addToCart(postData);
  }
  getInitComponentData(){
    this.setComponentData('qty', CommonStore.getQty());
    this.setComponentData('cart', CommonStore.getCartData());
  }
  render(){
    let qty = _.result(_.chain(this.componentData.cart.response).where({productId: this.elem.dataset.id}).first().value(), 'qty');
    this.elem.innerHTML = template({qty: qty});
    this.setCSSClass('btn-in-cart');
  }
}

export default AddToCartButton;