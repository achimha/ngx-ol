import { OnDestroy, OnInit, EventEmitter } from '@angular/core';
import { MapComponent } from '../map.component';
import { Draw } from 'ol/interaction';
import { Collection, Feature } from 'ol';
import { Vector } from 'ol/source';
import GeometryType from 'ol/geom/GeometryType';
import { Style } from 'ol/style';
import { GeometryFunction } from 'ol/interaction/Draw';
import { StyleFunction } from 'ol/style/Style';
import { Condition } from 'ol/events/condition';
import * as ɵngcc0 from '@angular/core';
export declare class DrawInteractionComponent implements OnInit, OnDestroy {
    private map;
    instance: Draw;
    clickTolerance?: number;
    features?: Collection<Feature>;
    source?: Vector;
    snapTolerance?: number;
    type: GeometryType;
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
    olChange: EventEmitter<any>;
    olChangeActive: EventEmitter<any>;
    drawEnd: EventEmitter<any>;
    drawStart: EventEmitter<any>;
    propertyChange: EventEmitter<any>;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DrawInteractionComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DrawInteractionComponent, "aol-interaction-draw", never, { "clickTolerance": "clickTolerance"; "features": "features"; "source": "source"; "snapTolerance": "snapTolerance"; "type": "type"; "maxPoints": "maxPoints"; "minPoints": "minPoints"; "finishCondition": "finishCondition"; "style": "style"; "geometryFunction": "geometryFunction"; "geometryName": "geometryName"; "condition": "condition"; "freehandCondition": "freehandCondition"; "freehand": "freehand"; "wrapX": "wrapX"; }, { "olChange": "olChange"; "olChangeActive": "olChangeActive"; "drawEnd": "drawEnd"; "drawStart": "drawStart"; "propertyChange": "propertyChange"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhdy5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiZHJhdy5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSwgT25Jbml0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHJhdyB9IGZyb20gJ29sL2ludGVyYWN0aW9uJztcbmltcG9ydCB7IENvbGxlY3Rpb24sIEZlYXR1cmUgfSBmcm9tICdvbCc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICdvbC9zb3VyY2UnO1xuaW1wb3J0IEdlb21ldHJ5VHlwZSBmcm9tICdvbC9nZW9tL0dlb21ldHJ5VHlwZSc7XG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gJ29sL3N0eWxlJztcbmltcG9ydCB7IEdlb21ldHJ5RnVuY3Rpb24gfSBmcm9tICdvbC9pbnRlcmFjdGlvbi9EcmF3JztcbmltcG9ydCB7IFN0eWxlRnVuY3Rpb24gfSBmcm9tICdvbC9zdHlsZS9TdHlsZSc7XG5pbXBvcnQgeyBDb25kaXRpb24gfSBmcm9tICdvbC9ldmVudHMvY29uZGl0aW9uJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIERyYXdJbnRlcmFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIG1hcDtcbiAgICBpbnN0YW5jZTogRHJhdztcbiAgICBjbGlja1RvbGVyYW5jZT86IG51bWJlcjtcbiAgICBmZWF0dXJlcz86IENvbGxlY3Rpb248RmVhdHVyZT47XG4gICAgc291cmNlPzogVmVjdG9yO1xuICAgIHNuYXBUb2xlcmFuY2U/OiBudW1iZXI7XG4gICAgdHlwZTogR2VvbWV0cnlUeXBlO1xuICAgIG1heFBvaW50cz86IG51bWJlcjtcbiAgICBtaW5Qb2ludHM/OiBudW1iZXI7XG4gICAgZmluaXNoQ29uZGl0aW9uPzogQ29uZGl0aW9uO1xuICAgIHN0eWxlPzogU3R5bGUgfCBTdHlsZVtdIHwgU3R5bGVGdW5jdGlvbjtcbiAgICBnZW9tZXRyeUZ1bmN0aW9uPzogR2VvbWV0cnlGdW5jdGlvbjtcbiAgICBnZW9tZXRyeU5hbWU/OiBzdHJpbmc7XG4gICAgY29uZGl0aW9uPzogQ29uZGl0aW9uO1xuICAgIGZyZWVoYW5kQ29uZGl0aW9uPzogQ29uZGl0aW9uO1xuICAgIGZyZWVoYW5kPzogYm9vbGVhbjtcbiAgICB3cmFwWD86IGJvb2xlYW47XG4gICAgb2xDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIG9sQ2hhbmdlQWN0aXZlOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBkcmF3RW5kOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBkcmF3U3RhcnQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIHByb3BlcnR5Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBjb25zdHJ1Y3RvcihtYXA6IE1hcENvbXBvbmVudCk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19