import { OnDestroy, OnInit } from '@angular/core';
import { Control } from 'ol/control';
import { MapComponent } from '../map.component';
import { ContentComponent } from '../content.component';
import * as ɵngcc0 from '@angular/core';
export declare class ControlComponent implements OnInit, OnDestroy {
    private map;
    componentType: string;
    instance: Control;
    element: HTMLElement;
    content: ContentComponent;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ControlComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ControlComponent, "aol-control", never, {}, {}, ["content"], ["*"]>;
}

//# sourceMappingURL=control.component.d.ts.map