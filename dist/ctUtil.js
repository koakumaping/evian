(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("ctUtil", [], factory);
	else if(typeof exports === 'object')
		exports["ctUtil"] = factory();
	else
		root["ctUtil"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var hasOwn = function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
};

/* harmony default export */ __webpack_exports__["a"] = (hasOwn);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


var isArray = function isArray(val) {
  return Object.prototype.toString.call(val) === '[object Array]';
};

/* harmony default export */ __webpack_exports__["a"] = (isArray);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hasClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return setStyle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isObject__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hasOwn__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__camelCase__ = __webpack_require__(7);




var hasClass = function hasClass(elemet, cls) {
  var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
  if (elemet.className.match(reg)) {
    return true;
  }
  return false;
};

var addClass = function addClass(elemet, cls) {
  var el = elemet;

  if (el.className) {
    el.className = el.className + ' ' + cls;
  } else {
    el.className = cls;
  }

  return false;
};

var removeClass = function removeClass(elemet, cls) {
  var el = elemet;
  el.className = el.className.replace(' ' + cls, '');
  return false;
};

var getStyle = function getStyle(element, styleName) {
  if (!element || !styleName) return null;
  if (styleName === 'float') {
    styleName = 'cssFloat';
  }
  try {
    var computed = document.defaultView.getComputedStyle(element, '');
    return element.style[styleName] || computed ? computed[styleName] : null;
  } catch (e) {
    return element.style[styleName];
  }
};

var setStyle = function setStyle(element, styleName, value) {
  if (!element || !styleName) return;

  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isObject__["a" /* default */])(styleName)) {
    for (var prop in styleName) {
      if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__hasOwn__["a" /* default */])(styleName, prop)) {
        setStyle(element, prop, styleName[prop]);
      }
    }
  } else {
    styleName = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__camelCase__["a" /* default */])(styleName);
    if (styleName === 'opacity') {
      element.style.filter = window.isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')';
      element.style[styleName] = value;
    }
  }
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


var isObject = function isObject(val) {
  return Object.prototype.toString.call(val) === '[object Object]';
};

/* harmony default export */ __webpack_exports__["a"] = (isObject);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__debounce__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__throttle__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scrollbarWidth__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popover__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base64__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resize_event__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__handleEvent__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__isPC__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__isFunction__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__isArray__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__isObject__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__isString__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__isNumber__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__hasChinese__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__clone__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__queryClone__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__hasOwn__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__dom__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__getWindowHeight__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__date__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "decode64", function() { return __WEBPACK_IMPORTED_MODULE_4__base64__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "encode64", function() { return __WEBPACK_IMPORTED_MODULE_4__base64__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "popover", function() { return __WEBPACK_IMPORTED_MODULE_3__popover__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return __WEBPACK_IMPORTED_MODULE_0__debounce__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return __WEBPACK_IMPORTED_MODULE_1__throttle__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scrollbarWidth", function() { return __WEBPACK_IMPORTED_MODULE_2__scrollbarWidth__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "addResizeListener", function() { return __WEBPACK_IMPORTED_MODULE_5__resize_event__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "removeResizeListener", function() { return __WEBPACK_IMPORTED_MODULE_5__resize_event__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "handleEvent", function() { return __WEBPACK_IMPORTED_MODULE_6__handleEvent__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isPC", function() { return __WEBPACK_IMPORTED_MODULE_7__isPC__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return __WEBPACK_IMPORTED_MODULE_8__isFunction__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return __WEBPACK_IMPORTED_MODULE_9__isArray__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return __WEBPACK_IMPORTED_MODULE_10__isObject__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return __WEBPACK_IMPORTED_MODULE_11__isString__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return __WEBPACK_IMPORTED_MODULE_12__isNumber__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "hasChinese", function() { return __WEBPACK_IMPORTED_MODULE_13__hasChinese__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return __WEBPACK_IMPORTED_MODULE_14__clone__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "queryClone", function() { return __WEBPACK_IMPORTED_MODULE_15__queryClone__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "hasOwn", function() { return __WEBPACK_IMPORTED_MODULE_16__hasOwn__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return __WEBPACK_IMPORTED_MODULE_17__dom__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return __WEBPACK_IMPORTED_MODULE_17__dom__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return __WEBPACK_IMPORTED_MODULE_17__dom__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return __WEBPACK_IMPORTED_MODULE_17__dom__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "setStyle", function() { return __WEBPACK_IMPORTED_MODULE_17__dom__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getWindowHeight", function() { return __WEBPACK_IMPORTED_MODULE_18__getWindowHeight__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getYear", function() { return __WEBPACK_IMPORTED_MODULE_19__date__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getMonth", function() { return __WEBPACK_IMPORTED_MODULE_19__date__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getRealMonth", function() { return __WEBPACK_IMPORTED_MODULE_19__date__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getDate", function() { return __WEBPACK_IMPORTED_MODULE_19__date__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getDayOfMonth", function() { return __WEBPACK_IMPORTED_MODULE_19__date__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstDayOfMonth", function() { return __WEBPACK_IMPORTED_MODULE_19__date__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getDayCountOfMonth", function() { return __WEBPACK_IMPORTED_MODULE_19__date__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getPrevMonth", function() { return __WEBPACK_IMPORTED_MODULE_19__date__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getNextMonth", function() { return __WEBPACK_IMPORTED_MODULE_19__date__["i"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "clearHours", function() { return __WEBPACK_IMPORTED_MODULE_19__date__["j"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getYYYYMMDD", function() { return __WEBPACK_IMPORTED_MODULE_19__date__["k"]; });






























/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return decode64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return encode64; });

var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

function base64encode(str) {
  var out, i, len;
  var c1, c2, c3;

  len = str.length;
  i = 0;
  out = "";
  while (i < len) {
    c1 = str.charCodeAt(i++) & 0xff;
    if (i == len) {
      out += base64EncodeChars.charAt(c1 >> 2);
      out += base64EncodeChars.charAt((c1 & 0x3) << 4);
      out += "==";
      break;
    }
    c2 = str.charCodeAt(i++);
    if (i == len) {
      out += base64EncodeChars.charAt(c1 >> 2);
      out += base64EncodeChars.charAt((c1 & 0x3) << 4 | (c2 & 0xF0) >> 4);
      out += base64EncodeChars.charAt((c2 & 0xF) << 2);
      out += "=";
      break;
    }
    c3 = str.charCodeAt(i++);
    out += base64EncodeChars.charAt(c1 >> 2);
    out += base64EncodeChars.charAt((c1 & 0x3) << 4 | (c2 & 0xF0) >> 4);
    out += base64EncodeChars.charAt((c2 & 0xF) << 2 | (c3 & 0xC0) >> 6);
    out += base64EncodeChars.charAt(c3 & 0x3F);
  }
  return out;
}

function base64decode(str) {
  var c1, c2, c3, c4;
  var i, len, out;

  len = str.length;
  i = 0;
  out = "";
  while (i < len) {
    do {
      c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
    } while (i < len && c1 == -1);
    if (c1 == -1) break;

    do {
      c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
    } while (i < len && c2 == -1);
    if (c2 == -1) break;

    out += String.fromCharCode(c1 << 2 | (c2 & 0x30) >> 4);

    do {
      c3 = str.charCodeAt(i++) & 0xff;
      if (c3 == 61) return out;
      c3 = base64DecodeChars[c3];
    } while (i < len && c3 == -1);
    if (c3 == -1) break;

    out += String.fromCharCode((c2 & 0XF) << 4 | (c3 & 0x3C) >> 2);

    do {
      c4 = str.charCodeAt(i++) & 0xff;
      if (c4 == 61) return out;
      c4 = base64DecodeChars[c4];
    } while (i < len && c4 == -1);
    if (c4 == -1) break;
    out += String.fromCharCode((c3 & 0x03) << 6 | c4);
  }
  return out;
}

function utf16to8(str) {
  var out, i, len, c;

  out = "";
  len = str.length;
  for (i = 0; i < len; i++) {
    c = str.charCodeAt(i);
    if (c >= 0x0001 && c <= 0x007F) {
      out += str.charAt(i);
    } else if (c > 0x07FF) {
      out += String.fromCharCode(0xE0 | c >> 12 & 0x0F);
      out += String.fromCharCode(0x80 | c >> 6 & 0x3F);
      out += String.fromCharCode(0x80 | c >> 0 & 0x3F);
    } else {
      out += String.fromCharCode(0xC0 | c >> 6 & 0x1F);
      out += String.fromCharCode(0x80 | c >> 0 & 0x3F);
    }
  }
  return out;
}

function utf8to16(str) {
  var out, i, len, c;
  var char2, char3;

  out = "";
  len = str.length;
  i = 0;
  while (i < len) {
    c = str.charCodeAt(i++);
    switch (c >> 4) {
      case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:
        out += str.charAt(i - 1);
        break;
      case 12:case 13:
        char2 = str.charCodeAt(i++);
        out += String.fromCharCode((c & 0x1F) << 6 | char2 & 0x3F);
        break;
      case 14:
        char2 = str.charCodeAt(i++);
        char3 = str.charCodeAt(i++);
        out += String.fromCharCode((c & 0x0F) << 12 | (char2 & 0x3F) << 6 | (char3 & 0x3F) << 0);
        break;
    }
  }

  return out;
}

function CharToHex(str) {
  var out, i, len, c, h;
  out = "";
  len = str.length;
  i = 0;
  while (i < len) {
    c = str.charCodeAt(i++);
    h = c.toString(16);
    if (h.length < 2) h = "0" + h;

    out += "\\x" + h + " ";
    if (i > 0 && i % 8 == 0) out += "\r\n";
  }

  return out;
}

function encode64(src) {
  base64encode(utf16to8(src));
}

function decode64(src) {
  return utf8to16(base64decode(src));
}



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
var MOZ_HACK_REGEXP = /^moz([A-Z])/;

var camelCase = function camelCase(name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter;
  }).replace(MOZ_HACK_REGEXP, 'Moz$1');
};

/* harmony default export */ __webpack_exports__["a"] = (camelCase);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = clone;
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function clone(obj) {
  var newobj = void 0;
  var str = void 0;

  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
    return;
  } else if (window.JSON) {
    str = JSON.stringify(obj);
    newobj = JSON.parse(str);
  } else {
    for (var i in obj) {
      if ({}.hasOwnProperty.call(obj, i)) {
        newobj[i] = _typeof(obj[i]) === 'object' ? clone(obj[i]) : obj[i];
      }
    }
  }

  return newobj;
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getRealMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getDayOfMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getDayCountOfMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getFirstDayOfMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getPrevMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getNextMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return clearHours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getYYYYMMDD; });

var getYear = function getYear(date) {
  var tmpDate = new Date();
  if (date) {
    tmpDate = new Date(date);
  }
  return tmpDate.getFullYear();
};

var getMonth = function getMonth(date) {
  var tmpDate = new Date();
  if (date) {
    tmpDate = new Date(date);
  }
  return tmpDate.getMonth();
};

var getRealMonth = function getRealMonth(date) {
  var tmpDate = new Date();
  if (date) {
    tmpDate = new Date(date);
  }
  return tmpDate.getMonth() + 1;
};

var getDate = function getDate(date) {
  var tmpDate = new Date();
  if (date) {
    tmpDate = new Date(date);
  }
  return tmpDate.getDate();
};

var getDayOfMonth = function getDayOfMonth(day, month) {
  var year = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Date().getFullYear();

  var tmpDate = new Date();
  tmpDate.setFullYear(year);
  tmpDate.setMonth(month);
  tmpDate.setDate(day);
  return tmpDate.getDay();
};

var getDayCountOfMonth = function getDayCountOfMonth(month) {
  var year = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date().getFullYear();

  if (month === 3 || month === 5 || month === 8 || month === 10) {
    return 30;
  }

  if (month === 1) {
    if (year % 4 === 0 && year % 100 !== 0) {
      return 29;
    } else if (year % 400 === 0) {
      return 29;
    }
    return 28;
  }

  return 31;
};

var getFirstDayOfMonth = function getFirstDayOfMonth(date) {
  var tmpDate = new Date(date.getTime());
  tmpDate.setDate(1);
  return tmpDate.getDay();
};

var getPrevMonth = function getPrevMonth(month) {
  if (month === 0) {
    return 11;
  }
  return month - 1;
};

var getNextMonth = function getNextMonth(month) {
  if (month === 11) {
    return 0;
  }
  return month + 1;
};

var clearHours = function clearHours(date) {
  var tmpDate = new Date(date.getTime());
  tmpDate.setHours(0, 0, 0, 0);
  return tmpDate.getTime();
};

var getYYYYMMDD = function getYYYYMMDD() {
  return getYear() + "-" + getRealMonth() + "-" + getDate();
};

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


function debounce(fn, delay) {
  var timer = void 0;

  return function _debounce() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = this;

    window.clearTimeout(timer);

    timer = window.setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (debounce);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


var getWindowHeight = function getWindowHeight() {
  var windowHeight = 0;

  if (document.compatMode === 'CSS1Compat') {
    windowHeight = document.documentElement.clientHeight;
  } else {
    windowHeight = document.body.clientHeight;
  }
  return windowHeight;
};

/* harmony default export */ __webpack_exports__["a"] = (getWindowHeight);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var handleEvent = function handleEvent(eventName) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      onElement = _ref.onElement,
      withCallback = _ref.withCallback,
      _ref$useCapture = _ref.useCapture,
      useCapture = _ref$useCapture === undefined ? false : _ref$useCapture;

  var thisArg = arguments[2];

  var element = onElement || document.documentElement;
  function handler(event) {
    if (typeof withCallback === 'function') {
      withCallback.call(thisArg, event);
    }
  }

  handler.destroy = function handleDestroy() {
    return element.removeEventListener(eventName, handler, useCapture);
  };

  element.addEventListener(eventName, handler, useCapture);
  return handler;
};

/* harmony default export */ __webpack_exports__["a"] = (handleEvent);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


var hasChinese = function hasChinese(val) {
  if (window.escape(val).indexOf('%u') > -1) {
    return true;
  }
  return false;
};

/* harmony default export */ __webpack_exports__["a"] = (hasChinese);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


var isFunction = function isFunction(val) {
  return Object.prototype.toString.call(val) === '[object Function]';
};

/* harmony default export */ __webpack_exports__["a"] = (isFunction);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isArray__ = __webpack_require__(1);



var isNumber = function isNumber(val) {
  if (val === '' || val === undefined) return false;
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isArray__["a" /* default */])(val)) return false;
  return !isNaN(val);
};

/* harmony default export */ __webpack_exports__["a"] = (isNumber);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


var isPC = function isPC() {
  var userAgentInfo = window.navigator.userAgent;
  var Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
  var flag = true;
  for (var v = 0; v < Agents.length; ++v) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
};

/* harmony default export */ __webpack_exports__["a"] = (isPC);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


var isString = function isString(val) {
  return Object.prototype.toString.call(val) === '[object String]';
};

/* harmony default export */ __webpack_exports__["a"] = (isString);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hasOwn__ = __webpack_require__(0);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



var isVNode = function isVNode(node) {
  return (typeof node === 'undefined' ? 'undefined' : _typeof(node)) === 'object' && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__hasOwn__["a" /* default */])(node, '_vnode');
};

/* harmony default export */ __webpack_exports__["a"] = (isVNode);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isVNode__ = __webpack_require__(18);



function getRelativeNode(el) {
  var parent = void 0;
  var child = el;
  var flag = true;
  while (flag) {
    if (child.parentNode && child.parentNode.nodeName !== 'BODY') {
      parent = child.parentNode;
      var position = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dom__["d" /* getStyle */])(parent, 'position');
      if (position === 'relative' || position === 'absolute') {
        return parent;
      }
      child = parent;
      parent = parent.parentNode;
    } else {
      flag = false;
    }
  }

  return parent;
}

function getRelativeNodeClientRect(el) {
  return getRelativeNode(el).getBoundingClientRect();
}

function getNodeClientRect(el) {
  return el.getBoundingClientRect();
}

function getPopoverPosition(node, popoverNode) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { place: 'left' };

  var _node = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isVNode__["a" /* default */])(node) ? node.$el : node;
  var _popoverNode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isVNode__["a" /* default */])(popoverNode) ? popoverNode.$el : popoverNode;

  var relativeClientReact = getRelativeNodeClientRect(_node);
  var clientReact = getNodeClientRect(_node);

  var top = clientReact.top - relativeClientReact.top;

  var left = clientReact.left - relativeClientReact.left;

  if (options.place === 'left') {
    left -= Number(_popoverNode.offsetWidth);
  }

  if (options.place === 'right') {
    left += Number(_node.offsetWidth);
  }

  if (options.place === 'top') {
    top -= _popoverNode.offsetHeight;
    left += (_node.offsetWidth - _popoverNode.offsetWidth) / 2;
  }

  if (options.place === 'bottom') {
    top += _node.offsetHeight;
    left += (_node.offsetWidth - _popoverNode.offsetWidth) / 2;
  }

  if (options.place === 'left' || options.place === 'right') {
    top += _node.offsetHeight / 2 - _popoverNode.offsetHeight / 2;
  }

  var ret = {};
  ret.position = 'absolute';
  ret.left = left + 'px';
  ret.top = top + 'px';
  ret.zIndex = 1;
  return ret;
}

/* harmony default export */ __webpack_exports__["a"] = (getPopoverPosition);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = queryClone;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isArray__ = __webpack_require__(1);



function queryClone(query) {
  var _query = {};
  for (var i in query) {
    if (Object.hasOwnProperty.call(query, i)) {
      if (query[i] !== '') {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isArray__["a" /* default */])(query[i])) {
          _query[i] = query[i].toString() + ',';
        } else {
          _query[i] = query[i];
        }
      }
    }
  }

  return _query;
}

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addResizeListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return removeResizeListener; });

var requestFrame = function () {
  var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (fn) {
    return window.setTimeout(fn, 20);
  };
  return function (fn) {
    return raf(fn);
  };
}();

var cancelFrame = function () {
  var cancel = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout;
  return function (id) {
    return cancel(id);
  };
}();

var resetTrigger = function resetTrigger(element) {
  var trigger = element.__resizeTrigger__;
  var expand = trigger.firstElementChild;
  var contract = trigger.lastElementChild;
  var expandChild = expand.firstElementChild;

  contract.scrollLeft = contract.scrollWidth;
  contract.scrollTop = contract.scrollHeight;
  expandChild.style.width = expand.offsetWidth + 1 + 'px';
  expandChild.style.height = expand.offsetHeight + 1 + 'px';
  expand.scrollLeft = expand.scrollWidth;
  expand.scrollTop = expand.scrollHeight;
};

var checkTriggers = function checkTriggers(element) {
  return element.offsetWidth !== element.__resizeLast__.width || element.offsetHeight !== element.__resizeLast__.height;
};

var scrollListener = function scrollListener(event) {
  var _this = this;

  resetTrigger(this);
  if (this.__resizeRAF__) cancelFrame(this.__resizeRAF__);
  this.__resizeRAF__ = requestFrame(function () {
    if (checkTriggers(_this)) {
      _this.__resizeLast__.width = _this.offsetWidth;
      _this.__resizeLast__.height = _this.offsetHeight;
      _this.__resizeListeners__.forEach(function (fn) {
        fn.call(_this, event);
      });
    }
  });
};

var attachEvent = document.attachEvent;
var DOM_PREFIXES = 'Webkit Moz O ms'.split(' ');
var START_EVENTS = 'webkitAnimationStart animationstart oAnimationStart MSAnimationStart'.split(' ');
var RESIZE_ANIMATION_NAME = 'resizeanim';
var animation = false;
var keyFramePrefix = '';
var animationStartEvent = 'animationstart';

if (!attachEvent) {
  var testElement = document.createElement('fakeelement');
  if (testElement.style.animationName !== undefined) {
    animation = true;
  }

  if (animation === false) {
    var prefix = '';
    for (var i = 0; i < DOM_PREFIXES.length; i++) {
      if (testElement.style[DOM_PREFIXES[i] + 'AnimationName'] !== undefined) {
        prefix = DOM_PREFIXES[i];
        keyFramePrefix = '-' + prefix.toLowerCase() + '-';
        animationStartEvent = START_EVENTS[i];
        animation = true;
        break;
      }
    }
  }
}

var stylesCreated = false;
var createStyles = function createStyles() {
  if (!stylesCreated) {
    var animationKeyframes = '@' + keyFramePrefix + 'keyframes ' + RESIZE_ANIMATION_NAME + ' { from { opacity: 0; } to { opacity: 0; } } ';
    var animationStyle = keyFramePrefix + 'animation: 1ms ' + RESIZE_ANIMATION_NAME + ';';

    var css = animationKeyframes + '\n      .resize-triggers { ' + animationStyle + ' visibility: hidden; opacity: 0; }\n      .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1 }\n      .resize-triggers > div { background: #eee; overflow: auto; }\n      .contract-trigger:before { width: 200%; height: 200%; }';

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');

    style.type = 'text/css';
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    head.appendChild(style);
    stylesCreated = true;
  }
};

var addResizeListener = function addResizeListener(element, fn) {
  if (attachEvent) {
    element.attachEvent('onresize', fn);
  } else {
    if (!element.__resizeTrigger__) {
      if (getComputedStyle(element).position === 'static') {
        element.style.position = 'relative';
      }
      createStyles();
      element.__resizeLast__ = {};
      element.__resizeListeners__ = [];

      var resizeTrigger = element.__resizeTrigger__ = document.createElement('div');
      resizeTrigger.className = 'resize-triggers';
      resizeTrigger.innerHTML = '<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>';
      element.appendChild(resizeTrigger);

      resetTrigger(element);
      element.addEventListener('scroll', scrollListener, true);

      if (animationStartEvent) {
        resizeTrigger.addEventListener(animationStartEvent, function (event) {
          if (event.animationName === RESIZE_ANIMATION_NAME) {
            resetTrigger(element);
          }
        });
      }
    }
    element.__resizeListeners__.push(fn);
  }
};

var removeResizeListener = function removeResizeListener(element, fn) {
  if (attachEvent) {
    element.detachEvent('onresize', fn);
  } else {
    element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
    if (!element.__resizeListeners__.length) {
      element.removeEventListener('scroll', scrollListener);
      element.__resizeTrigger__ = !element.removeChild(element.__resizeTrigger__);
    }
  }
};

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var scrollBarWidth = void 0;

/* harmony default export */ __webpack_exports__["a"] = (function () {
  if (scrollBarWidth !== undefined) return scrollBarWidth;

  var outer = document.createElement('div');
  outer.className = 'el-scrollbar__wrap';
  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  outer.style.position = 'absolute';
  outer.style.top = '-9999px';
  document.body.appendChild(outer);

  var widthNoScroll = outer.offsetWidth;
  outer.style.overflow = 'scroll';

  var inner = document.createElement('div');
  inner.style.width = '100%';
  outer.appendChild(inner);

  var widthWithScroll = inner.offsetWidth;
  outer.parentNode.removeChild(outer);

  return widthNoScroll - widthWithScroll;
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


function throttle(fn) {
  var threshhold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;

  var last = void 0;

  var timer = void 0;

  return function _throttle() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = this;
    var now = +new Date();

    if (last && now < last + threshhold) {
      window.clearTimeout(timer);

      timer = window.setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}

/* harmony default export */ __webpack_exports__["a"] = (throttle);

/***/ })
/******/ ]);
});