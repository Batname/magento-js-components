import _ from 'lodash';
import styles from './AddToCartButton.scss';
import template from './AddToCartButton.jade';
import CommonActions from '../../../actions/CommonActions';
import withStyles from '../../../decorators/withStyles';
import CommonStore from '../../../stores/CommonStore';


function getProductPostOptions (component) {
  let re = /product\/\d+\/form_key/i;
  let url = component.elem.onclick.toString();
  return {id: url.match(re)[0].match(/\d+/g)[0], qty:1};
}

@withStyles(styles)
class AddToCartButton{
  constructor(options){
    _.assign(this, options);
    this.postOptions = getProductPostOptions(this);
    this.elem.onclick = null;
    this.elem.addEventListener('click', this.click.bind(this));
    CommonStore.changeEvent(this);
  }
  click(){
    CommonActions.addToCart(this);
  }
  render(){
    let qty = _.result(_.chain(this.componentData.response).where({productId: this.postOptions.id}).first().value(), 'qty');
    this.elem.innerHTML = template({qty: qty});
  }
}

export default AddToCartButton;