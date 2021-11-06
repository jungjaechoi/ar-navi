/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./server/assets/vendor/counterup/counterup.min.js":
/*!*********************************************************!*\
  !*** ./server/assets/vendor/counterup/counterup.min.js ***!
  \*********************************************************/
/***/ (() => {

eval("/*!\r\n * jquery.counterup.js 2.1.0\r\n *\r\n * Copyright 2013, Benjamin Intal http://gambit.ph @bfintal\r\n * Released under the GPL v2 License\r\n *\r\n * Amended by Jeremy Paris, Ciro Mattia Gonano and others\r\n *\r\n * Date: Feb 24, 2017\r\n */\n(function ($) {\n  \"use strict\";\n\n  $.fn.counterUp = function (options) {\n    var settings = $.extend({\n      time: 400,\n      delay: 10,\n      offset: 100,\n      beginAt: 0,\n      formatter: false,\n      context: \"window\",\n      callback: function callback() {}\n    }, options),\n        s;\n    return this.each(function () {\n      var $this = $(this),\n          counter = {\n        time: $(this).data(\"counterup-time\") || settings.time,\n        delay: $(this).data(\"counterup-delay\") || settings.delay,\n        offset: $(this).data(\"counterup-offset\") || settings.offset,\n        beginAt: $(this).data(\"counterup-beginat\") || settings.beginAt,\n        context: $(this).data(\"counterup-context\") || settings.context\n      };\n\n      var counterUpper = function counterUpper() {\n        var nums = [];\n        var divisions = counter.time / counter.delay;\n        var num = $(this).attr(\"data-num\") ? $(this).attr(\"data-num\") : $this.text();\n        var isComma = /[0-9]+,[0-9]+/.test(num);\n        num = num.replace(/,/g, \"\");\n        var decimalPlaces = (num.split(\".\")[1] || []).length;\n        if (counter.beginAt > num) counter.beginAt = num;\n        var isTime = /[0-9]+:[0-9]+:[0-9]+/.test(num);\n\n        if (isTime) {\n          var times = num.split(\":\"),\n              m = 1;\n          s = 0;\n\n          while (times.length > 0) {\n            s += m * parseInt(times.pop(), 10);\n            m *= 60;\n          }\n        }\n\n        for (var i = divisions; i >= counter.beginAt / num * divisions; i--) {\n          var newNum = parseFloat(num / divisions * i).toFixed(decimalPlaces);\n\n          if (isTime) {\n            newNum = parseInt(s / divisions * i);\n            var hours = parseInt(newNum / 3600) % 24;\n            var minutes = parseInt(newNum / 60) % 60;\n            var seconds = parseInt(newNum % 60, 10);\n            newNum = (hours < 10 ? \"0\" + hours : hours) + \":\" + (minutes < 10 ? \"0\" + minutes : minutes) + \":\" + (seconds < 10 ? \"0\" + seconds : seconds);\n          }\n\n          if (isComma) {\n            while (/(\\d+)(\\d{3})/.test(newNum.toString())) {\n              newNum = newNum.toString().replace(/(\\d+)(\\d{3})/, \"$1\" + \",\" + \"$2\");\n            }\n          }\n\n          if (settings.formatter) {\n            newNum = settings.formatter.call(this, newNum);\n          }\n\n          nums.unshift(newNum);\n        }\n\n        $this.data(\"counterup-nums\", nums);\n        $this.text(counter.beginAt);\n\n        var f = function f() {\n          if (!$this.data(\"counterup-nums\")) {\n            settings.callback.call(this);\n            return;\n          }\n\n          $this.html($this.data(\"counterup-nums\").shift());\n\n          if ($this.data(\"counterup-nums\").length) {\n            setTimeout($this.data(\"counterup-func\"), counter.delay);\n          } else {\n            $this.data(\"counterup-nums\", null);\n            $this.data(\"counterup-func\", null);\n            settings.callback.call(this);\n          }\n        };\n\n        $this.data(\"counterup-func\", f);\n        setTimeout($this.data(\"counterup-func\"), counter.delay);\n      };\n\n      $this.waypoint(function (direction) {\n        counterUpper();\n        this.destroy();\n      }, {\n        offset: counter.offset + \"%\",\n        context: counter.context\n      });\n    });\n  };\n})(jQuery);\n\n//# sourceURL=webpack://arnavi/./server/assets/vendor/counterup/counterup.min.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./server/assets/vendor/counterup/counterup.min.js"]();
/******/ 	
/******/ })()
;