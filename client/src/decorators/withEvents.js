function withEventsDecorator(value) {
  function _extendClass(Target){
    class withEvents extends Target{
      constructor(options) {
        super(options);
        this.elem.onclick = null;
        this.elem.addEventListener('click', this.click.bind(this));
      }
      static getValue() {
        return value;
      }
    }
    return withEvents;
  }
  return (Target) => _extendClass(Target);
}

export default withEventsDecorator;
