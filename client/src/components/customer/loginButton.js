import _ from 'lodash';

class LoginButton{
  static init(elem){
    let options = {
      elem: elem,
      weigth: 100
    };
    return new LoginButton(options);
  }
  static addEventsListeners(component){
    console.log(component, 'addEventsListeners');
  }
  constructor(options){
    _.assign(this, options);
  }
}

export default LoginButton;
