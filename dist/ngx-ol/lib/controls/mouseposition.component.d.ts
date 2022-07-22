import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import MousePosition from 'ol/control/MousePosition';
import { MapComponent } from '../map.component';
import { CoordinateFormat } from 'ol/coordinate';
import { ProjectionLike } from 'ol/proj';
import * as ɵngcc0 from '@angular/core';
export declare class ControlMousePositionComponent implements OnInit, OnDestroy {
    private map;
    private element;
    instance: MousePosition;
    coordinateFormat: CoordinateFormat;
    projection: ProjectionLike;
    target: HTMLElement;
    constructor(map: MapComponent, element: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ControlMousePositionComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ControlMousePositionComponent, "aol-control-mouseposition", never, { "coordinateFormat": "coordinateFormat"; "projection": "projection"; }, {}, never, never>;
}

//# sourceMappingURL=mouseposition.component.d.ts.map