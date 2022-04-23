/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
System.register([], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {


	return {

		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/dropdown-check-button/src/extensions/my-store.ts":
/*!**********************************************************************************!*\
  !*** ./your-extensions/widgets/dropdown-check-button/src/extensions/my-store.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MyActionKeys\": () => (/* binding */ MyActionKeys),\n/* harmony export */   \"default\": () => (/* binding */ MyReduxStoreExtension)\n/* harmony export */ });\n/* Setting up Redux extension that is also accessed by the dropdown-widget */\nvar MyActionKeys;\n(function (MyActionKeys) {\n    MyActionKeys[\"MyAction1\"] = \"MY_ACTION_1\";\n})(MyActionKeys || (MyActionKeys = {}));\nclass MyReduxStoreExtension {\n    constructor() {\n        this.id = 'my-local-redux-store-extension';\n    }\n    getActions() {\n        return Object.keys(MyActionKeys).map(k => MyActionKeys[k]);\n    }\n    getInitLocalState() {\n        const initialArray = [];\n        return {\n            a: initialArray\n        };\n    }\n    getReducer() {\n        return (localState, action, appState) => {\n            switch (action.type) {\n                case MyActionKeys.MyAction1:\n                    return localState.set('a', action.val);\n                default:\n                    return localState;\n            }\n        };\n    }\n    getStoreKey() {\n        return 'myState';\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9kcm9wZG93bi1jaGVjay1idXR0b24vc3JjL2V4dGVuc2lvbnMvbXktc3RvcmUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBMEJBO0FBQUE7QUFDQTtBQTJCQTtBQXpCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2Ryb3Bkb3duLWNoZWNrLWJ1dHRvbi9zcmMvZXh0ZW5zaW9ucy9teS1zdG9yZS50cz85YjQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4dGVuc2lvblNwZWMsIEltbXV0YWJsZU9iamVjdCwgSU1TdGF0ZSB9IGZyb20gJ2ppbXUtY29yZSc7XG4vKiBTZXR0aW5nIHVwIFJlZHV4IGV4dGVuc2lvbiB0aGF0IGlzIGFsc28gYWNjZXNzZWQgYnkgdGhlIGRyb3Bkb3duLXdpZGdldCAqL1xuXG5leHBvcnQgZW51bSBNeUFjdGlvbktleXMge1xuICBNeUFjdGlvbjEgPSAnTVlfQUNUSU9OXzEnXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uMSB7XG4gIHR5cGU6IE15QWN0aW9uS2V5cy5NeUFjdGlvbjE7XG4gIHZhbDogc3RyaW5nO1xufVxuXG50eXBlIEFjdGlvblR5cGVzID0gQWN0aW9uMVxuXG5pbnRlcmZhY2UgRHJvcGRvd25PYmplY3Qge1xuICB2YWw6IG51bWJlcjtcbiAgaWQ6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIE15U3RhdGUge1xuICBhOiBBcnJheTxEcm9wZG93bk9iamVjdD47XG59XG5cbnR5cGUgSU1NeVN0YXRlID0gSW1tdXRhYmxlT2JqZWN0PE15U3RhdGU+O1xuXG5kZWNsYXJlIG1vZHVsZSAnamltdS1jb3JlL2xpYi90eXBlcy9zdGF0ZSd7XG4gIGludGVyZmFjZSBTdGF0ZXtcbiAgICBteVN0YXRlPzogSU1NeVN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlSZWR1eFN0b3JlRXh0ZW5zaW9uIGltcGxlbWVudHMgZXh0ZW5zaW9uU3BlYy5SZWR1eFN0b3JlRXh0ZW5zaW9uIHtcbiAgaWQgPSAnbXktbG9jYWwtcmVkdXgtc3RvcmUtZXh0ZW5zaW9uJztcblxuICBnZXRBY3Rpb25zKCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhNeUFjdGlvbktleXMpLm1hcChrID0+IE15QWN0aW9uS2V5c1trXSk7XG4gIH1cblxuICBnZXRJbml0TG9jYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBpbml0aWFsQXJyYXkgOiBBcnJheTxEcm9wZG93bk9iamVjdD4gPSBbXTtcbiAgICByZXR1cm4ge1xuICAgICAgYTogaW5pdGlhbEFycmF5XG4gICAgfVxuICB9XG5cbiAgZ2V0UmVkdWNlcigpIHtcbiAgICByZXR1cm4gKGxvY2FsU3RhdGU6IElNTXlTdGF0ZSwgYWN0aW9uOiBBY3Rpb25UeXBlcywgYXBwU3RhdGU6IElNU3RhdGUpOiBJTU15U3RhdGUgPT4ge1xuICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIE15QWN0aW9uS2V5cy5NeUFjdGlvbjE6XG4gICAgICAgICAgcmV0dXJuIGxvY2FsU3RhdGUuc2V0KCdhJywgYWN0aW9uLnZhbCk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIGxvY2FsU3RhdGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0U3RvcmVLZXkoKSB7XG4gICAgcmV0dXJuICdteVN0YXRlJztcbiAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./your-extensions/widgets/dropdown-check-button/src/extensions/my-store.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./your-extensions/widgets/dropdown-check-button/src/extensions/my-store.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});