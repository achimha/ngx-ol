import { OnDestroy, OnInit, EventEmitter } from '@angular/core';
import { MapComponent } from '../map.component';
import { Modify } from 'ol/interaction';
import { Collection, Feature } from 'ol';
import { Style } from 'ol/style';
import { Vector } from 'ol/source';
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
    modifyEnd: EventEmitter<any>;
    modifyStart: EventEmitter<any>;
    olChange: EventEmitter<any>;
    olChangeActive: EventEmitter<any>;
    propertyChange: EventEmitter<any>;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ModifyInteractionComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ModifyInteractionComponent, "aol-interaction-modify", never, { "condition": "condition"; "deleteCondition": "deleteCondition"; "pixelTolerance": "pixelTolerance"; "style": "style"; "features": "features"; "wrapX": "wrapX"; "source": "source"; }, { "modifyEnd": "modifyEnd"; "modifyStart": "modifyStart"; "olChange": "olChange"; "olChangeActive": "olChangeActive"; "propertyChange": "propertyChange"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kaWZ5LmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJtb2RpZnkuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95LCBPbkluaXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb2RpZnkgfSBmcm9tICdvbC9pbnRlcmFjdGlvbic7XG5pbXBvcnQgeyBDb2xsZWN0aW9uLCBGZWF0dXJlIH0gZnJvbSAnb2wnO1xuaW1wb3J0IHsgU3R5bGUgfSBmcm9tICdvbC9zdHlsZSc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICdvbC9zb3VyY2UnO1xuaW1wb3J0IHsgU3R5bGVGdW5jdGlvbiB9IGZyb20gJ29sL3N0eWxlL1N0eWxlJztcbmltcG9ydCB7IENvbmRpdGlvbiB9IGZyb20gJ29sL2V2ZW50cy9jb25kaXRpb24nO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTW9kaWZ5SW50ZXJhY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBtYXA7XG4gICAgaW5zdGFuY2U6IE1vZGlmeTtcbiAgICBjb25kaXRpb24/OiBDb25kaXRpb247XG4gICAgZGVsZXRlQ29uZGl0aW9uPzogQ29uZGl0aW9uO1xuICAgIHBpeGVsVG9sZXJhbmNlPzogbnVtYmVyO1xuICAgIHN0eWxlPzogU3R5bGUgfCBTdHlsZVtdIHwgU3R5bGVGdW5jdGlvbjtcbiAgICBmZWF0dXJlczogQ29sbGVjdGlvbjxGZWF0dXJlPjtcbiAgICB3cmFwWD86IGJvb2xlYW47XG4gICAgc291cmNlPzogVmVjdG9yO1xuICAgIG1vZGlmeUVuZDogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgbW9kaWZ5U3RhcnQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIG9sQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBvbENoYW5nZUFjdGl2ZTogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgcHJvcGVydHlDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIGNvbnN0cnVjdG9yKG1hcDogTWFwQ29tcG9uZW50KTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=