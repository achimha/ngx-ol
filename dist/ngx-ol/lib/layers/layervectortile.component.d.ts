import { OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { Feature } from 'ol';
import { Style } from 'ol/style';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';
import { StyleFunction } from 'ol/style/Style';
import * as ɵngcc0 from '@angular/core';
export declare class LayerVectorTileComponent extends LayerComponent implements OnInit, OnChanges {
    renderBuffer: number;
    renderMode: any | string;
    renderOrder: (feature1: Feature, feature2: Feature) => number;
    style: Style | Style[] | StyleFunction;
    updateWhileAnimating: boolean;
    updateWhileInteracting: boolean;
    visible: boolean;
    constructor(map: MapComponent, group?: LayerGroupComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LayerVectorTileComponent, [null, { optional: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<LayerVectorTileComponent, "aol-layer-vectortile", never, { "renderBuffer": "renderBuffer"; "renderMode": "renderMode"; "renderOrder": "renderOrder"; "style": "style"; "updateWhileAnimating": "updateWhileAnimating"; "updateWhileInteracting": "updateWhileInteracting"; "visible": "visible"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=layervectortile.component.d.ts.map