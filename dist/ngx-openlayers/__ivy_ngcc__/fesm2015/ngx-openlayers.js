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

import * as ɵngcc0 from '@angular/core';

const _c0 = ["*"];
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
SimpleGeometryComponent.ɵfac = function SimpleGeometryComponent_Factory(t) { ɵngcc0.ɵɵinvalidFactory(); };
SimpleGeometryComponent.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: SimpleGeometryComponent, inputs: { srid: "srid" } });
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
SourceComponent.ɵfac = function SourceComponent_Factory(t) { ɵngcc0.ɵɵinvalidFactory(); };
SourceComponent.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: SourceComponent, inputs: { attributions: "attributions" } });
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
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
MapComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MapComponent, selectors: [["aol-map"]], inputs: { width: "width", height: "height", pixelRatio: "pixelRatio", keyboardEventTarget: "keyboardEventTarget", loadTilesWhileAnimating: "loadTilesWhileAnimating", loadTilesWhileInteracting: "loadTilesWhileInteracting", logo: "logo", renderer: "renderer" }, outputs: { olClick: "olClick", dblClick: "dblClick", moveStart: "moveStart", moveEnd: "moveEnd", pointerDrag: "pointerDrag", pointerMove: "pointerMove", onpostrender: "onpostrender", postRender: "postRender", onprerender: "onprerender", propertyChange: "propertyChange", singleClick: "singleClick" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 2, vars: 4, template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelement(0, "div");
        ɵngcc0.ɵɵprojection(1);
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("width", ctx.width)("height", ctx.height);
    } }, encapsulation: 2 });
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
ViewComponent.ɵfac = function ViewComponent_Factory(t) { return new (t || ViewComponent)(ɵngcc0.ɵɵdirectiveInject(MapComponent)); };
ViewComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ViewComponent, selectors: [["aol-view"]], inputs: { zoomAnimation: "zoomAnimation", constrainRotation: "constrainRotation", enableRotation: "enableRotation", extent: "extent", maxResolution: "maxResolution", minResolution: "minResolution", maxZoom: "maxZoom", minZoom: "minZoom", resolution: "resolution", resolutions: "resolutions", rotation: "rotation", zoom: "zoom", zoomFactor: "zoomFactor", center: "center", projection: "projection", constrainOnlyCenter: "constrainOnlyCenter", smoothExtentConstraint: "smoothExtentConstraint", constrainResolution: "constrainResolution", smoothResolutionConstraint: "smoothResolutionConstraint", showFullExtent: "showFullExtent", multiWorld: "multiWorld" }, outputs: { changeZoom: "changeZoom", changeResolution: "changeResolution", changeCenter: "changeCenter" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function ViewComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
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
GraticuleComponent.ɵfac = function GraticuleComponent_Factory(t) { return new (t || GraticuleComponent)(ɵngcc0.ɵɵdirectiveInject(MapComponent)); };
GraticuleComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GraticuleComponent, selectors: [["aol-graticule"]], inputs: { strokeStyle: "strokeStyle", showLabels: "showLabels", lonLabelPosition: "lonLabelPosition", latLabelPosition: "latLabelPosition" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function GraticuleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
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
LayerComponent.ɵfac = function LayerComponent_Factory(t) { ɵngcc0.ɵɵinvalidFactory(); };
LayerComponent.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: LayerComponent, inputs: { opacity: "opacity", visible: "visible", extent: "extent", zIndex: "zIndex", minResolution: "minResolution", maxResolution: "maxResolution", prerender: "prerender", postrender: "postrender" }, features: [ɵngcc0.ɵɵNgOnChangesFeature] });
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
LayerGroupComponent.ɵfac = function LayerGroupComponent_Factory(t) { return new (t || LayerGroupComponent)(ɵngcc0.ɵɵdirectiveInject(MapComponent), ɵngcc0.ɵɵdirectiveInject(LayerGroupComponent, 12)); };
LayerGroupComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: LayerGroupComponent, selectors: [["aol-layer-group"]], features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function LayerGroupComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
LayerGroupComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: LayerGroupComponent, decorators: [{ type: SkipSelf }, { type: Optional }] }
];
LayerGroupComponent = __decorate([ __param(1, SkipSelf()),
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
LayerImageComponent.ɵfac = function LayerImageComponent_Factory(t) { return new (t || LayerImageComponent)(ɵngcc0.ɵɵdirectiveInject(MapComponent), ɵngcc0.ɵɵdirectiveInject(LayerGroupComponent, 8)); };
LayerImageComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: LayerImageComponent, selectors: [["aol-layer-image"]], inputs: { opacity: "opacity", visible: "visible", extent: "extent", minResolution: "minResolution", maxResolution: "maxResolution", zIndex: "zIndex" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature, ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function LayerImageComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
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
LayerImageComponent = __decorate([ __param(1, Optional())
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
LayerTileComponent.ɵfac = function LayerTileComponent_Factory(t) { return new (t || LayerTileComponent)(ɵngcc0.ɵɵdirectiveInject(MapComponent), ɵngcc0.ɵɵdirectiveInject(LayerGroupComponent, 8)); };
LayerTileComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: LayerTileComponent, selectors: [["aol-layer-tile"]], inputs: { preload: "preload", useInterimTilesOnError: "useInterimTilesOnError" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature, ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function LayerTileComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
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
LayerTileComponent = __decorate([ __param(1, Optional())
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
LayerVectorComponent.ɵfac = function LayerVectorComponent_Factory(t) { return new (t || LayerVectorComponent)(ɵngcc0.ɵɵdirectiveInject(MapComponent), ɵngcc0.ɵɵdirectiveInject(LayerGroupComponent, 8)); };
LayerVectorComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: LayerVectorComponent, selectors: [["aol-layer-vector"]], inputs: { renderBuffer: "renderBuffer", style: "style", updateWhileAnimating: "updateWhileAnimating", updateWhileInteracting: "updateWhileInteracting" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature, ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function LayerVectorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
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
LayerVectorComponent = __decorate([ __param(1, Optional())
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
LayerVectorTileComponent.ɵfac = function LayerVectorTileComponent_Factory(t) { return new (t || LayerVectorTileComponent)(ɵngcc0.ɵɵdirectiveInject(MapComponent), ɵngcc0.ɵɵdirectiveInject(LayerGroupComponent, 8)); };
LayerVectorTileComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: LayerVectorTileComponent, selectors: [["aol-layer-vectortile"]], inputs: { renderBuffer: "renderBuffer", renderMode: "renderMode", renderOrder: "renderOrder", style: "style", updateWhileAnimating: "updateWhileAnimating", updateWhileInteracting: "updateWhileInteracting", visible: "visible" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature, ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function LayerVectorTileComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
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
LayerVectorTileComponent = __decorate([ __param(1, Optional())
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
TileGridComponent.ɵfac = function TileGridComponent_Factory(t) { return new (t || TileGridComponent)(); };
TileGridComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TileGridComponent, selectors: [["aol-tilegrid"]], inputs: { extent: "extent", maxZoom: "maxZoom", minZoom: "minZoom", tileSize: "tileSize", origin: "origin", resolutions: "resolutions" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function TileGridComponent_Template(rf, ctx) { }, encapsulation: 2 });
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
SourceXYZComponent.ɵfac = function SourceXYZComponent_Factory(t) { return new (t || SourceXYZComponent)(ɵngcc0.ɵɵdirectiveInject(LayerTileComponent, 9)); };
SourceXYZComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SourceXYZComponent, selectors: [["aol-source-xyz"]], contentQueries: function SourceXYZComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, TileGridComponent, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tileGridXYZ = _t.first);
    } }, inputs: { tileGrid: "tileGrid", cacheSize: "cacheSize", crossOrigin: "crossOrigin", opaque: "opaque", projection: "projection", reprojectionErrorThreshold: "reprojectionErrorThreshold", minZoom: "minZoom", maxZoom: "maxZoom", tileLoadFunction: "tileLoadFunction", tilePixelRatio: "tilePixelRatio", tileSize: "tileSize", tileUrlFunction: "tileUrlFunction", url: "url", urls: "urls", wrapX: "wrapX" }, outputs: { tileLoadStart: "tileLoadStart", tileLoadEnd: "tileLoadEnd", tileLoadError: "tileLoadError" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceXYZComponent_1) }]), ɵngcc0.ɵɵInheritDefinitionFeature, ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function SourceXYZComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
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
SourceXYZComponent = SourceXYZComponent_1 = __decorate([ __param(0, Optional()),
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
SourceOsmComponent.ɵfac = function SourceOsmComponent_Factory(t) { return new (t || SourceOsmComponent)(ɵngcc0.ɵɵdirectiveInject(LayerTileComponent, 9)); };
SourceOsmComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SourceOsmComponent, selectors: [["aol-source-osm"]], inputs: { attributions: "attributions", cacheSize: "cacheSize", crossOrigin: "crossOrigin", maxZoom: "maxZoom", opaque: "opaque", reprojectionErrorThreshold: "reprojectionErrorThreshold", tileLoadFunction: "tileLoadFunction", url: "url", wrapX: "wrapX" }, outputs: { tileLoadStart: "tileLoadStart", tileLoadEnd: "tileLoadEnd", tileLoadError: "tileLoadError" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceOsmComponent_1) }]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [[1, "aol-source-osm"]], template: function SourceOsmComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "div", 0);
    } }, encapsulation: 2 });
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
SourceOsmComponent = SourceOsmComponent_1 = __decorate([ __param(0, Optional()),
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
SourceBingmapsComponent.ɵfac = function SourceBingmapsComponent_Factory(t) { return new (t || SourceBingmapsComponent)(ɵngcc0.ɵɵdirectiveInject(LayerTileComponent, 1)); };
SourceBingmapsComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SourceBingmapsComponent, selectors: [["aol-source-bingmaps"]], inputs: { imagerySet: "imagerySet", cacheSize: "cacheSize", hidpi: "hidpi", culture: "culture", key: "key", maxZoom: "maxZoom", reprojectionErrorThreshold: "reprojectionErrorThreshold", tileLoadFunction: "tileLoadFunction", wrapX: "wrapX" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceBingmapsComponent_1) }]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [[1, "aol-source-bingmaps"]], template: function SourceBingmapsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "div", 0);
    } }, encapsulation: 2 });
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
SourceBingmapsComponent = SourceBingmapsComponent_1 = __decorate([ __param(0, Host())
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
SourceVectorComponent.ɵfac = function SourceVectorComponent_Factory(t) { return new (t || SourceVectorComponent)(ɵngcc0.ɵɵdirectiveInject(LayerVectorComponent, 1)); };
SourceVectorComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SourceVectorComponent, selectors: [["aol-source-vector"]], inputs: { overlaps: "overlaps", useSpatialIndex: "useSpatialIndex", wrapX: "wrapX", url: "url", format: "format", strategy: "strategy" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceVectorComponent_1) }]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function SourceVectorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
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
SourceVectorComponent = SourceVectorComponent_1 = __decorate([ __param(0, Host())
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
SourceClusterComponent.ɵfac = function SourceClusterComponent_Factory(t) { return new (t || SourceClusterComponent)(ɵngcc0.ɵɵdirectiveInject(LayerVectorComponent, 1)); };
SourceClusterComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SourceClusterComponent, selectors: [["aol-source-cluster"]], contentQueries: function SourceClusterComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, SourceVectorComponent, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.sourceVectorComponent = _t.first);
    } }, inputs: { distance: "distance", geometryFunction: "geometryFunction", wrapX: "wrapX" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceClusterComponent_1) }]), ɵngcc0.ɵɵInheritDefinitionFeature, ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function SourceClusterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
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
SourceClusterComponent = SourceClusterComponent_1 = __decorate([ __param(0, Host())
], SourceClusterComponent);

let TileGridWMTSComponent = class TileGridWMTSComponent extends TileGridComponent {
    ngOnInit() {
        this.instance = new WMTS(this);
    }
};
TileGridWMTSComponent.ɵfac = function TileGridWMTSComponent_Factory(t) { return ɵTileGridWMTSComponent_BaseFactory(t || TileGridWMTSComponent); };
TileGridWMTSComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TileGridWMTSComponent, selectors: [["aol-tilegrid-wmts"]], inputs: { origin: "origin", origins: "origins", resolutions: "resolutions", matrixIds: "matrixIds", sizes: "sizes", tileSizes: "tileSizes", widths: "widths" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function TileGridWMTSComponent_Template(rf, ctx) { }, encapsulation: 2 });
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
SourceTileWMTSComponent.ɵfac = function SourceTileWMTSComponent_Factory(t) { return new (t || SourceTileWMTSComponent)(ɵngcc0.ɵɵdirectiveInject(LayerTileComponent, 1)); };
SourceTileWMTSComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SourceTileWMTSComponent, selectors: [["aol-source-tilewmts"]], contentQueries: function SourceTileWMTSComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, TileGridWMTSComponent, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tileGridWMTS = _t.first);
    } }, inputs: { url: "url", tileGrid: "tileGrid", cacheSize: "cacheSize", crossOrigin: "crossOrigin", projection: "projection", reprojectionErrorThreshold: "reprojectionErrorThreshold", requestEncoding: "requestEncoding", layer: "layer", style: "style", tileClass: "tileClass", tilePixelRatio: "tilePixelRatio", version: "version", format: "format", matrixSet: "matrixSet", dimensions: "dimensions", tileLoadFunction: "tileLoadFunction", urls: "urls", wrapX: "wrapX" }, outputs: { tileLoadStart: "tileLoadStart", tileLoadEnd: "tileLoadEnd", tileLoadError: "tileLoadError" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceTileWMTSComponent_1) }]), ɵngcc0.ɵɵInheritDefinitionFeature, ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function SourceTileWMTSComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
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
SourceTileWMTSComponent = SourceTileWMTSComponent_1 = __decorate([ __param(0, Host())
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
SourceVectorTileComponent.ɵfac = function SourceVectorTileComponent_Factory(t) { return new (t || SourceVectorTileComponent)(ɵngcc0.ɵɵdirectiveInject(LayerVectorTileComponent, 1)); };
SourceVectorTileComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SourceVectorTileComponent, selectors: [["aol-source-vectortile"]], contentQueries: function SourceVectorTileComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, FormatComponent, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, TileGridComponent, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.formatComponent = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tileGridComponent = _t.first);
    } }, inputs: { cacheSize: "cacheSize", overlaps: "overlaps", projection: "projection", tilePixelRatio: "tilePixelRatio", tileUrlFunction: "tileUrlFunction", url: "url", urls: "urls", wrapX: "wrapX" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceVectorTileComponent_1) }]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function SourceVectorTileComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
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
SourceVectorTileComponent = SourceVectorTileComponent_1 = __decorate([ __param(0, Host())
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
SourceTileWMSComponent.ɵfac = function SourceTileWMSComponent_Factory(t) { return new (t || SourceTileWMSComponent)(ɵngcc0.ɵɵdirectiveInject(LayerTileComponent, 1)); };
SourceTileWMSComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SourceTileWMSComponent, selectors: [["aol-source-tilewms"]], inputs: { cacheSize: "cacheSize", crossOrigin: "crossOrigin", gutter: "gutter", hidpi: "hidpi", params: "params", projection: "projection", reprojectionErrorThreshold: "reprojectionErrorThreshold", serverType: "serverType", tileGrid: "tileGrid", tileLoadFunction: "tileLoadFunction", url: "url", urls: "urls", wrapX: "wrapX" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceTileWMSComponent_1) }]), ɵngcc0.ɵɵInheritDefinitionFeature, ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function SourceTileWMSComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
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
SourceTileWMSComponent = SourceTileWMSComponent_1 = __decorate([ __param(0, Host())
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
SourceTileJSONComponent.ɵfac = function SourceTileJSONComponent_Factory(t) { return new (t || SourceTileJSONComponent)(ɵngcc0.ɵɵdirectiveInject(LayerTileComponent, 1)); };
SourceTileJSONComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SourceTileJSONComponent, selectors: [["aol-source-tilejson"]], inputs: { url: "url" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceTileJSONComponent_1) }]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function SourceTileJSONComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
SourceTileJSONComponent.ctorParameters = () => [
    { type: LayerTileComponent, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], SourceTileJSONComponent.prototype, "url", void 0);
SourceTileJSONComponent = SourceTileJSONComponent_1 = __decorate([ __param(0, Host())
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
SourceGeoJSONComponent.ɵfac = function SourceGeoJSONComponent_Factory(t) { return new (t || SourceGeoJSONComponent)(ɵngcc0.ɵɵdirectiveInject(LayerVectorComponent, 1)); };
SourceGeoJSONComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SourceGeoJSONComponent, selectors: [["aol-source-geojson"]], inputs: { defaultDataProjection: "defaultDataProjection", featureProjection: "featureProjection", geometryName: "geometryName", url: "url" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceGeoJSONComponent_1) }]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function SourceGeoJSONComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
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
SourceGeoJSONComponent = SourceGeoJSONComponent_1 = __decorate([ __param(0, Host())
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
SourceImageStaticComponent.ɵfac = function SourceImageStaticComponent_Factory(t) { return new (t || SourceImageStaticComponent)(ɵngcc0.ɵɵdirectiveInject(LayerImageComponent, 1)); };
SourceImageStaticComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SourceImageStaticComponent, selectors: [["aol-source-imagestatic"]], inputs: { url: "url", projection: "projection", imageExtent: "imageExtent", attributions: "attributions", crossOrigin: "crossOrigin", imageLoadFunction: "imageLoadFunction", imageSize: "imageSize" }, outputs: { imageLoadStart: "imageLoadStart", imageLoadEnd: "imageLoadEnd", imageLoadError: "imageLoadError" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceImageStaticComponent_1) }]), ɵngcc0.ɵɵInheritDefinitionFeature, ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function SourceImageStaticComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
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
SourceImageStaticComponent = SourceImageStaticComponent_1 = __decorate([ __param(0, Host())
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
SourceImageWMSComponent.ɵfac = function SourceImageWMSComponent_Factory(t) { return new (t || SourceImageWMSComponent)(ɵngcc0.ɵɵdirectiveInject(LayerImageComponent, 1)); };
SourceImageWMSComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SourceImageWMSComponent, selectors: [["aol-source-imagewms"]], inputs: { attributions: "attributions", crossOrigin: "crossOrigin", hidpi: "hidpi", serverType: "serverType", imageLoadFunction: "imageLoadFunction", params: "params", projection: "projection", ratio: "ratio", resolutions: "resolutions", url: "url" }, outputs: { imageLoadStart: "imageLoadStart", imageLoadEnd: "imageLoadEnd", imageLoadError: "imageLoadError" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceImageWMSComponent_1) }]), ɵngcc0.ɵɵInheritDefinitionFeature, ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function SourceImageWMSComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
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
SourceImageWMSComponent = SourceImageWMSComponent_1 = __decorate([ __param(0, Host())
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
SourceImageArcGISRestComponent.ɵfac = function SourceImageArcGISRestComponent_Factory(t) { return new (t || SourceImageArcGISRestComponent)(ɵngcc0.ɵɵdirectiveInject(LayerImageComponent, 1)); };
SourceImageArcGISRestComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SourceImageArcGISRestComponent, selectors: [["aol-source-imagearcgisrest"]], inputs: { ratio: "ratio", projection: "projection", url: "url", attributions: "attributions", crossOrigin: "crossOrigin", imageLoadFunction: "imageLoadFunction", params: "params", resolutions: "resolutions", wrapX: "wrapX" }, outputs: { imageLoadStart: "imageLoadStart", imageLoadEnd: "imageLoadEnd", imageLoadError: "imageLoadError" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceImageArcGISRestComponent_1) }]), ɵngcc0.ɵɵInheritDefinitionFeature, ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function SourceImageArcGISRestComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
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
SourceImageArcGISRestComponent = SourceImageArcGISRestComponent_1 = __decorate([ __param(0, Host())
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
SourceRasterComponent.ɵfac = function SourceRasterComponent_Factory(t) { return new (t || SourceRasterComponent)(ɵngcc0.ɵɵdirectiveInject(LayerImageComponent, 1)); };
SourceRasterComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SourceRasterComponent, selectors: [["aol-source-raster"]], contentQueries: function SourceRasterComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, SourceComponent, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.source = _t.first);
    } }, inputs: { operation: "operation", threads: "threads", lib: "lib", operationType: "operationType" }, outputs: { beforeOperations: "beforeOperations", afterOperations: "afterOperations" }, features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: SourceComponent,
                useExisting: forwardRef(() => SourceRasterComponent_1)
            },
        ]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function SourceRasterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
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
SourceRasterComponent = SourceRasterComponent_1 = __decorate([ __param(0, Host())
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
FeatureComponent.ɵfac = function FeatureComponent_Factory(t) { return new (t || FeatureComponent)(ɵngcc0.ɵɵdirectiveInject(SourceVectorComponent)); };
FeatureComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: FeatureComponent, selectors: [["aol-feature"]], inputs: { id: "id" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function FeatureComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
FeatureComponent.ctorParameters = () => [
    { type: SourceVectorComponent }
];
__decorate([
    Input()
], FeatureComponent.prototype, "id", void 0);

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
GeometryCircleComponent.ɵfac = function GeometryCircleComponent_Factory(t) { return new (t || GeometryCircleComponent)(ɵngcc0.ɵɵdirectiveInject(MapComponent), ɵngcc0.ɵɵdirectiveInject(FeatureComponent)); };
GeometryCircleComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GeometryCircleComponent, selectors: [["aol-geometry-circle"]], inputs: { radius: "radius" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function GeometryCircleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
GeometryCircleComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: FeatureComponent }
];
__decorate([
    Input()
], GeometryCircleComponent.prototype, "radius", null);

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
GeometryLinestringComponent.ɵfac = function GeometryLinestringComponent_Factory(t) { return new (t || GeometryLinestringComponent)(ɵngcc0.ɵɵdirectiveInject(MapComponent), ɵngcc0.ɵɵdirectiveInject(FeatureComponent)); };
GeometryLinestringComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GeometryLinestringComponent, selectors: [["aol-geometry-linestring"]], features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function GeometryLinestringComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
GeometryLinestringComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: FeatureComponent }
];

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
GeometryMultiLinestringComponent.ɵfac = function GeometryMultiLinestringComponent_Factory(t) { return new (t || GeometryMultiLinestringComponent)(ɵngcc0.ɵɵdirectiveInject(MapComponent), ɵngcc0.ɵɵdirectiveInject(FeatureComponent)); };
GeometryMultiLinestringComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GeometryMultiLinestringComponent, selectors: [["aol-geometry-multilinestring"]], features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function GeometryMultiLinestringComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
GeometryMultiLinestringComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: FeatureComponent }
];

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
GeometryMultiPointComponent.ɵfac = function GeometryMultiPointComponent_Factory(t) { return new (t || GeometryMultiPointComponent)(ɵngcc0.ɵɵdirectiveInject(MapComponent), ɵngcc0.ɵɵdirectiveInject(FeatureComponent)); };
GeometryMultiPointComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GeometryMultiPointComponent, selectors: [["aol-geometry-multipoint"]], features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function GeometryMultiPointComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
GeometryMultiPointComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: FeatureComponent }
];

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
GeometryMultiPolygonComponent.ɵfac = function GeometryMultiPolygonComponent_Factory(t) { return new (t || GeometryMultiPolygonComponent)(ɵngcc0.ɵɵdirectiveInject(MapComponent), ɵngcc0.ɵɵdirectiveInject(FeatureComponent)); };
GeometryMultiPolygonComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GeometryMultiPolygonComponent, selectors: [["aol-geometry-multipolygon"]], features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function GeometryMultiPolygonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
GeometryMultiPolygonComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: FeatureComponent }
];

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
GeometryPointComponent.ɵfac = function GeometryPointComponent_Factory(t) { return new (t || GeometryPointComponent)(ɵngcc0.ɵɵdirectiveInject(MapComponent), ɵngcc0.ɵɵdirectiveInject(FeatureComponent)); };
GeometryPointComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GeometryPointComponent, selectors: [["aol-geometry-point"]], features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function GeometryPointComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
GeometryPointComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: FeatureComponent }
];

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
GeometryPolygonComponent.ɵfac = function GeometryPolygonComponent_Factory(t) { return new (t || GeometryPolygonComponent)(ɵngcc0.ɵɵdirectiveInject(MapComponent), ɵngcc0.ɵɵdirectiveInject(FeatureComponent)); };
GeometryPolygonComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GeometryPolygonComponent, selectors: [["aol-geometry-polygon"]], features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function GeometryPolygonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
GeometryPolygonComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: FeatureComponent }
];

let ContentComponent = class ContentComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
};
ContentComponent.ɵfac = function ContentComponent_Factory(t) { return new (t || ContentComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
ContentComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ContentComponent, selectors: [["aol-content"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function ContentComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
ContentComponent.ctorParameters = () => [
    { type: ElementRef }
];

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
OverlayComponent.ɵfac = function OverlayComponent_Factory(t) { return new (t || OverlayComponent)(ɵngcc0.ɵɵdirectiveInject(MapComponent)); };
OverlayComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: OverlayComponent, selectors: [["aol-overlay"]], contentQueries: function OverlayComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵstaticContentQuery(dirIndex, ContentComponent, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.content = _t.first);
    } }, inputs: { id: "id", offset: "offset", positioning: "positioning", stopEvent: "stopEvent", insertFirst: "insertFirst", autoPan: "autoPan", autoPanAnimation: "autoPanAnimation", autoPanMargin: "autoPanMargin" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function OverlayComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
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
CoordinateComponent.ɵfac = function CoordinateComponent_Factory(t) { return new (t || CoordinateComponent)(ɵngcc0.ɵɵdirectiveInject(MapComponent), ɵngcc0.ɵɵdirectiveInject(ViewComponent, 8), ɵngcc0.ɵɵdirectiveInject(GeometryPointComponent, 8), ɵngcc0.ɵɵdirectiveInject(GeometryCircleComponent, 8), ɵngcc0.ɵɵdirectiveInject(OverlayComponent, 8)); };
CoordinateComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CoordinateComponent, selectors: [["aol-coordinate"]], inputs: { srid: "srid", x: "x", y: "y" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 1, vars: 0, consts: [[1, "aol-coordinate"]], template: function CoordinateComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "div", 0);
    } }, encapsulation: 2 });
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
CoordinateComponent = __decorate([ __param(1, Optional()),
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
CollectionCoordinatesComponent.ɵfac = function CollectionCoordinatesComponent_Factory(t) { return new (t || CollectionCoordinatesComponent)(ɵngcc0.ɵɵdirectiveInject(MapComponent), ɵngcc0.ɵɵdirectiveInject(GeometryLinestringComponent, 8), ɵngcc0.ɵɵdirectiveInject(GeometryPolygonComponent, 8), ɵngcc0.ɵɵdirectiveInject(GeometryMultiPointComponent, 8), ɵngcc0.ɵɵdirectiveInject(GeometryMultiLinestringComponent, 8), ɵngcc0.ɵɵdirectiveInject(GeometryMultiPolygonComponent, 8)); };
CollectionCoordinatesComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CollectionCoordinatesComponent, selectors: [["aol-collection-coordinates"]], inputs: { srid: "srid", coordinates: "coordinates" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 1, vars: 0, consts: [[1, "aol-collection-coordinates"]], template: function CollectionCoordinatesComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "div", 0);
    } }, encapsulation: 2 });
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
CollectionCoordinatesComponent = __decorate([ __param(1, Optional()),
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
StyleComponent.ɵfac = function StyleComponent_Factory(t) { return new (t || StyleComponent)(ɵngcc0.ɵɵdirectiveInject(FeatureComponent, 8), ɵngcc0.ɵɵdirectiveInject(LayerVectorComponent, 8)); };
StyleComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: StyleComponent, selectors: [["aol-style"]], inputs: { geometry: "geometry", fill: "fill", image: "image", stroke: "stroke", text: "text", zIndex: "zIndex" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function StyleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
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
StyleComponent = __decorate([ __param(0, Optional()), __param(1, Optional())
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
StyleCircleComponent.ɵfac = function StyleCircleComponent_Factory(t) { return new (t || StyleCircleComponent)(ɵngcc0.ɵɵdirectiveInject(StyleComponent, 1)); };
StyleCircleComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: StyleCircleComponent, selectors: [["aol-style-circle"]], inputs: { fill: "fill", radius: "radius", snapToPixel: "snapToPixel", stroke: "stroke", atlasManager: "atlasManager" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function StyleCircleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
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
StyleCircleComponent = __decorate([ __param(0, Host())
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
StyleTextComponent.ɵfac = function StyleTextComponent_Factory(t) { return new (t || StyleTextComponent)(ɵngcc0.ɵɵdirectiveInject(StyleComponent, 8)); };
StyleTextComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: StyleTextComponent, selectors: [["aol-style-text"]], inputs: { font: "font", offsetX: "offsetX", offsetY: "offsetY", scale: "scale", rotateWithView: "rotateWithView", rotation: "rotation", text: "text", textAlign: "textAlign", textBaseLine: "textBaseLine" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 1, vars: 0, consts: [[1, "aol-style-text"]], template: function StyleTextComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "div", 0);
    } }, encapsulation: 2 });
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
StyleTextComponent = __decorate([ __param(0, Optional())
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
StyleStrokeComponent.ɵfac = function StyleStrokeComponent_Factory(t) { return new (t || StyleStrokeComponent)(ɵngcc0.ɵɵdirectiveInject(StyleComponent, 8), ɵngcc0.ɵɵdirectiveInject(StyleCircleComponent, 8), ɵngcc0.ɵɵdirectiveInject(StyleTextComponent, 8)); };
StyleStrokeComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: StyleStrokeComponent, selectors: [["aol-style-stroke"]], inputs: { color: "color", lineCap: "lineCap", lineDash: "lineDash", lineJoin: "lineJoin", miterLimit: "miterLimit", width: "width" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 1, vars: 0, consts: [[1, "aol-style-stroke"]], template: function StyleStrokeComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "div", 0);
    } }, encapsulation: 2 });
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
StyleStrokeComponent = __decorate([ __param(0, Optional()),
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
StyleIconComponent.ɵfac = function StyleIconComponent_Factory(t) { return new (t || StyleIconComponent)(ɵngcc0.ɵɵdirectiveInject(StyleComponent, 1)); };
StyleIconComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: StyleIconComponent, selectors: [["aol-style-icon"]], inputs: { anchor: "anchor", anchorXUnits: "anchorXUnits", anchorYUnits: "anchorYUnits", anchorOrigin: "anchorOrigin", color: "color", crossOrigin: "crossOrigin", img: "img", offset: "offset", offsetOrigin: "offsetOrigin", opacity: "opacity", scale: "scale", snapToPixel: "snapToPixel", rotateWithView: "rotateWithView", rotation: "rotation", size: "size", imgSize: "imgSize", src: "src" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 1, vars: 0, consts: [[1, "aol-style-icon"]], template: function StyleIconComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "div", 0);
    } }, encapsulation: 2 });
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
StyleIconComponent = __decorate([ __param(0, Host())
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
StyleFillComponent.ɵfac = function StyleFillComponent_Factory(t) { return new (t || StyleFillComponent)(ɵngcc0.ɵɵdirectiveInject(StyleComponent, 8), ɵngcc0.ɵɵdirectiveInject(StyleCircleComponent, 8), ɵngcc0.ɵɵdirectiveInject(StyleTextComponent, 8)); };
StyleFillComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: StyleFillComponent, selectors: [["aol-style-fill"]], inputs: { color: "color" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 1, vars: 0, consts: [[1, "aol-style-fill"]], template: function StyleFillComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "div", 0);
    } }, encapsulation: 2 });
StyleFillComponent.ctorParameters = () => [
    { type: StyleComponent, decorators: [{ type: Optional }] },
    { type: StyleCircleComponent, decorators: [{ type: Optional }] },
    { type: StyleTextComponent, decorators: [{ type: Optional }] }
];
__decorate([
    Input()
], StyleFillComponent.prototype, "color", void 0);
StyleFillComponent = __decorate([ __param(0, Optional()),
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
DefaultControlComponent.ɵfac = function DefaultControlComponent_Factory(t) { return new (t || DefaultControlComponent)(ɵngcc0.ɵɵdirectiveInject(MapComponent)); };
DefaultControlComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DefaultControlComponent, selectors: [["aol-control-defaults"]], inputs: { attribution: "attribution", attributionOptions: "attributionOptions", rotate: "rotate", rotateOptions: "rotateOptions", zoom: "zoom", zoomOptions: "zoomOptions" }, decls: 0, vars: 0, template: function DefaultControlComponent_Template(rf, ctx) { }, encapsulation: 2 });
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
ControlComponent.ɵfac = function ControlComponent_Factory(t) { return new (t || ControlComponent)(ɵngcc0.ɵɵdirectiveInject(MapComponent)); };
ControlComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ControlComponent, selectors: [["aol-control"]], contentQueries: function ControlComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵstaticContentQuery(dirIndex, ContentComponent, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.content = _t.first);
    } }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function ControlComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
ControlComponent.ctorParameters = () => [
    { type: MapComponent }
];
__decorate([
    ContentChild(ContentComponent, { static: true })
], ControlComponent.prototype, "content", void 0);

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
ControlAttributionComponent.ɵfac = function ControlAttributionComponent_Factory(t) { return new (t || ControlAttributionComponent)(ɵngcc0.ɵɵdirectiveInject(MapComponent), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
ControlAttributionComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ControlAttributionComponent, selectors: [["aol-control-attribution"]], inputs: { collapsible: "collapsible" }, decls: 0, vars: 0, template: function ControlAttributionComponent_Template(rf, ctx) { }, encapsulation: 2 });
ControlAttributionComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: ElementRef }
];
__decorate([
    Input()
], ControlAttributionComponent.prototype, "collapsible", void 0);

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
ControlFullScreenComponent.ɵfac = function ControlFullScreenComponent_Factory(t) { return new (t || ControlFullScreenComponent)(ɵngcc0.ɵɵdirectiveInject(MapComponent)); };
ControlFullScreenComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ControlFullScreenComponent, selectors: [["aol-control-fullscreen"]], inputs: { className: "className", label: "label", labelActive: "labelActive", tipLabel: "tipLabel", keys: "keys" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function ControlFullScreenComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
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
ControlMousePositionComponent.ɵfac = function ControlMousePositionComponent_Factory(t) { return new (t || ControlMousePositionComponent)(ɵngcc0.ɵɵdirectiveInject(MapComponent), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
ControlMousePositionComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ControlMousePositionComponent, selectors: [["aol-control-mouseposition"]], inputs: { coordinateFormat: "coordinateFormat", projection: "projection" }, decls: 0, vars: 0, template: function ControlMousePositionComponent_Template(rf, ctx) { }, encapsulation: 2 });
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
ControlOverviewMapComponent.ɵfac = function ControlOverviewMapComponent_Factory(t) { return new (t || ControlOverviewMapComponent)(ɵngcc0.ɵɵdirectiveInject(MapComponent)); };
ControlOverviewMapComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ControlOverviewMapComponent, selectors: [["aol-control-overviewmap"]], inputs: { collapsed: "collapsed", collapseLabel: "collapseLabel", collapsible: "collapsible", label: "label", layers: "layers", target: "target", tipLabel: "tipLabel", view: "view" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function ControlOverviewMapComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
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
ControlRotateComponent.ɵfac = function ControlRotateComponent_Factory(t) { return new (t || ControlRotateComponent)(ɵngcc0.ɵɵdirectiveInject(MapComponent)); };
ControlRotateComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ControlRotateComponent, selectors: [["aol-control-rotate"]], inputs: { className: "className", label: "label", tipLabel: "tipLabel", duration: "duration", autoHide: "autoHide" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function ControlRotateComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
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
ControlScaleLineComponent.ɵfac = function ControlScaleLineComponent_Factory(t) { return new (t || ControlScaleLineComponent)(ɵngcc0.ɵɵdirectiveInject(MapComponent)); };
ControlScaleLineComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ControlScaleLineComponent, selectors: [["aol-control-scaleline"]], inputs: { units: "units" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function ControlScaleLineComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
ControlScaleLineComponent.ctorParameters = () => [
    { type: MapComponent }
];
__decorate([
    Input()
], ControlScaleLineComponent.prototype, "units", void 0);

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
ControlZoomComponent.ɵfac = function ControlZoomComponent_Factory(t) { return new (t || ControlZoomComponent)(ɵngcc0.ɵɵdirectiveInject(MapComponent)); };
ControlZoomComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ControlZoomComponent, selectors: [["aol-control-zoom"]], inputs: { duration: "duration", zoomInLabel: "zoomInLabel", zoomOutLabel: "zoomOutLabel", zoomInTipLabel: "zoomInTipLabel", zoomOutTipLabel: "zoomOutTipLabel", delta: "delta" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function ControlZoomComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
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
ControlZoomSliderComponent.ɵfac = function ControlZoomSliderComponent_Factory(t) { return new (t || ControlZoomSliderComponent)(ɵngcc0.ɵɵdirectiveInject(MapComponent)); };
ControlZoomSliderComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ControlZoomSliderComponent, selectors: [["aol-control-zoomslider"]], inputs: { className: "className", duration: "duration", maxResolution: "maxResolution", minResolution: "minResolution" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function ControlZoomSliderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
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
ControlZoomToExtentComponent.ɵfac = function ControlZoomToExtentComponent_Factory(t) { return new (t || ControlZoomToExtentComponent)(ɵngcc0.ɵɵdirectiveInject(MapComponent)); };
ControlZoomToExtentComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ControlZoomToExtentComponent, selectors: [["aol-control-zoomtoextent"]], inputs: { className: "className", label: "label", tipLabel: "tipLabel", extent: "extent" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function ControlZoomToExtentComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
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

var FormatMVTComponent_1;
let FormatMVTComponent = FormatMVTComponent_1 = class FormatMVTComponent extends FormatComponent {
    constructor() {
        super();
        this.instance = new MVT(this);
    }
};
FormatMVTComponent.ɵfac = function FormatMVTComponent_Factory(t) { return new (t || FormatMVTComponent)(); };
FormatMVTComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: FormatMVTComponent, selectors: [["aol-format-mvt"]], inputs: { featureClass: "featureClass", geometryName: "geometryName", layerName: "layerName", layers: "layers" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: FormatComponent, useExisting: forwardRef(() => FormatMVTComponent_1) }]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function FormatMVTComponent_Template(rf, ctx) { }, encapsulation: 2 });
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
DefaultInteractionComponent.ɵfac = function DefaultInteractionComponent_Factory(t) { return new (t || DefaultInteractionComponent)(ɵngcc0.ɵɵdirectiveInject(MapComponent)); };
DefaultInteractionComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DefaultInteractionComponent, selectors: [["aol-interaction-default"]], decls: 0, vars: 0, template: function DefaultInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
DefaultInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];

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
DoubleClickZoomInteractionComponent.ɵfac = function DoubleClickZoomInteractionComponent_Factory(t) { return new (t || DoubleClickZoomInteractionComponent)(ɵngcc0.ɵɵdirectiveInject(MapComponent)); };
DoubleClickZoomInteractionComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DoubleClickZoomInteractionComponent, selectors: [["aol-interaction-doubleclickzoom"]], inputs: { duration: "duration", delta: "delta" }, decls: 0, vars: 0, template: function DoubleClickZoomInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
DoubleClickZoomInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];
__decorate([
    Input()
], DoubleClickZoomInteractionComponent.prototype, "duration", void 0);
__decorate([
    Input()
], DoubleClickZoomInteractionComponent.prototype, "delta", void 0);

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
DragAndDropInteractionComponent.ɵfac = function DragAndDropInteractionComponent_Factory(t) { return new (t || DragAndDropInteractionComponent)(ɵngcc0.ɵɵdirectiveInject(MapComponent)); };
DragAndDropInteractionComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DragAndDropInteractionComponent, selectors: [["aol-interaction-draganddrop"]], inputs: { formatConstructors: "formatConstructors", projection: "projection", target: "target" }, decls: 0, vars: 0, template: function DragAndDropInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
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
DragBoxInteractionComponent.ɵfac = function DragBoxInteractionComponent_Factory(t) { return new (t || DragBoxInteractionComponent)(ɵngcc0.ɵɵdirectiveInject(MapComponent)); };
DragBoxInteractionComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DragBoxInteractionComponent, selectors: [["aol-interaction-dragbox"]], inputs: { className: "className", condition: "condition", boxEndCondition: "boxEndCondition" }, decls: 0, vars: 0, template: function DragBoxInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
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
DragPanInteractionComponent.ɵfac = function DragPanInteractionComponent_Factory(t) { return new (t || DragPanInteractionComponent)(ɵngcc0.ɵɵdirectiveInject(MapComponent)); };
DragPanInteractionComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DragPanInteractionComponent, selectors: [["aol-interaction-dragpan"]], inputs: { condition: "condition", kinetic: "kinetic" }, decls: 0, vars: 0, template: function DragPanInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
DragPanInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];
__decorate([
    Input()
], DragPanInteractionComponent.prototype, "condition", void 0);
__decorate([
    Input()
], DragPanInteractionComponent.prototype, "kinetic", void 0);

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
DragRotateInteractionComponent.ɵfac = function DragRotateInteractionComponent_Factory(t) { return new (t || DragRotateInteractionComponent)(ɵngcc0.ɵɵdirectiveInject(MapComponent)); };
DragRotateInteractionComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DragRotateInteractionComponent, selectors: [["aol-interaction-dragrotate"]], inputs: { condition: "condition", duration: "duration" }, decls: 0, vars: 0, template: function DragRotateInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
DragRotateInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];
__decorate([
    Input()
], DragRotateInteractionComponent.prototype, "condition", void 0);
__decorate([
    Input()
], DragRotateInteractionComponent.prototype, "duration", void 0);

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
DragRotateAndZoomInteractionComponent.ɵfac = function DragRotateAndZoomInteractionComponent_Factory(t) { return new (t || DragRotateAndZoomInteractionComponent)(ɵngcc0.ɵɵdirectiveInject(MapComponent)); };
DragRotateAndZoomInteractionComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DragRotateAndZoomInteractionComponent, selectors: [["aol-interaction-dragrotateandzoom"]], inputs: { condition: "condition", duration: "duration" }, decls: 0, vars: 0, template: function DragRotateAndZoomInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
DragRotateAndZoomInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];
__decorate([
    Input()
], DragRotateAndZoomInteractionComponent.prototype, "condition", void 0);
__decorate([
    Input()
], DragRotateAndZoomInteractionComponent.prototype, "duration", void 0);

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
DragZoomInteractionComponent.ɵfac = function DragZoomInteractionComponent_Factory(t) { return new (t || DragZoomInteractionComponent)(ɵngcc0.ɵɵdirectiveInject(MapComponent)); };
DragZoomInteractionComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DragZoomInteractionComponent, selectors: [["aol-interaction-dragzoom"]], inputs: { className: "className", condition: "condition", duration: "duration", out: "out" }, decls: 0, vars: 0, template: function DragZoomInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
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
MouseWheelZoomInteractionComponent.ɵfac = function MouseWheelZoomInteractionComponent_Factory(t) { return new (t || MouseWheelZoomInteractionComponent)(ɵngcc0.ɵɵdirectiveInject(MapComponent)); };
MouseWheelZoomInteractionComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MouseWheelZoomInteractionComponent, selectors: [["aol-interaction-mousewheelzoom"]], inputs: { duration: "duration", timeout: "timeout", useAnchor: "useAnchor" }, decls: 0, vars: 0, template: function MouseWheelZoomInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
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
PinchZoomInteractionComponent.ɵfac = function PinchZoomInteractionComponent_Factory(t) { return new (t || PinchZoomInteractionComponent)(ɵngcc0.ɵɵdirectiveInject(MapComponent)); };
PinchZoomInteractionComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: PinchZoomInteractionComponent, selectors: [["aol-interaction-pinchzoom"]], inputs: { duration: "duration", constrainResolution: "constrainResolution" }, decls: 0, vars: 0, template: function PinchZoomInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
PinchZoomInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];
__decorate([
    Input()
], PinchZoomInteractionComponent.prototype, "duration", void 0);
__decorate([
    Input()
], PinchZoomInteractionComponent.prototype, "constrainResolution", void 0);

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
DrawInteractionComponent.ɵfac = function DrawInteractionComponent_Factory(t) { return new (t || DrawInteractionComponent)(ɵngcc0.ɵɵdirectiveInject(MapComponent)); };
DrawInteractionComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DrawInteractionComponent, selectors: [["aol-interaction-draw"]], inputs: { clickTolerance: "clickTolerance", features: "features", source: "source", snapTolerance: "snapTolerance", type: "type", maxPoints: "maxPoints", minPoints: "minPoints", finishCondition: "finishCondition", style: "style", geometryFunction: "geometryFunction", geometryName: "geometryName", condition: "condition", freehandCondition: "freehandCondition", freehand: "freehand", wrapX: "wrapX" }, outputs: { olChange: "olChange", olChangeActive: "olChangeActive", drawEnd: "drawEnd", drawStart: "drawStart", propertyChange: "propertyChange" }, decls: 0, vars: 0, template: function DrawInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
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
SelectInteractionComponent.ɵfac = function SelectInteractionComponent_Factory(t) { return new (t || SelectInteractionComponent)(ɵngcc0.ɵɵdirectiveInject(MapComponent)); };
SelectInteractionComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SelectInteractionComponent, selectors: [["aol-interaction-select"]], inputs: { addCondition: "addCondition", condition: "condition", layers: "layers", style: "style", removeCondition: "removeCondition", toggleCondition: "toggleCondition", multi: "multi", features: "features", filter: "filter", wrapX: "wrapX" }, outputs: { olChange: "olChange", olSelect: "olSelect", propertyChange: "propertyChange" }, decls: 0, vars: 0, template: function SelectInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
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
ModifyInteractionComponent.ɵfac = function ModifyInteractionComponent_Factory(t) { return new (t || ModifyInteractionComponent)(ɵngcc0.ɵɵdirectiveInject(MapComponent)); };
ModifyInteractionComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ModifyInteractionComponent, selectors: [["aol-interaction-modify"]], inputs: { condition: "condition", deleteCondition: "deleteCondition", pixelTolerance: "pixelTolerance", style: "style", features: "features", wrapX: "wrapX", source: "source" }, outputs: { modifyEnd: "modifyEnd", modifyStart: "modifyStart", olChange: "olChange", olChangeActive: "olChangeActive", propertyChange: "propertyChange" }, decls: 0, vars: 0, template: function ModifyInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
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
TranslateInteractionComponent.ɵfac = function TranslateInteractionComponent_Factory(t) { return new (t || TranslateInteractionComponent)(ɵngcc0.ɵɵdirectiveInject(MapComponent)); };
TranslateInteractionComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TranslateInteractionComponent, selectors: [["aol-interaction-translate"]], inputs: { features: "features", layers: "layers", hitTolerance: "hitTolerance" }, outputs: { olChange: "olChange", propertyChange: "propertyChange", translateEnd: "translateEnd", translateStart: "translateStart", translating: "translating" }, decls: 0, vars: 0, template: function TranslateInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
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

let AttributionComponent = class AttributionComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    ngOnInit() {
        this.html = this.elementRef.nativeElement.innerHTML;
        this.instance = new Attribution(this);
    }
};
AttributionComponent.ɵfac = function AttributionComponent_Factory(t) { return new (t || AttributionComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
AttributionComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: AttributionComponent, selectors: [["aol-attribution"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function AttributionComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
AttributionComponent.ctorParameters = () => [
    { type: ElementRef }
];

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
AttributionsComponent.ɵfac = function AttributionsComponent_Factory(t) { return new (t || AttributionsComponent)(ɵngcc0.ɵɵdirectiveInject(SourceComponent, 1)); };
AttributionsComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: AttributionsComponent, selectors: [["aol-attributions"]], contentQueries: function AttributionsComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, AttributionComponent, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.attributions = _t);
    } }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function AttributionsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
AttributionsComponent.ctorParameters = () => [
    { type: SourceComponent, decorators: [{ type: Host }] }
];
__decorate([
    ContentChildren(AttributionComponent)
], AttributionsComponent.prototype, "attributions", void 0);
AttributionsComponent = __decorate([ __param(0, Host())
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
SourceUTFGridComponent.ɵfac = function SourceUTFGridComponent_Factory(t) { return new (t || SourceUTFGridComponent)(ɵngcc0.ɵɵdirectiveInject(LayerTileComponent, 1)); };
SourceUTFGridComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SourceUTFGridComponent, selectors: [["aol-source-utfgrid"]], inputs: { tileJSON: "tileJSON", url: "url" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceUTFGridComponent_1) }]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function SourceUTFGridComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
SourceUTFGridComponent.ctorParameters = () => [
    { type: LayerTileComponent, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], SourceUTFGridComponent.prototype, "tileJSON", void 0);
__decorate([
    Input()
], SourceUTFGridComponent.prototype, "url", void 0);
SourceUTFGridComponent = SourceUTFGridComponent_1 = __decorate([ __param(0, Host())
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
AngularOpenlayersModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: AngularOpenlayersModule });
AngularOpenlayersModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function AngularOpenlayersModule_Factory(t) { return new (t || AngularOpenlayersModule)(); }, imports: [[CommonModule]] });


/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MapComponent, [{
        type: Component,
        args: [{
                selector: 'aol-map',
                template: `
    <div [style.width]="width" [style.height]="height"></div>
    <ng-content></ng-content>
  `
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { width: [{
            type: Input
        }], height: [{
            type: Input
        }], olClick: [{
            type: Output
        }], dblClick: [{
            type: Output
        }], moveStart: [{
            type: Output
        }], moveEnd: [{
            type: Output
        }], pointerDrag: [{
            type: Output
        }], pointerMove: [{
            type: Output
        }], onpostrender: [{
            type: Output
        }], postRender: [{
            type: Output
        }], onprerender: [{
            type: Output
        }], propertyChange: [{
            type: Output
        }], singleClick: [{
            type: Output
        }], pixelRatio: [{
            type: Input
        }], keyboardEventTarget: [{
            type: Input
        }], loadTilesWhileAnimating: [{
            type: Input
        }], loadTilesWhileInteracting: [{
            type: Input
        }], logo: [{
            type: Input
        }], renderer: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ViewComponent, [{
        type: Component,
        args: [{
                selector: 'aol-view',
                template: ` <ng-content></ng-content> `
            }]
    }], function () { return [{ type: MapComponent }]; }, { zoomAnimation: [{
            type: Input
        }], changeZoom: [{
            type: Output
        }], changeResolution: [{
            type: Output
        }], changeCenter: [{
            type: Output
        }], constrainRotation: [{
            type: Input
        }], enableRotation: [{
            type: Input
        }], extent: [{
            type: Input
        }], maxResolution: [{
            type: Input
        }], minResolution: [{
            type: Input
        }], maxZoom: [{
            type: Input
        }], minZoom: [{
            type: Input
        }], resolution: [{
            type: Input
        }], resolutions: [{
            type: Input
        }], rotation: [{
            type: Input
        }], zoom: [{
            type: Input
        }], zoomFactor: [{
            type: Input
        }], center: [{
            type: Input
        }], projection: [{
            type: Input
        }], constrainOnlyCenter: [{
            type: Input
        }], smoothExtentConstraint: [{
            type: Input
        }], constrainResolution: [{
            type: Input
        }], smoothResolutionConstraint: [{
            type: Input
        }], showFullExtent: [{
            type: Input
        }], multiWorld: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GraticuleComponent, [{
        type: Component,
        args: [{
                selector: 'aol-graticule',
                template: '<ng-content></ng-content>'
            }]
    }], function () { return [{ type: MapComponent }]; }, { strokeStyle: [{
            type: Input
        }], showLabels: [{
            type: Input
        }], lonLabelPosition: [{
            type: Input
        }], latLabelPosition: [{
            type: Input
        }] }); })();

/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LayerGroupComponent, [{
        type: Component,
        args: [{
                selector: 'aol-layer-group',
                template: ` <ng-content></ng-content> `
            }]
    }], function () { return [{ type: MapComponent }, { type: LayerGroupComponent, decorators: [{
                type: SkipSelf
            }, {
                type: Optional
            }] }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LayerImageComponent, [{
        type: Component,
        args: [{
                selector: 'aol-layer-image',
                template: ` <ng-content></ng-content> `
            }]
    }], function () { return [{ type: MapComponent }, { type: LayerGroupComponent, decorators: [{
                type: Optional
            }] }]; }, { opacity: [{
            type: Input
        }], visible: [{
            type: Input
        }], extent: [{
            type: Input
        }], minResolution: [{
            type: Input
        }], maxResolution: [{
            type: Input
        }], zIndex: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LayerTileComponent, [{
        type: Component,
        args: [{
                selector: 'aol-layer-tile',
                template: ` <ng-content></ng-content> `
            }]
    }], function () { return [{ type: MapComponent }, { type: LayerGroupComponent, decorators: [{
                type: Optional
            }] }]; }, { preload: [{
            type: Input
        }], useInterimTilesOnError: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LayerVectorComponent, [{
        type: Component,
        args: [{
                selector: 'aol-layer-vector',
                template: ` <ng-content></ng-content> `
            }]
    }], function () { return [{ type: MapComponent }, { type: LayerGroupComponent, decorators: [{
                type: Optional
            }] }]; }, { renderBuffer: [{
            type: Input
        }], style: [{
            type: Input
        }], updateWhileAnimating: [{
            type: Input
        }], updateWhileInteracting: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LayerVectorTileComponent, [{
        type: Component,
        args: [{
                selector: 'aol-layer-vectortile',
                template: ` <ng-content></ng-content> `
            }]
    }], function () { return [{ type: MapComponent }, { type: LayerGroupComponent, decorators: [{
                type: Optional
            }] }]; }, { renderBuffer: [{
            type: Input
        }], renderMode: [{
            type: Input
        }], renderOrder: [{
            type: Input
        }], style: [{
            type: Input
        }], updateWhileAnimating: [{
            type: Input
        }], updateWhileInteracting: [{
            type: Input
        }], visible: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TileGridComponent, [{
        type: Component,
        args: [{
                selector: 'aol-tilegrid',
                template: ''
            }]
    }], null, { extent: [{
            type: Input
        }], maxZoom: [{
            type: Input
        }], minZoom: [{
            type: Input
        }], tileSize: [{
            type: Input
        }], origin: [{
            type: Input
        }], resolutions: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SourceXYZComponent, [{
        type: Component,
        args: [{
                selector: 'aol-source-xyz',
                template: ` <ng-content></ng-content> `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceXYZComponent_1) }]
            }]
    }], function () { return [{ type: LayerTileComponent, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }]; }, { tileLoadStart: [{
            type: Output
        }], tileLoadEnd: [{
            type: Output
        }], tileLoadError: [{
            type: Output
        }], tileGrid: [{
            type: Input
        }], cacheSize: [{
            type: Input
        }], crossOrigin: [{
            type: Input
        }], opaque: [{
            type: Input
        }], projection: [{
            type: Input
        }], reprojectionErrorThreshold: [{
            type: Input
        }], minZoom: [{
            type: Input
        }], maxZoom: [{
            type: Input
        }], tileLoadFunction: [{
            type: Input
        }], tilePixelRatio: [{
            type: Input
        }], tileSize: [{
            type: Input
        }], tileUrlFunction: [{
            type: Input
        }], url: [{
            type: Input
        }], urls: [{
            type: Input
        }], wrapX: [{
            type: Input
        }], tileGridXYZ: [{
            type: ContentChild,
            args: [TileGridComponent]
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SourceOsmComponent, [{
        type: Component,
        args: [{
                selector: 'aol-source-osm',
                template: ` <div class="aol-source-osm"></div> `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceOsmComponent_1) }]
            }]
    }], function () { return [{ type: LayerTileComponent, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }]; }, { tileLoadStart: [{
            type: Output
        }], tileLoadEnd: [{
            type: Output
        }], tileLoadError: [{
            type: Output
        }], attributions: [{
            type: Input
        }], cacheSize: [{
            type: Input
        }], crossOrigin: [{
            type: Input
        }], maxZoom: [{
            type: Input
        }], opaque: [{
            type: Input
        }], reprojectionErrorThreshold: [{
            type: Input
        }], tileLoadFunction: [{
            type: Input
        }], url: [{
            type: Input
        }], wrapX: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SourceBingmapsComponent, [{
        type: Component,
        args: [{
                selector: 'aol-source-bingmaps',
                template: ` <div class="aol-source-bingmaps"></div> `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceBingmapsComponent_1) }]
            }]
    }], function () { return [{ type: LayerTileComponent, decorators: [{
                type: Host
            }] }]; }, { imagerySet: [{
            type: Input
        }], cacheSize: [{
            type: Input
        }], hidpi: [{
            type: Input
        }], culture: [{
            type: Input
        }], key: [{
            type: Input
        }], maxZoom: [{
            type: Input
        }], reprojectionErrorThreshold: [{
            type: Input
        }], tileLoadFunction: [{
            type: Input
        }], wrapX: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SourceVectorComponent, [{
        type: Component,
        args: [{
                selector: 'aol-source-vector',
                template: ` <ng-content></ng-content> `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceVectorComponent_1) }]
            }]
    }], function () { return [{ type: LayerVectorComponent, decorators: [{
                type: Host
            }] }]; }, { overlaps: [{
            type: Input
        }], useSpatialIndex: [{
            type: Input
        }], wrapX: [{
            type: Input
        }], url: [{
            type: Input
        }], format: [{
            type: Input
        }], strategy: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SourceClusterComponent, [{
        type: Component,
        args: [{
                selector: 'aol-source-cluster',
                template: ` <ng-content></ng-content> `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceClusterComponent_1) }]
            }]
    }], function () { return [{ type: LayerVectorComponent, decorators: [{
                type: Host
            }] }]; }, { distance: [{
            type: Input
        }], geometryFunction: [{
            type: Input
        }], wrapX: [{
            type: Input
        }], sourceVectorComponent: [{
            type: ContentChild,
            args: [SourceVectorComponent]
        }] }); })();
const ɵTileGridWMTSComponent_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(TileGridWMTSComponent);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TileGridWMTSComponent, [{
        type: Component,
        args: [{
                selector: 'aol-tilegrid-wmts',
                template: ''
            }]
    }], null, { origin: [{
            type: Input
        }], origins: [{
            type: Input
        }], resolutions: [{
            type: Input
        }], matrixIds: [{
            type: Input
        }], sizes: [{
            type: Input
        }], tileSizes: [{
            type: Input
        }], widths: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SourceTileWMTSComponent, [{
        type: Component,
        args: [{
                selector: 'aol-source-tilewmts',
                template: ` <ng-content></ng-content> `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceTileWMTSComponent_1) }]
            }]
    }], function () { return [{ type: LayerTileComponent, decorators: [{
                type: Host
            }] }]; }, { tileLoadStart: [{
            type: Output
        }], tileLoadEnd: [{
            type: Output
        }], tileLoadError: [{
            type: Output
        }], url: [{
            type: Input
        }], tileGrid: [{
            type: Input
        }], cacheSize: [{
            type: Input
        }], crossOrigin: [{
            type: Input
        }], projection: [{
            type: Input
        }], reprojectionErrorThreshold: [{
            type: Input
        }], requestEncoding: [{
            type: Input
        }], layer: [{
            type: Input
        }], style: [{
            type: Input
        }], tileClass: [{
            type: Input
        }], tilePixelRatio: [{
            type: Input
        }], version: [{
            type: Input
        }], format: [{
            type: Input
        }], matrixSet: [{
            type: Input
        }], dimensions: [{
            type: Input
        }], tileLoadFunction: [{
            type: Input
        }], urls: [{
            type: Input
        }], wrapX: [{
            type: Input
        }], tileGridWMTS: [{
            type: ContentChild,
            args: [TileGridWMTSComponent]
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SourceVectorTileComponent, [{
        type: Component,
        args: [{
                selector: 'aol-source-vectortile',
                template: ` <ng-content></ng-content> `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceVectorTileComponent_1) }]
            }]
    }], function () { return [{ type: LayerVectorTileComponent, decorators: [{
                type: Host
            }] }]; }, { cacheSize: [{
            type: Input
        }], overlaps: [{
            type: Input
        }], projection: [{
            type: Input
        }], tilePixelRatio: [{
            type: Input
        }], tileUrlFunction: [{
            type: Input
        }], url: [{
            type: Input
        }], urls: [{
            type: Input
        }], wrapX: [{
            type: Input
        }], formatComponent: [{
            type: ContentChild,
            args: [FormatComponent]
        }], tileGridComponent: [{
            type: ContentChild,
            args: [TileGridComponent]
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SourceTileWMSComponent, [{
        type: Component,
        args: [{
                selector: 'aol-source-tilewms',
                template: ` <ng-content></ng-content> `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceTileWMSComponent_1) }]
            }]
    }], function () { return [{ type: LayerTileComponent, decorators: [{
                type: Host
            }] }]; }, { cacheSize: [{
            type: Input
        }], crossOrigin: [{
            type: Input
        }], gutter: [{
            type: Input
        }], hidpi: [{
            type: Input
        }], params: [{
            type: Input
        }], projection: [{
            type: Input
        }], reprojectionErrorThreshold: [{
            type: Input
        }], serverType: [{
            type: Input
        }], tileGrid: [{
            type: Input
        }], tileLoadFunction: [{
            type: Input
        }], url: [{
            type: Input
        }], urls: [{
            type: Input
        }], wrapX: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SourceTileJSONComponent, [{
        type: Component,
        args: [{
                selector: 'aol-source-tilejson',
                template: ` <ng-content></ng-content> `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceTileJSONComponent_1) }]
            }]
    }], function () { return [{ type: LayerTileComponent, decorators: [{
                type: Host
            }] }]; }, { url: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SourceGeoJSONComponent, [{
        type: Component,
        args: [{
                selector: 'aol-source-geojson',
                template: ` <ng-content></ng-content> `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceGeoJSONComponent_1) }]
            }]
    }], function () { return [{ type: LayerVectorComponent, decorators: [{
                type: Host
            }] }]; }, { defaultDataProjection: [{
            type: Input
        }], featureProjection: [{
            type: Input
        }], geometryName: [{
            type: Input
        }], url: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SourceImageStaticComponent, [{
        type: Component,
        args: [{
                selector: 'aol-source-imagestatic',
                template: ` <ng-content></ng-content> `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceImageStaticComponent_1) }]
            }]
    }], function () { return [{ type: LayerImageComponent, decorators: [{
                type: Host
            }] }]; }, { imageLoadStart: [{
            type: Output
        }], imageLoadEnd: [{
            type: Output
        }], imageLoadError: [{
            type: Output
        }], url: [{
            type: Input
        }], projection: [{
            type: Input
        }], imageExtent: [{
            type: Input
        }], attributions: [{
            type: Input
        }], crossOrigin: [{
            type: Input
        }], imageLoadFunction: [{
            type: Input
        }], imageSize: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SourceImageWMSComponent, [{
        type: Component,
        args: [{
                selector: 'aol-source-imagewms',
                template: ` <ng-content></ng-content> `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceImageWMSComponent_1) }]
            }]
    }], function () { return [{ type: LayerImageComponent, decorators: [{
                type: Host
            }] }]; }, { imageLoadStart: [{
            type: Output
        }], imageLoadEnd: [{
            type: Output
        }], imageLoadError: [{
            type: Output
        }], attributions: [{
            type: Input
        }], crossOrigin: [{
            type: Input
        }], hidpi: [{
            type: Input
        }], serverType: [{
            type: Input
        }], imageLoadFunction: [{
            type: Input
        }], params: [{
            type: Input
        }], projection: [{
            type: Input
        }], ratio: [{
            type: Input
        }], resolutions: [{
            type: Input
        }], url: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SourceImageArcGISRestComponent, [{
        type: Component,
        args: [{
                selector: 'aol-source-imagearcgisrest',
                template: ` <ng-content></ng-content> `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceImageArcGISRestComponent_1) }]
            }]
    }], function () { return [{ type: LayerImageComponent, decorators: [{
                type: Host
            }] }]; }, { ratio: [{
            type: Input
        }], imageLoadStart: [{
            type: Output
        }], imageLoadEnd: [{
            type: Output
        }], imageLoadError: [{
            type: Output
        }], projection: [{
            type: Input
        }], url: [{
            type: Input
        }], attributions: [{
            type: Input
        }], crossOrigin: [{
            type: Input
        }], imageLoadFunction: [{
            type: Input
        }], params: [{
            type: Input
        }], resolutions: [{
            type: Input
        }], wrapX: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SourceRasterComponent, [{
        type: Component,
        args: [{
                selector: 'aol-source-raster',
                template: ` <ng-content></ng-content> `,
                providers: [
                    {
                        provide: SourceComponent,
                        useExisting: forwardRef(() => SourceRasterComponent_1)
                    },
                ]
            }]
    }], function () { return [{ type: LayerImageComponent, decorators: [{
                type: Host
            }] }]; }, { beforeOperations: [{
            type: Output
        }], afterOperations: [{
            type: Output
        }], source: [{
            type: ContentChild,
            args: [SourceComponent]
        }], operation: [{
            type: Input
        }], threads: [{
            type: Input
        }], lib: [{
            type: Input
        }], operationType: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FeatureComponent, [{
        type: Component,
        args: [{
                selector: 'aol-feature',
                template: ` <ng-content></ng-content> `
            }]
    }], function () { return [{ type: SourceVectorComponent }]; }, { id: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GeometryCircleComponent, [{
        type: Component,
        args: [{
                selector: 'aol-geometry-circle',
                template: ` <ng-content></ng-content> `
            }]
    }], function () { return [{ type: MapComponent }, { type: FeatureComponent }]; }, { radius: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GeometryLinestringComponent, [{
        type: Component,
        args: [{
                selector: 'aol-geometry-linestring',
                template: ` <ng-content></ng-content> `
            }]
    }], function () { return [{ type: MapComponent }, { type: FeatureComponent }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GeometryMultiLinestringComponent, [{
        type: Component,
        args: [{
                selector: 'aol-geometry-multilinestring',
                template: ` <ng-content></ng-content> `
            }]
    }], function () { return [{ type: MapComponent }, { type: FeatureComponent }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GeometryMultiPointComponent, [{
        type: Component,
        args: [{
                selector: 'aol-geometry-multipoint',
                template: ` <ng-content></ng-content> `
            }]
    }], function () { return [{ type: MapComponent }, { type: FeatureComponent }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GeometryMultiPolygonComponent, [{
        type: Component,
        args: [{
                selector: 'aol-geometry-multipolygon',
                template: ` <ng-content></ng-content> `
            }]
    }], function () { return [{ type: MapComponent }, { type: FeatureComponent }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GeometryPointComponent, [{
        type: Component,
        args: [{
                selector: 'aol-geometry-point',
                template: ` <ng-content></ng-content> `
            }]
    }], function () { return [{ type: MapComponent }, { type: FeatureComponent }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GeometryPolygonComponent, [{
        type: Component,
        args: [{
                selector: 'aol-geometry-polygon',
                template: ` <ng-content></ng-content> `
            }]
    }], function () { return [{ type: MapComponent }, { type: FeatureComponent }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ContentComponent, [{
        type: Component,
        args: [{
                selector: 'aol-content',
                template: '<ng-content></ng-content>'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(OverlayComponent, [{
        type: Component,
        args: [{
                selector: 'aol-overlay',
                template: '<ng-content></ng-content>'
            }]
    }], function () { return [{ type: MapComponent }]; }, { content: [{
            type: ContentChild,
            args: [ContentComponent, { static: true }]
        }], id: [{
            type: Input
        }], offset: [{
            type: Input
        }], positioning: [{
            type: Input
        }], stopEvent: [{
            type: Input
        }], insertFirst: [{
            type: Input
        }], autoPan: [{
            type: Input
        }], autoPanAnimation: [{
            type: Input
        }], autoPanMargin: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CoordinateComponent, [{
        type: Component,
        args: [{
                selector: 'aol-coordinate',
                template: ` <div class="aol-coordinate"></div> `
            }]
    }], function () { return [{ type: MapComponent }, { type: ViewComponent, decorators: [{
                type: Optional
            }] }, { type: GeometryPointComponent, decorators: [{
                type: Optional
            }] }, { type: GeometryCircleComponent, decorators: [{
                type: Optional
            }] }, { type: OverlayComponent, decorators: [{
                type: Optional
            }] }]; }, { srid: [{
            type: Input
        }], x: [{
            type: Input
        }], y: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CollectionCoordinatesComponent, [{
        type: Component,
        args: [{
                selector: 'aol-collection-coordinates',
                template: ` <div class="aol-collection-coordinates"></div> `
            }]
    }], function () { return [{ type: MapComponent }, { type: GeometryLinestringComponent, decorators: [{
                type: Optional
            }] }, { type: GeometryPolygonComponent, decorators: [{
                type: Optional
            }] }, { type: GeometryMultiPointComponent, decorators: [{
                type: Optional
            }] }, { type: GeometryMultiLinestringComponent, decorators: [{
                type: Optional
            }] }, { type: GeometryMultiPolygonComponent, decorators: [{
                type: Optional
            }] }]; }, { srid: [{
            type: Input
        }], coordinates: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(StyleComponent, [{
        type: Component,
        args: [{
                selector: 'aol-style',
                template: ` <ng-content></ng-content> `
            }]
    }], function () { return [{ type: FeatureComponent, decorators: [{
                type: Optional
            }] }, { type: LayerVectorComponent, decorators: [{
                type: Optional
            }] }]; }, { geometry: [{
            type: Input
        }], fill: [{
            type: Input
        }], image: [{
            type: Input
        }], stroke: [{
            type: Input
        }], text: [{
            type: Input
        }], zIndex: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(StyleCircleComponent, [{
        type: Component,
        args: [{
                selector: 'aol-style-circle',
                template: ` <ng-content></ng-content> `
            }]
    }], function () { return [{ type: StyleComponent, decorators: [{
                type: Host
            }] }]; }, { fill: [{
            type: Input
        }], radius: [{
            type: Input
        }], snapToPixel: [{
            type: Input
        }], stroke: [{
            type: Input
        }], atlasManager: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(StyleTextComponent, [{
        type: Component,
        args: [{
                selector: 'aol-style-text',
                template: ` <div class="aol-style-text"></div> `
            }]
    }], function () { return [{ type: StyleComponent, decorators: [{
                type: Optional
            }] }]; }, { font: [{
            type: Input
        }], offsetX: [{
            type: Input
        }], offsetY: [{
            type: Input
        }], scale: [{
            type: Input
        }], rotateWithView: [{
            type: Input
        }], rotation: [{
            type: Input
        }], text: [{
            type: Input
        }], textAlign: [{
            type: Input
        }], textBaseLine: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(StyleStrokeComponent, [{
        type: Component,
        args: [{
                selector: 'aol-style-stroke',
                template: ` <div class="aol-style-stroke"></div> `
            }]
    }], function () { return [{ type: StyleComponent, decorators: [{
                type: Optional
            }] }, { type: StyleCircleComponent, decorators: [{
                type: Optional
            }] }, { type: StyleTextComponent, decorators: [{
                type: Optional
            }] }]; }, { color: [{
            type: Input
        }], lineCap: [{
            type: Input
        }], lineDash: [{
            type: Input
        }], lineJoin: [{
            type: Input
        }], miterLimit: [{
            type: Input
        }], width: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(StyleIconComponent, [{
        type: Component,
        args: [{
                selector: 'aol-style-icon',
                template: ` <div class="aol-style-icon"></div> `
            }]
    }], function () { return [{ type: StyleComponent, decorators: [{
                type: Host
            }] }]; }, { anchor: [{
            type: Input
        }], anchorXUnits: [{
            type: Input
        }], anchorYUnits: [{
            type: Input
        }], anchorOrigin: [{
            type: Input
        }], color: [{
            type: Input
        }], crossOrigin: [{
            type: Input
        }], img: [{
            type: Input
        }], offset: [{
            type: Input
        }], offsetOrigin: [{
            type: Input
        }], opacity: [{
            type: Input
        }], scale: [{
            type: Input
        }], snapToPixel: [{
            type: Input
        }], rotateWithView: [{
            type: Input
        }], rotation: [{
            type: Input
        }], size: [{
            type: Input
        }], imgSize: [{
            type: Input
        }], src: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(StyleFillComponent, [{
        type: Component,
        args: [{
                selector: 'aol-style-fill',
                template: ` <div class="aol-style-fill"></div> `
            }]
    }], function () { return [{ type: StyleComponent, decorators: [{
                type: Optional
            }] }, { type: StyleCircleComponent, decorators: [{
                type: Optional
            }] }, { type: StyleTextComponent, decorators: [{
                type: Optional
            }] }]; }, { color: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DefaultControlComponent, [{
        type: Component,
        args: [{
                selector: 'aol-control-defaults',
                template: ''
            }]
    }], function () { return [{ type: MapComponent }]; }, { attribution: [{
            type: Input
        }], attributionOptions: [{
            type: Input
        }], rotate: [{
            type: Input
        }], rotateOptions: [{
            type: Input
        }], zoom: [{
            type: Input
        }], zoomOptions: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ControlComponent, [{
        type: Component,
        args: [{
                selector: 'aol-control',
                template: ` <ng-content></ng-content> `
            }]
    }], function () { return [{ type: MapComponent }]; }, { content: [{
            type: ContentChild,
            args: [ContentComponent, { static: true }]
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ControlAttributionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-control-attribution',
                template: ``
            }]
    }], function () { return [{ type: MapComponent }, { type: ɵngcc0.ElementRef }]; }, { collapsible: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ControlFullScreenComponent, [{
        type: Component,
        args: [{
                selector: 'aol-control-fullscreen',
                template: ` <ng-content></ng-content> `
            }]
    }], function () { return [{ type: MapComponent }]; }, { className: [{
            type: Input
        }], label: [{
            type: Input
        }], labelActive: [{
            type: Input
        }], tipLabel: [{
            type: Input
        }], keys: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ControlMousePositionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-control-mouseposition',
                template: ``
            }]
    }], function () { return [{ type: MapComponent }, { type: ɵngcc0.ElementRef }]; }, { coordinateFormat: [{
            type: Input
        }], projection: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ControlOverviewMapComponent, [{
        type: Component,
        args: [{
                selector: 'aol-control-overviewmap',
                template: ` <ng-content></ng-content> `
            }]
    }], function () { return [{ type: MapComponent }]; }, { collapsed: [{
            type: Input
        }], collapseLabel: [{
            type: Input
        }], collapsible: [{
            type: Input
        }], label: [{
            type: Input
        }], layers: [{
            type: Input
        }], target: [{
            type: Input
        }], tipLabel: [{
            type: Input
        }], view: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ControlRotateComponent, [{
        type: Component,
        args: [{
                selector: 'aol-control-rotate',
                template: ` <ng-content></ng-content> `
            }]
    }], function () { return [{ type: MapComponent }]; }, { className: [{
            type: Input
        }], label: [{
            type: Input
        }], tipLabel: [{
            type: Input
        }], duration: [{
            type: Input
        }], autoHide: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ControlScaleLineComponent, [{
        type: Component,
        args: [{
                selector: 'aol-control-scaleline',
                template: ` <ng-content></ng-content> `
            }]
    }], function () { return [{ type: MapComponent }]; }, { units: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ControlZoomComponent, [{
        type: Component,
        args: [{
                selector: 'aol-control-zoom',
                template: ` <ng-content></ng-content> `
            }]
    }], function () { return [{ type: MapComponent }]; }, { duration: [{
            type: Input
        }], zoomInLabel: [{
            type: Input
        }], zoomOutLabel: [{
            type: Input
        }], zoomInTipLabel: [{
            type: Input
        }], zoomOutTipLabel: [{
            type: Input
        }], delta: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ControlZoomSliderComponent, [{
        type: Component,
        args: [{
                selector: 'aol-control-zoomslider',
                template: ` <ng-content></ng-content> `
            }]
    }], function () { return [{ type: MapComponent }]; }, { className: [{
            type: Input
        }], duration: [{
            type: Input
        }], maxResolution: [{
            type: Input
        }], minResolution: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ControlZoomToExtentComponent, [{
        type: Component,
        args: [{
                selector: 'aol-control-zoomtoextent',
                template: ` <ng-content></ng-content> `
            }]
    }], function () { return [{ type: MapComponent }]; }, { className: [{
            type: Input
        }], label: [{
            type: Input
        }], tipLabel: [{
            type: Input
        }], extent: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FormatMVTComponent, [{
        type: Component,
        args: [{
                selector: 'aol-format-mvt',
                template: '',
                providers: [{ provide: FormatComponent, useExisting: forwardRef(() => FormatMVTComponent_1) }]
            }]
    }], function () { return []; }, { featureClass: [{
            type: Input
        }], geometryName: [{
            type: Input
        }], layerName: [{
            type: Input
        }], layers: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DefaultInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-interaction-default',
                template: ''
            }]
    }], function () { return [{ type: MapComponent }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DoubleClickZoomInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-interaction-doubleclickzoom',
                template: ''
            }]
    }], function () { return [{ type: MapComponent }]; }, { duration: [{
            type: Input
        }], delta: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DragAndDropInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-interaction-draganddrop',
                template: ''
            }]
    }], function () { return [{ type: MapComponent }]; }, { formatConstructors: [{
            type: Input
        }], projection: [{
            type: Input
        }], target: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DragBoxInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-interaction-dragbox',
                template: ''
            }]
    }], function () { return [{ type: MapComponent }]; }, { className: [{
            type: Input
        }], condition: [{
            type: Input
        }], boxEndCondition: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DragPanInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-interaction-dragpan',
                template: ''
            }]
    }], function () { return [{ type: MapComponent }]; }, { condition: [{
            type: Input
        }], kinetic: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DragRotateInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-interaction-dragrotate',
                template: ''
            }]
    }], function () { return [{ type: MapComponent }]; }, { condition: [{
            type: Input
        }], duration: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DragRotateAndZoomInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-interaction-dragrotateandzoom',
                template: ''
            }]
    }], function () { return [{ type: MapComponent }]; }, { condition: [{
            type: Input
        }], duration: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DragZoomInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-interaction-dragzoom',
                template: ''
            }]
    }], function () { return [{ type: MapComponent }]; }, { className: [{
            type: Input
        }], condition: [{
            type: Input
        }], duration: [{
            type: Input
        }], out: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MouseWheelZoomInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-interaction-mousewheelzoom',
                template: ''
            }]
    }], function () { return [{ type: MapComponent }]; }, { duration: [{
            type: Input
        }], timeout: [{
            type: Input
        }], useAnchor: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PinchZoomInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-interaction-pinchzoom',
                template: ''
            }]
    }], function () { return [{ type: MapComponent }]; }, { duration: [{
            type: Input
        }], constrainResolution: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DrawInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-interaction-draw',
                template: ''
            }]
    }], function () { return [{ type: MapComponent }]; }, { olChange: [{
            type: Output
        }], olChangeActive: [{
            type: Output
        }], drawEnd: [{
            type: Output
        }], drawStart: [{
            type: Output
        }], propertyChange: [{
            type: Output
        }], clickTolerance: [{
            type: Input
        }], features: [{
            type: Input
        }], source: [{
            type: Input
        }], snapTolerance: [{
            type: Input
        }], type: [{
            type: Input
        }], maxPoints: [{
            type: Input
        }], minPoints: [{
            type: Input
        }], finishCondition: [{
            type: Input
        }], style: [{
            type: Input
        }], geometryFunction: [{
            type: Input
        }], geometryName: [{
            type: Input
        }], condition: [{
            type: Input
        }], freehandCondition: [{
            type: Input
        }], freehand: [{
            type: Input
        }], wrapX: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SelectInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-interaction-select',
                template: ''
            }]
    }], function () { return [{ type: MapComponent }]; }, { olChange: [{
            type: Output
        }], olSelect: [{
            type: Output
        }], propertyChange: [{
            type: Output
        }], addCondition: [{
            type: Input
        }], condition: [{
            type: Input
        }], layers: [{
            type: Input
        }], style: [{
            type: Input
        }], removeCondition: [{
            type: Input
        }], toggleCondition: [{
            type: Input
        }], multi: [{
            type: Input
        }], features: [{
            type: Input
        }], filter: [{
            type: Input
        }], wrapX: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ModifyInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-interaction-modify',
                template: ''
            }]
    }], function () { return [{ type: MapComponent }]; }, { modifyEnd: [{
            type: Output
        }], modifyStart: [{
            type: Output
        }], olChange: [{
            type: Output
        }], olChangeActive: [{
            type: Output
        }], propertyChange: [{
            type: Output
        }], condition: [{
            type: Input
        }], deleteCondition: [{
            type: Input
        }], pixelTolerance: [{
            type: Input
        }], style: [{
            type: Input
        }], features: [{
            type: Input
        }], wrapX: [{
            type: Input
        }], source: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TranslateInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-interaction-translate',
                template: ''
            }]
    }], function () { return [{ type: MapComponent }]; }, { olChange: [{
            type: Output
        }], propertyChange: [{
            type: Output
        }], translateEnd: [{
            type: Output
        }], translateStart: [{
            type: Output
        }], translating: [{
            type: Output
        }], features: [{
            type: Input
        }], layers: [{
            type: Input
        }], hitTolerance: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AttributionComponent, [{
        type: Component,
        args: [{
                selector: 'aol-attribution',
                template: '<ng-content></ng-content>'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AttributionsComponent, [{
        type: Component,
        args: [{
                selector: 'aol-attributions',
                template: '<ng-content></ng-content>'
            }]
    }], function () { return [{ type: SourceComponent, decorators: [{
                type: Host
            }] }]; }, { attributions: [{
            type: ContentChildren,
            args: [AttributionComponent]
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SourceUTFGridComponent, [{
        type: Component,
        args: [{
                selector: 'aol-source-utfgrid',
                template: ` <ng-content></ng-content> `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceUTFGridComponent_1) }]
            }]
    }], function () { return [{ type: LayerTileComponent, decorators: [{
                type: Host
            }] }]; }, { tileJSON: [{
            type: Input
        }], url: [{
            type: Input
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(AngularOpenlayersModule, { declarations: function () { return [MapComponent,
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
        AttributionComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [MapComponent,
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
        AttributionComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AngularOpenlayersModule, [{
        type: NgModule,
        args: [{
                declarations: COMPONENTS,
                imports: [CommonModule],
                exports: COMPONENTS
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { AngularOpenlayersModule, AttributionComponent, AttributionsComponent, CollectionCoordinatesComponent, ContentComponent, ControlAttributionComponent, ControlComponent, ControlFullScreenComponent, ControlMousePositionComponent, ControlOverviewMapComponent, ControlRotateComponent, ControlScaleLineComponent, ControlZoomComponent, ControlZoomSliderComponent, ControlZoomToExtentComponent, CoordinateComponent, DefaultControlComponent, DefaultInteractionComponent, DoubleClickZoomInteractionComponent, DragAndDropInteractionComponent, DragBoxInteractionComponent, DragPanInteractionComponent, DragRotateAndZoomInteractionComponent, DragRotateInteractionComponent, DragZoomInteractionComponent, DrawInteractionComponent, FeatureComponent, FormatMVTComponent, GeometryCircleComponent, GeometryLinestringComponent, GeometryMultiLinestringComponent, GeometryMultiPointComponent, GeometryMultiPolygonComponent, GeometryPointComponent, GeometryPolygonComponent, GraticuleComponent, LayerComponent, LayerGroupComponent, LayerImageComponent, LayerTileComponent, LayerVectorComponent, LayerVectorTileComponent, MapComponent, ModifyInteractionComponent, MouseWheelZoomInteractionComponent, OverlayComponent, PinchZoomInteractionComponent, SelectInteractionComponent, SimpleGeometryComponent, SourceBingmapsComponent, SourceClusterComponent, SourceComponent, SourceGeoJSONComponent, SourceImageArcGISRestComponent, SourceImageStaticComponent, SourceImageWMSComponent, SourceOsmComponent, SourceRasterComponent, SourceTileJSONComponent, SourceTileWMSComponent, SourceTileWMTSComponent, SourceUTFGridComponent, SourceVectorComponent, SourceVectorTileComponent, SourceXYZComponent, StyleCircleComponent, StyleComponent, StyleFillComponent, StyleIconComponent, StyleStrokeComponent, StyleTextComponent, TileGridComponent, TileGridWMTSComponent, TranslateInteractionComponent, ViewComponent, FormatComponent as ɵa };

//# sourceMappingURL=ngx-openlayers.js.map