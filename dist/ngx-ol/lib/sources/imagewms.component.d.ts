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

//# sourceMappingURL=imagewms.component.d.ts.map