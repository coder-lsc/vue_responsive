/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Observer.js":
/*!*************************!*\
  !*** ./src/Observer.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Observer; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _defineReactive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defineReactive */ \"./src/defineReactive.js\");\n\r\n\r\n\r\nclass Observer {\r\n  constructor(value) {\r\n    console.log('我是Observer构造器', value);\r\n    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"def\"])(value, '__ob__', this, false)\r\n  }\r\n\r\n  // 遍历\r\n  walk(value) {\r\n    for (let key in value) {\r\n      Object(_defineReactive__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(value, key)\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/Observer.js?");

/***/ }),

/***/ "./src/defineReactive.js":
/*!*******************************!*\
  !*** ./src/defineReactive.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return defineReactive; });\n/* harmony import */ var _observe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observe */ \"./src/observe.js\");\n\r\n\r\nfunction defineReactive(data, key, val) {\r\n  console.log('我是defineReactive', key);\r\n  if(arguments.length == 2) {\r\n    val = data[key]\r\n  }\r\n \r\n  let childOb = Object(_observe__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(val)\r\n\r\n  Object.defineProperty(data, key, {\r\n    enumerable: true,\r\n    configurable: true,\r\n    get() {\r\n      console.log('你试图访问obj的' + key + '属性');\r\n      return val\r\n    },\r\n    set(newValue) {\r\n      console.log('你试图改变obj的' + key + '属性', newValue);\r\n      if (val === newValue) return\r\n      val = newValue\r\n      childOb = Object(_observe__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(val)\r\n    }\r\n  })\r\n}\n\n//# sourceURL=webpack:///./src/defineReactive.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _observe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observe */ \"./src/observe.js\");\n\r\n\r\n\r\n\r\nvar obj = {\r\n  a: {\r\n    m: {\r\n      n: 5\r\n    }\r\n  },\r\n  b: 10\r\n}\r\n\r\n\r\n\r\nObject(_observe__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(obj)\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/observe.js":
/*!************************!*\
  !*** ./src/observe.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observer */ \"./src/Observer.js\");\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (value) {\r\n  // 如果value不是对象 什么都不做\r\n  if(typeof value != 'object') return\r\n  var ob;\r\n  if(typeof value.__ob__ !== 'undefined') {\r\n    ob = value.__ob__\r\n  } else {\r\n    ob = new _Observer__WEBPACK_IMPORTED_MODULE_0__[\"default\"](value)\r\n  }\r\n  return ob\r\n});\n\n//# sourceURL=webpack:///./src/observe.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: def */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"def\", function() { return def; });\nconst def = function (obj, key, value, enumerable) {\r\n  Object.defineProperty(obj, key, {\r\n    value: value,\r\n    enumerable: enumerable,\r\n    writable: true,\r\n    configurable: true\r\n  })\r\n}\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });