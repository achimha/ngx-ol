import { OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import View from 'ol/View';
import { MapComponent } from './map.component';
import { ObjectEvent } from 'ol';
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsidmlldy5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBWaWV3IGZyb20gJ29sL1ZpZXcnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi9tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IE9iamVjdEV2ZW50IH0gZnJvbSAnb2wnO1xuaW1wb3J0IHsgRXh0ZW50IH0gZnJvbSAnb2wvZXh0ZW50JztcbmltcG9ydCB7IENvb3JkaW5hdGUgfSBmcm9tICdvbC9jb29yZGluYXRlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIGhvc3Q7XG4gICAgaW5zdGFuY2U6IFZpZXc7XG4gICAgY29tcG9uZW50VHlwZTogc3RyaW5nO1xuICAgIGNvbnN0cmFpblJvdGF0aW9uOiBib29sZWFuIHwgbnVtYmVyO1xuICAgIGVuYWJsZVJvdGF0aW9uOiBib29sZWFuO1xuICAgIGV4dGVudDogRXh0ZW50O1xuICAgIG1heFJlc29sdXRpb246IG51bWJlcjtcbiAgICBtaW5SZXNvbHV0aW9uOiBudW1iZXI7XG4gICAgbWF4Wm9vbTogbnVtYmVyO1xuICAgIG1pblpvb206IG51bWJlcjtcbiAgICByZXNvbHV0aW9uOiBudW1iZXI7XG4gICAgcmVzb2x1dGlvbnM6IG51bWJlcltdO1xuICAgIHJvdGF0aW9uOiBudW1iZXI7XG4gICAgem9vbTogbnVtYmVyO1xuICAgIHpvb21GYWN0b3I6IG51bWJlcjtcbiAgICBjZW50ZXI6IENvb3JkaW5hdGU7XG4gICAgcHJvamVjdGlvbjogc3RyaW5nO1xuICAgIGNvbnN0cmFpbk9ubHlDZW50ZXI6IGJvb2xlYW47XG4gICAgc21vb3RoRXh0ZW50Q29uc3RyYWludDogYm9vbGVhbjtcbiAgICBjb25zdHJhaW5SZXNvbHV0aW9uOiBib29sZWFuO1xuICAgIHNtb290aFJlc29sdXRpb25Db25zdHJhaW50OiBib29sZWFuO1xuICAgIHNob3dGdWxsRXh0ZW50OiBib29sZWFuO1xuICAgIG11bHRpV29ybGQ6IGJvb2xlYW47XG4gICAgem9vbUFuaW1hdGlvbjogYm9vbGVhbjtcbiAgICBjaGFuZ2Vab29tOiBFdmVudEVtaXR0ZXI8T2JqZWN0RXZlbnQ+O1xuICAgIGNoYW5nZVJlc29sdXRpb246IEV2ZW50RW1pdHRlcjxPYmplY3RFdmVudD47XG4gICAgY2hhbmdlQ2VudGVyOiBFdmVudEVtaXR0ZXI8T2JqZWN0RXZlbnQ+O1xuICAgIGNvbnN0cnVjdG9yKGhvc3Q6IE1hcENvbXBvbmVudCk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19