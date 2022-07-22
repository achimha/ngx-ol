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

//# sourceMappingURL=select.component.d.ts.map