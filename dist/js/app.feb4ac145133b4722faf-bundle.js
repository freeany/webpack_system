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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: E:\\webpack4\\src\\index.js: Identifier 'logo' has already been declared (5:7)\n\n\u001b[0m \u001b[90m 3 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[32m'./index.css'\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 4 | \u001b[39m\u001b[36mimport\u001b[39m logo from \u001b[32m'./images/logo.png'\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 5 | \u001b[39m\u001b[36mimport\u001b[39m logo from \u001b[32m'./images1/logo.png'\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m   | \u001b[39m       \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 6 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 7 | \u001b[39m\u001b[36mconst\u001b[39m \u001b[33mApp\u001b[39m \u001b[33m=\u001b[39m () \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 8 | \u001b[39m  console\u001b[33m.\u001b[39mlog(\u001b[32m'....'\u001b[39m\u001b[33m,\u001b[39m process\u001b[33m.\u001b[39menv\u001b[33m.\u001b[39m\u001b[33mNODE_ENV\u001b[39m)\u001b[0m\n    at Object.raise (E:\\webpack4\\node_modules\\@babel\\parser\\lib\\index.js:7044:17)\n    at ScopeHandler.checkRedeclarationInScope (E:\\webpack4\\node_modules\\@babel\\parser\\lib\\index.js:4270:12)\n    at ScopeHandler.declareName (E:\\webpack4\\node_modules\\@babel\\parser\\lib\\index.js:4236:12)\n    at Object.checkLVal (E:\\webpack4\\node_modules\\@babel\\parser\\lib\\index.js:8891:22)\n    at Object.parseImportSpecifierLocal (E:\\webpack4\\node_modules\\@babel\\parser\\lib\\index.js:12083:10)\n    at Object.maybeParseDefaultImportSpecifier (E:\\webpack4\\node_modules\\@babel\\parser\\lib\\index.js:12089:12)\n    at Object.parseImport (E:\\webpack4\\node_modules\\@babel\\parser\\lib\\index.js:12060:31)\n    at Object.parseStatementContent (E:\\webpack4\\node_modules\\@babel\\parser\\lib\\index.js:10822:27)\n    at Object.parseStatement (E:\\webpack4\\node_modules\\@babel\\parser\\lib\\index.js:10724:17)\n    at Object.parseBlockOrModuleBlockBody (E:\\webpack4\\node_modules\\@babel\\parser\\lib\\index.js:11298:25)\n    at Object.parseBlockBody (E:\\webpack4\\node_modules\\@babel\\parser\\lib\\index.js:11285:10)\n    at Object.parseTopLevel (E:\\webpack4\\node_modules\\@babel\\parser\\lib\\index.js:10655:10)\n    at Object.parse (E:\\webpack4\\node_modules\\@babel\\parser\\lib\\index.js:12264:10)\n    at parse (E:\\webpack4\\node_modules\\@babel\\parser\\lib\\index.js:12315:38)\n    at parser (E:\\webpack4\\node_modules\\@babel\\core\\lib\\parser\\index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (E:\\webpack4\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:93:38)\n    at normalizeFile.next (<anonymous>)\n    at run (E:\\webpack4\\node_modules\\@babel\\core\\lib\\transformation\\index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (E:\\webpack4\\node_modules\\@babel\\core\\lib\\transform.js:27:41)\n    at transform.next (<anonymous>)\n    at step (E:\\webpack4\\node_modules\\gensync\\index.js:254:32)\n    at gen.next (E:\\webpack4\\node_modules\\gensync\\index.js:266:13)\n    at async.call.value (E:\\webpack4\\node_modules\\gensync\\index.js:216:11)\n    at errback.call (E:\\webpack4\\node_modules\\gensync\\index.js:184:28)\n    at runGenerator.errback (E:\\webpack4\\node_modules\\@babel\\core\\lib\\gensync-utils\\async.js:72:7)\n    at val (E:\\webpack4\\node_modules\\gensync\\index.js:108:33)\n    at step (E:\\webpack4\\node_modules\\gensync\\index.js:280:14)\n    at gen.next (E:\\webpack4\\node_modules\\gensync\\index.js:266:13)");

/***/ })

/******/ });