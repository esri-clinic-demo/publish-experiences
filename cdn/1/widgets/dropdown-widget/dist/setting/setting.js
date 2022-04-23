/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
System.register(["jimu-core","jimu-ui/advanced/setting-components","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
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
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
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

/***/ "./your-extensions/widgets/dropdown-widget/src/setting/setting.tsx":
/*!*************************************************************************!*\
  !*** ./your-extensions/widgets/dropdown-widget/src/setting/setting.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Setting)\n/* harmony export */ });\n/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ \"jimu-core\");\n/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ \"jimu-ui/advanced/setting-components\");\n/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ \"jimu-ui\");\n\n\n\nclass Setting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {\n    constructor(props) {\n        var _a, _b;\n        super(props);\n        this.onDropdownTextChange = (event) => {\n            /**\n             * In the text input area, author should input instructions\n             * separate by a new line.\n             * Each new line will create an element in the widget\n             * once it re-renders.\n             */\n            this.setState({ dropdownTextareaValue: event.target.value });\n            this.props.onSettingChange({\n                id: this.props.id,\n                config: this.props.config.set(\"dropdownOptions\", event.target.value.split(\"\\n\")),\n            });\n        };\n        this.onButtonClick = (event) => {\n            /**\n             * Set the isClicked variable in the config file to true\n             * This will initiate an update in the widget\n             * The text from the text input area will appear in the widget\n             */\n            this.props.onSettingChange({\n                id: this.props.id,\n                config: this.props.config.set(\"updateDropdown\", true),\n            });\n        };\n        this.state = {\n            /**\n             * Initialize the settings panel interface\n             */\n            dropdownTextareaValue: ((_a = this.props.config) === null || _a === void 0 ? void 0 : _a.dropdownOptions) === undefined\n                ? \"\"\n                : (_b = this.props.config) === null || _b === void 0 ? void 0 : _b.dropdownOptions.join(\"\\n\")\n        };\n    }\n    render() {\n        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(\"div\", { className: \"input-dropdown-options-in-text\" },\n            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: this.props.intl.formatMessage({\n                    id: \"dropdownOptions\",\n                    defaultMessage: \"Dropdown Options\",\n                }) },\n                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,\n                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(\"textarea\", { className: \"w-100 p-1\", style: { whiteSpace: \"pre\", minHeight: \"100px\" }, value: this.state.dropdownTextareaValue, onChange: this.onDropdownTextChange })),\n                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,\n                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { onClick: this.onButtonClick }, \"Update Dropdown Options\")))));\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9kcm9wZG93bi13aWRnZXQvc3JjL3NldHRpbmcvc2V0dGluZy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBRUE7QUFJQTtBQWFBO0FBR0E7O0FBQ0E7QUFZQTtBQUNBOzs7OztBQUtBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTs7OztBQUlBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQTVDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQXNDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBU0E7QUFDQTtBQU9BO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvZHJvcGRvd24td2lkZ2V0L3NyYy9zZXR0aW5nL3NldHRpbmcudHN4P2NlYjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwiamltdS1jb3JlXCI7XG5pbXBvcnQgeyBBbGxXaWRnZXRTZXR0aW5nUHJvcHMgfSBmcm9tIFwiamltdS1mb3ItYnVpbGRlclwiO1xuaW1wb3J0IHtcbiAgU2V0dGluZ1JvdyxcbiAgU2V0dGluZ1NlY3Rpb24sXG59IGZyb20gXCJqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcImppbXUtdWlcIjtcbmltcG9ydCB7IElNQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuXG5cbmludGVyZmFjZSBJU3RhdGUge1xuICAvKipcbiAgICogU2V0dGluZ3MgaW50ZXJmYWNlIHBhbmVsXG4gICAqIFRoZSBwYW5lbCB3aWxsIGluY2x1ZGUgYSBzZWN0aW9uIGZvciBpbnB1dHRpbmcgaW5zdHJ1Y3Rpb24gdGV4dCwgYW5kIFVSTCBmb3IgdGhlIG1hcFxuICAgKi9cbiAgXG4gIGRyb3Bkb3duVGV4dGFyZWFWYWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxcbiAgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzPElNQ29uZmlnPixcbiAgSVN0YXRlPiB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbml0aWFsaXplIHRoZSBzZXR0aW5ncyBwYW5lbCBpbnRlcmZhY2VcbiAgICAgICAgICovXG4gICAgICAgIGRyb3Bkb3duVGV4dGFyZWFWYWx1ZTpcbiAgICAgICAgICB0aGlzLnByb3BzLmNvbmZpZz8uZHJvcGRvd25PcHRpb25zID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gXCJcIlxuICAgICAgICAgICAgOiB0aGlzLnByb3BzLmNvbmZpZz8uZHJvcGRvd25PcHRpb25zLmpvaW4oXCJcXG5cIilcbiAgICAgIH07XG4gICAgfVxuXG4gIG9uRHJvcGRvd25UZXh0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgLyoqXG4gICAgICogSW4gdGhlIHRleHQgaW5wdXQgYXJlYSwgYXV0aG9yIHNob3VsZCBpbnB1dCBpbnN0cnVjdGlvbnNcbiAgICAgKiBzZXBhcmF0ZSBieSBhIG5ldyBsaW5lLlxuICAgICAqIEVhY2ggbmV3IGxpbmUgd2lsbCBjcmVhdGUgYW4gZWxlbWVudCBpbiB0aGUgd2lkZ2V0XG4gICAgICogb25jZSBpdCByZS1yZW5kZXJzLlxuICAgICAqL1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRyb3Bkb3duVGV4dGFyZWFWYWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuXG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXG4gICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLnNldChcbiAgICAgICAgXCJkcm9wZG93bk9wdGlvbnNcIixcbiAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlLnNwbGl0KFwiXFxuXCIpLFxuICAgICAgKSxcbiAgICB9KTtcbiAgfTtcblxuICBvbkJ1dHRvbkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBpc0NsaWNrZWQgdmFyaWFibGUgaW4gdGhlIGNvbmZpZyBmaWxlIHRvIHRydWVcbiAgICAgKiBUaGlzIHdpbGwgaW5pdGlhdGUgYW4gdXBkYXRlIGluIHRoZSB3aWRnZXRcbiAgICAgKiBUaGUgdGV4dCBmcm9tIHRoZSB0ZXh0IGlucHV0IGFyZWEgd2lsbCBhcHBlYXIgaW4gdGhlIHdpZGdldFxuICAgICAqL1xuXG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXG4gICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLnNldChcbiAgICAgICAgXCJ1cGRhdGVEcm9wZG93blwiLFxuICAgICAgICB0cnVlXG4gICAgICApLFxuICAgIH0pO1xuICB9O1xuXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZHJvcGRvd24tb3B0aW9ucy1pbi10ZXh0XCI+XG5cbiAgICAgICAgPFNldHRpbmdTZWN0aW9uXG4gICAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHtcbiAgICAgICAgICAgIGlkOiBcImRyb3Bkb3duT3B0aW9uc1wiLFxuICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U6IFwiRHJvcGRvd24gT3B0aW9uc1wiLFxuICAgICAgICAgIH0pfVxuICAgICAgICA+XG5cbiAgICAgICAgICB7LyogUmVuZGVyIHRleHQgaW5wdXQgYXJlYSBmb3IgaW5zdHJ1Y3Rpb25zICovfVxuICAgICAgICAgIDxTZXR0aW5nUm93PlxuICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwIHAtMVwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdoaXRlU3BhY2U6IFwicHJlXCIsIG1pbkhlaWdodDogXCIxMDBweFwiIH19XG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRyb3Bkb3duVGV4dGFyZWFWYWx1ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25Ecm9wZG93blRleHRDaGFuZ2V9XG4gICAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICA8L1NldHRpbmdSb3c+XG5cbiAgICAgICAgICB7LyogUmVuZGVyIGJ1dHRvbiB0byB1cGRhdGUgaW5zdHJ1Y3Rpb25zICovfVxuICAgICAgICAgIDxTZXR0aW5nUm93PlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uQnV0dG9uQ2xpY2t9PlxuICAgICAgICAgICAgICBVcGRhdGUgRHJvcGRvd24gT3B0aW9uc1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9TZXR0aW5nUm93PlxuICAgICAgICA8L1NldHRpbmdTZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./your-extensions/widgets/dropdown-widget/src/setting/setting.tsx\n");

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

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
/******/ 	var __webpack_exports__ = __webpack_require__("./your-extensions/widgets/dropdown-widget/src/setting/setting.tsx");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});