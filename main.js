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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    display: grid;\r\n    grid-template-columns: 2fr 6fr;\r\n}\r\n\r\nh1 {\r\n    font-size: 100px;\r\n}\r\n\r\nul {\r\n    font-size: 30px;\r\n    list-style: none;\r\n    text-decoration: none;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 50px;\r\n    margin-top: 100px;\r\n}\r\n\r\nli:hover {\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\n.sidebar {\r\n    height: 100vh;\r\n    width: 100%;\r\n    background-color: black;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding-top: 50px;\r\n}\r\n\r\n.sidebar h1,\r\n.sidebar ul {\r\n    color: white;\r\n}\r\n\r\n.main-content {\r\n    height: 100vh;\r\n    width: 100%;\r\n    background-color: rgb(172, 172, 172);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.display {\r\n    height: 95%;\r\n    width: 95%;\r\n    background-color: white;\r\n    border-radius: 15px;\r\n    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n/* Project Page \r\n.projectTitle,\r\n.projectHolder,\r\n.buttons,\r\n.project {\r\n    border: 2px solid black;\r\n}*/\r\n\r\n#projectPage,\r\n#taskPage {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.projectTitle,\r\n.taskTitle {\r\n    font-size: 100px;\r\n}\r\n\r\n.projectHolder,\r\n.taskHolder {\r\n    width: 95%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 30px;\r\n    margin-top: 70px;\r\n}\r\n\r\n.project,\r\n.task {\r\n    width: 100%;\r\n    font-size: 30px;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    gap: 100px;\r\n    border-bottom: 2px solid black;\r\n}\r\n\r\n.buttons {\r\n    margin-left: auto;\r\n    display: flex;\r\n    gap: 50px;\r\n}\r\n\r\n.openBtn,\r\n.deleteBtn,\r\n.newTaskBtn,\r\n.completeBtn {\r\n    height: 50px;\r\n    width: 100px;\r\n    font-size: 24px;\r\n    color: white;\r\n    background-color: black;\r\n    border-radius: 15px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.completeBtn {\r\n    width: 120px;\r\n}\r\n\r\n.openBtn:hover,\r\n.deleteBtn:hover,\r\n.newTaskBtn:hover,\r\n.completeBtn:hover {\r\n    opacity: 0.7;\r\n}\r\n\r\n/* Task Page */\r\n.taskHeader {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.taskTitle {\r\n    margin-left: 500px;\r\n}\r\n\r\n.newTaskBtn {\r\n    height: 50px;\r\n    width: 50px;\r\n    font-size: 35px;\r\n    margin-left: auto;\r\n    margin-right: 100px;\r\n    margin-top: 20px;\r\n}\r\n\r\n/* Project Form */\r\n.projectModal,\r\n.taskModal {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.5); \r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    z-index: 1000;  \r\n}\r\n\r\n.projectFormContainer,\r\n.taskFormContainer {\r\n    background-color: white;\r\n    padding: 30px;\r\n    border-radius: 8px;\r\n    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);\r\n    min-width: 300px;\r\n}\r\n\r\n.projectForm,\r\n.taskForm {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 15px;\r\n}\r\n\r\n.formTitle {\r\n    font-size: 30px;\r\n}\r\n\r\n.projectForm input,\r\n.taskForm input {\r\n    padding: 10px;\r\n    font-size: 16px;\r\n    border: 1px solid #000000;\r\n    border-radius: 4px;\r\n}\r\n\r\n.projectForm button {\r\n    padding: 10px;\r\n    font-size: 16px;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n}\r\n\r\n.projectForm button[type=\"submit\"],\r\n.taskForm button[type=\"submit\"] {\r\n    height: 30px;\r\n    background-color: #4CAF50;\r\n    color: white;\r\n}\r\n\r\n.projectForm button[type=\"button\"],\r\n.taskForm button[type=\"button\"] {\r\n    height: 30px;\r\n    background-color: #f44336;\r\n    color: white;\r\n}\r\n\r\n.projectForm button:hover,\r\n.taskForm button:hover {\r\n    opacity: 0.6;\r\n}\r\n\r\n/* Task form */\r\n.taskFormContainer {\r\n    height: 370px;\r\n    width: 500px;\r\n}\r\n\r\n.taskDescription {\r\n    height: 100px;\r\n}\r\n\r\n.dueDate {\r\n    margin-left: auto;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/UI/forms.js"
/*!*************************!*\
  !*** ./src/UI/forms.js ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   newProjectForm: () => (/* binding */ newProjectForm),\n/* harmony export */   newTaskForm: () => (/* binding */ newTaskForm)\n/* harmony export */ });\n/* harmony import */ var _logic_appState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/appState.js */ \"./src/logic/appState.js\");\n/* harmony import */ var _logic_classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logic/classes.js */ \"./src/logic/classes.js\");\n/* harmony import */ var _projectPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectPage.js */ \"./src/UI/projectPage.js\");\n/* harmony import */ var _taskPage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskPage.js */ \"./src/UI/taskPage.js\");\n\r\n\r\n\r\n\r\n\r\nfunction newProjectForm() {\r\n    const modal = document.createElement(\"div\");\r\n    modal.className = \"projectModal\";\r\n\r\n    const formContainer = document.createElement(\"div\");\r\n    formContainer.className = \"projectFormContainer\"\r\n\r\n    const form = document.createElement(\"form\");\r\n    form.className = \"projectForm\";\r\n\r\n    const formTitle = document.createElement(\"h2\");\r\n    formTitle.className = \"formTitle\";\r\n    form.textContent = \"New Project\";\r\n\r\n    const input = document.createElement(\"input\");\r\n    input.type = \"text\";\r\n    input.placeholder = \"Project Title\";\r\n    input.required = true;\r\n\r\n    const submitBtn = document.createElement(\"button\");\r\n    submitBtn.type = \"submit\";\r\n    submitBtn.textContent = \"Create\";\r\n\r\n    const cancelBtn = document.createElement(\"button\");\r\n    cancelBtn.type = \"button\";\r\n    cancelBtn.textContent = \"Cancel\";\r\n\r\n    form.appendChild(formTitle);\r\n    form.appendChild(input);\r\n    form.appendChild(submitBtn);\r\n    form.appendChild(cancelBtn);\r\n    formContainer.appendChild(form);\r\n    modal.appendChild(formContainer);\r\n\r\n    document.body.appendChild(modal);\r\n\r\n    cancelBtn.addEventListener(\"click\", () => {\r\n        modal.remove();\r\n    });\r\n\r\n    form.addEventListener(\"submit\", (e) => {\r\n        e.preventDefault();\r\n        const projectName = input.value;\r\n\r\n        const newProject = new _logic_classes_js__WEBPACK_IMPORTED_MODULE_1__.Project(projectName);\r\n        _logic_appState_js__WEBPACK_IMPORTED_MODULE_0__.defaultProjectStorage.addProject(newProject);\r\n        (0,_projectPage_js__WEBPACK_IMPORTED_MODULE_2__.loadProjectPage)();\r\n\r\n        modal.remove();\r\n    });\r\n\r\n    modal.addEventListener(\"click\", (e) => {\r\n        if (e.target === modal) {\r\n            modal.remove();\r\n        }\r\n    });\r\n}\r\n\r\nfunction newTaskForm(project) {\r\n    const modal = document.createElement(\"div\");\r\n    modal.className = \"taskModal\";\r\n\r\n    const formContainer = document.createElement(\"div\");\r\n    formContainer.className = \"taskFormContainer\"\r\n\r\n    const form = document.createElement(\"form\");\r\n    form.className = \"taskForm\";\r\n\r\n    const formTitle = document.createElement(\"h2\");\r\n    formTitle.className = \"formTitle\";\r\n    form.textContent = \"New Task\";\r\n\r\n    const nameInput = document.createElement(\"input\");\r\n    nameInput.type = \"text\";\r\n    nameInput.placeholder = \"Task Name\";\r\n    nameInput.required = true;\r\n\r\n    const descriptionInput = document.createElement(\"input\");\r\n    descriptionInput.className = \"taskDescription\"\r\n    descriptionInput.type = \"text\";\r\n    descriptionInput.placeholder = \"Description\";\r\n    descriptionInput.required = true;\r\n\r\n    const dateInput = document.createElement(\"input\");\r\n    dateInput.type = \"date\";\r\n    dateInput.required = true;\r\n\r\n    const submitBtn = document.createElement(\"button\");\r\n    submitBtn.type = \"submit\";\r\n    submitBtn.textContent = \"Create\";\r\n\r\n    const cancelBtn = document.createElement(\"button\");\r\n    cancelBtn.type = \"button\";\r\n    cancelBtn.textContent = \"Cancel\";\r\n\r\n    formContainer.appendChild(formTitle);\r\n    form.appendChild(nameInput);\r\n    form.appendChild(descriptionInput);\r\n    form.appendChild(dateInput);\r\n    form.appendChild(submitBtn);\r\n    form.appendChild(cancelBtn);\r\n    formContainer.appendChild(form);\r\n    modal.appendChild(formContainer);\r\n\r\n    document.body.appendChild(modal);\r\n\r\n    cancelBtn.addEventListener(\"click\", () => {\r\n        modal.remove();\r\n    });\r\n\r\n    form.addEventListener(\"submit\", (e) => {\r\n        e.preventDefault();\r\n        const taskName = nameInput.value;\r\n        const description = descriptionInput.value;\r\n        const date = dateInput.value;\r\n\r\n        const newTask = new _logic_classes_js__WEBPACK_IMPORTED_MODULE_1__.Todo(taskName, description, date, \"low\");\r\n        project.addTodo(newTask);\r\n        (0,_taskPage_js__WEBPACK_IMPORTED_MODULE_3__.loadTaskPage)(project);\r\n\r\n        modal.remove();\r\n    });\r\n\r\n    modal.addEventListener(\"click\", (e) => {\r\n        if (e.target === modal) {\r\n            modal.remove();\r\n        }\r\n    });\r\n}\n\n//# sourceURL=webpack://todo-list/./src/UI/forms.js?\n}");

/***/ },

/***/ "./src/UI/mainButtons.js"
/*!*******************************!*\
  !*** ./src/UI/mainButtons.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projectPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectPage.js */ \"./src/UI/projectPage.js\");\n/* harmony import */ var _forms_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms.js */ \"./src/UI/forms.js\");\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    const newProjectBtn = document.querySelector(\".newProject\");\r\n    newProjectBtn.addEventListener(\"click\", () => {\r\n        (0,_forms_js__WEBPACK_IMPORTED_MODULE_1__.newProjectForm)();\r\n    })\r\n\r\n    const projectBtn = document.querySelector(\".projects\");\r\n    projectBtn.addEventListener(\"click\", () => {\r\n        (0,_projectPage_js__WEBPACK_IMPORTED_MODULE_0__.loadProjectPage)();\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://todo-list/./src/UI/mainButtons.js?\n}");

/***/ },

/***/ "./src/UI/projectPage.js"
/*!*******************************!*\
  !*** ./src/UI/projectPage.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadProjectPage: () => (/* binding */ loadProjectPage)\n/* harmony export */ });\n/* harmony import */ var _logic_appState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/appState.js */ \"./src/logic/appState.js\");\n/* harmony import */ var _taskPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskPage.js */ \"./src/UI/taskPage.js\");\n\r\n\r\n\r\nfunction loadProjectPage() {\r\n    const display = document.querySelector(\".display\");\r\n    display.id = \"projectPage\";\r\n    display.innerHTML = \"\";\r\n\r\n    const title = document.createElement(\"h1\");\r\n    title.className = \"projectTitle\";\r\n    title.textContent = \"Projects\";\r\n\r\n    const projectHolder = document.createElement(\"div\");\r\n    projectHolder.className = \"projectHolder\";\r\n\r\n    for (const project of _logic_appState_js__WEBPACK_IMPORTED_MODULE_0__.defaultProjectStorage.projects) {\r\n        const projectDiv = document.createElement(\"div\");\r\n        const projectName = document.createElement(\"p\");\r\n        const projectTaskAmount = document.createElement(\"p\");\r\n        const buttons = document.createElement(\"div\");\r\n        const openButton = document.createElement(\"button\");\r\n        const deleteButton = document.createElement(\"button\");\r\n\r\n        projectDiv.className = \"project\";\r\n        buttons.className = \"buttons\";\r\n        openButton.className = \"openBtn\";\r\n        deleteButton.className = \"deleteBtn\";\r\n\r\n        projectName.textContent = project.name;\r\n        projectTaskAmount.textContent = \"Tasks: \" + project.todoArray.length;\r\n        openButton.textContent = \"open\";\r\n        deleteButton.textContent = \"delete\";\r\n\r\n        openButton.addEventListener(\"click\", () => {\r\n            (0,_taskPage_js__WEBPACK_IMPORTED_MODULE_1__.loadTaskPage)(project);\r\n        });\r\n\r\n        deleteButton.addEventListener(\"click\", () => {\r\n            _logic_appState_js__WEBPACK_IMPORTED_MODULE_0__.defaultProjectStorage.deleteProject(project);\r\n            loadProjectPage();\r\n        })\r\n\r\n        projectDiv.appendChild(projectName);\r\n        projectDiv.appendChild(projectTaskAmount);\r\n        buttons.appendChild(openButton);\r\n        buttons.appendChild(deleteButton);\r\n        projectDiv.appendChild(buttons);\r\n        projectHolder.appendChild(projectDiv);\r\n    }\r\n\r\n    display.appendChild(title);\r\n    display.appendChild(projectHolder)\r\n}\n\n//# sourceURL=webpack://todo-list/./src/UI/projectPage.js?\n}");

/***/ },

/***/ "./src/UI/taskPage.js"
/*!****************************!*\
  !*** ./src/UI/taskPage.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadTaskPage: () => (/* binding */ loadTaskPage)\n/* harmony export */ });\n/* harmony import */ var _forms_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms.js */ \"./src/UI/forms.js\");\n\r\n\r\nfunction loadTaskPage(project) {\r\n    const display = document.querySelector(\".display\");\r\n    display.id = \"taskPage\";\r\n    display.innerHTML = \"\";\r\n\r\n    const header = document.createElement(\"div\");\r\n    header.className = \"taskHeader\";\r\n\r\n    const title = document.createElement(\"h1\");\r\n    title.className = \"taskTitle\";\r\n    title.textContent = project.name;\r\n\r\n    const newTaskBtn = document.createElement(\"button\");\r\n    newTaskBtn.className = \"newTaskBtn\";\r\n    newTaskBtn.textContent = \"+\";\r\n\r\n    newTaskBtn.addEventListener(\"click\", () => {\r\n        (0,_forms_js__WEBPACK_IMPORTED_MODULE_0__.newTaskForm)(project);\r\n    })\r\n\r\n    header.appendChild(title);\r\n    header.appendChild(newTaskBtn);\r\n\r\n    const taskHolder = document.createElement(\"div\");\r\n    taskHolder.className = \"taskHolder\";\r\n\r\n    for (const task of project.todoArray) {\r\n        const taskDiv = document.createElement(\"div\");\r\n        taskDiv.className = \"task\";\r\n\r\n        const taskName = document.createElement(\"p\");\r\n        taskName.className = \"taskName\";\r\n        taskName.textContent = task.title;\r\n\r\n        const dueDate = document.createElement(\"p\");\r\n        dueDate.className = \"dueDate\";\r\n        dueDate.textContent = \"Due: \" + task.dueDate;\r\n\r\n        const completeBtn = document.createElement(\"button\");\r\n        completeBtn.className = \"completeBtn\";\r\n        completeBtn.textContent = \"Complete\";\r\n\r\n        completeBtn.addEventListener(\"click\", () => {\r\n            project.deleteTodo(task);\r\n            loadTaskPage(project);\r\n        })\r\n\r\n        taskDiv.appendChild(taskName);\r\n        taskDiv.appendChild(dueDate);\r\n        taskDiv.appendChild(completeBtn);\r\n        taskHolder.appendChild(taskDiv);\r\n    }\r\n\r\n    display.appendChild(header)\r\n    display.appendChild(taskHolder);\r\n}\n\n//# sourceURL=webpack://todo-list/./src/UI/taskPage.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _UI_projectPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI/projectPage.js */ \"./src/UI/projectPage.js\");\n/* harmony import */ var _logic_appState_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic/appState.js */ \"./src/logic/appState.js\");\n/* harmony import */ var _UI_mainButtons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI/mainButtons.js */ \"./src/UI/mainButtons.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_UI_projectPage_js__WEBPACK_IMPORTED_MODULE_1__.loadProjectPage)();\n\n//# sourceURL=webpack://todo-list/./src/index.js?\n}");

/***/ },

/***/ "./src/logic/appState.js"
/*!*******************************!*\
  !*** ./src/logic/appState.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   defaultProjectStorage: () => (/* binding */ defaultProjectStorage)\n/* harmony export */ });\n/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes.js */ \"./src/logic/classes.js\");\n\r\n\r\nconst defaultProjectStorage = new _classes_js__WEBPACK_IMPORTED_MODULE_0__.ProjectStorage();\r\n\r\nconst myProject = new _classes_js__WEBPACK_IMPORTED_MODULE_0__.Project(\"Default\");\r\ndefaultProjectStorage.addProject(myProject);\r\n\r\nconst task1 = new _classes_js__WEBPACK_IMPORTED_MODULE_0__.Todo(\"Buy milk\", \"From store\", \"2024-01-23\", \"high\");\r\nconst task2 = new _classes_js__WEBPACK_IMPORTED_MODULE_0__.Todo(\"Walk the dog\", \"In the park\", \"2025-13-09\", \"medium\");\r\n\r\nmyProject.addTodo(task1);\r\nmyProject.addTodo(task2);\n\n//# sourceURL=webpack://todo-list/./src/logic/appState.js?\n}");

/***/ },

/***/ "./src/logic/classes.js"
/*!******************************!*\
  !*** ./src/logic/classes.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   ProjectStorage: () => (/* binding */ ProjectStorage),\n/* harmony export */   Todo: () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo {\r\n    constructor(title, description, dueDate, priority) {\r\n        this.title = title;\r\n        this.description = description;\r\n        this.dueDate = dueDate;\r\n        this.priority = priority;\r\n        this.complete = false;\r\n    }\r\n\r\n    editTitle(title) {\r\n        this.title = title;\r\n    }\r\n\r\n    editDescription(description) {\r\n        this.description = description;\r\n    }\r\n\r\n    editDueDate(dueDate) {\r\n        this.dueDate = dueDate;\r\n    }\r\n\r\n    editPriority(priority) {\r\n        this.priority = priority;\r\n    }\r\n\r\n    changeCompleteStatus() {\r\n        this.complete = (!this.complete);\r\n    }\r\n}\r\n\r\n\r\nclass Project {\r\n    constructor(name) {\r\n        this.name = name;\r\n        this.todoArray = [];\r\n    }\r\n\r\n    addTodo(task) {\r\n        this.todoArray.push(task);\r\n    }\r\n\r\n    deleteTodo(task) {\r\n        const elementIndex = this.todoArray.findIndex(todo => todo === task);\r\n        if (elementIndex > -1) {\r\n            this.todoArray.splice(elementIndex, 1);\r\n        }\r\n    }\r\n\r\n    printTasks() {\r\n        console.log(this.name);\r\n\r\n        for (let i = 0; i < this.todoArray.length; i++) {\r\n            console.log(`${i + 1}. ${this.todoArray[i].title}`)\r\n        }\r\n    }\r\n\r\n    editTitle(name) {\r\n        this.name = name;\r\n    }\r\n}\r\n\r\n\r\nclass ProjectStorage {\r\n    constructor() {\r\n        this.projects = [];\r\n        this.currentProject = null;\r\n    }\r\n\r\n    addProject(project) {\r\n        this.projects.push(project);\r\n    }\r\n\r\n    deleteProject(project) {\r\n        const projectIndex = this.projects.findIndex(target => target === project);\r\n        if (projectIndex > -1) {\r\n            this.projects.splice(projectIndex, 1);\r\n        }\r\n    }\r\n\r\n    changeCurrentProject(project) {\r\n        this.currentProject = project;\r\n    }\r\n\r\n    printProjects() {\r\n        for (let i = 0; i < this.projects.length; i++) {\r\n            console.log(`${this.projects[i].name}`)\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/logic/classes.js?\n}");

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?\n}");

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;