import { OnDestroy, OnInit } from '@angular/core';
import { DragRotateAndZoom } from 'ol/interaction';
import { MapComponent } from '../map.component';
import { Condition } from 'ol/events/condition';
import * as ɵngcc0 from '@angular/core';
export declare class DragRotateAndZoomInteractionComponent implements OnInit, OnDestroy {
    private map;
    instance: DragRotateAndZoom;
    condition: Condition;
    duration: number;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DragRotateAndZoomInteractionComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DragRotateAndZoomInteractionComponent, "aol-interaction-dragrotateandzoom", never, { "condition": "condition"; "duration": "duration"; }, {}, never, never>;
}

//# sourceMappingURL=dragrotateandzoom.component.d.ts.map