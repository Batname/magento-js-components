import _ from 'lodash';
import FastClick from 'fastclick';

export default (options = {}) => {
  let componentCounter = 0;
  let components = [];

  let _componentPrototype = {
    setComponentData: function(key, data) {
      this.componentData[key] = data;
    },
    setCSSClass: function(class_name){
      if(!this.elem.contains(class_name)) this.elem.classList.add(class_name);
    },
    unsetCSSClass: function(class_name){
      if(!this.elem.contains(class_name)) this.elem.classList.remove(class_name);
    },
    toggleCSSClass: function(class_name){
      this.elem.classList.toggle(class_name);
    }
  };

  let _componentHiddenProperties = function(constructor){
    return {
      count: componentCounter,
      hash: _.uniqueId(`component_${componentCounter}_`),
      componentName: constructor.name,
      componentData: {}
    };
  };


  let createComponent = (constructor, options) => {
    componentCounter++;
    let hiddehOptions = _componentHiddenProperties(constructor);
    components.push(hiddehOptions);
    _.assign(constructor.prototype, _componentPrototype);
    return new constructor(_.assign(options, hiddehOptions));
  };

  let init = (fn) => {
    let runPromise = new Promise((resolve) => {
      if (window.addEventListener) {
        window.addEventListener('DOMContentLoaded', resolve);
      } else {
        window.attachEvent('onload', resolve);
      }
    });

    runPromise
    .then(() => FastClick.attach(document.body))
    .then(fn)
    .catch(error => console.error(error));
  };

  return {
    createComponent : createComponent,
    init: init
  };
};
