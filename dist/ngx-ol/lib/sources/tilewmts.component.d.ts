import { AfterContentInit, SimpleChanges, OnChanges, EventEmitter } from '@angular/core';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';
import { TileGridWMTSComponent } from '../tilegridwmts.component';
import { WMTS as SourceWMTS } from 'ol/source';
import WMTS from 'ol/tilegrid/WMTS';
import { ProjectionLike } from 'ol/proj';
import { LoadFunction } from 'ol/Tile';
import { TileSourceEvent } from 'ol/source/Tile';
import { RequestEncoding } from 'ol/source/WMTS';
import * as ɵngcc0 from '@angular/core';
export declare class SourceTileWMTSComponent extends SourceComponent implements AfterContentInit, OnChanges {
    instance: SourceWMTS;
    cacheSize?: number;
    crossOrigin?: string;
    tileGrid: WMTS;
    projection: ProjectionLike;
    reprojectionErrorThreshold?: number;
    requestEncoding?: RequestEncoding | undefined;
    layer: string;
    style: string;
    tileClass?: any;
    tilePixelRatio?: number;
    version?: string;
    format?: string;
    matrixSet: string;
    dimensions?: any;
    url?: string;
    tileLoadFunction?: LoadFunction;
    urls?: string[];
    wrapX?: boolean;
    tileLoadStart: EventEmitter<TileSourceEvent>;
    tileLoadEnd: EventEmitter<TileSourceEvent>;
    tileLoadError: EventEmitter<TileSourceEvent>;
    tileGridWMTS: TileGridWMTSComponent;
    constructor(layer: LayerTileComponent);
    ngOnChanges(changes: SimpleChanges): void;
    setLayerSource(): void;
    ngAfterContentInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SourceTileWMTSComponent, [{ host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SourceTileWMTSComponent, "aol-source-tilewmts", never, { "url": "url"; "tileGrid": "tileGrid"; "cacheSize": "cacheSize"; "crossOrigin": "crossOrigin"; "projection": "projection"; "reprojectionErrorThreshold": "reprojectionErrorThreshold"; "requestEncoding": "requestEncoding"; "layer": "layer"; "style": "style"; "tileClass": "tileClass"; "tilePixelRatio": "tilePixelRatio"; "version": "version"; "format": "format"; "matrixSet": "matrixSet"; "dimensions": "dimensions"; "tileLoadFunction": "tileLoadFunction"; "urls": "urls"; "wrapX": "wrapX"; }, { "tileLoadStart": "tileLoadStart"; "tileLoadEnd": "tileLoadEnd"; "tileLoadError": "tileLoadError"; }, ["tileGridWMTS"], ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZXdtdHMuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInRpbGV3bXRzLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIFNpbXBsZUNoYW5nZXMsIE9uQ2hhbmdlcywgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYXllclRpbGVDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJ0aWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGlsZUdyaWRXTVRTQ29tcG9uZW50IH0gZnJvbSAnLi4vdGlsZWdyaWR3bXRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXTVRTIGFzIFNvdXJjZVdNVFMgfSBmcm9tICdvbC9zb3VyY2UnO1xuaW1wb3J0IFdNVFMgZnJvbSAnb2wvdGlsZWdyaWQvV01UUyc7XG5pbXBvcnQgeyBQcm9qZWN0aW9uTGlrZSB9IGZyb20gJ29sL3Byb2onO1xuaW1wb3J0IHsgTG9hZEZ1bmN0aW9uIH0gZnJvbSAnb2wvVGlsZSc7XG5pbXBvcnQgeyBUaWxlU291cmNlRXZlbnQgfSBmcm9tICdvbC9zb3VyY2UvVGlsZSc7XG5pbXBvcnQgeyBSZXF1ZXN0RW5jb2RpbmcgfSBmcm9tICdvbC9zb3VyY2UvV01UUyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTb3VyY2VUaWxlV01UU0NvbXBvbmVudCBleHRlbmRzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcyB7XG4gICAgaW5zdGFuY2U6IFNvdXJjZVdNVFM7XG4gICAgY2FjaGVTaXplPzogbnVtYmVyO1xuICAgIGNyb3NzT3JpZ2luPzogc3RyaW5nO1xuICAgIHRpbGVHcmlkOiBXTVRTO1xuICAgIHByb2plY3Rpb246IFByb2plY3Rpb25MaWtlO1xuICAgIHJlcHJvamVjdGlvbkVycm9yVGhyZXNob2xkPzogbnVtYmVyO1xuICAgIHJlcXVlc3RFbmNvZGluZz86IFJlcXVlc3RFbmNvZGluZyB8IHVuZGVmaW5lZDtcbiAgICBsYXllcjogc3RyaW5nO1xuICAgIHN0eWxlOiBzdHJpbmc7XG4gICAgdGlsZUNsYXNzPzogYW55O1xuICAgIHRpbGVQaXhlbFJhdGlvPzogbnVtYmVyO1xuICAgIHZlcnNpb24/OiBzdHJpbmc7XG4gICAgZm9ybWF0Pzogc3RyaW5nO1xuICAgIG1hdHJpeFNldDogc3RyaW5nO1xuICAgIGRpbWVuc2lvbnM/OiBhbnk7XG4gICAgdXJsPzogc3RyaW5nO1xuICAgIHRpbGVMb2FkRnVuY3Rpb24/OiBMb2FkRnVuY3Rpb247XG4gICAgdXJscz86IHN0cmluZ1tdO1xuICAgIHdyYXBYPzogYm9vbGVhbjtcbiAgICB0aWxlTG9hZFN0YXJ0OiBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PjtcbiAgICB0aWxlTG9hZEVuZDogRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD47XG4gICAgdGlsZUxvYWRFcnJvcjogRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD47XG4gICAgdGlsZUdyaWRXTVRTOiBUaWxlR3JpZFdNVFNDb21wb25lbnQ7XG4gICAgY29uc3RydWN0b3IobGF5ZXI6IExheWVyVGlsZUNvbXBvbmVudCk7XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XG4gICAgc2V0TGF5ZXJTb3VyY2UoKTogdm9pZDtcbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZDtcbn1cbiJdfQ==