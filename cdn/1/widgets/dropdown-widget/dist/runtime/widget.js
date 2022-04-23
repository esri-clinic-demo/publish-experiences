/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
System.register(["jimu-core"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
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

/***/ "./your-extensions/widgets/dropdown-widget/src/runtime/widget.tsx":
/*!************************************************************************!*\
  !*** ./your-extensions/widgets/dropdown-widget/src/runtime/widget.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Widget)\n/* harmony export */ });\n/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ \"jimu-core\");\n/** @jsx jsx */\n/**\n  Licensing\n\n  Copyright 2022 Esri\n\n  Licensed under the Apache License, Version 2.0 (the \"License\"); You\n  may not use this file except in compliance with the License. You may\n  obtain a copy of the License at\n  http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or\n  implied. See the License for the specific language governing\n  permissions and limitations under the License.\n\n  A copy of the license is available in the repository's\n  LICENSE file.\n*/\n\nconst shuffleItems = (items) => {\n    /*\n     * Shuffles all items provided and returns them in shuffled order.\n     *\n     * Inputs\n     *    items <[dict]> each item is a dictionary with id and content keys\n     * Returns\n     *    returns shuffled items array - the id and content of each item is unchanged\n     */\n    let shuffled_items = items;\n    if (items.length > 1) {\n        shuffled_items.sort(() => Math.random() - 0.5);\n    }\n    ;\n    return shuffled_items;\n};\nclass Widget extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {\n    constructor(props) {\n        super(props);\n        // this function is called when the dropdown is changed\n        // it passes information to the Redux reducer where the\n        // information is then stored and used by check-dropdown-button\n        this.onChange = (evt) => {\n            const valueConst = evt.target.value;\n            this.props.dispatch({\n                type: 'MY_ACTION_1',\n                widgetID: this.props.id,\n                dropdownValue: valueConst,\n            });\n        };\n        this.state = {\n            items: this.initializeItems(),\n            updateDropdown: false,\n        };\n    }\n    /**\n     * Map the state your widget needs\n     * @param state\n     */\n    static mapExtraStateProps(state) {\n        return { a: state.myState.a };\n    }\n    initializeItems() {\n        /*\n         * Creates items based in the text in the configuration variable\n         * called dropdownOptions\n         */\n        this.props.config.updateDropdown = false; // resets button in settings panel\n        let count = 0;\n        let dropdownOptions = this.props.config.dropdownOptions; // text to make into items\n        if (dropdownOptions != undefined) {\n            count = dropdownOptions.length; // if dropdownOptions is not an empty string\n        }\n        let arr = Array.from({ length: count }, (v, k) => k).map((k) => ({\n            value: `${k}`,\n            content: `${dropdownOptions[k]}` // split by new line - controlled in settings\n        }));\n        return shuffleItems(arr);\n    }\n    getItems() {\n        /*\n         * Gets items within widget when widget is re-rendered. If the\n         * 'update instruction' button in the settings panel has been\n         * clicked, reinitialize items. Else, return current items.\n         */\n        if (this.props.config.updateDropdown) { // updated instructions\n            let shuffledArr = this.initializeItems();\n            this.setState({ items: shuffledArr }); // update items\n            return shuffledArr;\n        }\n        else {\n            return this.state.items; // return current items\n        }\n    }\n    ;\n    render() {\n        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"widget-use-redux jimu-widget m-2\" },\n            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"select\", { onChange: this.onChange },\n                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", { value: \"1\" }),\n                this.getItems().map((i) => {\n                    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", { value: i.value }, i.content);\n                }))));\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9kcm9wZG93bi13aWRnZXQvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTtBQUNBO0FBSUE7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQWNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9kcm9wZG93bi13aWRnZXQvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeD8xY2JjIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuLyoqXG4gIExpY2Vuc2luZ1xuXG4gIENvcHlyaWdodCAyMDIyIEVzcmlcblxuICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyBZb3VcbiAgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXlcbiAgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yXG4gIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZ1xuICBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5cbiAgQSBjb3B5IG9mIHRoZSBsaWNlbnNlIGlzIGF2YWlsYWJsZSBpbiB0aGUgcmVwb3NpdG9yeSdzXG4gIExJQ0VOU0UgZmlsZS5cbiovXG5pbXBvcnQgeyBSZWFjdCwgQWxsV2lkZ2V0UHJvcHMsIGpzeCwgSU1TdGF0ZSB9IGZyb20gJ2ppbXUtY29yZSc7XG5pbXBvcnQgeyBJTUNvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCBEcm9wZG93bk9iamVjdCBmcm9tICcuLi9leHRlbnNpb25zL215LXN0b3JlJ1xuXG5jb25zdCBzaHVmZmxlSXRlbXMgPSAoaXRlbXMpID0+IHtcbiAgLypcbiAgICogU2h1ZmZsZXMgYWxsIGl0ZW1zIHByb3ZpZGVkIGFuZCByZXR1cm5zIHRoZW0gaW4gc2h1ZmZsZWQgb3JkZXIuXG4gICAqXG4gICAqIElucHV0c1xuICAgKiAgICBpdGVtcyA8W2RpY3RdPiBlYWNoIGl0ZW0gaXMgYSBkaWN0aW9uYXJ5IHdpdGggaWQgYW5kIGNvbnRlbnQga2V5c1xuICAgKiBSZXR1cm5zXG4gICAqICAgIHJldHVybnMgc2h1ZmZsZWQgaXRlbXMgYXJyYXkgLSB0aGUgaWQgYW5kIGNvbnRlbnQgb2YgZWFjaCBpdGVtIGlzIHVuY2hhbmdlZFxuICAgKi9cbiAgbGV0IHNodWZmbGVkX2l0ZW1zID0gaXRlbXM7XG4gIGlmIChpdGVtcy5sZW5ndGggPiAxKSB7XG4gICAgc2h1ZmZsZWRfaXRlbXMuc29ydCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gMC41KTtcbiAgfTtcbiAgcmV0dXJuIHNodWZmbGVkX2l0ZW1zXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lkZ2V0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4gJiB7YTogQXJyYXk8RHJvcGRvd25PYmplY3Q+fSwge30+IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGl0ZW1zOiB0aGlzLmluaXRpYWxpemVJdGVtcygpLFxuICAgICAgdXBkYXRlRHJvcGRvd246IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogTWFwIHRoZSBzdGF0ZSB5b3VyIHdpZGdldCBuZWVkc1xuICAgKiBAcGFyYW0gc3RhdGVcbiAgICovXG4gIHN0YXRpYyBtYXBFeHRyYVN0YXRlUHJvcHMoc3RhdGU6IElNU3RhdGUpe1xuICAgIHJldHVybiB7YTogc3RhdGUubXlTdGF0ZS5hfTtcbiAgfVxuXG4gIGluaXRpYWxpemVJdGVtcygpe1xuICAgIC8qXG4gICAgICogQ3JlYXRlcyBpdGVtcyBiYXNlZCBpbiB0aGUgdGV4dCBpbiB0aGUgY29uZmlndXJhdGlvbiB2YXJpYWJsZVxuICAgICAqIGNhbGxlZCBkcm9wZG93bk9wdGlvbnNcbiAgICAgKi9cbiAgICB0aGlzLnByb3BzLmNvbmZpZy51cGRhdGVEcm9wZG93biA9IGZhbHNlOyAgLy8gcmVzZXRzIGJ1dHRvbiBpbiBzZXR0aW5ncyBwYW5lbFxuICAgIGxldCBjb3VudCA9IDA7XG4gICAgbGV0IGRyb3Bkb3duT3B0aW9ucyA9IHRoaXMucHJvcHMuY29uZmlnLmRyb3Bkb3duT3B0aW9uczsgIC8vIHRleHQgdG8gbWFrZSBpbnRvIGl0ZW1zXG4gIFxuICAgIGlmIChkcm9wZG93bk9wdGlvbnMgIT0gdW5kZWZpbmVkKXtcbiAgICAgIGNvdW50ID0gZHJvcGRvd25PcHRpb25zLmxlbmd0aDsgIC8vIGlmIGRyb3Bkb3duT3B0aW9ucyBpcyBub3QgYW4gZW1wdHkgc3RyaW5nXG4gICAgfVxuXG4gICAgbGV0IGFyciA9IEFycmF5LmZyb20oeyBsZW5ndGg6IGNvdW50IH0sICh2LCBrKSA9PiBrKS5tYXAoKGspID0+ICh7XG4gICAgICB2YWx1ZTogYCR7a31gLCAgLy8gSWQgaXMgdGhlIG9yZGVyIHRoZSBpdGVtIFNIT1VMRCBiZSBpbiAtIGluaXRpYWwgb3JkZXJcbiAgICAgIGNvbnRlbnQ6IGAke2Ryb3Bkb3duT3B0aW9uc1trXX1gICAvLyBzcGxpdCBieSBuZXcgbGluZSAtIGNvbnRyb2xsZWQgaW4gc2V0dGluZ3NcbiAgICB9KSlcblxuICAgIHJldHVybiBzaHVmZmxlSXRlbXMoYXJyKTtcbiAgfVxuXG4gIGdldEl0ZW1zKCkge1xuICAgIC8qXG4gICAgICogR2V0cyBpdGVtcyB3aXRoaW4gd2lkZ2V0IHdoZW4gd2lkZ2V0IGlzIHJlLXJlbmRlcmVkLiBJZiB0aGVcbiAgICAgKiAndXBkYXRlIGluc3RydWN0aW9uJyBidXR0b24gaW4gdGhlIHNldHRpbmdzIHBhbmVsIGhhcyBiZWVuXG4gICAgICogY2xpY2tlZCwgcmVpbml0aWFsaXplIGl0ZW1zLiBFbHNlLCByZXR1cm4gY3VycmVudCBpdGVtcy5cbiAgICAgKi9cbiAgICBpZiAodGhpcy5wcm9wcy5jb25maWcudXBkYXRlRHJvcGRvd24pIHsgIC8vIHVwZGF0ZWQgaW5zdHJ1Y3Rpb25zXG4gICAgICBsZXQgc2h1ZmZsZWRBcnIgPSB0aGlzLmluaXRpYWxpemVJdGVtcygpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7aXRlbXM6IHNodWZmbGVkQXJyfSkgIC8vIHVwZGF0ZSBpdGVtc1xuICAgICAgcmV0dXJuIHNodWZmbGVkQXJyO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLml0ZW1zOyAgLy8gcmV0dXJuIGN1cnJlbnQgaXRlbXNcbiAgICB9XG4gIH07XG5cbiAgLy8gdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgd2hlbiB0aGUgZHJvcGRvd24gaXMgY2hhbmdlZFxuICAvLyBpdCBwYXNzZXMgaW5mb3JtYXRpb24gdG8gdGhlIFJlZHV4IHJlZHVjZXIgd2hlcmUgdGhlXG4gIC8vIGluZm9ybWF0aW9uIGlzIHRoZW4gc3RvcmVkIGFuZCB1c2VkIGJ5IGNoZWNrLWRyb3Bkb3duLWJ1dHRvblxuICBvbkNoYW5nZSA9IChldnQpID0+IHtcbiAgICBjb25zdCB2YWx1ZUNvbnN0ID0gZXZ0LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdNWV9BQ1RJT05fMScsXG4gICAgICB3aWRnZXRJRDogdGhpcy5wcm9wcy5pZCxcbiAgICAgIGRyb3Bkb3duVmFsdWU6IHZhbHVlQ29uc3QsXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LXVzZS1yZWR1eCBqaW11LXdpZGdldCBtLTJcIj5cbiAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj48L29wdGlvbj5cbiAgICAgICAgICB7dGhpcy5nZXRJdGVtcygpLm1hcCgoaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxvcHRpb24gdmFsdWU9e2kudmFsdWV9PntpLmNvbnRlbnR9PC9vcHRpb24+O1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./your-extensions/widgets/dropdown-widget/src/runtime/widget.tsx\n");

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

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
/******/ 	var __webpack_exports__ = __webpack_require__("./your-extensions/widgets/dropdown-widget/src/runtime/widget.tsx");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});