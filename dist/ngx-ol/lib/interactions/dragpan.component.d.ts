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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ3Bhbi5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiZHJhZ3Bhbi5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERyYWdQYW4gfSBmcm9tICdvbC9pbnRlcmFjdGlvbic7XG5pbXBvcnQgS2luZXRpYyBmcm9tICdvbC9LaW5ldGljJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29uZGl0aW9uIH0gZnJvbSAnb2wvZXZlbnRzL2NvbmRpdGlvbic7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBEcmFnUGFuSW50ZXJhY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBtYXA7XG4gICAgaW5zdGFuY2U6IERyYWdQYW47XG4gICAgY29uZGl0aW9uOiBDb25kaXRpb247XG4gICAga2luZXRpYzogS2luZXRpYztcbiAgICBjb25zdHJ1Y3RvcihtYXA6IE1hcENvbXBvbmVudCk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19