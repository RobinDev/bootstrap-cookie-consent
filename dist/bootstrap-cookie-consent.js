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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cookie_consent_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var cookie_consent_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie_consent_api__WEBPACK_IMPORTED_MODULE_0__);


class BootstrapCookieConsent {
  constructor(conf = {}) {
    const defaultConf = {
      'show_selector': '.cc',
      'accept_id': 'accept-cookie',
      'banner_text': 'Ce site utilise des services tiers susceptible de vous déposer un cookie. Pour une navigation optimale, acceptez-vous de les utiliser sur ce site ?',
      'button_text': 'J\'accepte',
      'banner_id': 'cookies-banner',
      'link_more_info': '#',
      'more_info_label': 'En savoir plus',
      'details_title': 'Vie Privée',
      'details_text': 'Vous pouvez accepter ou refuster l\'utilisation sur ce site de certains services.',
      services: []
    };
    this._conf = Object.assign({}, defaultConf, conf);
    this.cookieConsent = new CookieConsentApi(this._conf);
    console.log(this.cookieConsent.isAllConfigured());

    if (this.cookieConsent.isAllConfigured() == false) {
      this._showBanner();
    }

    this.cookieConsent.on('allConfigured', function () {
      this._hideBanner();
    });
    $(this._conf.show_selector).on('click', function () {
      if (!$('#cookie-modal').lenght) {
        this._createDetails();
      }

      $('#cookie-modal').modal('show');
    });
  }

  _hideBanner() {
    this._conf.banner_id.remove();
  }

  _showBanner() {
    let banner = '<div id="' + this._conf.banner_id + '" class="alert alert-warning text-center">' + this._conf.banner_text + ' <button class="btn btn-success btn-gradient btn-sm" id="' + this._conf.accept_id + '">' + this._conf.button_text + '</button> <a href="' + this._conf.link_more_info + '">' + this._conf.more_info_label + '</a></div>';
    console.log('add banner');
    $(document.body).prepend(banner);
    $('#' + this._conf.accept_id).click({
      d: this
    }, function () {
      d.cookieConsent.acceptAll();

      d._hideBanner();
    });
  }

  _createDetails() {
    let modal = '<div class="modal fade" id="cookie-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">';
    modal += '<div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header">';
    modal += '<h5 class="modal-title">' + this._conf.details_title + '</h5>';
    modal += '<button type="button" class="close" data-dismiss="modal" aria-label="Fermer"><span aria-hidden="true">&times;</span></button></div>';
    modal += '<div class="modal-body">';
    modal += '<p>' + this._conf.details_text + ' <a href="' + this._conf.link_more_info + '">' + this._conf.more_info_label + '</a></p>';
    modal += '<table class="table"><thead class="thead-light"><tr><th scope="col" class="col-10">Service</th><th scope="col" class="col-2">Accepter</th></tr></thead>';
    modal += '<tbody>';

    this._conf.service.forEach(function (elem) {
      console.log(elem);
      modal += '<tr><td>' + elem + '</td><td>';
      modal += '<span class="switch"><input type="checkbox" class="switch-sm" id="switch-' + elem + '"';
      modal += this.cookieConsent.isAccepted(service) ? ' checked' : '';
      modal += '><label for="switch-' + elem + '"></label></span>';
      modal += '</td></tr>';
      $('switch-' + elem).on('click', function () {
        if ($('switch-' + elem).is(":checked")) {
          this.cookieConsent.accept(elem);
        } else {
          this.cookieConsent.refuse(elem);
        }
      });
    });

    modal += '</tbody></table></div></div></div></div>';
    $(document.body).append(modal);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (BootstrapCookieConsent);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

!function (e, t) {
   true ? module.exports = t() : undefined;
}(window, function () {
  return function (e) {
    function t(n) {
      if (i[n]) return i[n].exports;
      var r = i[n] = {
        i: n,
        l: !1,
        exports: {}
      };
      return e[n].call(r.exports, r, r.exports, t), r.l = !0, r.exports;
    }

    var i = {};
    return t.m = e, t.c = i, t.d = function (e, i, n) {
      t.o(e, i) || Object.defineProperty(e, i, {
        enumerable: !0,
        get: n
      });
    }, t.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, t.t = function (e, i) {
      if (1 & i && (e = t(e)), 8 & i) return e;
      if (4 & i && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (t.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: e
      }), 2 & i && "string" != typeof e) for (var r in e) t.d(n, r, function (t) {
        return e[t];
      }.bind(null, r));
      return n;
    }, t.n = function (e) {
      var i = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return t.d(i, "a", i), i;
    }, t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, t.p = "./", t(t.s = 2);
  }([function (e, t, i) {
    var n, r;
    !function (s) {
      void 0 !== (r = "function" == typeof (n = s) ? n.call(t, i, t, e) : n) && (e.exports = r), e.exports = s();
    }(function () {
      function e() {
        for (var e = 0, t = {}; e < arguments.length; e++) {
          var i = arguments[e];

          for (var n in i) t[n] = i[n];
        }

        return t;
      }

      return function t(i) {
        function n(t, r, s) {
          var o;

          if ("undefined" != typeof document) {
            if (1 < arguments.length) {
              if ("number" == typeof (s = e({
                path: "/"
              }, n.defaults, s)).expires) {
                var c = new Date();
                c.setMilliseconds(c.getMilliseconds() + 864e5 * s.expires), s.expires = c;
              }

              s.expires = s.expires ? s.expires.toUTCString() : "";

              try {
                o = JSON.stringify(r), /^[\{\[]/.test(o) && (r = o);
              } catch (e) {}

              r = i.write ? i.write(r, t) : encodeURIComponent(r + "").replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = (t = (t = encodeURIComponent(t + "")).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
              var a = "";

              for (var l in s) s[l] && (a += "; " + l, !0 !== s[l]) && (a += "=" + s[l]);

              return document.cookie = t + "=" + r + a;
            }

            t || (o = {});

            for (var u = document.cookie ? document.cookie.split("; ") : [], f = /(%[0-9A-Z]{2})+/g, h = 0; h < u.length; h++) {
              var v = u[h].split("="),
                  p = v.slice(1).join("=");
              this.json || '"' !== p.charAt(0) || (p = p.slice(1, -1));

              try {
                var d = v[0].replace(f, decodeURIComponent);
                if (p = i.read ? i.read(p, d) : i(p, d) || p.replace(f, decodeURIComponent), this.json) try {
                  p = JSON.parse(p);
                } catch (e) {}

                if (t === d) {
                  o = p;
                  break;
                }

                t || (o[d] = p);
              } catch (e) {}
            }

            return o;
          }
        }

        return n.set = n, n.get = function (e) {
          return n.call(n, e);
        }, n.getJSON = function () {
          return n.apply({
            json: !0
          }, [].slice.call(arguments));
        }, n.defaults = {}, n.remove = function (t, i) {
          n(t, "", e(i, {
            expires: -1
          }));
        }, n.withConverter = t, n;
      }(function () {});
    });
  }, function (e) {
    function t() {
      this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0;
    }

    function i(e) {
      return "function" == typeof e;
    }

    function n(e) {
      return "object" == typeof e && null !== e;
    }

    function r(e) {
      return void 0 === e;
    }

    e.exports = t, t.EventEmitter = t, t.prototype._events = void 0, t.prototype._maxListeners = void 0, t.defaultMaxListeners = 10, t.prototype.setMaxListeners = function (e) {
      if (!function (e) {
        return "number" == typeof e;
      }(e) || 0 > e || isNaN(e)) throw TypeError("n must be a positive number");
      return this._maxListeners = e, this;
    }, t.prototype.emit = function (e) {
      var t, s, o, c, a, l;

      if (this._events || (this._events = {}), "error" === e && (!this._events.error || n(this._events.error) && !this._events.error.length)) {
        if ((t = arguments[1]) instanceof Error) throw t;
        var u = new Error('Uncaught, unspecified "error" event. (' + t + ")");
        throw u.context = t, u;
      }

      if (r(s = this._events[e])) return !1;
      if (i(s)) switch (arguments.length) {
        case 1:
          s.call(this);
          break;

        case 2:
          s.call(this, arguments[1]);
          break;

        case 3:
          s.call(this, arguments[1], arguments[2]);
          break;

        default:
          c = Array.prototype.slice.call(arguments, 1), s.apply(this, c);
      } else if (n(s)) for (c = Array.prototype.slice.call(arguments, 1), o = (l = s.slice()).length, a = 0; a < o; a++) l[a].apply(this, c);
      return !0;
    }, t.prototype.addListener = function (e, s) {
      var o;
      if (!i(s)) throw TypeError("listener must be a function");
      return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, i(s.listener) ? s.listener : s), this._events[e] ? n(this._events[e]) ? this._events[e].push(s) : this._events[e] = [this._events[e], s] : this._events[e] = s, n(this._events[e]) && !this._events[e].warned && (o = r(this._maxListeners) ? t.defaultMaxListeners : this._maxListeners) && 0 < o && this._events[e].length > o && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace()), this;
    }, t.prototype.on = t.prototype.addListener, t.prototype.once = function (e, t) {
      function n() {
        this.removeListener(e, n), r || (r = !0, t.apply(this, arguments));
      }

      if (!i(t)) throw TypeError("listener must be a function");
      var r = !1;
      return n.listener = t, this.on(e, n), this;
    }, t.prototype.removeListener = function (e, t) {
      var r, s, o, c;
      if (!i(t)) throw TypeError("listener must be a function");
      if (!this._events || !this._events[e]) return this;
      if (o = (r = this._events[e]).length, s = -1, r === t || i(r.listener) && r.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);else if (n(r)) {
        for (c = o; 0 < c--;) if (r[c] === t || r[c].listener && r[c].listener === t) {
          s = c;
          break;
        }

        if (0 > s) return this;
        1 === r.length ? (r.length = 0, delete this._events[e]) : r.splice(s, 1), this._events.removeListener && this.emit("removeListener", e, t);
      }
      return this;
    }, t.prototype.removeAllListeners = function (e) {
      var t, n;
      if (!this._events) return this;
      if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;

      if (0 === arguments.length) {
        for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);

        return this.removeAllListeners("removeListener"), this._events = {}, this;
      }

      if (i(n = this._events[e])) this.removeListener(e, n);else if (n) for (; n.length;) this.removeListener(e, n[n.length - 1]);
      return delete this._events[e], this;
    }, t.prototype.listeners = function (e) {
      return this._events && this._events[e] ? i(this._events[e]) ? [this._events[e]] : this._events[e].slice() : [];
    }, t.prototype.listenerCount = function (e) {
      if (this._events) {
        var t = this._events[e];
        if (i(t)) return 1;
        if (t) return t.length;
      }

      return 0;
    }, t.listenerCount = function (e, t) {
      return e.listenerCount(t);
    };
  }, function (e, t, i) {
    "use strict";

    i.r(t);
    var n = i(0),
        r = i.n(n),
        s = i(1),
        o = i.n(s);
    t.default = class extends o.a {
      constructor(e = {}) {
        super(), this._conf = Object.assign({}, {
          cookieName: "cookie_consent_settings",
          cookieDuration: 365,
          cookieDomain: null,
          services: []
        }, e), this._validateConf(), this._updateView();
      }

      reset() {
        r.a.remove(this._conf.cookieName, {
          domain: this._conf.cookieDomain
        }), this._updateView(), this.emit("clear");
      }

      acceptAll() {
        let e = {};
        this._conf.services.forEach(t => e[t] = !0), this._setCookieServices(e), this._updateView(), this.emit("allConfigured");
      }

      accept(e) {
        let t = this._getCookieServices();

        t[e] = !0, this._setCookieServices(t), this._updateView(), this.emit("accept", e), this.isAllConfigured() && this.emit("allConfigured");
      }

      refuse(e) {
        let t = this._getCookieServices();

        t[e] = !1, this._setCookieServices(t), this._updateView(), this.emit("refuse", e), this.isAllConfigured() && this.emit("allConfigured");
      }

      isAllConfigured() {
        const e = this._getCookieServices();

        let t = !0;
        return this._conf.services.forEach(i => {
          void 0 === e[i] && (t = !1);
        }), t;
      }

      isConfigured(e) {
        return void 0 !== this._getCookieServices()[e];
      }

      isAccepted(e) {
        const t = this._getCookieServices();

        return void 0 !== t[e] && !0 === t[e];
      }

      isRefused(e) {
        const t = this._getCookieServices();

        return void 0 !== t[e] && !1 === t[e];
      }

      getServices() {
        return this._conf.services;
      }

      _getCookieServices() {
        return r.a.getJSON(this._conf.cookieName) || {};
      }

      _setCookieServices(e) {
        r.a.set(this._conf.cookieName, e, {
          duration: this._conf.cookieDuration,
          domain: this._conf.cookieDomain
        });
      }

      _validateConf() {
        Array.isArray(this._conf.services) ? this._conf.services.forEach(e => {
          !1 === /^[a-zA-Z0-9]+$/.test(e) && console.error('CCM: "' + e + '" is not a valid service name, only alphanumeric allowed');
        }) : console.error("CCM: Services is not an array");
      }

      _updateView() {
        const e = this._getCookieServices();

        this._conf.services.forEach(t => {
          const i = document.querySelectorAll('[data-cookie-consent="' + t + '"]');
          !0 === e[t] ? i.forEach(e => {
            e.getAttribute("data-ccm-fallback") || e.setAttribute("data-ccm-fallback", e.innerHTML);
            var t = e.innerHTML.match(/<!--if-consent(.*?)endif-->/s);
            t && 2 == t.length && (e.innerHTML = t[1], this._executeScripts(e));
          }) : i.forEach(e => {
            let t = e.getAttribute("data-ccm-fallback");
            t && (e.innerHTML = t, this._executeScripts(e));
          });
        });
      }

      _executeScripts(e) {
        e.querySelectorAll("script").forEach(function (t) {
          let i = document.createElement("script");
          i.innerHTML = t.innerHTML, t.remove(), e.append(i);
        });
      }

    };
  }]).default;
});

/***/ })
/******/ ])["default"];
});