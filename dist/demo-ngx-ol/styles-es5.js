(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"], {
  /***/
  "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/ol/ol.css":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/css-loader/dist/cjs.js??ref--12-1!./node_modules/postcss-loader/src??embedded!./node_modules/ol/ol.css ***!
    \*****************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderDistCjsJsNode_modulesPostcssLoaderSrcIndexJsNode_modulesOlOlCss(module, exports, __webpack_require__) {
    // Imports
    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(
    /*! ../css-loader/dist/runtime/api.js */
    "./node_modules/css-loader/dist/runtime/api.js");

    exports = ___CSS_LOADER_API_IMPORT___(true); // Module

    exports.push([module.i, ".ol-box {\n  box-sizing: border-box;\n  border-radius: 2px;\n  border: 2px solid blue;\n}\n\n.ol-mouse-position {\n  top: 8px;\n  right: 8px;\n  position: absolute;\n}\n\n.ol-scale-line {\n  background: rgba(0,60,136,0.3);\n  border-radius: 4px;\n  bottom: 8px;\n  left: 8px;\n  padding: 2px;\n  position: absolute;\n}\n\n.ol-scale-line-inner {\n  border: 1px solid #eee;\n  border-top: none;\n  color: #eee;\n  font-size: 10px;\n  text-align: center;\n  margin: 1px;\n  will-change: contents, width;\n  transition: all 0.25s;\n}\n\n.ol-scale-bar {\n  position: absolute;\n  bottom: 8px;\n  left: 8px;\n}\n\n.ol-scale-step-marker {\n  width: 1px;\n  height: 15px;\n  background-color: #000000;\n  float: right;\n  z-Index: 10;\n}\n\n.ol-scale-step-text {\n  position: absolute;\n  bottom: -5px;\n  font-size: 12px;\n  z-Index: 11;\n  color: #000000;\n  text-shadow: -2px 0 #FFFFFF, 0 2px #FFFFFF, 2px 0 #FFFFFF, 0 -2px #FFFFFF;\n}\n\n.ol-scale-text {\n  position: absolute;\n  font-size: 14px;\n  text-align: center;\n  bottom: 25px;\n  color: #000000;\n  text-shadow: -2px 0 #FFFFFF, 0 2px #FFFFFF, 2px 0 #FFFFFF, 0 -2px #FFFFFF;\n}\n\n.ol-scale-singlebar {\n  position: relative;\n  height: 10px;\n  z-Index: 9;\n  border: 1px solid black;\n}\n\n.ol-unsupported {\n  display: none;\n}\n\n.ol-viewport, .ol-unselectable {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n}\n\n.ol-overlaycontainer, .ol-overlaycontainer-stopevent {\n  pointer-events: none;\n}\n\n.ol-overlaycontainer > *, .ol-overlaycontainer-stopevent > * {\n  pointer-events: auto;\n}\n\n.ol-selectable {\n  -webkit-touch-callout: default;\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  user-select: text;\n}\n\n.ol-grabbing {\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n\n.ol-grab {\n  cursor: move;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n.ol-control {\n  position: absolute;\n  background-color: rgba(255,255,255,0.4);\n  border-radius: 4px;\n  padding: 2px;\n}\n\n.ol-control:hover {\n  background-color: rgba(255,255,255,0.6);\n}\n\n.ol-zoom {\n  top: .5em;\n  left: .5em;\n}\n\n.ol-rotate {\n  top: .5em;\n  right: .5em;\n  transition: opacity .25s linear, visibility 0s linear;\n}\n\n.ol-rotate.ol-hidden {\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity .25s linear, visibility 0s linear .25s;\n}\n\n.ol-zoom-extent {\n  top: 4.643em;\n  left: .5em;\n}\n\n.ol-full-screen {\n  right: .5em;\n  top: .5em;\n}\n\n.ol-control button {\n  display: block;\n  margin: 1px;\n  padding: 0;\n  color: white;\n  font-size: 1.14em;\n  font-weight: bold;\n  text-decoration: none;\n  text-align: center;\n  height: 1.375em;\n  width: 1.375em;\n  line-height: .4em;\n  background-color: rgba(0,60,136,0.5);\n  border: none;\n  border-radius: 2px;\n}\n\n.ol-control button::-moz-focus-inner {\n  border: none;\n  padding: 0;\n}\n\n.ol-control button span {\n  pointer-events: none;\n}\n\n.ol-zoom-extent button {\n  line-height: 1.4em;\n}\n\n.ol-compass {\n  display: block;\n  font-weight: normal;\n  font-size: 1.2em;\n  will-change: transform;\n}\n\n.ol-touch .ol-control button {\n  font-size: 1.5em;\n}\n\n.ol-touch .ol-zoom-extent {\n  top: 5.5em;\n}\n\n.ol-control button:hover,\n.ol-control button:focus {\n  text-decoration: none;\n  background-color: rgba(0,60,136,0.7);\n}\n\n.ol-zoom .ol-zoom-in {\n  border-radius: 2px 2px 0 0;\n}\n\n.ol-zoom .ol-zoom-out {\n  border-radius: 0 0 2px 2px;\n}\n\n.ol-attribution {\n  text-align: right;\n  bottom: .5em;\n  right: .5em;\n  max-width: calc(100% - 1.3em);\n}\n\n.ol-attribution ul {\n  margin: 0;\n  padding: 0 .5em;\n  color: #000;\n  text-shadow: 0 0 2px #fff;\n}\n\n.ol-attribution li {\n  display: inline;\n  list-style: none;\n}\n\n.ol-attribution li:not(:last-child):after {\n  content: \" \";\n}\n\n.ol-attribution img {\n  max-height: 2em;\n  max-width: inherit;\n  vertical-align: middle;\n}\n\n.ol-attribution ul, .ol-attribution button {\n  display: inline-block;\n}\n\n.ol-attribution.ol-collapsed ul {\n  display: none;\n}\n\n.ol-attribution:not(.ol-collapsed) {\n  background: rgba(255,255,255,0.8);\n}\n\n.ol-attribution.ol-uncollapsible {\n  bottom: 0;\n  right: 0;\n  border-radius: 4px 0 0;\n}\n\n.ol-attribution.ol-uncollapsible img {\n  margin-top: -.2em;\n  max-height: 1.6em;\n}\n\n.ol-attribution.ol-uncollapsible button {\n  display: none;\n}\n\n.ol-zoomslider {\n  top: 4.5em;\n  left: .5em;\n  height: 200px;\n}\n\n.ol-zoomslider button {\n  position: relative;\n  height: 10px;\n}\n\n.ol-touch .ol-zoomslider {\n  top: 5.5em;\n}\n\n.ol-overviewmap {\n  left: 0.5em;\n  bottom: 0.5em;\n}\n\n.ol-overviewmap.ol-uncollapsible {\n  bottom: 0;\n  left: 0;\n  border-radius: 0 4px 0 0;\n}\n\n.ol-overviewmap .ol-overviewmap-map,\n.ol-overviewmap button {\n  display: inline-block;\n}\n\n.ol-overviewmap .ol-overviewmap-map {\n  border: 1px solid #7b98bc;\n  height: 150px;\n  margin: 2px;\n  width: 150px;\n}\n\n.ol-overviewmap:not(.ol-collapsed) button{\n  bottom: 1px;\n  left: 2px;\n  position: absolute;\n}\n\n.ol-overviewmap.ol-collapsed .ol-overviewmap-map,\n.ol-overviewmap.ol-uncollapsible button {\n  display: none;\n}\n\n.ol-overviewmap:not(.ol-collapsed) {\n  background: rgba(255,255,255,0.8);\n}\n\n.ol-overviewmap-box {\n  border: 2px dotted rgba(0,60,136,0.7);\n}\n\n.ol-overviewmap .ol-overviewmap-box:hover {\n  cursor: move;\n}\n", "", {
      "version": 3,
      "sources": ["ol.css"],
      "names": [],
      "mappings": "AAAA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,QAAQ;EACR,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,8BAA8B;EAC9B,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,YAAY;EACZ,kBAAkB;AACpB;;AACA;EACE,sBAAsB;EACtB,gBAAgB;EAChB,WAAW;EACX,eAAe;EACf,kBAAkB;EAClB,WAAW;EACX,4BAA4B;EAC5B,qBAAqB;AACvB;;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,SAAS;AACX;;AACA;EACE,UAAU;EACV,YAAY;EACZ,yBAAyB;EACzB,YAAY;EACZ,WAAW;AACb;;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,WAAW;EACX,cAAc;EACd,yEAAyE;AAC3E;;AACA;EACE,kBAAkB;EAClB,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,cAAc;EACd,yEAAyE;AAC3E;;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,UAAU;EACV,uBAAuB;AACzB;;AAEA;EACE,aAAa;AACf;;AACA;EACE,2BAA2B;EAC3B,yBAAyB;EACzB,sBAAsB;EAEtB,iBAAiB;EACjB,0CAA0C;AAC5C;;AACA;EACE,oBAAoB;AACtB;;AACA;EACE,oBAAoB;AACtB;;AACA;EACE,8BAA8B;EAC9B,yBAAyB;EACzB,sBAAsB;EAEtB,iBAAiB;AACnB;;AACA;EACE,wBAAwB;EAExB,gBAAgB;AAClB;;AACA;EACE,YAAY;EACZ,oBAAoB;EAEpB,YAAY;AACd;;AACA;EACE,kBAAkB;EAClB,uCAAuC;EACvC,kBAAkB;EAClB,YAAY;AACd;;AACA;EACE,uCAAuC;AACzC;;AACA;EACE,SAAS;EACT,UAAU;AACZ;;AACA;EACE,SAAS;EACT,WAAW;EACX,qDAAqD;AACvD;;AACA;EACE,UAAU;EACV,kBAAkB;EAClB,0DAA0D;AAC5D;;AACA;EACE,YAAY;EACZ,UAAU;AACZ;;AACA;EACE,WAAW;EACX,SAAS;AACX;;AAEA;EACE,cAAc;EACd,WAAW;EACX,UAAU;EACV,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;EACjB,qBAAqB;EACrB,kBAAkB;EAClB,eAAe;EACf,cAAc;EACd,iBAAiB;EACjB,oCAAoC;EACpC,YAAY;EACZ,kBAAkB;AACpB;;AACA;EACE,YAAY;EACZ,UAAU;AACZ;;AACA;EACE,oBAAoB;AACtB;;AACA;EACE,kBAAkB;AACpB;;AACA;EACE,cAAc;EACd,mBAAmB;EACnB,gBAAgB;EAChB,sBAAsB;AACxB;;AACA;EACE,gBAAgB;AAClB;;AACA;EACE,UAAU;AACZ;;AACA;;EAEE,qBAAqB;EACrB,oCAAoC;AACtC;;AACA;EACE,0BAA0B;AAC5B;;AACA;EACE,0BAA0B;AAC5B;;AAGA;EACE,iBAAiB;EACjB,YAAY;EACZ,WAAW;EACX,6BAA6B;AAC/B;;AAEA;EACE,SAAS;EACT,eAAe;EACf,WAAW;EACX,yBAAyB;AAC3B;;AACA;EACE,eAAe;EACf,gBAAgB;AAClB;;AACA;EACE,YAAY;AACd;;AACA;EACE,eAAe;EACf,kBAAkB;EAClB,sBAAsB;AACxB;;AACA;EACE,qBAAqB;AACvB;;AACA;EACE,aAAa;AACf;;AACA;EACE,iCAAiC;AACnC;;AACA;EACE,SAAS;EACT,QAAQ;EACR,sBAAsB;AACxB;;AACA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;;AACA;EACE,aAAa;AACf;;AAEA;EACE,UAAU;EACV,UAAU;EACV,aAAa;AACf;;AACA;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,aAAa;AACf;;AACA;EACE,SAAS;EACT,OAAO;EACP,wBAAwB;AAC1B;;AACA;;EAEE,qBAAqB;AACvB;;AACA;EACE,yBAAyB;EACzB,aAAa;EACb,WAAW;EACX,YAAY;AACd;;AACA;EACE,WAAW;EACX,SAAS;EACT,kBAAkB;AACpB;;AACA;;EAEE,aAAa;AACf;;AACA;EACE,iCAAiC;AACnC;;AACA;EACE,qCAAqC;AACvC;;AAEA;EACE,YAAY;AACd",
      "file": "ol.css",
      "sourcesContent": [".ol-box {\n  box-sizing: border-box;\n  border-radius: 2px;\n  border: 2px solid blue;\n}\n\n.ol-mouse-position {\n  top: 8px;\n  right: 8px;\n  position: absolute;\n}\n\n.ol-scale-line {\n  background: rgba(0,60,136,0.3);\n  border-radius: 4px;\n  bottom: 8px;\n  left: 8px;\n  padding: 2px;\n  position: absolute;\n}\n.ol-scale-line-inner {\n  border: 1px solid #eee;\n  border-top: none;\n  color: #eee;\n  font-size: 10px;\n  text-align: center;\n  margin: 1px;\n  will-change: contents, width;\n  transition: all 0.25s;\n}\n.ol-scale-bar {\n  position: absolute;\n  bottom: 8px;\n  left: 8px;\n}\n.ol-scale-step-marker {\n  width: 1px;\n  height: 15px;\n  background-color: #000000;\n  float: right;\n  z-Index: 10;\n}\n.ol-scale-step-text {\n  position: absolute;\n  bottom: -5px;\n  font-size: 12px;\n  z-Index: 11;\n  color: #000000;\n  text-shadow: -2px 0 #FFFFFF, 0 2px #FFFFFF, 2px 0 #FFFFFF, 0 -2px #FFFFFF;\n}\n.ol-scale-text {\n  position: absolute;\n  font-size: 14px;\n  text-align: center;\n  bottom: 25px;\n  color: #000000;\n  text-shadow: -2px 0 #FFFFFF, 0 2px #FFFFFF, 2px 0 #FFFFFF, 0 -2px #FFFFFF;\n}\n.ol-scale-singlebar {\n  position: relative;\n  height: 10px;\n  z-Index: 9;\n  border: 1px solid black;\n}\n\n.ol-unsupported {\n  display: none;\n}\n.ol-viewport, .ol-unselectable {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n}\n.ol-overlaycontainer, .ol-overlaycontainer-stopevent {\n  pointer-events: none;\n}\n.ol-overlaycontainer > *, .ol-overlaycontainer-stopevent > * {\n  pointer-events: auto;\n}\n.ol-selectable {\n  -webkit-touch-callout: default;\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n}\n.ol-grabbing {\n  cursor: -webkit-grabbing;\n  cursor: -moz-grabbing;\n  cursor: grabbing;\n}\n.ol-grab {\n  cursor: move;\n  cursor: -webkit-grab;\n  cursor: -moz-grab;\n  cursor: grab;\n}\n.ol-control {\n  position: absolute;\n  background-color: rgba(255,255,255,0.4);\n  border-radius: 4px;\n  padding: 2px;\n}\n.ol-control:hover {\n  background-color: rgba(255,255,255,0.6);\n}\n.ol-zoom {\n  top: .5em;\n  left: .5em;\n}\n.ol-rotate {\n  top: .5em;\n  right: .5em;\n  transition: opacity .25s linear, visibility 0s linear;\n}\n.ol-rotate.ol-hidden {\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity .25s linear, visibility 0s linear .25s;\n}\n.ol-zoom-extent {\n  top: 4.643em;\n  left: .5em;\n}\n.ol-full-screen {\n  right: .5em;\n  top: .5em;\n}\n\n.ol-control button {\n  display: block;\n  margin: 1px;\n  padding: 0;\n  color: white;\n  font-size: 1.14em;\n  font-weight: bold;\n  text-decoration: none;\n  text-align: center;\n  height: 1.375em;\n  width: 1.375em;\n  line-height: .4em;\n  background-color: rgba(0,60,136,0.5);\n  border: none;\n  border-radius: 2px;\n}\n.ol-control button::-moz-focus-inner {\n  border: none;\n  padding: 0;\n}\n.ol-control button span {\n  pointer-events: none;\n}\n.ol-zoom-extent button {\n  line-height: 1.4em;\n}\n.ol-compass {\n  display: block;\n  font-weight: normal;\n  font-size: 1.2em;\n  will-change: transform;\n}\n.ol-touch .ol-control button {\n  font-size: 1.5em;\n}\n.ol-touch .ol-zoom-extent {\n  top: 5.5em;\n}\n.ol-control button:hover,\n.ol-control button:focus {\n  text-decoration: none;\n  background-color: rgba(0,60,136,0.7);\n}\n.ol-zoom .ol-zoom-in {\n  border-radius: 2px 2px 0 0;\n}\n.ol-zoom .ol-zoom-out {\n  border-radius: 0 0 2px 2px;\n}\n\n\n.ol-attribution {\n  text-align: right;\n  bottom: .5em;\n  right: .5em;\n  max-width: calc(100% - 1.3em);\n}\n\n.ol-attribution ul {\n  margin: 0;\n  padding: 0 .5em;\n  color: #000;\n  text-shadow: 0 0 2px #fff;\n}\n.ol-attribution li {\n  display: inline;\n  list-style: none;\n}\n.ol-attribution li:not(:last-child):after {\n  content: \" \";\n}\n.ol-attribution img {\n  max-height: 2em;\n  max-width: inherit;\n  vertical-align: middle;\n}\n.ol-attribution ul, .ol-attribution button {\n  display: inline-block;\n}\n.ol-attribution.ol-collapsed ul {\n  display: none;\n}\n.ol-attribution:not(.ol-collapsed) {\n  background: rgba(255,255,255,0.8);\n}\n.ol-attribution.ol-uncollapsible {\n  bottom: 0;\n  right: 0;\n  border-radius: 4px 0 0;\n}\n.ol-attribution.ol-uncollapsible img {\n  margin-top: -.2em;\n  max-height: 1.6em;\n}\n.ol-attribution.ol-uncollapsible button {\n  display: none;\n}\n\n.ol-zoomslider {\n  top: 4.5em;\n  left: .5em;\n  height: 200px;\n}\n.ol-zoomslider button {\n  position: relative;\n  height: 10px;\n}\n\n.ol-touch .ol-zoomslider {\n  top: 5.5em;\n}\n\n.ol-overviewmap {\n  left: 0.5em;\n  bottom: 0.5em;\n}\n.ol-overviewmap.ol-uncollapsible {\n  bottom: 0;\n  left: 0;\n  border-radius: 0 4px 0 0;\n}\n.ol-overviewmap .ol-overviewmap-map,\n.ol-overviewmap button {\n  display: inline-block;\n}\n.ol-overviewmap .ol-overviewmap-map {\n  border: 1px solid #7b98bc;\n  height: 150px;\n  margin: 2px;\n  width: 150px;\n}\n.ol-overviewmap:not(.ol-collapsed) button{\n  bottom: 1px;\n  left: 2px;\n  position: absolute;\n}\n.ol-overviewmap.ol-collapsed .ol-overviewmap-map,\n.ol-overviewmap.ol-uncollapsible button {\n  display: none;\n}\n.ol-overviewmap:not(.ol-collapsed) {\n  background: rgba(255,255,255,0.8);\n}\n.ol-overviewmap-box {\n  border: 2px dotted rgba(0,60,136,0.7);\n}\n\n.ol-overviewmap .ol-overviewmap-box:hover {\n  cursor: move;\n}\n"]
    }]); // Exports

    module.exports = exports;
    /***/
  },

  /***/
  "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/css-loader/dist/cjs.js??ref--12-1!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
    \*********************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderDistCjsJsNode_modulesPostcssLoaderSrcIndexJsSrcStylesCss(module, exports, __webpack_require__) {
    // Imports
    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(
    /*! ../node_modules/css-loader/dist/runtime/api.js */
    "./node_modules/css-loader/dist/runtime/api.js");

    exports = ___CSS_LOADER_API_IMPORT___(true); // Module

    exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nhtml, body {\n  height: 100%;\n  overflow: hidden;\n}\nbody {\n  font-family: \"Roboto\", serif;\n  margin: 0;\n}\n", "", {
      "version": 3,
      "sources": ["styles.css"],
      "names": [],
      "mappings": "AAAA,8EAA8E;AAC9E;EACE,YAAY;EACZ,gBAAgB;AAClB;AAEA;EACE,4BAA4B;EAC5B,SAAS;AACX",
      "file": "styles.css",
      "sourcesContent": ["/* You can add global styles to this file, and also import other style files */\nhtml, body {\n  height: 100%;\n  overflow: hidden;\n}\n\nbody {\n  font-family: \"Roboto\", serif;\n  margin: 0;\n}\n"]
    }]); // Exports

    module.exports = exports;
    /***/
  },

  /***/
  "./node_modules/css-loader/dist/runtime/api.js":
  /*!*****************************************************!*\
    !*** ./node_modules/css-loader/dist/runtime/api.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderDistRuntimeApiJs(module, exports, __webpack_require__) {
    "use strict";
    /*
      MIT License http://www.opensource.org/licenses/mit-license.php
      Author Tobias Koppers @sokra
    */
    // css base code, injected by the css-loader
    // eslint-disable-next-line func-names

    module.exports = function (useSourceMap) {
      var list = []; // return the list of modules as css string

      list.toString = function toString() {
        return this.map(function (item) {
          var content = cssWithMappingToString(item, useSourceMap);

          if (item[2]) {
            return "@media ".concat(item[2], " {").concat(content, "}");
          }

          return content;
        }).join('');
      }; // import a list of modules into the list
      // eslint-disable-next-line func-names


      list.i = function (modules, mediaQuery, dedupe) {
        if (typeof modules === 'string') {
          // eslint-disable-next-line no-param-reassign
          modules = [[null, modules, '']];
        }

        var alreadyImportedModules = {};

        if (dedupe) {
          for (var i = 0; i < this.length; i++) {
            // eslint-disable-next-line prefer-destructuring
            var id = this[i][0];

            if (id != null) {
              alreadyImportedModules[id] = true;
            }
          }
        }

        for (var _i = 0; _i < modules.length; _i++) {
          var item = [].concat(modules[_i]);

          if (dedupe && alreadyImportedModules[item[0]]) {
            // eslint-disable-next-line no-continue
            continue;
          }

          if (mediaQuery) {
            if (!item[2]) {
              item[2] = mediaQuery;
            } else {
              item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
            }
          }

          list.push(item);
        }
      };

      return list;
    };

    function cssWithMappingToString(item, useSourceMap) {
      var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

      var cssMapping = item[3];

      if (!cssMapping) {
        return content;
      }

      if (useSourceMap && typeof btoa === 'function') {
        var sourceMapping = toComment(cssMapping);
        var sourceURLs = cssMapping.sources.map(function (source) {
          return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
        });
        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
      }

      return [content].join('\n');
    } // Adapted from convert-source-map (MIT)


    function toComment(sourceMap) {
      // eslint-disable-next-line no-undef
      var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
      var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
      return "/*# ".concat(data, " */");
    }
    /***/

  },

  /***/
  "./node_modules/ol/ol.css":
  /*!********************************!*\
    !*** ./node_modules/ol/ol.css ***!
    \********************************/

  /*! no static exports found */

  /***/
  function node_modulesOlOlCss(module, exports, __webpack_require__) {
    var api = __webpack_require__(
    /*! ../style-loader/dist/runtime/injectStylesIntoStyleTag.js */
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");

    var content = __webpack_require__(
    /*! !../css-loader/dist/cjs.js??ref--12-1!../postcss-loader/src??embedded!./ol.css */
    "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/ol/ol.css");

    content = content.__esModule ? content["default"] : content;

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    var options = {};
    options.insert = "head";
    options.singleton = false;
    var update = api(content, options);
    var exported = content.locals ? content.locals : {};
    module.exports = exported;
    /***/
  },

  /***/
  "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderDistRuntimeInjectStylesIntoStyleTagJs(module, exports, __webpack_require__) {
    "use strict";

    var isOldIE = function isOldIE() {
      var memo;
      return function memorize() {
        if (typeof memo === 'undefined') {
          // Test for IE <= 9 as proposed by Browserhacks
          // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
          // Tests for existence of standard globals is to allow style-loader
          // to operate correctly into non-standard environments
          // @see https://github.com/webpack-contrib/style-loader/issues/177
          memo = Boolean(window && document && document.all && !window.atob);
        }

        return memo;
      };
    }();

    var getTarget = function getTarget() {
      var memo = {};
      return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
          var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

          if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
            try {
              // This will throw an exception if access to iframe is blocked
              // due to cross-origin restrictions
              styleTarget = styleTarget.contentDocument.head;
            } catch (e) {
              // istanbul ignore next
              styleTarget = null;
            }
          }

          memo[target] = styleTarget;
        }

        return memo[target];
      };
    }();

    var stylesInDom = [];

    function getIndexByIdentifier(identifier) {
      var result = -1;

      for (var i = 0; i < stylesInDom.length; i++) {
        if (stylesInDom[i].identifier === identifier) {
          result = i;
          break;
        }
      }

      return result;
    }

    function modulesToDom(list, options) {
      var idCountMap = {};
      var identifiers = [];

      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var id = options.base ? item[0] + options.base : item[0];
        var count = idCountMap[id] || 0;
        var identifier = "".concat(id, " ").concat(count);
        idCountMap[id] = count + 1;
        var index = getIndexByIdentifier(identifier);
        var obj = {
          css: item[1],
          media: item[2],
          sourceMap: item[3]
        };

        if (index !== -1) {
          stylesInDom[index].references++;
          stylesInDom[index].updater(obj);
        } else {
          stylesInDom.push({
            identifier: identifier,
            updater: addStyle(obj, options),
            references: 1
          });
        }

        identifiers.push(identifier);
      }

      return identifiers;
    }

    function insertStyleElement(options) {
      var style = document.createElement('style');
      var attributes = options.attributes || {};

      if (typeof attributes.nonce === 'undefined') {
        var nonce = true ? __webpack_require__.nc : undefined;

        if (nonce) {
          attributes.nonce = nonce;
        }
      }

      Object.keys(attributes).forEach(function (key) {
        style.setAttribute(key, attributes[key]);
      });

      if (typeof options.insert === 'function') {
        options.insert(style);
      } else {
        var target = getTarget(options.insert || 'head');

        if (!target) {
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }

        target.appendChild(style);
      }

      return style;
    }

    function removeStyleElement(style) {
      // istanbul ignore if
      if (style.parentNode === null) {
        return false;
      }

      style.parentNode.removeChild(style);
    }
    /* istanbul ignore next  */


    var replaceText = function replaceText() {
      var textStore = [];
      return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
      };
    }();

    function applyToSingletonTag(style, index, remove, obj) {
      var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

      /* istanbul ignore if  */

      if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
      } else {
        var cssNode = document.createTextNode(css);
        var childNodes = style.childNodes;

        if (childNodes[index]) {
          style.removeChild(childNodes[index]);
        }

        if (childNodes.length) {
          style.insertBefore(cssNode, childNodes[index]);
        } else {
          style.appendChild(cssNode);
        }
      }
    }

    function applyToTag(style, options, obj) {
      var css = obj.css;
      var media = obj.media;
      var sourceMap = obj.sourceMap;

      if (media) {
        style.setAttribute('media', media);
      } else {
        style.removeAttribute('media');
      }

      if (sourceMap && btoa) {
        css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
      } // For old IE

      /* istanbul ignore if  */


      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        while (style.firstChild) {
          style.removeChild(style.firstChild);
        }

        style.appendChild(document.createTextNode(css));
      }
    }

    var singleton = null;
    var singletonCounter = 0;

    function addStyle(obj, options) {
      var style;
      var update;
      var remove;

      if (options.singleton) {
        var styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
      } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);

        remove = function remove() {
          removeStyleElement(style);
        };
      }

      update(obj);
      return function updateStyle(newObj) {
        if (newObj) {
          if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
            return;
          }

          update(obj = newObj);
        } else {
          remove();
        }
      };
    }

    module.exports = function (list, options) {
      options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
      // tags it will allow on a page

      if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
      }

      list = list || [];
      var lastIdentifiers = modulesToDom(list, options);
      return function update(newList) {
        newList = newList || [];

        if (Object.prototype.toString.call(newList) !== '[object Array]') {
          return;
        }

        for (var i = 0; i < lastIdentifiers.length; i++) {
          var identifier = lastIdentifiers[i];
          var index = getIndexByIdentifier(identifier);
          stylesInDom[index].references--;
        }

        var newLastIdentifiers = modulesToDom(newList, options);

        for (var _i = 0; _i < lastIdentifiers.length; _i++) {
          var _identifier = lastIdentifiers[_i];

          var _index = getIndexByIdentifier(_identifier);

          if (stylesInDom[_index].references === 0) {
            stylesInDom[_index].updater();

            stylesInDom.splice(_index, 1);
          }
        }

        lastIdentifiers = newLastIdentifiers;
      };
    };
    /***/

  },

  /***/
  "./src/styles.css":
  /*!************************!*\
    !*** ./src/styles.css ***!
    \************************/

  /*! no static exports found */

  /***/
  function srcStylesCss(module, exports, __webpack_require__) {
    var api = __webpack_require__(
    /*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");

    var content = __webpack_require__(
    /*! !../node_modules/css-loader/dist/cjs.js??ref--12-1!../node_modules/postcss-loader/src??embedded!./styles.css */
    "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

    content = content.__esModule ? content["default"] : content;

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    var options = {};
    options.insert = "head";
    options.singleton = false;
    var update = api(content, options);
    var exported = content.locals ? content.locals : {};
    module.exports = exported;
    /***/
  },

  /***/
  3:
  /*!*******************************************************!*\
    !*** multi ./src/styles.css ./node_modules/ol/ol.css ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    __webpack_require__(
    /*! /Users/achimha/Projects/ngx-ol/src/styles.css */
    "./src/styles.css");

    module.exports = __webpack_require__(
    /*! /Users/achimha/Projects/ngx-ol/node_modules/ol/ol.css */
    "./node_modules/ol/ol.css");
    /***/
  }
}, [[3, "runtime"]]]);
//# sourceMappingURL=styles-es5.js.map