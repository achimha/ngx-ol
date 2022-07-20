import { OnDestroy, OnInit, EventEmitter } from '@angular/core';
import { MapComponent } from '../map.component';
import { Modify } from 'ol/interaction';
import { Collection, Feature } from 'ol';
import { Style } from 'ol/style';
import { Vector } from 'ol/source';
import { ModifyEvent } from 'ol/interaction/Modify';
import { StyleFunction } from 'ol/style/Style';
import { Condition } from 'ol/events/condition';
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
}
