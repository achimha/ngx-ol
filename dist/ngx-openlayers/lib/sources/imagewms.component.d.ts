import { OnChanges, OnInit, SimpleChanges, EventEmitter } from '@angular/core';
import { ImageWMS } from 'ol/source';
import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';
import { ProjectionLike } from 'ol/proj';
import { AttributionLike } from 'ol/source/Source';
import { LoadFunction } from 'ol/Image';
import * as ɵngcc0 from '@angular/core';
export declare class SourceImageWMSComponent extends SourceComponent implements OnChanges, OnInit {
    instance: ImageWMS;
    attributions: AttributionLike;
    crossOrigin: string;
    hidpi: boolean;
    serverType: string;
    imageLoadFunction?: LoadFunction;
    params: {
        [key: string]: any;
    };
    projection: ProjectionLike | string;
    ratio: number;
    resolutions: Array<number>;
    url: string;
    imageLoadStart: EventEmitter<any>;
    imageLoadEnd: EventEmitter<any>;
    imageLoadError: EventEmitter<any>;
    constructor(layer: LayerImageComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SourceImageWMSComponent, [{ host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SourceImageWMSComponent, "aol-source-imagewms", never, { "attributions": "attributions"; "crossOrigin": "crossOrigin"; "hidpi": "hidpi"; "serverType": "serverType"; "imageLoadFunction": "imageLoadFunction"; "params": "params"; "projection": "projection"; "ratio": "ratio"; "resolutions": "resolutions"; "url": "url"; }, { "imageLoadStart": "imageLoadStart"; "imageLoadEnd": "imageLoadEnd"; "imageLoadError": "imageLoadError"; }, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2V3bXMuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImltYWdld21zLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW1hZ2VXTVMgfSBmcm9tICdvbC9zb3VyY2UnO1xuaW1wb3J0IHsgTGF5ZXJJbWFnZUNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcmltYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvamVjdGlvbkxpa2UgfSBmcm9tICdvbC9wcm9qJztcbmltcG9ydCB7IEF0dHJpYnV0aW9uTGlrZSB9IGZyb20gJ29sL3NvdXJjZS9Tb3VyY2UnO1xuaW1wb3J0IHsgTG9hZEZ1bmN0aW9uIH0gZnJvbSAnb2wvSW1hZ2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU291cmNlSW1hZ2VXTVNDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gICAgaW5zdGFuY2U6IEltYWdlV01TO1xuICAgIGF0dHJpYnV0aW9uczogQXR0cmlidXRpb25MaWtlO1xuICAgIGNyb3NzT3JpZ2luOiBzdHJpbmc7XG4gICAgaGlkcGk6IGJvb2xlYW47XG4gICAgc2VydmVyVHlwZTogc3RyaW5nO1xuICAgIGltYWdlTG9hZEZ1bmN0aW9uPzogTG9hZEZ1bmN0aW9uO1xuICAgIHBhcmFtczoge1xuICAgICAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gICAgfTtcbiAgICBwcm9qZWN0aW9uOiBQcm9qZWN0aW9uTGlrZSB8IHN0cmluZztcbiAgICByYXRpbzogbnVtYmVyO1xuICAgIHJlc29sdXRpb25zOiBBcnJheTxudW1iZXI+O1xuICAgIHVybDogc3RyaW5nO1xuICAgIGltYWdlTG9hZFN0YXJ0OiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBpbWFnZUxvYWRFbmQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIGltYWdlTG9hZEVycm9yOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBjb25zdHJ1Y3RvcihsYXllcjogTGF5ZXJJbWFnZUNvbXBvbmVudCk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcbn1cbiJdfQ==