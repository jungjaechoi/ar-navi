/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./server/assets/js/main.js":
/*!**********************************!*\
  !*** ./server/assets/js/main.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./server/assets/css/style.css\");\n/* harmony import */ var _vendor_bootstrap_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vendor/bootstrap/css/bootstrap.min.css */ \"./server/assets/vendor/bootstrap/css/bootstrap.min.css\");\n/* harmony import */ var _vendor_icofont_icofont_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vendor/icofont/icofont.min.css */ \"./server/assets/vendor/icofont/icofont.min.css\");\n/* harmony import */ var _vendor_boxicons_css_boxicons_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vendor/boxicons/css/boxicons.min.css */ \"./server/assets/vendor/boxicons/css/boxicons.min.css\");\n/* harmony import */ var _vendor_remixicon_remixicon_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../vendor/remixicon/remixicon.css */ \"./server/assets/vendor/remixicon/remixicon.css\");\n/* harmony import */ var _vendor_owl_carousel_assets_owl_carousel_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../vendor/owl.carousel/assets/owl.carousel.min.css */ \"./server/assets/vendor/owl.carousel/assets/owl.carousel.min.css\");\n/* harmony import */ var _vendor_aos_aos_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../vendor/aos/aos.css */ \"./server/assets/vendor/aos/aos.css\");\n/**\r\n* Template Name: Mentor - v2.2.0\r\n* Template URL: https://bootstrapmade.com/mentor-free-education-bootstrap-theme/\r\n* Author: BootstrapMade.com\r\n* License: https://bootstrapmade.com/license/\r\n*/\n\n\n\n\n\n\n\n!function ($) {\n  \"use strict\"; // Preloader\n\n  $(window).on('load', function () {\n    if ($('#preloader').length) {\n      $('#preloader').delay(100).fadeOut('slow', function () {\n        $(this).remove();\n      });\n    }\n  }); // Smooth scroll for the navigation menu and links with .scrollto classes\n\n  var scrolltoOffset = $('#header').outerHeight() - 1;\n  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function (e) {\n    if (location.pathname.replace(/^\\//, '') == this.pathname.replace(/^\\//, '') && location.hostname == this.hostname) {\n      var target = $(this.hash);\n\n      if (target.length) {\n        e.preventDefault();\n        var scrollto = target.offset().top - scrolltoOffset;\n\n        if ($(this).attr(\"href\") == '#header') {\n          scrollto = 0;\n        }\n\n        $('html, body').animate({\n          scrollTop: scrollto\n        }, 1500, 'easeInOutExpo');\n\n        if ($(this).parents('.nav-menu, .mobile-nav').length) {\n          $('.nav-menu .active, .mobile-nav .active').removeClass('active');\n          $(this).closest('li').addClass('active');\n        }\n\n        if ($('body').hasClass('mobile-nav-active')) {\n          $('body').removeClass('mobile-nav-active');\n          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');\n          $('.mobile-nav-overly').fadeOut();\n        }\n\n        return false;\n      }\n    }\n  }); // Activate smooth scroll on page load with hash links in the url\n\n  $(document).ready(function () {\n    if (window.location.hash) {\n      var initial_nav = window.location.hash;\n\n      if ($(initial_nav).length) {\n        var scrollto = $(initial_nav).offset().top - scrolltoOffset;\n        $('html, body').animate({\n          scrollTop: scrollto\n        }, 1500, 'easeInOutExpo');\n      }\n    }\n  }); // Mobile Navigation\n\n  if ($('.nav-menu').length) {\n    var $mobile_nav = $('.nav-menu').clone().prop({\n      class: 'mobile-nav d-lg-none'\n    });\n    $('body').append($mobile_nav);\n    $('body').prepend('<button type=\"button\" class=\"mobile-nav-toggle d-lg-none\"><i class=\"icofont-navigation-menu\"></i></button>');\n    $('body').append('<div class=\"mobile-nav-overly\"></div>');\n    $(document).on('click', '.mobile-nav-toggle', function (e) {\n      $('body').toggleClass('mobile-nav-active');\n      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');\n      $('.mobile-nav-overly').toggle();\n    });\n    $(document).on('click', '.mobile-nav .drop-down > a', function (e) {\n      e.preventDefault();\n      $(this).next().slideToggle(300);\n      $(this).parent().toggleClass('active');\n    });\n    $(document).click(function (e) {\n      var container = $(\".mobile-nav, .mobile-nav-toggle\");\n\n      if (!container.is(e.target) && container.has(e.target).length === 0) {\n        if ($('body').hasClass('mobile-nav-active')) {\n          $('body').removeClass('mobile-nav-active');\n          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');\n          $('.mobile-nav-overly').fadeOut();\n        }\n      }\n    });\n  } else if ($(\".mobile-nav, .mobile-nav-toggle\").length) {\n    $(\".mobile-nav, .mobile-nav-toggle\").hide();\n  } // Back to top button\n\n\n  $(window).scroll(function () {\n    if ($(this).scrollTop() > 100) {\n      $('.back-to-top').fadeIn('slow');\n    } else {\n      $('.back-to-top').fadeOut('slow');\n    }\n  });\n  $('.back-to-top').click(function () {\n    $('html, body').animate({\n      scrollTop: 0\n    }, 1500, 'easeInOutExpo');\n    return false;\n  }); // jQuery counterUp\n\n  $('[data-toggle=\"counter-up\"]').counterUp({\n    delay: 10,\n    time: 1000\n  }); // Testimonials carousel (uses the Owl Carousel library)\n\n  $(\".testimonials-carousel\").owlCarousel({\n    autoplay: true,\n    dots: true,\n    loop: true,\n    responsive: {\n      0: {\n        items: 1\n      },\n      768: {\n        items: 1\n      },\n      900: {\n        items: 2\n      }\n    }\n  }); // Init AOS\n\n  $(window).on('load', function () {\n    AOS.init({\n      duration: 1000,\n      once: true\n    });\n  });\n}(jQuery);\n\n//# sourceURL=webpack://arnavi/./server/assets/js/main.js?");

/***/ }),

/***/ "./server/assets/css/style.css":
/*!*************************************!*\
  !*** ./server/assets/css/style.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://arnavi/./server/assets/css/style.css?");

/***/ }),

/***/ "./server/assets/vendor/aos/aos.css":
/*!******************************************!*\
  !*** ./server/assets/vendor/aos/aos.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://arnavi/./server/assets/vendor/aos/aos.css?");

/***/ }),

/***/ "./server/assets/vendor/bootstrap/css/bootstrap.min.css":
/*!**************************************************************!*\
  !*** ./server/assets/vendor/bootstrap/css/bootstrap.min.css ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://arnavi/./server/assets/vendor/bootstrap/css/bootstrap.min.css?");

/***/ }),

/***/ "./server/assets/vendor/boxicons/css/boxicons.min.css":
/*!************************************************************!*\
  !*** ./server/assets/vendor/boxicons/css/boxicons.min.css ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://arnavi/./server/assets/vendor/boxicons/css/boxicons.min.css?");

/***/ }),

/***/ "./server/assets/vendor/icofont/icofont.min.css":
/*!******************************************************!*\
  !*** ./server/assets/vendor/icofont/icofont.min.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://arnavi/./server/assets/vendor/icofont/icofont.min.css?");

/***/ }),

/***/ "./server/assets/vendor/owl.carousel/assets/owl.carousel.min.css":
/*!***********************************************************************!*\
  !*** ./server/assets/vendor/owl.carousel/assets/owl.carousel.min.css ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://arnavi/./server/assets/vendor/owl.carousel/assets/owl.carousel.min.css?");

/***/ }),

/***/ "./server/assets/vendor/remixicon/remixicon.css":
/*!******************************************************!*\
  !*** ./server/assets/vendor/remixicon/remixicon.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://arnavi/./server/assets/vendor/remixicon/remixicon.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/assets/js/main.js");
/******/ 	
/******/ })()
;