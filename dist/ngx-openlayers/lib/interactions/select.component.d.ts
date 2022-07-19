import { OnDestroy, OnInit, EventEmitter } from '@angular/core';
import { MapComponent } from '../map.component';
import { Select } from 'ol/interaction';
import { Layer } from 'ol/layer';
import { Style } from 'ol/style';
import { Collection, Feature } from 'ol';
import { FilterFunction } from 'ol/interaction/Select';
import { StyleFunction } from 'ol/style/Style';
import { Condition } from 'ol/events/condition';
import * as ɵngcc0 from '@angular/core';
export declare class SelectInteractionComponent implements OnInit, OnDestroy {
    private map;
    instance: Select;
    addCondition?: Condition;
    condition?: Condition;
    layers?: Layer[] | ((layer: Layer) => boolean);
    style?: Style | Style[] | StyleFunction;
    removeCondition?: Condition;
    toggleCondition?: Condition;
    multi?: boolean;
    features?: Collection<Feature>;
    filter?: FilterFunction;
    wrapX?: boolean;
    olChange: EventEmitter<any>;
    olSelect: EventEmitter<any>;
    propertyChange: EventEmitter<any>;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SelectInteractionComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SelectInteractionComponent, "aol-interaction-select", never, { "addCondition": "addCondition"; "condition": "condition"; "layers": "layers"; "style": "style"; "removeCondition": "removeCondition"; "toggleCondition": "toggleCondition"; "multi": "multi"; "features": "features"; "filter": "filter"; "wrapX": "wrapX"; }, { "olChange": "olChange"; "olSelect": "olSelect"; "propertyChange": "propertyChange"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJzZWxlY3QuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSwgT25Jbml0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xuaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICdvbC9sYXllcic7XG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gJ29sL3N0eWxlJztcbmltcG9ydCB7IENvbGxlY3Rpb24sIEZlYXR1cmUgfSBmcm9tICdvbCc7XG5pbXBvcnQgeyBGaWx0ZXJGdW5jdGlvbiB9IGZyb20gJ29sL2ludGVyYWN0aW9uL1NlbGVjdCc7XG5pbXBvcnQgeyBTdHlsZUZ1bmN0aW9uIH0gZnJvbSAnb2wvc3R5bGUvU3R5bGUnO1xuaW1wb3J0IHsgQ29uZGl0aW9uIH0gZnJvbSAnb2wvZXZlbnRzL2NvbmRpdGlvbic7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTZWxlY3RJbnRlcmFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIG1hcDtcbiAgICBpbnN0YW5jZTogU2VsZWN0O1xuICAgIGFkZENvbmRpdGlvbj86IENvbmRpdGlvbjtcbiAgICBjb25kaXRpb24/OiBDb25kaXRpb247XG4gICAgbGF5ZXJzPzogTGF5ZXJbXSB8ICgobGF5ZXI6IExheWVyKSA9PiBib29sZWFuKTtcbiAgICBzdHlsZT86IFN0eWxlIHwgU3R5bGVbXSB8IFN0eWxlRnVuY3Rpb247XG4gICAgcmVtb3ZlQ29uZGl0aW9uPzogQ29uZGl0aW9uO1xuICAgIHRvZ2dsZUNvbmRpdGlvbj86IENvbmRpdGlvbjtcbiAgICBtdWx0aT86IGJvb2xlYW47XG4gICAgZmVhdHVyZXM/OiBDb2xsZWN0aW9uPEZlYXR1cmU+O1xuICAgIGZpbHRlcj86IEZpbHRlckZ1bmN0aW9uO1xuICAgIHdyYXBYPzogYm9vbGVhbjtcbiAgICBvbENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgb2xTZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIHByb3BlcnR5Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBjb25zdHJ1Y3RvcihtYXA6IE1hcENvbXBvbmVudCk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19