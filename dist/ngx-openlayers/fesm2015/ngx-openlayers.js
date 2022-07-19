import { __decorate, __param } from 'tslib';
import { Input, EventEmitter, ElementRef, Output, Component, SkipSelf, Optional, Host, ContentChild, forwardRef, ContentChildren, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import View from 'ol/View';
import Map from 'ol/Map';
import { Graticule, VectorTile as VectorTile$1, Feature, Overlay } from 'ol';
import { Group, Image, Tile, Vector, VectorTile } from 'ol/layer';
import { XYZ, OSM, BingMaps, Vector as Vector$1, Cluster, WMTS as WMTS$1, TileWMS, TileJSON, ImageStatic, ImageWMS, ImageArcGISRest, Raster, UTFGrid } from 'ol/source';
import { createXYZ } from 'ol/tilegrid';
import TileGrid from 'ol/tilegrid/TileGrid';
import WMTS from 'ol/tilegrid/WMTS';
import { GeoJSON, MVT } from 'ol/format';
import { Circle, LineString, MultiLineString, MultiPoint, MultiPolygon, Point, Polygon } from 'ol/geom';
import { transform } from 'ol/proj';
import { Style, Circle as Circle$1, Text, Stroke, Icon, Fill } from 'ol/style';
import { defaults, Control, Attribution, FullScreen, OverviewMap, Rotate, ScaleLine, Zoom, ZoomSlider, ZoomToExtent } from 'ol/control';
import MousePosition from 'ol/control/MousePosition';
import { defaults as defaults$1, DoubleClickZoom, DragAndDrop, DragBox, DragPan, DragRotate, DragRotateAndZoom, DragZoom, MouseWheelZoom, PinchZoom, Draw, Select, Modify, Translate } from 'ol/interaction';

class SimpleGeometryComponent {
    constructor(map, host) {
        this.map = map;
        this.host = host;
        this.componentType = 'simple-geometry';
    }
    ngOnInit() {
        this.host.instance.setGeometry(this.instance);
    }
}
__decorate([
    Input()
], SimpleGeometryComponent.prototype, "srid", void 0);

class SourceComponent {
    constructor(host) {
        this.host = host;
        this.componentType = 'source';
    }
    ngOnDestroy() {
        if (this.host && this.host.instance) {
            this.host.instance.setSource(null);
        }
    }
    _register(s) {
        if (this.host) {
            this.host.instance.setSource(s);
        }
    }
}
__decorate([
    Input()
], SourceComponent.prototype, "attributions", void 0);

let MapComponent = class MapComponent {
    constructor(host) {
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
    ngOnInit() {
        // console.log('creating ol.Map instance with:', this);
        this.instance = new Map(this);
        this.instance.setTarget(this.host.nativeElement.firstElementChild);
        this.instance.on('click', (event) => this.olClick.emit(event));
        this.instance.on('dblclick', (event) => this.dblClick.emit(event));
        this.instance.on('movestart', (event) => this.moveStart.emit(event));
        this.instance.on('moveend', (event) => this.moveEnd.emit(event));
        this.instance.on('pointerdrag', (event) => this.pointerDrag.emit(event));
        this.instance.on('pointermove', (event) => this.pointerMove.emit(event));
        this.instance.on('postrender', (event) => this.onpostrender.emit(event));
        this.instance.on('postrender', (event) => this.postRender.emit(event));
        this.instance.on('prerender', (event) => this.onprerender.emit(event));
        this.instance.on('propertychange', (event) => this.propertyChange.emit(event));
        this.instance.on('singleclick', (event) => this.singleClick.emit(event));
    }
    ngOnChanges(changes) {
        const properties = {};
        if (!this.instance) {
            return;
        }
        for (const key in changes) {
            if (changes.hasOwnProperty(key)) {
                properties[key] = changes[key].currentValue;
            }
        }
        // console.log('changes detected in aol-map, setting new properties: ', properties);
        this.instance.setProperties(properties, false);
    }
    ngAfterViewInit() {
        this.instance.updateSize();
    }
};
MapComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
        template: `
    <div [style.width]="width" [style.height]="height"></div>
    <ng-content></ng-content>
  `
    })
], MapComponent);

let ViewComponent = class ViewComponent {
    constructor(host) {
        this.host = host;
        this.componentType = 'view';
        this.zoomAnimation = false;
        this.changeZoom = new EventEmitter();
        this.changeResolution = new EventEmitter();
        this.changeCenter = new EventEmitter();
    }
    ngOnInit() {
        // console.log('creating ol.View instance with: ', this);
        this.instance = new View(this);
        this.host.instance.setView(this.instance);
        this.instance.on('change:zoom', (event) => this.changeZoom.emit(event));
        this.instance.on('change:resolution', (event) => this.changeResolution.emit(event));
        this.instance.on('change:center', (event) => this.changeCenter.emit(event));
    }
    ngOnChanges(changes) {
        const properties = {};
        if (!this.instance) {
            return;
        }
        for (const key in changes) {
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
    }
    ngOnDestroy() {
        // console.log('removing aol-view');
    }
};
ViewComponent.ctorParameters = () => [
    { type: MapComponent }
];
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
        template: ` <ng-content></ng-content> `
    })
], ViewComponent);

let GraticuleComponent = class GraticuleComponent {
    constructor(map) {
        this.map = map;
        this.componentType = 'graticule';
    }
    ngOnChanges(changes) {
        const properties = {};
        if (!this.instance) {
            return;
        }
        for (const key in changes) {
            if (changes.hasOwnProperty(key)) {
                properties[key] = changes[key].currentValue;
            }
        }
        if (properties) {
            this.instance = new Graticule(properties);
        }
        this.instance.setMap(this.map.instance);
    }
    ngAfterContentInit() {
        this.instance = new Graticule({
            strokeStyle: this.strokeStyle,
            showLabels: this.showLabels,
            lonLabelPosition: this.lonLabelPosition,
            latLabelPosition: this.latLabelPosition,
        });
        this.instance.setMap(this.map.instance);
    }
    ngOnDestroy() {
        this.instance.setMap(null);
    }
};
GraticuleComponent.ctorParameters = () => [
    { type: MapComponent }
];
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

class LayerComponent {
    constructor(host) {
        this.host = host;
        this.componentType = 'layer';
    }
    ngOnInit() {
        if (this.prerender !== null && this.prerender !== undefined) {
            this.instance.on('prerender', this.prerender);
        }
        if (this.postrender !== null && this.postrender !== undefined) {
            this.instance.on('postrender', this.postrender);
        }
        this.host.instance.getLayers().push(this.instance);
    }
    ngOnDestroy() {
        this.host.instance.getLayers().remove(this.instance);
    }
    ngOnChanges(changes) {
        const properties = {};
        if (!this.instance) {
            return;
        }
        for (const key in changes) {
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
    }
}
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

let LayerGroupComponent = class LayerGroupComponent extends LayerComponent {
    constructor(map, group) {
        super(group || map);
    }
    ngOnInit() {
        // console.log(`creating ol.layer.Group instance with:`, this);
        this.instance = new Group(this);
        super.ngOnInit();
    }
};
LayerGroupComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: LayerGroupComponent, decorators: [{ type: SkipSelf }, { type: Optional }] }
];
LayerGroupComponent = __decorate([
    Component({
        selector: 'aol-layer-group',
        template: ` <ng-content></ng-content> `
    }),
    __param(1, SkipSelf()),
    __param(1, Optional())
], LayerGroupComponent);

let LayerImageComponent = class LayerImageComponent extends LayerComponent {
    constructor(map, group) {
        super(group || map);
    }
    ngOnInit() {
        this.instance = new Image(this);
        super.ngOnInit();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
};
LayerImageComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: LayerGroupComponent, decorators: [{ type: Optional }] }
];
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
        template: ` <ng-content></ng-content> `
    }),
    __param(1, Optional())
], LayerImageComponent);

let LayerTileComponent = class LayerTileComponent extends LayerComponent {
    constructor(map, group) {
        super(group || map);
    }
    ngOnInit() {
        // console.log('creating ol.layer.Tile instance with:', this);
        this.instance = new Tile(this);
        super.ngOnInit();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
};
LayerTileComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: LayerGroupComponent, decorators: [{ type: Optional }] }
];
__decorate([
    Input()
], LayerTileComponent.prototype, "preload", void 0);
__decorate([
    Input()
], LayerTileComponent.prototype, "useInterimTilesOnError", void 0);
LayerTileComponent = __decorate([
    Component({
        selector: 'aol-layer-tile',
        template: ` <ng-content></ng-content> `
    }),
    __param(1, Optional())
], LayerTileComponent);

let LayerVectorComponent = class LayerVectorComponent extends LayerComponent {
    constructor(map, group) {
        super(group || map);
    }
    ngOnInit() {
        // console.log('creating ol.layer.Vector instance with:', this);
        this.instance = new Vector(this);
        super.ngOnInit();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
};
LayerVectorComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: LayerGroupComponent, decorators: [{ type: Optional }] }
];
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
        template: ` <ng-content></ng-content> `
    }),
    __param(1, Optional())
], LayerVectorComponent);

let LayerVectorTileComponent = class LayerVectorTileComponent extends LayerComponent {
    constructor(map, group) {
        super(group || map);
    }
    ngOnInit() {
        // console.log('creating ol.layer.VectorTile instance with:', this);
        this.instance = new VectorTile(this);
        super.ngOnInit();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
};
LayerVectorTileComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: LayerGroupComponent, decorators: [{ type: Optional }] }
];
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
        template: ` <ng-content></ng-content> `
    }),
    __param(1, Optional())
], LayerVectorTileComponent);

let TileGridComponent = class TileGridComponent {
    ngOnInit() {
        if (!this.resolutions) {
            this.instance = createXYZ(this);
        }
        else {
            this.instance = new TileGrid(this);
        }
    }
    ngOnChanges(changes) {
        if (!this.resolutions) {
            this.instance = createXYZ(this);
        }
        else {
            this.instance = new TileGrid(this);
        }
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

var SourceXYZComponent_1;
let SourceXYZComponent = SourceXYZComponent_1 = class SourceXYZComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
        this.layer = layer;
        this.tileLoadStart = new EventEmitter();
        this.tileLoadEnd = new EventEmitter();
        this.tileLoadError = new EventEmitter();
    }
    ngAfterContentInit() {
        if (this.tileGridXYZ) {
            this.tileGrid = this.tileGridXYZ.instance;
        }
        this.init();
    }
    ngOnChanges(changes) {
        const properties = {};
        if (!this.instance) {
            return;
        }
        for (const key in changes) {
            if (changes.hasOwnProperty(key)) {
                properties[key] = changes[key].currentValue;
            }
        }
        this.instance.setProperties(properties, false);
        if (changes.hasOwnProperty('url')) {
            this.init();
        }
    }
    init() {
        this.instance = new XYZ(this);
        this.instance.on('tileloadstart', (event) => this.tileLoadStart.emit(event));
        this.instance.on('tileloadend', (event) => this.tileLoadEnd.emit(event));
        this.instance.on('tileloaderror', (event) => this.tileLoadError.emit(event));
        this._register(this.instance);
    }
};
SourceXYZComponent.ctorParameters = () => [
    { type: LayerTileComponent, decorators: [{ type: Optional }, { type: Host }] }
];
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
    ContentChild(TileGridComponent)
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
        template: ` <ng-content></ng-content> `,
        providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceXYZComponent_1) }]
    }),
    __param(0, Optional()),
    __param(0, Host())
], SourceXYZComponent);

var SourceOsmComponent_1;
let SourceOsmComponent = SourceOsmComponent_1 = class SourceOsmComponent extends SourceXYZComponent {
    constructor(layer) {
        super(layer);
        this.layer = layer;
        this.tileLoadStart = new EventEmitter();
        this.tileLoadEnd = new EventEmitter();
        this.tileLoadError = new EventEmitter();
    }
    ngAfterContentInit() {
        if (this.tileGridXYZ) {
            this.tileGrid = this.tileGridXYZ.instance;
        }
        this.instance = new OSM(this);
        this.instance.on('tileloadstart', (event) => this.tileLoadStart.emit(event));
        this.instance.on('tileloadend', (event) => this.tileLoadEnd.emit(event));
        this.instance.on('tileloaderror', (event) => this.tileLoadError.emit(event));
        this._register(this.instance);
    }
};
SourceOsmComponent.ctorParameters = () => [
    { type: LayerTileComponent, decorators: [{ type: Optional }, { type: Host }] }
];
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
        template: ` <div class="aol-source-osm"></div> `,
        providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceOsmComponent_1) }]
    }),
    __param(0, Optional()),
    __param(0, Host())
], SourceOsmComponent);

var SourceBingmapsComponent_1;
let SourceBingmapsComponent = SourceBingmapsComponent_1 = class SourceBingmapsComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
        this.imagerySet = 'Aerial';
    }
    ngOnInit() {
        this.instance = new BingMaps(this);
        this.host.instance.setSource(this.instance);
    }
};
SourceBingmapsComponent.ctorParameters = () => [
    { type: LayerTileComponent, decorators: [{ type: Host }] }
];
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
        template: ` <div class="aol-source-bingmaps"></div> `,
        providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceBingmapsComponent_1) }]
    }),
    __param(0, Host())
], SourceBingmapsComponent);

var SourceVectorComponent_1;
let SourceVectorComponent = SourceVectorComponent_1 = class SourceVectorComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
    }
    ngOnInit() {
        this.instance = new Vector$1(this);
        this.host.instance.setSource(this.instance);
    }
};
SourceVectorComponent.ctorParameters = () => [
    { type: LayerVectorComponent, decorators: [{ type: Host }] }
];
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
        template: ` <ng-content></ng-content> `,
        providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceVectorComponent_1) }]
    }),
    __param(0, Host())
], SourceVectorComponent);

var SourceClusterComponent_1;
let SourceClusterComponent = SourceClusterComponent_1 = class SourceClusterComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
    }
    ngAfterContentInit() {
        this.source = this.sourceVectorComponent.instance;
        this.instance = new Cluster(this);
        this.host.instance.setSource(this.instance);
    }
    ngOnChanges(changes) {
        if (this.instance && changes.hasOwnProperty('distance')) {
            this.instance.setDistance(this.distance);
        }
    }
};
SourceClusterComponent.ctorParameters = () => [
    { type: LayerVectorComponent, decorators: [{ type: Host }] }
];
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
    ContentChild(SourceVectorComponent)
], SourceClusterComponent.prototype, "sourceVectorComponent", void 0);
SourceClusterComponent = SourceClusterComponent_1 = __decorate([
    Component({
        selector: 'aol-source-cluster',
        template: ` <ng-content></ng-content> `,
        providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceClusterComponent_1) }]
    }),
    __param(0, Host())
], SourceClusterComponent);

let TileGridWMTSComponent = class TileGridWMTSComponent extends TileGridComponent {
    ngOnInit() {
        this.instance = new WMTS(this);
    }
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

var SourceTileWMTSComponent_1;
let SourceTileWMTSComponent = SourceTileWMTSComponent_1 = class SourceTileWMTSComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
        this.tileLoadStart = new EventEmitter();
        this.tileLoadEnd = new EventEmitter();
        this.tileLoadError = new EventEmitter();
    }
    ngOnChanges(changes) {
        const properties = {};
        if (!this.instance) {
            return;
        }
        for (const key in changes) {
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
    }
    setLayerSource() {
        this.instance = new WMTS$1(this);
        this.instance.on('tileloadstart', (event) => this.tileLoadStart.emit(event));
        this.instance.on('tileloadend', (event) => this.tileLoadEnd.emit(event));
        this.instance.on('tileloaderror', (event) => this.tileLoadError.emit(event));
        this.host.instance.setSource(this.instance);
    }
    ngAfterContentInit() {
        if (this.tileGridWMTS) {
            this.tileGrid = this.tileGridWMTS.instance;
            this.setLayerSource();
        }
    }
};
SourceTileWMTSComponent.ctorParameters = () => [
    { type: LayerTileComponent, decorators: [{ type: Host }] }
];
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
    ContentChild(TileGridWMTSComponent)
], SourceTileWMTSComponent.prototype, "tileGridWMTS", void 0);
SourceTileWMTSComponent = SourceTileWMTSComponent_1 = __decorate([
    Component({
        selector: 'aol-source-tilewmts',
        template: ` <ng-content></ng-content> `,
        providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceTileWMTSComponent_1) }]
    }),
    __param(0, Host())
], SourceTileWMTSComponent);

class FormatComponent {
    constructor() {
        this.componentType = 'format';
    }
}

var SourceVectorTileComponent_1;
let SourceVectorTileComponent = SourceVectorTileComponent_1 = class SourceVectorTileComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
    }
    /* need the children to construct the OL3 object */
    ngAfterContentInit() {
        this.format = this.formatComponent.instance;
        this.tileGrid = this.tileGridComponent.instance;
        // console.log('creating ol.source.VectorTile instance with:', this);
        this.instance = new VectorTile$1(this);
        this.host.instance.setSource(this.instance);
    }
};
SourceVectorTileComponent.ctorParameters = () => [
    { type: LayerVectorTileComponent, decorators: [{ type: Host }] }
];
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
    ContentChild(FormatComponent)
], SourceVectorTileComponent.prototype, "formatComponent", void 0);
__decorate([
    ContentChild(TileGridComponent)
], SourceVectorTileComponent.prototype, "tileGridComponent", void 0);
SourceVectorTileComponent = SourceVectorTileComponent_1 = __decorate([
    Component({
        selector: 'aol-source-vectortile',
        template: ` <ng-content></ng-content> `,
        providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceVectorTileComponent_1) }]
    }),
    __param(0, Host())
], SourceVectorTileComponent);

var SourceTileWMSComponent_1;
let SourceTileWMSComponent = SourceTileWMSComponent_1 = class SourceTileWMSComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
    }
    ngOnInit() {
        this.instance = new TileWMS(this);
        this.host.instance.setSource(this.instance);
    }
    ngOnChanges(changes) {
        if (this.instance && changes.hasOwnProperty('params')) {
            this.instance.updateParams(this.params);
        }
    }
};
SourceTileWMSComponent.ctorParameters = () => [
    { type: LayerTileComponent, decorators: [{ type: Host }] }
];
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
        template: ` <ng-content></ng-content> `,
        providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceTileWMSComponent_1) }]
    }),
    __param(0, Host())
], SourceTileWMSComponent);

var SourceTileJSONComponent_1;
let SourceTileJSONComponent = SourceTileJSONComponent_1 = class SourceTileJSONComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
    }
    ngOnInit() {
        this.instance = new TileJSON(this);
        this.host.instance.setSource(this.instance);
    }
};
SourceTileJSONComponent.ctorParameters = () => [
    { type: LayerTileComponent, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], SourceTileJSONComponent.prototype, "url", void 0);
SourceTileJSONComponent = SourceTileJSONComponent_1 = __decorate([
    Component({
        selector: 'aol-source-tilejson',
        template: ` <ng-content></ng-content> `,
        providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceTileJSONComponent_1) }]
    }),
    __param(0, Host())
], SourceTileJSONComponent);

var SourceGeoJSONComponent_1;
let SourceGeoJSONComponent = SourceGeoJSONComponent_1 = class SourceGeoJSONComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
    }
    ngOnInit() {
        this.format = new GeoJSON(this);
        this.instance = new Vector$1(this);
        this.host.instance.setSource(this.instance);
    }
};
SourceGeoJSONComponent.ctorParameters = () => [
    { type: LayerVectorComponent, decorators: [{ type: Host }] }
];
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
        template: ` <ng-content></ng-content> `,
        providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceGeoJSONComponent_1) }]
    }),
    __param(0, Host())
], SourceGeoJSONComponent);

var SourceImageStaticComponent_1;
let SourceImageStaticComponent = SourceImageStaticComponent_1 = class SourceImageStaticComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
        this.imageLoadStart = new EventEmitter();
        this.imageLoadEnd = new EventEmitter();
        this.imageLoadError = new EventEmitter();
    }
    setLayerSource() {
        this.instance = new ImageStatic(this);
        this.host.instance.setSource(this.instance);
        this.instance.on('imageloadstart', (event) => this.imageLoadStart.emit(event));
        this.instance.on('imageloadend', (event) => this.imageLoadEnd.emit(event));
        this.instance.on('imageloaderror', (event) => this.imageLoadError.emit(event));
    }
    ngOnInit() {
        this.setLayerSource();
    }
    ngOnChanges(changes) {
        const properties = {};
        if (!this.instance) {
            return;
        }
        for (const key in changes) {
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
    }
};
SourceImageStaticComponent.ctorParameters = () => [
    { type: LayerImageComponent, decorators: [{ type: Host }] }
];
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
        template: ` <ng-content></ng-content> `,
        providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceImageStaticComponent_1) }]
    }),
    __param(0, Host())
], SourceImageStaticComponent);

var SourceImageWMSComponent_1;
let SourceImageWMSComponent = SourceImageWMSComponent_1 = class SourceImageWMSComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
        this.imageLoadStart = new EventEmitter();
        this.imageLoadEnd = new EventEmitter();
        this.imageLoadError = new EventEmitter();
    }
    ngOnInit() {
        this.instance = new ImageWMS(this);
        this.host.instance.setSource(this.instance);
        this.instance.on('imageloadstart', (event) => this.imageLoadStart.emit(event));
        this.instance.on('imageloadend', (event) => this.imageLoadEnd.emit(event));
        this.instance.on('imageloaderror', (event) => this.imageLoadError.emit(event));
    }
    ngOnChanges(changes) {
        if (this.instance && changes.hasOwnProperty('params')) {
            this.instance.updateParams(this.params);
        }
    }
};
SourceImageWMSComponent.ctorParameters = () => [
    { type: LayerImageComponent, decorators: [{ type: Host }] }
];
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
        template: ` <ng-content></ng-content> `,
        providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceImageWMSComponent_1) }]
    }),
    __param(0, Host())
], SourceImageWMSComponent);

var SourceImageArcGISRestComponent_1;
let SourceImageArcGISRestComponent = SourceImageArcGISRestComponent_1 = class SourceImageArcGISRestComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
        this.ratio = 1.5;
        this.imageLoadStart = new EventEmitter();
        this.imageLoadEnd = new EventEmitter();
        this.imageLoadError = new EventEmitter();
    }
    ngOnInit() {
        this.instance = new ImageArcGISRest(this);
        this.host.instance.setSource(this.instance);
        this.instance.on('imageloadstart', (event) => this.imageLoadStart.emit(event));
        this.instance.on('imageloadend', (event) => this.imageLoadEnd.emit(event));
        this.instance.on('imageloaderror', (event) => this.imageLoadError.emit(event));
    }
    ngOnChanges(changes) {
        if (this.instance && changes.hasOwnProperty('params')) {
            this.instance.updateParams(this.params);
        }
    }
};
SourceImageArcGISRestComponent.ctorParameters = () => [
    { type: LayerImageComponent, decorators: [{ type: Host }] }
];
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
        template: ` <ng-content></ng-content> `,
        providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceImageArcGISRestComponent_1) }]
    }),
    __param(0, Host())
], SourceImageArcGISRestComponent);

var SourceRasterComponent_1;
let SourceRasterComponent = SourceRasterComponent_1 = class SourceRasterComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
        this.beforeOperations = new EventEmitter();
        this.afterOperations = new EventEmitter();
        this.sources = [];
    }
    set source(sourceComponent) {
        this.sources = [sourceComponent.instance];
        if (this.instance) {
            // Openlayer doesn't handle sources update. Just recreate Raster instance.
            this.init();
        }
    }
    ngAfterContentInit() {
        this.init();
    }
    init() {
        this.instance = new Raster(this);
        this.instance.on('beforeoperations', (event) => this.beforeOperations.emit(event));
        this.instance.on('afteroperations', (event) => this.afterOperations.emit(event));
        this._register(this.instance);
    }
};
SourceRasterComponent.ctorParameters = () => [
    { type: LayerImageComponent, decorators: [{ type: Host }] }
];
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
    ContentChild(SourceComponent)
], SourceRasterComponent.prototype, "source", null);
SourceRasterComponent = SourceRasterComponent_1 = __decorate([
    Component({
        selector: 'aol-source-raster',
        template: ` <ng-content></ng-content> `,
        providers: [
            {
                provide: SourceComponent,
                useExisting: forwardRef(() => SourceRasterComponent_1),
            },
        ]
    }),
    __param(0, Host())
], SourceRasterComponent);

let FeatureComponent = class FeatureComponent {
    constructor(host) {
        this.host = host;
        this.componentType = 'feature';
    }
    ngOnInit() {
        this.instance = new Feature();
        if (this.id !== undefined) {
            this.instance.setId(this.id);
        }
        this.host.instance.addFeature(this.instance);
    }
    ngOnDestroy() {
        this.host.instance.removeFeature(this.instance);
    }
    ngOnChanges(changes) {
        if (this.instance) {
            this.instance.setId(this.id);
        }
    }
};
FeatureComponent.ctorParameters = () => [
    { type: SourceVectorComponent }
];
__decorate([
    Input()
], FeatureComponent.prototype, "id", void 0);
FeatureComponent = __decorate([
    Component({
        selector: 'aol-feature',
        template: ` <ng-content></ng-content> `
    })
], FeatureComponent);

let GeometryCircleComponent = class GeometryCircleComponent extends SimpleGeometryComponent {
    constructor(map, host) {
        super(map, host);
        this.componentType = 'geometry-circle';
        // defaulting coordinates to [0,0]. To be overridden in child component.
        this.instance = new Circle([0, 0]);
    }
    get radius() {
        return this.instance.getRadius();
    }
    set radius(radius) {
        this.instance.setRadius(radius);
    }
};
GeometryCircleComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: FeatureComponent }
];
__decorate([
    Input()
], GeometryCircleComponent.prototype, "radius", null);
GeometryCircleComponent = __decorate([
    Component({
        selector: 'aol-geometry-circle',
        template: ` <ng-content></ng-content> `
    })
], GeometryCircleComponent);

let GeometryLinestringComponent = class GeometryLinestringComponent extends SimpleGeometryComponent {
    constructor(map, host) {
        super(map, host);
        this.componentType = 'geometry-linestring';
    }
    ngOnInit() {
        this.instance = new LineString([
            [0, 0],
            [1, 1],
        ]);
        super.ngOnInit();
    }
};
GeometryLinestringComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: FeatureComponent }
];
GeometryLinestringComponent = __decorate([
    Component({
        selector: 'aol-geometry-linestring',
        template: ` <ng-content></ng-content> `
    })
], GeometryLinestringComponent);

let GeometryMultiLinestringComponent = class GeometryMultiLinestringComponent extends SimpleGeometryComponent {
    constructor(map, host) {
        super(map, host);
        this.componentType = 'geometry-multilinestring';
    }
    ngOnInit() {
        this.instance = new MultiLineString([
            [
                [0, 0],
                [1, 1],
            ],
        ]);
        super.ngOnInit();
    }
};
GeometryMultiLinestringComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: FeatureComponent }
];
GeometryMultiLinestringComponent = __decorate([
    Component({
        selector: 'aol-geometry-multilinestring',
        template: ` <ng-content></ng-content> `
    })
], GeometryMultiLinestringComponent);

let GeometryMultiPointComponent = class GeometryMultiPointComponent extends SimpleGeometryComponent {
    constructor(map, host) {
        super(map, host);
        this.componentType = 'geometry-multipoint';
    }
    ngOnInit() {
        this.instance = new MultiPoint([
            [0, 0],
            [1, 1],
        ]);
        super.ngOnInit();
    }
};
GeometryMultiPointComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: FeatureComponent }
];
GeometryMultiPointComponent = __decorate([
    Component({
        selector: 'aol-geometry-multipoint',
        template: ` <ng-content></ng-content> `
    })
], GeometryMultiPointComponent);

let GeometryMultiPolygonComponent = class GeometryMultiPolygonComponent extends SimpleGeometryComponent {
    constructor(map, host) {
        super(map, host);
        this.componentType = 'geometry-multipolygon';
    }
    ngOnInit() {
        this.instance = new MultiPolygon([
            [
                [
                    [0, 0],
                    [1, 1],
                    [0, 1],
                ],
            ],
        ]);
        super.ngOnInit();
    }
};
GeometryMultiPolygonComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: FeatureComponent }
];
GeometryMultiPolygonComponent = __decorate([
    Component({
        selector: 'aol-geometry-multipolygon',
        template: ` <ng-content></ng-content> `
    })
], GeometryMultiPolygonComponent);

let GeometryPointComponent = class GeometryPointComponent extends SimpleGeometryComponent {
    constructor(map, host) {
        super(map, host);
        this.componentType = 'geometry-point';
    }
    ngOnInit() {
        this.instance = new Point([0, 0]);
        super.ngOnInit();
    }
};
GeometryPointComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: FeatureComponent }
];
GeometryPointComponent = __decorate([
    Component({
        selector: 'aol-geometry-point',
        template: ` <ng-content></ng-content> `
    })
], GeometryPointComponent);

let GeometryPolygonComponent = class GeometryPolygonComponent extends SimpleGeometryComponent {
    constructor(map, host) {
        super(map, host);
        this.componentType = 'geometry-polygon';
    }
    ngOnInit() {
        this.instance = new Polygon([
            [
                [0, 0],
                [1, 1],
                [0, 1],
            ],
        ]);
        super.ngOnInit();
    }
};
GeometryPolygonComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: FeatureComponent }
];
GeometryPolygonComponent = __decorate([
    Component({
        selector: 'aol-geometry-polygon',
        template: ` <ng-content></ng-content> `
    })
], GeometryPolygonComponent);

let ContentComponent = class ContentComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
};
ContentComponent.ctorParameters = () => [
    { type: ElementRef }
];
ContentComponent = __decorate([
    Component({
        selector: 'aol-content',
        template: '<ng-content></ng-content>'
    })
], ContentComponent);

let OverlayComponent = class OverlayComponent {
    constructor(map) {
        this.map = map;
        this.componentType = 'overlay';
    }
    ngOnInit() {
        if (this.content) {
            this.element = this.content.elementRef.nativeElement;
            this.instance = new Overlay(this);
            this.map.instance.addOverlay(this.instance);
        }
    }
    ngOnDestroy() {
        if (this.instance) {
            this.map.instance.removeOverlay(this.instance);
        }
    }
};
OverlayComponent.ctorParameters = () => [
    { type: MapComponent }
];
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

let CoordinateComponent = class CoordinateComponent {
    constructor(map, viewHost, geometryPointHost, geometryCircleHost, overlayHost) {
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
    ngOnInit() {
        this.map.instance.on('change:view', (e) => this.onMapViewChanged(e));
        this.mapSrid = this.map.instance.getView().getProjection().getCode();
        this.transformCoordinates();
    }
    ngOnChanges(changes) {
        this.transformCoordinates();
    }
    onMapViewChanged(event) {
        this.mapSrid = event.target.get(event.key).getProjection().getCode();
        this.transformCoordinates();
    }
    transformCoordinates() {
        let transformedCoordinates;
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
    }
};
CoordinateComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: ViewComponent, decorators: [{ type: Optional }] },
    { type: GeometryPointComponent, decorators: [{ type: Optional }] },
    { type: GeometryCircleComponent, decorators: [{ type: Optional }] },
    { type: OverlayComponent, decorators: [{ type: Optional }] }
];
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
        template: ` <div class="aol-coordinate"></div> `
    }),
    __param(1, Optional()),
    __param(2, Optional()),
    __param(3, Optional()),
    __param(4, Optional())
], CoordinateComponent);

let CollectionCoordinatesComponent = class CollectionCoordinatesComponent {
    constructor(map, geometryLinestring, geometryPolygon, geometryMultipoint, geometryMultilinestring, geometryMultipolygon) {
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
    ngOnInit() {
        this.map.instance.on('change:view', (e) => this.onMapViewChanged(e));
        this.mapSrid = this.map.instance.getView().getProjection().getCode();
        this.transformCoordinates();
    }
    ngOnChanges(changes) {
        this.transformCoordinates();
    }
    onMapViewChanged(event) {
        this.mapSrid = event.target.get(event.key).getProjection().getCode();
        this.transformCoordinates();
    }
    transformCoordinates() {
        let transformedCoordinates;
        if (this.srid === this.mapSrid) {
            transformedCoordinates = this.coordinates;
        }
        else {
            switch (this.host.componentType) {
                case 'geometry-linestring':
                case 'geometry-multipoint':
                    transformedCoordinates = this.coordinates.map((c) => transform(c, this.srid, this.mapSrid));
                    break;
                case 'geometry-polygon':
                case 'geometry-multilinestring':
                    transformedCoordinates = this.coordinates.map((cc) => cc.map((c) => transform(c, this.srid, this.mapSrid)));
                    break;
                case 'geometry-multipolygon':
                    transformedCoordinates = this.coordinates.map((ccc) => ccc.map((cc) => cc.map((c) => transform(c, this.srid, this.mapSrid))));
                    break;
            }
        }
        this.host.instance.setCoordinates(transformedCoordinates);
    }
};
CollectionCoordinatesComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: GeometryLinestringComponent, decorators: [{ type: Optional }] },
    { type: GeometryPolygonComponent, decorators: [{ type: Optional }] },
    { type: GeometryMultiPointComponent, decorators: [{ type: Optional }] },
    { type: GeometryMultiLinestringComponent, decorators: [{ type: Optional }] },
    { type: GeometryMultiPolygonComponent, decorators: [{ type: Optional }] }
];
__decorate([
    Input()
], CollectionCoordinatesComponent.prototype, "coordinates", void 0);
__decorate([
    Input()
], CollectionCoordinatesComponent.prototype, "srid", void 0);
CollectionCoordinatesComponent = __decorate([
    Component({
        selector: 'aol-collection-coordinates',
        template: ` <div class="aol-collection-coordinates"></div> `
    }),
    __param(1, Optional()),
    __param(2, Optional()),
    __param(3, Optional()),
    __param(4, Optional()),
    __param(5, Optional())
], CollectionCoordinatesComponent);

let StyleComponent = class StyleComponent {
    constructor(featureHost, layerHost) {
        this.componentType = 'style';
        // console.log('creating aol-style');
        this.host = !!featureHost ? featureHost : layerHost;
        if (!this.host) {
            throw new Error('aol-style must be applied to a feature or a layer');
        }
    }
    update() {
        // console.log('updating style\'s host: ', this.host);
        this.host.instance.changed();
    }
    ngOnInit() {
        // console.log('creating aol-style instance with: ', this);
        this.instance = new Style(this);
        this.host.instance.setStyle(this.instance);
    }
};
StyleComponent.ctorParameters = () => [
    { type: FeatureComponent, decorators: [{ type: Optional }] },
    { type: LayerVectorComponent, decorators: [{ type: Optional }] }
];
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
        template: ` <ng-content></ng-content> `
    }),
    __param(0, Optional()), __param(1, Optional())
], StyleComponent);

let StyleCircleComponent = class StyleCircleComponent {
    constructor(host) {
        this.host = host;
        this.componentType = 'style-circle';
    }
    /**
     * WORK-AROUND: since the re-rendering is not triggered on style change
     * we trigger a radius change.
     * see openlayers #6233 and #5775
     */
    update() {
        if (!!this.instance) {
            // console.log('setting ol.style.Circle instance\'s radius');
            this.instance.setRadius(this.radius);
        }
        this.host.update();
    }
    ngAfterContentInit() {
        // console.log('creating ol.style.Circle instance with: ', this);
        this.instance = new Circle$1(this);
        this.host.instance.setImage(this.instance);
        this.host.update();
    }
    ngOnChanges(changes) {
        if (!this.instance) {
            return;
        }
        if (changes.radius) {
            this.instance.setRadius(changes.radius.currentValue);
        }
        // console.log('changes detected in aol-style-circle, setting new radius: ', changes['radius'].currentValue);
    }
    ngOnDestroy() {
        // console.log('removing aol-style-circle');
        this.host.instance.setImage(null);
    }
};
StyleCircleComponent.ctorParameters = () => [
    { type: StyleComponent, decorators: [{ type: Host }] }
];
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
__decorate([
    Input()
], StyleCircleComponent.prototype, "atlasManager", void 0);
StyleCircleComponent = __decorate([
    Component({
        selector: 'aol-style-circle',
        template: ` <ng-content></ng-content> `
    }),
    __param(0, Host())
], StyleCircleComponent);

let StyleTextComponent = class StyleTextComponent {
    constructor(host) {
        this.host = host;
        this.componentType = 'style-text';
        if (!host) {
            throw new Error('aol-style-text must be a descendant of aol-style');
        }
        // console.log('creating aol-style-text with: ', this);
    }
    ngOnInit() {
        // console.log('creating ol.style.Text instance with: ', this);
        this.instance = new Text(this);
        this.host.instance.setText(this.instance);
    }
    ngOnChanges(changes) {
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
    }
};
StyleTextComponent.ctorParameters = () => [
    { type: StyleComponent, decorators: [{ type: Optional }] }
];
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
        template: ` <div class="aol-style-text"></div> `
    }),
    __param(0, Optional())
], StyleTextComponent);

let StyleStrokeComponent = class StyleStrokeComponent {
    constructor(styleHost, styleCircleHost, styleTextHost) {
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
    ngOnInit() {
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
    }
    ngOnChanges(changes) {
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
    }
};
StyleStrokeComponent.ctorParameters = () => [
    { type: StyleComponent, decorators: [{ type: Optional }] },
    { type: StyleCircleComponent, decorators: [{ type: Optional }] },
    { type: StyleTextComponent, decorators: [{ type: Optional }] }
];
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
        template: ` <div class="aol-style-stroke"></div> `
    }),
    __param(0, Optional()),
    __param(1, Optional()),
    __param(2, Optional())
], StyleStrokeComponent);

let StyleIconComponent = class StyleIconComponent {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        // console.log('creating ol.style.Icon instance with: ', this);
        this.instance = new Icon(this);
        this.host.instance.setImage(this.instance);
    }
    ngOnChanges(changes) {
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
    }
};
StyleIconComponent.ctorParameters = () => [
    { type: StyleComponent, decorators: [{ type: Host }] }
];
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
        template: ` <div class="aol-style-icon"></div> `
    }),
    __param(0, Host())
], StyleIconComponent);

let StyleFillComponent = class StyleFillComponent {
    constructor(styleHost, styleCircleHost, styleTextHost) {
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
    ngOnInit() {
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
    }
    ngOnChanges(changes) {
        if (!this.instance) {
            return;
        }
        if (changes.color) {
            this.instance.setColor(changes.color.currentValue);
        }
        this.host.update();
        // console.log('changes detected in aol-style-fill, setting new color: ', changes);
    }
};
StyleFillComponent.ctorParameters = () => [
    { type: StyleComponent, decorators: [{ type: Optional }] },
    { type: StyleCircleComponent, decorators: [{ type: Optional }] },
    { type: StyleTextComponent, decorators: [{ type: Optional }] }
];
__decorate([
    Input()
], StyleFillComponent.prototype, "color", void 0);
StyleFillComponent = __decorate([
    Component({
        selector: 'aol-style-fill',
        template: ` <div class="aol-style-fill"></div> `
    }),
    __param(0, Optional()),
    __param(1, Optional()),
    __param(2, Optional())
], StyleFillComponent);

let DefaultControlComponent = class DefaultControlComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        // console.log('ol.control.defaults init: ', this);
        this.instance = defaults(this);
        this.instance.forEach((c) => this.map.instance.addControl(c));
    }
    ngOnDestroy() {
        // console.log('removing aol-control-defaults');
        this.instance.forEach((c) => this.map.instance.removeControl(c));
    }
};
DefaultControlComponent.ctorParameters = () => [
    { type: MapComponent }
];
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

let ControlComponent = class ControlComponent {
    constructor(map) {
        this.map = map;
        this.componentType = 'control';
    }
    ngOnInit() {
        if (this.content) {
            this.element = this.content.elementRef.nativeElement;
            this.instance = new Control(this);
            this.map.instance.addControl(this.instance);
        }
    }
    ngOnDestroy() {
        if (this.instance) {
            this.map.instance.removeControl(this.instance);
        }
    }
};
ControlComponent.ctorParameters = () => [
    { type: MapComponent }
];
__decorate([
    ContentChild(ContentComponent, { static: true })
], ControlComponent.prototype, "content", void 0);
ControlComponent = __decorate([
    Component({
        selector: 'aol-control',
        template: ` <ng-content></ng-content> `
    })
], ControlComponent);

let ControlAttributionComponent = class ControlAttributionComponent {
    constructor(map, element) {
        this.map = map;
        this.element = element;
        this.componentType = 'control';
    }
    ngOnInit() {
        this.target = this.element.nativeElement;
        // console.log('ol.control.Attribution init: ', this);
        this.instance = new Attribution(this);
        this.map.instance.addControl(this.instance);
    }
    ngOnDestroy() {
        // console.log('removing aol-control-attribution');
        this.map.instance.removeControl(this.instance);
    }
};
ControlAttributionComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: ElementRef }
];
__decorate([
    Input()
], ControlAttributionComponent.prototype, "collapsible", void 0);
ControlAttributionComponent = __decorate([
    Component({
        selector: 'aol-control-attribution',
        template: ``
    })
], ControlAttributionComponent);

let ControlFullScreenComponent = class ControlFullScreenComponent {
    constructor(map) {
        this.map = map;
        // console.log('instancing aol-control-fullscreen');
    }
    ngOnInit() {
        this.instance = new FullScreen(this);
        this.map.instance.addControl(this.instance);
    }
    ngOnDestroy() {
        // console.log('removing aol-control-fullscreen');
        this.map.instance.removeControl(this.instance);
    }
};
ControlFullScreenComponent.ctorParameters = () => [
    { type: MapComponent }
];
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
        template: ` <ng-content></ng-content> `
    })
], ControlFullScreenComponent);

let ControlMousePositionComponent = class ControlMousePositionComponent {
    constructor(map, element) {
        this.map = map;
        this.element = element;
    }
    ngOnInit() {
        this.target = this.element.nativeElement;
        // console.log('ol.control.MousePosition init: ', this);
        this.instance = new MousePosition(this);
        this.map.instance.addControl(this.instance);
    }
    ngOnDestroy() {
        // console.log('removing aol-control-mouseposition');
        this.map.instance.removeControl(this.instance);
    }
};
ControlMousePositionComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: ElementRef }
];
__decorate([
    Input()
], ControlMousePositionComponent.prototype, "coordinateFormat", void 0);
__decorate([
    Input()
], ControlMousePositionComponent.prototype, "projection", void 0);
ControlMousePositionComponent = __decorate([
    Component({
        selector: 'aol-control-mouseposition',
        template: ``
    })
], ControlMousePositionComponent);

let ControlOverviewMapComponent = class ControlOverviewMapComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = new OverviewMap(this);
        this.map.instance.addControl(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeControl(this.instance);
    }
    ngOnChanges(changes) {
        if (this.instance != null && changes.hasOwnProperty('view')) {
            this.reloadInstance();
        }
    }
    reloadInstance() {
        this.map.instance.removeControl(this.instance);
        this.instance = new OverviewMap(this);
        this.map.instance.addControl(this.instance);
    }
};
ControlOverviewMapComponent.ctorParameters = () => [
    { type: MapComponent }
];
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
        template: ` <ng-content></ng-content> `
    })
], ControlOverviewMapComponent);

let ControlRotateComponent = class ControlRotateComponent {
    constructor(map) {
        this.map = map;
        // console.log('instancing aol-control-rotate');
    }
    ngOnInit() {
        this.instance = new Rotate(this);
        this.map.instance.addControl(this.instance);
    }
    ngOnDestroy() {
        // console.log('removing aol-control-rotate');
        this.map.instance.removeControl(this.instance);
    }
};
ControlRotateComponent.ctorParameters = () => [
    { type: MapComponent }
];
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
        template: ` <ng-content></ng-content> `
    })
], ControlRotateComponent);

let ControlScaleLineComponent = class ControlScaleLineComponent {
    constructor(map) {
        this.map = map;
        // console.log('instancing aol-control-scaleline');
    }
    ngOnInit() {
        this.instance = new ScaleLine(this);
        this.map.instance.addControl(this.instance);
    }
    ngOnDestroy() {
        // console.log('removing aol-control-scaleline');
        this.map.instance.removeControl(this.instance);
    }
};
ControlScaleLineComponent.ctorParameters = () => [
    { type: MapComponent }
];
__decorate([
    Input()
], ControlScaleLineComponent.prototype, "units", void 0);
ControlScaleLineComponent = __decorate([
    Component({
        selector: 'aol-control-scaleline',
        template: ` <ng-content></ng-content> `
    })
], ControlScaleLineComponent);

let ControlZoomComponent = class ControlZoomComponent {
    constructor(map) {
        this.map = map;
        // console.log('instancing aol-control-zoom');
    }
    ngOnInit() {
        this.instance = new Zoom(this);
        this.map.instance.addControl(this.instance);
    }
    ngOnDestroy() {
        // console.log('removing aol-control-zoom');
        this.map.instance.removeControl(this.instance);
    }
};
ControlZoomComponent.ctorParameters = () => [
    { type: MapComponent }
];
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
        template: ` <ng-content></ng-content> `
    })
], ControlZoomComponent);

let ControlZoomSliderComponent = class ControlZoomSliderComponent {
    constructor(map) {
        this.map = map;
        // console.log('instancing aol-control-zoomslider');
    }
    ngOnInit() {
        this.instance = new ZoomSlider(this);
        this.map.instance.addControl(this.instance);
    }
    ngOnDestroy() {
        // console.log('removing aol-control-zoomslider');
        this.map.instance.removeControl(this.instance);
    }
};
ControlZoomSliderComponent.ctorParameters = () => [
    { type: MapComponent }
];
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
        template: ` <ng-content></ng-content> `
    })
], ControlZoomSliderComponent);

let ControlZoomToExtentComponent = class ControlZoomToExtentComponent {
    constructor(map) {
        this.map = map;
        // console.log('instancing aol-control-zoomtoextent');
    }
    ngOnInit() {
        this.instance = new ZoomToExtent(this);
        this.map.instance.addControl(this.instance);
    }
    ngOnDestroy() {
        // console.log('removing aol-control-zoomtoextent');
        this.map.instance.removeControl(this.instance);
    }
};
ControlZoomToExtentComponent.ctorParameters = () => [
    { type: MapComponent }
];
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
        template: ` <ng-content></ng-content> `
    })
], ControlZoomToExtentComponent);

var FormatMVTComponent_1;
let FormatMVTComponent = FormatMVTComponent_1 = class FormatMVTComponent extends FormatComponent {
    constructor() {
        super();
        this.instance = new MVT(this);
    }
};
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
        providers: [{ provide: FormatComponent, useExisting: forwardRef(() => FormatMVTComponent_1) }]
    })
], FormatMVTComponent);

let DefaultInteractionComponent = class DefaultInteractionComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = defaults$1();
        this.instance.forEach((i) => this.map.instance.addInteraction(i));
    }
    ngOnDestroy() {
        this.instance.forEach((i) => this.map.instance.removeInteraction(i));
    }
};
DefaultInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];
DefaultInteractionComponent = __decorate([
    Component({
        selector: 'aol-interaction-default',
        template: ''
    })
], DefaultInteractionComponent);

let DoubleClickZoomInteractionComponent = class DoubleClickZoomInteractionComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = new DoubleClickZoom(this);
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
};
DoubleClickZoomInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];
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

let DragAndDropInteractionComponent = class DragAndDropInteractionComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = new DragAndDrop(this);
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
};
DragAndDropInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];
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

let DragBoxInteractionComponent = class DragBoxInteractionComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = new DragBox(this);
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
};
DragBoxInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];
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

let DragPanInteractionComponent = class DragPanInteractionComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = new DragPan(this);
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
};
DragPanInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];
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

let DragRotateInteractionComponent = class DragRotateInteractionComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = new DragRotate(this);
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
};
DragRotateInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];
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

let DragRotateAndZoomInteractionComponent = class DragRotateAndZoomInteractionComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = new DragRotateAndZoom(this);
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
};
DragRotateAndZoomInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];
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

let DragZoomInteractionComponent = class DragZoomInteractionComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = new DragZoom(this);
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
};
DragZoomInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];
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

let MouseWheelZoomInteractionComponent = class MouseWheelZoomInteractionComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = new MouseWheelZoom(this);
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
};
MouseWheelZoomInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];
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

let PinchZoomInteractionComponent = class PinchZoomInteractionComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = new PinchZoom(this);
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
};
PinchZoomInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];
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

let DrawInteractionComponent = class DrawInteractionComponent {
    constructor(map) {
        this.map = map;
        this.olChange = new EventEmitter();
        this.olChangeActive = new EventEmitter();
        this.drawEnd = new EventEmitter();
        this.drawStart = new EventEmitter();
        this.propertyChange = new EventEmitter();
    }
    ngOnInit() {
        this.instance = new Draw(this);
        this.instance.on('change', (event) => this.olChange.emit(event));
        this.instance.on('change:active', (event) => this.olChangeActive.emit(event));
        this.instance.on('drawend', (event) => this.drawEnd.emit(event));
        this.instance.on('drawstart', (event) => this.drawStart.emit(event));
        this.instance.on('propertychange', (event) => this.propertyChange.emit(event));
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
};
DrawInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];
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

let SelectInteractionComponent = class SelectInteractionComponent {
    constructor(map) {
        this.map = map;
        this.olChange = new EventEmitter();
        this.olSelect = new EventEmitter();
        this.propertyChange = new EventEmitter();
    }
    ngOnInit() {
        this.instance = new Select(this);
        this.instance.on('change', (event) => this.olChange.emit(event));
        this.instance.on('select', (event) => this.olSelect.emit(event));
        this.instance.on('propertychange', (event) => this.propertyChange.emit(event));
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
};
SelectInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];
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

let ModifyInteractionComponent = class ModifyInteractionComponent {
    constructor(map) {
        this.map = map;
        this.modifyEnd = new EventEmitter();
        this.modifyStart = new EventEmitter();
        this.olChange = new EventEmitter();
        this.olChangeActive = new EventEmitter();
        this.propertyChange = new EventEmitter();
    }
    ngOnInit() {
        this.instance = new Modify(this);
        this.instance.on('change', (event) => this.olChange.emit(event));
        this.instance.on('change:active', (event) => this.olChangeActive.emit(event));
        this.instance.on('propertychange', (event) => this.propertyChange.emit(event));
        this.instance.on('modifyend', (event) => this.modifyEnd.emit(event));
        this.instance.on('modifystart', (event) => this.modifyStart.emit(event));
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
};
ModifyInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];
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

let TranslateInteractionComponent = class TranslateInteractionComponent {
    constructor(map) {
        this.map = map;
        this.olChange = new EventEmitter();
        this.propertyChange = new EventEmitter();
        this.translateEnd = new EventEmitter();
        this.translateStart = new EventEmitter();
        this.translating = new EventEmitter();
    }
    ngOnInit() {
        this.instance = new Translate(this);
        this.instance.on('change', (event) => this.olChange.emit(event));
        this.instance.on('propertychange', (event) => this.propertyChange.emit(event));
        this.instance.on('translateend', (event) => this.translateEnd.emit(event));
        this.instance.on('translatestart', (event) => this.translateStart.emit(event));
        this.instance.on('translating', (event) => this.translating.emit(event));
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
};
TranslateInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];
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

let AttributionComponent = class AttributionComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    ngOnInit() {
        this.html = this.elementRef.nativeElement.innerHTML;
        this.instance = new Attribution(this);
    }
};
AttributionComponent.ctorParameters = () => [
    { type: ElementRef }
];
AttributionComponent = __decorate([
    Component({
        selector: 'aol-attribution',
        template: '<ng-content></ng-content>'
    })
], AttributionComponent);

let AttributionsComponent = class AttributionsComponent {
    constructor(source) {
        this.source = source;
    }
    /* we can do this at the very end */
    ngAfterViewInit() {
        if (this.attributions.length) {
            this.instance = this.attributions.map((cmp) => cmp.instance);
            // console.log('setting attributions:', this.instance);
            this.source.instance.setAttributions(this.instance);
        }
    }
};
AttributionsComponent.ctorParameters = () => [
    { type: SourceComponent, decorators: [{ type: Host }] }
];
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

var SourceUTFGridComponent_1;
let SourceUTFGridComponent = SourceUTFGridComponent_1 = class SourceUTFGridComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
    }
    ngOnInit() {
        this.instance = new UTFGrid(this);
        this.host.instance.setSource(this.instance);
    }
};
SourceUTFGridComponent.ctorParameters = () => [
    { type: LayerTileComponent, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], SourceUTFGridComponent.prototype, "tileJSON", void 0);
__decorate([
    Input()
], SourceUTFGridComponent.prototype, "url", void 0);
SourceUTFGridComponent = SourceUTFGridComponent_1 = __decorate([
    Component({
        selector: 'aol-source-utfgrid',
        template: ` <ng-content></ng-content> `,
        providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceUTFGridComponent_1) }]
    }),
    __param(0, Host())
], SourceUTFGridComponent);

const COMPONENTS = [
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
let AngularOpenlayersModule = class AngularOpenlayersModule {
};
AngularOpenlayersModule = __decorate([
    NgModule({
        declarations: COMPONENTS,
        imports: [CommonModule],
        exports: COMPONENTS,
    })
], AngularOpenlayersModule);

/**
 * Generated bundle index. Do not edit.
 */

export { AngularOpenlayersModule, AttributionComponent, AttributionsComponent, CollectionCoordinatesComponent, ContentComponent, ControlAttributionComponent, ControlComponent, ControlFullScreenComponent, ControlMousePositionComponent, ControlOverviewMapComponent, ControlRotateComponent, ControlScaleLineComponent, ControlZoomComponent, ControlZoomSliderComponent, ControlZoomToExtentComponent, CoordinateComponent, DefaultControlComponent, DefaultInteractionComponent, DoubleClickZoomInteractionComponent, DragAndDropInteractionComponent, DragBoxInteractionComponent, DragPanInteractionComponent, DragRotateAndZoomInteractionComponent, DragRotateInteractionComponent, DragZoomInteractionComponent, DrawInteractionComponent, FeatureComponent, FormatMVTComponent, GeometryCircleComponent, GeometryLinestringComponent, GeometryMultiLinestringComponent, GeometryMultiPointComponent, GeometryMultiPolygonComponent, GeometryPointComponent, GeometryPolygonComponent, GraticuleComponent, LayerComponent, LayerGroupComponent, LayerImageComponent, LayerTileComponent, LayerVectorComponent, LayerVectorTileComponent, MapComponent, ModifyInteractionComponent, MouseWheelZoomInteractionComponent, OverlayComponent, PinchZoomInteractionComponent, SelectInteractionComponent, SimpleGeometryComponent, SourceBingmapsComponent, SourceClusterComponent, SourceComponent, SourceGeoJSONComponent, SourceImageArcGISRestComponent, SourceImageStaticComponent, SourceImageWMSComponent, SourceOsmComponent, SourceRasterComponent, SourceTileJSONComponent, SourceTileWMSComponent, SourceTileWMTSComponent, SourceUTFGridComponent, SourceVectorComponent, SourceVectorTileComponent, SourceXYZComponent, StyleCircleComponent, StyleComponent, StyleFillComponent, StyleIconComponent, StyleStrokeComponent, StyleTextComponent, TileGridComponent, TileGridWMTSComponent, TranslateInteractionComponent, ViewComponent, FormatComponent as ɵa };
//# sourceMappingURL=ngx-openlayers.js.map
