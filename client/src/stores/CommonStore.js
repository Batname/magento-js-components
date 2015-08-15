import CommonConstants from '../constants/CommonConstants';

const CHANGE = 'CHANGE';
let events = [];

const CommonStore = {

  changeEvent(component){

    let eventName = `${CHANGE}_${component.componentName}`;

    let newEvent = new CustomEvent(eventName, {
      detail: component
    });

    component.elem.addEventListener(eventName, (event) => {
      alert( event.detail );
    }, false);

    events.push(newEvent);
  }
};

export default () => {
  document.addEventListener(CommonConstants.ADD_TO_CART, () => {
    events.each((event) => event.detail.render());
  }, false);

  return CommonStore;
};
