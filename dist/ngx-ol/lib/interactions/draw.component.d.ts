import { OnDestroy, OnInit, EventEmitter } from '@angular/core';
import { MapComponent } from '../map.component';
import { Draw } from 'ol/interaction';
import { Collection, Feature } from 'ol';
import { Vector } from 'ol/source';
import { Style } from 'ol/style';
import { DrawEvent, GeometryFunction } from 'ol/interaction/Draw';
import { StyleFunction } from 'ol/style/Style';
import { Condition } from 'ol/events/condition';
import { Type } from 'ol/geom/Geometry';
import * as ɵngcc0 from '@angular/core';
export declare class DrawInteractionComponent implements OnInit, OnDestroy {
    private map;
    instance: Draw;
    clickTolerance?: number;
    features?: Collection<Feature>;
    source?: Vector;
    snapTolerance?: number;
    type: Type;
    maxPoints?: number;
    minPoints?: number;
    finishCondition?: Condition;
    style?: Style | Style[] | StyleFunction;
    geometryFunction?: GeometryFunction;
    geometryName?: string;
    condition?: Condition;
    freehandCondition?: Condition;
    freehand?: boolean;
    wrapX?: boolean;
    olChange: EventEmitter<DrawEvent>;
    olChangeActive: EventEmitter<DrawEvent>;
    drawEnd: EventEmitter<DrawEvent>;
    drawStart: EventEmitter<DrawEvent>;
    propertyChange: EventEmitter<DrawEvent>;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DrawInteractionComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DrawInteractionComponent, "aol-interaction-draw", never, { "clickTolerance": "clickTolerance"; "features": "features"; "source": "source"; "snapTolerance": "snapTolerance"; "type": "type"; "maxPoints": "maxPoints"; "minPoints": "minPoints"; "finishCondition": "finishCondition"; "style": "style"; "geometryFunction": "geometryFunction"; "geometryName": "geometryName"; "condition": "condition"; "freehandCondition": "freehandCondition"; "freehand": "freehand"; "wrapX": "wrapX"; }, { "olChange": "olChange"; "olChangeActive": "olChangeActive"; "drawEnd": "drawEnd"; "drawStart": "drawStart"; "propertyChange": "propertyChange"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhdy5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiZHJhdy5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSwgT25Jbml0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHJhdyB9IGZyb20gJ29sL2ludGVyYWN0aW9uJztcbmltcG9ydCB7IENvbGxlY3Rpb24sIEZlYXR1cmUgfSBmcm9tICdvbCc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICdvbC9zb3VyY2UnO1xuaW1wb3J0IHsgU3R5bGUgfSBmcm9tICdvbC9zdHlsZSc7XG5pbXBvcnQgeyBEcmF3RXZlbnQsIEdlb21ldHJ5RnVuY3Rpb24gfSBmcm9tICdvbC9pbnRlcmFjdGlvbi9EcmF3JztcbmltcG9ydCB7IFN0eWxlRnVuY3Rpb24gfSBmcm9tICdvbC9zdHlsZS9TdHlsZSc7XG5pbXBvcnQgeyBDb25kaXRpb24gfSBmcm9tICdvbC9ldmVudHMvY29uZGl0aW9uJztcbmltcG9ydCB7IFR5cGUgfSBmcm9tICdvbC9nZW9tL0dlb21ldHJ5JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIERyYXdJbnRlcmFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIG1hcDtcbiAgICBpbnN0YW5jZTogRHJhdztcbiAgICBjbGlja1RvbGVyYW5jZT86IG51bWJlcjtcbiAgICBmZWF0dXJlcz86IENvbGxlY3Rpb248RmVhdHVyZT47XG4gICAgc291cmNlPzogVmVjdG9yO1xuICAgIHNuYXBUb2xlcmFuY2U/OiBudW1iZXI7XG4gICAgdHlwZTogVHlwZTtcbiAgICBtYXhQb2ludHM/OiBudW1iZXI7XG4gICAgbWluUG9pbnRzPzogbnVtYmVyO1xuICAgIGZpbmlzaENvbmRpdGlvbj86IENvbmRpdGlvbjtcbiAgICBzdHlsZT86IFN0eWxlIHwgU3R5bGVbXSB8IFN0eWxlRnVuY3Rpb247XG4gICAgZ2VvbWV0cnlGdW5jdGlvbj86IEdlb21ldHJ5RnVuY3Rpb247XG4gICAgZ2VvbWV0cnlOYW1lPzogc3RyaW5nO1xuICAgIGNvbmRpdGlvbj86IENvbmRpdGlvbjtcbiAgICBmcmVlaGFuZENvbmRpdGlvbj86IENvbmRpdGlvbjtcbiAgICBmcmVlaGFuZD86IGJvb2xlYW47XG4gICAgd3JhcFg/OiBib29sZWFuO1xuICAgIG9sQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RHJhd0V2ZW50PjtcbiAgICBvbENoYW5nZUFjdGl2ZTogRXZlbnRFbWl0dGVyPERyYXdFdmVudD47XG4gICAgZHJhd0VuZDogRXZlbnRFbWl0dGVyPERyYXdFdmVudD47XG4gICAgZHJhd1N0YXJ0OiBFdmVudEVtaXR0ZXI8RHJhd0V2ZW50PjtcbiAgICBwcm9wZXJ0eUNoYW5nZTogRXZlbnRFbWl0dGVyPERyYXdFdmVudD47XG4gICAgY29uc3RydWN0b3IobWFwOiBNYXBDb21wb25lbnQpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==