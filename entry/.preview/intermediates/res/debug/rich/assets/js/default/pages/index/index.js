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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../git/carousel_image_slider/entry/src/main/js/default/pages/index/index.hml?entry");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../git/carousel_image_slider/ds_carousel_slider/lib/ds_comp/ds_comp.js":
/*!******************************************************************************!*\
  !*** E:/git/carousel_image_slider/ds_carousel_slider/lib/ds_comp/ds_comp.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ohos = _interopRequireDefault(requireModule("@ohos.document"));

var _system = _interopRequireDefault(requireModule("@system.app"));

var _default = {
  data: {
    title1: "C A R O U S E L",
    title2: "S L I D E R",
    //        Image1: '/common/images/lr.jpg',
    //        Image2: '/common/images/i1.jpg',
    //        Image3: '/common/images/bg-tv.jpg',
    //        Image4: '/common/images/rr.jpg',
    //        Image5:'/common/images/mustang.jpg',
    sync_img: '',
    num: 1,
    red_dot: '../ds_img/red_dot.png',
    black_dot: '../ds_img/black_dot.png',
    dot1: '../ds_img/red_dot.png',
    dot2: '../ds_img/black_dot.png',
    dot3: '../ds_img/black_dot.png',
    dot4: '../ds_img/black_dot.png',
    dot5: '../ds_img/black_dot.png'
  },
  nxtimgr: function nxtimgr() {
    console.log("yeh");
    console.log("hi" + this.dot1);

    if (this.num == 1) {
      this.sync_img = this.Image1;
      this.Image1 = this.Image2;
      this.num += 1;
      this.dot1 = this.black_dot;
      this.dot2 = this.red_dot;
    } else if (this.num == 2) {
      this.Image1 = this.Image3;
      this.num += 1;
      this.dot2 = this.black_dot;
      this.dot3 = this.red_dot;
    } else if (this.num == 3) {
      this.Image1 = this.Image4;
      this.num += 1;
      this.dot3 = this.black_dot;
      this.dot4 = this.red_dot;
    } else if (this.num == 4) {
      this.Image1 = this.Image5;
      this.num += 1;
      this.dot4 = this.black_dot;
      this.dot5 = this.red_dot;
    } else if (this.num == 5) {
      this.Image1 = this.sync_img;
      this.num = 1;
      this.dot5 = this.black_dot;
      this.dot1 = this.red_dot;
    }
  },
  nxtimgl: function nxtimgl() {
    if (this.num == 1) {
      this.sync_img = this.Image1;
      this.Image1 = this.Image5;
      this.num = 5;
      this.dot1 = this.black_dot;
      this.dot5 = this.red_dot;
    } else if (this.num == 2) {
      this.Image1 = this.sync_img;
      this.num -= 1;
      this.dot2 = this.black_dot;
      this.dot1 = this.red_dot;
    } else if (this.num == 3) {
      this.Image1 = this.Image2;
      this.num -= 1;
      this.dot3 = this.black_dot;
      this.dot2 = this.red_dot;
    } else if (this.num == 4) {
      this.Image1 = this.Image3;
      this.num -= 1;
      this.dot4 = this.black_dot;
      this.dot3 = this.red_dot;
    } else if (this.num == 5) {
      this.Image1 = this.Image4;
      this.num -= 1;
      this.dot5 = this.black_dot;
      this.dot4 = this.red_dot;
    }
  }
};
exports["default"] = _default;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "../../../../../git/carousel_image_slider/entry/src/main/js/default/pages/index/index.hml?entry":
/*!******************************************************************************************!*\
  !*** E:/git/carousel_image_slider/entry/src/main/js/default/pages/index/index.hml?entry ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !../../../../../../../../../sdk/js/2.2.0.3/build-tools/ace-loader/lib/loader.js!../../../../../../node_modules/ds_carousel_slider/lib/ds_comp/ds_comp.hml?name=ds_corousel */ "./lib/loader.js!../../../../../git/carousel_image_slider/ds_carousel_slider/lib/ds_comp/ds_comp.hml?name=ds_corousel")
var $app_template$ = __webpack_require__(/*! !../../../../../../../../../sdk/js/2.2.0.3/build-tools/ace-loader/lib/json.js!../../../../../../../../../sdk/js/2.2.0.3/build-tools/ace-loader/lib/template.js!./index.hml */ "./lib/json.js!./lib/template.js!../../../../../git/carousel_image_slider/entry/src/main/js/default/pages/index/index.hml")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../../sdk/js/2.2.0.3/build-tools/ace-loader/lib/json.js!../../../../../../../../../sdk/js/2.2.0.3/build-tools/ace-loader/lib/style.js!./index.css */ "./lib/json.js!./lib/style.js!../../../../../git/carousel_image_slider/entry/src/main/js/default/pages/index/index.css")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../../sdk/js/2.2.0.3/build-tools/ace-loader/lib/script.js!../../../../../../../../../sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/babel-loader?presets[]=E:/sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=E:/sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../../../sdk/js/2.2.0.3/build-tools/ace-loader/lib/resource-reference-script.js!./index.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=E:\\sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=E:\\sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!../../../../../git/carousel_image_slider/entry/src/main/js/default/pages/index/index.js")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})
$app_bootstrap$('@app-component/index',undefined,undefined)

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../git/carousel_image_slider/ds_carousel_slider/lib/ds_comp/ds_comp.css":
/*!************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!E:/git/carousel_image_slider/ds_carousel_slider/lib/ds_comp/ds_comp.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column",
    "alignItems": "center",
    "width": "100%",
    "height": "100%"
  },
  ".divAli": {
    "width": "100%",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "fontSize": "40px",
    "marginRight": "5px",
    "marginLeft": "5px",
    "paddingBottom": "5px"
  },
  ".base": {
    "marginTop": "5px",
    "marginRight": "5px",
    "marginLeft": "5px",
    "width": "100%",
    "flexDirection": "row",
    "justifyContent": "center",
    "paddingBottom": "10px"
  },
  ".img": {
    "justifyContent": "center",
    "height": "300px",
    "width": "70%"
  },
  ".btn5": {
    "fontSize": "30px",
    "backgroundColor": "#ffffff",
    "height": "80px",
    "textAlign": "center",
    "borderBottomLeftRadius": "50px",
    "borderBottomRightRadius": "50px",
    "borderTopLeftRadius": "50px",
    "borderTopRightRadius": "50px",
    "color": "#000000",
    "marginLeft": "2px",
    "marginRight": "2px"
  },
  ".dot_img": {
    "marginLeft": "5px",
    "marginRight": "5px",
    "width": "10px",
    "height": "10px"
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../git/carousel_image_slider/entry/src/main/js/default/pages/index/index.css":
/*!*****************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!E:/git/carousel_image_slider/entry/src/main/js/default/pages/index/index.css ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column",
    "alignItems": "center",
    "width": "100%",
    "height": "100%"
  },
  ".divAli": {
    "width": "100%",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "fontSize": "40px",
    "marginRight": "5px",
    "marginLeft": "5px",
    "paddingBottom": "5px"
  },
  ".base": {
    "marginTop": "5px",
    "marginRight": "5px",
    "marginLeft": "5px",
    "width": "100%",
    "flexDirection": "row",
    "justifyContent": "center",
    "paddingBottom": "10px"
  },
  ".img": {
    "justifyContent": "center",
    "height": "300px",
    "width": "70%"
  },
  ".btn5": {
    "fontSize": "30px",
    "backgroundColor": "#ffffff",
    "height": "80px",
    "textAlign": "center",
    "borderBottomLeftRadius": "50px",
    "borderBottomRightRadius": "50px",
    "borderTopLeftRadius": "50px",
    "borderTopRightRadius": "50px",
    "color": "#000000",
    "marginLeft": "2px",
    "marginRight": "2px"
  },
  ".dot_img": {
    "marginLeft": "5px",
    "marginRight": "5px",
    "width": "10px",
    "height": "10px"
  },
  ".title1": {
    "marginTop": "100px",
    "height": "70px"
  },
  ".title2": {
    "height": "60px"
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!../../../../../git/carousel_image_slider/ds_carousel_slider/lib/ds_comp/ds_comp.hml":
/*!***************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!E:/git/carousel_image_slider/ds_carousel_slider/lib/ds_comp/ds_comp.hml ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "E:git/carousel_image_slider/ds_carousel_slider/lib/ds_comp/ds_comp:1",
    "className": "container"
  },
  "type": "div",
  "classList": [
    "container"
  ],
  "children": [
    {
      "attr": {
        "debugLine": "E:git/carousel_image_slider/ds_carousel_slider/lib/ds_comp/ds_comp:2",
        "className": "divAli"
      },
      "type": "div",
      "classList": [
        "divAli"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "E:git/carousel_image_slider/ds_carousel_slider/lib/ds_comp/ds_comp:3",
            "type": "button",
            "className": "btn5",
            "value": "<"
          },
          "type": "input",
          "classList": [
            "btn5"
          ],
          "onBubbleEvents": {
            "click": "nxtimgl"
          }
        },
        {
          "attr": {
            "debugLine": "E:git/carousel_image_slider/ds_carousel_slider/lib/ds_comp/ds_comp:4",
            "className": "img",
            "src": function () {return this.displayimg}
          },
          "type": "image",
          "classList": [
            "img"
          ]
        },
        {
          "attr": {
            "debugLine": "E:git/carousel_image_slider/ds_carousel_slider/lib/ds_comp/ds_comp:5",
            "type": "button",
            "className": "btn5",
            "value": ">"
          },
          "type": "input",
          "classList": [
            "btn5"
          ],
          "onBubbleEvents": {
            "click": "nxtimgr"
          }
        }
      ]
    },
    {
      "attr": {
        "debugLine": "E:git/carousel_image_slider/ds_carousel_slider/lib/ds_comp/ds_comp:7",
        "className": "base"
      },
      "type": "div",
      "classList": [
        "base"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "E:git/carousel_image_slider/ds_carousel_slider/lib/ds_comp/ds_comp:8",
            "className": "dot_img",
            "src": function () {return this.dot1}
          },
          "type": "image",
          "classList": [
            "dot_img"
          ]
        },
        {
          "attr": {
            "debugLine": "E:git/carousel_image_slider/ds_carousel_slider/lib/ds_comp/ds_comp:9",
            "className": "dot_img",
            "src": function () {return this.dot2}
          },
          "type": "image",
          "classList": [
            "dot_img"
          ]
        },
        {
          "attr": {
            "debugLine": "E:git/carousel_image_slider/ds_carousel_slider/lib/ds_comp/ds_comp:10",
            "className": "dot_img",
            "src": function () {return this.dot3}
          },
          "type": "image",
          "classList": [
            "dot_img"
          ]
        },
        {
          "attr": {
            "debugLine": "E:git/carousel_image_slider/ds_carousel_slider/lib/ds_comp/ds_comp:11",
            "className": "dot_img",
            "src": function () {return this.dot4}
          },
          "type": "image",
          "classList": [
            "dot_img"
          ]
        },
        {
          "attr": {
            "debugLine": "E:git/carousel_image_slider/ds_carousel_slider/lib/ds_comp/ds_comp:12",
            "className": "dot_img",
            "src": function () {return this.dot5}
          },
          "type": "image",
          "classList": [
            "dot_img"
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!../../../../../git/carousel_image_slider/entry/src/main/js/default/pages/index/index.hml":
/*!********************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!E:/git/carousel_image_slider/entry/src/main/js/default/pages/index/index.hml ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "pages/index/index:3",
    "className": "container"
  },
  "type": "div",
  "classList": [
    "container"
  ],
  "children": [
    {
      "attr": {
        "debugLine": "pages/index/index:4",
        "className": "title1",
        "value": function () {return this.title1}
      },
      "type": "text",
      "classList": [
        "title1"
      ]
    },
    {
      "attr": {
        "debugLine": "pages/index/index:6"
      },
      "type": "ds_corousel"
    }
  ]
}

/***/ }),

/***/ "./lib/loader.js!../../../../../git/carousel_image_slider/ds_carousel_slider/lib/ds_comp/ds_comp.hml?name=ds_corousel":
/*!****************************************************************************************************************!*\
  !*** ./lib/loader.js!E:/git/carousel_image_slider/ds_carousel_slider/lib/ds_comp/ds_comp.hml?name=ds_corousel ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../sdk/js/2.2.0.3/build-tools/ace-loader/lib/json.js!../../../../../sdk/js/2.2.0.3/build-tools/ace-loader/lib/template.js!./ds_comp.hml */ "./lib/json.js!./lib/template.js!../../../../../git/carousel_image_slider/ds_carousel_slider/lib/ds_comp/ds_comp.hml")
var $app_style$ = __webpack_require__(/*! !../../../../../sdk/js/2.2.0.3/build-tools/ace-loader/lib/json.js!../../../../../sdk/js/2.2.0.3/build-tools/ace-loader/lib/style.js!./ds_comp.css */ "./lib/json.js!./lib/style.js!../../../../../git/carousel_image_slider/ds_carousel_slider/lib/ds_comp/ds_comp.css")
var $app_script$ = __webpack_require__(/*! !../../../../../sdk/js/2.2.0.3/build-tools/ace-loader/lib/script.js!../../../../../sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/babel-loader?presets[]=E:/sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=E:/sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../sdk/js/2.2.0.3/build-tools/ace-loader/lib/resource-reference-script.js!./ds_comp.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=E:\\sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=E:\\sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!../../../../../git/carousel_image_slider/ds_carousel_slider/lib/ds_comp/ds_comp.js")

$app_define$('@app-component/ds_corousel', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})


/***/ }),

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=E:\\sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=E:\\sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!../../../../../git/carousel_image_slider/ds_carousel_slider/lib/ds_comp/ds_comp.js":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=E:/sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=E:/sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!E:/git/carousel_image_slider/ds_carousel_slider/lib/ds_comp/ds_comp.js ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ohos = _interopRequireDefault(requireModule("@ohos.document"));

var _system = _interopRequireDefault(requireModule("@system.app"));

var _default = {
  data: {
    title1: "C A R O U S E L",
    title2: "S L I D E R",
    sync_img: '',
    num: 1,
    red_dot: '../ds_img/red_dot.png',
    black_dot: '../ds_img/black_dot.png',
    dot1: '../ds_img/red_dot.png',
    dot2: '../ds_img/black_dot.png',
    dot3: '../ds_img/black_dot.png',
    dot4: '../ds_img/black_dot.png',
    dot5: '../ds_img/black_dot.png'
  },
  nxtimgr: function nxtimgr() {
    console.log("yeh");
    console.log("hi" + this.dot1);

    if (this.num == 1) {
      this.sync_img = this.Image1;
      this.Image1 = this.Image2;
      this.num += 1;
      this.dot1 = this.black_dot;
      this.dot2 = this.red_dot;
    } else if (this.num == 2) {
      this.Image1 = this.Image3;
      this.num += 1;
      this.dot2 = this.black_dot;
      this.dot3 = this.red_dot;
    } else if (this.num == 3) {
      this.Image1 = this.Image4;
      this.num += 1;
      this.dot3 = this.black_dot;
      this.dot4 = this.red_dot;
    } else if (this.num == 4) {
      this.Image1 = this.Image5;
      this.num += 1;
      this.dot4 = this.black_dot;
      this.dot5 = this.red_dot;
    } else if (this.num == 5) {
      this.Image1 = this.sync_img;
      this.num = 1;
      this.dot5 = this.black_dot;
      this.dot1 = this.red_dot;
    }
  },
  nxtimgl: function nxtimgl() {
    if (this.num == 1) {
      this.sync_img = this.Image1;
      this.Image1 = this.Image5;
      this.num = 5;
      this.dot1 = this.black_dot;
      this.dot5 = this.red_dot;
    } else if (this.num == 2) {
      this.Image1 = this.sync_img;
      this.num -= 1;
      this.dot2 = this.black_dot;
      this.dot1 = this.red_dot;
    } else if (this.num == 3) {
      this.Image1 = this.Image2;
      this.num -= 1;
      this.dot3 = this.black_dot;
      this.dot2 = this.red_dot;
    } else if (this.num == 4) {
      this.Image1 = this.Image3;
      this.num -= 1;
      this.dot4 = this.black_dot;
      this.dot3 = this.red_dot;
    } else if (this.num == 5) {
      this.Image1 = this.Image4;
      this.num -= 1;
      this.dot5 = this.black_dot;
      this.dot4 = this.red_dot;
    }
  }
};
exports["default"] = _default;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}

var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
  })) {
  throw new Error('For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function(acc) {
    var accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {access : acc};
      }
    } else if (accType === 'function') {
      console.warn('For VM objects, attribute ' + acc + ' value must not be a function. Change the value to an object.');
    }
  });
}}
/* generated by ace-loader */


/***/ }),

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=E:\\sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=E:\\sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!../../../../../git/carousel_image_slider/entry/src/main/js/default/pages/index/index.js":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=E:/sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=E:/sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!E:/git/carousel_image_slider/entry/src/main/js/default/pages/index/index.js ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ds_comp = _interopRequireDefault(__webpack_require__(/*! ../../../../../../node_modules/ds_carousel_slider/lib/ds_comp/ds_comp.js */ "../../../../../git/carousel_image_slider/ds_carousel_slider/lib/ds_comp/ds_comp.js"));

var _system = _interopRequireDefault(requireModule("@system.app"));

var _default = {
  data: {
    title1: "DS Libraries",
    title2: "Corousel Slider",
    Image1: '../../../../js/default/common/images/ls01.jpg',
    Image2: '../../../../js/default/common/images/ls02.jpg',
    Image3: '../../../../js/default/common/images/ls03.jpg',
    Image4: '../../../../js/default/common/images/ls04.jpg',
    Image5: '../../../../js/default/common/images/ls05.jpg'
  },
  nxtimgr: function nxtimgr() {
    console.log("hello");
  }
};
exports["default"] = _default;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}

var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
  })) {
  throw new Error('For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function(acc) {
    var accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {access : acc};
      }
    } else if (accType === 'function') {
      console.warn('For VM objects, attribute ' + acc + ' value must not be a function. Change the value to an object.');
    }
  });
}}
/* generated by ace-loader */


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ })

/******/ });
//# sourceMappingURL=index.js.map