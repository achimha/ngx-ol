import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Attribution } from 'ol/control';
import { MapComponent } from '../map.component';
import * as ɵngcc0 from '@angular/core';
export declare class ControlAttributionComponent implements OnInit, OnDestroy {
    private map;
    private element;
    componentType: string;
    instance: Attribution;
    target: HTMLElement;
    collapsible: boolean;
    constructor(map: MapComponent, element: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ControlAttributionComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ControlAttributionComponent, "aol-control-attribution", never, { "collapsible": "collapsible"; }, {}, never, never>;
}

//# sourceMappingURL=attribution.component.d.ts.map