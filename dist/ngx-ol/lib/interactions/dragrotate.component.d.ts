import { OnDestroy, OnInit } from '@angular/core';
import { DragRotate } from 'ol/interaction';
import { MapComponent } from '../map.component';
import { Condition } from 'ol/events/condition';
import * as ɵngcc0 from '@angular/core';
export declare class DragRotateInteractionComponent implements OnInit, OnDestroy {
    private map;
    instance: DragRotate;
    condition: Condition;
    duration: number;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DragRotateInteractionComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DragRotateInteractionComponent, "aol-interaction-dragrotate", never, { "condition": "condition"; "duration": "duration"; }, {}, never, never>;
}

//# sourceMappingURL=dragrotate.component.d.ts.map