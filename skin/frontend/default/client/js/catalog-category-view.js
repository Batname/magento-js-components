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
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  __webpack_require__(86);
  
  var _lodash = __webpack_require__(23);
  
  var _lodash2 = _interopRequireDefault(_lodash);
  
  var _componentsCommonAddToCartButton = __webpack_require__(80);
  
  var _componentsCommonAddToCartButton2 = _interopRequireDefault(_componentsCommonAddToCartButton);
  
  var _componentsCommonCartSidebar = __webpack_require__(81);
  
  var _componentsCommonCartSidebar2 = _interopRequireDefault(_componentsCommonCartSidebar);
  
  var _componentsCommonSpinner = __webpack_require__(82);
  
  var _componentsCommonSpinner2 = _interopRequireDefault(_componentsCommonSpinner);
  
  var _storesCommonStore = __webpack_require__(30);
  
  var _storesCommonStore2 = _interopRequireDefault(_storesCommonStore);
  
  var MagentoClient = __webpack_require__(85)();
  
  // Get elements
  var cartSidebarElem = document.getElementById('cart-sidebar-component');
  var buttonsElems = document.querySelectorAll('[data-add-to-cart-button]');
  var spinnerElem = document.getElementById('spinner-component');
  
  function run() {
  
    // register Events
    _storesCommonStore2['default'].registerEvents();
  
    // Create components
    MagentoClient.createComponent(_componentsCommonCartSidebar2['default'], { elem: cartSidebarElem });
    _lodash2['default'].forEach(buttonsElems, function (e) {
      return MagentoClient.createComponent(_componentsCommonAddToCartButton2['default'], { elem: e });
    });
    MagentoClient.createComponent(_componentsCommonSpinner2['default'], { elem: spinnerElem });
  }
  
  // Run App
  MagentoClient.init(run);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

  var global     = __webpack_require__(5)
    , core       = __webpack_require__(15)
    , hide       = __webpack_require__(10)
    , $redef     = __webpack_require__(12)
    , PROTOTYPE  = 'prototype';
  var ctx = function(fn, that){
    return function(){
      return fn.apply(that, arguments);
    };
  };
  var $def = function(type, name, source){
    var key, own, out, exp
      , isGlobal = type & $def.G
      , isProto  = type & $def.P
      , target   = isGlobal ? global : type & $def.S
          ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
      , exports  = isGlobal ? core : core[name] || (core[name] = {});
    if(isGlobal)source = name;
    for(key in source){
      // contains in native
      own = !(type & $def.F) && target && key in target;
      // export native or passed
      out = (own ? target : source)[key];
      // bind timers to global for call from export context
      if(type & $def.B && own)exp = ctx(out, global);
      else exp = isProto && typeof out == 'function' ? ctx(Function.call, out) : out;
      // extend global
      if(target && !own)$redef(target, key, out);
      // export
      if(exports[key] != out)hide(exports, key, exp);
      if(isProto)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
    }
  };
  global.core = core;
  // type bitmap
  $def.F = 1;  // forced
  $def.G = 2;  // global
  $def.S = 4;  // static
  $def.P = 8;  // proto
  $def.B = 16; // bind
  $def.W = 32; // wrap
  module.exports = $def;

/***/ },
/* 2 */
/***/ function(module, exports) {

  var $Object = Object;
  module.exports = {
    create:     $Object.create,
    getProto:   $Object.getPrototypeOf,
    isEnum:     {}.propertyIsEnumerable,
    getDesc:    $Object.getOwnPropertyDescriptor,
    setDesc:    $Object.defineProperty,
    setDescs:   $Object.defineProperties,
    getKeys:    $Object.keys,
    getNames:   $Object.getOwnPropertyNames,
    getSymbols: $Object.getOwnPropertySymbols,
    each:       [].forEach
  };

/***/ },
/* 3 */
/***/ function(module, exports) {

  // http://jsperf.com/core-js-isobject
  module.exports = function(it){
    return it !== null && (typeof it == 'object' || typeof it == 'function');
  };

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

  var isObject = __webpack_require__(3);
  module.exports = function(it){
    if(!isObject(it))throw TypeError(it + ' is not an object!');
    return it;
  };

/***/ },
/* 5 */
/***/ function(module, exports) {

  var global = typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  module.exports = global;
  if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

  var store  = __webpack_require__(72)('wks')
    , Symbol = __webpack_require__(5).Symbol;
  module.exports = function(name){
    return store[name] || (store[name] =
      Symbol && Symbol[name] || (Symbol || __webpack_require__(21))('Symbol.' + name));
  };

/***/ },
/* 7 */
/***/ function(module, exports) {

  var hasOwnProperty = {}.hasOwnProperty;
  module.exports = function(it, key){
    return hasOwnProperty.call(it, key);
  };

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

  // 7.1.15 ToLength
  var toInteger = __webpack_require__(29)
    , min       = Math.min;
  module.exports = function(it){
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  };

/***/ },
/* 9 */
/***/ function(module, exports) {

  module.exports = function(exec){
    try {
      return !!exec();
    } catch(e){
      return true;
    }
  };

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

  var $          = __webpack_require__(2)
    , createDesc = __webpack_require__(20);
  module.exports = __webpack_require__(13) ? function(object, key, value){
    return $.setDesc(object, key, createDesc(1, value));
  } : function(object, key, value){
    object[key] = value;
    return object;
  };

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

  // most Object methods by ES6 should accept primitives
  module.exports = function(KEY, exec){
    var $def = __webpack_require__(1)
      , fn   = (__webpack_require__(15).Object || {})[KEY] || Object[KEY]
      , exp  = {};
    exp[KEY] = exec(fn);
    $def($def.S + $def.F * __webpack_require__(9)(function(){ fn(1); }), 'Object', exp);
  };

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

  // add fake Function#toString
  // for correct work wrapped methods / constructors with methods like LoDash isNative
  var global    = __webpack_require__(5)
    , hide      = __webpack_require__(10)
    , SRC       = __webpack_require__(21)('src')
    , TO_STRING = 'toString'
    , $toString = Function[TO_STRING]
    , TPL       = ('' + $toString).split(TO_STRING);
  
  __webpack_require__(15).inspectSource = function(it){
    return $toString.call(it);
  };
  
  (module.exports = function(O, key, val, safe){
    if(typeof val == 'function'){
      hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
      if(!('name' in val))val.name = key;
    }
    if(O === global){
      O[key] = val;
    } else {
      if(!safe)delete O[key];
      hide(O, key, val);
    }
  })(Function.prototype, TO_STRING, function toString(){
    return typeof this == 'function' && this[SRC] || $toString.call(this);
  });

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

  // Thank's IE8 for his funny defineProperty
  module.exports = !__webpack_require__(9)(function(){
    return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
  });

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

  // to indexed object, toObject with fallback for non-array-like ES3 strings
  var IObject = __webpack_require__(36)
    , defined = __webpack_require__(16);
  module.exports = function(it){
    return IObject(defined(it));
  };

/***/ },
/* 15 */
/***/ function(module, exports) {

  var core = module.exports = {};
  if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 16 */
/***/ function(module, exports) {

  // 7.2.1 RequireObjectCoercible(argument)
  module.exports = function(it){
    if(it == undefined)throw TypeError("Can't call method on  " + it);
    return it;
  };

/***/ },
/* 17 */
/***/ function(module, exports) {

  var toString = {}.toString;
  
  module.exports = function(it){
    return toString.call(it).slice(8, -1);
  };

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

  // optional / simple context binding
  var aFunction = __webpack_require__(24);
  module.exports = function(fn, that, length){
    aFunction(fn);
    if(that === undefined)return fn;
    switch(length){
      case 1: return function(a){
        return fn.call(that, a);
      };
      case 2: return function(a, b){
        return fn.call(that, a, b);
      };
      case 3: return function(a, b, c){
        return fn.call(that, a, b, c);
      };
    } return function(/* ...args */){
        return fn.apply(that, arguments);
      };
  };

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

  // 7.1.13 ToObject(argument)
  var defined = __webpack_require__(16);
  module.exports = function(it){
    return Object(defined(it));
  };

/***/ },
/* 20 */
/***/ function(module, exports) {

  module.exports = function(bitmap, value){
    return {
      enumerable  : !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable    : !(bitmap & 4),
      value       : value
    };
  };

/***/ },
/* 21 */
/***/ function(module, exports) {

  var id = 0
    , px = Math.random();
  module.exports = function(key){
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

  // 22.1.3.31 Array.prototype[@@unscopables]
  var UNSCOPABLES = __webpack_require__(6)('unscopables');
  if(!(UNSCOPABLES in []))__webpack_require__(10)(Array.prototype, UNSCOPABLES, {});
  module.exports = function(key){
    [][UNSCOPABLES][key] = true;
  };

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

  var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/**
   * @license
   * lodash 3.10.1 (Custom Build) <https://lodash.com/>
   * Build: `lodash modern -d -o ./index.js`
   * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <https://lodash.com/license>
   */
  ;(function() {
  
    /** Used as a safe reference for `undefined` in pre-ES5 environments. */
    var undefined;
  
    /** Used as the semantic version number. */
    var VERSION = '3.10.1';
  
    /** Used to compose bitmasks for wrapper metadata. */
    var BIND_FLAG = 1,
        BIND_KEY_FLAG = 2,
        CURRY_BOUND_FLAG = 4,
        CURRY_FLAG = 8,
        CURRY_RIGHT_FLAG = 16,
        PARTIAL_FLAG = 32,
        PARTIAL_RIGHT_FLAG = 64,
        ARY_FLAG = 128,
        REARG_FLAG = 256;
  
    /** Used as default options for `_.trunc`. */
    var DEFAULT_TRUNC_LENGTH = 30,
        DEFAULT_TRUNC_OMISSION = '...';
  
    /** Used to detect when a function becomes hot. */
    var HOT_COUNT = 150,
        HOT_SPAN = 16;
  
    /** Used as the size to enable large array optimizations. */
    var LARGE_ARRAY_SIZE = 200;
  
    /** Used to indicate the type of lazy iteratees. */
    var LAZY_FILTER_FLAG = 1,
        LAZY_MAP_FLAG = 2;
  
    /** Used as the `TypeError` message for "Functions" methods. */
    var FUNC_ERROR_TEXT = 'Expected a function';
  
    /** Used as the internal argument placeholder. */
    var PLACEHOLDER = '__lodash_placeholder__';
  
    /** `Object#toString` result references. */
    var argsTag = '[object Arguments]',
        arrayTag = '[object Array]',
        boolTag = '[object Boolean]',
        dateTag = '[object Date]',
        errorTag = '[object Error]',
        funcTag = '[object Function]',
        mapTag = '[object Map]',
        numberTag = '[object Number]',
        objectTag = '[object Object]',
        regexpTag = '[object RegExp]',
        setTag = '[object Set]',
        stringTag = '[object String]',
        weakMapTag = '[object WeakMap]';
  
    var arrayBufferTag = '[object ArrayBuffer]',
        float32Tag = '[object Float32Array]',
        float64Tag = '[object Float64Array]',
        int8Tag = '[object Int8Array]',
        int16Tag = '[object Int16Array]',
        int32Tag = '[object Int32Array]',
        uint8Tag = '[object Uint8Array]',
        uint8ClampedTag = '[object Uint8ClampedArray]',
        uint16Tag = '[object Uint16Array]',
        uint32Tag = '[object Uint32Array]';
  
    /** Used to match empty string literals in compiled template source. */
    var reEmptyStringLeading = /\b__p \+= '';/g,
        reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
        reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
  
    /** Used to match HTML entities and HTML characters. */
    var reEscapedHtml = /&(?:amp|lt|gt|quot|#39|#96);/g,
        reUnescapedHtml = /[&<>"'`]/g,
        reHasEscapedHtml = RegExp(reEscapedHtml.source),
        reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
  
    /** Used to match template delimiters. */
    var reEscape = /<%-([\s\S]+?)%>/g,
        reEvaluate = /<%([\s\S]+?)%>/g,
        reInterpolate = /<%=([\s\S]+?)%>/g;
  
    /** Used to match property names within property paths. */
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
        reIsPlainProp = /^\w*$/,
        rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;
  
    /**
     * Used to match `RegExp` [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns)
     * and those outlined by [`EscapeRegExpPattern`](http://ecma-international.org/ecma-262/6.0/#sec-escaperegexppattern).
     */
    var reRegExpChars = /^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,
        reHasRegExpChars = RegExp(reRegExpChars.source);
  
    /** Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks). */
    var reComboMark = /[\u0300-\u036f\ufe20-\ufe23]/g;
  
    /** Used to match backslashes in property paths. */
    var reEscapeChar = /\\(\\)?/g;
  
    /** Used to match [ES template delimiters](http://ecma-international.org/ecma-262/6.0/#sec-template-literal-lexical-components). */
    var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
  
    /** Used to match `RegExp` flags from their coerced string values. */
    var reFlags = /\w*$/;
  
    /** Used to detect hexadecimal string values. */
    var reHasHexPrefix = /^0[xX]/;
  
    /** Used to detect host constructors (Safari > 5). */
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
  
    /** Used to detect unsigned integer values. */
    var reIsUint = /^\d+$/;
  
    /** Used to match latin-1 supplementary letters (excluding mathematical operators). */
    var reLatin1 = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g;
  
    /** Used to ensure capturing order of template delimiters. */
    var reNoMatch = /($^)/;
  
    /** Used to match unescaped characters in compiled string literals. */
    var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
  
    /** Used to match words to create compound words. */
    var reWords = (function() {
      var upper = '[A-Z\\xc0-\\xd6\\xd8-\\xde]',
          lower = '[a-z\\xdf-\\xf6\\xf8-\\xff]+';
  
      return RegExp(upper + '+(?=' + upper + lower + ')|' + upper + '?' + lower + '|' + upper + '+|[0-9]+', 'g');
    }());
  
    /** Used to assign default `context` object properties. */
    var contextProps = [
      'Array', 'ArrayBuffer', 'Date', 'Error', 'Float32Array', 'Float64Array',
      'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Math', 'Number',
      'Object', 'RegExp', 'Set', 'String', '_', 'clearTimeout', 'isFinite',
      'parseFloat', 'parseInt', 'setTimeout', 'TypeError', 'Uint8Array',
      'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap'
    ];
  
    /** Used to make template sourceURLs easier to identify. */
    var templateCounter = -1;
  
    /** Used to identify `toStringTag` values of typed arrays. */
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
    typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
    typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
    typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
    typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
    typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
    typedArrayTags[dateTag] = typedArrayTags[errorTag] =
    typedArrayTags[funcTag] = typedArrayTags[mapTag] =
    typedArrayTags[numberTag] = typedArrayTags[objectTag] =
    typedArrayTags[regexpTag] = typedArrayTags[setTag] =
    typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
  
    /** Used to identify `toStringTag` values supported by `_.clone`. */
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] =
    cloneableTags[arrayBufferTag] = cloneableTags[boolTag] =
    cloneableTags[dateTag] = cloneableTags[float32Tag] =
    cloneableTags[float64Tag] = cloneableTags[int8Tag] =
    cloneableTags[int16Tag] = cloneableTags[int32Tag] =
    cloneableTags[numberTag] = cloneableTags[objectTag] =
    cloneableTags[regexpTag] = cloneableTags[stringTag] =
    cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
    cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] =
    cloneableTags[mapTag] = cloneableTags[setTag] =
    cloneableTags[weakMapTag] = false;
  
    /** Used to map latin-1 supplementary letters to basic latin letters. */
    var deburredLetters = {
      '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
      '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
      '\xc7': 'C',  '\xe7': 'c',
      '\xd0': 'D',  '\xf0': 'd',
      '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
      '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
      '\xcC': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
      '\xeC': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
      '\xd1': 'N',  '\xf1': 'n',
      '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
      '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
      '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
      '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
      '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
      '\xc6': 'Ae', '\xe6': 'ae',
      '\xde': 'Th', '\xfe': 'th',
      '\xdf': 'ss'
    };
  
    /** Used to map characters to HTML entities. */
    var htmlEscapes = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      '`': '&#96;'
    };
  
    /** Used to map HTML entities to characters. */
    var htmlUnescapes = {
      '&amp;': '&',
      '&lt;': '<',
      '&gt;': '>',
      '&quot;': '"',
      '&#39;': "'",
      '&#96;': '`'
    };
  
    /** Used to determine if values are of the language type `Object`. */
    var objectTypes = {
      'function': true,
      'object': true
    };
  
    /** Used to escape characters for inclusion in compiled regexes. */
    var regexpEscapes = {
      '0': 'x30', '1': 'x31', '2': 'x32', '3': 'x33', '4': 'x34',
      '5': 'x35', '6': 'x36', '7': 'x37', '8': 'x38', '9': 'x39',
      'A': 'x41', 'B': 'x42', 'C': 'x43', 'D': 'x44', 'E': 'x45', 'F': 'x46',
      'a': 'x61', 'b': 'x62', 'c': 'x63', 'd': 'x64', 'e': 'x65', 'f': 'x66',
      'n': 'x6e', 'r': 'x72', 't': 'x74', 'u': 'x75', 'v': 'x76', 'x': 'x78'
    };
  
    /** Used to escape characters for inclusion in compiled string literals. */
    var stringEscapes = {
      '\\': '\\',
      "'": "'",
      '\n': 'n',
      '\r': 'r',
      '\u2028': 'u2028',
      '\u2029': 'u2029'
    };
  
    /** Detect free variable `exports`. */
    var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;
  
    /** Detect free variable `module`. */
    var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;
  
    /** Detect free variable `global` from Node.js. */
    var freeGlobal = freeExports && freeModule && typeof global == 'object' && global && global.Object && global;
  
    /** Detect free variable `self`. */
    var freeSelf = objectTypes[typeof self] && self && self.Object && self;
  
    /** Detect free variable `window`. */
    var freeWindow = objectTypes[typeof window] && window && window.Object && window;
  
    /** Detect the popular CommonJS extension `module.exports`. */
    var moduleExports = freeModule && freeModule.exports === freeExports && freeExports;
  
    /**
     * Used as a reference to the global object.
     *
     * The `this` value is used if it's the global object to avoid Greasemonkey's
     * restricted `window` object, otherwise the `window` object is used.
     */
    var root = freeGlobal || ((freeWindow !== (this && this.window)) && freeWindow) || freeSelf || this;
  
    /*--------------------------------------------------------------------------*/
  
    /**
     * The base implementation of `compareAscending` which compares values and
     * sorts them in ascending order without guaranteeing a stable sort.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {number} Returns the sort order indicator for `value`.
     */
    function baseCompareAscending(value, other) {
      if (value !== other) {
        var valIsNull = value === null,
            valIsUndef = value === undefined,
            valIsReflexive = value === value;
  
        var othIsNull = other === null,
            othIsUndef = other === undefined,
            othIsReflexive = other === other;
  
        if ((value > other && !othIsNull) || !valIsReflexive ||
            (valIsNull && !othIsUndef && othIsReflexive) ||
            (valIsUndef && othIsReflexive)) {
          return 1;
        }
        if ((value < other && !valIsNull) || !othIsReflexive ||
            (othIsNull && !valIsUndef && valIsReflexive) ||
            (othIsUndef && valIsReflexive)) {
          return -1;
        }
      }
      return 0;
    }
  
    /**
     * The base implementation of `_.findIndex` and `_.findLastIndex` without
     * support for callback shorthands and `this` binding.
     *
     * @private
     * @param {Array} array The array to search.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function baseFindIndex(array, predicate, fromRight) {
      var length = array.length,
          index = fromRight ? length : -1;
  
      while ((fromRight ? index-- : ++index < length)) {
        if (predicate(array[index], index, array)) {
          return index;
        }
      }
      return -1;
    }
  
    /**
     * The base implementation of `_.indexOf` without support for binary searches.
     *
     * @private
     * @param {Array} array The array to search.
     * @param {*} value The value to search for.
     * @param {number} fromIndex The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function baseIndexOf(array, value, fromIndex) {
      if (value !== value) {
        return indexOfNaN(array, fromIndex);
      }
      var index = fromIndex - 1,
          length = array.length;
  
      while (++index < length) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }
  
    /**
     * The base implementation of `_.isFunction` without support for environments
     * with incorrect `typeof` results.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
     */
    function baseIsFunction(value) {
      // Avoid a Chakra JIT bug in compatibility modes of IE 11.
      // See https://github.com/jashkenas/underscore/issues/1621 for more details.
      return typeof value == 'function' || false;
    }
  
    /**
     * Converts `value` to a string if it's not one. An empty string is returned
     * for `null` or `undefined` values.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */
    function baseToString(value) {
      return value == null ? '' : (value + '');
    }
  
    /**
     * Used by `_.trim` and `_.trimLeft` to get the index of the first character
     * of `string` that is not found in `chars`.
     *
     * @private
     * @param {string} string The string to inspect.
     * @param {string} chars The characters to find.
     * @returns {number} Returns the index of the first character not found in `chars`.
     */
    function charsLeftIndex(string, chars) {
      var index = -1,
          length = string.length;
  
      while (++index < length && chars.indexOf(string.charAt(index)) > -1) {}
      return index;
    }
  
    /**
     * Used by `_.trim` and `_.trimRight` to get the index of the last character
     * of `string` that is not found in `chars`.
     *
     * @private
     * @param {string} string The string to inspect.
     * @param {string} chars The characters to find.
     * @returns {number} Returns the index of the last character not found in `chars`.
     */
    function charsRightIndex(string, chars) {
      var index = string.length;
  
      while (index-- && chars.indexOf(string.charAt(index)) > -1) {}
      return index;
    }
  
    /**
     * Used by `_.sortBy` to compare transformed elements of a collection and stable
     * sort them in ascending order.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @returns {number} Returns the sort order indicator for `object`.
     */
    function compareAscending(object, other) {
      return baseCompareAscending(object.criteria, other.criteria) || (object.index - other.index);
    }
  
    /**
     * Used by `_.sortByOrder` to compare multiple properties of a value to another
     * and stable sort them.
     *
     * If `orders` is unspecified, all valuess are sorted in ascending order. Otherwise,
     * a value is sorted in ascending order if its corresponding order is "asc", and
     * descending if "desc".
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {boolean[]} orders The order to sort by for each property.
     * @returns {number} Returns the sort order indicator for `object`.
     */
    function compareMultiple(object, other, orders) {
      var index = -1,
          objCriteria = object.criteria,
          othCriteria = other.criteria,
          length = objCriteria.length,
          ordersLength = orders.length;
  
      while (++index < length) {
        var result = baseCompareAscending(objCriteria[index], othCriteria[index]);
        if (result) {
          if (index >= ordersLength) {
            return result;
          }
          var order = orders[index];
          return result * ((order === 'asc' || order === true) ? 1 : -1);
        }
      }
      // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
      // that causes it, under certain circumstances, to provide the same value for
      // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
      // for more details.
      //
      // This also ensures a stable sort in V8 and other engines.
      // See https://code.google.com/p/v8/issues/detail?id=90 for more details.
      return object.index - other.index;
    }
  
    /**
     * Used by `_.deburr` to convert latin-1 supplementary letters to basic latin letters.
     *
     * @private
     * @param {string} letter The matched letter to deburr.
     * @returns {string} Returns the deburred letter.
     */
    function deburrLetter(letter) {
      return deburredLetters[letter];
    }
  
    /**
     * Used by `_.escape` to convert characters to HTML entities.
     *
     * @private
     * @param {string} chr The matched character to escape.
     * @returns {string} Returns the escaped character.
     */
    function escapeHtmlChar(chr) {
      return htmlEscapes[chr];
    }
  
    /**
     * Used by `_.escapeRegExp` to escape characters for inclusion in compiled regexes.
     *
     * @private
     * @param {string} chr The matched character to escape.
     * @param {string} leadingChar The capture group for a leading character.
     * @param {string} whitespaceChar The capture group for a whitespace character.
     * @returns {string} Returns the escaped character.
     */
    function escapeRegExpChar(chr, leadingChar, whitespaceChar) {
      if (leadingChar) {
        chr = regexpEscapes[chr];
      } else if (whitespaceChar) {
        chr = stringEscapes[chr];
      }
      return '\\' + chr;
    }
  
    /**
     * Used by `_.template` to escape characters for inclusion in compiled string literals.
     *
     * @private
     * @param {string} chr The matched character to escape.
     * @returns {string} Returns the escaped character.
     */
    function escapeStringChar(chr) {
      return '\\' + stringEscapes[chr];
    }
  
    /**
     * Gets the index at which the first occurrence of `NaN` is found in `array`.
     *
     * @private
     * @param {Array} array The array to search.
     * @param {number} fromIndex The index to search from.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {number} Returns the index of the matched `NaN`, else `-1`.
     */
    function indexOfNaN(array, fromIndex, fromRight) {
      var length = array.length,
          index = fromIndex + (fromRight ? 0 : -1);
  
      while ((fromRight ? index-- : ++index < length)) {
        var other = array[index];
        if (other !== other) {
          return index;
        }
      }
      return -1;
    }
  
    /**
     * Checks if `value` is object-like.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     */
    function isObjectLike(value) {
      return !!value && typeof value == 'object';
    }
  
    /**
     * Used by `trimmedLeftIndex` and `trimmedRightIndex` to determine if a
     * character code is whitespace.
     *
     * @private
     * @param {number} charCode The character code to inspect.
     * @returns {boolean} Returns `true` if `charCode` is whitespace, else `false`.
     */
    function isSpace(charCode) {
      return ((charCode <= 160 && (charCode >= 9 && charCode <= 13) || charCode == 32 || charCode == 160) || charCode == 5760 || charCode == 6158 ||
        (charCode >= 8192 && (charCode <= 8202 || charCode == 8232 || charCode == 8233 || charCode == 8239 || charCode == 8287 || charCode == 12288 || charCode == 65279)));
    }
  
    /**
     * Replaces all `placeholder` elements in `array` with an internal placeholder
     * and returns an array of their indexes.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {*} placeholder The placeholder to replace.
     * @returns {Array} Returns the new array of placeholder indexes.
     */
    function replaceHolders(array, placeholder) {
      var index = -1,
          length = array.length,
          resIndex = -1,
          result = [];
  
      while (++index < length) {
        if (array[index] === placeholder) {
          array[index] = PLACEHOLDER;
          result[++resIndex] = index;
        }
      }
      return result;
    }
  
    /**
     * An implementation of `_.uniq` optimized for sorted arrays without support
     * for callback shorthands and `this` binding.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The function invoked per iteration.
     * @returns {Array} Returns the new duplicate-value-free array.
     */
    function sortedUniq(array, iteratee) {
      var seen,
          index = -1,
          length = array.length,
          resIndex = -1,
          result = [];
  
      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value, index, array) : value;
  
        if (!index || seen !== computed) {
          seen = computed;
          result[++resIndex] = value;
        }
      }
      return result;
    }
  
    /**
     * Used by `_.trim` and `_.trimLeft` to get the index of the first non-whitespace
     * character of `string`.
     *
     * @private
     * @param {string} string The string to inspect.
     * @returns {number} Returns the index of the first non-whitespace character.
     */
    function trimmedLeftIndex(string) {
      var index = -1,
          length = string.length;
  
      while (++index < length && isSpace(string.charCodeAt(index))) {}
      return index;
    }
  
    /**
     * Used by `_.trim` and `_.trimRight` to get the index of the last non-whitespace
     * character of `string`.
     *
     * @private
     * @param {string} string The string to inspect.
     * @returns {number} Returns the index of the last non-whitespace character.
     */
    function trimmedRightIndex(string) {
      var index = string.length;
  
      while (index-- && isSpace(string.charCodeAt(index))) {}
      return index;
    }
  
    /**
     * Used by `_.unescape` to convert HTML entities to characters.
     *
     * @private
     * @param {string} chr The matched character to unescape.
     * @returns {string} Returns the unescaped character.
     */
    function unescapeHtmlChar(chr) {
      return htmlUnescapes[chr];
    }
  
    /*--------------------------------------------------------------------------*/
  
    /**
     * Create a new pristine `lodash` function using the given `context` object.
     *
     * @static
     * @memberOf _
     * @category Utility
     * @param {Object} [context=root] The context object.
     * @returns {Function} Returns a new `lodash` function.
     * @example
     *
     * _.mixin({ 'foo': _.constant('foo') });
     *
     * var lodash = _.runInContext();
     * lodash.mixin({ 'bar': lodash.constant('bar') });
     *
     * _.isFunction(_.foo);
     * // => true
     * _.isFunction(_.bar);
     * // => false
     *
     * lodash.isFunction(lodash.foo);
     * // => false
     * lodash.isFunction(lodash.bar);
     * // => true
     *
     * // using `context` to mock `Date#getTime` use in `_.now`
     * var mock = _.runInContext({
     *   'Date': function() {
     *     return { 'getTime': getTimeMock };
     *   }
     * });
     *
     * // or creating a suped-up `defer` in Node.js
     * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
     */
    function runInContext(context) {
      // Avoid issues with some ES3 environments that attempt to use values, named
      // after built-in constructors like `Object`, for the creation of literals.
      // ES5 clears this up by stating that literals must use built-in constructors.
      // See https://es5.github.io/#x11.1.5 for more details.
      context = context ? _.defaults(root.Object(), context, _.pick(root, contextProps)) : root;
  
      /** Native constructor references. */
      var Array = context.Array,
          Date = context.Date,
          Error = context.Error,
          Function = context.Function,
          Math = context.Math,
          Number = context.Number,
          Object = context.Object,
          RegExp = context.RegExp,
          String = context.String,
          TypeError = context.TypeError;
  
      /** Used for native method references. */
      var arrayProto = Array.prototype,
          objectProto = Object.prototype,
          stringProto = String.prototype;
  
      /** Used to resolve the decompiled source of functions. */
      var fnToString = Function.prototype.toString;
  
      /** Used to check objects for own properties. */
      var hasOwnProperty = objectProto.hasOwnProperty;
  
      /** Used to generate unique IDs. */
      var idCounter = 0;
  
      /**
       * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
       * of values.
       */
      var objToString = objectProto.toString;
  
      /** Used to restore the original `_` reference in `_.noConflict`. */
      var oldDash = root._;
  
      /** Used to detect if a method is native. */
      var reIsNative = RegExp('^' +
        fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
      );
  
      /** Native method references. */
      var ArrayBuffer = context.ArrayBuffer,
          clearTimeout = context.clearTimeout,
          parseFloat = context.parseFloat,
          pow = Math.pow,
          propertyIsEnumerable = objectProto.propertyIsEnumerable,
          Set = getNative(context, 'Set'),
          setTimeout = context.setTimeout,
          splice = arrayProto.splice,
          Uint8Array = context.Uint8Array,
          WeakMap = getNative(context, 'WeakMap');
  
      /* Native method references for those with the same name as other `lodash` methods. */
      var nativeCeil = Math.ceil,
          nativeCreate = getNative(Object, 'create'),
          nativeFloor = Math.floor,
          nativeIsArray = getNative(Array, 'isArray'),
          nativeIsFinite = context.isFinite,
          nativeKeys = getNative(Object, 'keys'),
          nativeMax = Math.max,
          nativeMin = Math.min,
          nativeNow = getNative(Date, 'now'),
          nativeParseInt = context.parseInt,
          nativeRandom = Math.random;
  
      /** Used as references for `-Infinity` and `Infinity`. */
      var NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY,
          POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
  
      /** Used as references for the maximum length and index of an array. */
      var MAX_ARRAY_LENGTH = 4294967295,
          MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
          HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
  
      /**
       * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
       * of an array-like value.
       */
      var MAX_SAFE_INTEGER = 9007199254740991;
  
      /** Used to store function metadata. */
      var metaMap = WeakMap && new WeakMap;
  
      /** Used to lookup unminified function names. */
      var realNames = {};
  
      /*------------------------------------------------------------------------*/
  
      /**
       * Creates a `lodash` object which wraps `value` to enable implicit chaining.
       * Methods that operate on and return arrays, collections, and functions can
       * be chained together. Methods that retrieve a single value or may return a
       * primitive value will automatically end the chain returning the unwrapped
       * value. Explicit chaining may be enabled using `_.chain`. The execution of
       * chained methods is lazy, that is, execution is deferred until `_#value`
       * is implicitly or explicitly called.
       *
       * Lazy evaluation allows several methods to support shortcut fusion. Shortcut
       * fusion is an optimization strategy which merge iteratee calls; this can help
       * to avoid the creation of intermediate data structures and greatly reduce the
       * number of iteratee executions.
       *
       * Chaining is supported in custom builds as long as the `_#value` method is
       * directly or indirectly included in the build.
       *
       * In addition to lodash methods, wrappers have `Array` and `String` methods.
       *
       * The wrapper `Array` methods are:
       * `concat`, `join`, `pop`, `push`, `reverse`, `shift`, `slice`, `sort`,
       * `splice`, and `unshift`
       *
       * The wrapper `String` methods are:
       * `replace` and `split`
       *
       * The wrapper methods that support shortcut fusion are:
       * `compact`, `drop`, `dropRight`, `dropRightWhile`, `dropWhile`, `filter`,
       * `first`, `initial`, `last`, `map`, `pluck`, `reject`, `rest`, `reverse`,
       * `slice`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, `toArray`,
       * and `where`
       *
       * The chainable wrapper methods are:
       * `after`, `ary`, `assign`, `at`, `before`, `bind`, `bindAll`, `bindKey`,
       * `callback`, `chain`, `chunk`, `commit`, `compact`, `concat`, `constant`,
       * `countBy`, `create`, `curry`, `debounce`, `defaults`, `defaultsDeep`,
       * `defer`, `delay`, `difference`, `drop`, `dropRight`, `dropRightWhile`,
       * `dropWhile`, `fill`, `filter`, `flatten`, `flattenDeep`, `flow`, `flowRight`,
       * `forEach`, `forEachRight`, `forIn`, `forInRight`, `forOwn`, `forOwnRight`,
       * `functions`, `groupBy`, `indexBy`, `initial`, `intersection`, `invert`,
       * `invoke`, `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`,
       * `matchesProperty`, `memoize`, `merge`, `method`, `methodOf`, `mixin`,
       * `modArgs`, `negate`, `omit`, `once`, `pairs`, `partial`, `partialRight`,
       * `partition`, `pick`, `plant`, `pluck`, `property`, `propertyOf`, `pull`,
       * `pullAt`, `push`, `range`, `rearg`, `reject`, `remove`, `rest`, `restParam`,
       * `reverse`, `set`, `shuffle`, `slice`, `sort`, `sortBy`, `sortByAll`,
       * `sortByOrder`, `splice`, `spread`, `take`, `takeRight`, `takeRightWhile`,
       * `takeWhile`, `tap`, `throttle`, `thru`, `times`, `toArray`, `toPlainObject`,
       * `transform`, `union`, `uniq`, `unshift`, `unzip`, `unzipWith`, `values`,
       * `valuesIn`, `where`, `without`, `wrap`, `xor`, `zip`, `zipObject`, `zipWith`
       *
       * The wrapper methods that are **not** chainable by default are:
       * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clone`, `cloneDeep`,
       * `deburr`, `endsWith`, `escape`, `escapeRegExp`, `every`, `find`, `findIndex`,
       * `findKey`, `findLast`, `findLastIndex`, `findLastKey`, `findWhere`, `first`,
       * `floor`, `get`, `gt`, `gte`, `has`, `identity`, `includes`, `indexOf`,
       * `inRange`, `isArguments`, `isArray`, `isBoolean`, `isDate`, `isElement`,
       * `isEmpty`, `isEqual`, `isError`, `isFinite` `isFunction`, `isMatch`,
       * `isNative`, `isNaN`, `isNull`, `isNumber`, `isObject`, `isPlainObject`,
       * `isRegExp`, `isString`, `isUndefined`, `isTypedArray`, `join`, `kebabCase`,
       * `last`, `lastIndexOf`, `lt`, `lte`, `max`, `min`, `noConflict`, `noop`,
       * `now`, `pad`, `padLeft`, `padRight`, `parseInt`, `pop`, `random`, `reduce`,
       * `reduceRight`, `repeat`, `result`, `round`, `runInContext`, `shift`, `size`,
       * `snakeCase`, `some`, `sortedIndex`, `sortedLastIndex`, `startCase`,
       * `startsWith`, `sum`, `template`, `trim`, `trimLeft`, `trimRight`, `trunc`,
       * `unescape`, `uniqueId`, `value`, and `words`
       *
       * The wrapper method `sample` will return a wrapped value when `n` is provided,
       * otherwise an unwrapped value is returned.
       *
       * @name _
       * @constructor
       * @category Chain
       * @param {*} value The value to wrap in a `lodash` instance.
       * @returns {Object} Returns the new `lodash` wrapper instance.
       * @example
       *
       * var wrapped = _([1, 2, 3]);
       *
       * // returns an unwrapped value
       * wrapped.reduce(function(total, n) {
       *   return total + n;
       * });
       * // => 6
       *
       * // returns a wrapped value
       * var squares = wrapped.map(function(n) {
       *   return n * n;
       * });
       *
       * _.isArray(squares);
       * // => false
       *
       * _.isArray(squares.value());
       * // => true
       */
      function lodash(value) {
        if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
          if (value instanceof LodashWrapper) {
            return value;
          }
          if (hasOwnProperty.call(value, '__chain__') && hasOwnProperty.call(value, '__wrapped__')) {
            return wrapperClone(value);
          }
        }
        return new LodashWrapper(value);
      }
  
      /**
       * The function whose prototype all chaining wrappers inherit from.
       *
       * @private
       */
      function baseLodash() {
        // No operation performed.
      }
  
      /**
       * The base constructor for creating `lodash` wrapper objects.
       *
       * @private
       * @param {*} value The value to wrap.
       * @param {boolean} [chainAll] Enable chaining for all wrapper methods.
       * @param {Array} [actions=[]] Actions to peform to resolve the unwrapped value.
       */
      function LodashWrapper(value, chainAll, actions) {
        this.__wrapped__ = value;
        this.__actions__ = actions || [];
        this.__chain__ = !!chainAll;
      }
  
      /**
       * An object environment feature flags.
       *
       * @static
       * @memberOf _
       * @type Object
       */
      var support = lodash.support = {};
  
      /**
       * By default, the template delimiters used by lodash are like those in
       * embedded Ruby (ERB). Change the following template settings to use
       * alternative delimiters.
       *
       * @static
       * @memberOf _
       * @type Object
       */
      lodash.templateSettings = {
  
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type RegExp
         */
        'escape': reEscape,
  
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type RegExp
         */
        'evaluate': reEvaluate,
  
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type RegExp
         */
        'interpolate': reInterpolate,
  
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type string
         */
        'variable': '',
  
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type Object
         */
        'imports': {
  
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type Function
           */
          '_': lodash
        }
      };
  
      /*------------------------------------------------------------------------*/
  
      /**
       * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
       *
       * @private
       * @param {*} value The value to wrap.
       */
      function LazyWrapper(value) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__dir__ = 1;
        this.__filtered__ = false;
        this.__iteratees__ = [];
        this.__takeCount__ = POSITIVE_INFINITY;
        this.__views__ = [];
      }
  
      /**
       * Creates a clone of the lazy wrapper object.
       *
       * @private
       * @name clone
       * @memberOf LazyWrapper
       * @returns {Object} Returns the cloned `LazyWrapper` object.
       */
      function lazyClone() {
        var result = new LazyWrapper(this.__wrapped__);
        result.__actions__ = arrayCopy(this.__actions__);
        result.__dir__ = this.__dir__;
        result.__filtered__ = this.__filtered__;
        result.__iteratees__ = arrayCopy(this.__iteratees__);
        result.__takeCount__ = this.__takeCount__;
        result.__views__ = arrayCopy(this.__views__);
        return result;
      }
  
      /**
       * Reverses the direction of lazy iteration.
       *
       * @private
       * @name reverse
       * @memberOf LazyWrapper
       * @returns {Object} Returns the new reversed `LazyWrapper` object.
       */
      function lazyReverse() {
        if (this.__filtered__) {
          var result = new LazyWrapper(this);
          result.__dir__ = -1;
          result.__filtered__ = true;
        } else {
          result = this.clone();
          result.__dir__ *= -1;
        }
        return result;
      }
  
      /**
       * Extracts the unwrapped value from its lazy wrapper.
       *
       * @private
       * @name value
       * @memberOf LazyWrapper
       * @returns {*} Returns the unwrapped value.
       */
      function lazyValue() {
        var array = this.__wrapped__.value(),
            dir = this.__dir__,
            isArr = isArray(array),
            isRight = dir < 0,
            arrLength = isArr ? array.length : 0,
            view = getView(0, arrLength, this.__views__),
            start = view.start,
            end = view.end,
            length = end - start,
            index = isRight ? end : (start - 1),
            iteratees = this.__iteratees__,
            iterLength = iteratees.length,
            resIndex = 0,
            takeCount = nativeMin(length, this.__takeCount__);
  
        if (!isArr || arrLength < LARGE_ARRAY_SIZE || (arrLength == length && takeCount == length)) {
          return baseWrapperValue((isRight && isArr) ? array.reverse() : array, this.__actions__);
        }
        var result = [];
  
        outer:
        while (length-- && resIndex < takeCount) {
          index += dir;
  
          var iterIndex = -1,
              value = array[index];
  
          while (++iterIndex < iterLength) {
            var data = iteratees[iterIndex],
                iteratee = data.iteratee,
                type = data.type,
                computed = iteratee(value);
  
            if (type == LAZY_MAP_FLAG) {
              value = computed;
            } else if (!computed) {
              if (type == LAZY_FILTER_FLAG) {
                continue outer;
              } else {
                break outer;
              }
            }
          }
          result[resIndex++] = value;
        }
        return result;
      }
  
      /*------------------------------------------------------------------------*/
  
      /**
       * Creates a cache object to store key/value pairs.
       *
       * @private
       * @static
       * @name Cache
       * @memberOf _.memoize
       */
      function MapCache() {
        this.__data__ = {};
      }
  
      /**
       * Removes `key` and its value from the cache.
       *
       * @private
       * @name delete
       * @memberOf _.memoize.Cache
       * @param {string} key The key of the value to remove.
       * @returns {boolean} Returns `true` if the entry was removed successfully, else `false`.
       */
      function mapDelete(key) {
        return this.has(key) && delete this.__data__[key];
      }
  
      /**
       * Gets the cached value for `key`.
       *
       * @private
       * @name get
       * @memberOf _.memoize.Cache
       * @param {string} key The key of the value to get.
       * @returns {*} Returns the cached value.
       */
      function mapGet(key) {
        return key == '__proto__' ? undefined : this.__data__[key];
      }
  
      /**
       * Checks if a cached value for `key` exists.
       *
       * @private
       * @name has
       * @memberOf _.memoize.Cache
       * @param {string} key The key of the entry to check.
       * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
       */
      function mapHas(key) {
        return key != '__proto__' && hasOwnProperty.call(this.__data__, key);
      }
  
      /**
       * Sets `value` to `key` of the cache.
       *
       * @private
       * @name set
       * @memberOf _.memoize.Cache
       * @param {string} key The key of the value to cache.
       * @param {*} value The value to cache.
       * @returns {Object} Returns the cache object.
       */
      function mapSet(key, value) {
        if (key != '__proto__') {
          this.__data__[key] = value;
        }
        return this;
      }
  
      /*------------------------------------------------------------------------*/
  
      /**
       *
       * Creates a cache object to store unique values.
       *
       * @private
       * @param {Array} [values] The values to cache.
       */
      function SetCache(values) {
        var length = values ? values.length : 0;
  
        this.data = { 'hash': nativeCreate(null), 'set': new Set };
        while (length--) {
          this.push(values[length]);
        }
      }
  
      /**
       * Checks if `value` is in `cache` mimicking the return signature of
       * `_.indexOf` by returning `0` if the value is found, else `-1`.
       *
       * @private
       * @param {Object} cache The cache to search.
       * @param {*} value The value to search for.
       * @returns {number} Returns `0` if `value` is found, else `-1`.
       */
      function cacheIndexOf(cache, value) {
        var data = cache.data,
            result = (typeof value == 'string' || isObject(value)) ? data.set.has(value) : data.hash[value];
  
        return result ? 0 : -1;
      }
  
      /**
       * Adds `value` to the cache.
       *
       * @private
       * @name push
       * @memberOf SetCache
       * @param {*} value The value to cache.
       */
      function cachePush(value) {
        var data = this.data;
        if (typeof value == 'string' || isObject(value)) {
          data.set.add(value);
        } else {
          data.hash[value] = true;
        }
      }
  
      /*------------------------------------------------------------------------*/
  
      /**
       * Creates a new array joining `array` with `other`.
       *
       * @private
       * @param {Array} array The array to join.
       * @param {Array} other The other array to join.
       * @returns {Array} Returns the new concatenated array.
       */
      function arrayConcat(array, other) {
        var index = -1,
            length = array.length,
            othIndex = -1,
            othLength = other.length,
            result = Array(length + othLength);
  
        while (++index < length) {
          result[index] = array[index];
        }
        while (++othIndex < othLength) {
          result[index++] = other[othIndex];
        }
        return result;
      }
  
      /**
       * Copies the values of `source` to `array`.
       *
       * @private
       * @param {Array} source The array to copy values from.
       * @param {Array} [array=[]] The array to copy values to.
       * @returns {Array} Returns `array`.
       */
      function arrayCopy(source, array) {
        var index = -1,
            length = source.length;
  
        array || (array = Array(length));
        while (++index < length) {
          array[index] = source[index];
        }
        return array;
      }
  
      /**
       * A specialized version of `_.forEach` for arrays without support for callback
       * shorthands and `this` binding.
       *
       * @private
       * @param {Array} array The array to iterate over.
       * @param {Function} iteratee The function invoked per iteration.
       * @returns {Array} Returns `array`.
       */
      function arrayEach(array, iteratee) {
        var index = -1,
            length = array.length;
  
        while (++index < length) {
          if (iteratee(array[index], index, array) === false) {
            break;
          }
        }
        return array;
      }
  
      /**
       * A specialized version of `_.forEachRight` for arrays without support for
       * callback shorthands and `this` binding.
       *
       * @private
       * @param {Array} array The array to iterate over.
       * @param {Function} iteratee The function invoked per iteration.
       * @returns {Array} Returns `array`.
       */
      function arrayEachRight(array, iteratee) {
        var length = array.length;
  
        while (length--) {
          if (iteratee(array[length], length, array) === false) {
            break;
          }
        }
        return array;
      }
  
      /**
       * A specialized version of `_.every` for arrays without support for callback
       * shorthands and `this` binding.
       *
       * @private
       * @param {Array} array The array to iterate over.
       * @param {Function} predicate The function invoked per iteration.
       * @returns {boolean} Returns `true` if all elements pass the predicate check,
       *  else `false`.
       */
      function arrayEvery(array, predicate) {
        var index = -1,
            length = array.length;
  
        while (++index < length) {
          if (!predicate(array[index], index, array)) {
            return false;
          }
        }
        return true;
      }
  
      /**
       * A specialized version of `baseExtremum` for arrays which invokes `iteratee`
       * with one argument: (value).
       *
       * @private
       * @param {Array} array The array to iterate over.
       * @param {Function} iteratee The function invoked per iteration.
       * @param {Function} comparator The function used to compare values.
       * @param {*} exValue The initial extremum value.
       * @returns {*} Returns the extremum value.
       */
      function arrayExtremum(array, iteratee, comparator, exValue) {
        var index = -1,
            length = array.length,
            computed = exValue,
            result = computed;
  
        while (++index < length) {
          var value = array[index],
              current = +iteratee(value);
  
          if (comparator(current, computed)) {
            computed = current;
            result = value;
          }
        }
        return result;
      }
  
      /**
       * A specialized version of `_.filter` for arrays without support for callback
       * shorthands and `this` binding.
       *
       * @private
       * @param {Array} array The array to iterate over.
       * @param {Function} predicate The function invoked per iteration.
       * @returns {Array} Returns the new filtered array.
       */
      function arrayFilter(array, predicate) {
        var index = -1,
            length = array.length,
            resIndex = -1,
            result = [];
  
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[++resIndex] = value;
          }
        }
        return result;
      }
  
      /**
       * A specialized version of `_.map` for arrays without support for callback
       * shorthands and `this` binding.
       *
       * @private
       * @param {Array} array The array to iterate over.
       * @param {Function} iteratee The function invoked per iteration.
       * @returns {Array} Returns the new mapped array.
       */
      function arrayMap(array, iteratee) {
        var index = -1,
            length = array.length,
            result = Array(length);
  
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
  
      /**
       * Appends the elements of `values` to `array`.
       *
       * @private
       * @param {Array} array The array to modify.
       * @param {Array} values The values to append.
       * @returns {Array} Returns `array`.
       */
      function arrayPush(array, values) {
        var index = -1,
            length = values.length,
            offset = array.length;
  
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
  
      /**
       * A specialized version of `_.reduce` for arrays without support for callback
       * shorthands and `this` binding.
       *
       * @private
       * @param {Array} array The array to iterate over.
       * @param {Function} iteratee The function invoked per iteration.
       * @param {*} [accumulator] The initial value.
       * @param {boolean} [initFromArray] Specify using the first element of `array`
       *  as the initial value.
       * @returns {*} Returns the accumulated value.
       */
      function arrayReduce(array, iteratee, accumulator, initFromArray) {
        var index = -1,
            length = array.length;
  
        if (initFromArray && length) {
          accumulator = array[++index];
        }
        while (++index < length) {
          accumulator = iteratee(accumulator, array[index], index, array);
        }
        return accumulator;
      }
  
      /**
       * A specialized version of `_.reduceRight` for arrays without support for
       * callback shorthands and `this` binding.
       *
       * @private
       * @param {Array} array The array to iterate over.
       * @param {Function} iteratee The function invoked per iteration.
       * @param {*} [accumulator] The initial value.
       * @param {boolean} [initFromArray] Specify using the last element of `array`
       *  as the initial value.
       * @returns {*} Returns the accumulated value.
       */
      function arrayReduceRight(array, iteratee, accumulator, initFromArray) {
        var length = array.length;
        if (initFromArray && length) {
          accumulator = array[--length];
        }
        while (length--) {
          accumulator = iteratee(accumulator, array[length], length, array);
        }
        return accumulator;
      }
  
      /**
       * A specialized version of `_.some` for arrays without support for callback
       * shorthands and `this` binding.
       *
       * @private
       * @param {Array} array The array to iterate over.
       * @param {Function} predicate The function invoked per iteration.
       * @returns {boolean} Returns `true` if any element passes the predicate check,
       *  else `false`.
       */
      function arraySome(array, predicate) {
        var index = -1,
            length = array.length;
  
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
  
      /**
       * A specialized version of `_.sum` for arrays without support for callback
       * shorthands and `this` binding..
       *
       * @private
       * @param {Array} array The array to iterate over.
       * @param {Function} iteratee The function invoked per iteration.
       * @returns {number} Returns the sum.
       */
      function arraySum(array, iteratee) {
        var length = array.length,
            result = 0;
  
        while (length--) {
          result += +iteratee(array[length]) || 0;
        }
        return result;
      }
  
      /**
       * Used by `_.defaults` to customize its `_.assign` use.
       *
       * @private
       * @param {*} objectValue The destination object property value.
       * @param {*} sourceValue The source object property value.
       * @returns {*} Returns the value to assign to the destination object.
       */
      function assignDefaults(objectValue, sourceValue) {
        return objectValue === undefined ? sourceValue : objectValue;
      }
  
      /**
       * Used by `_.template` to customize its `_.assign` use.
       *
       * **Note:** This function is like `assignDefaults` except that it ignores
       * inherited property values when checking if a property is `undefined`.
       *
       * @private
       * @param {*} objectValue The destination object property value.
       * @param {*} sourceValue The source object property value.
       * @param {string} key The key associated with the object and source values.
       * @param {Object} object The destination object.
       * @returns {*} Returns the value to assign to the destination object.
       */
      function assignOwnDefaults(objectValue, sourceValue, key, object) {
        return (objectValue === undefined || !hasOwnProperty.call(object, key))
          ? sourceValue
          : objectValue;
      }
  
      /**
       * A specialized version of `_.assign` for customizing assigned values without
       * support for argument juggling, multiple sources, and `this` binding `customizer`
       * functions.
       *
       * @private
       * @param {Object} object The destination object.
       * @param {Object} source The source object.
       * @param {Function} customizer The function to customize assigned values.
       * @returns {Object} Returns `object`.
       */
      function assignWith(object, source, customizer) {
        var index = -1,
            props = keys(source),
            length = props.length;
  
        while (++index < length) {
          var key = props[index],
              value = object[key],
              result = customizer(value, source[key], key, object, source);
  
          if ((result === result ? (result !== value) : (value === value)) ||
              (value === undefined && !(key in object))) {
            object[key] = result;
          }
        }
        return object;
      }
  
      /**
       * The base implementation of `_.assign` without support for argument juggling,
       * multiple sources, and `customizer` functions.
       *
       * @private
       * @param {Object} object The destination object.
       * @param {Object} source The source object.
       * @returns {Object} Returns `object`.
       */
      function baseAssign(object, source) {
        return source == null
          ? object
          : baseCopy(source, keys(source), object);
      }
  
      /**
       * The base implementation of `_.at` without support for string collections
       * and individual key arguments.
       *
       * @private
       * @param {Array|Object} collection The collection to iterate over.
       * @param {number[]|string[]} props The property names or indexes of elements to pick.
       * @returns {Array} Returns the new array of picked elements.
       */
      function baseAt(collection, props) {
        var index = -1,
            isNil = collection == null,
            isArr = !isNil && isArrayLike(collection),
            length = isArr ? collection.length : 0,
            propsLength = props.length,
            result = Array(propsLength);
  
        while(++index < propsLength) {
          var key = props[index];
          if (isArr) {
            result[index] = isIndex(key, length) ? collection[key] : undefined;
          } else {
            result[index] = isNil ? undefined : collection[key];
          }
        }
        return result;
      }
  
      /**
       * Copies properties of `source` to `object`.
       *
       * @private
       * @param {Object} source The object to copy properties from.
       * @param {Array} props The property names to copy.
       * @param {Object} [object={}] The object to copy properties to.
       * @returns {Object} Returns `object`.
       */
      function baseCopy(source, props, object) {
        object || (object = {});
  
        var index = -1,
            length = props.length;
  
        while (++index < length) {
          var key = props[index];
          object[key] = source[key];
        }
        return object;
      }
  
      /**
       * The base implementation of `_.callback` which supports specifying the
       * number of arguments to provide to `func`.
       *
       * @private
       * @param {*} [func=_.identity] The value to convert to a callback.
       * @param {*} [thisArg] The `this` binding of `func`.
       * @param {number} [argCount] The number of arguments to provide to `func`.
       * @returns {Function} Returns the callback.
       */
      function baseCallback(func, thisArg, argCount) {
        var type = typeof func;
        if (type == 'function') {
          return thisArg === undefined
            ? func
            : bindCallback(func, thisArg, argCount);
        }
        if (func == null) {
          return identity;
        }
        if (type == 'object') {
          return baseMatches(func);
        }
        return thisArg === undefined
          ? property(func)
          : baseMatchesProperty(func, thisArg);
      }
  
      /**
       * The base implementation of `_.clone` without support for argument juggling
       * and `this` binding `customizer` functions.
       *
       * @private
       * @param {*} value The value to clone.
       * @param {boolean} [isDeep] Specify a deep clone.
       * @param {Function} [customizer] The function to customize cloning values.
       * @param {string} [key] The key of `value`.
       * @param {Object} [object] The object `value` belongs to.
       * @param {Array} [stackA=[]] Tracks traversed source objects.
       * @param {Array} [stackB=[]] Associates clones with source counterparts.
       * @returns {*} Returns the cloned value.
       */
      function baseClone(value, isDeep, customizer, key, object, stackA, stackB) {
        var result;
        if (customizer) {
          result = object ? customizer(value, key, object) : customizer(value);
        }
        if (result !== undefined) {
          return result;
        }
        if (!isObject(value)) {
          return value;
        }
        var isArr = isArray(value);
        if (isArr) {
          result = initCloneArray(value);
          if (!isDeep) {
            return arrayCopy(value, result);
          }
        } else {
          var tag = objToString.call(value),
              isFunc = tag == funcTag;
  
          if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
            result = initCloneObject(isFunc ? {} : value);
            if (!isDeep) {
              return baseAssign(result, value);
            }
          } else {
            return cloneableTags[tag]
              ? initCloneByTag(value, tag, isDeep)
              : (object ? value : {});
          }
        }
        // Check for circular references and return its corresponding clone.
        stackA || (stackA = []);
        stackB || (stackB = []);
  
        var length = stackA.length;
        while (length--) {
          if (stackA[length] == value) {
            return stackB[length];
          }
        }
        // Add the source value to the stack of traversed objects and associate it with its clone.
        stackA.push(value);
        stackB.push(result);
  
        // Recursively populate clone (susceptible to call stack limits).
        (isArr ? arrayEach : baseForOwn)(value, function(subValue, key) {
          result[key] = baseClone(subValue, isDeep, customizer, key, value, stackA, stackB);
        });
        return result;
      }
  
      /**
       * The base implementation of `_.create` without support for assigning
       * properties to the created object.
       *
       * @private
       * @param {Object} prototype The object to inherit from.
       * @returns {Object} Returns the new object.
       */
      var baseCreate = (function() {
        function object() {}
        return function(prototype) {
          if (isObject(prototype)) {
            object.prototype = prototype;
            var result = new object;
            object.prototype = undefined;
          }
          return result || {};
        };
      }());
  
      /**
       * The base implementation of `_.delay` and `_.defer` which accepts an index
       * of where to slice the arguments to provide to `func`.
       *
       * @private
       * @param {Function} func The function to delay.
       * @param {number} wait The number of milliseconds to delay invocation.
       * @param {Object} args The arguments provide to `func`.
       * @returns {number} Returns the timer id.
       */
      function baseDelay(func, wait, args) {
        if (typeof func != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        return setTimeout(function() { func.apply(undefined, args); }, wait);
      }
  
      /**
       * The base implementation of `_.difference` which accepts a single array
       * of values to exclude.
       *
       * @private
       * @param {Array} array The array to inspect.
       * @param {Array} values The values to exclude.
       * @returns {Array} Returns the new array of filtered values.
       */
      function baseDifference(array, values) {
        var length = array ? array.length : 0,
            result = [];
  
        if (!length) {
          return result;
        }
        var index = -1,
            indexOf = getIndexOf(),
            isCommon = indexOf == baseIndexOf,
            cache = (isCommon && values.length >= LARGE_ARRAY_SIZE) ? createCache(values) : null,
            valuesLength = values.length;
  
        if (cache) {
          indexOf = cacheIndexOf;
          isCommon = false;
          values = cache;
        }
        outer:
        while (++index < length) {
          var value = array[index];
  
          if (isCommon && value === value) {
            var valuesIndex = valuesLength;
            while (valuesIndex--) {
              if (values[valuesIndex] === value) {
                continue outer;
              }
            }
            result.push(value);
          }
          else if (indexOf(values, value, 0) < 0) {
            result.push(value);
          }
        }
        return result;
      }
  
      /**
       * The base implementation of `_.forEach` without support for callback
       * shorthands and `this` binding.
       *
       * @private
       * @param {Array|Object|string} collection The collection to iterate over.
       * @param {Function} iteratee The function invoked per iteration.
       * @returns {Array|Object|string} Returns `collection`.
       */
      var baseEach = createBaseEach(baseForOwn);
  
      /**
       * The base implementation of `_.forEachRight` without support for callback
       * shorthands and `this` binding.
       *
       * @private
       * @param {Array|Object|string} collection The collection to iterate over.
       * @param {Function} iteratee The function invoked per iteration.
       * @returns {Array|Object|string} Returns `collection`.
       */
      var baseEachRight = createBaseEach(baseForOwnRight, true);
  
      /**
       * The base implementation of `_.every` without support for callback
       * shorthands and `this` binding.
       *
       * @private
       * @param {Array|Object|string} collection The collection to iterate over.
       * @param {Function} predicate The function invoked per iteration.
       * @returns {boolean} Returns `true` if all elements pass the predicate check,
       *  else `false`
       */
      function baseEvery(collection, predicate) {
        var result = true;
        baseEach(collection, function(value, index, collection) {
          result = !!predicate(value, index, collection);
          return result;
        });
        return result;
      }
  
      /**
       * Gets the extremum value of `collection` invoking `iteratee` for each value
       * in `collection` to generate the criterion by which the value is ranked.
       * The `iteratee` is invoked with three arguments: (value, index|key, collection).
       *
       * @private
       * @param {Array|Object|string} collection The collection to iterate over.
       * @param {Function} iteratee The function invoked per iteration.
       * @param {Function} comparator The function used to compare values.
       * @param {*} exValue The initial extremum value.
       * @returns {*} Returns the extremum value.
       */
      function baseExtremum(collection, iteratee, comparator, exValue) {
        var computed = exValue,
            result = computed;
  
        baseEach(collection, function(value, index, collection) {
          var current = +iteratee(value, index, collection);
          if (comparator(current, computed) || (current === exValue && current === result)) {
            computed = current;
            result = value;
          }
        });
        return result;
      }
  
      /**
       * The base implementation of `_.fill` without an iteratee call guard.
       *
       * @private
       * @param {Array} array The array to fill.
       * @param {*} value The value to fill `array` with.
       * @param {number} [start=0] The start position.
       * @param {number} [end=array.length] The end position.
       * @returns {Array} Returns `array`.
       */
      function baseFill(array, value, start, end) {
        var length = array.length;
  
        start = start == null ? 0 : (+start || 0);
        if (start < 0) {
          start = -start > length ? 0 : (length + start);
        }
        end = (end === undefined || end > length) ? length : (+end || 0);
        if (end < 0) {
          end += length;
        }
        length = start > end ? 0 : (end >>> 0);
        start >>>= 0;
  
        while (start < length) {
          array[start++] = value;
        }
        return array;
      }
  
      /**
       * The base implementation of `_.filter` without support for callback
       * shorthands and `this` binding.
       *
       * @private
       * @param {Array|Object|string} collection The collection to iterate over.
       * @param {Function} predicate The function invoked per iteration.
       * @returns {Array} Returns the new filtered array.
       */
      function baseFilter(collection, predicate) {
        var result = [];
        baseEach(collection, function(value, index, collection) {
          if (predicate(value, index, collection)) {
            result.push(value);
          }
        });
        return result;
      }
  
      /**
       * The base implementation of `_.find`, `_.findLast`, `_.findKey`, and `_.findLastKey`,
       * without support for callback shorthands and `this` binding, which iterates
       * over `collection` using the provided `eachFunc`.
       *
       * @private
       * @param {Array|Object|string} collection The collection to search.
       * @param {Function} predicate The function invoked per iteration.
       * @param {Function} eachFunc The function to iterate over `collection`.
       * @param {boolean} [retKey] Specify returning the key of the found element
       *  instead of the element itself.
       * @returns {*} Returns the found element or its key, else `undefined`.
       */
      function baseFind(collection, predicate, eachFunc, retKey) {
        var result;
        eachFunc(collection, function(value, key, collection) {
          if (predicate(value, key, collection)) {
            result = retKey ? key : value;
            return false;
          }
        });
        return result;
      }
  
      /**
       * The base implementation of `_.flatten` with added support for restricting
       * flattening and specifying the start index.
       *
       * @private
       * @param {Array} array The array to flatten.
       * @param {boolean} [isDeep] Specify a deep flatten.
       * @param {boolean} [isStrict] Restrict flattening to arrays-like objects.
       * @param {Array} [result=[]] The initial result value.
       * @returns {Array} Returns the new flattened array.
       */
      function baseFlatten(array, isDeep, isStrict, result) {
        result || (result = []);
  
        var index = -1,
            length = array.length;
  
        while (++index < length) {
          var value = array[index];
          if (isObjectLike(value) && isArrayLike(value) &&
              (isStrict || isArray(value) || isArguments(value))) {
            if (isDeep) {
              // Recursively flatten arrays (susceptible to call stack limits).
              baseFlatten(value, isDeep, isStrict, result);
            } else {
              arrayPush(result, value);
            }
          } else if (!isStrict) {
            result[result.length] = value;
          }
        }
        return result;
      }
  
      /**
       * The base implementation of `baseForIn` and `baseForOwn` which iterates
       * over `object` properties returned by `keysFunc` invoking `iteratee` for
       * each property. Iteratee functions may exit iteration early by explicitly
       * returning `false`.
       *
       * @private
       * @param {Object} object The object to iterate over.
       * @param {Function} iteratee The function invoked per iteration.
       * @param {Function} keysFunc The function to get the keys of `object`.
       * @returns {Object} Returns `object`.
       */
      var baseFor = createBaseFor();
  
      /**
       * This function is like `baseFor` except that it iterates over properties
       * in the opposite order.
       *
       * @private
       * @param {Object} object The object to iterate over.
       * @param {Function} iteratee The function invoked per iteration.
       * @param {Function} keysFunc The function to get the keys of `object`.
       * @returns {Object} Returns `object`.
       */
      var baseForRight = createBaseFor(true);
  
      /**
       * The base implementation of `_.forIn` without support for callback
       * shorthands and `this` binding.
       *
       * @private
       * @param {Object} object The object to iterate over.
       * @param {Function} iteratee The function invoked per iteration.
       * @returns {Object} Returns `object`.
       */
      function baseForIn(object, iteratee) {
        return baseFor(object, iteratee, keysIn);
      }
  
      /**
       * The base implementation of `_.forOwn` without support for callback
       * shorthands and `this` binding.
       *
       * @private
       * @param {Object} object The object to iterate over.
       * @param {Function} iteratee The function invoked per iteration.
       * @returns {Object} Returns `object`.
       */
      function baseForOwn(object, iteratee) {
        return baseFor(object, iteratee, keys);
      }
  
      /**
       * The base implementation of `_.forOwnRight` without support for callback
       * shorthands and `this` binding.
       *
       * @private
       * @param {Object} object The object to iterate over.
       * @param {Function} iteratee The function invoked per iteration.
       * @returns {Object} Returns `object`.
       */
      function baseForOwnRight(object, iteratee) {
        return baseForRight(object, iteratee, keys);
      }
  
      /**
       * The base implementation of `_.functions` which creates an array of
       * `object` function property names filtered from those provided.
       *
       * @private
       * @param {Object} object The object to inspect.
       * @param {Array} props The property names to filter.
       * @returns {Array} Returns the new array of filtered property names.
       */
      function baseFunctions(object, props) {
        var index = -1,
            length = props.length,
            resIndex = -1,
            result = [];
  
        while (++index < length) {
          var key = props[index];
          if (isFunction(object[key])) {
            result[++resIndex] = key;
          }
        }
        return result;
      }
  
      /**
       * The base implementation of `get` without support for string paths
       * and default values.
       *
       * @private
       * @param {Object} object The object to query.
       * @param {Array} path The path of the property to get.
       * @param {string} [pathKey] The key representation of path.
       * @returns {*} Returns the resolved value.
       */
      function baseGet(object, path, pathKey) {
        if (object == null) {
          return;
        }
        if (pathKey !== undefined && pathKey in toObject(object)) {
          path = [pathKey];
        }
        var index = 0,
            length = path.length;
  
        while (object != null && index < length) {
          object = object[path[index++]];
        }
        return (index && index == length) ? object : undefined;
      }
  
      /**
       * The base implementation of `_.isEqual` without support for `this` binding
       * `customizer` functions.
       *
       * @private
       * @param {*} value The value to compare.
       * @param {*} other The other value to compare.
       * @param {Function} [customizer] The function to customize comparing values.
       * @param {boolean} [isLoose] Specify performing partial comparisons.
       * @param {Array} [stackA] Tracks traversed `value` objects.
       * @param {Array} [stackB] Tracks traversed `other` objects.
       * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
       */
      function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
        if (value === other) {
          return true;
        }
        if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
          return value !== value && other !== other;
        }
        return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
      }
  
      /**
       * A specialized version of `baseIsEqual` for arrays and objects which performs
       * deep comparisons and tracks traversed objects enabling objects with circular
       * references to be compared.
       *
       * @private
       * @param {Object} object The object to compare.
       * @param {Object} other The other object to compare.
       * @param {Function} equalFunc The function to determine equivalents of values.
       * @param {Function} [customizer] The function to customize comparing objects.
       * @param {boolean} [isLoose] Specify performing partial comparisons.
       * @param {Array} [stackA=[]] Tracks traversed `value` objects.
       * @param {Array} [stackB=[]] Tracks traversed `other` objects.
       * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
       */
      function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
        var objIsArr = isArray(object),
            othIsArr = isArray(other),
            objTag = arrayTag,
            othTag = arrayTag;
  
        if (!objIsArr) {
          objTag = objToString.call(object);
          if (objTag == argsTag) {
            objTag = objectTag;
          } else if (objTag != objectTag) {
            objIsArr = isTypedArray(object);
          }
        }
        if (!othIsArr) {
          othTag = objToString.call(other);
          if (othTag == argsTag) {
            othTag = objectTag;
          } else if (othTag != objectTag) {
            othIsArr = isTypedArray(other);
          }
        }
        var objIsObj = objTag == objectTag,
            othIsObj = othTag == objectTag,
            isSameTag = objTag == othTag;
  
        if (isSameTag && !(objIsArr || objIsObj)) {
          return equalByTag(object, other, objTag);
        }
        if (!isLoose) {
          var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
              othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
  
          if (objIsWrapped || othIsWrapped) {
            return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
          }
        }
        if (!isSameTag) {
          return false;
        }
        // Assume cyclic values are equal.
        // For more information on detecting circular references see https://es5.github.io/#JO.
        stackA || (stackA = []);
        stackB || (stackB = []);
  
        var length = stackA.length;
        while (length--) {
          if (stackA[length] == object) {
            return stackB[length] == other;
          }
        }
        // Add `object` and `other` to the stack of traversed objects.
        stackA.push(object);
        stackB.push(other);
  
        var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);
  
        stackA.pop();
        stackB.pop();
  
        return result;
      }
  
      /**
       * The base implementation of `_.isMatch` without support for callback
       * shorthands and `this` binding.
       *
       * @private
       * @param {Object} object The object to inspect.
       * @param {Array} matchData The propery names, values, and compare flags to match.
       * @param {Function} [customizer] The function to customize comparing objects.
       * @returns {boolean} Returns `true` if `object` is a match, else `false`.
       */
      function baseIsMatch(object, matchData, customizer) {
        var index = matchData.length,
            length = index,
            noCustomizer = !customizer;
  
        if (object == null) {
          return !length;
        }
        object = toObject(object);
        while (index--) {
          var data = matchData[index];
          if ((noCustomizer && data[2])
                ? data[1] !== object[data[0]]
                : !(data[0] in object)
              ) {
            return false;
          }
        }
        while (++index < length) {
          data = matchData[index];
          var key = data[0],
              objValue = object[key],
              srcValue = data[1];
  
          if (noCustomizer && data[2]) {
            if (objValue === undefined && !(key in object)) {
              return false;
            }
          } else {
            var result = customizer ? customizer(objValue, srcValue, key) : undefined;
            if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, true) : result)) {
              return false;
            }
          }
        }
        return true;
      }
  
      /**
       * The base implementation of `_.map` without support for callback shorthands
       * and `this` binding.
       *
       * @private
       * @param {Array|Object|string} collection The collection to iterate over.
       * @param {Function} iteratee The function invoked per iteration.
       * @returns {Array} Returns the new mapped array.
       */
      function baseMap(collection, iteratee) {
        var index = -1,
            result = isArrayLike(collection) ? Array(collection.length) : [];
  
        baseEach(collection, function(value, key, collection) {
          result[++index] = iteratee(value, key, collection);
        });
        return result;
      }
  
      /**
       * The base implementation of `_.matches` which does not clone `source`.
       *
       * @private
       * @param {Object} source The object of property values to match.
       * @returns {Function} Returns the new function.
       */
      function baseMatches(source) {
        var matchData = getMatchData(source);
        if (matchData.length == 1 && matchData[0][2]) {
          var key = matchData[0][0],
              value = matchData[0][1];
  
          return function(object) {
            if (object == null) {
              return false;
            }
            return object[key] === value && (value !== undefined || (key in toObject(object)));
          };
        }
        return function(object) {
          return baseIsMatch(object, matchData);
        };
      }
  
      /**
       * The base implementation of `_.matchesProperty` which does not clone `srcValue`.
       *
       * @private
       * @param {string} path The path of the property to get.
       * @param {*} srcValue The value to compare.
       * @returns {Function} Returns the new function.
       */
      function baseMatchesProperty(path, srcValue) {
        var isArr = isArray(path),
            isCommon = isKey(path) && isStrictComparable(srcValue),
            pathKey = (path + '');
  
        path = toPath(path);
        return function(object) {
          if (object == null) {
            return false;
          }
          var key = pathKey;
          object = toObject(object);
          if ((isArr || !isCommon) && !(key in object)) {
            object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
            if (object == null) {
              return false;
            }
            key = last(path);
            object = toObject(object);
          }
          return object[key] === srcValue
            ? (srcValue !== undefined || (key in object))
            : baseIsEqual(srcValue, object[key], undefined, true);
        };
      }
  
      /**
       * The base implementation of `_.merge` without support for argument juggling,
       * multiple sources, and `this` binding `customizer` functions.
       *
       * @private
       * @param {Object} object The destination object.
       * @param {Object} source The source object.
       * @param {Function} [customizer] The function to customize merged values.
       * @param {Array} [stackA=[]] Tracks traversed source objects.
       * @param {Array} [stackB=[]] Associates values with source counterparts.
       * @returns {Object} Returns `object`.
       */
      function baseMerge(object, source, customizer, stackA, stackB) {
        if (!isObject(object)) {
          return object;
        }
        var isSrcArr = isArrayLike(source) && (isArray(source) || isTypedArray(source)),
            props = isSrcArr ? undefined : keys(source);
  
        arrayEach(props || source, function(srcValue, key) {
          if (props) {
            key = srcValue;
            srcValue = source[key];
          }
          if (isObjectLike(srcValue)) {
            stackA || (stackA = []);
            stackB || (stackB = []);
            baseMergeDeep(object, source, key, baseMerge, customizer, stackA, stackB);
          }
          else {
            var value = object[key],
                result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
                isCommon = result === undefined;
  
            if (isCommon) {
              result = srcValue;
            }
            if ((result !== undefined || (isSrcArr && !(key in object))) &&
                (isCommon || (result === result ? (result !== value) : (value === value)))) {
              object[key] = result;
            }
          }
        });
        return object;
      }
  
      /**
       * A specialized version of `baseMerge` for arrays and objects which performs
       * deep merges and tracks traversed objects enabling objects with circular
       * references to be merged.
       *
       * @private
       * @param {Object} object The destination object.
       * @param {Object} source The source object.
       * @param {string} key The key of the value to merge.
       * @param {Function} mergeFunc The function to merge values.
       * @param {Function} [customizer] The function to customize merged values.
       * @param {Array} [stackA=[]] Tracks traversed source objects.
       * @param {Array} [stackB=[]] Associates values with source counterparts.
       * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
       */
      function baseMergeDeep(object, source, key, mergeFunc, customizer, stackA, stackB) {
        var length = stackA.length,
            srcValue = source[key];
  
        while (length--) {
          if (stackA[length] == srcValue) {
            object[key] = stackB[length];
            return;
          }
        }
        var value = object[key],
            result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
            isCommon = result === undefined;
  
        if (isCommon) {
          result = srcValue;
          if (isArrayLike(srcValue) && (isArray(srcValue) || isTypedArray(srcValue))) {
            result = isArray(value)
              ? value
              : (isArrayLike(value) ? arrayCopy(value) : []);
          }
          else if (isPlainObject(srcValue) || isArguments(srcValue)) {
            result = isArguments(value)
              ? toPlainObject(value)
              : (isPlainObject(value) ? value : {});
          }
          else {
            isCommon = false;
          }
        }
        // Add the source value to the stack of traversed objects and associate
        // it with its merged value.
        stackA.push(srcValue);
        stackB.push(result);
  
        if (isCommon) {
          // Recursively merge objects and arrays (susceptible to call stack limits).
          object[key] = mergeFunc(result, srcValue, customizer, stackA, stackB);
        } else if (result === result ? (result !== value) : (value === value)) {
          object[key] = result;
        }
      }
  
      /**
       * The base implementation of `_.property` without support for deep paths.
       *
       * @private
       * @param {string} key The key of the property to get.
       * @returns {Function} Returns the new function.
       */
      function baseProperty(key) {
        return function(object) {
          return object == null ? undefined : object[key];
        };
      }
  
      /**
       * A specialized version of `baseProperty` which supports deep paths.
       *
       * @private
       * @param {Array|string} path The path of the property to get.
       * @returns {Function} Returns the new function.
       */
      function basePropertyDeep(path) {
        var pathKey = (path + '');
        path = toPath(path);
        return function(object) {
          return baseGet(object, path, pathKey);
        };
      }
  
      /**
       * The base implementation of `_.pullAt` without support for individual
       * index arguments and capturing the removed elements.
       *
       * @private
       * @param {Array} array The array to modify.
       * @param {number[]} indexes The indexes of elements to remove.
       * @returns {Array} Returns `array`.
       */
      function basePullAt(array, indexes) {
        var length = array ? indexes.length : 0;
        while (length--) {
          var index = indexes[length];
          if (index != previous && isIndex(index)) {
            var previous = index;
            splice.call(array, index, 1);
          }
        }
        return array;
      }
  
      /**
       * The base implementation of `_.random` without support for argument juggling
       * and returning floating-point numbers.
       *
       * @private
       * @param {number} min The minimum possible value.
       * @param {number} max The maximum possible value.
       * @returns {number} Returns the random number.
       */
      function baseRandom(min, max) {
        return min + nativeFloor(nativeRandom() * (max - min + 1));
      }
  
      /**
       * The base implementation of `_.reduce` and `_.reduceRight` without support
       * for callback shorthands and `this` binding, which iterates over `collection`
       * using the provided `eachFunc`.
       *
       * @private
       * @param {Array|Object|string} collection The collection to iterate over.
       * @param {Function} iteratee The function invoked per iteration.
       * @param {*} accumulator The initial value.
       * @param {boolean} initFromCollection Specify using the first or last element
       *  of `collection` as the initial value.
       * @param {Function} eachFunc The function to iterate over `collection`.
       * @returns {*} Returns the accumulated value.
       */
      function baseReduce(collection, iteratee, accumulator, initFromCollection, eachFunc) {
        eachFunc(collection, function(value, index, collection) {
          accumulator = initFromCollection
            ? (initFromCollection = false, value)
            : iteratee(accumulator, value, index, collection);
        });
        return accumulator;
      }
  
      /**
       * The base implementation of `setData` without support for hot loop detection.
       *
       * @private
       * @param {Function} func The function to associate metadata with.
       * @param {*} data The metadata.
       * @returns {Function} Returns `func`.
       */
      var baseSetData = !metaMap ? identity : function(func, data) {
        metaMap.set(func, data);
        return func;
      };
  
      /**
       * The base implementation of `_.slice` without an iteratee call guard.
       *
       * @private
       * @param {Array} array The array to slice.
       * @param {number} [start=0] The start position.
       * @param {number} [end=array.length] The end position.
       * @returns {Array} Returns the slice of `array`.
       */
      function baseSlice(array, start, end) {
        var index = -1,
            length = array.length;
  
        start = start == null ? 0 : (+start || 0);
        if (start < 0) {
          start = -start > length ? 0 : (length + start);
        }
        end = (end === undefined || end > length) ? length : (+end || 0);
        if (end < 0) {
          end += length;
        }
        length = start > end ? 0 : ((end - start) >>> 0);
        start >>>= 0;
  
        var result = Array(length);
        while (++index < length) {
          result[index] = array[index + start];
        }
        return result;
      }
  
      /**
       * The base implementation of `_.some` without support for callback shorthands
       * and `this` binding.
       *
       * @private
       * @param {Array|Object|string} collection The collection to iterate over.
       * @param {Function} predicate The function invoked per iteration.
       * @returns {boolean} Returns `true` if any element passes the predicate check,
       *  else `false`.
       */
      function baseSome(collection, predicate) {
        var result;
  
        baseEach(collection, function(value, index, collection) {
          result = predicate(value, index, collection);
          return !result;
        });
        return !!result;
      }
  
      /**
       * The base implementation of `_.sortBy` which uses `comparer` to define
       * the sort order of `array` and replaces criteria objects with their
       * corresponding values.
       *
       * @private
       * @param {Array} array The array to sort.
       * @param {Function} comparer The function to define sort order.
       * @returns {Array} Returns `array`.
       */
      function baseSortBy(array, comparer) {
        var length = array.length;
  
        array.sort(comparer);
        while (length--) {
          array[length] = array[length].value;
        }
        return array;
      }
  
      /**
       * The base implementation of `_.sortByOrder` without param guards.
       *
       * @private
       * @param {Array|Object|string} collection The collection to iterate over.
       * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
       * @param {boolean[]} orders The sort orders of `iteratees`.
       * @returns {Array} Returns the new sorted array.
       */
      function baseSortByOrder(collection, iteratees, orders) {
        var callback = getCallback(),
            index = -1;
  
        iteratees = arrayMap(iteratees, function(iteratee) { return callback(iteratee); });
  
        var result = baseMap(collection, function(value) {
          var criteria = arrayMap(iteratees, function(iteratee) { return iteratee(value); });
          return { 'criteria': criteria, 'index': ++index, 'value': value };
        });
  
        return baseSortBy(result, function(object, other) {
          return compareMultiple(object, other, orders);
        });
      }
  
      /**
       * The base implementation of `_.sum` without support for callback shorthands
       * and `this` binding.
       *
       * @private
       * @param {Array|Object|string} collection The collection to iterate over.
       * @param {Function} iteratee The function invoked per iteration.
       * @returns {number} Returns the sum.
       */
      function baseSum(collection, iteratee) {
        var result = 0;
        baseEach(collection, function(value, index, collection) {
          result += +iteratee(value, index, collection) || 0;
        });
        return result;
      }
  
      /**
       * The base implementation of `_.uniq` without support for callback shorthands
       * and `this` binding.
       *
       * @private
       * @param {Array} array The array to inspect.
       * @param {Function} [iteratee] The function invoked per iteration.
       * @returns {Array} Returns the new duplicate-value-free array.
       */
      function baseUniq(array, iteratee) {
        var index = -1,
            indexOf = getIndexOf(),
            length = array.length,
            isCommon = indexOf == baseIndexOf,
            isLarge = isCommon && length >= LARGE_ARRAY_SIZE,
            seen = isLarge ? createCache() : null,
            result = [];
  
        if (seen) {
          indexOf = cacheIndexOf;
          isCommon = false;
        } else {
          isLarge = false;
          seen = iteratee ? [] : result;
        }
        outer:
        while (++index < length) {
          var value = array[index],
              computed = iteratee ? iteratee(value, index, array) : value;
  
          if (isCommon && value === value) {
            var seenIndex = seen.length;
            while (seenIndex--) {
              if (seen[seenIndex] === computed) {
                continue outer;
              }
            }
            if (iteratee) {
              seen.push(computed);
            }
            result.push(value);
          }
          else if (indexOf(seen, computed, 0) < 0) {
            if (iteratee || isLarge) {
              seen.push(computed);
            }
            result.push(value);
          }
        }
        return result;
      }
  
      /**
       * The base implementation of `_.values` and `_.valuesIn` which creates an
       * array of `object` property values corresponding to the property names
       * of `props`.
       *
       * @private
       * @param {Object} object The object to query.
       * @param {Array} props The property names to get values for.
       * @returns {Object} Returns the array of property values.
       */
      function baseValues(object, props) {
        var index = -1,
            length = props.length,
            result = Array(length);
  
        while (++index < length) {
          result[index] = object[props[index]];
        }
        return result;
      }
  
      /**
       * The base implementation of `_.dropRightWhile`, `_.dropWhile`, `_.takeRightWhile`,
       * and `_.takeWhile` without support for callback shorthands and `this` binding.
       *
       * @private
       * @param {Array} array The array to query.
       * @param {Function} predicate The function invoked per iteration.
       * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
       * @param {boolean} [fromRight] Specify iterating from right to left.
       * @returns {Array} Returns the slice of `array`.
       */
      function baseWhile(array, predicate, isDrop, fromRight) {
        var length = array.length,
            index = fromRight ? length : -1;
  
        while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {}
        return isDrop
          ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
          : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
      }
  
      /**
       * The base implementation of `wrapperValue` which returns the result of
       * performing a sequence of actions on the unwrapped `value`, where each
       * successive action is supplied the return value of the previous.
       *
       * @private
       * @param {*} value The unwrapped value.
       * @param {Array} actions Actions to peform to resolve the unwrapped value.
       * @returns {*} Returns the resolved value.
       */
      function baseWrapperValue(value, actions) {
        var result = value;
        if (result instanceof LazyWrapper) {
          result = result.value();
        }
        var index = -1,
            length = actions.length;
  
        while (++index < length) {
          var action = actions[index];
          result = action.func.apply(action.thisArg, arrayPush([result], action.args));
        }
        return result;
      }
  
      /**
       * Performs a binary search of `array` to determine the index at which `value`
       * should be inserted into `array` in order to maintain its sort order.
       *
       * @private
       * @param {Array} array The sorted array to inspect.
       * @param {*} value The value to evaluate.
       * @param {boolean} [retHighest] Specify returning the highest qualified index.
       * @returns {number} Returns the index at which `value` should be inserted
       *  into `array`.
       */
      function binaryIndex(array, value, retHighest) {
        var low = 0,
            high = array ? array.length : low;
  
        if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
          while (low < high) {
            var mid = (low + high) >>> 1,
                computed = array[mid];
  
            if ((retHighest ? (computed <= value) : (computed < value)) && computed !== null) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return high;
        }
        return binaryIndexBy(array, value, identity, retHighest);
      }
  
      /**
       * This function is like `binaryIndex` except that it invokes `iteratee` for
       * `value` and each element of `array` to compute their sort ranking. The
       * iteratee is invoked with one argument; (value).
       *
       * @private
       * @param {Array} array The sorted array to inspect.
       * @param {*} value The value to evaluate.
       * @param {Function} iteratee The function invoked per iteration.
       * @param {boolean} [retHighest] Specify returning the highest qualified index.
       * @returns {number} Returns the index at which `value` should be inserted
       *  into `array`.
       */
      function binaryIndexBy(array, value, iteratee, retHighest) {
        value = iteratee(value);
  
        var low = 0,
            high = array ? array.length : 0,
            valIsNaN = value !== value,
            valIsNull = value === null,
            valIsUndef = value === undefined;
  
        while (low < high) {
          var mid = nativeFloor((low + high) / 2),
              computed = iteratee(array[mid]),
              isDef = computed !== undefined,
              isReflexive = computed === computed;
  
          if (valIsNaN) {
            var setLow = isReflexive || retHighest;
          } else if (valIsNull) {
            setLow = isReflexive && isDef && (retHighest || computed != null);
          } else if (valIsUndef) {
            setLow = isReflexive && (retHighest || isDef);
          } else if (computed == null) {
            setLow = false;
          } else {
            setLow = retHighest ? (computed <= value) : (computed < value);
          }
          if (setLow) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return nativeMin(high, MAX_ARRAY_INDEX);
      }
  
      /**
       * A specialized version of `baseCallback` which only supports `this` binding
       * and specifying the number of arguments to provide to `func`.
       *
       * @private
       * @param {Function} func The function to bind.
       * @param {*} thisArg The `this` binding of `func`.
       * @param {number} [argCount] The number of arguments to provide to `func`.
       * @returns {Function} Returns the callback.
       */
      function bindCallback(func, thisArg, argCount) {
        if (typeof func != 'function') {
          return identity;
        }
        if (thisArg === undefined) {
          return func;
        }
        switch (argCount) {
          case 1: return function(value) {
            return func.call(thisArg, value);
          };
          case 3: return function(value, index, collection) {
            return func.call(thisArg, value, index, collection);
          };
          case 4: return function(accumulator, value, index, collection) {
            return func.call(thisArg, accumulator, value, index, collection);
          };
          case 5: return function(value, other, key, object, source) {
            return func.call(thisArg, value, other, key, object, source);
          };
        }
        return function() {
          return func.apply(thisArg, arguments);
        };
      }
  
      /**
       * Creates a clone of the given array buffer.
       *
       * @private
       * @param {ArrayBuffer} buffer The array buffer to clone.
       * @returns {ArrayBuffer} Returns the cloned array buffer.
       */
      function bufferClone(buffer) {
        var result = new ArrayBuffer(buffer.byteLength),
            view = new Uint8Array(result);
  
        view.set(new Uint8Array(buffer));
        return result;
      }
  
      /**
       * Creates an array that is the composition of partially applied arguments,
       * placeholders, and provided arguments into a single array of arguments.
       *
       * @private
       * @param {Array|Object} args The provided arguments.
       * @param {Array} partials The arguments to prepend to those provided.
       * @param {Array} holders The `partials` placeholder indexes.
       * @returns {Array} Returns the new array of composed arguments.
       */
      function composeArgs(args, partials, holders) {
        var holdersLength = holders.length,
            argsIndex = -1,
            argsLength = nativeMax(args.length - holdersLength, 0),
            leftIndex = -1,
            leftLength = partials.length,
            result = Array(leftLength + argsLength);
  
        while (++leftIndex < leftLength) {
          result[leftIndex] = partials[leftIndex];
        }
        while (++argsIndex < holdersLength) {
          result[holders[argsIndex]] = args[argsIndex];
        }
        while (argsLength--) {
          result[leftIndex++] = args[argsIndex++];
        }
        return result;
      }
  
      /**
       * This function is like `composeArgs` except that the arguments composition
       * is tailored for `_.partialRight`.
       *
       * @private
       * @param {Array|Object} args The provided arguments.
       * @param {Array} partials The arguments to append to those provided.
       * @param {Array} holders The `partials` placeholder indexes.
       * @returns {Array} Returns the new array of composed arguments.
       */
      function composeArgsRight(args, partials, holders) {
        var holdersIndex = -1,
            holdersLength = holders.length,
            argsIndex = -1,
            argsLength = nativeMax(args.length - holdersLength, 0),
            rightIndex = -1,
            rightLength = partials.length,
            result = Array(argsLength + rightLength);
  
        while (++argsIndex < argsLength) {
          result[argsIndex] = args[argsIndex];
        }
        var offset = argsIndex;
        while (++rightIndex < rightLength) {
          result[offset + rightIndex] = partials[rightIndex];
        }
        while (++holdersIndex < holdersLength) {
          result[offset + holders[holdersIndex]] = args[argsIndex++];
        }
        return result;
      }
  
      /**
       * Creates a `_.countBy`, `_.groupBy`, `_.indexBy`, or `_.partition` function.
       *
       * @private
       * @param {Function} setter The function to set keys and values of the accumulator object.
       * @param {Function} [initializer] The function to initialize the accumulator object.
       * @returns {Function} Returns the new aggregator function.
       */
      function createAggregator(setter, initializer) {
        return function(collection, iteratee, thisArg) {
          var result = initializer ? initializer() : {};
          iteratee = getCallback(iteratee, thisArg, 3);
  
          if (isArray(collection)) {
            var index = -1,
                length = collection.length;
  
            while (++index < length) {
              var value = collection[index];
              setter(result, value, iteratee(value, index, collection), collection);
            }
          } else {
            baseEach(collection, function(value, key, collection) {
              setter(result, value, iteratee(value, key, collection), collection);
            });
          }
          return result;
        };
      }
  
      /**
       * Creates a `_.assign`, `_.defaults`, or `_.merge` function.
       *
       * @private
       * @param {Function} assigner The function to assign values.
       * @returns {Function} Returns the new assigner function.
       */
      function createAssigner(assigner) {
        return restParam(function(object, sources) {
          var index = -1,
              length = object == null ? 0 : sources.length,
              customizer = length > 2 ? sources[length - 2] : undefined,
              guard = length > 2 ? sources[2] : undefined,
              thisArg = length > 1 ? sources[length - 1] : undefined;
  
          if (typeof customizer == 'function') {
            customizer = bindCallback(customizer, thisArg, 5);
            length -= 2;
          } else {
            customizer = typeof thisArg == 'function' ? thisArg : undefined;
            length -= (customizer ? 1 : 0);
          }
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            customizer = length < 3 ? undefined : customizer;
            length = 1;
          }
          while (++index < length) {
            var source = sources[index];
            if (source) {
              assigner(object, source, customizer);
            }
          }
          return object;
        });
      }
  
      /**
       * Creates a `baseEach` or `baseEachRight` function.
       *
       * @private
       * @param {Function} eachFunc The function to iterate over a collection.
       * @param {boolean} [fromRight] Specify iterating from right to left.
       * @returns {Function} Returns the new base function.
       */
      function createBaseEach(eachFunc, fromRight) {
        return function(collection, iteratee) {
          var length = collection ? getLength(collection) : 0;
          if (!isLength(length)) {
            return eachFunc(collection, iteratee);
          }
          var index = fromRight ? length : -1,
              iterable = toObject(collection);
  
          while ((fromRight ? index-- : ++index < length)) {
            if (iteratee(iterable[index], index, iterable) === false) {
              break;
            }
          }
          return collection;
        };
      }
  
      /**
       * Creates a base function for `_.forIn` or `_.forInRight`.
       *
       * @private
       * @param {boolean} [fromRight] Specify iterating from right to left.
       * @returns {Function} Returns the new base function.
       */
      function createBaseFor(fromRight) {
        return function(object, iteratee, keysFunc) {
          var iterable = toObject(object),
              props = keysFunc(object),
              length = props.length,
              index = fromRight ? length : -1;
  
          while ((fromRight ? index-- : ++index < length)) {
            var key = props[index];
            if (iteratee(iterable[key], key, iterable) === false) {
              break;
            }
          }
          return object;
        };
      }
  
      /**
       * Creates a function that wraps `func` and invokes it with the `this`
       * binding of `thisArg`.
       *
       * @private
       * @param {Function} func The function to bind.
       * @param {*} [thisArg] The `this` binding of `func`.
       * @returns {Function} Returns the new bound function.
       */
      function createBindWrapper(func, thisArg) {
        var Ctor = createCtorWrapper(func);
  
        function wrapper() {
          var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
          return fn.apply(thisArg, arguments);
        }
        return wrapper;
      }
  
      /**
       * Creates a `Set` cache object to optimize linear searches of large arrays.
       *
       * @private
       * @param {Array} [values] The values to cache.
       * @returns {null|Object} Returns the new cache object if `Set` is supported, else `null`.
       */
      function createCache(values) {
        return (nativeCreate && Set) ? new SetCache(values) : null;
      }
  
      /**
       * Creates a function that produces compound words out of the words in a
       * given string.
       *
       * @private
       * @param {Function} callback The function to combine each word.
       * @returns {Function} Returns the new compounder function.
       */
      function createCompounder(callback) {
        return function(string) {
          var index = -1,
              array = words(deburr(string)),
              length = array.length,
              result = '';
  
          while (++index < length) {
            result = callback(result, array[index], index);
          }
          return result;
        };
      }
  
      /**
       * Creates a function that produces an instance of `Ctor` regardless of
       * whether it was invoked as part of a `new` expression or by `call` or `apply`.
       *
       * @private
       * @param {Function} Ctor The constructor to wrap.
       * @returns {Function} Returns the new wrapped function.
       */
      function createCtorWrapper(Ctor) {
        return function() {
          // Use a `switch` statement to work with class constructors.
          // See http://ecma-international.org/ecma-262/6.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
          // for more details.
          var args = arguments;
          switch (args.length) {
            case 0: return new Ctor;
            case 1: return new Ctor(args[0]);
            case 2: return new Ctor(args[0], args[1]);
            case 3: return new Ctor(args[0], args[1], args[2]);
            case 4: return new Ctor(args[0], args[1], args[2], args[3]);
            case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
            case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
            case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
          }
          var thisBinding = baseCreate(Ctor.prototype),
              result = Ctor.apply(thisBinding, args);
  
          // Mimic the constructor's `return` behavior.
          // See https://es5.github.io/#x13.2.2 for more details.
          return isObject(result) ? result : thisBinding;
        };
      }
  
      /**
       * Creates a `_.curry` or `_.curryRight` function.
       *
       * @private
       * @param {boolean} flag The curry bit flag.
       * @returns {Function} Returns the new curry function.
       */
      function createCurry(flag) {
        function curryFunc(func, arity, guard) {
          if (guard && isIterateeCall(func, arity, guard)) {
            arity = undefined;
          }
          var result = createWrapper(func, flag, undefined, undefined, undefined, undefined, undefined, arity);
          result.placeholder = curryFunc.placeholder;
          return result;
        }
        return curryFunc;
      }
  
      /**
       * Creates a `_.defaults` or `_.defaultsDeep` function.
       *
       * @private
       * @param {Function} assigner The function to assign values.
       * @param {Function} customizer The function to customize assigned values.
       * @returns {Function} Returns the new defaults function.
       */
      function createDefaults(assigner, customizer) {
        return restParam(function(args) {
          var object = args[0];
          if (object == null) {
            return object;
          }
          args.push(customizer);
          return assigner.apply(undefined, args);
        });
      }
  
      /**
       * Creates a `_.max` or `_.min` function.
       *
       * @private
       * @param {Function} comparator The function used to compare values.
       * @param {*} exValue The initial extremum value.
       * @returns {Function} Returns the new extremum function.
       */
      function createExtremum(comparator, exValue) {
        return function(collection, iteratee, thisArg) {
          if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
            iteratee = undefined;
          }
          iteratee = getCallback(iteratee, thisArg, 3);
          if (iteratee.length == 1) {
            collection = isArray(collection) ? collection : toIterable(collection);
            var result = arrayExtremum(collection, iteratee, comparator, exValue);
            if (!(collection.length && result === exValue)) {
              return result;
            }
          }
          return baseExtremum(collection, iteratee, comparator, exValue);
        };
      }
  
      /**
       * Creates a `_.find` or `_.findLast` function.
       *
       * @private
       * @param {Function} eachFunc The function to iterate over a collection.
       * @param {boolean} [fromRight] Specify iterating from right to left.
       * @returns {Function} Returns the new find function.
       */
      function createFind(eachFunc, fromRight) {
        return function(collection, predicate, thisArg) {
          predicate = getCallback(predicate, thisArg, 3);
          if (isArray(collection)) {
            var index = baseFindIndex(collection, predicate, fromRight);
            return index > -1 ? collection[index] : undefined;
          }
          return baseFind(collection, predicate, eachFunc);
        };
      }
  
      /**
       * Creates a `_.findIndex` or `_.findLastIndex` function.
       *
       * @private
       * @param {boolean} [fromRight] Specify iterating from right to left.
       * @returns {Function} Returns the new find function.
       */
      function createFindIndex(fromRight) {
        return function(array, predicate, thisArg) {
          if (!(array && array.length)) {
            return -1;
          }
          predicate = getCallback(predicate, thisArg, 3);
          return baseFindIndex(array, predicate, fromRight);
        };
      }
  
      /**
       * Creates a `_.findKey` or `_.findLastKey` function.
       *
       * @private
       * @param {Function} objectFunc The function to iterate over an object.
       * @returns {Function} Returns the new find function.
       */
      function createFindKey(objectFunc) {
        return function(object, predicate, thisArg) {
          predicate = getCallback(predicate, thisArg, 3);
          return baseFind(object, predicate, objectFunc, true);
        };
      }
  
      /**
       * Creates a `_.flow` or `_.flowRight` function.
       *
       * @private
       * @param {boolean} [fromRight] Specify iterating from right to left.
       * @returns {Function} Returns the new flow function.
       */
      function createFlow(fromRight) {
        return function() {
          var wrapper,
              length = arguments.length,
              index = fromRight ? length : -1,
              leftIndex = 0,
              funcs = Array(length);
  
          while ((fromRight ? index-- : ++index < length)) {
            var func = funcs[leftIndex++] = arguments[index];
            if (typeof func != 'function') {
              throw new TypeError(FUNC_ERROR_TEXT);
            }
            if (!wrapper && LodashWrapper.prototype.thru && getFuncName(func) == 'wrapper') {
              wrapper = new LodashWrapper([], true);
            }
          }
          index = wrapper ? -1 : length;
          while (++index < length) {
            func = funcs[index];
  
            var funcName = getFuncName(func),
                data = funcName == 'wrapper' ? getData(func) : undefined;
  
            if (data && isLaziable(data[0]) && data[1] == (ARY_FLAG | CURRY_FLAG | PARTIAL_FLAG | REARG_FLAG) && !data[4].length && data[9] == 1) {
              wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
            } else {
              wrapper = (func.length == 1 && isLaziable(func)) ? wrapper[funcName]() : wrapper.thru(func);
            }
          }
          return function() {
            var args = arguments,
                value = args[0];
  
            if (wrapper && args.length == 1 && isArray(value) && value.length >= LARGE_ARRAY_SIZE) {
              return wrapper.plant(value).value();
            }
            var index = 0,
                result = length ? funcs[index].apply(this, args) : value;
  
            while (++index < length) {
              result = funcs[index].call(this, result);
            }
            return result;
          };
        };
      }
  
      /**
       * Creates a function for `_.forEach` or `_.forEachRight`.
       *
       * @private
       * @param {Function} arrayFunc The function to iterate over an array.
       * @param {Function} eachFunc The function to iterate over a collection.
       * @returns {Function} Returns the new each function.
       */
      function createForEach(arrayFunc, eachFunc) {
        return function(collection, iteratee, thisArg) {
          return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection))
            ? arrayFunc(collection, iteratee)
            : eachFunc(collection, bindCallback(iteratee, thisArg, 3));
        };
      }
  
      /**
       * Creates a function for `_.forIn` or `_.forInRight`.
       *
       * @private
       * @param {Function} objectFunc The function to iterate over an object.
       * @returns {Function} Returns the new each function.
       */
      function createForIn(objectFunc) {
        return function(object, iteratee, thisArg) {
          if (typeof iteratee != 'function' || thisArg !== undefined) {
            iteratee = bindCallback(iteratee, thisArg, 3);
          }
          return objectFunc(object, iteratee, keysIn);
        };
      }
  
      /**
       * Creates a function for `_.forOwn` or `_.forOwnRight`.
       *
       * @private
       * @param {Function} objectFunc The function to iterate over an object.
       * @returns {Function} Returns the new each function.
       */
      function createForOwn(objectFunc) {
        return function(object, iteratee, thisArg) {
          if (typeof iteratee != 'function' || thisArg !== undefined) {
            iteratee = bindCallback(iteratee, thisArg, 3);
          }
          return objectFunc(object, iteratee);
        };
      }
  
      /**
       * Creates a function for `_.mapKeys` or `_.mapValues`.
       *
       * @private
       * @param {boolean} [isMapKeys] Specify mapping keys instead of values.
       * @returns {Function} Returns the new map function.
       */
      function createObjectMapper(isMapKeys) {
        return function(object, iteratee, thisArg) {
          var result = {};
          iteratee = getCallback(iteratee, thisArg, 3);
  
          baseForOwn(object, function(value, key, object) {
            var mapped = iteratee(value, key, object);
            key = isMapKeys ? mapped : key;
            value = isMapKeys ? value : mapped;
            result[key] = value;
          });
          return result;
        };
      }
  
      /**
       * Creates a function for `_.padLeft` or `_.padRight`.
       *
       * @private
       * @param {boolean} [fromRight] Specify padding from the right.
       * @returns {Function} Returns the new pad function.
       */
      function createPadDir(fromRight) {
        return function(string, length, chars) {
          string = baseToString(string);
          return (fromRight ? string : '') + createPadding(string, length, chars) + (fromRight ? '' : string);
        };
      }
  
      /**
       * Creates a `_.partial` or `_.partialRight` function.
       *
       * @private
       * @param {boolean} flag The partial bit flag.
       * @returns {Function} Returns the new partial function.
       */
      function createPartial(flag) {
        var partialFunc = restParam(function(func, partials) {
          var holders = replaceHolders(partials, partialFunc.placeholder);
          return createWrapper(func, flag, undefined, partials, holders);
        });
        return partialFunc;
      }
  
      /**
       * Creates a function for `_.reduce` or `_.reduceRight`.
       *
       * @private
       * @param {Function} arrayFunc The function to iterate over an array.
       * @param {Function} eachFunc The function to iterate over a collection.
       * @returns {Function} Returns the new each function.
       */
      function createReduce(arrayFunc, eachFunc) {
        return function(collection, iteratee, accumulator, thisArg) {
          var initFromArray = arguments.length < 3;
          return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection))
            ? arrayFunc(collection, iteratee, accumulator, initFromArray)
            : baseReduce(collection, getCallback(iteratee, thisArg, 4), accumulator, initFromArray, eachFunc);
        };
      }
  
      /**
       * Creates a function that wraps `func` and invokes it with optional `this`
       * binding of, partial application, and currying.
       *
       * @private
       * @param {Function|string} func The function or method name to reference.
       * @param {number} bitmask The bitmask of flags. See `createWrapper` for more details.
       * @param {*} [thisArg] The `this` binding of `func`.
       * @param {Array} [partials] The arguments to prepend to those provided to the new function.
       * @param {Array} [holders] The `partials` placeholder indexes.
       * @param {Array} [partialsRight] The arguments to append to those provided to the new function.
       * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
       * @param {Array} [argPos] The argument positions of the new function.
       * @param {number} [ary] The arity cap of `func`.
       * @param {number} [arity] The arity of `func`.
       * @returns {Function} Returns the new wrapped function.
       */
      function createHybridWrapper(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
        var isAry = bitmask & ARY_FLAG,
            isBind = bitmask & BIND_FLAG,
            isBindKey = bitmask & BIND_KEY_FLAG,
            isCurry = bitmask & CURRY_FLAG,
            isCurryBound = bitmask & CURRY_BOUND_FLAG,
            isCurryRight = bitmask & CURRY_RIGHT_FLAG,
            Ctor = isBindKey ? undefined : createCtorWrapper(func);
  
        function wrapper() {
          // Avoid `arguments` object use disqualifying optimizations by
          // converting it to an array before providing it to other functions.
          var length = arguments.length,
              index = length,
              args = Array(length);
  
          while (index--) {
            args[index] = arguments[index];
          }
          if (partials) {
            args = composeArgs(args, partials, holders);
          }
          if (partialsRight) {
            args = composeArgsRight(args, partialsRight, holdersRight);
          }
          if (isCurry || isCurryRight) {
            var placeholder = wrapper.placeholder,
                argsHolders = replaceHolders(args, placeholder);
  
            length -= argsHolders.length;
            if (length < arity) {
              var newArgPos = argPos ? arrayCopy(argPos) : undefined,
                  newArity = nativeMax(arity - length, 0),
                  newsHolders = isCurry ? argsHolders : undefined,
                  newHoldersRight = isCurry ? undefined : argsHolders,
                  newPartials = isCurry ? args : undefined,
                  newPartialsRight = isCurry ? undefined : args;
  
              bitmask |= (isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG);
              bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);
  
              if (!isCurryBound) {
                bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
              }
              var newData = [func, bitmask, thisArg, newPartials, newsHolders, newPartialsRight, newHoldersRight, newArgPos, ary, newArity],
                  result = createHybridWrapper.apply(undefined, newData);
  
              if (isLaziable(func)) {
                setData(result, newData);
              }
              result.placeholder = placeholder;
              return result;
            }
          }
          var thisBinding = isBind ? thisArg : this,
              fn = isBindKey ? thisBinding[func] : func;
  
          if (argPos) {
            args = reorder(args, argPos);
          }
          if (isAry && ary < args.length) {
            args.length = ary;
          }
          if (this && this !== root && this instanceof wrapper) {
            fn = Ctor || createCtorWrapper(func);
          }
          return fn.apply(thisBinding, args);
        }
        return wrapper;
      }
  
      /**
       * Creates the padding required for `string` based on the given `length`.
       * The `chars` string is truncated if the number of characters exceeds `length`.
       *
       * @private
       * @param {string} string The string to create padding for.
       * @param {number} [length=0] The padding length.
       * @param {string} [chars=' '] The string used as padding.
       * @returns {string} Returns the pad for `string`.
       */
      function createPadding(string, length, chars) {
        var strLength = string.length;
        length = +length;
  
        if (strLength >= length || !nativeIsFinite(length)) {
          return '';
        }
        var padLength = length - strLength;
        chars = chars == null ? ' ' : (chars + '');
        return repeat(chars, nativeCeil(padLength / chars.length)).slice(0, padLength);
      }
  
      /**
       * Creates a function that wraps `func` and invokes it with the optional `this`
       * binding of `thisArg` and the `partials` prepended to those provided to
       * the wrapper.
       *
       * @private
       * @param {Function} func The function to partially apply arguments to.
       * @param {number} bitmask The bitmask of flags. See `createWrapper` for more details.
       * @param {*} thisArg The `this` binding of `func`.
       * @param {Array} partials The arguments to prepend to those provided to the new function.
       * @returns {Function} Returns the new bound function.
       */
      function createPartialWrapper(func, bitmask, thisArg, partials) {
        var isBind = bitmask & BIND_FLAG,
            Ctor = createCtorWrapper(func);
  
        function wrapper() {
          // Avoid `arguments` object use disqualifying optimizations by
          // converting it to an array before providing it `func`.
          var argsIndex = -1,
              argsLength = arguments.length,
              leftIndex = -1,
              leftLength = partials.length,
              args = Array(leftLength + argsLength);
  
          while (++leftIndex < leftLength) {
            args[leftIndex] = partials[leftIndex];
          }
          while (argsLength--) {
            args[leftIndex++] = arguments[++argsIndex];
          }
          var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
          return fn.apply(isBind ? thisArg : this, args);
        }
        return wrapper;
      }
  
      /**
       * Creates a `_.ceil`, `_.floor`, or `_.round` function.
       *
       * @private
       * @param {string} methodName The name of the `Math` method to use when rounding.
       * @returns {Function} Returns the new round function.
       */
      function createRound(methodName) {
        var func = Math[methodName];
        return function(number, precision) {
          precision = precision === undefined ? 0 : (+precision || 0);
          if (precision) {
            precision = pow(10, precision);
            return func(number * precision) / precision;
          }
          return func(number);
        };
      }
  
      /**
       * Creates a `_.sortedIndex` or `_.sortedLastIndex` function.
       *
       * @private
       * @param {boolean} [retHighest] Specify returning the highest qualified index.
       * @returns {Function} Returns the new index function.
       */
      function createSortedIndex(retHighest) {
        return function(array, value, iteratee, thisArg) {
          var callback = getCallback(iteratee);
          return (iteratee == null && callback === baseCallback)
            ? binaryIndex(array, value, retHighest)
            : binaryIndexBy(array, value, callback(iteratee, thisArg, 1), retHighest);
        };
      }
  
      /**
       * Creates a function that either curries or invokes `func` with optional
       * `this` binding and partially applied arguments.
       *
       * @private
       * @param {Function|string} func The function or method name to reference.
       * @param {number} bitmask The bitmask of flags.
       *  The bitmask may be composed of the following flags:
       *     1 - `_.bind`
       *     2 - `_.bindKey`
       *     4 - `_.curry` or `_.curryRight` of a bound function
       *     8 - `_.curry`
       *    16 - `_.curryRight`
       *    32 - `_.partial`
       *    64 - `_.partialRight`
       *   128 - `_.rearg`
       *   256 - `_.ary`
       * @param {*} [thisArg] The `this` binding of `func`.
       * @param {Array} [partials] The arguments to be partially applied.
       * @param {Array} [holders] The `partials` placeholder indexes.
       * @param {Array} [argPos] The argument positions of the new function.
       * @param {number} [ary] The arity cap of `func`.
       * @param {number} [arity] The arity of `func`.
       * @returns {Function} Returns the new wrapped function.
       */
      function createWrapper(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
        var isBindKey = bitmask & BIND_KEY_FLAG;
        if (!isBindKey && typeof func != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        var length = partials ? partials.length : 0;
        if (!length) {
          bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
          partials = holders = undefined;
        }
        length -= (holders ? holders.length : 0);
        if (bitmask & PARTIAL_RIGHT_FLAG) {
          var partialsRight = partials,
              holdersRight = holders;
  
          partials = holders = undefined;
        }
        var data = isBindKey ? undefined : getData(func),
            newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity];
  
        if (data) {
          mergeData(newData, data);
          bitmask = newData[1];
          arity = newData[9];
        }
        newData[9] = arity == null
          ? (isBindKey ? 0 : func.length)
          : (nativeMax(arity - length, 0) || 0);
  
        if (bitmask == BIND_FLAG) {
          var result = createBindWrapper(newData[0], newData[2]);
        } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !newData[4].length) {
          result = createPartialWrapper.apply(undefined, newData);
        } else {
          result = createHybridWrapper.apply(undefined, newData);
        }
        var setter = data ? baseSetData : setData;
        return setter(result, newData);
      }
  
      /**
       * A specialized version of `baseIsEqualDeep` for arrays with support for
       * partial deep comparisons.
       *
       * @private
       * @param {Array} array The array to compare.
       * @param {Array} other The other array to compare.
       * @param {Function} equalFunc The function to determine equivalents of values.
       * @param {Function} [customizer] The function to customize comparing arrays.
       * @param {boolean} [isLoose] Specify performing partial comparisons.
       * @param {Array} [stackA] Tracks traversed `value` objects.
       * @param {Array} [stackB] Tracks traversed `other` objects.
       * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
       */
      function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
        var index = -1,
            arrLength = array.length,
            othLength = other.length;
  
        if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
          return false;
        }
        // Ignore non-index properties.
        while (++index < arrLength) {
          var arrValue = array[index],
              othValue = other[index],
              result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;
  
          if (result !== undefined) {
            if (result) {
              continue;
            }
            return false;
          }
          // Recursively compare arrays (susceptible to call stack limits).
          if (isLoose) {
            if (!arraySome(other, function(othValue) {
                  return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
                })) {
              return false;
            }
          } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
            return false;
          }
        }
        return true;
      }
  
      /**
       * A specialized version of `baseIsEqualDeep` for comparing objects of
       * the same `toStringTag`.
       *
       * **Note:** This function only supports comparing values with tags of
       * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
       *
       * @private
       * @param {Object} object The object to compare.
       * @param {Object} other The other object to compare.
       * @param {string} tag The `toStringTag` of the objects to compare.
       * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
       */
      function equalByTag(object, other, tag) {
        switch (tag) {
          case boolTag:
          case dateTag:
            // Coerce dates and booleans to numbers, dates to milliseconds and booleans
            // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
            return +object == +other;
  
          case errorTag:
            return object.name == other.name && object.message == other.message;
  
          case numberTag:
            // Treat `NaN` vs. `NaN` as equal.
            return (object != +object)
              ? other != +other
              : object == +other;
  
          case regexpTag:
          case stringTag:
            // Coerce regexes to strings and treat strings primitives and string
            // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
            return object == (other + '');
        }
        return false;
      }
  
      /**
       * A specialized version of `baseIsEqualDeep` for objects with support for
       * partial deep comparisons.
       *
       * @private
       * @param {Object} object The object to compare.
       * @param {Object} other The other object to compare.
       * @param {Function} equalFunc The function to determine equivalents of values.
       * @param {Function} [customizer] The function to customize comparing values.
       * @param {boolean} [isLoose] Specify performing partial comparisons.
       * @param {Array} [stackA] Tracks traversed `value` objects.
       * @param {Array} [stackB] Tracks traversed `other` objects.
       * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
       */
      function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
        var objProps = keys(object),
            objLength = objProps.length,
            othProps = keys(other),
            othLength = othProps.length;
  
        if (objLength != othLength && !isLoose) {
          return false;
        }
        var index = objLength;
        while (index--) {
          var key = objProps[index];
          if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
            return false;
          }
        }
        var skipCtor = isLoose;
        while (++index < objLength) {
          key = objProps[index];
          var objValue = object[key],
              othValue = other[key],
              result = customizer ? customizer(isLoose ? othValue : objValue, isLoose? objValue : othValue, key) : undefined;
  
          // Recursively compare objects (susceptible to call stack limits).
          if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
            return false;
          }
          skipCtor || (skipCtor = key == 'constructor');
        }
        if (!skipCtor) {
          var objCtor = object.constructor,
              othCtor = other.constructor;
  
          // Non `Object` object instances with different constructors are not equal.
          if (objCtor != othCtor &&
              ('constructor' in object && 'constructor' in other) &&
              !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
                typeof othCtor == 'function' && othCtor instanceof othCtor)) {
            return false;
          }
        }
        return true;
      }
  
      /**
       * Gets the appropriate "callback" function. If the `_.callback` method is
       * customized this function returns the custom method, otherwise it returns
       * the `baseCallback` function. If arguments are provided the chosen function
       * is invoked with them and its result is returned.
       *
       * @private
       * @returns {Function} Returns the chosen function or its result.
       */
      function getCallback(func, thisArg, argCount) {
        var result = lodash.callback || callback;
        result = result === callback ? baseCallback : result;
        return argCount ? result(func, thisArg, argCount) : result;
      }
  
      /**
       * Gets metadata for `func`.
       *
       * @private
       * @param {Function} func The function to query.
       * @returns {*} Returns the metadata for `func`.
       */
      var getData = !metaMap ? noop : function(func) {
        return metaMap.get(func);
      };
  
      /**
       * Gets the name of `func`.
       *
       * @private
       * @param {Function} func The function to query.
       * @returns {string} Returns the function name.
       */
      function getFuncName(func) {
        var result = func.name,
            array = realNames[result],
            length = array ? array.length : 0;
  
        while (length--) {
          var data = array[length],
              otherFunc = data.func;
          if (otherFunc == null || otherFunc == func) {
            return data.name;
          }
        }
        return result;
      }
  
      /**
       * Gets the appropriate "indexOf" function. If the `_.indexOf` method is
       * customized this function returns the custom method, otherwise it returns
       * the `baseIndexOf` function. If arguments are provided the chosen function
       * is invoked with them and its result is returned.
       *
       * @private
       * @returns {Function|number} Returns the chosen function or its result.
       */
      function getIndexOf(collection, target, fromIndex) {
        var result = lodash.indexOf || indexOf;
        result = result === indexOf ? baseIndexOf : result;
        return collection ? result(collection, target, fromIndex) : result;
      }
  
      /**
       * Gets the "length" property value of `object`.
       *
       * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
       * that affects Safari on at least iOS 8.1-8.3 ARM64.
       *
       * @private
       * @param {Object} object The object to query.
       * @returns {*} Returns the "length" value.
       */
      var getLength = baseProperty('length');
  
      /**
       * Gets the propery names, values, and compare flags of `object`.
       *
       * @private
       * @param {Object} object The object to query.
       * @returns {Array} Returns the match data of `object`.
       */
      function getMatchData(object) {
        var result = pairs(object),
            length = result.length;
  
        while (length--) {
          result[length][2] = isStrictComparable(result[length][1]);
        }
        return result;
      }
  
      /**
       * Gets the native function at `key` of `object`.
       *
       * @private
       * @param {Object} object The object to query.
       * @param {string} key The key of the method to get.
       * @returns {*} Returns the function if it's native, else `undefined`.
       */
      function getNative(object, key) {
        var value = object == null ? undefined : object[key];
        return isNative(value) ? value : undefined;
      }
  
      /**
       * Gets the view, applying any `transforms` to the `start` and `end` positions.
       *
       * @private
       * @param {number} start The start of the view.
       * @param {number} end The end of the view.
       * @param {Array} transforms The transformations to apply to the view.
       * @returns {Object} Returns an object containing the `start` and `end`
       *  positions of the view.
       */
      function getView(start, end, transforms) {
        var index = -1,
            length = transforms.length;
  
        while (++index < length) {
          var data = transforms[index],
              size = data.size;
  
          switch (data.type) {
            case 'drop':      start += size; break;
            case 'dropRight': end -= size; break;
            case 'take':      end = nativeMin(end, start + size); break;
            case 'takeRight': start = nativeMax(start, end - size); break;
          }
        }
        return { 'start': start, 'end': end };
      }
  
      /**
       * Initializes an array clone.
       *
       * @private
       * @param {Array} array The array to clone.
       * @returns {Array} Returns the initialized clone.
       */
      function initCloneArray(array) {
        var length = array.length,
            result = new array.constructor(length);
  
        // Add array properties assigned by `RegExp#exec`.
        if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
          result.index = array.index;
          result.input = array.input;
        }
        return result;
      }
  
      /**
       * Initializes an object clone.
       *
       * @private
       * @param {Object} object The object to clone.
       * @returns {Object} Returns the initialized clone.
       */
      function initCloneObject(object) {
        var Ctor = object.constructor;
        if (!(typeof Ctor == 'function' && Ctor instanceof Ctor)) {
          Ctor = Object;
        }
        return new Ctor;
      }
  
      /**
       * Initializes an object clone based on its `toStringTag`.
       *
       * **Note:** This function only supports cloning values with tags of
       * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
       *
       * @private
       * @param {Object} object The object to clone.
       * @param {string} tag The `toStringTag` of the object to clone.
       * @param {boolean} [isDeep] Specify a deep clone.
       * @returns {Object} Returns the initialized clone.
       */
      function initCloneByTag(object, tag, isDeep) {
        var Ctor = object.constructor;
        switch (tag) {
          case arrayBufferTag:
            return bufferClone(object);
  
          case boolTag:
          case dateTag:
            return new Ctor(+object);
  
          case float32Tag: case float64Tag:
          case int8Tag: case int16Tag: case int32Tag:
          case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
            var buffer = object.buffer;
            return new Ctor(isDeep ? bufferClone(buffer) : buffer, object.byteOffset, object.length);
  
          case numberTag:
          case stringTag:
            return new Ctor(object);
  
          case regexpTag:
            var result = new Ctor(object.source, reFlags.exec(object));
            result.lastIndex = object.lastIndex;
        }
        return result;
      }
  
      /**
       * Invokes the method at `path` on `object`.
       *
       * @private
       * @param {Object} object The object to query.
       * @param {Array|string} path The path of the method to invoke.
       * @param {Array} args The arguments to invoke the method with.
       * @returns {*} Returns the result of the invoked method.
       */
      function invokePath(object, path, args) {
        if (object != null && !isKey(path, object)) {
          path = toPath(path);
          object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
          path = last(path);
        }
        var func = object == null ? object : object[path];
        return func == null ? undefined : func.apply(object, args);
      }
  
      /**
       * Checks if `value` is array-like.
       *
       * @private
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
       */
      function isArrayLike(value) {
        return value != null && isLength(getLength(value));
      }
  
      /**
       * Checks if `value` is a valid array-like index.
       *
       * @private
       * @param {*} value The value to check.
       * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
       * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
       */
      function isIndex(value, length) {
        value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
        length = length == null ? MAX_SAFE_INTEGER : length;
        return value > -1 && value % 1 == 0 && value < length;
      }
  
      /**
       * Checks if the provided arguments are from an iteratee call.
       *
       * @private
       * @param {*} value The potential iteratee value argument.
       * @param {*} index The potential iteratee index or key argument.
       * @param {*} object The potential iteratee object argument.
       * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
       */
      function isIterateeCall(value, index, object) {
        if (!isObject(object)) {
          return false;
        }
        var type = typeof index;
        if (type == 'number'
            ? (isArrayLike(object) && isIndex(index, object.length))
            : (type == 'string' && index in object)) {
          var other = object[index];
          return value === value ? (value === other) : (other !== other);
        }
        return false;
      }
  
      /**
       * Checks if `value` is a property name and not a property path.
       *
       * @private
       * @param {*} value The value to check.
       * @param {Object} [object] The object to query keys on.
       * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
       */
      function isKey(value, object) {
        var type = typeof value;
        if ((type == 'string' && reIsPlainProp.test(value)) || type == 'number') {
          return true;
        }
        if (isArray(value)) {
          return false;
        }
        var result = !reIsDeepProp.test(value);
        return result || (object != null && value in toObject(object));
      }
  
      /**
       * Checks if `func` has a lazy counterpart.
       *
       * @private
       * @param {Function} func The function to check.
       * @returns {boolean} Returns `true` if `func` has a lazy counterpart, else `false`.
       */
      function isLaziable(func) {
        var funcName = getFuncName(func);
        if (!(funcName in LazyWrapper.prototype)) {
          return false;
        }
        var other = lodash[funcName];
        if (func === other) {
          return true;
        }
        var data = getData(other);
        return !!data && func === data[0];
      }
  
      /**
       * Checks if `value` is a valid array-like length.
       *
       * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
       *
       * @private
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
       */
      function isLength(value) {
        return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
      }
  
      /**
       * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
       *
       * @private
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` if suitable for strict
       *  equality comparisons, else `false`.
       */
      function isStrictComparable(value) {
        return value === value && !isObject(value);
      }
  
      /**
       * Merges the function metadata of `source` into `data`.
       *
       * Merging metadata reduces the number of wrappers required to invoke a function.
       * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
       * may be applied regardless of execution order. Methods like `_.ary` and `_.rearg`
       * augment function arguments, making the order in which they are executed important,
       * preventing the merging of metadata. However, we make an exception for a safe
       * common case where curried functions have `_.ary` and or `_.rearg` applied.
       *
       * @private
       * @param {Array} data The destination metadata.
       * @param {Array} source The source metadata.
       * @returns {Array} Returns `data`.
       */
      function mergeData(data, source) {
        var bitmask = data[1],
            srcBitmask = source[1],
            newBitmask = bitmask | srcBitmask,
            isCommon = newBitmask < ARY_FLAG;
  
        var isCombo =
          (srcBitmask == ARY_FLAG && bitmask == CURRY_FLAG) ||
          (srcBitmask == ARY_FLAG && bitmask == REARG_FLAG && data[7].length <= source[8]) ||
          (srcBitmask == (ARY_FLAG | REARG_FLAG) && bitmask == CURRY_FLAG);
  
        // Exit early if metadata can't be merged.
        if (!(isCommon || isCombo)) {
          return data;
        }
        // Use source `thisArg` if available.
        if (srcBitmask & BIND_FLAG) {
          data[2] = source[2];
          // Set when currying a bound function.
          newBitmask |= (bitmask & BIND_FLAG) ? 0 : CURRY_BOUND_FLAG;
        }
        // Compose partial arguments.
        var value = source[3];
        if (value) {
          var partials = data[3];
          data[3] = partials ? composeArgs(partials, value, source[4]) : arrayCopy(value);
          data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : arrayCopy(source[4]);
        }
        // Compose partial right arguments.
        value = source[5];
        if (value) {
          partials = data[5];
          data[5] = partials ? composeArgsRight(partials, value, source[6]) : arrayCopy(value);
          data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : arrayCopy(source[6]);
        }
        // Use source `argPos` if available.
        value = source[7];
        if (value) {
          data[7] = arrayCopy(value);
        }
        // Use source `ary` if it's smaller.
        if (srcBitmask & ARY_FLAG) {
          data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
        }
        // Use source `arity` if one is not provided.
        if (data[9] == null) {
          data[9] = source[9];
        }
        // Use source `func` and merge bitmasks.
        data[0] = source[0];
        data[1] = newBitmask;
  
        return data;
      }
  
      /**
       * Used by `_.defaultsDeep` to customize its `_.merge` use.
       *
       * @private
       * @param {*} objectValue The destination object property value.
       * @param {*} sourceValue The source object property value.
       * @returns {*} Returns the value to assign to the destination object.
       */
      function mergeDefaults(objectValue, sourceValue) {
        return objectValue === undefined ? sourceValue : merge(objectValue, sourceValue, mergeDefaults);
      }
  
      /**
       * A specialized version of `_.pick` which picks `object` properties specified
       * by `props`.
       *
       * @private
       * @param {Object} object The source object.
       * @param {string[]} props The property names to pick.
       * @returns {Object} Returns the new object.
       */
      function pickByArray(object, props) {
        object = toObject(object);
  
        var index = -1,
            length = props.length,
            result = {};
  
        while (++index < length) {
          var key = props[index];
          if (key in object) {
            result[key] = object[key];
          }
        }
        return result;
      }
  
      /**
       * A specialized version of `_.pick` which picks `object` properties `predicate`
       * returns truthy for.
       *
       * @private
       * @param {Object} object The source object.
       * @param {Function} predicate The function invoked per iteration.
       * @returns {Object} Returns the new object.
       */
      function pickByCallback(object, predicate) {
        var result = {};
        baseForIn(object, function(value, key, object) {
          if (predicate(value, key, object)) {
            result[key] = value;
          }
        });
        return result;
      }
  
      /**
       * Reorder `array` according to the specified indexes where the element at
       * the first index is assigned as the first element, the element at
       * the second index is assigned as the second element, and so on.
       *
       * @private
       * @param {Array} array The array to reorder.
       * @param {Array} indexes The arranged array indexes.
       * @returns {Array} Returns `array`.
       */
      function reorder(array, indexes) {
        var arrLength = array.length,
            length = nativeMin(indexes.length, arrLength),
            oldArray = arrayCopy(array);
  
        while (length--) {
          var index = indexes[length];
          array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
        }
        return array;
      }
  
      /**
       * Sets metadata for `func`.
       *
       * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
       * period of time, it will trip its breaker and transition to an identity function
       * to avoid garbage collection pauses in V8. See [V8 issue 2070](https://code.google.com/p/v8/issues/detail?id=2070)
       * for more details.
       *
       * @private
       * @param {Function} func The function to associate metadata with.
       * @param {*} data The metadata.
       * @returns {Function} Returns `func`.
       */
      var setData = (function() {
        var count = 0,
            lastCalled = 0;
  
        return function(key, value) {
          var stamp = now(),
              remaining = HOT_SPAN - (stamp - lastCalled);
  
          lastCalled = stamp;
          if (remaining > 0) {
            if (++count >= HOT_COUNT) {
              return key;
            }
          } else {
            count = 0;
          }
          return baseSetData(key, value);
        };
      }());
  
      /**
       * A fallback implementation of `Object.keys` which creates an array of the
       * own enumerable property names of `object`.
       *
       * @private
       * @param {Object} object The object to query.
       * @returns {Array} Returns the array of property names.
       */
      function shimKeys(object) {
        var props = keysIn(object),
            propsLength = props.length,
            length = propsLength && object.length;
  
        var allowIndexes = !!length && isLength(length) &&
          (isArray(object) || isArguments(object));
  
        var index = -1,
            result = [];
  
        while (++index < propsLength) {
          var key = props[index];
          if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
            result.push(key);
          }
        }
        return result;
      }
  
      /**
       * Converts `value` to an array-like object if it's not one.
       *
       * @private
       * @param {*} value The value to process.
       * @returns {Array|Object} Returns the array-like object.
       */
      function toIterable(value) {
        if (value == null) {
          return [];
        }
        if (!isArrayLike(value)) {
          return values(value);
        }
        return isObject(value) ? value : Object(value);
      }
  
      /**
       * Converts `value` to an object if it's not one.
       *
       * @private
       * @param {*} value The value to process.
       * @returns {Object} Returns the object.
       */
      function toObject(value) {
        return isObject(value) ? value : Object(value);
      }
  
      /**
       * Converts `value` to property path array if it's not one.
       *
       * @private
       * @param {*} value The value to process.
       * @returns {Array} Returns the property path array.
       */
      function toPath(value) {
        if (isArray(value)) {
          return value;
        }
        var result = [];
        baseToString(value).replace(rePropName, function(match, number, quote, string) {
          result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
        });
        return result;
      }
  
      /**
       * Creates a clone of `wrapper`.
       *
       * @private
       * @param {Object} wrapper The wrapper to clone.
       * @returns {Object} Returns the cloned wrapper.
       */
      function wrapperClone(wrapper) {
        return wrapper instanceof LazyWrapper
          ? wrapper.clone()
          : new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__, arrayCopy(wrapper.__actions__));
      }
  
      /*------------------------------------------------------------------------*/
  
      /**
       * Creates an array of elements split into groups the length of `size`.
       * If `collection` can't be split evenly, the final chunk will be the remaining
       * elements.
       *
       * @static
       * @memberOf _
       * @category Array
       * @param {Array} array The array to process.
       * @param {number} [size=1] The length of each chunk.
       * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
       * @returns {Array} Returns the new array containing chunks.
       * @example
       *
       * _.chunk(['a', 'b', 'c', 'd'], 2);
       * // => [['a', 'b'], ['c', 'd']]
       *
       * _.chunk(['a', 'b', 'c', 'd'], 3);
       * // => [['a', 'b', 'c'], ['d']]
       */
      function chunk(array, size, guard) {
        if (guard ? isIterateeCall(array, size, guard) : size == null) {
          size = 1;
        } else {
          size = nativeMax(nativeFloor(size) || 1, 1);
        }
        var index = 0,
            length = array ? array.length : 0,
            resIndex = -1,
            result = Array(nativeCeil(length / size));
  
        while (index < length) {
          result[++resIndex] = baseSlice(array, index, (index += size));
        }
        return result;
      }
  
      /**
       * Creates an array with all falsey values removed. The values `false`, `null`,
       * `0`, `""`, `undefined`, and `NaN` are falsey.
       *
       * @static
       * @memberOf _
       * @category Array
       * @param {Array} array The array to compact.
       * @returns {Array} Returns the new array of filtered values.
       * @example
       *
       * _.compact([0, 1, false, 2, '', 3]);
       * // => [1, 2, 3]
       */
      function compact(array) {
        var index = -1,
            length = array ? array.length : 0,
            resIndex = -1,
            result = [];
  
        while (++index < length) {
          var value = array[index];
          if (value) {
            result[++resIndex] = value;
          }
        }
        return result;
      }
  
      /**
       * Creates an array of unique `array` values not included in the other
       * provided arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
       * for equality comparisons.
       *
       * @static
       * @memberOf _
       * @category Array
       * @param {Array} array The array to inspect.
       * @param {...Array} [values] The arrays of values to exclude.
       * @returns {Array} Returns the new array of filtered values.
       * @example
       *
       * _.difference([1, 2, 3], [4, 2]);
       * // => [1, 3]
       */
      var difference = restParam(function(array, values) {
        return (isObjectLike(array) && isArrayLike(array))
          ? baseDifference(array, baseFlatten(values, false, true))
          : [];
      });
  
      /**
       * Creates a slice of `array` with `n` elements dropped from the beginning.
       *
       * @static
       * @memberOf _
       * @category Array
       * @param {Array} array The array to query.
       * @param {number} [n=1] The number of elements to drop.
       * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
       * @returns {Array} Returns the slice of `array`.
       * @example
       *
       * _.drop([1, 2, 3]);
       * // => [2, 3]
       *
       * _.drop([1, 2, 3], 2);
       * // => [3]
       *
       * _.drop([1, 2, 3], 5);
       * // => []
       *
       * _.drop([1, 2, 3], 0);
       * // => [1, 2, 3]
       */
      function drop(array, n, guard) {
        var length = array ? array.length : 0;
        if (!length) {
          return [];
        }
        if (guard ? isIterateeCall(array, n, guard) : n == null) {
          n = 1;
        }
        return baseSlice(array, n < 0 ? 0 : n);
      }
  
      /**
       * Creates a slice of `array` with `n` elements dropped from the end.
       *
       * @static
       * @memberOf _
       * @category Array
       * @param {Array} array The array to query.
       * @param {number} [n=1] The number of elements to drop.
       * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
       * @returns {Array} Returns the slice of `array`.
       * @example
       *
       * _.dropRight([1, 2, 3]);
       * // => [1, 2]
       *
       * _.dropRight([1, 2, 3], 2);
       * // => [1]
       *
       * _.dropRight([1, 2, 3], 5);
       * // => []
       *
       * _.dropRight([1, 2, 3], 0);
       * // => [1, 2, 3]
       */
      function dropRight(array, n, guard) {
        var length = array ? array.length : 0;
        if (!length) {
          return [];
        }
        if (guard ? isIterateeCall(array, n, guard) : n == null) {
          n = 1;
        }
        n = length - (+n || 0);
        return baseSlice(array, 0, n < 0 ? 0 : n);
      }
  
      /**
       * Creates a slice of `array` excluding elements dropped from the end.
       * Elements are dropped until `predicate` returns falsey. The predicate is
       * bound to `thisArg` and invoked with three arguments: (value, index, array).
       *
       * If a property name is provided for `predicate` the created `_.property`
       * style callback returns the property value of the given element.
       *
       * If a value is also provided for `thisArg` the created `_.matchesProperty`
       * style callback returns `true` for elements that have a matching property
       * value, else `false`.
       *
       * If an object is provided for `predicate` the created `_.matches` style
       * callback returns `true` for elements that match the properties of the given
       * object, else `false`.
       *
       * @static
       * @memberOf _
       * @category Array
       * @param {Array} array The array to query.
       * @param {Function|Object|string} [predicate=_.identity] The function invoked
       *  per iteration.
       * @param {*} [thisArg] The `this` binding of `predicate`.
       * @returns {Array} Returns the slice of `array`.
       * @example
       *
       * _.dropRightWhile([1, 2, 3], function(n) {
       *   return n > 1;
       * });
       * // => [1]
       *
       * var users = [
       *   { 'user': 'barney',  'active': true },
       *   { 'user': 'fred',    'active': false },
       *   { 'user': 'pebbles', 'active': false }
       * ];
       *
       * // using the `_.matches` callback shorthand
       * _.pluck(_.dropRightWhile(users, { 'user': 'pebbles', 'active': false }), 'user');
       * // => ['barney', 'fred']
       *
       * // using the `_.matchesProperty` callback shorthand
       * _.pluck(_.dropRightWhile(users, 'active', false), 'user');
       * // => ['barney']
       *
       * // using the `_.property` callback shorthand
       * _.pluck(_.dropRightWhile(users, 'active'), 'user');
       * // => ['barney', 'fred', 'pebbles']
       */
      function dropRightWhile(array, predicate, thisArg) {
        return (array && array.length)
          ? baseWhile(array, getCallback(predicate, thisArg, 3), true, true)
          : [];
      }
  
      /**
       * Creates a slice of `array` excluding elements dropped from the beginning.
       * Elements are dropped until `predicate` returns falsey. The predicate is
       * bound to `thisArg` and invoked with three arguments: (value, index, array).
       *
       * If a property name is provided for `predicate` the created `_.property`
       * style callback returns the property value of the given element.
       *
       * If a value is also provided for `thisArg` the created `_.matchesProperty`
       * style callback returns `true` for elements that have a matching property
       * value, else `false`.
       *
       * If an object is provided for `predicate` the created `_.matches` style
       * callback returns `true` for elements that have the properties of the given
       * object, else `false`.
       *
       * @static
       * @memberOf _
       * @category Array
       * @param {Array} array The array to query.
       * @param {Function|Object|string} [predicate=_.identity] The function invoked
       *  per iteration.
       * @param {*} [thisArg] The `this` binding of `predicate`.
       * @returns {Array} Returns the slice of `array`.
       * @example
       *
       * _.dropWhile([1, 2, 3], function(n) {
       *   return n < 3;
       * });
       * // => [3]
       *
       * var users = [
       *   { 'user': 'barney',  'active': false },
       *   { 'user': 'fred',    'active': false },
       *   { 'user': 'pebbles', 'active': true }
       * ];
       *
       * // using the `_.matches` callback shorthand
       * _.pluck(_.dropWhile(users, { 'user': 'barney', 'active': false }), 'user');
       * // => ['fred', 'pebbles']
       *
       * // using the `_.matchesProperty` callback shorthand
       * _.pluck(_.dropWhile(users, 'active', false), 'user');
       * // => ['pebbles']
       *
       * // using the `_.property` callback shorthand
       * _.pluck(_.dropWhile(users, 'active'), 'user');
       * // => ['barney', 'fred', 'pebbles']
       */
      function dropWhile(array, predicate, thisArg) {
        return (array && array.length)
          ? baseWhile(array, getCallback(predicate, thisArg, 3), true)
          : [];
      }
  
      /**
       * Fills elements of `array` with `value` from `start` up to, but not
       * including, `end`.
       *
       * **Note:** This method mutates `array`.
       *
       * @static
       * @memberOf _
       * @category Array
       * @param {Array} array The array to fill.
       * @param {*} value The value to fill `array` with.
       * @param {number} [start=0] The start position.
       * @param {number} [end=array.length] The end position.
       * @returns {Array} Returns `array`.
       * @example
       *
       * var array = [1, 2, 3];
       *
       * _.fill(array, 'a');
       * console.log(array);
       * // => ['a', 'a', 'a']
       *
       * _.fill(Array(3), 2);
       * // => [2, 2, 2]
       *
       * _.fill([4, 6, 8], '*', 1, 2);
       * // => [4, '*', 8]
       */
      function fill(array, value, start, end) {
        var length = array ? array.length : 0;
        if (!length) {
          return [];
        }
        if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
          start = 0;
          end = length;
        }
        return baseFill(array, value, start, end);
      }
  
      /**
       * This method is like `_.find` except that it returns the index of the first
       * element `predicate` returns truthy for instead of the element itself.
       *
       * If a property name is provided for `predicate` the created `_.property`
       * style callback returns the property value of the given element.
       *
       * If a value is also provided for `thisArg` the created `_.matchesProperty`
       * style callback returns `true` for elements that have a matching property
       * value, else `false`.
       *
       * If an object is provided for `predicate` the created `_.matches` style
       * callback returns `true` for elements that have the properties of the given
       * object, else `false`.
       *
       * @static
       * @memberOf _
       * @category Array
       * @param {Array} array The array to search.
       * @param {Function|Object|string} [predicate=_.identity] The function invoked
       *  per iteration.
       * @param {*} [thisArg] The `this` binding of `predicate`.
       * @returns {number} Returns the index of the found element, else `-1`.
       * @example
       *
       * var users = [
       *   { 'user': 'barney',  'active': false },
       *   { 'user': 'fred',    'active': false },
       *   { 'user': 'pebbles', 'active': true }
       * ];
       *
       * _.findIndex(users, function(chr) {
       *   return chr.user == 'barney';
       * });
       * // => 0
       *
       * // using the `_.matches` callback shorthand
       * _.findIndex(users, { 'user': 'fred', 'active': false });
       * // => 1
       *
       * // using the `_.matchesProperty` callback shorthand
       * _.findIndex(users, 'active', false);
       * // => 0
       *
       * // using the `_.property` callback shorthand
       * _.findIndex(users, 'active');
       * // => 2
       */
      var findIndex = createFindIndex();
  
      /**
       * This method is like `_.findIndex` except that it iterates over elements
       * of `collection` from right to left.
       *
       * If a property name is provided for `predicate` the created `_.property`
       * style callback returns the property value of the given element.
       *
       * If a value is also provided for `thisArg` the created `_.matchesProperty`
       * style callback returns `true` for elements that have a matching property
       * value, else `false`.
       *
       * If an object is provided for `predicate` the created `_.matches` style
       * callback returns `true` for elements that have the properties of the given
       * object, else `false`.
       *
       * @static
       * @memberOf _
       * @category Array
       * @param {Array} array The array to search.
       * @param {Function|Object|string} [predicate=_.identity] The function invoked
       *  per iteration.
       * @param {*} [thisArg] The `this` binding of `predicate`.
       * @returns {number} Returns the index of the found element, else `-1`.
       * @example
       *
       * var users = [
       *   { 'user': 'barney',  'active': true },
       *   { 'user': 'fred',    'active': false },
       *   { 'user': 'pebbles', 'active': false }
       * ];
       *
       * _.findLastIndex(users, function(chr) {
       *   return chr.user == 'pebbles';
       * });
       * // => 2
       *
       * // using the `_.matches` callback shorthand
       * _.findLastIndex(users, { 'user': 'barney', 'active': true });
       * // => 0
       *
       * // using the `_.matchesProperty` callback shorthand
       * _.findLastIndex(users, 'active', false);
       * // => 2
       *
       * // using the `_.property` callback shorthand
       * _.findLastIndex(users, 'active');
       * // => 0
       */
      var findLastIndex = createFindIndex(true);
  
      /**
       * Gets the first element of `array`.
       *
       * @static
       * @memberOf _
       * @alias head
       * @category Array
       * @param {Array} array The array to query.
       * @returns {*} Returns the first element of `array`.
       * @example
       *
       * _.first([1, 2, 3]);
       * // => 1
       *
       * _.first([]);
       * // => undefined
       */
      function first(array) {
        return array ? array[0] : undefined;
      }
  
      /**
       * Flattens a nested array. If `isDeep` is `true` the array is recursively
       * flattened, otherwise it is only flattened a single level.
       *
       * @static
       * @memberOf _
       * @category Array
       * @param {Array} array The array to flatten.
       * @param {boolean} [isDeep] Specify a deep flatten.
       * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
       * @returns {Array} Returns the new flattened array.
       * @example
       *
       * _.flatten([1, [2, 3, [4]]]);
       * // => [1, 2, 3, [4]]
       *
       * // using `isDeep`
       * _.flatten([1, [2, 3, [4]]], true);
       * // => [1, 2, 3, 4]
       */
      function flatten(array, isDeep, guard) {
        var length = array ? array.length : 0;
        if (guard && isIterateeCall(array, isDeep, guard)) {
          isDeep = false;
        }
        return length ? baseFlatten(array, isDeep) : [];
      }
  
      /**
       * Recursively flattens a nested array.
       *
       * @static
       * @memberOf _
       * @category Array
       * @param {Array} array The array to recursively flatten.
       * @returns {Array} Returns the new flattened array.
       * @example
       *
       * _.flattenDeep([1, [2, 3, [4]]]);
       * // => [1, 2, 3, 4]
       */
      function flattenDeep(array) {
        var length = array ? array.length : 0;
        return length ? baseFlatten(array, true) : [];
      }
  
      /**
       * Gets the index at which the first occurrence of `value` is found in `array`
       * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
       * for equality comparisons. If `fromIndex` is negative, it is used as the offset
       * from the end of `array`. If `array` is sorted providing `true` for `fromIndex`
       * performs a faster binary search.
       *
       * @static
       * @memberOf _
       * @category Array
       * @param {Array} array The array to search.
       * @param {*} value The value to search for.
       * @param {boolean|number} [fromIndex=0] The index to search from or `true`
       *  to perform a binary search on a sorted array.
       * @returns {number} Returns the index of the matched value, else `-1`.
       * @example
       *
       * _.indexOf([1, 2, 1, 2], 2);
       * // => 1
       *
       * // using `fromIndex`
       * _.indexOf([1, 2, 1, 2], 2, 2);
       * // => 3
       *
       * // performing a binary search
       * _.indexOf([1, 1, 2, 2], 2, true);
       * // => 2
       */
      function indexOf(array, value, fromIndex) {
        var length = array ? array.length : 0;
        if (!length) {
          return -1;
        }
        if (typeof fromIndex == 'number') {
          fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : fromIndex;
        } else if (fromIndex) {
          var index = binaryIndex(array, value);
          if (index < length &&
              (value === value ? (value === array[index]) : (array[index] !== array[index]))) {
            return index;
          }
          return -1;
        }
        return baseIndexOf(array, value, fromIndex || 0);
      }
  
      /**
       * Gets all but the last element of `array`.
       *
       * @static
       * @memberOf _
       * @category Array
       * @param {Array} array The array to query.
       * @returns {Array} Returns the slice of `array`.
       * @example
       *
       * _.initial([1, 2, 3]);
       * // => [1, 2]
       */
      function initial(array) {
        return dropRight(array, 1);
      }
  
      /**
       * Creates an array of unique values that are included in all of the provided
       * arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
       * for equality comparisons.
       *
       * @static
       * @memberOf _
       * @category Array
       * @param {...Array} [arrays] The arrays to inspect.
       * @returns {Array} Returns the new array of shared values.
       * @example
       * _.intersection([1, 2], [4, 2], [2, 1]);
       * // => [2]
       */
      var intersection = restParam(function(arrays) {
        var othLength = arrays.length,
            othIndex = othLength,
            caches = Array(length),
            indexOf = getIndexOf(),
            isCommon = indexOf == baseIndexOf,
            result = [];
  
        while (othIndex--) {
          var value = arrays[othIndex] = isArrayLike(value = arrays[othIndex]) ? value : [];
          caches[othIndex] = (isCommon && value.length >= 120) ? createCache(othIndex && value) : null;
        }
        var array = arrays[0],
            index = -1,
            length = array ? array.length : 0,
            seen = caches[0];
  
        outer:
        while (++index < length) {
          value = array[index];
          if ((seen ? cacheIndexOf(seen, value) : indexOf(result, value, 0)) < 0) {
            var othIndex = othLength;
            while (--othIndex) {
              var cache = caches[othIndex];
              if ((cache ? cacheIndexOf(cache, value) : indexOf(arrays[othIndex], value, 0)) < 0) {
                continue outer;
              }
            }
            if (seen) {
              seen.push(value);
            }
            result.push(value);
          }
        }
        return result;
      });
  
      /**
       * Gets the last element of `array`.
       *
       * @static
       * @memberOf _
       * @category Array
       * @param {Array} array The array to query.
       * @returns {*} Returns the last element of `array`.
       * @example
       *
       * _.last([1, 2, 3]);
       * // => 3
       */
      function last(array) {
        var length = array ? array.length : 0;
        return length ? array[length - 1] : undefined;
      }
  
      /**
       * This method is like `_.indexOf` except that it iterates over elements of
       * `array` from right to left.
       *
       * @static
       * @memberOf _
       * @category Array
       * @param {Array} array The array to search.
       * @param {*} value The value to search for.
       * @param {boolean|number} [fromIndex=array.length-1] The index to search from
       *  or `true` to perform a binary search on a sorted array.
       * @returns {number} Returns the index of the matched value, else `-1`.
       * @example
       *
       * _.lastIndexOf([1, 2, 1, 2], 2);
       * // => 3
       *
       * // using `fromIndex`
       * _.lastIndexOf([1, 2, 1, 2], 2, 2);
       * // => 1
       *
       * // performing a binary search
       * _.lastIndexOf([1, 1, 2, 2], 2, true);
       * // => 3
       */
      function lastIndexOf(array, value, fromIndex) {
        var length = array ? array.length : 0;
        if (!length) {
          return -1;
        }
        var index = length;
        if (typeof fromIndex == 'number') {
          index = (fromIndex < 0 ? nativeMax(length + fromIndex, 0) : nativeMin(fromIndex || 0, length - 1)) + 1;
        } else if (fromIndex) {
          index = binaryIndex(array, value, true) - 1;
          var other = array[index];
          if (value === value ? (value === other) : (other !== other)) {
            return index;
          }
          return -1;
        }
        if (value !== value) {
          return indexOfNaN(array, index, true);
        }
        while (index--) {
          if (array[index] === value) {
            return index;
          }
        }
        return -1;
      }
  
      /**
       * Removes all provided values from `array` using
       * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
       * for equality comparisons.
       *
       * **Note:** Unlike `_.without`, this method mutates `array`.
       *
       * @static
       * @memberOf _
       * @category Array
       * @param {Array} array The array to modify.
       * @param {...*} [values] The values to remove.
       * @returns {Array} Returns `array`.
       * @example
       *
       * var array = [1, 2, 3, 1, 2, 3];
       *
       * _.pull(array, 2, 3);
       * console.log(array);
       * // => [1, 1]
       */
      function pull() {
        var args = arguments,
            array = args[0];
  
        if (!(array && array.length)) {
          return array;
        }
        var index = 0,
            indexOf = getIndexOf(),
            length = args.length;
  
        while (++index < length) {
          var fromIndex = 0,
              value = args[index];
  
          while ((fromIndex = indexOf(array, value, fromIndex)) > -1) {
            splice.call(array, fromIndex, 1);
          }
        }
        return array;
      }
  
      /**
       * Removes elements from `array` corresponding to the given indexes and returns
       * an array of the removed elements. Indexes may be specified as an array of
       * indexes or as individual arguments.
       *
       * **Note:** Unlike `_.at`, this method mutates `array`.
       *
       * @static
       * @memberOf _
       * @category Array
       * @param {Array} array The array to modify.
       * @param {...(number|number[])} [indexes] The indexes of elements to remove,
       *  specified as individual indexes or arrays of indexes.
       * @returns {Array} Returns the new array of removed elements.
       * @example
       *
       * var array = [5, 10, 15, 20];
       * var evens = _.pullAt(array, 1, 3);
       *
       * console.log(array);
       * // => [5, 15]
       *
       * console.log(evens);
       * // => [10, 20]
       */
      var pullAt = restParam(function(array, indexes) {
        indexes = baseFlatten(indexes);
  
        var result = baseAt(array, indexes);
        basePullAt(array, indexes.sort(baseCompareAscending));
        return result;
      });
  
      /**
       * Removes all elements from `array` that `predicate` returns truthy for
       * and returns an array of the removed elements. The predicate is bound to
       * `thisArg` and invoked with three arguments: (value, index, array).
       *
       * If a property name is provided for `predicate` the created `_.property`
       * style callback returns the property value of the given element.
       *
       * If a value is also provided for `thisArg` the created `_.matchesProperty`
       * style callback returns `true` for elements that have a matching property
       * value, else `false`.
       *
       * If an object is provided for `predicate` the created `_.matches` style
       * callback returns `true` for elements that have the properties of the given
       * object, else `false`.
       *
       * **Note:** Unlike `_.filter`, this method mutates `array`.
       *
       * @static
       * @memberOf _
       * @category Array
       * @param {Array} array The array to modify.
       * @param {Function|Object|string} [predicate=_.identity] The function invoked
       *  per iteration.
       * @param {*} [thisArg] The `this` binding of `predicate`.
       * @returns {Array} Returns the new array of removed elements.
       * @example
       *
       * var array = [1, 2, 3, 4];
       * var evens = _.remove(array, function(n) {
       *   return n % 2 == 0;
       * });
       *
       * console.log(array);
       * // => [1, 3]
       *
       * console.log(evens);
       * // => [2, 4]
       */
      function remove(array, predicate, thisArg) {
        var result = [];
        if (!(array && array.length)) {
          return result;
        }
        var index = -1,
            indexes = [],
            length = array.length;
  
        predicate = getCallback(predicate, thisArg, 3);
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result.push(value);
            indexes.push(index);
          }
        }
        basePullAt(array, indexes);
        return result;
      }
  
      /**
       * Gets all but the first element of `array`.
       *
       * @static
       * @memberOf _
       * @alias tail
       * @category Array
       * @param {Array} array The array to query.
       * @returns {Array} Returns the slice of `array`.
       * @example
       *
       * _.rest([1, 2, 3]);
       * // => [2, 3]
       */
      function rest(array) {
        return drop(array, 1);
      }
  
      /**
       * Creates a slice of `array` from `start` up to, but not including, `end`.
       *
       * **Note:** This method is used instead of `Array#slice` to support node
       * lists in IE < 9 and to ensure dense arrays are returned.
       *
       * @static
       * @memberOf _
       * @category Array
       * @param {Array} array The array to slice.
       * @param {number} [start=0] The start position.
       * @param {number} [end=array.length] The end position.
       * @returns {Array} Returns the slice of `array`.
       */
      function slice(array, start, end) {
        var length = array ? array.length : 0;
        if (!length) {
          return [];
        }
        if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
          start = 0;
          end = length;
        }
        return baseSlice(array, start, end);
      }
  
      /**
       * Uses a binary search to determine the lowest index at which `value` should
       * be inserted into `array` in order to maintain its sort order. If an iteratee
       * function is provided it is invoked for `value` and each element of `array`
       * to compute their sort ranking. The iteratee is bound to `thisArg` and
       * invoked with one argument; (value).
       *
       * If a property name is provided for `iteratee` the created `_.property`
       * style callback returns the property value of the given element.
       *
       * If a value is also provided for `thisArg` the created `_.matchesProperty`
       * style callback returns `true` for elements that have a matching property
       * value, else `false`.
       *
       * If an object is provided for `iteratee` the created `_.matches` style
       * callback returns `true` for elements that have the properties of the given
       * object, else `false`.
       *
       * @static
       * @memberOf _
       * @category Array
       * @param {Array} array The sorted array to inspect.
       * @param {*} value The value to evaluate.
       * @param {Function|Object|string} [iteratee=_.identity] The function invoked
       *  per iteration.
       * @param {*} [thisArg] The `this` binding of `iteratee`.
       * @returns {number} Returns the index at which `value` should be inserted
       *  into `array`.
       * @example
       *
       * _.sortedIndex([30, 50], 40);
       * // => 1
       *
       * _.sortedIndex([4, 4, 5, 5], 5);
       * // => 2
       *
       * var dict = { 'data': { 'thirty': 30, 'forty': 40, 'fifty': 50 } };
       *
       * // using an iteratee function
       * _.sortedIndex(['thirty', 'fifty'], 'forty', function(word) {
       *   return this.data[word];
       * }, dict);
       * // => 1
       *
       * // using the `_.property` callback shorthand
       * _.sortedIndex([{ 'x': 30 }, { 'x': 50 }], { 'x': 40 }, 'x');
       * // => 1
       */
      var sortedIndex = createSortedIndex();
  
      /**
       * This method is like `_.sortedIndex` except that it returns the highest
       * index at which `value` should be inserted into `array` in order to
       * maintain its sort order.
       *
       * @static
       * @memberOf _
       * @category Array
       * @param {Array} array The sorted array to inspect.
       * @param {*} value The value to evaluate.
       * @param {Function|Object|string} [iteratee=_.identity] The function invoked
       *  per iteration.
       * @param {*} [thisArg] The `this` binding of `iteratee`.
       * @returns {number} Returns the index at which `value` should be inserted
       *  into `array`.
       * @example
       *
       * _.sortedLastIndex([4, 4, 5, 5], 5);
       * // => 4
       */
      var sortedLastIndex = createSortedIndex(true);
  
      /**
       * Creates a slice of `array` with `n` elements taken from the beginning.
       *
       * @static
       * @memberOf _
       * @category Array
       * @param {Array} array The array to query.
       * @param {number} [n=1] The number of elements to take.
       * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
       * @returns {Array} Returns the slice of `array`.
       * @example
       *
       * _.take([1, 2, 3]);
       * // => [1]
       *
       * _.take([1, 2, 3], 2);
       * // => [1, 2]
       *
       * _.take([1, 2, 3], 5);
       * // => [1, 2, 3]
       *
       * _.take([1, 2, 3], 0);
       * // => []
       */
      function take(array, n, guard) {
        var length = array ? array.length : 0;
        if (!length) {
          return [];
        }
        if (guard ? isIterateeCall(array, n, guard) : n == null) {
          n = 1;
        }
        return baseSlice(array, 0, n < 0 ? 0 : n);
      }
  
      /**
       * Creates a slice of `array` with `n` elements taken from the end.
       *
       * @static
       * @memberOf _
       * @category Array
       * @param {Array} array The array to query.
       * @param {number} [n=1] The number of elements to take.
       * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
       * @returns {Array} Returns the slice of `array`.
       * @example
       *
       * _.takeRight([1, 2, 3]);
       * // => [3]
       *
       * _.takeRight([1, 2, 3], 2);
       * // => [2, 3]
       *
       * _.takeRight([1, 2, 3], 5);
       * // => [1, 2, 3]
       *
       * _.takeRight([1, 2, 3], 0);
       * // => []
       */
      function takeRight(array, n, guard) {
        var length = array ? array.length : 0;
        if (!length) {
          return [];
        }
        if (guard ? isIterateeCall(array, n, guard) : n == null) {
          n = 1;
        }
        n = length - (+n || 0);
        return baseSlice(array, n < 0 ? 0 : n);
      }
  
      /**
       * Creates a slice of `array` with elements taken from the end. Elements are
       * taken until `predicate` returns falsey. The predicate is bound to `thisArg`
       * and invoked with three arguments: (value, index, array).
       *
       * If a property name is provided for `predicate` the created `_.property`
       * style callback returns the property value of the given element.
       *
       * If a value is also provided for `thisArg` the created `_.matchesProperty`
       * style callback returns `true` for elements that have a matching property
       * value, else `false`.
       *
       * If an object is provided for `predicate` the created `_.matches` style
       * callback returns `true` for elements that have the properties of the given
       * object, else `false`.
       *
       * @static
       * @memberOf _
       * @category Array
       * @param {Array} array The array to query.
       * @param {Function|Object|string} [predicate=_.identity] The function invoked
       *  per iteration.
       * @param {*} [thisArg] The `this` binding of `predicate`.
       * @returns {Array} Returns the slice of `array`.
       * @example
       *
       * _.takeRightWhile([1, 2, 3], function(n) {
       *   return n > 1;
       * });
       * // => [2, 3]
       *
       * var users = [
       *   { 'user': 'barney',  'active': true },
       *   { 'user': 'fred',    'active': false },
       *   { 'user': 'pebbles', 'active': false }
       * ];
       *
       * // using the `_.matches` callback shorthand
       * _.pluck(_.takeRightWhile(users, { 'user': 'pebbles', 'active': false }), 'user');
       * // => ['pebbles']
       *
       * // using the `_.matchesProperty` callback shorthand
       * _.pluck(_.takeRightWhile(users, 'active', false), 'user');
       * // => ['fred', 'pebbles']
       *
       * // using the `_.property` callback shorthand
       * _.pluck(_.takeRightWhile(users, 'active'), 'user');
       * // => []
       */
      function takeRightWhile(array, predicate, thisArg) {
        return (array && array.length)
          ? baseWhile(array, getCallback(predicate, thisArg, 3), false, true)
          : [];
      }
  
      /**
       * Creates a slice of `array` with elements taken from the beginning. Elements
       * are taken until `predicate` returns falsey. The predicate is bound to
       * `thisArg` and invoked with three arguments: (value, index, array).
       *
       * If a property name is provided for `predicate` the created `_.property`
       * style callback returns the property value of the given element.
       *
       * If a value is also provided for `thisArg` the created `_.matchesProperty`
       * style callback returns `true` for elements that have a matching property
       * value, else `false`.
       *
       * If an object is provided for `predicate` the created `_.matches` style
       * callback returns `true` for elements that have the properties of the given
       * object, else `false`.
       *
       * @static
       * @memberOf _
       * @category Array
       * @param {Array} array The array to query.
       * @param {Function|Object|string} [predicate=_.identity] The function invoked
       *  per iteration.
       * @param {*} [thisArg] The `this` binding of `predicate`.
       * @returns {Array} Returns the slice of `array`.
       * @example
       *
       * _.takeWhile([1, 2, 3], function(n) {
       *   return n < 3;
       * });
       * // => [1, 2]
       *
       * var users = [
       *   { 'user': 'barney',  'active': false },
       *   { 'user': 'fred',    'active': false},
       *   { 'user': 'pebbles', 'active': true }
       * ];
       *
       * // using the `_.matches` callback shorthand
       * _.pluck(_.takeWhile(users, { 'user': 'barney', 'active': false }), 'user');
       * // => ['barney']
       *
       * // using the `_.matchesProperty` callback shorthand
       * _.pluck(_.takeWhile(users, 'active', false), 'user');
       * // => ['barney', 'fred']
       *
       * // using the `_.property` callback shorthand
       * _.pluck(_.takeWhile(users, 'active'), 'user');
       * // => []
       */
      function takeWhile(array, predicate, thisArg) {
        return (array && array.length)
          ? baseWhile(array, getCallback(predicate, thisArg, 3))
          : [];
      }
  
      /**
       * Creates an array of unique values, in order, from all of the provided arrays
       * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
       * for equality comparisons.
       *
       * @static
       * @memberOf _
       * @category Array
       * @param {...Array} [arrays] The arrays to inspect.
       * @returns {Array} Returns the new array of combined values.
       * @example
       *
       * _.union([1, 2], [4, 2], [2, 1]);
       * // => [1, 2, 4]
       */
      var union = restParam(function(arrays) {
        return baseUniq(baseFlatten(arrays, false, true));
      });
  
      /**
       * Creates a duplicate-free version of an array, using
       * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
       * for equality comparisons, in which only the first occurence of each element
       * is kept. Providing `true` for `isSorted` performs a faster search algorithm
       * for sorted arrays. If an iteratee function is provided it is invoked for
       * each element in the array to generate the criterion by which uniqueness
       * is computed. The `iteratee` is bound to `thisArg` and invoked with three
       * arguments: (value, index, array).
       *
       * If a property name is provided for `iteratee` the created `_.property`
       * style callback returns the property value of the given element.
       *
       * If a value is also provided for `thisArg` the created `_.matchesProperty`
       * style callback returns `true` for elements that have a matching property
       * value, else `false`.
       *
       * If an object is provided for `iteratee` the created `_.matches` style
       * callback returns `true` for elements that have the properties of the given
       * object, else `false`.
       *
       * @static
       * @memberOf _
       * @alias unique
       * @category Array
       * @param {Array} array The array to inspect.
       * @param {boolean} [isSorted] Specify the array is sorted.
       * @param {Function|Object|string} [iteratee] The function invoked per iteration.
       * @param {*} [thisArg] The `this` binding of `iteratee`.
       * @returns {Array} Returns the new duplicate-value-free array.
       * @example
       *
       * _.uniq([2, 1, 2]);
       * // => [2, 1]
       *
       * // using `isSorted`
       * _.uniq([1, 1, 2], true);
       * // => [1, 2]
       *
       * // using an iteratee function
       * _.uniq([1, 2.5, 1.5, 2], function(n) {
       *   return this.floor(n);
       * }, Math);
       * // => [1, 2.5]
       *
       * // using the `_.property` callback shorthand
       * _.uniq([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
       * // => [{ 'x': 1 }, { 'x': 2 }]
       */
      function uniq(array, isSorted, iteratee, thisArg) {
        var length = array ? array.length : 0;
        if (!length) {
          return [];
        }
        if (isSorted != null && typeof isSorted != 'boolean') {
          thisArg = iteratee;
          iteratee = isIterateeCall(array, isSorted, thisArg) ? undefined : isSorted;
          isSorted = false;
        }
        var callback = getCallback();
        if (!(iteratee == null && callback === baseCallback)) {
          iteratee = callback(iteratee, thisArg, 3);
        }
        return (isSorted && getIndexOf() == baseIndexOf)
          ? sortedUniq(array, iteratee)
          : baseUniq(array, iteratee);
      }
  
      /**
       * This method is like `_.zip` except that it accepts an array of grouped
       * elements and creates an array regrouping the elements to their pre-zip
       * configuration.
       *
       * @static
       * @memberOf _
       * @category Array
       * @param {Array} array The array of grouped elements to process.
       * @returns {Array} Returns the new array of regrouped elements.
       * @example
       *
       * var zipped = _.zip(['fred', 'barney'], [30, 40], [true, false]);
       * // => [['fred', 30, true], ['barney', 40, false]]
       *
       * _.unzip(zipped);
       * // => [['fred', 'barney'], [30, 40], [true, false]]
       */
      function unzip(array) {
        if (!(array && array.length)) {
          return [];
        }
        var index = -1,
            length = 0;
  
        array = arrayFilter(array, function(group) {
          if (isArrayLike(group)) {
            length = nativeMax(group.length, length);
            return true;
          }
        });
        var result = Array(length);
        while (++index < length) {
          result[index] = arrayMap(array, baseProperty(index));
        }
        return result;
      }
  
      /**
       * This method is like `_.unzip` except that it accepts an iteratee to specify
       * how regrouped values should be combined. The `iteratee` is bound to `thisArg`
       * and invoked with four arguments: (accumulator, value, index, group).
       *
       * @static
       * @memberOf _
       * @category Array
       * @param {Array} array The array of grouped elements to process.
       * @param {Function} [iteratee] The function to combine regrouped values.
       * @param {*} [thisArg] The `this` binding of `iteratee`.
       * @returns {Array} Returns the new array of regrouped elements.
       * @example
       *
       * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
       * // => [[1, 10, 100], [2, 20, 200]]
       *
       * _.unzipWith(zipped, _.add);
       * // => [3, 30, 300]
       */
      function unzipWith(array, iteratee, thisArg) {
        var length = array ? array.length : 0;
        if (!length) {
          return [];
        }
        var result = unzip(array);
        if (iteratee == null) {
          return result;
        }
        iteratee = bindCallback(iteratee, thisArg, 4);
        return arrayMap(result, function(group) {
          return arrayReduce(group, iteratee, undefined, true);
        });
      }
  
      /**
       * Creates an array excluding all provided values using
       * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
       * for equality comparisons.
       *
       * @static
       * @memberOf _
       * @category Array
       * @param {Array} array The array to filter.
       * @param {...*} [values] The values to exclude.
       * @returns {Array} Returns the new array of filtered values.
       * @example
       *
       * _.without([1, 2, 1, 3], 1, 2);
       * // => [3]
       */
      var without = restParam(function(array, values) {
        return isArrayLike(array)
          ? baseDifference(array, values)
          : [];
      });
  
      /**
       * Creates an array of unique values that is the [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
       * of the provided arrays.
       *
       * @static
       * @memberOf _
       * @category Array
       * @param {...Array} [arrays] The arrays to inspect.
       * @returns {Array} Returns the new array of values.
       * @example
       *
       * _.xor([1, 2], [4, 2]);
       * // => [1, 4]
       */
      function xor() {
        var index = -1,
            length = arguments.length;
  
        while (++index < length) {
          var array = arguments[index];
          if (isArrayLike(array)) {
            var result = result
              ? arrayPush(baseDifference(result, array), baseDifference(array, result))
              : array;
          }
        }
        return result ? baseUniq(result) : [];
      }
  
      /**
       * Creates an array of grouped elements, the first of which contains the first
       * elements of the given arrays, the second of which contains the second elements
       * of the given arrays, and so on.
       *
       * @static
       * @memberOf _
       * @category Array
       * @param {...Array} [arrays] The arrays to process.
       * @returns {Array} Returns the new array of grouped elements.
       * @example
       *
       * _.zip(['fred', 'barney'], [30, 40], [true, false]);
       * // => [['fred', 30, true], ['barney', 40, false]]
       */
      var zip = restParam(unzip);
  
      /**
       * The inverse of `_.pairs`; this method returns an object composed from arrays
       * of property names and values. Provide either a single two dimensional array,
       * e.g. `[[key1, value1], [key2, value2]]` or two arrays, one of property names
       * and one of corresponding values.
       *
       * @static
       * @memberOf _
       * @alias object
       * @category Array
       * @param {Array} props The property names.
       * @param {Array} [values=[]] The property values.
       * @returns {Object} Returns the new object.
       * @example
       *
       * _.zipObject([['fred', 30], ['barney', 40]]);
       * // => { 'fred': 30, 'barney': 40 }
       *
       * _.zipObject(['fred', 'barney'], [30, 40]);
       * // => { 'fred': 30, 'barney': 40 }
       */
      function zipObject(props, values) {
        var index = -1,
            length = props ? props.length : 0,
            result = {};
  
        if (length && !values && !isArray(props[0])) {
          values = [];
        }
        while (++index < length) {
          var key = props[index];
          if (values) {
            result[key] = values[index];
          } else if (key) {
            result[key[0]] = key[1];
          }
        }
        return result;
      }
  
      /**
       * This method is like `_.zip` except that it accepts an iteratee to specify
       * how grouped values should be combined. The `iteratee` is bound to `thisArg`
       * and invoked with four arguments: (accumulator, value, index, group).
       *
       * @static
       * @memberOf _
       * @category Array
       * @param {...Array} [arrays] The arrays to process.
       * @param {Function} [iteratee] The function to combine grouped values.
       * @param {*} [thisArg] The `this` binding of `iteratee`.
       * @returns {Array} Returns the new array of grouped elements.
       * @example
       *
       * _.zipWith([1, 2], [10, 20], [100, 200], _.add);
       * // => [111, 222]
       */
      var zipWith = restParam(function(arrays) {
        var length = arrays.length,
            iteratee = length > 2 ? arrays[length - 2] : undefined,
            thisArg = length > 1 ? arrays[length - 1] : undefined;
  
        if (length > 2 && typeof iteratee == 'function') {
          length -= 2;
        } else {
          iteratee = (length > 1 && typeof thisArg == 'function') ? (--length, thisArg) : undefined;
          thisArg = undefined;
        }
        arrays.length = length;
        return unzipWith(arrays, iteratee, thisArg);
      });
  
      /*------------------------------------------------------------------------*/
  
      /**
       * Creates a `lodash` object that wraps `value` with explicit method
       * chaining enabled.
       *
       * @static
       * @memberOf _
       * @category Chain
       * @param {*} value The value to wrap.
       * @returns {Object} Returns the new `lodash` wrapper instance.
       * @example
       *
       * var users = [
       *   { 'user': 'barney',  'age': 36 },
       *   { 'user': 'fred',    'age': 40 },
       *   { 'user': 'pebbles', 'age': 1 }
       * ];
       *
       * var youngest = _.chain(users)
       *   .sortBy('age')
       *   .map(function(chr) {
       *     return chr.user + ' is ' + chr.age;
       *   })
       *   .first()
       *   .value();
       * // => 'pebbles is 1'
       */
      function chain(value) {
        var result = lodash(value);
        result.__chain__ = true;
        return result;
      }
  
      /**
       * This method invokes `interceptor` and returns `value`. The interceptor is
       * bound to `thisArg` and invoked with one argument; (value). The purpose of
       * this method is to "tap into" a method chain in order to perform operations
       * on intermediate results within the chain.
       *
       * @static
       * @memberOf _
       * @category Chain
       * @param {*} value The value to provide to `interceptor`.
       * @param {Function} interceptor The function to invoke.
       * @param {*} [thisArg] The `this` binding of `interceptor`.
       * @returns {*} Returns `value`.
       * @example
       *
       * _([1, 2, 3])
       *  .tap(function(array) {
       *    array.pop();
       *  })
       *  .reverse()
       *  .value();
       * // => [2, 1]
       */
      function tap(value, interceptor, thisArg) {
        interceptor.call(thisArg, value);
        return value;
      }
  
      /**
       * This method is like `_.tap` except that it returns the result of `interceptor`.
       *
       * @static
       * @memberOf _
       * @category Chain
       * @param {*} value The value to provide to `interceptor`.
       * @param {Function} interceptor The function to invoke.
       * @param {*} [thisArg] The `this` binding of `interceptor`.
       * @returns {*} Returns the result of `interceptor`.
       * @example
       *
       * _('  abc  ')
       *  .chain()
       *  .trim()
       *  .thru(function(value) {
       *    return [value];
       *  })
       *  .value();
       * // => ['abc']
       */
      function thru(value, interceptor, thisArg) {
        return interceptor.call(thisArg, value);
      }
  
      /**
       * Enables explicit method chaining on the wrapper object.
       *
       * @name chain
       * @memberOf _
       * @category Chain
       * @returns {Object} Returns the new `lodash` wrapper instance.
       * @example
       *
       * var users = [
       *   { 'user': 'barney', 'age': 36 },
       *   { 'user': 'fred',   'age': 40 }
       * ];
       *
       * // without explicit chaining
       * _(users).first();
       * // => { 'user': 'barney', 'age': 36 }
       *
       * // with explicit chaining
       * _(users).chain()
       *   .first()
       *   .pick('user')
       *   .value();
       * // => { 'user': 'barney' }
       */
      function wrapperChain() {
        return chain(this);
      }
  
      /**
       * Executes the chained sequence and returns the wrapped result.
       *
       * @name commit
       * @memberOf _
       * @category Chain
       * @returns {Object} Returns the new `lodash` wrapper instance.
       * @example
       *
       * var array = [1, 2];
       * var wrapped = _(array).push(3);
       *
       * console.log(array);
       * // => [1, 2]
       *
       * wrapped = wrapped.commit();
       * console.log(array);
       * // => [1, 2, 3]
       *
       * wrapped.last();
       * // => 3
       *
       * console.log(array);
       * // => [1, 2, 3]
       */
      function wrapperCommit() {
        return new LodashWrapper(this.value(), this.__chain__);
      }
  
      /**
       * Creates a new array joining a wrapped array with any additional arrays
       * and/or values.
       *
       * @name concat
       * @memberOf _
       * @category Chain
       * @param {...*} [values] The values to concatenate.
       * @returns {Array} Returns the new concatenated array.
       * @example
       *
       * var array = [1];
       * var wrapped = _(array).concat(2, [3], [[4]]);
       *
       * console.log(wrapped.value());
       * // => [1, 2, 3, [4]]
       *
       * console.log(array);
       * // => [1]
       */
      var wrapperConcat = restParam(function(values) {
        values = baseFlatten(values);
        return this.thru(function(array) {
          return arrayConcat(isArray(array) ? array : [toObject(array)], values);
        });
      });
  
      /**
       * Creates a clone of the chained sequence planting `value` as the wrapped value.
       *
       * @name plant
       * @memberOf _
       * @category Chain
       * @returns {Object} Returns the new `lodash` wrapper instance.
       * @example
       *
       * var array = [1, 2];
       * var wrapped = _(array).map(function(value) {
       *   return Math.pow(value, 2);
       * });
       *
       * var other = [3, 4];
       * var otherWrapped = wrapped.plant(other);
       *
       * otherWrapped.value();
       * // => [9, 16]
       *
       * wrapped.value();
       * // => [1, 4]
       */
      function wrapperPlant(value) {
        var result,
            parent = this;
  
        while (parent instanceof baseLodash) {
          var clone = wrapperClone(parent);
          if (result) {
            previous.__wrapped__ = clone;
          } else {
            result = clone;
          }
          var previous = clone;
          parent = parent.__wrapped__;
        }
        previous.__wrapped__ = value;
        return result;
      }
  
      /**
       * Reverses the wrapped array so the first element becomes the last, the
       * second element becomes the second to last, and so on.
       *
       * **Note:** This method mutates the wrapped array.
       *
       * @name reverse
       * @memberOf _
       * @category Chain
       * @returns {Object} Returns the new reversed `lodash` wrapper instance.
       * @example
       *
       * var array = [1, 2, 3];
       *
       * _(array).reverse().value()
       * // => [3, 2, 1]
       *
       * console.log(array);
       * // => [3, 2, 1]
       */
      function wrapperReverse() {
        var value = this.__wrapped__;
  
        var interceptor = function(value) {
          return (wrapped && wrapped.__dir__ < 0) ? value : value.reverse();
        };
        if (value instanceof LazyWrapper) {
          var wrapped = value;
          if (this.__actions__.length) {
            wrapped = new LazyWrapper(this);
          }
          wrapped = wrapped.reverse();
          wrapped.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined });
          return new LodashWrapper(wrapped, this.__chain__);
        }
        return this.thru(interceptor);
      }
  
      /**
       * Produces the result of coercing the unwrapped value to a string.
       *
       * @name toString
       * @memberOf _
       * @category Chain
       * @returns {string} Returns the coerced string value.
       * @example
       *
       * _([1, 2, 3]).toString();
       * // => '1,2,3'
       */
      function wrapperToString() {
        return (this.value() + '');
      }
  
      /**
       * Executes the chained sequence to extract the unwrapped value.
       *
       * @name value
       * @memberOf _
       * @alias run, toJSON, valueOf
       * @category Chain
       * @returns {*} Returns the resolved unwrapped value.
       * @example
       *
       * _([1, 2, 3]).value();
       * // => [1, 2, 3]
       */
      function wrapperValue() {
        return baseWrapperValue(this.__wrapped__, this.__actions__);
      }
  
      /*------------------------------------------------------------------------*/
  
      /**
       * Creates an array of elements corresponding to the given keys, or indexes,
       * of `collection`. Keys may be specified as individual arguments or as arrays
       * of keys.
       *
       * @static
       * @memberOf _
       * @category Collection
       * @param {Array|Object|string} collection The collection to iterate over.
       * @param {...(number|number[]|string|string[])} [props] The property names
       *  or indexes of elements to pick, specified individually or in arrays.
       * @returns {Array} Returns the new array of picked elements.
       * @example
       *
       * _.at(['a', 'b', 'c'], [0, 2]);
       * // => ['a', 'c']
       *
       * _.at(['barney', 'fred', 'pebbles'], 0, 2);
       * // => ['barney', 'pebbles']
       */
      var at = restParam(function(collection, props) {
        return baseAt(collection, baseFlatten(props));
      });
  
      /**
       * Creates an object composed of keys generated from the results of running
       * each element of `collection` through `iteratee`. The corresponding value
       * of each key is the number of times the key was returned by `iteratee`.
       * The `iteratee` is bound to `thisArg` and invoked with three arguments:
       * (value, index|key, collection).
       *
       * If a property name is provided for `iteratee` the created `_.property`
       * style callback returns the property value of the given element.
       *
       * If a value is also provided for `thisArg` the created `_.matchesProperty`
       * style callback returns `true` for elements that have a matching property
       * value, else `false`.
       *
       * If an object is provided for `iteratee` the created `_.matches` style
       * callback returns `true` for elements that have the properties of the given
       * object, else `false`.
       *
       * @static
       * @memberOf _
       * @category Collection
       * @param {Array|Object|string} collection The collection to iterate over.
       * @param {Function|Object|string} [iteratee=_.identity] The function invoked
       *  per iteration.
       * @param {*} [thisArg] The `this` binding of `iteratee`.
       * @returns {Object} Returns the composed aggregate object.
       * @example
       *
       * _.countBy([4.3, 6.1, 6.4], function(n) {
       *   return Math.floor(n);
       * });
       * // => { '4': 1, '6': 2 }
       *
       * _.countBy([4.3, 6.1, 6.4], function(n) {
       *   return this.floor(n);
       * }, Math);
       * // => { '4': 1, '6': 2 }
       *
       * _.countBy(['one', 'two', 'three'], 'length');
       * // => { '3': 2, '5': 1 }
       */
      var countBy = createAggregator(function(result, value, key) {
        hasOwnProperty.call(result, key) ? ++result[key] : (result[key] = 1);
      });
  
      /**
       * Checks if `predicate` returns truthy for **all** elements of `collection`.
       * The predicate is bound to `thisArg` and invoked with three arguments:
       * (value, index|key, collection).
       *
       * If a property name is provided for `predicate` the created `_.property`
       * style callback returns the property value of the given element.
       *
       * If a value is also provided for `thisArg` the created `_.matchesProperty`
       * style callback returns `true` for elements that have a matching property
       * value, else `false`.
       *
       * If an object is provided for `predicate` the created `_.matches` style
       * callback returns `true` for elements that have the properties of the given
       * object, else `false`.
       *
       * @static
       * @memberOf _
       * @alias all
       * @category Collection
       * @param {Array|Object|string} collection The collection to iterate over.
       * @param {Function|Object|string} [predicate=_.identity] The function invoked
       *  per iteration.
       * @param {*} [thisArg] The `this` binding of `predicate`.
       * @returns {boolean} Returns `true` if all elements pass the predicate check,
       *  else `false`.
       * @example
       *
       * _.every([true, 1, null, 'yes'], Boolean);
       * // => false
       *
       * var users = [
       *   { 'user': 'barney', 'active': false },
       *   { 'user': 'fred',   'active': false }
       * ];
       *
       * // using the `_.matches` callback shorthand
       * _.every(users, { 'user': 'barney', 'active': false });
       * // => false
       *
       * // using the `_.matchesProperty` callback shorthand
       * _.every(users, 'active', false);
       * // => true
       *
       * // using the `_.property` callback shorthand
       * _.every(users, 'active');
       * // => false
       */
      function every(collection, predicate, thisArg) {
        var func = isArray(collection) ? arrayEvery : baseEvery;
        if (thisArg && isIterateeCall(collection, predicate, thisArg)) {
          predicate = undefined;
        }
        if (typeof predicate != 'function' || thisArg !== undefined) {
          predicate = getCallback(predicate, thisArg, 3);
        }
        return func(collection, predicate);
      }
  
      /**
       * Iterates over elements of `collection`, returning an array of all elements
       * `predicate` returns truthy for. The predicate is bound to `thisArg` and
       * invoked with three arguments: (value, index|key, collection).
       *
       * If a property name is provided for `predicate` the created `_.property`
       * style callback returns the property value of the given element.
       *
       * If a value is also provided for `thisArg` the created `_.matchesProperty`
       * style callback returns `true` for elements that have a matching property
       * value, else `false`.
       *
       * If an object is provided for `predicate` the created `_.matches` style
       * callback returns `true` for elements that have the properties of the given
       * object, else `false`.
       *
       * @static
       * @memberOf _
       * @alias select
       * @category Collection
       * @param {Array|Object|string} collection The collection to iterate over.
       * @param {Function|Object|string} [predicate=_.identity] The function invoked
       *  per iteration.
       * @param {*} [thisArg] The `this` binding of `predicate`.
       * @returns {Array} Returns the new filtered array.
       * @example
       *
       * _.filter([4, 5, 6], function(n) {
       *   return n % 2 == 0;
       * });
       * // => [4, 6]
       *
       * var users = [
       *   { 'user': 'barney', 'age': 36, 'active': true },
       *   { 'user': 'fred',   'age': 40, 'active': false }
       * ];
       *
       * // using the `_.matches` callback shorthand
       * _.pluck(_.filter(users, { 'age': 36, 'active': true }), 'user');
       * // => ['barney']
       *
       * // using the `_.matchesProperty` callback shorthand
       * _.pluck(_.filter(users, 'active', false), 'user');
       * // => ['fred']
       *
       * // using the `_.property` callback shorthand
       * _.pluck(_.filter(users, 'active'), 'user');
       * // => ['barney']
       */
      function filter(collection, predicate, thisArg) {
        var func = isArray(collection) ? arrayFilter : baseFilter;
        predicate = getCallback(predicate, thisArg, 3);
        return func(collection, predicate);
      }
  
      /**
       * Iterates over elements of `collection`, returning the first element
       * `predicate` returns truthy for. The predicate is bound to `thisArg` and
       * invoked with three arguments: (value, index|key, collection).
       *
       * If a property name is provided for `predicate` the created `_.property`
       * style callback returns the property value of the given element.
       *
       * If a value is also provided for `thisArg` the created `_.matchesProperty`
       * style callback returns `true` for elements that have a matching property
       * value, else `false`.
       *
       * If an object is provided for `predicate` the created `_.matches` style
       * callback returns `true` for elements that have the properties of the given
       * object, else `false`.
       *
       * @static
       * @memberOf _
       * @alias detect
       * @category Collection
       * @param {Array|Object|string} collection The collection to search.
       * @param {Function|Object|string} [predicate=_.identity] The function invoked
       *  per iteration.
       * @param {*} [thisArg] The `this` binding of `predicate`.
       * @returns {*} Returns the matched element, else `undefined`.
       * @example
       *
       * var users = [
       *   { 'user': 'barney',  'age': 36, 'active': true },
       *   { 'user': 'fred',    'age': 40, 'active': false },
       *   { 'user': 'pebbles', 'age': 1,  'active': true }
       * ];
       *
       * _.result(_.find(users, function(chr) {
       *   return chr.age < 40;
       * }), 'user');
       * // => 'barney'
       *
       * // using the `_.matches` callback shorthand
       * _.result(_.find(users, { 'age': 1, 'active': true }), 'user');
       * // => 'pebbles'
       *
       * // using the `_.matchesProperty` callback shorthand
       * _.result(_.find(users, 'active', false), 'user');
       * // => 'fred'
       *
       * // using the `_.property` callback shorthand
       * _.result(_.find(users, 'active'), 'user');
       * // => 'barney'
       */
      var find = createFind(baseEach);
  
      /**
       * This method is like `_.find` except that it iterates over elements of
       * `collection` from right to left.
       *
       * @static
       * @memberOf _
       * @category Collection
       * @param {Array|Object|string} collection The collection to search.
       * @param {Function|Object|string} [predicate=_.identity] The function invoked
       *  per iteration.
       * @param {*} [thisArg] The `this` binding of `predicate`.
       * @returns {*} Returns the matched element, else `undefined`.
       * @example
       *
       * _.findLast([1, 2, 3, 4], function(n) {
       *   return n % 2 == 1;
       * });
       * // => 3
       */
      var findLast = createFind(baseEachRight, true);
  
      /**
       * Performs a deep comparison between each element in `collection` and the
       * source object, returning the first element that has equivalent property
       * values.
       *
       * **Note:** This method supports comparing arrays, booleans, `Date` objects,
       * numbers, `Object` objects, regexes, and strings. Objects are compared by
       * their own, not inherited, enumerable properties. For comparing a single
       * own or inherited property value see `_.matchesProperty`.
       *
       * @static
       * @memberOf _
       * @category Collection
       * @param {Array|Object|string} collection The collection to search.
       * @param {Object} source The object of property values to match.
       * @returns {*} Returns the matched element, else `undefined`.
       * @example
       *
       * var users = [
       *   { 'user': 'barney', 'age': 36, 'active': true },
       *   { 'user': 'fred',   'age': 40, 'active': false }
       * ];
       *
       * _.result(_.findWhere(users, { 'age': 36, 'active': true }), 'user');
       * // => 'barney'
       *
       * _.result(_.findWhere(users, { 'age': 40, 'active': false }), 'user');
       * // => 'fred'
       */
      function findWhere(collection, source) {
        return find(collection, baseMatches(source));
      }
  
      /**
       * Iterates over elements of `collection` invoking `iteratee` for each element.
       * The `iteratee` is bound to `thisArg` and invoked with three arguments:
       * (value, index|key, collection). Iteratee functions may exit iteration early
       * by explicitly returning `false`.
       *
       * **Note:** As with other "Collections" methods, objects with a "length" property
       * are iterated like arrays. To avoid this behavior `_.forIn` or `_.forOwn`
       * may be used for object iteration.
       *
       * @static
       * @memberOf _
       * @alias each
       * @category Collection
       * @param {Array|Object|string} collection The collection to iterate over.
       * @param {Function} [iteratee=_.identity] The function invoked per iteration.
       * @param {*} [thisArg] The `this` binding of `iteratee`.
       * @returns {Array|Object|string} Returns `collection`.
       * @example
       *
       * _([1, 2]).forEach(function(n) {
       *   console.log(n);
       * }).value();
       * // => logs each value from left to right and returns the array
       *
       * _.forEach({ 'a': 1, 'b': 2 }, function(n, key) {
       *   console.log(n, key);
       * });
       * // => logs each value-key pair and returns the object (iteration order is not guaranteed)
       */
      var forEach = createForEach(arrayEach, baseEach);
  
      /**
       * This method is like `_.forEach` except that it iterates over elements of
       * `collection` from right to left.
       *
       * @static
       * @memberOf _
       * @alias eachRight
       * @category Collection
       * @param {Array|Object|string} collection The collection to iterate over.
       * @param {Function} [iteratee=_.identity] The function invoked per iteration.
       * @param {*} [thisArg] The `this` binding of `iteratee`.
       * @returns {Array|Object|string} Returns `collection`.
       * @example
       *
       * _([1, 2]).forEachRight(function(n) {
       *   console.log(n);
       * }).value();
       * // => logs each value from right to left and returns the array
       */
      var forEachRight = createForEach(arrayEachRight, baseEachRight);
  
      /**
       * Creates an object composed of keys generated from the results of running
       * each element of `collection` through `iteratee`. The corresponding value
       * of each key is an array of the elements responsible for generating the key.
       * The `iteratee` is bound to `thisArg` and invoked with three arguments:
       * (value, index|key, collection).
       *
       * If a property name is provided for `iteratee` the created `_.property`
       * style callback returns the property value of the given element.
       *
       * If a value is also provided for `thisArg` the created `_.matchesProperty`
       * style callback returns `true` for elements that have a matching property
       * value, else `false`.
       *
       * If an object is provided for `iteratee` the created `_.matches` style
       * callback returns `true` for elements that have the properties of the given
       * object, else `false`.
       *
       * @static
       * @memberOf _
       * @category Collection
       * @param {Array|Object|string} collection The collection to iterate over.
       * @param {Function|Object|string} [iteratee=_.identity] The function invoked
       *  per iteration.
       * @param {*} [thisArg] The `this` binding of `iteratee`.
       * @returns {Object} Returns the composed aggregate object.
       * @example
       *
       * _.groupBy([4.2, 6.1, 6.4], function(n) {
       *   return Math.floor(n);
       * });
       * // => { '4': [4.2], '6': [6.1, 6.4] }
       *
       * _.groupBy([4.2, 6.1, 6.4], function(n) {
       *   return this.floor(n);
       * }, Math);
       * // => { '4': [4.2], '6': [6.1, 6.4] }
       *
       * // using the `_.property` callback shorthand
       * _.groupBy(['one', 'two', 'three'], 'length');
       * // => { '3': ['one', 'two'], '5': ['three'] }
       */
      var groupBy = createAggregator(function(result, value, key) {
        if (hasOwnProperty.call(result, key)) {
          result[key].push(value);
        } else {
          result[key] = [value];
        }
      });
  
      /**
       * Checks if `value` is in `collection` using
       * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
       * for equality comparisons. If `fromIndex` is negative, it is used as the offset
       * from the end of `collection`.
       *
       * @static
       * @memberOf _
       * @alias contains, include
       * @category Collection
       * @param {Array|Object|string} collection The collection to search.
       * @param {*} target The value to search for.
       * @param {number} [fromIndex=0] The index to search from.
       * @param- {Object} [guard] Enables use as a callback for functions like `_.reduce`.
       * @returns {boolean} Returns `true` if a matching element is found, else `false`.
       * @example
       *
       * _.includes([1, 2, 3], 1);
       * // => true
       *
       * _.includes([1, 2, 3], 1, 2);
       * // => false
       *
       * _.includes({ 'user': 'fred', 'age': 40 }, 'fred');
       * // => true
       *
       * _.includes('pebbles', 'eb');
       * // => true
       */
      function includes(collection, target, fromIndex, guard) {
        var length = collection ? getLength(collection) : 0;
        if (!isLength(length)) {
          collection = values(collection);
          length = collection.length;
        }
        if (typeof fromIndex != 'number' || (guard && isIterateeCall(target, fromIndex, guard))) {
          fromIndex = 0;
        } else {
          fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : (fromIndex || 0);
        }
        return (typeof collection == 'string' || !isArray(collection) && isString(collection))
          ? (fromIndex <= length && collection.indexOf(target, fromIndex) > -1)
          : (!!length && getIndexOf(collection, target, fromIndex) > -1);
      }
  
      /**
       * Creates an object composed of keys generated from the results of running
       * each element of `collection` through `iteratee`. The corresponding value
       * of each key is the last element responsible for generating the key. The
       * iteratee function is bound to `thisArg` and invoked with three arguments:
       * (value, index|key, collection).
       *
       * If a property name is provided for `iteratee` the created `_.property`
       * style callback returns the property value of the given element.
       *
       * If a value is also provided for `thisArg` the created `_.matchesProperty`
       * style callback returns `true` for elements that have a matching property
       * value, else `false`.
       *
       * If an object is provided for `iteratee` the created `_.matches` style
       * callback returns `true` for elements that have the properties of the given
       * object, else `false`.
       *
       * @static
       * @memberOf _
       * @category Collection
       * @param {Array|Object|string} collection The collection to iterate over.
       * @param {Function|Object|string} [iteratee=_.identity] The function invoked
       *  per iteration.
       * @param {*} [thisArg] The `this` binding of `iteratee`.
       * @returns {Object} Returns the composed aggregate object.
       * @example
       *
       * var keyData = [
       *   { 'dir': 'left', 'code': 97 },
       *   { 'dir': 'right', 'code': 100 }
       * ];
       *
       * _.indexBy(keyData, 'dir');
       * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
       *
       * _.indexBy(keyData, function(object) {
       *   return String.fromCharCode(object.code);
       * });
       * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
       *
       * _.indexBy(keyData, function(object) {
       *   return this.fromCharCode(object.code);
       * }, String);
       * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
       */
      var indexBy = createAggregator(function(result, value, key) {
        result[key] = value;
      });
  
      /**
       * Invokes the method at `path` of each element in `collection`, returning
       * an array of the results of each invoked method. Any additional arguments
       * are provided to each invoked method. If `methodName` is a function it is
       * invoked for, and `this` bound to, each element in `collection`.
       *
       * @static
       * @memberOf _
       * @category Collection
       * @param {Array|Object|string} collection The collection to iterate over.
       * @param {Array|Function|string} path The path of the method to invoke or
       *  the function invoked per iteration.
       * @param {...*} [args] The arguments to invoke the method with.
       * @returns {Array} Returns the array of results.
       * @example
       *
       * _.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
       * // => [[1, 5, 7], [1, 2, 3]]
       *
       * _.invoke([123, 456], String.prototype.split, '');
       * // => [['1', '2', '3'], ['4', '5', '6']]
       */
      var invoke = restParam(function(collection, path, args) {
        var index = -1,
            isFunc = typeof path == 'function',
            isProp = isKey(path),
            result = isArrayLike(collection) ? Array(collection.length) : [];
  
        baseEach(collection, function(value) {
          var func = isFunc ? path : ((isProp && value != null) ? value[path] : undefined);
          result[++index] = func ? func.apply(value, args) : invokePath(value, path, args);
        });
        return result;
      });
  
      /**
       * Creates an array of values by running each element in `collection` through
       * `iteratee`. The `iteratee` is bound to `thisArg` and invoked with three
       * arguments: (value, index|key, collection).
       *
       * If a property name is provided for `iteratee` the created `_.property`
       * style callback returns the property value of the given element.
       *
       * If a value is also provided for `thisArg` the created `_.matchesProperty`
       * style callback returns `true` for elements that have a matching property
       * value, else `false`.
       *
       * If an object is provided for `iteratee` the created `_.matches` style
       * callback returns `true` for elements that have the properties of the given
       * object, else `false`.
       *
       * Many lodash methods are guarded to work as iteratees for methods like
       * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
       *
       * The guarded methods are:
       * `ary`, `callback`, `chunk`, `clone`, `create`, `curry`, `curryRight`,
       * `drop`, `dropRight`, `every`, `fill`, `flatten`, `invert`, `max`, `min`,
       * `parseInt`, `slice`, `sortBy`, `take`, `takeRight`, `template`, `trim`,
       * `trimLeft`, `trimRight`, `trunc`, `random`, `range`, `sample`, `some`,
       * `sum`, `uniq`, and `words`
       *
       * @static
       * @memberOf _
       * @alias collect
       * @category Collection
       * @param {Array|Object|string} collection The collection to iterate over.
       * @param {Function|Object|string} [iteratee=_.identity] The function invoked
       *  per iteration.
       * @param {*} [thisArg] The `this` binding of `iteratee`.
       * @returns {Array} Returns the new mapped array.
       * @example
       *
       * function timesThree(n) {
       *   return n * 3;
       * }
       *
       * _.map([1, 2], timesThree);
       * // => [3, 6]
       *
       * _.map({ 'a': 1, 'b': 2 }, timesThree);
       * // => [3, 6] (iteration order is not guaranteed)
       *
       * var users = [
       *   { 'user': 'barney' },
       *   { 'user': 'fred' }
       * ];
       *
       * // using the `_.property` callback shorthand
       * _.map(users, 'user');
       * // => ['barney', 'fred']
       */
      function map(collection, iteratee, thisArg) {
        var func = isArray(collection) ? arrayMap : baseMap;
        iteratee = getCallback(iteratee, thisArg, 3);
        return func(collection, iteratee);
      }
  
      /**
       * Creates an array of elements split into two groups, the first of which
       * contains elements `predicate` returns truthy for, while the second of which
       * contains elements `predicate` returns falsey for. The predicate is bound
       * to `thisArg` and invoked with three arguments: (value, index|key, collection).
       *
       * If a property name is provided for `predicate` the created `_.property`
       * style callback returns the property value of the given element.
       *
       * If a value is also provided for `thisArg` the created `_.matchesProperty`
       * style callback returns `true` for elements that have a matching property
       * value, else `false`.
       *
       * If an object is provided for `predicate` the created `_.matches` style
       * callback returns `true` for elements that have the properties of the given
       * object, else `false`.
       *
       * @static
       * @memberOf _
       * @category Collection
       * @param {Array|Object|string} collection The collection to iterate over.
       * @param {Function|Object|string} [predicate=_.identity] The function invoked
       *  per iteration.
       * @param {*} [thisArg] The `this` binding of `predicate`.
       * @returns {Array} Returns the array of grouped elements.
       * @example
       *
       * _.partition([1, 2, 3], function(n) {
       *   return n % 2;
       * });
       * // => [[1, 3], [2]]
       *
       * _.partition([1.2, 2.3, 3.4], function(n) {
       *   return this.floor(n) % 2;
       * }, Math);
       * // => [[1.2, 3.4], [2.3]]
       *
       * var users = [
       *   { 'user': 'barney',  'age': 36, 'active': false },
       *   { 'user': 'fred',    'age': 40, 'active': true },
       *   { 'user': 'pebbles', 'age': 1,  'active': false }
       * ];
       *
       * var mapper = function(array) {
       *   return _.pluck(array, 'user');
       * };
       *
       * // using the `_.matches` callback shorthand
       * _.map(_.partition(users, { 'age': 1, 'active': false }), mapper);
       * // => [['pebbles'], ['barney', 'fred']]
       *
       * // using the `_.matchesProperty` callback shorthand
       * _.map(_.partition(users, 'active', false), mapper);
       * // => [['barney', 'pebbles'], ['fred']]
       *
       * // using the `_.property` callback shorthand
       * _.map(_.partition(users, 'active'), mapper);
       * // => [['fred'], ['barney', 'pebbles']]
       */
      var partition = createAggregator(function(result, value, key) {
        result[key ? 0 : 1].push(value);
      }, function() { return [[], []]; });
  
      /**
       * Gets the property value of `path` from all elements in `collection`.
       *
       * @static
       * @memberOf _
       * @category Collection
       * @param {Array|Object|string} collection The collection to iterate over.
       * @param {Array|string} path The path of the property to pluck.
       * @returns {Array} Returns the property values.
       * @example
       *
       * var users = [
       *   { 'user': 'barney', 'age': 36 },
       *   { 'user': 'fred',   'age': 40 }
       * ];
       *
       * _.pluck(users, 'user');
       * // => ['barney', 'fred']
       *
       * var userIndex = _.indexBy(users, 'user');
       * _.pluck(userIndex, 'age');
       * // => [36, 40] (iteration order is not guaranteed)
       */
      function pluck(collection, path) {
        return map(collection, property(path));
      }
  
      /**
       * Reduces `collection` to a value which is the accumulated result of running
       * each element in `collection` through `iteratee`, where each successive
       * invocation is supplied the return value of the previous. If `accumulator`
       * is not provided the first element of `collection` is used as the initial
       * value. The `iteratee` is bound to `thisArg` and invoked with four arguments:
       * (accumulator, value, index|key, collection).
       *
       * Many lodash methods are guarded to work as iteratees for methods like
       * `_.reduce`, `_.reduceRight`, and `_.transform`.
       *
       * The guarded methods are:
       * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `sortByAll`,
       * and `sortByOrder`
       *
       * @static
       * @memberOf _
       * @alias foldl, inject
       * @category Collection
       * @param {Array|Object|string} collection The collection to iterate over.
       * @param {Function} [iteratee=_.identity] The function invoked per iteration.
       * @param {*} [accumulator] The initial value.
       * @param {*} [thisArg] The `this` binding of `iteratee`.
       * @returns {*} Returns the accumulated value.
       * @example
       *
       * _.reduce([1, 2], function(total, n) {
       *   return total + n;
       * });
       * // => 3
       *
       * _.reduce({ 'a': 1, 'b': 2 }, function(result, n, key) {
       *   result[key] = n * 3;
       *   return result;
       * }, {});
       * // => { 'a': 3, 'b': 6 } (iteration order is not guaranteed)
       */
      var reduce = createReduce(arrayReduce, baseEach);
  
      /**
       * This method is like `_.reduce` except that it iterates over elements of
       * `collection` from right to left.
       *
       * @static
       * @memberOf _
       * @alias foldr
       * @category Collection
       * @param {Array|Object|string} collection The collection to iterate over.
       * @param {Function} [iteratee=_.identity] The function invoked per iteration.
       * @param {*} [accumulator] The initial value.
       * @param {*} [thisArg] The `this` binding of `iteratee`.
       * @returns {*} Returns the accumulated value.
       * @example
       *
       * var array = [[0, 1], [2, 3], [4, 5]];
       *
       * _.reduceRight(array, function(flattened, other) {
       *   return flattened.concat(other);
       * }, []);
       * // => [4, 5, 2, 3, 0, 1]
       */
      var reduceRight = createReduce(arrayReduceRight, baseEachRight);
  
      /**
       * The opposite of `_.filter`; this method returns the elements of `collection`
       * that `predicate` does **not** return truthy for.
       *
       * @static
       * @memberOf _
       * @category Collection
       * @param {Array|Object|string} collection The collection to iterate over.
       * @param {Function|Object|string} [predicate=_.identity] The function invoked
       *  per iteration.
       * @param {*} [thisArg] The `this` binding of `predicate`.
       * @returns {Array} Returns the new filtered array.
       * @example
       *
       * _.reject([1, 2, 3, 4], function(n) {
       *   return n % 2 == 0;
       * });
       * // => [1, 3]
       *
       * var users = [
       *   { 'user': 'barney', 'age': 36, 'active': false },
       *   { 'user': 'fred',   'age': 40, 'active': true }
       * ];
       *
       * // using the `_.matches` callback shorthand
       * _.pluck(_.reject(users, { 'age': 40, 'active': true }), 'user');
       * // => ['barney']
       *
       * // using the `_.matchesProperty` callback shorthand
       * _.pluck(_.reject(users, 'active', false), 'user');
       * // => ['fred']
       *
       * // using the `_.property` callback shorthand
       * _.pluck(_.reject(users, 'active'), 'user');
       * // => ['barney']
       */
      function reject(collection, predicate, thisArg) {
        var func = isArray(collection) ? arrayFilter : baseFilter;
        predicate = getCallback(predicate, thisArg, 3);
        return func(collection, function(value, index, collection) {
          return !predicate(value, index, collection);
        });
      }
  
      /**
       * Gets a random element or `n` random elements from a collection.
       *
       * @static
       * @memberOf _
       * @category Collection
       * @param {Array|Object|string} collection The collection to sample.
       * @param {number} [n] The number of elements to sample.
       * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
       * @returns {*} Returns the random sample(s).
       * @example
       *
       * _.sample([1, 2, 3, 4]);
       * // => 2
       *
       * _.sample([1, 2, 3, 4], 2);
       * // => [3, 1]
       */
      function sample(collection, n, guard) {
        if (guard ? isIterateeCall(collection, n, guard) : n == null) {
          collection = toIterable(collection);
          var length = collection.length;
          return length > 0 ? collection[baseRandom(0, length - 1)] : undefined;
        }
        var index = -1,
            result = toArray(collection),
            length = result.length,
            lastIndex = length - 1;
  
        n = nativeMin(n < 0 ? 0 : (+n || 0), length);
        while (++index < n) {
          var rand = baseRandom(index, lastIndex),
              value = result[rand];
  
          result[rand] = result[index];
          result[index] = value;
        }
        result.length = n;
        return result;
      }
  
      /**
       * Creates an array of shuffled values, using a version of the
       * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
       *
       * @static
       * @memberOf _
       * @category Collection
       * @param {Array|Object|string} collection The collection to shuffle.
       * @returns {Array} Returns the new shuffled array.
       * @example
       *
       * _.shuffle([1, 2, 3, 4]);
       * // => [4, 1, 3, 2]
       */
      function shuffle(collection) {
        return sample(collection, POSITIVE_INFINITY);
      }
  
      /**
       * Gets the size of `collection` by returning its length for array-like
       * values or the number of own enumerable properties for objects.
       *
       * @static
       * @memberOf _
       * @category Collection
       * @param {Array|Object|string} collection The collection to inspect.
       * @returns {number} Returns the size of `collection`.
       * @example
       *
       * _.size([1, 2, 3]);
       * // => 3
       *
       * _.size({ 'a': 1, 'b': 2 });
       * // => 2
       *
       * _.size('pebbles');
       * // => 7
       */
      function size(collection) {
        var length = collection ? getLength(collection) : 0;
        return isLength(length) ? length : keys(collection).length;
      }
  
      /**
       * Checks if `predicate` returns truthy for **any** element of `collection`.
       * The function returns as soon as it finds a passing value and does not iterate
       * over the entire collection. The predicate is bound to `thisArg` and invoked
       * with three arguments: (value, index|key, collection).
       *
       * If a property name is provided for `predicate` the created `_.property`
       * style callback returns the property value of the given element.
       *
       * If a value is also provided for `thisArg` the created `_.matchesProperty`
       * style callback returns `true` for elements that have a matching property
       * value, else `false`.
       *
       * If an object is provided for `predicate` the created `_.matches` style
       * callback returns `true` for elements that have the properties of the given
       * object, else `false`.
       *
       * @static
       * @memberOf _
       * @alias any
       * @category Collection
       * @param {Array|Object|string} collection The collection to iterate over.
       * @param {Function|Object|string} [predicate=_.identity] The function invoked
       *  per iteration.
       * @param {*} [thisArg] The `this` binding of `predicate`.
       * @returns {boolean} Returns `true` if any element passes the predicate check,
       *  else `false`.
       * @example
       *
       * _.some([null, 0, 'yes', false], Boolean);
       * // => true
       *
       * var users = [
       *   { 'user': 'barney', 'active': true },
       *   { 'user': 'fred',   'active': false }
       * ];
       *
       * // using the `_.matches` callback shorthand
       * _.some(users, { 'user': 'barney', 'active': false });
       * // => false
       *
       * // using the `_.matchesProperty` callback shorthand
       * _.some(users, 'active', false);
       * // => true
       *
       * // using the `_.property` callback shorthand
       * _.some(users, 'active');
       * // => true
       */
      function some(collection, predicate, thisArg) {
        var func = isArray(collection) ? arraySome : baseSome;
        if (thisArg && isIterateeCall(collection, predicate, thisArg)) {
          predicate = undefined;
        }
        if (typeof predicate != 'function' || thisArg !== undefined) {
          predicate = getCallback(predicate, thisArg, 3);
        }
        return func(collection, predicate);
      }
  
      /**
       * Creates an array of elements, sorted in ascending order by the results of
       * running each element in a collection through `iteratee`. This method performs
       * a stable sort, that is, it preserves the original sort order of equal elements.
       * The `iteratee` is bound to `thisArg` and invoked with three arguments:
       * (value, index|key, collection).
       *
       * If a property name is provided for `iteratee` the created `_.property`
       * style callback returns the property value of the given element.
       *
       * If a value is also provided for `thisArg` the created `_.matchesProperty`
       * style callback returns `true` for elements that have a matching property
       * value, else `false`.
       *
       * If an object is provided for `iteratee` the created `_.matches` style
       * callback returns `true` for elements that have the properties of the given
       * object, else `false`.
       *
       * @static
       * @memberOf _
       * @category Collection
       * @param {Array|Object|string} collection The collection to iterate over.
       * @param {Function|Object|string} [iteratee=_.identity] The function invoked
       *  per iteration.
       * @param {*} [thisArg] The `this` binding of `iteratee`.
       * @returns {Array} Returns the new sorted array.
       * @example
       *
       * _.sortBy([1, 2, 3], function(n) {
       *   return Math.sin(n);
       * });
       * // => [3, 1, 2]
       *
       * _.sortBy([1, 2, 3], function(n) {
       *   return this.sin(n);
       * }, Math);
       * // => [3, 1, 2]
       *
       * var users = [
       *   { 'user': 'fred' },
       *   { 'user': 'pebbles' },
       *   { 'user': 'barney' }
       * ];
       *
       * // using the `_.property` callback shorthand
       * _.pluck(_.sortBy(users, 'user'), 'user');
       * // => ['barney', 'fred', 'pebbles']
       */
      function sortBy(collection, iteratee, thisArg) {
        if (collection == null) {
          return [];
        }
        if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
          iteratee = undefined;
        }
        var index = -1;
        iteratee = getCallback(iteratee, thisArg, 3);
  
        var result = baseMap(collection, function(value, key, collection) {
          return { 'criteria': iteratee(value, key, collection), 'index': ++index, 'value': value };
        });
        return baseSortBy(result, compareAscending);
      }
  
      /**
       * This method is like `_.sortBy` except that it can sort by multiple iteratees
       * or property names.
       *
       * If a property name is provided for an iteratee the created `_.property`
       * style callback returns the property value of the given element.
       *
       * If an object is provided for an iteratee the created `_.matches` style
       * callback returns `true` for elements that have the properties of the given
       * object, else `false`.
       *
       * @static
       * @memberOf _
       * @category Collection
       * @param {Array|Object|string} collection The collection to iterate over.
       * @param {...(Function|Function[]|Object|Object[]|string|string[])} iteratees
       *  The iteratees to sort by, specified as individual values or arrays of values.
       * @returns {Array} Returns the new sorted array.
       * @example
       *
       * var users = [
       *   { 'user': 'fred',   'age': 48 },
       *   { 'user': 'barney', 'age': 36 },
       *   { 'user': 'fred',   'age': 42 },
       *   { 'user': 'barney', 'age': 34 }
       * ];
       *
       * _.map(_.sortByAll(users, ['user', 'age']), _.values);
       * // => [['barney', 34], ['barney', 36], ['fred', 42], ['fred', 48]]
       *
       * _.map(_.sortByAll(users, 'user', function(chr) {
       *   return Math.floor(chr.age / 10);
       * }), _.values);
       * // => [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
       */
      var sortByAll = restParam(function(collection, iteratees) {
        if (collection == null) {
          return [];
        }
        var guard = iteratees[2];
        if (guard && isIterateeCall(iteratees[0], iteratees[1], guard)) {
          iteratees.length = 1;
        }
        return baseSortByOrder(collection, baseFlatten(iteratees), []);
      });
  
      /**
       * This method is like `_.sortByAll` except that it allows specifying the
       * sort orders of the iteratees to sort by. If `orders` is unspecified, all
       * values are sorted in ascending order. Otherwise, a value is sorted in
       * ascending order if its corresponding order is "asc", and descending if "desc".
       *
       * If a property name is provided for an iteratee the created `_.property`
       * style callback returns the property value of the given element.
       *
       * If an object is provided for an iteratee the created `_.matches` style
       * callback returns `true` for elements that have the properties of the given
       * object, else `false`.
       *
       * @static
       * @memberOf _
       * @category Collection
       * @param {Array|Object|string} collection The collection to iterate over.
       * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
       * @param {boolean[]} [orders] The sort orders of `iteratees`.
       * @param- {Object} [guard] Enables use as a callback for functions like `_.reduce`.
       * @returns {Array} Returns the new sorted array.
       * @example
       *
       * var users = [
       *   { 'user': 'fred',   'age': 48 },
       *   { 'user': 'barney', 'age': 34 },
       *   { 'user': 'fred',   'age': 42 },
       *   { 'user': 'barney', 'age': 36 }
       * ];
       *
       * // sort by `user` in ascending order and by `age` in descending order
       * _.map(_.sortByOrder(users, ['user', 'age'], ['asc', 'desc']), _.values);
       * // => [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
       */
      function sortByOrder(collection, iteratees, orders, guard) {
        if (collection == null) {
          return [];
        }
        if (guard && isIterateeCall(iteratees, orders, guard)) {
          orders = undefined;
        }
        if (!isArray(iteratees)) {
          iteratees = iteratees == null ? [] : [iteratees];
        }
        if (!isArray(orders)) {
          orders = orders == null ? [] : [orders];
        }
        return baseSortByOrder(collection, iteratees, orders);
      }
  
      /**
       * Performs a deep comparison between each element in `collection` and the
       * source object, returning an array of all elements that have equivalent
       * property values.
       *
       * **Note:** This method supports comparing arrays, booleans, `Date` objects,
       * numbers, `Object` objects, regexes, and strings. Objects are compared by
       * their own, not inherited, enumerable properties. For comparing a single
       * own or inherited property value see `_.matchesProperty`.
       *
       * @static
       * @memberOf _
       * @category Collection
       * @param {Array|Object|string} collection The collection to search.
       * @param {Object} source The object of property values to match.
       * @returns {Array} Returns the new filtered array.
       * @example
       *
       * var users = [
       *   { 'user': 'barney', 'age': 36, 'active': false, 'pets': ['hoppy'] },
       *   { 'user': 'fred',   'age': 40, 'active': true, 'pets': ['baby puss', 'dino'] }
       * ];
       *
       * _.pluck(_.where(users, { 'age': 36, 'active': false }), 'user');
       * // => ['barney']
       *
       * _.pluck(_.where(users, { 'pets': ['dino'] }), 'user');
       * // => ['fred']
       */
      function where(collection, source) {
        return filter(collection, baseMatches(source));
      }
  
      /*------------------------------------------------------------------------*/
  
      /**
       * Gets the number of milliseconds that have elapsed since the Unix epoch
       * (1 January 1970 00:00:00 UTC).
       *
       * @static
       * @memberOf _
       * @category Date
       * @example
       *
       * _.defer(function(stamp) {
       *   console.log(_.now() - stamp);
       * }, _.now());
       * // => logs the number of milliseconds it took for the deferred function to be invoked
       */
      var now = nativeNow || function() {
        return new Date().getTime();
      };
  
      /*------------------------------------------------------------------------*/
  
      /**
       * The opposite of `_.before`; this method creates a function that invokes
       * `func` once it is called `n` or more times.
       *
       * @static
       * @memberOf _
       * @category Function
       * @param {number} n The number of calls before `func` is invoked.
       * @param {Function} func The function to restrict.
       * @returns {Function} Returns the new restricted function.
       * @example
       *
       * var saves = ['profile', 'settings'];
       *
       * var done = _.after(saves.length, function() {
       *   console.log('done saving!');
       * });
       *
       * _.forEach(saves, function(type) {
       *   asyncSave({ 'type': type, 'complete': done });
       * });
       * // => logs 'done saving!' after the two async saves have completed
       */
      function after(n, func) {
        if (typeof func != 'function') {
          if (typeof n == 'function') {
            var temp = n;
            n = func;
            func = temp;
          } else {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
        }
        n = nativeIsFinite(n = +n) ? n : 0;
        return function() {
          if (--n < 1) {
            return func.apply(this, arguments);
          }
        };
      }
  
      /**
       * Creates a function that accepts up to `n` arguments ignoring any
       * additional arguments.
       *
       * @static
       * @memberOf _
       * @category Function
       * @param {Function} func The function to cap arguments for.
       * @param {number} [n=func.length] The arity cap.
       * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
       * @returns {Function} Returns the new function.
       * @example
       *
       * _.map(['6', '8', '10'], _.ary(parseInt, 1));
       * // => [6, 8, 10]
       */
      function ary(func, n, guard) {
        if (guard && isIterateeCall(func, n, guard)) {
          n = undefined;
        }
        n = (func && n == null) ? func.length : nativeMax(+n || 0, 0);
        return createWrapper(func, ARY_FLAG, undefined, undefined, undefined, undefined, n);
      }
  
      /**
       * Creates a function that invokes `func`, with the `this` binding and arguments
       * of the created function, while it is called less than `n` times. Subsequent
       * calls to the created function return the result of the last `func` invocation.
       *
       * @static
       * @memberOf _
       * @category Function
       * @param {number} n The number of calls at which `func` is no longer invoked.
       * @param {Function} func The function to restrict.
       * @returns {Function} Returns the new restricted function.
       * @example
       *
       * jQuery('#add').on('click', _.before(5, addContactToList));
       * // => allows adding up to 4 contacts to the list
       */
      function before(n, func) {
        var result;
        if (typeof func != 'function') {
          if (typeof n == 'function') {
            var temp = n;
            n = func;
            func = temp;
          } else {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
        }
        return function() {
          if (--n > 0) {
            result = func.apply(this, arguments);
          }
          if (n <= 1) {
            func = undefined;
          }
          return result;
        };
      }
  
      /**
       * Creates a function that invokes `func` with the `this` binding of `thisArg`
       * and prepends any additional `_.bind` arguments to those provided to the
       * bound function.
       *
       * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
       * may be used as a placeholder for partially applied arguments.
       *
       * **Note:** Unlike native `Function#bind` this method does not set the "length"
       * property of bound functions.
       *
       * @static
       * @memberOf _
       * @category Function
       * @param {Function} func The function to bind.
       * @param {*} thisArg The `this` binding of `func`.
       * @param {...*} [partials] The arguments to be partially applied.
       * @returns {Function} Returns the new bound function.
       * @example
       *
       * var greet = function(greeting, punctuation) {
       *   return greeting + ' ' + this.user + punctuation;
       * };
       *
       * var object = { 'user': 'fred' };
       *
       * var bound = _.bind(greet, object, 'hi');
       * bound('!');
       * // => 'hi fred!'
       *
       * // using placeholders
       * var bound = _.bind(greet, object, _, '!');
       * bound('hi');
       * // => 'hi fred!'
       */
      var bind = restParam(function(func, thisArg, partials) {
        var bitmask = BIND_FLAG;
        if (partials.length) {
          var holders = replaceHolders(partials, bind.placeholder);
          bitmask |= PARTIAL_FLAG;
        }
        return createWrapper(func, bitmask, thisArg, partials, holders);
      });
  
      /**
       * Binds methods of an object to the object itself, overwriting the existing
       * method. Method names may be specified as individual arguments or as arrays
       * of method names. If no method names are provided all enumerable function
       * properties, own and inherited, of `object` are bound.
       *
       * **Note:** This method does not set the "length" property of bound functions.
       *
       * @static
       * @memberOf _
       * @category Function
       * @param {Object} object The object to bind and assign the bound methods to.
       * @param {...(string|string[])} [methodNames] The object method names to bind,
       *  specified as individual method names or arrays of method names.
       * @returns {Object} Returns `object`.
       * @example
       *
       * var view = {
       *   'label': 'docs',
       *   'onClick': function() {
       *     console.log('clicked ' + this.label);
       *   }
       * };
       *
       * _.bindAll(view);
       * jQuery('#docs').on('click', view.onClick);
       * // => logs 'clicked docs' when the element is clicked
       */
      var bindAll = restParam(function(object, methodNames) {
        methodNames = methodNames.length ? baseFlatten(methodNames) : functions(object);
  
        var index = -1,
            length = methodNames.length;
  
        while (++index < length) {
          var key = methodNames[index];
          object[key] = createWrapper(object[key], BIND_FLAG, object);
        }
        return object;
      });
  
      /**
       * Creates a function that invokes the method at `object[key]` and prepends
       * any additional `_.bindKey` arguments to those provided to the bound function.
       *
       * This method differs from `_.bind` by allowing bound functions to reference
       * methods that may be redefined or don't yet exist.
       * See [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
       * for more details.
       *
       * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
       * builds, may be used as a placeholder for partially applied arguments.
       *
       * @static
       * @memberOf _
       * @category Function
       * @param {Object} object The object the method belongs to.
       * @param {string} key The key of the method.
       * @param {...*} [partials] The arguments to be partially applied.
       * @returns {Function} Returns the new bound function.
       * @example
       *
       * var object = {
       *   'user': 'fred',
       *   'greet': function(greeting, punctuation) {
       *     return greeting + ' ' + this.user + punctuation;
       *   }
       * };
       *
       * var bound = _.bindKey(object, 'greet', 'hi');
       * bound('!');
       * // => 'hi fred!'
       *
       * object.greet = function(greeting, punctuation) {
       *   return greeting + 'ya ' + this.user + punctuation;
       * };
       *
       * bound('!');
       * // => 'hiya fred!'
       *
       * // using placeholders
       * var bound = _.bindKey(object, 'greet', _, '!');
       * bound('hi');
       * // => 'hiya fred!'
       */
      var bindKey = restParam(function(object, key, partials) {
        var bitmask = BIND_FLAG | BIND_KEY_FLAG;
        if (partials.length) {
          var holders = replaceHolders(partials, bindKey.placeholder);
          bitmask |= PARTIAL_FLAG;
        }
        return createWrapper(key, bitmask, object, partials, holders);
      });
  
      /**
       * Creates a function that accepts one or more arguments of `func` that when
       * called either invokes `func` returning its result, if all `func` arguments
       * have been provided, or returns a function that accepts one or more of the
       * remaining `func` arguments, and so on. The arity of `func` may be specified
       * if `func.length` is not sufficient.
       *
       * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
       * may be used as a placeholder for provided arguments.
       *
       * **Note:** This method does not set the "length" property of curried functions.
       *
       * @static
       * @memberOf _
       * @category Function
       * @param {Function} func The function to curry.
       * @param {number} [arity=func.length] The arity of `func`.
       * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
       * @returns {Function} Returns the new curried function.
       * @example
       *
       * var abc = function(a, b, c) {
       *   return [a, b, c];
       * };
       *
       * var curried = _.curry(abc);
       *
       * curried(1)(2)(3);
       * // => [1, 2, 3]
       *
       * curried(1, 2)(3);
       * // => [1, 2, 3]
       *
       * curried(1, 2, 3);
       * // => [1, 2, 3]
       *
       * // using placeholders
       * curried(1)(_, 3)(2);
       * // => [1, 2, 3]
       */
      var curry = createCurry(CURRY_FLAG);
  
      /**
       * This method is like `_.curry` except that arguments are applied to `func`
       * in the manner of `_.partialRight` instead of `_.partial`.
       *
       * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
       * builds, may be used as a placeholder for provided arguments.
       *
       * **Note:** This method does not set the "length" property of curried functions.
       *
       * @static
       * @memberOf _
       * @category Function
       * @param {Function} func The function to curry.
       * @param {number} [arity=func.length] The arity of `func`.
       * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
       * @returns {Function} Returns the new curried function.
       * @example
       *
       * var abc = function(a, b, c) {
       *   return [a, b, c];
       * };
       *
       * var curried = _.curryRight(abc);
       *
       * curried(3)(2)(1);
       * // => [1, 2, 3]
       *
       * curried(2, 3)(1);
       * // => [1, 2, 3]
       *
       * curried(1, 2, 3);
       * // => [1, 2, 3]
       *
       * // using placeholders
       * curried(3)(1, _)(2);
       * // => [1, 2, 3]
       */
      var curryRight = createCurry(CURRY_RIGHT_FLAG);
  
      /**
       * Creates a debounced function that delays invoking `func` until after `wait`
       * milliseconds have elapsed since the last time the debounced function was
       * invoked. The debounced function comes with a `cancel` method to cancel
       * delayed invocations. Provide an options object to indicate that `func`
       * should be invoked on the leading and/or trailing edge of the `wait` timeout.
       * Subsequent calls to the debounced function return the result of the last
       * `func` invocation.
       *
       * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
       * on the trailing edge of the timeout only if the the debounced function is
       * invoked more than once during the `wait` timeout.
       *
       * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
       * for details over the differences between `_.debounce` and `_.throttle`.
       *
       * @static
       * @memberOf _
       * @category Function
       * @param {Function} func The function to debounce.
       * @param {number} [wait=0] The number of milliseconds to delay.
       * @param {Object} [options] The options object.
       * @param {boolean} [options.leading=false] Specify invoking on the leading
       *  edge of the timeout.
       * @param {number} [options.maxWait] The maximum time `func` is allowed to be
       *  delayed before it is invoked.
       * @param {boolean} [options.trailing=true] Specify invoking on the trailing
       *  edge of the timeout.
       * @returns {Function} Returns the new debounced function.
       * @example
       *
       * // avoid costly calculations while the window size is in flux
       * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
       *
       * // invoke `sendMail` when the click event is fired, debouncing subsequent calls
       * jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
       *   'leading': true,
       *   'trailing': false
       * }));
       *
       * // ensure `batchLog` is invoked once after 1 second of debounced calls
       * var source = new EventSource('/stream');
       * jQuery(source).on('message', _.debounce(batchLog, 250, {
       *   'maxWait': 1000
       * }));
       *
       * // cancel a debounced call
       * var todoChanges = _.debounce(batchLog, 1000);
       * Object.observe(models.todo, todoChanges);
       *
       * Object.observe(models, function(changes) {
       *   if (_.find(changes, { 'user': 'todo', 'type': 'delete'})) {
       *     todoChanges.cancel();
       *   }
       * }, ['delete']);
       *
       * // ...at some point `models.todo` is changed
       * models.todo.completed = true;
       *
       * // ...before 1 second has passed `models.todo` is deleted
       * // which cancels the debounced `todoChanges` call
       * delete models.todo;
       */
      function debounce(func, wait, options) {
        var args,
            maxTimeoutId,
            result,
            stamp,
            thisArg,
            timeoutId,
            trailingCall,
            lastCalled = 0,
            maxWait = false,
            trailing = true;
  
        if (typeof func != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        wait = wait < 0 ? 0 : (+wait || 0);
        if (options === true) {
          var leading = true;
          trailing = false;
        } else if (isObject(options)) {
          leading = !!options.leading;
          maxWait = 'maxWait' in options && nativeMax(+options.maxWait || 0, wait);
          trailing = 'trailing' in options ? !!options.trailing : trailing;
        }
  
        function cancel() {
          if (timeoutId) {
            clearTimeout(timeoutId);
          }
          if (maxTimeoutId) {
            clearTimeout(maxTimeoutId);
          }
          lastCalled = 0;
          maxTimeoutId = timeoutId = trailingCall = undefined;
        }
  
        function complete(isCalled, id) {
          if (id) {
            clearTimeout(id);
          }
          maxTimeoutId = timeoutId = trailingCall = undefined;
          if (isCalled) {
            lastCalled = now();
            result = func.apply(thisArg, args);
            if (!timeoutId && !maxTimeoutId) {
              args = thisArg = undefined;
            }
          }
        }
  
        function delayed() {
          var remaining = wait - (now() - stamp);
          if (remaining <= 0 || remaining > wait) {
            complete(trailingCall, maxTimeoutId);
          } else {
            timeoutId = setTimeout(delayed, remaining);
          }
        }
  
        function maxDelayed() {
          complete(trailing, timeoutId);
        }
  
        function debounced() {
          args = arguments;
          stamp = now();
          thisArg = this;
          trailingCall = trailing && (timeoutId || !leading);
  
          if (maxWait === false) {
            var leadingCall = leading && !timeoutId;
          } else {
            if (!maxTimeoutId && !leading) {
              lastCalled = stamp;
            }
            var remaining = maxWait - (stamp - lastCalled),
                isCalled = remaining <= 0 || remaining > maxWait;
  
            if (isCalled) {
              if (maxTimeoutId) {
                maxTimeoutId = clearTimeout(maxTimeoutId);
              }
              lastCalled = stamp;
              result = func.apply(thisArg, args);
            }
            else if (!maxTimeoutId) {
              maxTimeoutId = setTimeout(maxDelayed, remaining);
            }
          }
          if (isCalled && timeoutId) {
            timeoutId = clearTimeout(timeoutId);
          }
          else if (!timeoutId && wait !== maxWait) {
            timeoutId = setTimeout(delayed, wait);
          }
          if (leadingCall) {
            isCalled = true;
            result = func.apply(thisArg, args);
          }
          if (isCalled && !timeoutId && !maxTimeoutId) {
            args = thisArg = undefined;
          }
          return result;
        }
        debounced.cancel = cancel;
        return debounced;
      }
  
      /**
       * Defers invoking the `func` until the current call stack has cleared. Any
       * additional arguments are provided to `func` when it is invoked.
       *
       * @static
       * @memberOf _
       * @category Function
       * @param {Function} func The function to defer.
       * @param {...*} [args] The arguments to invoke the function with.
       * @returns {number} Returns the timer id.
       * @example
       *
       * _.defer(function(text) {
       *   console.log(text);
       * }, 'deferred');
       * // logs 'deferred' after one or more milliseconds
       */
      var defer = restParam(function(func, args) {
        return baseDelay(func, 1, args);
      });
  
      /**
       * Invokes `func` after `wait` milliseconds. Any additional arguments are
       * provided to `func` when it is invoked.
       *
       * @static
       * @memberOf _
       * @category Function
       * @param {Function} func The function to delay.
       * @param {number} wait The number of milliseconds to delay invocation.
       * @param {...*} [args] The arguments to invoke the function with.
       * @returns {number} Returns the timer id.
       * @example
       *
       * _.delay(function(text) {
       *   console.log(text);
       * }, 1000, 'later');
       * // => logs 'later' after one second
       */
      var delay = restParam(function(func, wait, args) {
        return baseDelay(func, wait, args);
      });
  
      /**
       * Creates a function that returns the result of invoking the provided
       * functions with the `this` binding of the created function, where each
       * successive invocation is supplied the return value of the previous.
       *
       * @static
       * @memberOf _
       * @category Function
       * @param {...Function} [funcs] Functions to invoke.
       * @returns {Function} Returns the new function.
       * @example
       *
       * function square(n) {
       *   return n * n;
       * }
       *
       * var addSquare = _.flow(_.add, square);
       * addSquare(1, 2);
       * // => 9
       */
      var flow = createFlow();
  
      /**
       * This method is like `_.flow` except that it creates a function that
       * invokes the provided functions from right to left.
       *
       * @static
       * @memberOf _
       * @alias backflow, compose
       * @category Function
       * @param {...Function} [funcs] Functions to invoke.
       * @returns {Function} Returns the new function.
       * @example
       *
       * function square(n) {
       *   return n * n;
       * }
       *
       * var addSquare = _.flowRight(square, _.add);
       * addSquare(1, 2);
       * // => 9
       */
      var flowRight = createFlow(true);
  
      /**
       * Creates a function that memoizes the result of `func`. If `resolver` is
       * provided it determines the cache key for storing the result based on the
       * arguments provided to the memoized function. By default, the first argument
       * provided to the memoized function is coerced to a string and used as the
       * cache key. The `func` is invoked with the `this` binding of the memoized
       * function.
       *
       * **Note:** The cache is exposed as the `cache` property on the memoized
       * function. Its creation may be customized by replacing the `_.memoize.Cache`
       * constructor with one whose instances implement the [`Map`](http://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-map-prototype-object)
       * method interface of `get`, `has`, and `set`.
       *
       * @static
       * @memberOf _
       * @category Function
       * @param {Function} func The function to have its output memoized.
       * @param {Function} [resolver] The function to resolve the cache key.
       * @returns {Function} Returns the new memoizing function.
       * @example
       *
       * var upperCase = _.memoize(function(string) {
       *   return string.toUpperCase();
       * });
       *
       * upperCase('fred');
       * // => 'FRED'
       *
       * // modifying the result cache
       * upperCase.cache.set('fred', 'BARNEY');
       * upperCase('fred');
       * // => 'BARNEY'
       *
       * // replacing `_.memoize.Cache`
       * var object = { 'user': 'fred' };
       * var other = { 'user': 'barney' };
       * var identity = _.memoize(_.identity);
       *
       * identity(object);
       * // => { 'user': 'fred' }
       * identity(other);
       * // => { 'user': 'fred' }
       *
       * _.memoize.Cache = WeakMap;
       * var identity = _.memoize(_.identity);
       *
       * identity(object);
       * // => { 'user': 'fred' }
       * identity(other);
       * // => { 'user': 'barney' }
       */
      function memoize(func, resolver) {
        if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        var memoized = function() {
          var args = arguments,
              key = resolver ? resolver.apply(this, args) : args[0],
              cache = memoized.cache;
  
          if (cache.has(key)) {
            return cache.get(key);
          }
          var result = func.apply(this, args);
          memoized.cache = cache.set(key, result);
          return result;
        };
        memoized.cache = new memoize.Cache;
        return memoized;
      }
  
      /**
       * Creates a function that runs each argument through a corresponding
       * transform function.
       *
       * @static
       * @memberOf _
       * @category Function
       * @param {Function} func The function to wrap.
       * @param {...(Function|Function[])} [transforms] The functions to transform
       * arguments, specified as individual functions or arrays of functions.
       * @returns {Function} Returns the new function.
       * @example
       *
       * function doubled(n) {
       *   return n * 2;
       * }
       *
       * function square(n) {
       *   return n * n;
       * }
       *
       * var modded = _.modArgs(function(x, y) {
       *   return [x, y];
       * }, square, doubled);
       *
       * modded(1, 2);
       * // => [1, 4]
       *
       * modded(5, 10);
       * // => [25, 20]
       */
      var modArgs = restParam(function(func, transforms) {
        transforms = baseFlatten(transforms);
        if (typeof func != 'function' || !arrayEvery(transforms, baseIsFunction)) {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        var length = transforms.length;
        return restParam(function(args) {
          var index = nativeMin(args.length, length);
          while (index--) {
            args[index] = transforms[index](args[index]);
          }
          return func.apply(this, args);
        });
      });
  
      /**
       * Creates a function that negates the result of the predicate `func`. The
       * `func` predicate is invoked with the `this` binding and arguments of the
       * created function.
       *
       * @static
       * @memberOf _
       * @category Function
       * @param {Function} predicate The predicate to negate.
       * @returns {Function} Returns the new function.
       * @example
       *
       * function isEven(n) {
       *   return n % 2 == 0;
       * }
       *
       * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
       * // => [1, 3, 5]
       */
      function negate(predicate) {
        if (typeof predicate != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        return function() {
          return !predicate.apply(this, arguments);
        };
      }
  
      /**
       * Creates a function that is restricted to invoking `func` once. Repeat calls
       * to the function return the value of the first call. The `func` is invoked
       * with the `this` binding and arguments of the created function.
       *
       * @static
       * @memberOf _
       * @category Function
       * @param {Function} func The function to restrict.
       * @returns {Function} Returns the new restricted function.
       * @example
       *
       * var initialize = _.once(createApplication);
       * initialize();
       * initialize();
       * // `initialize` invokes `createApplication` once
       */
      function once(func) {
        return before(2, func);
      }
  
      /**
       * Creates a function that invokes `func` with `partial` arguments prepended
       * to those provided to the new function. This method is like `_.bind` except
       * it does **not** alter the `this` binding.
       *
       * The `_.partial.placeholder` value, which defaults to `_` in monolithic
       * builds, may be used as a placeholder for partially applied arguments.
       *
       * **Note:** This method does not set the "length" property of partially
       * applied functions.
       *
       * @static
       * @memberOf _
       * @category Function
       * @param {Function} func The function to partially apply arguments to.
       * @param {...*} [partials] The arguments to be partially applied.
       * @returns {Function} Returns the new partially applied function.
       * @example
       *
       * var greet = function(greeting, name) {
       *   return greeting + ' ' + name;
       * };
       *
       * var sayHelloTo = _.partial(greet, 'hello');
       * sayHelloTo('fred');
       * // => 'hello fred'
       *
       * // using placeholders
       * var greetFred = _.partial(greet, _, 'fred');
       * greetFred('hi');
       * // => 'hi fred'
       */
      var partial = createPartial(PARTIAL_FLAG);
  
      /**
       * This method is like `_.partial` except that partially applied arguments
       * are appended to those provided to the new function.
       *
       * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
       * builds, may be used as a placeholder for partially applied arguments.
       *
       * **Note:** This method does not set the "length" property of partially
       * applied functions.
       *
       * @static
       * @memberOf _
       * @category Function
       * @param {Function} func The function to partially apply arguments to.
       * @param {...*} [partials] The arguments to be partially applied.
       * @returns {Function} Returns the new partially applied function.
       * @example
       *
       * var greet = function(greeting, name) {
       *   return greeting + ' ' + name;
       * };
       *
       * var greetFred = _.partialRight(greet, 'fred');
       * greetFred('hi');
       * // => 'hi fred'
       *
       * // using placeholders
       * var sayHelloTo = _.partialRight(greet, 'hello', _);
       * sayHelloTo('fred');
       * // => 'hello fred'
       */
      var partialRight = createPartial(PARTIAL_RIGHT_FLAG);
  
      /**
       * Creates a function that invokes `func` with arguments arranged according
       * to the specified indexes where the argument value at the first index is
       * provided as the first argument, the argument value at the second index is
       * provided as the second argument, and so on.
       *
       * @static
       * @memberOf _
       * @category Function
       * @param {Function} func The function to rearrange arguments for.
       * @param {...(number|number[])} indexes The arranged argument indexes,
       *  specified as individual indexes or arrays of indexes.
       * @returns {Function} Returns the new function.
       * @example
       *
       * var rearged = _.rearg(function(a, b, c) {
       *   return [a, b, c];
       * }, 2, 0, 1);
       *
       * rearged('b', 'c', 'a')
       * // => ['a', 'b', 'c']
       *
       * var map = _.rearg(_.map, [1, 0]);
       * map(function(n) {
       *   return n * 3;
       * }, [1, 2, 3]);
       * // => [3, 6, 9]
       */
      var rearg = restParam(function(func, indexes) {
        return createWrapper(func, REARG_FLAG, undefined, undefined, undefined, baseFlatten(indexes));
      });
  
      /**
       * Creates a function that invokes `func` with the `this` binding of the
       * created function and arguments from `start` and beyond provided as an array.
       *
       * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
       *
       * @static
       * @memberOf _
       * @category Function
       * @param {Function} func The function to apply a rest parameter to.
       * @param {number} [start=func.length-1] The start position of the rest parameter.
       * @returns {Function} Returns the new function.
       * @example
       *
       * var say = _.restParam(function(what, names) {
       *   return what + ' ' + _.initial(names).join(', ') +
       *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
       * });
       *
       * say('hello', 'fred', 'barney', 'pebbles');
       * // => 'hello fred, barney, & pebbles'
       */
      function restParam(func, start) {
        if (typeof func != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
        return function() {
          var args = arguments,
              index = -1,
              length = nativeMax(args.length - start, 0),
              rest = Array(length);
  
          while (++index < length) {
            rest[index] = args[start + index];
          }
          switch (start) {
            case 0: return func.call(this, rest);
            case 1: return func.call(this, args[0], rest);
            case 2: return func.call(this, args[0], args[1], rest);
          }
          var otherArgs = Array(start + 1);
          index = -1;
          while (++index < start) {
            otherArgs[index] = args[index];
          }
          otherArgs[start] = rest;
          return func.apply(this, otherArgs);
        };
      }
  
      /**
       * Creates a function that invokes `func` with the `this` binding of the created
       * function and an array of arguments much like [`Function#apply`](https://es5.github.io/#x15.3.4.3).
       *
       * **Note:** This method is based on the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator).
       *
       * @static
       * @memberOf _
       * @category Function
       * @param {Function} func The function to spread arguments over.
       * @returns {Function} Returns the new function.
       * @example
       *
       * var say = _.spread(function(who, what) {
       *   return who + ' says ' + what;
       * });
       *
       * say(['fred', 'hello']);
       * // => 'fred says hello'
       *
       * // with a Promise
       * var numbers = Promise.all([
       *   Promise.resolve(40),
       *   Promise.resolve(36)
       * ]);
       *
       * numbers.then(_.spread(function(x, y) {
       *   return x + y;
       * }));
       * // => a Promise of 76
       */
      function spread(func) {
        if (typeof func != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        return function(array) {
          return func.apply(this, array);
        };
      }
  
      /**
       * Creates a throttled function that only invokes `func` at most once per
       * every `wait` milliseconds. The throttled function comes with a `cancel`
       * method to cancel delayed invocations. Provide an options object to indicate
       * that `func` should be invoked on the leading and/or trailing edge of the
       * `wait` timeout. Subsequent calls to the throttled function return the
       * result of the last `func` call.
       *
       * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
       * on the trailing edge of the timeout only if the the throttled function is
       * invoked more than once during the `wait` timeout.
       *
       * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
       * for details over the differences between `_.throttle` and `_.debounce`.
       *
       * @static
       * @memberOf _
       * @category Function
       * @param {Function} func The function to throttle.
       * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
       * @param {Object} [options] The options object.
       * @param {boolean} [options.leading=true] Specify invoking on the leading
       *  edge of the timeout.
       * @param {boolean} [options.trailing=true] Specify invoking on the trailing
       *  edge of the timeout.
       * @returns {Function} Returns the new throttled function.
       * @example
       *
       * // avoid excessively updating the position while scrolling
       * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
       *
       * // invoke `renewToken` when the click event is fired, but not more than once every 5 minutes
       * jQuery('.interactive').on('click', _.throttle(renewToken, 300000, {
       *   'trailing': false
       * }));
       *
       * // cancel a trailing throttled call
       * jQuery(window).on('popstate', throttled.cancel);
       */
      function throttle(func, wait, options) {
        var leading = true,
            trailing = true;
  
        if (typeof func != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        if (options === false) {
          leading = false;
        } else if (isObject(options)) {
          leading = 'leading' in options ? !!options.leading : leading;
          trailing = 'trailing' in options ? !!options.trailing : trailing;
        }
        return debounce(func, wait, { 'leading': leading, 'maxWait': +wait, 'trailing': trailing });
      }
  
      /**
       * Creates a function that provides `value` to the wrapper function as its
       * first argument. Any additional arguments provided to the function are
       * appended to those provided to the wrapper function. The wrapper is invoked
       * with the `this` binding of the created function.
       *
       * @static
       * @memberOf _
       * @category Function
       * @param {*} value The value to wrap.
       * @param {Function} wrapper The wrapper function.
       * @returns {Function} Returns the new function.
       * @example
       *
       * var p = _.wrap(_.escape, function(func, text) {
       *   return '<p>' + func(text) + '</p>';
       * });
       *
       * p('fred, barney, & pebbles');
       * // => '<p>fred, barney, &amp; pebbles</p>'
       */
      function wrap(value, wrapper) {
        wrapper = wrapper == null ? identity : wrapper;
        return createWrapper(wrapper, PARTIAL_FLAG, undefined, [value], []);
      }
  
      /*------------------------------------------------------------------------*/
  
      /**
       * Creates a clone of `value`. If `isDeep` is `true` nested objects are cloned,
       * otherwise they are assigned by reference. If `customizer` is provided it is
       * invoked to produce the cloned values. If `customizer` returns `undefined`
       * cloning is handled by the method instead. The `customizer` is bound to
       * `thisArg` and invoked with two argument; (value [, index|key, object]).
       *
       * **Note:** This method is loosely based on the
       * [structured clone algorithm](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm).
       * The enumerable properties of `arguments` objects and objects created by
       * constructors other than `Object` are cloned to plain `Object` objects. An
       * empty object is returned for uncloneable values such as functions, DOM nodes,
       * Maps, Sets, and WeakMaps.
       *
       * @static
       * @memberOf _
       * @category Lang
       * @param {*} value The value to clone.
       * @param {boolean} [isDeep] Specify a deep clone.
       * @param {Function} [customizer] The function to customize cloning values.
       * @param {*} [thisArg] The `this` binding of `customizer`.
       * @returns {*} Returns the cloned value.
       * @example
       *
       * var users = [
       *   { 'user': 'barney' },
       *   { 'user': 'fred' }
       * ];
       *
       * var shallow = _.clone(users);
       * shallow[0] === users[0];
       * // => true
       *
       * var deep = _.clone(users, true);
       * deep[0] === users[0];
       * // => false
       *
       * // using a customizer callback
       * var el = _.clone(document.body, function(value) {
       *   if (_.isElement(value)) {
       *     return value.cloneNode(false);
       *   }
       * });
       *
       * el === document.body
       * // => false
       * el.nodeName
       * // => BODY
       * el.childNodes.length;
       * // => 0
       */
      function clone(value, isDeep, customizer, thisArg) {
        if (isDeep && typeof isDeep != 'boolean' && isIterateeCall(value, isDeep, customizer)) {
          isDeep = false;
        }
        else if (typeof isDeep == 'function') {
          thisArg = customizer;
          customizer = isDeep;
          isDeep = false;
        }
        return typeof customizer == 'function'
          ? baseClone(value, isDeep, bindCallback(customizer, thisArg, 1))
          : baseClone(value, isDeep);
      }
  
      /**
       * Creates a deep clone of `value`. If `customizer` is provided it is invoked
       * to produce the cloned values. If `customizer` returns `undefined` cloning
       * is handled by the method instead. The `customizer` is bound to `thisArg`
       * and invoked with two argument; (value [, index|key, object]).
       *
       * **Note:** This method is loosely based on the
       * [structured clone algorithm](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm).
       * The enumerable properties of `arguments` objects and objects created by
       * constructors other than `Object` are cloned to plain `Object` objects. An
       * empty object is returned for uncloneable values such as functions, DOM nodes,
       * Maps, Sets, and WeakMaps.
       *
       * @static
       * @memberOf _
       * @category Lang
       * @param {*} value The value to deep clone.
       * @param {Function} [customizer] The function to customize cloning values.
       * @param {*} [thisArg] The `this` binding of `customizer`.
       * @returns {*} Returns the deep cloned value.
       * @example
       *
       * var users = [
       *   { 'user': 'barney' },
       *   { 'user': 'fred' }
       * ];
       *
       * var deep = _.cloneDeep(users);
       * deep[0] === users[0];
       * // => false
       *
       * // using a customizer callback
       * var el = _.cloneDeep(document.body, function(value) {
       *   if (_.isElement(value)) {
       *     return value.cloneNode(true);
       *   }
       * });
       *
       * el === document.body
       * // => false
       * el.nodeName
       * // => BODY
       * el.childNodes.length;
       * // => 20
       */
      function cloneDeep(value, customizer, thisArg) {
        return typeof customizer == 'function'
          ? baseClone(value, true, bindCallback(customizer, thisArg, 1))
          : baseClone(value, true);
      }
  
      /**
       * Checks if `value` is greater than `other`.
       *
       * @static
       * @memberOf _
       * @category Lang
       * @param {*} value The value to compare.
       * @param {*} other The other value to compare.
       * @returns {boolean} Returns `true` if `value` is greater than `other`, else `false`.
       * @example
       *
       * _.gt(3, 1);
       * // => true
       *
       * _.gt(3, 3);
       * // => false
       *
       * _.gt(1, 3);
       * // => false
       */
      function gt(value, other) {
        return value > other;
      }
  
      /**
       * Checks if `value` is greater than or equal to `other`.
       *
       * @static
       * @memberOf _
       * @category Lang
       * @param {*} value The value to compare.
       * @param {*} other The other value to compare.
       * @returns {boolean} Returns `true` if `value` is greater than or equal to `other`, else `false`.
       * @example
       *
       * _.gte(3, 1);
       * // => true
       *
       * _.gte(3, 3);
       * // => true
       *
       * _.gte(1, 3);
       * // => false
       */
      function gte(value, other) {
        return value >= other;
      }
  
      /**
       * Checks if `value` is classified as an `arguments` object.
       *
       * @static
       * @memberOf _
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
       * @example
       *
       * _.isArguments(function() { return arguments; }());
       * // => true
       *
       * _.isArguments([1, 2, 3]);
       * // => false
       */
      function isArguments(value) {
        return isObjectLike(value) && isArrayLike(value) &&
          hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
      }
  
      /**
       * Checks if `value` is classified as an `Array` object.
       *
       * @static
       * @memberOf _
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
       * @example
       *
       * _.isArray([1, 2, 3]);
       * // => true
       *
       * _.isArray(function() { return arguments; }());
       * // => false
       */
      var isArray = nativeIsArray || function(value) {
        return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
      };
  
      /**
       * Checks if `value` is classified as a boolean primitive or object.
       *
       * @static
       * @memberOf _
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
       * @example
       *
       * _.isBoolean(false);
       * // => true
       *
       * _.isBoolean(null);
       * // => false
       */
      function isBoolean(value) {
        return value === true || value === false || (isObjectLike(value) && objToString.call(value) == boolTag);
      }
  
      /**
       * Checks if `value` is classified as a `Date` object.
       *
       * @static
       * @memberOf _
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
       * @example
       *
       * _.isDate(new Date);
       * // => true
       *
       * _.isDate('Mon April 23 2012');
       * // => false
       */
      function isDate(value) {
        return isObjectLike(value) && objToString.call(value) == dateTag;
      }
  
      /**
       * Checks if `value` is a DOM element.
       *
       * @static
       * @memberOf _
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
       * @example
       *
       * _.isElement(document.body);
       * // => true
       *
       * _.isElement('<body>');
       * // => false
       */
      function isElement(value) {
        return !!value && value.nodeType === 1 && isObjectLike(value) && !isPlainObject(value);
      }
  
      /**
       * Checks if `value` is empty. A value is considered empty unless it is an
       * `arguments` object, array, string, or jQuery-like collection with a length
       * greater than `0` or an object with own enumerable properties.
       *
       * @static
       * @memberOf _
       * @category Lang
       * @param {Array|Object|string} value The value to inspect.
       * @returns {boolean} Returns `true` if `value` is empty, else `false`.
       * @example
       *
       * _.isEmpty(null);
       * // => true
       *
       * _.isEmpty(true);
       * // => true
       *
       * _.isEmpty(1);
       * // => true
       *
       * _.isEmpty([1, 2, 3]);
       * // => false
       *
       * _.isEmpty({ 'a': 1 });
       * // => false
       */
      function isEmpty(value) {
        if (value == null) {
          return true;
        }
        if (isArrayLike(value) && (isArray(value) || isString(value) || isArguments(value) ||
            (isObjectLike(value) && isFunction(value.splice)))) {
          return !value.length;
        }
        return !keys(value).length;
      }
  
      /**
       * Performs a deep comparison between two values to determine if they are
       * equivalent. If `customizer` is provided it is invoked to compare values.
       * If `customizer` returns `undefined` comparisons are handled by the method
       * instead. The `customizer` is bound to `thisArg` and invoked with three
       * arguments: (value, other [, index|key]).
       *
       * **Note:** This method supports comparing arrays, booleans, `Date` objects,
       * numbers, `Object` objects, regexes, and strings. Objects are compared by
       * their own, not inherited, enumerable properties. Functions and DOM nodes
       * are **not** supported. Provide a customizer function to extend support
       * for comparing other values.
       *
       * @static
       * @memberOf _
       * @alias eq
       * @category Lang
       * @param {*} value The value to compare.
       * @param {*} other The other value to compare.
       * @param {Function} [customizer] The function to customize value comparisons.
       * @param {*} [thisArg] The `this` binding of `customizer`.
       * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
       * @example
       *
       * var object = { 'user': 'fred' };
       * var other = { 'user': 'fred' };
       *
       * object == other;
       * // => false
       *
       * _.isEqual(object, other);
       * // => true
       *
       * // using a customizer callback
       * var array = ['hello', 'goodbye'];
       * var other = ['hi', 'goodbye'];
       *
       * _.isEqual(array, other, function(value, other) {
       *   if (_.every([value, other], RegExp.prototype.test, /^h(?:i|ello)$/)) {
       *     return true;
       *   }
       * });
       * // => true
       */
      function isEqual(value, other, customizer, thisArg) {
        customizer = typeof customizer == 'function' ? bindCallback(customizer, thisArg, 3) : undefined;
        var result = customizer ? customizer(value, other) : undefined;
        return  result === undefined ? baseIsEqual(value, other, customizer) : !!result;
      }
  
      /**
       * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
       * `SyntaxError`, `TypeError`, or `URIError` object.
       *
       * @static
       * @memberOf _
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
       * @example
       *
       * _.isError(new Error);
       * // => true
       *
       * _.isError(Error);
       * // => false
       */
      function isError(value) {
        return isObjectLike(value) && typeof value.message == 'string' && objToString.call(value) == errorTag;
      }
  
      /**
       * Checks if `value` is a finite primitive number.
       *
       * **Note:** This method is based on [`Number.isFinite`](http://ecma-international.org/ecma-262/6.0/#sec-number.isfinite).
       *
       * @static
       * @memberOf _
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
       * @example
       *
       * _.isFinite(10);
       * // => true
       *
       * _.isFinite('10');
       * // => false
       *
       * _.isFinite(true);
       * // => false
       *
       * _.isFinite(Object(10));
       * // => false
       *
       * _.isFinite(Infinity);
       * // => false
       */
      function isFinite(value) {
        return typeof value == 'number' && nativeIsFinite(value);
      }
  
      /**
       * Checks if `value` is classified as a `Function` object.
       *
       * @static
       * @memberOf _
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
       * @example
       *
       * _.isFunction(_);
       * // => true
       *
       * _.isFunction(/abc/);
       * // => false
       */
      function isFunction(value) {
        // The use of `Object#toString` avoids issues with the `typeof` operator
        // in older versions of Chrome and Safari which return 'function' for regexes
        // and Safari 8 equivalents which return 'object' for typed array constructors.
        return isObject(value) && objToString.call(value) == funcTag;
      }
  
      /**
       * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
       * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
       *
       * @static
       * @memberOf _
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is an object, else `false`.
       * @example
       *
       * _.isObject({});
       * // => true
       *
       * _.isObject([1, 2, 3]);
       * // => true
       *
       * _.isObject(1);
       * // => false
       */
      function isObject(value) {
        // Avoid a V8 JIT bug in Chrome 19-20.
        // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
        var type = typeof value;
        return !!value && (type == 'object' || type == 'function');
      }
  
      /**
       * Performs a deep comparison between `object` and `source` to determine if
       * `object` contains equivalent property values. If `customizer` is provided
       * it is invoked to compare values. If `customizer` returns `undefined`
       * comparisons are handled by the method instead. The `customizer` is bound
       * to `thisArg` and invoked with three arguments: (value, other, index|key).
       *
       * **Note:** This method supports comparing properties of arrays, booleans,
       * `Date` objects, numbers, `Object` objects, regexes, and strings. Functions
       * and DOM nodes are **not** supported. Provide a customizer function to extend
       * support for comparing other values.
       *
       * @static
       * @memberOf _
       * @category Lang
       * @param {Object} object The object to inspect.
       * @param {Object} source The object of property values to match.
       * @param {Function} [customizer] The function to customize value comparisons.
       * @param {*} [thisArg] The `this` binding of `customizer`.
       * @returns {boolean} Returns `true` if `object` is a match, else `false`.
       * @example
       *
       * var object = { 'user': 'fred', 'age': 40 };
       *
       * _.isMatch(object, { 'age': 40 });
       * // => true
       *
       * _.isMatch(object, { 'age': 36 });
       * // => false
       *
       * // using a customizer callback
       * var object = { 'greeting': 'hello' };
       * var source = { 'greeting': 'hi' };
       *
       * _.isMatch(object, source, function(value, other) {
       *   return _.every([value, other], RegExp.prototype.test, /^h(?:i|ello)$/) || undefined;
       * });
       * // => true
       */
      function isMatch(object, source, customizer, thisArg) {
        customizer = typeof customizer == 'function' ? bindCallback(customizer, thisArg, 3) : undefined;
        return baseIsMatch(object, getMatchData(source), customizer);
      }
  
      /**
       * Checks if `value` is `NaN`.
       *
       * **Note:** This method is not the same as [`isNaN`](https://es5.github.io/#x15.1.2.4)
       * which returns `true` for `undefined` and other non-numeric values.
       *
       * @static
       * @memberOf _
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
       * @example
       *
       * _.isNaN(NaN);
       * // => true
       *
       * _.isNaN(new Number(NaN));
       * // => true
       *
       * isNaN(undefined);
       * // => true
       *
       * _.isNaN(undefined);
       * // => false
       */
      function isNaN(value) {
        // An `NaN` primitive is the only value that is not equal to itself.
        // Perform the `toStringTag` check first to avoid errors with some host objects in IE.
        return isNumber(value) && value != +value;
      }
  
      /**
       * Checks if `value` is a native function.
       *
       * @static
       * @memberOf _
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
       * @example
       *
       * _.isNative(Array.prototype.push);
       * // => true
       *
       * _.isNative(_);
       * // => false
       */
      function isNative(value) {
        if (value == null) {
          return false;
        }
        if (isFunction(value)) {
          return reIsNative.test(fnToString.call(value));
        }
        return isObjectLike(value) && reIsHostCtor.test(value);
      }
  
      /**
       * Checks if `value` is `null`.
       *
       * @static
       * @memberOf _
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
       * @example
       *
       * _.isNull(null);
       * // => true
       *
       * _.isNull(void 0);
       * // => false
       */
      function isNull(value) {
        return value === null;
      }
  
      /**
       * Checks if `value` is classified as a `Number` primitive or object.
       *
       * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are classified
       * as numbers, use the `_.isFinite` method.
       *
       * @static
       * @memberOf _
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
       * @example
       *
       * _.isNumber(8.4);
       * // => true
       *
       * _.isNumber(NaN);
       * // => true
       *
       * _.isNumber('8.4');
       * // => false
       */
      function isNumber(value) {
        return typeof value == 'number' || (isObjectLike(value) && objToString.call(value) == numberTag);
      }
  
      /**
       * Checks if `value` is a plain object, that is, an object created by the
       * `Object` constructor or one with a `[[Prototype]]` of `null`.
       *
       * **Note:** This method assumes objects created by the `Object` constructor
       * have no inherited enumerable properties.
       *
       * @static
       * @memberOf _
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
       * @example
       *
       * function Foo() {
       *   this.a = 1;
       * }
       *
       * _.isPlainObject(new Foo);
       * // => false
       *
       * _.isPlainObject([1, 2, 3]);
       * // => false
       *
       * _.isPlainObject({ 'x': 0, 'y': 0 });
       * // => true
       *
       * _.isPlainObject(Object.create(null));
       * // => true
       */
      function isPlainObject(value) {
        var Ctor;
  
        // Exit early for non `Object` objects.
        if (!(isObjectLike(value) && objToString.call(value) == objectTag && !isArguments(value)) ||
            (!hasOwnProperty.call(value, 'constructor') && (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor)))) {
          return false;
        }
        // IE < 9 iterates inherited properties before own properties. If the first
        // iterated property is an object's own property then there are no inherited
        // enumerable properties.
        var result;
        // In most environments an object's own properties are iterated before
        // its inherited properties. If the last iterated property is an object's
        // own property then there are no inherited enumerable properties.
        baseForIn(value, function(subValue, key) {
          result = key;
        });
        return result === undefined || hasOwnProperty.call(value, result);
      }
  
      /**
       * Checks if `value` is classified as a `RegExp` object.
       *
       * @static
       * @memberOf _
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
       * @example
       *
       * _.isRegExp(/abc/);
       * // => true
       *
       * _.isRegExp('/abc/');
       * // => false
       */
      function isRegExp(value) {
        return isObject(value) && objToString.call(value) == regexpTag;
      }
  
      /**
       * Checks if `value` is classified as a `String` primitive or object.
       *
       * @static
       * @memberOf _
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
       * @example
       *
       * _.isString('abc');
       * // => true
       *
       * _.isString(1);
       * // => false
       */
      function isString(value) {
        return typeof value == 'string' || (isObjectLike(value) && objToString.call(value) == stringTag);
      }
  
      /**
       * Checks if `value` is classified as a typed array.
       *
       * @static
       * @memberOf _
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
       * @example
       *
       * _.isTypedArray(new Uint8Array);
       * // => true
       *
       * _.isTypedArray([]);
       * // => false
       */
      function isTypedArray(value) {
        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
      }
  
      /**
       * Checks if `value` is `undefined`.
       *
       * @static
       * @memberOf _
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
       * @example
       *
       * _.isUndefined(void 0);
       * // => true
       *
       * _.isUndefined(null);
       * // => false
       */
      function isUndefined(value) {
        return value === undefined;
      }
  
      /**
       * Checks if `value` is less than `other`.
       *
       * @static
       * @memberOf _
       * @category Lang
       * @param {*} value The value to compare.
       * @param {*} other The other value to compare.
       * @returns {boolean} Returns `true` if `value` is less than `other`, else `false`.
       * @example
       *
       * _.lt(1, 3);
       * // => true
       *
       * _.lt(3, 3);
       * // => false
       *
       * _.lt(3, 1);
       * // => false
       */
      function lt(value, other) {
        return value < other;
      }
  
      /**
       * Checks if `value` is less than or equal to `other`.
       *
       * @static
       * @memberOf _
       * @category Lang
       * @param {*} value The value to compare.
       * @param {*} other The other value to compare.
       * @returns {boolean} Returns `true` if `value` is less than or equal to `other`, else `false`.
       * @example
       *
       * _.lte(1, 3);
       * // => true
       *
       * _.lte(3, 3);
       * // => true
       *
       * _.lte(3, 1);
       * // => false
       */
      function lte(value, other) {
        return value <= other;
      }
  
      /**
       * Converts `value` to an array.
       *
       * @static
       * @memberOf _
       * @category Lang
       * @param {*} value The value to convert.
       * @returns {Array} Returns the converted array.
       * @example
       *
       * (function() {
       *   return _.toArray(arguments).slice(1);
       * }(1, 2, 3));
       * // => [2, 3]
       */
      function toArray(value) {
        var length = value ? getLength(value) : 0;
        if (!isLength(length)) {
          return values(value);
        }
        if (!length) {
          return [];
        }
        return arrayCopy(value);
      }
  
      /**
       * Converts `value` to a plain object flattening inherited enumerable
       * properties of `value` to own properties of the plain object.
       *
       * @static
       * @memberOf _
       * @category Lang
       * @param {*} value The value to convert.
       * @returns {Object} Returns the converted plain object.
       * @example
       *
       * function Foo() {
       *   this.b = 2;
       * }
       *
       * Foo.prototype.c = 3;
       *
       * _.assign({ 'a': 1 }, new Foo);
       * // => { 'a': 1, 'b': 2 }
       *
       * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
       * // => { 'a': 1, 'b': 2, 'c': 3 }
       */
      function toPlainObject(value) {
        return baseCopy(value, keysIn(value));
      }
  
      /*------------------------------------------------------------------------*/
  
      /**
       * Recursively merges own enumerable properties of the source object(s), that
       * don't resolve to `undefined` into the destination object. Subsequent sources
       * overwrite property assignments of previous sources. If `customizer` is
       * provided it is invoked to produce the merged values of the destination and
       * source properties. If `customizer` returns `undefined` merging is handled
       * by the method instead. The `customizer` is bound to `thisArg` and invoked
       * with five arguments: (objectValue, sourceValue, key, object, source).
       *
       * @static
       * @memberOf _
       * @category Object
       * @param {Object} object The destination object.
       * @param {...Object} [sources] The source objects.
       * @param {Function} [customizer] The function to customize assigned values.
       * @param {*} [thisArg] The `this` binding of `customizer`.
       * @returns {Object} Returns `object`.
       * @example
       *
       * var users = {
       *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
       * };
       *
       * var ages = {
       *   'data': [{ 'age': 36 }, { 'age': 40 }]
       * };
       *
       * _.merge(users, ages);
       * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
       *
       * // using a customizer callback
       * var object = {
       *   'fruits': ['apple'],
       *   'vegetables': ['beet']
       * };
       *
       * var other = {
       *   'fruits': ['banana'],
       *   'vegetables': ['carrot']
       * };
       *
       * _.merge(object, other, function(a, b) {
       *   if (_.isArray(a)) {
       *     return a.concat(b);
       *   }
       * });
       * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }
       */
      var merge = createAssigner(baseMerge);
  
      /**
       * Assigns own enumerable properties of source object(s) to the destination
       * object. Subsequent sources overwrite property assignments of previous sources.
       * If `customizer` is provided it is invoked to produce the assigned values.
       * The `customizer` is bound to `thisArg` and invoked with five arguments:
       * (objectValue, sourceValue, key, object, source).
       *
       * **Note:** This method mutates `object` and is based on
       * [`Object.assign`](http://ecma-international.org/ecma-262/6.0/#sec-object.assign).
       *
       * @static
       * @memberOf _
       * @alias extend
       * @category Object
       * @param {Object} object The destination object.
       * @param {...Object} [sources] The source objects.
       * @param {Function} [customizer] The function to customize assigned values.
       * @param {*} [thisArg] The `this` binding of `customizer`.
       * @returns {Object} Returns `object`.
       * @example
       *
       * _.assign({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
       * // => { 'user': 'fred', 'age': 40 }
       *
       * // using a customizer callback
       * var defaults = _.partialRight(_.assign, function(value, other) {
       *   return _.isUndefined(value) ? other : value;
       * });
       *
       * defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
       * // => { 'user': 'barney', 'age': 36 }
       */
      var assign = createAssigner(function(object, source, customizer) {
        return customizer
          ? assignWith(object, source, customizer)
          : baseAssign(object, source);
      });
  
      /**
       * Creates an object that inherits from the given `prototype` object. If a
       * `properties` object is provided its own enumerable properties are assigned
       * to the created object.
       *
       * @static
       * @memberOf _
       * @category Object
       * @param {Object} prototype The object to inherit from.
       * @param {Object} [properties] The properties to assign to the object.
       * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
       * @returns {Object} Returns the new object.
       * @example
       *
       * function Shape() {
       *   this.x = 0;
       *   this.y = 0;
       * }
       *
       * function Circle() {
       *   Shape.call(this);
       * }
       *
       * Circle.prototype = _.create(Shape.prototype, {
       *   'constructor': Circle
       * });
       *
       * var circle = new Circle;
       * circle instanceof Circle;
       * // => true
       *
       * circle instanceof Shape;
       * // => true
       */
      function create(prototype, properties, guard) {
        var result = baseCreate(prototype);
        if (guard && isIterateeCall(prototype, properties, guard)) {
          properties = undefined;
        }
        return properties ? baseAssign(result, properties) : result;
      }
  
      /**
       * Assigns own enumerable properties of source object(s) to the destination
       * object for all destination properties that resolve to `undefined`. Once a
       * property is set, additional values of the same property are ignored.
       *
       * **Note:** This method mutates `object`.
       *
       * @static
       * @memberOf _
       * @category Object
       * @param {Object} object The destination object.
       * @param {...Object} [sources] The source objects.
       * @returns {Object} Returns `object`.
       * @example
       *
       * _.defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
       * // => { 'user': 'barney', 'age': 36 }
       */
      var defaults = createDefaults(assign, assignDefaults);
  
      /**
       * This method is like `_.defaults` except that it recursively assigns
       * default properties.
       *
       * **Note:** This method mutates `object`.
       *
       * @static
       * @memberOf _
       * @category Object
       * @param {Object} object The destination object.
       * @param {...Object} [sources] The source objects.
       * @returns {Object} Returns `object`.
       * @example
       *
       * _.defaultsDeep({ 'user': { 'name': 'barney' } }, { 'user': { 'name': 'fred', 'age': 36 } });
       * // => { 'user': { 'name': 'barney', 'age': 36 } }
       *
       */
      var defaultsDeep = createDefaults(merge, mergeDefaults);
  
      /**
       * This method is like `_.find` except that it returns the key of the first
       * element `predicate` returns truthy for instead of the element itself.
       *
       * If a property name is provided for `predicate` the created `_.property`
       * style callback returns the property value of the given element.
       *
       * If a value is also provided for `thisArg` the created `_.matchesProperty`
       * style callback returns `true` for elements that have a matching property
       * value, else `false`.
       *
       * If an object is provided for `predicate` the created `_.matches` style
       * callback returns `true` for elements that have the properties of the given
       * object, else `false`.
       *
       * @static
       * @memberOf _
       * @category Object
       * @param {Object} object The object to search.
       * @param {Function|Object|string} [predicate=_.identity] The function invoked
       *  per iteration.
       * @param {*} [thisArg] The `this` binding of `predicate`.
       * @returns {string|undefined} Returns the key of the matched element, else `undefined`.
       * @example
       *
       * var users = {
       *   'barney':  { 'age': 36, 'active': true },
       *   'fred':    { 'age': 40, 'active': false },
       *   'pebbles': { 'age': 1,  'active': true }
       * };
       *
       * _.findKey(users, function(chr) {
       *   return chr.age < 40;
       * });
       * // => 'barney' (iteration order is not guaranteed)
       *
       * // using the `_.matches` callback shorthand
       * _.findKey(users, { 'age': 1, 'active': true });
       * // => 'pebbles'
       *
       * // using the `_.matchesProperty` callback shorthand
       * _.findKey(users, 'active', false);
       * // => 'fred'
       *
       * // using the `_.property` callback shorthand
       * _.findKey(users, 'active');
       * // => 'barney'
       */
      var findKey = createFindKey(baseForOwn);
  
      /**
       * This method is like `_.findKey` except that it iterates over elements of
       * a collection in the opposite order.
       *
       * If a property name is provided for `predicate` the created `_.property`
       * style callback returns the property value of the given element.
       *
       * If a value is also provided for `thisArg` the created `_.matchesProperty`
       * style callback returns `true` for elements that have a matching property
       * value, else `false`.
       *
       * If an object is provided for `predicate` the created `_.matches` style
       * callback returns `true` for elements that have the properties of the given
       * object, else `false`.
       *
       * @static
       * @memberOf _
       * @category Object
       * @param {Object} object The object to search.
       * @param {Function|Object|string} [predicate=_.identity] The function invoked
       *  per iteration.
       * @param {*} [thisArg] The `this` binding of `predicate`.
       * @returns {string|undefined} Returns the key of the matched element, else `undefined`.
       * @example
       *
       * var users = {
       *   'barney':  { 'age': 36, 'active': true },
       *   'fred':    { 'age': 40, 'active': false },
       *   'pebbles': { 'age': 1,  'active': true }
       * };
       *
       * _.findLastKey(users, function(chr) {
       *   return chr.age < 40;
       * });
       * // => returns `pebbles` assuming `_.findKey` returns `barney`
       *
       * // using the `_.matches` callback shorthand
       * _.findLastKey(users, { 'age': 36, 'active': true });
       * // => 'barney'
       *
       * // using the `_.matchesProperty` callback shorthand
       * _.findLastKey(users, 'active', false);
       * // => 'fred'
       *
       * // using the `_.property` callback shorthand
       * _.findLastKey(users, 'active');
       * // => 'pebbles'
       */
      var findLastKey = createFindKey(baseForOwnRight);
  
      /**
       * Iterates over own and inherited enumerable properties of an object invoking
       * `iteratee` for each property. The `iteratee` is bound to `thisArg` and invoked
       * with three arguments: (value, key, object). Iteratee functions may exit
       * iteration early by explicitly returning `false`.
       *
       * @static
       * @memberOf _
       * @category Object
       * @param {Object} object The object to iterate over.
       * @param {Function} [iteratee=_.identity] The function invoked per iteration.
       * @param {*} [thisArg] The `this` binding of `iteratee`.
       * @returns {Object} Returns `object`.
       * @example
       *
       * function Foo() {
       *   this.a = 1;
       *   this.b = 2;
       * }
       *
       * Foo.prototype.c = 3;
       *
       * _.forIn(new Foo, function(value, key) {
       *   console.log(key);
       * });
       * // => logs 'a', 'b', and 'c' (iteration order is not guaranteed)
       */
      var forIn = createForIn(baseFor);
  
      /**
       * This method is like `_.forIn` except that it iterates over properties of
       * `object` in the opposite order.
       *
       * @static
       * @memberOf _
       * @category Object
       * @param {Object} object The object to iterate over.
       * @param {Function} [iteratee=_.identity] The function invoked per iteration.
       * @param {*} [thisArg] The `this` binding of `iteratee`.
       * @returns {Object} Returns `object`.
       * @example
       *
       * function Foo() {
       *   this.a = 1;
       *   this.b = 2;
       * }
       *
       * Foo.prototype.c = 3;
       *
       * _.forInRight(new Foo, function(value, key) {
       *   console.log(key);
       * });
       * // => logs 'c', 'b', and 'a' assuming `_.forIn ` logs 'a', 'b', and 'c'
       */
      var forInRight = createForIn(baseForRight);
  
      /**
       * Iterates over own enumerable properties of an object invoking `iteratee`
       * for each property. The `iteratee` is bound to `thisArg` and invoked with
       * three arguments: (value, key, object). Iteratee functions may exit iteration
       * early by explicitly returning `false`.
       *
       * @static
       * @memberOf _
       * @category Object
       * @param {Object} object The object to iterate over.
       * @param {Function} [iteratee=_.identity] The function invoked per iteration.
       * @param {*} [thisArg] The `this` binding of `iteratee`.
       * @returns {Object} Returns `object`.
       * @example
       *
       * function Foo() {
       *   this.a = 1;
       *   this.b = 2;
       * }
       *
       * Foo.prototype.c = 3;
       *
       * _.forOwn(new Foo, function(value, key) {
       *   console.log(key);
       * });
       * // => logs 'a' and 'b' (iteration order is not guaranteed)
       */
      var forOwn = createForOwn(baseForOwn);
  
      /**
       * This method is like `_.forOwn` except that it iterates over properties of
       * `object` in the opposite order.
       *
       * @static
       * @memberOf _
       * @category Object
       * @param {Object} object The object to iterate over.
       * @param {Function} [iteratee=_.identity] The function invoked per iteration.
       * @param {*} [thisArg] The `this` binding of `iteratee`.
       * @returns {Object} Returns `object`.
       * @example
       *
       * function Foo() {
       *   this.a = 1;
       *   this.b = 2;
       * }
       *
       * Foo.prototype.c = 3;
       *
       * _.forOwnRight(new Foo, function(value, key) {
       *   console.log(key);
       * });
       * // => logs 'b' and 'a' assuming `_.forOwn` logs 'a' and 'b'
       */
      var forOwnRight = createForOwn(baseForOwnRight);
  
      /**
       * Creates an array of function property names from all enumerable properties,
       * own and inherited, of `object`.
       *
       * @static
       * @memberOf _
       * @alias methods
       * @category Object
       * @param {Object} object The object to inspect.
       * @returns {Array} Returns the new array of property names.
       * @example
       *
       * _.functions(_);
       * // => ['after', 'ary', 'assign', ...]
       */
      function functions(object) {
        return baseFunctions(object, keysIn(object));
      }
  
      /**
       * Gets the property value at `path` of `object`. If the resolved value is
       * `undefined` the `defaultValue` is used in its place.
       *
       * @static
       * @memberOf _
       * @category Object
       * @param {Object} object The object to query.
       * @param {Array|string} path The path of the property to get.
       * @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
       * @returns {*} Returns the resolved value.
       * @example
       *
       * var object = { 'a': [{ 'b': { 'c': 3 } }] };
       *
       * _.get(object, 'a[0].b.c');
       * // => 3
       *
       * _.get(object, ['a', '0', 'b', 'c']);
       * // => 3
       *
       * _.get(object, 'a.b.c', 'default');
       * // => 'default'
       */
      function get(object, path, defaultValue) {
        var result = object == null ? undefined : baseGet(object, toPath(path), path + '');
        return result === undefined ? defaultValue : result;
      }
  
      /**
       * Checks if `path` is a direct property.
       *
       * @static
       * @memberOf _
       * @category Object
       * @param {Object} object The object to query.
       * @param {Array|string} path The path to check.
       * @returns {boolean} Returns `true` if `path` is a direct property, else `false`.
       * @example
       *
       * var object = { 'a': { 'b': { 'c': 3 } } };
       *
       * _.has(object, 'a');
       * // => true
       *
       * _.has(object, 'a.b.c');
       * // => true
       *
       * _.has(object, ['a', 'b', 'c']);
       * // => true
       */
      function has(object, path) {
        if (object == null) {
          return false;
        }
        var result = hasOwnProperty.call(object, path);
        if (!result && !isKey(path)) {
          path = toPath(path);
          object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
          if (object == null) {
            return false;
          }
          path = last(path);
          result = hasOwnProperty.call(object, path);
        }
        return result || (isLength(object.length) && isIndex(path, object.length) &&
          (isArray(object) || isArguments(object)));
      }
  
      /**
       * Creates an object composed of the inverted keys and values of `object`.
       * If `object` contains duplicate values, subsequent values overwrite property
       * assignments of previous values unless `multiValue` is `true`.
       *
       * @static
       * @memberOf _
       * @category Object
       * @param {Object} object The object to invert.
       * @param {boolean} [multiValue] Allow multiple values per key.
       * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
       * @returns {Object} Returns the new inverted object.
       * @example
       *
       * var object = { 'a': 1, 'b': 2, 'c': 1 };
       *
       * _.invert(object);
       * // => { '1': 'c', '2': 'b' }
       *
       * // with `multiValue`
       * _.invert(object, true);
       * // => { '1': ['a', 'c'], '2': ['b'] }
       */
      function invert(object, multiValue, guard) {
        if (guard && isIterateeCall(object, multiValue, guard)) {
          multiValue = undefined;
        }
        var index = -1,
            props = keys(object),
            length = props.length,
            result = {};
  
        while (++index < length) {
          var key = props[index],
              value = object[key];
  
          if (multiValue) {
            if (hasOwnProperty.call(result, value)) {
              result[value].push(key);
            } else {
              result[value] = [key];
            }
          }
          else {
            result[value] = key;
          }
        }
        return result;
      }
  
      /**
       * Creates an array of the own enumerable property names of `object`.
       *
       * **Note:** Non-object values are coerced to objects. See the
       * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
       * for more details.
       *
       * @static
       * @memberOf _
       * @category Object
       * @param {Object} object The object to query.
       * @returns {Array} Returns the array of property names.
       * @example
       *
       * function Foo() {
       *   this.a = 1;
       *   this.b = 2;
       * }
       *
       * Foo.prototype.c = 3;
       *
       * _.keys(new Foo);
       * // => ['a', 'b'] (iteration order is not guaranteed)
       *
       * _.keys('hi');
       * // => ['0', '1']
       */
      var keys = !nativeKeys ? shimKeys : function(object) {
        var Ctor = object == null ? undefined : object.constructor;
        if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
            (typeof object != 'function' && isArrayLike(object))) {
          return shimKeys(object);
        }
        return isObject(object) ? nativeKeys(object) : [];
      };
  
      /**
       * Creates an array of the own and inherited enumerable property names of `object`.
       *
       * **Note:** Non-object values are coerced to objects.
       *
       * @static
       * @memberOf _
       * @category Object
       * @param {Object} object The object to query.
       * @returns {Array} Returns the array of property names.
       * @example
       *
       * function Foo() {
       *   this.a = 1;
       *   this.b = 2;
       * }
       *
       * Foo.prototype.c = 3;
       *
       * _.keysIn(new Foo);
       * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
       */
      function keysIn(object) {
        if (object == null) {
          return [];
        }
        if (!isObject(object)) {
          object = Object(object);
        }
        var length = object.length;
        length = (length && isLength(length) &&
          (isArray(object) || isArguments(object)) && length) || 0;
  
        var Ctor = object.constructor,
            index = -1,
            isProto = typeof Ctor == 'function' && Ctor.prototype === object,
            result = Array(length),
            skipIndexes = length > 0;
  
        while (++index < length) {
          result[index] = (index + '');
        }
        for (var key in object) {
          if (!(skipIndexes && isIndex(key, length)) &&
              !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
            result.push(key);
          }
        }
        return result;
      }
  
      /**
       * The opposite of `_.mapValues`; this method creates an object with the
       * same values as `object` and keys generated by running each own enumerable
       * property of `object` through `iteratee`.
       *
       * @static
       * @memberOf _
       * @category Object
       * @param {Object} object The object to iterate over.
       * @param {Function|Object|string} [iteratee=_.identity] The function invoked
       *  per iteration.
       * @param {*} [thisArg] The `this` binding of `iteratee`.
       * @returns {Object} Returns the new mapped object.
       * @example
       *
       * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
       *   return key + value;
       * });
       * // => { 'a1': 1, 'b2': 2 }
       */
      var mapKeys = createObjectMapper(true);
  
      /**
       * Creates an object with the same keys as `object` and values generated by
       * running each own enumerable property of `object` through `iteratee`. The
       * iteratee function is bound to `thisArg` and invoked with three arguments:
       * (value, key, object).
       *
       * If a property name is provided for `iteratee` the created `_.property`
       * style callback returns the property value of the given element.
       *
       * If a value is also provided for `thisArg` the created `_.matchesProperty`
       * style callback returns `true` for elements that have a matching property
       * value, else `false`.
       *
       * If an object is provided for `iteratee` the created `_.matches` style
       * callback returns `true` for elements that have the properties of the given
       * object, else `false`.
       *
       * @static
       * @memberOf _
       * @category Object
       * @param {Object} object The object to iterate over.
       * @param {Function|Object|string} [iteratee=_.identity] The function invoked
       *  per iteration.
       * @param {*} [thisArg] The `this` binding of `iteratee`.
       * @returns {Object} Returns the new mapped object.
       * @example
       *
       * _.mapValues({ 'a': 1, 'b': 2 }, function(n) {
       *   return n * 3;
       * });
       * // => { 'a': 3, 'b': 6 }
       *
       * var users = {
       *   'fred':    { 'user': 'fred',    'age': 40 },
       *   'pebbles': { 'user': 'pebbles', 'age': 1 }
       * };
       *
       * // using the `_.property` callback shorthand
       * _.mapValues(users, 'age');
       * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
       */
      var mapValues = createObjectMapper();
  
      /**
       * The opposite of `_.pick`; this method creates an object composed of the
       * own and inherited enumerable properties of `object` that are not omitted.
       *
       * @static
       * @memberOf _
       * @category Object
       * @param {Object} object The source object.
       * @param {Function|...(string|string[])} [predicate] The function invoked per
       *  iteration or property names to omit, specified as individual property
       *  names or arrays of property names.
       * @param {*} [thisArg] The `this` binding of `predicate`.
       * @returns {Object} Returns the new object.
       * @example
       *
       * var object = { 'user': 'fred', 'age': 40 };
       *
       * _.omit(object, 'age');
       * // => { 'user': 'fred' }
       *
       * _.omit(object, _.isNumber);
       * // => { 'user': 'fred' }
       */
      var omit = restParam(function(object, props) {
        if (object == null) {
          return {};
        }
        if (typeof props[0] != 'function') {
          var props = arrayMap(baseFlatten(props), String);
          return pickByArray(object, baseDifference(keysIn(object), props));
        }
        var predicate = bindCallback(props[0], props[1], 3);
        return pickByCallback(object, function(value, key, object) {
          return !predicate(value, key, object);
        });
      });
  
      /**
       * Creates a two dimensional array of the key-value pairs for `object`,
       * e.g. `[[key1, value1], [key2, value2]]`.
       *
       * @static
       * @memberOf _
       * @category Object
       * @param {Object} object The object to query.
       * @returns {Array} Returns the new array of key-value pairs.
       * @example
       *
       * _.pairs({ 'barney': 36, 'fred': 40 });
       * // => [['barney', 36], ['fred', 40]] (iteration order is not guaranteed)
       */
      function pairs(object) {
        object = toObject(object);
  
        var index = -1,
            props = keys(object),
            length = props.length,
            result = Array(length);
  
        while (++index < length) {
          var key = props[index];
          result[index] = [key, object[key]];
        }
        return result;
      }
  
      /**
       * Creates an object composed of the picked `object` properties. Property
       * names may be specified as individual arguments or as arrays of property
       * names. If `predicate` is provided it is invoked for each property of `object`
       * picking the properties `predicate` returns truthy for. The predicate is
       * bound to `thisArg` and invoked with three arguments: (value, key, object).
       *
       * @static
       * @memberOf _
       * @category Object
       * @param {Object} object The source object.
       * @param {Function|...(string|string[])} [predicate] The function invoked per
       *  iteration or property names to pick, specified as individual property
       *  names or arrays of property names.
       * @param {*} [thisArg] The `this` binding of `predicate`.
       * @returns {Object} Returns the new object.
       * @example
       *
       * var object = { 'user': 'fred', 'age': 40 };
       *
       * _.pick(object, 'user');
       * // => { 'user': 'fred' }
       *
       * _.pick(object, _.isString);
       * // => { 'user': 'fred' }
       */
      var pick = restParam(function(object, props) {
        if (object == null) {
          return {};
        }
        return typeof props[0] == 'function'
          ? pickByCallback(object, bindCallback(props[0], props[1], 3))
          : pickByArray(object, baseFlatten(props));
      });
  
      /**
       * This method is like `_.get` except that if the resolved value is a function
       * it is invoked with the `this` binding of its parent object and its result
       * is returned.
       *
       * @static
       * @memberOf _
       * @category Object
       * @param {Object} object The object to query.
       * @param {Array|string} path The path of the property to resolve.
       * @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
       * @returns {*} Returns the resolved value.
       * @example
       *
       * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
       *
       * _.result(object, 'a[0].b.c1');
       * // => 3
       *
       * _.result(object, 'a[0].b.c2');
       * // => 4
       *
       * _.result(object, 'a.b.c', 'default');
       * // => 'default'
       *
       * _.result(object, 'a.b.c', _.constant('default'));
       * // => 'default'
       */
      function result(object, path, defaultValue) {
        var result = object == null ? undefined : object[path];
        if (result === undefined) {
          if (object != null && !isKey(path, object)) {
            path = toPath(path);
            object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
            result = object == null ? undefined : object[last(path)];
          }
          result = result === undefined ? defaultValue : result;
        }
        return isFunction(result) ? result.call(object) : result;
      }
  
      /**
       * Sets the property value of `path` on `object`. If a portion of `path`
       * does not exist it is created.
       *
       * @static
       * @memberOf _
       * @category Object
       * @param {Object} object The object to augment.
       * @param {Array|string} path The path of the property to set.
       * @param {*} value The value to set.
       * @returns {Object} Returns `object`.
       * @example
       *
       * var object = { 'a': [{ 'b': { 'c': 3 } }] };
       *
       * _.set(object, 'a[0].b.c', 4);
       * console.log(object.a[0].b.c);
       * // => 4
       *
       * _.set(object, 'x[0].y.z', 5);
       * console.log(object.x[0].y.z);
       * // => 5
       */
      function set(object, path, value) {
        if (object == null) {
          return object;
        }
        var pathKey = (path + '');
        path = (object[pathKey] != null || isKey(path, object)) ? [pathKey] : toPath(path);
  
        var index = -1,
            length = path.length,
            lastIndex = length - 1,
            nested = object;
  
        while (nested != null && ++index < length) {
          var key = path[index];
          if (isObject(nested)) {
            if (index == lastIndex) {
              nested[key] = value;
            } else if (nested[key] == null) {
              nested[key] = isIndex(path[index + 1]) ? [] : {};
            }
          }
          nested = nested[key];
        }
        return object;
      }
  
      /**
       * An alternative to `_.reduce`; this method transforms `object` to a new
       * `accumulator` object which is the result of running each of its own enumerable
       * properties through `iteratee`, with each invocation potentially mutating
       * the `accumulator` object. The `iteratee` is bound to `thisArg` and invoked
       * with four arguments: (accumulator, value, key, object). Iteratee functions
       * may exit iteration early by explicitly returning `false`.
       *
       * @static
       * @memberOf _
       * @category Object
       * @param {Array|Object} object The object to iterate over.
       * @param {Function} [iteratee=_.identity] The function invoked per iteration.
       * @param {*} [accumulator] The custom accumulator value.
       * @param {*} [thisArg] The `this` binding of `iteratee`.
       * @returns {*} Returns the accumulated value.
       * @example
       *
       * _.transform([2, 3, 4], function(result, n) {
       *   result.push(n *= n);
       *   return n % 2 == 0;
       * });
       * // => [4, 9]
       *
       * _.transform({ 'a': 1, 'b': 2 }, function(result, n, key) {
       *   result[key] = n * 3;
       * });
       * // => { 'a': 3, 'b': 6 }
       */
      function transform(object, iteratee, accumulator, thisArg) {
        var isArr = isArray(object) || isTypedArray(object);
        iteratee = getCallback(iteratee, thisArg, 4);
  
        if (accumulator == null) {
          if (isArr || isObject(object)) {
            var Ctor = object.constructor;
            if (isArr) {
              accumulator = isArray(object) ? new Ctor : [];
            } else {
              accumulator = baseCreate(isFunction(Ctor) ? Ctor.prototype : undefined);
            }
          } else {
            accumulator = {};
          }
        }
        (isArr ? arrayEach : baseForOwn)(object, function(value, index, object) {
          return iteratee(accumulator, value, index, object);
        });
        return accumulator;
      }
  
      /**
       * Creates an array of the own enumerable property values of `object`.
       *
       * **Note:** Non-object values are coerced to objects.
       *
       * @static
       * @memberOf _
       * @category Object
       * @param {Object} object The object to query.
       * @returns {Array} Returns the array of property values.
       * @example
       *
       * function Foo() {
       *   this.a = 1;
       *   this.b = 2;
       * }
       *
       * Foo.prototype.c = 3;
       *
       * _.values(new Foo);
       * // => [1, 2] (iteration order is not guaranteed)
       *
       * _.values('hi');
       * // => ['h', 'i']
       */
      function values(object) {
        return baseValues(object, keys(object));
      }
  
      /**
       * Creates an array of the own and inherited enumerable property values
       * of `object`.
       *
       * **Note:** Non-object values are coerced to objects.
       *
       * @static
       * @memberOf _
       * @category Object
       * @param {Object} object The object to query.
       * @returns {Array} Returns the array of property values.
       * @example
       *
       * function Foo() {
       *   this.a = 1;
       *   this.b = 2;
       * }
       *
       * Foo.prototype.c = 3;
       *
       * _.valuesIn(new Foo);
       * // => [1, 2, 3] (iteration order is not guaranteed)
       */
      function valuesIn(object) {
        return baseValues(object, keysIn(object));
      }
  
      /*------------------------------------------------------------------------*/
  
      /**
       * Checks if `n` is between `start` and up to but not including, `end`. If
       * `end` is not specified it is set to `start` with `start` then set to `0`.
       *
       * @static
       * @memberOf _
       * @category Number
       * @param {number} n The number to check.
       * @param {number} [start=0] The start of the range.
       * @param {number} end The end of the range.
       * @returns {boolean} Returns `true` if `n` is in the range, else `false`.
       * @example
       *
       * _.inRange(3, 2, 4);
       * // => true
       *
       * _.inRange(4, 8);
       * // => true
       *
       * _.inRange(4, 2);
       * // => false
       *
       * _.inRange(2, 2);
       * // => false
       *
       * _.inRange(1.2, 2);
       * // => true
       *
       * _.inRange(5.2, 4);
       * // => false
       */
      function inRange(value, start, end) {
        start = +start || 0;
        if (end === undefined) {
          end = start;
          start = 0;
        } else {
          end = +end || 0;
        }
        return value >= nativeMin(start, end) && value < nativeMax(start, end);
      }
  
      /**
       * Produces a random number between `min` and `max` (inclusive). If only one
       * argument is provided a number between `0` and the given number is returned.
       * If `floating` is `true`, or either `min` or `max` are floats, a floating-point
       * number is returned instead of an integer.
       *
       * @static
       * @memberOf _
       * @category Number
       * @param {number} [min=0] The minimum possible value.
       * @param {number} [max=1] The maximum possible value.
       * @param {boolean} [floating] Specify returning a floating-point number.
       * @returns {number} Returns the random number.
       * @example
       *
       * _.random(0, 5);
       * // => an integer between 0 and 5
       *
       * _.random(5);
       * // => also an integer between 0 and 5
       *
       * _.random(5, true);
       * // => a floating-point number between 0 and 5
       *
       * _.random(1.2, 5.2);
       * // => a floating-point number between 1.2 and 5.2
       */
      function random(min, max, floating) {
        if (floating && isIterateeCall(min, max, floating)) {
          max = floating = undefined;
        }
        var noMin = min == null,
            noMax = max == null;
  
        if (floating == null) {
          if (noMax && typeof min == 'boolean') {
            floating = min;
            min = 1;
          }
          else if (typeof max == 'boolean') {
            floating = max;
            noMax = true;
          }
        }
        if (noMin && noMax) {
          max = 1;
          noMax = false;
        }
        min = +min || 0;
        if (noMax) {
          max = min;
          min = 0;
        } else {
          max = +max || 0;
        }
        if (floating || min % 1 || max % 1) {
          var rand = nativeRandom();
          return nativeMin(min + (rand * (max - min + parseFloat('1e-' + ((rand + '').length - 1)))), max);
        }
        return baseRandom(min, max);
      }
  
      /*------------------------------------------------------------------------*/
  
      /**
       * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
       *
       * @static
       * @memberOf _
       * @category String
       * @param {string} [string=''] The string to convert.
       * @returns {string} Returns the camel cased string.
       * @example
       *
       * _.camelCase('Foo Bar');
       * // => 'fooBar'
       *
       * _.camelCase('--foo-bar');
       * // => 'fooBar'
       *
       * _.camelCase('__foo_bar__');
       * // => 'fooBar'
       */
      var camelCase = createCompounder(function(result, word, index) {
        word = word.toLowerCase();
        return result + (index ? (word.charAt(0).toUpperCase() + word.slice(1)) : word);
      });
  
      /**
       * Capitalizes the first character of `string`.
       *
       * @static
       * @memberOf _
       * @category String
       * @param {string} [string=''] The string to capitalize.
       * @returns {string} Returns the capitalized string.
       * @example
       *
       * _.capitalize('fred');
       * // => 'Fred'
       */
      function capitalize(string) {
        string = baseToString(string);
        return string && (string.charAt(0).toUpperCase() + string.slice(1));
      }
  
      /**
       * Deburrs `string` by converting [latin-1 supplementary letters](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
       * to basic latin letters and removing [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
       *
       * @static
       * @memberOf _
       * @category String
       * @param {string} [string=''] The string to deburr.
       * @returns {string} Returns the deburred string.
       * @example
       *
       * _.deburr('déjà vu');
       * // => 'deja vu'
       */
      function deburr(string) {
        string = baseToString(string);
        return string && string.replace(reLatin1, deburrLetter).replace(reComboMark, '');
      }
  
      /**
       * Checks if `string` ends with the given target string.
       *
       * @static
       * @memberOf _
       * @category String
       * @param {string} [string=''] The string to search.
       * @param {string} [target] The string to search for.
       * @param {number} [position=string.length] The position to search from.
       * @returns {boolean} Returns `true` if `string` ends with `target`, else `false`.
       * @example
       *
       * _.endsWith('abc', 'c');
       * // => true
       *
       * _.endsWith('abc', 'b');
       * // => false
       *
       * _.endsWith('abc', 'b', 2);
       * // => true
       */
      function endsWith(string, target, position) {
        string = baseToString(string);
        target = (target + '');
  
        var length = string.length;
        position = position === undefined
          ? length
          : nativeMin(position < 0 ? 0 : (+position || 0), length);
  
        position -= target.length;
        return position >= 0 && string.indexOf(target, position) == position;
      }
  
      /**
       * Converts the characters "&", "<", ">", '"', "'", and "\`", in `string` to
       * their corresponding HTML entities.
       *
       * **Note:** No other characters are escaped. To escape additional characters
       * use a third-party library like [_he_](https://mths.be/he).
       *
       * Though the ">" character is escaped for symmetry, characters like
       * ">" and "/" don't need escaping in HTML and have no special meaning
       * unless they're part of a tag or unquoted attribute value.
       * See [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
       * (under "semi-related fun fact") for more details.
       *
       * Backticks are escaped because in Internet Explorer < 9, they can break out
       * of attribute values or HTML comments. See [#59](https://html5sec.org/#59),
       * [#102](https://html5sec.org/#102), [#108](https://html5sec.org/#108), and
       * [#133](https://html5sec.org/#133) of the [HTML5 Security Cheatsheet](https://html5sec.org/)
       * for more details.
       *
       * When working with HTML you should always [quote attribute values](http://wonko.com/post/html-escaping)
       * to reduce XSS vectors.
       *
       * @static
       * @memberOf _
       * @category String
       * @param {string} [string=''] The string to escape.
       * @returns {string} Returns the escaped string.
       * @example
       *
       * _.escape('fred, barney, & pebbles');
       * // => 'fred, barney, &amp; pebbles'
       */
      function escape(string) {
        // Reset `lastIndex` because in IE < 9 `String#replace` does not.
        string = baseToString(string);
        return (string && reHasUnescapedHtml.test(string))
          ? string.replace(reUnescapedHtml, escapeHtmlChar)
          : string;
      }
  
      /**
       * Escapes the `RegExp` special characters "\", "/", "^", "$", ".", "|", "?",
       * "*", "+", "(", ")", "[", "]", "{" and "}" in `string`.
       *
       * @static
       * @memberOf _
       * @category String
       * @param {string} [string=''] The string to escape.
       * @returns {string} Returns the escaped string.
       * @example
       *
       * _.escapeRegExp('[lodash](https://lodash.com/)');
       * // => '\[lodash\]\(https:\/\/lodash\.com\/\)'
       */
      function escapeRegExp(string) {
        string = baseToString(string);
        return (string && reHasRegExpChars.test(string))
          ? string.replace(reRegExpChars, escapeRegExpChar)
          : (string || '(?:)');
      }
  
      /**
       * Converts `string` to [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
       *
       * @static
       * @memberOf _
       * @category String
       * @param {string} [string=''] The string to convert.
       * @returns {string} Returns the kebab cased string.
       * @example
       *
       * _.kebabCase('Foo Bar');
       * // => 'foo-bar'
       *
       * _.kebabCase('fooBar');
       * // => 'foo-bar'
       *
       * _.kebabCase('__foo_bar__');
       * // => 'foo-bar'
       */
      var kebabCase = createCompounder(function(result, word, index) {
        return result + (index ? '-' : '') + word.toLowerCase();
      });
  
      /**
       * Pads `string` on the left and right sides if it's shorter than `length`.
       * Padding characters are truncated if they can't be evenly divided by `length`.
       *
       * @static
       * @memberOf _
       * @category String
       * @param {string} [string=''] The string to pad.
       * @param {number} [length=0] The padding length.
       * @param {string} [chars=' '] The string used as padding.
       * @returns {string} Returns the padded string.
       * @example
       *
       * _.pad('abc', 8);
       * // => '  abc   '
       *
       * _.pad('abc', 8, '_-');
       * // => '_-abc_-_'
       *
       * _.pad('abc', 3);
       * // => 'abc'
       */
      function pad(string, length, chars) {
        string = baseToString(string);
        length = +length;
  
        var strLength = string.length;
        if (strLength >= length || !nativeIsFinite(length)) {
          return string;
        }
        var mid = (length - strLength) / 2,
            leftLength = nativeFloor(mid),
            rightLength = nativeCeil(mid);
  
        chars = createPadding('', rightLength, chars);
        return chars.slice(0, leftLength) + string + chars;
      }
  
      /**
       * Pads `string` on the left side if it's shorter than `length`. Padding
       * characters are truncated if they exceed `length`.
       *
       * @static
       * @memberOf _
       * @category String
       * @param {string} [string=''] The string to pad.
       * @param {number} [length=0] The padding length.
       * @param {string} [chars=' '] The string used as padding.
       * @returns {string} Returns the padded string.
       * @example
       *
       * _.padLeft('abc', 6);
       * // => '   abc'
       *
       * _.padLeft('abc', 6, '_-');
       * // => '_-_abc'
       *
       * _.padLeft('abc', 3);
       * // => 'abc'
       */
      var padLeft = createPadDir();
  
      /**
       * Pads `string` on the right side if it's shorter than `length`. Padding
       * characters are truncated if they exceed `length`.
       *
       * @static
       * @memberOf _
       * @category String
       * @param {string} [string=''] The string to pad.
       * @param {number} [length=0] The padding length.
       * @param {string} [chars=' '] The string used as padding.
       * @returns {string} Returns the padded string.
       * @example
       *
       * _.padRight('abc', 6);
       * // => 'abc   '
       *
       * _.padRight('abc', 6, '_-');
       * // => 'abc_-_'
       *
       * _.padRight('abc', 3);
       * // => 'abc'
       */
      var padRight = createPadDir(true);
  
      /**
       * Converts `string` to an integer of the specified radix. If `radix` is
       * `undefined` or `0`, a `radix` of `10` is used unless `value` is a hexadecimal,
       * in which case a `radix` of `16` is used.
       *
       * **Note:** This method aligns with the [ES5 implementation](https://es5.github.io/#E)
       * of `parseInt`.
       *
       * @static
       * @memberOf _
       * @category String
       * @param {string} string The string to convert.
       * @param {number} [radix] The radix to interpret `value` by.
       * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
       * @returns {number} Returns the converted integer.
       * @example
       *
       * _.parseInt('08');
       * // => 8
       *
       * _.map(['6', '08', '10'], _.parseInt);
       * // => [6, 8, 10]
       */
      function parseInt(string, radix, guard) {
        // Firefox < 21 and Opera < 15 follow ES3 for `parseInt`.
        // Chrome fails to trim leading <BOM> whitespace characters.
        // See https://code.google.com/p/v8/issues/detail?id=3109 for more details.
        if (guard ? isIterateeCall(string, radix, guard) : radix == null) {
          radix = 0;
        } else if (radix) {
          radix = +radix;
        }
        string = trim(string);
        return nativeParseInt(string, radix || (reHasHexPrefix.test(string) ? 16 : 10));
      }
  
      /**
       * Repeats the given string `n` times.
       *
       * @static
       * @memberOf _
       * @category String
       * @param {string} [string=''] The string to repeat.
       * @param {number} [n=0] The number of times to repeat the string.
       * @returns {string} Returns the repeated string.
       * @example
       *
       * _.repeat('*', 3);
       * // => '***'
       *
       * _.repeat('abc', 2);
       * // => 'abcabc'
       *
       * _.repeat('abc', 0);
       * // => ''
       */
      function repeat(string, n) {
        var result = '';
        string = baseToString(string);
        n = +n;
        if (n < 1 || !string || !nativeIsFinite(n)) {
          return result;
        }
        // Leverage the exponentiation by squaring algorithm for a faster repeat.
        // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
        do {
          if (n % 2) {
            result += string;
          }
          n = nativeFloor(n / 2);
          string += string;
        } while (n);
  
        return result;
      }
  
      /**
       * Converts `string` to [snake case](https://en.wikipedia.org/wiki/Snake_case).
       *
       * @static
       * @memberOf _
       * @category String
       * @param {string} [string=''] The string to convert.
       * @returns {string} Returns the snake cased string.
       * @example
       *
       * _.snakeCase('Foo Bar');
       * // => 'foo_bar'
       *
       * _.snakeCase('fooBar');
       * // => 'foo_bar'
       *
       * _.snakeCase('--foo-bar');
       * // => 'foo_bar'
       */
      var snakeCase = createCompounder(function(result, word, index) {
        return result + (index ? '_' : '') + word.toLowerCase();
      });
  
      /**
       * Converts `string` to [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
       *
       * @static
       * @memberOf _
       * @category String
       * @param {string} [string=''] The string to convert.
       * @returns {string} Returns the start cased string.
       * @example
       *
       * _.startCase('--foo-bar');
       * // => 'Foo Bar'
       *
       * _.startCase('fooBar');
       * // => 'Foo Bar'
       *
       * _.startCase('__foo_bar__');
       * // => 'Foo Bar'
       */
      var startCase = createCompounder(function(result, word, index) {
        return result + (index ? ' ' : '') + (word.charAt(0).toUpperCase() + word.slice(1));
      });
  
      /**
       * Checks if `string` starts with the given target string.
       *
       * @static
       * @memberOf _
       * @category String
       * @param {string} [string=''] The string to search.
       * @param {string} [target] The string to search for.
       * @param {number} [position=0] The position to search from.
       * @returns {boolean} Returns `true` if `string` starts with `target`, else `false`.
       * @example
       *
       * _.startsWith('abc', 'a');
       * // => true
       *
       * _.startsWith('abc', 'b');
       * // => false
       *
       * _.startsWith('abc', 'b', 1);
       * // => true
       */
      function startsWith(string, target, position) {
        string = baseToString(string);
        position = position == null
          ? 0
          : nativeMin(position < 0 ? 0 : (+position || 0), string.length);
  
        return string.lastIndexOf(target, position) == position;
      }
  
      /**
       * Creates a compiled template function that can interpolate data properties
       * in "interpolate" delimiters, HTML-escape interpolated data properties in
       * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
       * properties may be accessed as free variables in the template. If a setting
       * object is provided it takes precedence over `_.templateSettings` values.
       *
       * **Note:** In the development build `_.template` utilizes
       * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
       * for easier debugging.
       *
       * For more information on precompiling templates see
       * [lodash's custom builds documentation](https://lodash.com/custom-builds).
       *
       * For more information on Chrome extension sandboxes see
       * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
       *
       * @static
       * @memberOf _
       * @category String
       * @param {string} [string=''] The template string.
       * @param {Object} [options] The options object.
       * @param {RegExp} [options.escape] The HTML "escape" delimiter.
       * @param {RegExp} [options.evaluate] The "evaluate" delimiter.
       * @param {Object} [options.imports] An object to import into the template as free variables.
       * @param {RegExp} [options.interpolate] The "interpolate" delimiter.
       * @param {string} [options.sourceURL] The sourceURL of the template's compiled source.
       * @param {string} [options.variable] The data object variable name.
       * @param- {Object} [otherOptions] Enables the legacy `options` param signature.
       * @returns {Function} Returns the compiled template function.
       * @example
       *
       * // using the "interpolate" delimiter to create a compiled template
       * var compiled = _.template('hello <%= user %>!');
       * compiled({ 'user': 'fred' });
       * // => 'hello fred!'
       *
       * // using the HTML "escape" delimiter to escape data property values
       * var compiled = _.template('<b><%- value %></b>');
       * compiled({ 'value': '<script>' });
       * // => '<b>&lt;script&gt;</b>'
       *
       * // using the "evaluate" delimiter to execute JavaScript and generate HTML
       * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
       * compiled({ 'users': ['fred', 'barney'] });
       * // => '<li>fred</li><li>barney</li>'
       *
       * // using the internal `print` function in "evaluate" delimiters
       * var compiled = _.template('<% print("hello " + user); %>!');
       * compiled({ 'user': 'barney' });
       * // => 'hello barney!'
       *
       * // using the ES delimiter as an alternative to the default "interpolate" delimiter
       * var compiled = _.template('hello ${ user }!');
       * compiled({ 'user': 'pebbles' });
       * // => 'hello pebbles!'
       *
       * // using custom template delimiters
       * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
       * var compiled = _.template('hello {{ user }}!');
       * compiled({ 'user': 'mustache' });
       * // => 'hello mustache!'
       *
       * // using backslashes to treat delimiters as plain text
       * var compiled = _.template('<%= "\\<%- value %\\>" %>');
       * compiled({ 'value': 'ignored' });
       * // => '<%- value %>'
       *
       * // using the `imports` option to import `jQuery` as `jq`
       * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
       * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
       * compiled({ 'users': ['fred', 'barney'] });
       * // => '<li>fred</li><li>barney</li>'
       *
       * // using the `sourceURL` option to specify a custom sourceURL for the template
       * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
       * compiled(data);
       * // => find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector
       *
       * // using the `variable` option to ensure a with-statement isn't used in the compiled template
       * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
       * compiled.source;
       * // => function(data) {
       * //   var __t, __p = '';
       * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
       * //   return __p;
       * // }
       *
       * // using the `source` property to inline compiled templates for meaningful
       * // line numbers in error messages and a stack trace
       * fs.writeFileSync(path.join(cwd, 'jst.js'), '\
       *   var JST = {\
       *     "main": ' + _.template(mainText).source + '\
       *   };\
       * ');
       */
      function template(string, options, otherOptions) {
        // Based on John Resig's `tmpl` implementation (http://ejohn.org/blog/javascript-micro-templating/)
        // and Laura Doktorova's doT.js (https://github.com/olado/doT).
        var settings = lodash.templateSettings;
  
        if (otherOptions && isIterateeCall(string, options, otherOptions)) {
          options = otherOptions = undefined;
        }
        string = baseToString(string);
        options = assignWith(baseAssign({}, otherOptions || options), settings, assignOwnDefaults);
  
        var imports = assignWith(baseAssign({}, options.imports), settings.imports, assignOwnDefaults),
            importsKeys = keys(imports),
            importsValues = baseValues(imports, importsKeys);
  
        var isEscaping,
            isEvaluating,
            index = 0,
            interpolate = options.interpolate || reNoMatch,
            source = "__p += '";
  
        // Compile the regexp to match each delimiter.
        var reDelimiters = RegExp(
          (options.escape || reNoMatch).source + '|' +
          interpolate.source + '|' +
          (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
          (options.evaluate || reNoMatch).source + '|$'
        , 'g');
  
        // Use a sourceURL for easier debugging.
        var sourceURL = '//# sourceURL=' +
          ('sourceURL' in options
            ? options.sourceURL
            : ('lodash.templateSources[' + (++templateCounter) + ']')
          ) + '\n';
  
        string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
          interpolateValue || (interpolateValue = esTemplateValue);
  
          // Escape characters that can't be included in string literals.
          source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
  
          // Replace delimiters with snippets.
          if (escapeValue) {
            isEscaping = true;
            source += "' +\n__e(" + escapeValue + ") +\n'";
          }
          if (evaluateValue) {
            isEvaluating = true;
            source += "';\n" + evaluateValue + ";\n__p += '";
          }
          if (interpolateValue) {
            source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
          }
          index = offset + match.length;
  
          // The JS engine embedded in Adobe products requires returning the `match`
          // string in order to produce the correct `offset` value.
          return match;
        });
  
        source += "';\n";
  
        // If `variable` is not specified wrap a with-statement around the generated
        // code to add the data object to the top of the scope chain.
        var variable = options.variable;
        if (!variable) {
          source = 'with (obj) {\n' + source + '\n}\n';
        }
        // Cleanup code by stripping empty strings.
        source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
          .replace(reEmptyStringMiddle, '$1')
          .replace(reEmptyStringTrailing, '$1;');
  
        // Frame code as the function body.
        source = 'function(' + (variable || 'obj') + ') {\n' +
          (variable
            ? ''
            : 'obj || (obj = {});\n'
          ) +
          "var __t, __p = ''" +
          (isEscaping
             ? ', __e = _.escape'
             : ''
          ) +
          (isEvaluating
            ? ', __j = Array.prototype.join;\n' +
              "function print() { __p += __j.call(arguments, '') }\n"
            : ';\n'
          ) +
          source +
          'return __p\n}';
  
        var result = attempt(function() {
          return Function(importsKeys, sourceURL + 'return ' + source).apply(undefined, importsValues);
        });
  
        // Provide the compiled function's source by its `toString` method or
        // the `source` property as a convenience for inlining compiled templates.
        result.source = source;
        if (isError(result)) {
          throw result;
        }
        return result;
      }
  
      /**
       * Removes leading and trailing whitespace or specified characters from `string`.
       *
       * @static
       * @memberOf _
       * @category String
       * @param {string} [string=''] The string to trim.
       * @param {string} [chars=whitespace] The characters to trim.
       * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
       * @returns {string} Returns the trimmed string.
       * @example
       *
       * _.trim('  abc  ');
       * // => 'abc'
       *
       * _.trim('-_-abc-_-', '_-');
       * // => 'abc'
       *
       * _.map(['  foo  ', '  bar  '], _.trim);
       * // => ['foo', 'bar']
       */
      function trim(string, chars, guard) {
        var value = string;
        string = baseToString(string);
        if (!string) {
          return string;
        }
        if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
          return string.slice(trimmedLeftIndex(string), trimmedRightIndex(string) + 1);
        }
        chars = (chars + '');
        return string.slice(charsLeftIndex(string, chars), charsRightIndex(string, chars) + 1);
      }
  
      /**
       * Removes leading whitespace or specified characters from `string`.
       *
       * @static
       * @memberOf _
       * @category String
       * @param {string} [string=''] The string to trim.
       * @param {string} [chars=whitespace] The characters to trim.
       * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
       * @returns {string} Returns the trimmed string.
       * @example
       *
       * _.trimLeft('  abc  ');
       * // => 'abc  '
       *
       * _.trimLeft('-_-abc-_-', '_-');
       * // => 'abc-_-'
       */
      function trimLeft(string, chars, guard) {
        var value = string;
        string = baseToString(string);
        if (!string) {
          return string;
        }
        if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
          return string.slice(trimmedLeftIndex(string));
        }
        return string.slice(charsLeftIndex(string, (chars + '')));
      }
  
      /**
       * Removes trailing whitespace or specified characters from `string`.
       *
       * @static
       * @memberOf _
       * @category String
       * @param {string} [string=''] The string to trim.
       * @param {string} [chars=whitespace] The characters to trim.
       * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
       * @returns {string} Returns the trimmed string.
       * @example
       *
       * _.trimRight('  abc  ');
       * // => '  abc'
       *
       * _.trimRight('-_-abc-_-', '_-');
       * // => '-_-abc'
       */
      function trimRight(string, chars, guard) {
        var value = string;
        string = baseToString(string);
        if (!string) {
          return string;
        }
        if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
          return string.slice(0, trimmedRightIndex(string) + 1);
        }
        return string.slice(0, charsRightIndex(string, (chars + '')) + 1);
      }
  
      /**
       * Truncates `string` if it's longer than the given maximum string length.
       * The last characters of the truncated string are replaced with the omission
       * string which defaults to "...".
       *
       * @static
       * @memberOf _
       * @category String
       * @param {string} [string=''] The string to truncate.
       * @param {Object|number} [options] The options object or maximum string length.
       * @param {number} [options.length=30] The maximum string length.
       * @param {string} [options.omission='...'] The string to indicate text is omitted.
       * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
       * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
       * @returns {string} Returns the truncated string.
       * @example
       *
       * _.trunc('hi-diddly-ho there, neighborino');
       * // => 'hi-diddly-ho there, neighbo...'
       *
       * _.trunc('hi-diddly-ho there, neighborino', 24);
       * // => 'hi-diddly-ho there, n...'
       *
       * _.trunc('hi-diddly-ho there, neighborino', {
       *   'length': 24,
       *   'separator': ' '
       * });
       * // => 'hi-diddly-ho there,...'
       *
       * _.trunc('hi-diddly-ho there, neighborino', {
       *   'length': 24,
       *   'separator': /,? +/
       * });
       * // => 'hi-diddly-ho there...'
       *
       * _.trunc('hi-diddly-ho there, neighborino', {
       *   'omission': ' [...]'
       * });
       * // => 'hi-diddly-ho there, neig [...]'
       */
      function trunc(string, options, guard) {
        if (guard && isIterateeCall(string, options, guard)) {
          options = undefined;
        }
        var length = DEFAULT_TRUNC_LENGTH,
            omission = DEFAULT_TRUNC_OMISSION;
  
        if (options != null) {
          if (isObject(options)) {
            var separator = 'separator' in options ? options.separator : separator;
            length = 'length' in options ? (+options.length || 0) : length;
            omission = 'omission' in options ? baseToString(options.omission) : omission;
          } else {
            length = +options || 0;
          }
        }
        string = baseToString(string);
        if (length >= string.length) {
          return string;
        }
        var end = length - omission.length;
        if (end < 1) {
          return omission;
        }
        var result = string.slice(0, end);
        if (separator == null) {
          return result + omission;
        }
        if (isRegExp(separator)) {
          if (string.slice(end).search(separator)) {
            var match,
                newEnd,
                substring = string.slice(0, end);
  
            if (!separator.global) {
              separator = RegExp(separator.source, (reFlags.exec(separator) || '') + 'g');
            }
            separator.lastIndex = 0;
            while ((match = separator.exec(substring))) {
              newEnd = match.index;
            }
            result = result.slice(0, newEnd == null ? end : newEnd);
          }
        } else if (string.indexOf(separator, end) != end) {
          var index = result.lastIndexOf(separator);
          if (index > -1) {
            result = result.slice(0, index);
          }
        }
        return result + omission;
      }
  
      /**
       * The inverse of `_.escape`; this method converts the HTML entities
       * `&amp;`, `&lt;`, `&gt;`, `&quot;`, `&#39;`, and `&#96;` in `string` to their
       * corresponding characters.
       *
       * **Note:** No other HTML entities are unescaped. To unescape additional HTML
       * entities use a third-party library like [_he_](https://mths.be/he).
       *
       * @static
       * @memberOf _
       * @category String
       * @param {string} [string=''] The string to unescape.
       * @returns {string} Returns the unescaped string.
       * @example
       *
       * _.unescape('fred, barney, &amp; pebbles');
       * // => 'fred, barney, & pebbles'
       */
      function unescape(string) {
        string = baseToString(string);
        return (string && reHasEscapedHtml.test(string))
          ? string.replace(reEscapedHtml, unescapeHtmlChar)
          : string;
      }
  
      /**
       * Splits `string` into an array of its words.
       *
       * @static
       * @memberOf _
       * @category String
       * @param {string} [string=''] The string to inspect.
       * @param {RegExp|string} [pattern] The pattern to match words.
       * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
       * @returns {Array} Returns the words of `string`.
       * @example
       *
       * _.words('fred, barney, & pebbles');
       * // => ['fred', 'barney', 'pebbles']
       *
       * _.words('fred, barney, & pebbles', /[^, ]+/g);
       * // => ['fred', 'barney', '&', 'pebbles']
       */
      function words(string, pattern, guard) {
        if (guard && isIterateeCall(string, pattern, guard)) {
          pattern = undefined;
        }
        string = baseToString(string);
        return string.match(pattern || reWords) || [];
      }
  
      /*------------------------------------------------------------------------*/
  
      /**
       * Attempts to invoke `func`, returning either the result or the caught error
       * object. Any additional arguments are provided to `func` when it is invoked.
       *
       * @static
       * @memberOf _
       * @category Utility
       * @param {Function} func The function to attempt.
       * @returns {*} Returns the `func` result or error object.
       * @example
       *
       * // avoid throwing errors for invalid selectors
       * var elements = _.attempt(function(selector) {
       *   return document.querySelectorAll(selector);
       * }, '>_>');
       *
       * if (_.isError(elements)) {
       *   elements = [];
       * }
       */
      var attempt = restParam(function(func, args) {
        try {
          return func.apply(undefined, args);
        } catch(e) {
          return isError(e) ? e : new Error(e);
        }
      });
  
      /**
       * Creates a function that invokes `func` with the `this` binding of `thisArg`
       * and arguments of the created function. If `func` is a property name the
       * created callback returns the property value for a given element. If `func`
       * is an object the created callback returns `true` for elements that contain
       * the equivalent object properties, otherwise it returns `false`.
       *
       * @static
       * @memberOf _
       * @alias iteratee
       * @category Utility
       * @param {*} [func=_.identity] The value to convert to a callback.
       * @param {*} [thisArg] The `this` binding of `func`.
       * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
       * @returns {Function} Returns the callback.
       * @example
       *
       * var users = [
       *   { 'user': 'barney', 'age': 36 },
       *   { 'user': 'fred',   'age': 40 }
       * ];
       *
       * // wrap to create custom callback shorthands
       * _.callback = _.wrap(_.callback, function(callback, func, thisArg) {
       *   var match = /^(.+?)__([gl]t)(.+)$/.exec(func);
       *   if (!match) {
       *     return callback(func, thisArg);
       *   }
       *   return function(object) {
       *     return match[2] == 'gt'
       *       ? object[match[1]] > match[3]
       *       : object[match[1]] < match[3];
       *   };
       * });
       *
       * _.filter(users, 'age__gt36');
       * // => [{ 'user': 'fred', 'age': 40 }]
       */
      function callback(func, thisArg, guard) {
        if (guard && isIterateeCall(func, thisArg, guard)) {
          thisArg = undefined;
        }
        return isObjectLike(func)
          ? matches(func)
          : baseCallback(func, thisArg);
      }
  
      /**
       * Creates a function that returns `value`.
       *
       * @static
       * @memberOf _
       * @category Utility
       * @param {*} value The value to return from the new function.
       * @returns {Function} Returns the new function.
       * @example
       *
       * var object = { 'user': 'fred' };
       * var getter = _.constant(object);
       *
       * getter() === object;
       * // => true
       */
      function constant(value) {
        return function() {
          return value;
        };
      }
  
      /**
       * This method returns the first argument provided to it.
       *
       * @static
       * @memberOf _
       * @category Utility
       * @param {*} value Any value.
       * @returns {*} Returns `value`.
       * @example
       *
       * var object = { 'user': 'fred' };
       *
       * _.identity(object) === object;
       * // => true
       */
      function identity(value) {
        return value;
      }
  
      /**
       * Creates a function that performs a deep comparison between a given object
       * and `source`, returning `true` if the given object has equivalent property
       * values, else `false`.
       *
       * **Note:** This method supports comparing arrays, booleans, `Date` objects,
       * numbers, `Object` objects, regexes, and strings. Objects are compared by
       * their own, not inherited, enumerable properties. For comparing a single
       * own or inherited property value see `_.matchesProperty`.
       *
       * @static
       * @memberOf _
       * @category Utility
       * @param {Object} source The object of property values to match.
       * @returns {Function} Returns the new function.
       * @example
       *
       * var users = [
       *   { 'user': 'barney', 'age': 36, 'active': true },
       *   { 'user': 'fred',   'age': 40, 'active': false }
       * ];
       *
       * _.filter(users, _.matches({ 'age': 40, 'active': false }));
       * // => [{ 'user': 'fred', 'age': 40, 'active': false }]
       */
      function matches(source) {
        return baseMatches(baseClone(source, true));
      }
  
      /**
       * Creates a function that compares the property value of `path` on a given
       * object to `value`.
       *
       * **Note:** This method supports comparing arrays, booleans, `Date` objects,
       * numbers, `Object` objects, regexes, and strings. Objects are compared by
       * their own, not inherited, enumerable properties.
       *
       * @static
       * @memberOf _
       * @category Utility
       * @param {Array|string} path The path of the property to get.
       * @param {*} srcValue The value to match.
       * @returns {Function} Returns the new function.
       * @example
       *
       * var users = [
       *   { 'user': 'barney' },
       *   { 'user': 'fred' }
       * ];
       *
       * _.find(users, _.matchesProperty('user', 'fred'));
       * // => { 'user': 'fred' }
       */
      function matchesProperty(path, srcValue) {
        return baseMatchesProperty(path, baseClone(srcValue, true));
      }
  
      /**
       * Creates a function that invokes the method at `path` on a given object.
       * Any additional arguments are provided to the invoked method.
       *
       * @static
       * @memberOf _
       * @category Utility
       * @param {Array|string} path The path of the method to invoke.
       * @param {...*} [args] The arguments to invoke the method with.
       * @returns {Function} Returns the new function.
       * @example
       *
       * var objects = [
       *   { 'a': { 'b': { 'c': _.constant(2) } } },
       *   { 'a': { 'b': { 'c': _.constant(1) } } }
       * ];
       *
       * _.map(objects, _.method('a.b.c'));
       * // => [2, 1]
       *
       * _.invoke(_.sortBy(objects, _.method(['a', 'b', 'c'])), 'a.b.c');
       * // => [1, 2]
       */
      var method = restParam(function(path, args) {
        return function(object) {
          return invokePath(object, path, args);
        };
      });
  
      /**
       * The opposite of `_.method`; this method creates a function that invokes
       * the method at a given path on `object`. Any additional arguments are
       * provided to the invoked method.
       *
       * @static
       * @memberOf _
       * @category Utility
       * @param {Object} object The object to query.
       * @param {...*} [args] The arguments to invoke the method with.
       * @returns {Function} Returns the new function.
       * @example
       *
       * var array = _.times(3, _.constant),
       *     object = { 'a': array, 'b': array, 'c': array };
       *
       * _.map(['a[2]', 'c[0]'], _.methodOf(object));
       * // => [2, 0]
       *
       * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
       * // => [2, 0]
       */
      var methodOf = restParam(function(object, args) {
        return function(path) {
          return invokePath(object, path, args);
        };
      });
  
      /**
       * Adds all own enumerable function properties of a source object to the
       * destination object. If `object` is a function then methods are added to
       * its prototype as well.
       *
       * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
       * avoid conflicts caused by modifying the original.
       *
       * @static
       * @memberOf _
       * @category Utility
       * @param {Function|Object} [object=lodash] The destination object.
       * @param {Object} source The object of functions to add.
       * @param {Object} [options] The options object.
       * @param {boolean} [options.chain=true] Specify whether the functions added
       *  are chainable.
       * @returns {Function|Object} Returns `object`.
       * @example
       *
       * function vowels(string) {
       *   return _.filter(string, function(v) {
       *     return /[aeiou]/i.test(v);
       *   });
       * }
       *
       * _.mixin({ 'vowels': vowels });
       * _.vowels('fred');
       * // => ['e']
       *
       * _('fred').vowels().value();
       * // => ['e']
       *
       * _.mixin({ 'vowels': vowels }, { 'chain': false });
       * _('fred').vowels();
       * // => ['e']
       */
      function mixin(object, source, options) {
        if (options == null) {
          var isObj = isObject(source),
              props = isObj ? keys(source) : undefined,
              methodNames = (props && props.length) ? baseFunctions(source, props) : undefined;
  
          if (!(methodNames ? methodNames.length : isObj)) {
            methodNames = false;
            options = source;
            source = object;
            object = this;
          }
        }
        if (!methodNames) {
          methodNames = baseFunctions(source, keys(source));
        }
        var chain = true,
            index = -1,
            isFunc = isFunction(object),
            length = methodNames.length;
  
        if (options === false) {
          chain = false;
        } else if (isObject(options) && 'chain' in options) {
          chain = options.chain;
        }
        while (++index < length) {
          var methodName = methodNames[index],
              func = source[methodName];
  
          object[methodName] = func;
          if (isFunc) {
            object.prototype[methodName] = (function(func) {
              return function() {
                var chainAll = this.__chain__;
                if (chain || chainAll) {
                  var result = object(this.__wrapped__),
                      actions = result.__actions__ = arrayCopy(this.__actions__);
  
                  actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
                  result.__chain__ = chainAll;
                  return result;
                }
                return func.apply(object, arrayPush([this.value()], arguments));
              };
            }(func));
          }
        }
        return object;
      }
  
      /**
       * Reverts the `_` variable to its previous value and returns a reference to
       * the `lodash` function.
       *
       * @static
       * @memberOf _
       * @category Utility
       * @returns {Function} Returns the `lodash` function.
       * @example
       *
       * var lodash = _.noConflict();
       */
      function noConflict() {
        root._ = oldDash;
        return this;
      }
  
      /**
       * A no-operation function that returns `undefined` regardless of the
       * arguments it receives.
       *
       * @static
       * @memberOf _
       * @category Utility
       * @example
       *
       * var object = { 'user': 'fred' };
       *
       * _.noop(object) === undefined;
       * // => true
       */
      function noop() {
        // No operation performed.
      }
  
      /**
       * Creates a function that returns the property value at `path` on a
       * given object.
       *
       * @static
       * @memberOf _
       * @category Utility
       * @param {Array|string} path The path of the property to get.
       * @returns {Function} Returns the new function.
       * @example
       *
       * var objects = [
       *   { 'a': { 'b': { 'c': 2 } } },
       *   { 'a': { 'b': { 'c': 1 } } }
       * ];
       *
       * _.map(objects, _.property('a.b.c'));
       * // => [2, 1]
       *
       * _.pluck(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
       * // => [1, 2]
       */
      function property(path) {
        return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
      }
  
      /**
       * The opposite of `_.property`; this method creates a function that returns
       * the property value at a given path on `object`.
       *
       * @static
       * @memberOf _
       * @category Utility
       * @param {Object} object The object to query.
       * @returns {Function} Returns the new function.
       * @example
       *
       * var array = [0, 1, 2],
       *     object = { 'a': array, 'b': array, 'c': array };
       *
       * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
       * // => [2, 0]
       *
       * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
       * // => [2, 0]
       */
      function propertyOf(object) {
        return function(path) {
          return baseGet(object, toPath(path), path + '');
        };
      }
  
      /**
       * Creates an array of numbers (positive and/or negative) progressing from
       * `start` up to, but not including, `end`. If `end` is not specified it is
       * set to `start` with `start` then set to `0`. If `end` is less than `start`
       * a zero-length range is created unless a negative `step` is specified.
       *
       * @static
       * @memberOf _
       * @category Utility
       * @param {number} [start=0] The start of the range.
       * @param {number} end The end of the range.
       * @param {number} [step=1] The value to increment or decrement by.
       * @returns {Array} Returns the new array of numbers.
       * @example
       *
       * _.range(4);
       * // => [0, 1, 2, 3]
       *
       * _.range(1, 5);
       * // => [1, 2, 3, 4]
       *
       * _.range(0, 20, 5);
       * // => [0, 5, 10, 15]
       *
       * _.range(0, -4, -1);
       * // => [0, -1, -2, -3]
       *
       * _.range(1, 4, 0);
       * // => [1, 1, 1]
       *
       * _.range(0);
       * // => []
       */
      function range(start, end, step) {
        if (step && isIterateeCall(start, end, step)) {
          end = step = undefined;
        }
        start = +start || 0;
        step = step == null ? 1 : (+step || 0);
  
        if (end == null) {
          end = start;
          start = 0;
        } else {
          end = +end || 0;
        }
        // Use `Array(length)` so engines like Chakra and V8 avoid slower modes.
        // See https://youtu.be/XAqIpGU8ZZk#t=17m25s for more details.
        var index = -1,
            length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
            result = Array(length);
  
        while (++index < length) {
          result[index] = start;
          start += step;
        }
        return result;
      }
  
      /**
       * Invokes the iteratee function `n` times, returning an array of the results
       * of each invocation. The `iteratee` is bound to `thisArg` and invoked with
       * one argument; (index).
       *
       * @static
       * @memberOf _
       * @category Utility
       * @param {number} n The number of times to invoke `iteratee`.
       * @param {Function} [iteratee=_.identity] The function invoked per iteration.
       * @param {*} [thisArg] The `this` binding of `iteratee`.
       * @returns {Array} Returns the array of results.
       * @example
       *
       * var diceRolls = _.times(3, _.partial(_.random, 1, 6, false));
       * // => [3, 6, 4]
       *
       * _.times(3, function(n) {
       *   mage.castSpell(n);
       * });
       * // => invokes `mage.castSpell(n)` three times with `n` of `0`, `1`, and `2`
       *
       * _.times(3, function(n) {
       *   this.cast(n);
       * }, mage);
       * // => also invokes `mage.castSpell(n)` three times
       */
      function times(n, iteratee, thisArg) {
        n = nativeFloor(n);
  
        // Exit early to avoid a JSC JIT bug in Safari 8
        // where `Array(0)` is treated as `Array(1)`.
        if (n < 1 || !nativeIsFinite(n)) {
          return [];
        }
        var index = -1,
            result = Array(nativeMin(n, MAX_ARRAY_LENGTH));
  
        iteratee = bindCallback(iteratee, thisArg, 1);
        while (++index < n) {
          if (index < MAX_ARRAY_LENGTH) {
            result[index] = iteratee(index);
          } else {
            iteratee(index);
          }
        }
        return result;
      }
  
      /**
       * Generates a unique ID. If `prefix` is provided the ID is appended to it.
       *
       * @static
       * @memberOf _
       * @category Utility
       * @param {string} [prefix] The value to prefix the ID with.
       * @returns {string} Returns the unique ID.
       * @example
       *
       * _.uniqueId('contact_');
       * // => 'contact_104'
       *
       * _.uniqueId();
       * // => '105'
       */
      function uniqueId(prefix) {
        var id = ++idCounter;
        return baseToString(prefix) + id;
      }
  
      /*------------------------------------------------------------------------*/
  
      /**
       * Adds two numbers.
       *
       * @static
       * @memberOf _
       * @category Math
       * @param {number} augend The first number to add.
       * @param {number} addend The second number to add.
       * @returns {number} Returns the sum.
       * @example
       *
       * _.add(6, 4);
       * // => 10
       */
      function add(augend, addend) {
        return (+augend || 0) + (+addend || 0);
      }
  
      /**
       * Calculates `n` rounded up to `precision`.
       *
       * @static
       * @memberOf _
       * @category Math
       * @param {number} n The number to round up.
       * @param {number} [precision=0] The precision to round up to.
       * @returns {number} Returns the rounded up number.
       * @example
       *
       * _.ceil(4.006);
       * // => 5
       *
       * _.ceil(6.004, 2);
       * // => 6.01
       *
       * _.ceil(6040, -2);
       * // => 6100
       */
      var ceil = createRound('ceil');
  
      /**
       * Calculates `n` rounded down to `precision`.
       *
       * @static
       * @memberOf _
       * @category Math
       * @param {number} n The number to round down.
       * @param {number} [precision=0] The precision to round down to.
       * @returns {number} Returns the rounded down number.
       * @example
       *
       * _.floor(4.006);
       * // => 4
       *
       * _.floor(0.046, 2);
       * // => 0.04
       *
       * _.floor(4060, -2);
       * // => 4000
       */
      var floor = createRound('floor');
  
      /**
       * Gets the maximum value of `collection`. If `collection` is empty or falsey
       * `-Infinity` is returned. If an iteratee function is provided it is invoked
       * for each value in `collection` to generate the criterion by which the value
       * is ranked. The `iteratee` is bound to `thisArg` and invoked with three
       * arguments: (value, index, collection).
       *
       * If a property name is provided for `iteratee` the created `_.property`
       * style callback returns the property value of the given element.
       *
       * If a value is also provided for `thisArg` the created `_.matchesProperty`
       * style callback returns `true` for elements that have a matching property
       * value, else `false`.
       *
       * If an object is provided for `iteratee` the created `_.matches` style
       * callback returns `true` for elements that have the properties of the given
       * object, else `false`.
       *
       * @static
       * @memberOf _
       * @category Math
       * @param {Array|Object|string} collection The collection to iterate over.
       * @param {Function|Object|string} [iteratee] The function invoked per iteration.
       * @param {*} [thisArg] The `this` binding of `iteratee`.
       * @returns {*} Returns the maximum value.
       * @example
       *
       * _.max([4, 2, 8, 6]);
       * // => 8
       *
       * _.max([]);
       * // => -Infinity
       *
       * var users = [
       *   { 'user': 'barney', 'age': 36 },
       *   { 'user': 'fred',   'age': 40 }
       * ];
       *
       * _.max(users, function(chr) {
       *   return chr.age;
       * });
       * // => { 'user': 'fred', 'age': 40 }
       *
       * // using the `_.property` callback shorthand
       * _.max(users, 'age');
       * // => { 'user': 'fred', 'age': 40 }
       */
      var max = createExtremum(gt, NEGATIVE_INFINITY);
  
      /**
       * Gets the minimum value of `collection`. If `collection` is empty or falsey
       * `Infinity` is returned. If an iteratee function is provided it is invoked
       * for each value in `collection` to generate the criterion by which the value
       * is ranked. The `iteratee` is bound to `thisArg` and invoked with three
       * arguments: (value, index, collection).
       *
       * If a property name is provided for `iteratee` the created `_.property`
       * style callback returns the property value of the given element.
       *
       * If a value is also provided for `thisArg` the created `_.matchesProperty`
       * style callback returns `true` for elements that have a matching property
       * value, else `false`.
       *
       * If an object is provided for `iteratee` the created `_.matches` style
       * callback returns `true` for elements that have the properties of the given
       * object, else `false`.
       *
       * @static
       * @memberOf _
       * @category Math
       * @param {Array|Object|string} collection The collection to iterate over.
       * @param {Function|Object|string} [iteratee] The function invoked per iteration.
       * @param {*} [thisArg] The `this` binding of `iteratee`.
       * @returns {*} Returns the minimum value.
       * @example
       *
       * _.min([4, 2, 8, 6]);
       * // => 2
       *
       * _.min([]);
       * // => Infinity
       *
       * var users = [
       *   { 'user': 'barney', 'age': 36 },
       *   { 'user': 'fred',   'age': 40 }
       * ];
       *
       * _.min(users, function(chr) {
       *   return chr.age;
       * });
       * // => { 'user': 'barney', 'age': 36 }
       *
       * // using the `_.property` callback shorthand
       * _.min(users, 'age');
       * // => { 'user': 'barney', 'age': 36 }
       */
      var min = createExtremum(lt, POSITIVE_INFINITY);
  
      /**
       * Calculates `n` rounded to `precision`.
       *
       * @static
       * @memberOf _
       * @category Math
       * @param {number} n The number to round.
       * @param {number} [precision=0] The precision to round to.
       * @returns {number} Returns the rounded number.
       * @example
       *
       * _.round(4.006);
       * // => 4
       *
       * _.round(4.006, 2);
       * // => 4.01
       *
       * _.round(4060, -2);
       * // => 4100
       */
      var round = createRound('round');
  
      /**
       * Gets the sum of the values in `collection`.
       *
       * @static
       * @memberOf _
       * @category Math
       * @param {Array|Object|string} collection The collection to iterate over.
       * @param {Function|Object|string} [iteratee] The function invoked per iteration.
       * @param {*} [thisArg] The `this` binding of `iteratee`.
       * @returns {number} Returns the sum.
       * @example
       *
       * _.sum([4, 6]);
       * // => 10
       *
       * _.sum({ 'a': 4, 'b': 6 });
       * // => 10
       *
       * var objects = [
       *   { 'n': 4 },
       *   { 'n': 6 }
       * ];
       *
       * _.sum(objects, function(object) {
       *   return object.n;
       * });
       * // => 10
       *
       * // using the `_.property` callback shorthand
       * _.sum(objects, 'n');
       * // => 10
       */
      function sum(collection, iteratee, thisArg) {
        if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
          iteratee = undefined;
        }
        iteratee = getCallback(iteratee, thisArg, 3);
        return iteratee.length == 1
          ? arraySum(isArray(collection) ? collection : toIterable(collection), iteratee)
          : baseSum(collection, iteratee);
      }
  
      /*------------------------------------------------------------------------*/
  
      // Ensure wrappers are instances of `baseLodash`.
      lodash.prototype = baseLodash.prototype;
  
      LodashWrapper.prototype = baseCreate(baseLodash.prototype);
      LodashWrapper.prototype.constructor = LodashWrapper;
  
      LazyWrapper.prototype = baseCreate(baseLodash.prototype);
      LazyWrapper.prototype.constructor = LazyWrapper;
  
      // Add functions to the `Map` cache.
      MapCache.prototype['delete'] = mapDelete;
      MapCache.prototype.get = mapGet;
      MapCache.prototype.has = mapHas;
      MapCache.prototype.set = mapSet;
  
      // Add functions to the `Set` cache.
      SetCache.prototype.push = cachePush;
  
      // Assign cache to `_.memoize`.
      memoize.Cache = MapCache;
  
      // Add functions that return wrapped values when chaining.
      lodash.after = after;
      lodash.ary = ary;
      lodash.assign = assign;
      lodash.at = at;
      lodash.before = before;
      lodash.bind = bind;
      lodash.bindAll = bindAll;
      lodash.bindKey = bindKey;
      lodash.callback = callback;
      lodash.chain = chain;
      lodash.chunk = chunk;
      lodash.compact = compact;
      lodash.constant = constant;
      lodash.countBy = countBy;
      lodash.create = create;
      lodash.curry = curry;
      lodash.curryRight = curryRight;
      lodash.debounce = debounce;
      lodash.defaults = defaults;
      lodash.defaultsDeep = defaultsDeep;
      lodash.defer = defer;
      lodash.delay = delay;
      lodash.difference = difference;
      lodash.drop = drop;
      lodash.dropRight = dropRight;
      lodash.dropRightWhile = dropRightWhile;
      lodash.dropWhile = dropWhile;
      lodash.fill = fill;
      lodash.filter = filter;
      lodash.flatten = flatten;
      lodash.flattenDeep = flattenDeep;
      lodash.flow = flow;
      lodash.flowRight = flowRight;
      lodash.forEach = forEach;
      lodash.forEachRight = forEachRight;
      lodash.forIn = forIn;
      lodash.forInRight = forInRight;
      lodash.forOwn = forOwn;
      lodash.forOwnRight = forOwnRight;
      lodash.functions = functions;
      lodash.groupBy = groupBy;
      lodash.indexBy = indexBy;
      lodash.initial = initial;
      lodash.intersection = intersection;
      lodash.invert = invert;
      lodash.invoke = invoke;
      lodash.keys = keys;
      lodash.keysIn = keysIn;
      lodash.map = map;
      lodash.mapKeys = mapKeys;
      lodash.mapValues = mapValues;
      lodash.matches = matches;
      lodash.matchesProperty = matchesProperty;
      lodash.memoize = memoize;
      lodash.merge = merge;
      lodash.method = method;
      lodash.methodOf = methodOf;
      lodash.mixin = mixin;
      lodash.modArgs = modArgs;
      lodash.negate = negate;
      lodash.omit = omit;
      lodash.once = once;
      lodash.pairs = pairs;
      lodash.partial = partial;
      lodash.partialRight = partialRight;
      lodash.partition = partition;
      lodash.pick = pick;
      lodash.pluck = pluck;
      lodash.property = property;
      lodash.propertyOf = propertyOf;
      lodash.pull = pull;
      lodash.pullAt = pullAt;
      lodash.range = range;
      lodash.rearg = rearg;
      lodash.reject = reject;
      lodash.remove = remove;
      lodash.rest = rest;
      lodash.restParam = restParam;
      lodash.set = set;
      lodash.shuffle = shuffle;
      lodash.slice = slice;
      lodash.sortBy = sortBy;
      lodash.sortByAll = sortByAll;
      lodash.sortByOrder = sortByOrder;
      lodash.spread = spread;
      lodash.take = take;
      lodash.takeRight = takeRight;
      lodash.takeRightWhile = takeRightWhile;
      lodash.takeWhile = takeWhile;
      lodash.tap = tap;
      lodash.throttle = throttle;
      lodash.thru = thru;
      lodash.times = times;
      lodash.toArray = toArray;
      lodash.toPlainObject = toPlainObject;
      lodash.transform = transform;
      lodash.union = union;
      lodash.uniq = uniq;
      lodash.unzip = unzip;
      lodash.unzipWith = unzipWith;
      lodash.values = values;
      lodash.valuesIn = valuesIn;
      lodash.where = where;
      lodash.without = without;
      lodash.wrap = wrap;
      lodash.xor = xor;
      lodash.zip = zip;
      lodash.zipObject = zipObject;
      lodash.zipWith = zipWith;
  
      // Add aliases.
      lodash.backflow = flowRight;
      lodash.collect = map;
      lodash.compose = flowRight;
      lodash.each = forEach;
      lodash.eachRight = forEachRight;
      lodash.extend = assign;
      lodash.iteratee = callback;
      lodash.methods = functions;
      lodash.object = zipObject;
      lodash.select = filter;
      lodash.tail = rest;
      lodash.unique = uniq;
  
      // Add functions to `lodash.prototype`.
      mixin(lodash, lodash);
  
      /*------------------------------------------------------------------------*/
  
      // Add functions that return unwrapped values when chaining.
      lodash.add = add;
      lodash.attempt = attempt;
      lodash.camelCase = camelCase;
      lodash.capitalize = capitalize;
      lodash.ceil = ceil;
      lodash.clone = clone;
      lodash.cloneDeep = cloneDeep;
      lodash.deburr = deburr;
      lodash.endsWith = endsWith;
      lodash.escape = escape;
      lodash.escapeRegExp = escapeRegExp;
      lodash.every = every;
      lodash.find = find;
      lodash.findIndex = findIndex;
      lodash.findKey = findKey;
      lodash.findLast = findLast;
      lodash.findLastIndex = findLastIndex;
      lodash.findLastKey = findLastKey;
      lodash.findWhere = findWhere;
      lodash.first = first;
      lodash.floor = floor;
      lodash.get = get;
      lodash.gt = gt;
      lodash.gte = gte;
      lodash.has = has;
      lodash.identity = identity;
      lodash.includes = includes;
      lodash.indexOf = indexOf;
      lodash.inRange = inRange;
      lodash.isArguments = isArguments;
      lodash.isArray = isArray;
      lodash.isBoolean = isBoolean;
      lodash.isDate = isDate;
      lodash.isElement = isElement;
      lodash.isEmpty = isEmpty;
      lodash.isEqual = isEqual;
      lodash.isError = isError;
      lodash.isFinite = isFinite;
      lodash.isFunction = isFunction;
      lodash.isMatch = isMatch;
      lodash.isNaN = isNaN;
      lodash.isNative = isNative;
      lodash.isNull = isNull;
      lodash.isNumber = isNumber;
      lodash.isObject = isObject;
      lodash.isPlainObject = isPlainObject;
      lodash.isRegExp = isRegExp;
      lodash.isString = isString;
      lodash.isTypedArray = isTypedArray;
      lodash.isUndefined = isUndefined;
      lodash.kebabCase = kebabCase;
      lodash.last = last;
      lodash.lastIndexOf = lastIndexOf;
      lodash.lt = lt;
      lodash.lte = lte;
      lodash.max = max;
      lodash.min = min;
      lodash.noConflict = noConflict;
      lodash.noop = noop;
      lodash.now = now;
      lodash.pad = pad;
      lodash.padLeft = padLeft;
      lodash.padRight = padRight;
      lodash.parseInt = parseInt;
      lodash.random = random;
      lodash.reduce = reduce;
      lodash.reduceRight = reduceRight;
      lodash.repeat = repeat;
      lodash.result = result;
      lodash.round = round;
      lodash.runInContext = runInContext;
      lodash.size = size;
      lodash.snakeCase = snakeCase;
      lodash.some = some;
      lodash.sortedIndex = sortedIndex;
      lodash.sortedLastIndex = sortedLastIndex;
      lodash.startCase = startCase;
      lodash.startsWith = startsWith;
      lodash.sum = sum;
      lodash.template = template;
      lodash.trim = trim;
      lodash.trimLeft = trimLeft;
      lodash.trimRight = trimRight;
      lodash.trunc = trunc;
      lodash.unescape = unescape;
      lodash.uniqueId = uniqueId;
      lodash.words = words;
  
      // Add aliases.
      lodash.all = every;
      lodash.any = some;
      lodash.contains = includes;
      lodash.eq = isEqual;
      lodash.detect = find;
      lodash.foldl = reduce;
      lodash.foldr = reduceRight;
      lodash.head = first;
      lodash.include = includes;
      lodash.inject = reduce;
  
      mixin(lodash, (function() {
        var source = {};
        baseForOwn(lodash, function(func, methodName) {
          if (!lodash.prototype[methodName]) {
            source[methodName] = func;
          }
        });
        return source;
      }()), false);
  
      /*------------------------------------------------------------------------*/
  
      // Add functions capable of returning wrapped and unwrapped values when chaining.
      lodash.sample = sample;
  
      lodash.prototype.sample = function(n) {
        if (!this.__chain__ && n == null) {
          return sample(this.value());
        }
        return this.thru(function(value) {
          return sample(value, n);
        });
      };
  
      /*------------------------------------------------------------------------*/
  
      /**
       * The semantic version number.
       *
       * @static
       * @memberOf _
       * @type string
       */
      lodash.VERSION = VERSION;
  
      // Assign default placeholders.
      arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
        lodash[methodName].placeholder = lodash;
      });
  
      // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
      arrayEach(['drop', 'take'], function(methodName, index) {
        LazyWrapper.prototype[methodName] = function(n) {
          var filtered = this.__filtered__;
          if (filtered && !index) {
            return new LazyWrapper(this);
          }
          n = n == null ? 1 : nativeMax(nativeFloor(n) || 0, 0);
  
          var result = this.clone();
          if (filtered) {
            result.__takeCount__ = nativeMin(result.__takeCount__, n);
          } else {
            result.__views__.push({ 'size': n, 'type': methodName + (result.__dir__ < 0 ? 'Right' : '') });
          }
          return result;
        };
  
        LazyWrapper.prototype[methodName + 'Right'] = function(n) {
          return this.reverse()[methodName](n).reverse();
        };
      });
  
      // Add `LazyWrapper` methods that accept an `iteratee` value.
      arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
        var type = index + 1,
            isFilter = type != LAZY_MAP_FLAG;
  
        LazyWrapper.prototype[methodName] = function(iteratee, thisArg) {
          var result = this.clone();
          result.__iteratees__.push({ 'iteratee': getCallback(iteratee, thisArg, 1), 'type': type });
          result.__filtered__ = result.__filtered__ || isFilter;
          return result;
        };
      });
  
      // Add `LazyWrapper` methods for `_.first` and `_.last`.
      arrayEach(['first', 'last'], function(methodName, index) {
        var takeName = 'take' + (index ? 'Right' : '');
  
        LazyWrapper.prototype[methodName] = function() {
          return this[takeName](1).value()[0];
        };
      });
  
      // Add `LazyWrapper` methods for `_.initial` and `_.rest`.
      arrayEach(['initial', 'rest'], function(methodName, index) {
        var dropName = 'drop' + (index ? '' : 'Right');
  
        LazyWrapper.prototype[methodName] = function() {
          return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
        };
      });
  
      // Add `LazyWrapper` methods for `_.pluck` and `_.where`.
      arrayEach(['pluck', 'where'], function(methodName, index) {
        var operationName = index ? 'filter' : 'map',
            createCallback = index ? baseMatches : property;
  
        LazyWrapper.prototype[methodName] = function(value) {
          return this[operationName](createCallback(value));
        };
      });
  
      LazyWrapper.prototype.compact = function() {
        return this.filter(identity);
      };
  
      LazyWrapper.prototype.reject = function(predicate, thisArg) {
        predicate = getCallback(predicate, thisArg, 1);
        return this.filter(function(value) {
          return !predicate(value);
        });
      };
  
      LazyWrapper.prototype.slice = function(start, end) {
        start = start == null ? 0 : (+start || 0);
  
        var result = this;
        if (result.__filtered__ && (start > 0 || end < 0)) {
          return new LazyWrapper(result);
        }
        if (start < 0) {
          result = result.takeRight(-start);
        } else if (start) {
          result = result.drop(start);
        }
        if (end !== undefined) {
          end = (+end || 0);
          result = end < 0 ? result.dropRight(-end) : result.take(end - start);
        }
        return result;
      };
  
      LazyWrapper.prototype.takeRightWhile = function(predicate, thisArg) {
        return this.reverse().takeWhile(predicate, thisArg).reverse();
      };
  
      LazyWrapper.prototype.toArray = function() {
        return this.take(POSITIVE_INFINITY);
      };
  
      // Add `LazyWrapper` methods to `lodash.prototype`.
      baseForOwn(LazyWrapper.prototype, function(func, methodName) {
        var checkIteratee = /^(?:filter|map|reject)|While$/.test(methodName),
            retUnwrapped = /^(?:first|last)$/.test(methodName),
            lodashFunc = lodash[retUnwrapped ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName];
  
        if (!lodashFunc) {
          return;
        }
        lodash.prototype[methodName] = function() {
          var args = retUnwrapped ? [1] : arguments,
              chainAll = this.__chain__,
              value = this.__wrapped__,
              isHybrid = !!this.__actions__.length,
              isLazy = value instanceof LazyWrapper,
              iteratee = args[0],
              useLazy = isLazy || isArray(value);
  
          if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
            // Avoid lazy use if the iteratee has a "length" value other than `1`.
            isLazy = useLazy = false;
          }
          var interceptor = function(value) {
            return (retUnwrapped && chainAll)
              ? lodashFunc(value, 1)[0]
              : lodashFunc.apply(undefined, arrayPush([value], args));
          };
  
          var action = { 'func': thru, 'args': [interceptor], 'thisArg': undefined },
              onlyLazy = isLazy && !isHybrid;
  
          if (retUnwrapped && !chainAll) {
            if (onlyLazy) {
              value = value.clone();
              value.__actions__.push(action);
              return func.call(value);
            }
            return lodashFunc.call(undefined, this.value())[0];
          }
          if (!retUnwrapped && useLazy) {
            value = onlyLazy ? value : new LazyWrapper(this);
            var result = func.apply(value, args);
            result.__actions__.push(action);
            return new LodashWrapper(result, chainAll);
          }
          return this.thru(interceptor);
        };
      });
  
      // Add `Array` and `String` methods to `lodash.prototype`.
      arrayEach(['join', 'pop', 'push', 'replace', 'shift', 'sort', 'splice', 'split', 'unshift'], function(methodName) {
        var func = (/^(?:replace|split)$/.test(methodName) ? stringProto : arrayProto)[methodName],
            chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
            retUnwrapped = /^(?:join|pop|replace|shift)$/.test(methodName);
  
        lodash.prototype[methodName] = function() {
          var args = arguments;
          if (retUnwrapped && !this.__chain__) {
            return func.apply(this.value(), args);
          }
          return this[chainName](function(value) {
            return func.apply(value, args);
          });
        };
      });
  
      // Map minified function names to their real names.
      baseForOwn(LazyWrapper.prototype, function(func, methodName) {
        var lodashFunc = lodash[methodName];
        if (lodashFunc) {
          var key = lodashFunc.name,
              names = realNames[key] || (realNames[key] = []);
  
          names.push({ 'name': methodName, 'func': lodashFunc });
        }
      });
  
      realNames[createHybridWrapper(undefined, BIND_KEY_FLAG).name] = [{ 'name': 'wrapper', 'func': undefined }];
  
      // Add functions to the lazy wrapper.
      LazyWrapper.prototype.clone = lazyClone;
      LazyWrapper.prototype.reverse = lazyReverse;
      LazyWrapper.prototype.value = lazyValue;
  
      // Add chaining functions to the `lodash` wrapper.
      lodash.prototype.chain = wrapperChain;
      lodash.prototype.commit = wrapperCommit;
      lodash.prototype.concat = wrapperConcat;
      lodash.prototype.plant = wrapperPlant;
      lodash.prototype.reverse = wrapperReverse;
      lodash.prototype.toString = wrapperToString;
      lodash.prototype.run = lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
  
      // Add function aliases to the `lodash` wrapper.
      lodash.prototype.collect = lodash.prototype.map;
      lodash.prototype.head = lodash.prototype.first;
      lodash.prototype.select = lodash.prototype.filter;
      lodash.prototype.tail = lodash.prototype.rest;
  
      return lodash;
    }
  
    /*--------------------------------------------------------------------------*/
  
    // Export lodash.
    var _ = runInContext();
  
    // Some AMD build optimizers like r.js check for condition patterns like the following:
    if (true) {
      // Expose lodash to the global object when an AMD loader is present to avoid
      // errors in cases where lodash is loaded by a script tag and not intended
      // as an AMD module. See http://requirejs.org/docs/errors.html#mismatch for
      // more details.
      root._ = _;
  
      // Define as an anonymous module so, through path mapping, it can be
      // referenced as the "underscore" module.
      !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
        return _;
      }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
    // Check for `exports` after `define` in case a build optimizer adds an `exports` object.
    else if (freeExports && freeModule) {
      // Export for Node.js or RingoJS.
      if (moduleExports) {
        (freeModule.exports = _)._ = _;
      }
      // Export for Rhino with CommonJS support.
      else {
        freeExports._ = _;
      }
    }
    else {
      // Export for a browser or Rhino.
      root._ = _;
    }
  }.call(this));
  
  /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(95)(module), (function() { return this; }())))

/***/ },
/* 24 */
/***/ function(module, exports) {

  module.exports = function(it){
    if(typeof it != 'function')throw TypeError(it + ' is not a function!');
    return it;
  };

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

  var ctx         = __webpack_require__(18)
    , call        = __webpack_require__(65)
    , isArrayIter = __webpack_require__(62)
    , anObject    = __webpack_require__(4)
    , toLength    = __webpack_require__(8)
    , getIterFn   = __webpack_require__(76);
  module.exports = function(iterable, entries, fn, that){
    var iterFn = getIterFn(iterable)
      , f      = ctx(fn, that, entries ? 2 : 1)
      , index  = 0
      , length, step, iterator;
    if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
    // fast case for arrays with default iterator
    if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
      entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
      call(iterator, f, step.value, entries);
    }
  };

/***/ },
/* 26 */
/***/ function(module, exports) {

  module.exports = {};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

  var has  = __webpack_require__(7)
    , hide = __webpack_require__(10)
    , TAG  = __webpack_require__(6)('toStringTag');
  
  module.exports = function(it, tag, stat){
    if(it && !has(it = stat ? it : it.prototype, TAG))hide(it, TAG, tag);
  };

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

  var toInteger = __webpack_require__(29)
    , max       = Math.max
    , min       = Math.min;
  module.exports = function(index, length){
    index = toInteger(index);
    return index < 0 ? max(index + length, 0) : min(index, length);
  };

/***/ },
/* 29 */
/***/ function(module, exports) {

  // 7.1.4 ToInteger
  var ceil  = Math.ceil
    , floor = Math.floor;
  module.exports = function(it){
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _constantsCommonConstants = __webpack_require__(49);
  
  var _constantsCommonConstants2 = _interopRequireDefault(_constantsCommonConstants);
  
  var cartData = {};
  var qty = 1;
  var chengeEvent = undefined;
  var chengeCallbacks = [];
  var CHANGE_EVENT = 'change';
  
  var CommonStore = {
  
    getCartData: function getCartData() {
      return cartData;
    },
  
    getQty: function getQty() {
      return qty;
    },
  
    emitChange: function emitChange() {
      document.dispatchEvent(chengeEvent);
    },
  
    onChange: function onChange(callback, context) {
      chengeCallbacks.push({ callback: callback, context: context });
      chengeEvent = new CustomEvent(CHANGE_EVENT, {
        detail: callback
      });
    },
  
    registerEvents: function registerEvents() {
      var _this = this;
  
      document.addEventListener(CHANGE_EVENT, function () {
        chengeCallbacks.each(function (cb) {
          var e = cb.callback.bind(cb.context);
          e();
        });
      });
  
      document.addEventListener(_constantsCommonConstants2['default'].ADD_TO_CART, function (event) {
        cartData = event.detail;
        qty = 1;
        _this.emitChange();
      });
  
      document.addEventListener(_constantsCommonConstants2['default'].CHANGE_PRODUCT_QTY, function (event) {
        qty = event.detail.elem.value;
        _this.emitChange();
      });
  
      document.addEventListener(_constantsCommonConstants2['default'].LOADER, function () {
        _this.emitChange();
      });
    }
  };
  
  exports['default'] = CommonStore;
  module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

  // 0 -> Array#forEach
  // 1 -> Array#map
  // 2 -> Array#filter
  // 3 -> Array#some
  // 4 -> Array#every
  // 5 -> Array#find
  // 6 -> Array#findIndex
  var ctx      = __webpack_require__(18)
    , IObject  = __webpack_require__(36)
    , toObject = __webpack_require__(19)
    , toLength = __webpack_require__(8);
  module.exports = function(TYPE){
    var IS_MAP        = TYPE == 1
      , IS_FILTER     = TYPE == 2
      , IS_SOME       = TYPE == 3
      , IS_EVERY      = TYPE == 4
      , IS_FIND_INDEX = TYPE == 6
      , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX;
    return function($this, callbackfn, that){
      var O      = toObject($this)
        , self   = IObject(O)
        , f      = ctx(callbackfn, that, 3)
        , length = toLength(self.length)
        , index  = 0
        , result = IS_MAP ? Array(length) : IS_FILTER ? [] : undefined
        , val, res;
      for(;length > index; index++)if(NO_HOLES || index in self){
        val = self[index];
        res = f(val, index, O);
        if(TYPE){
          if(IS_MAP)result[index] = res;            // map
          else if(res)switch(TYPE){
            case 3: return true;                    // some
            case 5: return val;                     // find
            case 6: return index;                   // findIndex
            case 2: result.push(val);               // filter
          } else if(IS_EVERY)return false;          // every
        }
      }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
    };
  };

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

  // getting tag from 19.1.3.6 Object.prototype.toString()
  var cof = __webpack_require__(17)
    , TAG = __webpack_require__(6)('toStringTag')
    // ES3 wrong here
    , ARG = cof(function(){ return arguments; }()) == 'Arguments';
  
  module.exports = function(it){
    var O, T, B;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
      // builtinTag case
      : ARG ? cof(O)
      // ES3 arguments fallback
      : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var global     = __webpack_require__(5)
    , $def       = __webpack_require__(1)
    , BUGGY      = __webpack_require__(64)
    , forOf      = __webpack_require__(25)
    , strictNew  = __webpack_require__(39);
  
  module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
    var Base  = global[NAME]
      , C     = Base
      , ADDER = IS_MAP ? 'set' : 'add'
      , proto = C && C.prototype
      , O     = {};
    var fixMethod = function(KEY){
      var fn = proto[KEY];
      __webpack_require__(12)(proto, KEY,
        KEY == 'delete' ? function(a){ return fn.call(this, a === 0 ? 0 : a); }
        : KEY == 'has' ? function has(a){ return fn.call(this, a === 0 ? 0 : a); }
        : KEY == 'get' ? function get(a){ return fn.call(this, a === 0 ? 0 : a); }
        : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
      );
    };
    if(typeof C != 'function' || !(IS_WEAK || !BUGGY && proto.forEach && proto.entries)){
      // create collection constructor
      C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
      __webpack_require__(37)(C.prototype, methods);
    } else {
      var inst  = new C
        , chain = inst[ADDER](IS_WEAK ? {} : -0, 1)
        , buggyZero;
      // wrap for init collections from iterable
      if(!__webpack_require__(42)(function(iter){ new C(iter); })){ // eslint-disable-line no-new
        C = wrapper(function(target, iterable){
          strictNew(target, C, NAME);
          var that = new Base;
          if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
          return that;
        });
        C.prototype = proto;
        proto.constructor = C;
      }
      IS_WEAK || inst.forEach(function(val, key){
        buggyZero = 1 / key === -Infinity;
      });
      // fix converting -0 key to +0
      if(buggyZero){
        fixMethod('delete');
        fixMethod('has');
        IS_MAP && fixMethod('get');
      }
      // + fix .add & .set for chaining
      if(buggyZero || chain !== inst)fixMethod(ADDER);
      // weak collections should not contains .clear method
      if(IS_WEAK && proto.clear)delete proto.clear;
    }
  
    __webpack_require__(27)(C, NAME);
  
    O[NAME] = C;
    $def($def.G + $def.W + $def.F * (C != Base), O);
  
    if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);
  
    return C;
  };

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  module.exports = function(KEY, length, exec){
    var defined  = __webpack_require__(16)
      , SYMBOL   = __webpack_require__(6)(KEY)
      , original = ''[KEY];
    if(__webpack_require__(9)(function(){
      var O = {};
      O[SYMBOL] = function(){ return 7; };
      return ''[KEY](O) != 7;
    })){
      __webpack_require__(12)(String.prototype, KEY, exec(defined, SYMBOL, original));
      __webpack_require__(10)(RegExp.prototype, SYMBOL, length == 2
        // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
        // 21.2.5.11 RegExp.prototype[@@split](string, limit)
        ? function(string, arg){ return original.call(string, this, arg); }
        // 21.2.5.6 RegExp.prototype[@@match](string)
        // 21.2.5.9 RegExp.prototype[@@search](string)
        : function(string){ return original.call(string, this); }
      );
    }
  };

/***/ },
/* 35 */
/***/ function(module, exports) {

  // fast apply, http://jsperf.lnkit.com/fast-apply/5
  module.exports = function(fn, args, that){
    var un = that === undefined;
    switch(args.length){
      case 0: return un ? fn()
                        : fn.call(that);
      case 1: return un ? fn(args[0])
                        : fn.call(that, args[0]);
      case 2: return un ? fn(args[0], args[1])
                        : fn.call(that, args[0], args[1]);
      case 3: return un ? fn(args[0], args[1], args[2])
                        : fn.call(that, args[0], args[1], args[2]);
      case 4: return un ? fn(args[0], args[1], args[2], args[3])
                        : fn.call(that, args[0], args[1], args[2], args[3]);
    } return              fn.apply(that, args);
  };

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

  // indexed object, fallback for non-array-like ES3 strings
  var cof = __webpack_require__(17);
  module.exports = 0 in Object('z') ? Object : function(it){
    return cof(it) == 'String' ? it.split('') : Object(it);
  };

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

  var $redef = __webpack_require__(12);
  module.exports = function(target, src){
    for(var key in src)$redef(target, key, src[key]);
    return target;
  };

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $       = __webpack_require__(2)
    , SPECIES = __webpack_require__(6)('species');
  module.exports = function(C){
    if(__webpack_require__(13) && !(SPECIES in C))$.setDesc(C, SPECIES, {
      configurable: true,
      get: function(){ return this; }
    });
  };

/***/ },
/* 39 */
/***/ function(module, exports) {

  module.exports = function(it, Constructor, name){
    if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
    return it;
  };

/***/ },
/* 40 */
/***/ function(module, exports) {

  // 20.2.2.14 Math.expm1(x)
  module.exports = Math.expm1 || function expm1(x){
    return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
  };

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var LIBRARY         = __webpack_require__(43)
    , $def            = __webpack_require__(1)
    , $redef          = __webpack_require__(12)
    , hide            = __webpack_require__(10)
    , has             = __webpack_require__(7)
    , SYMBOL_ITERATOR = __webpack_require__(6)('iterator')
    , Iterators       = __webpack_require__(26)
    , FF_ITERATOR     = '@@iterator'
    , KEYS            = 'keys'
    , VALUES          = 'values';
  var returnThis = function(){ return this; };
  module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE){
    __webpack_require__(66)(Constructor, NAME, next);
    var createMethod = function(kind){
      switch(kind){
        case KEYS: return function keys(){ return new Constructor(this, kind); };
        case VALUES: return function values(){ return new Constructor(this, kind); };
      } return function entries(){ return new Constructor(this, kind); };
    };
    var TAG      = NAME + ' Iterator'
      , proto    = Base.prototype
      , _native  = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
      , _default = _native || createMethod(DEFAULT)
      , methods, key;
    // Fix native
    if(_native){
      var IteratorPrototype = __webpack_require__(2).getProto(_default.call(new Base));
      // Set @@toStringTag to native iterators
      __webpack_require__(27)(IteratorPrototype, TAG, true);
      // FF fix
      if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, SYMBOL_ITERATOR, returnThis);
    }
    // Define iterator
    if(!LIBRARY || FORCE)hide(proto, SYMBOL_ITERATOR, _default);
    // Plug for library
    Iterators[NAME] = _default;
    Iterators[TAG]  = returnThis;
    if(DEFAULT){
      methods = {
        keys:    IS_SET            ? _default : createMethod(KEYS),
        values:  DEFAULT == VALUES ? _default : createMethod(VALUES),
        entries: DEFAULT != VALUES ? _default : createMethod('entries')
      };
      if(FORCE)for(key in methods){
        if(!(key in proto))$redef(proto, key, methods[key]);
      } else $def($def.P + $def.F * __webpack_require__(64), NAME, methods);
    }
  };

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

  var SYMBOL_ITERATOR = __webpack_require__(6)('iterator')
    , SAFE_CLOSING    = false;
  try {
    var riter = [7][SYMBOL_ITERATOR]();
    riter['return'] = function(){ SAFE_CLOSING = true; };
    Array.from(riter, function(){ throw 2; });
  } catch(e){ /* empty */ }
  module.exports = function(exec){
    if(!SAFE_CLOSING)return false;
    var safe = false;
    try {
      var arr  = [7]
        , iter = arr[SYMBOL_ITERATOR]();
      iter.next = function(){ safe = true; };
      arr[SYMBOL_ITERATOR] = function(){ return iter; };
      exec(arr);
    } catch(e){ /* empty */ }
    return safe;
  };

/***/ },
/* 43 */
/***/ function(module, exports) {

  module.exports = false;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

  // Works with __proto__ only. Old v8 can't work with null proto objects.
  /* eslint-disable no-proto */
  var getDesc  = __webpack_require__(2).getDesc
    , isObject = __webpack_require__(3)
    , anObject = __webpack_require__(4);
  var check = function(O, proto){
    anObject(O);
    if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
  };
  module.exports = {
    set: Object.setPrototypeOf || ('__proto__' in {} // eslint-disable-line
      ? function(buggy, set){
          try {
            set = __webpack_require__(18)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
            set({}, []);
          } catch(e){ buggy = true; }
          return function setPrototypeOf(O, proto){
            check(O, proto);
            if(buggy)O.__proto__ = proto;
            else set(O, proto);
            return O;
          };
        }()
      : undefined),
    check: check
  };

/***/ },
/* 45 */
/***/ function(module, exports) {

  // 20.2.2.28 Math.sign(x)
  module.exports = Math.sign || function sign(x){
    return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
  };

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

  // true  -> String#at
  // false -> String#codePointAt
  var toInteger = __webpack_require__(29)
    , defined   = __webpack_require__(16);
  module.exports = function(TO_STRING){
    return function(that, pos){
      var s = String(defined(that))
        , i = toInteger(pos)
        , l = s.length
        , a, b;
      if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l
        || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
          ? TO_STRING ? s.charAt(i) : a
          : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

  // helper for String#{startsWith, endsWith, includes}
  var defined = __webpack_require__(16)
    , cof     = __webpack_require__(17);
  
  module.exports = function(that, searchString, NAME){
    if(cof(searchString) == 'RegExp')throw TypeError('String#' + NAME + " doesn't accept regex!");
    return String(defined(that));
  };

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

  // 1 -> String#trimLeft
  // 2 -> String#trimRight
  // 3 -> String#trim
  var trim = function(string, TYPE){
    string = String(defined(string));
    if(TYPE & 1)string = string.replace(ltrim, '');
    if(TYPE & 2)string = string.replace(rtrim, '');
    return string;
  };
  
  var $def    = __webpack_require__(1)
    , defined = __webpack_require__(16)
    , spaces  = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
        '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF'
    , space   = '[' + spaces + ']'
    , non     = '\u200b\u0085'
    , ltrim   = RegExp('^' + space + space + '*')
    , rtrim   = RegExp(space + space + '*$');
  
  module.exports = function(KEY, exec){
    var exp  = {};
    exp[KEY] = exec(trim);
    $def($def.P + $def.F * __webpack_require__(9)(function(){
      return !!spaces[KEY]() || non[KEY]() != non;
    }), 'String', exp);
  };

/***/ },
/* 49 */
/***/ function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports['default'] = {
    'ADD_TO_CART': 'ADD_TO_CART',
    'CHANGE_PRODUCT_QTY': 'CHANGE_PRODUCT_QTY',
    'LOADER': 'LOADER',
    'LOADED': 'LOADED'
  };
  module.exports = exports['default'];

/***/ },
/* 50 */
/***/ function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function withStyles(styles) {
    return function () {
  
      var style = undefined;
      style = document.createElement('style');
      style.setAttribute('type', 'text/css');
      style.innerHTML = styles.toString();
      document.getElementsByTagName('head')[0].appendChild(style);
    };
  }
  
  exports['default'] = withStyles;
  module.exports = exports['default'];

/***/ },
/* 51 */
/***/ function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];
  
  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};
  
  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  /**
   * Merge two attribute objects giving precedence
   * to values in object `b`. Classes are special-cased
   * allowing for arrays and merging/joining appropriately
   * resulting in a string.
   *
   * @param {Object} a
   * @param {Object} b
   * @return {Object} a
   * @api private
   */
  
  exports.merge = function merge(a, b) {
    if (arguments.length === 1) {
      var attrs = a[0];
      for (var i = 1; i < a.length; i++) {
        attrs = merge(attrs, a[i]);
      }
      return attrs;
    }
    var ac = a['class'];
    var bc = b['class'];
  
    if (ac || bc) {
      ac = ac || [];
      bc = bc || [];
      if (!Array.isArray(ac)) ac = [ac];
      if (!Array.isArray(bc)) bc = [bc];
      a['class'] = ac.concat(bc).filter(nulls);
    }
  
    for (var key in b) {
      if (key != 'class') {
        a[key] = b[key];
      }
    }
  
    return a;
  };
  
  /**
   * Filter null `val`s.
   *
   * @param {*} val
   * @return {Boolean}
   * @api private
   */
  
  function nulls(val) {
    return val != null && val !== '';
  }
  
  /**
   * join array as classes.
   *
   * @param {*} val
   * @return {String}
   */
  exports.joinClasses = joinClasses;
  function joinClasses(val) {
    return (Array.isArray(val) ? val.map(joinClasses) :
      (val && typeof val === 'object') ? Object.keys(val).filter(function (key) { return val[key]; }) :
      [val]).filter(nulls).join(' ');
  }
  
  /**
   * Render the given classes.
   *
   * @param {Array} classes
   * @param {Array.<Boolean>} escaped
   * @return {String}
   */
  exports.cls = function cls(classes, escaped) {
    var buf = [];
    for (var i = 0; i < classes.length; i++) {
      if (escaped && escaped[i]) {
        buf.push(exports.escape(joinClasses([classes[i]])));
      } else {
        buf.push(joinClasses(classes[i]));
      }
    }
    var text = joinClasses(buf);
    if (text.length) {
      return ' class="' + text + '"';
    } else {
      return '';
    }
  };
  
  
  exports.style = function (val) {
    if (val && typeof val === 'object') {
      return Object.keys(val).map(function (style) {
        return style + ':' + val[style];
      }).join(';');
    } else {
      return val;
    }
  };
  /**
   * Render the given attribute.
   *
   * @param {String} key
   * @param {String} val
   * @param {Boolean} escaped
   * @param {Boolean} terse
   * @return {String}
   */
  exports.attr = function attr(key, val, escaped, terse) {
    if (key === 'style') {
      val = exports.style(val);
    }
    if ('boolean' == typeof val || null == val) {
      if (val) {
        return ' ' + (terse ? key : key + '="' + key + '"');
      } else {
        return '';
      }
    } else if (0 == key.indexOf('data') && 'string' != typeof val) {
      if (JSON.stringify(val).indexOf('&') !== -1) {
        console.warn('Since Jade 2.0.0, ampersands (`&`) in data attributes ' +
                     'will be escaped to `&amp;`');
      };
      if (val && typeof val.toISOString === 'function') {
        console.warn('Jade will eliminate the double quotes around dates in ' +
                     'ISO form after 2.0.0');
      }
      return ' ' + key + "='" + JSON.stringify(val).replace(/'/g, '&apos;') + "'";
    } else if (escaped) {
      if (val && typeof val.toISOString === 'function') {
        console.warn('Jade will stringify dates in ISO form after 2.0.0');
      }
      return ' ' + key + '="' + exports.escape(val) + '"';
    } else {
      if (val && typeof val.toISOString === 'function') {
        console.warn('Jade will stringify dates in ISO form after 2.0.0');
      }
      return ' ' + key + '="' + val + '"';
    }
  };
  
  /**
   * Render the given attributes object.
   *
   * @param {Object} obj
   * @param {Object} escaped
   * @return {String}
   */
  exports.attrs = function attrs(obj, terse){
    var buf = [];
  
    var keys = Object.keys(obj);
  
    if (keys.length) {
      for (var i = 0; i < keys.length; ++i) {
        var key = keys[i]
          , val = obj[key];
  
        if ('class' == key) {
          if (val = joinClasses(val)) {
            buf.push(' ' + key + '="' + val + '"');
          }
        } else {
          buf.push(exports.attr(key, val, false, terse));
        }
      }
    }
  
    return buf.join('');
  };
  
  /**
   * Escape the given string of `html`.
   *
   * @param {String} html
   * @return {String}
   * @api private
   */
  
  var jade_encode_html_rules = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;'
  };
  var jade_match_html = /[&<>"]/g;
  
  function jade_encode_char(c) {
    return jade_encode_html_rules[c] || c;
  }
  
  exports.escape = jade_escape;
  function jade_escape(html){
    var result = String(html).replace(jade_match_html, jade_encode_char);
    if (result === '' + html) return html;
    else return result;
  };
  
  /**
   * Re-throw the given `err` in context to the
   * the jade in `filename` at the given `lineno`.
   *
   * @param {Error} err
   * @param {String} filename
   * @param {String} lineno
   * @api private
   */
  
  exports.rethrow = function rethrow(err, filename, lineno, str){
    if (!(err instanceof Error)) throw err;
    if ((typeof window != 'undefined' || !filename) && !str) {
      err.message += ' on line ' + lineno;
      throw err;
    }
    try {
      str = str || __webpack_require__(209).readFileSync(filename, 'utf8')
    } catch (ex) {
      rethrow(err, null, lineno)
    }
    var context = 3
      , lines = str.split('\n')
      , start = Math.max(lineno - context, 0)
      , end = Math.min(lines.length, lineno + context);
  
    // Error context
    var context = lines.slice(start, end).map(function(line, i){
      var curr = i + start + 1;
      return (curr == lineno ? '  > ' : '    ')
        + curr
        + '| '
        + line;
    }).join('\n');
  
    // Alter exception message
    err.path = filename;
    err.message = (filename || 'Jade') + ':' + lineno
      + '\n' + context + '\n\n' + err.message;
    throw err;
  };
  
  exports.DebugItem = function DebugItem(lineno, filename) {
    this.lineno = lineno;
    this.filename = filename;
  }


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

  // false -> Array#indexOf
  // true  -> Array#includes
  var toIObject = __webpack_require__(14)
    , toLength  = __webpack_require__(8)
    , toIndex   = __webpack_require__(28);
  module.exports = function(IS_INCLUDES){
    return function($this, el, fromIndex){
      var O      = toIObject($this)
        , length = toLength(O.length)
        , index  = toIndex(fromIndex, length)
        , value;
      // Array#includes uses SameValueZero equality algorithm
      if(IS_INCLUDES && el != el)while(length > index){
        value = O[index++];
        if(value != value)return true;
      // Array#toIndex ignores holes, Array#includes - not
      } else for(;length > index; index++)if(IS_INCLUDES || index in O){
        if(O[index] === el)return IS_INCLUDES || index;
      } return !IS_INCLUDES && -1;
    };
  };

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $            = __webpack_require__(2)
    , hide         = __webpack_require__(10)
    , ctx          = __webpack_require__(18)
    , species      = __webpack_require__(38)
    , strictNew    = __webpack_require__(39)
    , defined      = __webpack_require__(16)
    , forOf        = __webpack_require__(25)
    , step         = __webpack_require__(67)
    , ID           = __webpack_require__(21)('id')
    , $has         = __webpack_require__(7)
    , isObject     = __webpack_require__(3)
    , isExtensible = Object.isExtensible || isObject
    , SUPPORT_DESC = __webpack_require__(13)
    , SIZE         = SUPPORT_DESC ? '_s' : 'size'
    , id           = 0;
  
  var fastKey = function(it, create){
    // return primitive with prefix
    if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if(!$has(it, ID)){
      // can't set id to frozen object
      if(!isExtensible(it))return 'F';
      // not necessary to add id
      if(!create)return 'E';
      // add missing object id
      hide(it, ID, ++id);
    // return object id with prefix
    } return 'O' + it[ID];
  };
  
  var getEntry = function(that, key){
    // fast case
    var index = fastKey(key), entry;
    if(index !== 'F')return that._i[index];
    // frozen object case
    for(entry = that._f; entry; entry = entry.n){
      if(entry.k == key)return entry;
    }
  };
  
  module.exports = {
    getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
      var C = wrapper(function(that, iterable){
        strictNew(that, C, NAME);
        that._i = $.create(null); // index
        that._f = undefined;      // first entry
        that._l = undefined;      // last entry
        that[SIZE] = 0;           // size
        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
      });
      __webpack_require__(37)(C.prototype, {
        // 23.1.3.1 Map.prototype.clear()
        // 23.2.3.2 Set.prototype.clear()
        clear: function clear(){
          for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
            entry.r = true;
            if(entry.p)entry.p = entry.p.n = undefined;
            delete data[entry.i];
          }
          that._f = that._l = undefined;
          that[SIZE] = 0;
        },
        // 23.1.3.3 Map.prototype.delete(key)
        // 23.2.3.4 Set.prototype.delete(value)
        'delete': function(key){
          var that  = this
            , entry = getEntry(that, key);
          if(entry){
            var next = entry.n
              , prev = entry.p;
            delete that._i[entry.i];
            entry.r = true;
            if(prev)prev.n = next;
            if(next)next.p = prev;
            if(that._f == entry)that._f = next;
            if(that._l == entry)that._l = prev;
            that[SIZE]--;
          } return !!entry;
        },
        // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
        // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
        forEach: function forEach(callbackfn /*, that = undefined */){
          var f = ctx(callbackfn, arguments[1], 3)
            , entry;
          while(entry = entry ? entry.n : this._f){
            f(entry.v, entry.k, this);
            // revert to the last existing entry
            while(entry && entry.r)entry = entry.p;
          }
        },
        // 23.1.3.7 Map.prototype.has(key)
        // 23.2.3.7 Set.prototype.has(value)
        has: function has(key){
          return !!getEntry(this, key);
        }
      });
      if(SUPPORT_DESC)$.setDesc(C.prototype, 'size', {
        get: function(){
          return defined(this[SIZE]);
        }
      });
      return C;
    },
    def: function(that, key, value){
      var entry = getEntry(that, key)
        , prev, index;
      // change existing entry
      if(entry){
        entry.v = value;
      // create new entry
      } else {
        that._l = entry = {
          i: index = fastKey(key, true), // <- index
          k: key,                        // <- key
          v: value,                      // <- value
          p: prev = that._l,             // <- previous entry
          n: undefined,                  // <- next entry
          r: false                       // <- removed
        };
        if(!that._f)that._f = entry;
        if(prev)prev.n = entry;
        that[SIZE]++;
        // add to index
        if(index !== 'F')that._i[index] = entry;
      } return that;
    },
    getEntry: getEntry,
    setStrong: function(C, NAME, IS_MAP){
      // add .keys, .values, .entries, [@@iterator]
      // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
      __webpack_require__(41)(C, NAME, function(iterated, kind){
        this._t = iterated;  // target
        this._k = kind;      // kind
        this._l = undefined; // previous
      }, function(){
        var that  = this
          , kind  = that._k
          , entry = that._l;
        // revert to the last existing entry
        while(entry && entry.r)entry = entry.p;
        // get next entry
        if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
          // or finish the iteration
          that._t = undefined;
          return step(1);
        }
        // return step by kind
        if(kind == 'keys'  )return step(0, entry.k);
        if(kind == 'values')return step(0, entry.v);
        return step(0, [entry.k, entry.v]);
      }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);
  
      // add [@@species], 23.1.2.2, 23.2.2.2
      species(C);
      species(__webpack_require__(15)[NAME]); // for wrapper
    }
  };

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

  // https://github.com/DavidBruant/Map-Set.prototype.toJSON
  var forOf   = __webpack_require__(25)
    , classof = __webpack_require__(32);
  module.exports = function(NAME){
    return function toJSON(){
      if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
      var arr = [];
      forOf(this, false, arr.push, arr);
      return arr;
    };
  };

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var hide         = __webpack_require__(10)
    , anObject     = __webpack_require__(4)
    , strictNew    = __webpack_require__(39)
    , forOf        = __webpack_require__(25)
    , method       = __webpack_require__(31)
    , WEAK         = __webpack_require__(21)('weak')
    , isObject     = __webpack_require__(3)
    , $has         = __webpack_require__(7)
    , isExtensible = Object.isExtensible || isObject
    , find         = method(5)
    , findIndex    = method(6)
    , id           = 0;
  
  // fallback for frozen keys
  var frozenStore = function(that){
    return that._l || (that._l = new FrozenStore);
  };
  var FrozenStore = function(){
    this.a = [];
  };
  var findFrozen = function(store, key){
    return find(store.a, function(it){
      return it[0] === key;
    });
  };
  FrozenStore.prototype = {
    get: function(key){
      var entry = findFrozen(this, key);
      if(entry)return entry[1];
    },
    has: function(key){
      return !!findFrozen(this, key);
    },
    set: function(key, value){
      var entry = findFrozen(this, key);
      if(entry)entry[1] = value;
      else this.a.push([key, value]);
    },
    'delete': function(key){
      var index = findIndex(this.a, function(it){
        return it[0] === key;
      });
      if(~index)this.a.splice(index, 1);
      return !!~index;
    }
  };
  
  module.exports = {
    getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
      var C = wrapper(function(that, iterable){
        strictNew(that, C, NAME);
        that._i = id++;      // collection id
        that._l = undefined; // leak store for frozen objects
        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
      });
      __webpack_require__(37)(C.prototype, {
        // 23.3.3.2 WeakMap.prototype.delete(key)
        // 23.4.3.3 WeakSet.prototype.delete(value)
        'delete': function(key){
          if(!isObject(key))return false;
          if(!isExtensible(key))return frozenStore(this)['delete'](key);
          return $has(key, WEAK) && $has(key[WEAK], this._i) && delete key[WEAK][this._i];
        },
        // 23.3.3.4 WeakMap.prototype.has(key)
        // 23.4.3.4 WeakSet.prototype.has(value)
        has: function has(key){
          if(!isObject(key))return false;
          if(!isExtensible(key))return frozenStore(this).has(key);
          return $has(key, WEAK) && $has(key[WEAK], this._i);
        }
      });
      return C;
    },
    def: function(that, key, value){
      if(!isExtensible(anObject(key))){
        frozenStore(that).set(key, value);
      } else {
        $has(key, WEAK) || hide(key, WEAK, {});
        key[WEAK][that._i] = value;
      } return that;
    },
    frozenStore: frozenStore,
    WEAK: WEAK
  };

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

  var isObject = __webpack_require__(3)
    , document = __webpack_require__(5).document
    // in old IE typeof document.createElement is 'object'
    , is = isObject(document) && isObject(document.createElement);
  module.exports = function(it){
    return is ? document.createElement(it) : {};
  };

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

  // all enumerable object keys, includes symbols
  var $ = __webpack_require__(2);
  module.exports = function(it){
    var keys       = $.getKeys(it)
      , getSymbols = $.getSymbols;
    if(getSymbols){
      var symbols = getSymbols(it)
        , isEnum  = $.isEnum
        , i       = 0
        , key;
      while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
    }
    return keys;
  };

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // 21.2.5.3 get RegExp.prototype.flags
  var anObject = __webpack_require__(4);
  module.exports = function(){
    var that   = anObject(this)
      , result = '';
    if(that.global)result += 'g';
    if(that.ignoreCase)result += 'i';
    if(that.multiline)result += 'm';
    if(that.unicode)result += 'u';
    if(that.sticky)result += 'y';
    return result;
  };

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

  // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
  var toString  = {}.toString
    , toIObject = __webpack_require__(14)
    , getNames  = __webpack_require__(2).getNames;
  
  var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
    ? Object.getOwnPropertyNames(window) : [];
  
  var getWindowNames = function(it){
    try {
      return getNames(it);
    } catch(e){
      return windowNames.slice();
    }
  };
  
  module.exports.get = function getOwnPropertyNames(it){
    if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
    return getNames(toIObject(it));
  };

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__(5).document && document.documentElement;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

  // check on default Array iterator
  var Iterators = __webpack_require__(26)
    , ITERATOR  = __webpack_require__(6)('iterator');
  module.exports = function(it){
    return (Iterators.Array || Array.prototype[ITERATOR]) === it;
  };

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

  // 20.1.2.3 Number.isInteger(number)
  var isObject = __webpack_require__(3)
    , floor    = Math.floor;
  module.exports = function isInteger(it){
    return !isObject(it) && isFinite(it) && floor(it) === it;
  };

/***/ },
/* 64 */
/***/ function(module, exports) {

  // Safari has buggy iterators w/o `next`
  module.exports = 'keys' in [] && !('next' in [].keys());

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

  // call something on iterator step with safe closing on error
  var anObject = __webpack_require__(4);
  module.exports = function(iterator, fn, value, entries){
    try {
      return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    // 7.4.6 IteratorClose(iterator, completion)
    } catch(e){
      var ret = iterator['return'];
      if(ret !== undefined)anObject(ret.call(iterator));
      throw e;
    }
  };

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $ = __webpack_require__(2)
    , IteratorPrototype = {};
  
  // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
  __webpack_require__(10)(IteratorPrototype, __webpack_require__(6)('iterator'), function(){ return this; });
  
  module.exports = function(Constructor, NAME, next){
    Constructor.prototype = $.create(IteratorPrototype, {next: __webpack_require__(20)(1,next)});
    __webpack_require__(27)(Constructor, NAME + ' Iterator');
  };

/***/ },
/* 67 */
/***/ function(module, exports) {

  module.exports = function(done, value){
    return {value: value, done: !!done};
  };

/***/ },
/* 68 */
/***/ function(module, exports) {

  // 20.2.2.20 Math.log1p(x)
  module.exports = Math.log1p || function log1p(x){
    return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
  };

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

  var $         = __webpack_require__(2)
    , toIObject = __webpack_require__(14);
  module.exports = function(isEntries){
    return function(it){
      var O      = toIObject(it)
        , keys   = $.getKeys(O)
        , length = keys.length
        , i      = 0
        , result = Array(length)
        , key;
      if(isEntries)while(length > i)result[i] = [key = keys[i++], O[key]];
      else while(length > i)result[i] = O[keys[i++]];
      return result;
    };
  };

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

  // all object keys, includes non-enumerable and symbols
  var $        = __webpack_require__(2)
    , anObject = __webpack_require__(4);
  module.exports = function ownKeys(it){
    var keys       = $.getNames(anObject(it))
      , getSymbols = $.getSymbols;
    return getSymbols ? keys.concat(getSymbols(it)) : keys;
  };

/***/ },
/* 71 */
/***/ function(module, exports) {

  module.exports = Object.is || function is(x, y){
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  };

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

  var global = __webpack_require__(5)
    , SHARED = '__core-js_shared__'
    , store  = global[SHARED] || (global[SHARED] = {});
  module.exports = function(key){
    return store[key] || (store[key] = {});
  };

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

  // https://github.com/ljharb/proposal-string-pad-left-right
  var toLength = __webpack_require__(8)
    , repeat   = __webpack_require__(74)
    , defined  = __webpack_require__(16);
  
  module.exports = function(that, maxLength, fillString, left){
    var S            = String(defined(that))
      , stringLength = S.length
      , fillStr      = fillString === undefined ? ' ' : String(fillString)
      , intMaxLength = toLength(maxLength);
    if(intMaxLength <= stringLength)return S;
    if(fillStr == '')fillStr = ' ';
    var fillLen = intMaxLength - stringLength
      , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
    if(stringFiller.length > fillLen)stringFiller = left
      ? stringFiller.slice(stringFiller.length - fillLen)
      : stringFiller.slice(0, fillLen);
    return left ? stringFiller + S : S + stringFiller;
  };

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var toInteger = __webpack_require__(29)
    , defined   = __webpack_require__(16);
  
  module.exports = function repeat(count){
    var str = String(defined(this))
      , res = ''
      , n   = toInteger(count);
    if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
    for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
    return res;
  };

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var ctx                = __webpack_require__(18)
    , invoke             = __webpack_require__(35)
    , html               = __webpack_require__(61)
    , cel                = __webpack_require__(57)
    , global             = __webpack_require__(5)
    , process            = global.process
    , setTask            = global.setImmediate
    , clearTask          = global.clearImmediate
    , MessageChannel     = global.MessageChannel
    , counter            = 0
    , queue              = {}
    , ONREADYSTATECHANGE = 'onreadystatechange'
    , defer, channel, port;
  var run = function(){
    var id = +this;
    if(queue.hasOwnProperty(id)){
      var fn = queue[id];
      delete queue[id];
      fn();
    }
  };
  var listner = function(event){
    run.call(event.data);
  };
  // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
  if(!setTask || !clearTask){
    setTask = function setImmediate(fn){
      var args = [], i = 1;
      while(arguments.length > i)args.push(arguments[i++]);
      queue[++counter] = function(){
        invoke(typeof fn == 'function' ? fn : Function(fn), args);
      };
      defer(counter);
      return counter;
    };
    clearTask = function clearImmediate(id){
      delete queue[id];
    };
    // Node.js 0.8-
    if(__webpack_require__(17)(process) == 'process'){
      defer = function(id){
        process.nextTick(ctx(run, id, 1));
      };
    // Browsers with MessageChannel, includes WebWorkers
    } else if(MessageChannel){
      channel = new MessageChannel;
      port    = channel.port2;
      channel.port1.onmessage = listner;
      defer = ctx(port.postMessage, port, 1);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScript){
      defer = function(id){
        global.postMessage(id + '', '*');
      };
      global.addEventListener('message', listner, false);
    // IE8-
    } else if(ONREADYSTATECHANGE in cel('script')){
      defer = function(id){
        html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
          html.removeChild(this);
          run.call(id);
        };
      };
    // Rest old browsers
    } else {
      defer = function(id){
        setTimeout(ctx(run, id, 1), 0);
      };
    }
  }
  module.exports = {
    set:   setTask,
    clear: clearTask
  };

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

  var classof   = __webpack_require__(32)
    , ITERATOR  = __webpack_require__(6)('iterator')
    , Iterators = __webpack_require__(26);
  module.exports = __webpack_require__(15).getIteratorMethod = function(it){
    if(it != undefined)return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
  };

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var setUnscope = __webpack_require__(22)
    , step       = __webpack_require__(67)
    , Iterators  = __webpack_require__(26)
    , toIObject  = __webpack_require__(14);
  
  // 22.1.3.4 Array.prototype.entries()
  // 22.1.3.13 Array.prototype.keys()
  // 22.1.3.29 Array.prototype.values()
  // 22.1.3.30 Array.prototype[@@iterator]()
  __webpack_require__(41)(Array, 'Array', function(iterated, kind){
    this._t = toIObject(iterated); // target
    this._i = 0;                   // next index
    this._k = kind;                // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
  }, function(){
    var O     = this._t
      , kind  = this._k
      , index = this._i++;
    if(!O || index >= O.length){
      this._t = undefined;
      return step(1);
    }
    if(kind == 'keys'  )return step(0, index);
    if(kind == 'values')return step(0, O[index]);
    return step(0, [index, O[index]]);
  }, 'values');
  
  // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
  Iterators.Arguments = Iterators.Array;
  
  setUnscope('keys');
  setUnscope('values');
  setUnscope('entries');

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _constantsCommonConstants = __webpack_require__(49);
  
  var _constantsCommonConstants2 = _interopRequireDefault(_constantsCommonConstants);
  
  var _apiCartApi = __webpack_require__(79);
  
  var _apiCartApi2 = _interopRequireDefault(_apiCartApi);
  
  function addToCart(options) {
    var cartData, _event;
  
    return regeneratorRuntime.async(function addToCart$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          context$1$0.prev = 0;
  
          document.dispatchEvent(new CustomEvent(_constantsCommonConstants2['default'].LOADER));
          context$1$0.next = 4;
          return regeneratorRuntime.awrap(_apiCartApi2['default'].addToCartUrl(options));
  
        case 4:
          cartData = context$1$0.sent;
          _event = new CustomEvent(_constantsCommonConstants2['default'].ADD_TO_CART, {
            detail: cartData
          });
  
          document.dispatchEvent(_event);
          context$1$0.next = 12;
          break;
  
        case 9:
          context$1$0.prev = 9;
          context$1$0.t0 = context$1$0['catch'](0);
  
          console.log(context$1$0.t0);
  
        case 12:
        case 'end':
          return context$1$0.stop();
      }
    }, null, this, [[0, 9]]);
  }
  
  function setInputValue(component) {
    var event = new CustomEvent(_constantsCommonConstants2['default'].CHANGE_PRODUCT_QTY, {
      detail: component
    });
    document.dispatchEvent(event);
  }
  
  exports['default'] = {
    addToCart: addToCart,
    setInputValue: setInputValue
  };
  module.exports = exports['default'];

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _superagent = __webpack_require__(92);
  
  var _superagent2 = _interopRequireDefault(_superagent);
  
  var _constantsCartConstants = __webpack_require__(83);
  
  var _constantsCartConstants2 = _interopRequireDefault(_constantsCartConstants);
  
  var CartApi = {
    addToCartUrl: function addToCartUrl(options) {
      return new Promise(function (resolve, reject) {
        _superagent2['default'].post(_constantsCartConstants2['default'].addToCartUrl).type('form').send(options).set('Accept', 'application/json').end(function (err, res) {
          if (res.body) {
            resolve(res.body);
          } else {
            reject('res.text');
          }
        });
      });
    }
  };
  
  exports['default'] = CartApi;
  module.exports = exports['default'];

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  var _lodash = __webpack_require__(23);
  
  var _lodash2 = _interopRequireDefault(_lodash);
  
  var _AddToCartButtonScss = __webpack_require__(87);
  
  var _AddToCartButtonScss2 = _interopRequireDefault(_AddToCartButtonScss);
  
  var _AddToCartButtonJade = __webpack_require__(90);
  
  var _AddToCartButtonJade2 = _interopRequireDefault(_AddToCartButtonJade);
  
  var _actionsCommonActions = __webpack_require__(78);
  
  var _actionsCommonActions2 = _interopRequireDefault(_actionsCommonActions);
  
  var _decoratorsWithStyles = __webpack_require__(50);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var _decoratorsWithEvents = __webpack_require__(84);
  
  var _decoratorsWithEvents2 = _interopRequireDefault(_decoratorsWithEvents);
  
  var _storesCommonStore = __webpack_require__(30);
  
  var _storesCommonStore2 = _interopRequireDefault(_storesCommonStore);
  
  var AddToCartButton = (function () {
    function AddToCartButton(options) {
      _classCallCheck(this, _AddToCartButton);
  
      _lodash2['default'].assign(this, options);
      this.getInitComponentData();
      this.componentWillMount();
    }
  
    _createClass(AddToCartButton, [{
      key: 'click',
      value: function click() {
        var postData = _lodash2['default'].assign(this.elem.dataset, { qty: this.componentData.qty || this.elem.dataset.qty });
        _actionsCommonActions2['default'].addToCart(postData);
      }
    }, {
      key: 'getInitComponentData',
      value: function getInitComponentData() {
        this.setComponentData('qty', _storesCommonStore2['default'].getQty());
        this.setComponentData('cart', _storesCommonStore2['default'].getCartData());
      }
    }, {
      key: 'componentWillMount',
      value: function componentWillMount() {
        _storesCommonStore2['default'].onChange(this.onChange, this);
      }
    }, {
      key: 'onChange',
      value: function onChange() {
        this.setComponentData('qty', _storesCommonStore2['default'].getQty());
        this.setComponentData('cart', _storesCommonStore2['default'].getCartData());
        this.render();
      }
    }, {
      key: 'render',
      value: function render() {
        var qty = _lodash2['default'].result(_lodash2['default'].chain(this.componentData.cart.response).where({ productId: this.elem.dataset.id }).first().value(), 'qty');
        this.elem.innerHTML = (0, _AddToCartButtonJade2['default'])({ qty: qty });
        this.setCSSClass('btn-in-cart');
      }
    }]);
  
    var _AddToCartButton = AddToCartButton;
    AddToCartButton = (0, _decoratorsWithEvents2['default'])(true)(AddToCartButton) || AddToCartButton;
    AddToCartButton = (0, _decoratorsWithStyles2['default'])(_AddToCartButtonScss2['default'])(AddToCartButton) || AddToCartButton;
    return AddToCartButton;
  })();
  
  exports['default'] = AddToCartButton;
  module.exports = exports['default'];

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  var _lodash = __webpack_require__(23);
  
  var _lodash2 = _interopRequireDefault(_lodash);
  
  var _storesCommonStore = __webpack_require__(30);
  
  var _storesCommonStore2 = _interopRequireDefault(_storesCommonStore);
  
  var _decoratorsWithStyles = __webpack_require__(50);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var _CartSidebarScss = __webpack_require__(88);
  
  var _CartSidebarScss2 = _interopRequireDefault(_CartSidebarScss);
  
  var _CartSidebarJade = __webpack_require__(91);
  
  var _CartSidebarJade2 = _interopRequireDefault(_CartSidebarJade);
  
  var CartSidebar = (function () {
    function CartSidebar(options) {
      _classCallCheck(this, _CartSidebar);
  
      _lodash2['default'].assign(this, options);
      this.componentWillMount();
    }
  
    _createClass(CartSidebar, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        _storesCommonStore2['default'].onChange(this.onChange, this);
      }
    }, {
      key: 'onChange',
      value: function onChange() {
        this.setComponentData('qty', _storesCommonStore2['default'].getQty());
        this.setComponentData('cart', _storesCommonStore2['default'].getCartData());
        this.render();
      }
    }, {
      key: 'render',
      value: function render() {
        this.toggleCSSClass('display-none');
        var totals = {
          qty: _lodash2['default'].chain(this.componentData.cart.response).pluck('qty').sum().value(),
          total: _lodash2['default'].chain(this.componentData.cart.response).map(function (item) {
            return item.qty * item.price;
          }).sum().round(2).value(),
          response: _lodash2['default'].chain(this.componentData.cart.response).sortByOrder(['updated'], ['desc']).value()
        };
        this.elem.innerHTML = (0, _CartSidebarJade2['default'])(_lodash2['default'].assign(this.componentData.cart, totals));
      }
    }]);
  
    var _CartSidebar = CartSidebar;
    CartSidebar = (0, _decoratorsWithStyles2['default'])(_CartSidebarScss2['default'])(CartSidebar) || CartSidebar;
    return CartSidebar;
  })();
  
  exports['default'] = CartSidebar;
  module.exports = exports['default'];

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  var _lodash = __webpack_require__(23);
  
  var _lodash2 = _interopRequireDefault(_lodash);
  
  var _storesCommonStore = __webpack_require__(30);
  
  var _storesCommonStore2 = _interopRequireDefault(_storesCommonStore);
  
  var Spinner = (function () {
    function Spinner(options) {
      _classCallCheck(this, Spinner);
  
      _lodash2['default'].assign(this, options);
      this.componentWillMount();
    }
  
    _createClass(Spinner, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        _storesCommonStore2['default'].onChange(this.onChange, this);
      }
    }, {
      key: 'onChange',
      value: function onChange() {
        this.render();
      }
    }, {
      key: 'render',
      value: function render() {
        this.toggleCSSClass('display-none');
      }
    }]);
  
    return Spinner;
  })();
  
  exports['default'] = Spinner;
  module.exports = exports['default'];

/***/ },
/* 83 */
/***/ function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports['default'] = {
    'addToCartUrl': '/client/cart/addToCart'
  };
  module.exports = exports['default'];

/***/ },
/* 84 */
/***/ function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  function withEventsDecorator(value) {
    function _extendClass(Target) {
      var withEvents = (function (_Target) {
        _inherits(withEvents, _Target);
  
        function withEvents(options) {
          _classCallCheck(this, withEvents);
  
          _get(Object.getPrototypeOf(withEvents.prototype), 'constructor', this).call(this, options);
          this.elem.onclick = null;
          this.elem.addEventListener('click', this.click.bind(this));
        }
  
        _createClass(withEvents, null, [{
          key: 'getValue',
          value: function getValue() {
            return value;
          }
        }]);
  
        return withEvents;
      })(Target);
  
      return withEvents;
    }
    return function (Target) {
      return _extendClass(Target);
    };
  }
  
  exports['default'] = withEventsDecorator;
  module.exports = exports['default'];

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _lodash = __webpack_require__(23);
  
  var _lodash2 = _interopRequireDefault(_lodash);
  
  var _fastclick = __webpack_require__(89);
  
  var _fastclick2 = _interopRequireDefault(_fastclick);
  
  exports['default'] = function () {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  
    var componentCounter = 0;
    var components = [];
  
    var _componentPrototype = {
      setComponentData: function setComponentData(key, data) {
        this.componentData[key] = data;
      },
      setCSSClass: function setCSSClass(class_name) {
        if (!this.elem.classList.contains(class_name)) this.elem.classList.add(class_name);
      },
      unsetCSSClass: function unsetCSSClass(class_name) {
        if (!this.elem.classList.contains(class_name)) this.elem.classList.remove(class_name);
      },
      toggleCSSClass: function toggleCSSClass(class_name) {
        this.elem.classList.toggle(class_name);
      }
    };
  
    var _componentHiddenProperties = function _componentHiddenProperties(constructor) {
      return {
        count: componentCounter,
        hash: _lodash2['default'].uniqueId('component_' + componentCounter + '_'),
        componentName: constructor.name,
        componentData: {}
      };
    };
  
    var createComponent = function createComponent(constructor, options) {
      componentCounter++;
      var hiddehOptions = _componentHiddenProperties(constructor);
      components.push(hiddehOptions);
      _lodash2['default'].assign(constructor.prototype, _componentPrototype);
      return new constructor(_lodash2['default'].assign(options, hiddehOptions));
    };
  
    var init = function init(fn) {
      var runPromise = new Promise(function (resolve) {
        if (window.addEventListener) {
          window.addEventListener('DOMContentLoaded', resolve);
        } else {
          window.attachEvent('onload', resolve);
        }
      });
  
      runPromise.then(function () {
        return _fastclick2['default'].attach(document.body);
      }).then(fn)['catch'](function (error) {
        return console.error(error);
      });
    };
  
    return {
      createComponent: createComponent,
      init: init
    };
  };
  
  module.exports = exports['default'];

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__(208);


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(51)();
  // imports
  
  
  // module
  exports.push([module.id, ".display-none {\n  display: none; }\n\n.spinner {\n  width: 40px;\n  height: 40px;\n  background-color: #333;\n  margin: 100px auto;\n  -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;\n  animation: sk-rotateplane 1.2s infinite ease-in-out; }\n\n@-webkit-keyframes sk-rotateplane {\n  0% {\n    -webkit-transform: perspective(120px); }\n  50% {\n    -webkit-transform: perspective(120px) rotateY(180deg); }\n  100% {\n    -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg); } }\n\n@keyframes sk-rotateplane {\n  0% {\n    transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg); }\n  50% {\n    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg); }\n  100% {\n    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg); } }\n\n.btn-in-cart span {\n  background: #009EFF !important; }\n", ""]);
  
  // exports


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(51)();
  // imports
  
  
  // module
  exports.push([module.id, ".display-none {\n  display: none; }\n\n.spinner {\n  width: 40px;\n  height: 40px;\n  background-color: #333;\n  margin: 100px auto;\n  -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;\n  animation: sk-rotateplane 1.2s infinite ease-in-out; }\n\n@-webkit-keyframes sk-rotateplane {\n  0% {\n    -webkit-transform: perspective(120px); }\n  50% {\n    -webkit-transform: perspective(120px) rotateY(180deg); }\n  100% {\n    -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg); } }\n\n@keyframes sk-rotateplane {\n  0% {\n    transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg); }\n  50% {\n    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg); }\n  100% {\n    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg); } }\n", ""]);
  
  // exports


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

  var __WEBPACK_AMD_DEFINE_RESULT__;;(function () {
  	'use strict';
  
  	/**
  	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
  	 *
  	 * @codingstandard ftlabs-jsv2
  	 * @copyright The Financial Times Limited [All Rights Reserved]
  	 * @license MIT License (see LICENSE.txt)
  	 */
  
  	/*jslint browser:true, node:true*/
  	/*global define, Event, Node*/
  
  
  	/**
  	 * Instantiate fast-clicking listeners on the specified layer.
  	 *
  	 * @constructor
  	 * @param {Element} layer The layer to listen on
  	 * @param {Object} [options={}] The options to override the defaults
  	 */
  	function FastClick(layer, options) {
  		var oldOnClick;
  
  		options = options || {};
  
  		/**
  		 * Whether a click is currently being tracked.
  		 *
  		 * @type boolean
  		 */
  		this.trackingClick = false;
  
  
  		/**
  		 * Timestamp for when click tracking started.
  		 *
  		 * @type number
  		 */
  		this.trackingClickStart = 0;
  
  
  		/**
  		 * The element being tracked for a click.
  		 *
  		 * @type EventTarget
  		 */
  		this.targetElement = null;
  
  
  		/**
  		 * X-coordinate of touch start event.
  		 *
  		 * @type number
  		 */
  		this.touchStartX = 0;
  
  
  		/**
  		 * Y-coordinate of touch start event.
  		 *
  		 * @type number
  		 */
  		this.touchStartY = 0;
  
  
  		/**
  		 * ID of the last touch, retrieved from Touch.identifier.
  		 *
  		 * @type number
  		 */
  		this.lastTouchIdentifier = 0;
  
  
  		/**
  		 * Touchmove boundary, beyond which a click will be cancelled.
  		 *
  		 * @type number
  		 */
  		this.touchBoundary = options.touchBoundary || 10;
  
  
  		/**
  		 * The FastClick layer.
  		 *
  		 * @type Element
  		 */
  		this.layer = layer;
  
  		/**
  		 * The minimum time between tap(touchstart and touchend) events
  		 *
  		 * @type number
  		 */
  		this.tapDelay = options.tapDelay || 200;
  
  		/**
  		 * The maximum time for a tap
  		 *
  		 * @type number
  		 */
  		this.tapTimeout = options.tapTimeout || 700;
  
  		if (FastClick.notNeeded(layer)) {
  			return;
  		}
  
  		// Some old versions of Android don't have Function.prototype.bind
  		function bind(method, context) {
  			return function() { return method.apply(context, arguments); };
  		}
  
  
  		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
  		var context = this;
  		for (var i = 0, l = methods.length; i < l; i++) {
  			context[methods[i]] = bind(context[methods[i]], context);
  		}
  
  		// Set up event handlers as required
  		if (deviceIsAndroid) {
  			layer.addEventListener('mouseover', this.onMouse, true);
  			layer.addEventListener('mousedown', this.onMouse, true);
  			layer.addEventListener('mouseup', this.onMouse, true);
  		}
  
  		layer.addEventListener('click', this.onClick, true);
  		layer.addEventListener('touchstart', this.onTouchStart, false);
  		layer.addEventListener('touchmove', this.onTouchMove, false);
  		layer.addEventListener('touchend', this.onTouchEnd, false);
  		layer.addEventListener('touchcancel', this.onTouchCancel, false);
  
  		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
  		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
  		// layer when they are cancelled.
  		if (!Event.prototype.stopImmediatePropagation) {
  			layer.removeEventListener = function(type, callback, capture) {
  				var rmv = Node.prototype.removeEventListener;
  				if (type === 'click') {
  					rmv.call(layer, type, callback.hijacked || callback, capture);
  				} else {
  					rmv.call(layer, type, callback, capture);
  				}
  			};
  
  			layer.addEventListener = function(type, callback, capture) {
  				var adv = Node.prototype.addEventListener;
  				if (type === 'click') {
  					adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
  						if (!event.propagationStopped) {
  							callback(event);
  						}
  					}), capture);
  				} else {
  					adv.call(layer, type, callback, capture);
  				}
  			};
  		}
  
  		// If a handler is already declared in the element's onclick attribute, it will be fired before
  		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
  		// adding it as listener.
  		if (typeof layer.onclick === 'function') {
  
  			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
  			// - the old one won't work if passed to addEventListener directly.
  			oldOnClick = layer.onclick;
  			layer.addEventListener('click', function(event) {
  				oldOnClick(event);
  			}, false);
  			layer.onclick = null;
  		}
  	}
  
  	/**
  	* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
  	*
  	* @type boolean
  	*/
  	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;
  
  	/**
  	 * Android requires exceptions.
  	 *
  	 * @type boolean
  	 */
  	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;
  
  
  	/**
  	 * iOS requires exceptions.
  	 *
  	 * @type boolean
  	 */
  	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;
  
  
  	/**
  	 * iOS 4 requires an exception for select elements.
  	 *
  	 * @type boolean
  	 */
  	var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);
  
  
  	/**
  	 * iOS 6.0-7.* requires the target element to be manually derived
  	 *
  	 * @type boolean
  	 */
  	var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);
  
  	/**
  	 * BlackBerry requires exceptions.
  	 *
  	 * @type boolean
  	 */
  	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;
  
  	/**
  	 * Determine whether a given element requires a native click.
  	 *
  	 * @param {EventTarget|Element} target Target DOM element
  	 * @returns {boolean} Returns true if the element needs a native click
  	 */
  	FastClick.prototype.needsClick = function(target) {
  		switch (target.nodeName.toLowerCase()) {
  
  		// Don't send a synthetic click to disabled inputs (issue #62)
  		case 'button':
  		case 'select':
  		case 'textarea':
  			if (target.disabled) {
  				return true;
  			}
  
  			break;
  		case 'input':
  
  			// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
  			if ((deviceIsIOS && target.type === 'file') || target.disabled) {
  				return true;
  			}
  
  			break;
  		case 'label':
  		case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
  		case 'video':
  			return true;
  		}
  
  		return (/\bneedsclick\b/).test(target.className);
  	};
  
  
  	/**
  	 * Determine whether a given element requires a call to focus to simulate click into element.
  	 *
  	 * @param {EventTarget|Element} target Target DOM element
  	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
  	 */
  	FastClick.prototype.needsFocus = function(target) {
  		switch (target.nodeName.toLowerCase()) {
  		case 'textarea':
  			return true;
  		case 'select':
  			return !deviceIsAndroid;
  		case 'input':
  			switch (target.type) {
  			case 'button':
  			case 'checkbox':
  			case 'file':
  			case 'image':
  			case 'radio':
  			case 'submit':
  				return false;
  			}
  
  			// No point in attempting to focus disabled inputs
  			return !target.disabled && !target.readOnly;
  		default:
  			return (/\bneedsfocus\b/).test(target.className);
  		}
  	};
  
  
  	/**
  	 * Send a click event to the specified element.
  	 *
  	 * @param {EventTarget|Element} targetElement
  	 * @param {Event} event
  	 */
  	FastClick.prototype.sendClick = function(targetElement, event) {
  		var clickEvent, touch;
  
  		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
  		if (document.activeElement && document.activeElement !== targetElement) {
  			document.activeElement.blur();
  		}
  
  		touch = event.changedTouches[0];
  
  		// Synthesise a click event, with an extra attribute so it can be tracked
  		clickEvent = document.createEvent('MouseEvents');
  		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
  		clickEvent.forwardedTouchEvent = true;
  		targetElement.dispatchEvent(clickEvent);
  	};
  
  	FastClick.prototype.determineEventType = function(targetElement) {
  
  		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
  		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
  			return 'mousedown';
  		}
  
  		return 'click';
  	};
  
  
  	/**
  	 * @param {EventTarget|Element} targetElement
  	 */
  	FastClick.prototype.focus = function(targetElement) {
  		var length;
  
  		// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
  		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
  			length = targetElement.value.length;
  			targetElement.setSelectionRange(length, length);
  		} else {
  			targetElement.focus();
  		}
  	};
  
  
  	/**
  	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
  	 *
  	 * @param {EventTarget|Element} targetElement
  	 */
  	FastClick.prototype.updateScrollParent = function(targetElement) {
  		var scrollParent, parentElement;
  
  		scrollParent = targetElement.fastClickScrollParent;
  
  		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
  		// target element was moved to another parent.
  		if (!scrollParent || !scrollParent.contains(targetElement)) {
  			parentElement = targetElement;
  			do {
  				if (parentElement.scrollHeight > parentElement.offsetHeight) {
  					scrollParent = parentElement;
  					targetElement.fastClickScrollParent = parentElement;
  					break;
  				}
  
  				parentElement = parentElement.parentElement;
  			} while (parentElement);
  		}
  
  		// Always update the scroll top tracker if possible.
  		if (scrollParent) {
  			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
  		}
  	};
  
  
  	/**
  	 * @param {EventTarget} targetElement
  	 * @returns {Element|EventTarget}
  	 */
  	FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {
  
  		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
  		if (eventTarget.nodeType === Node.TEXT_NODE) {
  			return eventTarget.parentNode;
  		}
  
  		return eventTarget;
  	};
  
  
  	/**
  	 * On touch start, record the position and scroll offset.
  	 *
  	 * @param {Event} event
  	 * @returns {boolean}
  	 */
  	FastClick.prototype.onTouchStart = function(event) {
  		var targetElement, touch, selection;
  
  		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
  		if (event.targetTouches.length > 1) {
  			return true;
  		}
  
  		targetElement = this.getTargetElementFromEventTarget(event.target);
  		touch = event.targetTouches[0];
  
  		if (deviceIsIOS) {
  
  			// Only trusted events will deselect text on iOS (issue #49)
  			selection = window.getSelection();
  			if (selection.rangeCount && !selection.isCollapsed) {
  				return true;
  			}
  
  			if (!deviceIsIOS4) {
  
  				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
  				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
  				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
  				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
  				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
  				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
  				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
  				// random integers, it's safe to to continue if the identifier is 0 here.
  				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
  					event.preventDefault();
  					return false;
  				}
  
  				this.lastTouchIdentifier = touch.identifier;
  
  				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
  				// 1) the user does a fling scroll on the scrollable layer
  				// 2) the user stops the fling scroll with another tap
  				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
  				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
  				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
  				this.updateScrollParent(targetElement);
  			}
  		}
  
  		this.trackingClick = true;
  		this.trackingClickStart = event.timeStamp;
  		this.targetElement = targetElement;
  
  		this.touchStartX = touch.pageX;
  		this.touchStartY = touch.pageY;
  
  		// Prevent phantom clicks on fast double-tap (issue #36)
  		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
  			event.preventDefault();
  		}
  
  		return true;
  	};
  
  
  	/**
  	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
  	 *
  	 * @param {Event} event
  	 * @returns {boolean}
  	 */
  	FastClick.prototype.touchHasMoved = function(event) {
  		var touch = event.changedTouches[0], boundary = this.touchBoundary;
  
  		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
  			return true;
  		}
  
  		return false;
  	};
  
  
  	/**
  	 * Update the last position.
  	 *
  	 * @param {Event} event
  	 * @returns {boolean}
  	 */
  	FastClick.prototype.onTouchMove = function(event) {
  		if (!this.trackingClick) {
  			return true;
  		}
  
  		// If the touch has moved, cancel the click tracking
  		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
  			this.trackingClick = false;
  			this.targetElement = null;
  		}
  
  		return true;
  	};
  
  
  	/**
  	 * Attempt to find the labelled control for the given label element.
  	 *
  	 * @param {EventTarget|HTMLLabelElement} labelElement
  	 * @returns {Element|null}
  	 */
  	FastClick.prototype.findControl = function(labelElement) {
  
  		// Fast path for newer browsers supporting the HTML5 control attribute
  		if (labelElement.control !== undefined) {
  			return labelElement.control;
  		}
  
  		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
  		if (labelElement.htmlFor) {
  			return document.getElementById(labelElement.htmlFor);
  		}
  
  		// If no for attribute exists, attempt to retrieve the first labellable descendant element
  		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
  		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
  	};
  
  
  	/**
  	 * On touch end, determine whether to send a click event at once.
  	 *
  	 * @param {Event} event
  	 * @returns {boolean}
  	 */
  	FastClick.prototype.onTouchEnd = function(event) {
  		var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;
  
  		if (!this.trackingClick) {
  			return true;
  		}
  
  		// Prevent phantom clicks on fast double-tap (issue #36)
  		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
  			this.cancelNextClick = true;
  			return true;
  		}
  
  		if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
  			return true;
  		}
  
  		// Reset to prevent wrong click cancel on input (issue #156).
  		this.cancelNextClick = false;
  
  		this.lastClickTime = event.timeStamp;
  
  		trackingClickStart = this.trackingClickStart;
  		this.trackingClick = false;
  		this.trackingClickStart = 0;
  
  		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
  		// is performing a transition or scroll, and has to be re-detected manually. Note that
  		// for this to function correctly, it must be called *after* the event target is checked!
  		// See issue #57; also filed as rdar://13048589 .
  		if (deviceIsIOSWithBadTarget) {
  			touch = event.changedTouches[0];
  
  			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
  			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
  			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
  		}
  
  		targetTagName = targetElement.tagName.toLowerCase();
  		if (targetTagName === 'label') {
  			forElement = this.findControl(targetElement);
  			if (forElement) {
  				this.focus(targetElement);
  				if (deviceIsAndroid) {
  					return false;
  				}
  
  				targetElement = forElement;
  			}
  		} else if (this.needsFocus(targetElement)) {
  
  			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
  			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
  			if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
  				this.targetElement = null;
  				return false;
  			}
  
  			this.focus(targetElement);
  			this.sendClick(targetElement, event);
  
  			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
  			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
  			if (!deviceIsIOS || targetTagName !== 'select') {
  				this.targetElement = null;
  				event.preventDefault();
  			}
  
  			return false;
  		}
  
  		if (deviceIsIOS && !deviceIsIOS4) {
  
  			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
  			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
  			scrollParent = targetElement.fastClickScrollParent;
  			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
  				return true;
  			}
  		}
  
  		// Prevent the actual click from going though - unless the target node is marked as requiring
  		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
  		if (!this.needsClick(targetElement)) {
  			event.preventDefault();
  			this.sendClick(targetElement, event);
  		}
  
  		return false;
  	};
  
  
  	/**
  	 * On touch cancel, stop tracking the click.
  	 *
  	 * @returns {void}
  	 */
  	FastClick.prototype.onTouchCancel = function() {
  		this.trackingClick = false;
  		this.targetElement = null;
  	};
  
  
  	/**
  	 * Determine mouse events which should be permitted.
  	 *
  	 * @param {Event} event
  	 * @returns {boolean}
  	 */
  	FastClick.prototype.onMouse = function(event) {
  
  		// If a target element was never set (because a touch event was never fired) allow the event
  		if (!this.targetElement) {
  			return true;
  		}
  
  		if (event.forwardedTouchEvent) {
  			return true;
  		}
  
  		// Programmatically generated events targeting a specific element should be permitted
  		if (!event.cancelable) {
  			return true;
  		}
  
  		// Derive and check the target element to see whether the mouse event needs to be permitted;
  		// unless explicitly enabled, prevent non-touch click events from triggering actions,
  		// to prevent ghost/doubleclicks.
  		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {
  
  			// Prevent any user-added listeners declared on FastClick element from being fired.
  			if (event.stopImmediatePropagation) {
  				event.stopImmediatePropagation();
  			} else {
  
  				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
  				event.propagationStopped = true;
  			}
  
  			// Cancel the event
  			event.stopPropagation();
  			event.preventDefault();
  
  			return false;
  		}
  
  		// If the mouse event is permitted, return true for the action to go through.
  		return true;
  	};
  
  
  	/**
  	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
  	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
  	 * an actual click which should be permitted.
  	 *
  	 * @param {Event} event
  	 * @returns {boolean}
  	 */
  	FastClick.prototype.onClick = function(event) {
  		var permitted;
  
  		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
  		if (this.trackingClick) {
  			this.targetElement = null;
  			this.trackingClick = false;
  			return true;
  		}
  
  		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
  		if (event.target.type === 'submit' && event.detail === 0) {
  			return true;
  		}
  
  		permitted = this.onMouse(event);
  
  		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
  		if (!permitted) {
  			this.targetElement = null;
  		}
  
  		// If clicks are permitted, return true for the action to go through.
  		return permitted;
  	};
  
  
  	/**
  	 * Remove all FastClick's event listeners.
  	 *
  	 * @returns {void}
  	 */
  	FastClick.prototype.destroy = function() {
  		var layer = this.layer;
  
  		if (deviceIsAndroid) {
  			layer.removeEventListener('mouseover', this.onMouse, true);
  			layer.removeEventListener('mousedown', this.onMouse, true);
  			layer.removeEventListener('mouseup', this.onMouse, true);
  		}
  
  		layer.removeEventListener('click', this.onClick, true);
  		layer.removeEventListener('touchstart', this.onTouchStart, false);
  		layer.removeEventListener('touchmove', this.onTouchMove, false);
  		layer.removeEventListener('touchend', this.onTouchEnd, false);
  		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
  	};
  
  
  	/**
  	 * Check whether FastClick is needed.
  	 *
  	 * @param {Element} layer The layer to listen on
  	 */
  	FastClick.notNeeded = function(layer) {
  		var metaViewport;
  		var chromeVersion;
  		var blackberryVersion;
  		var firefoxVersion;
  
  		// Devices that don't support touch don't need FastClick
  		if (typeof window.ontouchstart === 'undefined') {
  			return true;
  		}
  
  		// Chrome version - zero for other browsers
  		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];
  
  		if (chromeVersion) {
  
  			if (deviceIsAndroid) {
  				metaViewport = document.querySelector('meta[name=viewport]');
  
  				if (metaViewport) {
  					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
  					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
  						return true;
  					}
  					// Chrome 32 and above with width=device-width or less don't need FastClick
  					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
  						return true;
  					}
  				}
  
  			// Chrome desktop doesn't need FastClick (issue #15)
  			} else {
  				return true;
  			}
  		}
  
  		if (deviceIsBlackBerry10) {
  			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);
  
  			// BlackBerry 10.3+ does not require Fastclick library.
  			// https://github.com/ftlabs/fastclick/issues/251
  			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
  				metaViewport = document.querySelector('meta[name=viewport]');
  
  				if (metaViewport) {
  					// user-scalable=no eliminates click delay.
  					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
  						return true;
  					}
  					// width=device-width (or less than device-width) eliminates click delay.
  					if (document.documentElement.scrollWidth <= window.outerWidth) {
  						return true;
  					}
  				}
  			}
  		}
  
  		// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
  		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
  			return true;
  		}
  
  		// Firefox version - zero for other browsers
  		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];
  
  		if (firefoxVersion >= 27) {
  			// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896
  
  			metaViewport = document.querySelector('meta[name=viewport]');
  			if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
  				return true;
  			}
  		}
  
  		// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
  		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
  		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
  			return true;
  		}
  
  		return false;
  	};
  
  
  	/**
  	 * Factory method for creating a FastClick object
  	 *
  	 * @param {Element} layer The layer to listen on
  	 * @param {Object} [options={}] The options to override the defaults
  	 */
  	FastClick.attach = function(layer, options) {
  		return new FastClick(layer, options);
  	};
  
  
  	if (true) {
  
  		// AMD. Register as an anonymous module.
  		!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
  			return FastClick;
  		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  	} else if (typeof module !== 'undefined' && module.exports) {
  		module.exports = FastClick.attach;
  		module.exports.FastClick = FastClick;
  	} else {
  		window.FastClick = FastClick;
  	}
  }());


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

  var jade = __webpack_require__(52);
  
  module.exports = function template(locals) {
  var jade_debug = [ new jade.DebugItem( 1, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/AddToCartButton/AddToCartButton.jade" ) ];
  try {
  var buf = [];
  var jade_mixins = {};
  var jade_interp;
  ;var locals_for_with = (locals || {});(function (qty) {
  jade_debug.unshift(new jade.DebugItem( 0, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/AddToCartButton/AddToCartButton.jade" ));
  jade_debug.unshift(new jade.DebugItem( 1, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/AddToCartButton/AddToCartButton.jade" ));
  buf.push("<span>");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 2, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/AddToCartButton/AddToCartButton.jade" ));
  buf.push("<span>");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 2, jade_debug[0].filename ));
  buf.push("In cart " + (jade.escape((jade_interp = qty) == null ? '' : jade_interp)) + "");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</span>");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</span>");
  jade_debug.shift();
  jade_debug.shift();}.call(this,"qty" in locals_for_with?locals_for_with.qty:typeof qty!=="undefined"?qty:undefined));;return buf.join("");
  } catch (err) {
    jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "span\n  span In cart #{qty}");
  }
  }

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

  var jade = __webpack_require__(52);
  
  module.exports = function template(locals) {
  var jade_debug = [ new jade.DebugItem( 1, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ) ];
  try {
  var buf = [];
  var jade_mixins = {};
  var jade_interp;
  ;var locals_for_with = (locals || {});(function (qty, response, total, undefined) {
  jade_debug.unshift(new jade.DebugItem( 0, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  jade_debug.unshift(new jade.DebugItem( 1, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<div class=\"block-title odd\">");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 2, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<strong>");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 3, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<span>");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 3, jade_debug[0].filename ));
  buf.push("My Cart");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</span>");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</strong>");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</div>");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 4, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<div class=\"block-content last even\">");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 5, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<div class=\"summary\">");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 6, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<p class=\"amount\">");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 7, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("There are");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 8, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<a href=\"http://magento-js-components.dev/index.php/checkout/cart/\">");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 9, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<span>");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 9, jade_debug[0].filename ));
  buf.push("&nbsp;");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</span>");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 10, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<span>" + (jade.escape(null == (jade_interp = qty) ? "" : jade_interp)));
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.shift();
  buf.push("</span>");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 11, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<span>");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 11, jade_debug[0].filename ));
  buf.push("&nbsp;");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</span>");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 12, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<span>");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 12, jade_debug[0].filename ));
  buf.push("items");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</span>");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</a>");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 13, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push(" in your cart.");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</p>");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 14, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<p class=\"subtotal\">");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 15, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<span class=\"label\">");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 15, jade_debug[0].filename ));
  buf.push("Cart Subtotal:");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</span>");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 16, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<span class=\"price\">");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 17, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<span>");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 17, jade_debug[0].filename ));
  buf.push("$");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</span>");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 18, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<span>" + (jade.escape(null == (jade_interp = total) ? "" : jade_interp)));
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.shift();
  buf.push("</span>");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</span>");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</p>");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</div>");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 19, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<div class=\"actions\">");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 20, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<button type=\"button\" title=\"Checkout\" onclick=\"setLocation('http://magento-js-components.dev/index.php/checkout/onepage/')\" class=\"button\">");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 21, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<span>");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 22, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<span>");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 22, jade_debug[0].filename ));
  buf.push("Checkout");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</span>");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</span>");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</button>");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</div>");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 23, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<p class=\"block-subtitle\">");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 23, jade_debug[0].filename ));
  buf.push("Recently added item(s)");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</p>");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 24, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<ol id=\"cart-sidebar\" class=\"mini-products-list\">");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 25, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  // iterate response
  ;(function(){
    var $$obj = response;
    if ('number' == typeof $$obj.length) {
  
      for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
        var item = $$obj[$index];
  
  jade_debug.unshift(new jade.DebugItem( 25, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  jade_debug.unshift(new jade.DebugItem( 26, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<li class=\"item\">");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 27, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<a" + (jade.attr("href", item.url, true, false)) + (jade.attr("title", item.name, true, false)) + " class=\"product-image\">");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 28, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<img" + (jade.attr("src", item.image, true, false)) + " width=\"50\" height=\"50\"" + (jade.attr("al", item.name, true, false)) + "/>");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</a>");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 29, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<div class=\"product-details\">");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 30, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<a href=\"#\" title=\"Remove This Item\" onclick=\"return confirm('Are you sure you would like to remove this item from the shopping cart?');\" class=\"btn-remove\">");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 30, jade_debug[0].filename ));
  buf.push("Remove This Item");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</a>");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 31, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<a href=\"#\" title=\"Edit item\" class=\"btn-edit\">");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 31, jade_debug[0].filename ));
  buf.push("Edit item");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</a>");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 32, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<p class=\"product-name\">");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 33, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<a" + (jade.attr("href", item.url, true, false)) + ">");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 34, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<span>" + (jade.escape(null == (jade_interp = item.name) ? "" : jade_interp)));
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.shift();
  buf.push("</span>");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</a>");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</p>");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 35, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<strong>");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 36, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<span>" + (jade.escape(null == (jade_interp = item.qty) ? "" : jade_interp)));
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.shift();
  buf.push("</span>");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 37, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<span>");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 37, jade_debug[0].filename ));
  buf.push(" x");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</span>");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 38, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<span class=\"price\">");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 39, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<span>");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 39, jade_debug[0].filename ));
  buf.push("$");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</span>");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 40, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<span>");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 40, jade_debug[0].filename ));
  buf.push("&nbsp;");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</span>");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 41, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<span>" + (jade.escape(null == (jade_interp = item.price) ? "" : jade_interp)));
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.shift();
  buf.push("</span>");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</span>");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</strong>");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</div>");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</li>");
  jade_debug.shift();
  jade_debug.shift();
      }
  
    } else {
      var $$l = 0;
      for (var $index in $$obj) {
        $$l++;      var item = $$obj[$index];
  
  jade_debug.unshift(new jade.DebugItem( 25, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  jade_debug.unshift(new jade.DebugItem( 26, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<li class=\"item\">");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 27, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<a" + (jade.attr("href", item.url, true, false)) + (jade.attr("title", item.name, true, false)) + " class=\"product-image\">");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 28, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<img" + (jade.attr("src", item.image, true, false)) + " width=\"50\" height=\"50\"" + (jade.attr("al", item.name, true, false)) + "/>");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</a>");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 29, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<div class=\"product-details\">");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 30, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<a href=\"#\" title=\"Remove This Item\" onclick=\"return confirm('Are you sure you would like to remove this item from the shopping cart?');\" class=\"btn-remove\">");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 30, jade_debug[0].filename ));
  buf.push("Remove This Item");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</a>");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 31, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<a href=\"#\" title=\"Edit item\" class=\"btn-edit\">");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 31, jade_debug[0].filename ));
  buf.push("Edit item");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</a>");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 32, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<p class=\"product-name\">");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 33, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<a" + (jade.attr("href", item.url, true, false)) + ">");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 34, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<span>" + (jade.escape(null == (jade_interp = item.name) ? "" : jade_interp)));
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.shift();
  buf.push("</span>");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</a>");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</p>");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 35, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<strong>");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 36, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<span>" + (jade.escape(null == (jade_interp = item.qty) ? "" : jade_interp)));
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.shift();
  buf.push("</span>");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 37, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<span>");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 37, jade_debug[0].filename ));
  buf.push(" x");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</span>");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 38, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<span class=\"price\">");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 39, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<span>");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 39, jade_debug[0].filename ));
  buf.push("$");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</span>");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 40, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<span>");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 40, jade_debug[0].filename ));
  buf.push("&nbsp;");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</span>");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 41, "/home/bat/magento_projects/magento-js-components.dev/client/src/components/common/CartSidebar/CartSidebar.jade" ));
  buf.push("<span>" + (jade.escape(null == (jade_interp = item.price) ? "" : jade_interp)));
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.shift();
  buf.push("</span>");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</span>");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</strong>");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</div>");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</li>");
  jade_debug.shift();
  jade_debug.shift();
      }
  
    }
  }).call(this);
  
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</ol>");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</div>");
  jade_debug.shift();
  jade_debug.shift();}.call(this,"qty" in locals_for_with?locals_for_with.qty:typeof qty!=="undefined"?qty:undefined,"response" in locals_for_with?locals_for_with.response:typeof response!=="undefined"?response:undefined,"total" in locals_for_with?locals_for_with.total:typeof total!=="undefined"?total:undefined,"undefined" in locals_for_with?locals_for_with.undefined: false?undefined:undefined));;return buf.join("");
  } catch (err) {
    jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".block-title.odd\n  strong\n    span My Cart\n.block-content.last.even\n  .summary\n    p.amount\n      | There are\n      a(href='http://magento-js-components.dev/index.php/checkout/cart/')\n        span &nbsp;\n        span=qty\n        span &nbsp;\n        span items\n      |  in your cart.\n    p.subtotal\n      span.label Cart Subtotal:\n      span.price\n        span $\n        span=total\n  .actions\n    button.button(type='button', title='Checkout', onclick=\"setLocation('http://magento-js-components.dev/index.php/checkout/onepage/')\")\n      span\n        span Checkout\n  p.block-subtitle Recently added item(s)\n  ol#cart-sidebar.mini-products-list\n    each item in response\n      li.item\n        a.product-image(href=item.url, title=item.name)\n          img(src=item.image, width='50', height='50', al=item.name)\n        .product-details\n          a.btn-remove(href='#', title='Remove This Item', onclick=\"return confirm('Are you sure you would like to remove this item from the shopping cart?');\") Remove This Item\n          a.btn-edit(href='#', title='Edit item') Edit item\n          p.product-name\n            a(href=item.url)\n              span=item.name\n          strong\n            span=item.qty\n            span  x\n            span.price\n              span $\n              span &nbsp;\n              span=item.price\n");
  }
  }

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * Module dependencies.
   */
  
  var Emitter = __webpack_require__(93);
  var reduce = __webpack_require__(94);
  
  /**
   * Root reference for iframes.
   */
  
  var root = 'undefined' == typeof window
    ? (this || self)
    : window;
  
  /**
   * Noop.
   */
  
  function noop(){};
  
  /**
   * Check if `obj` is a host object,
   * we don't want to serialize these :)
   *
   * TODO: future proof, move to compoent land
   *
   * @param {Object} obj
   * @return {Boolean}
   * @api private
   */
  
  function isHost(obj) {
    var str = {}.toString.call(obj);
  
    switch (str) {
      case '[object File]':
      case '[object Blob]':
      case '[object FormData]':
        return true;
      default:
        return false;
    }
  }
  
  /**
   * Determine XHR.
   */
  
  request.getXHR = function () {
    if (root.XMLHttpRequest
        && (!root.location || 'file:' != root.location.protocol
            || !root.ActiveXObject)) {
      return new XMLHttpRequest;
    } else {
      try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
      try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
      try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
      try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
    }
    return false;
  };
  
  /**
   * Removes leading and trailing whitespace, added to support IE.
   *
   * @param {String} s
   * @return {String}
   * @api private
   */
  
  var trim = ''.trim
    ? function(s) { return s.trim(); }
    : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };
  
  /**
   * Check if `obj` is an object.
   *
   * @param {Object} obj
   * @return {Boolean}
   * @api private
   */
  
  function isObject(obj) {
    return obj === Object(obj);
  }
  
  /**
   * Serialize the given `obj`.
   *
   * @param {Object} obj
   * @return {String}
   * @api private
   */
  
  function serialize(obj) {
    if (!isObject(obj)) return obj;
    var pairs = [];
    for (var key in obj) {
      if (null != obj[key]) {
        pairs.push(encodeURIComponent(key)
          + '=' + encodeURIComponent(obj[key]));
      }
    }
    return pairs.join('&');
  }
  
  /**
   * Expose serialization method.
   */
  
   request.serializeObject = serialize;
  
   /**
    * Parse the given x-www-form-urlencoded `str`.
    *
    * @param {String} str
    * @return {Object}
    * @api private
    */
  
  function parseString(str) {
    var obj = {};
    var pairs = str.split('&');
    var parts;
    var pair;
  
    for (var i = 0, len = pairs.length; i < len; ++i) {
      pair = pairs[i];
      parts = pair.split('=');
      obj[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
    }
  
    return obj;
  }
  
  /**
   * Expose parser.
   */
  
  request.parseString = parseString;
  
  /**
   * Default MIME type map.
   *
   *     superagent.types.xml = 'application/xml';
   *
   */
  
  request.types = {
    html: 'text/html',
    json: 'application/json',
    xml: 'application/xml',
    urlencoded: 'application/x-www-form-urlencoded',
    'form': 'application/x-www-form-urlencoded',
    'form-data': 'application/x-www-form-urlencoded'
  };
  
  /**
   * Default serialization map.
   *
   *     superagent.serialize['application/xml'] = function(obj){
   *       return 'generated xml here';
   *     };
   *
   */
  
   request.serialize = {
     'application/x-www-form-urlencoded': serialize,
     'application/json': JSON.stringify
   };
  
   /**
    * Default parsers.
    *
    *     superagent.parse['application/xml'] = function(str){
    *       return { object parsed from str };
    *     };
    *
    */
  
  request.parse = {
    'application/x-www-form-urlencoded': parseString,
    'application/json': JSON.parse
  };
  
  /**
   * Parse the given header `str` into
   * an object containing the mapped fields.
   *
   * @param {String} str
   * @return {Object}
   * @api private
   */
  
  function parseHeader(str) {
    var lines = str.split(/\r?\n/);
    var fields = {};
    var index;
    var line;
    var field;
    var val;
  
    lines.pop(); // trailing CRLF
  
    for (var i = 0, len = lines.length; i < len; ++i) {
      line = lines[i];
      index = line.indexOf(':');
      field = line.slice(0, index).toLowerCase();
      val = trim(line.slice(index + 1));
      fields[field] = val;
    }
  
    return fields;
  }
  
  /**
   * Return the mime type for the given `str`.
   *
   * @param {String} str
   * @return {String}
   * @api private
   */
  
  function type(str){
    return str.split(/ *; */).shift();
  };
  
  /**
   * Return header field parameters.
   *
   * @param {String} str
   * @return {Object}
   * @api private
   */
  
  function params(str){
    return reduce(str.split(/ *; */), function(obj, str){
      var parts = str.split(/ *= */)
        , key = parts.shift()
        , val = parts.shift();
  
      if (key && val) obj[key] = val;
      return obj;
    }, {});
  };
  
  /**
   * Initialize a new `Response` with the given `xhr`.
   *
   *  - set flags (.ok, .error, etc)
   *  - parse header
   *
   * Examples:
   *
   *  Aliasing `superagent` as `request` is nice:
   *
   *      request = superagent;
   *
   *  We can use the promise-like API, or pass callbacks:
   *
   *      request.get('/').end(function(res){});
   *      request.get('/', function(res){});
   *
   *  Sending data can be chained:
   *
   *      request
   *        .post('/user')
   *        .send({ name: 'tj' })
   *        .end(function(res){});
   *
   *  Or passed to `.send()`:
   *
   *      request
   *        .post('/user')
   *        .send({ name: 'tj' }, function(res){});
   *
   *  Or passed to `.post()`:
   *
   *      request
   *        .post('/user', { name: 'tj' })
   *        .end(function(res){});
   *
   * Or further reduced to a single call for simple cases:
   *
   *      request
   *        .post('/user', { name: 'tj' }, function(res){});
   *
   * @param {XMLHTTPRequest} xhr
   * @param {Object} options
   * @api private
   */
  
  function Response(req, options) {
    options = options || {};
    this.req = req;
    this.xhr = this.req.xhr;
    // responseText is accessible only if responseType is '' or 'text' and on older browsers
    this.text = ((this.req.method !='HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text')) || typeof this.xhr.responseType === 'undefined')
       ? this.xhr.responseText
       : null;
    this.statusText = this.req.xhr.statusText;
    this.setStatusProperties(this.xhr.status);
    this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
    // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
    // getResponseHeader still works. so we get content-type even if getting
    // other headers fails.
    this.header['content-type'] = this.xhr.getResponseHeader('content-type');
    this.setHeaderProperties(this.header);
    this.body = this.req.method != 'HEAD'
      ? this.parseBody(this.text ? this.text : this.xhr.response)
      : null;
  }
  
  /**
   * Get case-insensitive `field` value.
   *
   * @param {String} field
   * @return {String}
   * @api public
   */
  
  Response.prototype.get = function(field){
    return this.header[field.toLowerCase()];
  };
  
  /**
   * Set header related properties:
   *
   *   - `.type` the content type without params
   *
   * A response of "Content-Type: text/plain; charset=utf-8"
   * will provide you with a `.type` of "text/plain".
   *
   * @param {Object} header
   * @api private
   */
  
  Response.prototype.setHeaderProperties = function(header){
    // content-type
    var ct = this.header['content-type'] || '';
    this.type = type(ct);
  
    // params
    var obj = params(ct);
    for (var key in obj) this[key] = obj[key];
  };
  
  /**
   * Parse the given body `str`.
   *
   * Used for auto-parsing of bodies. Parsers
   * are defined on the `superagent.parse` object.
   *
   * @param {String} str
   * @return {Mixed}
   * @api private
   */
  
  Response.prototype.parseBody = function(str){
    var parse = request.parse[this.type];
    return parse && str && (str.length || str instanceof Object)
      ? parse(str)
      : null;
  };
  
  /**
   * Set flags such as `.ok` based on `status`.
   *
   * For example a 2xx response will give you a `.ok` of __true__
   * whereas 5xx will be __false__ and `.error` will be __true__. The
   * `.clientError` and `.serverError` are also available to be more
   * specific, and `.statusType` is the class of error ranging from 1..5
   * sometimes useful for mapping respond colors etc.
   *
   * "sugar" properties are also defined for common cases. Currently providing:
   *
   *   - .noContent
   *   - .badRequest
   *   - .unauthorized
   *   - .notAcceptable
   *   - .notFound
   *
   * @param {Number} status
   * @api private
   */
  
  Response.prototype.setStatusProperties = function(status){
    // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
    if (status === 1223) {
      status = 204;
    }
  
    var type = status / 100 | 0;
  
    // status / class
    this.status = status;
    this.statusType = type;
  
    // basics
    this.info = 1 == type;
    this.ok = 2 == type;
    this.clientError = 4 == type;
    this.serverError = 5 == type;
    this.error = (4 == type || 5 == type)
      ? this.toError()
      : false;
  
    // sugar
    this.accepted = 202 == status;
    this.noContent = 204 == status;
    this.badRequest = 400 == status;
    this.unauthorized = 401 == status;
    this.notAcceptable = 406 == status;
    this.notFound = 404 == status;
    this.forbidden = 403 == status;
  };
  
  /**
   * Return an `Error` representative of this response.
   *
   * @return {Error}
   * @api public
   */
  
  Response.prototype.toError = function(){
    var req = this.req;
    var method = req.method;
    var url = req.url;
  
    var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
    var err = new Error(msg);
    err.status = this.status;
    err.method = method;
    err.url = url;
  
    return err;
  };
  
  /**
   * Expose `Response`.
   */
  
  request.Response = Response;
  
  /**
   * Initialize a new `Request` with the given `method` and `url`.
   *
   * @param {String} method
   * @param {String} url
   * @api public
   */
  
  function Request(method, url) {
    var self = this;
    Emitter.call(this);
    this._query = this._query || [];
    this.method = method;
    this.url = url;
    this.header = {};
    this._header = {};
    this.on('end', function(){
      var err = null;
      var res = null;
  
      try {
        res = new Response(self);
      } catch(e) {
        err = new Error('Parser is unable to parse the response');
        err.parse = true;
        err.original = e;
        return self.callback(err);
      }
  
      self.emit('response', res);
  
      if (err) {
        return self.callback(err, res);
      }
  
      if (res.status >= 200 && res.status < 300) {
        return self.callback(err, res);
      }
  
      var new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
      new_err.original = err;
      new_err.response = res;
      new_err.status = res.status;
  
      self.callback(new_err, res);
    });
  }
  
  /**
   * Mixin `Emitter`.
   */
  
  Emitter(Request.prototype);
  
  /**
   * Allow for extension
   */
  
  Request.prototype.use = function(fn) {
    fn(this);
    return this;
  }
  
  /**
   * Set timeout to `ms`.
   *
   * @param {Number} ms
   * @return {Request} for chaining
   * @api public
   */
  
  Request.prototype.timeout = function(ms){
    this._timeout = ms;
    return this;
  };
  
  /**
   * Clear previous timeout.
   *
   * @return {Request} for chaining
   * @api public
   */
  
  Request.prototype.clearTimeout = function(){
    this._timeout = 0;
    clearTimeout(this._timer);
    return this;
  };
  
  /**
   * Abort the request, and clear potential timeout.
   *
   * @return {Request}
   * @api public
   */
  
  Request.prototype.abort = function(){
    if (this.aborted) return;
    this.aborted = true;
    this.xhr.abort();
    this.clearTimeout();
    this.emit('abort');
    return this;
  };
  
  /**
   * Set header `field` to `val`, or multiple fields with one object.
   *
   * Examples:
   *
   *      req.get('/')
   *        .set('Accept', 'application/json')
   *        .set('X-API-Key', 'foobar')
   *        .end(callback);
   *
   *      req.get('/')
   *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
   *        .end(callback);
   *
   * @param {String|Object} field
   * @param {String} val
   * @return {Request} for chaining
   * @api public
   */
  
  Request.prototype.set = function(field, val){
    if (isObject(field)) {
      for (var key in field) {
        this.set(key, field[key]);
      }
      return this;
    }
    this._header[field.toLowerCase()] = val;
    this.header[field] = val;
    return this;
  };
  
  /**
   * Remove header `field`.
   *
   * Example:
   *
   *      req.get('/')
   *        .unset('User-Agent')
   *        .end(callback);
   *
   * @param {String} field
   * @return {Request} for chaining
   * @api public
   */
  
  Request.prototype.unset = function(field){
    delete this._header[field.toLowerCase()];
    delete this.header[field];
    return this;
  };
  
  /**
   * Get case-insensitive header `field` value.
   *
   * @param {String} field
   * @return {String}
   * @api private
   */
  
  Request.prototype.getHeader = function(field){
    return this._header[field.toLowerCase()];
  };
  
  /**
   * Set Content-Type to `type`, mapping values from `request.types`.
   *
   * Examples:
   *
   *      superagent.types.xml = 'application/xml';
   *
   *      request.post('/')
   *        .type('xml')
   *        .send(xmlstring)
   *        .end(callback);
   *
   *      request.post('/')
   *        .type('application/xml')
   *        .send(xmlstring)
   *        .end(callback);
   *
   * @param {String} type
   * @return {Request} for chaining
   * @api public
   */
  
  Request.prototype.type = function(type){
    this.set('Content-Type', request.types[type] || type);
    return this;
  };
  
  /**
   * Set Accept to `type`, mapping values from `request.types`.
   *
   * Examples:
   *
   *      superagent.types.json = 'application/json';
   *
   *      request.get('/agent')
   *        .accept('json')
   *        .end(callback);
   *
   *      request.get('/agent')
   *        .accept('application/json')
   *        .end(callback);
   *
   * @param {String} accept
   * @return {Request} for chaining
   * @api public
   */
  
  Request.prototype.accept = function(type){
    this.set('Accept', request.types[type] || type);
    return this;
  };
  
  /**
   * Set Authorization field value with `user` and `pass`.
   *
   * @param {String} user
   * @param {String} pass
   * @return {Request} for chaining
   * @api public
   */
  
  Request.prototype.auth = function(user, pass){
    var str = btoa(user + ':' + pass);
    this.set('Authorization', 'Basic ' + str);
    return this;
  };
  
  /**
  * Add query-string `val`.
  *
  * Examples:
  *
  *   request.get('/shoes')
  *     .query('size=10')
  *     .query({ color: 'blue' })
  *
  * @param {Object|String} val
  * @return {Request} for chaining
  * @api public
  */
  
  Request.prototype.query = function(val){
    if ('string' != typeof val) val = serialize(val);
    if (val) this._query.push(val);
    return this;
  };
  
  /**
   * Write the field `name` and `val` for "multipart/form-data"
   * request bodies.
   *
   * ``` js
   * request.post('/upload')
   *   .field('foo', 'bar')
   *   .end(callback);
   * ```
   *
   * @param {String} name
   * @param {String|Blob|File} val
   * @return {Request} for chaining
   * @api public
   */
  
  Request.prototype.field = function(name, val){
    if (!this._formData) this._formData = new root.FormData();
    this._formData.append(name, val);
    return this;
  };
  
  /**
   * Queue the given `file` as an attachment to the specified `field`,
   * with optional `filename`.
   *
   * ``` js
   * request.post('/upload')
   *   .attach(new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
   *   .end(callback);
   * ```
   *
   * @param {String} field
   * @param {Blob|File} file
   * @param {String} filename
   * @return {Request} for chaining
   * @api public
   */
  
  Request.prototype.attach = function(field, file, filename){
    if (!this._formData) this._formData = new root.FormData();
    this._formData.append(field, file, filename);
    return this;
  };
  
  /**
   * Send `data`, defaulting the `.type()` to "json" when
   * an object is given.
   *
   * Examples:
   *
   *       // querystring
   *       request.get('/search')
   *         .end(callback)
   *
   *       // multiple data "writes"
   *       request.get('/search')
   *         .send({ search: 'query' })
   *         .send({ range: '1..5' })
   *         .send({ order: 'desc' })
   *         .end(callback)
   *
   *       // manual json
   *       request.post('/user')
   *         .type('json')
   *         .send('{"name":"tj"})
   *         .end(callback)
   *
   *       // auto json
   *       request.post('/user')
   *         .send({ name: 'tj' })
   *         .end(callback)
   *
   *       // manual x-www-form-urlencoded
   *       request.post('/user')
   *         .type('form')
   *         .send('name=tj')
   *         .end(callback)
   *
   *       // auto x-www-form-urlencoded
   *       request.post('/user')
   *         .type('form')
   *         .send({ name: 'tj' })
   *         .end(callback)
   *
   *       // defaults to x-www-form-urlencoded
    *      request.post('/user')
    *        .send('name=tobi')
    *        .send('species=ferret')
    *        .end(callback)
   *
   * @param {String|Object} data
   * @return {Request} for chaining
   * @api public
   */
  
  Request.prototype.send = function(data){
    var obj = isObject(data);
    var type = this.getHeader('Content-Type');
  
    // merge
    if (obj && isObject(this._data)) {
      for (var key in data) {
        this._data[key] = data[key];
      }
    } else if ('string' == typeof data) {
      if (!type) this.type('form');
      type = this.getHeader('Content-Type');
      if ('application/x-www-form-urlencoded' == type) {
        this._data = this._data
          ? this._data + '&' + data
          : data;
      } else {
        this._data = (this._data || '') + data;
      }
    } else {
      this._data = data;
    }
  
    if (!obj || isHost(data)) return this;
    if (!type) this.type('json');
    return this;
  };
  
  /**
   * Invoke the callback with `err` and `res`
   * and handle arity check.
   *
   * @param {Error} err
   * @param {Response} res
   * @api private
   */
  
  Request.prototype.callback = function(err, res){
    var fn = this._callback;
    this.clearTimeout();
    fn(err, res);
  };
  
  /**
   * Invoke callback with x-domain error.
   *
   * @api private
   */
  
  Request.prototype.crossDomainError = function(){
    var err = new Error('Origin is not allowed by Access-Control-Allow-Origin');
    err.crossDomain = true;
    this.callback(err);
  };
  
  /**
   * Invoke callback with timeout error.
   *
   * @api private
   */
  
  Request.prototype.timeoutError = function(){
    var timeout = this._timeout;
    var err = new Error('timeout of ' + timeout + 'ms exceeded');
    err.timeout = timeout;
    this.callback(err);
  };
  
  /**
   * Enable transmission of cookies with x-domain requests.
   *
   * Note that for this to work the origin must not be
   * using "Access-Control-Allow-Origin" with a wildcard,
   * and also must set "Access-Control-Allow-Credentials"
   * to "true".
   *
   * @api public
   */
  
  Request.prototype.withCredentials = function(){
    this._withCredentials = true;
    return this;
  };
  
  /**
   * Initiate request, invoking callback `fn(res)`
   * with an instanceof `Response`.
   *
   * @param {Function} fn
   * @return {Request} for chaining
   * @api public
   */
  
  Request.prototype.end = function(fn){
    var self = this;
    var xhr = this.xhr = request.getXHR();
    var query = this._query.join('&');
    var timeout = this._timeout;
    var data = this._formData || this._data;
  
    // store callback
    this._callback = fn || noop;
  
    // state change
    xhr.onreadystatechange = function(){
      if (4 != xhr.readyState) return;
  
      // In IE9, reads to any property (e.g. status) off of an aborted XHR will
      // result in the error "Could not complete the operation due to error c00c023f"
      var status;
      try { status = xhr.status } catch(e) { status = 0; }
  
      if (0 == status) {
        if (self.timedout) return self.timeoutError();
        if (self.aborted) return;
        return self.crossDomainError();
      }
      self.emit('end');
    };
  
    // progress
    var handleProgress = function(e){
      if (e.total > 0) {
        e.percent = e.loaded / e.total * 100;
      }
      self.emit('progress', e);
    };
    if (this.hasListeners('progress')) {
      xhr.onprogress = handleProgress;
    }
    try {
      if (xhr.upload && this.hasListeners('progress')) {
        xhr.upload.onprogress = handleProgress;
      }
    } catch(e) {
      // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
      // Reported here:
      // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
    }
  
    // timeout
    if (timeout && !this._timer) {
      this._timer = setTimeout(function(){
        self.timedout = true;
        self.abort();
      }, timeout);
    }
  
    // querystring
    if (query) {
      query = request.serializeObject(query);
      this.url += ~this.url.indexOf('?')
        ? '&' + query
        : '?' + query;
    }
  
    // initiate request
    xhr.open(this.method, this.url, true);
  
    // CORS
    if (this._withCredentials) xhr.withCredentials = true;
  
    // body
    if ('GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !isHost(data)) {
      // serialize stuff
      var contentType = this.getHeader('Content-Type');
      var serialize = request.serialize[contentType ? contentType.split(';')[0] : ''];
      if (serialize) data = serialize(data);
    }
  
    // set header fields
    for (var field in this.header) {
      if (null == this.header[field]) continue;
      xhr.setRequestHeader(field, this.header[field]);
    }
  
    // send stuff
    this.emit('request', this);
    xhr.send(data);
    return this;
  };
  
  /**
   * Faux promise support
   *
   * @param {Function} fulfill
   * @param {Function} reject
   * @return {Request}
   */
  
  Request.prototype.then = function (fulfill, reject) {
    return this.end(function(err, res) {
      err ? reject(err) : fulfill(res);
    });
  }
  
  /**
   * Expose `Request`.
   */
  
  request.Request = Request;
  
  /**
   * Issue a request:
   *
   * Examples:
   *
   *    request('GET', '/users').end(callback)
   *    request('/users').end(callback)
   *    request('/users', callback)
   *
   * @param {String} method
   * @param {String|Function} url or callback
   * @return {Request}
   * @api public
   */
  
  function request(method, url) {
    // callback
    if ('function' == typeof url) {
      return new Request('GET', method).end(url);
    }
  
    // url first
    if (1 == arguments.length) {
      return new Request('GET', method);
    }
  
    return new Request(method, url);
  }
  
  /**
   * GET `url` with optional callback `fn(res)`.
   *
   * @param {String} url
   * @param {Mixed|Function} data or fn
   * @param {Function} fn
   * @return {Request}
   * @api public
   */
  
  request.get = function(url, data, fn){
    var req = request('GET', url);
    if ('function' == typeof data) fn = data, data = null;
    if (data) req.query(data);
    if (fn) req.end(fn);
    return req;
  };
  
  /**
   * HEAD `url` with optional callback `fn(res)`.
   *
   * @param {String} url
   * @param {Mixed|Function} data or fn
   * @param {Function} fn
   * @return {Request}
   * @api public
   */
  
  request.head = function(url, data, fn){
    var req = request('HEAD', url);
    if ('function' == typeof data) fn = data, data = null;
    if (data) req.send(data);
    if (fn) req.end(fn);
    return req;
  };
  
  /**
   * DELETE `url` with optional callback `fn(res)`.
   *
   * @param {String} url
   * @param {Function} fn
   * @return {Request}
   * @api public
   */
  
  request.del = function(url, fn){
    var req = request('DELETE', url);
    if (fn) req.end(fn);
    return req;
  };
  
  /**
   * PATCH `url` with optional `data` and callback `fn(res)`.
   *
   * @param {String} url
   * @param {Mixed} data
   * @param {Function} fn
   * @return {Request}
   * @api public
   */
  
  request.patch = function(url, data, fn){
    var req = request('PATCH', url);
    if ('function' == typeof data) fn = data, data = null;
    if (data) req.send(data);
    if (fn) req.end(fn);
    return req;
  };
  
  /**
   * POST `url` with optional `data` and callback `fn(res)`.
   *
   * @param {String} url
   * @param {Mixed} data
   * @param {Function} fn
   * @return {Request}
   * @api public
   */
  
  request.post = function(url, data, fn){
    var req = request('POST', url);
    if ('function' == typeof data) fn = data, data = null;
    if (data) req.send(data);
    if (fn) req.end(fn);
    return req;
  };
  
  /**
   * PUT `url` with optional `data` and callback `fn(res)`.
   *
   * @param {String} url
   * @param {Mixed|Function} data or fn
   * @param {Function} fn
   * @return {Request}
   * @api public
   */
  
  request.put = function(url, data, fn){
    var req = request('PUT', url);
    if ('function' == typeof data) fn = data, data = null;
    if (data) req.send(data);
    if (fn) req.end(fn);
    return req;
  };
  
  /**
   * Expose `request`.
   */
  
  module.exports = request;


/***/ },
/* 93 */
/***/ function(module, exports) {

  
  /**
   * Expose `Emitter`.
   */
  
  module.exports = Emitter;
  
  /**
   * Initialize a new `Emitter`.
   *
   * @api public
   */
  
  function Emitter(obj) {
    if (obj) return mixin(obj);
  };
  
  /**
   * Mixin the emitter properties.
   *
   * @param {Object} obj
   * @return {Object}
   * @api private
   */
  
  function mixin(obj) {
    for (var key in Emitter.prototype) {
      obj[key] = Emitter.prototype[key];
    }
    return obj;
  }
  
  /**
   * Listen on the given `event` with `fn`.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */
  
  Emitter.prototype.on =
  Emitter.prototype.addEventListener = function(event, fn){
    this._callbacks = this._callbacks || {};
    (this._callbacks[event] = this._callbacks[event] || [])
      .push(fn);
    return this;
  };
  
  /**
   * Adds an `event` listener that will be invoked a single
   * time then automatically removed.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */
  
  Emitter.prototype.once = function(event, fn){
    var self = this;
    this._callbacks = this._callbacks || {};
  
    function on() {
      self.off(event, on);
      fn.apply(this, arguments);
    }
  
    on.fn = fn;
    this.on(event, on);
    return this;
  };
  
  /**
   * Remove the given callback for `event` or all
   * registered callbacks.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */
  
  Emitter.prototype.off =
  Emitter.prototype.removeListener =
  Emitter.prototype.removeAllListeners =
  Emitter.prototype.removeEventListener = function(event, fn){
    this._callbacks = this._callbacks || {};
  
    // all
    if (0 == arguments.length) {
      this._callbacks = {};
      return this;
    }
  
    // specific event
    var callbacks = this._callbacks[event];
    if (!callbacks) return this;
  
    // remove all handlers
    if (1 == arguments.length) {
      delete this._callbacks[event];
      return this;
    }
  
    // remove specific handler
    var cb;
    for (var i = 0; i < callbacks.length; i++) {
      cb = callbacks[i];
      if (cb === fn || cb.fn === fn) {
        callbacks.splice(i, 1);
        break;
      }
    }
    return this;
  };
  
  /**
   * Emit `event` with the given args.
   *
   * @param {String} event
   * @param {Mixed} ...
   * @return {Emitter}
   */
  
  Emitter.prototype.emit = function(event){
    this._callbacks = this._callbacks || {};
    var args = [].slice.call(arguments, 1)
      , callbacks = this._callbacks[event];
  
    if (callbacks) {
      callbacks = callbacks.slice(0);
      for (var i = 0, len = callbacks.length; i < len; ++i) {
        callbacks[i].apply(this, args);
      }
    }
  
    return this;
  };
  
  /**
   * Return array of callbacks for `event`.
   *
   * @param {String} event
   * @return {Array}
   * @api public
   */
  
  Emitter.prototype.listeners = function(event){
    this._callbacks = this._callbacks || {};
    return this._callbacks[event] || [];
  };
  
  /**
   * Check if this emitter has `event` handlers.
   *
   * @param {String} event
   * @return {Boolean}
   * @api public
   */
  
  Emitter.prototype.hasListeners = function(event){
    return !! this.listeners(event).length;
  };


/***/ },
/* 94 */
/***/ function(module, exports) {

  
  /**
   * Reduce `arr` with `fn`.
   *
   * @param {Array} arr
   * @param {Function} fn
   * @param {Mixed} initial
   *
   * TODO: combatible error handling?
   */
  
  module.exports = function(arr, fn, initial){  
    var idx = 0;
    var len = arr.length;
    var curr = arguments.length == 3
      ? initial
      : arr[idx++];
  
    while (idx < len) {
      curr = fn.call(null, curr, arr[idx], ++idx, arr);
    }
    
    return curr;
  };

/***/ },
/* 95 */
/***/ function(module, exports) {

  module.exports = function(module) {
  	if(!module.webpackPolyfill) {
  		module.deprecate = function() {};
  		module.paths = [];
  		// module.parent = undefined by default
  		module.children = [];
  		module.webpackPolyfill = 1;
  	}
  	return module;
  }


/***/ },
/* 96 */
/***/ function(module, exports) {

  // shim for using process in browser
  
  var process = module.exports = {};
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;
  
  function cleanUpNextTick() {
      draining = false;
      if (currentQueue.length) {
          queue = currentQueue.concat(queue);
      } else {
          queueIndex = -1;
      }
      if (queue.length) {
          drainQueue();
      }
  }
  
  function drainQueue() {
      if (draining) {
          return;
      }
      var timeout = setTimeout(cleanUpNextTick);
      draining = true;
  
      var len = queue.length;
      while(len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
              currentQueue[queueIndex].run();
          }
          queueIndex = -1;
          len = queue.length;
      }
      currentQueue = null;
      draining = false;
      clearTimeout(timeout);
  }
  
  process.nextTick = function (fun) {
      var args = new Array(arguments.length - 1);
      if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
              args[i - 1] = arguments[i];
          }
      }
      queue.push(new Item(fun, args));
      if (queue.length === 1 && !draining) {
          setTimeout(drainQueue, 0);
      }
  };
  
  // v8 likes predictible objects
  function Item(fun, array) {
      this.fun = fun;
      this.array = array;
  }
  Item.prototype.run = function () {
      this.fun.apply(null, this.array);
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = ''; // empty string to avoid regexp issues
  process.versions = {};
  
  function noop() {}
  
  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  
  process.binding = function (name) {
      throw new Error('process.binding is not supported');
  };
  
  // TODO(shtylman)
  process.cwd = function () { return '/' };
  process.chdir = function (dir) {
      throw new Error('process.chdir is not supported');
  };
  process.umask = function() { return 0; };


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

  /* WEBPACK VAR INJECTION */(function(global) {"use strict";
  
  __webpack_require__(206);
  
  __webpack_require__(207);
  
  if (global._babelPolyfill) {
    throw new Error("only one instance of babel/polyfill is allowed");
  }
  global._babelPolyfill = true;
  /* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.2.1 Object.assign(target, source, ...)
  var toObject = __webpack_require__(19)
    , IObject  = __webpack_require__(36)
    , enumKeys = __webpack_require__(58);
  /* eslint-disable no-unused-vars */
  module.exports = Object.assign || function assign(target, source){
  /* eslint-enable no-unused-vars */
    var T = toObject(target)
      , l = arguments.length
      , i = 1;
    while(l > i){
      var S      = IObject(arguments[i++])
        , keys   = enumKeys(S)
        , length = keys.length
        , j      = 0
        , key;
      while(length > j)T[key = keys[j++]] = S[key];
    }
    return T;
  };

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

  var $         = __webpack_require__(2)
    , toIObject = __webpack_require__(14);
  module.exports = function(object, el){
    var O      = toIObject(object)
      , keys   = $.getKeys(O)
      , length = keys.length
      , index  = 0
      , key;
    while(length > index)if(O[key = keys[index++]] === el)return key;
  };

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

  var global    = __webpack_require__(5)
    , macrotask = __webpack_require__(75).set
    , Observer  = global.MutationObserver || global.WebKitMutationObserver
    , process   = global.process
    , head, last, notify;
  
  function flush(){
    while(head){
      head.fn.call(); // <- currently we use it only for Promise - try / catch not required
      head = head.next;
    } last = undefined;
  }
  
  // Node.js
  if(__webpack_require__(17)(process) == 'process'){
    notify = function(){
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = 1
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = -toggle;
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
  
  module.exports = function asap(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var path      = __webpack_require__(102)
    , invoke    = __webpack_require__(35)
    , aFunction = __webpack_require__(24);
  module.exports = function(/* ...pargs */){
    var fn     = aFunction(this)
      , length = arguments.length
      , pargs  = Array(length)
      , i      = 0
      , _      = path._
      , holder = false;
    while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
    return function(/* ...args */){
      var that    = this
        , _length = arguments.length
        , j = 0, k = 0, args;
      if(!holder && !_length)return invoke(fn, pargs, that);
      args = pargs.slice();
      if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
      while(_length > k)args.push(arguments[k++]);
      return invoke(fn, args, that);
    };
  };

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__(5);

/***/ },
/* 103 */
/***/ function(module, exports) {

  module.exports = function(regExp, replace){
    var replacer = replace === Object(replace) ? function(part){
      return replace[part];
    } : replace;
    return function(it){
      return String(it).replace(regExp, replacer);
    };
  };

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $                = __webpack_require__(2)
    , SUPPORT_DESC     = __webpack_require__(13)
    , createDesc       = __webpack_require__(20)
    , html             = __webpack_require__(61)
    , cel              = __webpack_require__(57)
    , has              = __webpack_require__(7)
    , cof              = __webpack_require__(17)
    , $def             = __webpack_require__(1)
    , invoke           = __webpack_require__(35)
    , arrayMethod      = __webpack_require__(31)
    , IE_PROTO         = __webpack_require__(21)('__proto__')
    , isObject         = __webpack_require__(3)
    , anObject         = __webpack_require__(4)
    , aFunction        = __webpack_require__(24)
    , toObject         = __webpack_require__(19)
    , toIObject        = __webpack_require__(14)
    , toInteger        = __webpack_require__(29)
    , toIndex          = __webpack_require__(28)
    , toLength         = __webpack_require__(8)
    , IObject          = __webpack_require__(36)
    , fails            = __webpack_require__(9)
    , ObjectProto      = Object.prototype
    , A                = []
    , _slice           = A.slice
    , _join            = A.join
    , defineProperty   = $.setDesc
    , getOwnDescriptor = $.getDesc
    , defineProperties = $.setDescs
    , $indexOf         = __webpack_require__(53)(false)
    , factories        = {}
    , IE8_DOM_DEFINE;
  
  if(!SUPPORT_DESC){
    IE8_DOM_DEFINE = !fails(function(){
      return defineProperty(cel('div'), 'a', {get: function(){ return 7; }}).a != 7;
    });
    $.setDesc = function(O, P, Attributes){
      if(IE8_DOM_DEFINE)try {
        return defineProperty(O, P, Attributes);
      } catch(e){ /* empty */ }
      if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
      if('value' in Attributes)anObject(O)[P] = Attributes.value;
      return O;
    };
    $.getDesc = function(O, P){
      if(IE8_DOM_DEFINE)try {
        return getOwnDescriptor(O, P);
      } catch(e){ /* empty */ }
      if(has(O, P))return createDesc(!ObjectProto.propertyIsEnumerable.call(O, P), O[P]);
    };
    $.setDescs = defineProperties = function(O, Properties){
      anObject(O);
      var keys   = $.getKeys(Properties)
        , length = keys.length
        , i = 0
        , P;
      while(length > i)$.setDesc(O, P = keys[i++], Properties[P]);
      return O;
    };
  }
  $def($def.S + $def.F * !SUPPORT_DESC, 'Object', {
    // 19.1.2.6 / 15.2.3.3 Object.getOwnPropertyDescriptor(O, P)
    getOwnPropertyDescriptor: $.getDesc,
    // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
    defineProperty: $.setDesc,
    // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
    defineProperties: defineProperties
  });
  
    // IE 8- don't enum bug keys
  var keys1 = ('constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,' +
              'toLocaleString,toString,valueOf').split(',')
    // Additional keys for getOwnPropertyNames
    , keys2 = keys1.concat('length', 'prototype')
    , keysLen1 = keys1.length;
  
  // Create object with `null` prototype: use iframe Object with cleared prototype
  var createDict = function(){
    // Thrash, waste and sodomy: IE GC bug
    var iframe = cel('iframe')
      , i      = keysLen1
      , gt     = '>'
      , iframeDocument;
    iframe.style.display = 'none';
    html.appendChild(iframe);
    iframe.src = 'javascript:'; // eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write('<script>document.F=Object</script' + gt);
    iframeDocument.close();
    createDict = iframeDocument.F;
    while(i--)delete createDict.prototype[keys1[i]];
    return createDict();
  };
  var createGetKeys = function(names, length){
    return function(object){
      var O      = toIObject(object)
        , i      = 0
        , result = []
        , key;
      for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
      // Don't enum bug & hidden keys
      while(length > i)if(has(O, key = names[i++])){
        ~$indexOf(result, key) || result.push(key);
      }
      return result;
    };
  };
  var Empty = function(){};
  $def($def.S, 'Object', {
    // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
    getPrototypeOf: $.getProto = $.getProto || function(O){
      O = toObject(O);
      if(has(O, IE_PROTO))return O[IE_PROTO];
      if(typeof O.constructor == 'function' && O instanceof O.constructor){
        return O.constructor.prototype;
      } return O instanceof Object ? ObjectProto : null;
    },
    // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
    getOwnPropertyNames: $.getNames = $.getNames || createGetKeys(keys2, keys2.length, true),
    // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
    create: $.create = $.create || function(O, /*?*/Properties){
      var result;
      if(O !== null){
        Empty.prototype = anObject(O);
        result = new Empty();
        Empty.prototype = null;
        // add "__proto__" for Object.getPrototypeOf shim
        result[IE_PROTO] = O;
      } else result = createDict();
      return Properties === undefined ? result : defineProperties(result, Properties);
    },
    // 19.1.2.14 / 15.2.3.14 Object.keys(O)
    keys: $.getKeys = $.getKeys || createGetKeys(keys1, keysLen1, false)
  });
  
  var construct = function(F, len, args){
    if(!(len in factories)){
      for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
      factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
    }
    return factories[len](F, args);
  };
  
  // 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
  $def($def.P, 'Function', {
    bind: function bind(that /*, args... */){
      var fn       = aFunction(this)
        , partArgs = _slice.call(arguments, 1);
      var bound = function(/* args... */){
        var args = partArgs.concat(_slice.call(arguments));
        return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
      };
      if(isObject(fn.prototype))bound.prototype = fn.prototype;
      return bound;
    }
  });
  
  // fallback for not array-like ES3 strings and DOM objects
  var buggySlice = fails(function(){
    if(html)_slice.call(html);
  });
  
  $def($def.P + $def.F * buggySlice, 'Array', {
    slice: function(begin, end){
      var len   = toLength(this.length)
        , klass = cof(this);
      end = end === undefined ? len : end;
      if(klass == 'Array')return _slice.call(this, begin, end);
      var start  = toIndex(begin, len)
        , upTo   = toIndex(end, len)
        , size   = toLength(upTo - start)
        , cloned = Array(size)
        , i      = 0;
      for(; i < size; i++)cloned[i] = klass == 'String'
        ? this.charAt(start + i)
        : this[start + i];
      return cloned;
    }
  });
  $def($def.P + $def.F * (IObject != Object), 'Array', {
    join: function(){
      return _join.apply(IObject(this), arguments);
    }
  });
  
  // 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
  $def($def.S, 'Array', {isArray: function(arg){ return cof(arg) == 'Array'; }});
  
  var createArrayReduce = function(isRight){
    return function(callbackfn, memo){
      aFunction(callbackfn);
      var O      = IObject(this)
        , length = toLength(O.length)
        , index  = isRight ? length - 1 : 0
        , i      = isRight ? -1 : 1;
      if(arguments.length < 2)for(;;){
        if(index in O){
          memo = O[index];
          index += i;
          break;
        }
        index += i;
        if(isRight ? index < 0 : length <= index){
          throw TypeError('Reduce of empty array with no initial value');
        }
      }
      for(;isRight ? index >= 0 : length > index; index += i)if(index in O){
        memo = callbackfn(memo, O[index], index, this);
      }
      return memo;
    };
  };
  var methodize = function($fn){
    return function(arg1/*, arg2 = undefined */){
      return $fn(this, arg1, arguments[1]);
    };
  };
  $def($def.P, 'Array', {
    // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
    forEach: $.each = $.each || methodize(arrayMethod(0)),
    // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
    map: methodize(arrayMethod(1)),
    // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
    filter: methodize(arrayMethod(2)),
    // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
    some: methodize(arrayMethod(3)),
    // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
    every: methodize(arrayMethod(4)),
    // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
    reduce: createArrayReduce(false),
    // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
    reduceRight: createArrayReduce(true),
    // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
    indexOf: methodize($indexOf),
    // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
    lastIndexOf: function(el, fromIndex /* = @[*-1] */){
      var O      = toIObject(this)
        , length = toLength(O.length)
        , index  = length - 1;
      if(arguments.length > 1)index = Math.min(index, toInteger(fromIndex));
      if(index < 0)index = toLength(length + index);
      for(;index >= 0; index--)if(index in O)if(O[index] === el)return index;
      return -1;
    }
  });
  
  // 20.3.3.1 / 15.9.4.4 Date.now()
  $def($def.S, 'Date', {now: function(){ return +new Date; }});
  
  var lz = function(num){
    return num > 9 ? num : '0' + num;
  };
  
  // 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
  // PhantomJS and old webkit had a broken Date implementation.
  var date       = new Date(-5e13 - 1)
    , brokenDate = !(date.toISOString && date.toISOString() == '0385-07-25T07:06:39.999Z'
        && fails(function(){ new Date(NaN).toISOString(); }));
  $def($def.P + $def.F * brokenDate, 'Date', {
    toISOString: function toISOString(){
      if(!isFinite(this))throw RangeError('Invalid time value');
      var d = this
        , y = d.getUTCFullYear()
        , m = d.getUTCMilliseconds()
        , s = y < 0 ? '-' : y > 9999 ? '+' : '';
      return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
        '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
        'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
        ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
    }
  });

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $def     = __webpack_require__(1)
    , toObject = __webpack_require__(19)
    , toIndex  = __webpack_require__(28)
    , toLength = __webpack_require__(8);
  $def($def.P, 'Array', {
    // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
    copyWithin: function copyWithin(target/* = 0 */, start /* = 0, end = @length */){
      var O     = toObject(this)
        , len   = toLength(O.length)
        , to    = toIndex(target, len)
        , from  = toIndex(start, len)
        , end   = arguments[2]
        , fin   = end === undefined ? len : toIndex(end, len)
        , count = Math.min(fin - from, len - to)
        , inc   = 1;
      if(from < to && to < from + count){
        inc  = -1;
        from = from + count - 1;
        to   = to   + count - 1;
      }
      while(count-- > 0){
        if(from in O)O[to] = O[from];
        else delete O[to];
        to   += inc;
        from += inc;
      } return O;
    }
  });
  __webpack_require__(22)('copyWithin');

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $def     = __webpack_require__(1)
    , toObject = __webpack_require__(19)
    , toIndex  = __webpack_require__(28)
    , toLength = __webpack_require__(8);
  $def($def.P, 'Array', {
    // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
    fill: function fill(value /*, start = 0, end = @length */){
      var O      = toObject(this, true)
        , length = toLength(O.length)
        , index  = toIndex(arguments[1], length)
        , end    = arguments[2]
        , endPos = end === undefined ? length : toIndex(end, length);
      while(endPos > index)O[index++] = value;
      return O;
    }
  });
  __webpack_require__(22)('fill');

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
  var KEY    = 'findIndex'
    , $def   = __webpack_require__(1)
    , forced = true
    , $find  = __webpack_require__(31)(6);
  // Shouldn't skip holes
  if(KEY in [])Array(1)[KEY](function(){ forced = false; });
  $def($def.P + $def.F * forced, 'Array', {
    findIndex: function findIndex(callbackfn/*, that = undefined */){
      return $find(this, callbackfn, arguments[1]);
    }
  });
  __webpack_require__(22)(KEY);

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
  var KEY    = 'find'
    , $def   = __webpack_require__(1)
    , forced = true
    , $find  = __webpack_require__(31)(5);
  // Shouldn't skip holes
  if(KEY in [])Array(1)[KEY](function(){ forced = false; });
  $def($def.P + $def.F * forced, 'Array', {
    find: function find(callbackfn/*, that = undefined */){
      return $find(this, callbackfn, arguments[1]);
    }
  });
  __webpack_require__(22)(KEY);

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var ctx         = __webpack_require__(18)
    , $def        = __webpack_require__(1)
    , toObject    = __webpack_require__(19)
    , call        = __webpack_require__(65)
    , isArrayIter = __webpack_require__(62)
    , toLength    = __webpack_require__(8)
    , getIterFn   = __webpack_require__(76);
  $def($def.S + $def.F * !__webpack_require__(42)(function(iter){ Array.from(iter); }), 'Array', {
    // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
    from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
      var O       = toObject(arrayLike)
        , C       = typeof this == 'function' ? this : Array
        , mapfn   = arguments[1]
        , mapping = mapfn !== undefined
        , index   = 0
        , iterFn  = getIterFn(O)
        , length, result, step, iterator;
      if(mapping)mapfn = ctx(mapfn, arguments[2], 2);
      // if object isn't iterable or it's array with default iterator - use simple case
      if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
        for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
          result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
        }
      } else {
        for(result = new C(length = toLength(O.length)); length > index; index++){
          result[index] = mapping ? mapfn(O[index], index) : O[index];
        }
      }
      result.length = index;
      return result;
    }
  });

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $def = __webpack_require__(1);
  $def($def.S, 'Array', {
    // 22.1.2.3 Array.of( ...items)
    of: function of(/* ...args */){
      var index  = 0
        , length = arguments.length
        , result = new (typeof this == 'function' ? this : Array)(length);
      while(length > index)result[index] = arguments[index++];
      result.length = length;
      return result;
    }
  });

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(38)(Array);

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $             = __webpack_require__(2)
    , isObject      = __webpack_require__(3)
    , HAS_INSTANCE  = __webpack_require__(6)('hasInstance')
    , FunctionProto = Function.prototype;
  // 19.2.3.6 Function.prototype[@@hasInstance](V)
  if(!(HAS_INSTANCE in FunctionProto))$.setDesc(FunctionProto, HAS_INSTANCE, {value: function(O){
    if(typeof this != 'function' || !isObject(O))return false;
    if(!isObject(this.prototype))return O instanceof this;
    // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
    while(O = $.getProto(O))if(this.prototype === O)return true;
    return false;
  }});

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

  var setDesc    = __webpack_require__(2).setDesc
    , createDesc = __webpack_require__(20)
    , has        = __webpack_require__(7)
    , FProto     = Function.prototype
    , nameRE     = /^\s*function ([^ (]*)/
    , NAME       = 'name';
  // 19.2.4.2 name
  NAME in FProto || __webpack_require__(13) && setDesc(FProto, NAME, {
    configurable: true,
    get: function(){
      var match = ('' + this).match(nameRE)
        , name  = match ? match[1] : '';
      has(this, NAME) || setDesc(this, NAME, createDesc(5, name));
      return name;
    }
  });

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var strong = __webpack_require__(54);
  
  // 23.1 Map Objects
  __webpack_require__(33)('Map', function(get){
    return function Map(){ return get(this, arguments[0]); };
  }, {
    // 23.1.3.6 Map.prototype.get(key)
    get: function get(key){
      var entry = strong.getEntry(this, key);
      return entry && entry.v;
    },
    // 23.1.3.9 Map.prototype.set(key, value)
    set: function set(key, value){
      return strong.def(this, key === 0 ? 0 : key, value);
    }
  }, strong, true);

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.3 Math.acosh(x)
  var $def   = __webpack_require__(1)
    , log1p  = __webpack_require__(68)
    , sqrt   = Math.sqrt
    , $acosh = Math.acosh;
  
  // V8 bug https://code.google.com/p/v8/issues/detail?id=3509 
  $def($def.S + $def.F * !($acosh && Math.floor($acosh(Number.MAX_VALUE)) == 710), 'Math', {
    acosh: function acosh(x){
      return (x = +x) < 1 ? NaN : x > 94906265.62425156
        ? Math.log(x) + Math.LN2
        : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
    }
  });

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.5 Math.asinh(x)
  var $def = __webpack_require__(1);
  
  function asinh(x){
    return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
  }
  
  $def($def.S, 'Math', {asinh: asinh});

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.7 Math.atanh(x)
  var $def = __webpack_require__(1);
  
  $def($def.S, 'Math', {
    atanh: function atanh(x){
      return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
    }
  });

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.9 Math.cbrt(x)
  var $def = __webpack_require__(1)
    , sign = __webpack_require__(45);
  
  $def($def.S, 'Math', {
    cbrt: function cbrt(x){
      return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
    }
  });

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.11 Math.clz32(x)
  var $def = __webpack_require__(1);
  
  $def($def.S, 'Math', {
    clz32: function clz32(x){
      return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
    }
  });

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.12 Math.cosh(x)
  var $def = __webpack_require__(1)
    , exp  = Math.exp;
  
  $def($def.S, 'Math', {
    cosh: function cosh(x){
      return (exp(x = +x) + exp(-x)) / 2;
    }
  });

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.14 Math.expm1(x)
  var $def = __webpack_require__(1);
  
  $def($def.S, 'Math', {expm1: __webpack_require__(40)});

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.16 Math.fround(x)
  var $def  = __webpack_require__(1)
    , sign  = __webpack_require__(45)
    , pow   = Math.pow
    , EPSILON   = pow(2, -52)
    , EPSILON32 = pow(2, -23)
    , MAX32     = pow(2, 127) * (2 - EPSILON32)
    , MIN32     = pow(2, -126);
  
  var roundTiesToEven = function(n){
    return n + 1 / EPSILON - 1 / EPSILON;
  };
  
  
  $def($def.S, 'Math', {
    fround: function fround(x){
      var $abs  = Math.abs(x)
        , $sign = sign(x)
        , a, result;
      if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
      a = (1 + EPSILON32 / EPSILON) * $abs;
      result = a - (a - $abs);
      if(result > MAX32 || result != result)return $sign * Infinity;
      return $sign * result;
    }
  });

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
  var $def = __webpack_require__(1)
    , abs  = Math.abs;
  
  $def($def.S, 'Math', {
    hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
      var sum  = 0
        , i    = 0
        , len  = arguments.length
        , larg = 0
        , arg, div;
      while(i < len){
        arg = abs(arguments[i++]);
        if(larg < arg){
          div  = larg / arg;
          sum  = sum * div * div + 1;
          larg = arg;
        } else if(arg > 0){
          div  = arg / larg;
          sum += div * div;
        } else sum += arg;
      }
      return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
    }
  });

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.18 Math.imul(x, y)
  var $def = __webpack_require__(1);
  
  // WebKit fails with big numbers
  $def($def.S + $def.F * __webpack_require__(9)(function(){
    return Math.imul(0xffffffff, 5) != -5;
  }), 'Math', {
    imul: function imul(x, y){
      var UINT16 = 0xffff
        , xn = +x
        , yn = +y
        , xl = UINT16 & xn
        , yl = UINT16 & yn;
      return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
    }
  });

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.21 Math.log10(x)
  var $def = __webpack_require__(1);
  
  $def($def.S, 'Math', {
    log10: function log10(x){
      return Math.log(x) / Math.LN10;
    }
  });

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.20 Math.log1p(x)
  var $def = __webpack_require__(1);
  
  $def($def.S, 'Math', {log1p: __webpack_require__(68)});

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.22 Math.log2(x)
  var $def = __webpack_require__(1);
  
  $def($def.S, 'Math', {
    log2: function log2(x){
      return Math.log(x) / Math.LN2;
    }
  });

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.28 Math.sign(x)
  var $def = __webpack_require__(1);
  
  $def($def.S, 'Math', {sign: __webpack_require__(45)});

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.30 Math.sinh(x)
  var $def  = __webpack_require__(1)
    , expm1 = __webpack_require__(40)
    , exp   = Math.exp;
  
  $def($def.S, 'Math', {
    sinh: function sinh(x){
      return Math.abs(x = +x) < 1
        ? (expm1(x) - expm1(-x)) / 2
        : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
    }
  });

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.33 Math.tanh(x)
  var $def  = __webpack_require__(1)
    , expm1 = __webpack_require__(40)
    , exp   = Math.exp;
  
  $def($def.S, 'Math', {
    tanh: function tanh(x){
      var a = expm1(x = +x)
        , b = expm1(-x);
      return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
    }
  });

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

  // 20.2.2.34 Math.trunc(x)
  var $def = __webpack_require__(1);
  
  $def($def.S, 'Math', {
    trunc: function trunc(it){
      return (it > 0 ? Math.floor : Math.ceil)(it);
    }
  });

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $          = __webpack_require__(2)
    , global     = __webpack_require__(5)
    , has        = __webpack_require__(7)
    , cof        = __webpack_require__(17)
    , isObject   = __webpack_require__(3)
    , fails      = __webpack_require__(9)
    , NUMBER     = 'Number'
    , $Number    = global[NUMBER]
    , Base       = $Number
    , proto      = $Number.prototype
    // Opera ~12 has broken Object#toString
    , BROKEN_COF = cof($.create(proto)) == NUMBER;
  var toPrimitive = function(it){
    var fn, val;
    if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
    if(typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
    throw TypeError("Can't convert object to number");
  };
  var toNumber = function(it){
    if(isObject(it))it = toPrimitive(it);
    if(typeof it == 'string' && it.length > 2 && it.charCodeAt(0) == 48){
      var binary = false;
      switch(it.charCodeAt(1)){
        case 66 : case 98  : binary = true;
        case 79 : case 111 : return parseInt(it.slice(2), binary ? 2 : 8);
      }
    } return +it;
  };
  if(!($Number('0o1') && $Number('0b1'))){
    $Number = function Number(it){
      var that = this;
      return that instanceof $Number
        // check on 1..constructor(foo) case
        && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
          ? new Base(toNumber(it)) : toNumber(it);
    };
    $.each.call(__webpack_require__(13) ? $.getNames(Base) : (
        // ES3:
        'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
        // ES6 (in case, if modules with ES6 Number statics required before):
        'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
        'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
      ).split(','), function(key){
        if(has(Base, key) && !has($Number, key)){
          $.setDesc($Number, key, $.getDesc(Base, key));
        }
      }
    );
    $Number.prototype = proto;
    proto.constructor = $Number;
    __webpack_require__(12)(global, NUMBER, $Number);
  }

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

  // 20.1.2.1 Number.EPSILON
  var $def = __webpack_require__(1);
  
  $def($def.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

  // 20.1.2.2 Number.isFinite(number)
  var $def      = __webpack_require__(1)
    , _isFinite = __webpack_require__(5).isFinite;
  
  $def($def.S, 'Number', {
    isFinite: function isFinite(it){
      return typeof it == 'number' && _isFinite(it);
    }
  });

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

  // 20.1.2.3 Number.isInteger(number)
  var $def = __webpack_require__(1);
  
  $def($def.S, 'Number', {isInteger: __webpack_require__(63)});

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

  // 20.1.2.4 Number.isNaN(number)
  var $def = __webpack_require__(1);
  
  $def($def.S, 'Number', {
    isNaN: function isNaN(number){
      return number != number;
    }
  });

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

  // 20.1.2.5 Number.isSafeInteger(number)
  var $def      = __webpack_require__(1)
    , isInteger = __webpack_require__(63)
    , abs       = Math.abs;
  
  $def($def.S, 'Number', {
    isSafeInteger: function isSafeInteger(number){
      return isInteger(number) && abs(number) <= 0x1fffffffffffff;
    }
  });

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

  // 20.1.2.6 Number.MAX_SAFE_INTEGER
  var $def = __webpack_require__(1);
  
  $def($def.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

  // 20.1.2.10 Number.MIN_SAFE_INTEGER
  var $def = __webpack_require__(1);
  
  $def($def.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

  // 20.1.2.12 Number.parseFloat(string)
  var $def = __webpack_require__(1);
  
  $def($def.S, 'Number', {parseFloat: parseFloat});

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

  // 20.1.2.13 Number.parseInt(string, radix)
  var $def = __webpack_require__(1);
  
  $def($def.S, 'Number', {parseInt: parseInt});

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.3.1 Object.assign(target, source)
  var $def = __webpack_require__(1);
  $def($def.S, 'Object', {assign: __webpack_require__(98)});

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.2.5 Object.freeze(O)
  var isObject = __webpack_require__(3);
  
  __webpack_require__(11)('freeze', function($freeze){
    return function freeze(it){
      return $freeze && isObject(it) ? $freeze(it) : it;
    };
  });

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  var toIObject = __webpack_require__(14);
  
  __webpack_require__(11)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
    return function getOwnPropertyDescriptor(it, key){
      return $getOwnPropertyDescriptor(toIObject(it), key);
    };
  });

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.2.7 Object.getOwnPropertyNames(O)
  __webpack_require__(11)('getOwnPropertyNames', function(){
    return __webpack_require__(60).get;
  });

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.2.9 Object.getPrototypeOf(O)
  var toObject = __webpack_require__(19);
  
  __webpack_require__(11)('getPrototypeOf', function($getPrototypeOf){
    return function getPrototypeOf(it){
      return $getPrototypeOf(toObject(it));
    };
  });

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.2.11 Object.isExtensible(O)
  var isObject = __webpack_require__(3);
  
  __webpack_require__(11)('isExtensible', function($isExtensible){
    return function isExtensible(it){
      return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
    };
  });

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.2.12 Object.isFrozen(O)
  var isObject = __webpack_require__(3);
  
  __webpack_require__(11)('isFrozen', function($isFrozen){
    return function isFrozen(it){
      return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
    };
  });

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.2.13 Object.isSealed(O)
  var isObject = __webpack_require__(3);
  
  __webpack_require__(11)('isSealed', function($isSealed){
    return function isSealed(it){
      return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
    };
  });

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.3.10 Object.is(value1, value2)
  var $def = __webpack_require__(1);
  $def($def.S, 'Object', {
    is: __webpack_require__(71)
  });

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.2.14 Object.keys(O)
  var toObject = __webpack_require__(19);
  
  __webpack_require__(11)('keys', function($keys){
    return function keys(it){
      return $keys(toObject(it));
    };
  });

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.2.15 Object.preventExtensions(O)
  var isObject = __webpack_require__(3);
  
  __webpack_require__(11)('preventExtensions', function($preventExtensions){
    return function preventExtensions(it){
      return $preventExtensions && isObject(it) ? $preventExtensions(it) : it;
    };
  });

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.2.17 Object.seal(O)
  var isObject = __webpack_require__(3);
  
  __webpack_require__(11)('seal', function($seal){
    return function seal(it){
      return $seal && isObject(it) ? $seal(it) : it;
    };
  });

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

  // 19.1.3.19 Object.setPrototypeOf(O, proto)
  var $def = __webpack_require__(1);
  $def($def.S, 'Object', {setPrototypeOf: __webpack_require__(44).set});

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // 19.1.3.6 Object.prototype.toString()
  var classof = __webpack_require__(32)
    , test    = {};
  test[__webpack_require__(6)('toStringTag')] = 'z';
  if(test + '' != '[object z]'){
    __webpack_require__(12)(Object.prototype, 'toString', function toString(){
      return '[object ' + classof(this) + ']';
    }, true);
  }

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $          = __webpack_require__(2)
    , LIBRARY    = __webpack_require__(43)
    , global     = __webpack_require__(5)
    , ctx        = __webpack_require__(18)
    , classof    = __webpack_require__(32)
    , $def       = __webpack_require__(1)
    , isObject   = __webpack_require__(3)
    , anObject   = __webpack_require__(4)
    , aFunction  = __webpack_require__(24)
    , strictNew  = __webpack_require__(39)
    , forOf      = __webpack_require__(25)
    , setProto   = __webpack_require__(44).set
    , same       = __webpack_require__(71)
    , species    = __webpack_require__(38)
    , SPECIES    = __webpack_require__(6)('species')
    , RECORD     = __webpack_require__(21)('record')
    , asap       = __webpack_require__(100)
    , PROMISE    = 'Promise'
    , process    = global.process
    , isNode     = classof(process) == 'process'
    , P          = global[PROMISE]
    , Wrapper;
  
  var testResolve = function(sub){
    var test = new P(function(){});
    if(sub)test.constructor = Object;
    return P.resolve(test) === test;
  };
  
  var useNative = function(){
    var works = false;
    function P2(x){
      var self = new P(x);
      setProto(self, P2.prototype);
      return self;
    }
    try {
      works = P && P.resolve && testResolve();
      setProto(P2, P);
      P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
      // actual Firefox has broken subclass support, test that
      if(!(P2.resolve(5).then(function(){}) instanceof P2)){
        works = false;
      }
      // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
      if(works && __webpack_require__(13)){
        var thenableThenGotten = false;
        P.resolve($.setDesc({}, 'then', {
          get: function(){ thenableThenGotten = true; }
        }));
        works = thenableThenGotten;
      }
    } catch(e){ works = false; }
    return works;
  }();
  
  // helpers
  var isPromise = function(it){
    return isObject(it) && (useNative ? classof(it) == 'Promise' : RECORD in it);
  };
  var sameConstructor = function(a, b){
    // library wrapper special case
    if(LIBRARY && a === P && b === Wrapper)return true;
    return same(a, b);
  };
  var getConstructor = function(C){
    var S = anObject(C)[SPECIES];
    return S != undefined ? S : C;
  };
  var isThenable = function(it){
    var then;
    return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
  };
  var notify = function(record, isReject){
    if(record.n)return;
    record.n = true;
    var chain = record.c;
    asap(function(){
      var value = record.v
        , ok    = record.s == 1
        , i     = 0;
      var run = function(react){
        var cb = ok ? react.ok : react.fail
          , ret, then;
        try {
          if(cb){
            if(!ok)record.h = true;
            ret = cb === true ? value : cb(value);
            if(ret === react.P){
              react.rej(TypeError('Promise-chain cycle'));
            } else if(then = isThenable(ret)){
              then.call(ret, react.res, react.rej);
            } else react.res(ret);
          } else react.rej(value);
        } catch(err){
          react.rej(err);
        }
      };
      while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
      chain.length = 0;
      record.n = false;
      if(isReject)setTimeout(function(){
        asap(function(){
          if(isUnhandled(record.p)){
            if(isNode){
              process.emit('unhandledRejection', value, record.p);
            } else if(global.console && console.error){
              console.error('Unhandled promise rejection', value);
            }
          }
          record.a = undefined;
        });
      }, 1);
    });
  };
  var isUnhandled = function(promise){
    var record = promise[RECORD]
      , chain  = record.a || record.c
      , i      = 0
      , react;
    if(record.h)return false;
    while(chain.length > i){
      react = chain[i++];
      if(react.fail || !isUnhandled(react.P))return false;
    } return true;
  };
  var $reject = function(value){
    var record = this;
    if(record.d)return;
    record.d = true;
    record = record.r || record; // unwrap
    record.v = value;
    record.s = 2;
    record.a = record.c.slice();
    notify(record, true);
  };
  var $resolve = function(value){
    var record = this
      , then;
    if(record.d)return;
    record.d = true;
    record = record.r || record; // unwrap
    try {
      if(then = isThenable(value)){
        asap(function(){
          var wrapper = {r: record, d: false}; // wrap
          try {
            then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
          } catch(e){
            $reject.call(wrapper, e);
          }
        });
      } else {
        record.v = value;
        record.s = 1;
        notify(record, false);
      }
    } catch(e){
      $reject.call({r: record, d: false}, e); // wrap
    }
  };
  
  // constructor polyfill
  if(!useNative){
    // 25.4.3.1 Promise(executor)
    P = function Promise(executor){
      aFunction(executor);
      var record = {
        p: strictNew(this, P, PROMISE),         // <- promise
        c: [],                                  // <- awaiting reactions
        a: undefined,                           // <- checked in isUnhandled reactions
        s: 0,                                   // <- state
        d: false,                               // <- done
        v: undefined,                           // <- value
        h: false,                               // <- handled rejection
        n: false                                // <- notify
      };
      this[RECORD] = record;
      try {
        executor(ctx($resolve, record, 1), ctx($reject, record, 1));
      } catch(err){
        $reject.call(record, err);
      }
    };
    __webpack_require__(37)(P.prototype, {
      // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
      then: function then(onFulfilled, onRejected){
        var S = anObject(anObject(this).constructor)[SPECIES];
        var react = {
          ok:   typeof onFulfilled == 'function' ? onFulfilled : true,
          fail: typeof onRejected == 'function'  ? onRejected  : false
        };
        var promise = react.P = new (S != undefined ? S : P)(function(res, rej){
          react.res = aFunction(res);
          react.rej = aFunction(rej);
        });
        var record = this[RECORD];
        record.c.push(react);
        if(record.a)record.a.push(react);
        if(record.s)notify(record, false);
        return promise;
      },
      // 25.4.5.1 Promise.prototype.catch(onRejected)
      'catch': function(onRejected){
        return this.then(undefined, onRejected);
      }
    });
  }
  
  // export
  $def($def.G + $def.W + $def.F * !useNative, {Promise: P});
  __webpack_require__(27)(P, PROMISE);
  species(P);
  species(Wrapper = __webpack_require__(15)[PROMISE]);
  
  // statics
  $def($def.S + $def.F * !useNative, PROMISE, {
    // 25.4.4.5 Promise.reject(r)
    reject: function reject(r){
      return new this(function(res, rej){ rej(r); });
    }
  });
  $def($def.S + $def.F * (!useNative || testResolve(true)), PROMISE, {
    // 25.4.4.6 Promise.resolve(x)
    resolve: function resolve(x){
      return isPromise(x) && sameConstructor(x.constructor, this)
        ? x : new this(function(res){ res(x); });
    }
  });
  $def($def.S + $def.F * !(useNative && __webpack_require__(42)(function(iter){
    P.all(iter)['catch'](function(){});
  })), PROMISE, {
    // 25.4.4.1 Promise.all(iterable)
    all: function all(iterable){
      var C      = getConstructor(this)
        , values = [];
      return new C(function(res, rej){
        forOf(iterable, false, values.push, values);
        var remaining = values.length
          , results   = Array(remaining);
        if(remaining)$.each.call(values, function(promise, index){
          C.resolve(promise).then(function(value){
            results[index] = value;
            --remaining || res(results);
          }, rej);
        });
        else res(results);
      });
    },
    // 25.4.4.4 Promise.race(iterable)
    race: function race(iterable){
      var C = getConstructor(this);
      return new C(function(res, rej){
        forOf(iterable, false, function(promise){
          C.resolve(promise).then(res, rej);
        });
      });
    }
  });

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

  // 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
  var $def   = __webpack_require__(1)
    , _apply = Function.apply;
  
  $def($def.S, 'Reflect', {
    apply: function apply(target, thisArgument, argumentsList){
      return _apply.call(target, thisArgument, argumentsList);
    }
  });

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

  // 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
  var $         = __webpack_require__(2)
    , $def      = __webpack_require__(1)
    , aFunction = __webpack_require__(24)
    , anObject  = __webpack_require__(4)
    , isObject  = __webpack_require__(3)
    , bind      = Function.bind || __webpack_require__(15).Function.prototype.bind;
  
  $def($def.S, 'Reflect', {
    construct: function construct(Target, args /*, newTarget*/){
      aFunction(Target);
      if(arguments.length < 3){
        // w/o newTarget, optimization for 0-4 arguments
        if(args != undefined)switch(anObject(args).length){
          case 0: return new Target;
          case 1: return new Target(args[0]);
          case 2: return new Target(args[0], args[1]);
          case 3: return new Target(args[0], args[1], args[2]);
          case 4: return new Target(args[0], args[1], args[2], args[3]);
        }
        // w/o newTarget, lot of arguments case
        var $args = [null];
        $args.push.apply($args, args);
        return new (bind.apply(Target, $args));
      }
      // with newTarget, not support built-in constructors
      var proto    = aFunction(arguments[2]).prototype
        , instance = $.create(isObject(proto) ? proto : Object.prototype)
        , result   = Function.apply.call(Target, instance, args);
      return isObject(result) ? result : instance;
    }
  });

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

  // 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
  var $        = __webpack_require__(2)
    , $def     = __webpack_require__(1)
    , anObject = __webpack_require__(4);
  
  // MS Edge has broken Reflect.defineProperty - throwing instead of returning false
  $def($def.S + $def.F * __webpack_require__(9)(function(){
    Reflect.defineProperty($.setDesc({}, 1, {value: 1}), 1, {value: 2});
  }), 'Reflect', {
    defineProperty: function defineProperty(target, propertyKey, attributes){
      anObject(target);
      try {
        $.setDesc(target, propertyKey, attributes);
        return true;
      } catch(e){
        return false;
      }
    }
  });

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

  // 26.1.4 Reflect.deleteProperty(target, propertyKey)
  var $def     = __webpack_require__(1)
    , getDesc  = __webpack_require__(2).getDesc
    , anObject = __webpack_require__(4);
  
  $def($def.S, 'Reflect', {
    deleteProperty: function deleteProperty(target, propertyKey){
      var desc = getDesc(anObject(target), propertyKey);
      return desc && !desc.configurable ? false : delete target[propertyKey];
    }
  });

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // 26.1.5 Reflect.enumerate(target)
  var $def     = __webpack_require__(1)
    , anObject = __webpack_require__(4);
  var Enumerate = function(iterated){
    this._t = anObject(iterated); // target
    this._i = 0;                  // next index
    var keys = this._k = []       // keys
      , key;
    for(key in iterated)keys.push(key);
  };
  __webpack_require__(66)(Enumerate, 'Object', function(){
    var that = this
      , keys = that._k
      , key;
    do {
      if(that._i >= keys.length)return {value: undefined, done: true};
    } while(!((key = keys[that._i++]) in that._t));
    return {value: key, done: false};
  });
  
  $def($def.S, 'Reflect', {
    enumerate: function enumerate(target){
      return new Enumerate(target);
    }
  });

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

  // 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
  var $        = __webpack_require__(2)
    , $def     = __webpack_require__(1)
    , anObject = __webpack_require__(4);
  
  $def($def.S, 'Reflect', {
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
      return $.getDesc(anObject(target), propertyKey);
    }
  });

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

  // 26.1.8 Reflect.getPrototypeOf(target)
  var $def     = __webpack_require__(1)
    , getProto = __webpack_require__(2).getProto
    , anObject = __webpack_require__(4);
  
  $def($def.S, 'Reflect', {
    getPrototypeOf: function getPrototypeOf(target){
      return getProto(anObject(target));
    }
  });

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

  // 26.1.6 Reflect.get(target, propertyKey [, receiver])
  var $        = __webpack_require__(2)
    , has      = __webpack_require__(7)
    , $def     = __webpack_require__(1)
    , isObject = __webpack_require__(3)
    , anObject = __webpack_require__(4);
  
  function get(target, propertyKey/*, receiver*/){
    var receiver = arguments.length < 3 ? target : arguments[2]
      , desc, proto;
    if(anObject(target) === receiver)return target[propertyKey];
    if(desc = $.getDesc(target, propertyKey))return has(desc, 'value')
      ? desc.value
      : desc.get !== undefined
        ? desc.get.call(receiver)
        : undefined;
    if(isObject(proto = $.getProto(target)))return get(proto, propertyKey, receiver);
  }
  
  $def($def.S, 'Reflect', {get: get});

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

  // 26.1.9 Reflect.has(target, propertyKey)
  var $def = __webpack_require__(1);
  
  $def($def.S, 'Reflect', {
    has: function has(target, propertyKey){
      return propertyKey in target;
    }
  });

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

  // 26.1.10 Reflect.isExtensible(target)
  var $def          = __webpack_require__(1)
    , anObject      = __webpack_require__(4)
    , $isExtensible = Object.isExtensible;
  
  $def($def.S, 'Reflect', {
    isExtensible: function isExtensible(target){
      anObject(target);
      return $isExtensible ? $isExtensible(target) : true;
    }
  });

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

  // 26.1.11 Reflect.ownKeys(target)
  var $def = __webpack_require__(1);
  
  $def($def.S, 'Reflect', {ownKeys: __webpack_require__(70)});

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

  // 26.1.12 Reflect.preventExtensions(target)
  var $def               = __webpack_require__(1)
    , anObject           = __webpack_require__(4)
    , $preventExtensions = Object.preventExtensions;
  
  $def($def.S, 'Reflect', {
    preventExtensions: function preventExtensions(target){
      anObject(target);
      try {
        if($preventExtensions)$preventExtensions(target);
        return true;
      } catch(e){
        return false;
      }
    }
  });

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

  // 26.1.14 Reflect.setPrototypeOf(target, proto)
  var $def     = __webpack_require__(1)
    , setProto = __webpack_require__(44);
  
  if(setProto)$def($def.S, 'Reflect', {
    setPrototypeOf: function setPrototypeOf(target, proto){
      setProto.check(target, proto);
      try {
        setProto.set(target, proto);
        return true;
      } catch(e){
        return false;
      }
    }
  });

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

  // 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
  var $          = __webpack_require__(2)
    , has        = __webpack_require__(7)
    , $def       = __webpack_require__(1)
    , createDesc = __webpack_require__(20)
    , anObject   = __webpack_require__(4)
    , isObject   = __webpack_require__(3);
  
  function set(target, propertyKey, V/*, receiver*/){
    var receiver = arguments.length < 4 ? target : arguments[3]
      , ownDesc  = $.getDesc(anObject(target), propertyKey)
      , existingDescriptor, proto;
    if(!ownDesc){
      if(isObject(proto = $.getProto(target))){
        return set(proto, propertyKey, V, receiver);
      }
      ownDesc = createDesc(0);
    }
    if(has(ownDesc, 'value')){
      if(ownDesc.writable === false || !isObject(receiver))return false;
      existingDescriptor = $.getDesc(receiver, propertyKey) || createDesc(0);
      existingDescriptor.value = V;
      $.setDesc(receiver, propertyKey, existingDescriptor);
      return true;
    }
    return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
  }
  
  $def($def.S, 'Reflect', {set: set});

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

  var $       = __webpack_require__(2)
    , global  = __webpack_require__(5)
    , cof     = __webpack_require__(17)
    , $flags  = __webpack_require__(59)
    , $RegExp = global.RegExp
    , Base    = $RegExp
    , proto   = $RegExp.prototype
    , re      = /a/g
    // "new" creates a new object
    , CORRECT_NEW = new $RegExp(re) !== re
    // RegExp allows a regex with flags as the pattern
    , ALLOWS_RE_WITH_FLAGS = function(){
      try {
        return $RegExp(re, 'i') == '/a/i';
      } catch(e){ /* empty */ }
    }();
  
  if(__webpack_require__(13)){
    if(!CORRECT_NEW || !ALLOWS_RE_WITH_FLAGS){
      $RegExp = function RegExp(pattern, flags){
        var patternIsRegExp  = cof(pattern) == 'RegExp'
          , flagsIsUndefined = flags === undefined;
        if(!(this instanceof $RegExp) && patternIsRegExp && flagsIsUndefined)return pattern;
        return CORRECT_NEW
          ? new Base(patternIsRegExp && !flagsIsUndefined ? pattern.source : pattern, flags)
          : new Base(patternIsRegExp ? pattern.source : pattern
            , patternIsRegExp && flagsIsUndefined ? $flags.call(pattern) : flags);
      };
      $.each.call($.getNames(Base), function(key){
        key in $RegExp || $.setDesc($RegExp, key, {
          configurable: true,
          get: function(){ return Base[key]; },
          set: function(it){ Base[key] = it; }
        });
      });
      proto.constructor = $RegExp;
      $RegExp.prototype = proto;
      __webpack_require__(12)(global, 'RegExp', $RegExp);
    }
  }
  
  __webpack_require__(38)($RegExp);

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

  // 21.2.5.3 get RegExp.prototype.flags()
  var $ = __webpack_require__(2);
  if(__webpack_require__(13) && /./g.flags != 'g')$.setDesc(RegExp.prototype, 'flags', {
    configurable: true,
    get: __webpack_require__(59)
  });

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

  // @@match logic
  __webpack_require__(34)('match', 1, function(defined, MATCH){
    // 21.1.3.11 String.prototype.match(regexp)
    return function match(regexp){
      'use strict';
      var O  = defined(this)
        , fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    };
  });

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

  // @@replace logic
  __webpack_require__(34)('replace', 2, function(defined, REPLACE, $replace){
    // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
    return function replace(searchValue, replaceValue){
      'use strict';
      var O  = defined(this)
        , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    };
  });

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

  // @@search logic
  __webpack_require__(34)('search', 1, function(defined, SEARCH){
    // 21.1.3.15 String.prototype.search(regexp)
    return function search(regexp){
      'use strict';
      var O  = defined(this)
        , fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    };
  });

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

  // @@split logic
  __webpack_require__(34)('split', 2, function(defined, SPLIT, $split){
    // 21.1.3.17 String.prototype.split(separator, limit)
    return function split(separator, limit){
      'use strict';
      var O  = defined(this)
        , fn = separator == undefined ? undefined : separator[SPLIT];
      return fn !== undefined
        ? fn.call(separator, O, limit)
        : $split.call(String(O), separator, limit);
    };
  });

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var strong = __webpack_require__(54);
  
  // 23.2 Set Objects
  __webpack_require__(33)('Set', function(get){
    return function Set(){ return get(this, arguments[0]); };
  }, {
    // 23.2.3.1 Set.prototype.add(value)
    add: function add(value){
      return strong.def(this, value = value === 0 ? 0 : value, value);
    }
  }, strong);

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $def = __webpack_require__(1)
    , $at  = __webpack_require__(46)(false);
  $def($def.P, 'String', {
    // 21.1.3.3 String.prototype.codePointAt(pos)
    codePointAt: function codePointAt(pos){
      return $at(this, pos);
    }
  });

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $def     = __webpack_require__(1)
    , toLength = __webpack_require__(8)
    , context  = __webpack_require__(47);
  
  // should throw error on regex
  $def($def.P + $def.F * !__webpack_require__(9)(function(){ 'q'.endsWith(/./); }), 'String', {
    // 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
    endsWith: function endsWith(searchString /*, endPosition = @length */){
      var that = context(this, searchString, 'endsWith')
        , endPosition = arguments[1]
        , len    = toLength(that.length)
        , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
        , search = String(searchString);
      return that.slice(end - search.length, end) === search;
    }
  });

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

  var $def    = __webpack_require__(1)
    , toIndex = __webpack_require__(28)
    , fromCharCode = String.fromCharCode
    , $fromCodePoint = String.fromCodePoint;
  
  // length should be 1, old FF problem
  $def($def.S + $def.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
    // 21.1.2.2 String.fromCodePoint(...codePoints)
    fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
      var res = []
        , len = arguments.length
        , i   = 0
        , code;
      while(len > i){
        code = +arguments[i++];
        if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
        res.push(code < 0x10000
          ? fromCharCode(code)
          : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
        );
      } return res.join('');
    }
  });

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $def    = __webpack_require__(1)
    , context = __webpack_require__(47);
  
  $def($def.P, 'String', {
    // 21.1.3.7 String.prototype.includes(searchString, position = 0)
    includes: function includes(searchString /*, position = 0 */){
      return !!~context(this, searchString, 'includes').indexOf(searchString, arguments[1]);
    }
  });

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $at  = __webpack_require__(46)(true);
  
  // 21.1.3.27 String.prototype[@@iterator]()
  __webpack_require__(41)(String, 'String', function(iterated){
    this._t = String(iterated); // target
    this._i = 0;                // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
  }, function(){
    var O     = this._t
      , index = this._i
      , point;
    if(index >= O.length)return {value: undefined, done: true};
    point = $at(O, index);
    this._i += point.length;
    return {value: point, done: false};
  });

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

  var $def      = __webpack_require__(1)
    , toIObject = __webpack_require__(14)
    , toLength  = __webpack_require__(8);
  
  $def($def.S, 'String', {
    // 21.1.2.4 String.raw(callSite, ...substitutions)
    raw: function raw(callSite){
      var tpl = toIObject(callSite.raw)
        , len = toLength(tpl.length)
        , sln = arguments.length
        , res = []
        , i   = 0;
      while(len > i){
        res.push(String(tpl[i++]));
        if(i < sln)res.push(String(arguments[i]));
      } return res.join('');
    }
  });

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

  var $def = __webpack_require__(1);
  
  $def($def.P, 'String', {
    // 21.1.3.13 String.prototype.repeat(count)
    repeat: __webpack_require__(74)
  });

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $def     = __webpack_require__(1)
    , toLength = __webpack_require__(8)
    , context  = __webpack_require__(47);
  
  // should throw error on regex
  $def($def.P + $def.F * !__webpack_require__(9)(function(){ 'q'.startsWith(/./); }), 'String', {
    // 21.1.3.18 String.prototype.startsWith(searchString [, position ])
    startsWith: function startsWith(searchString /*, position = 0 */){
      var that   = context(this, searchString, 'startsWith')
        , index  = toLength(Math.min(arguments[1], that.length))
        , search = String(searchString);
      return that.slice(index, index + search.length) === search;
    }
  });

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // 21.1.3.25 String.prototype.trim()
  __webpack_require__(48)('trim', function($trim){
    return function trim(){
      return $trim(this, 3);
    };
  });

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // ECMAScript 6 symbols shim
  var $              = __webpack_require__(2)
    , global         = __webpack_require__(5)
    , has            = __webpack_require__(7)
    , SUPPORT_DESC   = __webpack_require__(13)
    , $def           = __webpack_require__(1)
    , $redef         = __webpack_require__(12)
    , shared         = __webpack_require__(72)
    , setTag         = __webpack_require__(27)
    , uid            = __webpack_require__(21)
    , wks            = __webpack_require__(6)
    , keyOf          = __webpack_require__(99)
    , $names         = __webpack_require__(60)
    , enumKeys       = __webpack_require__(58)
    , anObject       = __webpack_require__(4)
    , toIObject      = __webpack_require__(14)
    , createDesc     = __webpack_require__(20)
    , getDesc        = $.getDesc
    , setDesc        = $.setDesc
    , $create        = $.create
    , getNames       = $names.get
    , $Symbol        = global.Symbol
    , setter         = false
    , HIDDEN         = wks('_hidden')
    , isEnum         = $.isEnum
    , SymbolRegistry = shared('symbol-registry')
    , AllSymbols     = shared('symbols')
    , useNative      = typeof $Symbol == 'function'
    , ObjectProto    = Object.prototype;
  
  var setSymbolDesc = SUPPORT_DESC ? function(){ // fallback for old Android
    try {
      return $create(setDesc({}, HIDDEN, {
        get: function(){
          return setDesc(this, HIDDEN, {value: false})[HIDDEN];
        }
      }))[HIDDEN] || setDesc;
    } catch(e){
      return function(it, key, D){
        var protoDesc = getDesc(ObjectProto, key);
        if(protoDesc)delete ObjectProto[key];
        setDesc(it, key, D);
        if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
      };
    }
  }() : setDesc;
  
  var wrap = function(tag){
    var sym = AllSymbols[tag] = $create($Symbol.prototype);
    sym._k = tag;
    SUPPORT_DESC && setter && setSymbolDesc(ObjectProto, tag, {
      configurable: true,
      set: function(value){
        if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
        setSymbolDesc(this, tag, createDesc(1, value));
      }
    });
    return sym;
  };
  
  function defineProperty(it, key, D){
    if(D && has(AllSymbols, key)){
      if(!D.enumerable){
        if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
        it[HIDDEN][key] = true;
      } else {
        if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
        D = $create(D, {enumerable: createDesc(0, false)});
      } return setSymbolDesc(it, key, D);
    } return setDesc(it, key, D);
  }
  function defineProperties(it, P){
    anObject(it);
    var keys = enumKeys(P = toIObject(P))
      , i    = 0
      , l = keys.length
      , key;
    while(l > i)defineProperty(it, key = keys[i++], P[key]);
    return it;
  }
  function create(it, P){
    return P === undefined ? $create(it) : defineProperties($create(it), P);
  }
  function propertyIsEnumerable(key){
    var E = isEnum.call(this, key);
    return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
      ? E : true;
  }
  function getOwnPropertyDescriptor(it, key){
    var D = getDesc(it = toIObject(it), key);
    if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
    return D;
  }
  function getOwnPropertyNames(it){
    var names  = getNames(toIObject(it))
      , result = []
      , i      = 0
      , key;
    while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
    return result;
  }
  function getOwnPropertySymbols(it){
    var names  = getNames(toIObject(it))
      , result = []
      , i      = 0
      , key;
    while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
    return result;
  }
  
  // 19.4.1.1 Symbol([description])
  if(!useNative){
    $Symbol = function Symbol(){
      if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor');
      return wrap(uid(arguments[0]));
    };
    $redef($Symbol.prototype, 'toString', function(){
      return this._k;
    });
  
    $.create     = create;
    $.isEnum     = propertyIsEnumerable;
    $.getDesc    = getOwnPropertyDescriptor;
    $.setDesc    = defineProperty;
    $.setDescs   = defineProperties;
    $.getNames   = $names.get = getOwnPropertyNames;
    $.getSymbols = getOwnPropertySymbols;
  
    if(SUPPORT_DESC && !__webpack_require__(43)){
      $redef(ObjectProto, 'propertyIsEnumerable', propertyIsEnumerable, true);
    }
  }
  
  var symbolStatics = {
    // 19.4.2.1 Symbol.for(key)
    'for': function(key){
      return has(SymbolRegistry, key += '')
        ? SymbolRegistry[key]
        : SymbolRegistry[key] = $Symbol(key);
    },
    // 19.4.2.5 Symbol.keyFor(sym)
    keyFor: function keyFor(key){
      return keyOf(SymbolRegistry, key);
    },
    useSetter: function(){ setter = true; },
    useSimple: function(){ setter = false; }
  };
  // 19.4.2.2 Symbol.hasInstance
  // 19.4.2.3 Symbol.isConcatSpreadable
  // 19.4.2.4 Symbol.iterator
  // 19.4.2.6 Symbol.match
  // 19.4.2.8 Symbol.replace
  // 19.4.2.9 Symbol.search
  // 19.4.2.10 Symbol.species
  // 19.4.2.11 Symbol.split
  // 19.4.2.12 Symbol.toPrimitive
  // 19.4.2.13 Symbol.toStringTag
  // 19.4.2.14 Symbol.unscopables
  $.each.call((
      'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
      'species,split,toPrimitive,toStringTag,unscopables'
    ).split(','), function(it){
      var sym = wks(it);
      symbolStatics[it] = useNative ? sym : wrap(sym);
    }
  );
  
  setter = true;
  
  $def($def.G + $def.W, {Symbol: $Symbol});
  
  $def($def.S, 'Symbol', symbolStatics);
  
  $def($def.S + $def.F * !useNative, 'Object', {
    // 19.1.2.2 Object.create(O [, Properties])
    create: create,
    // 19.1.2.4 Object.defineProperty(O, P, Attributes)
    defineProperty: defineProperty,
    // 19.1.2.3 Object.defineProperties(O, Properties)
    defineProperties: defineProperties,
    // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
    getOwnPropertyDescriptor: getOwnPropertyDescriptor,
    // 19.1.2.7 Object.getOwnPropertyNames(O)
    getOwnPropertyNames: getOwnPropertyNames,
    // 19.1.2.8 Object.getOwnPropertySymbols(O)
    getOwnPropertySymbols: getOwnPropertySymbols
  });
  
  // 19.4.3.5 Symbol.prototype[@@toStringTag]
  setTag($Symbol, 'Symbol');
  // 20.2.1.9 Math[@@toStringTag]
  setTag(Math, 'Math', true);
  // 24.3.3 JSON[@@toStringTag]
  setTag(global.JSON, 'JSON', true);

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $            = __webpack_require__(2)
    , weak         = __webpack_require__(56)
    , isObject     = __webpack_require__(3)
    , has          = __webpack_require__(7)
    , frozenStore  = weak.frozenStore
    , WEAK         = weak.WEAK
    , isExtensible = Object.isExtensible || isObject
    , tmp          = {};
  
  // 23.3 WeakMap Objects
  var $WeakMap = __webpack_require__(33)('WeakMap', function(get){
    return function WeakMap(){ return get(this, arguments[0]); };
  }, {
    // 23.3.3.3 WeakMap.prototype.get(key)
    get: function get(key){
      if(isObject(key)){
        if(!isExtensible(key))return frozenStore(this).get(key);
        if(has(key, WEAK))return key[WEAK][this._i];
      }
    },
    // 23.3.3.5 WeakMap.prototype.set(key, value)
    set: function set(key, value){
      return weak.def(this, key, value);
    }
  }, weak, true, true);
  
  // IE11 WeakMap frozen keys fix
  if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
    $.each.call(['delete', 'has', 'get', 'set'], function(key){
      var proto  = $WeakMap.prototype
        , method = proto[key];
      __webpack_require__(12)(proto, key, function(a, b){
        // store frozen objects on leaky map
        if(isObject(a) && !isExtensible(a)){
          var result = frozenStore(this)[key](a, b);
          return key == 'set' ? this : result;
        // store all the rest on native weakmap
        } return method.call(this, a, b);
      });
    });
  }

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var weak = __webpack_require__(56);
  
  // 23.4 WeakSet Objects
  __webpack_require__(33)('WeakSet', function(get){
    return function WeakSet(){ return get(this, arguments[0]); };
  }, {
    // 23.4.3.1 WeakSet.prototype.add(value)
    add: function add(value){
      return weak.def(this, value, true);
    }
  }, weak, false, true);

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $def      = __webpack_require__(1)
    , $includes = __webpack_require__(53)(true);
  $def($def.P, 'Array', {
    // https://github.com/domenic/Array.prototype.includes
    includes: function includes(el /*, fromIndex = 0 */){
      return $includes(this, el, arguments[1]);
    }
  });
  __webpack_require__(22)('includes');

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

  // https://github.com/DavidBruant/Map-Set.prototype.toJSON
  var $def  = __webpack_require__(1);
  
  $def($def.P, 'Map', {toJSON: __webpack_require__(55)('Map')});

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

  // http://goo.gl/XkBrjD
  var $def     = __webpack_require__(1)
    , $entries = __webpack_require__(69)(true);
  
  $def($def.S, 'Object', {
    entries: function entries(it){
      return $entries(it);
    }
  });

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

  // https://gist.github.com/WebReflection/9353781
  var $          = __webpack_require__(2)
    , $def       = __webpack_require__(1)
    , ownKeys    = __webpack_require__(70)
    , toIObject  = __webpack_require__(14)
    , createDesc = __webpack_require__(20);
  
  $def($def.S, 'Object', {
    getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
      var O       = toIObject(object)
        , setDesc = $.setDesc
        , getDesc = $.getDesc
        , keys    = ownKeys(O)
        , result  = {}
        , i       = 0
        , key, D;
      while(keys.length > i){
        D = getDesc(O, key = keys[i++]);
        if(key in result)setDesc(result, key, createDesc(0, D));
        else result[key] = D;
      } return result;
    }
  });

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

  // http://goo.gl/XkBrjD
  var $def    = __webpack_require__(1)
    , $values = __webpack_require__(69)(false);
  
  $def($def.S, 'Object', {
    values: function values(it){
      return $values(it);
    }
  });

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

  // https://github.com/benjamingr/RexExp.escape
  var $def = __webpack_require__(1)
    , $re  = __webpack_require__(103)(/[\\^$*+?.()|[\]{}]/g, '\\$&');
  $def($def.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

  // https://github.com/DavidBruant/Map-Set.prototype.toJSON
  var $def  = __webpack_require__(1);
  
  $def($def.P, 'Set', {toJSON: __webpack_require__(55)('Set')});

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

  // https://github.com/mathiasbynens/String.prototype.at
  'use strict';
  var $def = __webpack_require__(1)
    , $at  = __webpack_require__(46)(true);
  $def($def.P, 'String', {
    at: function at(pos){
      return $at(this, pos);
    }
  });

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $def = __webpack_require__(1)
    , $pad = __webpack_require__(73);
  $def($def.P, 'String', {
    padLeft: function padLeft(maxLength /*, fillString = ' ' */){
      return $pad(this, maxLength, arguments[1], true);
    }
  });

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  var $def = __webpack_require__(1)
    , $pad = __webpack_require__(73);
  $def($def.P, 'String', {
    padRight: function padRight(maxLength /*, fillString = ' ' */){
      return $pad(this, maxLength, arguments[1], false);
    }
  });

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // https://github.com/sebmarkbage/ecmascript-string-left-right-trim
  __webpack_require__(48)('trimLeft', function($trim){
    return function trimLeft(){
      return $trim(this, 1);
    };
  });

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  // https://github.com/sebmarkbage/ecmascript-string-left-right-trim
  __webpack_require__(48)('trimRight', function($trim){
    return function trimRight(){
      return $trim(this, 2);
    };
  });

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

  // JavaScript 1.6 / Strawman array statics shim
  var $       = __webpack_require__(2)
    , $def    = __webpack_require__(1)
    , $Array  = __webpack_require__(15).Array || Array
    , statics = {};
  var setStatics = function(keys, length){
    $.each.call(keys.split(','), function(key){
      if(length == undefined && key in $Array)statics[key] = $Array[key];
      else if(key in [])statics[key] = __webpack_require__(18)(Function.call, [][key], length);
    });
  };
  setStatics('pop,reverse,shift,keys,values,entries', 1);
  setStatics('indexOf,every,some,forEach,map,filter,find,findIndex,includes', 3);
  setStatics('join,slice,concat,push,splice,unshift,sort,lastIndexOf,' +
             'reduce,reduceRight,copyWithin,fill');
  $def($def.S, 'Array', statics);

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(77);
  var global      = __webpack_require__(5)
    , hide        = __webpack_require__(10)
    , Iterators   = __webpack_require__(26)
    , ITERATOR    = __webpack_require__(6)('iterator')
    , NL          = global.NodeList
    , HTC         = global.HTMLCollection
    , NLProto     = NL && NL.prototype
    , HTCProto    = HTC && HTC.prototype
    , ArrayValues = Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
  if(NL && !(ITERATOR in NLProto))hide(NLProto, ITERATOR, ArrayValues);
  if(HTC && !(ITERATOR in HTCProto))hide(HTCProto, ITERATOR, ArrayValues);

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

  var $def  = __webpack_require__(1)
    , $task = __webpack_require__(75);
  $def($def.G + $def.B, {
    setImmediate:   $task.set,
    clearImmediate: $task.clear
  });

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

  // ie9- setTimeout & setInterval additional parameters fix
  var global     = __webpack_require__(5)
    , $def       = __webpack_require__(1)
    , invoke     = __webpack_require__(35)
    , partial    = __webpack_require__(101)
    , navigator  = global.navigator
    , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
  var wrap = function(set){
    return MSIE ? function(fn, time /*, ...args */){
      return set(invoke(
        partial,
        [].slice.call(arguments, 2),
        typeof fn == 'function' ? fn : Function(fn)
      ), time);
    } : set;
  };
  $def($def.G + $def.B + $def.F * MSIE, {
    setTimeout:  wrap(global.setTimeout),
    setInterval: wrap(global.setInterval)
  });

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(104);
  __webpack_require__(187);
  __webpack_require__(142);
  __webpack_require__(150);
  __webpack_require__(154);
  __webpack_require__(155);
  __webpack_require__(143);
  __webpack_require__(153);
  __webpack_require__(152);
  __webpack_require__(148);
  __webpack_require__(149);
  __webpack_require__(147);
  __webpack_require__(144);
  __webpack_require__(146);
  __webpack_require__(151);
  __webpack_require__(145);
  __webpack_require__(113);
  __webpack_require__(112);
  __webpack_require__(132);
  __webpack_require__(133);
  __webpack_require__(134);
  __webpack_require__(135);
  __webpack_require__(136);
  __webpack_require__(137);
  __webpack_require__(138);
  __webpack_require__(139);
  __webpack_require__(140);
  __webpack_require__(141);
  __webpack_require__(115);
  __webpack_require__(116);
  __webpack_require__(117);
  __webpack_require__(118);
  __webpack_require__(119);
  __webpack_require__(120);
  __webpack_require__(121);
  __webpack_require__(122);
  __webpack_require__(123);
  __webpack_require__(124);
  __webpack_require__(125);
  __webpack_require__(126);
  __webpack_require__(127);
  __webpack_require__(128);
  __webpack_require__(129);
  __webpack_require__(130);
  __webpack_require__(131);
  __webpack_require__(180);
  __webpack_require__(183);
  __webpack_require__(186);
  __webpack_require__(182);
  __webpack_require__(178);
  __webpack_require__(179);
  __webpack_require__(181);
  __webpack_require__(184);
  __webpack_require__(185);
  __webpack_require__(109);
  __webpack_require__(110);
  __webpack_require__(77);
  __webpack_require__(111);
  __webpack_require__(105);
  __webpack_require__(106);
  __webpack_require__(108);
  __webpack_require__(107);
  __webpack_require__(171);
  __webpack_require__(172);
  __webpack_require__(173);
  __webpack_require__(174);
  __webpack_require__(175);
  __webpack_require__(176);
  __webpack_require__(156);
  __webpack_require__(114);
  __webpack_require__(177);
  __webpack_require__(188);
  __webpack_require__(189);
  __webpack_require__(157);
  __webpack_require__(158);
  __webpack_require__(159);
  __webpack_require__(160);
  __webpack_require__(161);
  __webpack_require__(164);
  __webpack_require__(162);
  __webpack_require__(163);
  __webpack_require__(165);
  __webpack_require__(166);
  __webpack_require__(167);
  __webpack_require__(168);
  __webpack_require__(170);
  __webpack_require__(169);
  __webpack_require__(190);
  __webpack_require__(197);
  __webpack_require__(198);
  __webpack_require__(199);
  __webpack_require__(200);
  __webpack_require__(201);
  __webpack_require__(195);
  __webpack_require__(193);
  __webpack_require__(194);
  __webpack_require__(192);
  __webpack_require__(191);
  __webpack_require__(196);
  __webpack_require__(202);
  __webpack_require__(205);
  __webpack_require__(204);
  __webpack_require__(203);
  module.exports = __webpack_require__(15);

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

  /* WEBPACK VAR INJECTION */(function(global, process) {/**
   * Copyright (c) 2014, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
   * additional grant of patent rights can be found in the PATENTS file in
   * the same directory.
   */
  
  !(function(global) {
    "use strict";
  
    var hasOwn = Object.prototype.hasOwnProperty;
    var undefined; // More compressible than void 0.
    var iteratorSymbol =
      typeof Symbol === "function" && Symbol.iterator || "@@iterator";
  
    var inModule = typeof module === "object";
    var runtime = global.regeneratorRuntime;
    if (runtime) {
      if (inModule) {
        // If regeneratorRuntime is defined globally and we're in a module,
        // make the exports object identical to regeneratorRuntime.
        module.exports = runtime;
      }
      // Don't bother evaluating the rest of this file if the runtime was
      // already defined globally.
      return;
    }
  
    // Define the runtime globally (as expected by generated code) as either
    // module.exports (if we're in a module) or a new, empty object.
    runtime = global.regeneratorRuntime = inModule ? module.exports : {};
  
    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided, then outerFn.prototype instanceof Generator.
      var generator = Object.create((outerFn || Generator).prototype);
  
      generator._invoke = makeInvokeMethod(
        innerFn, self || null,
        new Context(tryLocsList || [])
      );
  
      return generator;
    }
    runtime.wrap = wrap;
  
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
      try {
        return { type: "normal", arg: fn.call(obj, arg) };
      } catch (err) {
        return { type: "throw", arg: err };
      }
    }
  
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
  
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};
  
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
  
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunction.displayName = "GeneratorFunction";
  
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function(method) {
        prototype[method] = function(arg) {
          return this._invoke(method, arg);
        };
      });
    }
  
    runtime.isGeneratorFunction = function(genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor
        ? ctor === GeneratorFunction ||
          // For the native GeneratorFunction constructor, the best we can
          // do is to check its .name property.
          (ctor.displayName || ctor.name) === "GeneratorFunction"
        : false;
    };
  
    runtime.mark = function(genFun) {
      genFun.__proto__ = GeneratorFunctionPrototype;
      genFun.prototype = Object.create(Gp);
      return genFun;
    };
  
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `value instanceof AwaitArgument` to determine if the yielded value is
    // meant to be awaited. Some may consider the name of this method too
    // cutesy, but they are curmudgeons.
    runtime.awrap = function(arg) {
      return new AwaitArgument(arg);
    };
  
    function AwaitArgument(arg) {
      this.arg = arg;
    }
  
    function AsyncIterator(generator) {
      // This invoke function is written in a style that assumes some
      // calling function (or Promise) will handle exceptions.
      function invoke(method, arg) {
        var result = generator[method](arg);
        var value = result.value;
        return value instanceof AwaitArgument
          ? Promise.resolve(value.arg).then(invokeNext, invokeThrow)
          : Promise.resolve(value).then(function(unwrapped) {
              // When a yielded Promise is resolved, its final value becomes
              // the .value of the Promise<{value,done}> result for the
              // current iteration. If the Promise is rejected, however, the
              // result for this iteration will be rejected with the same
              // reason. Note that rejections of yielded Promises are not
              // thrown back into the generator function, as is the case
              // when an awaited Promise is rejected. This difference in
              // behavior between yield and await is important, because it
              // allows the consumer to decide what to do with the yielded
              // rejection (swallow it and continue, manually .throw it back
              // into the generator, abandon iteration, whatever). With
              // await, by contrast, there is no opportunity to examine the
              // rejection reason outside the generator function, so the
              // only option is to throw it from the await expression, and
              // let the generator function handle the exception.
              result.value = unwrapped;
              return result;
            });
      }
  
      if (typeof process === "object" && process.domain) {
        invoke = process.domain.bind(invoke);
      }
  
      var invokeNext = invoke.bind(generator, "next");
      var invokeThrow = invoke.bind(generator, "throw");
      var invokeReturn = invoke.bind(generator, "return");
      var previousPromise;
  
      function enqueue(method, arg) {
        var enqueueResult =
          // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise ? previousPromise.then(function() {
            return invoke(method, arg);
          }) : new Promise(function(resolve) {
            resolve(invoke(method, arg));
          });
  
        // Avoid propagating enqueueResult failures to Promises returned by
        // later invocations of the iterator.
        previousPromise = enqueueResult["catch"](function(ignored){});
  
        return enqueueResult;
      }
  
      // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).
      this._invoke = enqueue;
    }
  
    defineIteratorMethods(AsyncIterator.prototype);
  
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    runtime.async = function(innerFn, outerFn, self, tryLocsList) {
      var iter = new AsyncIterator(
        wrap(innerFn, outerFn, self, tryLocsList)
      );
  
      return runtime.isGeneratorFunction(outerFn)
        ? iter // If outerFn is a generator, return the full iterator.
        : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
          });
    };
  
    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;
  
      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }
  
        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          }
  
          // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
          return doneResult();
        }
  
        while (true) {
          var delegate = context.delegate;
          if (delegate) {
            if (method === "return" ||
                (method === "throw" && delegate.iterator[method] === undefined)) {
              // A return or throw (when the delegate iterator has no throw
              // method) always terminates the yield* loop.
              context.delegate = null;
  
              // If the delegate iterator has a return method, give it a
              // chance to clean up.
              var returnMethod = delegate.iterator["return"];
              if (returnMethod) {
                var record = tryCatch(returnMethod, delegate.iterator, arg);
                if (record.type === "throw") {
                  // If the return method threw an exception, let that
                  // exception prevail over the original return or throw.
                  method = "throw";
                  arg = record.arg;
                  continue;
                }
              }
  
              if (method === "return") {
                // Continue with the outer return, now that the delegate
                // iterator has been terminated.
                continue;
              }
            }
  
            var record = tryCatch(
              delegate.iterator[method],
              delegate.iterator,
              arg
            );
  
            if (record.type === "throw") {
              context.delegate = null;
  
              // Like returning generator.throw(uncaught), but without the
              // overhead of an extra function call.
              method = "throw";
              arg = record.arg;
              continue;
            }
  
            // Delegate generator ran and handled its own exceptions so
            // regardless of what the method was, we continue as if it is
            // "next" with an undefined arg.
            method = "next";
            arg = undefined;
  
            var info = record.arg;
            if (info.done) {
              context[delegate.resultName] = info.value;
              context.next = delegate.nextLoc;
            } else {
              state = GenStateSuspendedYield;
              return info;
            }
  
            context.delegate = null;
          }
  
          if (method === "next") {
            if (state === GenStateSuspendedYield) {
              context.sent = arg;
            } else {
              context.sent = undefined;
            }
  
          } else if (method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw arg;
            }
  
            if (context.dispatchException(arg)) {
              // If the dispatched exception was caught by a catch block,
              // then let that catch block handle the exception normally.
              method = "next";
              arg = undefined;
            }
  
          } else if (method === "return") {
            context.abrupt("return", arg);
          }
  
          state = GenStateExecuting;
  
          var record = tryCatch(innerFn, self, context);
          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done
              ? GenStateCompleted
              : GenStateSuspendedYield;
  
            var info = {
              value: record.arg,
              done: context.done
            };
  
            if (record.arg === ContinueSentinel) {
              if (context.delegate && method === "next") {
                // Deliberately forget the last sent value so that we don't
                // accidentally pass it on to the delegate.
                arg = undefined;
              }
            } else {
              return info;
            }
  
          } else if (record.type === "throw") {
            state = GenStateCompleted;
            // Dispatch the exception by looping back around to the
            // context.dispatchException(arg) call above.
            method = "throw";
            arg = record.arg;
          }
        }
      };
    }
  
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
  
    Gp[iteratorSymbol] = function() {
      return this;
    };
  
    Gp.toString = function() {
      return "[object Generator]";
    };
  
    function pushTryEntry(locs) {
      var entry = { tryLoc: locs[0] };
  
      if (1 in locs) {
        entry.catchLoc = locs[1];
      }
  
      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }
  
      this.tryEntries.push(entry);
    }
  
    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }
  
    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{ tryLoc: "root" }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }
  
    runtime.keys = function(object) {
      var keys = [];
      for (var key in object) {
        keys.push(key);
      }
      keys.reverse();
  
      // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.
      return function next() {
        while (keys.length) {
          var key = keys.pop();
          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        }
  
        // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.
        next.done = true;
        return next;
      };
    };
  
    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }
  
        if (typeof iterable.next === "function") {
          return iterable;
        }
  
        if (!isNaN(iterable.length)) {
          var i = -1, next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }
  
            next.value = undefined;
            next.done = true;
  
            return next;
          };
  
          return next.next = next;
        }
      }
  
      // Return an iterator with no values.
      return { next: doneResult };
    }
    runtime.values = values;
  
    function doneResult() {
      return { value: undefined, done: true };
    }
  
    Context.prototype = {
      constructor: Context,
  
      reset: function(skipTempReset) {
        this.prev = 0;
        this.next = 0;
        this.sent = undefined;
        this.done = false;
        this.delegate = null;
  
        this.tryEntries.forEach(resetTryEntry);
  
        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" &&
                hasOwn.call(this, name) &&
                !isNaN(+name.slice(1))) {
              this[name] = undefined;
            }
          }
        }
      },
  
      stop: function() {
        this.done = true;
  
        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;
        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }
  
        return this.rval;
      },
  
      dispatchException: function(exception) {
        if (this.done) {
          throw exception;
        }
  
        var context = this;
        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;
          return !!caught;
        }
  
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;
  
          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }
  
          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");
  
            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
  
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }
  
            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
  
            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },
  
      abrupt: function(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev &&
              hasOwn.call(entry, "finallyLoc") &&
              this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }
  
        if (finallyEntry &&
            (type === "break" ||
             type === "continue") &&
            finallyEntry.tryLoc <= arg &&
            arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }
  
        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;
  
        if (finallyEntry) {
          this.next = finallyEntry.finallyLoc;
        } else {
          this.complete(record);
        }
  
        return ContinueSentinel;
      },
  
      complete: function(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }
  
        if (record.type === "break" ||
            record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = record.arg;
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }
      },
  
      finish: function(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },
  
      "catch": function(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }
  
        // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.
        throw new Error("illegal catch attempt");
      },
  
      delegateYield: function(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };
  
        return ContinueSentinel;
      }
    };
  })(
    // Among the various tricks for obtaining a reference to the global
    // object, this seems to be the most reliable technique that does not
    // use indirect eval (which violates Content Security Policy).
    typeof global === "object" ? global :
    typeof window === "object" ? window :
    typeof self === "object" ? self : this
  );
  
  /* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(96)))

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__(97);


/***/ },
/* 209 */
/***/ function(module, exports) {

  /* (ignored) */

/***/ }
/******/ ]);
//# sourceMappingURL=catalog-category-view.js.map