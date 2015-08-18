@simpleDecorete(true)
class MyClass {}

function simpleDecorete(value) {
  return (target) => {
    target.prototype.annotated = value;
    target.static = 'static';
  };
}

let my = new MyClass();

console.log(my.annotated, 'my.annotated');
console.log(MyClass.static, 'MyClass.static');




@classDecorete(true)
class MyClass1 {
  constructor(){
    this.firstName = 'Denis';
    this.lastName = 'Dubinin';
  }
  getName(){
    return this.firstName;
  }
  get fullName() { return `${this.firstName} ${this.lastName}`; }
}

function classDecorete(value) {
  function _extendClass(Target){
    class WithStyles extends Target{
      constructor() {
        super();
        this.val = value;
      }
      static getValue() {
        return value;
      }
    }
    return WithStyles;
  }
  return (Target) => _extendClass(Target);
}

let my1 = new MyClass1();

console.log(my1, 'my1');
console.log(MyClass1.getValue(), 'MyClass1.value');