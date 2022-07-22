import { OnDestroy, OnInit } from '@angular/core';
import { PinchZoom } from 'ol/interaction';
import { MapComponent } from '../map.component';
import * as ɵngcc0 from '@angular/core';
export declare class PinchZoomInteractionComponent implements OnInit, OnDestroy {
    private map;
    instance: PinchZoom;
    duration: number;
    constrainResolution: boolean;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PinchZoomInteractionComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PinchZoomInteractionComponent, "aol-interaction-pinchzoom", never, { "duration": "duration"; "constrainResolution": "constrainResolution"; }, {}, never, never>;
}

//# sourceMappingURL=pinchzoom.component.d.ts.map