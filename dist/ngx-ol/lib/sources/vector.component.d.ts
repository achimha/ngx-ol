import { OnInit } from '@angular/core';
import { Vector } from 'ol/source';
import Feature from 'ol/format/Feature';
import { LayerVectorComponent } from '../layers/layervector.component';
import { SourceComponent } from './source.component';
import { LoadingStrategy } from 'ol/source/Vector';
import * as ɵngcc0 from '@angular/core';
export declare class SourceVectorComponent extends SourceComponent implements OnInit {
    instance: Vector;
    overlaps: boolean;
    useSpatialIndex: boolean;
    wrapX: boolean;
    url: string;
    format: Feature;
    strategy: LoadingStrategy;
    constructor(layer: LayerVectorComponent);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SourceVectorComponent, [{ host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SourceVectorComponent, "aol-source-vector", never, { "overlaps": "overlaps"; "useSpatialIndex": "useSpatialIndex"; "wrapX": "wrapX"; "url": "url"; "format": "format"; "strategy": "strategy"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=vector.component.d.ts.map