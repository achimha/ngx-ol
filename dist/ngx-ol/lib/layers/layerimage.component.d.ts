import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';
import { Extent } from 'ol/extent';
import * as ɵngcc0 from '@angular/core';
export declare class LayerImageComponent extends LayerComponent implements OnInit, OnChanges {
    opacity: number;
    visible: boolean;
    extent: Extent;
    minResolution: number;
    maxResolution: number;
    zIndex: number;
    constructor(map: MapComponent, group?: LayerGroupComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LayerImageComponent, [null, { optional: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<LayerImageComponent, "aol-layer-image", never, { "opacity": "opacity"; "visible": "visible"; "extent": "extent"; "minResolution": "minResolution"; "maxResolution": "maxResolution"; "zIndex": "zIndex"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=layerimage.component.d.ts.map