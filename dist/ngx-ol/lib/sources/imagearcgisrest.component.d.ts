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

//# sourceMappingURL=imagearcgisrest.component.d.ts.map