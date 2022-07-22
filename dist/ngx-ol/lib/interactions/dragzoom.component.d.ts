import { OnDestroy, OnInit } from '@angular/core';
import { DragZoom } from 'ol/interaction';
import { MapComponent } from '../map.component';
import { Condition } from 'ol/events/condition';
import * as ɵngcc0 from '@angular/core';
export declare class DragZoomInteractionComponent implements OnInit, OnDestroy {
    private map;
    instance: DragZoom;
    className: string;
    condition: Condition;
    duration: number;
    out: boolean;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DragZoomInteractionComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DragZoomInteractionComponent, "aol-interaction-dragzoom", never, { "className": "className"; "condition": "condition"; "duration": "duration"; "out": "out"; }, {}, never, never>;
}

//# sourceMappingURL=dragzoom.component.d.ts.map