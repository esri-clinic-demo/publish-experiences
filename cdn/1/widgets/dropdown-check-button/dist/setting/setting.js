/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
System.register(["jimu-core","jimu-ui/advanced/setting-components"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./jimu-core/lib/set-public-path.ts":
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("/**\n * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.\n * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.\n * */\n// eslint-disable-next-line\n// @ts-ignore\n__webpack_require__.p = window.jimuConfig.baseUrl;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cy5qcyIsIm1hcHBpbmdzIjoiQUFBQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHM/NzA4MyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./jimu-core/lib/set-public-path.ts\n");

/***/ }),

/***/ "./your-extensions/widgets/dropdown-check-button/src/setting/setting.tsx":
/*!*******************************************************************************!*\
  !*** ./your-extensions/widgets/dropdown-check-button/src/setting/setting.tsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Setting)\n/* harmony export */ });\n/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ \"jimu-core\");\n/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ \"jimu-ui/advanced/setting-components\");\n\n\nclass Setting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {\n    constructor(props) {\n        var _a, _b;\n        super(props);\n        this.onMapSelected = (useMapWidgetIds) => {\n            /**\n             * Once a map is in the experience builder, a dropdown\n             * will show the maps to connect the widget to\n             */\n            this.props.onSettingChange({\n                id: this.props.id,\n                useMapWidgetIds: useMapWidgetIds,\n            });\n        };\n        this.onLayerTextChange = (event) => {\n            /**\n             * In the layer URL input area, author should input URLS for layers\n             * Layer URLS should be separated by a new line\n             */\n            this.setState({ layerTextareaValue: event.target.value });\n            this.props.onSettingChange({\n                id: this.props.id,\n                config: this.props.config.set(\"layerUrls\", event.target.value.split(\"\\n\")),\n            });\n        };\n        this.state = {\n            /**\n             * Initialize the settings panel interface\n             */\n            layerTextareaValue: ((_a = this.props.config) === null || _a === void 0 ? void 0 : _a.layerUrls) === undefined\n                ? \"\"\n                : (_b = this.props.config) === null || _b === void 0 ? void 0 : _b.layerUrls.join(\"\\n\")\n        };\n    }\n    render() {\n        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(\"div\", { className: \"input-instructions-in-text\" },\n            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: this.props.intl.formatMessage({\n                    id: \"selectedMapLabel\",\n                    defaultMessage: \"Map\",\n                }) },\n                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,\n                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.MapWidgetSelector, { onSelect: this.onMapSelected, useMapWidgetIds: this.props.useMapWidgetIds }))),\n            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: this.props.intl.formatMessage({\n                    id: \"toAdd\",\n                    defaultMessage: \"URL(s) of Layer(s) to Add\",\n                }) },\n                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,\n                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(\"textarea\", { className: \"w-100 p-1\", style: { whiteSpace: \"pre\", minHeight: \"100px\" }, value: this.state.layerTextareaValue, onChange: this.onLayerTextChange })))));\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9kcm9wZG93bi1jaGVjay1idXR0b24vc3JjL3NldHRpbmcvc2V0dGluZy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQTtBQWdCQTtBQUdBOztBQUNBO0FBWUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFwQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUE4QkE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQVVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvZHJvcGRvd24tY2hlY2stYnV0dG9uL3NyYy9zZXR0aW5nL3NldHRpbmcudHN4PzFiYmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwiamltdS1jb3JlXCI7XG5pbXBvcnQgeyBBbGxXaWRnZXRTZXR0aW5nUHJvcHMgfSBmcm9tIFwiamltdS1mb3ItYnVpbGRlclwiO1xuaW1wb3J0IHtcbiAgTWFwV2lkZ2V0U2VsZWN0b3IsXG4gIFNldHRpbmdSb3csXG4gIFNldHRpbmdTZWN0aW9uLFxufSBmcm9tIFwiamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IElNQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuXG5cbmludGVyZmFjZSBJU3RhdGUge1xuICAvKipcbiAgICogU2V0dGluZ3MgaW50ZXJmYWNlIHBhbmVsXG4gICAqIFRoZSBwYW5lbCB3aWxsIGluY2x1ZGUgYSBzZWN0aW9uIGZvciBpbnB1dHRpbmcgaW5zdHJ1Y3Rpb24gdGV4dCwgYW5kIFVSTCBmb3IgdGhlIG1hcFxuICAgKi9cbiAgbGF5ZXJUZXh0YXJlYVZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmcgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFxuICBBbGxXaWRnZXRTZXR0aW5nUHJvcHM8SU1Db25maWc+LFxuICBJU3RhdGU+IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluaXRpYWxpemUgdGhlIHNldHRpbmdzIHBhbmVsIGludGVyZmFjZVxuICAgICAgICAgKi9cbiAgICAgICAgbGF5ZXJUZXh0YXJlYVZhbHVlOlxuICAgICAgICAgIHRoaXMucHJvcHMuY29uZmlnPy5sYXllclVybHMgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBcIlwiXG4gICAgICAgICAgICA6IHRoaXMucHJvcHMuY29uZmlnPy5sYXllclVybHMuam9pbihcIlxcblwiKVxuICAgICAgfTtcbiAgICB9XG5cbiAgb25NYXBTZWxlY3RlZCA9ICh1c2VNYXBXaWRnZXRJZHM6IHN0cmluZ1tdKSA9PiB7XG4gICAgLyoqXG4gICAgICogT25jZSBhIG1hcCBpcyBpbiB0aGUgZXhwZXJpZW5jZSBidWlsZGVyLCBhIGRyb3Bkb3duXG4gICAgICogd2lsbCBzaG93IHRoZSBtYXBzIHRvIGNvbm5lY3QgdGhlIHdpZGdldCB0b1xuICAgICAqL1xuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcbiAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxuICAgICAgdXNlTWFwV2lkZ2V0SWRzOiB1c2VNYXBXaWRnZXRJZHMsXG4gICAgfSk7XG4gIH07XG5cbiAgb25MYXllclRleHRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAvKipcbiAgICAgKiBJbiB0aGUgbGF5ZXIgVVJMIGlucHV0IGFyZWEsIGF1dGhvciBzaG91bGQgaW5wdXQgVVJMUyBmb3IgbGF5ZXJzXG4gICAgICogTGF5ZXIgVVJMUyBzaG91bGQgYmUgc2VwYXJhdGVkIGJ5IGEgbmV3IGxpbmVcbiAgICAgKi9cblxuICAgIHRoaXMuc2V0U3RhdGUoeyBsYXllclRleHRhcmVhVmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcbiAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KFxuICAgICAgICBcImxheWVyVXJsc1wiLFxuICAgICAgICBldmVudC50YXJnZXQudmFsdWUuc3BsaXQoXCJcXG5cIilcbiAgICAgICksXG4gICAgfSk7XG4gIH07XG5cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1pbnN0cnVjdGlvbnMtaW4tdGV4dFwiPlxuICAgICAgICA8U2V0dGluZ1NlY3Rpb25cbiAgICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgaWQ6IFwic2VsZWN0ZWRNYXBMYWJlbFwiLFxuICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U6IFwiTWFwXCIsXG4gICAgICAgICAgfSl9XG4gICAgICAgID5cblxuICAgICAgICAgIHsvKiBSZW5kZXIgZHJvcGRvd24gbWVudSB0byBjb25uZWN0IHdpZGdldCB0byBhIG1hcCAqL31cbiAgICAgICAgICA8U2V0dGluZ1Jvdz5cbiAgICAgICAgICAgIDxNYXBXaWRnZXRTZWxlY3RvclxuICAgICAgICAgICAgICBvblNlbGVjdD17dGhpcy5vbk1hcFNlbGVjdGVkfVxuICAgICAgICAgICAgICB1c2VNYXBXaWRnZXRJZHM9e3RoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1NldHRpbmdSb3c+XG4gICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XG5cbiAgICAgICAgPFNldHRpbmdTZWN0aW9uXG4gICAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHtcbiAgICAgICAgICAgIGlkOiBcInRvQWRkXCIsXG4gICAgICAgICAgICBkZWZhdWx0TWVzc2FnZTogXCJVUkwocykgb2YgTGF5ZXIocykgdG8gQWRkXCIsXG4gICAgICAgICAgfSl9XG4gICAgICAgID5cblxuICAgICAgICAgIHsvKiBSZW5kZXIgdGV4dCBpbnB1dCBhcmVhIHRvIGFkZCBVUkwgdG8gbWFwIGxheWVyICovfVxuICAgICAgICAgIDxTZXR0aW5nUm93PlxuICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwIHAtMVwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdoaXRlU3BhY2U6IFwicHJlXCIsIG1pbkhlaWdodDogXCIxMDBweFwiIH19XG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmxheWVyVGV4dGFyZWFWYWx1ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25MYXllclRleHRDaGFuZ2V9XG4gICAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICA8L1NldHRpbmdSb3c+XG4gICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./your-extensions/widgets/dropdown-check-button/src/setting/setting.tsx\n");

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui/advanced/setting-components":
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./jimu-core/lib/set-public-path.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./your-extensions/widgets/dropdown-check-button/src/setting/setting.tsx");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});