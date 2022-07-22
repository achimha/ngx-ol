import { OnDestroy, OnInit } from '@angular/core';
import { Group } from 'ol/layer';
import { LayerComponent } from './layer.component';
import { MapComponent } from '../map.component';
import * as ɵngcc0 from '@angular/core';
export declare class LayerGroupComponent extends LayerComponent implements OnInit, OnDestroy {
    instance: Group;
    constructor(map: MapComponent, group?: LayerGroupComponent);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LayerGroupComponent, [null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<LayerGroupComponent, "aol-layer-group", never, {}, {}, never, ["*"]>;
}

//# sourceMappingURL=layergroup.component.d.ts.map