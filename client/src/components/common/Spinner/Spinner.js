import _ from 'lodash';
import CommonStore from '../../../stores/CommonStore';

class Spinner{
  constructor(options){
    _.assign(this, options);
    CommonStore.loaderSubscription(this);
    CommonStore.loadedSubscription(this);
  }
}

export default Spinner;
