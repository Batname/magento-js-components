import _ from 'lodash';
import CommonStore from '../../../stores/CommonStore';

class CartSidebar{
  constructor(options){
    _.assign(this, options);
    CommonStore.changeEvent(this);
  }
  render(){
    this.elem.innerHTML = '';
  }
}

export default CartSidebar;