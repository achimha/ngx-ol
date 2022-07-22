import { OnDestroy, OnInit } from '@angular/core';
import { FullScreen } from 'ol/control';
import { MapComponent } from '../map.component';
import * as ɵngcc0 from '@angular/core';
export declare class ControlFullScreenComponent implements OnInit, OnDestroy {
    private map;
    instance: FullScreen;
    className: string;
    label: string;
    labelActive: string;
    tipLabel: string;
    keys: boolean;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ControlFullScreenComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ControlFullScreenComponent, "aol-control-fullscreen", never, { "className": "className"; "label": "label"; "labelActive": "labelActive"; "tipLabel": "tipLabel"; "keys": "keys"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=fullscreen.component.d.ts.map