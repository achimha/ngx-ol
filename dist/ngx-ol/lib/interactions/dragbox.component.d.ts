import { OnDestroy, OnInit } from '@angular/core';
import { DragBox } from 'ol/interaction';
import { MapComponent } from '../map.component';
import { Condition } from 'ol/events/condition';
import { EndCondition } from 'ol/interaction/DragBox';
import * as ɵngcc0 from '@angular/core';
export declare class DragBoxInteractionComponent implements OnInit, OnDestroy {
    private map;
    instance: DragBox;
    className: string;
    condition: Condition;
    boxEndCondition: EndCondition;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DragBoxInteractionComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DragBoxInteractionComponent, "aol-interaction-dragbox", never, { "className": "className"; "condition": "condition"; "boxEndCondition": "boxEndCondition"; }, {}, never, never>;
}

//# sourceMappingURL=dragbox.component.d.ts.map