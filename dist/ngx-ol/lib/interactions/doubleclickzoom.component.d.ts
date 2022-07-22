import { OnDestroy, OnInit } from '@angular/core';
import { DoubleClickZoom } from 'ol/interaction';
import { MapComponent } from '../map.component';
import * as ɵngcc0 from '@angular/core';
export declare class DoubleClickZoomInteractionComponent implements OnInit, OnDestroy {
    private map;
    instance: DoubleClickZoom;
    duration: number;
    delta: number;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DoubleClickZoomInteractionComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DoubleClickZoomInteractionComponent, "aol-interaction-doubleclickzoom", never, { "duration": "duration"; "delta": "delta"; }, {}, never, never>;
}

//# sourceMappingURL=doubleclickzoom.component.d.ts.map