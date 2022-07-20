import { AfterContentInit, EventEmitter } from '@angular/core';
import { Raster, Source } from 'ol/source';
import { Operation, RasterSourceEvent } from 'ol/source/Raster';
import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';
export declare class SourceRasterComponent extends SourceComponent implements AfterContentInit {
    instance: Raster;
    operation?: Operation;
    threads?: number;
    lib?: any;
    operationType?: 'pixel' | 'image';
    beforeOperations: EventEmitter<RasterSourceEvent>;
    afterOperations: EventEmitter<RasterSourceEvent>;
    sources: Source[];
    source: SourceComponent;
    constructor(layer: LayerImageComponent);
    ngAfterContentInit(): void;
    init(): void;
}
