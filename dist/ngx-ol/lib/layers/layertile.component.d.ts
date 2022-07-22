import { OnDestroy, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';
import * as ɵngcc0 from '@angular/core';
export declare class LayerTileComponent extends LayerComponent implements OnInit, OnDestroy, OnChanges {
    preload: number;
    useInterimTilesOnError: boolean;
    constructor(map: MapComponent, group?: LayerGroupComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LayerTileComponent, [null, { optional: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<LayerTileComponent, "aol-layer-tile", never, { "preload": "preload"; "useInterimTilesOnError": "useInterimTilesOnError"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=layertile.component.d.ts.map