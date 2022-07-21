import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import ImageArcGISRest from 'ol/source/ImageArcGISRest';
import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';
import { ProjectionLike } from 'ol/proj';
import { AttributionLike } from 'ol/source/Source';
import { LoadFunction } from 'ol/Image';
import { ImageSourceEvent } from 'ol/source/Image';
import * as ɵngcc0 from '@angular/core';
export declare class SourceImageArcGISRestComponent extends SourceComponent implements OnInit, OnChanges {
    instance: ImageArcGISRest;
    projection: ProjectionLike | string;
    url: string;
    attributions: AttributionLike;
    crossOrigin?: string;
    imageLoadFunction?: LoadFunction;
    params?: {
        [k: string]: any;
    };
    ratio: number;
    resolutions?: number[];
    wrapX?: boolean;
    imageLoadStart: EventEmitter<ImageSourceEvent>;
    imageLoadEnd: EventEmitter<ImageSourceEvent>;
    imageLoadError: EventEmitter<ImageSourceEvent>;
    constructor(layer: LayerImageComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SourceImageArcGISRestComponent, [{ host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SourceImageArcGISRestComponent, "aol-source-imagearcgisrest", never, { "ratio": "ratio"; "projection": "projection"; "url": "url"; "attributions": "attributions"; "crossOrigin": "crossOrigin"; "imageLoadFunction": "imageLoadFunction"; "params": "params"; "resolutions": "resolutions"; "wrapX": "wrapX"; }, { "imageLoadStart": "imageLoadStart"; "imageLoadEnd": "imageLoadEnd"; "imageLoadError": "imageLoadError"; }, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VhcmNnaXNyZXN0LmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJpbWFnZWFyY2dpc3Jlc3QuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgSW1hZ2VBcmNHSVNSZXN0IGZyb20gJ29sL3NvdXJjZS9JbWFnZUFyY0dJU1Jlc3QnO1xuaW1wb3J0IHsgTGF5ZXJJbWFnZUNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcmltYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvamVjdGlvbkxpa2UgfSBmcm9tICdvbC9wcm9qJztcbmltcG9ydCB7IEF0dHJpYnV0aW9uTGlrZSB9IGZyb20gJ29sL3NvdXJjZS9Tb3VyY2UnO1xuaW1wb3J0IHsgTG9hZEZ1bmN0aW9uIH0gZnJvbSAnb2wvSW1hZ2UnO1xuaW1wb3J0IHsgSW1hZ2VTb3VyY2VFdmVudCB9IGZyb20gJ29sL3NvdXJjZS9JbWFnZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTb3VyY2VJbWFnZUFyY0dJU1Jlc3RDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gICAgaW5zdGFuY2U6IEltYWdlQXJjR0lTUmVzdDtcbiAgICBwcm9qZWN0aW9uOiBQcm9qZWN0aW9uTGlrZSB8IHN0cmluZztcbiAgICB1cmw6IHN0cmluZztcbiAgICBhdHRyaWJ1dGlvbnM6IEF0dHJpYnV0aW9uTGlrZTtcbiAgICBjcm9zc09yaWdpbj86IHN0cmluZztcbiAgICBpbWFnZUxvYWRGdW5jdGlvbj86IExvYWRGdW5jdGlvbjtcbiAgICBwYXJhbXM/OiB7XG4gICAgICAgIFtrOiBzdHJpbmddOiBhbnk7XG4gICAgfTtcbiAgICByYXRpbzogbnVtYmVyO1xuICAgIHJlc29sdXRpb25zPzogbnVtYmVyW107XG4gICAgd3JhcFg/OiBib29sZWFuO1xuICAgIGltYWdlTG9hZFN0YXJ0OiBFdmVudEVtaXR0ZXI8SW1hZ2VTb3VyY2VFdmVudD47XG4gICAgaW1hZ2VMb2FkRW5kOiBFdmVudEVtaXR0ZXI8SW1hZ2VTb3VyY2VFdmVudD47XG4gICAgaW1hZ2VMb2FkRXJyb3I6IEV2ZW50RW1pdHRlcjxJbWFnZVNvdXJjZUV2ZW50PjtcbiAgICBjb25zdHJ1Y3RvcihsYXllcjogTGF5ZXJJbWFnZUNvbXBvbmVudCk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcbn1cbiJdfQ==