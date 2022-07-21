import { AfterContentInit, EventEmitter } from '@angular/core';
import { OSM } from 'ol/source';
import { AttributionLike } from 'ol/source/Source';
import { TileSourceEvent } from 'ol/source/Tile';
import { LoadFunction } from 'ol/Tile';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceXYZComponent } from './xyz.component';
import * as ɵngcc0 from '@angular/core';
export declare class SourceOsmComponent extends SourceXYZComponent implements AfterContentInit {
    protected layer?: LayerTileComponent;
    instance: OSM;
    attributions: AttributionLike;
    cacheSize: number;
    crossOrigin: string;
    maxZoom: number;
    opaque: boolean;
    reprojectionErrorThreshold: number;
    tileLoadFunction: LoadFunction;
    url: string;
    wrapX: boolean;
    tileLoadStart: EventEmitter<TileSourceEvent>;
    tileLoadEnd: EventEmitter<TileSourceEvent>;
    tileLoadError: EventEmitter<TileSourceEvent>;
    constructor(layer?: LayerTileComponent);
    ngAfterContentInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SourceOsmComponent, [{ optional: true; host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SourceOsmComponent, "aol-source-osm", never, { "attributions": "attributions"; "cacheSize": "cacheSize"; "crossOrigin": "crossOrigin"; "maxZoom": "maxZoom"; "opaque": "opaque"; "reprojectionErrorThreshold": "reprojectionErrorThreshold"; "tileLoadFunction": "tileLoadFunction"; "url": "url"; "wrapX": "wrapX"; }, { "tileLoadStart": "tileLoadStart"; "tileLoadEnd": "tileLoadEnd"; "tileLoadError": "tileLoadError"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3NtLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJvc20uY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9TTSB9IGZyb20gJ29sL3NvdXJjZSc7XG5pbXBvcnQgeyBBdHRyaWJ1dGlvbkxpa2UgfSBmcm9tICdvbC9zb3VyY2UvU291cmNlJztcbmltcG9ydCB7IFRpbGVTb3VyY2VFdmVudCB9IGZyb20gJ29sL3NvdXJjZS9UaWxlJztcbmltcG9ydCB7IExvYWRGdW5jdGlvbiB9IGZyb20gJ29sL1RpbGUnO1xuaW1wb3J0IHsgTGF5ZXJUaWxlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydGlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU291cmNlWFlaQ29tcG9uZW50IH0gZnJvbSAnLi94eXouY29tcG9uZW50JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFNvdXJjZU9zbUNvbXBvbmVudCBleHRlbmRzIFNvdXJjZVhZWkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICAgIHByb3RlY3RlZCBsYXllcj86IExheWVyVGlsZUNvbXBvbmVudDtcbiAgICBpbnN0YW5jZTogT1NNO1xuICAgIGF0dHJpYnV0aW9uczogQXR0cmlidXRpb25MaWtlO1xuICAgIGNhY2hlU2l6ZTogbnVtYmVyO1xuICAgIGNyb3NzT3JpZ2luOiBzdHJpbmc7XG4gICAgbWF4Wm9vbTogbnVtYmVyO1xuICAgIG9wYXF1ZTogYm9vbGVhbjtcbiAgICByZXByb2plY3Rpb25FcnJvclRocmVzaG9sZDogbnVtYmVyO1xuICAgIHRpbGVMb2FkRnVuY3Rpb246IExvYWRGdW5jdGlvbjtcbiAgICB1cmw6IHN0cmluZztcbiAgICB3cmFwWDogYm9vbGVhbjtcbiAgICB0aWxlTG9hZFN0YXJ0OiBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PjtcbiAgICB0aWxlTG9hZEVuZDogRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD47XG4gICAgdGlsZUxvYWRFcnJvcjogRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD47XG4gICAgY29uc3RydWN0b3IobGF5ZXI/OiBMYXllclRpbGVDb21wb25lbnQpO1xuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkO1xufVxuIl19