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
    CommonStore.changeEvent(this);
  }
  click(){
    CommonActions.addToCart(this);
  }
  render(){
    this.elem.innerHTML = template(this);
  }
}

export default AddToCartButton;