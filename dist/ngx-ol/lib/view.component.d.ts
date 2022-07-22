import { OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import View from 'ol/View';
import { MapComponent } from './map.component';
import { ObjectEvent } from 'ol/Object';
import { Extent } from 'ol/extent';
import { Coordinate } from 'ol/coordinate';
import * as ɵngcc0 from '@angular/core';
export declare class ViewComponent implements OnInit, OnChanges, OnDestroy {
    private host;
    instance: View;
    componentType: string;
    constrainRotation: boolean | number;
    enableRotation: boolean;
    extent: Extent;
    maxResolution: number;
    minResolution: number;
    maxZoom: number;
    minZoom: number;
    resolution: number;
    resolutions: number[];
    rotation: number;
    zoom: number;
    zoomFactor: number;
    center: Coordinate;
    projection: string;
    constrainOnlyCenter: boolean;
    smoothExtentConstraint: boolean;
    constrainResolution: boolean;
    smoothResolutionConstraint: boolean;
    showFullExtent: boolean;
    multiWorld: boolean;
    zoomAnimation: boolean;
    changeZoom: EventEmitter<ObjectEvent>;
    changeResolution: EventEmitter<ObjectEvent>;
    changeCenter: EventEmitter<ObjectEvent>;
    constructor(host: MapComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ViewComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ViewComponent, "aol-view", never, { "zoomAnimation": "zoomAnimation"; "constrainRotation": "constrainRotation"; "enableRotation": "enableRotation"; "extent": "extent"; "maxResolution": "maxResolution"; "minResolution": "minResolution"; "maxZoom": "maxZoom"; "minZoom": "minZoom"; "resolution": "resolution"; "resolutions": "resolutions"; "rotation": "rotation"; "zoom": "zoom"; "zoomFactor": "zoomFactor"; "center": "center"; "projection": "projection"; "constrainOnlyCenter": "constrainOnlyCenter"; "smoothExtentConstraint": "smoothExtentConstraint"; "constrainResolution": "constrainResolution"; "smoothResolutionConstraint": "smoothResolutionConstraint"; "showFullExtent": "showFullExtent"; "multiWorld": "multiWorld"; }, { "changeZoom": "changeZoom"; "changeResolution": "changeResolution"; "changeCenter": "changeCenter"; }, never, ["*"]>;
}

//# sourceMappingURL=view.component.d.ts.map