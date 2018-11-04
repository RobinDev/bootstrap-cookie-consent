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

/***/ "./node_modules/cookie-consent-api/dist/cookie-consent-api.js":
/*!********************************************************************!*\
  !*** ./node_modules/cookie-consent-api/dist/cookie-consent-api.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("!function (e, t) {\n   true ? module.exports = t() : undefined;\n}(window, function () {\n  return function (e) {\n    function t(n) {\n      if (i[n]) return i[n].exports;\n      var r = i[n] = {\n        i: n,\n        l: !1,\n        exports: {}\n      };\n      return e[n].call(r.exports, r, r.exports, t), r.l = !0, r.exports;\n    }\n\n    var i = {};\n    return t.m = e, t.c = i, t.d = function (e, i, n) {\n      t.o(e, i) || Object.defineProperty(e, i, {\n        enumerable: !0,\n        get: n\n      });\n    }, t.r = function (e) {\n      \"undefined\" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {\n        value: \"Module\"\n      }), Object.defineProperty(e, \"__esModule\", {\n        value: !0\n      });\n    }, t.t = function (e, i) {\n      if (1 & i && (e = t(e)), 8 & i) return e;\n      if (4 & i && \"object\" == typeof e && e && e.__esModule) return e;\n      var n = Object.create(null);\n      if (t.r(n), Object.defineProperty(n, \"default\", {\n        enumerable: !0,\n        value: e\n      }), 2 & i && \"string\" != typeof e) for (var r in e) t.d(n, r, function (t) {\n        return e[t];\n      }.bind(null, r));\n      return n;\n    }, t.n = function (e) {\n      var i = e && e.__esModule ? function () {\n        return e.default;\n      } : function () {\n        return e;\n      };\n      return t.d(i, \"a\", i), i;\n    }, t.o = function (e, t) {\n      return Object.prototype.hasOwnProperty.call(e, t);\n    }, t.p = \"./\", t(t.s = 2);\n  }([function (e, t, i) {\n    var n, r;\n    !function (s) {\n      void 0 !== (r = \"function\" == typeof (n = s) ? n.call(t, i, t, e) : n) && (e.exports = r), e.exports = s();\n    }(function () {\n      function e() {\n        for (var e = 0, t = {}; e < arguments.length; e++) {\n          var i = arguments[e];\n\n          for (var n in i) t[n] = i[n];\n        }\n\n        return t;\n      }\n\n      return function t(i) {\n        function n(t, r, s) {\n          var o;\n\n          if (\"undefined\" != typeof document) {\n            if (1 < arguments.length) {\n              if (\"number\" == typeof (s = e({\n                path: \"/\"\n              }, n.defaults, s)).expires) {\n                var c = new Date();\n                c.setMilliseconds(c.getMilliseconds() + 864e5 * s.expires), s.expires = c;\n              }\n\n              s.expires = s.expires ? s.expires.toUTCString() : \"\";\n\n              try {\n                o = JSON.stringify(r), /^[\\{\\[]/.test(o) && (r = o);\n              } catch (e) {}\n\n              r = i.write ? i.write(r, t) : encodeURIComponent(r + \"\").replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = (t = (t = encodeURIComponent(t + \"\")).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\\(\\)]/g, escape);\n              var a = \"\";\n\n              for (var l in s) s[l] && (a += \"; \" + l, !0 !== s[l]) && (a += \"=\" + s[l]);\n\n              return document.cookie = t + \"=\" + r + a;\n            }\n\n            t || (o = {});\n\n            for (var u = document.cookie ? document.cookie.split(\"; \") : [], f = /(%[0-9A-Z]{2})+/g, h = 0; h < u.length; h++) {\n              var v = u[h].split(\"=\"),\n                  p = v.slice(1).join(\"=\");\n              this.json || '\"' !== p.charAt(0) || (p = p.slice(1, -1));\n\n              try {\n                var d = v[0].replace(f, decodeURIComponent);\n                if (p = i.read ? i.read(p, d) : i(p, d) || p.replace(f, decodeURIComponent), this.json) try {\n                  p = JSON.parse(p);\n                } catch (e) {}\n\n                if (t === d) {\n                  o = p;\n                  break;\n                }\n\n                t || (o[d] = p);\n              } catch (e) {}\n            }\n\n            return o;\n          }\n        }\n\n        return n.set = n, n.get = function (e) {\n          return n.call(n, e);\n        }, n.getJSON = function () {\n          return n.apply({\n            json: !0\n          }, [].slice.call(arguments));\n        }, n.defaults = {}, n.remove = function (t, i) {\n          n(t, \"\", e(i, {\n            expires: -1\n          }));\n        }, n.withConverter = t, n;\n      }(function () {});\n    });\n  }, function (e) {\n    function t() {\n      this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0;\n    }\n\n    function i(e) {\n      return \"function\" == typeof e;\n    }\n\n    function n(e) {\n      return \"object\" == typeof e && null !== e;\n    }\n\n    function r(e) {\n      return void 0 === e;\n    }\n\n    e.exports = t, t.EventEmitter = t, t.prototype._events = void 0, t.prototype._maxListeners = void 0, t.defaultMaxListeners = 10, t.prototype.setMaxListeners = function (e) {\n      if (!function (e) {\n        return \"number\" == typeof e;\n      }(e) || 0 > e || isNaN(e)) throw TypeError(\"n must be a positive number\");\n      return this._maxListeners = e, this;\n    }, t.prototype.emit = function (e) {\n      var t, s, o, c, a, l;\n\n      if (this._events || (this._events = {}), \"error\" === e && (!this._events.error || n(this._events.error) && !this._events.error.length)) {\n        if ((t = arguments[1]) instanceof Error) throw t;\n        var u = new Error('Uncaught, unspecified \"error\" event. (' + t + \")\");\n        throw u.context = t, u;\n      }\n\n      if (r(s = this._events[e])) return !1;\n      if (i(s)) switch (arguments.length) {\n        case 1:\n          s.call(this);\n          break;\n\n        case 2:\n          s.call(this, arguments[1]);\n          break;\n\n        case 3:\n          s.call(this, arguments[1], arguments[2]);\n          break;\n\n        default:\n          c = Array.prototype.slice.call(arguments, 1), s.apply(this, c);\n      } else if (n(s)) for (c = Array.prototype.slice.call(arguments, 1), o = (l = s.slice()).length, a = 0; a < o; a++) l[a].apply(this, c);\n      return !0;\n    }, t.prototype.addListener = function (e, s) {\n      var o;\n      if (!i(s)) throw TypeError(\"listener must be a function\");\n      return this._events || (this._events = {}), this._events.newListener && this.emit(\"newListener\", e, i(s.listener) ? s.listener : s), this._events[e] ? n(this._events[e]) ? this._events[e].push(s) : this._events[e] = [this._events[e], s] : this._events[e] = s, n(this._events[e]) && !this._events[e].warned && (o = r(this._maxListeners) ? t.defaultMaxListeners : this._maxListeners) && 0 < o && this._events[e].length > o && (this._events[e].warned = !0, console.error(\"(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.\", this._events[e].length), \"function\" == typeof console.trace && console.trace()), this;\n    }, t.prototype.on = t.prototype.addListener, t.prototype.once = function (e, t) {\n      function n() {\n        this.removeListener(e, n), r || (r = !0, t.apply(this, arguments));\n      }\n\n      if (!i(t)) throw TypeError(\"listener must be a function\");\n      var r = !1;\n      return n.listener = t, this.on(e, n), this;\n    }, t.prototype.removeListener = function (e, t) {\n      var r, s, o, c;\n      if (!i(t)) throw TypeError(\"listener must be a function\");\n      if (!this._events || !this._events[e]) return this;\n      if (o = (r = this._events[e]).length, s = -1, r === t || i(r.listener) && r.listener === t) delete this._events[e], this._events.removeListener && this.emit(\"removeListener\", e, t);else if (n(r)) {\n        for (c = o; 0 < c--;) if (r[c] === t || r[c].listener && r[c].listener === t) {\n          s = c;\n          break;\n        }\n\n        if (0 > s) return this;\n        1 === r.length ? (r.length = 0, delete this._events[e]) : r.splice(s, 1), this._events.removeListener && this.emit(\"removeListener\", e, t);\n      }\n      return this;\n    }, t.prototype.removeAllListeners = function (e) {\n      var t, n;\n      if (!this._events) return this;\n      if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;\n\n      if (0 === arguments.length) {\n        for (t in this._events) \"removeListener\" !== t && this.removeAllListeners(t);\n\n        return this.removeAllListeners(\"removeListener\"), this._events = {}, this;\n      }\n\n      if (i(n = this._events[e])) this.removeListener(e, n);else if (n) for (; n.length;) this.removeListener(e, n[n.length - 1]);\n      return delete this._events[e], this;\n    }, t.prototype.listeners = function (e) {\n      return this._events && this._events[e] ? i(this._events[e]) ? [this._events[e]] : this._events[e].slice() : [];\n    }, t.prototype.listenerCount = function (e) {\n      if (this._events) {\n        var t = this._events[e];\n        if (i(t)) return 1;\n        if (t) return t.length;\n      }\n\n      return 0;\n    }, t.listenerCount = function (e, t) {\n      return e.listenerCount(t);\n    };\n  }, function (e, t, i) {\n    \"use strict\";\n\n    i.r(t);\n    var n = i(0),\n        r = i.n(n),\n        s = i(1),\n        o = i.n(s);\n    t.default = class extends o.a {\n      constructor(e = {}) {\n        super(), this._conf = Object.assign({}, {\n          cookieName: \"cookie_consent_settings\",\n          cookieDuration: 365,\n          cookieDomain: null,\n          services: []\n        }, e), this._validateConf(), this._updateView();\n      }\n\n      reset() {\n        r.a.remove(this._conf.cookieName, {\n          domain: this._conf.cookieDomain\n        }), this._updateView(), this.emit(\"clear\");\n      }\n\n      acceptAll() {\n        let e = {};\n        this._conf.services.forEach(t => e[t] = !0), this._setCookieServices(e), this._updateView(), this.emit(\"allConfigured\");\n      }\n\n      accept(e) {\n        let t = this._getCookieServices();\n\n        t[e] = !0, this._setCookieServices(t), this._updateView(), this.emit(\"accept\", e), this.isAllConfigured() && this.emit(\"allConfigured\");\n      }\n\n      refuse(e) {\n        let t = this._getCookieServices();\n\n        t[e] = !1, this._setCookieServices(t), this._updateView(), this.emit(\"refuse\", e), this.isAllConfigured() && this.emit(\"allConfigured\");\n      }\n\n      isAllConfigured() {\n        const e = this._getCookieServices();\n\n        let t = !0;\n        return this._conf.services.forEach(i => {\n          void 0 === e[i] && (t = !1);\n        }), t;\n      }\n\n      isConfigured(e) {\n        return void 0 !== this._getCookieServices()[e];\n      }\n\n      isAccepted(e) {\n        const t = this._getCookieServices();\n\n        return void 0 !== t[e] && !0 === t[e];\n      }\n\n      isRefused(e) {\n        const t = this._getCookieServices();\n\n        return void 0 !== t[e] && !1 === t[e];\n      }\n\n      getServices() {\n        return this._conf.services;\n      }\n\n      _getCookieServices() {\n        return r.a.getJSON(this._conf.cookieName) || {};\n      }\n\n      _setCookieServices(e) {\n        r.a.set(this._conf.cookieName, e, {\n          duration: this._conf.cookieDuration,\n          domain: this._conf.cookieDomain\n        });\n      }\n\n      _validateConf() {\n        Array.isArray(this._conf.services) ? this._conf.services.forEach(e => {\n          !1 === /^[a-zA-Z0-9]+$/.test(e) && console.error('CCM: \"' + e + '\" is not a valid service name, only alphanumeric allowed');\n        }) : console.error(\"CCM: Services is not an array\");\n      }\n\n      _updateView() {\n        const e = this._getCookieServices();\n\n        this._conf.services.forEach(t => {\n          const i = document.querySelectorAll('[data-cookie-consent=\"' + t + '\"]');\n          !0 === e[t] ? i.forEach(e => {\n            e.getAttribute(\"data-ccm-fallback\") || e.setAttribute(\"data-ccm-fallback\", e.innerHTML);\n            var t = e.innerHTML.match(/<!--if-consent(.*?)endif-->/s);\n            t && 2 == t.length && (e.innerHTML = t[1], this._executeScripts(e));\n          }) : i.forEach(e => {\n            let t = e.getAttribute(\"data-ccm-fallback\");\n            t && (e.innerHTML = t, this._executeScripts(e));\n          });\n        });\n      }\n\n      _executeScripts(e) {\n        e.querySelectorAll(\"script\").forEach(function (t) {\n          let i = document.createElement(\"script\");\n          i.innerHTML = t.innerHTML, t.remove(), e.append(i);\n        });\n      }\n\n    };\n  }]).default;\n});\n\n//# sourceURL=webpack://BootstrapCookieConsent/./node_modules/cookie-consent-api/dist/cookie-consent-api.js?");

/***/ }),

/***/ "./src/BootstrapCookieConsent.js":
/*!***************************************!*\
  !*** ./src/BootstrapCookieConsent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var cookie_consent_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie-consent-api */ \"./node_modules/cookie-consent-api/dist/cookie-consent-api.js\");\n/* harmony import */ var cookie_consent_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie_consent_api__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass BootstrapCookieConsent {\n  constructor(conf = {}) {\n    const defaultConf = {\n      'show_selector': '.cc',\n      'accept_id': 'accept-cookie',\n      'banner_text': 'Ce site utilise des services tiers susceptible de vous déposer un cookie. Pour une navigation optimale, acceptez-vous de les utiliser sur ce site ?',\n      'button_text': 'J\\'accepte',\n      'banner_id': 'cookies-banner',\n      'link_more_info': '#',\n      'more_info_label': 'En savoir plus',\n      'details_title': 'Vie Privée',\n      'details_text': 'Vous pouvez accepter ou refuster l\\'utilisation sur ce site de certains services.',\n      services: []\n    };\n    this._conf = Object.assign({}, defaultConf, conf);\n    this.cookieConsent = new CookieConsentApi(this._conf);\n    console.log(this.cookieConsent.isAllConfigured());\n\n    if (this.cookieConsent.isAllConfigured() == false) {\n      this._showBanner();\n    }\n\n    this.cookieConsent.on('allConfigured', function () {\n      this._hideBanner();\n    });\n    $(this._conf.show_selector).on('click', function () {\n      if (!$('#cookie-modal').lenght) {\n        this._createDetails();\n      }\n\n      $('#cookie-modal').modal('show');\n    });\n  }\n\n  _hideBanner() {\n    this._conf.banner_id.remove();\n  }\n\n  _showBanner() {\n    let banner = '<div id=\"' + this._conf.banner_id + '\" class=\"alert alert-warning text-center\">' + this._conf.banner_text + ' <button class=\"btn btn-success btn-gradient btn-sm\" id=\"' + this._conf.accept_id + '\">' + this._conf.button_text + '</button> <a href=\"' + this._conf.link_more_info + '\">' + this._conf.more_info_label + '</a></div>';\n    console.log('add banner');\n    $(document.body).prepend(banner);\n    $('#' + this._conf.accept_id).click({\n      d: this\n    }, function () {\n      d.cookieConsent.acceptAll();\n\n      d._hideBanner();\n    });\n  }\n\n  _createDetails() {\n    let modal = '<div class=\"modal fade\" id=\"cookie-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">';\n    modal += '<div class=\"modal-dialog\" role=\"document\"><div class=\"modal-content\"><div class=\"modal-header\">';\n    modal += '<h5 class=\"modal-title\">' + this._conf.details_title + '</h5>';\n    modal += '<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Fermer\"><span aria-hidden=\"true\">&times;</span></button></div>';\n    modal += '<div class=\"modal-body\">';\n    modal += '<p>' + this._conf.details_text + ' <a href=\"' + this._conf.link_more_info + '\">' + this._conf.more_info_label + '</a></p>';\n    modal += '<table class=\"table\"><thead class=\"thead-light\"><tr><th scope=\"col\" class=\"col-10\">Service</th><th scope=\"col\" class=\"col-2\">Accepter</th></tr></thead>';\n    modal += '<tbody>';\n\n    this._conf.service.forEach(function (elem) {\n      console.log(elem);\n      modal += '<tr><td>' + elem + '</td><td>';\n      modal += '<span class=\"switch\"><input type=\"checkbox\" class=\"switch-sm\" id=\"switch-' + elem + '\"';\n      modal += this.cookieConsent.isAccepted(service) ? ' checked' : '';\n      modal += '><label for=\"switch-' + elem + '\"></label></span>';\n      modal += '</td></tr>';\n      $('switch-' + elem).on('click', function () {\n        if ($('switch-' + elem).is(\":checked\")) {\n          this.cookieConsent.accept(elem);\n        } else {\n          this.cookieConsent.refuse(elem);\n        }\n      });\n    });\n\n    modal += '</tbody></table></div></div></div></div>';\n    $(document.body).append(modal);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BootstrapCookieConsent);\n\n//# sourceURL=webpack://BootstrapCookieConsent/./src/BootstrapCookieConsent.js?");

/***/ })

/******/ })["default"];
});