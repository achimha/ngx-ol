import { OnDestroy, OnInit } from '@angular/core';
import { DragAndDrop } from 'ol/interaction';
import FeatureFormat from 'ol/format/Feature';
import { MapComponent } from '../map.component';
import { ProjectionLike } from 'ol/proj';
import * as ɵngcc0 from '@angular/core';
export declare class DragAndDropInteractionComponent implements OnInit, OnDestroy {
    private map;
    instance: DragAndDrop;
    formatConstructors: FeatureFormat[];
    projection: ProjectionLike;
    target: HTMLElement;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DragAndDropInteractionComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DragAndDropInteractionComponent, "aol-interaction-draganddrop", never, { "formatConstructors": "formatConstructors"; "projection": "projection"; "target": "target"; }, {}, never, never>;
}

//# sourceMappingURL=draganddrop.component.d.ts.map