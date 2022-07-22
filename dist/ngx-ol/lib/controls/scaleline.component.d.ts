import { OnDestroy, OnInit } from '@angular/core';
import { ScaleLine } from 'ol/control';
import { MapComponent } from '../map.component';
import * as ɵngcc0 from '@angular/core';
export declare class ControlScaleLineComponent implements OnInit, OnDestroy {
    private map;
    instance: ScaleLine;
    units: string;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ControlScaleLineComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ControlScaleLineComponent, "aol-control-scaleline", never, { "units": "units"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=scaleline.component.d.ts.map