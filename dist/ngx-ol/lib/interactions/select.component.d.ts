import { OnDestroy, OnInit, EventEmitter } from '@angular/core';
import { MapComponent } from '../map.component';
import { Select } from 'ol/interaction';
import { Layer } from 'ol/layer';
import { Style } from 'ol/style';
import { Collection, Feature } from 'ol';
import { SelectEvent, FilterFunction } from 'ol/interaction/Select';
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
    olChange: EventEmitter<SelectEvent>;
    olSelect: EventEmitter<SelectEvent>;
    propertyChange: EventEmitter<SelectEvent>;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SelectInteractionComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SelectInteractionComponent, "aol-interaction-select", never, { "addCondition": "addCondition"; "condition": "condition"; "layers": "layers"; "style": "style"; "removeCondition": "removeCondition"; "toggleCondition": "toggleCondition"; "multi": "multi"; "features": "features"; "filter": "filter"; "wrapX": "wrapX"; }, { "olChange": "olChange"; "olSelect": "olSelect"; "propertyChange": "propertyChange"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJzZWxlY3QuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSwgT25Jbml0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xuaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICdvbC9sYXllcic7XG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gJ29sL3N0eWxlJztcbmltcG9ydCB7IENvbGxlY3Rpb24sIEZlYXR1cmUgfSBmcm9tICdvbCc7XG5pbXBvcnQgeyBTZWxlY3RFdmVudCwgRmlsdGVyRnVuY3Rpb24gfSBmcm9tICdvbC9pbnRlcmFjdGlvbi9TZWxlY3QnO1xuaW1wb3J0IHsgU3R5bGVGdW5jdGlvbiB9IGZyb20gJ29sL3N0eWxlL1N0eWxlJztcbmltcG9ydCB7IENvbmRpdGlvbiB9IGZyb20gJ29sL2V2ZW50cy9jb25kaXRpb24nO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU2VsZWN0SW50ZXJhY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBtYXA7XG4gICAgaW5zdGFuY2U6IFNlbGVjdDtcbiAgICBhZGRDb25kaXRpb24/OiBDb25kaXRpb247XG4gICAgY29uZGl0aW9uPzogQ29uZGl0aW9uO1xuICAgIGxheWVycz86IExheWVyW10gfCAoKGxheWVyOiBMYXllcikgPT4gYm9vbGVhbik7XG4gICAgc3R5bGU/OiBTdHlsZSB8IFN0eWxlW10gfCBTdHlsZUZ1bmN0aW9uO1xuICAgIHJlbW92ZUNvbmRpdGlvbj86IENvbmRpdGlvbjtcbiAgICB0b2dnbGVDb25kaXRpb24/OiBDb25kaXRpb247XG4gICAgbXVsdGk/OiBib29sZWFuO1xuICAgIGZlYXR1cmVzPzogQ29sbGVjdGlvbjxGZWF0dXJlPjtcbiAgICBmaWx0ZXI/OiBGaWx0ZXJGdW5jdGlvbjtcbiAgICB3cmFwWD86IGJvb2xlYW47XG4gICAgb2xDaGFuZ2U6IEV2ZW50RW1pdHRlcjxTZWxlY3RFdmVudD47XG4gICAgb2xTZWxlY3Q6IEV2ZW50RW1pdHRlcjxTZWxlY3RFdmVudD47XG4gICAgcHJvcGVydHlDaGFuZ2U6IEV2ZW50RW1pdHRlcjxTZWxlY3RFdmVudD47XG4gICAgY29uc3RydWN0b3IobWFwOiBNYXBDb21wb25lbnQpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==