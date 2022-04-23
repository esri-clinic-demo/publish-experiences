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

/***/ "./your-extensions/widgets/Ordered Elements Add Layers/src/setting/setting.tsx":
/*!*************************************************************************************!*\
  !*** ./your-extensions/widgets/Ordered Elements Add Layers/src/setting/setting.tsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Setting)\n/* harmony export */ });\n/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ \"jimu-core\");\n/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ \"jimu-ui/advanced/setting-components\");\n/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ \"jimu-ui\");\n/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translations/default */ \"./your-extensions/widgets/Ordered Elements Add Layers/src/setting/translations/default.ts\");\n\n\n\n\nclass Setting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {\n    constructor(props) {\n        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;\n        super(props);\n        this.onMapSelected = (useMapWidgetIds) => {\n            /**\n             * Once a map is in the experience builder, a dropdown\n             * will show the maps to connect the widget to\n             */\n            this.props.onSettingChange({\n                id: this.props.id,\n                useMapWidgetIds: useMapWidgetIds,\n            });\n        };\n        this.onInstructTextChange = (event) => {\n            /**\n             * In the text input area, author should input instructions\n             * separate by a new line.\n             * Each new line will create an element in the widget\n             * once it re-renders.\n             */\n            this.setState({ instructTextareaValue: event.target.value });\n            this.props.onSettingChange({\n                id: this.props.id,\n                config: this.props.config.set(\"instructText\", event.target.value.split(\"\\n\")),\n            });\n        };\n        this.onButtonClick = (event) => {\n            /**\n             * Set the isClicked variable in the config file to true\n             * This will initiate an update in the widget\n             * The text from the text input area will appear in the widget\n             */\n            this.props.onSettingChange({\n                id: this.props.id,\n                config: this.props.config.set(\"isClicked\", true),\n            });\n        };\n        this.onLayerTextChange = (event) => {\n            /**\n             * In the layer URL input area, author should input URLS for layers\n             * Layer URLS should be separated by a new line\n             */\n            this.setState({ layerTextareaValue: event.target.value });\n            this.props.onSettingChange({\n                id: this.props.id,\n                config: this.props.config.set(\"layerUrls\", event.target.value.split(\"\\n\")),\n            });\n        };\n        this.onCodeTextChange = (event) => {\n            /**\n             * In the code text area, author should input HTML code\n             * for code pop-up\n             */\n            this.setState({ codeTextareaValue: event.target.value });\n            this.props.onSettingChange({\n                id: this.props.id,\n                config: this.props.config.set(\"codeText\", event.target.value),\n            });\n        };\n        this.onCheckChange = (event) => {\n            /**\n             * Under the code text area, author clicks the checkbox\n             * to set initial code visibility. Code is visible when checkbox is checked\n             */\n            let checkStatus = this.props.config.isChecked;\n            this.props.onSettingChange({\n                id: this.props.id,\n                config: this.props.config.set(\"isChecked\", !checkStatus),\n            });\n        };\n        console.log(\"TYPEOF undefined\", typeof ((_a = this.props.config) === null || _a === void 0 ? void 0 : _a.instructText) === undefined, typeof ((_b = this.props.config) === null || _b === void 0 ? void 0 : _b.layerUrls) === undefined, typeof ((_c = this.props.config) === null || _c === void 0 ? void 0 : _c.isClicked) === undefined, typeof ((_d = this.props.config) === null || _d === void 0 ? void 0 : _d.codeText) === undefined);\n        this.state = {\n            /**\n             * Initialize the settings panel interface\n             */\n            instructTextareaValue: ((_e = this.props.config) === null || _e === void 0 ? void 0 : _e.instructText) === undefined\n                ? \"\"\n                : (_f = this.props.config) === null || _f === void 0 ? void 0 : _f.instructText.join(\"\\n\"),\n            layerTextareaValue: ((_g = this.props.config) === null || _g === void 0 ? void 0 : _g.layerUrls) === undefined\n                ? \"\"\n                : (_h = this.props.config) === null || _h === void 0 ? void 0 : _h.layerUrls.join(\"\\n\"),\n            codeTextareaValue: ((_j = this.props.config) === null || _j === void 0 ? void 0 : _j.codeText) === undefined\n                ? \"<code></code>\"\n                : (_k = this.props.config) === null || _k === void 0 ? void 0 : _k.codeText,\n        };\n    }\n    render() {\n        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(\"div\", { className: \"input-instructions-in-text\" },\n            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: this.props.intl.formatMessage({\n                    id: \"selectedMapLabel\",\n                    defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_3__[\"default\"].selectedMap,\n                }) },\n                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,\n                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.MapWidgetSelector, { onSelect: this.onMapSelected, useMapWidgetIds: this.props.useMapWidgetIds }))),\n            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: this.props.intl.formatMessage({\n                    id: \"instructions\",\n                    defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_3__[\"default\"].instructions,\n                }) },\n                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,\n                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(\"textarea\", { className: \"w-100 p-1\", style: { whiteSpace: \"pre\", minHeight: \"100px\" }, value: this.state.instructTextareaValue, onChange: this.onInstructTextChange })),\n                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,\n                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { onClick: this.onButtonClick }, \"Update Instructions\"))),\n            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: this.props.intl.formatMessage({\n                    id: \"toAdd\",\n                    defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_3__[\"default\"].toAdd,\n                }) },\n                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,\n                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(\"textarea\", { className: \"w-100 p-1\", style: { whiteSpace: \"pre\", minHeight: \"100px\" }, value: this.state.layerTextareaValue, onChange: this.onLayerTextChange }))),\n            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: this.props.intl.formatMessage({\n                    id: \"codeArea\",\n                    defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_3__[\"default\"].codeArea,\n                }) },\n                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,\n                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(\"textarea\", { className: \"w-100 p-1\", style: { whiteSpace: \"pre\", minHeight: \"100px\" }, value: this.state.codeTextareaValue, onChange: this.onCodeTextChange })),\n                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,\n                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(\"label\", null,\n                        \"Set code default visibility:\\u00A0\",\n                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Checkbox, { checked: this.props.config.isChecked, onChange: this.onCheckChange }))))));\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9PcmRlcmVkIEVsZW1lbnRzIEFkZCBMYXllcnMvc3JjL3NldHRpbmcvc2V0dGluZy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUdBO0FBS0E7QUFDQTtBQWVBO0FBR0E7O0FBQ0E7QUE2QkE7QUFDQTs7O0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7QUFLQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7Ozs7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFHQTtBQUNBOzs7QUFHQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7OztBQUdBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTs7O0FBR0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUE1SEE7QUFRQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQXNHQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBUUE7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBU0E7QUFDQTtBQVFBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQVNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQVNBO0FBQ0E7O0FBRUE7QUFTQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL09yZGVyZWQgRWxlbWVudHMgQWRkIExheWVycy9zcmMvc2V0dGluZy9zZXR0aW5nLnRzeD9kYWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWN0IH0gZnJvbSBcImppbXUtY29yZVwiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzIH0gZnJvbSBcImppbXUtZm9yLWJ1aWxkZXJcIjtcbmltcG9ydCB7XG4gIE1hcFdpZGdldFNlbGVjdG9yLFxuICBTZXR0aW5nUm93LFxuICBTZXR0aW5nU2VjdGlvbixcbn0gZnJvbSBcImppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBCdXR0b24sIENoZWNrYm94IH0gZnJvbSBcImppbXUtdWlcIjtcbmltcG9ydCBkZWZhdWx0STE4bk1lc3NhZ2VzIGZyb20gXCIuL3RyYW5zbGF0aW9ucy9kZWZhdWx0XCI7XG5pbXBvcnQgeyBJTUNvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcblxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgLyoqXG4gICAqIFNldHRpbmdzIGludGVyZmFjZSBwYW5lbFxuICAgKiBUaGUgcGFuZWwgd2lsbCBpbmNsdWRlIGEgc2VjdGlvbiBmb3IgaW5wdXR0aW5nIGluc3RydWN0aW9uIHRleHQsIFVSTCBmb3IgdGhlIG1hcCwgYW5kIEhUTUxcbiAgICovXG4gIFxuICBpbnN0cnVjdFRleHRhcmVhVmFsdWU6IHN0cmluZztcbiAgbGF5ZXJUZXh0YXJlYVZhbHVlOiBzdHJpbmc7XG4gIGNvZGVUZXh0YXJlYVZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmcgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFxuICBBbGxXaWRnZXRTZXR0aW5nUHJvcHM8SU1Db25maWc+LFxuICBJU3RhdGU+IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgXCJUWVBFT0YgdW5kZWZpbmVkXCIsXG4gICAgICAgIHR5cGVvZiB0aGlzLnByb3BzLmNvbmZpZz8uaW5zdHJ1Y3RUZXh0ID09PSB1bmRlZmluZWQsXG4gICAgICAgIHR5cGVvZiB0aGlzLnByb3BzLmNvbmZpZz8ubGF5ZXJVcmxzID09PSB1bmRlZmluZWQsXG4gICAgICAgIHR5cGVvZiB0aGlzLnByb3BzLmNvbmZpZz8uaXNDbGlja2VkID09PSB1bmRlZmluZWQsXG4gICAgICAgIHR5cGVvZiB0aGlzLnByb3BzLmNvbmZpZz8uY29kZVRleHQgPT09IHVuZGVmaW5lZFxuICAgICAgKTtcblxuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluaXRpYWxpemUgdGhlIHNldHRpbmdzIHBhbmVsIGludGVyZmFjZVxuICAgICAgICAgKi9cbiAgICAgICAgaW5zdHJ1Y3RUZXh0YXJlYVZhbHVlOlxuICAgICAgICAgIHRoaXMucHJvcHMuY29uZmlnPy5pbnN0cnVjdFRleHQgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBcIlwiXG4gICAgICAgICAgICA6IHRoaXMucHJvcHMuY29uZmlnPy5pbnN0cnVjdFRleHQuam9pbihcIlxcblwiKSxcbiAgICAgICAgbGF5ZXJUZXh0YXJlYVZhbHVlOlxuICAgICAgICAgIHRoaXMucHJvcHMuY29uZmlnPy5sYXllclVybHMgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBcIlwiXG4gICAgICAgICAgICA6IHRoaXMucHJvcHMuY29uZmlnPy5sYXllclVybHMuam9pbihcIlxcblwiKSxcbiAgICAgICAgY29kZVRleHRhcmVhVmFsdWU6XG4gICAgICAgICAgdGhpcy5wcm9wcy5jb25maWc/LmNvZGVUZXh0ID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gXCI8Y29kZT48L2NvZGU+XCJcbiAgICAgICAgICAgIDogdGhpcy5wcm9wcy5jb25maWc/LmNvZGVUZXh0LFxuICAgICAgfTtcbiAgICB9XG5cbiAgb25NYXBTZWxlY3RlZCA9ICh1c2VNYXBXaWRnZXRJZHM6IHN0cmluZ1tdKSA9PiB7XG4gICAgLyoqXG4gICAgICogT25jZSBhIG1hcCBpcyBpbiB0aGUgZXhwZXJpZW5jZSBidWlsZGVyLCBhIGRyb3Bkb3duXG4gICAgICogd2lsbCBzaG93IHRoZSBtYXBzIHRvIGNvbm5lY3QgdGhlIHdpZGdldCB0b1xuICAgICAqL1xuXG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXG4gICAgICB1c2VNYXBXaWRnZXRJZHM6IHVzZU1hcFdpZGdldElkcyxcbiAgICB9KTtcbiAgfTtcblxuICBvbkluc3RydWN0VGV4dENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIC8qKlxuICAgICAqIEluIHRoZSB0ZXh0IGlucHV0IGFyZWEsIGF1dGhvciBzaG91bGQgaW5wdXQgaW5zdHJ1Y3Rpb25zXG4gICAgICogc2VwYXJhdGUgYnkgYSBuZXcgbGluZS5cbiAgICAgKiBFYWNoIG5ldyBsaW5lIHdpbGwgY3JlYXRlIGFuIGVsZW1lbnQgaW4gdGhlIHdpZGdldFxuICAgICAqIG9uY2UgaXQgcmUtcmVuZGVycy5cbiAgICAgKi9cblxuICAgIHRoaXMuc2V0U3RhdGUoeyBpbnN0cnVjdFRleHRhcmVhVmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcblxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcbiAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxuICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXQoXG4gICAgICAgIFwiaW5zdHJ1Y3RUZXh0XCIsXG4gICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZS5zcGxpdChcIlxcblwiKSxcbiAgICAgICksXG4gICAgfSk7XG4gIH07XG5cbiAgb25CdXR0b25DbGljayA9IChldmVudCkgPT4ge1xuICAgIC8qKlxuICAgICAqIFNldCB0aGUgaXNDbGlja2VkIHZhcmlhYmxlIGluIHRoZSBjb25maWcgZmlsZSB0byB0cnVlXG4gICAgICogVGhpcyB3aWxsIGluaXRpYXRlIGFuIHVwZGF0ZSBpbiB0aGUgd2lkZ2V0XG4gICAgICogVGhlIHRleHQgZnJvbSB0aGUgdGV4dCBpbnB1dCBhcmVhIHdpbGwgYXBwZWFyIGluIHRoZSB3aWRnZXRcbiAgICAgKi9cblxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcbiAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxuICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXQoXG4gICAgICAgIFwiaXNDbGlja2VkXCIsXG4gICAgICAgIHRydWVcbiAgICAgICksXG4gICAgfSk7XG4gIH07XG5cblxuICBvbkxheWVyVGV4dENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIC8qKlxuICAgICAqIEluIHRoZSBsYXllciBVUkwgaW5wdXQgYXJlYSwgYXV0aG9yIHNob3VsZCBpbnB1dCBVUkxTIGZvciBsYXllcnNcbiAgICAgKiBMYXllciBVUkxTIHNob3VsZCBiZSBzZXBhcmF0ZWQgYnkgYSBuZXcgbGluZVxuICAgICAqL1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxheWVyVGV4dGFyZWFWYWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuXG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXG4gICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLnNldChcbiAgICAgICAgXCJsYXllclVybHNcIixcbiAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlLnNwbGl0KFwiXFxuXCIpXG4gICAgICApLFxuICAgIH0pO1xuICB9O1xuXG4gIG9uQ29kZVRleHRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAvKipcbiAgICAgKiBJbiB0aGUgY29kZSB0ZXh0IGFyZWEsIGF1dGhvciBzaG91bGQgaW5wdXQgSFRNTCBjb2RlXG4gICAgICogZm9yIGNvZGUgcG9wLXVwXG4gICAgICovXG5cbiAgICB0aGlzLnNldFN0YXRlKHsgY29kZVRleHRhcmVhVmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcblxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcbiAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxuICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXQoXG4gICAgICAgIFwiY29kZVRleHRcIixcbiAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICApLFxuICAgIH0pO1xuICB9O1xuXG4gIG9uQ2hlY2tDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAvKipcbiAgICAgKiBVbmRlciB0aGUgY29kZSB0ZXh0IGFyZWEsIGF1dGhvciBjbGlja3MgdGhlIGNoZWNrYm94XG4gICAgICogdG8gc2V0IGluaXRpYWwgY29kZSB2aXNpYmlsaXR5LiBDb2RlIGlzIHZpc2libGUgd2hlbiBjaGVja2JveCBpcyBjaGVja2VkXG4gICAgICovXG5cbiAgICBsZXQgY2hlY2tTdGF0dXMgPSB0aGlzLnByb3BzLmNvbmZpZy5pc0NoZWNrZWRcblxuICAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXG4gICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXQoXG4gICAgICAgICBcImlzQ2hlY2tlZFwiLFxuICAgICAgICAgIWNoZWNrU3RhdHVzXG4gICAgICAgKSxcbiAgICAgfSk7XG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWluc3RydWN0aW9ucy1pbi10ZXh0XCI+XG4gICAgICAgIDxTZXR0aW5nU2VjdGlvblxuICAgICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7XG4gICAgICAgICAgICBpZDogXCJzZWxlY3RlZE1hcExhYmVsXCIsXG4gICAgICAgICAgICBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdEkxOG5NZXNzYWdlcy5zZWxlY3RlZE1hcCxcbiAgICAgICAgICB9KX1cbiAgICAgICAgPlxuXG4gICAgICAgICAgey8qIFJlbmRlciBkcm9wZG93biBtZW51IHRvIGNvbm5lY3Qgd2lkZ2V0IHRvIGEgbWFwICovfVxuICAgICAgICAgIDxTZXR0aW5nUm93PlxuICAgICAgICAgICAgPE1hcFdpZGdldFNlbGVjdG9yXG4gICAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLm9uTWFwU2VsZWN0ZWR9XG4gICAgICAgICAgICAgIHVzZU1hcFdpZGdldElkcz17dGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cbiAgICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cblxuXG4gICAgICAgIDxTZXR0aW5nU2VjdGlvblxuICAgICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7XG4gICAgICAgICAgICBpZDogXCJpbnN0cnVjdGlvbnNcIixcbiAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0STE4bk1lc3NhZ2VzLmluc3RydWN0aW9ucyxcbiAgICAgICAgICB9KX1cbiAgICAgICAgPlxuXG4gICAgICAgICAgey8qIFJlbmRlciB0ZXh0IGlucHV0IGFyZWEgZm9yIGluc3RydWN0aW9ucyAqL31cbiAgICAgICAgICA8U2V0dGluZ1Jvdz5cbiAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMCBwLTFcIlxuICAgICAgICAgICAgICBzdHlsZT17eyB3aGl0ZVNwYWNlOiBcInByZVwiLCBtaW5IZWlnaHQ6IFwiMTAwcHhcIiB9fVxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pbnN0cnVjdFRleHRhcmVhVmFsdWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uSW5zdHJ1Y3RUZXh0Q2hhbmdlfVxuICAgICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgPC9TZXR0aW5nUm93PlxuXG4gICAgICAgICAgey8qIFJlbmRlciBidXR0b24gdG8gdXBkYXRlIGluc3RydWN0aW9ucyAqL31cbiAgICAgICAgICA8U2V0dGluZ1Jvdz5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkJ1dHRvbkNsaWNrfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBVcGRhdGUgSW5zdHJ1Y3Rpb25zXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L1NldHRpbmdSb3c+XG4gICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XG5cbiAgICAgICAgPFNldHRpbmdTZWN0aW9uXG4gICAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHtcbiAgICAgICAgICAgIGlkOiBcInRvQWRkXCIsXG4gICAgICAgICAgICBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdEkxOG5NZXNzYWdlcy50b0FkZCxcbiAgICAgICAgICB9KX1cbiAgICAgICAgPlxuICAgICAgICAgIHsvKiBSZW5kZXIgdGV4dCBpbnB1dCBhcmVhIHRvIGFkZCBVUkwgdG8gbWFwIGxheWVyICovfVxuICAgICAgICAgIDxTZXR0aW5nUm93PlxuICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwIHAtMVwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdoaXRlU3BhY2U6IFwicHJlXCIsIG1pbkhlaWdodDogXCIxMDBweFwiIH19XG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmxheWVyVGV4dGFyZWFWYWx1ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25MYXllclRleHRDaGFuZ2V9XG4gICAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICA8L1NldHRpbmdSb3c+XG4gICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XG5cbiAgICAgICAgPFNldHRpbmdTZWN0aW9uXG4gICAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHtcbiAgICAgICAgICAgIGlkOiBcImNvZGVBcmVhXCIsXG4gICAgICAgICAgICBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdEkxOG5NZXNzYWdlcy5jb2RlQXJlYSxcbiAgICAgICAgICB9KX1cbiAgICAgICAgPlxuICAgICAgICAgIHsvKiBSZW5kZXIgdGV4dCBpbnB1dCBhcmVhIHRvIGFkZCBIVE1MICovfVxuICAgICAgICAgIDxTZXR0aW5nUm93PlxuICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwIHAtMVwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdoaXRlU3BhY2U6IFwicHJlXCIsIG1pbkhlaWdodDogXCIxMDBweFwiIH19XG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNvZGVUZXh0YXJlYVZhbHVlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNvZGVUZXh0Q2hhbmdlfVxuICAgICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgPC9TZXR0aW5nUm93PlxuXG4gICAgICAgICAgey8qIFNldCBkZWZhdWx0IGNvZGUgdmlzaWJpbGl0eSAqL31cbiAgICAgICAgICA8U2V0dGluZ1Jvdz5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgU2V0IGNvZGUgZGVmYXVsdCB2aXNpYmlsaXR5OiZuYnNwO1xuICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnByb3BzLmNvbmZpZy5pc0NoZWNrZWR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGVja0NoYW5nZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9TZXR0aW5nUm93PlxuICAgICAgICA8L1NldHRpbmdTZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./your-extensions/widgets/Ordered Elements Add Layers/src/setting/setting.tsx\n");

/***/ }),

/***/ "./your-extensions/widgets/Ordered Elements Add Layers/src/setting/translations/default.ts":
/*!*************************************************************************************************!*\
  !*** ./your-extensions/widgets/Ordered Elements Add Layers/src/setting/translations/default.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    selectedMap: \"Map\",\n    instructions: \"Instructions\",\n    toAdd: \"Layers to Add\",\n    codeArea: \"Input HTML Code\"\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9PcmRlcmVkIEVsZW1lbnRzIEFkZCBMYXllcnMvc3JjL3NldHRpbmcvdHJhbnNsYXRpb25zL2RlZmF1bHQudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9PcmRlcmVkIEVsZW1lbnRzIEFkZCBMYXllcnMvc3JjL3NldHRpbmcvdHJhbnNsYXRpb25zL2RlZmF1bHQudHM/ZTg5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgc2VsZWN0ZWRNYXA6IFwiTWFwXCIsXG4gICAgaW5zdHJ1Y3Rpb25zOiBcIkluc3RydWN0aW9uc1wiLFxuICAgIHRvQWRkOiBcIkxheWVycyB0byBBZGRcIixcbiAgICBjb2RlQXJlYTogXCJJbnB1dCBIVE1MIENvZGVcIlxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./your-extensions/widgets/Ordered Elements Add Layers/src/setting/translations/default.ts\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./your-extensions/widgets/Ordered Elements Add Layers/src/setting/setting.tsx");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});