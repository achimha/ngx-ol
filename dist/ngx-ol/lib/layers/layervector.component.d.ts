import { OnDestroy, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { MapComponent } from '../map.component';
import { Style } from 'ol/style';
import { StyleFunction } from 'ol/style/Style';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';
import * as ɵngcc0 from '@angular/core';
export declare class LayerVectorComponent extends LayerComponent implements OnInit, OnDestroy, OnChanges {
    renderBuffer: number;
    style: Style | Style[] | StyleFunction;
    updateWhileAnimating: boolean;
    updateWhileInteracting: boolean;
    constructor(map: MapComponent, group?: LayerGroupComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LayerVectorComponent, [null, { optional: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<LayerVectorComponent, "aol-layer-vector", never, { "renderBuffer": "renderBuffer"; "style": "style"; "updateWhileAnimating": "updateWhileAnimating"; "updateWhileInteracting": "updateWhileInteracting"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=layervector.component.d.ts.map