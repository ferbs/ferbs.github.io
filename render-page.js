(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@reach/router"), require("core-js/modules/es6.array.iterator"), require("core-js/modules/es6.array.sort"), require("core-js/modules/es6.function.name"), require("core-js/modules/es6.map"), require("core-js/modules/es6.object.assign"), require("core-js/modules/es6.object.to-string"), require("core-js/modules/es6.regexp.constructor"), require("core-js/modules/es6.regexp.split"), require("core-js/modules/es6.regexp.to-string"), require("core-js/modules/es6.string.ends-with"), require("core-js/modules/es6.string.iterator"), require("core-js/modules/web.dom.iterable"), require("fs"), require("lodash"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else if(typeof define === 'function' && define.amd)
		define("lib", ["@reach/router", "core-js/modules/es6.array.iterator", "core-js/modules/es6.array.sort", "core-js/modules/es6.function.name", "core-js/modules/es6.map", "core-js/modules/es6.object.assign", "core-js/modules/es6.object.to-string", "core-js/modules/es6.regexp.constructor", "core-js/modules/es6.regexp.split", "core-js/modules/es6.regexp.to-string", "core-js/modules/es6.string.ends-with", "core-js/modules/es6.string.iterator", "core-js/modules/web.dom.iterable", "fs", "lodash", "path", "react", "react-dom/server", "react-helmet"], factory);
	else if(typeof exports === 'object')
		exports["lib"] = factory(require("@reach/router"), require("core-js/modules/es6.array.iterator"), require("core-js/modules/es6.array.sort"), require("core-js/modules/es6.function.name"), require("core-js/modules/es6.map"), require("core-js/modules/es6.object.assign"), require("core-js/modules/es6.object.to-string"), require("core-js/modules/es6.regexp.constructor"), require("core-js/modules/es6.regexp.split"), require("core-js/modules/es6.regexp.to-string"), require("core-js/modules/es6.string.ends-with"), require("core-js/modules/es6.string.iterator"), require("core-js/modules/web.dom.iterable"), require("fs"), require("lodash"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else
		root["lib"] = factory(root["@reach/router"], root["core-js/modules/es6.array.iterator"], root["core-js/modules/es6.array.sort"], root["core-js/modules/es6.function.name"], root["core-js/modules/es6.map"], root["core-js/modules/es6.object.assign"], root["core-js/modules/es6.object.to-string"], root["core-js/modules/es6.regexp.constructor"], root["core-js/modules/es6.regexp.split"], root["core-js/modules/es6.regexp.to-string"], root["core-js/modules/es6.string.ends-with"], root["core-js/modules/es6.string.iterator"], root["core-js/modules/web.dom.iterable"], root["fs"], root["lodash"], root["path"], root["react"], root["react-dom/server"], root["react-helmet"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__reach_router__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_iterator__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_sort__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_function_name__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_map__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_assign__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_to_string__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_constructor__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_split__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_to_string__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_ends_with__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_iterator__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_dom_iterable__, __WEBPACK_EXTERNAL_MODULE_fs__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_path__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom_server__, __WEBPACK_EXTERNAL_MODULE_react_helmet__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./.cache/static-entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./.cache/api-runner-ssr.js":
/*!**********************************!*\
  !*** ./.cache/api-runner-ssr.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var plugins = [{
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr */ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js"),
  options: {
    "plugins": []
  }
}]; // During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

var apis = __webpack_require__(/*! ./api-ssr-docs */ "./.cache/api-ssr-docs.js"); // Run the specified API in any plugins that have implemented it


module.exports = function (api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log("This API doesn't exist", api);
  } // Run each plugin in series.
  // eslint-disable-next-line no-undef


  var results = plugins.map(function (plugin) {
    if (!plugin.plugin[api]) {
      return undefined;
    }

    var result = plugin.plugin[api](args, plugin.options);

    if (result && argTransform) {
      args = argTransform({
        args: args,
        result: result
      });
    }

    return result;
  }); // Filter out undefined results.

  results = results.filter(function (result) {
    return typeof result !== "undefined";
  });

  if (results.length > 0) {
    return results;
  } else {
    return [defaultReturn];
  }
};

/***/ }),

/***/ "./.cache/api-ssr-docs.js":
/*!********************************!*\
  !*** ./.cache/api-ssr-docs.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Replace the default server renderer. This is useful for integration with
 * Redux, css-in-js libraries, etc. that need custom setups for server
 * rendering.
 * @param {Object} $0
 * @param {function} $0.replaceBodyHTMLString Call this with the HTML string
 * you render. **WARNING** if multiple plugins implement this API it's the
 * last plugin that "wins". TODO implement an automated warning against this.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {Object} pluginOptions
 * @example
 * // From gatsby-plugin-glamor
 * const { renderToString } = require("react-dom/server")
 * const inline = require("glamor-inline")
 *
 * exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
 *   const bodyHTML = renderToString(bodyComponent)
 *   const inlinedHTML = inline(bodyHTML)
 *
 *   replaceBodyHTMLString(inlinedHTML)
 * }
 */
exports.replaceRenderer = true;
/**
 * Called after every page Gatsby server renders while building HTML so you can
 * set head and body components to be rendered in your `html.js`.
 *
 * Gatsby does a two-pass render for HTML. It loops through your pages first
 * rendering only the body and then takes the result body HTML string and
 * passes it as the `body` prop to your `html.js` to complete the render.
 *
 * It's often handy to be able to send custom components to your `html.js`.
 * For example, it's a very common pattern for React.js libraries that
 * support server rendering to pull out data generated during the render to
 * add to your HTML.
 *
 * Using this API over [`replaceRenderer`](#replaceRenderer) is preferable as
 * multiple plugins can implement this API where only one plugin can take
 * over server rendering. However, if your plugin requires taking over server
 * rendering then that's the one to
 * use
 * @param {Object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {Object} pluginOptions
 * @example
 * const { Helmet } = require("react-helmet")
 *
 * exports.onRenderBody = (
 *   { setHeadComponents, setHtmlAttributes, setBodyAttributes },
 *   pluginOptions
 * ) => {
 *   const helmet = Helmet.renderStatic()
 *   setHtmlAttributes(helmet.htmlAttributes.toComponent())
 *   setBodyAttributes(helmet.bodyAttributes.toComponent())
 *   setHeadComponents([
 *     helmet.title.toComponent(),
 *     helmet.link.toComponent(),
 *     helmet.meta.toComponent(),
 *     helmet.noscript.toComponent(),
 *     helmet.script.toComponent(),
 *     helmet.style.toComponent(),
 *   ])
 * }
 */

exports.onRenderBody = true;
/**
 * Called after every page Gatsby server renders while building HTML so you can
 * replace head components to be rendered in your `html.js`. This is useful if
 * you need to reorder scripts or styles added by other plugins.
 * @param {Object} $0
 * @param {Array<ReactNode>} $0.getHeadComponents Returns the current `headComponents` array.
 * @param {function} $0.replaceHeadComponents Takes an array of components as its
 * first argument which replace the `headComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPreBodyComponents Returns the current `preBodyComponents` array.
 *  @param {function} $0.replacePreBodyComponents Takes an array of components as its
 * first argument which replace the `preBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPostBodyComponents Returns the current `postBodyComponents` array.
 *  @param {function} $0.replacePostBodyComponents Takes an array of components as its
 * first argument which replace the `postBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Object} pluginOptions
 * @example
 * // Move Typography.js styles to the top of the head section so they're loaded first.
 * exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
 *   const headComponents = getHeadComponents()
 *   headComponents.sort((x, y) => {
 *     if (x.key === 'TypographyStyle') {
 *       return -1
 *     } else if (y.key === 'TypographyStyle') {
 *       return 1
 *     }
 *     return 0
 *   })
 *   replaceHeadComponents(headComponents)
 * }
 */

exports.onPreRenderHTML = true;
/**
 * Allow a plugin to wrap the page element.
 *
 * This is useful for setting wrapper component around pages that won't get
 * unmounted on page change. For setting Provider components use [wrapRootElement](#wrapRootElement).
 *
 * _Note:_ [There is equivalent hook in Browser API](/docs/browser-apis/#wrapPageElement)
 * @param {object} $0
 * @param {ReactNode} $0.element The "Page" React Element built by Gatsby.
 * @param {object} $0.props Props object used by page.
 * @example
 * import React from "react"
 * import Layout from "./src/components/layout"
 *
 * export const wrapPageElement = ({ element, props }) => {
 *   // props provide same data to Layout as Page element will get
 *   // including location, data, etc - you don't need to pass it
 *   return <Layout {...props}>{element}</Layout>
 * }
 */

exports.wrapPageElement = true;
/**
 * Allow a plugin to wrap the root element.
 *
 * This is useful to setup any Providers component that will wrap your application.
 * For setting persistent UI elements around pages use [wrapPageElement](#wrapPageElement).
 *
 * _Note:_ [There is equivalent hook in Browser API](/docs/browser-apis/#wrapRootElement)
 * @param {object} $0
 * @param {ReactNode} $0.element The "Root" React Element built by Gatsby.
 * @example
 * import React from "react"
 * import { Provider } from "react-redux"
 *
 * import createStore from "./src/state/createStore"
 * const store = createStore()
 *
 * export const wrapRootElement = ({ element }) => {
 *   return (
 *     <Provider store={store}>
 *       {element}
 *     </Provider>
 *   )
 * }
 */

exports.wrapRootElement = true;

/***/ }),

/***/ "./.cache/data.json":
/*!**************************!*\
  !*** ./.cache/data.json ***!
  \**************************/
/*! exports provided: pages, dataPaths, default */
/***/ (function(module) {

module.exports = {"pages":[{"componentChunkName":"component---src-pages-index-jsx","jsonName":"index","path":"/"},{"componentChunkName":"component---src-pages-bio-jsx","jsonName":"bio-973","path":"/bio/"}],"dataPaths":{"bio-973":"555/path---bio-973-dbe-0SUcWyAf8ecbYDsMhQkEfPzV8","bio-apple-section-813":"792/path---bio-apple-section-813-00d-0SUcWyAf8ecbYDsMhQkEfPzV8","bio-availability-section-acc":"498/path---bio-availability-section-acc-cdd-0SUcWyAf8ecbYDsMhQkEfPzV8","bio-badges-67a":"426/path---bio-badges-67-a-207-0SUcWyAf8ecbYDsMhQkEfPzV8","bio-code-sample-section-a8c":"579/path---bio-code-sample-section-a-8-c-211-0SUcWyAf8ecbYDsMhQkEfPzV8","bio-consulting-projects-section-bdf":"400/path---bio-consulting-projects-section-bdf-9f5-0SUcWyAf8ecbYDsMhQkEfPzV8","bio-consulting-section-212":"374/path---bio-consulting-section-212-c38-0SUcWyAf8ecbYDsMhQkEfPzV8","bio-contact-section-165":"897/path---bio-contact-section-165-719-0SUcWyAf8ecbYDsMhQkEfPzV8","bio-current-work-section-1eb":"264/path---bio-current-work-section-1-eb-254-0SUcWyAf8ecbYDsMhQkEfPzV8","bio-current-wranggle-section-3d4":"938/path---bio-current-wranggle-section-3-d-4-c2b-0SUcWyAf8ecbYDsMhQkEfPzV8","bio-early-career-section-fb5":"18/path---bio-early-career-section-fb-5-9ab-0SUcWyAf8ecbYDsMhQkEfPzV8","bio-founder-section-007":"362/path---bio-founder-section-007-a8f-0SUcWyAf8ecbYDsMhQkEfPzV8","bio-intro-section-1e4":"206/path---bio-intro-section-1-e-4-c51-0SUcWyAf8ecbYDsMhQkEfPzV8","bio-management-section-ca0":"954/path---bio-management-section-ca-0-938-0SUcWyAf8ecbYDsMhQkEfPzV8","bio-manager-section-d1c":"868/path---bio-manager-section-d-1-c-e88-0SUcWyAf8ecbYDsMhQkEfPzV8","bio-plurchase-founder-section-aa6":"958/path---bio-plurchase-founder-section-aa-6-64d-0SUcWyAf8ecbYDsMhQkEfPzV8","bio-plurchase-section-e89":"937/path---bio-plurchase-section-e-89-d41-0SUcWyAf8ecbYDsMhQkEfPzV8","bio-purchasing-system-section-7b5":"211/path---bio-purchasing-system-section-7-b-5-047-0SUcWyAf8ecbYDsMhQkEfPzV8","bio-top-header-b95":"450/path---bio-top-header-b-95-a8c-0SUcWyAf8ecbYDsMhQkEfPzV8","bio-wranggle-founder-section-f20":"682/path---bio-wranggle-founder-section-f-20-ef5-0SUcWyAf8ecbYDsMhQkEfPzV8","bio-wranggle-section-202":"158/path---bio-wranggle-section-202-856-0SUcWyAf8ecbYDsMhQkEfPzV8","dev-404-page-5f9":"386/path---dev-404-page-5-f-9-fab-0SUcWyAf8ecbYDsMhQkEfPzV8","index":"140/path---index-6a9-0SUcWyAf8ecbYDsMhQkEfPzV8","sq--src-components-page-jsx":2069409925}};

/***/ }),

/***/ "./.cache/default-html.js":
/*!********************************!*\
  !*** ./.cache/default-html.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HTML; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


function HTML(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html", props.htmlAttributes, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("head", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    httpEquiv: "x-ua-compatible",
    content: "ie=edge"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
  }), props.headComponents), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", props.bodyAttributes, props.preBodyComponents, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("noscript", {
    key: "noscript",
    id: "gatsby-noscript"
  }, "This app works best with JavaScript enabled."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: "body",
    id: "___gatsby",
    dangerouslySetInnerHTML: {
      __html: props.body
    }
  }), props.postBodyComponents));
}
HTML.propTypes = {
  htmlAttributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  headComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  bodyAttributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  preBodyComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  body: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  postBodyComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};

/***/ }),

/***/ "./.cache/gatsby-browser-entry.js":
/*!****************************************!*\
  !*** ./.cache/gatsby-browser-entry.js ***!
  \****************************************/
/*! exports provided: Link, withPrefix, graphql, parsePath, navigate, push, replace, navigateTo, StaticQueryContext, StaticQuery, PageRenderer, useStaticQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQueryContext", function() { return StaticQueryContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQuery", function() { return StaticQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStaticQuery", function() { return useStaticQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["withPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["parsePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "push", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["push"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigateTo"]; });

/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./public-page-renderer */ "./.cache/public-page-renderer.js");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "PageRenderer", function() { return _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default.a; });




var StaticQueryContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});

var StaticQuery = function StaticQuery(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryContext.Consumer, null, function (staticQueryData) {
    if (props.data || staticQueryData[props.query] && staticQueryData[props.query].data) {
      return (props.render || props.children)(props.data ? props.data.data : staticQueryData[props.query].data);
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading (StaticQuery)");
    }
  });
};

var useStaticQuery = function useStaticQuery(query) {
  if (typeof react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext !== "function" && "production" === "development") {
    throw new Error("You're likely using a version of React that doesn't support Hooks\n" + "Please update React and ReactDOM to 16.8.0 or later to use the useStaticQuery hook.");
  }

  var context = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(StaticQueryContext);

  if (context[query] && context[query].data) {
    return context[query].data;
  } else {
    throw new Error("The result of this StaticQuery could not be fetched.\n\n" + "This is likely a bug in Gatsby and if refreshing the page does not fix it, " + "please open an issue in https://github.com/gatsbyjs/gatsby/issues");
  }
};

StaticQuery.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  render: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

function graphql() {
  throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls " + "are supposed to only be evaluated at compile time, and then compiled away,. " + "Unfortunately, something went wrong and the query was left in the compiled code.\n\n." + "Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.");
}



/***/ }),

/***/ "./.cache/public-page-renderer.js":
/*!****************************************!*\
  !*** ./.cache/public-page-renderer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

if (false) {} else if (false) {} else {
  module.exports = function () {
    return null;
  };
}

/***/ }),

/***/ "./.cache/static-entry.js":
/*!********************************!*\
  !*** ./.cache/static-entry.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.string.ends-with */ "core-js/modules/es6.string.ends-with");
/* harmony import */ var core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "core-js/modules/es6.function.name");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.sort */ "core-js/modules/es6.array.sort");
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "core-js/modules/es6.object.assign");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "core-js/modules/es6.regexp.to-string");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "core-js/modules/es6.regexp.split");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.regexp.constructor */ "core-js/modules/es6.regexp.constructor");
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "core-js/modules/web.dom.iterable");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "core-js/modules/es6.array.iterator");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "core-js/modules/es6.object.to-string");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es6.string.iterator */ "core-js/modules/es6.string.iterator");
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es6.map */ "core-js/modules/es6.map");
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_12__);














var React = __webpack_require__(/*! react */ "react");

var fs = __webpack_require__(/*! fs */ "fs");

var _require = __webpack_require__(/*! path */ "path"),
    join = _require.join;

var _require2 = __webpack_require__(/*! react-dom/server */ "react-dom/server"),
    renderToString = _require2.renderToString,
    renderToStaticMarkup = _require2.renderToStaticMarkup;

var _require3 = __webpack_require__(/*! @reach/router */ "@reach/router"),
    ServerLocation = _require3.ServerLocation,
    Router = _require3.Router,
    isRedirect = _require3.isRedirect;

var _require4 = __webpack_require__(/*! lodash */ "lodash"),
    get = _require4.get,
    merge = _require4.merge,
    isObject = _require4.isObject,
    flatten = _require4.flatten,
    uniqBy = _require4.uniqBy;

var apiRunner = __webpack_require__(/*! ./api-runner-ssr */ "./.cache/api-runner-ssr.js");

var syncRequires = __webpack_require__(/*! ./sync-requires */ "./.cache/sync-requires.js");

var _require5 = __webpack_require__(/*! ./data.json */ "./.cache/data.json"),
    dataPaths = _require5.dataPaths,
    pages = _require5.pages;

var _require6 = __webpack_require__(/*! gatsby/package.json */ "./node_modules/gatsby/package.json"),
    gatsbyVersion = _require6.version; // Speed up looking up pages.


var pagesObjectMap = new Map();
pages.forEach(function (p) {
  return pagesObjectMap.set(p.path, p);
});
var stats = JSON.parse(fs.readFileSync(process.cwd() + "/public/webpack.stats.json", "utf-8"));
var chunkMapping = JSON.parse(fs.readFileSync(process.cwd() + "/public/chunk-map.json", "utf-8")); // const testRequireError = require("./test-require-error")
// For some extremely mysterious reason, webpack adds the above module *after*
// this module so that when this code runs, testRequireError is undefined.
// So in the meantime, we'll just inline it.

var testRequireError = function testRequireError(moduleName, err) {
  var regex = new RegExp("Error: Cannot find module\\s." + moduleName);
  var firstLine = err.toString().split("\n")[0];
  return regex.test(firstLine);
};

var Html;

try {
  Html = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../src/html'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
} catch (err) {
  if (testRequireError("../src/html", err)) {
    Html = __webpack_require__(/*! ./default-html */ "./.cache/default-html.js");
  } else {
    throw err;
  }
}

Html = Html && Html.__esModule ? Html.default : Html;

var getPage = function getPage(path) {
  return pagesObjectMap.get(path);
};

var createElement = React.createElement;

var sanitizeComponents = function sanitizeComponents(components) {
  if (Array.isArray(components)) {
    // remove falsy items
    return components.filter(function (val) {
      return Array.isArray(val) ? val.length > 0 : val;
    });
  } else {
    // we also accept single components, so we need to handle this case as well
    return components ? [components] : [];
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function (pagePath, callback) {
  var _postBodyComponents;

  var bodyHtml = "";
  var headComponents = [React.createElement("meta", {
    name: "generator",
    content: "Gatsby " + gatsbyVersion,
    key: "generator-" + gatsbyVersion
  })];
  var htmlAttributes = {};
  var bodyAttributes = {};
  var preBodyComponents = [];
  var postBodyComponents = [];
  var bodyProps = {};

  var replaceBodyHTMLString = function replaceBodyHTMLString(body) {
    bodyHtml = body;
  };

  var setHeadComponents = function setHeadComponents(components) {
    headComponents = headComponents.concat(sanitizeComponents(components));
  };

  var setHtmlAttributes = function setHtmlAttributes(attributes) {
    htmlAttributes = merge(htmlAttributes, attributes);
  };

  var setBodyAttributes = function setBodyAttributes(attributes) {
    bodyAttributes = merge(bodyAttributes, attributes);
  };

  var setPreBodyComponents = function setPreBodyComponents(components) {
    preBodyComponents = preBodyComponents.concat(sanitizeComponents(components));
  };

  var setPostBodyComponents = function setPostBodyComponents(components) {
    postBodyComponents = postBodyComponents.concat(sanitizeComponents(components));
  };

  var setBodyProps = function setBodyProps(props) {
    bodyProps = merge({}, bodyProps, props);
  };

  var getHeadComponents = function getHeadComponents() {
    return headComponents;
  };

  var replaceHeadComponents = function replaceHeadComponents(components) {
    headComponents = sanitizeComponents(components);
  };

  var getPreBodyComponents = function getPreBodyComponents() {
    return preBodyComponents;
  };

  var replacePreBodyComponents = function replacePreBodyComponents(components) {
    preBodyComponents = sanitizeComponents(components);
  };

  var getPostBodyComponents = function getPostBodyComponents() {
    return postBodyComponents;
  };

  var replacePostBodyComponents = function replacePostBodyComponents(components) {
    postBodyComponents = sanitizeComponents(components);
  };

  var page = getPage(pagePath);
  var dataAndContext = {};

  if (page.jsonName in dataPaths) {
    var pathToJsonData = join(process.cwd(), "/public/static/d", dataPaths[page.jsonName] + ".json");

    try {
      dataAndContext = JSON.parse(fs.readFileSync(pathToJsonData));
    } catch (e) {
      console.log("error", pathToJsonData, e);
      process.exit();
    }
  }

  var RouteHandler =
  /*#__PURE__*/
  function (_React$Component) {
    _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4___default()(RouteHandler, _React$Component);

    function RouteHandler() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = RouteHandler.prototype;

    _proto.render = function render() {
      var props = Object.assign({}, this.props, dataAndContext, {
        pathContext: dataAndContext.pageContext
      });
      var pageElement = createElement(syncRequires.components[page.componentChunkName], props);
      var wrappedPage = apiRunner("wrapPageElement", {
        element: pageElement,
        props: props
      }, pageElement, function (_ref) {
        var result = _ref.result;
        return {
          element: result,
          props: props
        };
      }).pop();
      return wrappedPage;
    };

    return RouteHandler;
  }(React.Component);

  var routerElement = createElement(ServerLocation, {
    url: "" + "" + pagePath
  }, createElement(Router, {
    baseuri: "" + ""
  }, createElement(RouteHandler, {
    path: "/*"
  })));
  var bodyComponent = apiRunner("wrapRootElement", {
    element: routerElement,
    pathname: pagePath
  }, routerElement, function (_ref2) {
    var result = _ref2.result;
    return {
      element: result,
      pathname: pagePath
    };
  }).pop(); // Let the site or plugin render the page component.

  apiRunner("replaceRenderer", {
    bodyComponent: bodyComponent,
    replaceBodyHTMLString: replaceBodyHTMLString,
    setHeadComponents: setHeadComponents,
    setHtmlAttributes: setHtmlAttributes,
    setBodyAttributes: setBodyAttributes,
    setPreBodyComponents: setPreBodyComponents,
    setPostBodyComponents: setPostBodyComponents,
    setBodyProps: setBodyProps,
    pathname: pagePath,
    pathPrefix: ""
  }); // If no one stepped up, we'll handle it.

  if (!bodyHtml) {
    try {
      bodyHtml = renderToString(bodyComponent);
    } catch (e) {
      // ignore @reach/router redirect errors
      if (!isRedirect(e)) throw e;
    }
  } // Create paths to scripts


  var scriptsAndStyles = flatten(["app", page.componentChunkName].map(function (s) {
    var fetchKey = "assetsByChunkName[" + s + "]";
    var chunks = get(stats, fetchKey);
    var namedChunkGroups = get(stats, "namedChunkGroups");

    if (!chunks) {
      return null;
    }

    chunks = chunks.map(function (chunk) {
      if (chunk === "/") {
        return null;
      }

      return {
        rel: "preload",
        name: chunk
      };
    });
    namedChunkGroups[s].assets.forEach(function (asset) {
      return chunks.push({
        rel: "preload",
        name: asset
      });
    });
    var childAssets = namedChunkGroups[s].childAssets;

    var _loop = function _loop(rel) {
      chunks = merge(chunks, childAssets[rel].map(function (chunk) {
        return {
          rel: rel,
          name: chunk
        };
      }));
    };

    for (var rel in childAssets) {
      _loop(rel);
    }

    return chunks;
  })).filter(function (s) {
    return isObject(s);
  }).sort(function (s1, s2) {
    return s1.rel == "preload" ? -1 : 1;
  }); // given priority to preload

  scriptsAndStyles = uniqBy(scriptsAndStyles, function (item) {
    return item.name;
  });
  var scripts = scriptsAndStyles.filter(function (script) {
    return script.name && script.name.endsWith(".js");
  });
  var styles = scriptsAndStyles.filter(function (style) {
    return style.name && style.name.endsWith(".css");
  });
  apiRunner("onRenderBody", {
    setHeadComponents: setHeadComponents,
    setHtmlAttributes: setHtmlAttributes,
    setBodyAttributes: setBodyAttributes,
    setPreBodyComponents: setPreBodyComponents,
    setPostBodyComponents: setPostBodyComponents,
    setBodyProps: setBodyProps,
    pathname: pagePath,
    bodyHtml: bodyHtml,
    scripts: scripts,
    styles: styles,
    pathPrefix: ""
  });
  scripts.slice(0).reverse().forEach(function (script) {
    // Add preload/prefetch <link>s for scripts.
    headComponents.push(React.createElement("link", {
      as: "script",
      rel: script.rel,
      key: script.name,
      href: "" + "/" + script.name
    }));
  });

  if (page.jsonName in dataPaths) {
    var dataPath = "" + "/static/d/" + dataPaths[page.jsonName] + ".json";
    headComponents.push(React.createElement("link", {
      as: "fetch",
      rel: "preload",
      key: dataPath,
      href: dataPath,
      crossOrigin: "use-credentials"
    }));
  }

  styles.slice(0).reverse().forEach(function (style) {
    // Add <link>s for styles that should be prefetched
    // otherwise, inline as a <style> tag
    if (style.rel === "prefetch") {
      headComponents.push(React.createElement("link", {
        as: "style",
        rel: style.rel,
        key: style.name,
        href: "" + "/" + style.name
      }));
    } else {
      headComponents.unshift(React.createElement("style", {
        "data-href": "" + "/" + style.name,
        dangerouslySetInnerHTML: {
          __html: fs.readFileSync(join(process.cwd(), "public", style.name), "utf-8")
        }
      }));
    }
  }); // Add page metadata for the current page

  var windowData = "/*<![CDATA[*/window.page=" + JSON.stringify(page) + ";" + (page.jsonName in dataPaths ? "window.dataPath=\"" + dataPaths[page.jsonName] + "\";" : "") + "/*]]>*/";
  postBodyComponents.push(React.createElement("script", {
    key: "script-loader",
    id: "gatsby-script-loader",
    dangerouslySetInnerHTML: {
      __html: windowData
    }
  })); // Add chunk mapping metadata

  var scriptChunkMapping = "/*<![CDATA[*/window.___chunkMapping=" + JSON.stringify(chunkMapping) + ";/*]]>*/";
  postBodyComponents.push(React.createElement("script", {
    key: "chunk-mapping",
    id: "gatsby-chunk-mapping",
    dangerouslySetInnerHTML: {
      __html: scriptChunkMapping
    }
  })); // Filter out prefetched bundles as adding them as a script tag
  // would force high priority fetching.

  var bodyScripts = scripts.filter(function (s) {
    return s.rel !== "prefetch";
  }).map(function (s) {
    var scriptPath = "" + "/" + JSON.stringify(s.name).slice(1, -1);
    return React.createElement("script", {
      key: scriptPath,
      src: scriptPath,
      async: true
    });
  });

  (_postBodyComponents = postBodyComponents).push.apply(_postBodyComponents, bodyScripts);

  apiRunner("onPreRenderHTML", {
    getHeadComponents: getHeadComponents,
    replaceHeadComponents: replaceHeadComponents,
    getPreBodyComponents: getPreBodyComponents,
    replacePreBodyComponents: replacePreBodyComponents,
    getPostBodyComponents: getPostBodyComponents,
    replacePostBodyComponents: replacePostBodyComponents,
    pathname: pagePath,
    pathPrefix: ""
  });
  var html = "<!DOCTYPE html>" + renderToStaticMarkup(React.createElement(Html, Object.assign({}, bodyProps, {
    headComponents: headComponents,
    htmlAttributes: htmlAttributes,
    bodyAttributes: bodyAttributes,
    preBodyComponents: preBodyComponents,
    postBodyComponents: postBodyComponents,
    body: bodyHtml,
    path: pagePath
  })));
  callback(null, html);
});

/***/ }),

/***/ "./.cache/sync-requires.js":
/*!*********************************!*\
  !*** ./.cache/sync-requires.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js"),
    hot = _require.hot; // prefer default export if available


var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

exports.components = {
  "component---src-pages-bio-jsx": hot(preferDefault(__webpack_require__(/*! ./src/pages/bio.jsx */ "./src/pages/bio.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(__webpack_require__(/*! ./src/pages/index.jsx */ "./src/pages/index.jsx")))
};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/dot-prop/index.js":
/*!****************************************!*\
  !*** ./node_modules/dot-prop/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const isObj = __webpack_require__(/*! is-obj */ "./node_modules/is-obj/index.js");

function getPathSegments(path) {
	const pathArr = path.split('.');
	const parts = [];

	for (let i = 0; i < pathArr.length; i++) {
		let p = pathArr[i];

		while (p[p.length - 1] === '\\' && pathArr[i + 1] !== undefined) {
			p = p.slice(0, -1) + '.';
			p += pathArr[++i];
		}

		parts.push(p);
	}

	return parts;
}

module.exports = {
	get(obj, path, value) {
		if (!isObj(obj) || typeof path !== 'string') {
			return value === undefined ? obj : value;
		}

		const pathArr = getPathSegments(path);

		for (let i = 0; i < pathArr.length; i++) {
			if (!Object.prototype.propertyIsEnumerable.call(obj, pathArr[i])) {
				return value;
			}

			obj = obj[pathArr[i]];

			if (obj === undefined || obj === null) {
				// `obj` is either `undefined` or `null` so we want to stop the loop, and
				// if this is not the last bit of the path, and
				// if it did't return `undefined`
				// it would return `null` if `obj` is `null`
				// but we want `get({foo: null}, 'foo.bar')` to equal `undefined`, or the supplied value, not `null`
				if (i !== pathArr.length - 1) {
					return value;
				}

				break;
			}
		}

		return obj;
	},

	set(obj, path, value) {
		if (!isObj(obj) || typeof path !== 'string') {
			return obj;
		}

		const root = obj;
		const pathArr = getPathSegments(path);

		for (let i = 0; i < pathArr.length; i++) {
			const p = pathArr[i];

			if (!isObj(obj[p])) {
				obj[p] = {};
			}

			if (i === pathArr.length - 1) {
				obj[p] = value;
			}

			obj = obj[p];
		}

		return root;
	},

	delete(obj, path) {
		if (!isObj(obj) || typeof path !== 'string') {
			return;
		}

		const pathArr = getPathSegments(path);

		for (let i = 0; i < pathArr.length; i++) {
			const p = pathArr[i];

			if (i === pathArr.length - 1) {
				delete obj[p];
				return;
			}

			obj = obj[p];

			if (!isObj(obj)) {
				return;
			}
		}
	},

	has(obj, path) {
		if (!isObj(obj) || typeof path !== 'string') {
			return false;
		}

		const pathArr = getPathSegments(path);

		for (let i = 0; i < pathArr.length; i++) {
			if (isObj(obj)) {
				if (!(pathArr[i] in obj)) {
					return false;
				}

				obj = obj[pathArr[i]];
			} else {
				return false;
			}
		}

		return true;
	}
};


/***/ }),

/***/ "./node_modules/gatsby-link/index.js":
/*!*******************************************!*\
  !*** ./node_modules/gatsby-link/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.withPrefix = withPrefix;
exports.navigateTo = exports.replace = exports.push = exports.navigate = exports.default = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! @reach/router */ "@reach/router");

var _parsePath = __webpack_require__(/*! ./parse-path */ "./node_modules/gatsby-link/parse-path.js");

exports.parsePath = _parsePath.parsePath;

/*global __PATH_PREFIX__ */
function withPrefix(path) {
  return normalizePath("" + "/" + path);
}

function normalizePath(path) {
  return path.replace(/\/+/g, "/");
}

var NavLinkPropTypes = {
  activeClassName: _propTypes.default.string,
  activeStyle: _propTypes.default.object,
  partiallyActive: _propTypes.default.bool // Set up IntersectionObserver

};

var handleIntersection = function handleIntersection(el, cb) {
  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (el === entry.target) {
        // Check if element is within viewport, remove listener, destroy observer, and run link callback.
        // MSEdge doesn't currently support isIntersecting, so also test for  an intersectionRatio > 0
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          io.unobserve(el);
          io.disconnect();
          cb();
        }
      }
    });
  }); // Add element to the observer

  io.observe(el);
};

var GatsbyLink =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(GatsbyLink, _React$Component);

  function GatsbyLink(props) {
    var _this;

    _this = _React$Component.call(this, props) || this; // Default to no support for IntersectionObserver

    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "defaultGetProps", function (_ref) {
      var isPartiallyCurrent = _ref.isPartiallyCurrent,
          isCurrent = _ref.isCurrent;

      if (_this.props.partiallyActive ? isPartiallyCurrent : isCurrent) {
        return {
          className: [_this.props.className, _this.props.activeClassName].filter(Boolean).join(" "),
          style: (0, _extends2.default)({}, _this.props.style, _this.props.activeStyle)
        };
      }

      return null;
    });
    var IOSupported = false;

    if (typeof window !== "undefined" && window.IntersectionObserver) {
      IOSupported = true;
    }

    _this.state = {
      IOSupported: IOSupported
    };
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  var _proto = GatsbyLink.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // Preserve non IO functionality if no support
    if (this.props.to !== prevProps.to && !this.state.IOSupported) {
      ___loader.enqueue((0, _parsePath.parsePath)(this.props.to).pathname);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    // Preserve non IO functionality if no support
    if (!this.state.IOSupported) {
      ___loader.enqueue((0, _parsePath.parsePath)(this.props.to).pathname);
    }
  };

  _proto.handleRef = function handleRef(ref) {
    var _this2 = this;

    if (this.props.innerRef && this.props.innerRef.hasOwnProperty("current")) {
      this.props.innerRef.current = ref;
    } else if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    if (this.state.IOSupported && ref) {
      // If IO supported and element reference found, setup Observer functionality
      handleIntersection(ref, function () {
        ___loader.enqueue((0, _parsePath.parsePath)(_this2.props.to).pathname);
      });
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props = this.props,
        to = _this$props.to,
        _this$props$getProps = _this$props.getProps,
        getProps = _this$props$getProps === void 0 ? this.defaultGetProps : _this$props$getProps,
        _onClick = _this$props.onClick,
        _onMouseEnter = _this$props.onMouseEnter,
        $activeClassName = _this$props.activeClassName,
        $activeStyle = _this$props.activeStyle,
        $innerRef = _this$props.innerRef,
        partiallyActive = _this$props.partiallyActive,
        state = _this$props.state,
        replace = _this$props.replace,
        rest = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["to", "getProps", "onClick", "onMouseEnter", "activeClassName", "activeStyle", "innerRef", "partiallyActive", "state", "replace"]);
    var LOCAL_URL = /^\/(?!\/)/;

    if (false) {}

    var prefixedTo = withPrefix(to);
    return _react.default.createElement(_router.Link, (0, _extends2.default)({
      to: prefixedTo,
      state: state,
      getProps: getProps,
      innerRef: this.handleRef,
      onMouseEnter: function onMouseEnter(e) {
        if (_onMouseEnter) {
          _onMouseEnter(e);
        }

        ___loader.hovering((0, _parsePath.parsePath)(to).pathname);
      },
      onClick: function onClick(e) {
        if (_onClick) {
          _onClick(e);
        }

        if (e.button === 0 && // ignore right clicks
        !_this3.props.target && // let browser handle "target=_blank"
        !e.defaultPrevented && // onClick prevented default
        !e.metaKey && // ignore clicks with modifier keys...
        !e.altKey && !e.ctrlKey && !e.shiftKey) {
          e.preventDefault(); // Make sure the necessary scripts and data are
          // loaded before continuing.

          navigate(to, {
            state: state,
            replace: replace
          });
        }

        return true;
      }
    }, rest));
  };

  return GatsbyLink;
}(_react.default.Component);

GatsbyLink.propTypes = (0, _extends2.default)({}, NavLinkPropTypes, {
  onClick: _propTypes.default.func,
  to: _propTypes.default.string.isRequired,
  replace: _propTypes.default.bool
});

var _default = _react.default.forwardRef(function (props, ref) {
  return _react.default.createElement(GatsbyLink, (0, _extends2.default)({
    innerRef: ref
  }, props));
});

exports.default = _default;

var navigate = function navigate(to, options) {
  window.___navigate(withPrefix(to), options);
};

exports.navigate = navigate;

var push = function push(to) {
  console.warn("The \"push\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");

  window.___push(withPrefix(to));
};

exports.push = push;

var replace = function replace(to) {
  console.warn("The \"replace\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");

  window.___replace(withPrefix(to));
}; // TODO: Remove navigateTo for Gatsby v3


exports.replace = replace;

var navigateTo = function navigateTo(to) {
  console.warn("The \"navigateTo\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");
  return push(to);
};

exports.navigateTo = navigateTo;

/***/ }),

/***/ "./node_modules/gatsby-link/parse-path.js":
/*!************************************************!*\
  !*** ./node_modules/gatsby-link/parse-path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parsePath = parsePath;

function parsePath(path) {
  var pathname = path || "/";
  var search = "";
  var hash = "";
  var hashIndex = pathname.indexOf("#");

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf("?");

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === "?" ? "" : search,
    hash: hash === "#" ? "" : hash
  };
}

/***/ }),

/***/ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js":
/*!***************************************************************!*\
  !*** ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.onRenderBody = void 0;

var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

var onRenderBody = function onRenderBody(_ref) {
  var setHeadComponents = _ref.setHeadComponents,
      setHtmlAttributes = _ref.setHtmlAttributes,
      setBodyAttributes = _ref.setBodyAttributes;

  var helmet = _reactHelmet.Helmet.renderStatic(); // These action functions were added partway through the Gatsby 1.x cycle.


  if (setHtmlAttributes) {
    setHtmlAttributes(helmet.htmlAttributes.toComponent());
  }

  if (setBodyAttributes) {
    setBodyAttributes(helmet.bodyAttributes.toComponent());
  }

  setHeadComponents([helmet.title.toComponent(), helmet.link.toComponent(), helmet.meta.toComponent(), helmet.noscript.toComponent(), helmet.script.toComponent(), helmet.style.toComponent()]);
};

exports.onRenderBody = onRenderBody;

/***/ }),

/***/ "./node_modules/gatsby/package.json":
/*!******************************************!*\
  !*** ./node_modules/gatsby/package.json ***!
  \******************************************/
/*! exports provided: name, description, version, author, bin, bugs, dependencies, devDependencies, engines, files, homepage, keywords, license, main, module, peerDependencies, repository, resolutions, scripts, types, yargs, gitHead, default */
/***/ (function(module) {

module.exports = {"name":"gatsby","description":"Blazing fast modern site generator for React","version":"2.3.13","author":"Kyle Mathews <mathews.kyle@gmail.com>","bin":{"gatsby":"./dist/bin/gatsby.js"},"bugs":{"url":"https://github.com/gatsbyjs/gatsby/issues"},"dependencies":{"@babel/code-frame":"^7.0.0","@babel/core":"^7.0.0","@babel/parser":"^7.0.0","@babel/polyfill":"^7.0.0","@babel/runtime":"^7.0.0","@babel/traverse":"^7.0.0","@gatsbyjs/relay-compiler":"2.0.0-printer-fix.2","@mikaelkristiansson/domready":"^1.0.9","@pieh/friendly-errors-webpack-plugin":"1.7.0-chalk-2","@reach/router":"^1.1.1","@stefanprobst/lokijs":"^1.5.6-b","address":"1.0.3","autoprefixer":"^9.4.3","babel-core":"7.0.0-bridge.0","babel-eslint":"^9.0.0","babel-loader":"^8.0.0","babel-plugin-add-module-exports":"^0.2.1","babel-plugin-dynamic-import-node":"^1.2.0","babel-plugin-remove-graphql-queries":"^2.6.3","babel-preset-gatsby":"^0.1.11","better-opn":"0.1.4","better-queue":"^3.8.6","bluebird":"^3.5.0","browserslist":"3.2.8","cache-manager":"^2.9.0","cache-manager-fs-hash":"^0.0.6","chalk":"^2.3.2","chokidar":"2.1.2","common-tags":"^1.4.0","compression":"^1.7.3","convert-hrtime":"^2.0.0","copyfiles":"^1.2.0","core-js":"^2.5.0","css-loader":"^1.0.0","debug":"^3.1.0","del":"^3.0.0","detect-port":"^1.2.1","devcert-san":"^0.3.3","dotenv":"^4.0.0","eslint":"^5.6.0","eslint-config-react-app":"^3.0.0","eslint-loader":"^2.1.0","eslint-plugin-flowtype":"^2.46.1","eslint-plugin-graphql":"^2.0.0","eslint-plugin-import":"^2.9.0","eslint-plugin-jsx-a11y":"^6.0.3","eslint-plugin-react":"^7.8.2","event-source-polyfill":"^1.0.5","express":"^4.16.3","express-graphql":"^0.6.12","fast-levenshtein":"~2.0.4","file-loader":"^1.1.11","flat":"^4.0.0","fs-exists-cached":"1.0.0","fs-extra":"^5.0.0","gatsby-cli":"^2.5.5","gatsby-link":"^2.0.16","gatsby-plugin-page-creator":"^2.0.12","gatsby-react-router-scroll":"^2.0.7","gatsby-telemetry":"^1.0.5","glob":"^7.1.1","graphql":"^14.1.1","graphql-compose":"^6.0.3","graphql-playground-middleware-express":"^1.7.10","graphql-relay":"^0.6.0","graphql-tools":"^3.0.4","hash-mod":"^0.0.5","invariant":"^2.2.4","is-relative":"^1.0.0","is-relative-url":"^2.0.0","is-wsl":"^1.1.0","jest-worker":"^23.2.0","joi":"12.x.x","json-loader":"^0.5.7","json-stringify-safe":"^5.0.1","kebab-hash":"^0.1.2","lodash":"^4.17.10","md5":"^2.2.1","md5-file":"^3.1.1","mime":"^2.2.0","mini-css-extract-plugin":"^0.4.0","mitt":"^1.1.2","mkdirp":"^0.5.1","moment":"^2.21.0","name-all-modules-plugin":"^1.0.1","normalize-path":"^2.1.1","null-loader":"^0.1.1","opentracing":"^0.14.3","optimize-css-assets-webpack-plugin":"^5.0.1","parseurl":"^1.3.2","physical-cpu-count":"^2.0.0","pnp-webpack-plugin":"^1.4.1","postcss-flexbugs-fixes":"^3.0.0","postcss-loader":"^2.1.3","prop-types":"^15.6.1","raw-loader":"^0.5.1","react-dev-utils":"^4.2.1","react-error-overlay":"^3.0.0","react-hot-loader":"^4.6.2","redux":"^4.0.0","request":"^2.85.0","semver":"^5.6.0","shallow-compare":"^1.2.2","sift":"^5.1.0","signal-exit":"^3.0.2","slash":"^1.0.0","socket.io":"^2.0.3","stack-trace":"^0.0.10","string-similarity":"^1.2.0","style-loader":"^0.21.0","terser-webpack-plugin":"^1.2.2","true-case-path":"^1.0.3","type-of":"^2.0.1","url-loader":"^1.0.1","util.promisify":"^1.0.0","uuid":"^3.1.0","v8-compile-cache":"^1.1.0","webpack":"~4.28.4","webpack-dev-middleware":"^3.0.1","webpack-dev-server":"^3.1.14","webpack-hot-middleware":"^2.21.0","webpack-merge":"^4.1.0","webpack-stats-plugin":"^0.1.5","xstate":"^4.3.2","yaml-loader":"^0.5.0"},"devDependencies":{"@babel/cli":"^7.0.0","@babel/runtime":"^7.0.0","babel-preset-gatsby-package":"^0.1.4","cross-env":"^5.1.4","rimraf":"^2.6.1"},"engines":{"node":">=6.0.0"},"files":["cache-dir","dist","graphql.js","index.d.ts"],"homepage":"https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby#readme","keywords":["blog","generator","jekyll","markdown","react","ssg","website"],"license":"MIT","main":"cache-dir/commonjs/gatsby-browser-entry.js","module":"cache-dir/gatsby-browser-entry.js","peerDependencies":{"react":"^16.4.2","react-dom":"^16.4.2"},"repository":{"type":"git","url":"git+https://github.com/gatsbyjs/gatsby.git"},"resolutions":{"graphql":"^14.1.1"},"scripts":{"build":"npm run build:src && npm run build:internal-plugins && npm run build:rawfiles && npm run build:cjs","build:internal-plugins":"copyfiles -u 1 src/internal-plugins/**/package.json dist","build:rawfiles":"copyfiles -u 1 src/internal-plugins/**/raw_* dist","build:cjs":"babel cache-dir --out-dir cache-dir/commonjs --ignore **/__tests__","build:src":"babel src --out-dir dist --source-maps --ignore **/gatsby-cli.js,**/raw_*,**/__tests__","clean-test-bundles":"find test/ -type f -name bundle.js* -exec rm -rf {} +","prebuild":"rimraf dist && rimraf cache-dir/commonjs","prepare":"cross-env NODE_ENV=production npm run build","watch":"rimraf dist && mkdir dist && npm run build:internal-plugins && npm run build:rawfiles && npm run build:src -- --watch"},"types":"index.d.ts","yargs":{"boolean-negation":false},"gitHead":"0215f74f34e13aedd68f196c2184eaaa445a2d93"};

/***/ }),

/***/ "./node_modules/granim/index.js":
/*!**************************************!*\
  !*** ./node_modules/granim/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/Granim.js */ "./node_modules/granim/lib/Granim.js");


/***/ }),

/***/ "./node_modules/granim/lib/Granim.js":
/*!*******************************************!*\
  !*** ./node_modules/granim/lib/Granim.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Granim(options) {
	this.getElement(options.element);
	this.x1 = 0;
	this.y1 = 0;
	this.name = options.name || false;
	this.elToSetClassOn = options.elToSetClassOn || 'body';
	this.direction = options.direction || 'diagonal';
	this.customDirection = options.customDirection || {};
	this.validateInput('direction');
	this.isPausedWhenNotInView = options.isPausedWhenNotInView || false;
	this.states = options.states;
	this.stateTransitionSpeed = options.stateTransitionSpeed || 1000;
	this.previousTimeStamp = null;
	this.progress = 0;
	this.isPaused = false;
	this.isCleared = false;
	this.isPausedBecauseNotInView = false;
	this.context = this.canvas.getContext('2d');
	this.channels = {};
	this.channelsIndex = 0;
	this.activeState = options.defaultStateName || 'default-state';
	this.isChangingState = false;
	this.currentColors = [];
	this.currentColorsPos = [];
	this.activetransitionSpeed = null;
	this.eventPolyfill();
	this.scrollDebounceThreshold = options.scrollDebounceThreshold || 300;
	this.scrollDebounceTimeout = null;
	this.isImgLoaded = false;
	this.isCanvasInWindowView = false;
	this.firstScrollInit = true;
	this.animating = false;
	this.gradientLength = this.states[this.activeState].gradients[0].length;
	if (options.image && options.image.source) {
		this.image = {
			source: options.image.source,
			position: options.image.position || ['center', 'center'],
			stretchMode: options.image.stretchMode || false,
			blendingMode: options.image.blendingMode || false
		};
	}
	this.events = {
		start: new CustomEvent('granim:start'),
		end: new CustomEvent('granim:end'),
		gradientChange: function(details) {
			return new CustomEvent('granim:gradientChange', {
				detail: {
					isLooping: details.isLooping,
					colorsFrom: details.colorsFrom,
					colorsTo: details.colorsTo,
					activeState: details.activeState
				},
				bubbles: false,
				cancelable: false
			});
		}
	};
	this.callbacks = {
		onStart: typeof options.onStart === 'function' ? options.onStart : false,
		onGradientChange: typeof options.onGradientChange === 'function' ?
			options.onGradientChange :
			false,
		onEnd: typeof options.onEnd === 'function' ? options.onEnd : false
	};
	this.getDimensions();
	this.canvas.setAttribute('width', this.x1);
	this.canvas.setAttribute('height', this.y1);
	this.setColors();

	if (this.image) {
		this.validateInput('image');
		this.prepareImage();
	}

	this.pauseWhenNotInViewNameSpace = this.pauseWhenNotInView.bind(this);
	this.setSizeAttributesNameSpace = this.setSizeAttributes.bind(this);
	this.onResize();

	if (this.isPausedWhenNotInView) {
		this.onScroll();
		
	} else {
		if (!this.image) {
			this.refreshColorsAndPos();
			this.animation = requestAnimationFrame(this.animateColors.bind(this));
			this.animating = true;
		}
	}

	// Callback and Event
	if (this.callbacks.onStart) this.callbacks.onStart();
	this.canvas.dispatchEvent(this.events.start);
}

Granim.prototype.animateColors = __webpack_require__(/*! ./animateColors.js */ "./node_modules/granim/lib/animateColors.js");
Granim.prototype.changeBlendingMode = __webpack_require__(/*! ./changeBlendingMode.js */ "./node_modules/granim/lib/changeBlendingMode.js");
Granim.prototype.changeDirection = __webpack_require__(/*! ./changeDirection.js */ "./node_modules/granim/lib/changeDirection.js");
Granim.prototype.changeState = __webpack_require__(/*! ./changeState.js */ "./node_modules/granim/lib/changeState.js");
Granim.prototype.clear = __webpack_require__(/*! ./clear.js */ "./node_modules/granim/lib/clear.js");
Granim.prototype.convertColorToRgba = __webpack_require__(/*! ./convertColorToRgba.js */ "./node_modules/granim/lib/convertColorToRgba.js");
Granim.prototype.destroy = __webpack_require__(/*! ./destroy.js */ "./node_modules/granim/lib/destroy.js");
Granim.prototype.eventPolyfill = __webpack_require__(/*! ./eventPolyfill.js */ "./node_modules/granim/lib/eventPolyfill.js");
Granim.prototype.getColor = __webpack_require__(/*! ./getColor.js */ "./node_modules/granim/lib/getColor.js");
Granim.prototype.getColorDiff = __webpack_require__(/*! ./getColorDiff.js */ "./node_modules/granim/lib/getColorDiff.js");
Granim.prototype.getColorPos = __webpack_require__(/*! ./getColorPos.js */ "./node_modules/granim/lib/getColorPos.js");
Granim.prototype.getColorPosDiff = __webpack_require__(/*! ./getColorPosDiff.js */ "./node_modules/granim/lib/getColorPosDiff.js");
Granim.prototype.getCurrentColors = __webpack_require__(/*! ./getCurrentColors.js */ "./node_modules/granim/lib/getCurrentColors.js");
Granim.prototype.getCurrentColorsPos = __webpack_require__(/*! ./getCurrentColorsPos.js */ "./node_modules/granim/lib/getCurrentColorsPos.js");
Granim.prototype.getDimensions = __webpack_require__(/*! ./getDimensions.js */ "./node_modules/granim/lib/getDimensions.js");
Granim.prototype.getElement = __webpack_require__(/*! ./getElement.js */ "./node_modules/granim/lib/getElement.js");
Granim.prototype.getLightness = __webpack_require__(/*! ./getLightness.js */ "./node_modules/granim/lib/getLightness.js");
Granim.prototype.makeGradient = __webpack_require__(/*! ./makeGradient.js */ "./node_modules/granim/lib/makeGradient.js");
Granim.prototype.onResize = __webpack_require__(/*! ./onResize.js */ "./node_modules/granim/lib/onResize.js");
Granim.prototype.onScroll = __webpack_require__(/*! ./onScroll.js */ "./node_modules/granim/lib/onScroll.js");
Granim.prototype.pause = __webpack_require__(/*! ./pause.js */ "./node_modules/granim/lib/pause.js");
Granim.prototype.pauseWhenNotInView = __webpack_require__(/*! ./pauseWhenNotInView.js */ "./node_modules/granim/lib/pauseWhenNotInView.js");
Granim.prototype.play = __webpack_require__(/*! ./play.js */ "./node_modules/granim/lib/play.js");
Granim.prototype.prepareImage = __webpack_require__(/*! ./prepareImage.js */ "./node_modules/granim/lib/prepareImage.js");
Granim.prototype.refreshColorsAndPos = __webpack_require__(/*! ./refreshColorsAndPos.js */ "./node_modules/granim/lib/refreshColorsAndPos.js");
Granim.prototype.setColors = __webpack_require__(/*! ./setColors.js */ "./node_modules/granim/lib/setColors.js");
Granim.prototype.setDirection = __webpack_require__(/*! ./setDirection.js */ "./node_modules/granim/lib/setDirection.js");
Granim.prototype.setSizeAttributes = __webpack_require__(/*! ./setSizeAttributes.js */ "./node_modules/granim/lib/setSizeAttributes.js");
Granim.prototype.triggerError = __webpack_require__(/*! ./triggerError.js */ "./node_modules/granim/lib/triggerError.js");
Granim.prototype.validateInput = __webpack_require__(/*! ./validateInput.js */ "./node_modules/granim/lib/validateInput.js");

module.exports = Granim;


/***/ }),

/***/ "./node_modules/granim/lib/animateColors.js":
/*!**************************************************!*\
  !*** ./node_modules/granim/lib/animateColors.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(timestamp) {
	var wasWindowIdled = timestamp - this.previousTimeStamp > 100;
	var isLoop = this.states[this.activeState].loop !== undefined ? this.states[this.activeState].loop : true;
	var progressPercent, isLooping, nextGradient;

	// If tab was inactive then resumed, reset the previous timestamp
	if (this.previousTimeStamp === null || wasWindowIdled) {
		this.previousTimeStamp = timestamp;
	}

	// Compute progress and save the timestamp
	this.progress = this.progress + (timestamp - this.previousTimeStamp);
	progressPercent = (this.progress / this.activetransitionSpeed * 100).toFixed(2);
	this.previousTimeStamp = timestamp;

	// Set the new gradient colors in a property
	this.refreshColorsAndPos(progressPercent);

	// Continue the animation or prepare for the next one
	if (progressPercent < 100) {
		this.animation = requestAnimationFrame(this.animateColors.bind(this));

	} else {
		// if the current animation index is inferior to the penultimate gradient
		// or to the last gradient with the loop mode activated
		if (this.channelsIndex < this.states[this.activeState].gradients.length - 2 || isLoop) {

			// Set the active transition speed to the active state one after changing state
			if (this.isChangingState) {
				this.activetransitionSpeed = this.states[this.activeState].transitionSpeed || 5000;
				this.isChangingState = false;
			}

			// Resetting properties
			this.previousTimeStamp = null;
			this.progress = 0;
			this.channelsIndex++;
			isLooping = false;

			// If it's going to loop or if it's the transition after the loop
			if (this.channelsIndex === this.states[this.activeState].gradients.length - 1) {
				isLooping = true;
				
			} else if (this.channelsIndex === this.states[this.activeState].gradients.length) {
				this.channelsIndex = 0;
			}

			// Checking the next gradient to send in args of an event and a callback
			nextGradient = this.states[this.activeState].gradients[this.channelsIndex + 1] === undefined ?
				this.states[this.activeState].gradients[0] :
				this.states[this.activeState].gradients[this.channelsIndex + 1];

			// Compute the colors for the transition and render a new frame
			this.setColors();
			this.animation = requestAnimationFrame(this.animateColors.bind(this));
			
			// Callback and Event
			if (this.callbacks.onGradientChange) {
				this.callbacks.onGradientChange({
					isLooping: isLooping,
					colorsFrom: this.states[this.activeState].gradients[this.channelsIndex],
					colorsTo: nextGradient,
					activeState: this.activeState
				});
			}

			this.canvas.dispatchEvent(this.events.gradientChange({
				isLooping: isLooping,
				colorsFrom: this.states[this.activeState].gradients[this.channelsIndex],
				colorsTo: nextGradient,
				activeState: this.activeState
			}));

		// Else if it was the last gradient on the list and the loop mode is off
		} else {
			cancelAnimationFrame(this.animation);

			// Callback and Event
			if (this.callbacks.onEnd) this.callbacks.onEnd();
			this.canvas.dispatchEvent(new CustomEvent('granim:end'));
		}
	}
};


/***/ }),

/***/ "./node_modules/granim/lib/changeBlendingMode.js":
/*!*******************************************************!*\
  !*** ./node_modules/granim/lib/changeBlendingMode.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(newBlendingMode) {
	this.context.clearRect(0, 0, this.x1, this.y1);
	this.context.globalCompositeOperation =
		this.image.blendingMode = newBlendingMode;
	this.validateInput('blendingMode');
	if (this.isPaused) this.refreshColorsAndPos();
};


/***/ }),

/***/ "./node_modules/granim/lib/changeDirection.js":
/*!****************************************************!*\
  !*** ./node_modules/granim/lib/changeDirection.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(newDirection) {
	this.context.clearRect(0, 0, this.x1, this.y1);
	this.direction = newDirection;
	this.validateInput('direction');
	if (this.isPaused) this.refreshColorsAndPos();
};


/***/ }),

/***/ "./node_modules/granim/lib/changeState.js":
/*!************************************************!*\
  !*** ./node_modules/granim/lib/changeState.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(newState) {
	var _this = this;

	// Prevent transitioning to the same state
	if (this.activeState === newState) {
		return;
	}

	// Setting the good properties for the transition
	if (!this.isPaused) {
		this.isPaused = true;
		this.pause();
	}

	this.channelsIndex = -1;
	this.activetransitionSpeed = this.stateTransitionSpeed;
	this.activeColorsDiff = [];
	this.activeColorsPosDiff = [];
	this.activeColors = this.getCurrentColors();
	this.activeColorsPos = this.getCurrentColorsPos();
	this.progress = 0;
	this.previousTimeStamp = null;
	this.isChangingState = true;

	// Compute the gradient color and pos diff between the last frame gradient
	// and the first one of the new state
	this.states[newState].gradients[0].forEach(function(gradientColor, i, arr) {
		var nextColors = _this.convertColorToRgba(_this.getColor(gradientColor));
		var nextColorsPos = _this.getColorPos(gradientColor, i);
		var colorDiff = _this.getColorDiff(_this.activeColors[i], nextColors);
		var colorPosDiff = _this.getColorPosDiff(_this.activeColorsPos[i], nextColorsPos);
		_this.activeColorsDiff.push(colorDiff);
		_this.activeColorsPosDiff.push(colorPosDiff);
	});

	// Start the animation
	this.activeState = newState;
	this.play();
};


/***/ }),

/***/ "./node_modules/granim/lib/clear.js":
/*!******************************************!*\
  !*** ./node_modules/granim/lib/clear.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function() {
	if (!this.isPaused) {
		cancelAnimationFrame(this.animation);

	} else {
		this.isPaused = false;
	}
	this.isCleared = true;
	this.context.clearRect(0, 0, this.x1, this.y1);
};


/***/ }),

/***/ "./node_modules/granim/lib/convertColorToRgba.js":
/*!*******************************************************!*\
  !*** ./node_modules/granim/lib/convertColorToRgba.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regex = {
	hexa: /^#(?:[0-9a-fA-F]{3}){1,2}$/,
	rgba: /^rgba\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3}), ?(.?\d{1,3})\)$/,
	rgb: /^rgb\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)$/,
	hsla: /^hsla\((\d{1,3}), ?(\d{1,3})%, ?(\d{1,3})%, ?(.?\d{1,3})\)$/,
	hsl: /^hsl\((\d{1,3}), ?(\d{1,3})%, ?(\d{1,3})%\)$/
}, match;

module.exports = function(color) {
	switch(identifyColorType(color)) {
		default:
			this.triggerError('colorType');

		case 'hexa':
			return hexToRgba(color);

		case 'rgba':
			return [
				parseInt(match[1], 10),
				parseInt(match[2], 10),
				parseInt(match[3], 10),
				parseFloat(match[4])
			];

		case 'rgb':
			return [
				parseInt(match[1], 10),
				parseInt(match[2], 10),
				parseInt(match[3], 10),
				1
			];

		case 'hsla':
			return hslaToRgb(
				parseInt(match[1], 10) / 360,
				parseInt(match[2], 10) / 100,
				parseInt(match[3], 10) / 100,
				parseFloat(match[4])
			);

		case 'hsl':
			return hslaToRgb(
				parseInt(match[1], 10) / 360,
				parseInt(match[2], 10) / 100,
				parseInt(match[3], 10) / 100,
				1
			);
	}
};

function identifyColorType(color) {
	var colorTypes = Object.keys(regex);
	var i = 0;
	for (i; i < colorTypes.length; i++) {
		match = regex[colorTypes[i]].exec(color);
		if (match) return colorTypes[i];
	}
	return false;
}

function hexToRgba(hex) {
	// Expand shorthand form (e.g. '03F') to full form (e.g. '0033FF')
	var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	hex = hex.replace(shorthandRegex, function(m, r, g, b) {
		return r + r + g + g + b + b;
	});
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? [
		parseInt(result[1], 16),
		parseInt(result[2], 16),
		parseInt(result[3], 16),
		1
	] : null;
}

function hue2rgb(p, q, t) {
	if (t < 0) t += 1;
	if (t > 1) t -= 1;
	if (t < 1 / 6) return p + (q - p) * 6 * t;
	if (t < 1 / 2) return q;
	if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
	return p;
}

function hslaToRgb(h, s, l, a) {
	var r, g, b, q, p;
	if (s === 0) {
		r = g = b = l; // achromatic
	} else {
		q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		p = 2 * l - q;
		r = hue2rgb(p, q, h + 1/3);
		g = hue2rgb(p, q, h);
		b = hue2rgb(p, q, h - 1/3);
	}
	return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255), a];
}


/***/ }),

/***/ "./node_modules/granim/lib/destroy.js":
/*!********************************************!*\
  !*** ./node_modules/granim/lib/destroy.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function() {
	this.onResize('removeListeners');
	this.onScroll('removeListeners');
	this.clear();
};


/***/ }),

/***/ "./node_modules/granim/lib/eventPolyfill.js":
/*!**************************************************!*\
  !*** ./node_modules/granim/lib/eventPolyfill.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function() {
	if ( typeof window.CustomEvent === 'function' ) return;

	function CustomEvent(event, params) {
		params = params || { bubbles: false, cancelable: false, detail: undefined };
		var evt = document.createEvent('CustomEvent');
		evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
		return evt;
	}

	CustomEvent.prototype = window.Event.prototype;

	window.CustomEvent = CustomEvent;
};


/***/ }),

/***/ "./node_modules/granim/lib/getColor.js":
/*!*********************************************!*\
  !*** ./node_modules/granim/lib/getColor.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(gradientColor) {
	if (typeof gradientColor === 'string') {
		return gradientColor;

	} else if (typeof gradientColor === 'object' && gradientColor.color) {
		return gradientColor.color;

	} else {
		this.triggerError('gradient.color');
	}
};


/***/ }),

/***/ "./node_modules/granim/lib/getColorDiff.js":
/*!*************************************************!*\
  !*** ./node_modules/granim/lib/getColorDiff.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(colorA, colorB) {
	var i = 0;
	var colorDiff = [];

	for (i; i < 4; i++) {
		colorDiff.push(colorB[i] - colorA[i]);
	}

	return colorDiff;
};


/***/ }),

/***/ "./node_modules/granim/lib/getColorPos.js":
/*!************************************************!*\
  !*** ./node_modules/granim/lib/getColorPos.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(gradientColor, i) {
	if (typeof gradientColor === 'object' && gradientColor.pos) {
		return gradientColor.pos;

	} else {
		// Ensure first and last position to be 0 and 100
		return parseFloat(!i ? 0 : ((1 / (this.gradientLength - 1)) * i).toFixed(2));
	}
};


/***/ }),

/***/ "./node_modules/granim/lib/getColorPosDiff.js":
/*!****************************************************!*\
  !*** ./node_modules/granim/lib/getColorPosDiff.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(posA, posB) {
	return posB - posA;
};


/***/ }),

/***/ "./node_modules/granim/lib/getCurrentColors.js":
/*!*****************************************************!*\
  !*** ./node_modules/granim/lib/getCurrentColors.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function() {
	var i, j;
	var currentColors = [];

	for (i = 0; i < this.currentColors.length; i++) {
		currentColors.push([]);

		for (j = 0; j < 4; j++) {
			currentColors[i].push(this.currentColors[i][j]);
		}
	}

	// Return a deep copy of the current colors
	return currentColors;
};


/***/ }),

/***/ "./node_modules/granim/lib/getCurrentColorsPos.js":
/*!********************************************************!*\
  !*** ./node_modules/granim/lib/getCurrentColorsPos.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function() {
	var currentColorsPos = [], i;

	for (i = 0; i < this.currentColorsPos.length; i++) {
		currentColorsPos.push(this.currentColorsPos[i]);
	}

	// Return a deep copy of the current colors
	return currentColorsPos;
};


/***/ }),

/***/ "./node_modules/granim/lib/getDimensions.js":
/*!**************************************************!*\
  !*** ./node_modules/granim/lib/getDimensions.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function() {
	this.x1 = this.canvas.offsetWidth;
	this.y1 = this.canvas.offsetHeight;
};


/***/ }),

/***/ "./node_modules/granim/lib/getElement.js":
/*!***********************************************!*\
  !*** ./node_modules/granim/lib/getElement.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(element) {
	if (element instanceof HTMLCanvasElement) {
		this.canvas = element;

	} else if (typeof element === 'string') {
		this.canvas = document.querySelector(element);

	} else {
		throw new Error('The element you used is neither a String, nor a HTMLCanvasElement');
	}

	if (!this.canvas) {
		throw new Error('`' + element + '` could not be found in the DOM');
	}
};


/***/ }),

/***/ "./node_modules/granim/lib/getLightness.js":
/*!*************************************************!*\
  !*** ./node_modules/granim/lib/getLightness.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function() {
	var currentColors = this.getCurrentColors();
	var gradientAverage = null;
	var lightnessAverage, i;
	var colorsAverage = currentColors.map(function(el) {
		// Compute the average lightness of each color
		// in the current gradient
		return Math.max(el[0], el[1], el[2]);
	});

	for (i = 0; i < colorsAverage.length; i++) {
		// Add all the average lightness of each color
		gradientAverage = gradientAverage === null ?
			colorsAverage[i] : gradientAverage + colorsAverage[i];

		if (i === colorsAverage.length - 1) {
			// if it's the last lightness average
			// divide it by the total length to
			// have the global average lightness
			lightnessAverage = Math.round(gradientAverage / (i + 1));
		}
	}

	return lightnessAverage >= 128 ? 'light' : 'dark';
};


/***/ }),

/***/ "./node_modules/granim/lib/makeGradient.js":
/*!*************************************************!*\
  !*** ./node_modules/granim/lib/makeGradient.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function() {
	var gradient = this.setDirection();
	var elToSetClassOnClass = document.querySelector(this.elToSetClassOn).classList;
	var i = 0;
	this.context.clearRect(0, 0, this.x1, this.y1);

	if (this.image) {
		this.context.drawImage(
			this.imageNode,
			this.imagePosition.x,
			this.imagePosition.y,
			this.imagePosition.width,
			this.imagePosition.height
		);
	}

	for (i; i < this.currentColors.length; i++) {
		gradient.addColorStop(this.currentColorsPos[i], 'rgba(' +
			this.currentColors[i][0] + ', ' +
			this.currentColors[i][1] + ', ' +
			this.currentColors[i][2] + ', ' +
			this.currentColors[i][3] + ')'
		);
	}

	if (this.name) {
		if (this.getLightness() === 'light') {
			elToSetClassOnClass.remove(this.name + '-dark');
			elToSetClassOnClass.add(this.name + '-light');

		} else {
			elToSetClassOnClass.remove(this.name + '-light');
			elToSetClassOnClass.add(this.name + '-dark');
		}
	}

	this.context.fillStyle = gradient;
	this.context.fillRect(0, 0, this.x1, this.y1);
};


/***/ }),

/***/ "./node_modules/granim/lib/onResize.js":
/*!*********************************************!*\
  !*** ./node_modules/granim/lib/onResize.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(type) {
	if (type === 'removeListeners') {
		window.removeEventListener('resize', this.setSizeAttributesNameSpace);
		return;
	}

	window.addEventListener('resize', this.setSizeAttributesNameSpace);
};


/***/ }),

/***/ "./node_modules/granim/lib/onScroll.js":
/*!*********************************************!*\
  !*** ./node_modules/granim/lib/onScroll.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(type) {
	if (type === 'removeListeners') {
		window.removeEventListener('scroll', this.pauseWhenNotInViewNameSpace);
		return;
	}

	window.addEventListener('scroll', this.pauseWhenNotInViewNameSpace);
	this.pauseWhenNotInViewNameSpace();
};


/***/ }),

/***/ "./node_modules/granim/lib/pause.js":
/*!******************************************!*\
  !*** ./node_modules/granim/lib/pause.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(state) {
	var isPausedBecauseNotInView = state === 'isPausedBecauseNotInView';
	if (this.isCleared) return;
	if (!isPausedBecauseNotInView) this.isPaused = true;
	cancelAnimationFrame(this.animation);
	this.animating = false;
};


/***/ }),

/***/ "./node_modules/granim/lib/pauseWhenNotInView.js":
/*!*******************************************************!*\
  !*** ./node_modules/granim/lib/pauseWhenNotInView.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function() {
	var _this = this;
	if (this.scrollDebounceTimeout) clearTimeout(this.scrollDebounceTimeout);

	this.scrollDebounceTimeout = setTimeout(function() {
		var elPos = _this.canvas.getBoundingClientRect();
		_this.isCanvasInWindowView = !(elPos.bottom < 0 || elPos.right < 0 ||
			elPos.left > window.innerWidth || elPos.top > window.innerHeight);

		if (_this.isCanvasInWindowView) {
			if (!_this.isPaused || _this.firstScrollInit) {
				if (_this.image && !_this.isImgLoaded) {return;}
				_this.isPausedBecauseNotInView = false;
				_this.play('isPlayedBecauseInView');
				_this.firstScrollInit = false;
			}

		} else {
			if (!_this.image && _this.firstScrollInit) {
				_this.refreshColorsAndPos();
				_this.firstScrollInit = false;
			}

			if (!_this.isPaused && !_this.isPausedBecauseNotInView) {
				_this.isPausedBecauseNotInView = true;
				_this.pause('isPausedBecauseNotInView');
			}
		}
	}, this.scrollDebounceThreshold);
};


/***/ }),

/***/ "./node_modules/granim/lib/play.js":
/*!*****************************************!*\
  !*** ./node_modules/granim/lib/play.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(state) {
	var isPlayedBecauseInView = state === 'isPlayedBecauseInView';
	if (!isPlayedBecauseInView) this.isPaused = false;
	this.isCleared = false;
	if (!this.animating) {
		this.animation = requestAnimationFrame(this.animateColors.bind(this));
		this.animating = true;
	}
};


/***/ }),

/***/ "./node_modules/granim/lib/prepareImage.js":
/*!*************************************************!*\
  !*** ./node_modules/granim/lib/prepareImage.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function() {
	var _this = this;

	if (!this.imagePosition) {
		this.imagePosition = { x: 0, y: 0, width: 0, height: 0 };
	}

	if (this.image.blendingMode) {
		this.context.globalCompositeOperation = this.image.blendingMode;
	}

	if (this.imageNode) {
		setImagePosition();
		return;
	}

	this.imageNode = new Image();
	this.imageNode.onerror = function() {
		throw new Error('Granim: The image source is invalid.');
	};
	this.imageNode.onload = function() {
		_this.imgOriginalWidth = _this.imageNode.width;
		_this.imgOriginalHeight = _this.imageNode.height;
		setImagePosition();
		_this.refreshColorsAndPos();
		if (!_this.isPausedWhenNotInView || _this.isCanvasInWindowView) {
			_this.animation = requestAnimationFrame(_this.animateColors.bind(_this));
		}
		_this.isImgLoaded = true;
	};
	this.imageNode.src = this.image.source;

	function setImagePosition() {
		var i, currentAxis;

		for (i = 0; i < 2; i++) {
			currentAxis = !i ? 'x' : 'y';
			setImageAxisPosition(currentAxis);
		}

		function setImageAxisPosition(axis) {
			var canvasWidthOrHeight = _this[axis + '1'];
			var imgOriginalWidthOrHeight = _this[axis === 'x' ? 'imgOriginalWidth' : 'imgOriginalHeight'];
			var imageAlignIndex = axis === 'x' ? _this.image.position[0] : _this.image.position[1];
			var imageAxisPosition;
			switch(imageAlignIndex) {
				case 'center':
					imageAxisPosition = imgOriginalWidthOrHeight > canvasWidthOrHeight
						? -(imgOriginalWidthOrHeight - canvasWidthOrHeight) / 2
						: (canvasWidthOrHeight - imgOriginalWidthOrHeight) / 2;
					_this.imagePosition[axis] = imageAxisPosition;
					_this.imagePosition[axis === 'x' ? 'width' : 'height'] = imgOriginalWidthOrHeight;
					break;

				case 'top':
					_this.imagePosition['y'] = 0;
					_this.imagePosition['height'] = imgOriginalWidthOrHeight;
					break;

				case 'bottom':
					_this.imagePosition['y'] = canvasWidthOrHeight - imgOriginalWidthOrHeight;
					_this.imagePosition['height'] = imgOriginalWidthOrHeight;
					break;

				case 'right':
					_this.imagePosition['x'] = canvasWidthOrHeight - imgOriginalWidthOrHeight;
					_this.imagePosition['width'] = imgOriginalWidthOrHeight;
					break;

				case 'left':
					_this.imagePosition['x'] = 0;
					_this.imagePosition['width'] = imgOriginalWidthOrHeight;
					break;
			}

			if (_this.image.stretchMode) {
				imageAlignIndex = axis === 'x' ? _this.image.stretchMode[0] : _this.image.stretchMode[1];
				switch(imageAlignIndex) {
					case 'none':
						break;
					case 'stretch':
						_this.imagePosition[axis] = 0;
						_this.imagePosition[axis === 'x' ? 'width' : 'height'] = canvasWidthOrHeight;
						break;

					case 'stretch-if-bigger':
						if (imgOriginalWidthOrHeight < canvasWidthOrHeight) break;
						_this.imagePosition[axis] = 0;
						_this.imagePosition[axis === 'x' ? 'width' : 'height'] = canvasWidthOrHeight;
						break;

					case 'stretch-if-smaller':
						if (imgOriginalWidthOrHeight > canvasWidthOrHeight) break;
						_this.imagePosition[axis] = 0;
						_this.imagePosition[axis === 'x' ? 'width' : 'height'] = canvasWidthOrHeight;
						break;
				}
			}
		}
	}
};


/***/ }),

/***/ "./node_modules/granim/lib/refreshColorsAndPos.js":
/*!********************************************************!*\
  !*** ./node_modules/granim/lib/refreshColorsAndPos.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(progressPercent) {
	var _this = this, activeChannel, activeChannelPos, i, j;

	// Loop through each colors of the active gradient
	for (i = 0; i < this.activeColors.length; i++) {

		// Generate RGBA colors
		for (j = 0; j < 4; j++) {
			// If color value [0-255] round to the integer,
			// Else if opacity [0-1] round to 2 decimals
			activeChannel = _this.activeColors[i][j] +
				(j !== 3
					? Math.ceil(_this.activeColorsDiff[i][j] / 100 * progressPercent)
					: Math.round((_this.activeColorsDiff[i][j] / 100 * progressPercent) * 100) / 100
				);

			// Prevent colors values from going < 0 & > 255
			if (activeChannel <= 255 && activeChannel >= 0) {
				_this.currentColors[i][j] = activeChannel;
			}
		}

		// Generate gradient color position
		activeChannelPos = parseFloat((_this.activeColorsPos[i] +
			(_this.activeColorsPosDiff[i] / 100 * progressPercent)
		).toFixed(4));

		if (activeChannelPos <= 1 && activeChannelPos >= 0) {
			_this.currentColorsPos[i] = activeChannelPos;
		}
	}

	this.makeGradient();
};


/***/ }),

/***/ "./node_modules/granim/lib/setColors.js":
/*!**********************************************!*\
  !*** ./node_modules/granim/lib/setColors.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function() {
	var _this = this, colorDiff, colorPosDiff, nextColors, nextColorsPos;

	if (!this.channels[this.activeState]) this.channels[this.activeState] = [];

	// If the actual channel exist, reassign properties and exit
	// (each channel is saved to prevent recomputing it each time)
	if (this.channels[this.activeState][this.channelsIndex] !== undefined) {
		this.activeColors = this.channels[this.activeState][this.channelsIndex].colors;
		this.activeColorsDiff = this.channels[this.activeState][this.channelsIndex].colorsDiff;
		this.activeColorsPos = this.channels[this.activeState][this.channelsIndex].colorsPos;
		this.activeColorsPosDiff = this.channels[this.activeState][this.channelsIndex].colorsPosDiff;
		return;
	}

	// Set blank properties
	this.channels[this.activeState].push([{}]);
	this.channels[this.activeState][this.channelsIndex].colors = [];
	this.channels[this.activeState][this.channelsIndex].colorsDiff = [];
	this.channels[this.activeState][this.channelsIndex].colorsPos = [];
	this.channels[this.activeState][this.channelsIndex].colorsPosDiff = [];
	this.activeColors = [];
	this.activeColorsDiff = [];
	this.activeColorsPos = [];
	this.activeColorsPosDiff = [];

	// Go on each gradient of the current state
	this.states[this.activeState].gradients[this.channelsIndex].forEach(function(color, i) {
		// Push the hex color converted to rgba on the channel and the active color properties
		var colorPos = _this.getColorPos(color, i);
		var color = _this.getColor(color);
		var rgbaColor = _this.convertColorToRgba(color);
		var activeChannel = _this.channels[_this.activeState];

		activeChannel[_this.channelsIndex].colors.push(rgbaColor);
		_this.activeColors.push(rgbaColor);
		activeChannel[_this.channelsIndex].colorsPos.push(colorPos);
		_this.activeColorsPos.push(colorPos);

		// If it's the first channel to be set, set the currentColors
		if (!_this.isCurrentColorsSet) {
			_this.currentColors.push(_this.convertColorToRgba(color));
			_this.currentColorsPos.push(colorPos);
		}

		// If it's the last gradient, compute the color diff between the last gradient and the first one,
		// else between the penultimate one and the last one
		if (_this.channelsIndex === _this.states[_this.activeState].gradients.length - 1) {
			colorDiff = _this.getColorDiff(
				activeChannel[_this.channelsIndex].colors[i],
				activeChannel[0].colors[i]
			);
			colorPosDiff = _this.getColorPosDiff(
				activeChannel[_this.channelsIndex].colorsPos[i],
				activeChannel[0].colorsPos[i]
			);

		} else {
			nextColors = _this.convertColorToRgba(_this.getColor(_this.states[_this.activeState].gradients[_this.channelsIndex + 1][i]));
			nextColorsPos = _this.getColorPos(_this.states[_this.activeState].gradients[_this.channelsIndex + 1][i], i);
			colorDiff = _this.getColorDiff(activeChannel[_this.channelsIndex].colors[i], nextColors);
			colorPosDiff = _this.getColorPosDiff(activeChannel[_this.channelsIndex].colorsPos[i], nextColorsPos);
		}

		activeChannel[_this.channelsIndex].colorsDiff.push(colorDiff);
		_this.activeColorsDiff.push(colorDiff);
		activeChannel[_this.channelsIndex].colorsPosDiff.push(colorPosDiff);
		_this.activeColorsPosDiff.push(colorPosDiff);
	});

	this.activetransitionSpeed = this.states[this.activeState].transitionSpeed || 5000;
	this.isCurrentColorsSet = true;
};


/***/ }),

/***/ "./node_modules/granim/lib/setDirection.js":
/*!*************************************************!*\
  !*** ./node_modules/granim/lib/setDirection.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function() {
	var ctx = this.context;

	switch(this.direction) {
		case 'diagonal':
			return ctx.createLinearGradient(0, 0, this.x1, this.y1);

		case 'left-right':
			return ctx.createLinearGradient(0, 0, this.x1, 0);

		case 'top-bottom':
			return ctx.createLinearGradient(this.x1 / 2, 0, this.x1 / 2, this.y1);

		case 'radial':
			return ctx.createRadialGradient(this.x1 / 2, this.y1 / 2, this.x1 / 2, this.x1 / 2, this.y1 / 2, 0);

		case 'custom':
			return ctx.createLinearGradient(
				getCustomCoordinateInPixels(this.customDirection.x0, this.x1),
				getCustomCoordinateInPixels(this.customDirection.y0, this.y1),
				getCustomCoordinateInPixels(this.customDirection.x1, this.x1),
				getCustomCoordinateInPixels(this.customDirection.y1, this.y1)
			);
	}
};

function getCustomCoordinateInPixels(coordinate, size) {
	return coordinate.indexOf('%') > -1
		? size / 100 * parseInt(coordinate.split('%')[0], 10)
		: parseInt(coordinate.split('px')[0], 10);
}


/***/ }),

/***/ "./node_modules/granim/lib/setSizeAttributes.js":
/*!******************************************************!*\
  !*** ./node_modules/granim/lib/setSizeAttributes.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function() {
	this.getDimensions();
	this.canvas.setAttribute('width', this.x1);
	this.canvas.setAttribute('height', this.y1);
	if (this.image) this.prepareImage();
	this.refreshColorsAndPos();
};


/***/ }),

/***/ "./node_modules/granim/lib/triggerError.js":
/*!*************************************************!*\
  !*** ./node_modules/granim/lib/triggerError.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(element) {
	var siteURL = 'https://sarcadass.github.io/granim.js/api.html';
	throw new Error('Granim: Input error on "' + element + '" option.\nCheck the API ' + siteURL + '.');
};


/***/ }),

/***/ "./node_modules/granim/lib/validateInput.js":
/*!**************************************************!*\
  !*** ./node_modules/granim/lib/validateInput.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(inputType) {
	var xPositionValues = ['left', 'center', 'right'];
	var yPositionValues = ['top', 'center', 'bottom'];
	var stretchModeValues = ['none', 'stretch', 'stretch-if-smaller', 'stretch-if-bigger'];
	var blendingModeValues = ['multiply', 'screen', 'normal', 'overlay', 'darken',
		'lighten', 'lighter', 'color-dodge', 'color-burn', 'hard-light', 'soft-light',
		'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity'];
	var directionValues = ['diagonal', 'left-right', 'top-bottom', 'radial', 'custom'];

	switch(inputType) {
		case 'image':
			// Validate image.position
			if ((!Array.isArray(this.image.position) || this.image.position.length !== 2) ||
				xPositionValues.indexOf(this.image.position[0]) === -1 ||
				yPositionValues.indexOf(this.image.position[1]) === -1
			) { this.triggerError('image.position'); }
			// Validate image.stretchMode
			if (this.image.stretchMode) {
				if ((!Array.isArray(this.image.stretchMode) || this.image.stretchMode.length !== 2) ||
					stretchModeValues.indexOf(this.image.stretchMode[0]) === -1 ||
					stretchModeValues.indexOf(this.image.stretchMode[1]) === -1
				) { this.triggerError('image.stretchMode'); }
			}
			break;

		case 'blendingMode':
			if (blendingModeValues.indexOf(this.image.blendingMode) === -1) {
				this.clear();
				this.triggerError('blendingMode');
			}
			break;

		case 'direction':
			if (directionValues.indexOf(this.direction) === -1) {
				this.triggerError('direction');
			} else {
				if (this.direction === 'custom') {
					if (!areDefinedInPixelsOrPercentage([
						this.customDirection.x0,
						this.customDirection.x1,
						this.customDirection.y0,
						this.customDirection.y1
					])) {
						this.triggerError('customDirection');
					}
				}
			}
			break;
	}
};

function areDefinedInPixelsOrPercentage(array) {
	var definedInPixelsOrPercentage = true, i = 0, value;
	while (definedInPixelsOrPercentage && i < array.length) {
		value = array[i];
		if (typeof value !== 'string') {
			definedInPixelsOrPercentage = false;
		} else {
			var splittedValue = null;
			var unit = null;
			if (value.indexOf('px') !== -1) unit = 'px';
			if (value.indexOf('%') !== -1) unit = '%';
			splittedValue = value.split(unit).filter(function(value) {
				return value.length > 0;
			});
			// Check if there is a unit ('px' or '%'),
			// a char before the unit,
			// no char after the unit,
			// the string without the unit is only composed of digits
			if (
				!unit
				|| splittedValue.length > 2
				|| !splittedValue[0]
				|| splittedValue[1]
				|| !/^-?\d+\.?\d*$/.test(splittedValue[0])
			) {
				definedInPixelsOrPercentage = false;
			}
		}
		i++;
	}
	return definedInPixelsOrPercentage;
}


/***/ }),

/***/ "./node_modules/is-obj/index.js":
/*!**************************************!*\
  !*** ./node_modules/is-obj/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (x) {
	var type = typeof x;
	return x !== null && (type === 'object' || type === 'function');
};


/***/ }),

/***/ "./node_modules/prism-react-renderer/es/components/Highlight.js":
/*!**********************************************************************!*\
  !*** ./node_modules/prism-react-renderer/es/components/Highlight.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_normalizeTokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/normalizeTokens */ "./node_modules/prism-react-renderer/es/utils/normalizeTokens.js");
/* harmony import */ var _utils_themeToDict__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/themeToDict */ "./node_modules/prism-react-renderer/es/utils/themeToDict.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }





var Highlight =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Highlight, _Component);

  function Highlight() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.prevTheme = void 0;
    _this.prevLanguage = void 0;
    _this.themeDict = void 0;

    _this.getThemeDict = function (props) {
      if (_this.themeDict !== undefined && props.theme === _this.prevTheme && props.language === _this.prevLanguage) {
        return _this.themeDict;
      }

      _this.prevTheme = props.theme;
      _this.prevLanguage = props.language;
      var themeDict = props.theme ? Object(_utils_themeToDict__WEBPACK_IMPORTED_MODULE_2__["default"])(props.theme, props.language) : undefined;
      return _this.themeDict = themeDict;
    };

    _this.getLineProps = function (_ref) {
      var key = _ref.key,
          className = _ref.className,
          style = _ref.style,
          line = _ref.line,
          rest = _objectWithoutPropertiesLoose(_ref, ["key", "className", "style", "line"]);

      var output = _extends({}, rest, {
        className: "token-line",
        style: undefined,
        key: undefined
      });

      var themeDict = _this.getThemeDict(_this.props);

      if (themeDict !== undefined) {
        output.style = themeDict.plain;
      }

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends({}, output.style, style) : style;
      }

      if (key !== undefined) output.key = key;
      if (className) output.className += " " + className;
      return output;
    };

    _this.getStyleForToken = function (_ref2) {
      var types = _ref2.types,
          empty = _ref2.empty;
      var typesSize = types.length;

      var themeDict = _this.getThemeDict(_this.props);

      if (themeDict === undefined) {
        return undefined;
      } else if (typesSize === 1 && types[0] === "plain") {
        return empty ? {
          display: "inline-block"
        } : undefined;
      } else if (typesSize === 1 && !empty) {
        return themeDict[types[0]];
      }

      var baseStyle = empty ? {
        display: "inline-block"
      } : {}; // $FlowFixMe

      var typeStyles = types.map(function (type) {
        return themeDict[type];
      });
      return Object.assign.apply(Object, [baseStyle].concat(typeStyles));
    };

    _this.getTokenProps = function (_ref3) {
      var key = _ref3.key,
          className = _ref3.className,
          style = _ref3.style,
          token = _ref3.token,
          rest = _objectWithoutPropertiesLoose(_ref3, ["key", "className", "style", "token"]);

      var output = _extends({}, rest, {
        className: "token " + token.types.join(" "),
        children: token.content,
        style: _this.getStyleForToken(token),
        key: undefined
      });

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends({}, output.style, style) : style;
      }

      if (key !== undefined) output.key = key;
      if (className) output.className += " " + className;
      return output;
    };

    return _this;
  }

  var _proto = Highlight.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Prism = _this$props.Prism,
        language = _this$props.language,
        code = _this$props.code,
        children = _this$props.children;
    var themeDict = this.getThemeDict(this.props);
    var grammar = Prism.languages[language];
    var mixedTokens = grammar !== undefined ? Prism.tokenize(code, grammar, language) : [code];
    var tokens = Object(_utils_normalizeTokens__WEBPACK_IMPORTED_MODULE_1__["default"])(mixedTokens);
    return children({
      tokens: tokens,
      className: "prism-code language-" + language,
      style: themeDict !== undefined ? themeDict.root : {},
      getLineProps: this.getLineProps,
      getTokenProps: this.getTokenProps
    });
  };

  return Highlight;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Highlight);

/***/ }),

/***/ "./node_modules/prism-react-renderer/es/defaultProps.js":
/*!**************************************************************!*\
  !*** ./node_modules/prism-react-renderer/es/defaultProps.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_prism__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/prism */ "./node_modules/prism-react-renderer/es/vendor/prism/index.js");
/* harmony import */ var _themes_duotoneDark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../themes/duotoneDark */ "./node_modules/prism-react-renderer/themes/duotoneDark.js");
/* harmony import */ var _themes_duotoneDark__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_themes_duotoneDark__WEBPACK_IMPORTED_MODULE_1__);


var defaultProps = {
  // $FlowFixMe
  Prism: _vendor_prism__WEBPACK_IMPORTED_MODULE_0__["default"],
  theme: _themes_duotoneDark__WEBPACK_IMPORTED_MODULE_1___default.a
};
/* harmony default export */ __webpack_exports__["default"] = (defaultProps);

/***/ }),

/***/ "./node_modules/prism-react-renderer/es/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/prism-react-renderer/es/index.js ***!
  \*******************************************************/
/*! exports provided: Prism, defaultProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_prism__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/prism */ "./node_modules/prism-react-renderer/es/vendor/prism/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Prism", function() { return _vendor_prism__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _defaultProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultProps */ "./node_modules/prism-react-renderer/es/defaultProps.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultProps", function() { return _defaultProps__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _components_Highlight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Highlight */ "./node_modules/prism-react-renderer/es/components/Highlight.js");




/* harmony default export */ __webpack_exports__["default"] = (_components_Highlight__WEBPACK_IMPORTED_MODULE_2__["default"]);

/***/ }),

/***/ "./node_modules/prism-react-renderer/es/utils/normalizeTokens.js":
/*!***********************************************************************!*\
  !*** ./node_modules/prism-react-renderer/es/utils/normalizeTokens.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var newlineRe = /\r\n|\r|\n/; // Empty lines need to contain a single empty token, denoted with { empty: true }

var normalizeEmptyLines = function normalizeEmptyLines(line) {
  if (line.length === 0) {
    line.push({
      types: ["plain"],
      content: "",
      empty: true
    });
  } else if (line.length === 1 && line[0].content === "") {
    line[0].empty = true;
  }
}; // Takes an array of Prism's tokens and groups them by line, turning plain
// strings into tokens as well. Tokens can become recursive in some cases,
// which means that their types are concatenated. Plain-string tokens however
// are always of type "plain".
// This is not recursive to avoid exceeding the call-stack limit, since it's unclear
// how nested Prism's tokens can become


var normalizeTokens = function normalizeTokens(tokens) {
  var typeArrStack = [[]];
  var tokenArrStack = [tokens];
  var tokenArrIndexStack = [0];
  var tokenArrSizeStack = [tokens.length];
  var i = 0;
  var stackIndex = 0;
  var currentLine = [];
  var acc = [currentLine];

  while (stackIndex > -1) {
    while ((i = tokenArrIndexStack[stackIndex]++) < tokenArrSizeStack[stackIndex]) {
      var content = void 0;
      var types = typeArrStack[stackIndex];
      var tokenArr = tokenArrStack[stackIndex];
      var token = tokenArr[i]; // Determine content and append type to types if necessary

      if (typeof token === "string") {
        types = stackIndex > 0 ? types : ["plain"];
        content = token;
      } else {
        types = types[0] === token.type ? types : types.concat(token.type);
        content = token.content;
      } // If token.content is an array, increase the stack depth and repeat this while-loop


      if (typeof content !== "string") {
        stackIndex++;
        typeArrStack.push(types);
        tokenArrStack.push(content);
        tokenArrIndexStack.push(0);
        tokenArrSizeStack.push(content.length);
        continue;
      } // Split by newlines


      var splitByNewlines = content.split(newlineRe);
      var newlineCount = splitByNewlines.length;
      currentLine.push({
        types: types,
        content: splitByNewlines[0]
      }); // Create a new line for each string on a new line

      for (var _i = 1; _i < newlineCount; _i++) {
        normalizeEmptyLines(currentLine);
        acc.push(currentLine = []);
        currentLine.push({
          types: types,
          content: splitByNewlines[_i]
        });
      }
    } // Decreate the stack depth


    stackIndex--;
    typeArrStack.pop();
    tokenArrStack.pop();
    tokenArrIndexStack.pop();
    tokenArrSizeStack.pop();
  }

  normalizeEmptyLines(currentLine);
  return acc;
};

/* harmony default export */ __webpack_exports__["default"] = (normalizeTokens);

/***/ }),

/***/ "./node_modules/prism-react-renderer/es/utils/themeToDict.js":
/*!*******************************************************************!*\
  !*** ./node_modules/prism-react-renderer/es/utils/themeToDict.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var themeToDict = function themeToDict(theme, language) {
  var plain = theme.plain; // $FlowFixMe

  var base = Object.create(null);
  var themeDict = theme.styles.reduce(function (acc, themeEntry) {
    var types = themeEntry.types,
        languages = themeEntry.languages,
        style = themeEntry.style;

    if (languages && !languages.includes(language)) {
      return acc;
    }

    themeEntry.types.forEach(function (type) {
      // $FlowFixMe
      var accStyle = _extends({}, acc[type], style);

      acc[type] = accStyle;
    });
    return acc;
  }, base); // $FlowFixMe

  themeDict.root = plain; // $FlowFixMe

  themeDict.plain = _extends({}, plain, {
    backgroundColor: null
  });
  return themeDict;
};

/* harmony default export */ __webpack_exports__["default"] = (themeToDict);

/***/ }),

/***/ "./node_modules/prism-react-renderer/es/vendor/prism/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/prism-react-renderer/es/vendor/prism/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prism_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prism-core */ "./node_modules/prism-react-renderer/es/vendor/prism/prism-core.js");
/* harmony import */ var _prism_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prism_core__WEBPACK_IMPORTED_MODULE_0__);


/* This content is auto-generated to include some prismjs language components: */

/* "prismjs/components/prism-markup" */
_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.markup = {
  'comment': /<!--[\s\S]*?-->/,
  'prolog': /<\?[\s\S]+?\?>/,
  'doctype': /<!DOCTYPE[\s\S]+?>/i,
  'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
  'tag': {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
    greedy: true,
    inside: {
      'tag': {
        pattern: /^<\/?[^\s>\/]+/i,
        inside: {
          'punctuation': /^<\/?/,
          'namespace': /^[^\s>\/:]+:/
        }
      },
      'attr-value': {
        pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,
        inside: {
          'punctuation': [/^=/, {
            pattern: /(^|[^\\])["']/,
            lookbehind: true
          }]
        }
      },
      'punctuation': /\/?>/,
      'attr-name': {
        pattern: /[^\s>\/]+/,
        inside: {
          'namespace': /^[^\s>\/:]+:/
        }
      }
    }
  },
  'entity': /&#?[\da-z]{1,8};/i
};
_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.markup['tag'].inside['attr-value'].inside['entity'] = _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.markup['entity']; // Plugin to make entity title show the real entity, idea by Roman Komarov

_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.hooks.add('wrap', function (env) {
  if (env.type === 'entity') {
    env.attributes['title'] = env.content.replace(/&amp;/, '&');
  }
});
_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.xml = _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.markup;
_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.html = _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.markup;
_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.mathml = _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.markup;
_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.svg = _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.markup;
/* "prismjs/components/prism-bash" */

(function (Prism) {
  var insideString = {
    variable: [// Arithmetic Environment
    {
      pattern: /\$?\(\([\s\S]+?\)\)/,
      inside: {
        // If there is a $ sign at the beginning highlight $(( and )) as variable
        variable: [{
          pattern: /(^\$\(\([\s\S]+)\)\)/,
          lookbehind: true
        }, /^\$\(\(/],
        number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,
        // Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
        operator: /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
        // If there is no $ sign at the beginning highlight (( and )) as punctuation
        punctuation: /\(\(?|\)\)?|,|;/
      }
    }, // Command Substitution
    {
      pattern: /\$\([^)]+\)|`[^`]+`/,
      greedy: true,
      inside: {
        variable: /^\$\(|^`|\)$|`$/
      }
    }, /\$(?:[\w#?*!@]+|\{[^}]+\})/i]
  };
  Prism.languages.bash = {
    'shebang': {
      pattern: /^#!\s*\/bin\/bash|^#!\s*\/bin\/sh/,
      alias: 'important'
    },
    'comment': {
      pattern: /(^|[^"{\\])#.*/,
      lookbehind: true
    },
    'string': [//Support for Here-Documents https://en.wikipedia.org/wiki/Here_document
    {
      pattern: /((?:^|[^<])<<\s*)["']?(\w+?)["']?\s*\r?\n(?:[\s\S])*?\r?\n\2/,
      lookbehind: true,
      greedy: true,
      inside: insideString
    }, {
      pattern: /(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\1)[^\\])*\1/,
      greedy: true,
      inside: insideString
    }],
    'variable': insideString.variable,
    // Originally based on http://ss64.com/bash/
    'function': {
      pattern: /(^|[\s;|&])(?:alias|apropos|apt-get|aptitude|aspell|awk|basename|bash|bc|bg|builtin|bzip2|cal|cat|cd|cfdisk|chgrp|chmod|chown|chroot|chkconfig|cksum|clear|cmp|comm|command|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|enable|env|ethtool|eval|exec|expand|expect|export|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|getopts|git|grep|groupadd|groupdel|groupmod|groups|gzip|hash|head|help|hg|history|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|jobs|join|kill|killall|less|link|ln|locate|logname|logout|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|make|man|mkdir|mkfifo|mkisofs|mknod|more|most|mount|mtools|mtr|mv|mmv|nano|netstat|nice|nl|nohup|notify-send|npm|nslookup|open|op|passwd|paste|pathchk|ping|pkill|popd|pr|printcap|printenv|printf|ps|pushd|pv|pwd|quota|quotacheck|quotactl|ram|rar|rcp|read|readarray|readonly|reboot|rename|renice|remsync|rev|rm|rmdir|rsync|screen|scp|sdiff|sed|seq|service|sftp|shift|shopt|shutdown|sleep|slocate|sort|source|split|ssh|stat|strace|su|sudo|sum|suspend|sync|tail|tar|tee|test|time|timeout|times|touch|top|traceroute|trap|tr|tsort|tty|type|ulimit|umask|umount|unalias|uname|unexpand|uniq|units|unrar|unshar|uptime|useradd|userdel|usermod|users|uuencode|uudecode|v|vdir|vi|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yes|zip)(?=$|[\s;|&])/,
      lookbehind: true
    },
    'keyword': {
      pattern: /(^|[\s;|&])(?:let|:|\.|if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)(?=$|[\s;|&])/,
      lookbehind: true
    },
    'boolean': {
      pattern: /(^|[\s;|&])(?:true|false)(?=$|[\s;|&])/,
      lookbehind: true
    },
    'operator': /&&?|\|\|?|==?|!=?|<<<?|>>|<=?|>=?|=~/,
    'punctuation': /\$?\(\(?|\)\)?|\.\.|[{}[\];]/
  };
  var inside = insideString.variable[1].inside;
  inside.string = Prism.languages.bash.string;
  inside['function'] = Prism.languages.bash['function'];
  inside.keyword = Prism.languages.bash.keyword;
  inside['boolean'] = Prism.languages.bash['boolean'];
  inside.operator = Prism.languages.bash.operator;
  inside.punctuation = Prism.languages.bash.punctuation;
  Prism.languages.shell = Prism.languages.bash;
})(_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a);
/* "prismjs/components/prism-clike" */


_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.clike = {
  'comment': [{
    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
    lookbehind: true
  }, {
    pattern: /(^|[^\\:])\/\/.*/,
    lookbehind: true,
    greedy: true
  }],
  'string': {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  'class-name': {
    pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
    lookbehind: true,
    inside: {
      punctuation: /[.\\]/
    }
  },
  'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  'boolean': /\b(?:true|false)\b/,
  'function': /[a-z0-9_]+(?=\()/i,
  'number': /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
  'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
  'punctuation': /[{}[\];(),.:]/
};
/* "prismjs/components/prism-c" */

_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.c = _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.extend('clike', {
  'keyword': /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
  'operator': /-[>-]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/]/,
  'number': /(?:\b0x[\da-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?)[ful]*/i
});
_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.insertBefore('c', 'string', {
  'macro': {
    // allow for multiline macro definitions
    // spaces after the # character compile fine with gcc
    pattern: /(^\s*)#\s*[a-z]+(?:[^\r\n\\]|\\(?:\r\n|[\s\S]))*/im,
    lookbehind: true,
    alias: 'property',
    inside: {
      // highlight the path of the include statement as a string
      'string': {
        pattern: /(#\s*include\s*)(?:<.+?>|("|')(?:\\?.)+?\2)/,
        lookbehind: true
      },
      // highlight macro directives as keywords
      'directive': {
        pattern: /(#\s*)\b(?:define|defined|elif|else|endif|error|ifdef|ifndef|if|import|include|line|pragma|undef|using)\b/,
        lookbehind: true,
        alias: 'keyword'
      }
    }
  },
  // highlight predefined macros as constants
  'constant': /\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/
});
delete _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.c['class-name'];
delete _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.c['boolean'];
/* "prismjs/components/prism-cpp" */

_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.cpp = _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.extend('c', {
  'keyword': /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|class|compl|const|constexpr|const_cast|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
  'boolean': /\b(?:true|false)\b/,
  'operator': /--?|\+\+?|!=?|<{1,2}=?|>{1,2}=?|->|:{1,2}|={1,2}|\^|~|%|&{1,2}|\|\|?|\?|\*|\/|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/
});
_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.insertBefore('cpp', 'keyword', {
  'class-name': {
    pattern: /(class\s+)\w+/i,
    lookbehind: true
  }
});
_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.insertBefore('cpp', 'string', {
  'raw-string': {
    pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
    alias: 'string',
    greedy: true
  }
});
/* "prismjs/components/prism-css" */

_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.css = {
  'comment': /\/\*[\s\S]*?\*\//,
  'atrule': {
    pattern: /@[\w-]+?.*?(?:;|(?=\s*\{))/i,
    inside: {
      'rule': /@[\w-]+/ // See rest below

    }
  },
  'url': /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
  'selector': /[^{}\s][^{};]*?(?=\s*\{)/,
  'string': {
    pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  'property': /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
  'important': /\B!important\b/i,
  'function': /[-a-z0-9]+(?=\()/i,
  'punctuation': /[(){};:]/
};
_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.css['atrule'].inside.rest = _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.css;

if (_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.markup) {
  _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.insertBefore('markup', 'tag', {
    'style': {
      pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
      lookbehind: true,
      inside: _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.css,
      alias: 'language-css',
      greedy: true
    }
  });
  _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.insertBefore('inside', 'attr-value', {
    'style-attr': {
      pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
      inside: {
        'attr-name': {
          pattern: /^\s*style/i,
          inside: _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.markup.tag.inside
        },
        'punctuation': /^\s*=\s*['"]|['"]\s*$/,
        'attr-value': {
          pattern: /.+/i,
          inside: _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.css
        }
      },
      alias: 'language-css'
    }
  }, _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.markup.tag);
}
/* "prismjs/components/prism-javascript" */


_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.javascript = _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.extend('clike', {
  'keyword': /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
  'number': /\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
  // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
  'function': /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,
  'operator': /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
});
_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.insertBefore('javascript', 'keyword', {
  'regex': {
    pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,
    lookbehind: true,
    greedy: true
  },
  // This must be declared before keyword because we use "function" inside the look-forward
  'function-variable': {
    pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,
    alias: 'function'
  },
  'constant': /\b[A-Z][A-Z\d_]*\b/
});
_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.insertBefore('javascript', 'string', {
  'template-string': {
    pattern: /`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,
    greedy: true,
    inside: {
      'interpolation': {
        pattern: /\${[^}]+}/,
        inside: {
          'interpolation-punctuation': {
            pattern: /^\${|}$/,
            alias: 'punctuation'
          },
          rest: null // See below

        }
      },
      'string': /[\s\S]+/
    }
  }
});
_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.javascript['template-string'].inside['interpolation'].inside.rest = _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.javascript;

if (_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.markup) {
  _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.insertBefore('markup', 'tag', {
    'script': {
      pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
      lookbehind: true,
      inside: _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.javascript,
      alias: 'language-javascript',
      greedy: true
    }
  });
}

_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.js = _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.javascript;
/* "prismjs/components/prism-jsx" */

(function (Prism) {
  var javascript = Prism.util.clone(Prism.languages.javascript);
  Prism.languages.jsx = Prism.languages.extend('markup', javascript);
  Prism.languages.jsx.tag.pattern = /<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?)?>/i;
  Prism.languages.jsx.tag.inside['tag'].pattern = /^<\/?[^\s>\/]*/i;
  Prism.languages.jsx.tag.inside['attr-value'].pattern = /=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i;
  Prism.languages.insertBefore('inside', 'attr-name', {
    'spread': {
      pattern: /\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}/,
      inside: {
        'punctuation': /\.{3}|[{}.]/,
        'attr-value': /\w+/
      }
    }
  }, Prism.languages.jsx.tag);
  Prism.languages.insertBefore('inside', 'attr-value', {
    'script': {
      // Allow for two levels of nesting
      pattern: /=(\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,
      inside: {
        'script-punctuation': {
          pattern: /^=(?={)/,
          alias: 'punctuation'
        },
        rest: Prism.languages.jsx
      },
      'alias': 'language-javascript'
    }
  }, Prism.languages.jsx.tag); // The following will handle plain text inside tags

  var stringifyToken = function stringifyToken(token) {
    if (!token) {
      return '';
    }

    if (typeof token === 'string') {
      return token;
    }

    if (typeof token.content === 'string') {
      return token.content;
    }

    return token.content.map(stringifyToken).join('');
  };

  var walkTokens = function walkTokens(tokens) {
    var openedTags = [];

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      var notTagNorBrace = false;

      if (typeof token !== 'string') {
        if (token.type === 'tag' && token.content[0] && token.content[0].type === 'tag') {
          // We found a tag, now find its kind
          if (token.content[0].content[0].content === '</') {
            // Closing tag
            if (openedTags.length > 0 && openedTags[openedTags.length - 1].tagName === stringifyToken(token.content[0].content[1])) {
              // Pop matching opening tag
              openedTags.pop();
            }
          } else {
            if (token.content[token.content.length - 1].content === '/>') {} else {
              // Opening tag
              openedTags.push({
                tagName: stringifyToken(token.content[0].content[1]),
                openedBraces: 0
              });
            }
          }
        } else if (openedTags.length > 0 && token.type === 'punctuation' && token.content === '{') {
          // Here we might have entered a JSX context inside a tag
          openedTags[openedTags.length - 1].openedBraces++;
        } else if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces > 0 && token.type === 'punctuation' && token.content === '}') {
          // Here we might have left a JSX context inside a tag
          openedTags[openedTags.length - 1].openedBraces--;
        } else {
          notTagNorBrace = true;
        }
      }

      if (notTagNorBrace || typeof token === 'string') {
        if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces === 0) {
          // Here we are inside a tag, and not inside a JSX context.
          // That's plain text: drop any tokens matched.
          var plainText = stringifyToken(token); // And merge text with adjacent text

          if (i < tokens.length - 1 && (typeof tokens[i + 1] === 'string' || tokens[i + 1].type === 'plain-text')) {
            plainText += stringifyToken(tokens[i + 1]);
            tokens.splice(i + 1, 1);
          }

          if (i > 0 && (typeof tokens[i - 1] === 'string' || tokens[i - 1].type === 'plain-text')) {
            plainText = stringifyToken(tokens[i - 1]) + plainText;
            tokens.splice(i - 1, 1);
            i--;
          }

          tokens[i] = new Prism.Token('plain-text', plainText, null, plainText);
        }
      }

      if (token.content && typeof token.content !== 'string') {
        walkTokens(token.content);
      }
    }
  };

  Prism.hooks.add('after-tokenize', function (env) {
    if (env.language !== 'jsx' && env.language !== 'tsx') {
      return;
    }

    walkTokens(env.tokens);
  });
})(_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a);
/* "prismjs/components/prism-coffeescript" */


(function (Prism) {
  // Ignore comments starting with { to privilege string interpolation highlighting
  var comment = /#(?!\{).+/,
      interpolation = {
    pattern: /#\{[^}]+\}/,
    alias: 'variable'
  };
  Prism.languages.coffeescript = Prism.languages.extend('javascript', {
    'comment': comment,
    'string': [// Strings are multiline
    {
      pattern: /'(?:\\[\s\S]|[^\\'])*'/,
      greedy: true
    }, {
      // Strings are multiline
      pattern: /"(?:\\[\s\S]|[^\\"])*"/,
      greedy: true,
      inside: {
        'interpolation': interpolation
      }
    }],
    'keyword': /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
    'class-member': {
      pattern: /@(?!\d)\w+/,
      alias: 'variable'
    }
  });
  Prism.languages.insertBefore('coffeescript', 'comment', {
    'multiline-comment': {
      pattern: /###[\s\S]+?###/,
      alias: 'comment'
    },
    // Block regexp can contain comments and interpolation
    'block-regex': {
      pattern: /\/{3}[\s\S]*?\/{3}/,
      alias: 'regex',
      inside: {
        'comment': comment,
        'interpolation': interpolation
      }
    }
  });
  Prism.languages.insertBefore('coffeescript', 'string', {
    'inline-javascript': {
      pattern: /`(?:\\[\s\S]|[^\\`])*`/,
      inside: {
        'delimiter': {
          pattern: /^`|`$/,
          alias: 'punctuation'
        },
        rest: Prism.languages.javascript
      }
    },
    // Block strings
    'multiline-string': [{
      pattern: /'''[\s\S]*?'''/,
      greedy: true,
      alias: 'string'
    }, {
      pattern: /"""[\s\S]*?"""/,
      greedy: true,
      alias: 'string',
      inside: {
        interpolation: interpolation
      }
    }]
  });
  Prism.languages.insertBefore('coffeescript', 'keyword', {
    // Object property
    'property': /(?!\d)\w+(?=\s*:(?!:))/
  });
  delete Prism.languages.coffeescript['template-string'];
})(_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a);
/* "prismjs/components/prism-actionscript" */


_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.actionscript = _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.extend('javascript', {
  'keyword': /\b(?:as|break|case|catch|class|const|default|delete|do|else|extends|finally|for|function|if|implements|import|in|instanceof|interface|internal|is|native|new|null|package|private|protected|public|return|super|switch|this|throw|try|typeof|use|var|void|while|with|dynamic|each|final|get|include|namespace|native|override|set|static)\b/,
  'operator': /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/
});
_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.actionscript['class-name'].alias = 'function';

if (_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.markup) {
  _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.insertBefore('actionscript', 'string', {
    'xml': {
      pattern: /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,
      lookbehind: true,
      inside: {
        rest: _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.markup
      }
    }
  });
}
/* "prismjs/components/prism-css-extras" */


_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.css.selector = {
  pattern: /[^{}\s][^{}]*(?=\s*\{)/,
  inside: {
    'pseudo-element': /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
    'pseudo-class': /:[-\w]+(?:\(.*\))?/,
    'class': /\.[-:.\w]+/,
    'id': /#[-:.\w]+/,
    'attribute': /\[[^\]]+\]/
  }
};
_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.insertBefore('css', 'function', {
  'hexcode': /#[\da-f]{3,8}/i,
  'entity': /\\[\da-f]{1,8}/i,
  'number': /[\d%.]+/
});
/* "prismjs/components/prism-diff" */

_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.diff = {
  'coord': [// Match all kinds of coord lines (prefixed by "+++", "---" or "***").
  /^(?:\*{3}|-{3}|\+{3}).*$/m, // Match "@@ ... @@" coord lines in unified diff.
  /^@@.*@@$/m, // Match coord lines in normal diff (starts with a number).
  /^\d+.*$/m],
  // Match inserted and deleted lines. Support both +/- and >/< styles.
  'deleted': /^[-<].*$/m,
  'inserted': /^[+>].*$/m,
  // Match "different" lines (prefixed with "!") in context diff.
  'diff': {
    'pattern': /^!(?!!).+$/m,
    'alias': 'important'
  }
};
/* "prismjs/components/prism-docker" */

_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.docker = {
  'keyword': {
    pattern: /(^\s*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)/mi,
    lookbehind: true
  },
  'string': /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
  'comment': /#.*/,
  'punctuation': /---|\.\.\.|[:[\]{}\-,|>?]/
};
_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.dockerfile = _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.docker;
/* "prismjs/components/prism-elixir" */

_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.elixir = {
  'comment': {
    pattern: /#.*/m,
    lookbehind: true
  },
  // ~r"""foo""" (multi-line), ~r'''foo''' (multi-line), ~r/foo/, ~r|foo|, ~r"foo", ~r'foo', ~r(foo), ~r[foo], ~r{foo}, ~r<foo>
  'regex': {
    pattern: /~[rR](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([\/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|[^\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[uismxfr]*/,
    greedy: true
  },
  'string': [{
    // ~s"""foo""" (multi-line), ~s'''foo''' (multi-line), ~s/foo/, ~s|foo|, ~s"foo", ~s'foo', ~s(foo), ~s[foo], ~s{foo} (with interpolation care), ~s<foo>
    pattern: /~[cCsSwW](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([\/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|#\{[^}]+\}|[^\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[csa]?/,
    greedy: true,
    inside: {}
  }, {
    pattern: /("""|''')[\s\S]*?\1/,
    greedy: true,
    inside: {}
  }, {
    // Multi-line strings are allowed
    pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true,
    inside: {}
  }],
  'atom': {
    // Look-behind prevents bad highlighting of the :: operator
    pattern: /(^|[^:]):\w+/,
    lookbehind: true,
    alias: 'symbol'
  },
  // Look-ahead prevents bad highlighting of the :: operator
  'attr-name': /\w+:(?!:)/,
  'capture': {
    // Look-behind prevents bad highlighting of the && operator
    pattern: /(^|[^&])&(?:[^&\s\d()][^\s()]*|(?=\())/,
    lookbehind: true,
    alias: 'function'
  },
  'argument': {
    // Look-behind prevents bad highlighting of the && operator
    pattern: /(^|[^&])&\d+/,
    lookbehind: true,
    alias: 'variable'
  },
  'attribute': {
    pattern: /@\w+/,
    alias: 'variable'
  },
  'number': /\b(?:0[box][a-f\d_]+|\d[\d_]*)(?:\.[\d_]+)?(?:e[+-]?[\d_]+)?\b/i,
  'keyword': /\b(?:after|alias|and|case|catch|cond|def(?:callback|exception|impl|module|p|protocol|struct)?|do|else|end|fn|for|if|import|not|or|require|rescue|try|unless|use|when)\b/,
  'boolean': /\b(?:true|false|nil)\b/,
  'operator': [/\bin\b|&&?|\|[|>]?|\\\\|::|\.\.\.?|\+\+?|-[->]?|<[-=>]|>=|!==?|\B!|=(?:==?|[>~])?|[*\/^]/, {
    // We don't want to match <<
    pattern: /([^<])<(?!<)/,
    lookbehind: true
  }, {
    // We don't want to match >>
    pattern: /([^>])>(?!>)/,
    lookbehind: true
  }],
  'punctuation': /<<|>>|[.,%\[\]{}()]/
};
_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.elixir.string.forEach(function (o) {
  o.inside = {
    'interpolation': {
      pattern: /#\{[^}]+\}/,
      inside: {
        'delimiter': {
          pattern: /^#\{|\}$/,
          alias: 'punctuation'
        },
        rest: _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.elixir
      }
    }
  };
});
/* "prismjs/components/prism-erlang" */

_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.erlang = {
  'comment': /%.+/,
  'string': {
    pattern: /"(?:\\.|[^\\"\r\n])*"/,
    greedy: true
  },
  'quoted-function': {
    pattern: /'(?:\\.|[^\\'\r\n])+'(?=\()/,
    alias: 'function'
  },
  'quoted-atom': {
    pattern: /'(?:\\.|[^\\'\r\n])+'/,
    alias: 'atom'
  },
  'boolean': /\b(?:true|false)\b/,
  'keyword': /\b(?:fun|when|case|of|end|if|receive|after|try|catch)\b/,
  'number': [/\$\\?./, /\d+#[a-z0-9]+/i, /(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i],
  'function': /\b[a-z][\w@]*(?=\()/,
  'variable': {
    // Look-behind is used to prevent wrong highlighting of atoms containing "@"
    pattern: /(^|[^@])(?:\b|\?)[A-Z_][\w@]*/,
    lookbehind: true
  },
  'operator': [/[=\/<>:]=|=[:\/]=|\+\+?|--?|[=*\/!]|\b(?:bnot|div|rem|band|bor|bxor|bsl|bsr|not|and|or|xor|orelse|andalso)\b/, {
    // We don't want to match <<
    pattern: /(^|[^<])<(?!<)/,
    lookbehind: true
  }, {
    // We don't want to match >>
    pattern: /(^|[^>])>(?!>)/,
    lookbehind: true
  }],
  'atom': /\b[a-z][\w@]*/,
  'punctuation': /[()[\]{}:;,.#|]|<<|>>/
};
/* "prismjs/components/prism-git" */

_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.git = {
  /*
   * A simple one line comment like in a git status command
   * For instance:
   * $ git status
   * # On branch infinite-scroll
   * # Your branch and 'origin/sharedBranches/frontendTeam/infinite-scroll' have diverged,
   * # and have 1 and 2 different commits each, respectively.
   * nothing to commit (working directory clean)
   */
  'comment': /^#.*/m,

  /*
   * Regexp to match the changed lines in a git diff output. Check the example below.
   */
  'deleted': /^[-–].*/m,
  'inserted': /^\+.*/m,

  /*
   * a string (double and simple quote)
   */
  'string': /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,

  /*
   * a git command. It starts with a random prompt finishing by a $, then "git" then some other parameters
   * For instance:
   * $ git add file.txt
   */
  'command': {
    pattern: /^.*\$ git .*$/m,
    inside: {
      /*
       * A git command can contain a parameter starting by a single or a double dash followed by a string
       * For instance:
       * $ git diff --cached
       * $ git log -p
       */
      'parameter': /\s--?\w+/m
    }
  },

  /*
   * Coordinates displayed in a git diff command
   * For instance:
   * $ git diff
   * diff --git file.txt file.txt
   * index 6214953..1d54a52 100644
   * --- file.txt
   * +++ file.txt
   * @@ -1 +1,2 @@
   * -Here's my tetx file
   * +Here's my text file
   * +And this is the second line
   */
  'coord': /^@@.*@@$/m,

  /*
   * Match a "commit [SHA1]" line in a git log output.
   * For instance:
   * $ git log
   * commit a11a14ef7e26f2ca62d4b35eac455ce636d0dc09
   * Author: lgiraudel
   * Date:   Mon Feb 17 11:18:34 2014 +0100
   *
   *     Add of a new line
   */
  'commit_sha1': /^commit \w{40}$/m
};
/* "prismjs/components/prism-go" */

_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.go = _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.extend('clike', {
  'keyword': /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
  'builtin': /\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/,
  'boolean': /\b(?:_|iota|nil|true|false)\b/,
  'operator': /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
  'number': /(?:\b0x[a-f\d]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
  'string': {
    pattern: /(["'`])(\\[\s\S]|(?!\1)[^\\])*\1/,
    greedy: true
  }
});
delete _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.go['class-name'];
/* "prismjs/components/prism-graphql" */

_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.graphql = {
  'comment': /#.*/,
  'string': {
    pattern: /"(?:\\.|[^\\"\r\n])*"/,
    greedy: true
  },
  'number': /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  'boolean': /\b(?:true|false)\b/,
  'variable': /\$[a-z_]\w*/i,
  'directive': {
    pattern: /@[a-z_]\w*/i,
    alias: 'function'
  },
  'attr-name': /[a-z_]\w*(?=\s*:)/i,
  'keyword': [{
    pattern: /(fragment\s+(?!on)[a-z_]\w*\s+|\.{3}\s*)on\b/,
    lookbehind: true
  }, /\b(?:query|fragment|mutation)\b/],
  'operator': /!|=|\.{3}/,
  'punctuation': /[!(){}\[\]:=,]/
};
/* "prismjs/components/prism-markup-templating" */

_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages['markup-templating'] = {};
Object.defineProperties(_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages['markup-templating'], {
  buildPlaceholders: {
    // Tokenize all inline templating expressions matching placeholderPattern
    // If the replaceFilter function is provided, it will be called with every match.
    // If it returns false, the match will not be replaced.
    value: function value(env, language, placeholderPattern, replaceFilter) {
      if (env.language !== language) {
        return;
      }

      env.tokenStack = [];
      env.code = env.code.replace(placeholderPattern, function (match) {
        if (typeof replaceFilter === 'function' && !replaceFilter(match)) {
          return match;
        }

        var i = env.tokenStack.length; // Check for existing strings

        while (env.code.indexOf('___' + language.toUpperCase() + i + '___') !== -1) {
          ++i;
        } // Create a sparse array


        env.tokenStack[i] = match;
        return '___' + language.toUpperCase() + i + '___';
      }); // Switch the grammar to markup

      env.grammar = _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.markup;
    }
  },
  tokenizePlaceholders: {
    // Replace placeholders with proper tokens after tokenizing
    value: function value(env, language) {
      if (env.language !== language || !env.tokenStack) {
        return;
      } // Switch the grammar back


      env.grammar = _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages[language];
      var j = 0;
      var keys = Object.keys(env.tokenStack);

      var walkTokens = function walkTokens(tokens) {
        if (j >= keys.length) {
          return;
        }

        for (var i = 0; i < tokens.length; i++) {
          var token = tokens[i];

          if (typeof token === 'string' || token.content && typeof token.content === 'string') {
            var k = keys[j];
            var t = env.tokenStack[k];
            var s = typeof token === 'string' ? token : token.content;
            var index = s.indexOf('___' + language.toUpperCase() + k + '___');

            if (index > -1) {
              ++j;
              var before = s.substring(0, index);
              var middle = new _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.Token(language, _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.tokenize(t, env.grammar, language), 'language-' + language, t);
              var after = s.substring(index + ('___' + language.toUpperCase() + k + '___').length);
              var replacement;

              if (before || after) {
                replacement = [before, middle, after].filter(function (v) {
                  return !!v;
                });
                walkTokens(replacement);
              } else {
                replacement = middle;
              }

              if (typeof token === 'string') {
                Array.prototype.splice.apply(tokens, [i, 1].concat(replacement));
              } else {
                token.content = replacement;
              }

              if (j >= keys.length) {
                break;
              }
            }
          } else if (token.content && typeof token.content !== 'string') {
            walkTokens(token.content);
          }
        }
      };

      walkTokens(env.tokens);
    }
  }
});
/* "prismjs/components/prism-handlebars" */

(function (Prism) {
  Prism.languages.handlebars = {
    'comment': /\{\{![\s\S]*?\}\}/,
    'delimiter': {
      pattern: /^\{\{\{?|\}\}\}?$/i,
      alias: 'punctuation'
    },
    'string': /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
    'number': /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
    'boolean': /\b(?:true|false)\b/,
    'block': {
      pattern: /^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i,
      lookbehind: true,
      alias: 'keyword'
    },
    'brackets': {
      pattern: /\[[^\]]+\]/,
      inside: {
        punctuation: /\[|\]/,
        variable: /[\s\S]+/
      }
    },
    'punctuation': /[!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]/,
    'variable': /[^!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~\s]+/
  };
  Prism.hooks.add('before-tokenize', function (env) {
    var handlebarsPattern = /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g;
    Prism.languages['markup-templating'].buildPlaceholders(env, 'handlebars', handlebarsPattern);
  });
  Prism.hooks.add('after-tokenize', function (env) {
    Prism.languages['markup-templating'].tokenizePlaceholders(env, 'handlebars');
  });
})(_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a);
/* "prismjs/components/prism-haskell" */


_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.haskell = {
  'comment': {
    pattern: /(^|[^-!#$%*+=?&@|~.:<>^\\\/])(?:--[^-!#$%*+=?&@|~.:<>^\\\/].*|{-[\s\S]*?-})/m,
    lookbehind: true
  },
  'char': /'(?:[^\\']|\\(?:[abfnrtv\\"'&]|\^[A-Z@[\]^_]|NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|\d+|o[0-7]+|x[0-9a-fA-F]+))'/,
  'string': {
    pattern: /"(?:[^\\"]|\\(?:[abfnrtv\\"'&]|\^[A-Z@[\]^_]|NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|\d+|o[0-7]+|x[0-9a-fA-F]+)|\\\s+\\)*"/,
    greedy: true
  },
  'keyword': /\b(?:case|class|data|deriving|do|else|if|in|infixl|infixr|instance|let|module|newtype|of|primitive|then|type|where)\b/,
  'import_statement': {
    // The imported or hidden names are not included in this import
    // statement. This is because we want to highlight those exactly like
    // we do for the names in the program.
    pattern: /((?:\r?\n|\r|^)\s*)import\s+(?:qualified\s+)?(?:[A-Z][\w']*)(?:\.[A-Z][\w']*)*(?:\s+as\s+(?:[A-Z][_a-zA-Z0-9']*)(?:\.[A-Z][\w']*)*)?(?:\s+hiding\b)?/m,
    lookbehind: true,
    inside: {
      'keyword': /\b(?:import|qualified|as|hiding)\b/
    }
  },
  // These are builtin variables only. Constructors are highlighted later as a constant.
  'builtin': /\b(?:abs|acos|acosh|all|and|any|appendFile|approxRational|asTypeOf|asin|asinh|atan|atan2|atanh|basicIORun|break|catch|ceiling|chr|compare|concat|concatMap|const|cos|cosh|curry|cycle|decodeFloat|denominator|digitToInt|div|divMod|drop|dropWhile|either|elem|encodeFloat|enumFrom|enumFromThen|enumFromThenTo|enumFromTo|error|even|exp|exponent|fail|filter|flip|floatDigits|floatRadix|floatRange|floor|fmap|foldl|foldl1|foldr|foldr1|fromDouble|fromEnum|fromInt|fromInteger|fromIntegral|fromRational|fst|gcd|getChar|getContents|getLine|group|head|id|inRange|index|init|intToDigit|interact|ioError|isAlpha|isAlphaNum|isAscii|isControl|isDenormalized|isDigit|isHexDigit|isIEEE|isInfinite|isLower|isNaN|isNegativeZero|isOctDigit|isPrint|isSpace|isUpper|iterate|last|lcm|length|lex|lexDigits|lexLitChar|lines|log|logBase|lookup|map|mapM|mapM_|max|maxBound|maximum|maybe|min|minBound|minimum|mod|negate|not|notElem|null|numerator|odd|or|ord|otherwise|pack|pi|pred|primExitWith|print|product|properFraction|putChar|putStr|putStrLn|quot|quotRem|range|rangeSize|read|readDec|readFile|readFloat|readHex|readIO|readInt|readList|readLitChar|readLn|readOct|readParen|readSigned|reads|readsPrec|realToFrac|recip|rem|repeat|replicate|return|reverse|round|scaleFloat|scanl|scanl1|scanr|scanr1|seq|sequence|sequence_|show|showChar|showInt|showList|showLitChar|showParen|showSigned|showString|shows|showsPrec|significand|signum|sin|sinh|snd|sort|span|splitAt|sqrt|subtract|succ|sum|tail|take|takeWhile|tan|tanh|threadToIOResult|toEnum|toInt|toInteger|toLower|toRational|toUpper|truncate|uncurry|undefined|unlines|until|unwords|unzip|unzip3|userError|words|writeFile|zip|zip3|zipWith|zipWith3)\b/,
  // decimal integers and floating point numbers | octal integers | hexadecimal integers
  'number': /\b(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|0o[0-7]+|0x[0-9a-f]+)\b/i,
  // Most of this is needed because of the meaning of a single '.'.
  // If it stands alone freely, it is the function composition.
  // It may also be a separator between a module name and an identifier => no
  // operator. If it comes together with other special characters it is an
  // operator too.
  'operator': /\s\.\s|[-!#$%*+=?&@|~.:<>^\\\/]*\.[-!#$%*+=?&@|~.:<>^\\\/]+|[-!#$%*+=?&@|~.:<>^\\\/]+\.[-!#$%*+=?&@|~.:<>^\\\/]*|[-!#$%*+=?&@|~:<>^\\\/]+|`([A-Z][\w']*\.)*[_a-z][\w']*`/,
  // In Haskell, nearly everything is a variable, do not highlight these.
  'hvariable': /\b(?:[A-Z][\w']*\.)*[_a-z][\w']*\b/,
  'constant': /\b(?:[A-Z][\w']*\.)*[A-Z][\w']*\b/,
  'punctuation': /[{}[\];(),.:]/
};
/* "prismjs/components/prism-java" */

_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.java = _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.extend('clike', {
  'keyword': /\b(?:abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/,
  'number': /\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp-]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?[df]?/i,
  'operator': {
    pattern: /(^|[^.])(?:\+[+=]?|-[-=]?|!=?|<<?=?|>>?>?=?|==?|&[&=]?|\|[|=]?|\*=?|\/=?|%=?|\^=?|[?:~])/m,
    lookbehind: true
  }
});
_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.insertBefore('java', 'function', {
  'annotation': {
    alias: 'punctuation',
    pattern: /(^|[^.])@\w+/,
    lookbehind: true
  }
});
_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.insertBefore('java', 'class-name', {
  'generics': {
    pattern: /<\s*\w+(?:\.\w+)?(?:\s*,\s*\w+(?:\.\w+)?)*>/i,
    alias: 'function',
    inside: {
      keyword: _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.java.keyword,
      punctuation: /[<>(),.:]/
    }
  }
});
/* "prismjs/components/prism-json" */

_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.json = {
  'property': /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/i,
  'string': {
    pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
    greedy: true
  },
  'number': /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
  'punctuation': /[{}[\]);,]/,
  'operator': /:/g,
  'boolean': /\b(?:true|false)\b/i,
  'null': /\bnull\b/i
};
_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.jsonp = _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.json;
/* "prismjs/components/prism-latex" */

(function (Prism) {
  var funcPattern = /\\(?:[^a-z()[\]]|[a-z*]+)/i,
      insideEqu = {
    'equation-command': {
      pattern: funcPattern,
      alias: 'regex'
    }
  };
  Prism.languages.latex = {
    'comment': /%.*/m,
    // the verbatim environment prints whitespace to the document
    'cdata': {
      pattern: /(\\begin\{((?:verbatim|lstlisting)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
      lookbehind: true
    },

    /*
     * equations can be between $ $ or \( \) or \[ \]
     * (all are multiline)
     */
    'equation': [{
      pattern: /\$(?:\\[\s\S]|[^\\$])*\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,
      inside: insideEqu,
      alias: 'string'
    }, {
      pattern: /(\\begin\{((?:equation|math|eqnarray|align|multline|gather)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
      lookbehind: true,
      inside: insideEqu,
      alias: 'string'
    }],

    /*
     * arguments which are keywords or references are highlighted
     * as keywords
     */
    'keyword': {
      pattern: /(\\(?:begin|end|ref|cite|label|usepackage|documentclass)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
      lookbehind: true
    },
    'url': {
      pattern: /(\\url\{)[^}]+(?=\})/,
      lookbehind: true
    },

    /*
     * section or chapter headlines are highlighted as bold so that
     * they stand out more
     */
    'headline': {
      pattern: /(\\(?:part|chapter|section|subsection|frametitle|subsubsection|paragraph|subparagraph|subsubparagraph|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\}(?:\[[^\]]+\])?)/,
      lookbehind: true,
      alias: 'class-name'
    },
    'function': {
      pattern: funcPattern,
      alias: 'selector'
    },
    'punctuation': /[[\]{}&]/
  };
})(_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a);
/* "prismjs/components/prism-less" */

/* FIXME :
 :extend() is not handled specifically : its highlighting is buggy.
 Mixin usage must be inside a ruleset to be highlighted.
 At-rules (e.g. import) containing interpolations are buggy.
 Detached rulesets are highlighted as at-rules.
 A comment before a mixin usage prevents the latter to be properly highlighted.
 */


_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.less = _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.extend('css', {
  'comment': [/\/\*[\s\S]*?\*\//, {
    pattern: /(^|[^\\])\/\/.*/,
    lookbehind: true
  }],
  'atrule': {
    pattern: /@[\w-]+?(?:\([^{}]+\)|[^(){};])*?(?=\s*\{)/i,
    inside: {
      'punctuation': /[:()]/
    }
  },
  // selectors and mixins are considered the same
  'selector': {
    pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\([^{}]*\)|[^{};@])*?(?=\s*\{)/,
    inside: {
      // mixin parameters
      'variable': /@+[\w-]+/
    }
  },
  'property': /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,
  'punctuation': /[{}();:,]/,
  'operator': /[+\-*\/]/
}); // Invert function and punctuation positions

_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.insertBefore('less', 'punctuation', {
  'function': _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.less.function
});
_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.insertBefore('less', 'property', {
  'variable': [// Variable declaration (the colon must be consumed!)
  {
    pattern: /@[\w-]+\s*:/,
    inside: {
      "punctuation": /:/
    }
  }, // Variable usage
  /@@?[\w-]+/],
  'mixin-usage': {
    pattern: /([{;]\s*)[.#](?!\d)[\w-]+.*?(?=[(;])/,
    lookbehind: true,
    alias: 'function'
  }
});
/* "prismjs/components/prism-makefile" */

_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.makefile = {
  'comment': {
    pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
    lookbehind: true
  },
  'string': {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  // Built-in target names
  'builtin': /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
  // Targets
  'symbol': {
    pattern: /^[^:=\r\n]+(?=\s*:(?!=))/m,
    inside: {
      'variable': /\$+(?:[^(){}:#=\s]+|(?=[({]))/
    }
  },
  'variable': /\$+(?:[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
  'keyword': [// Directives
  /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/, // Functions
  {
    pattern: /(\()(?:addsuffix|abspath|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:s|list)?)(?=[ \t])/,
    lookbehind: true
  }],
  'operator': /(?:::|[?:+!])?=|[|@]/,
  'punctuation': /[:;(){}]/
};
/* "prismjs/components/prism-markdown" */

_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.markdown = _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.extend('markup', {});
_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.insertBefore('markdown', 'prolog', {
  'blockquote': {
    // > ...
    pattern: /^>(?:[\t ]*>)*/m,
    alias: 'punctuation'
  },
  'code': [{
    // Prefixed by 4 spaces or 1 tab
    pattern: /^(?: {4}|\t).+/m,
    alias: 'keyword'
  }, {
    // `code`
    // ``code``
    pattern: /``.+?``|`[^`\n]+`/,
    alias: 'keyword'
  }],
  'title': [{
    // title 1
    // =======
    // title 2
    // -------
    pattern: /\w+.*(?:\r?\n|\r)(?:==+|--+)/,
    alias: 'important',
    inside: {
      punctuation: /==+$|--+$/
    }
  }, {
    // # title 1
    // ###### title 6
    pattern: /(^\s*)#+.+/m,
    lookbehind: true,
    alias: 'important',
    inside: {
      punctuation: /^#+|#+$/
    }
  }],
  'hr': {
    // ***
    // ---
    // * * *
    // -----------
    pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
    lookbehind: true,
    alias: 'punctuation'
  },
  'list': {
    // * item
    // + item
    // - item
    // 1. item
    pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
    lookbehind: true,
    alias: 'punctuation'
  },
  'url-reference': {
    // [id]: http://example.com "Optional title"
    // [id]: http://example.com 'Optional title'
    // [id]: http://example.com (Optional title)
    // [id]: <http://example.com> "Optional title"
    pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
    inside: {
      'variable': {
        pattern: /^(!?\[)[^\]]+/,
        lookbehind: true
      },
      'string': /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
      'punctuation': /^[\[\]!:]|[<>]/
    },
    alias: 'url'
  },
  'bold': {
    // **strong**
    // __strong__
    // Allow only one line break
    pattern: /(^|[^\\])(\*\*|__)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
    lookbehind: true,
    inside: {
      'punctuation': /^\*\*|^__|\*\*$|__$/
    }
  },
  'italic': {
    // *em*
    // _em_
    // Allow only one line break
    pattern: /(^|[^\\])([*_])(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
    lookbehind: true,
    inside: {
      'punctuation': /^[*_]|[*_]$/
    }
  },
  'url': {
    // [example](http://example.com "Optional title")
    // [example] [id]
    pattern: /!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[[^\]\n]*\])/,
    inside: {
      'variable': {
        pattern: /(!?\[)[^\]]+(?=\]$)/,
        lookbehind: true
      },
      'string': {
        pattern: /"(?:\\.|[^"\\])*"(?=\)$)/
      }
    }
  }
});
_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.markdown['bold'].inside['url'] = _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.markdown['url'];
_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.markdown['italic'].inside['url'] = _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.markdown['url'];
_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.markdown['bold'].inside['italic'] = _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.markdown['italic'];
_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.markdown['italic'].inside['bold'] = _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.markdown['bold'];
/* "prismjs/components/prism-objectivec" */

_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.objectivec = _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.extend('c', {
  'keyword': /\b(?:asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
  'string': /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|@"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
  'operator': /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
});
/* "prismjs/components/prism-ocaml" */

_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.ocaml = {
  'comment': /\(\*[\s\S]*?\*\)/,
  'string': [{
    pattern: /"(?:\\.|[^\\\r\n"])*"/,
    greedy: true
  }, {
    pattern: /(['`])(?:\\(?:\d+|x[\da-f]+|.)|(?!\1)[^\\\r\n])\1/i,
    greedy: true
  }],
  'number': /\b(?:0x[\da-f][\da-f_]+|(?:0[bo])?\d[\d_]*\.?[\d_]*(?:e[+-]?[\d_]+)?)/i,
  'type': {
    pattern: /\B['`]\w*/,
    alias: 'variable'
  },
  'directive': {
    pattern: /\B#\w+/,
    alias: 'function'
  },
  'keyword': /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|object|of|open|prefix|private|rec|then|sig|struct|to|try|type|val|value|virtual|where|while|with)\b/,
  'boolean': /\b(?:false|true)\b/,
  // Custom operators are allowed
  'operator': /:=|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lxor|lsl|lsr|mod|nor|or)\b/,
  'punctuation': /[(){}\[\]|_.,:;]/
};
/* "prismjs/components/prism-php" */

/**
 * Original by Aaron Harun: http://aahacreative.com/2012/07/31/php-syntax-highlighting-prism/
 * Modified by Miles Johnson: http://milesj.me
 *
 * Supports the following:
 * 		- Extends clike syntax
 * 		- Support for PHP 5.3+ (namespaces, traits, generators, etc)
 * 		- Smarter constant and function matching
 *
 * Adds the following new token classes:
 * 		constant, delimiter, variable, function, package
 */

(function (Prism) {
  Prism.languages.php = Prism.languages.extend('clike', {
    'keyword': /\b(?:and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,
    'constant': /\b[A-Z0-9_]{2,}\b/,
    'comment': {
      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
      lookbehind: true
    }
  });
  Prism.languages.insertBefore('php', 'string', {
    'shell-comment': {
      pattern: /(^|[^\\])#.*/,
      lookbehind: true,
      alias: 'comment'
    }
  });
  Prism.languages.insertBefore('php', 'keyword', {
    'delimiter': {
      pattern: /\?>|<\?(?:php|=)?/i,
      alias: 'important'
    },
    'variable': /\$+(?:\w+\b|(?={))/i,
    'package': {
      pattern: /(\\|namespace\s+|use\s+)[\w\\]+/,
      lookbehind: true,
      inside: {
        punctuation: /\\/
      }
    }
  }); // Must be defined after the function pattern

  Prism.languages.insertBefore('php', 'operator', {
    'property': {
      pattern: /(->)[\w]+/,
      lookbehind: true
    }
  });
  Prism.languages.insertBefore('php', 'string', {
    'nowdoc-string': {
      pattern: /<<<'([^']+)'(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;/,
      greedy: true,
      alias: 'string',
      inside: {
        'delimiter': {
          pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
          alias: 'symbol',
          inside: {
            'punctuation': /^<<<'?|[';]$/
          }
        }
      }
    },
    'heredoc-string': {
      pattern: /<<<(?:"([^"]+)"(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;|([a-z_]\w*)(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\2;)/i,
      greedy: true,
      alias: 'string',
      inside: {
        'delimiter': {
          pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
          alias: 'symbol',
          inside: {
            'punctuation': /^<<<"?|[";]$/
          }
        },
        'interpolation': null // See below

      }
    },
    'single-quoted-string': {
      pattern: /'(?:\\[\s\S]|[^\\'])*'/,
      greedy: true,
      alias: 'string'
    },
    'double-quoted-string': {
      pattern: /"(?:\\[\s\S]|[^\\"])*"/,
      greedy: true,
      alias: 'string',
      inside: {
        'interpolation': null // See below

      }
    }
  }); // The different types of PHP strings "replace" the C-like standard string

  delete Prism.languages.php['string'];
  var string_interpolation = {
    pattern: /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[.+?]|->\w+)*)/,
    lookbehind: true,
    inside: {
      rest: Prism.languages.php
    }
  };
  Prism.languages.php['heredoc-string'].inside['interpolation'] = string_interpolation;
  Prism.languages.php['double-quoted-string'].inside['interpolation'] = string_interpolation;
  Prism.hooks.add('before-tokenize', function (env) {
    if (!/(?:<\?php|<\?)/ig.test(env.code)) {
      return;
    }

    var phpPattern = /(?:<\?php|<\?)[\s\S]*?(?:\?>|$)/ig;
    Prism.languages['markup-templating'].buildPlaceholders(env, 'php', phpPattern);
  });
  Prism.hooks.add('after-tokenize', function (env) {
    Prism.languages['markup-templating'].tokenizePlaceholders(env, 'php');
  });
})(_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a);
/* "prismjs/components/prism-php-extras" */


_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.insertBefore('php', 'variable', {
  'this': /\$this\b/,
  'global': /\$(?:_(?:SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE)|GLOBALS|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)\b/,
  'scope': {
    pattern: /\b[\w\\]+::/,
    inside: {
      keyword: /static|self|parent/,
      punctuation: /::|\\/
    }
  }
});
/* "prismjs/components/prism-python" */

_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.python = {
  'comment': {
    pattern: /(^|[^\\])#.*/,
    lookbehind: true
  },
  'triple-quoted-string': {
    pattern: /("""|''')[\s\S]+?\1/,
    greedy: true,
    alias: 'string'
  },
  'string': {
    pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  'function': {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: true
  },
  'class-name': {
    pattern: /(\bclass\s+)\w+/i,
    lookbehind: true
  },
  'keyword': /\b(?:as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|pass|print|raise|return|try|while|with|yield)\b/,
  'builtin': /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  'boolean': /\b(?:True|False|None)\b/,
  'number': /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,
  'operator': /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not)\b/,
  'punctuation': /[{}[\];(),.:]/
};
/* "prismjs/components/prism-reason" */

_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.reason = _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.extend('clike', {
  'comment': {
    pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
    lookbehind: true
  },
  'string': {
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
    greedy: true
  },
  // 'class-name' must be matched *after* 'constructor' defined below
  'class-name': /\b[A-Z]\w*/,
  'keyword': /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
  'operator': /\.{3}|:[:=]|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:mod|land|lor|lxor|lsl|lsr|asr)\b/
});
_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.insertBefore('reason', 'class-name', {
  'character': {
    pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
    alias: 'string'
  },
  'constructor': {
    // Negative look-ahead prevents from matching things like String.capitalize
    pattern: /\b[A-Z]\w*\b(?!\s*\.)/,
    alias: 'variable'
  },
  'label': {
    pattern: /\b[a-z]\w*(?=::)/,
    alias: 'symbol'
  }
}); // We can't match functions property, so let's not even try.

delete _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.reason.function;
/* "prismjs/components/prism-ruby" */

/**
 * Original by Samuel Flores
 *
 * Adds the following new token classes:
 * 		constant, builtin, variable, symbol, regex
 */

(function (Prism) {
  Prism.languages.ruby = Prism.languages.extend('clike', {
    'comment': [/#.*/, {
      pattern: /^=begin(?:\r?\n|\r)(?:.*(?:\r?\n|\r))*?=end/m,
      greedy: true
    }],
    'keyword': /\b(?:alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|false|for|if|in|module|new|next|nil|not|or|protected|private|public|raise|redo|require|rescue|retry|return|self|super|then|throw|true|undef|unless|until|when|while|yield)\b/
  });
  var interpolation = {
    pattern: /#\{[^}]+\}/,
    inside: {
      'delimiter': {
        pattern: /^#\{|\}$/,
        alias: 'tag'
      },
      rest: Prism.languages.ruby
    }
  };
  Prism.languages.insertBefore('ruby', 'keyword', {
    'regex': [{
      pattern: /%r([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1[gim]{0,3}/,
      greedy: true,
      inside: {
        'interpolation': interpolation
      }
    }, {
      pattern: /%r\((?:[^()\\]|\\[\s\S])*\)[gim]{0,3}/,
      greedy: true,
      inside: {
        'interpolation': interpolation
      }
    }, {
      // Here we need to specifically allow interpolation
      pattern: /%r\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}[gim]{0,3}/,
      greedy: true,
      inside: {
        'interpolation': interpolation
      }
    }, {
      pattern: /%r\[(?:[^\[\]\\]|\\[\s\S])*\][gim]{0,3}/,
      greedy: true,
      inside: {
        'interpolation': interpolation
      }
    }, {
      pattern: /%r<(?:[^<>\\]|\\[\s\S])*>[gim]{0,3}/,
      greedy: true,
      inside: {
        'interpolation': interpolation
      }
    }, {
      pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,
      lookbehind: true,
      greedy: true
    }],
    'variable': /[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,
    'symbol': {
      pattern: /(^|[^:]):[a-zA-Z_]\w*(?:[?!]|\b)/,
      lookbehind: true
    }
  });
  Prism.languages.insertBefore('ruby', 'number', {
    'builtin': /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|Fixnum|Float|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,
    'constant': /\b[A-Z]\w*(?:[?!]|\b)/
  });
  Prism.languages.ruby.string = [{
    pattern: /%[qQiIwWxs]?([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/,
    greedy: true,
    inside: {
      'interpolation': interpolation
    }
  }, {
    pattern: /%[qQiIwWxs]?\((?:[^()\\]|\\[\s\S])*\)/,
    greedy: true,
    inside: {
      'interpolation': interpolation
    }
  }, {
    // Here we need to specifically allow interpolation
    pattern: /%[qQiIwWxs]?\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}/,
    greedy: true,
    inside: {
      'interpolation': interpolation
    }
  }, {
    pattern: /%[qQiIwWxs]?\[(?:[^\[\]\\]|\\[\s\S])*\]/,
    greedy: true,
    inside: {
      'interpolation': interpolation
    }
  }, {
    pattern: /%[qQiIwWxs]?<(?:[^<>\\]|\\[\s\S])*>/,
    greedy: true,
    inside: {
      'interpolation': interpolation
    }
  }, {
    pattern: /("|')(?:#\{[^}]+\}|\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true,
    inside: {
      'interpolation': interpolation
    }
  }];
})(_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a);
/* "prismjs/components/prism-rust" */

/* TODO
	Add support for Markdown notation inside doc comments
	Add support for nested block comments...
	Match closure params even when not followed by dash or brace
	Add better support for macro definition
*/


_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.rust = {
  'comment': [{
    pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
    lookbehind: true
  }, {
    pattern: /(^|[^\\:])\/\/.*/,
    lookbehind: true
  }],
  'string': [{
    pattern: /b?r(#*)"(?:\\.|(?!"\1)[^\\\r\n])*"\1/,
    greedy: true
  }, {
    pattern: /b?"(?:\\.|[^\\\r\n"])*"/,
    greedy: true
  }],
  'char': {
    pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u{(?:[\da-fA-F]_*){1,6}|.)|[^\\\r\n\t'])'/,
    alias: 'string'
  },
  'lifetime-annotation': {
    pattern: /'[^\s>']+/,
    alias: 'symbol'
  },
  'keyword': /\b(?:abstract|alignof|as|be|box|break|const|continue|crate|do|else|enum|extern|false|final|fn|for|if|impl|in|let|loop|match|mod|move|mut|offsetof|once|override|priv|pub|pure|ref|return|sizeof|static|self|struct|super|true|trait|type|typeof|unsafe|unsized|use|virtual|where|while|yield)\b/,
  'attribute': {
    pattern: /#!?\[.+?\]/,
    greedy: true,
    alias: 'attr-name'
  },
  'function': [/\w+(?=\s*\()/, // Macros can use parens or brackets
  /\w+!(?=\s*\(|\[)/],
  'macro-rules': {
    pattern: /\w+!/,
    alias: 'function'
  },
  // Hex, oct, bin, dec numbers with visual separators and type suffix
  'number': /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(\d(?:_?\d)*)?\.?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:[iu](?:8|16|32|64)?|f32|f64))?\b/,
  // Closure params should not be confused with bitwise OR |
  'closure-params': {
    pattern: /\|[^|]*\|(?=\s*[{-])/,
    inside: {
      'punctuation': /[|:,]/,
      'operator': /[&*]/
    }
  },
  'punctuation': /[{}[\];(),:]|\.+|->/,
  'operator': /[-+*\/%!^]=?|=[=>]?|@|&[&=]?|\|[|=]?|<<?=?|>>?=?/
};
/* "prismjs/components/prism-sass" */

(function (Prism) {
  Prism.languages.sass = Prism.languages.extend('css', {
    // Sass comments don't need to be closed, only indented
    'comment': {
      pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m,
      lookbehind: true
    }
  });
  Prism.languages.insertBefore('sass', 'atrule', {
    // We want to consume the whole line
    'atrule-line': {
      // Includes support for = and + shortcuts
      pattern: /^(?:[ \t]*)[@+=].+/m,
      inside: {
        'atrule': /(?:@[\w-]+|[+=])/m
      }
    }
  });
  delete Prism.languages.sass.atrule;
  var variable = /\$[-\w]+|#\{\$[-\w]+\}/;
  var operator = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/, {
    pattern: /(\s+)-(?=\s)/,
    lookbehind: true
  }];
  Prism.languages.insertBefore('sass', 'property', {
    // We want to consume the whole line
    'variable-line': {
      pattern: /^[ \t]*\$.+/m,
      inside: {
        'punctuation': /:/,
        'variable': variable,
        'operator': operator
      }
    },
    // We want to consume the whole line
    'property-line': {
      pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m,
      inside: {
        'property': [/[^:\s]+(?=\s*:)/, {
          pattern: /(:)[^:\s]+/,
          lookbehind: true
        }],
        'punctuation': /:/,
        'variable': variable,
        'operator': operator,
        'important': Prism.languages.sass.important
      }
    }
  });
  delete Prism.languages.sass.property;
  delete Prism.languages.sass.important; // Now that whole lines for other patterns are consumed,
  // what's left should be selectors

  delete Prism.languages.sass.selector;
  Prism.languages.insertBefore('sass', 'punctuation', {
    'selector': {
      pattern: /([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/,
      lookbehind: true
    }
  });
})(_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a);
/* "prismjs/components/prism-scss" */


_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.scss = _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.extend('css', {
  'comment': {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
    lookbehind: true
  },
  'atrule': {
    pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
    inside: {
      'rule': /@[\w-]+/ // See rest below

    }
  },
  // url, compassified
  'url': /(?:[-a-z]+-)*url(?=\()/i,
  // CSS selector regex is not appropriate for Sass
  // since there can be lot more things (var, @ directive, nesting..)
  // a selector must start at the end of a property or after a brace (end of other rules or nesting)
  // it can contain some characters that aren't used for defining rules or end of selector, & (parent selector), or interpolated variable
  // the end of a selector is found when there is no rules in it ( {} or {\s}) or if there is a property (because an interpolated var
  // can "pass" as a selector- e.g: proper#{$erty})
  // this one was hard to do, so please be careful if you edit this one :)
  'selector': {
    // Initial look-ahead is used to prevent matching of blank selectors
    pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|&|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
    inside: {
      'parent': {
        pattern: /&/,
        alias: 'important'
      },
      'placeholder': /%[-\w]+/,
      'variable': /\$[-\w]+|#\{\$[-\w]+\}/
    }
  }
});
_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.insertBefore('scss', 'atrule', {
  'keyword': [/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i, {
    pattern: /( +)(?:from|through)(?= )/,
    lookbehind: true
  }]
});
_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.scss.property = {
  pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/i,
  inside: {
    'variable': /\$[-\w]+|#\{\$[-\w]+\}/
  }
};
_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.insertBefore('scss', 'important', {
  // var and interpolated vars
  'variable': /\$[-\w]+|#\{\$[-\w]+\}/
});
_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.insertBefore('scss', 'function', {
  'placeholder': {
    pattern: /%[-\w]+/,
    alias: 'selector'
  },
  'statement': {
    pattern: /\B!(?:default|optional)\b/i,
    alias: 'keyword'
  },
  'boolean': /\b(?:true|false)\b/,
  'null': /\bnull\b/,
  'operator': {
    pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
    lookbehind: true
  }
});
_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.scss['atrule'].inside.rest = _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.scss;
/* "prismjs/components/prism-sql" */

_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.sql = {
  'comment': {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
    lookbehind: true
  },
  'string': {
    pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\])*\2/,
    greedy: true,
    lookbehind: true
  },
  'variable': /@[\w.$]+|@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
  'function': /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
  // Should we highlight user defined functions too?
  'keyword': /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
  'boolean': /\b(?:TRUE|FALSE|NULL)\b/i,
  'number': /\b0x[\da-f]+\b|\b\d+\.?\d*|\B\.\d+\b/i,
  'operator': /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
  'punctuation': /[;[\]()`,.]/
};
/* "prismjs/components/prism-stylus" */

(function (Prism) {
  var inside = {
    'url': /url\((["']?).*?\1\)/i,
    'string': {
      pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
      greedy: true
    },
    'interpolation': null,
    // See below
    'func': null,
    // See below
    'important': /\B!(?:important|optional)\b/i,
    'keyword': {
      pattern: /(^|\s+)(?:(?:if|else|for|return|unless)(?=\s+|$)|@[\w-]+)/,
      lookbehind: true
    },
    'hexcode': /#[\da-f]{3,6}/i,
    'number': /\b\d+(?:\.\d+)?%?/,
    'boolean': /\b(?:true|false)\b/,
    'operator': [// We want non-word chars around "-" because it is
    // accepted in property names.
    /~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.+|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/],
    'punctuation': /[{}()\[\];:,]/
  };
  inside['interpolation'] = {
    pattern: /\{[^\r\n}:]+\}/,
    alias: 'variable',
    inside: {
      'delimiter': {
        pattern: /^{|}$/,
        alias: 'punctuation'
      },
      rest: inside
    }
  };
  inside['func'] = {
    pattern: /[\w-]+\([^)]*\).*/,
    inside: {
      'function': /^[^(]+/,
      rest: inside
    }
  };
  Prism.languages.stylus = {
    'comment': {
      pattern: /(^|[^\\])(\/\*[\s\S]*?\*\/|\/\/.*)/,
      lookbehind: true
    },
    'atrule-declaration': {
      pattern: /(^\s*)@.+/m,
      lookbehind: true,
      inside: {
        'atrule': /^@[\w-]+/,
        rest: inside
      }
    },
    'variable-declaration': {
      pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:(?:\{[^}]*\}|.+)|$)/m,
      lookbehind: true,
      inside: {
        'variable': /^\S+/,
        rest: inside
      }
    },
    'statement': {
      pattern: /(^[ \t]*)(?:if|else|for|return|unless)[ \t]+.+/m,
      lookbehind: true,
      inside: {
        keyword: /^\S+/,
        rest: inside
      }
    },
    // A property/value pair cannot end with a comma or a brace
    // It cannot have indented content unless it ended with a semicolon
    'property-declaration': {
      pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)[^{\r\n]*(?:;|[^{\r\n,](?=$)(?!(\r?\n|\r)(?:\{|\2[ \t]+)))/m,
      lookbehind: true,
      inside: {
        'property': {
          pattern: /^[^\s:]+/,
          inside: {
            'interpolation': inside.interpolation
          }
        },
        rest: inside
      }
    },
    // A selector can contain parentheses only as part of a pseudo-element
    // It can span multiple lines.
    // It must end with a comma or an accolade or have indented content.
    'selector': {
      pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t]+)))/m,
      lookbehind: true,
      inside: {
        'interpolation': inside.interpolation,
        'punctuation': /[{},]/
      }
    },
    'func': inside.func,
    'string': inside.string,
    'interpolation': inside.interpolation,
    'punctuation': /[{}()\[\];:.]/
  };
})(_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a);
/* "prismjs/components/prism-swift" */
// issues: nested multiline comments


_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.swift = _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.extend('clike', {
  'string': {
    pattern: /("|')(\\(?:\((?:[^()]|\([^)]+\))+\)|\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true,
    inside: {
      'interpolation': {
        pattern: /\\\((?:[^()]|\([^)]+\))+\)/,
        inside: {
          delimiter: {
            pattern: /^\\\(|\)$/,
            alias: 'variable' // See rest below

          }
        }
      }
    }
  },
  'keyword': /\b(?:as|associativity|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic(?:Type)?|else|enum|extension|fallthrough|final|for|func|get|guard|if|import|in|infix|init|inout|internal|is|lazy|left|let|mutating|new|none|nonmutating|operator|optional|override|postfix|precedence|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|Self|set|static|struct|subscript|super|switch|throws?|try|Type|typealias|unowned|unsafe|var|weak|where|while|willSet|__(?:COLUMN__|FILE__|FUNCTION__|LINE__))\b/,
  'number': /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
  'constant': /\b(?:nil|[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
  'atrule': /@\b(?:IB(?:Outlet|Designable|Action|Inspectable)|class_protocol|exported|noreturn|NS(?:Copying|Managed)|objc|UIApplicationMain|auto_closure)\b/,
  'builtin': /\b(?:[A-Z]\S+|abs|advance|alignof(?:Value)?|assert|contains|count(?:Elements)?|debugPrint(?:ln)?|distance|drop(?:First|Last)|dump|enumerate|equal|filter|find|first|getVaList|indices|isEmpty|join|last|lexicographicalCompare|map|max(?:Element)?|min(?:Element)?|numericCast|overlaps|partition|print(?:ln)?|reduce|reflect|reverse|sizeof(?:Value)?|sort(?:ed)?|split|startsWith|stride(?:of(?:Value)?)?|suffix|swap|toDebugString|toString|transcode|underestimateCount|unsafeBitCast|with(?:ExtendedLifetime|Unsafe(?:MutablePointers?|Pointers?)|VaList))\b/
});
_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.swift['string'].inside['interpolation'].inside.rest = _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.swift;
/* "prismjs/components/prism-typescript" */

_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.typescript = _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.extend('javascript', {
  // From JavaScript Prism keyword list and TypeScript language spec: https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#221-reserved-words
  'keyword': /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,
  'builtin': /\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/
});
_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.ts = _prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.typescript;
/* "prismjs/components/prism-vim" */

_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.vim = {
  'string': /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\r\n]|'')*'/,
  'comment': /".*/,
  'function': /\w+(?=\()/,
  'keyword': /\b(?:ab|abbreviate|abc|abclear|abo|aboveleft|al|all|arga|argadd|argd|argdelete|argdo|arge|argedit|argg|argglobal|argl|arglocal|ar|args|argu|argument|as|ascii|bad|badd|ba|ball|bd|bdelete|be|bel|belowright|bf|bfirst|bl|blast|bm|bmodified|bn|bnext|bN|bNext|bo|botright|bp|bprevious|brea|break|breaka|breakadd|breakd|breakdel|breakl|breaklist|br|brewind|bro|browse|bufdo|b|buffer|buffers|bun|bunload|bw|bwipeout|ca|cabbrev|cabc|cabclear|caddb|caddbuffer|cad|caddexpr|caddf|caddfile|cal|call|cat|catch|cb|cbuffer|cc|ccl|cclose|cd|ce|center|cex|cexpr|cf|cfile|cfir|cfirst|cgetb|cgetbuffer|cgete|cgetexpr|cg|cgetfile|c|change|changes|chd|chdir|che|checkpath|checkt|checktime|cla|clast|cl|clist|clo|close|cmapc|cmapclear|cnew|cnewer|cn|cnext|cN|cNext|cnf|cnfile|cNfcNfile|cnorea|cnoreabbrev|col|colder|colo|colorscheme|comc|comclear|comp|compiler|conf|confirm|con|continue|cope|copen|co|copy|cpf|cpfile|cp|cprevious|cq|cquit|cr|crewind|cuna|cunabbrev|cu|cunmap|cw|cwindow|debugg|debuggreedy|delc|delcommand|d|delete|delf|delfunction|delm|delmarks|diffg|diffget|diffoff|diffpatch|diffpu|diffput|diffsplit|diffthis|diffu|diffupdate|dig|digraphs|di|display|dj|djump|dl|dlist|dr|drop|ds|dsearch|dsp|dsplit|earlier|echoe|echoerr|echom|echomsg|echon|e|edit|el|else|elsei|elseif|em|emenu|endfo|endfor|endf|endfunction|endfun|en|endif|endt|endtry|endw|endwhile|ene|enew|ex|exi|exit|exu|exusage|f|file|files|filetype|fina|finally|fin|find|fini|finish|fir|first|fix|fixdel|fo|fold|foldc|foldclose|folddoc|folddoclosed|foldd|folddoopen|foldo|foldopen|for|fu|fun|function|go|goto|gr|grep|grepa|grepadd|ha|hardcopy|h|help|helpf|helpfind|helpg|helpgrep|helpt|helptags|hid|hide|his|history|ia|iabbrev|iabc|iabclear|if|ij|ijump|il|ilist|imapc|imapclear|in|inorea|inoreabbrev|isearch|isp|isplit|iuna|iunabbrev|iu|iunmap|j|join|ju|jumps|k|keepalt|keepj|keepjumps|kee|keepmarks|laddb|laddbuffer|lad|laddexpr|laddf|laddfile|lan|language|la|last|later|lb|lbuffer|lc|lcd|lch|lchdir|lcl|lclose|let|left|lefta|leftabove|lex|lexpr|lf|lfile|lfir|lfirst|lgetb|lgetbuffer|lgete|lgetexpr|lg|lgetfile|lgr|lgrep|lgrepa|lgrepadd|lh|lhelpgrep|l|list|ll|lla|llast|lli|llist|lmak|lmake|lm|lmap|lmapc|lmapclear|lnew|lnewer|lne|lnext|lN|lNext|lnf|lnfile|lNf|lNfile|ln|lnoremap|lo|loadview|loc|lockmarks|lockv|lockvar|lol|lolder|lop|lopen|lpf|lpfile|lp|lprevious|lr|lrewind|ls|lt|ltag|lu|lunmap|lv|lvimgrep|lvimgrepa|lvimgrepadd|lw|lwindow|mak|make|ma|mark|marks|mat|match|menut|menutranslate|mk|mkexrc|mks|mksession|mksp|mkspell|mkvie|mkview|mkv|mkvimrc|mod|mode|m|move|mzf|mzfile|mz|mzscheme|nbkey|new|n|next|N|Next|nmapc|nmapclear|noh|nohlsearch|norea|noreabbrev|nu|number|nun|nunmap|omapc|omapclear|on|only|o|open|opt|options|ou|ounmap|pc|pclose|ped|pedit|pe|perl|perld|perldo|po|pop|popu|popup|pp|ppop|pre|preserve|prev|previous|p|print|P|Print|profd|profdel|prof|profile|promptf|promptfind|promptr|promptrepl|ps|psearch|pta|ptag|ptf|ptfirst|ptj|ptjump|ptl|ptlast|ptn|ptnext|ptN|ptNext|ptp|ptprevious|ptr|ptrewind|pts|ptselect|pu|put|pw|pwd|pyf|pyfile|py|python|qa|qall|q|quit|quita|quitall|r|read|rec|recover|redi|redir|red|redo|redr|redraw|redraws|redrawstatus|reg|registers|res|resize|ret|retab|retu|return|rew|rewind|ri|right|rightb|rightbelow|rub|ruby|rubyd|rubydo|rubyf|rubyfile|ru|runtime|rv|rviminfo|sal|sall|san|sandbox|sa|sargument|sav|saveas|sba|sball|sbf|sbfirst|sbl|sblast|sbm|sbmodified|sbn|sbnext|sbN|sbNext|sbp|sbprevious|sbr|sbrewind|sb|sbuffer|scripte|scriptencoding|scrip|scriptnames|se|set|setf|setfiletype|setg|setglobal|setl|setlocal|sf|sfind|sfir|sfirst|sh|shell|sign|sil|silent|sim|simalt|sla|slast|sl|sleep|sm|smagic|sm|smap|smapc|smapclear|sme|smenu|sn|snext|sN|sNext|sni|sniff|sno|snomagic|snor|snoremap|snoreme|snoremenu|sor|sort|so|source|spelld|spelldump|spe|spellgood|spelli|spellinfo|spellr|spellrepall|spellu|spellundo|spellw|spellwrong|sp|split|spr|sprevious|sre|srewind|sta|stag|startg|startgreplace|star|startinsert|startr|startreplace|stj|stjump|st|stop|stopi|stopinsert|sts|stselect|sun|sunhide|sunm|sunmap|sus|suspend|sv|sview|syncbind|t|tab|tabc|tabclose|tabd|tabdo|tabe|tabedit|tabf|tabfind|tabfir|tabfirst|tabl|tablast|tabm|tabmove|tabnew|tabn|tabnext|tabN|tabNext|tabo|tabonly|tabp|tabprevious|tabr|tabrewind|tabs|ta|tag|tags|tc|tcl|tcld|tcldo|tclf|tclfile|te|tearoff|tf|tfirst|th|throw|tj|tjump|tl|tlast|tm|tm|tmenu|tn|tnext|tN|tNext|to|topleft|tp|tprevious|tr|trewind|try|ts|tselect|tu|tu|tunmenu|una|unabbreviate|u|undo|undoj|undojoin|undol|undolist|unh|unhide|unlet|unlo|unlockvar|unm|unmap|up|update|verb|verbose|ve|version|vert|vertical|vie|view|vim|vimgrep|vimgrepa|vimgrepadd|vi|visual|viu|viusage|vmapc|vmapclear|vne|vnew|vs|vsplit|vu|vunmap|wa|wall|wh|while|winc|wincmd|windo|winp|winpos|win|winsize|wn|wnext|wN|wNext|wp|wprevious|wq|wqa|wqall|w|write|ws|wsverb|wv|wviminfo|X|xa|xall|x|xit|xm|xmap|xmapc|xmapclear|xme|xmenu|XMLent|XMLns|xn|xnoremap|xnoreme|xnoremenu|xu|xunmap|y|yank)\b/,
  'builtin': /\b(?:autocmd|acd|ai|akm|aleph|allowrevins|altkeymap|ambiwidth|ambw|anti|antialias|arab|arabic|arabicshape|ari|arshape|autochdir|autoindent|autoread|autowrite|autowriteall|aw|awa|background|backspace|backup|backupcopy|backupdir|backupext|backupskip|balloondelay|ballooneval|balloonexpr|bdir|bdlay|beval|bex|bexpr|bg|bh|bin|binary|biosk|bioskey|bk|bkc|bomb|breakat|brk|browsedir|bs|bsdir|bsk|bt|bufhidden|buflisted|buftype|casemap|ccv|cdpath|cedit|cfu|ch|charconvert|ci|cin|cindent|cink|cinkeys|cino|cinoptions|cinw|cinwords|clipboard|cmdheight|cmdwinheight|cmp|cms|columns|com|comments|commentstring|compatible|complete|completefunc|completeopt|consk|conskey|copyindent|cot|cpo|cpoptions|cpt|cscopepathcomp|cscopeprg|cscopequickfix|cscopetag|cscopetagorder|cscopeverbose|cspc|csprg|csqf|cst|csto|csverb|cuc|cul|cursorcolumn|cursorline|cwh|debug|deco|def|define|delcombine|dex|dg|dict|dictionary|diff|diffexpr|diffopt|digraph|dip|dir|directory|dy|ea|ead|eadirection|eb|ed|edcompatible|ef|efm|ei|ek|enc|encoding|endofline|eol|ep|equalalways|equalprg|errorbells|errorfile|errorformat|esckeys|et|eventignore|expandtab|exrc|fcl|fcs|fdc|fde|fdi|fdl|fdls|fdm|fdn|fdo|fdt|fen|fenc|fencs|fex|ff|ffs|fileencoding|fileencodings|fileformat|fileformats|fillchars|fk|fkmap|flp|fml|fmr|foldcolumn|foldenable|foldexpr|foldignore|foldlevel|foldlevelstart|foldmarker|foldmethod|foldminlines|foldnestmax|foldtext|formatexpr|formatlistpat|formatoptions|formatprg|fp|fs|fsync|ft|gcr|gd|gdefault|gfm|gfn|gfs|gfw|ghr|gp|grepformat|grepprg|gtl|gtt|guicursor|guifont|guifontset|guifontwide|guiheadroom|guioptions|guipty|guitablabel|guitabtooltip|helpfile|helpheight|helplang|hf|hh|hi|hidden|highlight|hk|hkmap|hkmapp|hkp|hl|hlg|hls|hlsearch|ic|icon|iconstring|ignorecase|im|imactivatekey|imak|imc|imcmdline|imd|imdisable|imi|iminsert|ims|imsearch|inc|include|includeexpr|incsearch|inde|indentexpr|indentkeys|indk|inex|inf|infercase|insertmode|isf|isfname|isi|isident|isk|iskeyword|isprint|joinspaces|js|key|keymap|keymodel|keywordprg|km|kmp|kp|langmap|langmenu|laststatus|lazyredraw|lbr|lcs|linebreak|lines|linespace|lisp|lispwords|listchars|loadplugins|lpl|lsp|lz|macatsui|magic|makeef|makeprg|matchpairs|matchtime|maxcombine|maxfuncdepth|maxmapdepth|maxmem|maxmempattern|maxmemtot|mco|mef|menuitems|mfd|mh|mis|mkspellmem|ml|mls|mm|mmd|mmp|mmt|modeline|modelines|modifiable|modified|more|mouse|mousef|mousefocus|mousehide|mousem|mousemodel|mouses|mouseshape|mouset|mousetime|mp|mps|msm|mzq|mzquantum|nf|nrformats|numberwidth|nuw|odev|oft|ofu|omnifunc|opendevice|operatorfunc|opfunc|osfiletype|pa|para|paragraphs|paste|pastetoggle|patchexpr|patchmode|path|pdev|penc|pex|pexpr|pfn|ph|pheader|pi|pm|pmbcs|pmbfn|popt|preserveindent|previewheight|previewwindow|printdevice|printencoding|printexpr|printfont|printheader|printmbcharset|printmbfont|printoptions|prompt|pt|pumheight|pvh|pvw|qe|quoteescape|readonly|remap|report|restorescreen|revins|rightleft|rightleftcmd|rl|rlc|ro|rs|rtp|ruf|ruler|rulerformat|runtimepath|sbo|sc|scb|scr|scroll|scrollbind|scrolljump|scrolloff|scrollopt|scs|sect|sections|secure|sel|selection|selectmode|sessionoptions|sft|shcf|shellcmdflag|shellpipe|shellquote|shellredir|shellslash|shelltemp|shelltype|shellxquote|shiftround|shiftwidth|shm|shortmess|shortname|showbreak|showcmd|showfulltag|showmatch|showmode|showtabline|shq|si|sidescroll|sidescrolloff|siso|sj|slm|smartcase|smartindent|smarttab|smc|smd|softtabstop|sol|spc|spell|spellcapcheck|spellfile|spelllang|spellsuggest|spf|spl|splitbelow|splitright|sps|sr|srr|ss|ssl|ssop|stal|startofline|statusline|stl|stmp|su|sua|suffixes|suffixesadd|sw|swapfile|swapsync|swb|swf|switchbuf|sws|sxq|syn|synmaxcol|syntax|tabline|tabpagemax|tabstop|tagbsearch|taglength|tagrelative|tagstack|tal|tb|tbi|tbidi|tbis|tbs|tenc|term|termbidi|termencoding|terse|textauto|textmode|textwidth|tgst|thesaurus|tildeop|timeout|timeoutlen|title|titlelen|titleold|titlestring|toolbar|toolbariconsize|top|tpm|tsl|tsr|ttimeout|ttimeoutlen|ttm|tty|ttybuiltin|ttyfast|ttym|ttymouse|ttyscroll|ttytype|tw|tx|uc|ul|undolevels|updatecount|updatetime|ut|vb|vbs|vdir|verbosefile|vfile|viewdir|viewoptions|viminfo|virtualedit|visualbell|vop|wak|warn|wb|wc|wcm|wd|weirdinvert|wfh|wfw|whichwrap|wi|wig|wildchar|wildcharm|wildignore|wildmenu|wildmode|wildoptions|wim|winaltkeys|window|winfixheight|winfixwidth|winheight|winminheight|winminwidth|winwidth|wiv|wiw|wm|wmh|wmnu|wmw|wop|wrap|wrapmargin|wrapscan|writeany|writebackup|writedelay|ww|noacd|noai|noakm|noallowrevins|noaltkeymap|noanti|noantialias|noar|noarab|noarabic|noarabicshape|noari|noarshape|noautochdir|noautoindent|noautoread|noautowrite|noautowriteall|noaw|noawa|nobackup|noballooneval|nobeval|nobin|nobinary|nobiosk|nobioskey|nobk|nobl|nobomb|nobuflisted|nocf|noci|nocin|nocindent|nocompatible|noconfirm|noconsk|noconskey|nocopyindent|nocp|nocscopetag|nocscopeverbose|nocst|nocsverb|nocuc|nocul|nocursorcolumn|nocursorline|nodeco|nodelcombine|nodg|nodiff|nodigraph|nodisable|noea|noeb|noed|noedcompatible|noek|noendofline|noeol|noequalalways|noerrorbells|noesckeys|noet|noex|noexpandtab|noexrc|nofen|nofk|nofkmap|nofoldenable|nogd|nogdefault|noguipty|nohid|nohidden|nohk|nohkmap|nohkmapp|nohkp|nohls|noic|noicon|noignorecase|noim|noimc|noimcmdline|noimd|noincsearch|noinf|noinfercase|noinsertmode|nois|nojoinspaces|nojs|nolazyredraw|nolbr|nolinebreak|nolisp|nolist|noloadplugins|nolpl|nolz|noma|nomacatsui|nomagic|nomh|noml|nomod|nomodeline|nomodifiable|nomodified|nomore|nomousef|nomousefocus|nomousehide|nonu|nonumber|noodev|noopendevice|nopaste|nopi|nopreserveindent|nopreviewwindow|noprompt|nopvw|noreadonly|noremap|norestorescreen|norevins|nori|norightleft|norightleftcmd|norl|norlc|noro|nors|noru|noruler|nosb|nosc|noscb|noscrollbind|noscs|nosecure|nosft|noshellslash|noshelltemp|noshiftround|noshortname|noshowcmd|noshowfulltag|noshowmatch|noshowmode|nosi|nosm|nosmartcase|nosmartindent|nosmarttab|nosmd|nosn|nosol|nospell|nosplitbelow|nosplitright|nospr|nosr|nossl|nosta|nostartofline|nostmp|noswapfile|noswf|nota|notagbsearch|notagrelative|notagstack|notbi|notbidi|notbs|notermbidi|noterse|notextauto|notextmode|notf|notgst|notildeop|notimeout|notitle|noto|notop|notr|nottimeout|nottybuiltin|nottyfast|notx|novb|novisualbell|nowa|nowarn|nowb|noweirdinvert|nowfh|nowfw|nowildmenu|nowinfixheight|nowinfixwidth|nowiv|nowmnu|nowrap|nowrapscan|nowrite|nowriteany|nowritebackup|nows|invacd|invai|invakm|invallowrevins|invaltkeymap|invanti|invantialias|invar|invarab|invarabic|invarabicshape|invari|invarshape|invautochdir|invautoindent|invautoread|invautowrite|invautowriteall|invaw|invawa|invbackup|invballooneval|invbeval|invbin|invbinary|invbiosk|invbioskey|invbk|invbl|invbomb|invbuflisted|invcf|invci|invcin|invcindent|invcompatible|invconfirm|invconsk|invconskey|invcopyindent|invcp|invcscopetag|invcscopeverbose|invcst|invcsverb|invcuc|invcul|invcursorcolumn|invcursorline|invdeco|invdelcombine|invdg|invdiff|invdigraph|invdisable|invea|inveb|inved|invedcompatible|invek|invendofline|inveol|invequalalways|inverrorbells|invesckeys|invet|invex|invexpandtab|invexrc|invfen|invfk|invfkmap|invfoldenable|invgd|invgdefault|invguipty|invhid|invhidden|invhk|invhkmap|invhkmapp|invhkp|invhls|invhlsearch|invic|invicon|invignorecase|invim|invimc|invimcmdline|invimd|invincsearch|invinf|invinfercase|invinsertmode|invis|invjoinspaces|invjs|invlazyredraw|invlbr|invlinebreak|invlisp|invlist|invloadplugins|invlpl|invlz|invma|invmacatsui|invmagic|invmh|invml|invmod|invmodeline|invmodifiable|invmodified|invmore|invmousef|invmousefocus|invmousehide|invnu|invnumber|invodev|invopendevice|invpaste|invpi|invpreserveindent|invpreviewwindow|invprompt|invpvw|invreadonly|invremap|invrestorescreen|invrevins|invri|invrightleft|invrightleftcmd|invrl|invrlc|invro|invrs|invru|invruler|invsb|invsc|invscb|invscrollbind|invscs|invsecure|invsft|invshellslash|invshelltemp|invshiftround|invshortname|invshowcmd|invshowfulltag|invshowmatch|invshowmode|invsi|invsm|invsmartcase|invsmartindent|invsmarttab|invsmd|invsn|invsol|invspell|invsplitbelow|invsplitright|invspr|invsr|invssl|invsta|invstartofline|invstmp|invswapfile|invswf|invta|invtagbsearch|invtagrelative|invtagstack|invtbi|invtbidi|invtbs|invtermbidi|invterse|invtextauto|invtextmode|invtf|invtgst|invtildeop|invtimeout|invtitle|invto|invtop|invtr|invttimeout|invttybuiltin|invttyfast|invtx|invvb|invvisualbell|invwa|invwarn|invwb|invweirdinvert|invwfh|invwfw|invwildmenu|invwinfixheight|invwinfixwidth|invwiv|invwmnu|invwrap|invwrapscan|invwrite|invwriteany|invwritebackup|invws|t_AB|t_AF|t_al|t_AL|t_bc|t_cd|t_ce|t_Ce|t_cl|t_cm|t_Co|t_cs|t_Cs|t_CS|t_CV|t_da|t_db|t_dl|t_DL|t_EI|t_F1|t_F2|t_F3|t_F4|t_F5|t_F6|t_F7|t_F8|t_F9|t_fs|t_IE|t_IS|t_k1|t_K1|t_k2|t_k3|t_K3|t_k4|t_K4|t_k5|t_K5|t_k6|t_K6|t_k7|t_K7|t_k8|t_K8|t_k9|t_K9|t_KA|t_kb|t_kB|t_KB|t_KC|t_kd|t_kD|t_KD|t_ke|t_KE|t_KF|t_KG|t_kh|t_KH|t_kI|t_KI|t_KJ|t_KK|t_kl|t_KL|t_kN|t_kP|t_kr|t_ks|t_ku|t_le|t_mb|t_md|t_me|t_mr|t_ms|t_nd|t_op|t_RI|t_RV|t_Sb|t_se|t_Sf|t_SI|t_so|t_sr|t_te|t_ti|t_ts|t_ue|t_us|t_ut|t_vb|t_ve|t_vi|t_vs|t_WP|t_WS|t_xs|t_ZH|t_ZR)\b/,
  'number': /\b(?:0x[\da-f]+|\d+(?:\.\d+)?)\b/i,
  'operator': /\|\||&&|[-+.]=?|[=!](?:[=~][#?]?)?|[<>]=?[#?]?|[*\/%?]|\b(?:is(?:not)?)\b/,
  'punctuation': /[{}[\](),;:]/
};
/* "prismjs/components/prism-yaml" */

_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a.languages.yaml = {
  'scalar': {
    pattern: /([\-:]\s*(?:![^\s]+)?[ \t]*[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\2[^\r\n]+)*)/,
    lookbehind: true,
    alias: 'string'
  },
  'comment': /#.*/,
  'key': {
    pattern: /(\s*(?:^|[:\-,[{\r\n?])[ \t]*(?:![^\s]+)?[ \t]*)[^\r\n{[\]},#\s]+?(?=\s*:\s)/,
    lookbehind: true,
    alias: 'atrule'
  },
  'directive': {
    pattern: /(^[ \t]*)%.+/m,
    lookbehind: true,
    alias: 'important'
  },
  'datetime': {
    pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?)?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?)(?=[ \t]*(?:$|,|]|}))/m,
    lookbehind: true,
    alias: 'number'
  },
  'boolean': {
    pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:true|false)[ \t]*(?=$|,|]|})/im,
    lookbehind: true,
    alias: 'important'
  },
  'null': {
    pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:null|~)[ \t]*(?=$|,|]|})/im,
    lookbehind: true,
    alias: 'important'
  },
  'string': {
    pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)("|')(?:(?!\2)[^\\\r\n]|\\.)*\2(?=[ \t]*(?:$|,|]|}))/m,
    lookbehind: true,
    greedy: true
  },
  'number': {
    pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+\.?\d*|\.?\d+)(?:e[+-]?\d+)?|\.inf|\.nan)[ \t]*(?=$|,|]|})/im,
    lookbehind: true
  },
  'tag': /![^\s]+/,
  'important': /[&*][\w]+/,
  'punctuation': /---|[:[\]{}\-,|>?]|\.\.\./
};
/* harmony default export */ __webpack_exports__["default"] = (_prism_core__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./node_modules/prism-react-renderer/es/vendor/prism/prism-core.js":
/*!*************************************************************************!*\
  !*** ./node_modules/prism-react-renderer/es/vendor/prism/prism-core.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */

/**
 * prism-react-renderer:
 * This file has been modified to remove:
 * - globals and window dependency
 * - worker support
 * - highlightAll and other element dependent methods
 * - _.hooks helpers
 * - UMD/node-specific hacks
 * It has also been run through prettier
 */
var Prism = function () {
  // Private helper vars
  var lang = /\blang(?:uage)?-([\w-]+)\b/i;
  var uniqueId = 0;
  var _ = {
    util: {
      encode: function encode(tokens) {
        if (tokens instanceof Token) {
          return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
        } else if (_.util.type(tokens) === "Array") {
          return tokens.map(_.util.encode);
        } else {
          return tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
        }
      },
      type: function type(o) {
        return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
      },
      objId: function objId(obj) {
        if (!obj["__id"]) {
          Object.defineProperty(obj, "__id", {
            value: ++uniqueId
          });
        }

        return obj["__id"];
      },
      // Deep clone a language definition (e.g. to extend it)
      clone: function clone(o, visited) {
        var type = _.util.type(o);

        visited = visited || {};

        switch (type) {
          case "Object":
            if (visited[_.util.objId(o)]) {
              return visited[_.util.objId(o)];
            }

            var clone = {};
            visited[_.util.objId(o)] = clone;

            for (var key in o) {
              if (o.hasOwnProperty(key)) {
                clone[key] = _.util.clone(o[key], visited);
              }
            }

            return clone;

          case "Array":
            if (visited[_.util.objId(o)]) {
              return visited[_.util.objId(o)];
            }

            var clone = [];
            visited[_.util.objId(o)] = clone;
            o.forEach(function (v, i) {
              clone[i] = _.util.clone(v, visited);
            });
            return clone;
        }

        return o;
      }
    },
    languages: {
      extend: function extend(id, redef) {
        var lang = _.util.clone(_.languages[id]);

        for (var key in redef) {
          lang[key] = redef[key];
        }

        return lang;
      },

      /**
       * Insert a token before another token in a language literal
       * As this needs to recreate the object (we cannot actually insert before keys in object literals),
       * we cannot just provide an object, we need anobject and a key.
       * @param inside The key (or language id) of the parent
       * @param before The key to insert before. If not provided, the function appends instead.
       * @param insert Object with the key/value pairs to insert
       * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
       */
      insertBefore: function insertBefore(inside, before, insert, root) {
        root = root || _.languages;
        var grammar = root[inside];

        if (arguments.length == 2) {
          insert = arguments[1];

          for (var newToken in insert) {
            if (insert.hasOwnProperty(newToken)) {
              grammar[newToken] = insert[newToken];
            }
          }

          return grammar;
        }

        var ret = {};

        for (var token in grammar) {
          if (grammar.hasOwnProperty(token)) {
            if (token == before) {
              for (var newToken in insert) {
                if (insert.hasOwnProperty(newToken)) {
                  ret[newToken] = insert[newToken];
                }
              }
            }

            ret[token] = grammar[token];
          }
        } // Update references in other language definitions


        _.languages.DFS(_.languages, function (key, value) {
          if (value === root[inside] && key != inside) {
            this[key] = ret;
          }
        });

        return root[inside] = ret;
      },
      // Traverse a language definition with Depth First Search
      DFS: function DFS(o, callback, type, visited) {
        visited = visited || {};

        for (var i in o) {
          if (o.hasOwnProperty(i)) {
            callback.call(o, i, o[i], type || i);

            if (_.util.type(o[i]) === "Object" && !visited[_.util.objId(o[i])]) {
              visited[_.util.objId(o[i])] = true;

              _.languages.DFS(o[i], callback, null, visited);
            } else if (_.util.type(o[i]) === "Array" && !visited[_.util.objId(o[i])]) {
              visited[_.util.objId(o[i])] = true;

              _.languages.DFS(o[i], callback, i, visited);
            }
          }
        }
      }
    },
    plugins: {},
    highlight: function highlight(text, grammar, language) {
      var env = {
        code: text,
        grammar: grammar,
        language: language
      };
      env.tokens = _.tokenize(env.code, env.grammar);
      return Token.stringify(_.util.encode(env.tokens), env.language);
    },
    matchGrammar: function matchGrammar(text, strarr, grammar, index, startPos, oneshot, target) {
      var Token = _.Token;

      for (var token in grammar) {
        if (!grammar.hasOwnProperty(token) || !grammar[token]) {
          continue;
        }

        if (token == target) {
          return;
        }

        var patterns = grammar[token];
        patterns = _.util.type(patterns) === "Array" ? patterns : [patterns];

        for (var j = 0; j < patterns.length; ++j) {
          var pattern = patterns[j],
              inside = pattern.inside,
              lookbehind = !!pattern.lookbehind,
              greedy = !!pattern.greedy,
              lookbehindLength = 0,
              alias = pattern.alias;

          if (greedy && !pattern.pattern.global) {
            // Without the global flag, lastIndex won't work
            var flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
            pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
          }

          pattern = pattern.pattern || pattern; // Don’t cache length as it changes during the loop

          for (var i = index, pos = startPos; i < strarr.length; pos += strarr[i].length, ++i) {
            var str = strarr[i];

            if (strarr.length > text.length) {
              // Something went terribly wrong, ABORT, ABORT!
              return;
            }

            if (str instanceof Token) {
              continue;
            }

            if (greedy && i != strarr.length - 1) {
              pattern.lastIndex = pos;
              var match = pattern.exec(text);

              if (!match) {
                break;
              }

              var from = match.index + (lookbehind ? match[1].length : 0),
                  to = match.index + match[0].length,
                  k = i,
                  p = pos;

              for (var len = strarr.length; k < len && (p < to || !strarr[k].type && !strarr[k - 1].greedy); ++k) {
                p += strarr[k].length; // Move the index i to the element in strarr that is closest to from

                if (from >= p) {
                  ++i;
                  pos = p;
                }
              } // If strarr[i] is a Token, then the match starts inside another Token, which is invalid


              if (strarr[i] instanceof Token) {
                continue;
              } // Number of tokens to delete and replace with the new match


              delNum = k - i;
              str = text.slice(pos, p);
              match.index -= pos;
            } else {
              pattern.lastIndex = 0;
              var match = pattern.exec(str),
                  delNum = 1;
            }

            if (!match) {
              if (oneshot) {
                break;
              }

              continue;
            }

            if (lookbehind) {
              lookbehindLength = match[1] ? match[1].length : 0;
            }

            var from = match.index + lookbehindLength,
                match = match[0].slice(lookbehindLength),
                to = from + match.length,
                before = str.slice(0, from),
                after = str.slice(to);
            var args = [i, delNum];

            if (before) {
              ++i;
              pos += before.length;
              args.push(before);
            }

            var wrapped = new Token(token, inside ? _.tokenize(match, inside) : match, alias, match, greedy);
            args.push(wrapped);

            if (after) {
              args.push(after);
            }

            Array.prototype.splice.apply(strarr, args);
            if (delNum != 1) _.matchGrammar(text, strarr, grammar, i, pos, true, token);
            if (oneshot) break;
          }
        }
      }
    },
    hooks: {
      add: function add() {}
    },
    tokenize: function tokenize(text, grammar, language) {
      var strarr = [text];
      var rest = grammar.rest;

      if (rest) {
        for (var token in rest) {
          grammar[token] = rest[token];
        }

        delete grammar.rest;
      }

      _.matchGrammar(text, strarr, grammar, 0, 0, false);

      return strarr;
    }
  };

  var Token = _.Token = function (type, content, alias, matchedStr, greedy) {
    this.type = type;
    this.content = content;
    this.alias = alias; // Copy of the full string this token was created from

    this.length = (matchedStr || "").length | 0;
    this.greedy = !!greedy;
  };

  Token.stringify = function (o, language, parent) {
    if (typeof o == "string") {
      return o;
    }

    if (_.util.type(o) === "Array") {
      return o.map(function (element) {
        return Token.stringify(element, language, o);
      }).join("");
    }

    var env = {
      type: o.type,
      content: Token.stringify(o.content, language, parent),
      tag: "span",
      classes: ["token", o.type],
      attributes: {},
      language: language,
      parent: parent
    };

    if (o.alias) {
      var aliases = _.util.type(o.alias) === "Array" ? o.alias : [o.alias];
      Array.prototype.push.apply(env.classes, aliases);
    }

    var attributes = Object.keys(env.attributes).map(function (name) {
      return name + '="' + (env.attributes[name] || "").replace(/"/g, "&quot;") + '"';
    }).join(" ");
    return "<" + env.tag + ' class="' + env.classes.join(" ") + '"' + (attributes ? " " + attributes : "") + ">" + env.content + "</" + env.tag + ">";
  };

  return _;
}();

module.exports = Prism;
Prism.default = Prism;

/***/ }),

/***/ "./node_modules/prism-react-renderer/themes/duotoneDark.js":
/*!*****************************************************************!*\
  !*** ./node_modules/prism-react-renderer/themes/duotoneDark.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// @flow
// Duotone Dark
// Author: Simurai, adapted from DuoTone themes for Atom (http://simurai.com/projects/2016/01/01/duotone-themes)
// Conversion: Bram de Haan (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-evening-dark.css)
// Generated with Base16 Builder (https://github.com/base16-builder/base16-builder)

/*:: import type { PrismTheme } from '../src/types' */

var theme /*: PrismTheme */ = {
  plain: {
    backgroundColor: "#2a2734",
    color: "#9a86fd"
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
      style: {
        color: "#6c6783"
      }
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.7
      }
    },
    {
      types: ["tag", "operator", "number"],
      style: {
        color: "#e09142"
      }
    },
    {
      types: ["property", "function"],
      style: {
        color: "#9a86fd"
      }
    },
    {
      types: ["tag-id", "selector", "atrule-id"],
      style: {
        color: "#eeebff"
      }
    },
    {
      types: ["attr-name"],
      style: {
        color: "#c4b9fe"
      }
    },
    {
      types: [
        "boolean",
        "string",
        "entity",
        "url",
        "attr-value",
        "keyword",
        "control",
        "directive",
        "unit",
        "statement",
        "regex",
        "at-rule",
        "placeholder",
        "variable"
      ],
      style: {
        color: "#ffcc99"
      }
    },
    {
      types: ["deleted"],
      style: {
        textDecorationLine: "line-through"
      }
    },
    {
      types: ["inserted"],
      style: {
        textDecorationLine: "underline"
      }
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic"
      }
    },
    {
      types: ["important", "bold"],
      style: {
        fontWeight: "bold"
      }
    },
    {
      types: ["important"],
      style: {
        color: "#c4b9fe"
      }
    }
  ]
};

module.exports = theme;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithThrowingShims.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithThrowingShims.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(/*! ./factoryWithThrowingShims */ "./node_modules/prop-types/factoryWithThrowingShims.js")();
}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-hot-loader/root.js":
/*!***********************************************!*\
  !*** ./node_modules/react-hot-loader/root.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) { var parent, cache, hot; } else {
  // prod mode
  exports.hot = function(a) {
    return a
  }
}


/***/ }),

/***/ "./node_modules/typeface-montserrat/index.css":
/*!****************************************************!*\
  !*** ./node_modules/typeface-montserrat/index.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./public/static/d/2069409925.json":
/*!*****************************************!*\
  !*** ./public/static/d/2069409925.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"site":{"siteMetadata":{"title":"Jeff Ferber","baseUrl":"https://ferbs.com"}}}};

/***/ }),

/***/ "./src/components/Card.jsx":
/*!*********************************!*\
  !*** ./src/components/Card.jsx ***!
  \*********************************/
/*! exports provided: MiniCard, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniCard", function() { return MiniCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.scss */ "./src/components/Card.scss");
/* harmony import */ var _Card_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_scss__WEBPACK_IMPORTED_MODULE_1__);



function Card(_ref) {
  var className = _ref.className,
      title = _ref.title,
      children = _ref.children,
      footer = _ref.footer;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: ['card', className || ''].join(' ').trim()
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-content"
  }, title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "title"
  }, title), children, footer));
}

function MiniCard(_ref2) {
  var title = _ref2.title,
      iconSrc = _ref2.iconSrc,
      iconAlt = _ref2.iconAlt,
      className = _ref2.className,
      skipGreyFilter = _ref2.skipGreyFilter,
      children = _ref2.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card, {
    className: "mini-card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tag is-small is-success"
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: [skipGreyFilter ? '' : 'use-grey-filter', 'mini-card-content'].join(' ').trim()
  }, iconSrc && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
    className: "image is-32x32"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: iconSrc,
    alt: iconAlt
  })), children));
}
/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./src/components/Card.scss":
/*!**********************************!*\
  !*** ./src/components/Card.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/CodeHighlight.jsx":
/*!******************************************!*\
  !*** ./src/components/CodeHighlight.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CodeHighlight; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "core-js/modules/es6.object.assign");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prism-react-renderer */ "./node_modules/prism-react-renderer/es/index.js");
/* harmony import */ var _scss_support_prismjs_theme_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scss-support/prismjs-theme.scss */ "./src/scss-support/prismjs-theme.scss");
/* harmony import */ var _scss_support_prismjs_theme_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_support_prismjs_theme_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CodeHighlight_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CodeHighlight.scss */ "./src/components/CodeHighlight.scss");
/* harmony import */ var _CodeHighlight_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_CodeHighlight_scss__WEBPACK_IMPORTED_MODULE_4__);




 // todo: whitespace-pre-wrap
// starting with Duotone Sea from https://github.com/PrismJS/prism-themes

function CodeHighlight(_ref) {
  var code = _ref.code,
      language = _ref.language;
  var mostlyDefaultProps = Object.assign({}, prism_react_renderer__WEBPACK_IMPORTED_MODULE_2__["defaultProps"]);
  delete mostlyDefaultProps.theme; // note: using their `defaultProps` overrides any css theme. Though ironically I'm setting it back to their Duo Dark default (but plan on modifying it)

  var props = Object.assign({}, mostlyDefaultProps, {
    code: code,
    language: language
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(prism_react_renderer__WEBPACK_IMPORTED_MODULE_2__["default"], props, function (_ref2) {
    var className = _ref2.className,
        style = _ref2.style,
        tokens = _ref2.tokens,
        getLineProps = _ref2.getLineProps,
        getTokenProps = _ref2.getTokenProps;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("pre", {
      className: className + " code-highlight",
      style: style
    }, tokens.map(function (line, i) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", getLineProps({
        line: line,
        key: i
      }), _parsedLineTokens(language, line, getTokenProps));
    }));
  });
}

function _parsedLineTokens(language, line, getTokenProps) {
  var spanForToken = function spanForToken(token, key) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", getTokenProps({
      token: token,
      key: key
    }));
  };

  if (language === 'json') {
    // two columns
    var left = [];
    var right = [];
    var rightSplit = line.length;

    if (line.length > 2) {
      for (var i = 0; i < line.length; i++) {
        var token = line[i];

        if (token && token.content === ':' && token.types[0] === 'operator') {
          rightSplit = i + 1;
          break;
        }
      }
    }

    line.forEach(function (token, key) {
      (key < rightSplit ? left : right).push(spanForToken(token, key));
    });
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "line-left",
      key: "left"
    }, left), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "line-right",
      key: "right"
    }, right));
  } else {
    // unchanged from example-
    return line.map(spanForToken);
  }
}

/***/ }),

/***/ "./src/components/CodeHighlight.scss":
/*!*******************************************!*\
  !*** ./src/components/CodeHighlight.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/InfoRow.jsx":
/*!************************************!*\
  !*** ./src/components/InfoRow.jsx ***!
  \************************************/
/*! exports provided: default, IconForInfoRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfoRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconForInfoRow", function() { return IconForInfoRow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InfoRow_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfoRow.scss */ "./src/components/InfoRow.scss");
/* harmony import */ var _InfoRow_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_InfoRow_scss__WEBPACK_IMPORTED_MODULE_1__);


function InfoRow(_ref) {
  var label = _ref.label,
      skipGreyFilter = _ref.skipGreyFilter,
      className = _ref.className,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: ['info-row is-clearfix', !!skipGreyFilter ? '' : 'use-grey-filter', className || ''].join(' ').trim()
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "info-row-content"
  }, children));
}
/**
 * Used inside InfoRow, for left-column icon
 * note: grey filter handled in InfoRow.jsx, so color displayed when hovering anywhere on row
 * @param src
 * @param className
 * @returns {*}
 * @constructor
 */

function IconForInfoRow(_ref2) {
  var src = _ref2.src,
      alt = _ref2.alt,
      className = _ref2.className;
  // <label>{ label }</label>
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
    className: ['info-row-icon-holder', className || ''].join(' ').trim()
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: src,
    alt: alt
  }));
}

/***/ }),

/***/ "./src/components/InfoRow.scss":
/*!*************************************!*\
  !*** ./src/components/InfoRow.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/Page.jsx":
/*!*********************************!*\
  !*** ./src/components/Page.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_2069409925_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/static/d/2069409925.json */ "./public/static/d/2069409925.json");
var _public_static_d_2069409925_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/static/d/2069409925.json */ "./public/static/d/2069409925.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var typeface_montserrat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! typeface-montserrat */ "./node_modules/typeface-montserrat/index.css");
/* harmony import */ var typeface_montserrat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(typeface_montserrat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dot_prop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dot-prop */ "./node_modules/dot-prop/index.js");
/* harmony import */ var dot_prop__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dot_prop__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _scss_support_bulma_custom_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scss-support/_bulma-custom.scss */ "./src/scss-support/_bulma-custom.scss");
/* harmony import */ var _scss_support_bulma_custom_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scss_support_bulma_custom_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Page_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Page.scss */ "./src/components/Page.scss");
/* harmony import */ var _Page_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Page_scss__WEBPACK_IMPORTED_MODULE_7__);









var Page = function Page(_ref) {
  var children = _ref.children,
      pageName = _ref.pageName;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PageHead, {
    pageName: pageName
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "page-content"
  }, children));
};

function PageHead(_ref2) {
  var pageName = _ref2.pageName,
      bodyClass = _ref2.bodyClass;
  var bodyAttributes = {
    class: [pageName + "-page", bodyClass || ''].join(' ').trim()
  }; // site.siteMetadata set in gatsby-config.js. Only title is used really, which could be hardcoded but leaving as a graphql query for now
  // note: gatsby graphql actually replaces the query expression (the graphql`someQuery` stuff) in the AST. And can't use expression interpolation either. (If they brought out the big cannons, I wonder why they used tagged template syntax?) Seems like a misguided use of the clever stick.
  // htmlAttributes ignored in Helmet todo: maybe investigate (for setting background on html el)

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_5__["StaticQuery"], {
    query: "2069409925",
    render: function render(data) {
      var meta = dot_prop__WEBPACK_IMPORTED_MODULE_4___default.a.get(data, 'site.siteMetadata');
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, {
        bodyAttributes: bodyAttributes
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("html", {
        lang: "en"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, meta.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        property: "robots",
        content: "noarchive"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        property: "og:locale",
        content: "en_US"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        property: "og:url",
        content: meta.baseUrl
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        property: "og:title",
        content: meta.title
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "apple-touch-icon",
        sizes: "60x60",
        href: "/favicons/apple-touch-icon-60x60.png"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "apple-touch-icon",
        sizes: "76x76",
        href: "/favicons/apple-touch-icon-76x76.png"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "/favicons/apple-touch-icon-120x120.png"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "/favicons/apple-touch-icon-152x152.png"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/favicons/apple-touch-icon-180x180.png"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicons/favicon-32x32.png"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicons/favicon-16x16.png"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "manifest",
        href: "/favicons/site.webmanifest"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "mask-icon",
        href: "/favicons/safari-pinned-tab.svg",
        color: "#5bbad5"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "shortcut icon",
        href: "/favicons/favicon.ico"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "msapplication-TileColor",
        content: "#da532c"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "msapplication-config",
        content: "/favicons/browserconfig.xml"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "theme-color",
        content: "#ffffff"
      }));
    },
    data: _public_static_d_2069409925_json__WEBPACK_IMPORTED_MODULE_0__
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./src/components/Page.scss":
/*!**********************************!*\
  !*** ./src/components/Page.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/PageSection.jsx":
/*!****************************************!*\
  !*** ./src/components/PageSection.jsx ***!
  \****************************************/
/*! exports provided: TwoColumnPageSection, FullPageSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoColumnPageSection", function() { return TwoColumnPageSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullPageSection", function() { return FullPageSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PageSection_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageSection.scss */ "./src/components/PageSection.scss");
/* harmony import */ var _PageSection_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_PageSection_scss__WEBPACK_IMPORTED_MODULE_1__);



function TwoColumnPageSection(_ref) {
  var title = _ref.title,
      className = _ref.className,
      sectionNdx = _ref.sectionNdx,
      titleColContent = _ref.titleColContent,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: ['section page-section two-column-page-section', className || ''].join(' ').trim()
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column label-col"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "burn-bg has-text-centered"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "is-huge"
  }, _formatSectionNdx(sectionNdx)), title), titleColContent && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "extra-title-col-content"
  }, titleColContent)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column main-column"
  }, children)));
}

function FullPageSection(_ref2) {
  var title = _ref2.title,
      className = _ref2.className,
      sectionNdx = _ref2.sectionNdx,
      children = _ref2.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: ['section page-section full-page-section', className || ''].join(' ').trim()
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "burn-bg has-text-centered"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "is-huge"
  }, _formatSectionNdx(sectionNdx)), title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "separator-outer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, children)));
}

function _formatSectionNdx(n) {
  if (typeof n !== 'number') {
    return '';
  }

  return n > 9 ? n + "." : "0" + n + ".";
}



/***/ }),

/***/ "./src/components/PageSection.scss":
/*!*****************************************!*\
  !*** ./src/components/PageSection.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/images-inline/logos/apple-logo-solid.svg":
/*!******************************************************!*\
  !*** ./src/images-inline/logos/apple-logo-solid.svg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgZmlsbD0iI0MyMDAyMiIgd2lkdGg9IjE3MHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNzAgMTcwIiB2ZXJzaW9uPSIxLjEiIGhlaWdodD0iMTcwcHgiPgogPHBhdGggZD0ibTE1MC4zNyAxMzAuMjVjLTIuNDUgNS42Ni01LjM1IDEwLjg3LTguNzEgMTUuNjYtNC41OCA2LjUzLTguMzMgMTEuMDUtMTEuMjIgMTMuNTYtNC40OCA0LjEyLTkuMjggNi4yMy0xNC40MiA2LjM1LTMuNjkgMC04LjE0LTEuMDUtMTMuMzItMy4xOC01LjE5Ny0yLjEyLTkuOTczLTMuMTctMTQuMzQtMy4xNy00LjU4IDAtOS40OTIgMS4wNS0xNC43NDYgMy4xNy01LjI2MiAyLjEzLTkuNTAxIDMuMjQtMTIuNzQyIDMuMzUtNC45MjkgMC4yMS05Ljg0Mi0xLjk2LTE0Ljc0Ni02LjUyLTMuMTMtMi43My03LjA0NS03LjQxLTExLjczNS0xNC4wNC01LjAzMi03LjA4LTkuMTY5LTE1LjI5LTEyLjQxLTI0LjY1LTMuNDcxLTEwLjExLTUuMjExLTE5LjktNS4yMTEtMjkuMzc4IDAtMTAuODU3IDIuMzQ2LTIwLjIyMSA3LjA0NS0yOC4wNjggMy42OTMtNi4zMDMgOC42MDYtMTEuMjc1IDE0Ljc1NS0xNC45MjVzMTIuNzkzLTUuNTEgMTkuOTQ4LTUuNjI5YzMuOTE1IDAgOS4wNDkgMS4yMTEgMTUuNDI5IDMuNTkxIDYuMzYyIDIuMzg4IDEwLjQ0NyAzLjU5OSAxMi4yMzggMy41OTkgMS4zMzkgMCA1Ljg3Ny0xLjQxNiAxMy41Ny00LjIzOSA3LjI3NS0yLjYxOCAxMy40MTUtMy43MDIgMTguNDQ1LTMuMjc1IDEzLjYzIDEuMSAyMy44NyA2LjQ3MyAzMC42OCAxNi4xNTMtMTIuMTkgNy4zODYtMTguMjIgMTcuNzMxLTE4LjEgMzEuMDAyIDAuMTEgMTAuMzM3IDMuODYgMTguOTM5IDExLjIzIDI1Ljc2OSAzLjM0IDMuMTcgNy4wNyA1LjYyIDExLjIyIDcuMzYtMC45IDIuNjEtMS44NSA1LjExLTIuODYgNy41MXptLTMxLjI2LTEyMy4wMWMwIDguMTAyMS0yLjk2IDE1LjY2Ny04Ljg2IDIyLjY2OS03LjEyIDguMzI0LTE1LjczMiAxMy4xMzQtMjUuMDcxIDEyLjM3NS0wLjExOS0wLjk3Mi0wLjE4OC0xLjk5NS0wLjE4OC0zLjA3IDAtNy43NzggMy4zODYtMTYuMTAyIDkuMzk5LTIyLjkwOCAzLjAwMi0zLjQ0NiA2LjgyLTYuMzExMyAxMS40NS04LjU5NyA0LjYyLTIuMjUxNiA4Ljk5LTMuNDk2OCAxMy4xLTMuNzEgMC4xMiAxLjA4MzEgMC4xNyAyLjE2NjMgMC4xNyAzLjI0MDl6Ii8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/images-inline/logos/michigan-block-m.svg":
/*!******************************************************!*\
  !*** ./src/images-inline/logos/michigan-block-m.svg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjEyLjM5IiB2aWV3Qm94PSIwIDAgMjk0LjMyODEyIDIxMi4zOTA2MiIgd2lkdGg9IjI5NC4zMyI+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMS4yNSAwIDAgLTEuMjUgLTEyMy44NyA3ODYuMzMpIj48ZyB0cmFuc2Zvcm09Im1hdHJpeCgyLjUgMCAwIDIuNSAtMzIzLjEyIC04MTQuMzUpIj48cGF0aCBkPSJtMjM0LjQzIDU3Ni45Ny0xOC40Mi0yNS40NjctMTguMzg5IDI1LjQ2N2gtMjguMzY4di0yMC4wMTFoNy4wMjd2LTI3LjMwNGgtNy4wMjd2LTIwLjAxaDM2LjE3M3YyMC4wMWgtNy40OTV2MTUuNjdsMTcuOTgyLTI0LjcyNiAxOC4yMDcgMjQuNzQ3di0xNS42OTFoLTcuNDk1di0yMC4wMWgzNi4xNzN2MjAuMDFoLTcuMDI3djI3LjMwNGg3LjAyN3YyMC4wMTFoLTI4LjM2OHoiIGZpbGw9IiMwMDI3NGMiLz48cGF0aCBkPSJtMjYxLjI5IDU1OC40N3YxNi45OThoLTI2LjA5MmwtMTkuMTkxLTI2LjUzMi0xOS4xNTcgMjYuNTMyaC0yNi4wOTJ2LTE2Ljk5OGg3LjAyN3YtMzAuMzE3aC03LjAyN3YtMTYuOTk4aDMzLjE2MXYxNi45OThoLTcuNDk2djIxLjgwN2wxOS40OTUtMjYuODA2IDE5LjcwNyAyNi43ODV2LTIxLjc4NmgtNy40OTV2LTE2Ljk5OGgzMy4xNnYxNi45OThoLTcuMDI3djMwLjMxN2g3LjAyNyIgZmlsbD0iI2Y1YzMwMCIvPjwvZz48L2c+PC9zdmc+Cg=="

/***/ }),

/***/ "./src/images-inline/logos/plurchase-logo-small.png":
/*!**********************************************************!*\
  !*** ./src/images-inline/logos/plurchase-logo-small.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALMAAADpCAYAAABvAQZiAAAAK3RFWHRDcmVhdGlvbiBUaW1lAFN1biA3IEZlYiAyMDEwIDE4OjUzOjUxIC0wODAw5uUF1wAAAAd0SU1FB9oCCAQsBY5X2ZsAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAEZ0FNQQAAsY8L/GEFAAAU2UlEQVR42u2da4wk1XXHb82CIzuPXclxFAz2NoksPkU7SHaUh6W9jmRIDIZd2wEnBjOL7MQRhp1lgV32wfayb2DZWR6yE9vQi3FCDPbOGjB+KOYiOUocf3D7UxT7A4US5UsUZZCs5BNbOae7aqa6px9VXfeec6vu+a3u9E5Pd9U9df99+txzHxWpBvDw7V/dDA8tKPNQNg392UBZufepW3/KXU/BLRF3BWYFBHwbPGgo29R6AY/DpKWLjyDwN7ntEOxRKzGDgDfCw2Jaigp4ErEaFLd47xpTGzGDkA8peyKehFHivWuJ92IGEW+Bh47qx8McxEq8dy3wWsxpXLyk3Hvjshgl3ts7vBVzKuQOdz0KEivx3ux4KeaaCXkcRon3JsU7MYOQt6q+CJpGrMR7O8UrMaept1j5FyO7wijx3tbwTcznVX8QJFRiJd57ZrwRc4PDi6oYJd67ED6J+XXVn18hTCZW4r1H4oWYxStXxijx3t6IOfRY2TaxCtB7s4s5zWCscNcjAIxquPf2Qcw3wsMydz0CJFYN896XcFdA9eckC/S0oCxkv4BTwQejauy9ffDMryoRtK/Eqkbe2wcxJ9x1EEphlKfem1XMkpJrBLHyxHtzx8xcE+4Fe7SUJ7E3t2eW/HIYxIrAe3OLWYaww8Uoy96bTczpXhcx1/kF74hVf7xhGYT92iwH4BSzDJYI44hVf+1np4zHnmOssGY8t+A3LdUXczd1eoXgFDNHJgPngHQZbRbK0YKyjImCdA7PRELzzEvwtXW16i/LwvO3leS56wBmvOJ0D5WxsMTMjIMlelznIq2TTsuoDRgFfvCbVY9L7XGJeafqx0SkwEUobG/qBXSuiLj9YKygucTMMVjSTUOMWeuM4kaPrdPSIq6/sAYKeh7a8438k1zD2RydP1PlzaknwHIOf0/z5FqthSUyNE8HfktiWnfAOZF7ZsbBkm0gyAsO7cLetlaDAhfc0oY2PZz9wiFmrsGSTZTTFVNx58MSzWBz0xkINzjCDM1wzi71vNv0fK+lpec90oxJm+kaNBEMN9pQduAvHHnm2sXLtkjTgrJ41y4L2YAKh5g1wzl9GvXjsL/pLOAPUjGnX7McGKbzDtuP6T3JV9tnAX9Qe2aOECMezkcyIhkON8xjloxazJrBUMNwTp/sD4X5EDyzYTjnODR3BRoMnZhzd1GlxjCc0yf7Q0FTemaW+csexcuauwJNh1LMmsE+w3BOn+wPiqZ7ZsNwznFo7go0HfHMBKQjVC3uejQdEjEzDZaseLTRn+auQAjQTDRKkrBDjCTR3FUIgC5VmKEZjDMM5/TJ/tCIqcTM4Zm9mFz08I5nsnnNgluM8zDjoR3nNicqaVFbdt/Tt820xZNtwHbNXYcQgPb+KYVnDjteFq9MgcEf7juASeDxMo/9oWHwB0E2I/BMhoQZFPT6RxRhhqa27L7Oghfx8kMLHa7FCKFh8IdTMTM1pmE45zg0dwUCIAbn1Vus7DTMSAJOyaX2a+46BIDJ/uM6zNCcxnkAh/2hseq83HYAOYaxo8iQn3MEp257egvYz12NEDDZf5x5ZmhMjpUV3T1p/OQBmrsCIbDn3I7VyWQuw4zAU3IiZgJM/hdnYQZT58dUPkK97Q8Nk/+laZ7Zi0zGSYyXZbMXCgba26WYNbFh8d5zO2TxaliY/C9OwoyTn35qK0NP3lQ+gi14FiOERrz3mdsHOvtOxMw0WGIYzjnOfs1dhwAww0+4CjO0D8ZxcOLTT8lmLzSs6x+5EjO1Z47vf+Z2iZfDwgw/YV3MTJ7JiyxGiuauQAiA81q38t6FZw46XlYiZgrMqCftdwB5ltWbykewwIlbv7IR7G9x1yMAzKgnrYs5oV9ZsrLvq5/xYrMXWbxKxsiw0kWYoYkNM8Tn88n2UDGjnrQq5uO3fllWlgiuieGbeOTMSNueOdjOH3yQZbMXGsy4P9iNmRmW1e971o94WbYUIGNsGrbuntkQn28SmrsCgWDG/cGamI/f8mWOwRJT+Qj2kBCDgEnfxDY9c7DxcormrkAAmEl/tBYzc+RY9z/7WS82ezl2y5e2JkoWrxJgJv2xzp7ZVD6CPTR3BQJh4hwce9kM+mFsQ3w+n2wPkynbSFjxzMc+9TccgyUyUy4sYggrJ24jYcUzc6wsiTzxzEfhgyzRMglm2gtsxcya2LDu/q/9hS+bvUhKjoap38S2xCydP8E1ZtoLKocZRz/115sV/T1LphpGh3T+KDjwtb+cOm3BhmcOdrAEPsiy2QsNpsiLbIhZExsWw6fUl3iZ2vZQMUVeVEfPXMgwIjR3BQKhUBq2jp7ZEJ9vEpLJoMEUeVElMUPMGOzKkn7HVzZ7IaBwWFkpm5HQ76kWH/zbz3mx2UsiQ9hUmKIvrBpmaF8NI4Da9lApPG2hqpipPbPMxwgPU/SFM4v5yJ9/MdiVJUy2BwmElYXXeFbxzOSbvZQxzDGSxaDBlHnxzB1Ahg5QKcNcIp0/MkyZF9fJM5cyzDGauwKBUKqPVEXMmtgwQ3y+kTz4Z1+QzV7oMGVePJOYoUHJB0se+Lu/8iVe1twVCIQY2rzUHJyZYmaGnT4N8fkm2a656xAIpuwbZusABtz5kztJkVF6TGHWmDlYz6wkzKDClH1DVPYNhz/5JA4YxJRWHXrujtL1dAHYjn0Fw12PEJilzWfxzOKVBdeYWd5UOmZmuGHjTIa5QG5WSYaZ5U3imcuhuSsQCDNNKCufzaDeVDvyY6Zc+2aIl2W3FxoiAs/ca1Bauu3n7pDFq2ERz9rmJT1zuIMlDLaHipn1jWVjZl0XwxxAbXuozBxWlhVzkJ65ffMTstkLHWbWNxYOMw7d/MTmhHZ1Rffw33/ei3hZUnJ0QJvPPKGseMxMPyfBiyxGarvmrkIgmCpvLhNm6DoZZhlq20PFVHlzGTEHGS8fuulxnIsi8TINlb6NffXM8eGv3+nFZi/EdoeOqfLmQmIG70Q9WFLJKMto7goEAjqwSh3+op45yBAjRXNXIBBM1QMUymYwLBXyIpPxwE2PbU7o7woQKpXb3EfPvPLg1++SxavhYaoeYKqY0Tsp2sGSykZZROZjEGHDgRXxzBIvC64xNg4yNWam3ooqUpNvKUvFwT89u5Fh/+lQMTYO4ptnXnnweYmXA8RKh7+ImHXdjLIEpd2hY2wcZKKY4atWBksE18RHnt9pZXbkNM8ccudP4mUajK0DTewAUs/jPfr8ztcozzeOA/CNJGtXybAWWk7OZtD25g3huSYj85cpMbYONFbMBz+xFOxgSSTxMhlHXli0lr2aFDOHHC9r7goEgrF5sLGemXpyUaQiL9JyBz5xBuJliZiJMDYPNkHMpJ65e/SFRVm8Gh5WHdikMEMTGmUIzzUNScnRYWwebKRn3v/xM9T7qlk1qhLUe+mFS3zsG7usfhuPFHMUaOfvwMfPyGYvdBjbBxwpZuK4sWv7EzorEi+TYr3DPy5mDnOwRMRMibF9wHVihniZerDEi5RciuauQCjAt7H1qb7rwwz6CemG+Hwj2f+xR7eA7RIv02BcHHSdmInjxvj4N+/2YrMX4rx66BgXBx0VM0u8LLjGSWg5Ssya0ChDeK5pUNodOsbFQQfEvO9jjwa5sgTspu70hgyGlk5SscOemXTxqi/xshKvTIlxdeCBDiDxtgLOjCpNkmBdFqHotAMsWQ13OEvFDmczguz8HT+/G78hzqZF3b/9NA5r61wRcdvDuDrw6s22oQGpb/A+f+L8bl/2yJhIem10rrS461RXoM1L3+C9KHnPTBov10XIyIm+5z6Xlry453OPwnSMy4Ovipl40MCpUa4ZIe6NKvXaiYh7Ek6nLqx5ZtrOn0/zMSoD4sZU04W09Ni7/TSmOXWvyGrvDOPy4PkwQzfFKB84eX437gGC5TD+vnfbI5m4s9AkxE6lUyfWC8bhQm9xfaI8J5fvcdYJqAvpNdcqnIxJDO1+pcsTZJ5ZExplCM/lLdCw2AHG0ksHgribnjFx7ix7YpbOHz8g7oFOZU7c8w3pVBrXJxDP7CnD4t6z7ZHVjImqp7ide+Zoz40P40VaobLo1IV7g4+XbZCKu9+Z7GdLNHedJkHR7pcQX4RGpeQ4ObV8D6YDBzIm4JjW0oF9ofvSqTQUJ7lESbzcGMD7DYvbl4wJiROj9syG8FzBA+IeyJik4s7y3FhaRFUxFCcpdIfWuhkljCYn7n6nsh+WGIJTk3hmnJwfU5wIDYKL6cVmL8IqFGFHDO1OsggDxbxMcSIlXtlHNME5yDr9c/CpuZAkyQoU5bhIJsMzcGURQbsbKnuyNYBLBOciy2UL07nvhoeyPLVryJxY1gFEMeMaOJcx1DJcQBS0ycpD37qvNhP0G4imOAm0MdkdxC5JT/gmCK2t3Hto/LBsS4tKxY2fXKP64vbi1mmBoAnOYSgNGhhiBHG9rvhnaxkl4nYOtPWryr2gl6ANd1HZNJxnXoCQ3VCdfAw6LereG07hw6rnxvLwt/ZIes8CRDdgMpQ2rZv8AQI6o/rxs69k4u49grh92UimNkAbUw2WtCjbZ9QIYFv1Y9oWVSVKMq9yvXBomFgNem4R93Q0wTli6rYYOS2P8JPrgoGMCVxQyZgMAe1LES8vw7XfTmnX2Dmm93z01CHV99J1JxN3Lyx55MU9wXcqoW0p7iW2CNf6LKVdEydMg9EUn2AOTFZCEze0KdW3rqa+ttNmzUHsnMTKn0nettBpgcY9iQ9G5bImj7y4t8EZE5rbfMA1JHcSU5eyQGPXOX6elXw6sAsN05hOJbTneZUOWjkEHcKHqG0rtC4LLkBT4udZidVAaFJfcUNb/o9y/027BNeIbLAko/Aiw900n+i6EKuc9z794t5aZEygDak2+9kG1+RC9cOUo8xKkwWV9BqvbkvcXdBKS+/Dvfv6k/l0YPf0S/TxYiGo7gse8SxcLrX8GxoNP9lGNa9D6AKTFV/EDe1H8e0ag71Ot+EaR+m9DOCChNghtIFRuawJNDh5xgTajmIi2TLYRjpYkjHTxhxwUW6D76wOR4UbxMAEqtMv3e9U3LuvP0F1Z4RFsIV0sCRj5l1m4OI8rTCOFmwRq0FxW82YQHuBA1IdAjs01J0lrKq0ZdLu605IhsMdscqHJS/fXyljAm1F4nygnmzbr1XdN2NB9ec/S4bDPi2VE9/u644PTKA6/fK+kuJu3vzlYSp/iuAi48LIWEmGg5qBJWcg7rFf7dBGVPHyEtSDfLAko/KORlD5N+Fi4Y1pjBJBU4LXWqdF3X3dcXwwudJ9FNoGnyTcf9twXhBr8Q1cTEnZ+UfmuVuKpm/Tgg8Q21C/1WAdBE3VYxb8IwYhswyWZMxVP8QaYMw5+E5bxO81KcEV9h2rNtg+4D/9/B9+9Hvv+6OWkgxHaHzxn3/+gx9xVsCqZ8448+39O5SEG6FhuCvgNMG96yPHmrrsShgkBgfGGi8jTjxzDuxBs8dSgnO82GfFqZjh04p5Tq1E0E1mAdqZfCL+KEjG0SHc2Jio3v7MLW6DBXtEKkIhn+Oux1p9iFj8yFGZ2N8ccCh929K3D3ix6CDDdcy8ChiOE2O0kk3H6w7eNqTlm5AR8ul64qFrCzqhBRCxF/HxKFjmnvYEnYiga0PUGzNYBCF7vTkO20TqxT85KvM4/McoFPErB2qxlQLrTdlF0N4Sq76IvQ0pRsEqZkQE7RUxlDaI2Jt0WxnYxYxUEfTF5OLI5+eiiYmalfR8Rq1lV7LJ7j5vtO6KWNVYxBleiBkBQX8JHj6D/0/U+u2D8QaJAxWPonXPDf99mHdd9k51ees31ft+57fMB7fPj93YD+qyE+rQVs3voMaRimov4gxvxIyAiAyIaCtc4FVBjxTxxWSqmIffs/mqK9TdZ3cUtveVzj++/q8/+VnrjX/7D+7L4oIuXOKls68cbISIM7wSM7Lzj4/8O9TqikzQPcHmNFtGxBmtq96jfvdDVyvwxqXs/eH5bvIvr/5EvfGzxgjaQGmf/c5B7wY8bOCdmBEQ9C+gZr+8KuiSnhjB92Hc/I5febv6w2s/oK7/7NaZbP3Bcz9Ovv/Ca+p/f/F/3JelCh0oSyDiWqTYZsVLMSO7rjv21sWLF+fygi5CFp6gYRGI+QN6Xt2y96OV7Hz25IvJj03tJv5hxxbvuNsBEdd2P+kyVN5qwBVnXt6/4e7rjydvvfUWzs7qzSKZJmgUcjT0+7uhw1cVPMaoTqmndOF6oRduVDxcBLKJRrPw6Ev7og0bNqQihX9zox1skv6L1OAaS8xevO2XLq1cDzwGHstzOlD0Y9954OoQhYx4G2bkyXvoLOTIe8pBb7zGb7z719XBp++wYuORHU8m//Wf/819KYaJFYo4UksgYq/nTVDgbZiRBz30qJAjU2lewPm0HvLD890tH9w+37SOD07D7Dz23QdqNdzsGq/DjDzDIcfc3NxqODFMlP679G2XqjJCRuFz2zmBWPVvktQCEW8XIa+nFmFGnlEhBzLcQYvWTJuHhq/sme+69kGuHqB44YLUIszIMxxyrKXixn4uca5FbcKMd/zq29WVV723N9ATRdHSNbf+/i74xth80+duwP2VW5OG4UOndp45IxP0xYujJxrlhI751tbj3z00cwfpzmsPO78XCIr3itZl6vIrL8s/baB0QMBBZifKUjvPnJF56GSMmNVazhknC7WhzLRv8F3XHsYberZc2LDpnb8GIn5vr2D6r+xwuzBI7S8eeM2itzdYAO9cysPBsV3NtY7/4MPv3/Se3758kwjYHrXJZowDBFp0X7vOnX0vWwh47c6Cxy1KNod6G9T5ShDyEuFlCoLGeIUSHtpAWQJBXRhznBtVf7spbalqy1nJx+3QqdsIXjn4gQ6bNEbMSAlBI/l7giBa9bfhtTEhH4/bUX0BBzHJxwcaJWbkzmvaZxKejfziKM0JP/69dm1SgU2icWJGPn9Nm2qRLHr3XgjxxPfaMqjBTCPFjICgMfbtKDfr+HoeWATsF40VMwKCxvvfofBs3JJitSMHIpaOm4c0WswZIOpZb7WLHTlMoYmAa0AQYkYw7EiSpKMmhx0rURQZJR64lgQjZuSODx/CWyNnOWQMPdDzrqbonvz+4UauWhYEoWb8P+FJ+pqH4s/vAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/images-inline/logos/y-combinator.svg":
/*!**************************************************!*\
  !*** ./src/images-inline/logos/y-combinator.svg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwMCIgaGVpZ2h0PSIyNTAwIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij48cGF0aCBmaWxsPSIjRkI2NTFFIiBkPSJNMCAwaDI1NnYyNTZIMHoiLz48cGF0aCBkPSJNMTE5LjM3NCAxNDQuNzQ2TDc1LjQzMyA2Mi40MzJoMjAuMDgxbDI1Ljg0OCA1Mi4wOTJjLjM5OC45MjguODYyIDEuODg5IDEuMzkyIDIuODgzLjUzLjk5NC45OTQgMi4wMjIgMS4zOTEgMy4wODIuMjY2LjM5OC40NjQuNzYyLjU5NyAxLjA5NC4xMzMuMzMuMjY1LjYzLjM5OC44OTRhNjUuNjQzIDY1LjY0MyAwIDAgMSAxLjc5IDMuODc3Yy41MyAxLjI2Ljk5MyAyLjQyIDEuMzkgMy40OCAxLjA2MS0yLjI1NCAyLjIyMS00LjY3MyAzLjQ4LTcuMjU3IDEuMjYtMi41ODUgMi41NTItNS4yNyAzLjg3Ny04LjA1M2wyNi4yNDYtNTIuMDkyaDE4LjY5bC00NC4zNCA4My4zMDh2NTMuMDg3aC0xNi45di01NC4wODF6IiBmaWxsPSIjRkZGIi8+PC9zdmc+"

/***/ }),

/***/ "./src/images-inline/misc/bookmarks.icomoon-modified.component.svg":
/*!*************************************************************************!*\
  !*** ./src/images-inline/misc/bookmarks.icomoon-modified.component.svg ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function BookmarksIcomoonModifiedComponent (props) {
    return React.createElement("svg",props,[React.createElement("title",{"key":0},"bookmarks"),React.createElement("path",{"d":"M8 4v28l10-10 10 10v-28zM24 0h-20v28l2-2v-24h18z","key":1})]);
}

BookmarksIcomoonModifiedComponent.defaultProps = {"version":"1.1","viewBox":"0 0 32 32"};

module.exports = BookmarksIcomoonModifiedComponent;

BookmarksIcomoonModifiedComponent.default = BookmarksIcomoonModifiedComponent;


/***/ }),

/***/ "./src/images-inline/misc/github-modified.component.svg":
/*!**************************************************************!*\
  !*** ./src/images-inline/misc/github-modified.component.svg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function GithubModifiedComponent (props) {
    return React.createElement("svg",props,[React.createElement("title",{"key":0},"github"),React.createElement("path",{"d":"M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z","key":1})]);
}

GithubModifiedComponent.defaultProps = {"version":"1.1","viewBox":"0 0 32 32"};

module.exports = GithubModifiedComponent;

GithubModifiedComponent.default = GithubModifiedComponent;


/***/ }),

/***/ "./src/images-inline/misc/toolbox.component.svg":
/*!******************************************************!*\
  !*** ./src/images-inline/misc/toolbox.component.svg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function ToolboxComponent (props) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"m200 24c0-4.417969 3.582031-8 8-8h80c4.417969 0 8 3.582031 8 8v24h16v-24c0-13.253906-10.746094-24-24-24h-80c-13.253906 0-24 10.746094-24 24v24h16zm0 0","key":0}),React.createElement("path",{"d":"m352 224h64v16h-64zm0 0","key":1}),React.createElement("path",{"d":"m396.6875 64h-249.375l42.34375 42.34375c1.5 1.5 2.34375 3.535156 2.34375 5.65625v32h104v-8c0-13.253906 10.746094-24 24-24s24 10.746094 24 24v8h104v-28.6875zm0 0","key":2}),React.createElement("path",{"d":"m216 32h64v16h-64zm0 0","key":3}),React.createElement("path",{"d":"m51.3125 64-51.3125 51.3125v156.6875h176v-156.6875l-51.3125-51.3125zm-19.3125 152h-16v-64h16zm0-80h-16v-16h16zm0 0","key":4}),React.createElement("path",{"d":"m312 168c0 4.417969 3.582031 8 8 8s8-3.582031 8-8v-8h-16zm0 0","key":5}),React.createElement("path",{"d":"m328 136c0-4.417969-3.582031-8-8-8s-8 3.582031-8 8v8h16zm0 0","key":6}),React.createElement("path",{"d":"m344 168c0 13.253906-10.746094 24-24 24s-24-10.746094-24-24v-8h-104v112h256v-112h-104zm88 48v32c0 4.417969-3.582031 8-8 8h-80c-4.417969 0-8-3.582031-8-8v-32c0-4.417969 3.582031-8 8-8h80c4.417969 0 8 3.582031 8 8zm0 0","key":7})]);
}

ToolboxComponent.defaultProps = {"viewBox":"0 -88 448 448"};

module.exports = ToolboxComponent;

ToolboxComponent.default = ToolboxComponent;


/***/ }),

/***/ "./src/images-inline/misc/user-plus.icomoon-modified.component.svg":
/*!*************************************************************************!*\
  !*** ./src/images-inline/misc/user-plus.icomoon-modified.component.svg ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function UserPlusIcomoonModifiedComponent (props) {
    return React.createElement("svg",props,[React.createElement("title",{"key":0},"user-plus"),React.createElement("path",{"d":"M12 23c0-4.726 2.996-8.765 7.189-10.319 0.509-1.142 0.811-2.411 0.811-3.681 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h12.416c-0.271-0.954-0.416-1.96-0.416-3z","key":1}),React.createElement("path",{"d":"M23 14c-4.971 0-9 4.029-9 9s4.029 9 9 9c4.971 0 9-4.029 9-9s-4.029-9-9-9zM28 24h-4v4h-2v-4h-4v-2h4v-4h2v4h4v2z","key":2})]);
}

UserPlusIcomoonModifiedComponent.defaultProps = {"version":"1.1","viewBox":"0 0 32 32"};

module.exports = UserPlusIcomoonModifiedComponent;

UserPlusIcomoonModifiedComponent.default = UserPlusIcomoonModifiedComponent;


/***/ }),

/***/ "./src/pages-support/bio/CodeSampleSection.jsx":
/*!*****************************************************!*\
  !*** ./src/pages-support/bio/CodeSampleSection.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CurrentWorkSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _badges__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./badges */ "./src/pages-support/bio/badges.jsx");
/* harmony import */ var _components_CodeHighlight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/CodeHighlight */ "./src/components/CodeHighlight.jsx");
/* harmony import */ var _CodeSampleSection_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CodeSampleSection.scss */ "./src/pages-support/bio/CodeSampleSection.scss");
/* harmony import */ var _CodeSampleSection_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_CodeSampleSection_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_PageSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/PageSection */ "./src/components/PageSection.jsx");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Card */ "./src/components/Card.jsx");
/* harmony import */ var _images_inline_misc_github_modified_component_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images-inline/misc/github-modified.component.svg */ "./src/images-inline/misc/github-modified.component.svg");
/* harmony import */ var _images_inline_misc_github_modified_component_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_inline_misc_github_modified_component_svg__WEBPACK_IMPORTED_MODULE_6__);







function CurrentWorkSection(_ref) {
  var sectionNdx = _ref.sectionNdx;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PageSection__WEBPACK_IMPORTED_MODULE_4__["TwoColumnPageSection"], {
    title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "is-hidden-mobile"
    }, "recent "), "code sample"),
    className: "code-sample-section",
    sectionNdx: sectionNdx
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "@wranggle/rpc"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_badges__WEBPACK_IMPORTED_MODULE_1__["TechBadge"], {
    text: _badges__WEBPACK_IMPORTED_MODULE_1__["BadgeText"].ExpertJs
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "code-sample-section"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CodeHighlight__WEBPACK_IMPORTED_MODULE_2__["default"], {
    code: JSON.stringify({
      overview: 'Help various JavaScript windows and processes interact with each other seamlessly',
      purpose: 'When authoring an automation in Wranggle Studio, up to six different types of windows / processes need to interact with each other, usually over multi-hop relays. ' + '@wranggle/rpc makes it easy to keep such code clean and graceful'
    }, null, 2),
    language: "json"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "button is-primary is-outlined is-fullwidth",
    href: "https://github.com/wranggle/rpc/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "is-hidden-print"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_images_inline_misc_github_modified_component_svg__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: "github-icon"
  }), " View on GitHub"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "is-hidden is-print-visible"
  }, "github.com/wranggle/rpc")))));
}

/***/ }),

/***/ "./src/pages-support/bio/CodeSampleSection.scss":
/*!******************************************************!*\
  !*** ./src/pages-support/bio/CodeSampleSection.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/pages-support/bio/ConsultingSection.jsx":
/*!*****************************************************!*\
  !*** ./src/pages-support/bio/ConsultingSection.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConsultingSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PageSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/PageSection */ "./src/components/PageSection.jsx");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Card */ "./src/components/Card.jsx");
/* harmony import */ var _components_InfoRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/InfoRow */ "./src/components/InfoRow.jsx");
/* harmony import */ var _images_inline_misc_bookmarks_icomoon_modified_component_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images-inline/misc/bookmarks.icomoon-modified.component.svg */ "./src/images-inline/misc/bookmarks.icomoon-modified.component.svg");
/* harmony import */ var _images_inline_misc_bookmarks_icomoon_modified_component_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_inline_misc_bookmarks_icomoon_modified_component_svg__WEBPACK_IMPORTED_MODULE_4__);





function ConsultingSection(_ref) {
  var sectionNdx = _ref.sectionNdx;
  // leap-motion.png
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PageSection__WEBPACK_IMPORTED_MODULE_1__["TwoColumnPageSection"], {
    title: "consulting",
    className: "consulting-section",
    sectionNdx: sectionNdx
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "subtitle"
  }, "Between times of funding for my startups, I've done consulting work:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_InfoRow__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_InfoRow__WEBPACK_IMPORTED_MODULE_3__["IconForInfoRow"], {
      src: "/images/logos/Leap_Motion_logo-light.svg",
      alt: "Leap Motion"
    })
  }, "Interviewed and selected Leap Motion's initial programmers;", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Rescued critical coding projects in the company's early years (NW.js desktop app and Rails back-end projects)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_InfoRow__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_InfoRow__WEBPACK_IMPORTED_MODULE_3__["IconForInfoRow"], {
      src: "/images/logos/abbott-small.png",
      alt: "Abbott Laboratories"
    })
  }, "Provided engineering management for multiple Abbott Laboratories intranet web projects."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_InfoRow__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
      className: "inline-svg-holder"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_images_inline_misc_bookmarks_icomoon_modified_component_svg__WEBPACK_IMPORTED_MODULE_4___default.a, null))
  }, "Completed engineering management, coding, and product planning projects for a variety of software companies.")));
}

/***/ }),

/***/ "./src/pages-support/bio/ContactSection.jsx":
/*!**************************************************!*\
  !*** ./src/pages-support/bio/ContactSection.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContactSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PageSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/PageSection */ "./src/components/PageSection.jsx");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Card */ "./src/components/Card.jsx");
/* harmony import */ var _components_CodeHighlight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/CodeHighlight */ "./src/components/CodeHighlight.jsx");
/* harmony import */ var _ContactSection_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ContactSection.scss */ "./src/pages-support/bio/ContactSection.scss");
/* harmony import */ var _ContactSection_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ContactSection_scss__WEBPACK_IMPORTED_MODULE_4__);



 // import emailIcon from '../../images-inline/icomoon/SVG/envelop.svg';


function ContactSection(_ref) {
  var sectionNdx = _ref.sectionNdx;
  // contact + availability
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PageSection__WEBPACK_IMPORTED_MODULE_1__["TwoColumnPageSection"], {
    title: "in closing",
    className: "contact-section",
    sectionNdx: sectionNdx
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "subtitle"
  }, "My location and email:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CodeHighlight__WEBPACK_IMPORTED_MODULE_3__["default"], {
    language: "json",
    code: JSON.stringify({
      "current location": 'San Francisco, but thinking to move',
      remote: '50% very nice; 100% ok'
    }, null, 2)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "button is-primary is-outlined is-fullwidth",
    href: "mailto:jeff.ferber@gmail.com?subject=Saw your bio"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "is-hidden-print"
  }, "Send Jeff an email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "is-hidden is-print-visible"
  }, "jeff.ferber@gmail.com"))));
}

/***/ }),

/***/ "./src/pages-support/bio/ContactSection.scss":
/*!***************************************************!*\
  !*** ./src/pages-support/bio/ContactSection.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/pages-support/bio/CurrentWorkSection.jsx":
/*!******************************************************!*\
  !*** ./src/pages-support/bio/CurrentWorkSection.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CurrentWorkSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PageSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/PageSection */ "./src/components/PageSection.jsx");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Card */ "./src/components/Card.jsx");
/* harmony import */ var _components_CodeHighlight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/CodeHighlight */ "./src/components/CodeHighlight.jsx");
/* harmony import */ var _CurrentWorkSection_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CurrentWorkSection.scss */ "./src/pages-support/bio/CurrentWorkSection.scss");
/* harmony import */ var _CurrentWorkSection_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_CurrentWorkSection_scss__WEBPACK_IMPORTED_MODULE_4__);





function CurrentWorkSection(_ref) {
  var sectionNdx = _ref.sectionNdx;
  // note: may use video auto-start link, eg: https://wranggle.com/?video=2
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PageSection__WEBPACK_IMPORTED_MODULE_1__["TwoColumnPageSection"], {
    title: "current",
    className: "current-work-section",
    sectionNdx: sectionNdx
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Wranggle Studio"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "has-text-info"
  }, "As time permits, I'm building an app that lets non-programmers automate the browser:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CodeHighlight__WEBPACK_IMPORTED_MODULE_3__["default"], {
    code: JSON.stringify({
      overview: 'Tool to create partial, human-attended browser automations',
      description: "One person creates a Robotic Process Automation (RPA) script and other people in their department use it to zip through repetitive tasks",
      tech: 'Electron; browser extension APIs; TypeScript & JavaScript; Node.js; React; Blueprint.js; many others'
    }, null, 2),
    language: "json"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "button is-primary is-outlined is-fullwidth",
    href: "https://wranggle.com/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "is-hidden-print"
  }, "Watch Wranggle Overview Videos"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "is-hidden is-print-visible"
  }, "See videos on wranggle.com"))));
}

/***/ }),

/***/ "./src/pages-support/bio/CurrentWorkSection.scss":
/*!*******************************************************!*\
  !*** ./src/pages-support/bio/CurrentWorkSection.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/pages-support/bio/EarlyCareerSection.jsx":
/*!******************************************************!*\
  !*** ./src/pages-support/bio/EarlyCareerSection.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EarlyCareerSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PageSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/PageSection */ "./src/components/PageSection.jsx");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Card */ "./src/components/Card.jsx");
/* harmony import */ var _images_inline_logos_michigan_block_m_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images-inline/logos/michigan-block-m.svg */ "./src/images-inline/logos/michigan-block-m.svg");
/* harmony import */ var _images_inline_logos_michigan_block_m_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_inline_logos_michigan_block_m_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_inline_logos_apple_logo_solid_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images-inline/logos/apple-logo-solid.svg */ "./src/images-inline/logos/apple-logo-solid.svg");
/* harmony import */ var _images_inline_logos_apple_logo_solid_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_inline_logos_apple_logo_solid_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _EarlyCareerSection_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EarlyCareerSection.scss */ "./src/pages-support/bio/EarlyCareerSection.scss");
/* harmony import */ var _EarlyCareerSection_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_EarlyCareerSection_scss__WEBPACK_IMPORTED_MODULE_5__);






function EarlyCareerSection(_ref) {
  var sectionNdx = _ref.sectionNdx;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PageSection__WEBPACK_IMPORTED_MODULE_1__["FullPageSection"], {
    title: "early career highlights",
    className: "early-career-section",
    sectionNdx: sectionNdx
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns is-multiline is-variable is-3 accomplishments"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccomplishmentMiniCard, {
    iconSrc: "/images/logos/eds.png",
    iconAlt: "EDS",
    accomplishment: "Initiative"
  }, "On my own initiative at EDS, I integrated my division's core electric utility modeling software with Office, permitting a breakout of task automation."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccomplishmentMiniCard, {
    accomplishment: "Product Planning",
    iconSrc: _images_inline_logos_apple_logo_solid_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    iconAlt: "Apple"
  }, "Gained a reputation for excellence at software product planning during my 4 years at Apple. Was assigned key greenfield features that successfully transitioned .Mac to a subscription service."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccomplishmentMiniCard, {
    accomplishment: "Communication",
    iconSrc: _images_inline_logos_apple_logo_solid_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    iconAlt: "Apple"
  }, "After successfully leading large launch teams as a Product Manager, I was frequently asked to help on product launches for other groups (iPhoto, iTunes, OSX.)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccomplishmentMiniCard, {
    className: "adept-holder",
    iconSrc: "/images/logos/Adept_Logo.svg",
    iconAlt: "Adept Technology",
    accomplishment: "Communication"
  }, "When I assisted Sales with large accounts at Adept Technology, I had the highest sales-to-demo ratio of any engineer in the division."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccomplishmentMiniCard, {
    accomplishment: "Communication",
    iconSrc: "/images/logos/node-summit.png",
    iconAlt: "Node.js Summit"
  }, "Presented my streaming reverse web proxy on the main stage of the 2012 Node.js Summit."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccomplishmentMiniCard, {
    accomplishment: "Initiative",
    className: "adept-holder",
    iconSrc: "/images/logos/Adept_Logo.svg",
    iconAlt: "Adept Technology"
  }, "On my own time and initiative, I wrote an algorithm for Adept's Silma-division flagship product that became a key product feature and a centerpiece in all subsequent product demos."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccomplishmentMiniCard, {
    accomplishment: "Education",
    className: "umich-holder",
    iconSrc: _images_inline_logos_michigan_block_m_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    iconAlt: "University of Michigan"
  }, "University of Michigan, Ann Arbor: B.S.E. (cum laude) and M.B.A. (with Honors)")));
}

function AccomplishmentMiniCard(_ref2) {
  var accomplishment = _ref2.accomplishment,
      iconSrc = _ref2.iconSrc,
      iconAlt = _ref2.iconAlt,
      className = _ref2.className,
      children = _ref2.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: [className || '', 'column is-full-mobile is-half-tablet is-one-third-desktop is-one-quarter-widescreen'].join(' ').trim()
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_2__["MiniCard"], {
    title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "\u2605 ", accomplishment, " \u2605"),
    iconSrc: iconSrc,
    iconAlt: iconAlt
  }, children));
}

/***/ }),

/***/ "./src/pages-support/bio/EarlyCareerSection.scss":
/*!*******************************************************!*\
  !*** ./src/pages-support/bio/EarlyCareerSection.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/pages-support/bio/FounderSection.jsx":
/*!**************************************************!*\
  !*** ./src/pages-support/bio/FounderSection.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FounderSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PageSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/PageSection */ "./src/components/PageSection.jsx");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Card */ "./src/components/Card.jsx");
/* harmony import */ var _components_InfoRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/InfoRow */ "./src/components/InfoRow.jsx");
/* harmony import */ var _images_inline_logos_plurchase_logo_small_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images-inline/logos/plurchase-logo-small.png */ "./src/images-inline/logos/plurchase-logo-small.png");
/* harmony import */ var _images_inline_logos_plurchase_logo_small_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_inline_logos_plurchase_logo_small_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_inline_misc_user_plus_icomoon_modified_component_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images-inline/misc/user-plus.icomoon-modified.component.svg */ "./src/images-inline/misc/user-plus.icomoon-modified.component.svg");
/* harmony import */ var _images_inline_misc_user_plus_icomoon_modified_component_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_inline_misc_user_plus_icomoon_modified_component_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_inline_misc_toolbox_component_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images-inline/misc/toolbox.component.svg */ "./src/images-inline/misc/toolbox.component.svg");
/* harmony import */ var _images_inline_misc_toolbox_component_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_inline_misc_toolbox_component_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _badges__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./badges */ "./src/pages-support/bio/badges.jsx");
/* harmony import */ var _images_inline_logos_y_combinator_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../images-inline/logos/y-combinator.svg */ "./src/images-inline/logos/y-combinator.svg");
/* harmony import */ var _images_inline_logos_y_combinator_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_inline_logos_y_combinator_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _FounderSection_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FounderSection.scss */ "./src/pages-support/bio/FounderSection.scss");
/* harmony import */ var _FounderSection_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_FounderSection_scss__WEBPACK_IMPORTED_MODULE_9__);










function FounderSection(_ref) {
  var sectionNdx = _ref.sectionNdx;
  // todo: badges: Ruby on Rails; Enterprise;  (eg, <TechBadge text={ BadgeText.ExpertJs } />)
  // { <img src={ wranggleLogoWide } alt="Wranggle Logo" /> }
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PageSection__WEBPACK_IMPORTED_MODULE_1__["FullPageSection"], {
    title: "founder",
    className: "founder-section",
    sectionNdx: sectionNdx
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "proxv-founder-section",
    title: "ProxV, Inc."
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "details-area"
  }, _renderWhatWeOrder()))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "plurchase-founder column",
    title: "Plurchase, Inc."
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "details-area"
  }, _renderPlurchase())))));
}

function _renderWhatWeOrder() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_InfoRow__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "overview-row",
    label: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "/images/what-we-order-short.png",
      alt: "WhatWeOrder Logo"
    })
  }, "Built and released ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "WhatWeOrder"), ", a modern purchasing/requisition system, processing over $100k/month during its beta."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_InfoRow__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "hiring-row",
    label: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
      className: "inline-svg-holder add-person-icon-holder"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_images_inline_misc_user_plus_icomoon_modified_component_svg__WEBPACK_IMPORTED_MODULE_5___default.a, null))
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "badge-holder"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_badges__WEBPACK_IMPORTED_MODULE_7__["BizBadge"], {
    text: _badges__WEBPACK_IMPORTED_MODULE_7__["BadgeText"].Recruiting
  })), "Hires started as gems-in-the-rough, people almost completely ignored by recruiters, and are now at prestigious companies like Dropbox, Tinder, and Twitter."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_InfoRow__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "tech-row",
    label: _toolbox()
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Wrote the Ruby on Rails backend: customizable forms, workflows, permission systems, reports, ERP/accounting integrations, others."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Managed and contributed to marketing, sales, etc.")));
}

function _renderPlurchase() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_InfoRow__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "overview-row",
    label: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _images_inline_logos_plurchase_logo_small_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      alt: "Plurchase Logo"
    })
  }, "Built and released ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "Plurchase"), ", a co-browsing startup for housing search and shopping."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_InfoRow__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _images_inline_logos_y_combinator_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
      alt: "YC Logo"
    })
  }, "Funded by Y Combinator in 2009, Plurchase was considered one of the more technically impressive by an already technically elite group."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_InfoRow__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "tech-row",
    label: _toolbox()
  }, "Java, Ruby on Rails, JavaScript; heavy on concurrency and server-push/comet (before good libs existed); UI challenges with little precedent to follow for inspiration."));
}

function _toolbox() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
    className: "is-48x48 inline-svg-holder"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_images_inline_misc_toolbox_component_svg__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: "toolbox-icon"
  }));
}

/***/ }),

/***/ "./src/pages-support/bio/FounderSection.scss":
/*!***************************************************!*\
  !*** ./src/pages-support/bio/FounderSection.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/pages-support/bio/IntroSection.jsx":
/*!************************************************!*\
  !*** ./src/pages-support/bio/IntroSection.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IntroSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PageSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/PageSection */ "./src/components/PageSection.jsx");
/* harmony import */ var _images_inline_logos_apple_logo_solid_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images-inline/logos/apple-logo-solid.svg */ "./src/images-inline/logos/apple-logo-solid.svg");
/* harmony import */ var _images_inline_logos_apple_logo_solid_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_inline_logos_apple_logo_solid_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_inline_logos_y_combinator_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images-inline/logos/y-combinator.svg */ "./src/images-inline/logos/y-combinator.svg");
/* harmony import */ var _images_inline_logos_y_combinator_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_inline_logos_y_combinator_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _IntroSection_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IntroSection.scss */ "./src/pages-support/bio/IntroSection.scss");
/* harmony import */ var _IntroSection_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_IntroSection_scss__WEBPACK_IMPORTED_MODULE_4__);





function IntroSection(_ref) {
  var sectionNdx = _ref.sectionNdx;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PageSection__WEBPACK_IMPORTED_MODULE_1__["TwoColumnPageSection"], {
    title: "tl;dr summary",
    className: "intro-section",
    sectionNdx: sectionNdx
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "has-text-centered"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "summary-highlights burn-bg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "subtitle"
  }, "2x VC-funded startup founder"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "subtitle"
  }, "Experienced full-stack programmer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "subtitle"
  }, "Baseline management style: collaborative")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "logos"
  }, _summaryLogo({
    imgSrc: _images_inline_logos_apple_logo_solid_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    text: 'Apple',
    className: 'apple-logo'
  }), _summaryLogo({
    imgSrc: _images_inline_logos_y_combinator_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    text: 'Y Combinator'
  }), _summaryLogo({
    imgSrc: '/images/logos/michigan-go-blue.png',
    text: 'University of Michigan, Ann Arbor',
    className: 'umich-logo'
  }), _summaryLogo({
    imgSrc: '/images/logos/michigan-ross.jpg',
    text: 'Michigan Ross School of Business'
  }), _summaryLogo({
    imgSrc: '/images/logos/eds.png',
    text: 'EDS',
    className: 'eds-logo'
  }))));
}

function _summaryLogo(_ref2) {
  var imgSrc = _ref2.imgSrc,
      text = _ref2.text,
      className = _ref2.className;
  // thumb-holder
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: [className || '', 'summary-logo grey-img-holder-filter'].join(' ').trim()
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
    className: "image is-64x64"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: imgSrc,
    alt: text
  })));
}

/***/ }),

/***/ "./src/pages-support/bio/IntroSection.scss":
/*!*************************************************!*\
  !*** ./src/pages-support/bio/IntroSection.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/pages-support/bio/ManagerSection.jsx":
/*!**************************************************!*\
  !*** ./src/pages-support/bio/ManagerSection.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ManagerSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Card */ "./src/components/Card.jsx");
/* harmony import */ var _components_PageSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/PageSection */ "./src/components/PageSection.jsx");
/* harmony import */ var _ManagerSection_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ManagerSection.scss */ "./src/pages-support/bio/ManagerSection.scss");
/* harmony import */ var _ManagerSection_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ManagerSection_scss__WEBPACK_IMPORTED_MODULE_3__);




function ManagerSection(_ref) {
  var sectionNdx = _ref.sectionNdx;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PageSection__WEBPACK_IMPORTED_MODULE_2__["TwoColumnPageSection"], {
    title: "manager",
    className: "manager-section container",
    sectionNdx: sectionNdx,
    titleColContent: _renderDeepThoughts()
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mini-cards columns"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ManagerMiniCard, {
    title: "Experienced"
  }, "Most of my management experience has been with small product teams, usually 6 or fewer people. I've done so at my own startups and frequently in consulting engagements, working with teams of various experience levels, with on-site and virtual/remote teams, and with off-shore contractors."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ManagerMiniCard, {
    title: "Hands-on"
  }, "I'm drawn to the high impact of management and its coaching aspects, but I also love building things hands-on and worry about losing coding skills that go unused for too long. My sweet spot is something that combines engineering and management: as team lead or as time-partitioned engineering manager.")));
}

function ManagerMiniCard(_ref2) {
  var title = _ref2.title,
      className = _ref2.className,
      isFullWidth = _ref2.isFullWidth,
      children = _ref2.children;
  // is-half-desktop is-one-third-widescreen
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: [className || '', 'column', isFullWidth ? 'is-full' : 'is-half is-full-mobile'].join(' ').trim()
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_1__["MiniCard"], {
    title: title
  }, children));
}

function _renderDeepThoughts() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "burn-bg deep-thoughts"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("details", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("summary", null, "Deep thoughts on hiring"), "People tend to look for the qualities they value in themselves when hiring. Sometimes that works but it can also lead to unfortunate misses, and can easily fail when hiring for other functional roles. I try to fight this \"hire myself\" instinct by attempting to mentally match the candidate with competent people I've worked with in the past instead, even ones very different from me."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("details", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("summary", null, "Deep thoughts on junior coders"), "Before giving up on staffing inexperienced programmers on your team (as so many software companies seem to be doing these days), consider trying extra layers of specialization and junior-to-junior code reviews."));
}

/***/ }),

/***/ "./src/pages-support/bio/ManagerSection.scss":
/*!***************************************************!*\
  !*** ./src/pages-support/bio/ManagerSection.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/pages-support/bio/TopHeader.jsx":
/*!*********************************************!*\
  !*** ./src/pages-support/bio/TopHeader.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TopHeader_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopHeader.scss */ "./src/pages-support/bio/TopHeader.scss");
/* harmony import */ var _TopHeader_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_TopHeader_scss__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "top-header-section section solid-backing"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column about-column has-text-centered"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title"
  }, "Jeff Ferber"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "subtitle"
  }, "Over 20 years in software: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "programming + biz/management"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column has-text-centered"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
    className: "profile-pic-holder image"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "is-rounded",
    src: "/images/profile-jeff-ferber-256.jpg",
    alt: "profile pic"
  })))));
});

/***/ }),

/***/ "./src/pages-support/bio/TopHeader.scss":
/*!**********************************************!*\
  !*** ./src/pages-support/bio/TopHeader.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/pages-support/bio/badges.jsx":
/*!******************************************!*\
  !*** ./src/pages-support/bio/badges.jsx ***!
  \******************************************/
/*! exports provided: default, BizBadge, TechBadge, BadgeText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return wtfBuildError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BizBadge", function() { return BizBadge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechBadge", function() { return TechBadge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeText", function() { return BadgeText; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // todo: download and use webpack include
// todo: pick color theme and update:

var techColor = '9a86fd'; // $text-bright-on-solid. Common source for scss and here? (graphql or gatsby somesuch?)

var bizColor = '9a86fd'; // ffcc99 is meh $text-highlight-primary-on-solid: #ffcc99;
// star is &#9733;

function techBadgeUrl(accomplishment) {
  return "https://img.shields.io/badge/\u2605 Tech-" + accomplishment + "-" + techColor + ".svg";
}

function bizBadgeUrl(accomplishment) {
  return "https://img.shields.io/badge/\u2605 Biz-" + accomplishment + "-" + bizColor + ".svg";
}

function BizBadge(_ref) {
  var text = _ref.text;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "biz-badge shieldio-badge",
    src: bizBadgeUrl(text),
    alt: text
  });
}

function TechBadge(_ref2) {
  var text = _ref2.text;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "tech-badge shieldio-badge",
    src: techBadgeUrl(text),
    alt: text
  });
} // keeping it in this file because it will be inline-included from an svg file, not used as a property


var BadgeText = {
  ExpertJs: 'Expert--level JavaScript',
  Recruiting: 'Amazing Hires',
  Initiative: 'Initiative',
  Communication: 'Communication',
  ProductPlanning: 'Product Planning'
}; // Without this, getting build error: The page component must export a React component for it to be valid

function wtfBuildError() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
}


/***/ }),

/***/ "./src/pages-support/home/Ferbasaurus.jsx":
/*!************************************************!*\
  !*** ./src/pages-support/home/Ferbasaurus.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ferbasaurus; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var granim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! granim */ "./node_modules/granim/index.js");
/* harmony import */ var granim__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(granim__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Ferbasaurus_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Ferbasaurus.scss */ "./src/pages-support/home/Ferbasaurus.scss");
/* harmony import */ var _Ferbasaurus_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Ferbasaurus_scss__WEBPACK_IMPORTED_MODULE_3__);





var Ferbasaurus =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(Ferbasaurus, _React$Component);

  function Ferbasaurus() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Ferbasaurus.prototype;

  _proto.componentDidMount = function componentDidMount() {
    // see https://github.com/sarcadass/granim.js
    new granim__WEBPACK_IMPORTED_MODULE_2___default.a({
      element: '#gradient-canvas',
      name: 'granim',
      opacity: [1, 1],
      states: {
        "default-state": {
          gradients: [['#192a80', '#45735a'], ['#095266', '#5c9977'], ['#24b369', '#095266'], ['#45735a', '#192a80']]
        }
      },
      loop: true,
      direction: 'top-bottom'
    });
  };

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "ferbasaurus container"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("canvas", {
      id: "gradient-canvas"
    }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", null, "Ferbasaurus"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "columns is-multiline"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Definition, {
      word: "ferbasaurus"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", null, "a reference source in print or electronic form containing ferbonyms"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", null, "An overweight Ferber")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Definition, {
      word: "ferbify"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", null, "to do as a Ferber would do")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Definition, {
      word: "ferbivore"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", null, "Those who eat what Ferbers eat")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Definition, {
      word: "ferbography"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", null, "study of location of all Ferbers in the world")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Definition, {
      word: "ferbonomy"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", null, "the search for extra-terrestrial Ferbers")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Definition, {
      word: "ferbtastic"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", null, "this needs no definition. It is ferbtastic.")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Definition, {
      word: "ferbble"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", null, "to overwhelm a non-Ferber with strong Ferber personality")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Definition, {
      word: "ferbose"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", null, "Using more words than what a Ferber will sit through")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Definition, {
      word: "ferbonym"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", null, "a word having the same or nearly the same meaning as another in Ferbish. (eg, Ferbtastic and Ferbcellent)")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Definition, {
      word: "ferberite"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", null, "a mineral FeWO4 consisting of a valuable ferrous tungstate occurring in black granular masses"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", null, "a Ferber under four feet tall"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", null, "Ferber kryptonite: Hungarian desserts (kremes, gesztenyep\xFCr\xE9, etc)"))));
  };

  return Ferbasaurus;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



function Definition(_ref) {
  var word = _ref.word,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "column is-full-mobile is-half-desktop"
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "card"
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dl", null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dt", null, word), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("dd", null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ol", null, children)))));
}
/*

<dl>
        <dt>ferbaby</dt>
        <dd>
          <ol>
            <li>Ferber under the age of two years old. (ferbonym of "ferbrat.")</li>
            <li>Ferber who is acting cranky (typically due to hunger.)</li>
          </ol>
        </dd>
      </dl>

      <dl>
        <dt>ferbcrastinate</dt>
        <dd>
          <ol>
            <li>putting off a task that isn't ferbtastic</li>
          </ol>
        </dd>
      </dl>
 */

/***/ }),

/***/ "./src/pages-support/home/Ferbasaurus.scss":
/*!*************************************************!*\
  !*** ./src/pages-support/home/Ferbasaurus.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/pages/bio.jsx":
/*!***************************!*\
  !*** ./src/pages/bio.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Page */ "./src/components/Page.jsx");
/* harmony import */ var _pages_support_bio_IntroSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages-support/bio/IntroSection */ "./src/pages-support/bio/IntroSection.jsx");
/* harmony import */ var _pages_support_bio_TopHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages-support/bio/TopHeader */ "./src/pages-support/bio/TopHeader.jsx");
/* harmony import */ var _pages_support_bio_CurrentWorkSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages-support/bio/CurrentWorkSection */ "./src/pages-support/bio/CurrentWorkSection.jsx");
/* harmony import */ var _pages_support_bio_CodeSampleSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages-support/bio/CodeSampleSection */ "./src/pages-support/bio/CodeSampleSection.jsx");
/* harmony import */ var _pages_support_bio_FounderSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages-support/bio/FounderSection */ "./src/pages-support/bio/FounderSection.jsx");
/* harmony import */ var _pages_support_bio_ConsultingSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages-support/bio/ConsultingSection */ "./src/pages-support/bio/ConsultingSection.jsx");
/* harmony import */ var _pages_support_bio_EarlyCareerSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages-support/bio/EarlyCareerSection */ "./src/pages-support/bio/EarlyCareerSection.jsx");
/* harmony import */ var _pages_support_bio_ManagerSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages-support/bio/ManagerSection */ "./src/pages-support/bio/ManagerSection.jsx");
/* harmony import */ var _pages_support_bio_ContactSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pages-support/bio/ContactSection */ "./src/pages-support/bio/ContactSection.jsx");
/* harmony import */ var _bio_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bio.scss */ "./src/pages/bio.scss");
/* harmony import */ var _bio_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_bio_scss__WEBPACK_IMPORTED_MODULE_11__);












/* harmony default export */ __webpack_exports__["default"] = (function () {
  var sections = [_pages_support_bio_IntroSection__WEBPACK_IMPORTED_MODULE_2__["default"], _pages_support_bio_CurrentWorkSection__WEBPACK_IMPORTED_MODULE_4__["default"], _pages_support_bio_FounderSection__WEBPACK_IMPORTED_MODULE_6__["default"], _pages_support_bio_ManagerSection__WEBPACK_IMPORTED_MODULE_9__["default"], _pages_support_bio_CodeSampleSection__WEBPACK_IMPORTED_MODULE_5__["default"], _pages_support_bio_ConsultingSection__WEBPACK_IMPORTED_MODULE_7__["default"], _pages_support_bio_EarlyCareerSection__WEBPACK_IMPORTED_MODULE_8__["default"], _pages_support_bio_ContactSection__WEBPACK_IMPORTED_MODULE_10__["default"]].map(function (TagName, sectionNdx) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TagName, {
      sectionNdx: sectionNdx,
      key: sectionNdx
    });
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_1__["default"], {
    pageName: "bio"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_support_bio_TopHeader__WEBPACK_IMPORTED_MODULE_3__["default"], null), sections);
});
/*
3. founder
  pitch: need a new procurement/requisition system,
      <IntroSection/>
    <CurrentWorkSection/>
    <CodeSampleSection/>


    <PurchasingSystemSection />
    <ConsultingSection />
    <AppleSection />
    <EarlyCareerSection />
 */

/***/ }),

/***/ "./src/pages/bio.scss":
/*!****************************!*\
  !*** ./src/pages/bio.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/pages/home.scss":
/*!*****************************!*\
  !*** ./src/pages/home.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Page */ "./src/components/Page.jsx");
/* harmony import */ var _home_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.scss */ "./src/pages/home.scss");
/* harmony import */ var _home_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_support_home_Ferbasaurus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages-support/home/Ferbasaurus */ "./src/pages-support/home/Ferbasaurus.jsx");

 // import { Link } from "gatsby";




var Index = function Index(graphqlData) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Page__WEBPACK_IMPORTED_MODULE_1__["default"], {
    pageName: "home"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_pages_support_home_Ferbasaurus__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./src/scss-support/_bulma-custom.scss":
/*!*********************************************!*\
  !*** ./src/scss-support/_bulma-custom.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/scss-support/prismjs-theme.scss":
/*!*********************************************!*\
  !*** ./src/scss-support/prismjs-theme.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "@reach/router":
/*!********************************!*\
  !*** external "@reach/router" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__reach_router__;

/***/ }),

/***/ "core-js/modules/es6.array.iterator":
/*!*****************************************************!*\
  !*** external "core-js/modules/es6.array.iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_iterator__;

/***/ }),

/***/ "core-js/modules/es6.array.sort":
/*!*************************************************!*\
  !*** external "core-js/modules/es6.array.sort" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_sort__;

/***/ }),

/***/ "core-js/modules/es6.function.name":
/*!****************************************************!*\
  !*** external "core-js/modules/es6.function.name" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_function_name__;

/***/ }),

/***/ "core-js/modules/es6.map":
/*!******************************************!*\
  !*** external "core-js/modules/es6.map" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_map__;

/***/ }),

/***/ "core-js/modules/es6.object.assign":
/*!****************************************************!*\
  !*** external "core-js/modules/es6.object.assign" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_assign__;

/***/ }),

/***/ "core-js/modules/es6.object.to-string":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.object.to-string" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_to_string__;

/***/ }),

/***/ "core-js/modules/es6.regexp.constructor":
/*!*********************************************************!*\
  !*** external "core-js/modules/es6.regexp.constructor" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_constructor__;

/***/ }),

/***/ "core-js/modules/es6.regexp.split":
/*!***************************************************!*\
  !*** external "core-js/modules/es6.regexp.split" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_split__;

/***/ }),

/***/ "core-js/modules/es6.regexp.to-string":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.regexp.to-string" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_to_string__;

/***/ }),

/***/ "core-js/modules/es6.string.ends-with":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.string.ends-with" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_ends_with__;

/***/ }),

/***/ "core-js/modules/es6.string.iterator":
/*!******************************************************!*\
  !*** external "core-js/modules/es6.string.iterator" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_iterator__;

/***/ }),

/***/ "core-js/modules/web.dom.iterable":
/*!***************************************************!*\
  !*** external "core-js/modules/web.dom.iterable" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_dom_iterable__;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_fs__;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_path__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom_server__;

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_helmet__;

/***/ })

/******/ });
});
//# sourceMappingURL=render-page.js.map