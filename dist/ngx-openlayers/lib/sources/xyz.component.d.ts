import { AfterContentInit, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Size } from 'ol/size';
import { XYZ } from 'ol/source';
import { TileSourceEvent } from 'ol/source/Tile';
import { LoadFunction, UrlFunction } from 'ol/Tile';
import TileGrid from 'ol/tilegrid/TileGrid';
import { LayerTileComponent } from '../layers/layertile.component';
import { TileGridComponent } from '../tilegrid.component';
import { SourceComponent } from './source.component';
import * as ɵngcc0 from '@angular/core';
export declare class SourceXYZComponent extends SourceComponent implements AfterContentInit, OnChanges {
    protected layer?: LayerTileComponent;
    instance: XYZ;
    cacheSize: number;
    crossOrigin: string;
    opaque: boolean;
    projection: string;
    reprojectionErrorThreshold: number;
    minZoom: number;
    maxZoom: number;
    tileGrid: TileGrid;
    tileLoadFunction?: LoadFunction;
    tilePixelRatio: number;
    tileSize: number | Size;
    tileUrlFunction?: UrlFunction;
    url: string;
    urls: string[];
    wrapX: boolean;
    tileGridXYZ: TileGridComponent;
    tileLoadStart: EventEmitter<TileSourceEvent>;
    tileLoadEnd: EventEmitter<TileSourceEvent>;
    tileLoadError: EventEmitter<TileSourceEvent>;
    constructor(layer?: LayerTileComponent);
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    init(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SourceXYZComponent, [{ optional: true; host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SourceXYZComponent, "aol-source-xyz", never, { "tileGrid": "tileGrid"; "cacheSize": "cacheSize"; "crossOrigin": "crossOrigin"; "opaque": "opaque"; "projection": "projection"; "reprojectionErrorThreshold": "reprojectionErrorThreshold"; "minZoom": "minZoom"; "maxZoom": "maxZoom"; "tileLoadFunction": "tileLoadFunction"; "tilePixelRatio": "tilePixelRatio"; "tileSize": "tileSize"; "tileUrlFunction": "tileUrlFunction"; "url": "url"; "urls": "urls"; "wrapX": "wrapX"; }, { "tileLoadStart": "tileLoadStart"; "tileLoadEnd": "tileLoadEnd"; "tileLoadError": "tileLoadError"; }, ["tileGridXYZ"], ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHl6LmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJ4eXouY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNpemUgfSBmcm9tICdvbC9zaXplJztcbmltcG9ydCB7IFhZWiB9IGZyb20gJ29sL3NvdXJjZSc7XG5pbXBvcnQgeyBUaWxlU291cmNlRXZlbnQgfSBmcm9tICdvbC9zb3VyY2UvVGlsZSc7XG5pbXBvcnQgeyBMb2FkRnVuY3Rpb24sIFVybEZ1bmN0aW9uIH0gZnJvbSAnb2wvVGlsZSc7XG5pbXBvcnQgVGlsZUdyaWQgZnJvbSAnb2wvdGlsZWdyaWQvVGlsZUdyaWQnO1xuaW1wb3J0IHsgTGF5ZXJUaWxlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydGlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGlsZUdyaWRDb21wb25lbnQgfSBmcm9tICcuLi90aWxlZ3JpZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UuY29tcG9uZW50JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFNvdXJjZVhZWkNvbXBvbmVudCBleHRlbmRzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcyB7XG4gICAgcHJvdGVjdGVkIGxheWVyPzogTGF5ZXJUaWxlQ29tcG9uZW50O1xuICAgIGluc3RhbmNlOiBYWVo7XG4gICAgY2FjaGVTaXplOiBudW1iZXI7XG4gICAgY3Jvc3NPcmlnaW46IHN0cmluZztcbiAgICBvcGFxdWU6IGJvb2xlYW47XG4gICAgcHJvamVjdGlvbjogc3RyaW5nO1xuICAgIHJlcHJvamVjdGlvbkVycm9yVGhyZXNob2xkOiBudW1iZXI7XG4gICAgbWluWm9vbTogbnVtYmVyO1xuICAgIG1heFpvb206IG51bWJlcjtcbiAgICB0aWxlR3JpZDogVGlsZUdyaWQ7XG4gICAgdGlsZUxvYWRGdW5jdGlvbj86IExvYWRGdW5jdGlvbjtcbiAgICB0aWxlUGl4ZWxSYXRpbzogbnVtYmVyO1xuICAgIHRpbGVTaXplOiBudW1iZXIgfCBTaXplO1xuICAgIHRpbGVVcmxGdW5jdGlvbj86IFVybEZ1bmN0aW9uO1xuICAgIHVybDogc3RyaW5nO1xuICAgIHVybHM6IHN0cmluZ1tdO1xuICAgIHdyYXBYOiBib29sZWFuO1xuICAgIHRpbGVHcmlkWFlaOiBUaWxlR3JpZENvbXBvbmVudDtcbiAgICB0aWxlTG9hZFN0YXJ0OiBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PjtcbiAgICB0aWxlTG9hZEVuZDogRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD47XG4gICAgdGlsZUxvYWRFcnJvcjogRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD47XG4gICAgY29uc3RydWN0b3IobGF5ZXI/OiBMYXllclRpbGVDb21wb25lbnQpO1xuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkO1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xuICAgIGluaXQoKTogdm9pZDtcbn1cbiJdfQ==