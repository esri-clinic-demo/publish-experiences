/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
System.register(["jimu-core","jimu-ui","esri/layers/FeatureLayer","jimu-arcgis"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
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

/***/ "./your-extensions/widgets/dropdown-check-button/src/runtime/widget.tsx":
/*!******************************************************************************!*\
  !*** ./your-extensions/widgets/dropdown-check-button/src/runtime/widget.tsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Widget)\n/* harmony export */ });\n/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ \"jimu-core\");\n/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ \"jimu-ui\");\n/* harmony import */ var esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! esri/layers/FeatureLayer */ \"esri/layers/FeatureLayer\");\n/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-arcgis */ \"jimu-arcgis\");\n/** @jsx jsx */\n/**\n  Licensing\n\n  Copyright 2022 Esri\n\n  Licensed under the Apache License, Version 2.0 (the \"License\"); You\n  may not use this file except in compliance with the License. You may\n  obtain a copy of the License at\n  http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or\n  implied. See the License for the specific language governing\n  permissions and limitations under the License.\n\n  A copy of the license is available in the repository's\n  LICENSE file.\n*/\n\n\n\n\nclass Widget extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {\n    constructor(props) {\n        super(props);\n        /**\n         * Function that checks whether all of the dropdown answers are correct.\n         * It is triggered when the \"Check Answers\" button is clicked.\n         * @param evt\n         */\n        this.checkAnswers = (evt) => {\n            // increase number of tries\n            this.setState({ tries: this.state.tries + 1 });\n            // make sure that at least some answers have been selected\n            const totalAnswers = this.props.a.length;\n            var count = 0;\n            // loop through array of dropdown answers, check if they are right\n            this.props.a.forEach(function (ddObj) {\n                // the correct dropdown answers have \"val\" of 0\n                if (ddObj[\"val\"] === \"0\") {\n                    count++;\n                    console.log(\"count\", count);\n                }\n            });\n            // if the answers are correct, load layers on map\n            // note: there is no check to make sure all the dropdowns have answers\n            // so this would load the layer as long as all of the dropdowns that\n            // have answers are correct...\n            if (totalAnswers > 0 && count === totalAnswers) {\n                this.setState({ correct: true });\n                let urlList = this.props.config.layerUrls;\n                for (var i = 0; i < urlList.length; i++) {\n                    // create a new FeatureLayer\n                    const layer = new esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n                        url: this.props.config.layerUrls[i] // adds all layers at once\n                    });\n                    // Add the layer to the map (accessed through the Experience Builder JimuMapView data source)\n                    this.state.jimuMapView.view.map.add(layer);\n                }\n            }\n            // if wrong, show an alert\n            else {\n                this.setState({ correct: false });\n                window.alert(\"Try again!\");\n            }\n        };\n        this.activeViewChangeHandler = (jmv) => {\n            /*\n             * Instrumental to updating the map when the drag and drop\n             * widget is connected to the map\n             */\n            if (jmv) {\n                this.setState({\n                    jimuMapView: jmv\n                });\n            }\n        };\n        this.state = {\n            jimuMapView: null,\n            correct: false,\n            tries: 0\n        };\n    }\n    /**\n     * Map the state the widget needs\n     * @param state\n     */\n    static mapExtraStateProps(state) {\n        return { a: state.myState.a };\n    }\n    render() {\n        var _a;\n        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"widget-use-redux jimu-widget m-2\" },\n            this.props.hasOwnProperty(\"useMapWidgetIds\") && this.props.useMapWidgetIds && this.props.useMapWidgetIds[0] && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_3__.JimuMapViewComponent, { useMapWidgetId: (_a = this.props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: this.activeViewChangeHandler })),\n            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { onClick: this.checkAnswers, type: \"primary\", style: { background: 'orange', color: \"#ffffff\" } }, \"Check Answers!\"),\n            this.state.correct && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", null, \"Congrats! You got the right answer!\"),\n            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", null,\n                \"Number of Tries: \",\n                this.state.tries)));\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9kcm9wZG93bi1jaGVjay1idXR0b24vc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBZ0JBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUF3REE7O0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTs7QUFBQTtBQUlBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvZHJvcGRvd24tY2hlY2stYnV0dG9uL3NyYy9ydW50aW1lL3dpZGdldC50c3g/ODVkYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbi8qKlxuICBMaWNlbnNpbmdcblxuICBDb3B5cmlnaHQgMjAyMiBFc3JpXG5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgWW91XG4gIG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5XG4gIG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvclxuICBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmdcbiAgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuXG4gIEEgY29weSBvZiB0aGUgbGljZW5zZSBpcyBhdmFpbGFibGUgaW4gdGhlIHJlcG9zaXRvcnknc1xuICBMSUNFTlNFIGZpbGUuXG4qL1xuaW1wb3J0IHsgUmVhY3QsIEFsbFdpZGdldFByb3BzLCBqc3gsIElNU3RhdGV9IGZyb20gJ2ppbXUtY29yZSc7XG5pbXBvcnQgeyBJTUNvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCB7QnV0dG9ufSBmcm9tICdqaW11LXVpJztcbmltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSBcImVzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllclwiO1xuaW1wb3J0IHsgSmltdU1hcFZpZXdDb21wb25lbnQsIEppbXVNYXBWaWV3IH0gZnJvbSBcImppbXUtYXJjZ2lzXCI7XG5pbXBvcnQgRHJvcGRvd25PYmplY3QgZnJvbSAnLi4vZXh0ZW5zaW9ucy9teS1zdG9yZSdcblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gIGppbXVNYXBWaWV3OiBKaW11TWFwVmlldztcbiAgY29ycmVjdDogQm9vbGVhbjtcbiAgdHJpZXM6IG51bWJlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lkZ2V0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4sIElTdGF0ZSAmIHthOiBBcnJheTxEcm9wZG93bk9iamVjdD59LCB7fT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgamltdU1hcFZpZXc6IG51bGwsXG4gICAgICBjb3JyZWN0OiBmYWxzZSxcbiAgICAgIHRyaWVzOiAwXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYXAgdGhlIHN0YXRlIHRoZSB3aWRnZXQgbmVlZHNcbiAgICogQHBhcmFtIHN0YXRlXG4gICAqL1xuICBzdGF0aWMgbWFwRXh0cmFTdGF0ZVByb3BzKHN0YXRlOiBJTVN0YXRlKXtcbiAgICByZXR1cm4ge2E6IHN0YXRlLm15U3RhdGUuYX07XG4gIH1cblxuICAvKipcbiAgICogRnVuY3Rpb24gdGhhdCBjaGVja3Mgd2hldGhlciBhbGwgb2YgdGhlIGRyb3Bkb3duIGFuc3dlcnMgYXJlIGNvcnJlY3QuXG4gICAqIEl0IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBcIkNoZWNrIEFuc3dlcnNcIiBidXR0b24gaXMgY2xpY2tlZC5cbiAgICogQHBhcmFtIGV2dCBcbiAgICovXG4gIGNoZWNrQW5zd2VycyA9IChldnQpID0+IHtcbiAgICAvLyBpbmNyZWFzZSBudW1iZXIgb2YgdHJpZXNcbiAgICB0aGlzLnNldFN0YXRlKHt0cmllczogdGhpcy5zdGF0ZS50cmllcyArIDF9KTtcbiAgICAvLyBtYWtlIHN1cmUgdGhhdCBhdCBsZWFzdCBzb21lIGFuc3dlcnMgaGF2ZSBiZWVuIHNlbGVjdGVkXG4gICAgY29uc3QgdG90YWxBbnN3ZXJzID0gdGhpcy5wcm9wcy5hLmxlbmd0aDtcbiAgICB2YXIgY291bnQgPSAwO1xuICAgIC8vIGxvb3AgdGhyb3VnaCBhcnJheSBvZiBkcm9wZG93biBhbnN3ZXJzLCBjaGVjayBpZiB0aGV5IGFyZSByaWdodFxuICAgIHRoaXMucHJvcHMuYS5mb3JFYWNoKGZ1bmN0aW9uKGRkT2JqKSB7XG4gICAgICAvLyB0aGUgY29ycmVjdCBkcm9wZG93biBhbnN3ZXJzIGhhdmUgXCJ2YWxcIiBvZiAwXG4gICAgICBpZiAoZGRPYmpbXCJ2YWxcIl0gPT09IFwiMFwiKSB7XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY291bnRcIiwgY291bnQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIGlmIHRoZSBhbnN3ZXJzIGFyZSBjb3JyZWN0LCBsb2FkIGxheWVycyBvbiBtYXBcbiAgICAvLyBub3RlOiB0aGVyZSBpcyBubyBjaGVjayB0byBtYWtlIHN1cmUgYWxsIHRoZSBkcm9wZG93bnMgaGF2ZSBhbnN3ZXJzXG4gICAgLy8gc28gdGhpcyB3b3VsZCBsb2FkIHRoZSBsYXllciBhcyBsb25nIGFzIGFsbCBvZiB0aGUgZHJvcGRvd25zIHRoYXRcbiAgICAvLyBoYXZlIGFuc3dlcnMgYXJlIGNvcnJlY3QuLi5cbiAgICBpZiAodG90YWxBbnN3ZXJzID4gMCAmJiBjb3VudCA9PT0gdG90YWxBbnN3ZXJzKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtjb3JyZWN0OiB0cnVlfSk7XG4gICAgICBsZXQgdXJsTGlzdCA9IHRoaXMucHJvcHMuY29uZmlnLmxheWVyVXJscztcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpPCB1cmxMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGNyZWF0ZSBhIG5ldyBGZWF0dXJlTGF5ZXJcbiAgICAgICAgY29uc3QgbGF5ZXIgPSBuZXcgRmVhdHVyZUxheWVyKHtcbiAgICAgICAgICB1cmw6IHRoaXMucHJvcHMuY29uZmlnLmxheWVyVXJsc1tpXSAvLyBhZGRzIGFsbCBsYXllcnMgYXQgb25jZVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gQWRkIHRoZSBsYXllciB0byB0aGUgbWFwIChhY2Nlc3NlZCB0aHJvdWdoIHRoZSBFeHBlcmllbmNlIEJ1aWxkZXIgSmltdU1hcFZpZXcgZGF0YSBzb3VyY2UpXG4gICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5tYXAuYWRkKGxheWVyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gaWYgd3JvbmcsIHNob3cgYW4gYWxlcnRcbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2NvcnJlY3Q6IGZhbHNlfSk7XG4gICAgICB3aW5kb3cuYWxlcnQoXCJUcnkgYWdhaW4hXCIpO1xuICAgIH1cbiAgfVxuXG4gIGFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyID0gKGptdjogSmltdU1hcFZpZXcpID0+IHtcbiAgICAvKlxuICAgICAqIEluc3RydW1lbnRhbCB0byB1cGRhdGluZyB0aGUgbWFwIHdoZW4gdGhlIGRyYWcgYW5kIGRyb3BcbiAgICAgKiB3aWRnZXQgaXMgY29ubmVjdGVkIHRvIHRoZSBtYXAgXG4gICAgICovXG4gICAgaWYgKGptdikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGppbXVNYXBWaWV3OiBqbXZcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LXVzZS1yZWR1eCBqaW11LXdpZGdldCBtLTJcIj5cbiAgICAgICAge3RoaXMucHJvcHMuaGFzT3duUHJvcGVydHkoXCJ1c2VNYXBXaWRnZXRJZHNcIikgJiYgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHMgJiYgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHNbMF0gJiYgKFxuICAgICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudCB1c2VNYXBXaWRnZXRJZD17dGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHM/LlswXX0gb25BY3RpdmVWaWV3Q2hhbmdlPXt0aGlzLmFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyfSAvPlxuICAgICAgICApfVxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuY2hlY2tBbnN3ZXJzfSB0eXBlPVwicHJpbWFyeVwiIHN0eWxlPXt7YmFja2dyb3VuZDogJ29yYW5nZScsIGNvbG9yOiBcIiNmZmZmZmZcIn19PkNoZWNrIEFuc3dlcnMhPC9CdXR0b24+XG4gICAgICAgIHt0aGlzLnN0YXRlLmNvcnJlY3QgJiYgPHA+Q29uZ3JhdHMhIFlvdSBnb3QgdGhlIHJpZ2h0IGFuc3dlciE8L3A+fVxuICAgICAgICB7PHA+TnVtYmVyIG9mIFRyaWVzOiB7dGhpcy5zdGF0ZS50cmllc308L3A+fVxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./your-extensions/widgets/dropdown-check-button/src/runtime/widget.tsx\n");

/***/ }),

/***/ "esri/layers/FeatureLayer":
/*!*******************************************!*\
  !*** external "esri/layers/FeatureLayer" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__;

/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

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
/******/ 	var __webpack_exports__ = __webpack_require__("./your-extensions/widgets/dropdown-check-button/src/runtime/widget.tsx");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});