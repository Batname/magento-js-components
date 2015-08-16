import _ from 'lodash';
import styles from './AddToCartButton.scss';
import template from './AddToCartButton.jade';
import CommonActions from '../../../actions/CommonActions';
import withStyles from '../../../decorators/withStyles';
import CommonStore from '../../../stores/CommonStore';


@withStyles(styles)
class AddToCartButton{
  constructor(options){
    _.assign(this, options);
    this.elem.onclick = null;
    this.elem.addEventListener('click', this.click.bind(this));
    CommonStore.cartChangeSubscription(this);
    CommonStore.qtyChangeSubscription(this);
    this.getInitComponentData();
  }
  click(){
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
  }
}

export default AddToCartButton;