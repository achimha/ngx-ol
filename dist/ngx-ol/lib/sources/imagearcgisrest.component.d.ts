import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ImageArcGISRest } from 'ol/source';
import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';
import { ProjectionLike } from 'ol/proj';
import { AttributionLike } from 'ol/source/Source';
import { LoadFunction } from 'ol/Image';
import * as ɵngcc0 from '@angular/core';
export declare class SourceImageArcGISRestComponent extends SourceComponent implements OnInit, OnChanges {
    instance: ImageArcGISRest;
    projection: ProjectionLike | string;
    url: string;
    attributions: AttributionLike[];
    crossOrigin?: string;
    imageLoadFunction?: LoadFunction;
    params?: {
        [k: string]: any;
    };
    ratio: number;
    resolutions?: number[];
    wrapX?: boolean;
    imageLoadStart: EventEmitter<any>;
    imageLoadEnd: EventEmitter<any>;
    imageLoadError: EventEmitter<any>;
    constructor(layer: LayerImageComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SourceImageArcGISRestComponent, [{ host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SourceImageArcGISRestComponent, "aol-source-imagearcgisrest", never, { "ratio": "ratio"; "projection": "projection"; "url": "url"; "attributions": "attributions"; "crossOrigin": "crossOrigin"; "imageLoadFunction": "imageLoadFunction"; "params": "params"; "resolutions": "resolutions"; "wrapX": "wrapX"; }, { "imageLoadStart": "imageLoadStart"; "imageLoadEnd": "imageLoadEnd"; "imageLoadError": "imageLoadError"; }, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VhcmNnaXNyZXN0LmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJpbWFnZWFyY2dpc3Jlc3QuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW1hZ2VBcmNHSVNSZXN0IH0gZnJvbSAnb2wvc291cmNlJztcbmltcG9ydCB7IExheWVySW1hZ2VDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJpbWFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2plY3Rpb25MaWtlIH0gZnJvbSAnb2wvcHJvaic7XG5pbXBvcnQgeyBBdHRyaWJ1dGlvbkxpa2UgfSBmcm9tICdvbC9zb3VyY2UvU291cmNlJztcbmltcG9ydCB7IExvYWRGdW5jdGlvbiB9IGZyb20gJ29sL0ltYWdlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFNvdXJjZUltYWdlQXJjR0lTUmVzdENvbXBvbmVudCBleHRlbmRzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgICBpbnN0YW5jZTogSW1hZ2VBcmNHSVNSZXN0O1xuICAgIHByb2plY3Rpb246IFByb2plY3Rpb25MaWtlIHwgc3RyaW5nO1xuICAgIHVybDogc3RyaW5nO1xuICAgIGF0dHJpYnV0aW9uczogQXR0cmlidXRpb25MaWtlW107XG4gICAgY3Jvc3NPcmlnaW4/OiBzdHJpbmc7XG4gICAgaW1hZ2VMb2FkRnVuY3Rpb24/OiBMb2FkRnVuY3Rpb247XG4gICAgcGFyYW1zPzoge1xuICAgICAgICBbazogc3RyaW5nXTogYW55O1xuICAgIH07XG4gICAgcmF0aW86IG51bWJlcjtcbiAgICByZXNvbHV0aW9ucz86IG51bWJlcltdO1xuICAgIHdyYXBYPzogYm9vbGVhbjtcbiAgICBpbWFnZUxvYWRTdGFydDogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgaW1hZ2VMb2FkRW5kOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBpbWFnZUxvYWRFcnJvcjogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgY29uc3RydWN0b3IobGF5ZXI6IExheWVySW1hZ2VDb21wb25lbnQpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XG59XG4iXX0=