import _ from 'lodash';
import CommonStore from '../../../stores/CommonStore';
import template from './CartSidebar.jade';

class CartSidebar{
  constructor(options){
    _.assign(this, options);
    CommonStore.changeEvent(this);
  }
  render(){
    let totals = {
      qty: _.chain(this.componentData.response).pluck('qty').sum().value(),
      total: _.chain(this.componentData.response).map((item) => item.qty * item.price).sum().round(2).value(),
      response: _.chain(this.componentData.response).sortByOrder(['updated'], ['desc']).value()
    };
    this.elem.innerHTML = template(_.assign(this.componentData, totals));
  }
}

export default CartSidebar;