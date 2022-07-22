import { EventEmitter, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { ImageStatic } from 'ol/source';
import { SourceComponent } from './source.component';
import { LayerImageComponent } from '../layers/layerimage.component';
import { ProjectionLike } from 'ol/proj';
import { Extent } from 'ol/extent';
import { AttributionLike } from 'ol/source/Source';
import { LoadFunction } from 'ol/Image';
import { Size } from 'ol/size';
import { ImageSourceEvent } from 'ol/source/Image';
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
    imageLoadStart: EventEmitter<ImageSourceEvent>;
    imageLoadEnd: EventEmitter<ImageSourceEvent>;
    imageLoadError: EventEmitter<ImageSourceEvent>;
    constructor(layer: LayerImageComponent);
    setLayerSource(): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SourceImageStaticComponent, [{ host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SourceImageStaticComponent, "aol-source-imagestatic", never, { "url": "url"; "projection": "projection"; "imageExtent": "imageExtent"; "attributions": "attributions"; "crossOrigin": "crossOrigin"; "imageLoadFunction": "imageLoadFunction"; "imageSize": "imageSize"; }, { "imageLoadStart": "imageLoadStart"; "imageLoadEnd": "imageLoadEnd"; "imageLoadError": "imageLoadError"; }, never, ["*"]>;
}

//# sourceMappingURL=imagestatic.component.d.ts.map