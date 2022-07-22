import { OnDestroy, OnInit } from '@angular/core';
import { Interaction } from 'ol/interaction';
import { Collection } from 'ol';
import { MapComponent } from '../map.component';
import * as ɵngcc0 from '@angular/core';
export declare class DefaultInteractionComponent implements OnInit, OnDestroy {
    private map;
    instance: Collection<Interaction>;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DefaultInteractionComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DefaultInteractionComponent, "aol-interaction-default", never, {}, {}, never, never>;
}

//# sourceMappingURL=default.component.d.ts.map