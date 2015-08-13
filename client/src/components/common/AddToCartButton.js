import _ from 'lodash';

let text;

class AddToCartButton{
  constructor(options){
    _.assign(this, options);
    this.elem.addEventListener('mouseover', this.mouseover.bind(this));
    this.elem.addEventListener('mouseout', this.mouseout.bind(this));
    text = this.elem.children[0].children[0].innerText;
  }
  mouseover(){
    this.elem.children[0].children[0].innerText = 'mouseover';
  }
  mouseout(){
    this.elem.children[0].children[0].innerText = text;
  }
}

export default AddToCartButton;