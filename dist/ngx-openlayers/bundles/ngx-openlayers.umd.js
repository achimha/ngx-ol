(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('ol/View'), require('ol/Map'), require('ol'), require('ol/layer'), require('ol/source'), require('ol/tilegrid'), require('ol/tilegrid/TileGrid'), require('ol/tilegrid/WMTS'), require('ol/format'), require('ol/geom'), require('ol/proj'), require('ol/style'), require('ol/control'), require('ol/control/MousePosition'), require('ol/interaction')) :
    typeof define === 'function' && define.amd ? define('ngx-openlayers', ['exports', '@angular/core', '@angular/common', 'ol/View', 'ol/Map', 'ol', 'ol/layer', 'ol/source', 'ol/tilegrid', 'ol/tilegrid/TileGrid', 'ol/tilegrid/WMTS', 'ol/format', 'ol/geom', 'ol/proj', 'ol/style', 'ol/control', 'ol/control/MousePosition', 'ol/interaction'], factory) :
    (global = global || self, factory(global['ngx-openlayers'] = {}, global.ng.core, global.ng.common, global.View, global.Map, global.ol, global['ol/layer'], global.source, global.tilegrid, global.TileGrid, global.WMTS, global.format, global.geom, global.proj, global.style, global.control, global.MousePosition, global.interaction));
}(this, (function (exports, core, common, View, Map, ol, layer, source, tilegrid, TileGrid, WMTS, format, geom, proj, style, control, MousePosition, interaction) { 'use strict';

    View = View && Object.prototype.hasOwnProperty.call(View, 'default') ? View['default'] : View;
    Map = Map && Object.prototype.hasOwnProperty.call(Map, 'default') ? Map['default'] : Map;
    TileGrid = TileGrid && Object.prototype.hasOwnProperty.call(TileGrid, 'default') ? TileGrid['default'] : TileGrid;
    WMTS = WMTS && Object.prototype.hasOwnProperty.call(WMTS, 'default') ? WMTS['default'] : WMTS;
    MousePosition = MousePosition && Object.prototype.hasOwnProperty.call(MousePosition, 'default') ? MousePosition['default'] : MousePosition;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var SimpleGeometryComponent = /** @class */ (function () {
        function SimpleGeometryComponent(map, host) {
            this.map = map;
            this.host = host;
            this.componentType = 'simple-geometry';
        }
        SimpleGeometryComponent.prototype.ngOnInit = function () {
            this.host.instance.setGeometry(this.instance);
        };
        __decorate([
            core.Input()
        ], SimpleGeometryComponent.prototype, "srid", void 0);
        return SimpleGeometryComponent;
    }());

    var SourceComponent = /** @class */ (function () {
        function SourceComponent(host) {
            this.host = host;
            this.componentType = 'source';
        }
        SourceComponent.prototype.ngOnDestroy = function () {
            if (this.host && this.host.instance) {
                this.host.instance.setSource(null);
            }
        };
        SourceComponent.prototype._register = function (s) {
            if (this.host) {
                this.host.instance.setSource(s);
            }
        };
        __decorate([
            core.Input()
        ], SourceComponent.prototype, "attributions", void 0);
        return SourceComponent;
    }());

    var MapComponent = /** @class */ (function () {
        function MapComponent(host) {
            this.host = host;
            this.componentType = 'map';
            this.width = '100%';
            this.height = '100%';
            // we pass empty arrays to not get default controls/interactions because we have our own directives
            this.controls = [];
            this.interactions = [];
            this.olClick = new core.EventEmitter();
            this.dblClick = new core.EventEmitter();
            this.moveStart = new core.EventEmitter();
            this.moveEnd = new core.EventEmitter();
            this.pointerDrag = new core.EventEmitter();
            this.pointerMove = new core.EventEmitter();
            this.onpostrender = new core.EventEmitter();
            this.postRender = new core.EventEmitter();
            this.onprerender = new core.EventEmitter();
            this.propertyChange = new core.EventEmitter();
            this.singleClick = new core.EventEmitter();
        }
        MapComponent.prototype.ngOnInit = function () {
            var _this = this;
            // console.log('creating ol.Map instance with:', this);
            this.instance = new Map(this);
            this.instance.setTarget(this.host.nativeElement.firstElementChild);
            this.instance.on('click', function (event) { return _this.olClick.emit(event); });
            this.instance.on('dblclick', function (event) { return _this.dblClick.emit(event); });
            this.instance.on('movestart', function (event) { return _this.moveStart.emit(event); });
            this.instance.on('moveend', function (event) { return _this.moveEnd.emit(event); });
            this.instance.on('pointerdrag', function (event) { return _this.pointerDrag.emit(event); });
            this.instance.on('pointermove', function (event) { return _this.pointerMove.emit(event); });
            this.instance.on('postrender', function (event) { return _this.onpostrender.emit(event); });
            this.instance.on('postrender', function (event) { return _this.postRender.emit(event); });
            this.instance.on('prerender', function (event) { return _this.onprerender.emit(event); });
            this.instance.on('propertychange', function (event) { return _this.propertyChange.emit(event); });
            this.instance.on('singleclick', function (event) { return _this.singleClick.emit(event); });
        };
        MapComponent.prototype.ngOnChanges = function (changes) {
            var properties = {};
            if (!this.instance) {
                return;
            }
            for (var key in changes) {
                if (changes.hasOwnProperty(key)) {
                    properties[key] = changes[key].currentValue;
                }
            }
            // console.log('changes detected in aol-map, setting new properties: ', properties);
            this.instance.setProperties(properties, false);
        };
        MapComponent.prototype.ngAfterViewInit = function () {
            this.instance.updateSize();
        };
        MapComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], MapComponent.prototype, "width", void 0);
        __decorate([
            core.Input()
        ], MapComponent.prototype, "height", void 0);
        __decorate([
            core.Input()
        ], MapComponent.prototype, "pixelRatio", void 0);
        __decorate([
            core.Input()
        ], MapComponent.prototype, "keyboardEventTarget", void 0);
        __decorate([
            core.Input()
        ], MapComponent.prototype, "loadTilesWhileAnimating", void 0);
        __decorate([
            core.Input()
        ], MapComponent.prototype, "loadTilesWhileInteracting", void 0);
        __decorate([
            core.Input()
        ], MapComponent.prototype, "logo", void 0);
        __decorate([
            core.Input()
        ], MapComponent.prototype, "renderer", void 0);
        __decorate([
            core.Output()
        ], MapComponent.prototype, "olClick", void 0);
        __decorate([
            core.Output()
        ], MapComponent.prototype, "dblClick", void 0);
        __decorate([
            core.Output()
        ], MapComponent.prototype, "moveStart", void 0);
        __decorate([
            core.Output()
        ], MapComponent.prototype, "moveEnd", void 0);
        __decorate([
            core.Output()
        ], MapComponent.prototype, "pointerDrag", void 0);
        __decorate([
            core.Output()
        ], MapComponent.prototype, "pointerMove", void 0);
        __decorate([
            core.Output()
        ], MapComponent.prototype, "onpostrender", void 0);
        __decorate([
            core.Output()
        ], MapComponent.prototype, "postRender", void 0);
        __decorate([
            core.Output()
        ], MapComponent.prototype, "onprerender", void 0);
        __decorate([
            core.Output()
        ], MapComponent.prototype, "propertyChange", void 0);
        __decorate([
            core.Output()
        ], MapComponent.prototype, "singleClick", void 0);
        MapComponent = __decorate([
            core.Component({
                selector: 'aol-map',
                template: "\n    <div [style.width]=\"width\" [style.height]=\"height\"></div>\n    <ng-content></ng-content>\n  "
            })
        ], MapComponent);
        return MapComponent;
    }());

    var ViewComponent = /** @class */ (function () {
        function ViewComponent(host) {
            this.host = host;
            this.componentType = 'view';
            this.zoomAnimation = false;
            this.changeZoom = new core.EventEmitter();
            this.changeResolution = new core.EventEmitter();
            this.changeCenter = new core.EventEmitter();
        }
        ViewComponent.prototype.ngOnInit = function () {
            var _this = this;
            // console.log('creating ol.View instance with: ', this);
            this.instance = new View(this);
            this.host.instance.setView(this.instance);
            this.instance.on('change:zoom', function (event) { return _this.changeZoom.emit(event); });
            this.instance.on('change:resolution', function (event) { return _this.changeResolution.emit(event); });
            this.instance.on('change:center', function (event) { return _this.changeCenter.emit(event); });
        };
        ViewComponent.prototype.ngOnChanges = function (changes) {
            var properties = {};
            if (!this.instance) {
                return;
            }
            for (var key in changes) {
                if (changes.hasOwnProperty(key)) {
                    switch (key) {
                        case 'zoom':
                            /** Work-around: setting the zoom via setProperties does not work. */
                            if (this.zoomAnimation) {
                                this.instance.animate({ zoom: changes[key].currentValue });
                            }
                            else {
                                this.instance.setZoom(changes[key].currentValue);
                            }
                            break;
                        case 'projection':
                            this.instance = new View(this);
                            this.host.instance.setView(this.instance);
                            break;
                        case 'center':
                            /** Work-around: setting the center via setProperties does not work. */
                            this.instance.setCenter(changes[key].currentValue);
                            break;
                        default:
                            break;
                    }
                    properties[key] = changes[key].currentValue;
                }
            }
            // console.log('changes detected in aol-view, setting new properties: ', properties);
            this.instance.setProperties(properties, false);
        };
        ViewComponent.prototype.ngOnDestroy = function () {
            // console.log('removing aol-view');
        };
        ViewComponent.ctorParameters = function () { return [
            { type: MapComponent }
        ]; };
        __decorate([
            core.Input()
        ], ViewComponent.prototype, "constrainRotation", void 0);
        __decorate([
            core.Input()
        ], ViewComponent.prototype, "enableRotation", void 0);
        __decorate([
            core.Input()
        ], ViewComponent.prototype, "extent", void 0);
        __decorate([
            core.Input()
        ], ViewComponent.prototype, "maxResolution", void 0);
        __decorate([
            core.Input()
        ], ViewComponent.prototype, "minResolution", void 0);
        __decorate([
            core.Input()
        ], ViewComponent.prototype, "maxZoom", void 0);
        __decorate([
            core.Input()
        ], ViewComponent.prototype, "minZoom", void 0);
        __decorate([
            core.Input()
        ], ViewComponent.prototype, "resolution", void 0);
        __decorate([
            core.Input()
        ], ViewComponent.prototype, "resolutions", void 0);
        __decorate([
            core.Input()
        ], ViewComponent.prototype, "rotation", void 0);
        __decorate([
            core.Input()
        ], ViewComponent.prototype, "zoom", void 0);
        __decorate([
            core.Input()
        ], ViewComponent.prototype, "zoomFactor", void 0);
        __decorate([
            core.Input()
        ], ViewComponent.prototype, "center", void 0);
        __decorate([
            core.Input()
        ], ViewComponent.prototype, "projection", void 0);
        __decorate([
            core.Input()
        ], ViewComponent.prototype, "constrainOnlyCenter", void 0);
        __decorate([
            core.Input()
        ], ViewComponent.prototype, "smoothExtentConstraint", void 0);
        __decorate([
            core.Input()
        ], ViewComponent.prototype, "constrainResolution", void 0);
        __decorate([
            core.Input()
        ], ViewComponent.prototype, "smoothResolutionConstraint", void 0);
        __decorate([
            core.Input()
        ], ViewComponent.prototype, "showFullExtent", void 0);
        __decorate([
            core.Input()
        ], ViewComponent.prototype, "multiWorld", void 0);
        __decorate([
            core.Input()
        ], ViewComponent.prototype, "zoomAnimation", void 0);
        __decorate([
            core.Output()
        ], ViewComponent.prototype, "changeZoom", void 0);
        __decorate([
            core.Output()
        ], ViewComponent.prototype, "changeResolution", void 0);
        __decorate([
            core.Output()
        ], ViewComponent.prototype, "changeCenter", void 0);
        ViewComponent = __decorate([
            core.Component({
                selector: 'aol-view',
                template: " <ng-content></ng-content> "
            })
        ], ViewComponent);
        return ViewComponent;
    }());

    var GraticuleComponent = /** @class */ (function () {
        function GraticuleComponent(map) {
            this.map = map;
            this.componentType = 'graticule';
        }
        GraticuleComponent.prototype.ngOnChanges = function (changes) {
            var properties = {};
            if (!this.instance) {
                return;
            }
            for (var key in changes) {
                if (changes.hasOwnProperty(key)) {
                    properties[key] = changes[key].currentValue;
                }
            }
            if (properties) {
                this.instance = new ol.Graticule(properties);
            }
            this.instance.setMap(this.map.instance);
        };
        GraticuleComponent.prototype.ngAfterContentInit = function () {
            this.instance = new ol.Graticule({
                strokeStyle: this.strokeStyle,
                showLabels: this.showLabels,
                lonLabelPosition: this.lonLabelPosition,
                latLabelPosition: this.latLabelPosition,
            });
            this.instance.setMap(this.map.instance);
        };
        GraticuleComponent.prototype.ngOnDestroy = function () {
            this.instance.setMap(null);
        };
        GraticuleComponent.ctorParameters = function () { return [
            { type: MapComponent }
        ]; };
        __decorate([
            core.Input()
        ], GraticuleComponent.prototype, "strokeStyle", void 0);
        __decorate([
            core.Input()
        ], GraticuleComponent.prototype, "showLabels", void 0);
        __decorate([
            core.Input()
        ], GraticuleComponent.prototype, "lonLabelPosition", void 0);
        __decorate([
            core.Input()
        ], GraticuleComponent.prototype, "latLabelPosition", void 0);
        GraticuleComponent = __decorate([
            core.Component({
                selector: 'aol-graticule',
                template: '<ng-content></ng-content>'
            })
        ], GraticuleComponent);
        return GraticuleComponent;
    }());

    var LayerComponent = /** @class */ (function () {
        function LayerComponent(host) {
            this.host = host;
            this.componentType = 'layer';
        }
        LayerComponent.prototype.ngOnInit = function () {
            if (this.prerender !== null && this.prerender !== undefined) {
                this.instance.on('prerender', this.prerender);
            }
            if (this.postrender !== null && this.postrender !== undefined) {
                this.instance.on('postrender', this.postrender);
            }
            this.host.instance.getLayers().push(this.instance);
        };
        LayerComponent.prototype.ngOnDestroy = function () {
            this.host.instance.getLayers().remove(this.instance);
        };
        LayerComponent.prototype.ngOnChanges = function (changes) {
            var properties = {};
            if (!this.instance) {
                return;
            }
            for (var key in changes) {
                if (changes.hasOwnProperty(key)) {
                    properties[key] = changes[key].currentValue;
                    if (key === 'prerender') {
                        this.instance.un('prerender', changes[key].previousValue);
                        this.instance.on('prerender', changes[key].currentValue);
                    }
                    if (key === 'postrender') {
                        this.instance.un('postrender', changes[key].previousValue);
                        this.instance.on('postrender', changes[key].currentValue);
                    }
                }
            }
            // console.log('changes detected in aol-layer, setting new properties: ', properties);
            this.instance.setProperties(properties, false);
        };
        __decorate([
            core.Input()
        ], LayerComponent.prototype, "opacity", void 0);
        __decorate([
            core.Input()
        ], LayerComponent.prototype, "visible", void 0);
        __decorate([
            core.Input()
        ], LayerComponent.prototype, "extent", void 0);
        __decorate([
            core.Input()
        ], LayerComponent.prototype, "zIndex", void 0);
        __decorate([
            core.Input()
        ], LayerComponent.prototype, "minResolution", void 0);
        __decorate([
            core.Input()
        ], LayerComponent.prototype, "maxResolution", void 0);
        __decorate([
            core.Input()
        ], LayerComponent.prototype, "prerender", void 0);
        __decorate([
            core.Input()
        ], LayerComponent.prototype, "postrender", void 0);
        return LayerComponent;
    }());

    var LayerGroupComponent = /** @class */ (function (_super) {
        __extends(LayerGroupComponent, _super);
        function LayerGroupComponent(map, group) {
            return _super.call(this, group || map) || this;
        }
        LayerGroupComponent.prototype.ngOnInit = function () {
            // console.log(`creating ol.layer.Group instance with:`, this);
            this.instance = new layer.Group(this);
            _super.prototype.ngOnInit.call(this);
        };
        LayerGroupComponent.ctorParameters = function () { return [
            { type: MapComponent },
            { type: LayerGroupComponent, decorators: [{ type: core.SkipSelf }, { type: core.Optional }] }
        ]; };
        LayerGroupComponent = __decorate([
            core.Component({
                selector: 'aol-layer-group',
                template: " <ng-content></ng-content> "
            }),
            __param(1, core.SkipSelf()),
            __param(1, core.Optional())
        ], LayerGroupComponent);
        return LayerGroupComponent;
    }(LayerComponent));

    var LayerImageComponent = /** @class */ (function (_super) {
        __extends(LayerImageComponent, _super);
        function LayerImageComponent(map, group) {
            return _super.call(this, group || map) || this;
        }
        LayerImageComponent.prototype.ngOnInit = function () {
            this.instance = new layer.Image(this);
            _super.prototype.ngOnInit.call(this);
        };
        LayerImageComponent.prototype.ngOnChanges = function (changes) {
            _super.prototype.ngOnChanges.call(this, changes);
        };
        LayerImageComponent.ctorParameters = function () { return [
            { type: MapComponent },
            { type: LayerGroupComponent, decorators: [{ type: core.Optional }] }
        ]; };
        __decorate([
            core.Input()
        ], LayerImageComponent.prototype, "opacity", void 0);
        __decorate([
            core.Input()
        ], LayerImageComponent.prototype, "visible", void 0);
        __decorate([
            core.Input()
        ], LayerImageComponent.prototype, "extent", void 0);
        __decorate([
            core.Input()
        ], LayerImageComponent.prototype, "minResolution", void 0);
        __decorate([
            core.Input()
        ], LayerImageComponent.prototype, "maxResolution", void 0);
        __decorate([
            core.Input()
        ], LayerImageComponent.prototype, "zIndex", void 0);
        LayerImageComponent = __decorate([
            core.Component({
                selector: 'aol-layer-image',
                template: " <ng-content></ng-content> "
            }),
            __param(1, core.Optional())
        ], LayerImageComponent);
        return LayerImageComponent;
    }(LayerComponent));

    var LayerTileComponent = /** @class */ (function (_super) {
        __extends(LayerTileComponent, _super);
        function LayerTileComponent(map, group) {
            return _super.call(this, group || map) || this;
        }
        LayerTileComponent.prototype.ngOnInit = function () {
            // console.log('creating ol.layer.Tile instance with:', this);
            this.instance = new layer.Tile(this);
            _super.prototype.ngOnInit.call(this);
        };
        LayerTileComponent.prototype.ngOnChanges = function (changes) {
            _super.prototype.ngOnChanges.call(this, changes);
        };
        LayerTileComponent.ctorParameters = function () { return [
            { type: MapComponent },
            { type: LayerGroupComponent, decorators: [{ type: core.Optional }] }
        ]; };
        __decorate([
            core.Input()
        ], LayerTileComponent.prototype, "preload", void 0);
        __decorate([
            core.Input()
        ], LayerTileComponent.prototype, "useInterimTilesOnError", void 0);
        LayerTileComponent = __decorate([
            core.Component({
                selector: 'aol-layer-tile',
                template: " <ng-content></ng-content> "
            }),
            __param(1, core.Optional())
        ], LayerTileComponent);
        return LayerTileComponent;
    }(LayerComponent));

    var LayerVectorComponent = /** @class */ (function (_super) {
        __extends(LayerVectorComponent, _super);
        function LayerVectorComponent(map, group) {
            return _super.call(this, group || map) || this;
        }
        LayerVectorComponent.prototype.ngOnInit = function () {
            // console.log('creating ol.layer.Vector instance with:', this);
            this.instance = new layer.Vector(this);
            _super.prototype.ngOnInit.call(this);
        };
        LayerVectorComponent.prototype.ngOnChanges = function (changes) {
            _super.prototype.ngOnChanges.call(this, changes);
        };
        LayerVectorComponent.ctorParameters = function () { return [
            { type: MapComponent },
            { type: LayerGroupComponent, decorators: [{ type: core.Optional }] }
        ]; };
        __decorate([
            core.Input()
        ], LayerVectorComponent.prototype, "renderBuffer", void 0);
        __decorate([
            core.Input()
        ], LayerVectorComponent.prototype, "style", void 0);
        __decorate([
            core.Input()
        ], LayerVectorComponent.prototype, "updateWhileAnimating", void 0);
        __decorate([
            core.Input()
        ], LayerVectorComponent.prototype, "updateWhileInteracting", void 0);
        LayerVectorComponent = __decorate([
            core.Component({
                selector: 'aol-layer-vector',
                template: " <ng-content></ng-content> "
            }),
            __param(1, core.Optional())
        ], LayerVectorComponent);
        return LayerVectorComponent;
    }(LayerComponent));

    var LayerVectorTileComponent = /** @class */ (function (_super) {
        __extends(LayerVectorTileComponent, _super);
        function LayerVectorTileComponent(map, group) {
            return _super.call(this, group || map) || this;
        }
        LayerVectorTileComponent.prototype.ngOnInit = function () {
            // console.log('creating ol.layer.VectorTile instance with:', this);
            this.instance = new layer.VectorTile(this);
            _super.prototype.ngOnInit.call(this);
        };
        LayerVectorTileComponent.prototype.ngOnChanges = function (changes) {
            _super.prototype.ngOnChanges.call(this, changes);
        };
        LayerVectorTileComponent.ctorParameters = function () { return [
            { type: MapComponent },
            { type: LayerGroupComponent, decorators: [{ type: core.Optional }] }
        ]; };
        __decorate([
            core.Input()
        ], LayerVectorTileComponent.prototype, "renderBuffer", void 0);
        __decorate([
            core.Input()
        ], LayerVectorTileComponent.prototype, "renderMode", void 0);
        __decorate([
            core.Input()
        ], LayerVectorTileComponent.prototype, "renderOrder", void 0);
        __decorate([
            core.Input()
        ], LayerVectorTileComponent.prototype, "style", void 0);
        __decorate([
            core.Input()
        ], LayerVectorTileComponent.prototype, "updateWhileAnimating", void 0);
        __decorate([
            core.Input()
        ], LayerVectorTileComponent.prototype, "updateWhileInteracting", void 0);
        __decorate([
            core.Input()
        ], LayerVectorTileComponent.prototype, "visible", void 0);
        LayerVectorTileComponent = __decorate([
            core.Component({
                selector: 'aol-layer-vectortile',
                template: " <ng-content></ng-content> "
            }),
            __param(1, core.Optional())
        ], LayerVectorTileComponent);
        return LayerVectorTileComponent;
    }(LayerComponent));

    var TileGridComponent = /** @class */ (function () {
        function TileGridComponent() {
        }
        TileGridComponent.prototype.ngOnInit = function () {
            if (!this.resolutions) {
                this.instance = tilegrid.createXYZ(this);
            }
            else {
                this.instance = new TileGrid(this);
            }
        };
        TileGridComponent.prototype.ngOnChanges = function (changes) {
            if (!this.resolutions) {
                this.instance = tilegrid.createXYZ(this);
            }
            else {
                this.instance = new TileGrid(this);
            }
        };
        __decorate([
            core.Input()
        ], TileGridComponent.prototype, "extent", void 0);
        __decorate([
            core.Input()
        ], TileGridComponent.prototype, "maxZoom", void 0);
        __decorate([
            core.Input()
        ], TileGridComponent.prototype, "minZoom", void 0);
        __decorate([
            core.Input()
        ], TileGridComponent.prototype, "tileSize", void 0);
        __decorate([
            core.Input()
        ], TileGridComponent.prototype, "origin", void 0);
        __decorate([
            core.Input()
        ], TileGridComponent.prototype, "resolutions", void 0);
        TileGridComponent = __decorate([
            core.Component({
                selector: 'aol-tilegrid',
                template: ''
            })
        ], TileGridComponent);
        return TileGridComponent;
    }());

    var SourceXYZComponent = /** @class */ (function (_super) {
        __extends(SourceXYZComponent, _super);
        function SourceXYZComponent(layer) {
            var _this = _super.call(this, layer) || this;
            _this.layer = layer;
            _this.tileLoadStart = new core.EventEmitter();
            _this.tileLoadEnd = new core.EventEmitter();
            _this.tileLoadError = new core.EventEmitter();
            return _this;
        }
        SourceXYZComponent_1 = SourceXYZComponent;
        SourceXYZComponent.prototype.ngAfterContentInit = function () {
            if (this.tileGridXYZ) {
                this.tileGrid = this.tileGridXYZ.instance;
            }
            this.init();
        };
        SourceXYZComponent.prototype.ngOnChanges = function (changes) {
            var properties = {};
            if (!this.instance) {
                return;
            }
            for (var key in changes) {
                if (changes.hasOwnProperty(key)) {
                    properties[key] = changes[key].currentValue;
                }
            }
            this.instance.setProperties(properties, false);
            if (changes.hasOwnProperty('url')) {
                this.init();
            }
        };
        SourceXYZComponent.prototype.init = function () {
            var _this = this;
            this.instance = new source.XYZ(this);
            this.instance.on('tileloadstart', function (event) { return _this.tileLoadStart.emit(event); });
            this.instance.on('tileloadend', function (event) { return _this.tileLoadEnd.emit(event); });
            this.instance.on('tileloaderror', function (event) { return _this.tileLoadError.emit(event); });
            this._register(this.instance);
        };
        var SourceXYZComponent_1;
        SourceXYZComponent.ctorParameters = function () { return [
            { type: LayerTileComponent, decorators: [{ type: core.Optional }, { type: core.Host }] }
        ]; };
        __decorate([
            core.Input()
        ], SourceXYZComponent.prototype, "cacheSize", void 0);
        __decorate([
            core.Input()
        ], SourceXYZComponent.prototype, "crossOrigin", void 0);
        __decorate([
            core.Input()
        ], SourceXYZComponent.prototype, "opaque", void 0);
        __decorate([
            core.Input()
        ], SourceXYZComponent.prototype, "projection", void 0);
        __decorate([
            core.Input()
        ], SourceXYZComponent.prototype, "reprojectionErrorThreshold", void 0);
        __decorate([
            core.Input()
        ], SourceXYZComponent.prototype, "minZoom", void 0);
        __decorate([
            core.Input()
        ], SourceXYZComponent.prototype, "maxZoom", void 0);
        __decorate([
            core.Input()
        ], SourceXYZComponent.prototype, "tileGrid", void 0);
        __decorate([
            core.Input()
        ], SourceXYZComponent.prototype, "tileLoadFunction", void 0);
        __decorate([
            core.Input()
        ], SourceXYZComponent.prototype, "tilePixelRatio", void 0);
        __decorate([
            core.Input()
        ], SourceXYZComponent.prototype, "tileSize", void 0);
        __decorate([
            core.Input()
        ], SourceXYZComponent.prototype, "tileUrlFunction", void 0);
        __decorate([
            core.Input()
        ], SourceXYZComponent.prototype, "url", void 0);
        __decorate([
            core.Input()
        ], SourceXYZComponent.prototype, "urls", void 0);
        __decorate([
            core.Input()
        ], SourceXYZComponent.prototype, "wrapX", void 0);
        __decorate([
            core.ContentChild(TileGridComponent)
        ], SourceXYZComponent.prototype, "tileGridXYZ", void 0);
        __decorate([
            core.Output()
        ], SourceXYZComponent.prototype, "tileLoadStart", void 0);
        __decorate([
            core.Output()
        ], SourceXYZComponent.prototype, "tileLoadEnd", void 0);
        __decorate([
            core.Output()
        ], SourceXYZComponent.prototype, "tileLoadError", void 0);
        SourceXYZComponent = SourceXYZComponent_1 = __decorate([
            core.Component({
                selector: 'aol-source-xyz',
                template: " <ng-content></ng-content> ",
                providers: [{ provide: SourceComponent, useExisting: core.forwardRef(function () { return SourceXYZComponent_1; }) }]
            }),
            __param(0, core.Optional()),
            __param(0, core.Host())
        ], SourceXYZComponent);
        return SourceXYZComponent;
    }(SourceComponent));

    var SourceOsmComponent = /** @class */ (function (_super) {
        __extends(SourceOsmComponent, _super);
        function SourceOsmComponent(layer) {
            var _this = _super.call(this, layer) || this;
            _this.layer = layer;
            _this.tileLoadStart = new core.EventEmitter();
            _this.tileLoadEnd = new core.EventEmitter();
            _this.tileLoadError = new core.EventEmitter();
            return _this;
        }
        SourceOsmComponent_1 = SourceOsmComponent;
        SourceOsmComponent.prototype.ngAfterContentInit = function () {
            var _this = this;
            if (this.tileGridXYZ) {
                this.tileGrid = this.tileGridXYZ.instance;
            }
            this.instance = new source.OSM(this);
            this.instance.on('tileloadstart', function (event) { return _this.tileLoadStart.emit(event); });
            this.instance.on('tileloadend', function (event) { return _this.tileLoadEnd.emit(event); });
            this.instance.on('tileloaderror', function (event) { return _this.tileLoadError.emit(event); });
            this._register(this.instance);
        };
        var SourceOsmComponent_1;
        SourceOsmComponent.ctorParameters = function () { return [
            { type: LayerTileComponent, decorators: [{ type: core.Optional }, { type: core.Host }] }
        ]; };
        __decorate([
            core.Input()
        ], SourceOsmComponent.prototype, "attributions", void 0);
        __decorate([
            core.Input()
        ], SourceOsmComponent.prototype, "cacheSize", void 0);
        __decorate([
            core.Input()
        ], SourceOsmComponent.prototype, "crossOrigin", void 0);
        __decorate([
            core.Input()
        ], SourceOsmComponent.prototype, "maxZoom", void 0);
        __decorate([
            core.Input()
        ], SourceOsmComponent.prototype, "opaque", void 0);
        __decorate([
            core.Input()
        ], SourceOsmComponent.prototype, "reprojectionErrorThreshold", void 0);
        __decorate([
            core.Input()
        ], SourceOsmComponent.prototype, "tileLoadFunction", void 0);
        __decorate([
            core.Input()
        ], SourceOsmComponent.prototype, "url", void 0);
        __decorate([
            core.Input()
        ], SourceOsmComponent.prototype, "wrapX", void 0);
        __decorate([
            core.Output()
        ], SourceOsmComponent.prototype, "tileLoadStart", void 0);
        __decorate([
            core.Output()
        ], SourceOsmComponent.prototype, "tileLoadEnd", void 0);
        __decorate([
            core.Output()
        ], SourceOsmComponent.prototype, "tileLoadError", void 0);
        SourceOsmComponent = SourceOsmComponent_1 = __decorate([
            core.Component({
                selector: 'aol-source-osm',
                template: " <div class=\"aol-source-osm\"></div> ",
                providers: [{ provide: SourceComponent, useExisting: core.forwardRef(function () { return SourceOsmComponent_1; }) }]
            }),
            __param(0, core.Optional()),
            __param(0, core.Host())
        ], SourceOsmComponent);
        return SourceOsmComponent;
    }(SourceXYZComponent));

    var SourceBingmapsComponent = /** @class */ (function (_super) {
        __extends(SourceBingmapsComponent, _super);
        function SourceBingmapsComponent(layer) {
            var _this = _super.call(this, layer) || this;
            _this.imagerySet = 'Aerial';
            return _this;
        }
        SourceBingmapsComponent_1 = SourceBingmapsComponent;
        SourceBingmapsComponent.prototype.ngOnInit = function () {
            this.instance = new source.BingMaps(this);
            this.host.instance.setSource(this.instance);
        };
        var SourceBingmapsComponent_1;
        SourceBingmapsComponent.ctorParameters = function () { return [
            { type: LayerTileComponent, decorators: [{ type: core.Host }] }
        ]; };
        __decorate([
            core.Input()
        ], SourceBingmapsComponent.prototype, "cacheSize", void 0);
        __decorate([
            core.Input()
        ], SourceBingmapsComponent.prototype, "hidpi", void 0);
        __decorate([
            core.Input()
        ], SourceBingmapsComponent.prototype, "culture", void 0);
        __decorate([
            core.Input()
        ], SourceBingmapsComponent.prototype, "key", void 0);
        __decorate([
            core.Input()
        ], SourceBingmapsComponent.prototype, "imagerySet", void 0);
        __decorate([
            core.Input()
        ], SourceBingmapsComponent.prototype, "maxZoom", void 0);
        __decorate([
            core.Input()
        ], SourceBingmapsComponent.prototype, "reprojectionErrorThreshold", void 0);
        __decorate([
            core.Input()
        ], SourceBingmapsComponent.prototype, "tileLoadFunction", void 0);
        __decorate([
            core.Input()
        ], SourceBingmapsComponent.prototype, "wrapX", void 0);
        SourceBingmapsComponent = SourceBingmapsComponent_1 = __decorate([
            core.Component({
                selector: 'aol-source-bingmaps',
                template: " <div class=\"aol-source-bingmaps\"></div> ",
                providers: [{ provide: SourceComponent, useExisting: core.forwardRef(function () { return SourceBingmapsComponent_1; }) }]
            }),
            __param(0, core.Host())
        ], SourceBingmapsComponent);
        return SourceBingmapsComponent;
    }(SourceComponent));

    var SourceVectorComponent = /** @class */ (function (_super) {
        __extends(SourceVectorComponent, _super);
        function SourceVectorComponent(layer) {
            return _super.call(this, layer) || this;
        }
        SourceVectorComponent_1 = SourceVectorComponent;
        SourceVectorComponent.prototype.ngOnInit = function () {
            this.instance = new source.Vector(this);
            this.host.instance.setSource(this.instance);
        };
        var SourceVectorComponent_1;
        SourceVectorComponent.ctorParameters = function () { return [
            { type: LayerVectorComponent, decorators: [{ type: core.Host }] }
        ]; };
        __decorate([
            core.Input()
        ], SourceVectorComponent.prototype, "overlaps", void 0);
        __decorate([
            core.Input()
        ], SourceVectorComponent.prototype, "useSpatialIndex", void 0);
        __decorate([
            core.Input()
        ], SourceVectorComponent.prototype, "wrapX", void 0);
        __decorate([
            core.Input()
        ], SourceVectorComponent.prototype, "url", void 0);
        __decorate([
            core.Input()
        ], SourceVectorComponent.prototype, "format", void 0);
        __decorate([
            core.Input()
        ], SourceVectorComponent.prototype, "strategy", void 0);
        SourceVectorComponent = SourceVectorComponent_1 = __decorate([
            core.Component({
                selector: 'aol-source-vector',
                template: " <ng-content></ng-content> ",
                providers: [{ provide: SourceComponent, useExisting: core.forwardRef(function () { return SourceVectorComponent_1; }) }]
            }),
            __param(0, core.Host())
        ], SourceVectorComponent);
        return SourceVectorComponent;
    }(SourceComponent));

    var SourceClusterComponent = /** @class */ (function (_super) {
        __extends(SourceClusterComponent, _super);
        function SourceClusterComponent(layer) {
            return _super.call(this, layer) || this;
        }
        SourceClusterComponent_1 = SourceClusterComponent;
        SourceClusterComponent.prototype.ngAfterContentInit = function () {
            this.source = this.sourceVectorComponent.instance;
            this.instance = new source.Cluster(this);
            this.host.instance.setSource(this.instance);
        };
        SourceClusterComponent.prototype.ngOnChanges = function (changes) {
            if (this.instance && changes.hasOwnProperty('distance')) {
                this.instance.setDistance(this.distance);
            }
        };
        var SourceClusterComponent_1;
        SourceClusterComponent.ctorParameters = function () { return [
            { type: LayerVectorComponent, decorators: [{ type: core.Host }] }
        ]; };
        __decorate([
            core.Input()
        ], SourceClusterComponent.prototype, "distance", void 0);
        __decorate([
            core.Input()
        ], SourceClusterComponent.prototype, "geometryFunction", void 0);
        __decorate([
            core.Input()
        ], SourceClusterComponent.prototype, "wrapX", void 0);
        __decorate([
            core.ContentChild(SourceVectorComponent)
        ], SourceClusterComponent.prototype, "sourceVectorComponent", void 0);
        SourceClusterComponent = SourceClusterComponent_1 = __decorate([
            core.Component({
                selector: 'aol-source-cluster',
                template: " <ng-content></ng-content> ",
                providers: [{ provide: SourceComponent, useExisting: core.forwardRef(function () { return SourceClusterComponent_1; }) }]
            }),
            __param(0, core.Host())
        ], SourceClusterComponent);
        return SourceClusterComponent;
    }(SourceComponent));

    var TileGridWMTSComponent = /** @class */ (function (_super) {
        __extends(TileGridWMTSComponent, _super);
        function TileGridWMTSComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TileGridWMTSComponent.prototype.ngOnInit = function () {
            this.instance = new WMTS(this);
        };
        __decorate([
            core.Input()
        ], TileGridWMTSComponent.prototype, "origin", void 0);
        __decorate([
            core.Input()
        ], TileGridWMTSComponent.prototype, "origins", void 0);
        __decorate([
            core.Input()
        ], TileGridWMTSComponent.prototype, "resolutions", void 0);
        __decorate([
            core.Input()
        ], TileGridWMTSComponent.prototype, "matrixIds", void 0);
        __decorate([
            core.Input()
        ], TileGridWMTSComponent.prototype, "sizes", void 0);
        __decorate([
            core.Input()
        ], TileGridWMTSComponent.prototype, "tileSizes", void 0);
        __decorate([
            core.Input()
        ], TileGridWMTSComponent.prototype, "widths", void 0);
        TileGridWMTSComponent = __decorate([
            core.Component({
                selector: 'aol-tilegrid-wmts',
                template: ''
            })
        ], TileGridWMTSComponent);
        return TileGridWMTSComponent;
    }(TileGridComponent));

    var SourceTileWMTSComponent = /** @class */ (function (_super) {
        __extends(SourceTileWMTSComponent, _super);
        function SourceTileWMTSComponent(layer) {
            var _this = _super.call(this, layer) || this;
            _this.tileLoadStart = new core.EventEmitter();
            _this.tileLoadEnd = new core.EventEmitter();
            _this.tileLoadError = new core.EventEmitter();
            return _this;
        }
        SourceTileWMTSComponent_1 = SourceTileWMTSComponent;
        SourceTileWMTSComponent.prototype.ngOnChanges = function (changes) {
            var properties = {};
            if (!this.instance) {
                return;
            }
            for (var key in changes) {
                if (changes.hasOwnProperty(key)) {
                    switch (key) {
                        case 'url':
                            this.url = changes[key].currentValue;
                            this.setLayerSource();
                            break;
                        default:
                            break;
                    }
                    properties[key] = changes[key].currentValue;
                }
            }
            this.instance.setProperties(properties, false);
        };
        SourceTileWMTSComponent.prototype.setLayerSource = function () {
            var _this = this;
            this.instance = new source.WMTS(this);
            this.instance.on('tileloadstart', function (event) { return _this.tileLoadStart.emit(event); });
            this.instance.on('tileloadend', function (event) { return _this.tileLoadEnd.emit(event); });
            this.instance.on('tileloaderror', function (event) { return _this.tileLoadError.emit(event); });
            this.host.instance.setSource(this.instance);
        };
        SourceTileWMTSComponent.prototype.ngAfterContentInit = function () {
            if (this.tileGridWMTS) {
                this.tileGrid = this.tileGridWMTS.instance;
                this.setLayerSource();
            }
        };
        var SourceTileWMTSComponent_1;
        SourceTileWMTSComponent.ctorParameters = function () { return [
            { type: LayerTileComponent, decorators: [{ type: core.Host }] }
        ]; };
        __decorate([
            core.Input()
        ], SourceTileWMTSComponent.prototype, "cacheSize", void 0);
        __decorate([
            core.Input()
        ], SourceTileWMTSComponent.prototype, "crossOrigin", void 0);
        __decorate([
            core.Input()
        ], SourceTileWMTSComponent.prototype, "tileGrid", void 0);
        __decorate([
            core.Input()
        ], SourceTileWMTSComponent.prototype, "projection", void 0);
        __decorate([
            core.Input()
        ], SourceTileWMTSComponent.prototype, "reprojectionErrorThreshold", void 0);
        __decorate([
            core.Input()
        ], SourceTileWMTSComponent.prototype, "requestEncoding", void 0);
        __decorate([
            core.Input()
        ], SourceTileWMTSComponent.prototype, "layer", void 0);
        __decorate([
            core.Input()
        ], SourceTileWMTSComponent.prototype, "style", void 0);
        __decorate([
            core.Input()
        ], SourceTileWMTSComponent.prototype, "tileClass", void 0);
        __decorate([
            core.Input()
        ], SourceTileWMTSComponent.prototype, "tilePixelRatio", void 0);
        __decorate([
            core.Input()
        ], SourceTileWMTSComponent.prototype, "version", void 0);
        __decorate([
            core.Input()
        ], SourceTileWMTSComponent.prototype, "format", void 0);
        __decorate([
            core.Input()
        ], SourceTileWMTSComponent.prototype, "matrixSet", void 0);
        __decorate([
            core.Input()
        ], SourceTileWMTSComponent.prototype, "dimensions", void 0);
        __decorate([
            core.Input()
        ], SourceTileWMTSComponent.prototype, "url", void 0);
        __decorate([
            core.Input()
        ], SourceTileWMTSComponent.prototype, "tileLoadFunction", void 0);
        __decorate([
            core.Input()
        ], SourceTileWMTSComponent.prototype, "urls", void 0);
        __decorate([
            core.Input()
        ], SourceTileWMTSComponent.prototype, "wrapX", void 0);
        __decorate([
            core.Output()
        ], SourceTileWMTSComponent.prototype, "tileLoadStart", void 0);
        __decorate([
            core.Output()
        ], SourceTileWMTSComponent.prototype, "tileLoadEnd", void 0);
        __decorate([
            core.Output()
        ], SourceTileWMTSComponent.prototype, "tileLoadError", void 0);
        __decorate([
            core.ContentChild(TileGridWMTSComponent)
        ], SourceTileWMTSComponent.prototype, "tileGridWMTS", void 0);
        SourceTileWMTSComponent = SourceTileWMTSComponent_1 = __decorate([
            core.Component({
                selector: 'aol-source-tilewmts',
                template: " <ng-content></ng-content> ",
                providers: [{ provide: SourceComponent, useExisting: core.forwardRef(function () { return SourceTileWMTSComponent_1; }) }]
            }),
            __param(0, core.Host())
        ], SourceTileWMTSComponent);
        return SourceTileWMTSComponent;
    }(SourceComponent));

    var FormatComponent = /** @class */ (function () {
        function FormatComponent() {
            this.componentType = 'format';
        }
        return FormatComponent;
    }());

    var SourceVectorTileComponent = /** @class */ (function (_super) {
        __extends(SourceVectorTileComponent, _super);
        function SourceVectorTileComponent(layer) {
            return _super.call(this, layer) || this;
        }
        SourceVectorTileComponent_1 = SourceVectorTileComponent;
        /* need the children to construct the OL3 object */
        SourceVectorTileComponent.prototype.ngAfterContentInit = function () {
            this.format = this.formatComponent.instance;
            this.tileGrid = this.tileGridComponent.instance;
            // console.log('creating ol.source.VectorTile instance with:', this);
            this.instance = new ol.VectorTile(this);
            this.host.instance.setSource(this.instance);
        };
        var SourceVectorTileComponent_1;
        SourceVectorTileComponent.ctorParameters = function () { return [
            { type: LayerVectorTileComponent, decorators: [{ type: core.Host }] }
        ]; };
        __decorate([
            core.Input()
        ], SourceVectorTileComponent.prototype, "cacheSize", void 0);
        __decorate([
            core.Input()
        ], SourceVectorTileComponent.prototype, "overlaps", void 0);
        __decorate([
            core.Input()
        ], SourceVectorTileComponent.prototype, "projection", void 0);
        __decorate([
            core.Input()
        ], SourceVectorTileComponent.prototype, "tilePixelRatio", void 0);
        __decorate([
            core.Input()
        ], SourceVectorTileComponent.prototype, "tileUrlFunction", void 0);
        __decorate([
            core.Input()
        ], SourceVectorTileComponent.prototype, "url", void 0);
        __decorate([
            core.Input()
        ], SourceVectorTileComponent.prototype, "urls", void 0);
        __decorate([
            core.Input()
        ], SourceVectorTileComponent.prototype, "wrapX", void 0);
        __decorate([
            core.ContentChild(FormatComponent)
        ], SourceVectorTileComponent.prototype, "formatComponent", void 0);
        __decorate([
            core.ContentChild(TileGridComponent)
        ], SourceVectorTileComponent.prototype, "tileGridComponent", void 0);
        SourceVectorTileComponent = SourceVectorTileComponent_1 = __decorate([
            core.Component({
                selector: 'aol-source-vectortile',
                template: " <ng-content></ng-content> ",
                providers: [{ provide: SourceComponent, useExisting: core.forwardRef(function () { return SourceVectorTileComponent_1; }) }]
            }),
            __param(0, core.Host())
        ], SourceVectorTileComponent);
        return SourceVectorTileComponent;
    }(SourceComponent));

    var SourceTileWMSComponent = /** @class */ (function (_super) {
        __extends(SourceTileWMSComponent, _super);
        function SourceTileWMSComponent(layer) {
            return _super.call(this, layer) || this;
        }
        SourceTileWMSComponent_1 = SourceTileWMSComponent;
        SourceTileWMSComponent.prototype.ngOnInit = function () {
            this.instance = new source.TileWMS(this);
            this.host.instance.setSource(this.instance);
        };
        SourceTileWMSComponent.prototype.ngOnChanges = function (changes) {
            if (this.instance && changes.hasOwnProperty('params')) {
                this.instance.updateParams(this.params);
            }
        };
        var SourceTileWMSComponent_1;
        SourceTileWMSComponent.ctorParameters = function () { return [
            { type: LayerTileComponent, decorators: [{ type: core.Host }] }
        ]; };
        __decorate([
            core.Input()
        ], SourceTileWMSComponent.prototype, "cacheSize", void 0);
        __decorate([
            core.Input()
        ], SourceTileWMSComponent.prototype, "crossOrigin", void 0);
        __decorate([
            core.Input()
        ], SourceTileWMSComponent.prototype, "gutter", void 0);
        __decorate([
            core.Input()
        ], SourceTileWMSComponent.prototype, "hidpi", void 0);
        __decorate([
            core.Input()
        ], SourceTileWMSComponent.prototype, "params", void 0);
        __decorate([
            core.Input()
        ], SourceTileWMSComponent.prototype, "projection", void 0);
        __decorate([
            core.Input()
        ], SourceTileWMSComponent.prototype, "reprojectionErrorThreshold", void 0);
        __decorate([
            core.Input()
        ], SourceTileWMSComponent.prototype, "serverType", void 0);
        __decorate([
            core.Input()
        ], SourceTileWMSComponent.prototype, "tileGrid", void 0);
        __decorate([
            core.Input()
        ], SourceTileWMSComponent.prototype, "tileLoadFunction", void 0);
        __decorate([
            core.Input()
        ], SourceTileWMSComponent.prototype, "url", void 0);
        __decorate([
            core.Input()
        ], SourceTileWMSComponent.prototype, "urls", void 0);
        __decorate([
            core.Input()
        ], SourceTileWMSComponent.prototype, "wrapX", void 0);
        SourceTileWMSComponent = SourceTileWMSComponent_1 = __decorate([
            core.Component({
                selector: 'aol-source-tilewms',
                template: " <ng-content></ng-content> ",
                providers: [{ provide: SourceComponent, useExisting: core.forwardRef(function () { return SourceTileWMSComponent_1; }) }]
            }),
            __param(0, core.Host())
        ], SourceTileWMSComponent);
        return SourceTileWMSComponent;
    }(SourceComponent));

    var SourceTileJSONComponent = /** @class */ (function (_super) {
        __extends(SourceTileJSONComponent, _super);
        function SourceTileJSONComponent(layer) {
            return _super.call(this, layer) || this;
        }
        SourceTileJSONComponent_1 = SourceTileJSONComponent;
        SourceTileJSONComponent.prototype.ngOnInit = function () {
            this.instance = new source.TileJSON(this);
            this.host.instance.setSource(this.instance);
        };
        var SourceTileJSONComponent_1;
        SourceTileJSONComponent.ctorParameters = function () { return [
            { type: LayerTileComponent, decorators: [{ type: core.Host }] }
        ]; };
        __decorate([
            core.Input()
        ], SourceTileJSONComponent.prototype, "url", void 0);
        SourceTileJSONComponent = SourceTileJSONComponent_1 = __decorate([
            core.Component({
                selector: 'aol-source-tilejson',
                template: " <ng-content></ng-content> ",
                providers: [{ provide: SourceComponent, useExisting: core.forwardRef(function () { return SourceTileJSONComponent_1; }) }]
            }),
            __param(0, core.Host())
        ], SourceTileJSONComponent);
        return SourceTileJSONComponent;
    }(SourceComponent));

    var SourceGeoJSONComponent = /** @class */ (function (_super) {
        __extends(SourceGeoJSONComponent, _super);
        function SourceGeoJSONComponent(layer) {
            return _super.call(this, layer) || this;
        }
        SourceGeoJSONComponent_1 = SourceGeoJSONComponent;
        SourceGeoJSONComponent.prototype.ngOnInit = function () {
            this.format = new format.GeoJSON(this);
            this.instance = new source.Vector(this);
            this.host.instance.setSource(this.instance);
        };
        var SourceGeoJSONComponent_1;
        SourceGeoJSONComponent.ctorParameters = function () { return [
            { type: LayerVectorComponent, decorators: [{ type: core.Host }] }
        ]; };
        __decorate([
            core.Input()
        ], SourceGeoJSONComponent.prototype, "defaultDataProjection", void 0);
        __decorate([
            core.Input()
        ], SourceGeoJSONComponent.prototype, "featureProjection", void 0);
        __decorate([
            core.Input()
        ], SourceGeoJSONComponent.prototype, "geometryName", void 0);
        __decorate([
            core.Input()
        ], SourceGeoJSONComponent.prototype, "url", void 0);
        SourceGeoJSONComponent = SourceGeoJSONComponent_1 = __decorate([
            core.Component({
                selector: 'aol-source-geojson',
                template: " <ng-content></ng-content> ",
                providers: [{ provide: SourceComponent, useExisting: core.forwardRef(function () { return SourceGeoJSONComponent_1; }) }]
            }),
            __param(0, core.Host())
        ], SourceGeoJSONComponent);
        return SourceGeoJSONComponent;
    }(SourceComponent));

    var SourceImageStaticComponent = /** @class */ (function (_super) {
        __extends(SourceImageStaticComponent, _super);
        function SourceImageStaticComponent(layer) {
            var _this = _super.call(this, layer) || this;
            _this.imageLoadStart = new core.EventEmitter();
            _this.imageLoadEnd = new core.EventEmitter();
            _this.imageLoadError = new core.EventEmitter();
            return _this;
        }
        SourceImageStaticComponent_1 = SourceImageStaticComponent;
        SourceImageStaticComponent.prototype.setLayerSource = function () {
            var _this = this;
            this.instance = new source.ImageStatic(this);
            this.host.instance.setSource(this.instance);
            this.instance.on('imageloadstart', function (event) { return _this.imageLoadStart.emit(event); });
            this.instance.on('imageloadend', function (event) { return _this.imageLoadEnd.emit(event); });
            this.instance.on('imageloaderror', function (event) { return _this.imageLoadError.emit(event); });
        };
        SourceImageStaticComponent.prototype.ngOnInit = function () {
            this.setLayerSource();
        };
        SourceImageStaticComponent.prototype.ngOnChanges = function (changes) {
            var properties = {};
            if (!this.instance) {
                return;
            }
            for (var key in changes) {
                if (changes.hasOwnProperty(key)) {
                    switch (key) {
                        case 'url':
                            this.url = changes[key].currentValue;
                            this.setLayerSource();
                            break;
                        default:
                            break;
                    }
                    properties[key] = changes[key].currentValue;
                }
            }
            this.instance.setProperties(properties, false);
        };
        var SourceImageStaticComponent_1;
        SourceImageStaticComponent.ctorParameters = function () { return [
            { type: LayerImageComponent, decorators: [{ type: core.Host }] }
        ]; };
        __decorate([
            core.Input()
        ], SourceImageStaticComponent.prototype, "projection", void 0);
        __decorate([
            core.Input()
        ], SourceImageStaticComponent.prototype, "imageExtent", void 0);
        __decorate([
            core.Input()
        ], SourceImageStaticComponent.prototype, "url", void 0);
        __decorate([
            core.Input()
        ], SourceImageStaticComponent.prototype, "attributions", void 0);
        __decorate([
            core.Input()
        ], SourceImageStaticComponent.prototype, "crossOrigin", void 0);
        __decorate([
            core.Input()
        ], SourceImageStaticComponent.prototype, "imageLoadFunction", void 0);
        __decorate([
            core.Input()
        ], SourceImageStaticComponent.prototype, "imageSize", void 0);
        __decorate([
            core.Output()
        ], SourceImageStaticComponent.prototype, "imageLoadStart", void 0);
        __decorate([
            core.Output()
        ], SourceImageStaticComponent.prototype, "imageLoadEnd", void 0);
        __decorate([
            core.Output()
        ], SourceImageStaticComponent.prototype, "imageLoadError", void 0);
        SourceImageStaticComponent = SourceImageStaticComponent_1 = __decorate([
            core.Component({
                selector: 'aol-source-imagestatic',
                template: " <ng-content></ng-content> ",
                providers: [{ provide: SourceComponent, useExisting: core.forwardRef(function () { return SourceImageStaticComponent_1; }) }]
            }),
            __param(0, core.Host())
        ], SourceImageStaticComponent);
        return SourceImageStaticComponent;
    }(SourceComponent));

    var SourceImageWMSComponent = /** @class */ (function (_super) {
        __extends(SourceImageWMSComponent, _super);
        function SourceImageWMSComponent(layer) {
            var _this = _super.call(this, layer) || this;
            _this.imageLoadStart = new core.EventEmitter();
            _this.imageLoadEnd = new core.EventEmitter();
            _this.imageLoadError = new core.EventEmitter();
            return _this;
        }
        SourceImageWMSComponent_1 = SourceImageWMSComponent;
        SourceImageWMSComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.instance = new source.ImageWMS(this);
            this.host.instance.setSource(this.instance);
            this.instance.on('imageloadstart', function (event) { return _this.imageLoadStart.emit(event); });
            this.instance.on('imageloadend', function (event) { return _this.imageLoadEnd.emit(event); });
            this.instance.on('imageloaderror', function (event) { return _this.imageLoadError.emit(event); });
        };
        SourceImageWMSComponent.prototype.ngOnChanges = function (changes) {
            if (this.instance && changes.hasOwnProperty('params')) {
                this.instance.updateParams(this.params);
            }
        };
        var SourceImageWMSComponent_1;
        SourceImageWMSComponent.ctorParameters = function () { return [
            { type: LayerImageComponent, decorators: [{ type: core.Host }] }
        ]; };
        __decorate([
            core.Input()
        ], SourceImageWMSComponent.prototype, "attributions", void 0);
        __decorate([
            core.Input()
        ], SourceImageWMSComponent.prototype, "crossOrigin", void 0);
        __decorate([
            core.Input()
        ], SourceImageWMSComponent.prototype, "hidpi", void 0);
        __decorate([
            core.Input()
        ], SourceImageWMSComponent.prototype, "serverType", void 0);
        __decorate([
            core.Input()
        ], SourceImageWMSComponent.prototype, "imageLoadFunction", void 0);
        __decorate([
            core.Input()
        ], SourceImageWMSComponent.prototype, "params", void 0);
        __decorate([
            core.Input()
        ], SourceImageWMSComponent.prototype, "projection", void 0);
        __decorate([
            core.Input()
        ], SourceImageWMSComponent.prototype, "ratio", void 0);
        __decorate([
            core.Input()
        ], SourceImageWMSComponent.prototype, "resolutions", void 0);
        __decorate([
            core.Input()
        ], SourceImageWMSComponent.prototype, "url", void 0);
        __decorate([
            core.Output()
        ], SourceImageWMSComponent.prototype, "imageLoadStart", void 0);
        __decorate([
            core.Output()
        ], SourceImageWMSComponent.prototype, "imageLoadEnd", void 0);
        __decorate([
            core.Output()
        ], SourceImageWMSComponent.prototype, "imageLoadError", void 0);
        SourceImageWMSComponent = SourceImageWMSComponent_1 = __decorate([
            core.Component({
                selector: 'aol-source-imagewms',
                template: " <ng-content></ng-content> ",
                providers: [{ provide: SourceComponent, useExisting: core.forwardRef(function () { return SourceImageWMSComponent_1; }) }]
            }),
            __param(0, core.Host())
        ], SourceImageWMSComponent);
        return SourceImageWMSComponent;
    }(SourceComponent));

    var SourceImageArcGISRestComponent = /** @class */ (function (_super) {
        __extends(SourceImageArcGISRestComponent, _super);
        function SourceImageArcGISRestComponent(layer) {
            var _this = _super.call(this, layer) || this;
            _this.ratio = 1.5;
            _this.imageLoadStart = new core.EventEmitter();
            _this.imageLoadEnd = new core.EventEmitter();
            _this.imageLoadError = new core.EventEmitter();
            return _this;
        }
        SourceImageArcGISRestComponent_1 = SourceImageArcGISRestComponent;
        SourceImageArcGISRestComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.instance = new source.ImageArcGISRest(this);
            this.host.instance.setSource(this.instance);
            this.instance.on('imageloadstart', function (event) { return _this.imageLoadStart.emit(event); });
            this.instance.on('imageloadend', function (event) { return _this.imageLoadEnd.emit(event); });
            this.instance.on('imageloaderror', function (event) { return _this.imageLoadError.emit(event); });
        };
        SourceImageArcGISRestComponent.prototype.ngOnChanges = function (changes) {
            if (this.instance && changes.hasOwnProperty('params')) {
                this.instance.updateParams(this.params);
            }
        };
        var SourceImageArcGISRestComponent_1;
        SourceImageArcGISRestComponent.ctorParameters = function () { return [
            { type: LayerImageComponent, decorators: [{ type: core.Host }] }
        ]; };
        __decorate([
            core.Input()
        ], SourceImageArcGISRestComponent.prototype, "projection", void 0);
        __decorate([
            core.Input()
        ], SourceImageArcGISRestComponent.prototype, "url", void 0);
        __decorate([
            core.Input()
        ], SourceImageArcGISRestComponent.prototype, "attributions", void 0);
        __decorate([
            core.Input()
        ], SourceImageArcGISRestComponent.prototype, "crossOrigin", void 0);
        __decorate([
            core.Input()
        ], SourceImageArcGISRestComponent.prototype, "imageLoadFunction", void 0);
        __decorate([
            core.Input()
        ], SourceImageArcGISRestComponent.prototype, "params", void 0);
        __decorate([
            core.Input()
        ], SourceImageArcGISRestComponent.prototype, "ratio", void 0);
        __decorate([
            core.Input()
        ], SourceImageArcGISRestComponent.prototype, "resolutions", void 0);
        __decorate([
            core.Input()
        ], SourceImageArcGISRestComponent.prototype, "wrapX", void 0);
        __decorate([
            core.Output()
        ], SourceImageArcGISRestComponent.prototype, "imageLoadStart", void 0);
        __decorate([
            core.Output()
        ], SourceImageArcGISRestComponent.prototype, "imageLoadEnd", void 0);
        __decorate([
            core.Output()
        ], SourceImageArcGISRestComponent.prototype, "imageLoadError", void 0);
        SourceImageArcGISRestComponent = SourceImageArcGISRestComponent_1 = __decorate([
            core.Component({
                selector: 'aol-source-imagearcgisrest',
                template: " <ng-content></ng-content> ",
                providers: [{ provide: SourceComponent, useExisting: core.forwardRef(function () { return SourceImageArcGISRestComponent_1; }) }]
            }),
            __param(0, core.Host())
        ], SourceImageArcGISRestComponent);
        return SourceImageArcGISRestComponent;
    }(SourceComponent));

    var SourceRasterComponent = /** @class */ (function (_super) {
        __extends(SourceRasterComponent, _super);
        function SourceRasterComponent(layer) {
            var _this = _super.call(this, layer) || this;
            _this.beforeOperations = new core.EventEmitter();
            _this.afterOperations = new core.EventEmitter();
            _this.sources = [];
            return _this;
        }
        SourceRasterComponent_1 = SourceRasterComponent;
        Object.defineProperty(SourceRasterComponent.prototype, "source", {
            set: function (sourceComponent) {
                this.sources = [sourceComponent.instance];
                if (this.instance) {
                    // Openlayer doesn't handle sources update. Just recreate Raster instance.
                    this.init();
                }
            },
            enumerable: true,
            configurable: true
        });
        SourceRasterComponent.prototype.ngAfterContentInit = function () {
            this.init();
        };
        SourceRasterComponent.prototype.init = function () {
            var _this = this;
            this.instance = new source.Raster(this);
            this.instance.on('beforeoperations', function (event) { return _this.beforeOperations.emit(event); });
            this.instance.on('afteroperations', function (event) { return _this.afterOperations.emit(event); });
            this._register(this.instance);
        };
        var SourceRasterComponent_1;
        SourceRasterComponent.ctorParameters = function () { return [
            { type: LayerImageComponent, decorators: [{ type: core.Host }] }
        ]; };
        __decorate([
            core.Input()
        ], SourceRasterComponent.prototype, "operation", void 0);
        __decorate([
            core.Input()
        ], SourceRasterComponent.prototype, "threads", void 0);
        __decorate([
            core.Input()
        ], SourceRasterComponent.prototype, "lib", void 0);
        __decorate([
            core.Input()
        ], SourceRasterComponent.prototype, "operationType", void 0);
        __decorate([
            core.Output()
        ], SourceRasterComponent.prototype, "beforeOperations", void 0);
        __decorate([
            core.Output()
        ], SourceRasterComponent.prototype, "afterOperations", void 0);
        __decorate([
            core.ContentChild(SourceComponent)
        ], SourceRasterComponent.prototype, "source", null);
        SourceRasterComponent = SourceRasterComponent_1 = __decorate([
            core.Component({
                selector: 'aol-source-raster',
                template: " <ng-content></ng-content> ",
                providers: [
                    {
                        provide: SourceComponent,
                        useExisting: core.forwardRef(function () { return SourceRasterComponent_1; }),
                    },
                ]
            }),
            __param(0, core.Host())
        ], SourceRasterComponent);
        return SourceRasterComponent;
    }(SourceComponent));

    var FeatureComponent = /** @class */ (function () {
        function FeatureComponent(host) {
            this.host = host;
            this.componentType = 'feature';
        }
        FeatureComponent.prototype.ngOnInit = function () {
            this.instance = new ol.Feature();
            if (this.id !== undefined) {
                this.instance.setId(this.id);
            }
            this.host.instance.addFeature(this.instance);
        };
        FeatureComponent.prototype.ngOnDestroy = function () {
            this.host.instance.removeFeature(this.instance);
        };
        FeatureComponent.prototype.ngOnChanges = function (changes) {
            if (this.instance) {
                this.instance.setId(this.id);
            }
        };
        FeatureComponent.ctorParameters = function () { return [
            { type: SourceVectorComponent }
        ]; };
        __decorate([
            core.Input()
        ], FeatureComponent.prototype, "id", void 0);
        FeatureComponent = __decorate([
            core.Component({
                selector: 'aol-feature',
                template: " <ng-content></ng-content> "
            })
        ], FeatureComponent);
        return FeatureComponent;
    }());

    var GeometryCircleComponent = /** @class */ (function (_super) {
        __extends(GeometryCircleComponent, _super);
        function GeometryCircleComponent(map, host) {
            var _this = _super.call(this, map, host) || this;
            _this.componentType = 'geometry-circle';
            // defaulting coordinates to [0,0]. To be overridden in child component.
            _this.instance = new geom.Circle([0, 0]);
            return _this;
        }
        Object.defineProperty(GeometryCircleComponent.prototype, "radius", {
            get: function () {
                return this.instance.getRadius();
            },
            set: function (radius) {
                this.instance.setRadius(radius);
            },
            enumerable: true,
            configurable: true
        });
        GeometryCircleComponent.ctorParameters = function () { return [
            { type: MapComponent },
            { type: FeatureComponent }
        ]; };
        __decorate([
            core.Input()
        ], GeometryCircleComponent.prototype, "radius", null);
        GeometryCircleComponent = __decorate([
            core.Component({
                selector: 'aol-geometry-circle',
                template: " <ng-content></ng-content> "
            })
        ], GeometryCircleComponent);
        return GeometryCircleComponent;
    }(SimpleGeometryComponent));

    var GeometryLinestringComponent = /** @class */ (function (_super) {
        __extends(GeometryLinestringComponent, _super);
        function GeometryLinestringComponent(map, host) {
            var _this = _super.call(this, map, host) || this;
            _this.componentType = 'geometry-linestring';
            return _this;
        }
        GeometryLinestringComponent.prototype.ngOnInit = function () {
            this.instance = new geom.LineString([
                [0, 0],
                [1, 1],
            ]);
            _super.prototype.ngOnInit.call(this);
        };
        GeometryLinestringComponent.ctorParameters = function () { return [
            { type: MapComponent },
            { type: FeatureComponent }
        ]; };
        GeometryLinestringComponent = __decorate([
            core.Component({
                selector: 'aol-geometry-linestring',
                template: " <ng-content></ng-content> "
            })
        ], GeometryLinestringComponent);
        return GeometryLinestringComponent;
    }(SimpleGeometryComponent));

    var GeometryMultiLinestringComponent = /** @class */ (function (_super) {
        __extends(GeometryMultiLinestringComponent, _super);
        function GeometryMultiLinestringComponent(map, host) {
            var _this = _super.call(this, map, host) || this;
            _this.componentType = 'geometry-multilinestring';
            return _this;
        }
        GeometryMultiLinestringComponent.prototype.ngOnInit = function () {
            this.instance = new geom.MultiLineString([
                [
                    [0, 0],
                    [1, 1],
                ],
            ]);
            _super.prototype.ngOnInit.call(this);
        };
        GeometryMultiLinestringComponent.ctorParameters = function () { return [
            { type: MapComponent },
            { type: FeatureComponent }
        ]; };
        GeometryMultiLinestringComponent = __decorate([
            core.Component({
                selector: 'aol-geometry-multilinestring',
                template: " <ng-content></ng-content> "
            })
        ], GeometryMultiLinestringComponent);
        return GeometryMultiLinestringComponent;
    }(SimpleGeometryComponent));

    var GeometryMultiPointComponent = /** @class */ (function (_super) {
        __extends(GeometryMultiPointComponent, _super);
        function GeometryMultiPointComponent(map, host) {
            var _this = _super.call(this, map, host) || this;
            _this.componentType = 'geometry-multipoint';
            return _this;
        }
        GeometryMultiPointComponent.prototype.ngOnInit = function () {
            this.instance = new geom.MultiPoint([
                [0, 0],
                [1, 1],
            ]);
            _super.prototype.ngOnInit.call(this);
        };
        GeometryMultiPointComponent.ctorParameters = function () { return [
            { type: MapComponent },
            { type: FeatureComponent }
        ]; };
        GeometryMultiPointComponent = __decorate([
            core.Component({
                selector: 'aol-geometry-multipoint',
                template: " <ng-content></ng-content> "
            })
        ], GeometryMultiPointComponent);
        return GeometryMultiPointComponent;
    }(SimpleGeometryComponent));

    var GeometryMultiPolygonComponent = /** @class */ (function (_super) {
        __extends(GeometryMultiPolygonComponent, _super);
        function GeometryMultiPolygonComponent(map, host) {
            var _this = _super.call(this, map, host) || this;
            _this.componentType = 'geometry-multipolygon';
            return _this;
        }
        GeometryMultiPolygonComponent.prototype.ngOnInit = function () {
            this.instance = new geom.MultiPolygon([
                [
                    [
                        [0, 0],
                        [1, 1],
                        [0, 1],
                    ],
                ],
            ]);
            _super.prototype.ngOnInit.call(this);
        };
        GeometryMultiPolygonComponent.ctorParameters = function () { return [
            { type: MapComponent },
            { type: FeatureComponent }
        ]; };
        GeometryMultiPolygonComponent = __decorate([
            core.Component({
                selector: 'aol-geometry-multipolygon',
                template: " <ng-content></ng-content> "
            })
        ], GeometryMultiPolygonComponent);
        return GeometryMultiPolygonComponent;
    }(SimpleGeometryComponent));

    var GeometryPointComponent = /** @class */ (function (_super) {
        __extends(GeometryPointComponent, _super);
        function GeometryPointComponent(map, host) {
            var _this = _super.call(this, map, host) || this;
            _this.componentType = 'geometry-point';
            return _this;
        }
        GeometryPointComponent.prototype.ngOnInit = function () {
            this.instance = new geom.Point([0, 0]);
            _super.prototype.ngOnInit.call(this);
        };
        GeometryPointComponent.ctorParameters = function () { return [
            { type: MapComponent },
            { type: FeatureComponent }
        ]; };
        GeometryPointComponent = __decorate([
            core.Component({
                selector: 'aol-geometry-point',
                template: " <ng-content></ng-content> "
            })
        ], GeometryPointComponent);
        return GeometryPointComponent;
    }(SimpleGeometryComponent));

    var GeometryPolygonComponent = /** @class */ (function (_super) {
        __extends(GeometryPolygonComponent, _super);
        function GeometryPolygonComponent(map, host) {
            var _this = _super.call(this, map, host) || this;
            _this.componentType = 'geometry-polygon';
            return _this;
        }
        GeometryPolygonComponent.prototype.ngOnInit = function () {
            this.instance = new geom.Polygon([
                [
                    [0, 0],
                    [1, 1],
                    [0, 1],
                ],
            ]);
            _super.prototype.ngOnInit.call(this);
        };
        GeometryPolygonComponent.ctorParameters = function () { return [
            { type: MapComponent },
            { type: FeatureComponent }
        ]; };
        GeometryPolygonComponent = __decorate([
            core.Component({
                selector: 'aol-geometry-polygon',
                template: " <ng-content></ng-content> "
            })
        ], GeometryPolygonComponent);
        return GeometryPolygonComponent;
    }(SimpleGeometryComponent));

    var ContentComponent = /** @class */ (function () {
        function ContentComponent(elementRef) {
            this.elementRef = elementRef;
        }
        ContentComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        ContentComponent = __decorate([
            core.Component({
                selector: 'aol-content',
                template: '<ng-content></ng-content>'
            })
        ], ContentComponent);
        return ContentComponent;
    }());

    var OverlayComponent = /** @class */ (function () {
        function OverlayComponent(map) {
            this.map = map;
            this.componentType = 'overlay';
        }
        OverlayComponent.prototype.ngOnInit = function () {
            if (this.content) {
                this.element = this.content.elementRef.nativeElement;
                this.instance = new ol.Overlay(this);
                this.map.instance.addOverlay(this.instance);
            }
        };
        OverlayComponent.prototype.ngOnDestroy = function () {
            if (this.instance) {
                this.map.instance.removeOverlay(this.instance);
            }
        };
        OverlayComponent.ctorParameters = function () { return [
            { type: MapComponent }
        ]; };
        __decorate([
            core.ContentChild(ContentComponent, { static: true })
        ], OverlayComponent.prototype, "content", void 0);
        __decorate([
            core.Input()
        ], OverlayComponent.prototype, "id", void 0);
        __decorate([
            core.Input()
        ], OverlayComponent.prototype, "offset", void 0);
        __decorate([
            core.Input()
        ], OverlayComponent.prototype, "positioning", void 0);
        __decorate([
            core.Input()
        ], OverlayComponent.prototype, "stopEvent", void 0);
        __decorate([
            core.Input()
        ], OverlayComponent.prototype, "insertFirst", void 0);
        __decorate([
            core.Input()
        ], OverlayComponent.prototype, "autoPan", void 0);
        __decorate([
            core.Input()
        ], OverlayComponent.prototype, "autoPanAnimation", void 0);
        __decorate([
            core.Input()
        ], OverlayComponent.prototype, "autoPanMargin", void 0);
        OverlayComponent = __decorate([
            core.Component({
                selector: 'aol-overlay',
                template: '<ng-content></ng-content>'
            })
        ], OverlayComponent);
        return OverlayComponent;
    }());

    var CoordinateComponent = /** @class */ (function () {
        function CoordinateComponent(map, viewHost, geometryPointHost, geometryCircleHost, overlayHost) {
            this.map = map;
            this.mapSrid = 'EPSG:3857';
            this.srid = 'EPSG:3857';
            // console.log('instancing aol-coordinate');
            if (geometryPointHost !== null) {
                this.host = geometryPointHost;
            }
            else if (geometryCircleHost !== null) {
                this.host = geometryCircleHost;
            }
            else if (viewHost !== null) {
                this.host = viewHost;
            }
            else if (overlayHost !== null) {
                this.host = overlayHost;
            }
        }
        CoordinateComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.map.instance.on('change:view', function (e) { return _this.onMapViewChanged(e); });
            this.mapSrid = this.map.instance.getView().getProjection().getCode();
            this.transformCoordinates();
        };
        CoordinateComponent.prototype.ngOnChanges = function (changes) {
            this.transformCoordinates();
        };
        CoordinateComponent.prototype.onMapViewChanged = function (event) {
            this.mapSrid = event.target.get(event.key).getProjection().getCode();
            this.transformCoordinates();
        };
        CoordinateComponent.prototype.transformCoordinates = function () {
            var transformedCoordinates;
            if (this.srid === this.mapSrid) {
                transformedCoordinates = [this.x, this.y];
            }
            else {
                transformedCoordinates = proj.transform([this.x, this.y], this.srid, this.mapSrid);
            }
            switch (this.host.componentType) {
                case 'geometry-point':
                    this.host.instance.setCoordinates(transformedCoordinates);
                    break;
                case 'geometry-circle':
                case 'view':
                    this.host.instance.setCenter(transformedCoordinates);
                    break;
                case 'overlay':
                    this.host.instance.setPosition(transformedCoordinates);
                    break;
            }
        };
        CoordinateComponent.ctorParameters = function () { return [
            { type: MapComponent },
            { type: ViewComponent, decorators: [{ type: core.Optional }] },
            { type: GeometryPointComponent, decorators: [{ type: core.Optional }] },
            { type: GeometryCircleComponent, decorators: [{ type: core.Optional }] },
            { type: OverlayComponent, decorators: [{ type: core.Optional }] }
        ]; };
        __decorate([
            core.Input()
        ], CoordinateComponent.prototype, "x", void 0);
        __decorate([
            core.Input()
        ], CoordinateComponent.prototype, "y", void 0);
        __decorate([
            core.Input()
        ], CoordinateComponent.prototype, "srid", void 0);
        CoordinateComponent = __decorate([
            core.Component({
                selector: 'aol-coordinate',
                template: " <div class=\"aol-coordinate\"></div> "
            }),
            __param(1, core.Optional()),
            __param(2, core.Optional()),
            __param(3, core.Optional()),
            __param(4, core.Optional())
        ], CoordinateComponent);
        return CoordinateComponent;
    }());

    var CollectionCoordinatesComponent = /** @class */ (function () {
        function CollectionCoordinatesComponent(map, geometryLinestring, geometryPolygon, geometryMultipoint, geometryMultilinestring, geometryMultipolygon) {
            this.map = map;
            this.mapSrid = 'EPSG:3857';
            this.srid = 'EPSG:3857';
            if (!!geometryLinestring) {
                this.host = geometryLinestring;
            }
            else if (!!geometryPolygon) {
                this.host = geometryPolygon;
            }
            else if (!!geometryMultipoint) {
                this.host = geometryMultipoint;
            }
            else if (!!geometryMultilinestring) {
                this.host = geometryMultilinestring;
            }
            else if (!!geometryMultipolygon) {
                this.host = geometryMultipolygon;
            }
            else {
                throw new Error('aol-collection-coordinates must be a child of a geometry component');
            }
        }
        CollectionCoordinatesComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.map.instance.on('change:view', function (e) { return _this.onMapViewChanged(e); });
            this.mapSrid = this.map.instance.getView().getProjection().getCode();
            this.transformCoordinates();
        };
        CollectionCoordinatesComponent.prototype.ngOnChanges = function (changes) {
            this.transformCoordinates();
        };
        CollectionCoordinatesComponent.prototype.onMapViewChanged = function (event) {
            this.mapSrid = event.target.get(event.key).getProjection().getCode();
            this.transformCoordinates();
        };
        CollectionCoordinatesComponent.prototype.transformCoordinates = function () {
            var _this = this;
            var transformedCoordinates;
            if (this.srid === this.mapSrid) {
                transformedCoordinates = this.coordinates;
            }
            else {
                switch (this.host.componentType) {
                    case 'geometry-linestring':
                    case 'geometry-multipoint':
                        transformedCoordinates = this.coordinates.map(function (c) { return proj.transform(c, _this.srid, _this.mapSrid); });
                        break;
                    case 'geometry-polygon':
                    case 'geometry-multilinestring':
                        transformedCoordinates = this.coordinates.map(function (cc) {
                            return cc.map(function (c) { return proj.transform(c, _this.srid, _this.mapSrid); });
                        });
                        break;
                    case 'geometry-multipolygon':
                        transformedCoordinates = this.coordinates.map(function (ccc) {
                            return ccc.map(function (cc) { return cc.map(function (c) { return proj.transform(c, _this.srid, _this.mapSrid); }); });
                        });
                        break;
                }
            }
            this.host.instance.setCoordinates(transformedCoordinates);
        };
        CollectionCoordinatesComponent.ctorParameters = function () { return [
            { type: MapComponent },
            { type: GeometryLinestringComponent, decorators: [{ type: core.Optional }] },
            { type: GeometryPolygonComponent, decorators: [{ type: core.Optional }] },
            { type: GeometryMultiPointComponent, decorators: [{ type: core.Optional }] },
            { type: GeometryMultiLinestringComponent, decorators: [{ type: core.Optional }] },
            { type: GeometryMultiPolygonComponent, decorators: [{ type: core.Optional }] }
        ]; };
        __decorate([
            core.Input()
        ], CollectionCoordinatesComponent.prototype, "coordinates", void 0);
        __decorate([
            core.Input()
        ], CollectionCoordinatesComponent.prototype, "srid", void 0);
        CollectionCoordinatesComponent = __decorate([
            core.Component({
                selector: 'aol-collection-coordinates',
                template: " <div class=\"aol-collection-coordinates\"></div> "
            }),
            __param(1, core.Optional()),
            __param(2, core.Optional()),
            __param(3, core.Optional()),
            __param(4, core.Optional()),
            __param(5, core.Optional())
        ], CollectionCoordinatesComponent);
        return CollectionCoordinatesComponent;
    }());

    var StyleComponent = /** @class */ (function () {
        function StyleComponent(featureHost, layerHost) {
            this.componentType = 'style';
            // console.log('creating aol-style');
            this.host = !!featureHost ? featureHost : layerHost;
            if (!this.host) {
                throw new Error('aol-style must be applied to a feature or a layer');
            }
        }
        StyleComponent.prototype.update = function () {
            // console.log('updating style\'s host: ', this.host);
            this.host.instance.changed();
        };
        StyleComponent.prototype.ngOnInit = function () {
            // console.log('creating aol-style instance with: ', this);
            this.instance = new style.Style(this);
            this.host.instance.setStyle(this.instance);
        };
        StyleComponent.ctorParameters = function () { return [
            { type: FeatureComponent, decorators: [{ type: core.Optional }] },
            { type: LayerVectorComponent, decorators: [{ type: core.Optional }] }
        ]; };
        __decorate([
            core.Input()
        ], StyleComponent.prototype, "geometry", void 0);
        __decorate([
            core.Input()
        ], StyleComponent.prototype, "fill", void 0);
        __decorate([
            core.Input()
        ], StyleComponent.prototype, "image", void 0);
        __decorate([
            core.Input()
        ], StyleComponent.prototype, "stroke", void 0);
        __decorate([
            core.Input()
        ], StyleComponent.prototype, "text", void 0);
        __decorate([
            core.Input()
        ], StyleComponent.prototype, "zIndex", void 0);
        StyleComponent = __decorate([
            core.Component({
                selector: 'aol-style',
                template: " <ng-content></ng-content> "
            }),
            __param(0, core.Optional()), __param(1, core.Optional())
        ], StyleComponent);
        return StyleComponent;
    }());

    var StyleCircleComponent = /** @class */ (function () {
        function StyleCircleComponent(host) {
            this.host = host;
            this.componentType = 'style-circle';
        }
        /**
         * WORK-AROUND: since the re-rendering is not triggered on style change
         * we trigger a radius change.
         * see openlayers #6233 and #5775
         */
        StyleCircleComponent.prototype.update = function () {
            if (!!this.instance) {
                // console.log('setting ol.style.Circle instance\'s radius');
                this.instance.setRadius(this.radius);
            }
            this.host.update();
        };
        StyleCircleComponent.prototype.ngAfterContentInit = function () {
            // console.log('creating ol.style.Circle instance with: ', this);
            this.instance = new style.Circle(this);
            this.host.instance.setImage(this.instance);
            this.host.update();
        };
        StyleCircleComponent.prototype.ngOnChanges = function (changes) {
            if (!this.instance) {
                return;
            }
            if (changes.radius) {
                this.instance.setRadius(changes.radius.currentValue);
            }
            // console.log('changes detected in aol-style-circle, setting new radius: ', changes['radius'].currentValue);
        };
        StyleCircleComponent.prototype.ngOnDestroy = function () {
            // console.log('removing aol-style-circle');
            this.host.instance.setImage(null);
        };
        StyleCircleComponent.ctorParameters = function () { return [
            { type: StyleComponent, decorators: [{ type: core.Host }] }
        ]; };
        __decorate([
            core.Input()
        ], StyleCircleComponent.prototype, "fill", void 0);
        __decorate([
            core.Input()
        ], StyleCircleComponent.prototype, "radius", void 0);
        __decorate([
            core.Input()
        ], StyleCircleComponent.prototype, "snapToPixel", void 0);
        __decorate([
            core.Input()
        ], StyleCircleComponent.prototype, "stroke", void 0);
        __decorate([
            core.Input()
        ], StyleCircleComponent.prototype, "atlasManager", void 0);
        StyleCircleComponent = __decorate([
            core.Component({
                selector: 'aol-style-circle',
                template: " <ng-content></ng-content> "
            }),
            __param(0, core.Host())
        ], StyleCircleComponent);
        return StyleCircleComponent;
    }());

    var StyleTextComponent = /** @class */ (function () {
        function StyleTextComponent(host) {
            this.host = host;
            this.componentType = 'style-text';
            if (!host) {
                throw new Error('aol-style-text must be a descendant of aol-style');
            }
            // console.log('creating aol-style-text with: ', this);
        }
        StyleTextComponent.prototype.ngOnInit = function () {
            // console.log('creating ol.style.Text instance with: ', this);
            this.instance = new style.Text(this);
            this.host.instance.setText(this.instance);
        };
        StyleTextComponent.prototype.ngOnChanges = function (changes) {
            if (!this.instance) {
                return;
            }
            if (changes.font) {
                this.instance.setFont(changes.font.currentValue);
            }
            if (changes.offsetX) {
                this.instance.setOffsetX(changes.offsetX.currentValue);
            }
            if (changes.offsetY) {
                this.instance.setOffsetY(changes.offsetY.currentValue);
            }
            if (changes.scale) {
                this.instance.setScale(changes.scale.currentValue);
            }
            if (changes.rotation) {
                this.instance.setRotation(changes.rotation.currentValue);
            }
            if (changes.text) {
                this.instance.setText(changes.text.currentValue);
            }
            if (changes.textAlign) {
                this.instance.setTextAlign(changes.textAlign.currentValue);
            }
            if (changes.textBaseLine) {
                this.instance.setTextBaseline(changes.textBaseLine.currentValue);
            }
            this.host.update();
            // console.log('changes detected in aol-style-text, setting new properties: ', changes);
        };
        StyleTextComponent.ctorParameters = function () { return [
            { type: StyleComponent, decorators: [{ type: core.Optional }] }
        ]; };
        __decorate([
            core.Input()
        ], StyleTextComponent.prototype, "font", void 0);
        __decorate([
            core.Input()
        ], StyleTextComponent.prototype, "offsetX", void 0);
        __decorate([
            core.Input()
        ], StyleTextComponent.prototype, "offsetY", void 0);
        __decorate([
            core.Input()
        ], StyleTextComponent.prototype, "scale", void 0);
        __decorate([
            core.Input()
        ], StyleTextComponent.prototype, "rotateWithView", void 0);
        __decorate([
            core.Input()
        ], StyleTextComponent.prototype, "rotation", void 0);
        __decorate([
            core.Input()
        ], StyleTextComponent.prototype, "text", void 0);
        __decorate([
            core.Input()
        ], StyleTextComponent.prototype, "textAlign", void 0);
        __decorate([
            core.Input()
        ], StyleTextComponent.prototype, "textBaseLine", void 0);
        StyleTextComponent = __decorate([
            core.Component({
                selector: 'aol-style-text',
                template: " <div class=\"aol-style-text\"></div> "
            }),
            __param(0, core.Optional())
        ], StyleTextComponent);
        return StyleTextComponent;
    }());

    var StyleStrokeComponent = /** @class */ (function () {
        function StyleStrokeComponent(styleHost, styleCircleHost, styleTextHost) {
            if (!styleHost) {
                throw new Error('aol-style-stroke must be a descendant of aol-style');
            }
            if (!!styleTextHost) {
                this.host = styleTextHost;
            }
            else if (!!styleCircleHost) {
                this.host = styleCircleHost;
            }
            else {
                this.host = styleHost;
            }
            // console.log('creating aol-style-stroke with: ', this);
        }
        StyleStrokeComponent.prototype.ngOnInit = function () {
            // console.log('creating ol.style.Stroke instance with: ', this);
            this.instance = new style.Stroke(this);
            switch (this.host.componentType) {
                case 'style':
                    this.host.instance.setStroke(this.instance);
                    // console.log('setting ol.style instance\'s stroke:', this.host);
                    break;
                case 'style-text':
                    this.host.instance.setStroke(this.instance);
                    break;
                case 'style-circle':
                    this.host.stroke = this.instance;
                    // console.log('setting ol.style.circle instance\'s stroke:', this.host);
                    break;
                default:
                    throw new Error('unknown host type: ' + this.host);
                // break;
            }
        };
        StyleStrokeComponent.prototype.ngOnChanges = function (changes) {
            if (!this.instance) {
                return;
            }
            if (changes.color) {
                this.instance.setColor(changes.color.currentValue);
            }
            if (changes.lineCap) {
                this.instance.setLineCap(changes.lineCap.currentValue);
            }
            if (changes.lineDash) {
                this.instance.setLineDash(changes.lineDash.currentValue);
            }
            if (changes.lineJoin) {
                this.instance.setLineJoin(changes.lineJoin.currentValue);
            }
            if (changes.miterLimit) {
                this.instance.setMiterLimit(changes.miterLimit.currentValue);
            }
            if (changes.width) {
                this.instance.setWidth(changes.width.currentValue);
            }
            this.host.update();
            // console.log('changes detected in aol-style-stroke, setting new properties: ', changes);
        };
        StyleStrokeComponent.ctorParameters = function () { return [
            { type: StyleComponent, decorators: [{ type: core.Optional }] },
            { type: StyleCircleComponent, decorators: [{ type: core.Optional }] },
            { type: StyleTextComponent, decorators: [{ type: core.Optional }] }
        ]; };
        __decorate([
            core.Input()
        ], StyleStrokeComponent.prototype, "color", void 0);
        __decorate([
            core.Input()
        ], StyleStrokeComponent.prototype, "lineCap", void 0);
        __decorate([
            core.Input()
        ], StyleStrokeComponent.prototype, "lineDash", void 0);
        __decorate([
            core.Input()
        ], StyleStrokeComponent.prototype, "lineJoin", void 0);
        __decorate([
            core.Input()
        ], StyleStrokeComponent.prototype, "miterLimit", void 0);
        __decorate([
            core.Input()
        ], StyleStrokeComponent.prototype, "width", void 0);
        StyleStrokeComponent = __decorate([
            core.Component({
                selector: 'aol-style-stroke',
                template: " <div class=\"aol-style-stroke\"></div> "
            }),
            __param(0, core.Optional()),
            __param(1, core.Optional()),
            __param(2, core.Optional())
        ], StyleStrokeComponent);
        return StyleStrokeComponent;
    }());

    var StyleIconComponent = /** @class */ (function () {
        function StyleIconComponent(host) {
            this.host = host;
        }
        StyleIconComponent.prototype.ngOnInit = function () {
            // console.log('creating ol.style.Icon instance with: ', this);
            this.instance = new style.Icon(this);
            this.host.instance.setImage(this.instance);
        };
        StyleIconComponent.prototype.ngOnChanges = function (changes) {
            if (!this.instance) {
                return;
            }
            if (changes.opacity) {
                this.instance.setOpacity(changes.opacity.currentValue);
            }
            if (changes.rotation) {
                this.instance.setRotation(changes.rotation.currentValue);
            }
            if (changes.scale) {
                this.instance.setScale(changes.scale.currentValue);
            }
            if (changes.src) {
                this.instance = new style.Icon(this);
                this.host.instance.setImage(this.instance);
            }
            this.host.update();
            // console.log('changes detected in aol-style-icon: ', changes);
        };
        StyleIconComponent.ctorParameters = function () { return [
            { type: StyleComponent, decorators: [{ type: core.Host }] }
        ]; };
        __decorate([
            core.Input()
        ], StyleIconComponent.prototype, "anchor", void 0);
        __decorate([
            core.Input()
        ], StyleIconComponent.prototype, "anchorXUnits", void 0);
        __decorate([
            core.Input()
        ], StyleIconComponent.prototype, "anchorYUnits", void 0);
        __decorate([
            core.Input()
        ], StyleIconComponent.prototype, "anchorOrigin", void 0);
        __decorate([
            core.Input()
        ], StyleIconComponent.prototype, "color", void 0);
        __decorate([
            core.Input()
        ], StyleIconComponent.prototype, "crossOrigin", void 0);
        __decorate([
            core.Input()
        ], StyleIconComponent.prototype, "img", void 0);
        __decorate([
            core.Input()
        ], StyleIconComponent.prototype, "offset", void 0);
        __decorate([
            core.Input()
        ], StyleIconComponent.prototype, "offsetOrigin", void 0);
        __decorate([
            core.Input()
        ], StyleIconComponent.prototype, "opacity", void 0);
        __decorate([
            core.Input()
        ], StyleIconComponent.prototype, "scale", void 0);
        __decorate([
            core.Input()
        ], StyleIconComponent.prototype, "snapToPixel", void 0);
        __decorate([
            core.Input()
        ], StyleIconComponent.prototype, "rotateWithView", void 0);
        __decorate([
            core.Input()
        ], StyleIconComponent.prototype, "rotation", void 0);
        __decorate([
            core.Input()
        ], StyleIconComponent.prototype, "size", void 0);
        __decorate([
            core.Input()
        ], StyleIconComponent.prototype, "imgSize", void 0);
        __decorate([
            core.Input()
        ], StyleIconComponent.prototype, "src", void 0);
        StyleIconComponent = __decorate([
            core.Component({
                selector: 'aol-style-icon',
                template: " <div class=\"aol-style-icon\"></div> "
            }),
            __param(0, core.Host())
        ], StyleIconComponent);
        return StyleIconComponent;
    }());

    var StyleFillComponent = /** @class */ (function () {
        function StyleFillComponent(styleHost, styleCircleHost, styleTextHost) {
            if (!styleHost) {
                throw new Error('aol-style-stroke must be a descendant of aol-style');
            }
            if (!!styleTextHost) {
                this.host = styleTextHost;
            }
            else if (!!styleCircleHost) {
                this.host = styleCircleHost;
            }
            else {
                this.host = styleHost;
            }
            // console.log('creating aol-style-fill with: ', this);
        }
        StyleFillComponent.prototype.ngOnInit = function () {
            // console.log('creating ol.style.Fill instance with: ', this);
            this.instance = new style.Fill(this);
            switch (this.host.componentType) {
                case 'style':
                    this.host.instance.setFill(this.instance);
                    // console.log('setting ol.style instance\'s fill:', this.host);
                    break;
                case 'style-text':
                    this.host.instance.setFill(this.instance);
                    break;
                case 'style-circle':
                    this.host.fill = this.instance;
                    // console.log('setting ol.style.circle instance\'s fill:', this.host);
                    break;
                default:
                    throw new Error('unknown host type: ' + this.host);
                // break;
            }
        };
        StyleFillComponent.prototype.ngOnChanges = function (changes) {
            if (!this.instance) {
                return;
            }
            if (changes.color) {
                this.instance.setColor(changes.color.currentValue);
            }
            this.host.update();
            // console.log('changes detected in aol-style-fill, setting new color: ', changes);
        };
        StyleFillComponent.ctorParameters = function () { return [
            { type: StyleComponent, decorators: [{ type: core.Optional }] },
            { type: StyleCircleComponent, decorators: [{ type: core.Optional }] },
            { type: StyleTextComponent, decorators: [{ type: core.Optional }] }
        ]; };
        __decorate([
            core.Input()
        ], StyleFillComponent.prototype, "color", void 0);
        StyleFillComponent = __decorate([
            core.Component({
                selector: 'aol-style-fill',
                template: " <div class=\"aol-style-fill\"></div> "
            }),
            __param(0, core.Optional()),
            __param(1, core.Optional()),
            __param(2, core.Optional())
        ], StyleFillComponent);
        return StyleFillComponent;
    }());

    var DefaultControlComponent = /** @class */ (function () {
        function DefaultControlComponent(map) {
            this.map = map;
        }
        DefaultControlComponent.prototype.ngOnInit = function () {
            var _this = this;
            // console.log('ol.control.defaults init: ', this);
            this.instance = control.defaults(this);
            this.instance.forEach(function (c) { return _this.map.instance.addControl(c); });
        };
        DefaultControlComponent.prototype.ngOnDestroy = function () {
            var _this = this;
            // console.log('removing aol-control-defaults');
            this.instance.forEach(function (c) { return _this.map.instance.removeControl(c); });
        };
        DefaultControlComponent.ctorParameters = function () { return [
            { type: MapComponent }
        ]; };
        __decorate([
            core.Input()
        ], DefaultControlComponent.prototype, "attribution", void 0);
        __decorate([
            core.Input()
        ], DefaultControlComponent.prototype, "attributionOptions", void 0);
        __decorate([
            core.Input()
        ], DefaultControlComponent.prototype, "rotate", void 0);
        __decorate([
            core.Input()
        ], DefaultControlComponent.prototype, "rotateOptions", void 0);
        __decorate([
            core.Input()
        ], DefaultControlComponent.prototype, "zoom", void 0);
        __decorate([
            core.Input()
        ], DefaultControlComponent.prototype, "zoomOptions", void 0);
        DefaultControlComponent = __decorate([
            core.Component({
                selector: 'aol-control-defaults',
                template: ''
            })
        ], DefaultControlComponent);
        return DefaultControlComponent;
    }());

    var ControlComponent = /** @class */ (function () {
        function ControlComponent(map) {
            this.map = map;
            this.componentType = 'control';
        }
        ControlComponent.prototype.ngOnInit = function () {
            if (this.content) {
                this.element = this.content.elementRef.nativeElement;
                this.instance = new control.Control(this);
                this.map.instance.addControl(this.instance);
            }
        };
        ControlComponent.prototype.ngOnDestroy = function () {
            if (this.instance) {
                this.map.instance.removeControl(this.instance);
            }
        };
        ControlComponent.ctorParameters = function () { return [
            { type: MapComponent }
        ]; };
        __decorate([
            core.ContentChild(ContentComponent, { static: true })
        ], ControlComponent.prototype, "content", void 0);
        ControlComponent = __decorate([
            core.Component({
                selector: 'aol-control',
                template: " <ng-content></ng-content> "
            })
        ], ControlComponent);
        return ControlComponent;
    }());

    var ControlAttributionComponent = /** @class */ (function () {
        function ControlAttributionComponent(map, element) {
            this.map = map;
            this.element = element;
            this.componentType = 'control';
        }
        ControlAttributionComponent.prototype.ngOnInit = function () {
            this.target = this.element.nativeElement;
            // console.log('ol.control.Attribution init: ', this);
            this.instance = new control.Attribution(this);
            this.map.instance.addControl(this.instance);
        };
        ControlAttributionComponent.prototype.ngOnDestroy = function () {
            // console.log('removing aol-control-attribution');
            this.map.instance.removeControl(this.instance);
        };
        ControlAttributionComponent.ctorParameters = function () { return [
            { type: MapComponent },
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], ControlAttributionComponent.prototype, "collapsible", void 0);
        ControlAttributionComponent = __decorate([
            core.Component({
                selector: 'aol-control-attribution',
                template: ""
            })
        ], ControlAttributionComponent);
        return ControlAttributionComponent;
    }());

    var ControlFullScreenComponent = /** @class */ (function () {
        function ControlFullScreenComponent(map) {
            this.map = map;
            // console.log('instancing aol-control-fullscreen');
        }
        ControlFullScreenComponent.prototype.ngOnInit = function () {
            this.instance = new control.FullScreen(this);
            this.map.instance.addControl(this.instance);
        };
        ControlFullScreenComponent.prototype.ngOnDestroy = function () {
            // console.log('removing aol-control-fullscreen');
            this.map.instance.removeControl(this.instance);
        };
        ControlFullScreenComponent.ctorParameters = function () { return [
            { type: MapComponent }
        ]; };
        __decorate([
            core.Input()
        ], ControlFullScreenComponent.prototype, "className", void 0);
        __decorate([
            core.Input()
        ], ControlFullScreenComponent.prototype, "label", void 0);
        __decorate([
            core.Input()
        ], ControlFullScreenComponent.prototype, "labelActive", void 0);
        __decorate([
            core.Input()
        ], ControlFullScreenComponent.prototype, "tipLabel", void 0);
        __decorate([
            core.Input()
        ], ControlFullScreenComponent.prototype, "keys", void 0);
        ControlFullScreenComponent = __decorate([
            core.Component({
                selector: 'aol-control-fullscreen',
                template: " <ng-content></ng-content> "
            })
        ], ControlFullScreenComponent);
        return ControlFullScreenComponent;
    }());

    var ControlMousePositionComponent = /** @class */ (function () {
        function ControlMousePositionComponent(map, element) {
            this.map = map;
            this.element = element;
        }
        ControlMousePositionComponent.prototype.ngOnInit = function () {
            this.target = this.element.nativeElement;
            // console.log('ol.control.MousePosition init: ', this);
            this.instance = new MousePosition(this);
            this.map.instance.addControl(this.instance);
        };
        ControlMousePositionComponent.prototype.ngOnDestroy = function () {
            // console.log('removing aol-control-mouseposition');
            this.map.instance.removeControl(this.instance);
        };
        ControlMousePositionComponent.ctorParameters = function () { return [
            { type: MapComponent },
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], ControlMousePositionComponent.prototype, "coordinateFormat", void 0);
        __decorate([
            core.Input()
        ], ControlMousePositionComponent.prototype, "projection", void 0);
        ControlMousePositionComponent = __decorate([
            core.Component({
                selector: 'aol-control-mouseposition',
                template: ""
            })
        ], ControlMousePositionComponent);
        return ControlMousePositionComponent;
    }());

    var ControlOverviewMapComponent = /** @class */ (function () {
        function ControlOverviewMapComponent(map) {
            this.map = map;
        }
        ControlOverviewMapComponent.prototype.ngOnInit = function () {
            this.instance = new control.OverviewMap(this);
            this.map.instance.addControl(this.instance);
        };
        ControlOverviewMapComponent.prototype.ngOnDestroy = function () {
            this.map.instance.removeControl(this.instance);
        };
        ControlOverviewMapComponent.prototype.ngOnChanges = function (changes) {
            if (this.instance != null && changes.hasOwnProperty('view')) {
                this.reloadInstance();
            }
        };
        ControlOverviewMapComponent.prototype.reloadInstance = function () {
            this.map.instance.removeControl(this.instance);
            this.instance = new control.OverviewMap(this);
            this.map.instance.addControl(this.instance);
        };
        ControlOverviewMapComponent.ctorParameters = function () { return [
            { type: MapComponent }
        ]; };
        __decorate([
            core.Input()
        ], ControlOverviewMapComponent.prototype, "collapsed", void 0);
        __decorate([
            core.Input()
        ], ControlOverviewMapComponent.prototype, "collapseLabel", void 0);
        __decorate([
            core.Input()
        ], ControlOverviewMapComponent.prototype, "collapsible", void 0);
        __decorate([
            core.Input()
        ], ControlOverviewMapComponent.prototype, "label", void 0);
        __decorate([
            core.Input()
        ], ControlOverviewMapComponent.prototype, "layers", void 0);
        __decorate([
            core.Input()
        ], ControlOverviewMapComponent.prototype, "target", void 0);
        __decorate([
            core.Input()
        ], ControlOverviewMapComponent.prototype, "tipLabel", void 0);
        __decorate([
            core.Input()
        ], ControlOverviewMapComponent.prototype, "view", void 0);
        ControlOverviewMapComponent = __decorate([
            core.Component({
                selector: 'aol-control-overviewmap',
                template: " <ng-content></ng-content> "
            })
        ], ControlOverviewMapComponent);
        return ControlOverviewMapComponent;
    }());

    var ControlRotateComponent = /** @class */ (function () {
        function ControlRotateComponent(map) {
            this.map = map;
            // console.log('instancing aol-control-rotate');
        }
        ControlRotateComponent.prototype.ngOnInit = function () {
            this.instance = new control.Rotate(this);
            this.map.instance.addControl(this.instance);
        };
        ControlRotateComponent.prototype.ngOnDestroy = function () {
            // console.log('removing aol-control-rotate');
            this.map.instance.removeControl(this.instance);
        };
        ControlRotateComponent.ctorParameters = function () { return [
            { type: MapComponent }
        ]; };
        __decorate([
            core.Input()
        ], ControlRotateComponent.prototype, "className", void 0);
        __decorate([
            core.Input()
        ], ControlRotateComponent.prototype, "label", void 0);
        __decorate([
            core.Input()
        ], ControlRotateComponent.prototype, "tipLabel", void 0);
        __decorate([
            core.Input()
        ], ControlRotateComponent.prototype, "duration", void 0);
        __decorate([
            core.Input()
        ], ControlRotateComponent.prototype, "autoHide", void 0);
        ControlRotateComponent = __decorate([
            core.Component({
                selector: 'aol-control-rotate',
                template: " <ng-content></ng-content> "
            })
        ], ControlRotateComponent);
        return ControlRotateComponent;
    }());

    var ControlScaleLineComponent = /** @class */ (function () {
        function ControlScaleLineComponent(map) {
            this.map = map;
            // console.log('instancing aol-control-scaleline');
        }
        ControlScaleLineComponent.prototype.ngOnInit = function () {
            this.instance = new control.ScaleLine(this);
            this.map.instance.addControl(this.instance);
        };
        ControlScaleLineComponent.prototype.ngOnDestroy = function () {
            // console.log('removing aol-control-scaleline');
            this.map.instance.removeControl(this.instance);
        };
        ControlScaleLineComponent.ctorParameters = function () { return [
            { type: MapComponent }
        ]; };
        __decorate([
            core.Input()
        ], ControlScaleLineComponent.prototype, "units", void 0);
        ControlScaleLineComponent = __decorate([
            core.Component({
                selector: 'aol-control-scaleline',
                template: " <ng-content></ng-content> "
            })
        ], ControlScaleLineComponent);
        return ControlScaleLineComponent;
    }());

    var ControlZoomComponent = /** @class */ (function () {
        function ControlZoomComponent(map) {
            this.map = map;
            // console.log('instancing aol-control-zoom');
        }
        ControlZoomComponent.prototype.ngOnInit = function () {
            this.instance = new control.Zoom(this);
            this.map.instance.addControl(this.instance);
        };
        ControlZoomComponent.prototype.ngOnDestroy = function () {
            // console.log('removing aol-control-zoom');
            this.map.instance.removeControl(this.instance);
        };
        ControlZoomComponent.ctorParameters = function () { return [
            { type: MapComponent }
        ]; };
        __decorate([
            core.Input()
        ], ControlZoomComponent.prototype, "duration", void 0);
        __decorate([
            core.Input()
        ], ControlZoomComponent.prototype, "zoomInLabel", void 0);
        __decorate([
            core.Input()
        ], ControlZoomComponent.prototype, "zoomOutLabel", void 0);
        __decorate([
            core.Input()
        ], ControlZoomComponent.prototype, "zoomInTipLabel", void 0);
        __decorate([
            core.Input()
        ], ControlZoomComponent.prototype, "zoomOutTipLabel", void 0);
        __decorate([
            core.Input()
        ], ControlZoomComponent.prototype, "delta", void 0);
        ControlZoomComponent = __decorate([
            core.Component({
                selector: 'aol-control-zoom',
                template: " <ng-content></ng-content> "
            })
        ], ControlZoomComponent);
        return ControlZoomComponent;
    }());

    var ControlZoomSliderComponent = /** @class */ (function () {
        function ControlZoomSliderComponent(map) {
            this.map = map;
            // console.log('instancing aol-control-zoomslider');
        }
        ControlZoomSliderComponent.prototype.ngOnInit = function () {
            this.instance = new control.ZoomSlider(this);
            this.map.instance.addControl(this.instance);
        };
        ControlZoomSliderComponent.prototype.ngOnDestroy = function () {
            // console.log('removing aol-control-zoomslider');
            this.map.instance.removeControl(this.instance);
        };
        ControlZoomSliderComponent.ctorParameters = function () { return [
            { type: MapComponent }
        ]; };
        __decorate([
            core.Input()
        ], ControlZoomSliderComponent.prototype, "className", void 0);
        __decorate([
            core.Input()
        ], ControlZoomSliderComponent.prototype, "duration", void 0);
        __decorate([
            core.Input()
        ], ControlZoomSliderComponent.prototype, "maxResolution", void 0);
        __decorate([
            core.Input()
        ], ControlZoomSliderComponent.prototype, "minResolution", void 0);
        ControlZoomSliderComponent = __decorate([
            core.Component({
                selector: 'aol-control-zoomslider',
                template: " <ng-content></ng-content> "
            })
        ], ControlZoomSliderComponent);
        return ControlZoomSliderComponent;
    }());

    var ControlZoomToExtentComponent = /** @class */ (function () {
        function ControlZoomToExtentComponent(map) {
            this.map = map;
            // console.log('instancing aol-control-zoomtoextent');
        }
        ControlZoomToExtentComponent.prototype.ngOnInit = function () {
            this.instance = new control.ZoomToExtent(this);
            this.map.instance.addControl(this.instance);
        };
        ControlZoomToExtentComponent.prototype.ngOnDestroy = function () {
            // console.log('removing aol-control-zoomtoextent');
            this.map.instance.removeControl(this.instance);
        };
        ControlZoomToExtentComponent.ctorParameters = function () { return [
            { type: MapComponent }
        ]; };
        __decorate([
            core.Input()
        ], ControlZoomToExtentComponent.prototype, "className", void 0);
        __decorate([
            core.Input()
        ], ControlZoomToExtentComponent.prototype, "label", void 0);
        __decorate([
            core.Input()
        ], ControlZoomToExtentComponent.prototype, "tipLabel", void 0);
        __decorate([
            core.Input()
        ], ControlZoomToExtentComponent.prototype, "extent", void 0);
        ControlZoomToExtentComponent = __decorate([
            core.Component({
                selector: 'aol-control-zoomtoextent',
                template: " <ng-content></ng-content> "
            })
        ], ControlZoomToExtentComponent);
        return ControlZoomToExtentComponent;
    }());

    var FormatMVTComponent = /** @class */ (function (_super) {
        __extends(FormatMVTComponent, _super);
        function FormatMVTComponent() {
            var _this = _super.call(this) || this;
            _this.instance = new format.MVT(_this);
            return _this;
        }
        FormatMVTComponent_1 = FormatMVTComponent;
        var FormatMVTComponent_1;
        __decorate([
            core.Input()
        ], FormatMVTComponent.prototype, "featureClass", void 0);
        __decorate([
            core.Input()
        ], FormatMVTComponent.prototype, "geometryName", void 0);
        __decorate([
            core.Input()
        ], FormatMVTComponent.prototype, "layerName", void 0);
        __decorate([
            core.Input()
        ], FormatMVTComponent.prototype, "layers", void 0);
        FormatMVTComponent = FormatMVTComponent_1 = __decorate([
            core.Component({
                selector: 'aol-format-mvt',
                template: '',
                providers: [{ provide: FormatComponent, useExisting: core.forwardRef(function () { return FormatMVTComponent_1; }) }]
            })
        ], FormatMVTComponent);
        return FormatMVTComponent;
    }(FormatComponent));

    var DefaultInteractionComponent = /** @class */ (function () {
        function DefaultInteractionComponent(map) {
            this.map = map;
        }
        DefaultInteractionComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.instance = interaction.defaults();
            this.instance.forEach(function (i) { return _this.map.instance.addInteraction(i); });
        };
        DefaultInteractionComponent.prototype.ngOnDestroy = function () {
            var _this = this;
            this.instance.forEach(function (i) { return _this.map.instance.removeInteraction(i); });
        };
        DefaultInteractionComponent.ctorParameters = function () { return [
            { type: MapComponent }
        ]; };
        DefaultInteractionComponent = __decorate([
            core.Component({
                selector: 'aol-interaction-default',
                template: ''
            })
        ], DefaultInteractionComponent);
        return DefaultInteractionComponent;
    }());

    var DoubleClickZoomInteractionComponent = /** @class */ (function () {
        function DoubleClickZoomInteractionComponent(map) {
            this.map = map;
        }
        DoubleClickZoomInteractionComponent.prototype.ngOnInit = function () {
            this.instance = new interaction.DoubleClickZoom(this);
            this.map.instance.addInteraction(this.instance);
        };
        DoubleClickZoomInteractionComponent.prototype.ngOnDestroy = function () {
            this.map.instance.removeInteraction(this.instance);
        };
        DoubleClickZoomInteractionComponent.ctorParameters = function () { return [
            { type: MapComponent }
        ]; };
        __decorate([
            core.Input()
        ], DoubleClickZoomInteractionComponent.prototype, "duration", void 0);
        __decorate([
            core.Input()
        ], DoubleClickZoomInteractionComponent.prototype, "delta", void 0);
        DoubleClickZoomInteractionComponent = __decorate([
            core.Component({
                selector: 'aol-interaction-doubleclickzoom',
                template: ''
            })
        ], DoubleClickZoomInteractionComponent);
        return DoubleClickZoomInteractionComponent;
    }());

    var DragAndDropInteractionComponent = /** @class */ (function () {
        function DragAndDropInteractionComponent(map) {
            this.map = map;
        }
        DragAndDropInteractionComponent.prototype.ngOnInit = function () {
            this.instance = new interaction.DragAndDrop(this);
            this.map.instance.addInteraction(this.instance);
        };
        DragAndDropInteractionComponent.prototype.ngOnDestroy = function () {
            this.map.instance.removeInteraction(this.instance);
        };
        DragAndDropInteractionComponent.ctorParameters = function () { return [
            { type: MapComponent }
        ]; };
        __decorate([
            core.Input()
        ], DragAndDropInteractionComponent.prototype, "formatConstructors", void 0);
        __decorate([
            core.Input()
        ], DragAndDropInteractionComponent.prototype, "projection", void 0);
        __decorate([
            core.Input()
        ], DragAndDropInteractionComponent.prototype, "target", void 0);
        DragAndDropInteractionComponent = __decorate([
            core.Component({
                selector: 'aol-interaction-draganddrop',
                template: ''
            })
        ], DragAndDropInteractionComponent);
        return DragAndDropInteractionComponent;
    }());

    var DragBoxInteractionComponent = /** @class */ (function () {
        function DragBoxInteractionComponent(map) {
            this.map = map;
        }
        DragBoxInteractionComponent.prototype.ngOnInit = function () {
            this.instance = new interaction.DragBox(this);
            this.map.instance.addInteraction(this.instance);
        };
        DragBoxInteractionComponent.prototype.ngOnDestroy = function () {
            this.map.instance.removeInteraction(this.instance);
        };
        DragBoxInteractionComponent.ctorParameters = function () { return [
            { type: MapComponent }
        ]; };
        __decorate([
            core.Input()
        ], DragBoxInteractionComponent.prototype, "className", void 0);
        __decorate([
            core.Input()
        ], DragBoxInteractionComponent.prototype, "condition", void 0);
        __decorate([
            core.Input()
        ], DragBoxInteractionComponent.prototype, "boxEndCondition", void 0);
        DragBoxInteractionComponent = __decorate([
            core.Component({
                selector: 'aol-interaction-dragbox',
                template: ''
            })
        ], DragBoxInteractionComponent);
        return DragBoxInteractionComponent;
    }());

    var DragPanInteractionComponent = /** @class */ (function () {
        function DragPanInteractionComponent(map) {
            this.map = map;
        }
        DragPanInteractionComponent.prototype.ngOnInit = function () {
            this.instance = new interaction.DragPan(this);
            this.map.instance.addInteraction(this.instance);
        };
        DragPanInteractionComponent.prototype.ngOnDestroy = function () {
            this.map.instance.removeInteraction(this.instance);
        };
        DragPanInteractionComponent.ctorParameters = function () { return [
            { type: MapComponent }
        ]; };
        __decorate([
            core.Input()
        ], DragPanInteractionComponent.prototype, "condition", void 0);
        __decorate([
            core.Input()
        ], DragPanInteractionComponent.prototype, "kinetic", void 0);
        DragPanInteractionComponent = __decorate([
            core.Component({
                selector: 'aol-interaction-dragpan',
                template: ''
            })
        ], DragPanInteractionComponent);
        return DragPanInteractionComponent;
    }());

    var DragRotateInteractionComponent = /** @class */ (function () {
        function DragRotateInteractionComponent(map) {
            this.map = map;
        }
        DragRotateInteractionComponent.prototype.ngOnInit = function () {
            this.instance = new interaction.DragRotate(this);
            this.map.instance.addInteraction(this.instance);
        };
        DragRotateInteractionComponent.prototype.ngOnDestroy = function () {
            this.map.instance.removeInteraction(this.instance);
        };
        DragRotateInteractionComponent.ctorParameters = function () { return [
            { type: MapComponent }
        ]; };
        __decorate([
            core.Input()
        ], DragRotateInteractionComponent.prototype, "condition", void 0);
        __decorate([
            core.Input()
        ], DragRotateInteractionComponent.prototype, "duration", void 0);
        DragRotateInteractionComponent = __decorate([
            core.Component({
                selector: 'aol-interaction-dragrotate',
                template: ''
            })
        ], DragRotateInteractionComponent);
        return DragRotateInteractionComponent;
    }());

    var DragRotateAndZoomInteractionComponent = /** @class */ (function () {
        function DragRotateAndZoomInteractionComponent(map) {
            this.map = map;
        }
        DragRotateAndZoomInteractionComponent.prototype.ngOnInit = function () {
            this.instance = new interaction.DragRotateAndZoom(this);
            this.map.instance.addInteraction(this.instance);
        };
        DragRotateAndZoomInteractionComponent.prototype.ngOnDestroy = function () {
            this.map.instance.removeInteraction(this.instance);
        };
        DragRotateAndZoomInteractionComponent.ctorParameters = function () { return [
            { type: MapComponent }
        ]; };
        __decorate([
            core.Input()
        ], DragRotateAndZoomInteractionComponent.prototype, "condition", void 0);
        __decorate([
            core.Input()
        ], DragRotateAndZoomInteractionComponent.prototype, "duration", void 0);
        DragRotateAndZoomInteractionComponent = __decorate([
            core.Component({
                selector: 'aol-interaction-dragrotateandzoom',
                template: ''
            })
        ], DragRotateAndZoomInteractionComponent);
        return DragRotateAndZoomInteractionComponent;
    }());

    var DragZoomInteractionComponent = /** @class */ (function () {
        function DragZoomInteractionComponent(map) {
            this.map = map;
        }
        DragZoomInteractionComponent.prototype.ngOnInit = function () {
            this.instance = new interaction.DragZoom(this);
            this.map.instance.addInteraction(this.instance);
        };
        DragZoomInteractionComponent.prototype.ngOnDestroy = function () {
            this.map.instance.removeInteraction(this.instance);
        };
        DragZoomInteractionComponent.ctorParameters = function () { return [
            { type: MapComponent }
        ]; };
        __decorate([
            core.Input()
        ], DragZoomInteractionComponent.prototype, "className", void 0);
        __decorate([
            core.Input()
        ], DragZoomInteractionComponent.prototype, "condition", void 0);
        __decorate([
            core.Input()
        ], DragZoomInteractionComponent.prototype, "duration", void 0);
        __decorate([
            core.Input()
        ], DragZoomInteractionComponent.prototype, "out", void 0);
        DragZoomInteractionComponent = __decorate([
            core.Component({
                selector: 'aol-interaction-dragzoom',
                template: ''
            })
        ], DragZoomInteractionComponent);
        return DragZoomInteractionComponent;
    }());

    var MouseWheelZoomInteractionComponent = /** @class */ (function () {
        function MouseWheelZoomInteractionComponent(map) {
            this.map = map;
        }
        MouseWheelZoomInteractionComponent.prototype.ngOnInit = function () {
            this.instance = new interaction.MouseWheelZoom(this);
            this.map.instance.addInteraction(this.instance);
        };
        MouseWheelZoomInteractionComponent.prototype.ngOnDestroy = function () {
            this.map.instance.removeInteraction(this.instance);
        };
        MouseWheelZoomInteractionComponent.ctorParameters = function () { return [
            { type: MapComponent }
        ]; };
        __decorate([
            core.Input()
        ], MouseWheelZoomInteractionComponent.prototype, "duration", void 0);
        __decorate([
            core.Input()
        ], MouseWheelZoomInteractionComponent.prototype, "timeout", void 0);
        __decorate([
            core.Input()
        ], MouseWheelZoomInteractionComponent.prototype, "useAnchor", void 0);
        MouseWheelZoomInteractionComponent = __decorate([
            core.Component({
                selector: 'aol-interaction-mousewheelzoom',
                template: ''
            })
        ], MouseWheelZoomInteractionComponent);
        return MouseWheelZoomInteractionComponent;
    }());

    var PinchZoomInteractionComponent = /** @class */ (function () {
        function PinchZoomInteractionComponent(map) {
            this.map = map;
        }
        PinchZoomInteractionComponent.prototype.ngOnInit = function () {
            this.instance = new interaction.PinchZoom(this);
            this.map.instance.addInteraction(this.instance);
        };
        PinchZoomInteractionComponent.prototype.ngOnDestroy = function () {
            this.map.instance.removeInteraction(this.instance);
        };
        PinchZoomInteractionComponent.ctorParameters = function () { return [
            { type: MapComponent }
        ]; };
        __decorate([
            core.Input()
        ], PinchZoomInteractionComponent.prototype, "duration", void 0);
        __decorate([
            core.Input()
        ], PinchZoomInteractionComponent.prototype, "constrainResolution", void 0);
        PinchZoomInteractionComponent = __decorate([
            core.Component({
                selector: 'aol-interaction-pinchzoom',
                template: ''
            })
        ], PinchZoomInteractionComponent);
        return PinchZoomInteractionComponent;
    }());

    var DrawInteractionComponent = /** @class */ (function () {
        function DrawInteractionComponent(map) {
            this.map = map;
            this.olChange = new core.EventEmitter();
            this.olChangeActive = new core.EventEmitter();
            this.drawEnd = new core.EventEmitter();
            this.drawStart = new core.EventEmitter();
            this.propertyChange = new core.EventEmitter();
        }
        DrawInteractionComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.instance = new interaction.Draw(this);
            this.instance.on('change', function (event) { return _this.olChange.emit(event); });
            this.instance.on('change:active', function (event) { return _this.olChangeActive.emit(event); });
            this.instance.on('drawend', function (event) { return _this.drawEnd.emit(event); });
            this.instance.on('drawstart', function (event) { return _this.drawStart.emit(event); });
            this.instance.on('propertychange', function (event) { return _this.propertyChange.emit(event); });
            this.map.instance.addInteraction(this.instance);
        };
        DrawInteractionComponent.prototype.ngOnDestroy = function () {
            this.map.instance.removeInteraction(this.instance);
        };
        DrawInteractionComponent.ctorParameters = function () { return [
            { type: MapComponent }
        ]; };
        __decorate([
            core.Input()
        ], DrawInteractionComponent.prototype, "clickTolerance", void 0);
        __decorate([
            core.Input()
        ], DrawInteractionComponent.prototype, "features", void 0);
        __decorate([
            core.Input()
        ], DrawInteractionComponent.prototype, "source", void 0);
        __decorate([
            core.Input()
        ], DrawInteractionComponent.prototype, "snapTolerance", void 0);
        __decorate([
            core.Input()
        ], DrawInteractionComponent.prototype, "type", void 0);
        __decorate([
            core.Input()
        ], DrawInteractionComponent.prototype, "maxPoints", void 0);
        __decorate([
            core.Input()
        ], DrawInteractionComponent.prototype, "minPoints", void 0);
        __decorate([
            core.Input()
        ], DrawInteractionComponent.prototype, "finishCondition", void 0);
        __decorate([
            core.Input()
        ], DrawInteractionComponent.prototype, "style", void 0);
        __decorate([
            core.Input()
        ], DrawInteractionComponent.prototype, "geometryFunction", void 0);
        __decorate([
            core.Input()
        ], DrawInteractionComponent.prototype, "geometryName", void 0);
        __decorate([
            core.Input()
        ], DrawInteractionComponent.prototype, "condition", void 0);
        __decorate([
            core.Input()
        ], DrawInteractionComponent.prototype, "freehandCondition", void 0);
        __decorate([
            core.Input()
        ], DrawInteractionComponent.prototype, "freehand", void 0);
        __decorate([
            core.Input()
        ], DrawInteractionComponent.prototype, "wrapX", void 0);
        __decorate([
            core.Output()
        ], DrawInteractionComponent.prototype, "olChange", void 0);
        __decorate([
            core.Output()
        ], DrawInteractionComponent.prototype, "olChangeActive", void 0);
        __decorate([
            core.Output()
        ], DrawInteractionComponent.prototype, "drawEnd", void 0);
        __decorate([
            core.Output()
        ], DrawInteractionComponent.prototype, "drawStart", void 0);
        __decorate([
            core.Output()
        ], DrawInteractionComponent.prototype, "propertyChange", void 0);
        DrawInteractionComponent = __decorate([
            core.Component({
                selector: 'aol-interaction-draw',
                template: ''
            })
        ], DrawInteractionComponent);
        return DrawInteractionComponent;
    }());

    var SelectInteractionComponent = /** @class */ (function () {
        function SelectInteractionComponent(map) {
            this.map = map;
            this.olChange = new core.EventEmitter();
            this.olSelect = new core.EventEmitter();
            this.propertyChange = new core.EventEmitter();
        }
        SelectInteractionComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.instance = new interaction.Select(this);
            this.instance.on('change', function (event) { return _this.olChange.emit(event); });
            this.instance.on('select', function (event) { return _this.olSelect.emit(event); });
            this.instance.on('propertychange', function (event) { return _this.propertyChange.emit(event); });
            this.map.instance.addInteraction(this.instance);
        };
        SelectInteractionComponent.prototype.ngOnDestroy = function () {
            this.map.instance.removeInteraction(this.instance);
        };
        SelectInteractionComponent.ctorParameters = function () { return [
            { type: MapComponent }
        ]; };
        __decorate([
            core.Input()
        ], SelectInteractionComponent.prototype, "addCondition", void 0);
        __decorate([
            core.Input()
        ], SelectInteractionComponent.prototype, "condition", void 0);
        __decorate([
            core.Input()
        ], SelectInteractionComponent.prototype, "layers", void 0);
        __decorate([
            core.Input()
        ], SelectInteractionComponent.prototype, "style", void 0);
        __decorate([
            core.Input()
        ], SelectInteractionComponent.prototype, "removeCondition", void 0);
        __decorate([
            core.Input()
        ], SelectInteractionComponent.prototype, "toggleCondition", void 0);
        __decorate([
            core.Input()
        ], SelectInteractionComponent.prototype, "multi", void 0);
        __decorate([
            core.Input()
        ], SelectInteractionComponent.prototype, "features", void 0);
        __decorate([
            core.Input()
        ], SelectInteractionComponent.prototype, "filter", void 0);
        __decorate([
            core.Input()
        ], SelectInteractionComponent.prototype, "wrapX", void 0);
        __decorate([
            core.Output()
        ], SelectInteractionComponent.prototype, "olChange", void 0);
        __decorate([
            core.Output()
        ], SelectInteractionComponent.prototype, "olSelect", void 0);
        __decorate([
            core.Output()
        ], SelectInteractionComponent.prototype, "propertyChange", void 0);
        SelectInteractionComponent = __decorate([
            core.Component({
                selector: 'aol-interaction-select',
                template: ''
            })
        ], SelectInteractionComponent);
        return SelectInteractionComponent;
    }());

    var ModifyInteractionComponent = /** @class */ (function () {
        function ModifyInteractionComponent(map) {
            this.map = map;
            this.modifyEnd = new core.EventEmitter();
            this.modifyStart = new core.EventEmitter();
            this.olChange = new core.EventEmitter();
            this.olChangeActive = new core.EventEmitter();
            this.propertyChange = new core.EventEmitter();
        }
        ModifyInteractionComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.instance = new interaction.Modify(this);
            this.instance.on('change', function (event) { return _this.olChange.emit(event); });
            this.instance.on('change:active', function (event) { return _this.olChangeActive.emit(event); });
            this.instance.on('propertychange', function (event) { return _this.propertyChange.emit(event); });
            this.instance.on('modifyend', function (event) { return _this.modifyEnd.emit(event); });
            this.instance.on('modifystart', function (event) { return _this.modifyStart.emit(event); });
            this.map.instance.addInteraction(this.instance);
        };
        ModifyInteractionComponent.prototype.ngOnDestroy = function () {
            this.map.instance.removeInteraction(this.instance);
        };
        ModifyInteractionComponent.ctorParameters = function () { return [
            { type: MapComponent }
        ]; };
        __decorate([
            core.Input()
        ], ModifyInteractionComponent.prototype, "condition", void 0);
        __decorate([
            core.Input()
        ], ModifyInteractionComponent.prototype, "deleteCondition", void 0);
        __decorate([
            core.Input()
        ], ModifyInteractionComponent.prototype, "pixelTolerance", void 0);
        __decorate([
            core.Input()
        ], ModifyInteractionComponent.prototype, "style", void 0);
        __decorate([
            core.Input()
        ], ModifyInteractionComponent.prototype, "features", void 0);
        __decorate([
            core.Input()
        ], ModifyInteractionComponent.prototype, "wrapX", void 0);
        __decorate([
            core.Input()
        ], ModifyInteractionComponent.prototype, "source", void 0);
        __decorate([
            core.Output()
        ], ModifyInteractionComponent.prototype, "modifyEnd", void 0);
        __decorate([
            core.Output()
        ], ModifyInteractionComponent.prototype, "modifyStart", void 0);
        __decorate([
            core.Output()
        ], ModifyInteractionComponent.prototype, "olChange", void 0);
        __decorate([
            core.Output()
        ], ModifyInteractionComponent.prototype, "olChangeActive", void 0);
        __decorate([
            core.Output()
        ], ModifyInteractionComponent.prototype, "propertyChange", void 0);
        ModifyInteractionComponent = __decorate([
            core.Component({
                selector: 'aol-interaction-modify',
                template: ''
            })
        ], ModifyInteractionComponent);
        return ModifyInteractionComponent;
    }());

    var TranslateInteractionComponent = /** @class */ (function () {
        function TranslateInteractionComponent(map) {
            this.map = map;
            this.olChange = new core.EventEmitter();
            this.propertyChange = new core.EventEmitter();
            this.translateEnd = new core.EventEmitter();
            this.translateStart = new core.EventEmitter();
            this.translating = new core.EventEmitter();
        }
        TranslateInteractionComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.instance = new interaction.Translate(this);
            this.instance.on('change', function (event) { return _this.olChange.emit(event); });
            this.instance.on('propertychange', function (event) { return _this.propertyChange.emit(event); });
            this.instance.on('translateend', function (event) { return _this.translateEnd.emit(event); });
            this.instance.on('translatestart', function (event) { return _this.translateStart.emit(event); });
            this.instance.on('translating', function (event) { return _this.translating.emit(event); });
            this.map.instance.addInteraction(this.instance);
        };
        TranslateInteractionComponent.prototype.ngOnDestroy = function () {
            this.map.instance.removeInteraction(this.instance);
        };
        TranslateInteractionComponent.ctorParameters = function () { return [
            { type: MapComponent }
        ]; };
        __decorate([
            core.Input()
        ], TranslateInteractionComponent.prototype, "features", void 0);
        __decorate([
            core.Input()
        ], TranslateInteractionComponent.prototype, "layers", void 0);
        __decorate([
            core.Input()
        ], TranslateInteractionComponent.prototype, "hitTolerance", void 0);
        __decorate([
            core.Output()
        ], TranslateInteractionComponent.prototype, "olChange", void 0);
        __decorate([
            core.Output()
        ], TranslateInteractionComponent.prototype, "propertyChange", void 0);
        __decorate([
            core.Output()
        ], TranslateInteractionComponent.prototype, "translateEnd", void 0);
        __decorate([
            core.Output()
        ], TranslateInteractionComponent.prototype, "translateStart", void 0);
        __decorate([
            core.Output()
        ], TranslateInteractionComponent.prototype, "translating", void 0);
        TranslateInteractionComponent = __decorate([
            core.Component({
                selector: 'aol-interaction-translate',
                template: ''
            })
        ], TranslateInteractionComponent);
        return TranslateInteractionComponent;
    }());

    var AttributionComponent = /** @class */ (function () {
        function AttributionComponent(elementRef) {
            this.elementRef = elementRef;
        }
        AttributionComponent.prototype.ngOnInit = function () {
            this.html = this.elementRef.nativeElement.innerHTML;
            this.instance = new control.Attribution(this);
        };
        AttributionComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        AttributionComponent = __decorate([
            core.Component({
                selector: 'aol-attribution',
                template: '<ng-content></ng-content>'
            })
        ], AttributionComponent);
        return AttributionComponent;
    }());

    var AttributionsComponent = /** @class */ (function () {
        function AttributionsComponent(source) {
            this.source = source;
        }
        /* we can do this at the very end */
        AttributionsComponent.prototype.ngAfterViewInit = function () {
            if (this.attributions.length) {
                this.instance = this.attributions.map(function (cmp) { return cmp.instance; });
                // console.log('setting attributions:', this.instance);
                this.source.instance.setAttributions(this.instance);
            }
        };
        AttributionsComponent.ctorParameters = function () { return [
            { type: SourceComponent, decorators: [{ type: core.Host }] }
        ]; };
        __decorate([
            core.ContentChildren(AttributionComponent)
        ], AttributionsComponent.prototype, "attributions", void 0);
        AttributionsComponent = __decorate([
            core.Component({
                selector: 'aol-attributions',
                template: '<ng-content></ng-content>'
            }),
            __param(0, core.Host())
        ], AttributionsComponent);
        return AttributionsComponent;
    }());

    var SourceUTFGridComponent = /** @class */ (function (_super) {
        __extends(SourceUTFGridComponent, _super);
        function SourceUTFGridComponent(layer) {
            return _super.call(this, layer) || this;
        }
        SourceUTFGridComponent_1 = SourceUTFGridComponent;
        SourceUTFGridComponent.prototype.ngOnInit = function () {
            this.instance = new source.UTFGrid(this);
            this.host.instance.setSource(this.instance);
        };
        var SourceUTFGridComponent_1;
        SourceUTFGridComponent.ctorParameters = function () { return [
            { type: LayerTileComponent, decorators: [{ type: core.Host }] }
        ]; };
        __decorate([
            core.Input()
        ], SourceUTFGridComponent.prototype, "tileJSON", void 0);
        __decorate([
            core.Input()
        ], SourceUTFGridComponent.prototype, "url", void 0);
        SourceUTFGridComponent = SourceUTFGridComponent_1 = __decorate([
            core.Component({
                selector: 'aol-source-utfgrid',
                template: " <ng-content></ng-content> ",
                providers: [{ provide: SourceComponent, useExisting: core.forwardRef(function () { return SourceUTFGridComponent_1; }) }]
            }),
            __param(0, core.Host())
        ], SourceUTFGridComponent);
        return SourceUTFGridComponent;
    }(SourceComponent));

    var COMPONENTS = [
        MapComponent,
        ViewComponent,
        GraticuleComponent,
        LayerGroupComponent,
        LayerImageComponent,
        LayerTileComponent,
        LayerVectorComponent,
        LayerVectorTileComponent,
        SourceOsmComponent,
        SourceBingmapsComponent,
        SourceClusterComponent,
        SourceUTFGridComponent,
        SourceVectorComponent,
        SourceXYZComponent,
        SourceVectorTileComponent,
        SourceTileWMSComponent,
        SourceTileWMTSComponent,
        SourceTileJSONComponent,
        SourceGeoJSONComponent,
        SourceImageStaticComponent,
        SourceImageWMSComponent,
        SourceImageArcGISRestComponent,
        SourceRasterComponent,
        FeatureComponent,
        GeometryLinestringComponent,
        GeometryMultiLinestringComponent,
        GeometryMultiPointComponent,
        GeometryMultiPolygonComponent,
        GeometryPointComponent,
        GeometryPolygonComponent,
        GeometryCircleComponent,
        CoordinateComponent,
        CollectionCoordinatesComponent,
        StyleComponent,
        StyleCircleComponent,
        StyleFillComponent,
        StyleIconComponent,
        StyleStrokeComponent,
        StyleTextComponent,
        DefaultControlComponent,
        ControlComponent,
        ControlAttributionComponent,
        ControlFullScreenComponent,
        ControlMousePositionComponent,
        ControlOverviewMapComponent,
        ControlRotateComponent,
        ControlScaleLineComponent,
        ControlZoomComponent,
        ControlZoomSliderComponent,
        ControlZoomToExtentComponent,
        FormatMVTComponent,
        TileGridComponent,
        TileGridWMTSComponent,
        DefaultInteractionComponent,
        DoubleClickZoomInteractionComponent,
        DragAndDropInteractionComponent,
        DragBoxInteractionComponent,
        DragPanInteractionComponent,
        DragRotateInteractionComponent,
        DragRotateAndZoomInteractionComponent,
        DragZoomInteractionComponent,
        MouseWheelZoomInteractionComponent,
        PinchZoomInteractionComponent,
        DrawInteractionComponent,
        SelectInteractionComponent,
        ModifyInteractionComponent,
        TranslateInteractionComponent,
        OverlayComponent,
        ContentComponent,
        AttributionsComponent,
        AttributionComponent,
    ];
    var AngularOpenlayersModule = /** @class */ (function () {
        function AngularOpenlayersModule() {
        }
        AngularOpenlayersModule = __decorate([
            core.NgModule({
                declarations: COMPONENTS,
                imports: [common.CommonModule],
                exports: COMPONENTS,
            })
        ], AngularOpenlayersModule);
        return AngularOpenlayersModule;
    }());

    exports.AngularOpenlayersModule = AngularOpenlayersModule;
    exports.AttributionComponent = AttributionComponent;
    exports.AttributionsComponent = AttributionsComponent;
    exports.CollectionCoordinatesComponent = CollectionCoordinatesComponent;
    exports.ContentComponent = ContentComponent;
    exports.ControlAttributionComponent = ControlAttributionComponent;
    exports.ControlComponent = ControlComponent;
    exports.ControlFullScreenComponent = ControlFullScreenComponent;
    exports.ControlMousePositionComponent = ControlMousePositionComponent;
    exports.ControlOverviewMapComponent = ControlOverviewMapComponent;
    exports.ControlRotateComponent = ControlRotateComponent;
    exports.ControlScaleLineComponent = ControlScaleLineComponent;
    exports.ControlZoomComponent = ControlZoomComponent;
    exports.ControlZoomSliderComponent = ControlZoomSliderComponent;
    exports.ControlZoomToExtentComponent = ControlZoomToExtentComponent;
    exports.CoordinateComponent = CoordinateComponent;
    exports.DefaultControlComponent = DefaultControlComponent;
    exports.DefaultInteractionComponent = DefaultInteractionComponent;
    exports.DoubleClickZoomInteractionComponent = DoubleClickZoomInteractionComponent;
    exports.DragAndDropInteractionComponent = DragAndDropInteractionComponent;
    exports.DragBoxInteractionComponent = DragBoxInteractionComponent;
    exports.DragPanInteractionComponent = DragPanInteractionComponent;
    exports.DragRotateAndZoomInteractionComponent = DragRotateAndZoomInteractionComponent;
    exports.DragRotateInteractionComponent = DragRotateInteractionComponent;
    exports.DragZoomInteractionComponent = DragZoomInteractionComponent;
    exports.DrawInteractionComponent = DrawInteractionComponent;
    exports.FeatureComponent = FeatureComponent;
    exports.FormatMVTComponent = FormatMVTComponent;
    exports.GeometryCircleComponent = GeometryCircleComponent;
    exports.GeometryLinestringComponent = GeometryLinestringComponent;
    exports.GeometryMultiLinestringComponent = GeometryMultiLinestringComponent;
    exports.GeometryMultiPointComponent = GeometryMultiPointComponent;
    exports.GeometryMultiPolygonComponent = GeometryMultiPolygonComponent;
    exports.GeometryPointComponent = GeometryPointComponent;
    exports.GeometryPolygonComponent = GeometryPolygonComponent;
    exports.GraticuleComponent = GraticuleComponent;
    exports.LayerComponent = LayerComponent;
    exports.LayerGroupComponent = LayerGroupComponent;
    exports.LayerImageComponent = LayerImageComponent;
    exports.LayerTileComponent = LayerTileComponent;
    exports.LayerVectorComponent = LayerVectorComponent;
    exports.LayerVectorTileComponent = LayerVectorTileComponent;
    exports.MapComponent = MapComponent;
    exports.ModifyInteractionComponent = ModifyInteractionComponent;
    exports.MouseWheelZoomInteractionComponent = MouseWheelZoomInteractionComponent;
    exports.OverlayComponent = OverlayComponent;
    exports.PinchZoomInteractionComponent = PinchZoomInteractionComponent;
    exports.SelectInteractionComponent = SelectInteractionComponent;
    exports.SimpleGeometryComponent = SimpleGeometryComponent;
    exports.SourceBingmapsComponent = SourceBingmapsComponent;
    exports.SourceClusterComponent = SourceClusterComponent;
    exports.SourceComponent = SourceComponent;
    exports.SourceGeoJSONComponent = SourceGeoJSONComponent;
    exports.SourceImageArcGISRestComponent = SourceImageArcGISRestComponent;
    exports.SourceImageStaticComponent = SourceImageStaticComponent;
    exports.SourceImageWMSComponent = SourceImageWMSComponent;
    exports.SourceOsmComponent = SourceOsmComponent;
    exports.SourceRasterComponent = SourceRasterComponent;
    exports.SourceTileJSONComponent = SourceTileJSONComponent;
    exports.SourceTileWMSComponent = SourceTileWMSComponent;
    exports.SourceTileWMTSComponent = SourceTileWMTSComponent;
    exports.SourceUTFGridComponent = SourceUTFGridComponent;
    exports.SourceVectorComponent = SourceVectorComponent;
    exports.SourceVectorTileComponent = SourceVectorTileComponent;
    exports.SourceXYZComponent = SourceXYZComponent;
    exports.StyleCircleComponent = StyleCircleComponent;
    exports.StyleComponent = StyleComponent;
    exports.StyleFillComponent = StyleFillComponent;
    exports.StyleIconComponent = StyleIconComponent;
    exports.StyleStrokeComponent = StyleStrokeComponent;
    exports.StyleTextComponent = StyleTextComponent;
    exports.TileGridComponent = TileGridComponent;
    exports.TileGridWMTSComponent = TileGridWMTSComponent;
    exports.TranslateInteractionComponent = TranslateInteractionComponent;
    exports.ViewComponent = ViewComponent;
    exports.ɵa = FormatComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-openlayers.umd.js.map
