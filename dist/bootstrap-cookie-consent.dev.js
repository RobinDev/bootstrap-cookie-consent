(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["BootstrapCookieConsent"] = factory();
	else
		root["BootstrapCookieConsent"] = factory();
})(window, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/BootstrapCookieConsent.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/cookie-consent-api/src/index.js":
/*!******************************************************!*\
  !*** ./node_modules/cookie-consent-api/src/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! events */ \"./node_modules/node-libs-browser/node_modules/events/events.js\");\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass CookieConsentApi extends events__WEBPACK_IMPORTED_MODULE_1___default.a {\n  constructor(conf = {}) {\n    super();\n    const defaultConf = {\n      cookieName: 'cookie_consent_settings',\n      cookieDuration: 365,\n      cookieDomain: null,\n      services: []\n    }; // Merge default config with user config\n\n    this._conf = Object.assign({}, defaultConf, conf); // Console log errors if conf is invalid\n\n    this._validateConf(); // Replace dom elements based on cookie consent value\n\n\n    this._updateView();\n  }\n\n  reset() {\n    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove(this._conf.cookieName, {\n      domain: this._conf.cookieDomain\n    });\n\n    this._updateView();\n\n    this.emit('clear');\n  }\n\n  acceptAll() {\n    let cookieServices = {};\n\n    this._conf.services.forEach(service => cookieServices[service] = true);\n\n    this._setCookieServices(cookieServices);\n\n    this._updateView();\n\n    this.emit('allConfigured');\n  }\n\n  accept(service) {\n    let cookieServices = this._getCookieServices();\n\n    cookieServices[service] = true;\n\n    this._setCookieServices(cookieServices);\n\n    this._updateView();\n\n    this.emit('accept', service);\n    if (this.isAllConfigured()) this.emit('allConfigured');\n  }\n\n  refuse(service) {\n    let cookieServices = this._getCookieServices();\n\n    cookieServices[service] = false;\n\n    this._setCookieServices(cookieServices);\n\n    this._updateView();\n\n    this.emit('refuse', service);\n    if (this.isAllConfigured()) this.emit('allConfigured');\n  }\n\n  isAllConfigured() {\n    const cookieServices = this._getCookieServices();\n\n    let isAllConfigured = true;\n\n    this._conf.services.forEach(service => {\n      if (cookieServices[service] === undefined) isAllConfigured = false;\n    });\n\n    return isAllConfigured;\n  }\n\n  isConfigured(service) {\n    const cookieServices = this._getCookieServices();\n\n    return cookieServices[service] !== undefined;\n  }\n\n  isAccepted(service) {\n    const cookieServices = this._getCookieServices();\n\n    return cookieServices[service] !== undefined && cookieServices[service] === true;\n  }\n\n  isRefused(service) {\n    const cookieServices = this._getCookieServices();\n\n    return cookieServices[service] !== undefined && cookieServices[service] === false;\n  }\n\n  getServices() {\n    return this._conf.services;\n  }\n\n  _getCookieServices() {\n    return js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.getJSON(this._conf.cookieName) || {};\n  }\n\n  _setCookieServices(cookieServices) {\n    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set(this._conf.cookieName, cookieServices, {\n      duration: this._conf.cookieDuration,\n      domain: this._conf.cookieDomain\n    });\n  }\n\n  _validateConf() {\n    // Services\n    if (!Array.isArray(this._conf.services)) {\n      console.error('CCM: Services is not an array');\n    } else {\n      this._conf.services.forEach(service => {\n        if (/^[a-zA-Z0-9]+$/.test(service) === false) {\n          console.error('CCM: \"' + service + '\" is not a valid service name, only alphanumeric allowed');\n        }\n      });\n    }\n  }\n\n  _updateView() {\n    const cookieServices = this._getCookieServices();\n\n    this._conf.services.forEach(service => {\n      const elems = document.querySelectorAll('[data-cookie-consent=\"' + service + '\"]'); // Service is accepted in cookie\n\n      if (cookieServices[service] === true) {\n        elems.forEach(elem => {\n          if (!elem.getAttribute('data-ccm-fallback')) {\n            elem.setAttribute('data-ccm-fallback', elem.innerHTML);\n          }\n\n          var match = elem.innerHTML.match(new RegExp('\\<\\!--if-consent(.*?)endif--\\>', 's'));\n\n          if (match && match.length == 2) {\n            elem.innerHTML = match[1];\n\n            this._executeScripts(elem);\n          }\n        });\n      } // Service is refused in cookie\n      else {\n          elems.forEach(elem => {\n            let fallbackContent = elem.getAttribute('data-ccm-fallback');\n\n            if (fallbackContent) {\n              elem.innerHTML = fallbackContent;\n\n              this._executeScripts(elem);\n            }\n          });\n        }\n    });\n  }\n\n  _executeScripts(elem) {\n    const scriptsDom = elem.querySelectorAll('script');\n    scriptsDom.forEach(function (scriptDom) {\n      let script = document.createElement('script');\n      script.innerHTML = scriptDom.innerHTML;\n      scriptDom.remove();\n      elem.append(script);\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CookieConsentApi);\n\n//# sourceURL=webpack://BootstrapCookieConsent/./node_modules/cookie-consent-api/src/index.js?");

/***/ }),

/***/ "./node_modules/js-cookie/src/js.cookie.js":
/*!*************************************************!*\
  !*** ./node_modules/js-cookie/src/js.cookie.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n * JavaScript Cookie v2.2.0\n * https://github.com/js-cookie/js-cookie\n *\n * Copyright 2006, 2015 Klaus Hartl & Fagner Brack\n * Released under the MIT license\n */\n;\n\n(function (factory) {\n  var registeredInModuleLoader = false;\n\n  if (true) {\n    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n    registeredInModuleLoader = true;\n  }\n\n  if (true) {\n    module.exports = factory();\n    registeredInModuleLoader = true;\n  }\n\n  if (!registeredInModuleLoader) {\n    var OldCookies = window.Cookies;\n    var api = window.Cookies = factory();\n\n    api.noConflict = function () {\n      window.Cookies = OldCookies;\n      return api;\n    };\n  }\n})(function () {\n  function extend() {\n    var i = 0;\n    var result = {};\n\n    for (; i < arguments.length; i++) {\n      var attributes = arguments[i];\n\n      for (var key in attributes) {\n        result[key] = attributes[key];\n      }\n    }\n\n    return result;\n  }\n\n  function init(converter) {\n    function api(key, value, attributes) {\n      var result;\n\n      if (typeof document === 'undefined') {\n        return;\n      } // Write\n\n\n      if (arguments.length > 1) {\n        attributes = extend({\n          path: '/'\n        }, api.defaults, attributes);\n\n        if (typeof attributes.expires === 'number') {\n          var expires = new Date();\n          expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);\n          attributes.expires = expires;\n        } // We're using \"expires\" because \"max-age\" is not supported by IE\n\n\n        attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';\n\n        try {\n          result = JSON.stringify(value);\n\n          if (/^[\\{\\[]/.test(result)) {\n            value = result;\n          }\n        } catch (e) {}\n\n        if (!converter.write) {\n          value = encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);\n        } else {\n          value = converter.write(value, key);\n        }\n\n        key = encodeURIComponent(String(key));\n        key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);\n        key = key.replace(/[\\(\\)]/g, escape);\n        var stringifiedAttributes = '';\n\n        for (var attributeName in attributes) {\n          if (!attributes[attributeName]) {\n            continue;\n          }\n\n          stringifiedAttributes += '; ' + attributeName;\n\n          if (attributes[attributeName] === true) {\n            continue;\n          }\n\n          stringifiedAttributes += '=' + attributes[attributeName];\n        }\n\n        return document.cookie = key + '=' + value + stringifiedAttributes;\n      } // Read\n\n\n      if (!key) {\n        result = {};\n      } // To prevent the for loop in the first place assign an empty array\n      // in case there are no cookies at all. Also prevents odd result when\n      // calling \"get()\"\n\n\n      var cookies = document.cookie ? document.cookie.split('; ') : [];\n      var rdecode = /(%[0-9A-Z]{2})+/g;\n      var i = 0;\n\n      for (; i < cookies.length; i++) {\n        var parts = cookies[i].split('=');\n        var cookie = parts.slice(1).join('=');\n\n        if (!this.json && cookie.charAt(0) === '\"') {\n          cookie = cookie.slice(1, -1);\n        }\n\n        try {\n          var name = parts[0].replace(rdecode, decodeURIComponent);\n          cookie = converter.read ? converter.read(cookie, name) : converter(cookie, name) || cookie.replace(rdecode, decodeURIComponent);\n\n          if (this.json) {\n            try {\n              cookie = JSON.parse(cookie);\n            } catch (e) {}\n          }\n\n          if (key === name) {\n            result = cookie;\n            break;\n          }\n\n          if (!key) {\n            result[name] = cookie;\n          }\n        } catch (e) {}\n      }\n\n      return result;\n    }\n\n    api.set = api;\n\n    api.get = function (key) {\n      return api.call(api, key);\n    };\n\n    api.getJSON = function () {\n      return api.apply({\n        json: true\n      }, [].slice.call(arguments));\n    };\n\n    api.defaults = {};\n\n    api.remove = function (key, attributes) {\n      api(key, '', extend(attributes, {\n        expires: -1\n      }));\n    };\n\n    api.withConverter = init;\n    return api;\n  }\n\n  return init(function () {});\n});\n\n//# sourceURL=webpack://BootstrapCookieConsent/./node_modules/js-cookie/src/js.cookie.js?");

/***/ }),

/***/ "./node_modules/node-libs-browser/node_modules/events/events.js":
/*!**********************************************************************!*\
  !*** ./node_modules/node-libs-browser/node_modules/events/events.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\nfunction EventEmitter() {\n  this._events = this._events || {};\n  this._maxListeners = this._maxListeners || undefined;\n}\nmodule.exports = EventEmitter;\n\n// Backwards-compat with node 0.10.x\nEventEmitter.EventEmitter = EventEmitter;\n\nEventEmitter.prototype._events = undefined;\nEventEmitter.prototype._maxListeners = undefined;\n\n// By default EventEmitters will print a warning if more than 10 listeners are\n// added to it. This is a useful default which helps finding memory leaks.\nEventEmitter.defaultMaxListeners = 10;\n\n// Obviously not all Emitters should be limited to 10. This function allows\n// that to be increased. Set to zero for unlimited.\nEventEmitter.prototype.setMaxListeners = function(n) {\n  if (!isNumber(n) || n < 0 || isNaN(n))\n    throw TypeError('n must be a positive number');\n  this._maxListeners = n;\n  return this;\n};\n\nEventEmitter.prototype.emit = function(type) {\n  var er, handler, len, args, i, listeners;\n\n  if (!this._events)\n    this._events = {};\n\n  // If there is no 'error' event listener then throw.\n  if (type === 'error') {\n    if (!this._events.error ||\n        (isObject(this._events.error) && !this._events.error.length)) {\n      er = arguments[1];\n      if (er instanceof Error) {\n        throw er; // Unhandled 'error' event\n      } else {\n        // At least give some kind of context to the user\n        var err = new Error('Uncaught, unspecified \"error\" event. (' + er + ')');\n        err.context = er;\n        throw err;\n      }\n    }\n  }\n\n  handler = this._events[type];\n\n  if (isUndefined(handler))\n    return false;\n\n  if (isFunction(handler)) {\n    switch (arguments.length) {\n      // fast cases\n      case 1:\n        handler.call(this);\n        break;\n      case 2:\n        handler.call(this, arguments[1]);\n        break;\n      case 3:\n        handler.call(this, arguments[1], arguments[2]);\n        break;\n      // slower\n      default:\n        args = Array.prototype.slice.call(arguments, 1);\n        handler.apply(this, args);\n    }\n  } else if (isObject(handler)) {\n    args = Array.prototype.slice.call(arguments, 1);\n    listeners = handler.slice();\n    len = listeners.length;\n    for (i = 0; i < len; i++)\n      listeners[i].apply(this, args);\n  }\n\n  return true;\n};\n\nEventEmitter.prototype.addListener = function(type, listener) {\n  var m;\n\n  if (!isFunction(listener))\n    throw TypeError('listener must be a function');\n\n  if (!this._events)\n    this._events = {};\n\n  // To avoid recursion in the case that type === \"newListener\"! Before\n  // adding it to the listeners, first emit \"newListener\".\n  if (this._events.newListener)\n    this.emit('newListener', type,\n              isFunction(listener.listener) ?\n              listener.listener : listener);\n\n  if (!this._events[type])\n    // Optimize the case of one listener. Don't need the extra array object.\n    this._events[type] = listener;\n  else if (isObject(this._events[type]))\n    // If we've already got an array, just append.\n    this._events[type].push(listener);\n  else\n    // Adding the second element, need to change to array.\n    this._events[type] = [this._events[type], listener];\n\n  // Check for listener leak\n  if (isObject(this._events[type]) && !this._events[type].warned) {\n    if (!isUndefined(this._maxListeners)) {\n      m = this._maxListeners;\n    } else {\n      m = EventEmitter.defaultMaxListeners;\n    }\n\n    if (m && m > 0 && this._events[type].length > m) {\n      this._events[type].warned = true;\n      console.error('(node) warning: possible EventEmitter memory ' +\n                    'leak detected. %d listeners added. ' +\n                    'Use emitter.setMaxListeners() to increase limit.',\n                    this._events[type].length);\n      if (typeof console.trace === 'function') {\n        // not supported in IE 10\n        console.trace();\n      }\n    }\n  }\n\n  return this;\n};\n\nEventEmitter.prototype.on = EventEmitter.prototype.addListener;\n\nEventEmitter.prototype.once = function(type, listener) {\n  if (!isFunction(listener))\n    throw TypeError('listener must be a function');\n\n  var fired = false;\n\n  function g() {\n    this.removeListener(type, g);\n\n    if (!fired) {\n      fired = true;\n      listener.apply(this, arguments);\n    }\n  }\n\n  g.listener = listener;\n  this.on(type, g);\n\n  return this;\n};\n\n// emits a 'removeListener' event iff the listener was removed\nEventEmitter.prototype.removeListener = function(type, listener) {\n  var list, position, length, i;\n\n  if (!isFunction(listener))\n    throw TypeError('listener must be a function');\n\n  if (!this._events || !this._events[type])\n    return this;\n\n  list = this._events[type];\n  length = list.length;\n  position = -1;\n\n  if (list === listener ||\n      (isFunction(list.listener) && list.listener === listener)) {\n    delete this._events[type];\n    if (this._events.removeListener)\n      this.emit('removeListener', type, listener);\n\n  } else if (isObject(list)) {\n    for (i = length; i-- > 0;) {\n      if (list[i] === listener ||\n          (list[i].listener && list[i].listener === listener)) {\n        position = i;\n        break;\n      }\n    }\n\n    if (position < 0)\n      return this;\n\n    if (list.length === 1) {\n      list.length = 0;\n      delete this._events[type];\n    } else {\n      list.splice(position, 1);\n    }\n\n    if (this._events.removeListener)\n      this.emit('removeListener', type, listener);\n  }\n\n  return this;\n};\n\nEventEmitter.prototype.removeAllListeners = function(type) {\n  var key, listeners;\n\n  if (!this._events)\n    return this;\n\n  // not listening for removeListener, no need to emit\n  if (!this._events.removeListener) {\n    if (arguments.length === 0)\n      this._events = {};\n    else if (this._events[type])\n      delete this._events[type];\n    return this;\n  }\n\n  // emit removeListener for all listeners on all events\n  if (arguments.length === 0) {\n    for (key in this._events) {\n      if (key === 'removeListener') continue;\n      this.removeAllListeners(key);\n    }\n    this.removeAllListeners('removeListener');\n    this._events = {};\n    return this;\n  }\n\n  listeners = this._events[type];\n\n  if (isFunction(listeners)) {\n    this.removeListener(type, listeners);\n  } else if (listeners) {\n    // LIFO order\n    while (listeners.length)\n      this.removeListener(type, listeners[listeners.length - 1]);\n  }\n  delete this._events[type];\n\n  return this;\n};\n\nEventEmitter.prototype.listeners = function(type) {\n  var ret;\n  if (!this._events || !this._events[type])\n    ret = [];\n  else if (isFunction(this._events[type]))\n    ret = [this._events[type]];\n  else\n    ret = this._events[type].slice();\n  return ret;\n};\n\nEventEmitter.prototype.listenerCount = function(type) {\n  if (this._events) {\n    var evlistener = this._events[type];\n\n    if (isFunction(evlistener))\n      return 1;\n    else if (evlistener)\n      return evlistener.length;\n  }\n  return 0;\n};\n\nEventEmitter.listenerCount = function(emitter, type) {\n  return emitter.listenerCount(type);\n};\n\nfunction isFunction(arg) {\n  return typeof arg === 'function';\n}\n\nfunction isNumber(arg) {\n  return typeof arg === 'number';\n}\n\nfunction isObject(arg) {\n  return typeof arg === 'object' && arg !== null;\n}\n\nfunction isUndefined(arg) {\n  return arg === void 0;\n}\n\n\n//# sourceURL=webpack://BootstrapCookieConsent/./node_modules/node-libs-browser/node_modules/events/events.js?");

/***/ }),

/***/ "./src/BootstrapCookieConsent.js":
/*!***************************************!*\
  !*** ./src/BootstrapCookieConsent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cookie_consent_api_src_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/cookie-consent-api/src/index.js */ \"./node_modules/cookie-consent-api/src/index.js\");\n/**\n * @version 0.0.1\n * @author Robin D https://www.robin-d.fr/\n * @license The MIT License (MIT)\n */\n\n\nclass BootstrapCookieConsent extends CookieConsentApi {\n  constructor(conf = {}) {\n    const defaultConf = {\n      'show_selector': '.cc',\n      'accept_id': 'accept-cookie',\n      'banner_text': 'Ce site utilise des services tiers susceptible de vous déposer un cookie. Pour une navigation optimale, acceptez-vous de les utiliser sur ce site ?',\n      'button_text': 'J\\'accepte',\n      'banner_id': 'cookies-banner',\n      'link_more_info': '#',\n      'more_info_label': 'En savoir plus',\n      'details_title': 'Vie Privée',\n      'details_text': 'Vous pouvez accepter ou refuster l\\'utilisation sur ce site de certains services.',\n      'checkbox_class': 'switch-sm',\n      services: [],\n      services_descr: {}\n    };\n    super(conf);\n    this._conf = Object.assign({}, defaultConf, conf);\n\n    if (super.isAllConfigured() == false) {\n      this._showBanner();\n    }\n\n    super.on('allConfigured', () => {\n      this._hideBanner();\n    });\n    $(this._conf.show_selector).on('click', () => {\n      if (!$('#cookie-modal').length) {\n        this._createDetails();\n      }\n\n      $('#cookie-modal').modal('show');\n    });\n  }\n\n  _hideBanner() {\n    if ($('#' + this._conf.banner_id).length) {\n      $('#' + this._conf.banner_id).remove();\n    }\n  }\n\n  _showBanner() {\n    let banner = '<div id=\"' + this._conf.banner_id + '\" class=\"alert alert-warning text-center\">' + this._conf.banner_text + ' <button class=\"btn btn-success btn-gradient btn-sm\" id=\"' + this._conf.accept_id + '\">' + this._conf.button_text + '</button> <a href=\"' + this._conf.link_more_info + '\">' + this._conf.more_info_label + '</a></div>';\n    $(document.body).prepend(banner);\n    $('#' + this._conf.accept_id).on('click', () => {\n      super.acceptAll();\n\n      this._hideBanner();\n    });\n  }\n\n  _createDetails() {\n    let modal = '<div class=\"modal fade\" id=\"cookie-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">';\n    modal += '<div class=\"modal-dialog\" role=\"document\"><div class=\"modal-content\"><div class=\"modal-header\">';\n    modal += '<h5 class=\"modal-title\">' + this._conf.details_title + '</h5>';\n    modal += '<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Fermer\"><span aria-hidden=\"true\">&times;</span></button></div>';\n    modal += '<div class=\"modal-body\">';\n    modal += '<p>' + this._conf.details_text + ' <a href=\"' + this._conf.link_more_info + '\">' + this._conf.more_info_label + '</a></p>';\n    modal += '<table class=\"table\"><thead class=\"thead-light\"><tr><th scope=\"col\" class=\"col-10\">Service</th><th scope=\"col\" class=\"col-2\">Accepter</th></tr></thead>';\n    modal += '<tbody>';\n\n    this._conf.services.forEach(elem => {\n      modal += '<tr><td>' + elem + (elem in this._conf.services_descr ? '<br><small>' + this._conf.services_descr[elem] + '</small>' : '') + '</td><td class=\"text-center\">';\n      modal += '<span class=\"switch\"><input type=\"checkbox\" class=\"' + this._conf.checkbox_class + '\" id=\"switch-' + elem + '\"';\n      modal += super.isAccepted(elem) ? ' checked' : '';\n      modal += '><label for=\"switch-' + elem + '\"></label></span>';\n      modal += '</td></tr>';\n    });\n\n    modal += '</tbody></table></div></div></div></div>';\n    $(document.body).append(modal);\n\n    this._conf.services.forEach(elem => {\n      $('#switch-' + elem).change(() => {\n        if ($('#switch-' + elem).is(\":checked\")) {\n          super.accept(elem);\n        } else {\n          super.refuse(elem);\n        }\n      });\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BootstrapCookieConsent);\n\n//# sourceURL=webpack://BootstrapCookieConsent/./src/BootstrapCookieConsent.js?");

/***/ })

/******/ })["default"];
});