import _ from 'lodash';
import CommonStore from '../../../stores/CommonStore';

class Spinner{
  constructor(options){
    _.assign(this, options);
    this.componentWillMount();
  }
  componentWillMount() {
    CommonStore.onChange(this.onChange, this);
  }
  onChange(){
    this.render();
  }
  render(){
    this.toggleCSSClass('display-none');
  }
}

export default Spinner;
