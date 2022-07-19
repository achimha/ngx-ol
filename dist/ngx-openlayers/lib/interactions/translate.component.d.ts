import { OnDestroy, OnInit, EventEmitter } from '@angular/core';
import { Translate } from 'ol/interaction';
import { Collection, Feature } from 'ol';
import { Layer } from 'ol/layer';
import { TranslateEvent } from 'ol/interaction/Translate';
import { MapComponent } from '../map.component';
import * as ɵngcc0 from '@angular/core';
export declare class TranslateInteractionComponent implements OnInit, OnDestroy {
    private map;
    instance: Translate;
    features?: Collection<Feature>;
    layers?: Layer[] | ((layer: Layer) => boolean);
    hitTolerance?: number;
    olChange: EventEmitter<TranslateEvent>;
    propertyChange: EventEmitter<TranslateEvent>;
    translateEnd: EventEmitter<TranslateEvent>;
    translateStart: EventEmitter<TranslateEvent>;
    translating: EventEmitter<TranslateEvent>;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TranslateInteractionComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TranslateInteractionComponent, "aol-interaction-translate", never, { "features": "features"; "layers": "layers"; "hitTolerance": "hitTolerance"; }, { "olChange": "olChange"; "propertyChange": "propertyChange"; "translateEnd": "translateEnd"; "translateStart": "translateStart"; "translating": "translating"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJ0cmFuc2xhdGUuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95LCBPbkluaXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlIH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xuaW1wb3J0IHsgQ29sbGVjdGlvbiwgRmVhdHVyZSB9IGZyb20gJ29sJztcbmltcG9ydCB7IExheWVyIH0gZnJvbSAnb2wvbGF5ZXInO1xuaW1wb3J0IHsgVHJhbnNsYXRlRXZlbnQgfSBmcm9tICdvbC9pbnRlcmFjdGlvbi9UcmFuc2xhdGUnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBUcmFuc2xhdGVJbnRlcmFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIG1hcDtcbiAgICBpbnN0YW5jZTogVHJhbnNsYXRlO1xuICAgIGZlYXR1cmVzPzogQ29sbGVjdGlvbjxGZWF0dXJlPjtcbiAgICBsYXllcnM/OiBMYXllcltdIHwgKChsYXllcjogTGF5ZXIpID0+IGJvb2xlYW4pO1xuICAgIGhpdFRvbGVyYW5jZT86IG51bWJlcjtcbiAgICBvbENoYW5nZTogRXZlbnRFbWl0dGVyPFRyYW5zbGF0ZUV2ZW50PjtcbiAgICBwcm9wZXJ0eUNoYW5nZTogRXZlbnRFbWl0dGVyPFRyYW5zbGF0ZUV2ZW50PjtcbiAgICB0cmFuc2xhdGVFbmQ6IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGVFdmVudD47XG4gICAgdHJhbnNsYXRlU3RhcnQ6IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGVFdmVudD47XG4gICAgdHJhbnNsYXRpbmc6IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGVFdmVudD47XG4gICAgY29uc3RydWN0b3IobWFwOiBNYXBDb21wb25lbnQpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==