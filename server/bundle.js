/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var destructuring_1 = __webpack_require__(1);
	var play_1 = __webpack_require__(2);
	var destructuring = new destructuring_1.Destructuring();
	var destOutput = destructuring.getRepresentation();
	var play = new play_1.Tester();
	var playOutput = play.buildNameFun(2, 3, 3);
	var injectHtml = function (id, content) {
	    document.getElementById("#" + id).innerHTML += content;
	};
	injectHtml("divOne", "<h1>" + destOutput + "</h1>");
	injectHtml("divOne", "<h1>" + playOutput + "</h1>");


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	var person = {
	    firstName: "Patrik",
	    lastName: "Bjorklund",
	    place: {
	        city: "Gothenburg",
	        country: "Sweden"
	    }
	};
	var Destructuring = (function () {
	    function Destructuring() {
	        this.getRepresentation = function () {
	            var fName = person.firstName, city = person.place.city;
	            return fName + " - " + city;
	        };
	    }
	    return Destructuring;
	}());
	exports.Destructuring = Destructuring;


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	;
	var Tester = (function () {
	    function Tester() {
	        this.buildNameFun = function (firstName) {
	            var restOfName = [];
	            for (var _i = 1; _i < arguments.length; _i++) {
	                restOfName[_i - 1] = arguments[_i];
	            }
	            return firstName + " " + restOfName.join("-");
	        };
	    }
	    Tester.prototype.funcTypeTest = function (x, y) {
	        var additioner = function (z, a) {
	            return z + a;
	        };
	        var func = function (num1, num2, cb) {
	            return cb(num1, num2);
	        };
	        return func(x, y, additioner);
	    };
	    return Tester;
	}());
	exports.Tester = Tester;


/***/ }
/******/ ]);