import { OnDestroy, OnInit, EventEmitter } from '@angular/core';
import { MapComponent } from '../map.component';
import { Modify } from 'ol/interaction';
import { Collection, Feature } from 'ol';
import { Style } from 'ol/style';
import { Vector } from 'ol/source';
import { ModifyEvent } from 'ol/interaction/Modify';
import { StyleFunction } from 'ol/style/Style';
import { Condition } from 'ol/events/condition';
import * as ɵngcc0 from '@angular/core';
export declare class ModifyInteractionComponent implements OnInit, OnDestroy {
    private map;
    instance: Modify;
    condition?: Condition;
    deleteCondition?: Condition;
    pixelTolerance?: number;
    style?: Style | Style[] | StyleFunction;
    features: Collection<Feature>;
    wrapX?: boolean;
    source?: Vector;
    modifyEnd: EventEmitter<ModifyEvent>;
    modifyStart: EventEmitter<ModifyEvent>;
    olChange: EventEmitter<ModifyEvent>;
    olChangeActive: EventEmitter<ModifyEvent>;
    propertyChange: EventEmitter<ModifyEvent>;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ModifyInteractionComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ModifyInteractionComponent, "aol-interaction-modify", never, { "condition": "condition"; "deleteCondition": "deleteCondition"; "pixelTolerance": "pixelTolerance"; "style": "style"; "features": "features"; "wrapX": "wrapX"; "source": "source"; }, { "modifyEnd": "modifyEnd"; "modifyStart": "modifyStart"; "olChange": "olChange"; "olChangeActive": "olChangeActive"; "propertyChange": "propertyChange"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kaWZ5LmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJtb2RpZnkuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkRlc3Ryb3ksIE9uSW5pdCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGlmeSB9IGZyb20gJ29sL2ludGVyYWN0aW9uJztcbmltcG9ydCB7IENvbGxlY3Rpb24sIEZlYXR1cmUgfSBmcm9tICdvbCc7XG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gJ29sL3N0eWxlJztcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJ29sL3NvdXJjZSc7XG5pbXBvcnQgeyBNb2RpZnlFdmVudCB9IGZyb20gJ29sL2ludGVyYWN0aW9uL01vZGlmeSc7XG5pbXBvcnQgeyBTdHlsZUZ1bmN0aW9uIH0gZnJvbSAnb2wvc3R5bGUvU3R5bGUnO1xuaW1wb3J0IHsgQ29uZGl0aW9uIH0gZnJvbSAnb2wvZXZlbnRzL2NvbmRpdGlvbic7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBNb2RpZnlJbnRlcmFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIG1hcDtcbiAgICBpbnN0YW5jZTogTW9kaWZ5O1xuICAgIGNvbmRpdGlvbj86IENvbmRpdGlvbjtcbiAgICBkZWxldGVDb25kaXRpb24/OiBDb25kaXRpb247XG4gICAgcGl4ZWxUb2xlcmFuY2U/OiBudW1iZXI7XG4gICAgc3R5bGU/OiBTdHlsZSB8IFN0eWxlW10gfCBTdHlsZUZ1bmN0aW9uO1xuICAgIGZlYXR1cmVzOiBDb2xsZWN0aW9uPEZlYXR1cmU+O1xuICAgIHdyYXBYPzogYm9vbGVhbjtcbiAgICBzb3VyY2U/OiBWZWN0b3I7XG4gICAgbW9kaWZ5RW5kOiBFdmVudEVtaXR0ZXI8TW9kaWZ5RXZlbnQ+O1xuICAgIG1vZGlmeVN0YXJ0OiBFdmVudEVtaXR0ZXI8TW9kaWZ5RXZlbnQ+O1xuICAgIG9sQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TW9kaWZ5RXZlbnQ+O1xuICAgIG9sQ2hhbmdlQWN0aXZlOiBFdmVudEVtaXR0ZXI8TW9kaWZ5RXZlbnQ+O1xuICAgIHByb3BlcnR5Q2hhbmdlOiBFdmVudEVtaXR0ZXI8TW9kaWZ5RXZlbnQ+O1xuICAgIGNvbnN0cnVjdG9yKG1hcDogTWFwQ29tcG9uZW50KTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=