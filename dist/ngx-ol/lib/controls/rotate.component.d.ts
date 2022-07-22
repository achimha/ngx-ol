import { OnDestroy, OnInit } from '@angular/core';
import { Rotate } from 'ol/control';
import { MapComponent } from '../map.component';
import * as ɵngcc0 from '@angular/core';
export declare class ControlRotateComponent implements OnInit, OnDestroy {
    private map;
    instance: Rotate;
    className: string;
    label: string;
    tipLabel: string;
    duration: number;
    autoHide: boolean;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ControlRotateComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ControlRotateComponent, "aol-control-rotate", never, { "className": "className"; "label": "label"; "tipLabel": "tipLabel"; "duration": "duration"; "autoHide": "autoHide"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=rotate.component.d.ts.map