import { OnChanges, OnInit, SimpleChanges, EventEmitter } from '@angular/core';
import { ImageWMS } from 'ol/source';
import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';
import { ProjectionLike } from 'ol/proj';
import { AttributionLike } from 'ol/source/Source';
import { LoadFunction } from 'ol/Image';
import { ImageSourceEvent } from 'ol/source/Image';
import { ServerType } from 'ol/source/wms';
import * as ɵngcc0 from '@angular/core';
export declare class SourceImageWMSComponent extends SourceComponent implements OnChanges, OnInit {
    instance: ImageWMS;
    attributions: AttributionLike;
    crossOrigin: string;
    hidpi: boolean;
    serverType: ServerType;
    imageLoadFunction?: LoadFunction;
    params: {
        [key: string]: any;
    };
    projection: ProjectionLike | string;
    ratio: number;
    resolutions: Array<number>;
    url: string;
    imageLoadStart: EventEmitter<ImageSourceEvent>;
    imageLoadEnd: EventEmitter<ImageSourceEvent>;
    imageLoadError: EventEmitter<ImageSourceEvent>;
    constructor(layer: LayerImageComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SourceImageWMSComponent, [{ host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SourceImageWMSComponent, "aol-source-imagewms", never, { "attributions": "attributions"; "crossOrigin": "crossOrigin"; "hidpi": "hidpi"; "serverType": "serverType"; "imageLoadFunction": "imageLoadFunction"; "params": "params"; "projection": "projection"; "ratio": "ratio"; "resolutions": "resolutions"; "url": "url"; }, { "imageLoadStart": "imageLoadStart"; "imageLoadEnd": "imageLoadEnd"; "imageLoadError": "imageLoadError"; }, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2V3bXMuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImltYWdld21zLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEltYWdlV01TIH0gZnJvbSAnb2wvc291cmNlJztcbmltcG9ydCB7IExheWVySW1hZ2VDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJpbWFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2plY3Rpb25MaWtlIH0gZnJvbSAnb2wvcHJvaic7XG5pbXBvcnQgeyBBdHRyaWJ1dGlvbkxpa2UgfSBmcm9tICdvbC9zb3VyY2UvU291cmNlJztcbmltcG9ydCB7IExvYWRGdW5jdGlvbiB9IGZyb20gJ29sL0ltYWdlJztcbmltcG9ydCB7IEltYWdlU291cmNlRXZlbnQgfSBmcm9tICdvbC9zb3VyY2UvSW1hZ2UnO1xuaW1wb3J0IHsgU2VydmVyVHlwZSB9IGZyb20gJ29sL3NvdXJjZS93bXMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU291cmNlSW1hZ2VXTVNDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gICAgaW5zdGFuY2U6IEltYWdlV01TO1xuICAgIGF0dHJpYnV0aW9uczogQXR0cmlidXRpb25MaWtlO1xuICAgIGNyb3NzT3JpZ2luOiBzdHJpbmc7XG4gICAgaGlkcGk6IGJvb2xlYW47XG4gICAgc2VydmVyVHlwZTogU2VydmVyVHlwZTtcbiAgICBpbWFnZUxvYWRGdW5jdGlvbj86IExvYWRGdW5jdGlvbjtcbiAgICBwYXJhbXM6IHtcbiAgICAgICAgW2tleTogc3RyaW5nXTogYW55O1xuICAgIH07XG4gICAgcHJvamVjdGlvbjogUHJvamVjdGlvbkxpa2UgfCBzdHJpbmc7XG4gICAgcmF0aW86IG51bWJlcjtcbiAgICByZXNvbHV0aW9uczogQXJyYXk8bnVtYmVyPjtcbiAgICB1cmw6IHN0cmluZztcbiAgICBpbWFnZUxvYWRTdGFydDogRXZlbnRFbWl0dGVyPEltYWdlU291cmNlRXZlbnQ+O1xuICAgIGltYWdlTG9hZEVuZDogRXZlbnRFbWl0dGVyPEltYWdlU291cmNlRXZlbnQ+O1xuICAgIGltYWdlTG9hZEVycm9yOiBFdmVudEVtaXR0ZXI8SW1hZ2VTb3VyY2VFdmVudD47XG4gICAgY29uc3RydWN0b3IobGF5ZXI6IExheWVySW1hZ2VDb21wb25lbnQpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XG59XG4iXX0=