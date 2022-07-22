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

//# sourceMappingURL=modify.component.d.ts.map