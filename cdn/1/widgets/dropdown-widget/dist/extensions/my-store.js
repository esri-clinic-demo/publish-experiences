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

/***/ "./your-extensions/widgets/dropdown-widget/src/extensions/my-store.ts":
/*!****************************************************************************!*\
  !*** ./your-extensions/widgets/dropdown-widget/src/extensions/my-store.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MyActionKeys\": () => (/* binding */ MyActionKeys),\n/* harmony export */   \"default\": () => (/* binding */ MyReduxStoreExtension)\n/* harmony export */ });\n/* Setting up Redux extension that is also accessed by the dropdown-check-button */\nvar MyActionKeys;\n(function (MyActionKeys) {\n    MyActionKeys[\"MyAction1\"] = \"MY_ACTION_1\";\n})(MyActionKeys || (MyActionKeys = {}));\nclass MyReduxStoreExtension {\n    constructor() {\n        this.id = 'my-local-redux-store-extension';\n    }\n    getActions() {\n        return Object.keys(MyActionKeys).map(k => MyActionKeys[k]);\n    }\n    getInitLocalState() {\n        const initialArray = [];\n        return {\n            a: initialArray\n        };\n    }\n    getReducer() {\n        return (localState, action, appState) => {\n            switch (action.type) {\n                // when a dropdown answer is selected this case runs\n                case MyActionKeys.MyAction1:\n                    // gets the index in the array of the specific dropdown that is being changed\n                    const index = localState.a.findIndex(dropdown => dropdown.id === action.widgetID);\n                    console.log(index);\n                    // PUSH CASE --> if this is the first time the dropdown is changed, push a DropdownObject onto the array\n                    if (index === -1) {\n                        const toAdd = { \"id\": action.widgetID, \"val\": action.dropdownValue };\n                        return localState.updateIn(['a'], arr => arr.concat(toAdd));\n                    }\n                    // MODIFY CASE --> if this is not the first time the dropdown is changed, modify the DropdownObject\n                    else {\n                        return localState.setIn(['a', index, \"val\"], action.dropdownValue);\n                    }\n                // return localState;\n                default:\n                    return localState;\n            }\n            console.log(localState.a);\n        };\n    }\n    getStoreKey() {\n        return 'myState';\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9kcm9wZG93bi13aWRnZXQvc3JjL2V4dGVuc2lvbnMvbXktc3RvcmUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBMkJBO0FBQUE7QUFDQTtBQXlDQTtBQXZDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9kcm9wZG93bi13aWRnZXQvc3JjL2V4dGVuc2lvbnMvbXktc3RvcmUudHM/ODViMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaW50bCBmcm9tICdlc3JpL2ludGwnO1xuaW1wb3J0IHsgZXh0ZW5zaW9uU3BlYywgSW1tdXRhYmxlT2JqZWN0LCBJTVN0YXRlIH0gZnJvbSAnamltdS1jb3JlJztcbi8qIFNldHRpbmcgdXAgUmVkdXggZXh0ZW5zaW9uIHRoYXQgaXMgYWxzbyBhY2Nlc3NlZCBieSB0aGUgZHJvcGRvd24tY2hlY2stYnV0dG9uICovXG5cbmV4cG9ydCBlbnVtIE15QWN0aW9uS2V5cyB7XG4gIE15QWN0aW9uMSA9ICdNWV9BQ1RJT05fMSdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBY3Rpb24xIHtcbiAgdHlwZTogTXlBY3Rpb25LZXlzLk15QWN0aW9uMTtcbiAgd2lkZ2V0SUQ6IHN0cmluZztcbiAgZHJvcGRvd25WYWx1ZTogbnVtYmVyO1xufVxuXG50eXBlIEFjdGlvblR5cGVzID0gQWN0aW9uMVxuXG5pbnRlcmZhY2UgRHJvcGRvd25PYmplY3Qge1xuICB2YWw6IG51bWJlcjtcbiAgaWQ6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIE15U3RhdGUge1xuICBhOiBBcnJheTxEcm9wZG93bk9iamVjdD47XG59XG5cbnR5cGUgSU1NeVN0YXRlID0gSW1tdXRhYmxlT2JqZWN0PE15U3RhdGU+O1xuXG5kZWNsYXJlIG1vZHVsZSAnamltdS1jb3JlL2xpYi90eXBlcy9zdGF0ZSd7XG4gIGludGVyZmFjZSBTdGF0ZXtcbiAgICBteVN0YXRlPzogSU1NeVN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlSZWR1eFN0b3JlRXh0ZW5zaW9uIGltcGxlbWVudHMgZXh0ZW5zaW9uU3BlYy5SZWR1eFN0b3JlRXh0ZW5zaW9uIHtcbiAgaWQgPSAnbXktbG9jYWwtcmVkdXgtc3RvcmUtZXh0ZW5zaW9uJztcblxuICBnZXRBY3Rpb25zKCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhNeUFjdGlvbktleXMpLm1hcChrID0+IE15QWN0aW9uS2V5c1trXSk7XG4gIH1cblxuICBnZXRJbml0TG9jYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBpbml0aWFsQXJyYXkgOiBBcnJheTxEcm9wZG93bk9iamVjdD4gPSBbXTtcbiAgICByZXR1cm4ge1xuICAgICAgYTogaW5pdGlhbEFycmF5XG4gICAgfVxuICB9XG5cbiAgZ2V0UmVkdWNlcigpIHtcbiAgICByZXR1cm4gKGxvY2FsU3RhdGU6IElNTXlTdGF0ZSwgYWN0aW9uOiBBY3Rpb25UeXBlcywgYXBwU3RhdGU6IElNU3RhdGUpOiBJTU15U3RhdGUgPT4ge1xuICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICAvLyB3aGVuIGEgZHJvcGRvd24gYW5zd2VyIGlzIHNlbGVjdGVkIHRoaXMgY2FzZSBydW5zXG4gICAgICAgIGNhc2UgTXlBY3Rpb25LZXlzLk15QWN0aW9uMTpcbiAgICAgICAgICAvLyBnZXRzIHRoZSBpbmRleCBpbiB0aGUgYXJyYXkgb2YgdGhlIHNwZWNpZmljIGRyb3Bkb3duIHRoYXQgaXMgYmVpbmcgY2hhbmdlZFxuICAgICAgICAgIGNvbnN0IGluZGV4ID0gbG9jYWxTdGF0ZS5hLmZpbmRJbmRleChkcm9wZG93biA9PiBkcm9wZG93bi5pZCA9PT0gYWN0aW9uLndpZGdldElEKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgICAgICAgLy8gUFVTSCBDQVNFIC0tPiBpZiB0aGlzIGlzIHRoZSBmaXJzdCB0aW1lIHRoZSBkcm9wZG93biBpcyBjaGFuZ2VkLCBwdXNoIGEgRHJvcGRvd25PYmplY3Qgb250byB0aGUgYXJyYXlcbiAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBjb25zdCB0b0FkZCA6IERyb3Bkb3duT2JqZWN0ID0ge1wiaWRcIjogYWN0aW9uLndpZGdldElELCBcInZhbFwiOiBhY3Rpb24uZHJvcGRvd25WYWx1ZX07XG4gICAgICAgICAgICByZXR1cm4gbG9jYWxTdGF0ZS51cGRhdGVJbihbJ2EnXSwgYXJyID0+IGFyci5jb25jYXQodG9BZGQpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gTU9ESUZZIENBU0UgLS0+IGlmIHRoaXMgaXMgbm90IHRoZSBmaXJzdCB0aW1lIHRoZSBkcm9wZG93biBpcyBjaGFuZ2VkLCBtb2RpZnkgdGhlIERyb3Bkb3duT2JqZWN0XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbG9jYWxTdGF0ZS5zZXRJbihbJ2EnLCBpbmRleCwgXCJ2YWxcIl0sIGFjdGlvbi5kcm9wZG93blZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gcmV0dXJuIGxvY2FsU3RhdGU7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIGxvY2FsU3RhdGU7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhsb2NhbFN0YXRlLmEpO1xuICAgIH1cbiAgfVxuXG4gIGdldFN0b3JlS2V5KCkge1xuICAgIHJldHVybiAnbXlTdGF0ZSc7XG4gIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./your-extensions/widgets/dropdown-widget/src/extensions/my-store.ts\n");

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
/******/ 	__webpack_modules__["./your-extensions/widgets/dropdown-widget/src/extensions/my-store.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});