/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Container/App.js":
/*!******************************!*\
  !*** ./src/Container/App.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Header */ \"./src/components/Header.js\");\n\n\n\nconst App = () => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: ''\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/Container/App.js?");

/***/ }),

/***/ "./src/Container/Home/index.js":
/*!*************************************!*\
  !*** ./src/Container/Home/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var _reducers_home_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/reducers/home/actions */ \"./src/reducers/home/actions.js\");\n\n\n\n\nconst Home = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"memo\"])(props => {\n  const {\n    cityData\n  } = props.state;\n  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(11);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (!cityData.hotCities.length) {\n      props.dispatch(Object(_reducers_home_actions__WEBPACK_IMPORTED_MODULE_3__[\"getHomeList\"])());\n    }\n  }, []);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, state), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: () => {\n      setState(state + 1);\n    }\n  }, \"Click\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, cityData.hotCities.map((item, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    key: index\n  }, item.name))));\n});\n\nHome.loadData = store => {\n  // 功能：在服务端渲染之前，把这个路由需要的数据提前加载好\n  return store.dispatch(Object(_reducers_home_actions__WEBPACK_IMPORTED_MODULE_3__[\"getHomeList\"])());\n};\n\nconst mapState = state => ({\n  state: state.home\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapState, null)(Home));\n\n//# sourceURL=webpack:///./src/Container/Home/index.js?");

/***/ }),

/***/ "./src/Container/Login/index.js":
/*!**************************************!*\
  !*** ./src/Container/Login/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Header */ \"./src/components/Header.js\");\n\n\nconst Login = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"memo\"])(() => {\n  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('Login');\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Login\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, state), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: () => {\n      setState(state + state);\n    }\n  }, \"Click\"));\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\n//# sourceURL=webpack:///./src/Container/Login/index.js?");

/***/ }),

/***/ "./src/client/request.js":
/*!*******************************!*\
  !*** ./src/client/request.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n  baseURL: '/'\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (instance);\n\n//# sourceURL=webpack:///./src/client/request.js?");

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst Header = () => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/\"\n  }, \"HOME\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/login\"\n  }, \"login\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./src/components/Header.js?");

/***/ }),

/***/ "./src/reducers/home/actions.js":
/*!**************************************!*\
  !*** ./src/reducers/home/actions.js ***!
  \**************************************/
/*! exports provided: getHomeList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getHomeList\", function() { return getHomeList; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils */ \"./src/utils/index.js\");\n/* harmony import */ var _contants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contants */ \"./src/reducers/home/contants.js\");\n\n\nconst getHomeList = () => {\n  return (dispatch, getState, axiosInstance) => {\n    return axiosInstance.get('/rest/cities').then(res => {\n      const data = res.data;\n      dispatch(_utils__WEBPACK_IMPORTED_MODULE_0__[\"helper\"].createAction(_contants__WEBPACK_IMPORTED_MODULE_1__[\"CHANGE_LIST\"], data));\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/reducers/home/actions.js?");

/***/ }),

/***/ "./src/reducers/home/contants.js":
/*!***************************************!*\
  !*** ./src/reducers/home/contants.js ***!
  \***************************************/
/*! exports provided: CHANGE_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CHANGE_LIST\", function() { return CHANGE_LIST; });\nconst nameSpace = 'HOME/';\nconst CHANGE_LIST = nameSpace + 'CHANGE_LIST';\n\n//# sourceURL=webpack:///./src/reducers/home/contants.js?");

/***/ }),

/***/ "./src/reducers/home/homeReducer.js":
/*!******************************************!*\
  !*** ./src/reducers/home/homeReducer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contants */ \"./src/reducers/home/contants.js\");\n\n\nconst InitialState = {\n  name: 'ewqeqw',\n  cityData: {\n    hotCities: []\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((state = InitialState, action) => {\n  switch (action.type) {\n    case _contants__WEBPACK_IMPORTED_MODULE_1__[\"CHANGE_LIST\"]:\n      return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.assign({}, state, {\n        cityData: action.payload\n      });\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/reducers/home/homeReducer.js?");

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_homeReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/homeReducer */ \"./src/reducers/home/homeReducer.js\");\n\n\nconst reducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  home: _home_homeReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducers);\n\n//# sourceURL=webpack:///./src/reducers/index.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Container_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Container/Home */ \"./src/Container/Home/index.js\");\n/* harmony import */ var _Container_Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Container/Login */ \"./src/Container/Login/index.js\");\n/* harmony import */ var _Container_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Container/App */ \"./src/Container/App.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  path: '/',\n  component: _Container_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  routes: [{\n    path: '/',\n    component: _Container_Home__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    exact: true,\n    loadData: _Container_Home__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadData\n  }, {\n    path: '/login',\n    component: _Container_Login__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    exact: true\n  }]\n}]);\n\n//# sourceURL=webpack:///./src/routes/index.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/server/utils.js\");\n/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_http_proxy__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store */ \"./src/store/index.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/routes */ \"./src/routes/index.js\");\n\n\n // 转发客户端的请求\n\n\n // 每次获取store都初始化一次，确保每个用户获取的store是独立的\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()(); // 请求静态资源在public里面找\n\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static('public'));\napp.use('/rest', express_http_proxy__WEBPACK_IMPORTED_MODULE_2___default()('localhost:3000', {\n  proxyReqPathResolver: function (req) {\n    console.log(req.url); // 返回的是数据服务器上，接口的名称,  /rest 是接口代理的名称\n    // 中间件自动拼接到代理的位置\n\n    return '/rest' + req.url;\n  }\n}));\napp.get('*', function (req, res) {\n  // 服务端获取路由地址（只能通过请求参数获取）\n  const pathName = req.path;\n  const store = Object(_store__WEBPACK_IMPORTED_MODULE_4__[\"getStore\"])(); // 再这个位置 loadData ,并修改store的值\n  // 根据路由的路径，来往store里面加数据\n  // matchPath匹配单层路由，用处不大\n  // // inside a request\n  // const matchRoutes = [];\n  // // use `some` to imitate `<Switch>` behavior of selecting only\n  // // the first to match\n  // Routes.some(route => {\n  //   // 如果路由匹配成功 match\n  //   const match = matchPath(req.path, route);\n  //   if (match) {\n  //     matchRoutes.push(route);\n  //   }\n  // });\n  // 引入react-router-config匹配多层路由\n\n  const matchedRoutes = Object(react_router_config__WEBPACK_IMPORTED_MODULE_3__[\"matchRoutes\"])(_routes__WEBPACK_IMPORTED_MODULE_5__[\"default\"], pathName); // 让matchRoutes里面所有的组件，对应的 loadData 方法执行一次\n  // console.log(matchedRoutes);\n\n  const promises = [];\n  matchedRoutes.forEach(item => {\n    if (item.route.loadData) {\n      promises.push(item.route.loadData(store));\n    }\n  });\n  Promise.all(promises).then(() => {\n    res.send(Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"render\"])(req, _routes__WEBPACK_IMPORTED_MODULE_5__[\"default\"], store));\n  });\n});\nvar server = app.listen(3333, () => {\n  console.log('start at 3333');\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/request.js":
/*!*******************************!*\
  !*** ./src/server/request.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n  baseURL: 'http://localhost:3000'\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (instance);\n\n//# sourceURL=webpack:///./src/server/request.js?");

/***/ }),

/***/ "./src/server/utils.js":
/*!*****************************!*\
  !*** ./src/server/utils.js ***!
  \*****************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\nconst render = (req, Routes, store) => {\n  const content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"Provider\"], {\n    store: store\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n    location: req.path,\n    context: {}\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Switch\"], null, Routes.map(route => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], _extends({\n    key: route.path\n  }, route)))))));\n  return `\n      <html>\n        <head>\n          <title>hello-ssr</title>\n        </head>\n        <body>\n          <div id=\"root\">${content}</div>\n        </body>\n        <script>\n          // 注入state\n          window.context = {\n            state: ${JSON.stringify(store.getState())}\n          }\n        </script>\n        <script src=\"/index.js\"></script>\n      </html>\n    `;\n};\n\n//# sourceURL=webpack:///./src/server/utils.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: getStore, getClientStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStore\", function() { return getStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getClientStore\", function() { return getClientStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/reducers */ \"./src/reducers/index.js\");\n/* harmony import */ var _client_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/client/request */ \"./src/client/request.js\");\n/* harmony import */ var _server_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/server/request */ \"./src/server/request.js\");\n\n\n // 解决问题： 在服务端发起请求的时候，因为没有域名，导致请求失败\n// 根据客户端和服务端，使用不用的 axios，即：在不同情况下，增加请求地址前缀\n// 利用 redux-thunk中 withExtraArgument，给thunk中增加一个可自定义的参数\n\n\n\nconst getStore = () => {\n  // 写成方法的目的：每次获取store都初始化一次，确保每个用户获取的store是独立的\n  // 传入服务器专用的 axios 配置\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_2__[\"default\"], Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a.withExtraArgument(_server_request__WEBPACK_IMPORTED_MODULE_4__[\"default\"])));\n};\nconst getClientStore = () => {\n  // 接受服务器请求的数据，同步客户端数据\n  const defaultState = window.context.state; // // 传入客服端专用的 axios 配置\n\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_2__[\"default\"], defaultState, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a.withExtraArgument(_client_request__WEBPACK_IMPORTED_MODULE_3__[\"default\"])));\n};\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "./src/utils/helper.js":
/*!*****************************!*\
  !*** ./src/utils/helper.js ***!
  \*****************************/
/*! exports provided: createAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createAction\", function() { return createAction; });\nfunction createAction(type, payload) {\n  return {\n    type,\n    payload: payload || {}\n  };\n}\n\n//# sourceURL=webpack:///./src/utils/helper.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: helper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./src/utils/helper.js\");\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"helper\", function() { return _helper__WEBPACK_IMPORTED_MODULE_0__; });\n\n\n\n//# sourceURL=webpack:///./src/utils/index.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-http-proxy\");\n\n//# sourceURL=webpack:///external_%22express-http-proxy%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });