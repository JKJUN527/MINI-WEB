// { "framework": "Vue"} 

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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(7);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  typeof document.createElement -> undefined
 */
function isStandardBrowserEnv() {
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined' &&
    typeof document.createElement === 'function'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                                * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
                                                                                                                                                                                                                                                                                * Created by Tw93 on 17/11/01
                                                                                                                                                                                                                                                                                */

var _urlParse = __webpack_require__(75);

var _urlParse2 = _interopRequireDefault(_urlParse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Utils = {
  UrlParser: _urlParse2.default,
  _typeof: function _typeof(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  },
  isPlainObject: function isPlainObject(obj) {
    return Utils._typeof(obj) === 'object';
  },
  isString: function isString(obj) {
    return typeof obj === 'string';
  },
  isNonEmptyArray: function isNonEmptyArray() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    return obj && obj.length > 0 && Array.isArray(obj) && typeof obj !== 'undefined';
  },
  isObject: function isObject(item) {
    return item && (typeof item === 'undefined' ? 'undefined' : _typeof2(item)) === 'object' && !Array.isArray(item);
  },
  isEmptyObject: function isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  },
  decodeIconFont: function decodeIconFont(text) {
    // 正则匹配 图标和文字混排 eg: 我去上学校&#xe600;,天天不&#xe600;迟到
    var regExp = /&#x[a-z|0-9]{4,5};?/g;
    if (regExp.test(text)) {
      return text.replace(new RegExp(regExp, 'g'), function (iconText) {
        var replace = iconText.replace(/&#x/, '0x').replace(/;$/, '');
        return String.fromCharCode(replace);
      });
    } else {
      return text;
    }
  },
  mergeDeep: function mergeDeep(target) {
    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      sources[_key - 1] = arguments[_key];
    }

    if (!sources.length) return target;
    var source = sources.shift();
    if (Utils.isObject(target) && Utils.isObject(source)) {
      for (var key in source) {
        if (Utils.isObject(source[key])) {
          if (!target[key]) {
            Object.assign(target, _defineProperty({}, key, {}));
          }
          Utils.mergeDeep(target[key], source[key]);
        } else {
          Object.assign(target, _defineProperty({}, key, source[key]));
        }
      }
    }
    return Utils.mergeDeep.apply(Utils, [target].concat(sources));
  },
  appendProtocol: function appendProtocol(url) {
    if (/^\/\//.test(url)) {
      var bundleUrl = weex.config.bundleUrl;

      return 'http' + (/^https:/.test(bundleUrl) ? 's' : '') + ':' + url;
    }
    return url;
  },
  encodeURLParams: function encodeURLParams(url) {
    var parsedUrl = new _urlParse2.default(url, true);
    return parsedUrl.toString();
  },
  goToH5Page: function goToH5Page(jumpUrl) {
    var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    var Navigator = weex.requireModule('navigator');
    var jumpUrlObj = new Utils.UrlParser(jumpUrl, true);
    var url = Utils.appendProtocol(jumpUrlObj.toString());
    Navigator.push({
      url: Utils.encodeURLParams(url),
      animated: animated.toString()
    }, callback);
  },

  env: {
    isTaobao: function isTaobao() {
      var appName = weex.config.env.appName;

      return (/(tb|taobao|淘宝)/i.test(appName)
      );
    },
    isTrip: function isTrip() {
      var appName = weex.config.env.appName;

      return appName === 'LX';
    },
    isBoat: function isBoat() {
      var appName = weex.config.env.appName;

      return appName === 'Boat' || appName === 'BoatPlayground';
    },
    isWeb: function isWeb() {
      var platform = weex.config.env.platform;

      return (typeof window === 'undefined' ? 'undefined' : _typeof2(window)) === 'object' && platform.toLowerCase() === 'web';
    },
    isIOS: function isIOS() {
      var platform = weex.config.env.platform;

      return platform.toLowerCase() === 'ios';
    },

    /**
     * 是否为 iPhone X
     * @returns {boolean}
     */
    isIPhoneX: function isIPhoneX() {
      var deviceHeight = weex.config.env.deviceHeight;

      if (Utils.env.isWeb()) {
        return (typeof window === 'undefined' ? 'undefined' : _typeof2(window)) !== undefined && window.screen && window.screen.width && window.screen.height && parseInt(window.screen.width, 10) === 375 && parseInt(window.screen.height, 10) === 812;
      }
      return Utils.env.isIOS() && deviceHeight === 2436;
    },
    isAndroid: function isAndroid() {
      var platform = weex.config.env.platform;

      return platform.toLowerCase() === 'android';
    },
    isAlipay: function isAlipay() {
      var appName = weex.config.env.appName;

      return appName === 'AP';
    },
    isTmall: function isTmall() {
      var appName = weex.config.env.appName;

      return (/(tm|tmall|天猫)/i.test(appName)
      );
    },
    isAliWeex: function isAliWeex() {
      return Utils.env.isTmall() || Utils.env.isTrip() || Utils.env.isTaobao();
    },

    /**
     * 获取weex屏幕真实的设置高度，需要减去导航栏高度
     * @returns {Number}
     */
    getPageHeight: function getPageHeight() {
      var env = weex.config.env;

      var navHeight = Utils.env.isWeb() ? 0 : Utils.env.isIPhoneX() ? 176 : 132;
      return env.deviceHeight / env.deviceWidth * 750 - navHeight;
    },

    /**
     * 获取weex屏幕真实的设置高度
     * @returns {Number}
     */
    getScreenHeight: function getScreenHeight() {
      var env = weex.config.env;

      return env.deviceHeight / env.deviceWidth * 750;
    }
  },

  /**
   * 版本号比较
   * @memberOf Utils
   * @param currVer {string}
   * @param promoteVer {string}
   * @returns {boolean}
   * @example
   *
   * const { Utils } = require('@ali/wx-bridge');
   * const { compareVersion } = Utils;
   * console.log(compareVersion('0.1.100', '0.1.11')); // 'true'
   */
  compareVersion: function compareVersion() {
    var currVer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0.0.0';
    var promoteVer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0.0.0';

    if (currVer === promoteVer) return true;
    var currVerArr = currVer.split('.');
    var promoteVerArr = promoteVer.split('.');
    var len = Math.max(currVerArr.length, promoteVerArr.length);
    for (var i = 0; i < len; i++) {
      var proVal = ~~promoteVerArr[i];
      var curVal = ~~currVerArr[i];
      if (proVal < curVal) {
        return true;
      } else if (proVal > curVal) {
        return false;
      }
    }
    return false;
  },

  /**
   * 分割数组
   * @param arr 被分割数组
   * @param size 分割数组的长度
   * @returns {Array}
   */
  arrayChunk: function arrayChunk() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

    var groups = [];
    if (arr && arr.length > 0) {
      groups = arr.map(function (e, i) {
        return i % size === 0 ? arr.slice(i, i + size) : null;
      }).filter(function (e) {
        return e;
      });
    }
    return groups;
  },

  /*
   * 截断字符串
   * @param str 传入字符串
   * @param len 截断长度
   * @param hasDot 末尾是否...
   * @returns {String}
   */
  truncateString: function truncateString(str, len) {
    var hasDot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var newLength = 0;
    var newStr = '';
    var singleChar = '';
    var chineseRegex = /[^\x00-\xff]/g;
    var strLength = str.replace(chineseRegex, '**').length;
    for (var i = 0; i < strLength; i++) {
      singleChar = str.charAt(i).toString();
      if (singleChar.match(chineseRegex) !== null) {
        newLength += 2;
      } else {
        newLength++;
      }
      if (newLength > len) {
        break;
      }
      newStr += singleChar;
    }

    if (hasDot && strLength > len) {
      newStr += '...';
    }
    return newStr;
  },

  /*
   * 转换 obj 为 url params参数
   * @param obj 传入字符串
   * @returns {String}
   */
  objToParams: function objToParams(obj) {
    var str = "";
    for (var key in obj) {
      if (str !== "") {
        str += "&";
      }
      str += key + "=" + encodeURIComponent(obj[key]);
    }
    return str;
  },

  /*
   * 转换 url params参数为obj
   * @param str 传入url参数字符串
   * @returns {Object}
   */
  paramsToObj: function paramsToObj(str) {
    var obj = {};
    try {
      obj = JSON.parse('{"' + decodeURI(str).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
    } catch (e) {
      console.log(e);
    }
    return obj;
  },

  animation: {
    /**
     * 返回定义页面转场动画起初的位置
     * @param ref
     * @param transform 运动类型
     * @param status
     * @param callback 回调函数
     */
    pageTransitionAnimation: function pageTransitionAnimation(ref, transform, status, callback) {
      var animation = weex.requireModule('animation');
      animation.transition(ref, {
        styles: {
          transform: transform
        },
        duration: status ? 250 : 300, // ms
        timingFunction: status ? 'ease-in' : 'ease-out',
        delay: 0 // ms
      }, function () {
        callback && callback();
      });
    }
  },
  uiStyle: {
    /**
     * 返回定义页面转场动画起初的位置
     * @param animationType 页面转场动画的类型 push，model
     * @param size 分割数组的长度
     * @returns {}
     */
    pageTransitionAnimationStyle: function pageTransitionAnimationStyle(animationType) {
      if (animationType === 'push') {
        return {
          left: '750px',
          top: '0px',
          height: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px'
        };
      } else if (animationType === 'model') {
        return {
          top: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px',
          left: '0px',
          height: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px'
        };
      }
      return {};
    }
  }
};

exports.default = Utils;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(39);

var _axios2 = _interopRequireDefault(_axios);

var _qs = __webpack_require__(57);

var _qs2 = _interopRequireDefault(_qs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PersonInfo = 'getpersoninfo/';
var OtherPerson = 'getotherpersoninfo/';
var GetVideo = 'getvideo/';
var ConversationList = 'getConversationList/';
var ConversationDetail = 'getConversationDetail/';
var sendMessage = 'sendMessage/';
var PushMessages = 'getPushMessages/';
var preference = 'preference/';
var Events = 'getevent/';
var Count = 'getCount/';
var DetectFace = 'detectface/';
var PersonEdit = 'editpersoninfo/';
var uploadVideo = 'uploadvideo/';
var Login = 'isloggedin/';
// const  = 'editpersoninfo/'

var ax = _axios2.default.create({
  baseURL: 'https://mini.jkjun.cn/',
  timeout: 1000
});

function makePost(path, data) {
  return ax.post(path, _qs2.default.stringify(data));
}

function makeGet(path, params) {
  return ax.get(path, { params: params });
}

function uploadFile(path, data) {
  return ax.post(path, data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}

function getPersonInfo(data) {
  return makeGet(PersonInfo, data);
}

function getVideo(data) {
  return makeGet(GetVideo, data);
}

function getConversationList(data) {
  return makeGet(ConversationList, data);
}

function getConversationDetail(data) {
  return makeGet(ConversationDetail, data);
}

function getPushMessages(data) {
  return makeGet(PushMessages, data);
}

function doSendMessage(data) {
  return makePost(sendMessage, data);
}

function sendPreference(data) {
  return makePost(preference, data);
}

function getEvent(data) {
  return makeGet(Events, data);
}

function getCount(data) {
  return makeGet(Count, data);
}

function doDetectFace(data) {
  return uploadFile(DetectFace, data);
}

function doPersonEdit(data) {
  return uploadFile(PersonEdit, data);
}

function getOtherInfo(data) {
  return makePost(OtherPerson, data);
}

function doUploadVideo(data) {
  return uploadFile(uploadVideo, data);
}

function isLogin(data) {
  return makeGet(Login, data);
}

exports.default = {
  isLogin: isLogin,
  getPersonInfo: getPersonInfo,
  getVideo: getVideo,
  getConversationList: getConversationList,
  getConversationDetail: getConversationDetail,
  getPushMessages: getPushMessages,
  doSendMessage: doSendMessage,
  sendPreference: sendPreference,
  getEvent: getEvent,
  getCount: getCount,
  doDetectFace: doDetectFace,
  doPersonEdit: doPersonEdit,
  getOtherInfo: getOtherInfo,
  doUploadVideo: doUploadVideo
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _indexWeex = __webpack_require__(4);

var _indexWeex2 = _interopRequireDefault(_indexWeex);

var _index = __webpack_require__(1);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
 * Created by Tw93 on 18/03/22
 */
var BindEnv = {
  supportsEB: function supportsEB() {
    return _indexWeex2.default.isSupportBinding && !_index2.default.env.isWeb();
  },


  /**
   * 判断Android容器是否支持是否支持expressionBinding(处理方式很不一致)
   * @returns {boolean}
   */
  supportsEBForAndroid: function supportsEBForAndroid() {
    return _index2.default.env.isAndroid() && BindEnv.supportsEB();
  },


  /**
   * 判断IOS容器是否支持是否支持expressionBinding
   * @returns {boolean}
   */
  supportsEBForIos: function supportsEBForIos() {
    return _index2.default.env.isIOS() && BindEnv.supportsEB();
  }
};

exports.default = BindEnv;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

;(function (fn) {
  if (( false ? "undefined" : _typeof2(exports)) === "object" && typeof module !== "undefined") {
    module.exports = fn();
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {
      module.exports = fn();
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    var root;
    if (typeof window !== "undefined") {
      root = window;
    } else if (typeof self !== "undefined") {
      root = self;
    } else if (typeof global !== "undefined") {
      root = global;
    } else {
      // NOTICE: In JavaScript strict mode, this is null
      root = this;
    }
    root["index"] = fn();
  }
})(function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 0);
      /******/
    }(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";
      /**
       Copyright 2018 Alibaba Group
      
       Licensed under the Apache License, Version 2.0 (the "License");
       you may not use this file except in compliance with the License.
       You may obtain a copy of the License at
      
       http://www.apache.org/licenses/LICENSE-2.0
      
       Unless required by applicable law or agreed to in writing, software
       distributed under the License is distributed on an "AS IS" BASIS,
       WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       See the License for the specific language governing permissions and
       limitations under the License.
       */

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
      };

      var _bindingxParser = __webpack_require__(1);

      var isWeb = false;
      var isWeex = true;

      function requireModule(moduleName) {
        try {
          if ((typeof weex === 'undefined' ? 'undefined' : _typeof(weex)) !== undefined && weex.requireModule) {
            // eslint-disable-line
            return weex.requireModule(moduleName); // eslint-disable-line
          }
        } catch (err) {}
        return window.require('@weex-module/' + moduleName);
      }

      var isSupportNewBinding = true;
      var isSupportBinding = true;
      var WeexBinding = void 0;
      var WebBinding = {};

      try {
        WeexBinding = requireModule('bindingx');
        isSupportNewBinding = true;
      } catch (e) {
        isSupportNewBinding = false;
      }
      if (!WeexBinding || !WeexBinding.bind) {
        try {
          WeexBinding = requireModule('binding');
          isSupportNewBinding = true;
        } catch (e) {
          isSupportNewBinding = false;
        }
      }
      isSupportNewBinding = !!(WeexBinding && WeexBinding.bind && WeexBinding.unbind);
      if (!isSupportNewBinding) {
        try {
          WeexBinding = requireModule('expressionBinding');
          isSupportBinding = true;
        } catch (err) {
          isSupportBinding = false;
        }
      }
      isSupportBinding = !!(WeexBinding && (WeexBinding.bind || WeexBinding.createBinding));

      function formatExpression(expression) {
        if (expression === undefined) return;
        try {
          expression = JSON.parse(expression);
        } catch (err) {}
        var resultExpression = {};
        if (typeof expression === 'string') {
          resultExpression.origin = expression;
        } else if (expression) {
          resultExpression.origin = expression.origin;
          resultExpression.transformed = expression.transformed;
        }
        if (!resultExpression.transformed && !resultExpression.origin) return;
        resultExpression.transformed = resultExpression.transformed || (0, _bindingxParser.parse)(resultExpression.origin);
        return resultExpression;
      }

      // 统一回调参数
      function fixCallback(callback) {
        return function () {
          var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          if (typeof callback === 'function') {
            return callback({
              state: params.state === 'end' ? 'exit' : params.state,
              t: params.t !== undefined ? params.t : params.deltaT
            });
          }
        };
      }

      exports.default = {
        // 是否支持新版本的binding
        isSupportNewBinding: isSupportNewBinding,
        // 是否支持binding
        isSupportBinding: isSupportBinding,
        _bindingInstances: [],
        /**
         * 绑定
         * @param options 参数
         * @example
         {
           anchor:blockRef,
           eventType:'pan',
           props: [
           {
             element:blockRef,
             property:'transform.translateX',
             expression:{
               origin:"x+1",
               transformed:"{\"type\":\"+\",\"children\":[{\"type\":\"Identifier\",\"value\":\"x\"},{\"type\":\"NumericLiteral\",\"value\":1}]}"
             }
           }
          ]
         }
         */
        bind: function bind(options) {
          var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

          if (!options) {
            throw new Error('should pass options for binding');
          }

          options.exitExpression = formatExpression(options.exitExpression);

          if (options.props) {
            options.props.forEach(function (prop) {
              prop.expression = formatExpression(prop.expression);
            });
          }

          if (WeexBinding && isSupportBinding) {
            if (isSupportNewBinding) {
              return WeexBinding.bind(options, options && options.eventType === 'timing' ? fixCallback(callback) : callback);
            } else {
              WeexBinding.enableBinding(options.anchor, options.eventType);
              // 处理expression的参数格式
              var expressionArgs = options.props.map(function (prop) {
                return {
                  element: prop.element,
                  property: prop.property,
                  expression: prop.expression.transformed
                };
              });
              WeexBinding.createBinding(options.anchor, options.eventType, '', expressionArgs, callback);
            }
          }
        },

        /**
         *  @param {object} options
         *  @example
         *  {eventType:'pan',
         *   token:self.gesToken}
         */
        unbind: function unbind(options) {
          if (!options) {
            throw new Error('should pass options for binding');
          }

          if (WeexBinding && isSupportBinding) {
            if (isSupportNewBinding) {
              return WeexBinding.unbind(options);
            } else {
              return WeexBinding.disableBinding(options.anchor, options.eventType);
            }
          }
        },
        unbindAll: function unbindAll() {
          if (WeexBinding && isSupportBinding) {
            if (isSupportNewBinding) {
              return WeexBinding.unbindAll();
            } else {
              return WeexBinding.disableAll();
            }
          }
        },
        prepare: function prepare(options) {
          if (WeexBinding && isSupportBinding) {
            if (isSupportNewBinding) {
              return WeexBinding.prepare(options);
            } else {
              return WeexBinding.enableBinding(options.anchor, options.eventType);
            }
          }
        },
        getComputedStyle: function getComputedStyle(el) {
          if (isSupportNewBinding) {
            return WeexBinding.getComputedStyle(el);
          } else {
            return {};
          }
        }
      };
      module.exports = exports['default'];

      /***/
    },
    /* 1 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      module.exports = __webpack_require__(2);

      /***/
    },
    /* 2 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var lex = {
        InputElementDiv: '<WhiteSpace>|<LineTerminator>|<ReservedWord>|<Identifier>|<NumericLiteral>|<Punctuator>|<StringLiteral>',
        InputElementRegExp: '<WhiteSpace>|<LineTerminator>|<ReservedWord>|<Identifier>|<NumericLiteral>|<Punctuator>|<StringLiteral>',
        ReservedWord: '<Keyword>|<NullLiteral>|<BooleanLiteral>',
        WhiteSpace: /[\t\v\f\u0020\u00A0\u1680\u180E\u2000-\u200A\u202F\u205f\u3000\uFEFF]/,
        LineTerminator: /[\n\r\u2028\u2029]/,
        Keyword: /new(?![_$a-zA-Z0-9])|void(?![_$a-zA-Z0-9])|delete(?![_$a-zA-Z0-9])|in(?![_$a-zA-Z0-9])|instanceof(?![_$a-zA-Z0-9])|typeof(?![_$a-zA-Z0-9])/,
        NullLiteral: /null(?![_$a-zA-Z0-9])/,
        BooleanLiteral: /(?:true|false)(?![_$a-zA-Z0-9])/,
        Identifier: /[_$a-zA-Z][_$a-zA-Z0-9]*/,
        Punctuator: /\/|=>|\*\*|>>>=|>>=|<<=|===|!==|>>>|<<|%=|\*=|-=|\+=|<=|>=|==|!=|\^=|\|=|\|\||&&|&=|>>|\+\+|--|\:|}|\*|&|\||\^|!|~|-|\+|\?|%|=|>|<|,|;|\.(?![0-9])|\]|\[|\)|\(|{/,
        DivPunctuator: /\/=|\//,
        NumericLiteral: /(?:0[xX][0-9a-fA-F]*|\.[0-9]+|(?:[1-9]+[0-9]*|0)(?:\.[0-9]*|\.)?)(?:[eE][+-]{0,1}[0-9]+)?(?![_$a-zA-Z0-9])/,
        StringLiteral: /"(?:[^"\n\\\r\u2028\u2029]|\\(?:['"\\bfnrtv\n\r\u2028\u2029]|\r\n)|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\[^0-9ux'"\\bfnrtv\n\\\r\u2028\u2029])*"|'(?:[^'\n\\\r\u2028\u2029]|\\(?:['"\\bfnrtv\n\r\u2028\u2029]|\r\n)|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\[^0-9ux'"\\bfnrtv\n\\\r\u2028\u2029])*'/,
        RegularExpressionLiteral: /\/(?:\[(?:\\[\s\S]|[^\]])*\]|[^*\/\\\n\r\u2028\u2029]|\\[^\n\r\u2028\u2029])(?:\[(?:\\[\s\S]|[^\]])*\]|[^\/\\\n\r\u2028\u2029]|\\[^\n\r\u2028\u2029])*\/[0-9a-zA-Z]*/
      };

      function XRegExp(xregexps, rootname, flag) {
        var expnames = [rootname];

        function buildRegExp(source) {
          var regexp = new RegExp();
          regexp.compile(source.replace(/<([^>]+)>/g, function (all, expname) {
            if (!xregexps[expname]) return '';
            expnames.push(expname);
            if (xregexps[expname] instanceof RegExp) return '(' + xregexps[expname].source + ')';
            return '(' + buildRegExp(xregexps[expname]).source + ')';
          }), flag);
          return regexp;
        }

        var regexp = buildRegExp(xregexps[rootname]);
        this.exec = function (string) {
          var matches = regexp.exec(string);
          if (matches == null) return null;
          var result = new String(matches[0]);
          for (var i = 0; i < expnames.length; i++) {
            if (matches[i]) result[expnames[i]] = matches[i];
          }return result;
        };
        Object.defineProperty(this, 'lastIndex', {
          'get': function get() {
            return regexp.lastIndex;
          },
          'set': function set(v) {
            regexp.lastIndex = v;
          }
        });
      }

      function LexicalParser() {
        var inputElementDiv = new XRegExp(lex, 'InputElementDiv', 'g');
        var inputElementRegExp = new XRegExp(lex, 'InputElementRegExp', 'g');
        var source;
        Object.defineProperty(this, 'source', {
          'get': function get() {
            return source;
          },
          'set': function set(v) {
            source = v;
            inputElementDiv.lastIndex = 0;
            inputElementRegExp.lastIndex = 0;
          }
        });
        this.reset = function () {
          inputElementDiv.lastIndex = 0;
          inputElementRegExp.lastIndex = 0;
        };
        this.getNextToken = function (useDiv) {
          var lastIndex = inputElementDiv.lastIndex;
          var inputElement;
          if (useDiv) inputElement = inputElementDiv;else inputElement = inputElementRegExp;
          var token = inputElement.exec(source);
          if (token && inputElement.lastIndex - lastIndex > token.length) {
            throw new SyntaxError('Unexpected token ILLEGAL');
          }
          inputElementDiv.lastIndex = inputElement.lastIndex;
          inputElementRegExp.lastIndex = inputElement.lastIndex;
          return token;
        };
      }

      var rules = {
        'IdentifierName': [['Identifier']],
        'Literal': [['NullLiteral'], ['BooleanLiteral'], ['NumericLiteral'], ['StringLiteral'], ['RegularExpressionLiteral']],
        'PrimaryExpression': [['Identifier'], ['Literal'], ['(', 'Expression', ')']],
        'CallExpression': [['PrimaryExpression', 'Arguments'], ['CallExpression', 'Arguments']],
        'Arguments': [['(', ')'], ['(', 'ArgumentList', ')']],
        'ArgumentList': [['ConditionalExpression'], ['ArgumentList', ',', 'ConditionalExpression']],
        'LeftHandSideExpression': [['PrimaryExpression'], ['CallExpression']],
        'UnaryExpression': [['LeftHandSideExpression'], ['void', 'UnaryExpression'], ['+', 'UnaryExpression'], ['-', 'UnaryExpression'], ['~', 'UnaryExpression'], ['!', 'UnaryExpression']],
        'ExponentiationExpression': [['UnaryExpression'], ['ExponentiationExpression', '**', 'UnaryExpression']],
        'MultiplicativeExpression': [['MultiplicativeExpression', '/', 'ExponentiationExpression'], ['ExponentiationExpression'], ['MultiplicativeExpression', '*', 'ExponentiationExpression'], ['MultiplicativeExpression', '%', 'ExponentiationExpression']],
        'AdditiveExpression': [['MultiplicativeExpression'], ['AdditiveExpression', '+', 'MultiplicativeExpression'], ['AdditiveExpression', '-', 'MultiplicativeExpression']],
        'ShiftExpression': [['AdditiveExpression'], ['ShiftExpression', '<<', 'AdditiveExpression'], ['ShiftExpression', '>>', 'AdditiveExpression'], ['ShiftExpression', '>>>', 'AdditiveExpression']],
        'RelationalExpression': [['ShiftExpression'], ['RelationalExpression', '<', 'ShiftExpression'], ['RelationalExpression', '>', 'ShiftExpression'], ['RelationalExpression', '<=', 'ShiftExpression'], ['RelationalExpression', '>=', 'ShiftExpression'], ['RelationalExpression', 'instanceof', 'ShiftExpression'], ['RelationalExpression', 'in', 'ShiftExpression']],
        'EqualityExpression': [['RelationalExpression'], ['EqualityExpression', '==', 'RelationalExpression'], ['EqualityExpression', '!=', 'RelationalExpression'], ['EqualityExpression', '===', 'RelationalExpression'], ['EqualityExpression', '!==', 'RelationalExpression']],
        'BitwiseANDExpression': [['EqualityExpression'], ['BitwiseANDExpression', '&', 'EqualityExpression']],
        'BitwiseXORExpression': [['BitwiseANDExpression'], ['BitwiseXORExpression', '^', 'BitwiseANDExpression']],
        'BitwiseORExpression': [['BitwiseXORExpression'], ['BitwiseORExpression', '|', 'BitwiseXORExpression']],
        'LogicalANDExpression': [['BitwiseORExpression'], ['LogicalANDExpression', '&&', 'BitwiseORExpression']],
        'LogicalORExpression': [['LogicalANDExpression'], ['LogicalORExpression', '||', 'LogicalANDExpression']],
        'ConditionalExpression': [['LogicalORExpression'], ['LogicalORExpression', '?', 'LogicalORExpression', ':', 'LogicalORExpression']],
        'Expression': [['ConditionalExpression'], ['Expression', ',', 'ConditionalExpression']],
        'Program': [['Expression']]

      };

      function _Symbol(symbolName, token) {
        this.name = symbolName;
        this.token = token;
        this.childNodes = [];
        this.toString = function (indent) {
          if (!indent) indent = '';
          if (this.childNodes.length == 1) return this.childNodes[0].toString(indent);
          var str = indent + this.name + (this.token != undefined && this.name != this.token ? ':' + this.token : '') + '\n';
          for (var i = 0; i < this.childNodes.length; i++) {
            str += this.childNodes[i].toString(indent + '    ');
          }return str;
        };
      }

      function SyntacticalParser() {
        var currentRule;
        var root = {
          Program: '$'
        };
        var hash = {};

        function closureNode(node) {

          hash[JSON.stringify(node)] = node;

          var queue = Object.getOwnPropertyNames(node);
          while (queue.length) {
            var symbolName = queue.shift();
            if (!rules[symbolName]) continue;
            rules[symbolName].forEach(function (rule) {
              if (!node[rule[0]]) queue.push(rule[0]);
              var rulenode = node;
              var lastnode = null;
              rule.forEach(function (symbol) {
                if (!rulenode[symbol]) rulenode[symbol] = {};
                lastnode = rulenode;
                rulenode = rulenode[symbol];
              });
              if (node[symbolName].$div) rulenode.$div = true;
              rulenode.$reduce = symbolName;
              rulenode.$count = rule.length;
            });
          }

          for (var p in node) {
            if (_typeof2(node[p]) != 'object' || p.charAt(0) == '$' || node[p].$closure) continue;
            if (hash[JSON.stringify(node[p])]) node[p] = hash[JSON.stringify(node[p])];else {
              closureNode(node[p]);
            }
          }
          node.$closure = true;
        }

        closureNode(root);
        var symbolStack = [];
        var statusStack = [root];
        var current = root;
        this.insertSymbol = function insertSymbol(symbol, haveLineTerminator) {
          while (!current[symbol.name] && current.$reduce) {
            var count = current.$count;
            var newsymbol = new _Symbol(current.$reduce);
            while (count--) {
              newsymbol.childNodes.push(symbolStack.pop()), statusStack.pop();
            }current = statusStack[statusStack.length - 1];
            this.insertSymbol(newsymbol);
          }
          current = current[symbol.name];
          symbolStack.push(symbol), statusStack.push(current);
          if (!current) throw new Error();
          return current.$div;
        };
        this.reset = function () {
          current = root;
          symbolStack = [];
          statusStack = [root];
        };
        Object.defineProperty(this, 'grammarTree', {
          'get': function get() {
            try {
              while (current.$reduce) {
                var count = current.$count;
                var newsymbol = new _Symbol(current.$reduce);
                while (count--) {
                  newsymbol.childNodes.push(symbolStack.pop()), statusStack.pop();
                }current = statusStack[statusStack.length - 1];
                this.insertSymbol(newsymbol);
              }
              if (symbolStack.length > 0 && current[';']) {
                this.insertSymbol(new _Symbol(';', ';'));
                return this.grammarTree;
              }
              if (symbolStack.length != 1 || symbolStack[0].name != 'Program') throw new Error();
            } catch (e) {
              throw new SyntaxError('Unexpected end of input');
            }
            return symbolStack[0];
          }
        });
      }

      function Parser() {
        this.lexicalParser = new LexicalParser();
        this.syntacticalParser = new SyntacticalParser();
        var terminalSymbols = ['NullLiteral', 'BooleanLiteral', 'NumericLiteral', 'StringLiteral', 'RegularExpressionLiteral', 'Identifier', '**', '=>', '{', '}', '(', ')', '[', ']', '.', ';', ',', '<', '>', '<=', '>=', '==', '!=', '===', '!==', '+', '-', '*', '%', '++', '--', '<<', '>>', '>>>', '&', '|', '^', '!', '~', '&&', '||', '?', ':', '=', '+=', '-=', '*=', '%=', '<<=', '>>=', '>>>=', '&=', '|=', '^=', '/', '/=', 'instanceof', 'typeof', 'new', 'void', 'debugger', 'this', 'delete', 'in'];
        var terminalSymbolIndex = {};
        terminalSymbols.forEach(function (e) {
          Object.defineProperty(terminalSymbolIndex, e, {});
        });
        this.reset = function () {
          this.lexicalParser.reset();
          this.syntacticalParser.reset();
        };
        this.parse = function (source, onInputElement) {
          var _this = this;

          var token;
          var haveLineTerminator = false;
          this.lexicalParser.source = source;
          var useDiv = false;
          while (token = this.lexicalParser.getNextToken(useDiv)) {
            if (onInputElement) onInputElement(token);
            try {
              if (Object.getOwnPropertyNames(token).some(function (e) {
                if (terminalSymbolIndex.hasOwnProperty(e)) {
                  useDiv = _this.syntacticalParser.insertSymbol(new _Symbol(e, token), haveLineTerminator);
                  haveLineTerminator = false;
                  return true;
                } else return false;
              })) continue;
              if ((token.Keyword || token.Punctuator || token.DivPunctuator) && terminalSymbolIndex.hasOwnProperty(token.toString())) {
                useDiv = this.syntacticalParser.insertSymbol(new _Symbol(token.toString(), token), haveLineTerminator);
              }
            } catch (e) {
              throw new SyntaxError('Unexpected token ' + token);
            }
          }
          return this.syntacticalParser.grammarTree;
        };
      }

      var parser = new Parser();

      function JavaScriptExpression(text) {
        parser.reset();
        this.tree = parser.parse(text);
        this.paths = [];
        var context = Object.create(null);
        var me = this;
        var pathIndex = Object.create(null);
        this.isSimple;
        this.isConst;
        walk(this.tree);
        checkSimple(this.tree);
        if (this.paths.length === 0) {
          this.isConst = true;
        }
        this.setter = function (path) {
          var curr = context;
          for (var i = 0; i < path.length - 1; i++) {
            if (!curr[path[i]]) curr[path[i]] = Object.create(null);
            curr = curr[path[i]];
          }
          return {
            isCompleted: function isCompleted() {
              for (var p in pathIndex) {
                if (!pathIndex[p]) return false;
              }return true;
            },
            set: function set(value) {
              if (!pathIndex[path.join('.')]) {
                pathIndex[path.join('.')] = true;
              }
              curr[path[i]] = value;
              if (this.isCompleted()) {
                return me.exec();
              } else {
                return undefined;
              }
            }
          };
        };

        this.valueOf = this.exec = function () {
          try {
            return function () {
              return eval(text);
            }.call(context);
          } catch (e) {}
        };

        function checkSimple(symbol) {

          var curr = symbol;
          while (curr.childNodes.length <= 1 && curr.name !== 'MemberExpression') {
            curr = curr.childNodes[0];
          }
          // TODO: need to point out "[……]"
          if (curr.name === 'MemberExpression') {
            me.isSimple = true;
          } else {
            me.isSimple = false;
          }
        }

        function walk(symbol) {
          if (symbol.name === 'CallExpression' && symbol.childNodes[symbol.childNodes.length - 1].name !== 'CallExpression') {
            var path = getPath(symbol.childNodes[1]);
            walk(symbol.childNodes[0]);
          } else if (symbol.name === 'NewExpression' && symbol.childNodes.length === 1) {
            var path = getPath(symbol.childNodes[0]);
          } else if (symbol.name === 'MemberExpression' && symbol.childNodes.length === 1) {
            var path = getPath(symbol);
          } else {
            for (var i = 0; i < symbol.childNodes.length; i++) {
              walk(symbol.childNodes[i]);
            }
          }
        }

        function getPath(symbol) {
          // [["PrimaryExpression"], ["MemberExpression", "[", "Expression", "]"], ["MemberExpression", ".", "IdentifierName"], ["new", "MemberExpression", "Arguments"]],

          if (symbol.childNodes[0].name === 'IdentifierName') {
            // MemberExpression : MemberExpression "." IdentifierName
            var path = getPath(symbol.childNodes[2]);
            if (path) path = path.concat(symbol.childNodes[0].childNodes[0].token.toString());
            createPath(path);
            return path;
          } else if (symbol.childNodes[0].name === 'PrimaryExpression') {
            // MemberExpression : PrimaryExpression
            if (symbol.childNodes[0].childNodes[0].name === 'Identifier') {
              var path = [symbol.childNodes[0].childNodes[0].token.toString()];
              createPath(path);
              return path;
            } else {
              return null;
            }
          } else if (symbol.childNodes[0].name === ']') {
            // MemberExpression : MemberExpression "[" Expression "]"
            getPath(symbol.childNodes[3]);
            walk(symbol.childNodes[1]);
            return null;
          } else if (symbol.childNodes[0].name === 'Arguments') {
            // MemberExpression : "new" MemberExpression Arguments
            walk(symbol.childNodes[0]);
            walk(symbol.childNodes[1]);
            return null;
          } else {
            for (var i = 0; i < symbol.childNodes.length; i++) {
              walk(symbol.childNodes[i]);
            }
          }
        }

        function createPath(path) {
          var curr = context;
          for (var i = 0; i < path.length - 1; i++) {
            if (!curr[path[i]]) curr[path[i]] = Object.create(null);
            curr = curr[path[i]];
          }
          me.paths.push(path);
          pathIndex[path.join('.')] = false;
        }
      }

      function visit(tree) {
        var childNodes = tree.childNodes.slice().reverse();
        var children = childNodes.filter(function (e) {
          return !e.token || !e.token.Punctuator;
        });
        if (tree.name === 'UnaryExpression') {
          // negative number support
          if (childNodes.length === 2 && childNodes[0].name === '-' && children.length === 1) {
            var res = visit(children[0]);
            res.value = -res.value;
            return res;
          }
        }

        if (tree.name === 'Arguments') {
          var argumentList = [];
          var listNode = children[0];
          while (listNode) {
            if (listNode.childNodes.length === 3) {
              argumentList.unshift(listNode.childNodes[0]);
              listNode = listNode.childNodes[2];
            }
            if (listNode.childNodes.length === 1) {
              argumentList.unshift(listNode.childNodes[0]);
              listNode = null;
            }
          }
          return {
            type: 'Arguments',
            children: argumentList.map(function (e) {
              return visit(e);
            })
          };
        }

        if (children && children.length === 1) {
          var res = visit(children[0]);
          return res;
        }

        if (tree.token && ['NullLiteral', 'BooleanLiteral', 'NumericLiteral', 'StringLiteral', 'Identifier'].some(function (e) {
          return tree.token[e];
        })) {
          var type = Object.keys(tree.token).filter(function (e) {
            return e.match(/Literal/) || e.match(/Identifier/);
          })[0];
          var value = {
            'NullLiteral': null,
            'BooleanLiteral': Boolean(tree.token),
            'NumericLiteral': Number(tree.token),
            'StringLiteral': tree.token,
            'Identifier': tree.token
          }[type];

          return {
            type: type,
            value: value
          };
        }

        if (tree.name === 'CallExpression') return {
          type: 'CallExpression',
          children: [visit(childNodes[0]), visit(childNodes[1])]
        };

        return {
          type: childNodes.filter(function (e) {
            return e.token && e.token.Punctuator;
          })[0].name,
          children: childNodes.filter(function (e) {
            return !e.token || !e.token.Punctuator;
          }).map(function (e) {
            return visit(e);
          })
        };
      }

      function parse(originExp) {
        var exp = new JavaScriptExpression(originExp);
        return JSON.stringify(visit(exp.tree), null);
      }

      module.exports = {
        parse: parse
      };

      /***/
    }]
    /******/)
  );
});;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(30);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(42);

var PROTECTION_PREFIX = /^\)\]\}',?\n/;
var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(8);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(8);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      data = data.replace(PROTECTION_PREFIX, '');
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMehtodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var settle = __webpack_require__(43);
var buildURL = __webpack_require__(45);
var parseHeaders = __webpack_require__(46);
var isURLSameOrigin = __webpack_require__(47);
var createError = __webpack_require__(9);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(48);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(49);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        if (request.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(44);

/**
 * Create an Error with the specified message, config, error code, and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, response);
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    var obj;

    while (queue.length) {
        var item = queue.pop();
        obj = item.obj[item.prop];

        if (Array.isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }

    return obj;
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (Array.isArray(target)) {
            target.push(source);
        } else if (typeof target === 'object') {
            if (options.plainObjects || options.allowPrototypes || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (Array.isArray(target) && !Array.isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (Array.isArray(target) && Array.isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                if (target[i] && typeof target[i] === 'object') {
                    target[i] = merge(target[i], item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str) {
    try {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    } catch (e) {
        return str;
    }
};

var encode = function encode(str) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = typeof str === 'string' ? str : String(str);

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    return compactQueue(queue);
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (obj === null || typeof obj === 'undefined') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    merge: merge
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

module.exports = {
    'default': 'RFC3986',
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return value;
        }
    },
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(72);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(98);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindEnv = __webpack_require__(3);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_bindEnv).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(136);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(139);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by Tw93 on 2016/11/4.
 */

exports.default = {

  tabTitles: [{
    title: '通知'
    // icon: 'https://gw.alicdn.com/tfs/TB1MWXdSpXXXXcmXXXXXXXXXXXX-72-72.png'
    // activeIcon: 'https://gw.alicdn.com/tfs/TB1kCk2SXXXXXXFXFXXXXXXXXXX-72-72.png'
  }, {
    title: '消息'
    // icon: 'https://gw.alicdn.com/tfs/TB1ARoKSXXXXXc9XVXXXXXXXXXX-72-72.png'
    // activeIcon: 'https://gw.alicdn.com/tfs/TB19Z72SXXXXXamXFXXXXXXXXXX-72-72.png'
  }],
  tabStyles: {
    bgColor: '#161824',
    titleColor: '#7D7D7D',
    activeTitleColor: '#FFFFFF',
    activeBgColor: '#161824',
    isActiveTitleBold: true,
    iconWidth: 0,
    iconHeight: 0,
    width: 370,
    height: 120,
    fontSize: 35,
    hasActiveBottom: true,
    activeBottomColor: '#FFC900',
    activeBottomHeight: 6,
    activeBottomWidth: 120,
    textPaddingLeft: 30,
    textPaddingRight: 30
  },
  tabIconFontTitles: [{
    title: '首页',
    codePoint: '\uE623'
  }, {
    title: '特别推荐',
    codePoint: '\uE608'
  }, {
    title: '消息中心',
    codePoint: '\uE752',
    badge: 5
  }, {
    title: '我的主页',
    codePoint: '\uE601',
    dot: true
  }],
  tabIconFontStyles: {
    bgColor: '#FFFFFF',
    titleColor: '#666666',
    activeTitleColor: '#3D3D3D',
    activeBgColor: '#FFFFFF',
    isActiveTitleBold: true,
    width: 160,
    height: 120,
    fontSize: 24,
    textPaddingLeft: 10,
    textPaddingRight: 10,
    iconFontSize: 50,
    iconFontColor: '#333333',
    iconFontMarginBottom: 8,
    activeIconFontColor: 'red',
    iconFontUrl: '//at.alicdn.com/t/font_501019_mauqv15evc1pp66r.ttf'
  }

};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* global Vue */

/* weex initialized here, please do not move this line */
var router = __webpack_require__(21);
var App = __webpack_require__(180);
/* eslint-disable no-new */
new Vue(Vue.util.extend({ el: '#root', router: router }, App));
router.push('/');

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vueRouter = __webpack_require__(22);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _HelloWorld = __webpack_require__(23);

var _HelloWorld2 = _interopRequireDefault(_HelloWorld);

var _index = __webpack_require__(27);

var _index2 = _interopRequireDefault(_index);

var _login = __webpack_require__(61);

var _login2 = _interopRequireDefault(_login);

var _match = __webpack_require__(65);

var _match2 = _interopRequireDefault(_match);

var _otherInfo = __webpack_require__(69);

var _otherInfo2 = _interopRequireDefault(_otherInfo);

var _ownInfo = __webpack_require__(80);

var _ownInfo2 = _interopRequireDefault(_ownInfo);

var _personalEdit = __webpack_require__(84);

var _personalEdit2 = _interopRequireDefault(_personalEdit);

var _msglist = __webpack_require__(133);

var _msglist2 = _interopRequireDefault(_msglist);

var _shoot = __webpack_require__(144);

var _shoot2 = _interopRequireDefault(_shoot);

var _chat = __webpack_require__(148);

var _chat2 = _interopRequireDefault(_chat);

var _publish = __webpack_require__(160);

var _publish2 = _interopRequireDefault(_publish);

var _msglist3 = __webpack_require__(164);

var _msglist4 = _interopRequireDefault(_msglist3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.use(_vueRouter2.default); /* global Vue */


module.exports = new _vueRouter2.default({
  routes: [{
    path: '/',
    name: 'index',
    component: _index2.default
  }, {
    path: '/login',
    name: 'login',
    component: _login2.default
  }, {
    path: '/otherInfo',
    name: 'otherInfo',
    component: _otherInfo2.default
  }, {
    path: '/ownInfo',
    name: 'ownInfo',
    component: _ownInfo2.default
  }, {
    path: '/match',
    name: 'match',
    component: _match2.default
  }, {
    path: '/personalEdit',
    name: 'personalEdit',
    component: _personalEdit2.default
  }, {
    path: '/msglist',
    name: 'msglist',
    component: _msglist2.default
  }, {
    path: '/shoot',
    name: 'shoot',
    component: _shoot2.default
  }, {
    path: '/chat',
    name: 'chat',
    component: _chat2.default
  }, {
    path: '/publish',
    name: 'publish',
    component: _publish2.default
  }, {
    path: '/msgtest',
    name: 'msgtest',
    component: _msglist4.default
  }]
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
  * vue-router v3.0.1
  * (c) 2017 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if (process.env.NODE_ENV !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    var propsToPass = data.props = resolveProps(route, matched.props && matched.props[name]);
    if (propsToPass) {
      // clone to prevent mutation
      propsToPass = data.props = extend({}, propsToPass);
      // pass non-declared props as attrs
      var attrs = data.attrs = data.attrs || {};
      for (var key in propsToPass) {
        if (!component.props || !(key in component.props)) {
          attrs[key] = propsToPass[key];
          delete propsToPass[key];
        }
      }
    }

    return h(component, data, children)
  }
};

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (process.env.NODE_ENV !== 'production') {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

function extend (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
  return to
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    process.env.NODE_ENV !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */


var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
            ? 'router-link-active'
            : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
            ? 'router-link-exact-active'
            : globalExactActiveClass;
    var activeClass = this.activeClass == null
            ? activeClassFallback
            : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
            ? exactActiveClassFallback
            : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (process.env.NODE_ENV !== 'production') {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var pathToRegexpOptions = route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(
    path,
    parent,
    pathToRegexpOptions.strict
  );

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (process.env.NODE_ENV !== 'production') {
      if (route.name && !route.redirect && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias)
      ? route.alias
      : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path, pathToRegexpOptions) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (process.env.NODE_ENV !== 'production') {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent, strict) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */


function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (process.env.NODE_ENV !== 'production') {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function assign (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */


function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location, null, router))
        : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (process.env.NODE_ENV !== 'production') {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (process.env.NODE_ENV !== 'production') {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */


var positionStore = Object.create(null);

function setupScroll () {
  // Fix for #1585 for Firefox
  window.history.replaceState({ key: getStateKey() }, '');
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll.then(function (shouldScroll) {
        scrollToPosition((shouldScroll), position);
      }).catch(function (err) {
        if (process.env.NODE_ENV !== 'production') {
          assert(false, err.toString());
        }
      });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    var el = document.querySelector(shouldScroll.selector);
    if (el) {
      var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          process.env.NODE_ENV !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */


var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    var initLocation = getLocation(this.base);
    window.addEventListener('popstate', function (e) {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === initLocation) {
        return
      }

      this$1.transitionTo(location, function (route) {
        if (expectScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */


var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    window.addEventListener(supportsPushState ? 'popstate' : 'hashchange', function () {
      var current = this$1.current;
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1)
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */


var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (process.env.NODE_ENV !== 'production') {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  process.env.NODE_ENV !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '3.0.1';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["default"] = (VueRouter);


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(24)
)

/* script */
__vue_exports__ = __webpack_require__(25)

/* template */
var __vue_template__ = __webpack_require__(26)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\MINI-WEB\\src\\components\\HelloWorld.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-10690979"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {};
  },
  mounted: function mounted() {},

  methods: {
    handleClick: function handleClick() {}
  }
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('router-link', {
    staticClass: ["base-font-size"],
    attrs: {
      "to": {
        name: 'login'
      }
    }
  }, [_vm._v("\n    login123\n  ")]), _c('router-link', {
    staticClass: ["base-font-size"],
    attrs: {
      "to": {
        name: 'index'
      }
    }
  }, [_vm._v("\n    index\n  ")]), _c('router-link', {
    staticClass: ["base-font-size"],
    attrs: {
      "to": {
        name: 'otherInfo'
      }
    }
  }, [_vm._v("\n    otherInfo\n  ")]), _c('router-link', {
    staticClass: ["base-font-size"],
    attrs: {
      "to": {
        name: 'ownInfo'
      }
    }
  }, [_vm._v("\n    ownInfo\n  ")]), _c('router-link', {
    staticClass: ["base-font-size"],
    attrs: {
      "to": {
        name: 'match'
      }
    }
  }, [_vm._v("\n    match\n  ")]), _c('router-link', {
    staticClass: ["base-font-size"],
    attrs: {
      "to": {
        name: 'personalEdit'
      }
    }
  }, [_vm._v("\n    personalEdit\n  ")]), _c('router-link', {
    staticClass: ["base-font-size"],
    attrs: {
      "to": {
        name: 'msglist'
      }
    }
  }, [_vm._v("\n    msglist\n  ")]), _c('router-link', {
    staticClass: ["base-font-size"],
    attrs: {
      "to": {
        name: 'shoot'
      }
    }
  }, [_vm._v("\n    shoot\n  ")]), _c('router-link', {
    staticClass: ["base-font-size"],
    attrs: {
      "to": {
        name: 'chat'
      }
    }
  }, [_vm._v("\n    chat\n  ")]), _c('router-link', {
    staticClass: ["base-font-size"],
    attrs: {
      "to": {
        name: 'publish'
      }
    }
  }, [_vm._v("\n    publish\n  ")]), _c('router-link', {
    staticClass: ["base-font-size"],
    attrs: {
      "to": {
        name: 'msgtest'
      }
    }
  }, [_vm._v("\n    msgTest\n  ")]), _c('div', [_vm._v(_vm._s(_vm.data))])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(28)
)

/* script */
__vue_exports__ = __webpack_require__(29)

/* template */
var __vue_template__ = __webpack_require__(60)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\MINI-WEB\\src\\components\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4a9224e9"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = {
  "index-page": {
    "height": 100
  },
  "chat-header": {
    "width": 100,
    "height": 7,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "position": "absolute",
    "zIndex": 100,
    "top": 0.2
  },
  "close-button": {
    "width": 1,
    "top": 0.1,
    "left": 0.2,
    "position": "absolute",
    "opacity": 0,
    "height": 100
  },
  "send-button": {
    "right": 0.2,
    "width": 1,
    "top": 0.1,
    "position": "absolute",
    "opacity": 0,
    "height": 100
  },
  "video-wrapper": {
    "flexGrow": 1,
    "backgroundColor": "rgba(0,0,0,0)",
    "position": "relative",
    "transitionProperty": "opacity",
    "transitionDuration": 500,
    "MozTransition": "opacity 0.5s",
    "WebkitTransition": "opacity 0.5s",
    "OTransition": "opacity 0.5s"
  },
  "@TRANSITION": {
    "video-wrapper": {
      "property": "opacity",
      "duration": 500
    }
  },
  "super-header": {
    "paddingLeft": 2.5,
    "paddingTop": 0.2,
    "position": "relative",
    "height": "100",
    "alignItems": "flex-start"
  },
  "super-img-bg": {
    "position": "absolute",
    "top": "-65",
    "left": "30",
    "background": "url(\"/src/asset/img/flare.png\")",
    "backgroundSize": "cover",
    "width": "130",
    "height": "130"
  },
  "super-image": {
    "width": "100",
    "height": "100",
    "borderRadius": 50,
    "backgroundColor": "#FFFFFF",
    "marginTop": "13",
    "marginLeft": "15"
  },
  "super-msg": {
    "marginTop": 0,
    "marginBottom": 0,
    "background": "transparent",
    "color": "#FFFFFF"
  },
  "super-send": {
    "textAlign": "center"
  },
  "superlike-button": {
    "borderTop": "1px #C5C5C5 solid",
    "background": "url(\"/src/asset/img/superlike-button.png\")",
    "backgroundSize": "cover",
    "width": 100,
    "height": 1.3
  },
  "footer": {
    "width": 86,
    "left": 7,
    "position": "absolute",
    "bottom": 1
  }
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcPopup = __webpack_require__(5);

var _wxcPopup2 = _interopRequireDefault(_wxcPopup);

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: { WxcPopup: _wxcPopup2.default },
    data: function data() {
        return {
            video_1: '',
            video_2: 'https://mini.jkjun.cn/media/videos/8.mp4',
            startX: 0,
            startY: 0,
            X: 0,
            Y: 0,
            distanceX: 0,
            distanceY: 0,
            R: 1000,
            rotate: 0,
            opacity: 1,
            isBottomShow: false,
            id: '',
            name: '',
            imgurl: '',
            idea: '',
            nextid: '',
            nextname: '',
            nextimgurl: '',
            nxetidea: '',
            supermsg: '',
            superLikeTime: 1,
            LikeTime: 5
        };
    },
    mounted: function mounted() {
        var _this = this;

        _index2.default.isLogin().then(function (_ref) {
            var data = _ref.data;

            if (data.status == '403') {
                _this.$router.push({ name: 'login' });
            } else {
                _index2.default.getCount().then(function (_ref2) {
                    var data = _ref2.data;

                    _this.superLikeTime = data.data.superCount;
                    _this.LikeTime = data.data.likeCount;
                });
                _index2.default.getVideo({ count: 2 }).then(function (_ref3) {
                    var data = _ref3.data;

                    _this.video_1 = data.data[0].videourl;
                    _this.video_2 = data.data[1].videourl;
                    _this.id = data.data[0].userid;
                    _this.name = data.data[0].username;
                    _this.imgurl = data.data[0].userphoto;
                    _this.idea = data.data[0].idea;
                    _this.nextid = data.data[1].userid;
                    _this.nextname = data.data[1].username;
                    _this.nextimgurl = data.data[1].userphoto;
                    _this.nextidea = data.data[1].idea;
                });
            }
        });
    },

    methods: {
        handleRouter: function handleRouter(route, params) {
            this.$router.push({
                name: route,
                params: params
            });
        },
        popupOverlayBottomClick: function popupOverlayBottomClick() {
            this.isBottomShow = false;
        },
        handleTouchStart: function handleTouchStart(e) {
            this.startX = e.changedTouches[0].pageX;
            this.X = e.changedTouches[0].pageX;
            this.startY = e.changedTouches[0].pageY;
            this.Y = e.changedTouches[0].pageY;
        },
        handleTouchMove: function handleTouchMove(e) {
            this.X = e.changedTouches[0].pageX;
            this.Y = e.changedTouches[0].pageY;
        },
        handleTouchEnd: function handleTouchEnd(e) {
            var _this2 = this;

            if (this.distanceX * this.distanceX + this.distanceY * this.distanceY < 100 * 100) {
                this.distanceX = 0;
                this.distanceY = 0;
                this.rotate = 0;
                return;
            }
            if (Math.abs(this.distanceX) > Math.abs(this.distanceY)) {
                _index2.default.getVideo({ count: 1 }).then(function (_ref4) {
                    var data = _ref4.data;

                    _this2.video_1 = _this2.video_2;
                    _this2.video_2 = data.data[0].videourl;
                    _this2.id = _this2.nextid;
                    _this2.name = _this2.nextname;
                    _this2.imgurl = _this2.nextimgurl;
                    _this2.idea = _this2.nextidea;
                    _this2.nextid = data.data[0].userid;
                    _this2.nextname = data.data[0].username;
                    _this2.nextimgurl = data.data[0].userphoto;
                    _this2.nextidea = data.data[0].idea;
                });
                if (this.distanceX > 0) {
                    if (this.LikeTime <= 0) {
                        alert('今日你的like次数已耗尽哟！');
                        return;
                    }
                    _index2.default.sendPreference({
                        video_url: this.video_1,
                        user: this.id,
                        type: 'like'
                    }).then(function (res) {
                        if (res.data.event == 1) {
                            _this2.$router.push({ name: 'match' });
                        }
                    });
                } else {
                    _index2.default.sendPreference({
                        video_url: this.video_1,
                        user: this.id,
                        type: 'no'
                    });
                }
            } else {
                if (this.distanceY > 0) {
                    console.log('下滑摄像');
                    this.$router.push({ name: 'shoot' });
                } else {
                    this.isBottomShow = true;
                }
            }
            this.opacity = 0;
            setTimeout(function () {
                _this2.distanceX = 0;
                _this2.distanceY = 0;
                _this2.rotate = 0;
                _this2.opacity = 1;
            }, 200);
        },
        closeSuperLike: function closeSuperLike() {
            this.isBottomShow = false;
        },
        sendSuperLike: function sendSuperLike() {
            var _this3 = this;

            if (this.superLikeTime <= 0) {
                alert('今日你的super like次数已耗尽哟！');
                return;
            }
            _index2.default.sendPreference({
                video_url: this.video_1,
                user: this.id,
                type: 'super',
                msg: this.supermsg
            }).then(function (res) {
                _this3.isBottomShow = false;
                if (res.data.event == 1) {
                    _this3.$router.push({ name: 'match' });
                }
            });
        }
    },
    watch: {
        X: function X(val) {
            this.rotate = Math.asin((val - this.startX) / this.R) / 2 / Math.PI * 360;
            this.distanceX = val - this.startX;
        },
        Y: function Y(val) {
            this.distanceY = val - this.startY;
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(31)
)

/* script */
__vue_exports__ = __webpack_require__(32)

/* template */
var __vue_template__ = __webpack_require__(38)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\MINI-WEB\\node_modules\\weex-ui\\packages\\wxc-popup\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-68578f7e"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-popup": {
    "position": "fixed",
    "width": "750"
  },
  "top": {
    "left": 0,
    "right": 0
  },
  "left": {
    "bottom": 0,
    "top": 0
  },
  "right": {
    "bottom": 0,
    "top": 0
  }
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _wxcOverlay = __webpack_require__(33);

var _wxcOverlay2 = _interopRequireDefault(_wxcOverlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var animation = weex.requireModule('animation');
var platform = weex.config.env.platform;

var isWeb = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && platform.toLowerCase() === 'web';
exports.default = {
  components: { WxcOverlay: _wxcOverlay2.default },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    pos: {
      type: String,
      default: 'bottom'
    },
    popupColor: {
      type: String,
      default: '#FFFFFF'
    },
    overlayCfg: {
      type: Object,
      default: function _default() {
        return {
          hasAnimation: true,
          timingFunction: ['ease-in', 'ease-out'],
          duration: 300,
          opacity: 0.6
        };
      }
    },
    height: {
      type: [Number, String],
      default: 840
    },
    standOut: {
      type: [Number, String],
      default: 0
    },
    width: {
      type: [Number, String],
      default: 750
    },
    animation: {
      type: Object,
      default: function _default() {
        return {
          timingFunction: 'ease-in'
        };
      }
    }
  },
  data: function data() {
    return {
      haveOverlay: true,
      isOverShow: true
    };
  },
  computed: {
    isNeedShow: function isNeedShow() {
      var _this = this;

      setTimeout(function () {
        _this.appearPopup(_this.show);
      }, 50);
      return this.show;
    },
    _height: function _height() {
      this.appearPopup(this.show, 150);
      return this.height;
    },
    padStyle: function padStyle() {
      var pos = this.pos,
          width = this.width,
          height = this.height,
          popupColor = this.popupColor,
          standOut = this.standOut;

      var style = {
        width: width + 'px',
        backgroundColor: popupColor
      };
      pos === 'top' && (style = _extends({}, style, {
        top: -height + standOut + 'px',
        height: height + 'px'
      }));
      pos === 'bottom' && (style = _extends({}, style, {
        bottom: -height + standOut + 'px',
        height: height + 'px'
      }));
      pos === 'left' && (style = _extends({}, style, {
        left: -width + standOut + 'px'
      }));
      pos === 'right' && (style = _extends({}, style, {
        right: -width + standOut + 'px'
      }));
      return style;
    }
  },
  methods: {
    handleTouchEnd: function handleTouchEnd(e) {
      // 在支付宝上面有点击穿透问题
      var platform = weex.config.env.platform;

      platform === 'Web' && e.preventDefault && e.preventDefault();
    },
    hide: function hide() {
      this.appearPopup(false);
      this.$refs.overlay.appearOverlay(false);
    },
    wxcOverlayBodyClicking: function wxcOverlayBodyClicking() {
      this.isShow && this.appearPopup(false);
    },
    appearPopup: function appearPopup(bool) {
      var _this2 = this;

      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;

      this.isShow = bool;
      var popupEl = this.$refs['wxc-popup'];
      if (!popupEl) {
        return;
      }
      animation.transition(popupEl, _extends({
        styles: {
          transform: this.getTransform(this.pos, this.width, this.height, !bool)
        },
        duration: duration,
        delay: 0
      }, this.animation), function () {
        if (!bool) {
          _this2.$emit('wxcPopupOverlayClicked', { pos: _this2.pos });
        }
      });
    },
    getTransform: function getTransform(pos, width, height, bool) {
      var _size = pos === 'top' || pos === 'bottom' ? height : width;
      bool && (_size = 0);
      var _transform = void 0;
      switch (pos) {
        case 'top':
          _transform = 'translateY(' + _size + 'px)';
          break;
        case 'bottom':
          _transform = 'translateY(-' + _size + 'px)';
          break;
        case 'left':
          _transform = 'translateX(' + _size + 'px)';
          break;
        case 'right':
          _transform = 'translateX(-' + _size + 'px)';
          break;
      }
      return _transform;
    }
  }
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(34);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(35)
)

/* script */
__vue_exports__ = __webpack_require__(36)

/* template */
var __vue_template__ = __webpack_require__(37)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\MINI-WEB\\node_modules\\weex-ui\\packages\\wxc-overlay\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-54c8adb6"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-overlay": {
    "width": "750",
    "position": "fixed",
    "left": 0,
    "top": 0,
    "bottom": 0,
    "right": 0
  }
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var animation = weex.requireModule('animation');
exports.default = {
  props: {
    show: {
      type: Boolean,
      default: true
    },
    hasAnimation: {
      type: Boolean,
      default: true
    },
    duration: {
      type: [Number, String],
      default: 300
    },
    timingFunction: {
      type: Array,
      default: function _default() {
        return ['ease-in', 'ease-out'];
      }
    },
    opacity: {
      type: [Number, String],
      default: 0.6
    },
    canAutoClose: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    overlayStyle: function overlayStyle() {
      return {
        opacity: this.hasAnimation ? 0 : 1,
        backgroundColor: 'rgba(0, 0, 0,' + this.opacity + ')'
      };
    },
    shouldShow: function shouldShow() {
      var _this = this;

      var show = this.show,
          hasAnimation = this.hasAnimation;

      hasAnimation && setTimeout(function () {
        _this.appearOverlay(show);
      }, 50);
      return show;
    }
  },
  methods: {
    overlayClicked: function overlayClicked(e) {
      this.canAutoClose ? this.appearOverlay(false) : this.$emit('wxcOverlayBodyClicked', {});
    },
    appearOverlay: function appearOverlay(bool) {
      var _this2 = this;

      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.duration;
      var hasAnimation = this.hasAnimation,
          timingFunction = this.timingFunction,
          canAutoClose = this.canAutoClose;

      var needEmit = !bool && canAutoClose;
      needEmit && this.$emit('wxcOverlayBodyClicking', {});
      var overlayEl = this.$refs['wxc-overlay'];
      if (hasAnimation && overlayEl) {
        animation.transition(overlayEl, {
          styles: {
            opacity: bool ? 1 : 0
          },
          duration: duration,
          timingFunction: timingFunction[bool ? 0 : 1],
          delay: 0
        }, function () {
          needEmit && _this2.$emit('wxcOverlayBodyClicked', {});
        });
      } else {
        needEmit && this.$emit('wxcOverlayBodyClicked', {});
      }
    }
  }
};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.show) ? _c('div', {
    ref: "wxc-overlay",
    staticClass: ["wxc-overlay"],
    style: _vm.overlayStyle,
    attrs: {
      "hack": _vm.shouldShow
    },
    on: {
      "click": _vm.overlayClicked
    }
  }) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    on: {
      "touchend": _vm.handleTouchEnd
    }
  }, [(_vm.show) ? _c('wxc-overlay', _vm._b({
    ref: "overlay",
    attrs: {
      "show": _vm.haveOverlay && _vm.isOverShow
    },
    on: {
      "wxcOverlayBodyClicking": _vm.wxcOverlayBodyClicking
    }
  }, 'wxc-overlay', _vm.overlayCfg, false)) : _vm._e()], 1), (_vm.show) ? _c('div', {
    ref: "wxc-popup",
    class: ['wxc-popup', _vm.pos],
    style: _vm.padStyle,
    attrs: {
      "height": _vm._height,
      "hack": _vm.isNeedShow
    },
    on: {
      "click": function () {}
    }
  }, [_vm._t("default")], 2) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(40);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(7);
var Axios = __webpack_require__(41);
var defaults = __webpack_require__(6);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(11);
axios.CancelToken = __webpack_require__(55);
axios.isCancel = __webpack_require__(10);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(56);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(6);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(50);
var dispatchRequest = __webpack_require__(51);
var isAbsoluteURL = __webpack_require__(53);
var combineURLs = __webpack_require__(54);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(9);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response
    ));
  }
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.response = response;
  return error;
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(52);
var isCancel = __webpack_require__(10);
var defaults = __webpack_require__(6);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(11);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(58);
var parse = __webpack_require__(59);
var formats = __webpack_require__(13);

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(12);
var formats = __webpack_require__(13);

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) { // eslint-disable-line func-name-matching
        return prefix + '[]';
    },
    indices: function indices(prefix, key) { // eslint-disable-line func-name-matching
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) { // eslint-disable-line func-name-matching
        return prefix;
    }
};

var toISO = Date.prototype.toISOString;

var defaults = {
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var stringify = function stringify( // eslint-disable-line func-name-matching
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder) : prefix;
        }

        obj = '';
    }

    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder);
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (Array.isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (Array.isArray(obj)) {
            values = values.concat(stringify(
                obj[key],
                generateArrayPrefix(prefix, key),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        } else {
            values = values.concat(stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        }
    }

    return values;
};

module.exports = function (object, opts) {
    var obj = object;
    var options = opts ? utils.assign({}, opts) : {};

    if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
    var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
    var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
    var encoder = typeof options.encoder === 'function' ? options.encoder : defaults.encoder;
    var sort = typeof options.sort === 'function' ? options.sort : null;
    var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
    var serializeDate = typeof options.serializeDate === 'function' ? options.serializeDate : defaults.serializeDate;
    var encodeValuesOnly = typeof options.encodeValuesOnly === 'boolean' ? options.encodeValuesOnly : defaults.encodeValuesOnly;
    if (typeof options.format === 'undefined') {
        options.format = formats['default'];
    } else if (!Object.prototype.hasOwnProperty.call(formats.formatters, options.format)) {
        throw new TypeError('Unknown format option provided.');
    }
    var formatter = formats.formatters[options.format];
    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (Array.isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (options.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = options.arrayFormat;
    } else if ('indices' in options) {
        arrayFormat = options.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (sort) {
        objKeys.sort(sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        keys = keys.concat(stringify(
            obj[key],
            key,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encode ? encoder : null,
            filter,
            sort,
            allowDots,
            serializeDate,
            formatter,
            encodeValuesOnly
        ));
    }

    var joined = keys.join(delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(12);

var has = Object.prototype.hasOwnProperty;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    parameterLimit: 1000,
    plainObjects: false,
    strictNullHandling: false
};

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);

    for (var i = 0; i < parts.length; ++i) {
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder);
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder);
            val = options.decoder(part.slice(pos + 1), defaults.decoder);
        }
        if (has.call(obj, key)) {
            obj[key] = [].concat(obj[key]).concat(val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options) {
    var leaf = val;

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]') {
            obj = [];
            obj = obj.concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys
        // that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options);
};

module.exports = function (str, opts) {
    var options = opts ? utils.assign({}, opts) : {};

    if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    options.ignoreQueryPrefix = options.ignoreQueryPrefix === true;
    options.delimiter = typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
    options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
    options.parseArrays = options.parseArrays !== false;
    options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
    options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : defaults.allowDots;
    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options);
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["index-page"]
  }, [_c('div', {
    staticClass: ["chat-header"]
  }, [_c('text', {
    staticClass: ["left"],
    on: {
      "click": function($event) {
        _vm.handleRouter('ownInfo')
      }
    }
  }), _c('text', {
    staticClass: ["name"]
  }), _c('text', {
    staticClass: ["right"],
    on: {
      "click": function($event) {
        _vm.handleRouter('msgtest')
      }
    }
  }), _c('text', {
    staticClass: ["header-bottom"],
    on: {
      "click": function($event) {
        _vm.handleRouter('shoot')
      }
    }
  })]), _c('video', {
    staticStyle: {
      width: "100%",
      position: "absolute"
    },
    attrs: {
      "id": "video2",
      "preload": "true",
      "src": _vm.video_2
    }
  }), _c('div', {
    staticClass: ["video-wrapper"],
    style: {
      opacity: _vm.opacity,
      transform: ("rotate(" + _vm.rotate + "deg) translate(" + _vm.distanceX + "px, " + _vm.distanceY + "px)")
    },
    on: {
      "click": _vm.handleClick,
      "touchstart": _vm.handleTouchStart,
      "touchmove": _vm.handleTouchMove,
      "touchend": _vm.handleTouchEnd
    }
  }, [_c('video', {
    staticStyle: {
      width: "100%"
    },
    attrs: {
      "id": "video1",
      "src": _vm.video_1,
      "autoPlay": "true",
      "loop": "loop",
      "playStatus": "play"
    }
  })]), _c('div', {
    staticClass: ["footer"]
  }, [_c('div', {
    staticClass: ["photo-img"]
  }, [_c('image', {
    staticClass: ["person-img"],
    attrs: {
      "src": _vm.imgurl
    },
    on: {
      "click": function($event) {
        _vm.handleRouter('otherInfo', {
          user: _vm.id
        })
      }
    }
  }), _c('text', {
    staticClass: ["person-name"]
  }, [_vm._v(_vm._s(_vm.name))])]), _c('div', {
    staticClass: ["content"]
  }, [_c('textarea', {
    attrs: {
      "row": "3",
      "placeholder": _vm.idea,
      "disabled": ""
    }
  })])]), _c('wxc-popup', {
    staticClass: ["super-block"],
    attrs: {
      "popupColor": "#161824",
      "show": _vm.isBottomShow,
      "pos": "bottom",
      "height": "400"
    },
    on: {
      "wxcPopupOverlayClicked": _vm.popupOverlayBottomClick
    }
  }, [_c('div', [_c('div', {
    staticClass: ["super-header"]
  }, [_c('text', {
    staticClass: ["super-img-bg"]
  }, [_c('image', {
    staticClass: ["super-image"],
    attrs: {
      "src": _vm.imgurl
    }
  })]), _c('text', {
    staticClass: ["super-name", "color-white"]
  }, [_vm._v(_vm._s(_vm.name))])]), _c('textarea', {
    staticClass: ["super-msg"],
    attrs: {
      "name": "",
      "id": "",
      "cols": "30",
      "rows": "5",
      "placeholder": "写点什么吧...",
      "value": (_vm.supermsg)
    },
    on: {
      "input": function($event) {
        _vm.supermsg = $event.target.attr.value
      }
    }
  }), _c('div', {
    staticClass: ["superlike-button"]
  }, [_c('button', {
    staticClass: ["close-button"],
    on: {
      "click": _vm.closeSuperLike
    }
  }, [_vm._v("取消")]), _c('button', {
    staticClass: ["send-button"],
    on: {
      "click": _vm.sendSuperLike
    }
  }, [_vm._v("发送")])], 1)])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(62)
)

/* script */
__vue_exports__ = __webpack_require__(63)

/* template */
var __vue_template__ = __webpack_require__(64)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\MINI-WEB\\src\\components\\login.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1439c800"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = {
  "login-form": {
    "height": 100,
    "background": "url(\"/src/asset/img/login-bg.png\") no-repeat",
    "backgroundSize": "cover",
    "backgroundColor": "#000000"
  }
}

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {};
  },

  methods: {
    loginEvent: function loginEvent(event) {
      window.location.href = 'https://mini.jkjun.cn/loginqq';
    }
  }
};

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["login-form"]
  }, [_c('image', {
    attrs: {
      "src": "/src/asset/img/qq.png"
    }
  }), _c('button', {
    on: {
      "click": _vm.loginEvent
    }
  }, [_vm._v("QQ一键登录")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(66)
)

/* script */
__vue_exports__ = __webpack_require__(67)

/* template */
var __vue_template__ = __webpack_require__(68)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\MINI-WEB\\src\\components\\match.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-c165b748"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = {
  "match-content": {
    "flexGrow": 1,
    "justifyContent": "center",
    "backgroundColor": "#000000"
  },
  "match-success": {
    "marginTop": "81",
    "marginRight": 0,
    "marginBottom": "81",
    "marginLeft": 0,
    "alignItems": "center"
  },
  "match-success-font": {
    "fontSize": "32",
    "color": "#FFFFFF"
  },
  "user-group": {
    "justifyContent": "center"
  },
  "heart-beat": {
    "width": 2,
    "backgroundSize": "100% 100%",
    "height": 1,
    "backgroundImage": "url('../asset/img/心跳.png')"
  },
  "user-img": {
    "marginTop": 0,
    "marginRight": "20",
    "marginBottom": 0,
    "marginLeft": "20",
    "width": "128",
    "height": "128",
    "borderRadius": 50,
    "border": "solid 2px white"
  },
  "user-name": {
    "marginTop": "20",
    "textAlign": "center",
    "fontSize": "36",
    "color": "#FFFFFF"
  },
  "btn-group": {
    "marginTop": "40",
    "alignItems": "center",
    "justifyContent": "space-around"
  },
  "btn": {
    "marginTop": "30",
    "marginRight": 0,
    "marginBottom": "30",
    "marginLeft": 0,
    "width": "252",
    "height": "70",
    "lineHeight": "70",
    "color": "#FFFFFF",
    "fontSize": "36",
    "textAlign": "center",
    "borderRadius": "10"
  },
  "chat": {
    "background": "url('../asset/img/Rectangle 3 Copy.png')"
  },
  "next": {
    "background": "url('../asset/img/Rectangle 3 Copy 3.png')"
  }
}

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      ausername: '',
      auserphoto: '',
      busername: '',
      buserphoto: '',
      buserid: ''
    };
  },
  mounted: function mounted() {
    var _this = this;

    _index2.default.getEvent().then(function (_ref) {
      var data = _ref.data;

      _this.ausername = data.ausername;
      _this.auserphoto = data.auserphoto;
      _this.busername = data.busername;
      _this.buserphoto = data.buserphoto;
      _this.buserid = data.buserid;
    });
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["match-content"]
  }, [_c('div', {
    staticClass: ["match-success"]
  }, [_c('text', {
    staticClass: ["base-font-size", "color-white"]
  }, [_vm._v("匹配成功!")]), _c('text', {
    staticClass: ["match-success-font"]
  }, [_vm._v("您和" + _vm._s(_vm.busername) + "已匹配成功")])]), _c('div', {
    staticClass: ["user-group", "base-flex"]
  }, [_c('div', {
    staticClass: ["user-item"]
  }, [_c('image', {
    staticClass: ["user-img"],
    attrs: {
      "src": _vm.auserphoto
    }
  }), _c('text', {
    staticClass: ["user-name"]
  }, [_vm._v(_vm._s(_vm.ausername))])]), _c('div', {
    staticClass: ["heart-beat"]
  }), _c('div', {
    staticClass: ["user-item"]
  }, [_c('image', {
    staticClass: ["user-img"],
    attrs: {
      "src": _vm.buserphoto
    }
  }), _c('text', {
    staticClass: ["user-name"]
  }, [_vm._v(_vm._s(_vm.busername))])])]), _c('div', {
    staticClass: ["btn-group"]
  }, [_c('router-link', {
    staticClass: ["btn", "chat"],
    staticStyle: {
      backgroundSize: "100% 100%"
    },
    attrs: {
      "to": {
        name: 'chat',
        params: {
          user: _vm.buserid
        }
      }
    }
  }, [_vm._v(" 去聊天嘛 ")]), _c('router-link', {
    staticClass: ["btn", "next"],
    staticStyle: {
      backgroundSize: "100% 100%"
    },
    attrs: {
      "to": {
        name: 'index'
      }
    }
  }, [_vm._v(" 我再看看 ")])], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(70)
)

/* script */
__vue_exports__ = __webpack_require__(71)

/* template */
var __vue_template__ = __webpack_require__(79)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\MINI-WEB\\src\\components\\otherInfo.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-e4fee316"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = {
  "chat-header": {
    "width": 100,
    "height": 7,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "backgroundColor": "#161824"
  },
  "user-header": {
    "alignItems": "center"
  },
  "user-img": {
    "width": 2.5,
    "height": 2.5,
    "borderRadius": 50,
    "background": "white",
    "overflow": "hidden"
  },
  "user-name": {
    "color": "#FFFFFF",
    "marginTop": "20"
  },
  "user-label": {
    "marginTop": 0.1,
    "marginRight": 0,
    "marginBottom": 0.4,
    "marginLeft": 0,
    "flexDirection": "row",
    "justifyContent": "center"
  },
  "label-item": {
    "marginTop": 0,
    "marginRight": "10",
    "marginBottom": 0,
    "marginLeft": "10",
    "paddingTop": 0,
    "paddingRight": "20",
    "paddingBottom": 0,
    "paddingLeft": "20",
    "textAlign": "center",
    "color": "#FFFFFF",
    "borderRadius": "10",
    "background": "#807773"
  },
  "video-block": {
    "flexGrow": 1
  },
  "tab-group": {
    "paddingTop": "20",
    "paddingRight": 0,
    "paddingBottom": "20",
    "paddingLeft": 0,
    "justifyContent": "center",
    "background": "#010813"
  },
  "tab": {
    "marginTop": 0,
    "marginRight": "40",
    "marginBottom": 0,
    "marginLeft": "40"
  },
  "video-list": {
    "flexGrow": 1,
    "background": "url('../asset/img/user-info-bg.png')",
    "backgroundSize": "cover"
  },
  "bg": {
    "position": "absolute",
    "left": 0,
    "top": 0,
    "right": 0,
    "bottom": 0
  },
  "wrapper": {
    "paddingTop": "100"
  },
  "slider": {
    "width": 5,
    "height": 6,
    "marginTop": 0.2,
    "alignItems": "center",
    "justifyContent": "center"
  }
}

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wxcEpSlider = __webpack_require__(14);

var _wxcEpSlider2 = _interopRequireDefault(_wxcEpSlider);

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  components: { WxcEpSlider: _wxcEpSlider2.default },
  data: function data() {
    return {
      labels: ['北京', '20岁', '双子座', '男'],
      showVideoList: 'works',
      sliderId: 1,
      cardLength: 5,
      name: '',
      signature: '',
      imgurl: '',
      my_video_list: [],
      cardSize: {
        width: 400,
        height: 300,
        spacing: 0,
        scale: 0.8
      },
      user_id: 0
    };
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      vm.user_id = to.params.user;
    });
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _index2.default.getOtherInfo({ user_id: _this.user_id }).then(function (_ref) {
        var data = _ref.data;

        data = data.data;
        _this.labels = [data.local, data.age + '岁', data.constellation, data.sex];
        _this.name = data.name;
        _this.signature = data.signature;
        _this.imgurl = data.img_portrait;
        _this.my_video_list = data.my_video_list;
      });
    });
  },

  methods: {
    doListChange: function doListChange(msg) {
      this.showVideoList = msg;
    },
    goback: function goback() {
      this.$router.go(-1);
    }
  },
  watch: {
    showVideoList: function showVideoList() {}
  }
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(73)
)

/* script */
__vue_exports__ = __webpack_require__(74)

/* template */
var __vue_template__ = __webpack_require__(78)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\MINI-WEB\\node_modules\\weex-ui\\packages\\wxc-ep-slider\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1014eb98"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = {
  "slider": {
    "position": "absolute",
    "top": 0
  }
}

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _bindEnv = __webpack_require__(3);

var _bindEnv2 = _interopRequireDefault(_bindEnv);

var _indexWeex = __webpack_require__(4);

var _indexWeex2 = _interopRequireDefault(_indexWeex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var swipeBack = weex.requireModule('swipeBack');
var animation = weex.requireModule('animation');
exports.default = {
  props: {
    sliderId: {
      type: [String, Number],
      default: 1
    },
    panOffset: {
      type: Number,
      default: 80
    },
    cardLength: {
      type: Number,
      default: 1
    },
    selectIndex: {
      type: Number,
      default: 0
    },
    enableSwipe: {
      type: Boolean,
      default: true
    },
    containerS: {
      type: Object,
      default: function _default() {
        return {
          position: 'relative',
          width: 750,
          height: 352
        };
      }
    },
    cardS: {
      type: Object,
      default: function _default() {
        return {
          width: 360,
          height: 300,
          spacing: 0,
          scale: 0.75
        };
      }
    },
    autoPlay: {
      type: Boolean,
      default: false
    },
    interval: {
      type: [Number, String],
      default: 1200
    }
  },
  data: function data() {
    return {
      isMoving: false,
      gesToken: 0,
      startX: 0,
      startTime: 0,
      currentIndex: 0,
      autoPlayTimer: null
    };
  },
  computed: {
    cardList: function cardList() {
      return new Array(this.cardLength + 1).join().split('');
    },
    cardWidth: function cardWidth() {
      return (this.cardLength - 1) * this.cardS.width + this.containerS.width + 235;
    }
  },
  created: function created() {
    this.currentIndex = this.selectIndex;
  },
  mounted: function mounted() {
    var _this = this;

    // ios和页面返回冲突，组件里面将ios系统横滑返回禁止
    if (swipeBack && swipeBack.forbidSwipeBack) {
      swipeBack.forbidSwipeBack(true);
    }

    setTimeout(function () {
      var sliderCtn = _this.$refs['sliderCtn_' + _this.sliderId];
      if (_bindEnv2.default.supportsEB() && sliderCtn && sliderCtn.ref) {
        _indexWeex2.default.prepare && _indexWeex2.default.prepare({
          anchor: sliderCtn.ref,
          eventType: 'pan'
        });
      }
    }, 20);
    this.checkNeedAutoPlay();
  },

  methods: {
    onPanStart: function onPanStart(e) {
      if (_bindEnv2.default.supportsEB()) {
        return;
      }
      this.clearAutoPlay();
      this.startX = e.changedTouches[0].clientX;
      this.startTime = Date.now();
    },
    onPanMove: function onPanMove(e) {
      if (_bindEnv2.default.supportsEB()) {
        return;
      }
      var moveX = e.changedTouches[0].clientX - this.startX;
      var index = this.loopedIndex(this.currentIndex, this.cardLength);
      var cardLength = this.cardLength;
      var currentCardLeft = this.currentIndex * (this.cardS.width + this.cardS.spacing);

      var sliderCtn = this.$refs['sliderCtn_' + this.sliderId];
      sliderCtn && animation.transition(sliderCtn, {
        styles: {
          transform: 'translateX(' + (moveX - currentCardLeft) + 'px)'
        },
        timingFunction: 'ease',
        delay: 0,
        duration: 0
      }, function () {});

      if (this.cardS.scale !== 1) {
        var currentCard = this.$refs['card' + this.loopedIndex(index, cardLength) + '_' + this.sliderId][0];
        currentCard && animation.transition(currentCard, {
          styles: {
            transform: 'scale(' + (1 - Math.abs(moveX) / this.cardS.width * (1 - this.cardS.scale)) + ')'
          },
          timingFunction: 'ease',
          delay: 0,
          duration: 0
        }, function () {});
        // 左边的卡片
        var leftCard = this.$refs['card' + this.loopedIndex(index - 1, cardLength) + '_' + this.sliderId][0];
        // loop 函数负数返回 0，这里有点冲突
        if (leftCard && index !== 0) {
          animation.transition(leftCard, {
            styles: {
              transform: 'scale(' + (1 - Math.abs(moveX - this.cardS.width) / this.cardS.width * (1 - this.cardS.scale)) + ')'
            },
            timingFunction: 'ease',
            delay: 0,
            duration: 0
          }, function () {});
        }
        // 右边卡片
        var rightCard = this.$refs['card' + this.loopedIndex(index + 1, cardLength) + '_' + this.sliderId][0];
        rightCard && animation.transition(rightCard, {
          styles: {
            transform: 'scale(' + (1 - Math.abs(this.cardS.width + moveX) / this.cardS.width * (1 - this.cardS.scale)) + ')'
          },
          timingFunction: 'ease',
          delay: 0,
          duration: 0
        }, function () {});
      }
    },
    onEpPanStart: function onEpPanStart(e) {
      var _this2 = this;

      if (_bindEnv2.default.supportsEB() && e.state === 'start') {
        this.clearAutoPlay();
        setTimeout(function () {
          var sliderCtn = _this2.$refs['sliderCtn_' + _this2.sliderId];
          _this2.bindExp(sliderCtn);
        }, 0);
      }
    },
    onPanEnd: function onPanEnd(e) {
      if (_bindEnv2.default.supportsEB()) {
        return;
      }
      this.panEnd(e);
    },
    panEnd: function panEnd(e) {
      var _this3 = this;

      this.isMoving = true;
      var moveX = e.deltaX;

      if (_utils2.default.env.isWeb()) {
        moveX = e.changedTouches[0].clientX - this.startX;
      }

      var originIndex = this.currentIndex;
      var selectIndex = originIndex;
      var duration = Date.now() - this.startTime;
      var panOffset = this.panOffset || this.cardS.width / 2;
      var isPullMore = selectIndex === this.cardLength - 1 && (moveX < -68 || moveX < -10 && duration < 200);

      if (isPullMore) {
        this.$emit('wxcEpSliderPullMore', { currentIndex: selectIndex });
      }

      if (moveX < -panOffset || moveX < -10 && duration < 200) {
        if (selectIndex !== this.cardLength - 1) {
          selectIndex++;
        }
      } else if (moveX > panOffset || moveX > 10 && duration < 500) {
        if (selectIndex !== 0) {
          selectIndex--;
        }
      }

      this.slideTo(originIndex, selectIndex);
      setTimeout(function () {
        _this3.checkNeedAutoPlay();
      }, 3000);
    },
    slideTo: function slideTo(originIndex, selectIndex) {
      var _this4 = this;

      var currentCardScale = 1;
      var rightCardScale = this.cardS.scale;
      var leftCardScale = this.cardS.scale;
      var duration = selectIndex === 0 && originIndex === this.cardLength - 1 && this.cardLength !== 2 ? 0.00001 : 300;
      this.$emit('wxcEpSliderCurrentIndexSelected', { currentIndex: selectIndex });
      if (originIndex < selectIndex) {
        currentCardScale = this.cardS.scale;
        rightCardScale = 1;
      } else if (originIndex > selectIndex) {
        currentCardScale = this.cardS.scale;
        leftCardScale = 1;
      }
      var currentCard = this.$refs['card' + this.loopedIndex(originIndex, this.cardLength) + '_' + this.sliderId][0];
      currentCard && animation.transition(currentCard, {
        styles: {
          transform: 'scale(' + currentCardScale + ')'
        },
        timingFunction: 'ease',
        duration: duration
      }, function () {});

      var leftCard = this.$refs['card' + this.loopedIndex(originIndex - 1, this.cardLength) + '_' + this.sliderId][0];
      if (this.isMoving && leftCard && originIndex !== 0) {
        animation.transition(leftCard, {
          styles: {
            transform: 'scale(' + leftCardScale + ')'
          },
          timingFunction: 'ease',
          duration: duration
        }, function () {});
      }
      var rightCard = this.$refs['card' + this.loopedIndex(originIndex + 1, this.cardLength) + '_' + this.sliderId][0];
      if (rightCard && originIndex !== this.cardLength - 1) {
        animation.transition(rightCard, {
          styles: {
            transform: 'scale(' + rightCardScale + ')'
          },
          timingFunction: 'ease',
          duration: duration
        }, function () {});
      }

      var sliderCtn = this.$refs['sliderCtn_' + this.sliderId];
      sliderCtn && animation.transition(sliderCtn, {
        styles: {
          transform: 'translateX(-' + selectIndex * (this.cardS.width + this.cardS.spacing) + 'px)'
        },
        timingFunction: 'ease',
        duration: duration
      }, function () {
        _this4.isMoving = false;
        if (originIndex !== selectIndex) {
          _this4.currentIndex = selectIndex;
        }
      });
    },

    // 使index维持在0-length之间循环
    loopedIndex: function loopedIndex(index, total) {
      if (index < 0) {
        index = index + (1 - index / total) * total;
      }
      return index % total;
    },
    bindExp: function bindExp(element) {
      var _this5 = this;

      if (element && element.ref) {

        if (this.isMoving && this.gesToken !== 0) {
          _indexWeex2.default.unbind({
            eventType: 'pan',
            token: this.gesToken
          });
          this.gesToken = 0;
          return;
        }

        this.startTime = Date.now();
        var index = this.loopedIndex(this.currentIndex, this.cardLength);
        var sliderCtn = this.$refs['sliderCtn_' + this.sliderId];
        var currentCard = this.$refs['card' + index + '_' + this.sliderId][0];
        var rightCard = null;
        var leftCard = null;
        var currentCardLeft = this.currentIndex * (this.cardS.width + this.cardS.spacing);

        // 卡片容器
        var sliderCtnExp = 'x - ' + currentCardLeft;
        var args = [{
          element: sliderCtn.ref,
          property: 'transform.translateX',
          expression: sliderCtnExp
        }];

        if (this.cardS.scale !== 1) {

          var currentCardExp = '1-abs(x)/' + this.cardS.width + '*' + (1 - this.cardS.scale);
          var leftCardExp = '1-abs(x-' + this.cardS.width + ')/' + this.cardS.width + '*' + (1 - this.cardS.scale);
          var rightCardExp = '1-abs(' + this.cardS.width + '+x)/' + this.cardS.width + '*' + (1 - this.cardS.scale);

          args.push({
            element: currentCard.ref,
            property: 'transform.scale',
            expression: currentCardExp
          });

          if (index === 0 && this.$refs['card' + (index + 1) + '_' + this.sliderId]) {

            rightCard = this.$refs['card' + (index + 1) + '_' + this.sliderId][0];
            args.push({
              element: rightCard.ref,
              property: 'transform.scale',
              expression: rightCardExp
            });
          } else if (index === this.cardLength - 1 && this.$refs['card' + (index - 1) + '_' + this.sliderId]) {
            leftCard = this.$refs['card' + (index - 1) + '_' + this.sliderId][0];
            args.push({
              element: leftCard.ref,
              property: 'transform.scale',
              expression: leftCardExp
            });
          } else if (this.$refs['card' + (index - 1) + '_' + this.sliderId]) {
            // 左边卡片
            leftCard = this.$refs['card' + (index - 1) + '_' + this.sliderId][0];
            args.push({
              element: leftCard.ref,
              property: 'transform.scale',
              expression: leftCardExp
            });
            // 右边卡片
            rightCard = this.$refs['card' + (index + 1) + '_' + this.sliderId][0];
            args.push({
              element: rightCard.ref,
              property: 'transform.scale',
              expression: rightCardExp
            });
          }
        }

        var gesTokenObj = _indexWeex2.default.bind({
          anchor: element.ref,
          eventType: 'pan',
          props: args
        }, function (e) {
          if (!_this5.isMoving && (e.state === 'end' || e.state === 'cancel' || e.state === 'exit')) {
            _this5.panEnd(e);
          }
        });

        this.gesToken = gesTokenObj.token;
      }
    },
    checkNeedAutoPlay: function checkNeedAutoPlay() {
      var _this6 = this;

      if (this.autoPlay) {
        this.clearAutoPlay();
        this.autoPlayTimer = setInterval(function () {
          _this6.slideTo(_this6.currentIndex, _this6.loopedIndex(_this6.currentIndex + 1, _this6.cardLength));
        }, parseInt(this.interval));
      }
    },
    clearAutoPlay: function clearAutoPlay() {
      this.autoPlayTimer && clearInterval(this.autoPlayTimer);
    },
    rebind: function rebind() {
      var sliderCtn = this.$refs['sliderCtn_' + this.sliderId];
      if (sliderCtn && sliderCtn.ref) {
        _indexWeex2.default.unbind({
          eventType: 'pan',
          token: this.gesToken
        });
        this.gesToken = 0;
        this.bindExp(sliderCtn);
      }
    },
    manualSetPage: function manualSetPage(selectIndex) {
      var _this7 = this;

      this.clearAutoPlay();
      var step = this.currentIndex < selectIndex ? 1 : -1;
      this.slideTo(this.loopedIndex(selectIndex - step, this.cardLength), selectIndex);
      setTimeout(function () {
        _this7.checkNeedAutoPlay();
      }, 3000);
    }
  }
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var required = __webpack_require__(76)
  , qs = __webpack_require__(77)
  , protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i
  , slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [
  ['#', 'hash'],                        // Extract from the back.
  ['?', 'query'],                       // Extract from the back.
  ['/', 'pathname'],                    // Extract from the back.
  ['@', 'auth', 1],                     // Extract from the front.
  [NaN, 'host', undefined, 1, 1],       // Set left over value.
  [/:(\d+)$/, 'port', undefined, 1],    // RegExp the back.
  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @api public
 */
function lolcation(loc) {
  var location = global && global.location || {};
  loc = loc || location;

  var finaldestination = {}
    , type = typeof loc
    , key;

  if ('blob:' === loc.protocol) {
    finaldestination = new URL(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new URL(loc, {});
    for (key in ignore) delete finaldestination[key];
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @api private
 */
function extractProtocol(address) {
  var match = protocolre.exec(address);

  return {
    protocol: match[1] ? match[1].toLowerCase() : '',
    slashes: !!match[2],
    rest: match[3]
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @api private
 */
function resolve(relative, base) {
  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
    , i = path.length
    , last = path[i - 1]
    , unshift = false
    , up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} location Location defaults for relative paths.
 * @param {Boolean|Function} parser Parser for the query string.
 * @api public
 */
function URL(address, location, parser) {
  if (!(this instanceof URL)) {
    return new URL(address, location, parser);
  }

  var relative, extracted, parse, instruction, index, key
    , instructions = rules.slice()
    , type = typeof location
    , url = this
    , i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (!extracted.slashes) instructions[2] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];
    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if ((index = parse.exec(address))) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (
      relative && instruction[3] ? location[key] || '' : ''
    );

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (
      relative
    && location.slashes
    && url.pathname.charAt(0) !== '/'
    && (url.pathname !== '' || location.pathname !== '')
  ) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL}
 * @api public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname +':'+ value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':'+ url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String}
 * @api public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query
    , url = this
    , protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':'+ url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;

  if (url.hash) result += url.hash;

  return result;
}

URL.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
URL.extractProtocol = extractProtocol;
URL.location = lolcation;
URL.qs = qs;

module.exports = URL;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */
module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
    return port !== 80;

    case 'https':
    case 'wss':
    return port !== 443;

    case 'ftp':
    return port !== 21;

    case 'gopher':
    return port !== 70;

    case 'file':
    return false;
  }

  return port !== 0;
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String} The decoded string.
 * @api private
 */
function decode(input) {
  return decodeURIComponent(input.replace(/\+/g, ' '));
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?&]+)=?([^&]*)/g
    , result = {}
    , part;

  while (part = parser.exec(query)) {
    var key = decode(part[1])
      , value = decode(part[2]);

    //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    if (key in result) continue;
    result[key] = value;
  }

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = [];

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (var key in obj) {
    if (has.call(obj, key)) {
      pairs.push(encodeURIComponent(key) +'='+ encodeURIComponent(obj[key]));
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;


/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    style: _vm.containerS
  }, [_c('div', {
    ref: ("sliderCtn_" + _vm.sliderId),
    style: {
      width: _vm.cardWidth + 'px',
      height: _vm.cardS.height + 'px',
      transform: ("translateX(-" + (_vm.currentIndex * (_vm.cardS.width + _vm.cardS.spacing)) + "px)")
    },
    on: {
      "panstart": _vm.onPanStart,
      "panmove": _vm.onPanMove,
      "panend": _vm.onPanEnd,
      "horizontalpan": _vm.onEpPanStart
    }
  }, [_vm._l((_vm.cardList), function(v, index) {
    return _c('div', {
      ref: ("card" + index + "_" + _vm.sliderId),
      refInFor: true,
      staticClass: ["slider"],
      style: {
        transform: ("scale(" + (index===_vm.currentIndex ? 1 : _vm.cardS.scale) + ")"),
        left: ((index * (_vm.cardS.width+_vm.cardS.spacing)) + "px"),
        marginLeft: (((_vm.containerS.width - _vm.cardS.width) / 2) + "px"),
        width: _vm.cardS.width + 'px',
        height: _vm.cardS.height + 'px'
      }
    }, [_vm._t(("card" + index + "_" + _vm.sliderId))], 2)
  }), _vm._t("pull-more")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 79 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (28:10)\n    at Parser.pp$4.raise (E:\\MINI-WEB\\node_modules\\vue-template-es2015-compiler\\buble.js:2610:13)\n    at Parser.pp.unexpected (E:\\MINI-WEB\\node_modules\\vue-template-es2015-compiler\\buble.js:637:8)\n    at Parser.pp$3.parseIdent (E:\\MINI-WEB\\node_modules\\vue-template-es2015-compiler\\buble.js:2565:10)\n    at Parser.pp$3.parsePropertyName (E:\\MINI-WEB\\node_modules\\vue-template-es2015-compiler\\buble.js:2362:105)\n    at Parser.parseObj (E:\\MINI-WEB\\node_modules\\vue-template-es2015-compiler\\buble.js:4463:14)\n    at Parser.pp$3.parseExprAtom (E:\\MINI-WEB\\node_modules\\vue-template-es2015-compiler\\buble.js:2077:17)\n    at Parser.parseExprAtom (E:\\MINI-WEB\\node_modules\\vue-template-es2015-compiler\\buble.js:4372:24)\n    at Parser.pp$3.parseExprSubscripts (E:\\MINI-WEB\\node_modules\\vue-template-es2015-compiler\\buble.js:1955:19)\n    at Parser.pp$3.parseMaybeUnary (E:\\MINI-WEB\\node_modules\\vue-template-es2015-compiler\\buble.js:1932:17)\n    at Parser.pp$3.parseExprOps (E:\\MINI-WEB\\node_modules\\vue-template-es2015-compiler\\buble.js:1874:19)\n    at Parser.pp$3.parseMaybeConditional (E:\\MINI-WEB\\node_modules\\vue-template-es2015-compiler\\buble.js:1857:19)\n    at Parser.pp$3.parseMaybeAssign (E:\\MINI-WEB\\node_modules\\vue-template-es2015-compiler\\buble.js:1832:19)\n    at Parser.pp$3.parsePropertyValue (E:\\MINI-WEB\\node_modules\\vue-template-es2015-compiler\\buble.js:2310:87)\n    at Parser.parseObj (E:\\MINI-WEB\\node_modules\\vue-template-es2015-compiler\\buble.js:4472:14)\n    at Parser.pp$3.parseExprAtom (E:\\MINI-WEB\\node_modules\\vue-template-es2015-compiler\\buble.js:2077:17)\n    at Parser.parseExprAtom (E:\\MINI-WEB\\node_modules\\vue-template-es2015-compiler\\buble.js:4372:24)");

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(81)
)

/* script */
__vue_exports__ = __webpack_require__(82)

/* template */
var __vue_template__ = __webpack_require__(83)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\MINI-WEB\\src\\components\\ownInfo.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-82b0c6aa"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = {
  "chat-header": {
    "width": 100,
    "height": 7,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "backgroundColor": "#161824"
  },
  "user-header": {
    "marginTop": 0.3
  },
  "user-img": {
    "marginTop": 0,
    "marginRight": "20",
    "marginBottom": 0,
    "marginLeft": "20",
    "width": 2.3,
    "height": 2.3,
    "borderRadius": 50,
    "overflow": "hidden",
    "background": "white"
  },
  "user-name": {
    "color": "#FFFFFF",
    "marginTop": "25"
  },
  "user-label": {
    "marginTop": "20",
    "marginRight": 0,
    "marginBottom": "20",
    "marginLeft": 0,
    "flexDirection": "row"
  },
  "label-item": {
    "marginTop": 0,
    "marginRight": "10",
    "marginBottom": 0,
    "marginLeft": "10",
    "paddingTop": 0,
    "paddingRight": "20",
    "paddingBottom": 0,
    "paddingLeft": "20",
    "textAlign": "center",
    "color": "#FFFFFF",
    "borderRadius": "10",
    "background": "#807773"
  },
  "user-signature": {
    "paddingTop": 0,
    "paddingRight": "40",
    "paddingBottom": 0,
    "paddingLeft": "40",
    "marginTop": 0.3
  },
  "edit-block": {
    "marginBottom": 0.2,
    "alignItems": "flex-end"
  },
  "edit-btn": {
    "marginRight": "20",
    "paddingTop": 0,
    "paddingRight": "10",
    "paddingBottom": 0,
    "paddingLeft": "10",
    "borderRadius": "10",
    "background": "#143640"
  },
  "video-block": {
    "flexGrow": 1
  },
  "tab-group": {
    "paddingTop": "15",
    "paddingRight": 0,
    "paddingBottom": "15",
    "paddingLeft": 0,
    "justifyContent": "center",
    "background": "#010813"
  },
  "tab": {
    "marginTop": 0,
    "marginRight": "60",
    "marginBottom": 0,
    "marginLeft": "60"
  },
  "video-list": {
    "flexGrow": 1,
    "background": "url('../asset/img/user-info-bg.png')",
    "backgroundSize": "cover"
  },
  "bg": {
    "position": "absolute",
    "left": 0,
    "top": 0,
    "right": 0,
    "bottom": 0
  },
  "wrapper": {
    "paddingTop": "100"
  },
  "slider": {
    "width": 5,
    "height": 7,
    "marginTop": 0.5,
    "alignItems": "center",
    "justifyContent": "center"
  }
}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wxcEpSlider = __webpack_require__(14);

var _wxcEpSlider2 = _interopRequireDefault(_wxcEpSlider);

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  components: { WxcEpSlider: _wxcEpSlider2.default },
  data: function data() {
    return {
      name: '',
      labels: [],
      signature: '',
      imgurl: '',
      showVideoList: 0,
      myVideo: 1,
      likeVideo: 0.6,
      sliderId: 1,
      cardLength: 5,
      like_video_list: [],
      my_video_list: [],
      cardSize: {
        width: 400,
        height: 300,
        spacing: 0,
        scale: 0.8
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    _index2.default.getPersonInfo({}).then(function (_ref) {
      var data = _ref.data;

      data = data.data;
      _this.labels = [data.local, data.age + '岁', data.constellation || '天蝎座', data.sex];
      _this.name = data.name;
      _this.signature = data.signature;
      _this.imgurl = data.img_portrait;
      _this.like_video_list = data.like_video_list;
      _this.my_video_list = data.my_video_list;
    });
  },

  methods: {
    doListChange: function doListChange(msg) {
      this.showVideoList = msg;
    },
    wxcEpSliderCurrentIndexSelected: function wxcEpSliderCurrentIndexSelected(e) {
      var index = e.currentIndex;
    },
    changeTap: function changeTap() {
      if (this.showVideoList === 0) {
        this.showVideoList = 1;
        this.myVideo = 0.6;
        this.likeVideo = 1;
      } else {
        this.showVideoList = 0;
        this.myVideo = 1;
        this.likeVideo = 0.6;
      }
    },
    goback: function goback() {
      this.$router.go(-1);
    }
  }
};

/***/ }),
/* 83 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (39:10)\n    at Parser.pp$4.raise (E:\\MINI-WEB\\node_modules\\vue-template-es2015-compiler\\buble.js:2610:13)\n    at Parser.pp.unexpected (E:\\MINI-WEB\\node_modules\\vue-template-es2015-compiler\\buble.js:637:8)\n    at Parser.pp$3.parseIdent (E:\\MINI-WEB\\node_modules\\vue-template-es2015-compiler\\buble.js:2565:10)\n    at Parser.pp$3.parsePropertyName (E:\\MINI-WEB\\node_modules\\vue-template-es2015-compiler\\buble.js:2362:105)\n    at Parser.parseObj (E:\\MINI-WEB\\node_modules\\vue-template-es2015-compiler\\buble.js:4463:14)\n    at Parser.pp$3.parseExprAtom (E:\\MINI-WEB\\node_modules\\vue-template-es2015-compiler\\buble.js:2077:17)\n    at Parser.parseExprAtom (E:\\MINI-WEB\\node_modules\\vue-template-es2015-compiler\\buble.js:4372:24)\n    at Parser.pp$3.parseExprSubscripts (E:\\MINI-WEB\\node_modules\\vue-template-es2015-compiler\\buble.js:1955:19)\n    at Parser.pp$3.parseMaybeUnary (E:\\MINI-WEB\\node_modules\\vue-template-es2015-compiler\\buble.js:1932:17)\n    at Parser.pp$3.parseExprOps (E:\\MINI-WEB\\node_modules\\vue-template-es2015-compiler\\buble.js:1874:19)\n    at Parser.pp$3.parseMaybeConditional (E:\\MINI-WEB\\node_modules\\vue-template-es2015-compiler\\buble.js:1857:19)\n    at Parser.pp$3.parseMaybeAssign (E:\\MINI-WEB\\node_modules\\vue-template-es2015-compiler\\buble.js:1832:19)\n    at Parser.pp$3.parsePropertyValue (E:\\MINI-WEB\\node_modules\\vue-template-es2015-compiler\\buble.js:2310:87)\n    at Parser.parseObj (E:\\MINI-WEB\\node_modules\\vue-template-es2015-compiler\\buble.js:4472:14)\n    at Parser.pp$3.parseExprAtom (E:\\MINI-WEB\\node_modules\\vue-template-es2015-compiler\\buble.js:2077:17)\n    at Parser.parseExprAtom (E:\\MINI-WEB\\node_modules\\vue-template-es2015-compiler\\buble.js:4372:24)");

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(85)
)

/* script */
__vue_exports__ = __webpack_require__(86)

/* template */
var __vue_template__ = __webpack_require__(132)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\MINI-WEB\\src\\components\\personalEdit.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-741f52ba"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = {
  "botttom": {
    "left": 0
  },
  "chat-header": {
    "height": 7,
    "width": 100,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "backgroundColor": "#161824"
  },
  "right-icon": {
    "background": "url(/src/asset/img/righticon.png)",
    "backgroundSize": "cover",
    "width": 0.26,
    "height": 0.5,
    "right": 0.7,
    "position": "absolute"
  },
  "upload__input": {
    "width": 2.1,
    "height": 2.1,
    "position": "absolute",
    "top": 0.4,
    "opacity": 0
  },
  "infoEdit": {
    "flexGrow": 1,
    "alignItems": "center",
    "backgroundColor": "#000000",
    "color": "#FFFFFF",
    "height": 100
  },
  "user-img": {
    "background": "url(/src/asset/img/Mask.png)",
    "backgroundSize": "cover",
    "width": 2.3,
    "height": 2.3,
    "marginTop": 1
  },
  "user-info": {
    "marginTop": "30",
    "width": 100
  },
  "base-font-size": {
    "fontSize": 0.5
  },
  "cell": {
    "width": 100,
    "paddingTop": "20",
    "paddingRight": "80",
    "paddingBottom": "20",
    "paddingLeft": "80",
    "flexDirection": "row",
    "alignItems": "center",
    "backgroundColor": "#161824"
  },
  "cell-h": {
    "marginRight": "40"
  },
  "sex-content": {
    "alignItems": "center",
    "position": "absolute",
    "right": 4.6
  },
  "btn-style": {
    "marginTop": "5",
    "marginRight": 0,
    "marginBottom": "5",
    "marginLeft": 0
  }
}

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wxcPageCalendar = __webpack_require__(87);

var _wxcPageCalendar2 = _interopRequireDefault(_wxcPageCalendar);

var _wxcButton = __webpack_require__(15);

var _wxcButton2 = _interopRequireDefault(_wxcButton);

var _wxcPopup = __webpack_require__(5);

var _wxcPopup2 = _interopRequireDefault(_wxcPopup);

var _wxcCity = __webpack_require__(103);

var _wxcCity2 = _interopRequireDefault(_wxcCity);

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: { WxcCity: _wxcCity2.default, WxcPopup: _wxcPopup2.default, WxcButton: _wxcButton2.default, WxcPageCalendar: _wxcPageCalendar2.default },
  data: function data() {
    return {
      name: '',
      animationType: 'push',
      currentCity: '',
      cityStyleType: 'list',
      value: '',
      sex: '',
      imgDataUrl: '/src/asset/img/qq.jpg',
      files: 0,
      isBottomShow: false,
      currentDate: '',
      selectedDate: [],
      signature: '',
      isRange: false,
      calendarTitle: '选择日期',
      dateRange: ['1990-06-10', '2018-06-10'],
      selectedNote: ['生日'],
      minibarCfg: {
        title: '日期选择'
      },
      descList: []
    };
  },
  mounted: function mounted() {
    var _this2 = this;

    _index2.default.getPersonInfo({}).then(function (_ref) {
      var data = _ref.data;

      data = data.data;
      _this2.currentCity = data.local;
      _this2.name = data.name;
      _this2.signature = data.signature;
      _this2.imgDataUrl = data.img_portrait;
    });
  },

  methods: {
    handleGoBack: function handleGoBack() {
      this.$router.go(-1);
    },
    handleSave: function handleSave() {
      var _this3 = this;

      var formdata = new FormData();
      formdata.append('birth_timestamp', 1531650089047);
      formdata.append('name', this.name);
      formdata.append('sex', this.sex);
      formdata.append('local', this.currentCity.cityName);
      formdata.append('signature', this.signature);
      formdata.append('img_portrait', this.files);
      _index2.default.doPersonEdit(formdata).then(function (_ref2) {
        var data = _ref2.data;

        alert('保存成功');
        _this3.$router.push({ name: 'ownInfo' });
      });
    },
    uploadimg: function uploadimg() {
      document.getElementById('upload_file').click();
    },
    showListCity: function showListCity() {
      this.cityStyleType = 'list';
      this.$refs['wxcCity'].show();
    },
    showGroupCity: function showGroupCity() {
      this.cityStyleType = 'group';
      this.$refs['wxcCity'].show();
    },
    citySelect: function citySelect(e) {
      this.currentCity = e.item;
    },
    onInput: function onInput(e) {},
    openBottomPopup: function openBottomPopup() {
      this.isBottomShow = true;
    },
    popupOverlayBottomClick: function popupOverlayBottomClick() {
      this.isBottomShow = false;
    },
    handleSexChange: function handleSexChange(sex) {
      this.sex = sex === '' ? this.sex : sex;
      this.isBottomShow = false;
    },
    wxcPageCalendarDateSelected: function wxcPageCalendarDateSelected(e) {
      this.selectedDate = e.date;
      this.currentDate = e.date;
    },
    wxcPageCalendarBackClicked: function wxcPageCalendarBackClicked() {},
    showCalendar: function showCalendar() {
      var _this4 = this;

      this.isRange = false;
      setTimeout(function () {
        _this4.$refs['wxcPageCalendar'].show();
      }, 10);
    },
    showReturnCalendar: function showReturnCalendar() {
      var _this5 = this;

      this.isRange = true;
      setTimeout(function () {
        _this5.$refs['wxcPageCalendar'].show();
      }, 10);
    },
    getFile: function getFile(e) {
      var _this = this;
      this.files = e.target.files[0];
      if (!e || !window.FileReader) return; // 看支持不支持FileReader
      var reader = new FileReader();
      reader.readAsDataURL(this.files); // 这里是最关键的一步，转换就在这里
      reader.onloadend = function () {
        _this.imgDataUrl = this.result;
      };
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(88);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(89)
)

/* script */
__vue_exports__ = __webpack_require__(90)

/* template */
var __vue_template__ = __webpack_require__(97)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\MINI-WEB\\node_modules\\weex-ui\\packages\\wxc-page-calendar\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-b502ed5e"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-page-calendar": {
    "position": "fixed",
    "width": "750",
    "color": "#333333",
    "backgroundColor": "#ffffff"
  },
  "flex-item": {
    "flex": 1,
    "textAlign": "center"
  },
  "calendar-weekday": {
    "height": "60",
    "backgroundColor": "#ffffff",
    "borderBottomWidth": "1",
    "borderTopWidth": "1",
    "borderColor": "#e2e2e2",
    "flexDirection": "row",
    "justifyContent": "space-around",
    "alignItems": "center"
  },
  "weekday-text": {
    "color": "#000000",
    "flex": 1,
    "fontSize": "24",
    "textAlign": "center"
  },
  "calendar-list": {
    "flex": 1
  },
  "month-text": {
    "fontSize": "32",
    "height": "60",
    "lineHeight": "60",
    "width": "750",
    "textAlign": "center",
    "alignItems": "center",
    "backgroundColor": "#f2f3f4"
  },
  "calendar-row": {
    "height": "140",
    "flexDirection": "row",
    "backgroundColor": "#ffffff",
    "borderBottomWidth": "1",
    "borderColor": "#f2f3f4",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "row-item": {
    "flex": 1,
    "height": "140",
    "paddingTop": "10",
    "paddingBottom": "10",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "iphone-x": {
    "height": "68"
  },
  "calendar-note": {
    "height": "36",
    "lineHeight": "36",
    "fontSize": "24",
    "color": "#000000",
    "textAlign": "center"
  },
  "calendar-day": {
    "height": "48",
    "lineHeight": "48",
    "fontSize": "36",
    "color": "#000000",
    "textAlign": "center"
  },
  "calendar-ext": {
    "height": "36",
    "lineHeight": "36",
    "color": "#999999",
    "textAlign": "center",
    "fontSize": "24",
    "textOverflow": "ellipsis"
  },
  "calendar-holiday": {
    "color": "#FF5000"
  },
  "calendar-rest": {
    "color": "#FF5000"
  },
  "item-row-selected": {
    "color": "#ffffff",
    "backgroundColor": "#FFC900",
    "textAlign": "center"
  },
  "item-text-selected": {
    "color": "#3d3d3d",
    "textAlign": "center"
  },
  "calendar-disabled": {
    "color": "#CCCCCC"
  },
  "cell-disabled": {
    "backgroundColor": "#FBFBFB"
  },
  "calendar-day-include": {
    "backgroundColor": "#FFF7D6"
  }
}

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _format = __webpack_require__(91);

var Format = _interopRequireWildcard(_format);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _wxcMinibar = __webpack_require__(92);

var _wxcMinibar2 = _interopRequireDefault(_wxcMinibar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var isWeb = _utils2.default.env.isWeb();

var dom = weex.requireModule('dom');

exports.default = {
  components: { WxcMinibar: _wxcMinibar2.default },
  props: {
    selectedDate: Array,
    animationType: {
      type: String,
      default: 'push'
    },
    dateRange: {
      type: Array,
      required: true,
      default: function _default() {
        return [];
      }
    },
    minibarCfg: {
      type: Object,
      default: function _default() {
        return {
          'title': '选择日期',
          'background-color': '#FFC900',
          'text-color': '#3D3D3D'
        };
      }
    },
    showHeader: {
      type: Boolean,
      default: false
    },
    selectedNote: {
      type: Array,
      default: function _default() {
        return ['开始', '到达', '往返'];
      }
    },
    isRange: {
      type: Boolean,
      default: false
    },
    needDestroy: {
      type: Boolean,
      default: false
    },
    descList: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      isShow: false,
      reSelect: true,
      today: Format.getToDay(),
      departDate: '',
      arriveDate: ''
    };
  },
  computed: {
    calendarExtendStyle: function calendarExtendStyle() {
      return _utils2.default.uiStyle.pageTransitionAnimationStyle(this.animationType);
    },
    monthsArray: function monthsArray() {
      var range = this.dateRange,
          today = this.today,
          departDate = this.departDate,
          arriveDate = this.arriveDate,
          selectedNote = this.selectedNote,
          descList = this.descList;

      var param = { range: range, today: today, departDate: departDate, arriveDate: arriveDate, selectedNote: selectedNote, descList: descList };
      return Format.generateDateCell(param);
    }
  },
  created: function created() {
    this.isIPhoneX = _utils2.default.env.isIPhoneX();
    this.showTitle = isWeb || this.showHeader;
    this.detectShow();
  },
  mounted: function mounted() {
    var _this = this;

    var needDestroy = this.needDestroy;

    var hold = isWeb ? 700 : 100;
    !needDestroy && setTimeout(function () {
      _this.isShow = true;
      _this.scrollToDate();
    }, hold);
  },

  watch: {
    needDestroy: function needDestroy(newVal, preVal) {
      var _this2 = this;

      if (!newVal && newVal !== preVal) {
        setTimeout(function () {
          _this2.isShow = true;
        }, 200);
      }
    }
  },
  methods: {
    minibarLeftButtonClick: function minibarLeftButtonClick() {
      var _this3 = this;

      setTimeout(function () {
        _this3.hide();
        _this3.$emit('wxcPageCalendarBackClicked', {});
      }, 100);
    },
    onClickDate: function onClickDate(datConfig) {
      var self = this;
      if (datConfig.disabled || datConfig.isEmpty) return;

      if (self.reSelect) {
        self.departDate = '';
        self.arriveDate = '';
        self.reSelect = false;
      }

      if (self.isRange) {
        if (self.departDate && Date.parse(self.departDate) <= Date.parse(datConfig.date)) {
          self.arriveDate = datConfig.date;
        } else {
          self.departDate = datConfig.date;
        }
        if (self.departDate && self.arriveDate) {
          self.dispatchDateChange([self.departDate, self.arriveDate]);
        }
      } else {
        self.departDate = datConfig.date;
        self.dispatchDateChange([self.departDate]);
      }
    },
    scrollToDate: function scrollToDate() {
      var _this4 = this;

      setTimeout(function () {
        if (_this4.departDate) {
          var el = _this4.$refs.departDate[0];
          el && dom.getComponentRect && dom.getComponentRect(el, function (e) {
            if (e && e.result) {
              var bottom = e.size.bottom;
              var env = weex.config.env;
              // 误差

              var height = env.deviceHeight / env.deviceWidth * 750 - 50;
              if (bottom > height || bottom === 0) {
                dom.scrollToElement(el, { offset: -146, animated: false });
              }
            }
          });
        }
      }, 10);
    },
    dispatchDateChange: function dispatchDateChange(dateArr) {
      var _this5 = this;

      var duration = isWeb ? 400 : 600;
      setTimeout(function () {
        _this5.hide();
      }, duration);
      this.$emit('wxcPageCalendarDateSelected', {
        date: dateArr
      });
    },
    detectShow: function detectShow() {
      if (this.isRange && this.selectedDate.length >= 2) {
        this.departDate = this.selectedDate[0];
        this.arriveDate = this.selectedDate[1];
      } else if (this.selectedDate.length >= 1) {
        this.departDate = this.selectedDate[0];
        this.arriveDate = '';
      }
    },
    _animate: function _animate(status) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var ref = this.$refs.pageCalendar;
      if (this.animationType === 'push') {
        _utils2.default.animation.pageTransitionAnimation(ref, 'translateX(' + (status ? -750 : 750) + 'px)', status, callback);
      } else if (this.animationType === 'model') {
        _utils2.default.animation.pageTransitionAnimation(ref, 'translateY(' + (status ? -_utils2.default.env.getScreenHeight() : _utils2.default.env.getScreenHeight()) + 'px)', status, callback);
      }
    },
    show: function show() {
      var needDestroy = this.needDestroy;

      needDestroy && (this.isShow = true);
      this.reSelect = true;
      this.detectShow();
      this._animate(true);
      needDestroy && this.scrollToDate();
    },
    hide: function hide() {
      this.needDestroy && (this.isShow = false);
      this.reSelect = false;
      this._animate(false);
      this.$emit('wxcPageCalendarHide', {});
    }
  }
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._getTraditionalHoliday = _getTraditionalHoliday;
exports._isDate = _isDate;
exports._checkHash = _checkHash;
exports.getTime = getTime;
exports._isInRange = _isInRange;
exports._isInSelectRange = _isInSelectRange;
exports._fixNum = _fixNum;
exports._isWeekend = _isWeekend;
exports._isToday = _isToday;
exports._getMonthDays = _getMonthDays;
exports._getPadding = _getPadding;
exports._unique = _unique;
exports.getToDay = getToDay;
exports.getWeekRows = getWeekRows;
exports.generateDateCell = generateDateCell;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
 * Created by Tw93 on 2017/07/29.
 */

// 国际节日
var GLOBAL_HOLIDAY = exports.GLOBAL_HOLIDAY = {
  '01-01': '元旦',
  '02-14': '情人',
  '05-01': '劳动',
  '06-01': '儿童',
  '10-01': '国庆',
  '12-25': '圣诞'
};

// 传统节日
var TRADITIONAL_HOLIDAY = {
  '除夕': ['2015-02-18', '2016-02-07', '2017-01-27', '2018-02-15', '2019-02-04', '2020-01-24'],
  '春节': ['2015-02-19', '2016-02-08', '2017-01-28', '2018-02-16', '2019-02-05', '2020-01-25'],
  '元宵': ['2015-03-05', '2016-02-22', '2017-02-11', '2018-03-02', '2019-02-19', '2020-02-08'],
  '清明': ['2015-04-05', '2016-04-04', '2017-04-04', '2018-04-05', '2019-04-05', '2020-04-04'],
  '端午': ['2015-06-20', '2016-06-09', '2017-05-30', '2018-06-18', '2019-06-07', '2020-06-25'],
  '中秋': ['2015-09-27', '2016-09-15', '2017-10-04', '2018-09-24', '2019-09-13', '2020-10-01'],
  '重阳': ['2015-10-21', '2016-10-09', '2017-10-28', '2018-10-17', '2019-10-07', '2020-10-25']
};

// 放假日
var REST_DAYS = ['2017-10-01', '2017-10-02', '2017-10-03', '2017-10-04', '2017-10-05', '2017-10-06', '2017-10-07', '2017-10-08'];

// 工作日
var WORK_DAYS = ['2017-09-30'];

function _getTraditionalHoliday() {
  var HOLIDAY_TEMP = {};

  var keys = Object.keys(TRADITIONAL_HOLIDAY);
  keys.forEach(function (k) {
    var arr = TRADITIONAL_HOLIDAY[k];
    arr.forEach(function (i) {
      HOLIDAY_TEMP[i] = k;
    });
  });
  return HOLIDAY_TEMP;
}

function _isDate(obj) {
  var type = obj === null ? String(obj) : {}.toString.call(obj) || 'object';
  return type === '[object date]';
}

/**
 * 检测Hash
 *
 * @method _checkHash
 * @private
 */
function _checkHash(url, hash) {
  return url && url.match(/#/) && url.replace(/^.*#/, '') === hash;
}

/**
 * 获取当前日期的毫秒数
 * @method getTime
 * @param {String} date
 * @return {Number}
 */
function getTime(date) {
  if (_isDate(date)) {
    return new Date(date).getTime();
  } else {
    try {
      return new Date(date.replace(/-/g, '/')).getTime();
    } catch (e) {
      return 0;
    }
  }
}

function _isInRange(range, date) {
  var start = getTime(range[0]);
  var end = getTime(range[1]);
  var d = getTime(date);
  return start <= d && end >= d;
}

function _isInSelectRange(range, date) {
  var start = getTime(range[0]);
  var end = getTime(range[1]);
  var d = getTime(date);
  return start < d && end > d;
}

function _fixNum(num) {
  return (num < 10 ? '0' : '') + num;
}

/**
 * 是否是周末
 * @method isWeekend
 * @param {String} date
 * @return {Boolean}
 */
function _isWeekend(date) {
  var day = new Date(date.replace(/-/g, '/')).getDay();
  return day === 0 || day === 6;
}

/**
 * 是否是今天
 * @method isToday
 * @param {String} date
 * @return {Boolean}
 */
function _isToday(today, date) {
  return getTime(today) === getTime(date);
}

/**
 * 检查是否是闰年
 * @method _checkLeapYear
 * @param {Number} y 年份
 * @param {Date} t today
 * @protected
 */
function _getMonthDays(y, t) {
  var MONTH_DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var year = y || t.getFullYear();
  var isLeapYear = false;

  if (year % 100) {
    isLeapYear = !(year % 4);
  } else {
    isLeapYear = !(year % 400);
  }

  if (isLeapYear) {
    MONTH_DAYS[1] = 29;
  } else {
    MONTH_DAYS[1] = 28;
  }
  return MONTH_DAYS;
}

/**
 * 当月1号前面有多少空格
 * @method _getPadding
 * @protected
 */
function _getPadding(year, month) {
  var date = new Date(year + '/' + month + '/1');
  return date.getDay();
}

function _unique(array) {
  return Array.prototype.filter.call(array, function (item, index) {
    return array.indexOf(item) === index;
  });
}

function getToDay() {
  return new Date().getFullYear() + '-' + _fixNum(new Date().getMonth() + 1) + '-' + _fixNum(new Date().getDate());
}

function getWeekRows(y, m, today, dateRange, departDate, arriveDate, selectedNote, descList) {
  var monthDays = _getMonthDays(y, today);
  var padding = _getPadding(y, m, 7);
  var num = monthDays[m - 1] + padding;
  var rows = Math.ceil(num / 7);
  var remain = num % 7;
  var rowsData = [];

  for (var i = 1; i <= rows; i++) {
    var cells = [];

    for (var j = 1; j <= 7; j++) {
      var cell = {};
      // 前后空格
      if (i === 1 && j <= padding || remain && i === rows && j > remain) {
        cell.isEmpty = true;
      } else {
        (function () {
          var d = (i - 1) * 7 + j - padding;
          var date = y + '-' + _fixNum(m) + '-' + _fixNum(d);
          var cls = [];
          var ref = '';
          var cellClass = [];
          var isInRange = _isInRange(dateRange, date);
          var disabled = false;
          var global = _fixNum(m) + '-' + _fixNum(d);
          var note = '';
          var ext = '';

          if (descList && descList.length > 0) {
            var nowDesc = descList.filter(function (item) {
              return item.date == date;
            });
            if (nowDesc && nowDesc.length > 0) {
              ext = nowDesc[0].value;
              if (nowDesc[0].emphasize) {
                cls.push('calendar-holiday');
              }
            }
          }

          // 国际节日
          if (GLOBAL_HOLIDAY[global]) {
            note = GLOBAL_HOLIDAY[global];
            cls.push('calendar-holiday');
          }

          var tHoliday = _getTraditionalHoliday()[date];

          // 传统节日
          if (tHoliday) {
            note = tHoliday;
            cls.push('calendar-holiday');
          }
          // 放假日
          if (REST_DAYS.indexOf(date) > -1) {
            cls.push('calendar-holiday');
          }

          // 工作日
          if (WORK_DAYS.indexOf(date) > -1) {
            cls.push('calendar-work');
          }

          // 周末
          if (_isWeekend(date)) {
            cls.push('calendar-holiday');
          }

          // 今天
          if (_isToday(today, date)) {
            cls.push('calendar-today');
            note = '今天';
          }

          // 不在日期范围内
          if (!isInRange) {
            disabled = true;
          }

          if (disabled) {
            cls = [];
            cls.push('calendar-disabled');
            cellClass.push('cell-disabled');
          }

          if (!ext && disabled && isInRange) {
            ext = '不可选';
          }

          if (departDate === date || arriveDate === date) {
            note = departDate === date ? selectedNote[0] : selectedNote[1];
            ref = departDate === date ? 'departDate' : 'arriveDate';
            if (departDate === arriveDate && selectedNote.length >= 3) {
              note = selectedNote[2];
            }
            cls.push('item-text-selected');
            cellClass.push('item-row-selected');
          }

          if (departDate && arriveDate && _isInSelectRange([departDate, arriveDate], date)) {
            cellClass.push('calendar-day-include');
          }

          cell = {
            isEmpty: false,
            ref: ref,
            cls: _unique(cls).join(' '),
            cellClass: _unique(cellClass).join(' '),
            note: note,
            date: date,
            ext: ext,
            disabled: disabled,
            text: d
          };
        })();
      }
      cells.push(cell);
    }

    rowsData.push(cells);
  }

  return rowsData;
}

function generateDateCell(_ref) {
  var range = _ref.range,
      today = _ref.today,
      departDate = _ref.departDate,
      arriveDate = _ref.arriveDate,
      selectedNote = _ref.selectedNote,
      descList = _ref.descList;

  var start = new Date(range[0].replace(/-/g, '/'));
  var end = new Date(range[1].replace(/-/g, '/'));
  var startYear = start.getFullYear();
  var startMonth = start.getMonth() + 1;
  var endYear = end.getFullYear();
  var endMonth = end.getMonth() + 1;

  var l = (endYear - startYear) * 12 + endMonth - startMonth + 1;
  var y = startYear;
  var n = startMonth;
  var months = [];

  for (var i = 0; i < l; i++) {
    if (n > 12) {
      n = 1;
      y++;
    }
    months.push.apply(months, [{ title: y + '-' + _fixNum(n) }].concat(_toConsumableArray(getWeekRows(y, n, today, range, departDate, arriveDate, selectedNote, descList))));
    n++;
  }
  return months;
}

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(93);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(94)
)

/* script */
__vue_exports__ = __webpack_require__(95)

/* template */
var __vue_template__ = __webpack_require__(96)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\MINI-WEB\\node_modules\\weex-ui\\packages\\wxc-minibar\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-d729ab9e"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-minibar": {
    "width": "750",
    "height": "90",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "backgroundColor": "#009ff0"
  },
  "left": {
    "width": "180",
    "paddingLeft": "32"
  },
  "middle-title": {
    "fontSize": "30",
    "color": "#ffffff",
    "height": "36",
    "lineHeight": "34"
  },
  "right": {
    "width": "180",
    "paddingRight": "32",
    "alignItems": "flex-end"
  },
  "left-button": {
    "width": "21",
    "height": "36"
  },
  "right-button": {
    "width": "32",
    "height": "32"
  },
  "icon-text": {
    "fontSize": "28",
    "color": "#ffffff"
  }
}

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var Navigator = weex.requireModule('navigator');
exports.default = {
  props: {
    backgroundColor: {
      type: String,
      default: '#FFC900'
    },
    leftButton: {
      type: String,
      default: 'https://gw.alicdn.com/tfs/TB1x18VpwMPMeJjy1XdXXasrXXa-21-36.png'
    },
    textColor: {
      type: String,
      default: '#3D3D3D'
    },
    rightButton: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: '标题'
    },
    leftText: {
      type: String,
      default: ''
    },
    rightText: {
      type: String,
      default: ''
    },
    useDefaultReturn: {
      type: Boolean,
      default: true
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    leftButtonClicked: function leftButtonClicked() {
      if (this.useDefaultReturn) {
        Navigator.pop({}, function (e) {});
      }
      this.$emit('wxcMinibarLeftButtonClicked', {});
    },
    rightButtonClicked: function rightButtonClicked() {
      var hasRightContent = this.rightText || this.rightButton || this.$slots && this.$slots.right;
      hasRightContent && this.$emit('wxcMinibarRightButtonClicked', {});
    }
  }
};

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.show) ? _c('div', {
    staticClass: ["wxc-minibar"],
    style: {
      backgroundColor: _vm.backgroundColor
    }
  }, [_c('div', {
    staticClass: ["left"],
    attrs: {
      "ariaLabel": "返回",
      "accessible": true
    },
    on: {
      "click": _vm.leftButtonClicked
    }
  }, [_vm._t("left", [(_vm.leftButton && !_vm.leftText) ? _c('image', {
    staticClass: ["left-button"],
    attrs: {
      "src": _vm.leftButton
    }
  }) : _vm._e(), (_vm.leftText) ? _c('text', {
    staticClass: ["icon-text"],
    style: {
      color: _vm.textColor
    }
  }, [_vm._v(_vm._s(_vm.leftText))]) : _vm._e()])], 2), _vm._t("middle", [_c('text', {
    staticClass: ["middle-title"],
    style: {
      color: _vm.textColor
    }
  }, [_vm._v(_vm._s(_vm.title))])]), _c('div', {
    staticClass: ["right"],
    on: {
      "click": _vm.rightButtonClicked
    }
  }, [_vm._t("right", [(_vm.rightButton && !_vm.rightText) ? _c('image', {
    staticClass: ["right-button"],
    attrs: {
      "src": _vm.rightButton,
      "ariaHidden": true
    }
  }) : _vm._e(), (_vm.rightText) ? _c('text', {
    staticClass: ["icon-text"],
    style: {
      color: _vm.textColor
    }
  }, [_vm._v(_vm._s(_vm.rightText))]) : _vm._e()])], 2)], 2) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "pageCalendar",
    staticClass: ["wxc-page-calendar"],
    style: _vm.calendarExtendStyle
  }, [_c('wxc-minibar', _vm._b({
    attrs: {
      "show": _vm.showTitle,
      "useDefaultReturn": false
    },
    on: {
      "wxcMinibarLeftButtonClicked": _vm.minibarLeftButtonClick
    }
  }, 'wxc-minibar', _vm.minibarCfg, false)), (_vm.isShow) ? _c('div', {
    staticClass: ["calendar-weekday"]
  }, _vm._l((['日', '一', '二', '三', '四', '五', '六']), function(week, k) {
    return _c('text', {
      key: k,
      staticClass: ["flex-item", "weekday-text"],
      attrs: {
        "ariaLabel": ("周" + week)
      }
    }, [_vm._v(_vm._s(week))])
  })) : _vm._e(), (_vm.isShow) ? _c('list', {
    staticClass: ["calendar-list"]
  }, [_vm._l((_vm.monthsArray), function(month, index) {
    return _c('cell', {
      key: index,
      class: [!month.title && 'calendar-row'],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [(month.title) ? _c('text', {
      staticClass: ["month-text"]
    }, [_vm._v(_vm._s(month.title))]) : _vm._l((month), function(cell, rowIndex) {
      return _c('div', {
        key: (index + "-" + rowIndex),
        ref: cell.ref,
        refInFor: true,
        class: ['row-item', cell.cellClass],
        attrs: {
          "accessible": true,
          "ariaLabel": ((cell.text?cell.text:'') + "," + (cell.note?cell.note:'') + "," + (cell.ext?cell.ext:''))
        },
        on: {
          "click": function($event) {
            _vm.onClickDate(cell)
          }
        }
      }, [_c('text', {
        class: ['calendar-note', cell.cls]
      }, [_vm._v(_vm._s(cell.note))]), _c('text', {
        class: ['calendar-day', cell.cls]
      }, [_vm._v(_vm._s(cell.text))]), _c('text', {
        class: ['calendar-ext', cell.cls]
      }, [_vm._v(_vm._s(cell.ext))])])
    })], 2)
  }), (_vm.isIPhoneX) ? _c('cell', {
    staticClass: ["iphone-x"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }) : _vm._e()], 2) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(99)
)

/* script */
__vue_exports__ = __webpack_require__(100)

/* template */
var __vue_template__ = __webpack_require__(102)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\MINI-WEB\\node_modules\\weex-ui\\packages\\wxc-button\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-24e253ce"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-btn": {
    "width": "702",
    "height": "88",
    "alignItems": "center",
    "justifyContent": "center",
    "borderRadius": "12",
    "opacity": 1
  },
  "btn-text": {
    "textOverflow": "ellipsis",
    "lines": 1,
    "fontSize": "36",
    "color": "#ffffff"
  }
}

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//

var _type = __webpack_require__(101);

exports.default = {
  props: {
    text: {
      type: String,
      default: '确认'
    },
    size: {
      type: String,
      default: 'none'
    },
    type: {
      type: String,
      default: 'red'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    btnStyle: Object,
    textStyle: Object
  },
  computed: {
    mrBtnStyle: function mrBtnStyle() {
      var type = this.type,
          disabled = this.disabled,
          btnStyle = this.btnStyle,
          size = this.size;


      var mrBtnStyle = _extends({}, _type.STYLE_MAP[type], btnStyle, _type.BUTTON_STYLE_MAP[size]);

      var disableStyle = { opacity: 0.2 };
      if (type === 'white') {
        disableStyle = { backgroundColor: 'rgba(0, 0, 0, 0.1)' };
      }

      return disabled ? _extends({}, mrBtnStyle, disableStyle, {
        borderWidth: 0
      }) : mrBtnStyle;
    },
    mrTextStyle: function mrTextStyle() {
      var type = this.type,
          disabled = this.disabled,
          textStyle = this.textStyle,
          size = this.size;

      var mrTextStyle = _extends({}, _type.TEXT_STYLE_MAP[type], textStyle, _type.TEXT_FONTSIZE_STYLE_MAP[size]);
      return disabled ? _extends({}, mrTextStyle, { color: '#FFFFFF' }) : mrTextStyle;
    }
  },
  methods: {
    onClicked: function onClicked(e) {
      var type = this.type,
          disabled = this.disabled;

      this.$emit('wxcButtonClicked', { e: e, type: type, disabled: disabled });
    }
  }
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var STYLE_MAP = exports.STYLE_MAP = {
  red: {
    backgroundColor: '#FF5000'
  },
  yellow: {
    backgroundColor: '#FFC900'
  },
  white: {
    backgroundColor: '#FFFFFF',
    borderColor: '#A5A5A5',
    borderWidth: '1px'
  },
  blue: {
    backgroundColor: '#0F8DE8'
  }
};

var TEXT_STYLE_MAP = exports.TEXT_STYLE_MAP = {
  red: {
    color: '#FFFFFF'
  },
  yellow: {
    color: '#FFFFFF'
  },
  blue: {
    color: '#FFFFFF'
  },
  white: {
    color: '#3D3D3D'
  }
};

var BUTTON_STYLE_MAP = exports.BUTTON_STYLE_MAP = {
  full: {
    width: '702px',
    height: '88px'
  },
  big: {
    width: '339px',
    height: '70px'
  },
  medium: {
    width: '218px',
    height: '60px'
  },
  small: {
    width: '157px',
    height: '44px'
  }
};

var TEXT_FONTSIZE_STYLE_MAP = exports.TEXT_FONTSIZE_STYLE_MAP = {
  full: {
    fontSize: '36px'
  },
  big: {
    fontSize: '32px'
  },
  medium: {
    fontSize: '28px'
  },
  small: {
    fontSize: '24px'
  }
};

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wxc-btn"],
    style: _vm.mrBtnStyle,
    attrs: {
      "accessible": true,
      "ariaLabel": _vm.text
    },
    on: {
      "click": _vm.onClicked
    }
  }, [_c('text', {
    staticClass: ["btn-text"],
    style: _vm.mrTextStyle
  }, [_vm._v(_vm._s(_vm.text))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(104);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(105)
)

/* script */
__vue_exports__ = __webpack_require__(106)

/* template */
var __vue_template__ = __webpack_require__(131)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\MINI-WEB\\node_modules\\weex-ui\\packages\\wxc-city\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3640915c"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-city": {
    "position": "fixed",
    "width": "750",
    "backgroundColor": "#F2F3F4"
  }
}

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _defaultData = __webpack_require__(107);

var _defaultData2 = _interopRequireDefault(_defaultData);

var _util = __webpack_require__(108);

var Util = _interopRequireWildcard(_util);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _tab = __webpack_require__(109);

var _tab2 = _interopRequireDefault(_tab);

var _wxcSearchbar = __webpack_require__(113);

var _wxcSearchbar2 = _interopRequireDefault(_wxcSearchbar);

var _wxcResult = __webpack_require__(119);

var _wxcResult2 = _interopRequireDefault(_wxcResult);

var _wxcIndexlist = __webpack_require__(125);

var _wxcIndexlist2 = _interopRequireDefault(_wxcIndexlist);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: { wxcTab: _tab2.default, WxcSearchbar: _wxcSearchbar2.default, WxcResult: _wxcResult2.default, WxcIndexlist: _wxcIndexlist2.default },
  props: {
    animationType: {
      type: String,
      default: 'push'
    },
    inputConfig: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    sourceData: {
      type: Object,
      default: function _default() {
        return _defaultData2.default;
      }
    },
    cityStyleType: {
      type: String,
      default: 'list'
    },
    currentLocation: String,
    cityHeight: {
      type: Number,
      default: 0
    },
    showTab: {
      type: Boolean,
      default: false
    },
    showIndex: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      tId: null,
      saveDefaultSourceData: {},
      onlyShowList: false,
      result: {
        noGoods: {
          pic: 'https://img.alicdn.com/tfs/TB1SpPHkf2H8KJjy0FcXXaDlFXa-200-200.png',
          button: '',
          content: '搜索无结果'
        }
      }
    };
  },
  created: function created() {
    this.saveDefaultSourceData = this.sourceData;
  },

  computed: {
    cityExtendStyle: function cityExtendStyle() {
      return _utils2.default.uiStyle.pageTransitionAnimationStyle(this.animationType);
    },
    currentCityLocationConfig: function currentCityLocationConfig() {
      if (this.currentLocation) {
        return {
          type: this.cityStyleType,
          title: '定位',
          list: [{ name: this.currentLocation, isLocation: true }]
        };
      } else {
        return {};
      }
    },
    normalList: function normalList() {
      return Util.getCities(this.sourceData.cities);
    },
    hotListConfig: function hotListConfig() {
      return {
        type: this.cityStyleType,
        title: '热门',
        list: Util.getCities(this.sourceData.hotCity)
      };
    },
    showError: function showError() {
      var normalList = this.normalList,
          hotListConfig = this.hotListConfig;

      return normalList && normalList.length < 1 && hotListConfig && hotListConfig.list && hotListConfig.list.length < 1;
    },
    listHeight: function listHeight() {
      // 兼容去头逻辑
      var pageHeight = _utils2.default.env.getPageHeight();

      var cityHeight = this.cityHeight;

      if (cityHeight && !isNaN(cityHeight) && cityHeight > 0) {
        pageHeight = cityHeight;
      }
      // searchInput 84
      var tabHeight = this.showTab ? 90 : 0;
      return pageHeight - 84 - tabHeight;
    },
    mergeInputConfig: function mergeInputConfig() {
      return _extends({
        autofocus: false,
        alwaysShowCancel: true,
        placeholder: '中文/拼音/首字母'
      }, this.inputConfig);
    }
  },
  methods: {
    onTabSwitch: function onTabSwitch(e) {
      this.$emit('wxcTabSwitch', e);
    },
    switchTab: function switchTab() {
      var _this = this;

      var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      setTimeout(function () {
        _this.$refs['wxc-tab'].switchTab(i);
      }, 100);
    },
    onItemClick: function onItemClick(e) {
      this.$refs['wxc-searchbar'].autoBlur();
      this.show(false);
      this.$emit('wxcCityItemSelected', { item: e.item });
    },
    onInput: function onInput(e) {
      var _this2 = this;

      clearTimeout(this.tId);
      var cities = this.sourceData.cities;
      var value = e.value;

      if (value !== '' && cities && cities.length > 0) {
        var queryData = Util.query(cities, String(value).trim());
        this.sourceData = {
          cities: queryData,
          hotCity: []
        };
        this.onlyShowList = true;
      } else {
        this.sourceData = this.saveDefaultSourceData;
        this.onlyShowList = false;
      }
      this.tId = setTimeout(function () {
        _this2.$emit('wxcCityOnInput', {
          value: e.value
        });
      }, 300);
    },
    onCancel: function onCancel() {
      this.autoBlur();
      this.show(false);
      this.$emit('wxcCityCanceled', {});
    },
    onSubmit: function onSubmit(e) {
      this.autoBlur();
      this.$emit('wxcCityOnKeyUpEnter', { value: e.value });
    },
    autoBlur: function autoBlur() {
      var inputRef = this.$refs['wxc-searchbar'];
      inputRef && inputRef.autoBlur();
    },
    show: function show() {
      var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var ref = this.$refs.city;
      if (this.animationType === 'push') {
        _utils2.default.animation.pageTransitionAnimation(ref, 'translateX(' + (status ? -750 : 750) + 'px)', status, callback);
      } else if (this.animationType === 'model') {
        _utils2.default.animation.pageTransitionAnimation(ref, 'translateY(' + (status ? -_utils2.default.env.getScreenHeight() : _utils2.default.env.getScreenHeight()) + 'px)', status, callback);
      }
    }
  }
};

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by dianwoda on 2018/1/31.
 */
exports.default = {
  hotCity: [{ cityName: '北京', pinYin: 'beijing', py: 'bj' }, { cityName: '上海', pinYin: 'shanghai', py: 'sh' }, { cityName: '天津', pinYin: 'tianjin', py: 'tj' }, { cityName: '青岛', pinYin: 'qingdao', py: 'qd' }, { cityName: '南京', pinYin: 'nanjing', py: 'nj' }, { cityName: '杭州', pinYin: 'hangzhou', py: 'hz' }, { cityName: '厦门', pinYin: 'xiamen', py: 'xm' }, { cityName: '成都', pinYin: 'chengdu', py: 'cd' }, { cityName: '深圳', pinYin: 'shenzhen', py: 'sz' }, { cityName: '广州', pinYin: 'guangzhou', py: 'gz' }, { cityName: '沈阳', pinYin: 'shenyang', py: 'sy' }, { cityName: '武汉', pinYin: 'wuhan', py: 'wh' }],
  cities: [{ cityName: '北京', pinYin: 'beijing', py: 'bj' }, { cityName: '包头', pinYin: 'baotou', py: 'bt' }, { cityName: '北海', pinYin: 'beihai', py: 'bh' }, { cityName: '宝鸡', pinYin: 'baoji', py: 'bj' }, { cityName: '成都', pinYin: 'chengdu', py: 'cd' }, { cityName: '重庆', pinYin: 'chongqing', py: 'cq' }, { cityName: '长沙', pinYin: 'changsha', py: 'cs' }, { cityName: '长春', pinYin: 'changchun', py: 'cc' }, { cityName: '常州', pinYin: 'changzhou', py: 'cz' }, { cityName: '常德', pinYin: 'changde', py: 'cd' }, { cityName: '沧州', pinYin: 'cangzhou', py: 'cz' }, { cityName: '承德', pinYin: 'chengde', py: 'cd' }, { cityName: '长治', pinYin: 'changzhi', py: 'cz' }, { cityName: '滁州', pinYin: 'chuzhou', py: 'cz' }, { cityName: '大连', pinYin: 'dalian', py: 'dl' }, { cityName: '东莞', pinYin: 'dongguan', py: 'dg' }, { cityName: '大同', pinYin: 'datong', py: 'dt' }, { cityName: '达州', pinYin: 'dazhou', py: 'dz' }, { cityName: '鄂尔多斯', pinYin: 'eerduosi', py: 'eeds' }, { cityName: '恩施', pinYin: 'enshi', py: 'es' }, { cityName: '福州', pinYin: 'fuzhou', py: 'fz' }, { cityName: '佛山', pinYin: 'foshan', py: 'fs' }, { cityName: '抚顺', pinYin: 'fushun', py: 'fs' }, { cityName: '抚州', pinYin: 'fuzhou', py: 'fz' }, { cityName: '防城港', pinYin: 'fangchenggang', py: 'fcg' }, { cityName: '广州', pinYin: 'guangzhou', py: 'gz' }, { cityName: '贵阳', pinYin: 'guiyang', py: 'gy' }, { cityName: '桂林', pinYin: 'guilin', py: 'gl' }, { cityName: '广元', pinYin: 'guangyuan', py: 'gy' }, { cityName: '广安', pinYin: 'guangan', py: 'ga' }, { cityName: '杭州', pinYin: 'hangzhou', py: 'hz' }, { cityName: '哈尔滨', pinYin: 'haerbin', py: 'heb' }, { cityName: '合肥', pinYin: 'hefei', py: 'hf' }, { cityName: '呼和浩特', pinYin: 'huhehaote', py: 'hhht' }, { cityName: '海口', pinYin: 'haikou', py: 'hk' }, { cityName: '黄山', pinYin: 'huangshan', py: 'hs' }, { cityName: '呼伦贝尔', pinYin: 'hulunbeier', py: 'hlbe' }, { cityName: '邯郸', pinYin: 'handan', py: 'hd' }, { cityName: '衡阳', pinYin: 'hengyang', py: 'hy' }, { cityName: '汉中', pinYin: 'hanzhong', py: 'hz' }, { cityName: '济南', pinYin: 'jinan', py: 'jn' }, { cityName: '济宁', pinYin: 'jining', py: 'jn' }, { cityName: '九江', pinYin: 'jiujiang', py: 'jj' }, { cityName: '景德镇', pinYin: 'jingdezhen', py: 'jdz' }, { cityName: '吉林', pinYin: 'jilin', py: 'jl' }, { cityName: '江门', pinYin: 'jiangmen', py: 'jm' }, { cityName: '晋城', pinYin: 'jincheng', py: 'jc' }, { cityName: '嘉峪关', pinYin: 'jiayuguan', py: 'jyg' }, { cityName: '酒泉', pinYin: 'jiuquan', py: 'jq' }, { cityName: '昆明', pinYin: 'kunming', py: 'km' }, { cityName: '克拉玛依', pinYin: 'kelamayi', py: 'klmy' }, { cityName: '兰州', pinYin: 'lanzhou', py: 'lz' }, { cityName: '丽江', pinYin: 'lijiang', py: 'lj' }, { cityName: '洛阳', pinYin: 'luoyang', py: 'ly' }, { cityName: '柳州', pinYin: 'liuzhou', py: 'lz' }, { cityName: '泸州', pinYin: 'luzhou', py: 'lz' }, { cityName: '拉萨', pinYin: 'lasa', py: 'ls' }, { cityName: '临汾', pinYin: 'linfen', py: 'lf' }, { cityName: '乐山', pinYin: 'leshan', py: 'ls' }, { cityName: '聊城', pinYin: 'liaocheng', py: 'lc' }, { cityName: '丽水', pinYin: 'lishui', py: 'ls' }, { cityName: '绵阳', pinYin: 'mianyang', py: 'my' }, { cityName: '梅州', pinYin: 'meizhou', py: 'mz' }, { cityName: '眉山', pinYin: 'meishan', py: 'ms' }, { cityName: '南昌', pinYin: 'nanchang', py: 'nc' }, { cityName: '南京', pinYin: 'nanjing', py: 'nj' }, { cityName: '南宁', pinYin: 'nanning', py: 'nn' }, { cityName: '宁波', pinYin: 'ningbo', py: 'nb' }, { cityName: '南通', pinYin: 'nantong', py: 'nt' }, { cityName: '南充', pinYin: 'nanchong', py: 'nc' }, { cityName: '内江', pinYin: 'neijiang', py: 'nj' }, { cityName: '萍乡', pinYin: 'pingxiang', py: 'px' }, { cityName: '攀枝花', pinYin: 'panzhihua', py: 'pzh' }, { cityName: '青岛', pinYin: 'qingdao', py: 'qd' }, { cityName: '泉州', pinYin: 'quanzhou', py: 'qz' }, { cityName: '上海', pinYin: 'shanghai', py: 'sh' }, { cityName: '深圳', pinYin: 'shenzhen', py: 'sz' }, { cityName: '沈阳', pinYin: 'shenyang', py: 'sy' }, { cityName: '石家庄', pinYin: 'shijiazhuang', py: 'sjz' }, { cityName: '苏州', pinYin: 'suzhou', py: 'sz' }, { cityName: '三亚', pinYin: 'sanya', py: 'sy' }, { cityName: '汕头', pinYin: 'shantou', py: 'st' }, { cityName: '上饶', pinYin: 'shangrao', py: 'sr' }, { cityName: '遂宁', pinYin: 'suining', py: 'sn' }, { cityName: '宿迁', pinYin: 'suqian', py: 'sq' }, { cityName: '天津', pinYin: 'tianjin', py: 'tj' }, { cityName: '太原', pinYin: 'taiyuan', py: 'ty' }, { cityName: '台州', pinYin: 'taizhou', py: 'tz' }, { cityName: '唐山', pinYin: 'tangshan', py: 'ts' }, { cityName: '铁岭', pinYin: 'tieling', py: 'tl' }, { cityName: '武汉', pinYin: 'wuhan', py: 'wh' }, { cityName: '无锡', pinYin: 'wuxi', py: 'wx' }, { cityName: '温州', pinYin: 'wenzhou', py: 'wz' }, { cityName: '乌鲁木齐', pinYin: 'wulumuqi', py: 'wlmq' }, { cityName: '威海', pinYin: 'weihai', py: 'wh' }, { cityName: '渭南', pinYin: 'weinan', py: 'wn' }, { cityName: '西安', pinYin: 'xian', py: 'xa' }, { cityName: '厦门', pinYin: 'xiamen', py: 'xm' }, { cityName: '香港', pinYin: 'xianggang', py: 'xg' }, { cityName: '徐州', pinYin: 'xuzhou', py: 'xz' }, { cityName: '西宁', pinYin: 'xining', py: 'xn' }, { cityName: '襄阳', pinYin: 'xiangyang', py: 'xy' }, { cityName: '新余', pinYin: 'xinyu', py: 'xy' }, { cityName: '许昌', pinYin: 'xuchang', py: 'xc' }, { cityName: '信阳', pinYin: 'xinyang', py: 'xy' }, { cityName: '银川', pinYin: 'yinchuan', py: 'yc' }, { cityName: '宜昌', pinYin: 'yichang', py: 'yc' }, { cityName: '烟台', pinYin: 'yantai', py: 'yt' }, { cityName: '扬州', pinYin: 'yangzhou', py: 'yz' }, { cityName: '宜宾', pinYin: 'yibin', py: 'yb' }, { cityName: '运城', pinYin: 'yuncheng', py: 'yc' }, { cityName: '榆林', pinYin: 'yulin', py: 'yl' }, { cityName: '盐城', pinYin: 'yancheng', py: 'yc' }, { cityName: '岳阳', pinYin: 'yueyang', py: 'yy' }, { cityName: '延安', pinYin: 'yanan', py: 'ya' }, { cityName: '鹰潭', pinYin: 'yingtan', py: 'yt' }, { cityName: '永州', pinYin: 'yongzhou', py: 'yz' }, { cityName: '郑州', pinYin: 'zhengzhou', py: 'zz' }, { cityName: '珠海', pinYin: 'zhuhai', py: 'zh' }, { cityName: '张家界', pinYin: 'zhangjiajie', py: 'zzj' }, { cityName: '中山', pinYin: 'zhongshan', py: 'zs' }, { cityName: '遵义', pinYin: 'zunyi', py: 'zy' }, { cityName: '湛江', pinYin: 'zhanjiang', py: 'zj' }, { cityName: '株洲', pinYin: 'zhuzhou', py: 'zz' }, { cityName: '肇庆', pinYin: 'zhaoqing', py: 'zq' }, { cityName: '枣庄', pinYin: 'zaozhuang', py: 'zz' }, { cityName: '舟山', pinYin: 'zhoushan', py: 'zs' }, { cityName: '自贡', pinYin: 'zigong', py: 'zg' }, { cityName: '资阳', pinYin: 'ziyang', py: 'zy' }, { cityName: '张掖', pinYin: 'zhangye', py: 'zy' }]
};

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCities = getCities;
exports.query = query;

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getCities(list) {
  var showDesc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (list && list.length > 0) {
    var result = list.map(function (v) {
      var o = Object.assign({}, v);

      if (o.suggestName) {
        o.name = o.suggestName;
      }

      if (o.stationName && !o.name) {
        o.name = o.stationName;
      }

      if (o.cityName && !o.name) {
        o.name = o.cityName;
      }

      if (o.code && showDesc) {
        o.desc = o.code;
      }
      return o;
    });
    return result;
  } else {
    return [];
  }
}

function query(source, text) {
  var res = [];
  res = source.filter(function (item) {
    var arr = [];
    var isHave = false;
    Object.keys(item).forEach(function (prop) {
      var itemStr = item[prop];
      _utils2.default.isString(itemStr) && itemStr.split(',').forEach(function (val) {
        arr.push(val);
      });
    });
    arr.some(function (val) {
      isHave = new RegExp('^' + text).test(val);
      return isHave;
    });
    return isHave;
  });
  return res;
}

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(110)
)

/* script */
__vue_exports__ = __webpack_require__(111)

/* template */
var __vue_template__ = __webpack_require__(112)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\MINI-WEB\\node_modules\\weex-ui\\packages\\wxc-city\\tab.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6e574e95"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = {
  "tab-box": {
    "width": "750",
    "flexDirection": "row",
    "justifyContent": "center"
  },
  "tab-item": {
    "flex": 1,
    "height": "90",
    "backgroundColor": "#ffffff",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "tab-item-text": {
    "textAlign": "center",
    "color": "#000000",
    "fontSize": "28"
  },
  "text-selected": {
    "fontWeight": "bold"
  },
  "tab-item-selected-bar": {
    "width": "750",
    "backgroundColor": "#f2f3f4"
  },
  "tab-item-selected-bar-in": {
    "width": "375",
    "justifyContent": "center",
    "alignItems": "center",
    "flexDirection": "row",
    "height": "6"
  },
  "tab-item-active": {
    "backgroundColor": "#ffb200",
    "width": "92",
    "height": "6"
  }
}

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: {},
  data: function data() {
    return {
      checkedIndex: 0
    };
  },
  methods: {
    switchTab: function switchTab(index) {
      var animation = weex.requireModule('animation');
      this.checkedIndex = index;
      this.$emit('wxcTabSwitch', {
        index: index
      });
      animation.transition(this.$refs['tab-bar'], {
        styles: {
          transform: 'translateX(' + index * 375 + 'px)'
        },
        duration: 150, // ms
        timingFunction: 'ease',
        delay: 0 // ms
      }, function () {});
    }
  }
};

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: ["tab-box"]
  }, _vm._l((['国内', '国际']), function(name, i) {
    return _c('div', {
      key: i,
      staticClass: ["tab-item"],
      on: {
        "click": function($event) {
          _vm.switchTab(i)
        }
      }
    }, [_c('text', {
      staticClass: ["['tab-item-text',", "i===checkedIndex", "&&", "'text-selected']"]
    }, [_vm._v(_vm._s(name))])])
  })), _c('div', {
    staticClass: ["tab-item-selected-bar"]
  }, [_c('div', {
    ref: "tab-bar",
    staticClass: ["tab-item-selected-bar-in"]
  }, [_c('div', {
    staticClass: ["tab-item-active"]
  })])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(114);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(115)
)

/* script */
__vue_exports__ = __webpack_require__(116)

/* template */
var __vue_template__ = __webpack_require__(118)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\MINI-WEB\\node_modules\\weex-ui\\packages\\wxc-searchbar\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-57af9ec0"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-search-bar": {
    "paddingLeft": "20",
    "paddingRight": "20",
    "backgroundColor": "#ffffff",
    "width": "750",
    "height": "84",
    "flexDirection": "row"
  },
  "wxc-search-bar-yellow": {
    "backgroundColor": "#ffc900"
  },
  "search-bar-input": {
    "position": "absolute",
    "top": "10",
    "paddingTop": 0,
    "paddingBottom": 0,
    "paddingRight": "40",
    "paddingLeft": "60",
    "fontSize": "26",
    "width": "624",
    "height": "64",
    "lineHeight": "64",
    "backgroundColor": "#E5E5E5",
    "borderRadius": "6"
  },
  "search-bar-input-yellow": {
    "backgroundColor": "#fff6d6"
  },
  "search-bar-icon": {
    "position": "absolute",
    "width": "30",
    "height": "30",
    "left": "34",
    "top": "28"
  },
  "search-bar-close": {
    "position": "absolute",
    "width": "30",
    "height": "30",
    "right": "120",
    "top": "28"
  },
  "search-bar-button": {
    "width": "94",
    "height": "36",
    "fontSize": "30",
    "textAlign": "center",
    "backgroundColor": "#ffffff",
    "marginTop": "16",
    "marginRight": 0,
    "color": "#333333",
    "position": "absolute",
    "right": "8",
    "top": "9"
  },
  "search-bar-button-yellow": {
    "backgroundColor": "#FFC900"
  },
  "input-has-dep": {
    "paddingLeft": "240",
    "width": "710"
  },
  "bar-dep": {
    "width": "170",
    "paddingRight": "12",
    "paddingLeft": "12",
    "height": "42",
    "alignItems": "center",
    "flexDirection": "row",
    "position": "absolute",
    "left": "24",
    "top": "22",
    "borderRightStyle": "solid",
    "borderRightWidth": "1",
    "borderRightColor": "#C7C7C7"
  },
  "bar-dep-yellow": {
    "borderRightColor": "#C7C7C7"
  },
  "dep-text": {
    "flex": 1,
    "textAlign": "center",
    "fontSize": "26",
    "color": "#666666",
    "marginRight": "6",
    "lines": 1,
    "textOverflow": "ellipsis"
  },
  "dep-arrow": {
    "width": "24",
    "height": "24"
  },
  "icon-has-dep": {
    "left": "214"
  },
  "disabled-input": {
    "width": "750",
    "height": "64",
    "position": "absolute",
    "left": 0,
    "backgroundColor": "rgba(0,0,0,0)"
  },
  "has-dep-disabled": {
    "width": "550",
    "left": "200"
  }
}

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _type = __webpack_require__(117);

exports.default = {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    alwaysShowCancel: {
      type: Boolean,
      default: false
    },
    inputType: {
      type: String,
      default: 'text'
    },
    returnKeyType: {
      type: String,
      default: 'default'
    },
    mod: {
      type: String,
      default: 'default'
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: 'gray'
    },
    barStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    defaultValue: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '搜索'
    },
    cancelLabel: {
      type: String,
      default: '取消 '
    },
    depName: {
      type: String,
      default: '杭州'
    }
  },
  computed: {
    needShowCancel: function needShowCancel() {
      return this.alwaysShowCancel || this.showCancel;
    },
    buttonStyle: function buttonStyle() {
      var barStyle = this.barStyle;

      if (barStyle.backgroundColor) {
        return { backgroundColor: barStyle.backgroundColor };
      }
      return {};
    }
  },
  data: function data() {
    return {
      inputIcon: _type.INPUT_ICON,
      closeIcon: _type.CLOSE_ICON,
      arrowIcon: _type.ARROW_ICON,
      showCancel: false,
      showClose: false,
      value: ''

    };
  },
  created: function created() {
    this.defaultValue && (this.value = this.defaultValue);
    if (this.disabled) {
      this.showCancel = false;
      this.showClose = false;
    }
  },

  methods: {
    onBlur: function onBlur() {
      var self = this;
      setTimeout(function () {
        self.showCancel = false;
        self.detectShowClose();
        self.$emit('wxcSearchbarInputOnBlur', { value: self.value });
      }, 10);
    },
    autoBlur: function autoBlur() {
      this.$refs['search-input'].blur();
    },
    onFocus: function onFocus() {
      if (this.isDisabled) {
        return;
      }
      this.showCancel = true;
      this.detectShowClose();
      this.$emit('wxcSearchbarInputOnFocus', { value: this.value });
    },
    closeClicked: function closeClicked() {
      this.value = '';
      this.showCancel && (this.showCancel = false);
      this.showClose && (this.showClose = false);
      this.$emit('wxcSearchbarCloseClicked', { value: this.value });
      this.$emit('wxcSearchbarInputOnInput', { value: this.value });
    },
    onInput: function onInput(e) {
      this.value = e.value;
      this.showCancel = true;
      this.detectShowClose();
      this.$emit('wxcSearchbarInputOnInput', { value: this.value });
    },
    onSubmit: function onSubmit(e) {
      this.onBlur();
      this.value = e.value;
      this.showCancel = true;
      this.detectShowClose();
      this.$emit('wxcSearchbarInputReturned', { value: this.value });
    },
    cancelClicked: function cancelClicked() {
      this.showCancel && (this.showCancel = false);
      this.showClose && (this.showClose = false);
      this.$emit('wxcSearchbarCancelClicked', { value: this.value });
    },
    detectShowClose: function detectShowClose() {
      this.showClose = this.value.length > 0 && this.showCancel;
    },
    depClicked: function depClicked() {
      this.$emit('wxcSearchbarDepChooseClicked', {});
    },
    inputDisabledClicked: function inputDisabledClicked() {
      this.$emit('wxcSearchbarInputDisabledClicked', {});
    },
    setValue: function setValue(value) {
      this.value = value;
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
 * Created by Tw93 on 2016/10/31.
 */

var INPUT_ICON = exports.INPUT_ICON = "https://gw.alicdn.com/tfs/TB1FZB.pwMPMeJjy1XdXXasrXXa-30-30.png";
var CLOSE_ICON = exports.CLOSE_ICON = "https://gw.alicdn.com/tfs/TB1sZB.pwMPMeJjy1XdXXasrXXa-24-24.png";
var ARROW_ICON = exports.ARROW_ICON = "https://gw.alicdn.com/tfs/TB1vZB.pwMPMeJjy1XdXXasrXXa-24-24.png";

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.mod === 'default') ? _c('div', {
    class: ['wxc-search-bar', 'wxc-search-bar-' + _vm.theme],
    style: _vm.barStyle
  }, [_c('input', {
    ref: "search-input",
    class: ['search-bar-input', 'search-bar-input-' + _vm.theme],
    style: {
      width: _vm.needShowCancel ? '624px' : '710px'
    },
    attrs: {
      "returnKeyType": _vm.returnKeyType,
      "autofocus": _vm.autofocus,
      "disabled": _vm.disabled,
      "value": _vm.value,
      "type": _vm.inputType,
      "placeholder": _vm.placeholder
    },
    on: {
      "blur": _vm.onBlur,
      "focus": _vm.onFocus,
      "input": _vm.onInput,
      "return": _vm.onSubmit
    }
  }), (_vm.disabled) ? _c('div', {
    staticClass: ["disabled-input"],
    on: {
      "click": _vm.inputDisabledClicked
    }
  }) : _vm._e(), _c('image', {
    staticClass: ["search-bar-icon"],
    attrs: {
      "ariaHidden": true,
      "src": _vm.inputIcon
    }
  }), (_vm.showClose) ? _c('image', {
    staticClass: ["search-bar-close"],
    attrs: {
      "ariaHidden": true,
      "src": _vm.closeIcon
    },
    on: {
      "click": _vm.closeClicked
    }
  }) : _vm._e(), (_vm.needShowCancel) ? _c('text', {
    class: ['search-bar-button', 'search-bar-button-' + _vm.theme],
    style: _vm.buttonStyle,
    on: {
      "click": _vm.cancelClicked
    }
  }, [_vm._v(_vm._s(_vm.cancelLabel))]) : _vm._e()]) : _vm._e(), (_vm.mod === 'hasDep') ? _c('div', {
    class: ['wxc-search-bar', 'wxc-search-bar-' + _vm.theme],
    style: _vm.barStyle
  }, [_c('input', {
    class: ['search-bar-input', 'input-has-dep', 'search-bar-input-' + _vm.theme],
    attrs: {
      "disabled": _vm.disabled,
      "autofocus": _vm.autofocus,
      "returnKeyType": _vm.returnKeyType,
      "value": _vm.value,
      "type": _vm.inputType,
      "placeholder": _vm.placeholder
    },
    on: {
      "blur": _vm.onBlur,
      "focus": _vm.onFocus,
      "input": _vm.onInput,
      "return": _vm.onSubmit
    }
  }), (_vm.disabled) ? _c('div', {
    staticClass: ["disabled-input", "has-dep-disabled"],
    on: {
      "click": _vm.inputDisabledClicked
    }
  }) : _vm._e(), _c('div', {
    class: ['bar-dep', '.bar-dep-' + _vm.theme],
    on: {
      "click": _vm.depClicked
    }
  }, [_c('text', {
    staticClass: ["dep-text"]
  }, [_vm._v(_vm._s(_vm.depName))]), _c('image', {
    staticClass: ["dep-arrow"],
    attrs: {
      "src": _vm.arrowIcon,
      "ariaHidden": true
    }
  })]), _c('image', {
    staticClass: ["search-bar-icon", "icon-has-dep"],
    attrs: {
      "ariaHidden": true,
      "src": _vm.inputIcon
    }
  })]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(120);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(121)
)

/* script */
__vue_exports__ = __webpack_require__(122)

/* template */
var __vue_template__ = __webpack_require__(124)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\MINI-WEB\\node_modules\\weex-ui\\packages\\wxc-result\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-483ae578"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports = {
  "wrap": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0
  },
  "wxc-result": {
    "width": "750",
    "flex": 1,
    "alignItems": "center",
    "backgroundColor": "#f2f3f4"
  },
  "result-image": {
    "width": "320",
    "height": "320"
  },
  "result-content": {
    "marginTop": "36",
    "alignItems": "center"
  },
  "content-text": {
    "fontSize": "30",
    "color": "#A5A5A5",
    "height": "42",
    "lineHeight": "42",
    "textAlign": "center"
  },
  "content-desc": {
    "marginTop": "10"
  },
  "result-button": {
    "marginTop": "60",
    "borderWidth": "1",
    "borderColor": "#979797",
    "backgroundColor": "#FFFFFF",
    "borderRadius": "6",
    "width": "240",
    "height": "72",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "button-text": {
    "color": "#666666",
    "fontSize": "30"
  }
}

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _type = __webpack_require__(123);

var _type2 = _interopRequireDefault(_type);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    type: {
      type: String,
      default: 'errorPage'
    },
    show: {
      type: Boolean,
      default: true
    },
    wrapStyle: Object,
    paddingTop: {
      type: [Number, String],
      default: 232
    },
    customSet: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  computed: {
    resultType: function resultType() {
      var type = this.type,
          customSet = this.customSet;

      var allTypes = _utils2.default.isEmptyObject(customSet) ? _type2.default : _utils2.default.mergeDeep(_type2.default, customSet);
      var types = allTypes['errorPage'];
      if (Object.keys(allTypes).indexOf(type) > -1) {
        types = allTypes[type];
      }
      return types;
    },
    setPaddingTop: function setPaddingTop() {
      var paddingTop = this.paddingTop;
      return paddingTop + 'px';
    }
  },
  methods: {
    handleTouchEnd: function handleTouchEnd(e) {
      // web上面有点击穿透问题
      var platform = weex.config.env.platform;

      platform === 'Web' && e.preventDefault && e.preventDefault();
    },
    onClick: function onClick() {
      var type = this.type;
      this.$emit('wxcResultButtonClicked', { type: type });
    }
  }
};

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
 * Created by Tw93 on 2016/11/4.
 */

exports.default = {
  errorPage: {
    pic: 'https://img.alicdn.com/tfs/TB17blphfDH8KJjy1XcXXcpdXXa-320-320.png',
    content: '抱歉出错了，我们正在全力解决中',
    button: '再试一次',
    title: '出错啦'
  },
  noGoods: {
    pic: 'https://img.alicdn.com/tfs/TB1mPWEeOqAXuNjy1XdXXaYcVXa-320-320.png',
    content: '主人，这里什么都没有找到',
    button: '再试一次',
    title: '暂无商品'
  },
  noNetwork: {
    pic: 'https://img.alicdn.com/tfs/TB1jkA5g9_I8KJjy0FoXXaFnVXa-320-320.png',
    content: '哎呀，没有网络了......',
    button: '刷新一下',
    title: '无网络'
  },
  errorLocation: {
    pic: 'https://img.alicdn.com/tfs/TB1zXXahhrI8KJjy0FpXXb5hVXa-320-320.png',
    content: '哎呀，定位失败了......',
    button: '刷新一下',
    title: '定位失败'
  }
};

/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.show) ? _c('div', {
    staticClass: ["wrap"],
    style: _vm.wrapStyle
  }, [_c('div', {
    staticClass: ["wxc-result"],
    style: {
      paddingTop: _vm.setPaddingTop
    }
  }, [_c('image', {
    staticClass: ["result-image"],
    attrs: {
      "ariaHidden": true,
      "src": _vm.resultType.pic
    }
  }), (_vm.resultType.content) ? _c('div', {
    staticClass: ["result-content"]
  }, [_c('text', {
    staticClass: ["content-text"]
  }, [_vm._v(_vm._s(_vm.resultType.content))]), (_vm.resultType.desc) ? _c('text', {
    staticClass: ["content-text", "content-desc"]
  }, [_vm._v(_vm._s(_vm.resultType.desc))]) : _vm._e()]) : _vm._e(), (_vm.resultType.button) ? _c('div', {
    staticClass: ["result-button"],
    on: {
      "touchend": _vm.handleTouchEnd,
      "click": _vm.onClick
    }
  }, [_c('text', {
    staticClass: ["button-text"]
  }, [_vm._v(_vm._s(_vm.resultType.button))])]) : _vm._e()])]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(126);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(127)
)

/* script */
__vue_exports__ = __webpack_require__(128)

/* template */
var __vue_template__ = __webpack_require__(130)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\MINI-WEB\\node_modules\\weex-ui\\packages\\wxc-indexlist\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-53ddb0f6"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = {
  "index-list": {
    "width": "750",
    "height": "1334"
  },
  "index-list-title": {
    "borderBottomWidth": "1",
    "borderBottomColor": "rgba(32,35,37,0.15)",
    "backgroundColor": "#FBFBFB",
    "fontSize": "24",
    "color": "#666666",
    "height": "48",
    "lineHeight": "48",
    "paddingLeft": "24",
    "width": "750"
  },
  "group-title": {
    "borderBottomWidth": 0,
    "paddingBottom": 0,
    "height": "60",
    "paddingTop": "24"
  },
  "index-list-item": {
    "width": "750",
    "flexDirection": "row",
    "alignItems": "center",
    "borderBottomWidth": "1",
    "borderBottomColor": "#e0e0e0",
    "height": "92",
    "paddingLeft": "24",
    "paddingRight": "24",
    "backgroundColor": "#FFFFFF"
  },
  "iphone-x": {
    "height": "68"
  },
  "title": {
    "fontSize": "32",
    "color": "#3D3D3D"
  },
  "desc": {
    "fontSize": "24",
    "color": "#A5A5A5",
    "marginLeft": "30"
  },
  "index-list-nav": {
    "position": "absolute",
    "top": 0,
    "right": 0,
    "marginBottom": "60",
    "marginTop": "60",
    "paddingBottom": "20",
    "paddingTop": "20",
    "width": "70"
  },
  "list-nav-key": {
    "textAlign": "center",
    "fontSize": "24",
    "height": "40",
    "color": "#666666"
  },
  "index-list-pop": {
    "position": "fixed",
    "top": "550",
    "left": "316",
    "width": "120",
    "height": "120",
    "textAlign": "center",
    "justifyContent": "center",
    "backgroundColor": "rgba(32,35,37,0.6)",
    "borderBottomLeftRadius": "60",
    "borderBottomRightRadius": "60",
    "borderTopLeftRadius": "60",
    "borderTopRightRadius": "60",
    "paddingLeft": 0,
    "paddingRight": 0,
    "paddingTop": "35",
    "paddingBottom": "35",
    "color": "#ffffff"
  },
  "list-pop-text": {
    "fontSize": "40",
    "textAlign": "center",
    "color": "#ffffff"
  },
  "group": {
    "paddingBottom": "18",
    "paddingRight": "70",
    "backgroundColor": "#FBFBFB"
  },
  "group-list": {
    "flexDirection": "row",
    "marginLeft": "18",
    "marginTop": "18"
  },
  "group-item": {
    "width": "146",
    "height": "64",
    "borderWidth": "1",
    "borderColor": "#e0e0e0",
    "marginRight": "18",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "backgroundColor": "#ffffff"
  },
  "item-name": {
    "fontSize": "24",
    "lineHeight": "26",
    "color": "#333333"
  },
  "item-desc": {
    "marginTop": "2",
    "color": "#999999",
    "fontSize": "20",
    "textAlign": "center"
  },
  "location-icon": {
    "width": "32",
    "height": "32",
    "marginRight": "8"
  }
}

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _format = __webpack_require__(129);

var Format = _interopRequireWildcard(_format);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var dom = weex.requireModule('dom');
exports.default = {
  props: {
    height: {
      type: [Number, String],
      default: _utils2.default.env.getPageHeight()
    },
    normalList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    onlyShowList: {
      type: Boolean,
      default: false
    },
    showIndex: {
      type: Boolean,
      default: true
    },
    hotListConfig: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    // 城市选择子组件 特殊情况支持
    cityLocationConfig: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    headerStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    navStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    navTextStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    popStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    popTextStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    itemStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    itemTextStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    itemDescStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    groupWrapStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    groupItemStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    groupItemTextStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    groupItemDescStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  created: function created() {
    this.isIPhoneX = _utils2.default.env.isIPhoneX();
  },

  computed: {
    formatList: function formatList() {
      var normalList = this.normalList,
          hotListConfig = this.hotListConfig,
          cityLocationConfig = this.cityLocationConfig;

      return Format.totalList(normalList, hotListConfig, cityLocationConfig);
    }
  },
  data: function data() {
    return {
      popKeyShow: false,
      popKey: '',
      navOffsetY: 0,
      timer: null
    };
  },
  methods: {
    itemClicked: function itemClicked(item) {
      this.$emit('wxcIndexlistItemClicked', {
        item: item
      });
    },
    go2Key: function go2Key(key) {
      var _this = this;

      var keyEl = this.$refs['index-item-title-' + key][0];
      keyEl && dom.scrollToElement(keyEl, {
        offset: 0
      });
      this.popKey = key;
      this.popKeyShow = true;
      this.timer && clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        _this.popKeyShow = false;
      }, 600);
    }
  }
};

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.totalList = totalList;
exports.getSpecialData = getSpecialData;

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 根据26个字母取每一项首字母对数据进行排序,处理数据变换
 * @return {[array]}
 */
function totalList(source, hotListConfig, cityLocationConfig) {
  var LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var res = [];
  LETTERS.split('').forEach(function (letter) {
    var _data = source.filter(function (item) {
      if (item.pinYin) {
        return item.pinYin.slice(0, 1).toLowerCase() === letter.toLowerCase();
      } else if (item.py) {
        return item.py.slice(0, 1).toLowerCase() === letter.toLowerCase();
      } else {
        return false;
      }
    });
    if (_data.length) {
      res.push({
        title: letter,
        data: _data,
        type: 'list'
      });
    }
  });

  // 处理热门数据
  var hotList = getSpecialData(hotListConfig);
  hotList && res.unshift(hotList);

  // 处理特殊定位数据
  var cityLocation = getSpecialData(cityLocationConfig);
  cityLocation && res.unshift(cityLocation);

  return res;
} /**
   * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
   * Created by Tw93 on 17/11/01
   */

function getSpecialData(data) {
  if (data && data.type && data.list && data.list.length > 0) {
    var type = data.type,
        title = data.title,
        list = data.list;

    return {
      title: title,
      type: type,
      data: type === 'group' ? _utils2.default.arrayChunk(list) : list
    };
  } else {
    return null;
  }
}

/***/ }),
/* 130 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('list', {
    staticClass: ["index-list"],
    style: {
      height: _vm.height + 'px'
    }
  }, [_c('cell', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_vm._t("head")], 2), _vm._l((_vm.formatList), function(v, i) {
    return _c('cell', {
      key: i,
      ref: 'index-item-title-' + v.title,
      refInFor: true,
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [(!_vm.onlyShowList) ? _c('text', {
      class: ['index-list-title', v.type && v.type == 'group' && 'group-title'],
      style: _vm.headerStyle
    }, [_vm._v(_vm._s(v.title))]) : _vm._e(), (v.type && v.type === 'group' && !_vm.onlyShowList) ? _c('div', {
      staticClass: ["group"],
      style: _vm.groupWrapStyle
    }, _vm._l((v.data), function(group, index) {
      return _c('div', {
        key: index,
        staticClass: ["group-list"]
      }, _vm._l((group), function(item, i) {
        return _c('div', {
          key: i,
          staticClass: ["group-item"],
          style: _vm.groupItemStyle,
          attrs: {
            "accessible": true,
            "ariaLabel": ((item.name) + "," + (item.desc?item.desc:''))
          },
          on: {
            "click": function($event) {
              _vm.itemClicked(item)
            }
          }
        }, [(item.isLocation) ? _c('image', {
          staticClass: ["location-icon"],
          attrs: {
            "src": "https://gw.alicdn.com/tfs/TB1JUiUPFXXXXXUXXXXXXXXXXXX-32-32.png"
          }
        }) : _vm._e(), _c('div', [_c('text', {
          staticClass: ["item-name"],
          style: _vm.groupItemTextStyle
        }, [_vm._v(_vm._s(item.name))]), (item.desc) ? _c('text', {
          staticClass: ["item-desc"],
          style: _vm.groupItemDescStyle
        }, [_vm._v(_vm._s(item.desc))]) : _vm._e()])])
      }))
    })) : _vm._e(), (v.type === 'list') ? _c('div', _vm._l((v.data), function(item, index) {
      return _c('div', {
        key: index,
        staticClass: ["index-list-item"],
        style: _vm.itemStyle,
        attrs: {
          "accessible": true,
          "ariaLabel": ((item.name) + "," + (item.desc?item.desc:''))
        },
        on: {
          "click": function($event) {
            _vm.itemClicked(item)
          }
        }
      }, [_c('text', {
        staticClass: ["title"],
        style: _vm.itemTextStyle
      }, [_vm._v(_vm._s(item.name))]), _c('text', {
        staticClass: ["desc"],
        style: _vm.itemDescStyle
      }, [_vm._v(_vm._s(item.desc))])])
    })) : _vm._e()])
  }), (_vm.isIPhoneX) ? _c('cell', {
    staticClass: ["iphone-x"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }) : _vm._e()], 2), (_vm.showIndex && !_vm.onlyShowList) ? _c('div', {
    staticClass: ["index-list-nav"],
    style: _vm.navStyle
  }, _vm._l((_vm.formatList), function(item, index) {
    return _c('text', {
      key: index,
      staticClass: ["list-nav-key"],
      style: _vm.navTextStyle,
      attrs: {
        "title": item.title
      },
      on: {
        "click": function($event) {
          _vm.go2Key(item.title)
        }
      }
    }, [_vm._v(_vm._s(item.title))])
  })) : _vm._e(), (_vm.popKeyShow) ? _c('div', {
    staticClass: ["index-list-pop"],
    style: _vm.popStyle
  }, [_c('text', {
    staticClass: ["list-pop-text"],
    style: _vm.popTextStyle
  }, [_vm._v(_vm._s(_vm.popKey))])]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 131 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "city",
    staticClass: ["wxc-city"],
    style: _vm.cityExtendStyle
  }, [_c('wxc-searchbar', _vm._b({
    ref: "wxc-searchbar",
    on: {
      "wxcSearchbarInputOnInput": _vm.onInput,
      "wxcSearchbarInputReturned": _vm.onSubmit,
      "wxcSearchbarCancelClicked": _vm.onCancel
    }
  }, 'wxc-searchbar', _vm.mergeInputConfig, false)), (_vm.showTab) ? _c('wxc-tab', {
    ref: "wxc-tab",
    on: {
      "wxcTabSwitch": _vm.onTabSwitch
    }
  }) : _vm._e(), _c('wxc-indexlist', {
    attrs: {
      "normalList": _vm.normalList,
      "hotListConfig": _vm.hotListConfig,
      "navStyle": {
        top: '24px'
      },
      "height": _vm.listHeight,
      "showIndex": _vm.showIndex,
      "onlyShowList": _vm.onlyShowList,
      "cityLocationConfig": _vm.currentCityLocationConfig
    },
    on: {
      "wxcIndexlistItemClicked": _vm.onItemClick
    }
  }), (_vm.showError) ? _c('wxc-result', {
    attrs: {
      "type": "noGoods",
      "wrapStyle": {
        top: '84px'
      },
      "show": true,
      "customSet": _vm.result
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 132 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["infoEdit"]
  }, [_c('div', {
    staticClass: ["chat-header"]
  }, [_c('text', {
    staticClass: ["left"],
    on: {
      "click": _vm.handleGoBack
    }
  }, [_vm._v("取消")]), _c('text', {
    staticClass: ["name"]
  }, [_vm._v("资料修改")]), _c('text', {
    staticClass: ["right"],
    on: {
      "click": _vm.handleSave
    }
  }, [_vm._v("保存")])]), _c('div', {
    staticClass: ["user-img"]
  }, [_c('image', {
    attrs: {
      "src": _vm.imgDataUrl
    }
  }), _c('input', {
    staticClass: ["upload__input"],
    attrs: {
      "type": "file",
      "id": "upload_file",
      "accept": "image/png,image/gif"
    },
    on: {
      "change": _vm.getFile
    }
  })]), _c('hr'), _c('div', {
    staticClass: ["user-info"]
  }, [_c('div', {
    staticClass: ["base-flex", "cell"]
  }, [_c('text', {
    staticClass: ["base-font-size", "cell-h", "color-white"]
  }, [_vm._v("昵称")]), _c('input', {
    staticClass: ["color-gray"],
    attrs: {
      "type": "text",
      "value": (_vm.name)
    },
    on: {
      "input": function($event) {
        _vm.name = $event.target.attr.value
      }
    }
  }), _c('label', {
    staticClass: ["right-icon"]
  })], 1), _c('div', {
    staticClass: ["base-flex", "cell"],
    on: {
      "click": _vm.openBottomPopup
    }
  }, [_c('text', {
    staticClass: ["base-font-size", "cell-h", "color-white"]
  }, [_vm._v("性别")]), _c('div', {
    staticClass: ["base-flex"]
  }, [_c('text', {
    staticClass: ["color-gray"]
  }, [_vm._v(_vm._s(_vm.sex))])]), _c('label', {
    staticClass: ["right-icon"]
  })], 1), _c('div', {
    staticClass: ["base-flex", "cell"],
    on: {
      "click": _vm.showListCity
    }
  }, [_c('text', {
    staticClass: ["base-font-size", "cell-h", "color-white"]
  }, [_vm._v("坐标")]), _c('div', {
    staticClass: ["btn"]
  }, [_c('text', {
    staticClass: ["btn-txt", "color-gray"]
  }, [_vm._v(_vm._s(_vm.currentCity.cityName || '选择城市'))])]), _c('label', {
    staticClass: ["right-icon"]
  })], 1), _c('div', {
    staticClass: ["base-flex", "cell"],
    on: {
      "click": _vm.showCalendar
    }
  }, [_c('text', {
    staticClass: ["base-font-size", "cell-h", "color-white"]
  }, [_vm._v("生日")]), _c('text', {
    staticClass: ["base-font-size", "color-gray"],
    on: {
      "click": _vm.showCalendar
    }
  }, [_vm._v(_vm._s(_vm.selectedDate[0]))]), _c('label', {
    staticClass: ["right-icon"]
  })], 1), _c('div', {
    staticClass: ["base-flex", "cell"],
    style: {
      'align-items': 'flex-start'
    }
  }, [_c('text', {
    staticClass: ["base-font-size", "cell-h", "color-white"]
  }, [_vm._v("签名")]), _c('textarea', {
    staticClass: ["color-gray"],
    attrs: {
      "rows": "1",
      "value": (_vm.signature)
    },
    on: {
      "input": function($event) {
        _vm.signature = $event.target.attr.value
      }
    }
  }), _c('label', {
    staticClass: ["right-icon"]
  })], 1)]), _c('wxc-popup', {
    attrs: {
      "popupColor": "gray",
      "show": _vm.isBottomShow,
      "pos": "bottom",
      "height": "300"
    },
    on: {
      "wxcPopupOverlayClicked": _vm.popupOverlayBottomClick
    }
  }, [_c('div', {
    staticClass: ["sex-content"]
  }, [_c('wxc-button', {
    staticClass: ["btn-style"],
    attrs: {
      "text": "男",
      "type": "white"
    },
    on: {
      "wxcButtonClicked": function($event) {
        _vm.handleSexChange('男')
      }
    }
  }), _c('wxc-button', {
    staticClass: ["btn-style"],
    attrs: {
      "text": "女",
      "type": "white"
    },
    on: {
      "wxcButtonClicked": function($event) {
        _vm.handleSexChange('女')
      }
    }
  }), _c('wxc-button', {
    staticClass: ["btn-style"],
    attrs: {
      "text": "取消",
      "type": "white"
    },
    on: {
      "wxcButtonClicked": function($event) {
        _vm.handleSexChange()
      }
    }
  })], 1)]), _c('wxc-city', {
    ref: "wxcCity",
    attrs: {
      "animationType": _vm.animationType,
      "currentLocation": _vm.location,
      "cityStyleType": _vm.cityStyleType
    },
    on: {
      "wxcCityItemSelected": _vm.citySelect,
      "wxcCityOnInput": _vm.onInput
    }
  }), _c('wxc-page-calendar', {
    ref: "wxcPageCalendar",
    attrs: {
      "dateRange": _vm.dateRange,
      "animationType": _vm.animationType,
      "selectedDate": _vm.selectedDate,
      "selectedNote": _vm.selectedNote,
      "isRange": _vm.isRange,
      "minibarCfg": _vm.minibarCfg,
      "descList": _vm.descList
    },
    on: {
      "wxcPageCalendarBackClicked": _vm.wxcPageCalendarBackClicked,
      "wxcPageCalendarDateSelected": _vm.wxcPageCalendarDateSelected
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(134)
)

/* script */
__vue_exports__ = __webpack_require__(135)

/* template */
var __vue_template__ = __webpack_require__(143)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\MINI-WEB\\src\\components\\msglist.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-10ce4d14"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 134 */
/***/ (function(module, exports) {

module.exports = {
  "like-notice": {
    "paddingTop": "25",
    "paddingRight": "25",
    "paddingBottom": "25",
    "paddingLeft": "25",
    "background": "url(\"/src/asset/img/like-bg.png\") no-repeat",
    "backgroundSize": "cover",
    "borderRadius": "20",
    "width": 80,
    "minHeight": 1.7,
    "marginTop": 0.6,
    "justifyContent": "center"
  },
  "like-time": {
    "textAlign": "center",
    "color": "#FFFFFF",
    "marginTop": 0.7,
    "fontSize": 0.35,
    "opacity": 0.8
  },
  "super-like-notice": {
    "paddingTop": "25",
    "paddingRight": "25",
    "paddingBottom": "25",
    "paddingLeft": "25",
    "backgroundColor": "#f2f3f4",
    "borderRadius": "20",
    "width": 80,
    "minHeight": 3.8,
    "background": "url(/src/asset/img/superlike.png) no-repeat",
    "backgroundSize": "cover"
  },
  "msg-list-content": {
    "justifyContent": "center"
  },
  "msg-name": {
    "left": 2.5,
    "top": 0.2,
    "fontSize": 0.5
  },
  "msg-content": {
    "left": 2.5,
    "top": 1.1,
    "fontSize": 0.4,
    "opacity": 0.8,
    "maxWidth": 6,
    "whiteSpace": "nowrap",
    "overflow": "hidden",
    "textOverflow": "ellipsis"
  },
  "msg-time": {
    "top": 0.2,
    "right": 0.3,
    "fontSize": 0.4,
    "opacity": 0.8
  },
  "msg-num": {
    "background": "url(/src/asset/img/msg-num.png) no-repeat",
    "backgroundSize": "cover",
    "width": 0.7,
    "height": 0.7,
    "borderRadius": 50,
    "textAlign": "center",
    "fontSize": 0.35,
    "top": 1,
    "right": 0.3,
    "paddingTop": 0.15
  },
  "item-container": {
    "width": "750",
    "backgroundColor": "#000000"
  },
  "border-cell": {
    "backgroundColor": "#000000",
    "width": "750",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "cell": {
    "marginBottom": 0
  },
  "content": {
    "width": "750",
    "height": 5,
    "alignItems": "center",
    "backgroundColor": "#000000"
  },
  "content-super": {
    "width": "750",
    "height": 6,
    "alignItems": "center",
    "backgroundColor": "#000000"
  }
}

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindEnv = __webpack_require__(16);

var _bindEnv2 = _interopRequireDefault(_bindEnv);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _wxcPanItem = __webpack_require__(17);

var _wxcPanItem2 = _interopRequireDefault(_wxcPanItem);

var _wxcTabPage = __webpack_require__(18);

var _wxcTabPage2 = _interopRequireDefault(_wxcTabPage);

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

var _config = __webpack_require__(19);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  components: { WxcTabPage: _wxcTabPage2.default, WxcPanItem: _wxcPanItem2.default },
  data: function data() {
    return {
      tabTitles: _config2.default.tabTitles,
      tabStyles: _config2.default.tabStyles,
      msgnum: 5,
      tabList: [],
      demoList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      tabPageHeight: 1334
    };
  },
  created: function created() {
    this.tabPageHeight = _utils2.default.env.getPageHeight();
    this.tabList = [].concat(_toConsumableArray(Array(this.tabTitles.length).keys())).map(function (i) {
      return [];
    });
    this.$set(this.tabList, 0, this.demoList);
  },
  mounted: function mounted() {
    _index2.default.getConversationList({});
  },

  methods: {
    handleClick: function handleClick() {
      this.$router.push({
        name: 'chat',
        params: {
          user: '357'
        }
      });
    },
    wxcTabPageCurrentTabSelected: function wxcTabPageCurrentTabSelected(e) {
      var _this = this;

      var self = this;
      var index = e.page;
      /* Unloaded tab analog data request */
      if (!_utils2.default.isNonEmptyArray(self.tabList[index])) {
        setTimeout(function () {
          _this.$set(self.tabList, index, self.demoList);
        }, 100);
      }
    },
    wxcPanItemPan: function wxcPanItemPan(e) {
      if (_bindEnv2.default.supportsEBForAndroid()) {
        this.$refs['wxc-tab-page'].bindExp(e.element);
      }
    }
  }
};

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(137)

/* template */
var __vue_template__ = __webpack_require__(138)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\MINI-WEB\\node_modules\\weex-ui\\packages\\wxc-pan-item\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _indexWeex = __webpack_require__(4);

var _indexWeex2 = _interopRequireDefault(_indexWeex);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _bindEnv = __webpack_require__(3);

var _bindEnv2 = _interopRequireDefault(_bindEnv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    url: {
      type: String,
      default: ''
    },
    needSlider: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      isPanning: false,
      appearMap: [],
      supportAndroid: _bindEnv2.default.supportsEBForAndroid()
    };
  },
  mounted: function mounted() {
    var _this = this;

    setTimeout(function () {
      if (_this.supportAndroid && _this.needSlider) {
        var element = _this.$refs['wxc-pan-item'];
        _indexWeex2.default.prepare && _indexWeex2.default.prepare({
          anchor: element.ref,
          eventType: 'pan'
        });
      }
    }, 300);
  },

  methods: {
    itemClicked: function itemClicked() {
      if (this.isPanning) {
        return;
      }
      this.url && _utils2.default.goToH5Page(this.url, true);
      this.$emit('wxcPanItemClicked', { extId: this.extId });
    },
    dispatchPan: function dispatchPan(e) {
      var _this2 = this;

      if (this.supportAndroid && this.needSlider) {
        if (e.state === 'start') {
          this.isPanning = true;
          var element = this.$refs['wxc-pan-item'];
          element && this.$emit('wxcPanItemPan', { element: element });
        } else if (e.state === 'end') {
          setTimeout(function () {
            _this2.isPanning = false;
          }, 50);
        }
      }
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 138 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.supportAndroid) ? _c('div', {
    ref: "wxc-pan-item",
    on: {
      "horizontalpan": _vm.dispatchPan,
      "appear": _vm.onItemAppear,
      "disappear": _vm.onItemDisAppear,
      "click": _vm.itemClicked
    }
  }, [_vm._t("default")], 2) : _c('div', {
    ref: "wxc-pan-item",
    on: {
      "click": _vm.itemClicked
    }
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(140)
)

/* script */
__vue_exports__ = __webpack_require__(141)

/* template */
var __vue_template__ = __webpack_require__(142)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\MINI-WEB\\node_modules\\weex-ui\\packages\\wxc-tab-page\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-396e3fa4"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 140 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-tab-page": {
    "width": "750"
  },
  "tab-title-list": {
    "flexDirection": "row"
  },
  "title-item": {
    "justifyContent": "center",
    "alignItems": "center",
    "borderBottomStyle": "solid"
  },
  "border-bottom": {
    "position": "absolute",
    "bottom": 0
  },
  "tab-page-wrap": {
    "width": "750",
    "overflow": "hidden"
  },
  "tab-container": {
    "flex": 1,
    "flexDirection": "row",
    "position": "absolute"
  },
  "tab-text": {
    "lines": 1,
    "textOverflow": "ellipsis"
  },
  "msg-num": {
    "background": "url(/src/asset/img/msg-num.png)",
    "backgroundSize": "cover",
    "position": "absolute",
    "width": 0.7,
    "height": 0.7,
    "right": 1.4,
    "top": 0.2,
    "textAlign": "center",
    "fontSize": 0.35,
    "paddingTop": 0.15,
    "color": "#FFFFFF"
  },
  "back": {
    "background": "url(/src/asset/img/backicon.png)",
    "backgroundSize": "cover",
    "width": 0.3,
    "height": 0.55,
    "left": 0.4,
    "position": "absolute",
    "top": 0.5,
    "zIndex": 100
  }
}

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _bindEnv = __webpack_require__(3);

var _bindEnv2 = _interopRequireDefault(_bindEnv);

var _indexWeex = __webpack_require__(4);

var _indexWeex2 = _interopRequireDefault(_indexWeex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var dom = weex.requireModule('dom');
var animation = weex.requireModule('animation');
var swipeBack = weex.requireModule('swipeBack');

exports.default = {
  props: {
    msgnum: {
      type: Number
    },
    tabTitles: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    panDist: {
      type: Number,
      default: 200
    },
    spmC: {
      type: [String, Number],
      default: ''
    },
    titleUseSlot: {
      type: Boolean,
      default: false
    },
    tabStyles: {
      type: Object,
      default: function _default() {
        return {
          bgColor: '#FFFFFF',
          titleColor: '#666666',
          activeTitleColor: '#3D3D3D',
          activeBgColor: '#FFFFFF',
          isActiveTitleBold: true,
          iconWidth: 70,
          iconHeight: 70,
          width: 160,
          height: 120,
          fontSize: 24,
          hasActiveBottom: true,
          activeBottomColor: '#FFC900',
          activeBottomWidth: 120,
          activeBottomHeight: 6,
          textPaddingLeft: 10,
          textPaddingRight: 10,
          leftOffset: 0
        };
      }
    },
    titleType: {
      type: String,
      default: 'icon'
    },
    tabPageHeight: {
      type: [String, Number],
      default: 1334
    },
    needSlider: {
      type: Boolean,
      default: true
    },
    isTabView: {
      type: Boolean,
      default: true
    },
    duration: {
      type: [Number, String],
      default: 300
    },
    timingFunction: {
      type: String,
      default: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    },
    wrapBgColor: {
      type: String,
      default: '#f2f3f4'
    }
  },
  data: function data() {
    return {
      currentPage: 0,
      gesToken: 0,
      isMoving: false,
      startTime: 0,
      deltaX: 0,
      translateX: 0
    };
  },
  created: function created() {
    var titleType = this.titleType,
        tabStyles = this.tabStyles;

    if (titleType === 'iconFont' && tabStyles.iconFontUrl) {
      dom.addRule('fontFace', {
        'fontFamily': "wxcIconFont",
        'src': 'url(' + tabStyles.iconFontUrl + ')'
      });
    }
  },
  mounted: function mounted() {
    if (swipeBack && swipeBack.forbidSwipeBack) {
      swipeBack.forbidSwipeBack(true);
    }
    if (_bindEnv2.default.supportsEBForIos() && this.isTabView && this.needSlider) {
      var tabPageEl = this.$refs['tab-page-wrap'];
      _indexWeex2.default.prepare && _indexWeex2.default.prepare({
        anchor: tabPageEl.ref,
        eventType: 'pan'
      });
    }
  },

  methods: {
    next: function next() {
      var page = this.currentPage;
      if (page < this.tabTitles.length - 1) {
        page++;
      }
      this.setPage(page);
    },
    prev: function prev() {
      var page = this.currentPage;
      if (page > 0) {
        page--;
      }
      this.setPage(page);
    },
    startHandler: function startHandler() {
      if (_bindEnv2.default.supportsEBForIos() && this.isTabView && this.needSlider) {
        this.bindExp(this.$refs['tab-page-wrap']);
      }
    },
    bindExp: function bindExp(element) {
      var _this = this;

      if (element && element.ref) {

        if (this.isMoving && this.gesToken !== 0) {
          _indexWeex2.default.unbind({
            eventType: 'pan',
            token: this.gesToken
          });
          this.gesToken = 0;
          return;
        }

        var tabElement = this.$refs['tab-container'];
        var currentPage = this.currentPage,
            panDist = this.panDist;

        var dist = currentPage * 750;

        // x-dist
        var props = [{
          element: tabElement.ref,
          property: 'transform.translateX',
          expression: 'x-' + dist
        }];

        var gesTokenObj = _indexWeex2.default.bind({
          anchor: element.ref,
          eventType: 'pan',
          props: props
        }, function (e) {
          var deltaX = e.deltaX,
              state = e.state;

          if (state === 'end') {
            if (deltaX < -panDist) {
              _this.next();
            } else if (deltaX > panDist) {
              _this.prev();
            } else {
              _this.setPage(currentPage);
            }
          }
        });
        this.gesToken = gesTokenObj.token;
      }
    },
    setPage: function setPage(page) {
      var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var animated = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (!this.isTabView) {
        this.jumpOut(url);
        return;
      }
      if (this.isMoving === true) {
        return;
      }
      this.isMoving = true;
      var previousPage = this.currentPage;
      var currentTabEl = this.$refs['wxc-tab-title-' + page][0];
      var width = this.tabStyles.width;

      var appearNum = parseInt(750 / width);
      var tabsNum = this.tabTitles.length;
      var offset = page > appearNum ? -(750 - width) / 2 : -width * 2;

      if (appearNum < tabsNum) {
        (previousPage > appearNum || page > 1) && dom.scrollToElement(currentTabEl, {
          offset: offset, animated: animated
        });

        page <= 1 && previousPage > page && dom.scrollToElement(currentTabEl, {
          offset: -width * page,
          animated: animated
        });
      }

      this.isMoving = false;
      this.currentPage = page;
      this._animateTransformX(page, animated);
      this.$emit('wxcTabPageCurrentTabSelected', { page: page });
    },
    jumpOut: function jumpOut(url) {
      url && _utils2.default.goToH5Page(url);
    },
    _animateTransformX: function _animateTransformX(page, animated) {
      var duration = this.duration,
          timingFunction = this.timingFunction;

      var computedDur = animated ? duration : 0.00001;
      var containerEl = this.$refs['tab-container'];
      var dist = page * 750;
      animation.transition(containerEl, {
        styles: {
          transform: 'translateX(' + -dist + 'px)'
        },
        duration: computedDur,
        timingFunction: timingFunction,
        delay: 0
      }, function () {});
    },
    backpage: function backpage() {
      this.$router.go(-1);
    }
  }
};

/***/ }),
/* 142 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wxc-tab-page"],
    style: {
      height: (_vm.tabPageHeight) + 'px',
      backgroundColor: _vm.wrapBgColor
    }
  }, [_c('scroller', {
    ref: "tab-title-list",
    staticClass: ["tab-title-list"],
    style: {
      backgroundColor: _vm.tabStyles.bgColor,
      height: (_vm.tabStyles.height) + 'px',
      paddingLeft: _vm.tabStyles.leftOffset + 'px'
    },
    attrs: {
      "showScrollbar": false,
      "scrollDirection": "horizontal",
      "dataSpm": _vm.spmC
    }
  }, [_c('button', {
    staticClass: ["back"],
    on: {
      "click": _vm.backpage
    }
  }), _vm._l((_vm.tabTitles), function(v, index) {
    return _c('div', {
      key: index,
      ref: 'wxc-tab-title-' + index,
      refInFor: true,
      staticClass: ["title-item"],
      style: {
        width: _vm.tabStyles.width + 'px',
        height: _vm.tabStyles.height + 'px',
        backgroundColor: _vm.currentPage === index ? _vm.tabStyles.activeBgColor : _vm.tabStyles.bgColor
      },
      attrs: {
        "accessible": true,
        "ariaLabel": ("" + (v.title?v.title:'标签'+index))
      },
      on: {
        "click": function($event) {
          _vm.setPage(index, v.url)
        }
      }
    }, [(_vm.titleType === 'icon' && !_vm.titleUseSlot) ? _c('image', {
      style: {
        width: _vm.tabStyles.iconWidth + 'px',
        height: _vm.tabStyles.iconHeight + 'px'
      },
      attrs: {
        "src": _vm.currentPage === index ? v.activeIcon : v.icon
      }
    }) : _vm._e(), (_vm.titleType === 'iconFont' && v.codePoint && !_vm.titleUseSlot) ? _c('text', {
      staticClass: ["icon-font"],
      style: {
        fontFamily: 'wxcIconFont',
        fontSize: _vm.tabStyles.iconFontSize + 'px',
        color: _vm.currentPage === index ? _vm.tabStyles.activeIconFontColor : _vm.tabStyles.iconFontColor
      }
    }, [_vm._v(_vm._s(v.codePoint))]) : _vm._e(), (!_vm.titleUseSlot) ? _c('text', {
      staticClass: ["tab-text"],
      style: {
        fontSize: _vm.tabStyles.fontSize + 'px',
        fontWeight: (_vm.currentPage === index && _vm.tabStyles.isActiveTitleBold) ? 'bold' : 'normal',
        color: _vm.currentPage === index ? _vm.tabStyles.activeTitleColor : _vm.tabStyles.titleColor,
        paddingLeft: _vm.tabStyles.textPaddingLeft + 'px',
        paddingRight: _vm.tabStyles.textPaddingRight + 'px'
      }
    }, [_vm._v(_vm._s(v.title))]) : _vm._e(), (_vm.tabStyles.hasActiveBottom && !_vm.titleUseSlot) ? _c('div', {
      staticClass: ["border-bottom"],
      style: {
        width: _vm.tabStyles.activeBottomWidth + 'px',
        left: (_vm.tabStyles.width - _vm.tabStyles.activeBottomWidth) / 2 + 'px',
        height: _vm.tabStyles.activeBottomHeight + 'px',
        backgroundColor: _vm.currentPage === index ? _vm.tabStyles.activeBottomColor : 'transparent'
      }
    }) : _vm._e(), (_vm.titleUseSlot) ? _vm._t(("tab-title-" + index)) : _vm._e()], 2)
  })], 2), _c('div', {
    ref: "tab-page-wrap",
    staticClass: ["tab-page-wrap"],
    style: {
      height: (_vm.tabPageHeight - _vm.tabStyles.height) + 'px'
    },
    on: {
      "horizontalpan": _vm.startHandler
    }
  }, [_c('div', {
    ref: "tab-container",
    staticClass: ["tab-container"]
  }, [_vm._t("default")], 2)])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 143 */
/***/ (function(module, exports) {

module.exports={render:function(){},staticRenderFns:[]}

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(145)
)

/* script */
__vue_exports__ = __webpack_require__(146)

/* template */
var __vue_template__ = __webpack_require__(147)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\MINI-WEB\\src\\components\\shoot.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0697dc94"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 145 */
/***/ (function(module, exports) {

module.exports = {
  "chat-header": {
    "width": 100,
    "height": 7,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "backgroundColor": "#161824"
  },
  "video_module": {
    "position": "relative",
    "height": 93
  },
  "shoot": {
    "flexGrow": 1,
    "position": "relative",
    "backgroundColor": "#000000",
    "height": 100
  },
  "video": {
    "width": 100,
    "height": 100,
    "backgroundColor": "#000000",
    "objectFit": "fill"
  },
  "footer": {
    "width": 100,
    "position": "absolute",
    "bottom": 1
  },
  "shoot-controller": {
    "marginTop": 0,
    "marginBottom": 0
  },
  "uploadFile": {
    "position": "relative"
  },
  "btn-group": {
    "flexDirection": "row"
  }
}

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            videoDataUrl: '',
            file: {},
            mediaRecorder: {},
            chunks: [],
            position: [],
            blob: {},
            isShooting: false
        };
    },
    mounted: function mounted() {
        var _this = this;

        var img = new Image();
        img.src = '../asset/img/77ea2be15f2b479b2980799a61ee21ec.png';
        var video = document.getElementById('video');
        var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d');
        var tracker = new tracking.ObjectTracker('face');
        tracker.setInitialScale(4);
        tracker.setStepSize(2);
        tracker.setEdgesDensity(0.1);
        tracking.track('#video', tracker, { camera: true });
        tracker.on('track', function (event) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            event.data.forEach(function (rect) {
                context.drawImage(img, rect.x, rect.y - rect.height, rect.width, rect.height);
            });
        });
        navigator.getUserMedia({
            audio: true,
            video: true
        }, function (stream) {
            _this.mediaRecorder = new MediaRecorder();
            _this.mediaRecorder.ondataavailable = function (e) {
                _this.chunks.push(e.data);
            };
            _this.mediaRecorder.onstop = function (e) {
                blob = new Blob(_this.chunks, { 'type': 'audio/ogg; codecs=opus' });
                var formdata = new FormData();
                formdata.append('file', blob);
            };
        });
    },

    methods: {
        handleClick: function handleClick() {
            var _this2 = this;

            var form = new FormData();
            form.append('file', this.file);
            _index2.default.doUploadVideo(form).then(function () {
                _this2.$router.push({
                    name: 'publish',
                    params: {
                        url: ''
                    }
                });
            });
        },
        take_video: function take_video() {
            this.isShooting === false ? this.mediaRecorder.start() : this.mediaRecorder.stop();
            this.isShooting = !this.isShooting;
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 147 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["shoot"]
  }, [_c('div', {
    staticClass: ["chat-header"]
  }, [_c('text', {
    staticClass: ["left"]
  }), _c('text', {
    staticClass: ["name"]
  }, [_vm._v("录制页")]), _c('text', {
    staticClass: ["right"],
    on: {
      "click": _vm.handleClick
    }
  }, [_vm._v("确定")])]), _c('div', {
    staticClass: ["video_module"]
  }, [_c('video', {
    staticClass: ["video"],
    attrs: {
      "id": "video",
      "width": "750",
      "height": "750",
      "src": _vm.videoDataUrl,
      "autoplay": "autoplay",
      "preload": "",
      "loop": "",
      "muted": ""
    }
  }), _c('canvas', {
    attrs: {
      "id": "canvas",
      "width": "375",
      "height": "620"
    }
  })]), _c('div', {
    staticClass: ["footer"]
  }, [_c('div', {
    staticClass: ["shoot-controller"]
  }, [_c('button', {
    on: {
      "click": _vm.take_video
    }
  })], 1)])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(149)
)

/* script */
__vue_exports__ = __webpack_require__(150)

/* template */
var __vue_template__ = __webpack_require__(159)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\MINI-WEB\\src\\components\\chat\\chat.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6b29ce1a"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 149 */
/***/ (function(module, exports) {

module.exports = {
  "chat-module": {
    "height": 100,
    "backgroundColor": "#161824"
  },
  "chat-header": {
    "height": 7,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "backgroundColor": "#161824"
  },
  "chatting": {
    "height": 93,
    "position": "relative",
    "paddingTop": "30",
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "flexGrow": 1,
    "backgroundColor": "#000000"
  },
  "chat-content": {
    "height": 93
  }
}

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

var _chatOwn = __webpack_require__(151);

var _chatOwn2 = _interopRequireDefault(_chatOwn);

var _chatOther = __webpack_require__(155);

var _chatOther2 = _interopRequireDefault(_chatOther);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: { ChatOwn: _chatOwn2.default, ChatOther: _chatOther2.default },
  data: function data() {
    return {
      otherId: 0,
      data: [],
      text: '',
      lastId: 0,
      timmer: {},
      userimg: '',
      name: ''
    };
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      vm.otherId = to.params.user;
      vm.otherimg = to.params.otherimg;
    });
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    clearInterval(this.timmer);
  },
  mounted: function mounted() {
    var _this = this;

    _index2.default.getPersonInfo().then(function (_ref) {
      var data = _ref.data;

      _this.userimg = data.data.img_portrait;
      _this.name = data.data.name;
    });
    this.timmer = setInterval(function () {
      _index2.default.getConversationDetail({ id: _this.otherId, id_greater_than: _this.lastId, count: -1 }).then(function (_ref2) {
        var data = _ref2.data;

        if (data.status === 403) {
          return;
        }
        _this.data = _this.data.concat(data.data);
        _this.lastId = data.data.length > 0 && data.data[data.data.length - 1].id || _this.lastId;
      });
    }, 1000);
  },

  methods: {
    handleGoback: function handleGoback(e) {
      //      this.$router.go(-1)
      if (e === 'back') {
        window.location.href = 'https://mini.jkjun.cn/src/index.html#/msgtest';
      } else {
        window.location.href = 'https://mini.jkjun.cn/src/index.html#/ownInfo';
      }
    },
    handleClick: function handleClick() {
      this.$router.push({
        name: 'otherInfo',
        params: {
          user: this.otherId
        }
      });
    },
    handleSendMessage: function handleSendMessage() {
      _index2.default.doSendMessage({ user_id: this.otherId, text: this.text });
      this.text = '';
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(152)
)

/* script */
__vue_exports__ = __webpack_require__(153)

/* template */
var __vue_template__ = __webpack_require__(154)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\MINI-WEB\\src\\components\\chat\\chat-own.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2651d32c"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 152 */
/***/ (function(module, exports) {

module.exports = {
  "chat-own": {
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": "30",
    "marginLeft": 0,
    "flexDirection": "row",
    "justifyContent": "flex-end",
    "alignItems": "flex-start"
  },
  "own-img": {
    "marginTop": 0,
    "marginRight": 0.4,
    "marginBottom": 0,
    "marginLeft": 0.2,
    "width": "70",
    "height": "70",
    "borderRadius": 50,
    "backgroundSize": "100% 100%"
  },
  "own-msg": {
    "paddingTop": "25",
    "paddingRight": "20",
    "paddingBottom": "25",
    "paddingLeft": "20",
    "maxWidth": 6.5,
    "color": "#FFFFFF",
    "backgroundColor": "#FFFFFF",
    "borderRadius": "24",
    "background": "url('../../asset/img/发送消息.png')",
    "backgroundSize": "100% 100%"
  }
}

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  props: ['imgurl', 'msg']
};

/***/ }),
/* 154 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["chat-own"]
  }, [_c('div', {
    staticClass: ["own-msg"]
  }, [_vm._v(_vm._s(_vm.msg))]), _c('div', {
    staticClass: ["own-img"],
    style: {
      'background-image': ("url(" + _vm.imgurl + ")")
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(156)
)

/* script */
__vue_exports__ = __webpack_require__(157)

/* template */
var __vue_template__ = __webpack_require__(158)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\MINI-WEB\\src\\components\\chat\\chat-other.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7cb9fb94"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 156 */
/***/ (function(module, exports) {

module.exports = {
  "chat-other": {
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": "30",
    "marginLeft": 0,
    "flexDirection": "row",
    "justifyContent": "flex-start",
    "alignItems": "flex-start"
  },
  "other-img": {
    "marginTop": 0,
    "marginRight": 0.2,
    "marginBottom": 0,
    "marginLeft": 0.4,
    "width": "70",
    "height": "70",
    "borderRadius": 50,
    "backgroundSize": "100% 100%"
  },
  "other-msg": {
    "paddingTop": "25",
    "paddingRight": "20",
    "paddingBottom": "25",
    "paddingLeft": "20",
    "maxWidth": 6.5,
    "backgroundColor": "#FFFFFF",
    "borderRadius": "24"
  }
}

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  props: ['imgurl', 'msg', 'id'],
  methods: {
    otherInfo: function otherInfo() {
      this.$router.push({
        name: 'otherInfo',
        params: {
          user: this.id
        }
      });
    }
  }
};

/***/ }),
/* 158 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["chat-other"]
  }, [_c('div', {
    staticClass: ["other-img"],
    style: {
      'background-image': ("url(https://mini.jkjun.cn/media/" + _vm.imgurl + ")")
    },
    on: {
      "click": _vm.otherInfo
    }
  }), _c('div', {
    staticClass: ["other-msg"]
  }, [_vm._v(_vm._s(_vm.msg))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 159 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["chat-module"]
  }, [_c('div', {
    staticClass: ["chat-header"]
  }, [_c('text', {
    staticClass: ["left"],
    on: {
      "click": function($event) {
        _vm.handleGoback('back')
      }
    }
  }), _c('text', {
    staticClass: ["name"]
  }, [_vm._v(_vm._s(_vm.name))]), _c('text', {
    staticClass: ["right"],
    on: {
      "click": function($event) {
        _vm.handleGoback('home')
      }
    }
  })]), _c('div', {
    staticClass: ["chatting"]
  }, [_c('div', {
    staticClass: ["chat-content"]
  }, _vm._l((_vm.data), function(chat, index) {
    return _c('div', {
      key: index
    }, [(chat.sender != _vm.otherId) ? _c('chat-own', {
      attrs: {
        "imgurl": _vm.userimg,
        "msg": chat.test
      }
    }) : _c('chat-other', {
      attrs: {
        "imgurl": _vm.otherimg,
        "msg": chat.test,
        "id": _vm.otherId
      }
    })], 1)
  })), _c('div', {
    staticClass: ["base-flex"],
    attrs: {
      "id": "send-block"
    }
  }, [_c('input', {
    attrs: {
      "type": "text",
      "placeholder": "聊点什么吧...",
      "value": (_vm.text)
    },
    on: {
      "focus": _vm.changeColor,
      "input": function($event) {
        _vm.text = $event.target.attr.value
      }
    }
  }), _c('button', {
    on: {
      "click": _vm.handleSendMessage
    }
  }, [_vm._v("发送")])], 1)])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(161)
)

/* script */
__vue_exports__ = __webpack_require__(162)

/* template */
var __vue_template__ = __webpack_require__(163)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\MINI-WEB\\src\\components\\publish.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-8e4ae234"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 161 */
/***/ (function(module, exports) {

module.exports = {
  "chat-header": {
    "width": 100,
    "height": 7,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "backgroundColor": "#161824"
  },
  "video-wrapper": {
    "paddingTop": "60",
    "paddingBottom": "60",
    "width": "600",
    "height": 68
  }
}

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    methods: {
        handleClick: function handleClick() {}
    }
};

/***/ }),
/* 163 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "publish"
    }
  }, [_c('div', {
    staticClass: ["chat-header"]
  }, [_c('text', {
    staticClass: ["left"]
  }), _c('text', {
    staticClass: ["name"]
  }, [_vm._v("发布页")]), _c('text', {
    staticClass: ["right"],
    on: {
      "click": _vm.handleClick
    }
  }, [_vm._v("发布")])]), _c('textarea', {
    attrs: {
      "name": "",
      "placeholder": "写点什么吧..."
    }
  }), _vm._m(0)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["video-wrapper"]
  }, [_c('video', {
    attrs: {
      "src": "https://mini.jkjun.cn/media/videos/8.mp4",
      "controls": "controls"
    }
  })])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(165)
)

/* script */
__vue_exports__ = __webpack_require__(166)

/* template */
var __vue_template__ = __webpack_require__(179)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\MINI-WEB\\src\\components\\msglist\\msglist.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-21935c8e"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 165 */
/***/ (function(module, exports) {

module.exports = {
  "like-notice": {
    "paddingTop": "25",
    "paddingRight": "25",
    "paddingBottom": "25",
    "paddingLeft": "25",
    "background": "url(\"/src/asset/img/like-bg.png\") no-repeat",
    "backgroundSize": "cover",
    "borderRadius": "20",
    "width": 80,
    "minHeight": 1.7,
    "marginTop": 0.6,
    "justifyContent": "center"
  },
  "like-time": {
    "textAlign": "center",
    "color": "#FFFFFF",
    "marginTop": 0.7,
    "fontSize": 0.35,
    "opacity": 0.8
  },
  "super-like-notice": {
    "paddingTop": "25",
    "paddingRight": "25",
    "paddingBottom": "25",
    "paddingLeft": "25",
    "backgroundColor": "#f2f3f4",
    "borderRadius": "20",
    "width": 80,
    "minHeight": 3,
    "background": "url(/src/asset/img/superlike.png) no-repeat",
    "backgroundSize": "cover"
  },
  "msg-name": {
    "left": 2.5,
    "top": 0.2,
    "fontSize": 0.5
  },
  "msg-content": {
    "left": 2.5,
    "top": 1.3,
    "fontSize": 0.35,
    "opacity": 0.8
  },
  "msg-time": {
    "top": 0.2,
    "right": 0.3,
    "fontSize": 0.39,
    "opacity": 0.8
  },
  "msg-num": {
    "background": "url(/src/asset/img/msg-num.png) no-repeat",
    "backgroundSize": "cover",
    "width": 0.8,
    "height": 0.8,
    "borderRadius": 0.4,
    "textAlign": "center",
    "fontSize": 0.45,
    "top": 1.2,
    "right": 0.3,
    "paddingTop": 0.1
  },
  "item-container": {
    "width": "750",
    "backgroundColor": "#000000"
  },
  "border-cell": {
    "backgroundColor": "#000000",
    "width": "750",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "cell": {
    "marginBottom": 0
  },
  "content": {
    "width": "750",
    "height": 5,
    "alignItems": "center",
    "backgroundColor": "#000000"
  }
}

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindEnv = __webpack_require__(16);

var _bindEnv2 = _interopRequireDefault(_bindEnv);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _wxcPanItem = __webpack_require__(17);

var _wxcPanItem2 = _interopRequireDefault(_wxcPanItem);

var _wxcTabPage = __webpack_require__(18);

var _wxcTabPage2 = _interopRequireDefault(_wxcTabPage);

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

var _match = __webpack_require__(167);

var _match2 = _interopRequireDefault(_match);

var _msg = __webpack_require__(171);

var _msg2 = _interopRequireDefault(_msg);

var _superlike = __webpack_require__(175);

var _superlike2 = _interopRequireDefault(_superlike);

var _config = __webpack_require__(19);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//    const dom = weex.requireModule('dom');


exports.default = {
  components: { WxcTabPage: _wxcTabPage2.default, WxcPanItem: _wxcPanItem2.default, Match: _match2.default, Msg: _msg2.default, SuperLike: _superlike2.default },
  data: function data() {
    return {
      tabTitles: _config2.default.tabTitles,
      tabStyles: _config2.default.tabStyles,
      tabList: [],
      tabPageHeight: 1334,
      avatar: 'https://mini.jkjun.cn/media/'
    };
  },
  created: function created() {
    this.tabPageHeight = _utils2.default.env.getPageHeight();
    this.tabList = [].concat(_toConsumableArray(Array(this.tabTitles.length).keys())).map(function (i) {
      return [];
    });
    this.$set(this.tabList, 0, this.demoList);
  },
  mounted: function mounted() {
    var _this = this;

    _index2.default.getPushMessages({}).then(function (_ref) {
      var data = _ref.data;

      _this.$set(_this.tabList, 0, data.data);
    });

    _index2.default.getConversationList({}).then(function (_ref2) {
      var data = _ref2.data;

      _this.$set(_this.tabList, 1, data.data);
      _this.avatar = _this.avatar + '/' + data.data.avatar;
    });
  },

  methods: {
    wxcTabPageCurrentTabSelected: function wxcTabPageCurrentTabSelected(e) {
      var _this2 = this;

      var self = this;
      var index = e.page;
      /* Unloaded tab analog data request */
      if (!_utils2.default.isNonEmptyArray(self.tabList[index])) {
        setTimeout(function () {
          _this2.$set(self.tabList, index, self.demoList);
        }, 100);
      }
    },
    wxcPanItemPan: function wxcPanItemPan(e) {
      if (_bindEnv2.default.supportsEBForAndroid()) {
        this.$refs['wxc-tab-page'].bindExp(e.element);
      }
    },
    doSendMessage: function doSendMessage(id, avatar) {
      this.$router.push({ name: 'chat', params: {
          user: id,
          otherimg: avatar
        } });
    }
  }
};

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(168)
)

/* script */
__vue_exports__ = __webpack_require__(169)

/* template */
var __vue_template__ = __webpack_require__(170)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\MINI-WEB\\src\\components\\msglist\\match.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6d3c5d42"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 168 */
/***/ (function(module, exports) {

module.exports = {
  "content": {
    "width": "750",
    "height": 5,
    "alignItems": "center",
    "justifyContent": "center",
    "backgroundColor": "#000000"
  },
  "like-notice": {
    "paddingTop": "25",
    "paddingRight": "25",
    "paddingBottom": "25",
    "paddingLeft": "25",
    "background": "url(\"/src/asset/img/like-bg.png\") no-repeat",
    "backgroundSize": "cover",
    "borderRadius": "20",
    "width": 80,
    "minHeight": 1.7
  },
  "like-time": {
    "textAlign": "center",
    "color": "#FFFFFF",
    "marginTop": 0.4
  }
}

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//

exports.default = {
  props: ['name']
};

/***/ }),
/* 170 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["content"]
  }, [_c('div', {
    staticClass: ["like-notice"]
  }, [_c('text', [_vm._v("你收到一个like")])])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(172)
)

/* script */
__vue_exports__ = __webpack_require__(173)

/* template */
var __vue_template__ = __webpack_require__(174)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\MINI-WEB\\src\\components\\msglist\\msg.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2f2a599b"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 172 */
/***/ (function(module, exports) {

module.exports = {
  "content": {
    "width": "750",
    "height": 5,
    "alignItems": "center",
    "justifyContent": "center",
    "backgroundColor": "#000000"
  },
  "msg-list-content": {
    "justifyContent": "center"
  },
  "msg-name": {
    "left": 2.5,
    "top": 0.2,
    "fontSize": 0.5
  },
  "msg-content": {
    "left": 2.5,
    "top": 1.1,
    "fontSize": 0.4,
    "opacity": 0.8,
    "maxWidth": 6,
    "whiteSpace": "nowrap",
    "overflow": "hidden",
    "textOverflow": "ellipsis"
  },
  "msg-time": {
    "top": 0.2,
    "right": 0.3,
    "fontSize": 0.4,
    "opacity": 0.8
  },
  "msg-num": {
    "background": "url(/src/asset/img/msg-num.png) no-repeat",
    "backgroundSize": "cover",
    "width": 0.7,
    "height": 0.7,
    "borderRadius": 50,
    "textAlign": "center",
    "fontSize": 0.35,
    "top": 1,
    "right": 0.3,
    "paddingTop": 0.15
  }
}

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: ['avatar', 'name', 'time', 'msg', 'unreadCount', 'id']
};

/***/ }),
/* 174 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["content", "msg-list-content"]
  }, [_c('div', {
    staticClass: ["msg-list"]
  }, [_c('image', {
    attrs: {
      "src": _vm.avatar
    }
  }), _c('text', {
    staticClass: ["msg-name"]
  }, [_vm._v(_vm._s(_vm.name))]), _c('text', {
    staticClass: ["msg-time"]
  }, [_vm._v(_vm._s(new Date(_vm.time).getHours() + ':' + new Date(_vm.time).getMinutes()))]), _c('text', {
    staticClass: ["msg-content"]
  }, [_vm._v(_vm._s(_vm.msg))]), _c('text', {
    staticClass: ["msg-num"]
  }, [_vm._v(_vm._s(_vm.unreadCount))])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(176)
)

/* script */
__vue_exports__ = __webpack_require__(177)

/* template */
var __vue_template__ = __webpack_require__(178)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\MINI-WEB\\src\\components\\msglist\\superlike.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-a06cbca8"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 176 */
/***/ (function(module, exports) {

module.exports = {
  "content-super": {
    "width": "750",
    "height": 6,
    "alignItems": "center",
    "backgroundColor": "#000000"
  },
  "super-like-notice": {
    "paddingTop": "25",
    "paddingRight": "25",
    "paddingBottom": "25",
    "paddingLeft": "25",
    "backgroundColor": "#f2f3f4",
    "borderRadius": "20",
    "width": 80,
    "minHeight": 3.8,
    "background": "url(/src/asset/img/superlike.png) no-repeat",
    "backgroundSize": "cover"
  },
  "msg-name": {
    "left": 2.5,
    "top": 0.2,
    "fontSize": 0.5
  },
  "msg-content": {
    "left": 2.5,
    "top": 1.3,
    "fontSize": 0.35,
    "opacity": 0.8
  },
  "msg-time": {
    "top": 0.2,
    "right": 0.3,
    "fontSize": 0.39,
    "opacity": 0.8
  },
  "msg-num": {
    "background": "url(/src/asset/img/msg-num.png) no-repeat",
    "backgroundSize": "cover",
    "width": 0.8,
    "height": 0.8,
    "borderRadius": 0.4,
    "textAlign": "center",
    "fontSize": 0.45,
    "top": 1.2,
    "right": 0.3,
    "paddingTop": 0.1
  },
  "item-container": {
    "width": "750",
    "backgroundColor": "#000000"
  }
}

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: ['name', 'msg', 'time', 'user'],
  methods: {
    handleSendMessage: function handleSendMessage() {
      this.$router.push({
        name: 'chat',
        params: {
          user: this.user
        } });
    }
  }
};

/***/ }),
/* 178 */
/***/ (function(module, exports) {

module.exports={render:function(){},staticRenderFns:[]}

/***/ }),
/* 179 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('wxc-tab-page', {
    ref: "wxc-tab-page",
    attrs: {
      "tabTitles": _vm.tabTitles,
      "tabStyles": _vm.tabStyles,
      "titleType": "icon",
      "tabPageHeight": _vm.tabPageHeight
    },
    on: {
      "wxcTabPageCurrentTabSelected": _vm.wxcTabPageCurrentTabSelected
    }
  }, [_vm._l((_vm.tabList), function(v, index) {
    return (index === 0) ? _c('list', {
      key: index,
      staticClass: ["item-container"],
      style: {
        height: (_vm.tabPageHeight - _vm.tabStyles.height) + 'px'
      }
    }, [_c('cell', {
      staticClass: ["border-cell"],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }), _vm._l((v), function(demo, key) {
      return _c('cell', {
        key: key,
        staticClass: ["cell"],
        appendAsTree: true,
        attrs: {
          "append": "tree"
        }
      }, [_c('wxc-pan-item', {
        attrs: {
          "extId": '1-' + (v) + '-' + (key),
          "url": ""
        },
        on: {
          "wxcPanItemPan": _vm.wxcPanItemPan
        }
      }, [(demo.type == 'match') ? _c('Match') : _c('SuperLike', {
        attrs: {
          "name": demo.username,
          "msg": demo.message,
          "id": demo.user
        }
      })], 1)], 1)
    })], 2) : _vm._e()
  }), _vm._l((_vm.tabList), function(v, index) {
    return (index === 1) ? _c('list', {
      key: index,
      staticClass: ["item-container"],
      style: {
        height: (_vm.tabPageHeight - _vm.tabStyles.height) + 'px'
      }
    }, [_c('cell', {
      staticClass: ["border-cell"],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }), _vm._l((v), function(demo, key) {
      return _c('cell', {
        key: key,
        staticClass: ["cell"],
        appendAsTree: true,
        attrs: {
          "append": "tree"
        }
      }, [_c('wxc-pan-item', {
        attrs: {
          "extId": '1-' + (v) + '-' + (key),
          "url": ""
        },
        on: {
          "wxcPanItemPan": _vm.wxcPanItemPan
        }
      }, [_c('div', {
        staticClass: ["test"],
        on: {
          "click": function($event) {
            _vm.doSendMessage(demo.user, demo.avatar)
          }
        }
      }, [_c('Msg', {
        attrs: {
          "avatar": ("https://mini.jkjun.cn/media/" + (demo.avatar)),
          "id": demo.user,
          "name": demo.name,
          "msg": demo.sentence,
          "time": demo.time,
          "unreadCount": demo.unread_count
        }
      })], 1)])], 1)
    })], 2) : _vm._e()
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(181)
)

/* script */
__vue_exports__ = __webpack_require__(182)

/* template */
var __vue_template__ = __webpack_require__(183)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\MINI-WEB\\src\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-52dee076"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 181 */
/***/ (function(module, exports) {

module.exports = {
  "base-font-size": {
    "fontSize": "48"
  },
  "mini-font-size": {
    "fontSize": "24"
  },
  "middle-font-size": {
    "fontSize": "36"
  },
  "base-flex": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "wrapper": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0
  },
  "color-white": {
    "color": "#FFFFFF"
  },
  "color-gray": {
    "color": "#98989a"
  }
}

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wxcPopup = __webpack_require__(5);

var _wxcPopup2 = _interopRequireDefault(_wxcPopup);

var _wxcButton = __webpack_require__(15);

var _wxcButton2 = _interopRequireDefault(_wxcButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: { WxcButton: _wxcButton2.default, WxcPopup: _wxcPopup2.default },
  name: 'App',
  data: function data() {
    return {};
  },

  methods: {}
}; //
//
//
//
//
//

/***/ }),
/* 183 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('router-view')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);