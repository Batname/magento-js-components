import _ from 'lodash';
import CommonActions from '../../../actions/CommonActions';
import CommonStore from '../../../stores/CommonStore';

class InputQty{
  constructor(options){
    _.assign(this, options);
    this.elem.addEventListener('change', this.change.bind(this));
    CommonStore.cartChangeSubscription(this);
    this.getInitComponentData();
  }
  change(){
    CommonActions.setInputValue(this);
  }
  getInitComponentData(){
    this.setComponentData('qty', CommonStore.getQty());
  }
  render(){
    this.elem.value = this.componentData.qty;
  }
}

export default InputQty;
