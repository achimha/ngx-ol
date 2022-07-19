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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2JveC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiZHJhZ2JveC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRHJhZ0JveCB9IGZyb20gJ29sL2ludGVyYWN0aW9uJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29uZGl0aW9uIH0gZnJvbSAnb2wvZXZlbnRzL2NvbmRpdGlvbic7XG5pbXBvcnQgeyBFbmRDb25kaXRpb24gfSBmcm9tICdvbC9pbnRlcmFjdGlvbi9EcmFnQm94JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIERyYWdCb3hJbnRlcmFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIG1hcDtcbiAgICBpbnN0YW5jZTogRHJhZ0JveDtcbiAgICBjbGFzc05hbWU6IHN0cmluZztcbiAgICBjb25kaXRpb246IENvbmRpdGlvbjtcbiAgICBib3hFbmRDb25kaXRpb246IEVuZENvbmRpdGlvbjtcbiAgICBjb25zdHJ1Y3RvcihtYXA6IE1hcENvbXBvbmVudCk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19