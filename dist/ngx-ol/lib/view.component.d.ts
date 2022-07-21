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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsidmlldy5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBWaWV3IGZyb20gJ29sL1ZpZXcnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi9tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IE9iamVjdEV2ZW50IH0gZnJvbSAnb2wvT2JqZWN0JztcbmltcG9ydCB7IEV4dGVudCB9IGZyb20gJ29sL2V4dGVudCc7XG5pbXBvcnQgeyBDb29yZGluYXRlIH0gZnJvbSAnb2wvY29vcmRpbmF0ZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBob3N0O1xuICAgIGluc3RhbmNlOiBWaWV3O1xuICAgIGNvbXBvbmVudFR5cGU6IHN0cmluZztcbiAgICBjb25zdHJhaW5Sb3RhdGlvbjogYm9vbGVhbiB8IG51bWJlcjtcbiAgICBlbmFibGVSb3RhdGlvbjogYm9vbGVhbjtcbiAgICBleHRlbnQ6IEV4dGVudDtcbiAgICBtYXhSZXNvbHV0aW9uOiBudW1iZXI7XG4gICAgbWluUmVzb2x1dGlvbjogbnVtYmVyO1xuICAgIG1heFpvb206IG51bWJlcjtcbiAgICBtaW5ab29tOiBudW1iZXI7XG4gICAgcmVzb2x1dGlvbjogbnVtYmVyO1xuICAgIHJlc29sdXRpb25zOiBudW1iZXJbXTtcbiAgICByb3RhdGlvbjogbnVtYmVyO1xuICAgIHpvb206IG51bWJlcjtcbiAgICB6b29tRmFjdG9yOiBudW1iZXI7XG4gICAgY2VudGVyOiBDb29yZGluYXRlO1xuICAgIHByb2plY3Rpb246IHN0cmluZztcbiAgICBjb25zdHJhaW5Pbmx5Q2VudGVyOiBib29sZWFuO1xuICAgIHNtb290aEV4dGVudENvbnN0cmFpbnQ6IGJvb2xlYW47XG4gICAgY29uc3RyYWluUmVzb2x1dGlvbjogYm9vbGVhbjtcbiAgICBzbW9vdGhSZXNvbHV0aW9uQ29uc3RyYWludDogYm9vbGVhbjtcbiAgICBzaG93RnVsbEV4dGVudDogYm9vbGVhbjtcbiAgICBtdWx0aVdvcmxkOiBib29sZWFuO1xuICAgIHpvb21BbmltYXRpb246IGJvb2xlYW47XG4gICAgY2hhbmdlWm9vbTogRXZlbnRFbWl0dGVyPE9iamVjdEV2ZW50PjtcbiAgICBjaGFuZ2VSZXNvbHV0aW9uOiBFdmVudEVtaXR0ZXI8T2JqZWN0RXZlbnQ+O1xuICAgIGNoYW5nZUNlbnRlcjogRXZlbnRFbWl0dGVyPE9iamVjdEV2ZW50PjtcbiAgICBjb25zdHJ1Y3Rvcihob3N0OiBNYXBDb21wb25lbnQpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==