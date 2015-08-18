/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

  'use strict';
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  var MyClass = (function () {
    function MyClass() {
      _classCallCheck(this, _MyClass);
    }
  
    var _MyClass = MyClass;
    MyClass = simpleDecorete(true)(MyClass) || MyClass;
    return MyClass;
  })();
  
  function simpleDecorete(value) {
    return function (target) {
      target.prototype.annotated = value;
      target['static'] = 'static';
    };
  }
  
  var my = new MyClass();
  
  console.log(my.annotated, 'my.annotated');
  console.log(MyClass['static'], 'MyClass.static');
  
  var MyClass1 = (function () {
    function MyClass1() {
      _classCallCheck(this, _MyClass1);
  
      this.firstName = 'Denis';
      this.lastName = 'Dubinin';
    }
  
    _createClass(MyClass1, [{
      key: 'getName',
      value: function getName() {
        return this.firstName;
      }
    }, {
      key: 'fullName',
      get: function get() {
        return this.firstName + ' ' + this.lastName;
      }
    }]);
  
    var _MyClass1 = MyClass1;
    MyClass1 = classDecorete(true)(MyClass1) || MyClass1;
    return MyClass1;
  })();
  
  function classDecorete(value) {
    function _extendClass(Target) {
      var WithStyles = (function (_Target) {
        _inherits(WithStyles, _Target);
  
        function WithStyles() {
          _classCallCheck(this, WithStyles);
  
          _get(Object.getPrototypeOf(WithStyles.prototype), 'constructor', this).call(this);
          this.val = value;
        }
  
        _createClass(WithStyles, null, [{
          key: 'getValue',
          value: function getValue() {
            return value;
          }
        }]);
  
        return WithStyles;
      })(Target);
  
      return WithStyles;
    }
    return function (Target) {
      return _extendClass(Target);
    };
  }
  
  var my1 = new MyClass1();
  
  console.log(my1, 'my1');
  console.log(MyClass1.getValue(), 'MyClass1.value');

/***/ }
/******/ ]);
//# sourceMappingURL=cms-index-index.js.map