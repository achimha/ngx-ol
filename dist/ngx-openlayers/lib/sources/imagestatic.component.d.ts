import { EventEmitter, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { ImageStatic } from 'ol/source';
import { SourceComponent } from './source.component';
import { LayerImageComponent } from '../layers/layerimage.component';
import { ProjectionLike } from 'ol/proj';
import { Extent } from 'ol/extent';
import { AttributionLike } from 'ol/source/Source';
import { LoadFunction } from 'ol/Image';
import { Size } from 'ol/size';
import * as ɵngcc0 from '@angular/core';
export declare class SourceImageStaticComponent extends SourceComponent implements OnInit, OnChanges {
    instance: ImageStatic;
    projection: ProjectionLike | string;
    imageExtent: Extent;
    url: string;
    attributions: AttributionLike;
    crossOrigin?: string;
    imageLoadFunction?: LoadFunction;
    imageSize?: Size;
    imageLoadStart: EventEmitter<any>;
    imageLoadEnd: EventEmitter<any>;
    imageLoadError: EventEmitter<any>;
    constructor(layer: LayerImageComponent);
    setLayerSource(): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SourceImageStaticComponent, [{ host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SourceImageStaticComponent, "aol-source-imagestatic", never, { "url": "url"; "projection": "projection"; "imageExtent": "imageExtent"; "attributions": "attributions"; "crossOrigin": "crossOrigin"; "imageLoadFunction": "imageLoadFunction"; "imageSize": "imageSize"; }, { "imageLoadStart": "imageLoadStart"; "imageLoadEnd": "imageLoadEnd"; "imageLoadError": "imageLoadError"; }, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VzdGF0aWMuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImltYWdlc3RhdGljLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbWFnZVN0YXRpYyB9IGZyb20gJ29sL3NvdXJjZSc7XG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5ZXJJbWFnZUNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcmltYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9qZWN0aW9uTGlrZSB9IGZyb20gJ29sL3Byb2onO1xuaW1wb3J0IHsgRXh0ZW50IH0gZnJvbSAnb2wvZXh0ZW50JztcbmltcG9ydCB7IEF0dHJpYnV0aW9uTGlrZSB9IGZyb20gJ29sL3NvdXJjZS9Tb3VyY2UnO1xuaW1wb3J0IHsgTG9hZEZ1bmN0aW9uIH0gZnJvbSAnb2wvSW1hZ2UnO1xuaW1wb3J0IHsgU2l6ZSB9IGZyb20gJ29sL3NpemUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU291cmNlSW1hZ2VTdGF0aWNDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gICAgaW5zdGFuY2U6IEltYWdlU3RhdGljO1xuICAgIHByb2plY3Rpb246IFByb2plY3Rpb25MaWtlIHwgc3RyaW5nO1xuICAgIGltYWdlRXh0ZW50OiBFeHRlbnQ7XG4gICAgdXJsOiBzdHJpbmc7XG4gICAgYXR0cmlidXRpb25zOiBBdHRyaWJ1dGlvbkxpa2U7XG4gICAgY3Jvc3NPcmlnaW4/OiBzdHJpbmc7XG4gICAgaW1hZ2VMb2FkRnVuY3Rpb24/OiBMb2FkRnVuY3Rpb247XG4gICAgaW1hZ2VTaXplPzogU2l6ZTtcbiAgICBpbWFnZUxvYWRTdGFydDogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgaW1hZ2VMb2FkRW5kOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBpbWFnZUxvYWRFcnJvcjogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgY29uc3RydWN0b3IobGF5ZXI6IExheWVySW1hZ2VDb21wb25lbnQpO1xuICAgIHNldExheWVyU291cmNlKCk6IHZvaWQ7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcbn1cbiJdfQ==