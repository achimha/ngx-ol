import { AfterContentInit, EventEmitter } from '@angular/core';
import { Raster, Source } from 'ol/source';
import { Operation, RasterSourceEvent } from 'ol/source/Raster';
import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';
import * as ɵngcc0 from '@angular/core';
export declare class SourceRasterComponent extends SourceComponent implements AfterContentInit {
    instance: Raster;
    operation?: Operation;
    threads?: number;
    lib?: any;
    operationType?: 'pixel' | 'image';
    beforeOperations: EventEmitter<RasterSourceEvent>;
    afterOperations: EventEmitter<RasterSourceEvent>;
    sources: Source[];
    set source(sourceComponent: SourceComponent);
    constructor(layer: LayerImageComponent);
    ngAfterContentInit(): void;
    init(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SourceRasterComponent, [{ host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SourceRasterComponent, "aol-source-raster", never, { "operation": "operation"; "threads": "threads"; "lib": "lib"; "operationType": "operationType"; }, { "beforeOperations": "beforeOperations"; "afterOperations": "afterOperations"; }, ["source"], ["*"]>;
}

//# sourceMappingURL=raster.component.d.ts.map