import _ from 'lodash';
import CommonActions from '../../../actions/CommonActions';
import CommonStore from '../../../stores/CommonStore';

class InputQty{
  constructor(options){
    _.assign(this, options);
    this.elem.addEventListener('change', this.change.bind(this));
    this.getInitComponentData();
    this.componentWillMount();
  }
  change(){
    CommonActions.setInputValue(this);
  }
  getInitComponentData(){
    this.setComponentData('qty', CommonStore.getQty());
  }
  componentWillMount() {
    CommonStore.onChange(this.onChange, this);
  }
  onChange(){
    this.setComponentData('qty', CommonStore.getQty());
    this.render();
  }
  render(){
    this.elem.value = this.componentData.qty;
  }
}

export default InputQty;
