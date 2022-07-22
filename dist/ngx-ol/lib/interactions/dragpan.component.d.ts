import { OnDestroy, OnInit } from '@angular/core';
import { DragPan } from 'ol/interaction';
import Kinetic from 'ol/Kinetic';
import { MapComponent } from '../map.component';
import { Condition } from 'ol/events/condition';
import * as ɵngcc0 from '@angular/core';
export declare class DragPanInteractionComponent implements OnInit, OnDestroy {
    private map;
    instance: DragPan;
    condition: Condition;
    kinetic: Kinetic;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DragPanInteractionComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DragPanInteractionComponent, "aol-interaction-dragpan", never, { "condition": "condition"; "kinetic": "kinetic"; }, {}, never, never>;
}

//# sourceMappingURL=dragpan.component.d.ts.map