import _ from 'lodash';


export default (options = {}) => {
  let componentCounter = 0;
  let components = [];


  let createComponent = (constructor, options) => {
    let count = componentCounter++;
    let hiddehOptions =  {count: count, hash: _.uniqueId(`component_${count}_`), componentName: constructor.name, componentData: {}};
    components.push(hiddehOptions);
    return new constructor(_.assign(options, hiddehOptions));
  };

  return {
    createComponent : createComponent
  };
};
