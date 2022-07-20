import { __decorate, __extends, __param } from 'tslib';
import { Input, EventEmitter, ElementRef, Output, Component, SkipSelf, Optional, Host, ContentChild, forwardRef, ContentChildren, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import View from 'ol/View';
import { Map, Graticule, Feature } from 'ol';
import { Group, Image, Tile, Vector, VectorTile } from 'ol/layer';
import { XYZ, OSM, BingMaps, Vector as Vector$1, Cluster, WMTS as WMTS$1, VectorTile as VectorTile$1, TileWMS, TileJSON, ImageStatic, ImageWMS, Raster, UTFGrid } from 'ol/source';
import { createXYZ } from 'ol/tilegrid';
import TileGrid from 'ol/tilegrid/TileGrid';
import WMTS from 'ol/tilegrid/WMTS';
import { GeoJSON, MVT } from 'ol/format';
import ImageArcGISRest from 'ol/source/ImageArcGISRest';
import { Circle, LineString, MultiLineString, MultiPoint, MultiPolygon, Point, Polygon } from 'ol/geom';
import { transform } from 'ol/proj';
import Overlay from 'ol/Overlay';
import { Style, Circle as Circle$1, Text, Stroke, Icon, Fill } from 'ol/style';
import { defaults, Control, Attribution, FullScreen, OverviewMap, Rotate, ScaleLine, Zoom, ZoomSlider, ZoomToExtent } from 'ol/control';
import MousePosition from 'ol/control/MousePosition';
import { defaults as defaults$1, DoubleClickZoom, DragAndDrop, DragBox, DragPan, DragRotate, DragRotateAndZoom, DragZoom, MouseWheelZoom, PinchZoom, Draw, Select, Modify, Translate } from 'ol/interaction';

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
        Input()
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
        Input()
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
        this.olClick = new EventEmitter();
        this.dblClick = new EventEmitter();
        this.moveStart = new EventEmitter();
        this.moveEnd = new EventEmitter();
        this.pointerDrag = new EventEmitter();
        this.pointerMove = new EventEmitter();
        this.onpostrender = new EventEmitter();
        this.postRender = new EventEmitter();
        this.onprerender = new EventEmitter();
        this.propertyChange = new EventEmitter();
        this.singleClick = new EventEmitter();
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
        // TODO this.instance.on('prerender', (event: RenderEvent) => this.onprerender.emit(event));
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
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], MapComponent.prototype, "width", void 0);
    __decorate([
        Input()
    ], MapComponent.prototype, "height", void 0);
    __decorate([
        Input()
    ], MapComponent.prototype, "pixelRatio", void 0);
    __decorate([
        Input()
    ], MapComponent.prototype, "keyboardEventTarget", void 0);
    __decorate([
        Input()
    ], MapComponent.prototype, "loadTilesWhileAnimating", void 0);
    __decorate([
        Input()
    ], MapComponent.prototype, "loadTilesWhileInteracting", void 0);
    __decorate([
        Input()
    ], MapComponent.prototype, "logo", void 0);
    __decorate([
        Input()
    ], MapComponent.prototype, "renderer", void 0);
    __decorate([
        Output()
    ], MapComponent.prototype, "olClick", void 0);
    __decorate([
        Output()
    ], MapComponent.prototype, "dblClick", void 0);
    __decorate([
        Output()
    ], MapComponent.prototype, "moveStart", void 0);
    __decorate([
        Output()
    ], MapComponent.prototype, "moveEnd", void 0);
    __decorate([
        Output()
    ], MapComponent.prototype, "pointerDrag", void 0);
    __decorate([
        Output()
    ], MapComponent.prototype, "pointerMove", void 0);
    __decorate([
        Output()
    ], MapComponent.prototype, "onpostrender", void 0);
    __decorate([
        Output()
    ], MapComponent.prototype, "postRender", void 0);
    __decorate([
        Output()
    ], MapComponent.prototype, "onprerender", void 0);
    __decorate([
        Output()
    ], MapComponent.prototype, "propertyChange", void 0);
    __decorate([
        Output()
    ], MapComponent.prototype, "singleClick", void 0);
    MapComponent = __decorate([
        Component({
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
        this.changeZoom = new EventEmitter();
        this.changeResolution = new EventEmitter();
        this.changeCenter = new EventEmitter();
    }
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log('creating ol.View instance with: ', this);
        this.instance = new View(this);
        this.host.instance.setView(this.instance);
        // TODO this.instance.on('change:zoom', (event: ObjectEvent) => this.changeZoom.emit(event));
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
        Input()
    ], ViewComponent.prototype, "constrainRotation", void 0);
    __decorate([
        Input()
    ], ViewComponent.prototype, "enableRotation", void 0);
    __decorate([
        Input()
    ], ViewComponent.prototype, "extent", void 0);
    __decorate([
        Input()
    ], ViewComponent.prototype, "maxResolution", void 0);
    __decorate([
        Input()
    ], ViewComponent.prototype, "minResolution", void 0);
    __decorate([
        Input()
    ], ViewComponent.prototype, "maxZoom", void 0);
    __decorate([
        Input()
    ], ViewComponent.prototype, "minZoom", void 0);
    __decorate([
        Input()
    ], ViewComponent.prototype, "resolution", void 0);
    __decorate([
        Input()
    ], ViewComponent.prototype, "resolutions", void 0);
    __decorate([
        Input()
    ], ViewComponent.prototype, "rotation", void 0);
    __decorate([
        Input()
    ], ViewComponent.prototype, "zoom", void 0);
    __decorate([
        Input()
    ], ViewComponent.prototype, "zoomFactor", void 0);
    __decorate([
        Input()
    ], ViewComponent.prototype, "center", void 0);
    __decorate([
        Input()
    ], ViewComponent.prototype, "projection", void 0);
    __decorate([
        Input()
    ], ViewComponent.prototype, "constrainOnlyCenter", void 0);
    __decorate([
        Input()
    ], ViewComponent.prototype, "smoothExtentConstraint", void 0);
    __decorate([
        Input()
    ], ViewComponent.prototype, "constrainResolution", void 0);
    __decorate([
        Input()
    ], ViewComponent.prototype, "smoothResolutionConstraint", void 0);
    __decorate([
        Input()
    ], ViewComponent.prototype, "showFullExtent", void 0);
    __decorate([
        Input()
    ], ViewComponent.prototype, "multiWorld", void 0);
    __decorate([
        Input()
    ], ViewComponent.prototype, "zoomAnimation", void 0);
    __decorate([
        Output()
    ], ViewComponent.prototype, "changeZoom", void 0);
    __decorate([
        Output()
    ], ViewComponent.prototype, "changeResolution", void 0);
    __decorate([
        Output()
    ], ViewComponent.prototype, "changeCenter", void 0);
    ViewComponent = __decorate([
        Component({
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
            this.instance = new Graticule(properties);
        }
        this.instance.setMap(this.map.instance);
    };
    GraticuleComponent.prototype.ngAfterContentInit = function () {
        this.instance = new Graticule({
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
        Input()
    ], GraticuleComponent.prototype, "strokeStyle", void 0);
    __decorate([
        Input()
    ], GraticuleComponent.prototype, "showLabels", void 0);
    __decorate([
        Input()
    ], GraticuleComponent.prototype, "lonLabelPosition", void 0);
    __decorate([
        Input()
    ], GraticuleComponent.prototype, "latLabelPosition", void 0);
    GraticuleComponent = __decorate([
        Component({
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
        Input()
    ], LayerComponent.prototype, "opacity", void 0);
    __decorate([
        Input()
    ], LayerComponent.prototype, "visible", void 0);
    __decorate([
        Input()
    ], LayerComponent.prototype, "extent", void 0);
    __decorate([
        Input()
    ], LayerComponent.prototype, "zIndex", void 0);
    __decorate([
        Input()
    ], LayerComponent.prototype, "minResolution", void 0);
    __decorate([
        Input()
    ], LayerComponent.prototype, "maxResolution", void 0);
    __decorate([
        Input()
    ], LayerComponent.prototype, "prerender", void 0);
    __decorate([
        Input()
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
        this.instance = new Group(this);
        _super.prototype.ngOnInit.call(this);
    };
    LayerGroupComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: LayerGroupComponent, decorators: [{ type: SkipSelf }, { type: Optional }] }
    ]; };
    LayerGroupComponent = __decorate([
        Component({
            selector: 'aol-layer-group',
            template: " <ng-content></ng-content> "
        }),
        __param(1, SkipSelf()),
        __param(1, Optional())
    ], LayerGroupComponent);
    return LayerGroupComponent;
}(LayerComponent));

var LayerImageComponent = /** @class */ (function (_super) {
    __extends(LayerImageComponent, _super);
    function LayerImageComponent(map, group) {
        return _super.call(this, group || map) || this;
    }
    LayerImageComponent.prototype.ngOnInit = function () {
        this.instance = new Image(this);
        _super.prototype.ngOnInit.call(this);
    };
    LayerImageComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
    };
    LayerImageComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: LayerGroupComponent, decorators: [{ type: Optional }] }
    ]; };
    __decorate([
        Input()
    ], LayerImageComponent.prototype, "opacity", void 0);
    __decorate([
        Input()
    ], LayerImageComponent.prototype, "visible", void 0);
    __decorate([
        Input()
    ], LayerImageComponent.prototype, "extent", void 0);
    __decorate([
        Input()
    ], LayerImageComponent.prototype, "minResolution", void 0);
    __decorate([
        Input()
    ], LayerImageComponent.prototype, "maxResolution", void 0);
    __decorate([
        Input()
    ], LayerImageComponent.prototype, "zIndex", void 0);
    LayerImageComponent = __decorate([
        Component({
            selector: 'aol-layer-image',
            template: " <ng-content></ng-content> "
        }),
        __param(1, Optional())
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
        this.instance = new Tile(this);
        _super.prototype.ngOnInit.call(this);
    };
    LayerTileComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
    };
    LayerTileComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: LayerGroupComponent, decorators: [{ type: Optional }] }
    ]; };
    __decorate([
        Input()
    ], LayerTileComponent.prototype, "preload", void 0);
    __decorate([
        Input()
    ], LayerTileComponent.prototype, "useInterimTilesOnError", void 0);
    LayerTileComponent = __decorate([
        Component({
            selector: 'aol-layer-tile',
            template: " <ng-content></ng-content> "
        }),
        __param(1, Optional())
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
        this.instance = new Vector(this);
        _super.prototype.ngOnInit.call(this);
    };
    LayerVectorComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
    };
    LayerVectorComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: LayerGroupComponent, decorators: [{ type: Optional }] }
    ]; };
    __decorate([
        Input()
    ], LayerVectorComponent.prototype, "renderBuffer", void 0);
    __decorate([
        Input()
    ], LayerVectorComponent.prototype, "style", void 0);
    __decorate([
        Input()
    ], LayerVectorComponent.prototype, "updateWhileAnimating", void 0);
    __decorate([
        Input()
    ], LayerVectorComponent.prototype, "updateWhileInteracting", void 0);
    LayerVectorComponent = __decorate([
        Component({
            selector: 'aol-layer-vector',
            template: " <ng-content></ng-content> "
        }),
        __param(1, Optional())
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
        this.instance = new VectorTile(this);
        _super.prototype.ngOnInit.call(this);
    };
    LayerVectorTileComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
    };
    LayerVectorTileComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: LayerGroupComponent, decorators: [{ type: Optional }] }
    ]; };
    __decorate([
        Input()
    ], LayerVectorTileComponent.prototype, "renderBuffer", void 0);
    __decorate([
        Input()
    ], LayerVectorTileComponent.prototype, "renderMode", void 0);
    __decorate([
        Input()
    ], LayerVectorTileComponent.prototype, "renderOrder", void 0);
    __decorate([
        Input()
    ], LayerVectorTileComponent.prototype, "style", void 0);
    __decorate([
        Input()
    ], LayerVectorTileComponent.prototype, "updateWhileAnimating", void 0);
    __decorate([
        Input()
    ], LayerVectorTileComponent.prototype, "updateWhileInteracting", void 0);
    __decorate([
        Input()
    ], LayerVectorTileComponent.prototype, "visible", void 0);
    LayerVectorTileComponent = __decorate([
        Component({
            selector: 'aol-layer-vectortile',
            template: " <ng-content></ng-content> "
        }),
        __param(1, Optional())
    ], LayerVectorTileComponent);
    return LayerVectorTileComponent;
}(LayerComponent));

var TileGridComponent = /** @class */ (function () {
    function TileGridComponent() {
    }
    TileGridComponent.prototype.ngOnInit = function () {
        if (!this.resolutions) {
            this.instance = createXYZ(this);
        }
        else {
            this.instance = new TileGrid(this);
        }
    };
    TileGridComponent.prototype.ngOnChanges = function (changes) {
        if (!this.resolutions) {
            this.instance = createXYZ(this);
        }
        else {
            this.instance = new TileGrid(this);
        }
    };
    __decorate([
        Input()
    ], TileGridComponent.prototype, "extent", void 0);
    __decorate([
        Input()
    ], TileGridComponent.prototype, "maxZoom", void 0);
    __decorate([
        Input()
    ], TileGridComponent.prototype, "minZoom", void 0);
    __decorate([
        Input()
    ], TileGridComponent.prototype, "tileSize", void 0);
    __decorate([
        Input()
    ], TileGridComponent.prototype, "origin", void 0);
    __decorate([
        Input()
    ], TileGridComponent.prototype, "resolutions", void 0);
    TileGridComponent = __decorate([
        Component({
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
        _this.tileLoadStart = new EventEmitter();
        _this.tileLoadEnd = new EventEmitter();
        _this.tileLoadError = new EventEmitter();
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
        this.instance = new XYZ(this);
        this.instance.on('tileloadstart', function (event) { return _this.tileLoadStart.emit(event); });
        this.instance.on('tileloadend', function (event) { return _this.tileLoadEnd.emit(event); });
        this.instance.on('tileloaderror', function (event) { return _this.tileLoadError.emit(event); });
        this._register(this.instance);
    };
    var SourceXYZComponent_1;
    SourceXYZComponent.ctorParameters = function () { return [
        { type: LayerTileComponent, decorators: [{ type: Optional }, { type: Host }] }
    ]; };
    __decorate([
        Input()
    ], SourceXYZComponent.prototype, "cacheSize", void 0);
    __decorate([
        Input()
    ], SourceXYZComponent.prototype, "crossOrigin", void 0);
    __decorate([
        Input()
    ], SourceXYZComponent.prototype, "opaque", void 0);
    __decorate([
        Input()
    ], SourceXYZComponent.prototype, "projection", void 0);
    __decorate([
        Input()
    ], SourceXYZComponent.prototype, "reprojectionErrorThreshold", void 0);
    __decorate([
        Input()
    ], SourceXYZComponent.prototype, "minZoom", void 0);
    __decorate([
        Input()
    ], SourceXYZComponent.prototype, "maxZoom", void 0);
    __decorate([
        Input()
    ], SourceXYZComponent.prototype, "tileGrid", void 0);
    __decorate([
        Input()
    ], SourceXYZComponent.prototype, "tileLoadFunction", void 0);
    __decorate([
        Input()
    ], SourceXYZComponent.prototype, "tilePixelRatio", void 0);
    __decorate([
        Input()
    ], SourceXYZComponent.prototype, "tileSize", void 0);
    __decorate([
        Input()
    ], SourceXYZComponent.prototype, "tileUrlFunction", void 0);
    __decorate([
        Input()
    ], SourceXYZComponent.prototype, "url", void 0);
    __decorate([
        Input()
    ], SourceXYZComponent.prototype, "urls", void 0);
    __decorate([
        Input()
    ], SourceXYZComponent.prototype, "wrapX", void 0);
    __decorate([
        ContentChild(TileGridComponent, { static: false })
    ], SourceXYZComponent.prototype, "tileGridXYZ", void 0);
    __decorate([
        Output()
    ], SourceXYZComponent.prototype, "tileLoadStart", void 0);
    __decorate([
        Output()
    ], SourceXYZComponent.prototype, "tileLoadEnd", void 0);
    __decorate([
        Output()
    ], SourceXYZComponent.prototype, "tileLoadError", void 0);
    SourceXYZComponent = SourceXYZComponent_1 = __decorate([
        Component({
            selector: 'aol-source-xyz',
            template: " <ng-content></ng-content> ",
            providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceXYZComponent_1; }) }]
        }),
        __param(0, Optional()),
        __param(0, Host())
    ], SourceXYZComponent);
    return SourceXYZComponent;
}(SourceComponent));

var SourceOsmComponent = /** @class */ (function (_super) {
    __extends(SourceOsmComponent, _super);
    function SourceOsmComponent(layer) {
        var _this = _super.call(this, layer) || this;
        _this.layer = layer;
        _this.tileLoadStart = new EventEmitter();
        _this.tileLoadEnd = new EventEmitter();
        _this.tileLoadError = new EventEmitter();
        return _this;
    }
    SourceOsmComponent_1 = SourceOsmComponent;
    SourceOsmComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.tileGridXYZ) {
            this.tileGrid = this.tileGridXYZ.instance;
        }
        this.instance = new OSM(this);
        this.instance.on('tileloadstart', function (event) { return _this.tileLoadStart.emit(event); });
        this.instance.on('tileloadend', function (event) { return _this.tileLoadEnd.emit(event); });
        this.instance.on('tileloaderror', function (event) { return _this.tileLoadError.emit(event); });
        this._register(this.instance);
    };
    var SourceOsmComponent_1;
    SourceOsmComponent.ctorParameters = function () { return [
        { type: LayerTileComponent, decorators: [{ type: Optional }, { type: Host }] }
    ]; };
    __decorate([
        Input()
    ], SourceOsmComponent.prototype, "attributions", void 0);
    __decorate([
        Input()
    ], SourceOsmComponent.prototype, "cacheSize", void 0);
    __decorate([
        Input()
    ], SourceOsmComponent.prototype, "crossOrigin", void 0);
    __decorate([
        Input()
    ], SourceOsmComponent.prototype, "maxZoom", void 0);
    __decorate([
        Input()
    ], SourceOsmComponent.prototype, "opaque", void 0);
    __decorate([
        Input()
    ], SourceOsmComponent.prototype, "reprojectionErrorThreshold", void 0);
    __decorate([
        Input()
    ], SourceOsmComponent.prototype, "tileLoadFunction", void 0);
    __decorate([
        Input()
    ], SourceOsmComponent.prototype, "url", void 0);
    __decorate([
        Input()
    ], SourceOsmComponent.prototype, "wrapX", void 0);
    __decorate([
        Output()
    ], SourceOsmComponent.prototype, "tileLoadStart", void 0);
    __decorate([
        Output()
    ], SourceOsmComponent.prototype, "tileLoadEnd", void 0);
    __decorate([
        Output()
    ], SourceOsmComponent.prototype, "tileLoadError", void 0);
    SourceOsmComponent = SourceOsmComponent_1 = __decorate([
        Component({
            selector: 'aol-source-osm',
            template: " <div class=\"aol-source-osm\"></div> ",
            providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceOsmComponent_1; }) }]
        }),
        __param(0, Optional()),
        __param(0, Host())
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
        this.instance = new BingMaps(this);
        this.host.instance.setSource(this.instance);
    };
    var SourceBingmapsComponent_1;
    SourceBingmapsComponent.ctorParameters = function () { return [
        { type: LayerTileComponent, decorators: [{ type: Host }] }
    ]; };
    __decorate([
        Input()
    ], SourceBingmapsComponent.prototype, "cacheSize", void 0);
    __decorate([
        Input()
    ], SourceBingmapsComponent.prototype, "hidpi", void 0);
    __decorate([
        Input()
    ], SourceBingmapsComponent.prototype, "culture", void 0);
    __decorate([
        Input()
    ], SourceBingmapsComponent.prototype, "key", void 0);
    __decorate([
        Input()
    ], SourceBingmapsComponent.prototype, "imagerySet", void 0);
    __decorate([
        Input()
    ], SourceBingmapsComponent.prototype, "maxZoom", void 0);
    __decorate([
        Input()
    ], SourceBingmapsComponent.prototype, "reprojectionErrorThreshold", void 0);
    __decorate([
        Input()
    ], SourceBingmapsComponent.prototype, "tileLoadFunction", void 0);
    __decorate([
        Input()
    ], SourceBingmapsComponent.prototype, "wrapX", void 0);
    SourceBingmapsComponent = SourceBingmapsComponent_1 = __decorate([
        Component({
            selector: 'aol-source-bingmaps',
            template: " <div class=\"aol-source-bingmaps\"></div> ",
            providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceBingmapsComponent_1; }) }]
        }),
        __param(0, Host())
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
        this.instance = new Vector$1(this);
        this.host.instance.setSource(this.instance);
    };
    var SourceVectorComponent_1;
    SourceVectorComponent.ctorParameters = function () { return [
        { type: LayerVectorComponent, decorators: [{ type: Host }] }
    ]; };
    __decorate([
        Input()
    ], SourceVectorComponent.prototype, "overlaps", void 0);
    __decorate([
        Input()
    ], SourceVectorComponent.prototype, "useSpatialIndex", void 0);
    __decorate([
        Input()
    ], SourceVectorComponent.prototype, "wrapX", void 0);
    __decorate([
        Input()
    ], SourceVectorComponent.prototype, "url", void 0);
    __decorate([
        Input()
    ], SourceVectorComponent.prototype, "format", void 0);
    __decorate([
        Input()
    ], SourceVectorComponent.prototype, "strategy", void 0);
    SourceVectorComponent = SourceVectorComponent_1 = __decorate([
        Component({
            selector: 'aol-source-vector',
            template: " <ng-content></ng-content> ",
            providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceVectorComponent_1; }) }]
        }),
        __param(0, Host())
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
        this.instance = new Cluster(this);
        this.host.instance.setSource(this.instance);
    };
    SourceClusterComponent.prototype.ngOnChanges = function (changes) {
        if (this.instance && changes.hasOwnProperty('distance')) {
            this.instance.setDistance(this.distance);
        }
    };
    var SourceClusterComponent_1;
    SourceClusterComponent.ctorParameters = function () { return [
        { type: LayerVectorComponent, decorators: [{ type: Host }] }
    ]; };
    __decorate([
        Input()
    ], SourceClusterComponent.prototype, "distance", void 0);
    __decorate([
        Input()
    ], SourceClusterComponent.prototype, "geometryFunction", void 0);
    __decorate([
        Input()
    ], SourceClusterComponent.prototype, "wrapX", void 0);
    __decorate([
        ContentChild(SourceVectorComponent, { static: false })
    ], SourceClusterComponent.prototype, "sourceVectorComponent", void 0);
    SourceClusterComponent = SourceClusterComponent_1 = __decorate([
        Component({
            selector: 'aol-source-cluster',
            template: " <ng-content></ng-content> ",
            providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceClusterComponent_1; }) }]
        }),
        __param(0, Host())
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
        Input()
    ], TileGridWMTSComponent.prototype, "origin", void 0);
    __decorate([
        Input()
    ], TileGridWMTSComponent.prototype, "origins", void 0);
    __decorate([
        Input()
    ], TileGridWMTSComponent.prototype, "resolutions", void 0);
    __decorate([
        Input()
    ], TileGridWMTSComponent.prototype, "matrixIds", void 0);
    __decorate([
        Input()
    ], TileGridWMTSComponent.prototype, "sizes", void 0);
    __decorate([
        Input()
    ], TileGridWMTSComponent.prototype, "tileSizes", void 0);
    __decorate([
        Input()
    ], TileGridWMTSComponent.prototype, "widths", void 0);
    TileGridWMTSComponent = __decorate([
        Component({
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
        _this.tileLoadStart = new EventEmitter();
        _this.tileLoadEnd = new EventEmitter();
        _this.tileLoadError = new EventEmitter();
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
        this.instance = new WMTS$1(this);
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
        { type: LayerTileComponent, decorators: [{ type: Host }] }
    ]; };
    __decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "cacheSize", void 0);
    __decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "crossOrigin", void 0);
    __decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "tileGrid", void 0);
    __decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "projection", void 0);
    __decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "reprojectionErrorThreshold", void 0);
    __decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "requestEncoding", void 0);
    __decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "layer", void 0);
    __decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "style", void 0);
    __decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "tileClass", void 0);
    __decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "tilePixelRatio", void 0);
    __decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "version", void 0);
    __decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "format", void 0);
    __decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "matrixSet", void 0);
    __decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "dimensions", void 0);
    __decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "url", void 0);
    __decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "tileLoadFunction", void 0);
    __decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "urls", void 0);
    __decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "wrapX", void 0);
    __decorate([
        Output()
    ], SourceTileWMTSComponent.prototype, "tileLoadStart", void 0);
    __decorate([
        Output()
    ], SourceTileWMTSComponent.prototype, "tileLoadEnd", void 0);
    __decorate([
        Output()
    ], SourceTileWMTSComponent.prototype, "tileLoadError", void 0);
    __decorate([
        ContentChild(TileGridWMTSComponent, { static: false })
    ], SourceTileWMTSComponent.prototype, "tileGridWMTS", void 0);
    SourceTileWMTSComponent = SourceTileWMTSComponent_1 = __decorate([
        Component({
            selector: 'aol-source-tilewmts',
            template: " <ng-content></ng-content> ",
            providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceTileWMTSComponent_1; }) }]
        }),
        __param(0, Host())
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
        this.instance = new VectorTile$1(this);
        this.host.instance.setSource(this.instance);
    };
    var SourceVectorTileComponent_1;
    SourceVectorTileComponent.ctorParameters = function () { return [
        { type: LayerVectorTileComponent, decorators: [{ type: Host }] }
    ]; };
    __decorate([
        Input()
    ], SourceVectorTileComponent.prototype, "cacheSize", void 0);
    __decorate([
        Input()
    ], SourceVectorTileComponent.prototype, "overlaps", void 0);
    __decorate([
        Input()
    ], SourceVectorTileComponent.prototype, "projection", void 0);
    __decorate([
        Input()
    ], SourceVectorTileComponent.prototype, "tilePixelRatio", void 0);
    __decorate([
        Input()
    ], SourceVectorTileComponent.prototype, "tileUrlFunction", void 0);
    __decorate([
        Input()
    ], SourceVectorTileComponent.prototype, "url", void 0);
    __decorate([
        Input()
    ], SourceVectorTileComponent.prototype, "urls", void 0);
    __decorate([
        Input()
    ], SourceVectorTileComponent.prototype, "wrapX", void 0);
    __decorate([
        ContentChild(FormatComponent, { static: false })
    ], SourceVectorTileComponent.prototype, "formatComponent", void 0);
    __decorate([
        ContentChild(TileGridComponent, { static: false })
    ], SourceVectorTileComponent.prototype, "tileGridComponent", void 0);
    SourceVectorTileComponent = SourceVectorTileComponent_1 = __decorate([
        Component({
            selector: 'aol-source-vectortile',
            template: " <ng-content></ng-content> ",
            providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceVectorTileComponent_1; }) }]
        }),
        __param(0, Host())
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
        this.instance = new TileWMS(this);
        this.host.instance.setSource(this.instance);
    };
    SourceTileWMSComponent.prototype.ngOnChanges = function (changes) {
        if (this.instance && changes.hasOwnProperty('params')) {
            this.instance.updateParams(this.params);
        }
    };
    var SourceTileWMSComponent_1;
    SourceTileWMSComponent.ctorParameters = function () { return [
        { type: LayerTileComponent, decorators: [{ type: Host }] }
    ]; };
    __decorate([
        Input()
    ], SourceTileWMSComponent.prototype, "cacheSize", void 0);
    __decorate([
        Input()
    ], SourceTileWMSComponent.prototype, "crossOrigin", void 0);
    __decorate([
        Input()
    ], SourceTileWMSComponent.prototype, "gutter", void 0);
    __decorate([
        Input()
    ], SourceTileWMSComponent.prototype, "hidpi", void 0);
    __decorate([
        Input()
    ], SourceTileWMSComponent.prototype, "params", void 0);
    __decorate([
        Input()
    ], SourceTileWMSComponent.prototype, "projection", void 0);
    __decorate([
        Input()
    ], SourceTileWMSComponent.prototype, "reprojectionErrorThreshold", void 0);
    __decorate([
        Input()
    ], SourceTileWMSComponent.prototype, "serverType", void 0);
    __decorate([
        Input()
    ], SourceTileWMSComponent.prototype, "tileGrid", void 0);
    __decorate([
        Input()
    ], SourceTileWMSComponent.prototype, "tileLoadFunction", void 0);
    __decorate([
        Input()
    ], SourceTileWMSComponent.prototype, "url", void 0);
    __decorate([
        Input()
    ], SourceTileWMSComponent.prototype, "urls", void 0);
    __decorate([
        Input()
    ], SourceTileWMSComponent.prototype, "wrapX", void 0);
    SourceTileWMSComponent = SourceTileWMSComponent_1 = __decorate([
        Component({
            selector: 'aol-source-tilewms',
            template: " <ng-content></ng-content> ",
            providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceTileWMSComponent_1; }) }]
        }),
        __param(0, Host())
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
        this.instance = new TileJSON(this);
        this.host.instance.setSource(this.instance);
    };
    var SourceTileJSONComponent_1;
    SourceTileJSONComponent.ctorParameters = function () { return [
        { type: LayerTileComponent, decorators: [{ type: Host }] }
    ]; };
    __decorate([
        Input()
    ], SourceTileJSONComponent.prototype, "url", void 0);
    SourceTileJSONComponent = SourceTileJSONComponent_1 = __decorate([
        Component({
            selector: 'aol-source-tilejson',
            template: " <ng-content></ng-content> ",
            providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceTileJSONComponent_1; }) }]
        }),
        __param(0, Host())
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
        this.format = new GeoJSON(this);
        this.instance = new Vector$1(this);
        this.host.instance.setSource(this.instance);
    };
    var SourceGeoJSONComponent_1;
    SourceGeoJSONComponent.ctorParameters = function () { return [
        { type: LayerVectorComponent, decorators: [{ type: Host }] }
    ]; };
    __decorate([
        Input()
    ], SourceGeoJSONComponent.prototype, "defaultDataProjection", void 0);
    __decorate([
        Input()
    ], SourceGeoJSONComponent.prototype, "featureProjection", void 0);
    __decorate([
        Input()
    ], SourceGeoJSONComponent.prototype, "geometryName", void 0);
    __decorate([
        Input()
    ], SourceGeoJSONComponent.prototype, "url", void 0);
    SourceGeoJSONComponent = SourceGeoJSONComponent_1 = __decorate([
        Component({
            selector: 'aol-source-geojson',
            template: " <ng-content></ng-content> ",
            providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceGeoJSONComponent_1; }) }]
        }),
        __param(0, Host())
    ], SourceGeoJSONComponent);
    return SourceGeoJSONComponent;
}(SourceComponent));

var SourceImageStaticComponent = /** @class */ (function (_super) {
    __extends(SourceImageStaticComponent, _super);
    function SourceImageStaticComponent(layer) {
        var _this = _super.call(this, layer) || this;
        _this.imageLoadStart = new EventEmitter();
        _this.imageLoadEnd = new EventEmitter();
        _this.imageLoadError = new EventEmitter();
        return _this;
    }
    SourceImageStaticComponent_1 = SourceImageStaticComponent;
    SourceImageStaticComponent.prototype.setLayerSource = function () {
        var _this = this;
        this.instance = new ImageStatic(this);
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
        { type: LayerImageComponent, decorators: [{ type: Host }] }
    ]; };
    __decorate([
        Input()
    ], SourceImageStaticComponent.prototype, "projection", void 0);
    __decorate([
        Input()
    ], SourceImageStaticComponent.prototype, "imageExtent", void 0);
    __decorate([
        Input()
    ], SourceImageStaticComponent.prototype, "url", void 0);
    __decorate([
        Input()
    ], SourceImageStaticComponent.prototype, "attributions", void 0);
    __decorate([
        Input()
    ], SourceImageStaticComponent.prototype, "crossOrigin", void 0);
    __decorate([
        Input()
    ], SourceImageStaticComponent.prototype, "imageLoadFunction", void 0);
    __decorate([
        Input()
    ], SourceImageStaticComponent.prototype, "imageSize", void 0);
    __decorate([
        Output()
    ], SourceImageStaticComponent.prototype, "imageLoadStart", void 0);
    __decorate([
        Output()
    ], SourceImageStaticComponent.prototype, "imageLoadEnd", void 0);
    __decorate([
        Output()
    ], SourceImageStaticComponent.prototype, "imageLoadError", void 0);
    SourceImageStaticComponent = SourceImageStaticComponent_1 = __decorate([
        Component({
            selector: 'aol-source-imagestatic',
            template: " <ng-content></ng-content> ",
            providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceImageStaticComponent_1; }) }]
        }),
        __param(0, Host())
    ], SourceImageStaticComponent);
    return SourceImageStaticComponent;
}(SourceComponent));

var SourceImageWMSComponent = /** @class */ (function (_super) {
    __extends(SourceImageWMSComponent, _super);
    function SourceImageWMSComponent(layer) {
        var _this = _super.call(this, layer) || this;
        _this.imageLoadStart = new EventEmitter();
        _this.imageLoadEnd = new EventEmitter();
        _this.imageLoadError = new EventEmitter();
        return _this;
    }
    SourceImageWMSComponent_1 = SourceImageWMSComponent;
    SourceImageWMSComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.instance = new ImageWMS(this);
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
        { type: LayerImageComponent, decorators: [{ type: Host }] }
    ]; };
    __decorate([
        Input()
    ], SourceImageWMSComponent.prototype, "attributions", void 0);
    __decorate([
        Input()
    ], SourceImageWMSComponent.prototype, "crossOrigin", void 0);
    __decorate([
        Input()
    ], SourceImageWMSComponent.prototype, "hidpi", void 0);
    __decorate([
        Input()
    ], SourceImageWMSComponent.prototype, "serverType", void 0);
    __decorate([
        Input()
    ], SourceImageWMSComponent.prototype, "imageLoadFunction", void 0);
    __decorate([
        Input()
    ], SourceImageWMSComponent.prototype, "params", void 0);
    __decorate([
        Input()
    ], SourceImageWMSComponent.prototype, "projection", void 0);
    __decorate([
        Input()
    ], SourceImageWMSComponent.prototype, "ratio", void 0);
    __decorate([
        Input()
    ], SourceImageWMSComponent.prototype, "resolutions", void 0);
    __decorate([
        Input()
    ], SourceImageWMSComponent.prototype, "url", void 0);
    __decorate([
        Output()
    ], SourceImageWMSComponent.prototype, "imageLoadStart", void 0);
    __decorate([
        Output()
    ], SourceImageWMSComponent.prototype, "imageLoadEnd", void 0);
    __decorate([
        Output()
    ], SourceImageWMSComponent.prototype, "imageLoadError", void 0);
    SourceImageWMSComponent = SourceImageWMSComponent_1 = __decorate([
        Component({
            selector: 'aol-source-imagewms',
            template: " <ng-content></ng-content> ",
            providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceImageWMSComponent_1; }) }]
        }),
        __param(0, Host())
    ], SourceImageWMSComponent);
    return SourceImageWMSComponent;
}(SourceComponent));

var SourceImageArcGISRestComponent = /** @class */ (function (_super) {
    __extends(SourceImageArcGISRestComponent, _super);
    function SourceImageArcGISRestComponent(layer) {
        var _this = _super.call(this, layer) || this;
        _this.ratio = 1.5;
        _this.imageLoadStart = new EventEmitter();
        _this.imageLoadEnd = new EventEmitter();
        _this.imageLoadError = new EventEmitter();
        return _this;
    }
    SourceImageArcGISRestComponent_1 = SourceImageArcGISRestComponent;
    SourceImageArcGISRestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.instance = new ImageArcGISRest(this);
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
        { type: LayerImageComponent, decorators: [{ type: Host }] }
    ]; };
    __decorate([
        Input()
    ], SourceImageArcGISRestComponent.prototype, "projection", void 0);
    __decorate([
        Input()
    ], SourceImageArcGISRestComponent.prototype, "url", void 0);
    __decorate([
        Input()
    ], SourceImageArcGISRestComponent.prototype, "attributions", void 0);
    __decorate([
        Input()
    ], SourceImageArcGISRestComponent.prototype, "crossOrigin", void 0);
    __decorate([
        Input()
    ], SourceImageArcGISRestComponent.prototype, "imageLoadFunction", void 0);
    __decorate([
        Input()
    ], SourceImageArcGISRestComponent.prototype, "params", void 0);
    __decorate([
        Input()
    ], SourceImageArcGISRestComponent.prototype, "ratio", void 0);
    __decorate([
        Input()
    ], SourceImageArcGISRestComponent.prototype, "resolutions", void 0);
    __decorate([
        Input()
    ], SourceImageArcGISRestComponent.prototype, "wrapX", void 0);
    __decorate([
        Output()
    ], SourceImageArcGISRestComponent.prototype, "imageLoadStart", void 0);
    __decorate([
        Output()
    ], SourceImageArcGISRestComponent.prototype, "imageLoadEnd", void 0);
    __decorate([
        Output()
    ], SourceImageArcGISRestComponent.prototype, "imageLoadError", void 0);
    SourceImageArcGISRestComponent = SourceImageArcGISRestComponent_1 = __decorate([
        Component({
            selector: 'aol-source-imagearcgisrest',
            template: " <ng-content></ng-content> ",
            providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceImageArcGISRestComponent_1; }) }]
        }),
        __param(0, Host())
    ], SourceImageArcGISRestComponent);
    return SourceImageArcGISRestComponent;
}(SourceComponent));

var SourceRasterComponent = /** @class */ (function (_super) {
    __extends(SourceRasterComponent, _super);
    function SourceRasterComponent(layer) {
        var _this = _super.call(this, layer) || this;
        _this.beforeOperations = new EventEmitter();
        _this.afterOperations = new EventEmitter();
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
        this.instance = new Raster(this);
        this.instance.on('beforeoperations', function (event) { return _this.beforeOperations.emit(event); });
        this.instance.on('afteroperations', function (event) { return _this.afterOperations.emit(event); });
        this._register(this.instance);
    };
    var SourceRasterComponent_1;
    SourceRasterComponent.ctorParameters = function () { return [
        { type: LayerImageComponent, decorators: [{ type: Host }] }
    ]; };
    __decorate([
        Input()
    ], SourceRasterComponent.prototype, "operation", void 0);
    __decorate([
        Input()
    ], SourceRasterComponent.prototype, "threads", void 0);
    __decorate([
        Input()
    ], SourceRasterComponent.prototype, "lib", void 0);
    __decorate([
        Input()
    ], SourceRasterComponent.prototype, "operationType", void 0);
    __decorate([
        Output()
    ], SourceRasterComponent.prototype, "beforeOperations", void 0);
    __decorate([
        Output()
    ], SourceRasterComponent.prototype, "afterOperations", void 0);
    __decorate([
        ContentChild(SourceComponent, { static: false })
    ], SourceRasterComponent.prototype, "source", null);
    SourceRasterComponent = SourceRasterComponent_1 = __decorate([
        Component({
            selector: 'aol-source-raster',
            template: " <ng-content></ng-content> ",
            providers: [
                {
                    provide: SourceComponent,
                    useExisting: forwardRef(function () { return SourceRasterComponent_1; }),
                },
            ]
        }),
        __param(0, Host())
    ], SourceRasterComponent);
    return SourceRasterComponent;
}(SourceComponent));

var FeatureComponent = /** @class */ (function () {
    function FeatureComponent(host) {
        this.host = host;
        this.componentType = 'feature';
    }
    FeatureComponent.prototype.ngOnInit = function () {
        this.instance = new Feature();
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
        Input()
    ], FeatureComponent.prototype, "id", void 0);
    FeatureComponent = __decorate([
        Component({
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
        _this.instance = new Circle([0, 0]);
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
        Input()
    ], GeometryCircleComponent.prototype, "radius", null);
    GeometryCircleComponent = __decorate([
        Component({
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
        this.instance = new LineString([
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
        Component({
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
        this.instance = new MultiLineString([
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
        Component({
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
        this.instance = new MultiPoint([
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
        Component({
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
        this.instance = new MultiPolygon([
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
        Component({
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
        this.instance = new Point([0, 0]);
        _super.prototype.ngOnInit.call(this);
    };
    GeometryPointComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: FeatureComponent }
    ]; };
    GeometryPointComponent = __decorate([
        Component({
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
        this.instance = new Polygon([
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
        Component({
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
        { type: ElementRef }
    ]; };
    ContentComponent = __decorate([
        Component({
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
            this.instance = new Overlay(this);
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
        ContentChild(ContentComponent, { static: true })
    ], OverlayComponent.prototype, "content", void 0);
    __decorate([
        Input()
    ], OverlayComponent.prototype, "id", void 0);
    __decorate([
        Input()
    ], OverlayComponent.prototype, "offset", void 0);
    __decorate([
        Input()
    ], OverlayComponent.prototype, "positioning", void 0);
    __decorate([
        Input()
    ], OverlayComponent.prototype, "stopEvent", void 0);
    __decorate([
        Input()
    ], OverlayComponent.prototype, "insertFirst", void 0);
    __decorate([
        Input()
    ], OverlayComponent.prototype, "autoPan", void 0);
    __decorate([
        Input()
    ], OverlayComponent.prototype, "autoPanAnimation", void 0);
    __decorate([
        Input()
    ], OverlayComponent.prototype, "autoPanMargin", void 0);
    OverlayComponent = __decorate([
        Component({
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
            transformedCoordinates = transform([this.x, this.y], this.srid, this.mapSrid);
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
        { type: ViewComponent, decorators: [{ type: Optional }] },
        { type: GeometryPointComponent, decorators: [{ type: Optional }] },
        { type: GeometryCircleComponent, decorators: [{ type: Optional }] },
        { type: OverlayComponent, decorators: [{ type: Optional }] }
    ]; };
    __decorate([
        Input()
    ], CoordinateComponent.prototype, "x", void 0);
    __decorate([
        Input()
    ], CoordinateComponent.prototype, "y", void 0);
    __decorate([
        Input()
    ], CoordinateComponent.prototype, "srid", void 0);
    CoordinateComponent = __decorate([
        Component({
            selector: 'aol-coordinate',
            template: " <div class=\"aol-coordinate\"></div> "
        }),
        __param(1, Optional()),
        __param(2, Optional()),
        __param(3, Optional()),
        __param(4, Optional())
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
                    transformedCoordinates = this.coordinates.map(function (c) { return transform(c, _this.srid, _this.mapSrid); });
                    break;
                case 'geometry-polygon':
                case 'geometry-multilinestring':
                    transformedCoordinates = this.coordinates.map(function (cc) {
                        return cc.map(function (c) { return transform(c, _this.srid, _this.mapSrid); });
                    });
                    break;
                case 'geometry-multipolygon':
                    transformedCoordinates = this.coordinates.map(function (ccc) {
                        return ccc.map(function (cc) { return cc.map(function (c) { return transform(c, _this.srid, _this.mapSrid); }); });
                    });
                    break;
            }
        }
        this.host.instance.setCoordinates(transformedCoordinates);
    };
    CollectionCoordinatesComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: GeometryLinestringComponent, decorators: [{ type: Optional }] },
        { type: GeometryPolygonComponent, decorators: [{ type: Optional }] },
        { type: GeometryMultiPointComponent, decorators: [{ type: Optional }] },
        { type: GeometryMultiLinestringComponent, decorators: [{ type: Optional }] },
        { type: GeometryMultiPolygonComponent, decorators: [{ type: Optional }] }
    ]; };
    __decorate([
        Input()
    ], CollectionCoordinatesComponent.prototype, "coordinates", void 0);
    __decorate([
        Input()
    ], CollectionCoordinatesComponent.prototype, "srid", void 0);
    CollectionCoordinatesComponent = __decorate([
        Component({
            selector: 'aol-collection-coordinates',
            template: " <div class=\"aol-collection-coordinates\"></div> "
        }),
        __param(1, Optional()),
        __param(2, Optional()),
        __param(3, Optional()),
        __param(4, Optional()),
        __param(5, Optional())
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
        this.instance = new Style(this);
        this.host.instance.setStyle(this.instance);
    };
    StyleComponent.ctorParameters = function () { return [
        { type: FeatureComponent, decorators: [{ type: Optional }] },
        { type: LayerVectorComponent, decorators: [{ type: Optional }] }
    ]; };
    __decorate([
        Input()
    ], StyleComponent.prototype, "geometry", void 0);
    __decorate([
        Input()
    ], StyleComponent.prototype, "fill", void 0);
    __decorate([
        Input()
    ], StyleComponent.prototype, "image", void 0);
    __decorate([
        Input()
    ], StyleComponent.prototype, "stroke", void 0);
    __decorate([
        Input()
    ], StyleComponent.prototype, "text", void 0);
    __decorate([
        Input()
    ], StyleComponent.prototype, "zIndex", void 0);
    StyleComponent = __decorate([
        Component({
            selector: 'aol-style',
            template: " <ng-content></ng-content> "
        }),
        __param(0, Optional()), __param(1, Optional())
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
        this.instance = new Circle$1(this);
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
        { type: StyleComponent, decorators: [{ type: Host }] }
    ]; };
    __decorate([
        Input()
    ], StyleCircleComponent.prototype, "fill", void 0);
    __decorate([
        Input()
    ], StyleCircleComponent.prototype, "radius", void 0);
    __decorate([
        Input()
    ], StyleCircleComponent.prototype, "snapToPixel", void 0);
    __decorate([
        Input()
    ], StyleCircleComponent.prototype, "stroke", void 0);
    StyleCircleComponent = __decorate([
        Component({
            selector: 'aol-style-circle',
            template: " <ng-content></ng-content> "
        }),
        __param(0, Host())
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
        this.instance = new Text(this);
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
        { type: StyleComponent, decorators: [{ type: Optional }] }
    ]; };
    __decorate([
        Input()
    ], StyleTextComponent.prototype, "font", void 0);
    __decorate([
        Input()
    ], StyleTextComponent.prototype, "offsetX", void 0);
    __decorate([
        Input()
    ], StyleTextComponent.prototype, "offsetY", void 0);
    __decorate([
        Input()
    ], StyleTextComponent.prototype, "scale", void 0);
    __decorate([
        Input()
    ], StyleTextComponent.prototype, "rotateWithView", void 0);
    __decorate([
        Input()
    ], StyleTextComponent.prototype, "rotation", void 0);
    __decorate([
        Input()
    ], StyleTextComponent.prototype, "text", void 0);
    __decorate([
        Input()
    ], StyleTextComponent.prototype, "textAlign", void 0);
    __decorate([
        Input()
    ], StyleTextComponent.prototype, "textBaseLine", void 0);
    StyleTextComponent = __decorate([
        Component({
            selector: 'aol-style-text',
            template: " <div class=\"aol-style-text\"></div> "
        }),
        __param(0, Optional())
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
        this.instance = new Stroke(this);
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
        { type: StyleComponent, decorators: [{ type: Optional }] },
        { type: StyleCircleComponent, decorators: [{ type: Optional }] },
        { type: StyleTextComponent, decorators: [{ type: Optional }] }
    ]; };
    __decorate([
        Input()
    ], StyleStrokeComponent.prototype, "color", void 0);
    __decorate([
        Input()
    ], StyleStrokeComponent.prototype, "lineCap", void 0);
    __decorate([
        Input()
    ], StyleStrokeComponent.prototype, "lineDash", void 0);
    __decorate([
        Input()
    ], StyleStrokeComponent.prototype, "lineJoin", void 0);
    __decorate([
        Input()
    ], StyleStrokeComponent.prototype, "miterLimit", void 0);
    __decorate([
        Input()
    ], StyleStrokeComponent.prototype, "width", void 0);
    StyleStrokeComponent = __decorate([
        Component({
            selector: 'aol-style-stroke',
            template: " <div class=\"aol-style-stroke\"></div> "
        }),
        __param(0, Optional()),
        __param(1, Optional()),
        __param(2, Optional())
    ], StyleStrokeComponent);
    return StyleStrokeComponent;
}());

var StyleIconComponent = /** @class */ (function () {
    function StyleIconComponent(host) {
        this.host = host;
    }
    StyleIconComponent.prototype.ngOnInit = function () {
        // console.log('creating ol.style.Icon instance with: ', this);
        this.instance = new Icon(this);
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
            this.instance = new Icon(this);
            this.host.instance.setImage(this.instance);
        }
        this.host.update();
        // console.log('changes detected in aol-style-icon: ', changes);
    };
    StyleIconComponent.ctorParameters = function () { return [
        { type: StyleComponent, decorators: [{ type: Host }] }
    ]; };
    __decorate([
        Input()
    ], StyleIconComponent.prototype, "anchor", void 0);
    __decorate([
        Input()
    ], StyleIconComponent.prototype, "anchorXUnits", void 0);
    __decorate([
        Input()
    ], StyleIconComponent.prototype, "anchorYUnits", void 0);
    __decorate([
        Input()
    ], StyleIconComponent.prototype, "anchorOrigin", void 0);
    __decorate([
        Input()
    ], StyleIconComponent.prototype, "color", void 0);
    __decorate([
        Input()
    ], StyleIconComponent.prototype, "crossOrigin", void 0);
    __decorate([
        Input()
    ], StyleIconComponent.prototype, "img", void 0);
    __decorate([
        Input()
    ], StyleIconComponent.prototype, "offset", void 0);
    __decorate([
        Input()
    ], StyleIconComponent.prototype, "offsetOrigin", void 0);
    __decorate([
        Input()
    ], StyleIconComponent.prototype, "opacity", void 0);
    __decorate([
        Input()
    ], StyleIconComponent.prototype, "scale", void 0);
    __decorate([
        Input()
    ], StyleIconComponent.prototype, "snapToPixel", void 0);
    __decorate([
        Input()
    ], StyleIconComponent.prototype, "rotateWithView", void 0);
    __decorate([
        Input()
    ], StyleIconComponent.prototype, "rotation", void 0);
    __decorate([
        Input()
    ], StyleIconComponent.prototype, "size", void 0);
    __decorate([
        Input()
    ], StyleIconComponent.prototype, "imgSize", void 0);
    __decorate([
        Input()
    ], StyleIconComponent.prototype, "src", void 0);
    StyleIconComponent = __decorate([
        Component({
            selector: 'aol-style-icon',
            template: " <div class=\"aol-style-icon\"></div> "
        }),
        __param(0, Host())
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
        this.instance = new Fill(this);
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
        { type: StyleComponent, decorators: [{ type: Optional }] },
        { type: StyleCircleComponent, decorators: [{ type: Optional }] },
        { type: StyleTextComponent, decorators: [{ type: Optional }] }
    ]; };
    __decorate([
        Input()
    ], StyleFillComponent.prototype, "color", void 0);
    StyleFillComponent = __decorate([
        Component({
            selector: 'aol-style-fill',
            template: " <div class=\"aol-style-fill\"></div> "
        }),
        __param(0, Optional()),
        __param(1, Optional()),
        __param(2, Optional())
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
        this.instance = defaults(this);
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
        Input()
    ], DefaultControlComponent.prototype, "attribution", void 0);
    __decorate([
        Input()
    ], DefaultControlComponent.prototype, "attributionOptions", void 0);
    __decorate([
        Input()
    ], DefaultControlComponent.prototype, "rotate", void 0);
    __decorate([
        Input()
    ], DefaultControlComponent.prototype, "rotateOptions", void 0);
    __decorate([
        Input()
    ], DefaultControlComponent.prototype, "zoom", void 0);
    __decorate([
        Input()
    ], DefaultControlComponent.prototype, "zoomOptions", void 0);
    DefaultControlComponent = __decorate([
        Component({
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
            this.instance = new Control(this);
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
        ContentChild(ContentComponent, { static: true })
    ], ControlComponent.prototype, "content", void 0);
    ControlComponent = __decorate([
        Component({
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
        this.instance = new Attribution(this);
        this.map.instance.addControl(this.instance);
    };
    ControlAttributionComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-attribution');
        this.map.instance.removeControl(this.instance);
    };
    ControlAttributionComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], ControlAttributionComponent.prototype, "collapsible", void 0);
    ControlAttributionComponent = __decorate([
        Component({
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
        this.instance = new FullScreen(this);
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
        Input()
    ], ControlFullScreenComponent.prototype, "className", void 0);
    __decorate([
        Input()
    ], ControlFullScreenComponent.prototype, "label", void 0);
    __decorate([
        Input()
    ], ControlFullScreenComponent.prototype, "labelActive", void 0);
    __decorate([
        Input()
    ], ControlFullScreenComponent.prototype, "tipLabel", void 0);
    __decorate([
        Input()
    ], ControlFullScreenComponent.prototype, "keys", void 0);
    ControlFullScreenComponent = __decorate([
        Component({
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
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], ControlMousePositionComponent.prototype, "coordinateFormat", void 0);
    __decorate([
        Input()
    ], ControlMousePositionComponent.prototype, "projection", void 0);
    ControlMousePositionComponent = __decorate([
        Component({
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
        this.instance = new OverviewMap(this);
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
        this.instance = new OverviewMap(this);
        this.map.instance.addControl(this.instance);
    };
    ControlOverviewMapComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    __decorate([
        Input()
    ], ControlOverviewMapComponent.prototype, "collapsed", void 0);
    __decorate([
        Input()
    ], ControlOverviewMapComponent.prototype, "collapseLabel", void 0);
    __decorate([
        Input()
    ], ControlOverviewMapComponent.prototype, "collapsible", void 0);
    __decorate([
        Input()
    ], ControlOverviewMapComponent.prototype, "label", void 0);
    __decorate([
        Input()
    ], ControlOverviewMapComponent.prototype, "layers", void 0);
    __decorate([
        Input()
    ], ControlOverviewMapComponent.prototype, "target", void 0);
    __decorate([
        Input()
    ], ControlOverviewMapComponent.prototype, "tipLabel", void 0);
    __decorate([
        Input()
    ], ControlOverviewMapComponent.prototype, "view", void 0);
    ControlOverviewMapComponent = __decorate([
        Component({
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
        this.instance = new Rotate(this);
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
        Input()
    ], ControlRotateComponent.prototype, "className", void 0);
    __decorate([
        Input()
    ], ControlRotateComponent.prototype, "label", void 0);
    __decorate([
        Input()
    ], ControlRotateComponent.prototype, "tipLabel", void 0);
    __decorate([
        Input()
    ], ControlRotateComponent.prototype, "duration", void 0);
    __decorate([
        Input()
    ], ControlRotateComponent.prototype, "autoHide", void 0);
    ControlRotateComponent = __decorate([
        Component({
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
        this.instance = new ScaleLine(this);
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
        Input()
    ], ControlScaleLineComponent.prototype, "units", void 0);
    ControlScaleLineComponent = __decorate([
        Component({
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
        this.instance = new Zoom(this);
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
        Input()
    ], ControlZoomComponent.prototype, "duration", void 0);
    __decorate([
        Input()
    ], ControlZoomComponent.prototype, "zoomInLabel", void 0);
    __decorate([
        Input()
    ], ControlZoomComponent.prototype, "zoomOutLabel", void 0);
    __decorate([
        Input()
    ], ControlZoomComponent.prototype, "zoomInTipLabel", void 0);
    __decorate([
        Input()
    ], ControlZoomComponent.prototype, "zoomOutTipLabel", void 0);
    __decorate([
        Input()
    ], ControlZoomComponent.prototype, "delta", void 0);
    ControlZoomComponent = __decorate([
        Component({
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
        this.instance = new ZoomSlider(this);
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
        Input()
    ], ControlZoomSliderComponent.prototype, "className", void 0);
    __decorate([
        Input()
    ], ControlZoomSliderComponent.prototype, "duration", void 0);
    __decorate([
        Input()
    ], ControlZoomSliderComponent.prototype, "maxResolution", void 0);
    __decorate([
        Input()
    ], ControlZoomSliderComponent.prototype, "minResolution", void 0);
    ControlZoomSliderComponent = __decorate([
        Component({
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
        this.instance = new ZoomToExtent(this);
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
        Input()
    ], ControlZoomToExtentComponent.prototype, "className", void 0);
    __decorate([
        Input()
    ], ControlZoomToExtentComponent.prototype, "label", void 0);
    __decorate([
        Input()
    ], ControlZoomToExtentComponent.prototype, "tipLabel", void 0);
    __decorate([
        Input()
    ], ControlZoomToExtentComponent.prototype, "extent", void 0);
    ControlZoomToExtentComponent = __decorate([
        Component({
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
        _this.instance = new MVT(_this);
        return _this;
    }
    FormatMVTComponent_1 = FormatMVTComponent;
    var FormatMVTComponent_1;
    __decorate([
        Input()
    ], FormatMVTComponent.prototype, "featureClass", void 0);
    __decorate([
        Input()
    ], FormatMVTComponent.prototype, "geometryName", void 0);
    __decorate([
        Input()
    ], FormatMVTComponent.prototype, "layerName", void 0);
    __decorate([
        Input()
    ], FormatMVTComponent.prototype, "layers", void 0);
    FormatMVTComponent = FormatMVTComponent_1 = __decorate([
        Component({
            selector: 'aol-format-mvt',
            template: '',
            providers: [{ provide: FormatComponent, useExisting: forwardRef(function () { return FormatMVTComponent_1; }) }]
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
        this.instance = defaults$1();
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
        Component({
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
        this.instance = new DoubleClickZoom(this);
        this.map.instance.addInteraction(this.instance);
    };
    DoubleClickZoomInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    DoubleClickZoomInteractionComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    __decorate([
        Input()
    ], DoubleClickZoomInteractionComponent.prototype, "duration", void 0);
    __decorate([
        Input()
    ], DoubleClickZoomInteractionComponent.prototype, "delta", void 0);
    DoubleClickZoomInteractionComponent = __decorate([
        Component({
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
        this.instance = new DragAndDrop(this);
        this.map.instance.addInteraction(this.instance);
    };
    DragAndDropInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    DragAndDropInteractionComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    __decorate([
        Input()
    ], DragAndDropInteractionComponent.prototype, "formatConstructors", void 0);
    __decorate([
        Input()
    ], DragAndDropInteractionComponent.prototype, "projection", void 0);
    __decorate([
        Input()
    ], DragAndDropInteractionComponent.prototype, "target", void 0);
    DragAndDropInteractionComponent = __decorate([
        Component({
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
        this.instance = new DragBox(this);
        this.map.instance.addInteraction(this.instance);
    };
    DragBoxInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    DragBoxInteractionComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    __decorate([
        Input()
    ], DragBoxInteractionComponent.prototype, "className", void 0);
    __decorate([
        Input()
    ], DragBoxInteractionComponent.prototype, "condition", void 0);
    __decorate([
        Input()
    ], DragBoxInteractionComponent.prototype, "boxEndCondition", void 0);
    DragBoxInteractionComponent = __decorate([
        Component({
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
        this.instance = new DragPan(this);
        this.map.instance.addInteraction(this.instance);
    };
    DragPanInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    DragPanInteractionComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    __decorate([
        Input()
    ], DragPanInteractionComponent.prototype, "condition", void 0);
    __decorate([
        Input()
    ], DragPanInteractionComponent.prototype, "kinetic", void 0);
    DragPanInteractionComponent = __decorate([
        Component({
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
        this.instance = new DragRotate(this);
        this.map.instance.addInteraction(this.instance);
    };
    DragRotateInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    DragRotateInteractionComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    __decorate([
        Input()
    ], DragRotateInteractionComponent.prototype, "condition", void 0);
    __decorate([
        Input()
    ], DragRotateInteractionComponent.prototype, "duration", void 0);
    DragRotateInteractionComponent = __decorate([
        Component({
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
        this.instance = new DragRotateAndZoom(this);
        this.map.instance.addInteraction(this.instance);
    };
    DragRotateAndZoomInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    DragRotateAndZoomInteractionComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    __decorate([
        Input()
    ], DragRotateAndZoomInteractionComponent.prototype, "condition", void 0);
    __decorate([
        Input()
    ], DragRotateAndZoomInteractionComponent.prototype, "duration", void 0);
    DragRotateAndZoomInteractionComponent = __decorate([
        Component({
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
        this.instance = new DragZoom(this);
        this.map.instance.addInteraction(this.instance);
    };
    DragZoomInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    DragZoomInteractionComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    __decorate([
        Input()
    ], DragZoomInteractionComponent.prototype, "className", void 0);
    __decorate([
        Input()
    ], DragZoomInteractionComponent.prototype, "condition", void 0);
    __decorate([
        Input()
    ], DragZoomInteractionComponent.prototype, "duration", void 0);
    __decorate([
        Input()
    ], DragZoomInteractionComponent.prototype, "out", void 0);
    DragZoomInteractionComponent = __decorate([
        Component({
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
        this.instance = new MouseWheelZoom(this);
        this.map.instance.addInteraction(this.instance);
    };
    MouseWheelZoomInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    MouseWheelZoomInteractionComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    __decorate([
        Input()
    ], MouseWheelZoomInteractionComponent.prototype, "duration", void 0);
    __decorate([
        Input()
    ], MouseWheelZoomInteractionComponent.prototype, "timeout", void 0);
    __decorate([
        Input()
    ], MouseWheelZoomInteractionComponent.prototype, "useAnchor", void 0);
    MouseWheelZoomInteractionComponent = __decorate([
        Component({
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
        this.instance = new PinchZoom(this);
        this.map.instance.addInteraction(this.instance);
    };
    PinchZoomInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    PinchZoomInteractionComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    __decorate([
        Input()
    ], PinchZoomInteractionComponent.prototype, "duration", void 0);
    __decorate([
        Input()
    ], PinchZoomInteractionComponent.prototype, "constrainResolution", void 0);
    PinchZoomInteractionComponent = __decorate([
        Component({
            selector: 'aol-interaction-pinchzoom',
            template: ''
        })
    ], PinchZoomInteractionComponent);
    return PinchZoomInteractionComponent;
}());

var DrawInteractionComponent = /** @class */ (function () {
    function DrawInteractionComponent(map) {
        this.map = map;
        this.olChange = new EventEmitter();
        this.olChangeActive = new EventEmitter();
        this.drawEnd = new EventEmitter();
        this.drawStart = new EventEmitter();
        this.propertyChange = new EventEmitter();
    }
    DrawInteractionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.instance = new Draw(this);
        this.instance.on('change', function (event) { return _this.olChange.emit(event); });
        // TODO this.instance.on('change:active', (event: DrawEvent) => this.olChangeActive.emit(event));
        this.instance.on('drawend', function (event) { return _this.drawEnd.emit(event); });
        this.instance.on('drawstart', function (event) { return _this.drawStart.emit(event); });
        // TODO this.instance.on('propertychange', (event: DrawEvent) => this.propertyChange.emit(event));
        this.map.instance.addInteraction(this.instance);
    };
    DrawInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    DrawInteractionComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    __decorate([
        Input()
    ], DrawInteractionComponent.prototype, "clickTolerance", void 0);
    __decorate([
        Input()
    ], DrawInteractionComponent.prototype, "features", void 0);
    __decorate([
        Input()
    ], DrawInteractionComponent.prototype, "source", void 0);
    __decorate([
        Input()
    ], DrawInteractionComponent.prototype, "snapTolerance", void 0);
    __decorate([
        Input()
    ], DrawInteractionComponent.prototype, "type", void 0);
    __decorate([
        Input()
    ], DrawInteractionComponent.prototype, "maxPoints", void 0);
    __decorate([
        Input()
    ], DrawInteractionComponent.prototype, "minPoints", void 0);
    __decorate([
        Input()
    ], DrawInteractionComponent.prototype, "finishCondition", void 0);
    __decorate([
        Input()
    ], DrawInteractionComponent.prototype, "style", void 0);
    __decorate([
        Input()
    ], DrawInteractionComponent.prototype, "geometryFunction", void 0);
    __decorate([
        Input()
    ], DrawInteractionComponent.prototype, "geometryName", void 0);
    __decorate([
        Input()
    ], DrawInteractionComponent.prototype, "condition", void 0);
    __decorate([
        Input()
    ], DrawInteractionComponent.prototype, "freehandCondition", void 0);
    __decorate([
        Input()
    ], DrawInteractionComponent.prototype, "freehand", void 0);
    __decorate([
        Input()
    ], DrawInteractionComponent.prototype, "wrapX", void 0);
    __decorate([
        Output()
    ], DrawInteractionComponent.prototype, "olChange", void 0);
    __decorate([
        Output()
    ], DrawInteractionComponent.prototype, "olChangeActive", void 0);
    __decorate([
        Output()
    ], DrawInteractionComponent.prototype, "drawEnd", void 0);
    __decorate([
        Output()
    ], DrawInteractionComponent.prototype, "drawStart", void 0);
    __decorate([
        Output()
    ], DrawInteractionComponent.prototype, "propertyChange", void 0);
    DrawInteractionComponent = __decorate([
        Component({
            selector: 'aol-interaction-draw',
            template: ''
        })
    ], DrawInteractionComponent);
    return DrawInteractionComponent;
}());

var SelectInteractionComponent = /** @class */ (function () {
    function SelectInteractionComponent(map) {
        this.map = map;
        this.olChange = new EventEmitter();
        this.olSelect = new EventEmitter();
        this.propertyChange = new EventEmitter();
    }
    SelectInteractionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.instance = new Select(this);
        this.instance.on('change', function (event) { return _this.olChange.emit(event); });
        this.instance.on('select', function (event) { return _this.olSelect.emit(event); });
        // TODO this.instance.on('propertychange', (event: SelectEvent) => this.propertyChange.emit(event));
        this.map.instance.addInteraction(this.instance);
    };
    SelectInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    SelectInteractionComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    __decorate([
        Input()
    ], SelectInteractionComponent.prototype, "addCondition", void 0);
    __decorate([
        Input()
    ], SelectInteractionComponent.prototype, "condition", void 0);
    __decorate([
        Input()
    ], SelectInteractionComponent.prototype, "layers", void 0);
    __decorate([
        Input()
    ], SelectInteractionComponent.prototype, "style", void 0);
    __decorate([
        Input()
    ], SelectInteractionComponent.prototype, "removeCondition", void 0);
    __decorate([
        Input()
    ], SelectInteractionComponent.prototype, "toggleCondition", void 0);
    __decorate([
        Input()
    ], SelectInteractionComponent.prototype, "multi", void 0);
    __decorate([
        Input()
    ], SelectInteractionComponent.prototype, "features", void 0);
    __decorate([
        Input()
    ], SelectInteractionComponent.prototype, "filter", void 0);
    __decorate([
        Input()
    ], SelectInteractionComponent.prototype, "wrapX", void 0);
    __decorate([
        Output()
    ], SelectInteractionComponent.prototype, "olChange", void 0);
    __decorate([
        Output()
    ], SelectInteractionComponent.prototype, "olSelect", void 0);
    __decorate([
        Output()
    ], SelectInteractionComponent.prototype, "propertyChange", void 0);
    SelectInteractionComponent = __decorate([
        Component({
            selector: 'aol-interaction-select',
            template: ''
        })
    ], SelectInteractionComponent);
    return SelectInteractionComponent;
}());

var ModifyInteractionComponent = /** @class */ (function () {
    function ModifyInteractionComponent(map) {
        this.map = map;
        this.modifyEnd = new EventEmitter();
        this.modifyStart = new EventEmitter();
        this.olChange = new EventEmitter();
        this.olChangeActive = new EventEmitter();
        this.propertyChange = new EventEmitter();
    }
    ModifyInteractionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.instance = new Modify(this);
        this.instance.on('change', function (event) { return _this.olChange.emit(event); });
        // TODO this.instance.on('change:active', (event: ModifyEvent) => this.olChangeActive.emit(event));
        // TODO this.instance.on('propertychange', (event: ModifyEvent) => this.propertyChange.emit(event));
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
        Input()
    ], ModifyInteractionComponent.prototype, "condition", void 0);
    __decorate([
        Input()
    ], ModifyInteractionComponent.prototype, "deleteCondition", void 0);
    __decorate([
        Input()
    ], ModifyInteractionComponent.prototype, "pixelTolerance", void 0);
    __decorate([
        Input()
    ], ModifyInteractionComponent.prototype, "style", void 0);
    __decorate([
        Input()
    ], ModifyInteractionComponent.prototype, "features", void 0);
    __decorate([
        Input()
    ], ModifyInteractionComponent.prototype, "wrapX", void 0);
    __decorate([
        Input()
    ], ModifyInteractionComponent.prototype, "source", void 0);
    __decorate([
        Output()
    ], ModifyInteractionComponent.prototype, "modifyEnd", void 0);
    __decorate([
        Output()
    ], ModifyInteractionComponent.prototype, "modifyStart", void 0);
    __decorate([
        Output()
    ], ModifyInteractionComponent.prototype, "olChange", void 0);
    __decorate([
        Output()
    ], ModifyInteractionComponent.prototype, "olChangeActive", void 0);
    __decorate([
        Output()
    ], ModifyInteractionComponent.prototype, "propertyChange", void 0);
    ModifyInteractionComponent = __decorate([
        Component({
            selector: 'aol-interaction-modify',
            template: ''
        })
    ], ModifyInteractionComponent);
    return ModifyInteractionComponent;
}());

var TranslateInteractionComponent = /** @class */ (function () {
    function TranslateInteractionComponent(map) {
        this.map = map;
        this.olChange = new EventEmitter();
        this.propertyChange = new EventEmitter();
        this.translateEnd = new EventEmitter();
        this.translateStart = new EventEmitter();
        this.translating = new EventEmitter();
    }
    TranslateInteractionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.instance = new Translate(this);
        this.instance.on('change', function (event) { return _this.olChange.emit(event); });
        // TODO this.instance.on('propertychange', (event: TranslateEvent) => this.propertyChange.emit(event));
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
        Input()
    ], TranslateInteractionComponent.prototype, "features", void 0);
    __decorate([
        Input()
    ], TranslateInteractionComponent.prototype, "layers", void 0);
    __decorate([
        Input()
    ], TranslateInteractionComponent.prototype, "hitTolerance", void 0);
    __decorate([
        Output()
    ], TranslateInteractionComponent.prototype, "olChange", void 0);
    __decorate([
        Output()
    ], TranslateInteractionComponent.prototype, "propertyChange", void 0);
    __decorate([
        Output()
    ], TranslateInteractionComponent.prototype, "translateEnd", void 0);
    __decorate([
        Output()
    ], TranslateInteractionComponent.prototype, "translateStart", void 0);
    __decorate([
        Output()
    ], TranslateInteractionComponent.prototype, "translating", void 0);
    TranslateInteractionComponent = __decorate([
        Component({
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
        this.label = this.elementRef.nativeElement.innerHTML;
    };
    AttributionComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    AttributionComponent = __decorate([
        Component({
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
            this.instance = this.attributions.map(function (cmp) { return cmp.label; });
            // console.log('setting attributions:', this.instance);
            this.source.instance.setAttributions(this.instance);
        }
    };
    AttributionsComponent.ctorParameters = function () { return [
        { type: SourceComponent, decorators: [{ type: Host }] }
    ]; };
    __decorate([
        ContentChildren(AttributionComponent)
    ], AttributionsComponent.prototype, "attributions", void 0);
    AttributionsComponent = __decorate([
        Component({
            selector: 'aol-attributions',
            template: '<ng-content></ng-content>'
        }),
        __param(0, Host())
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
        this.instance = new UTFGrid(this);
        this.host.instance.setSource(this.instance);
    };
    var SourceUTFGridComponent_1;
    SourceUTFGridComponent.ctorParameters = function () { return [
        { type: LayerTileComponent, decorators: [{ type: Host }] }
    ]; };
    __decorate([
        Input()
    ], SourceUTFGridComponent.prototype, "tileJSON", void 0);
    __decorate([
        Input()
    ], SourceUTFGridComponent.prototype, "url", void 0);
    SourceUTFGridComponent = SourceUTFGridComponent_1 = __decorate([
        Component({
            selector: 'aol-source-utfgrid',
            template: " <ng-content></ng-content> ",
            providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceUTFGridComponent_1; }) }]
        }),
        __param(0, Host())
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
        NgModule({
            declarations: COMPONENTS,
            imports: [CommonModule],
            exports: COMPONENTS,
        })
    ], AngularOpenlayersModule);
    return AngularOpenlayersModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { AngularOpenlayersModule, AttributionComponent, AttributionsComponent, CollectionCoordinatesComponent, ContentComponent, ControlAttributionComponent, ControlComponent, ControlFullScreenComponent, ControlMousePositionComponent, ControlOverviewMapComponent, ControlRotateComponent, ControlScaleLineComponent, ControlZoomComponent, ControlZoomSliderComponent, ControlZoomToExtentComponent, CoordinateComponent, DefaultControlComponent, DefaultInteractionComponent, DoubleClickZoomInteractionComponent, DragAndDropInteractionComponent, DragBoxInteractionComponent, DragPanInteractionComponent, DragRotateAndZoomInteractionComponent, DragRotateInteractionComponent, DragZoomInteractionComponent, DrawInteractionComponent, FeatureComponent, FormatMVTComponent, GeometryCircleComponent, GeometryLinestringComponent, GeometryMultiLinestringComponent, GeometryMultiPointComponent, GeometryMultiPolygonComponent, GeometryPointComponent, GeometryPolygonComponent, GraticuleComponent, LayerComponent, LayerGroupComponent, LayerImageComponent, LayerTileComponent, LayerVectorComponent, LayerVectorTileComponent, MapComponent, ModifyInteractionComponent, MouseWheelZoomInteractionComponent, OverlayComponent, PinchZoomInteractionComponent, SelectInteractionComponent, SimpleGeometryComponent, SourceBingmapsComponent, SourceClusterComponent, SourceComponent, SourceGeoJSONComponent, SourceImageArcGISRestComponent, SourceImageStaticComponent, SourceImageWMSComponent, SourceOsmComponent, SourceRasterComponent, SourceTileJSONComponent, SourceTileWMSComponent, SourceTileWMTSComponent, SourceUTFGridComponent, SourceVectorComponent, SourceVectorTileComponent, SourceXYZComponent, StyleCircleComponent, StyleComponent, StyleFillComponent, StyleIconComponent, StyleStrokeComponent, StyleTextComponent, TileGridComponent, TileGridWMTSComponent, TranslateInteractionComponent, ViewComponent, FormatComponent as ɵa };
//# sourceMappingURL=ngx-ol.js.map
