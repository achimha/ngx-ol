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

//# sourceMappingURL=draw.component.d.ts.map