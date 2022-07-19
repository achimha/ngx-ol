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
    target: Element;
    constructor(map: MapComponent, element: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ControlMousePositionComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ControlMousePositionComponent, "aol-control-mouseposition", never, { "coordinateFormat": "coordinateFormat"; "projection": "projection"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW91c2Vwb3NpdGlvbi5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibW91c2Vwb3NpdGlvbi5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgTW91c2VQb3NpdGlvbiBmcm9tICdvbC9jb250cm9sL01vdXNlUG9zaXRpb24nO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb29yZGluYXRlRm9ybWF0IH0gZnJvbSAnb2wvY29vcmRpbmF0ZSc7XG5pbXBvcnQgeyBQcm9qZWN0aW9uTGlrZSB9IGZyb20gJ29sL3Byb2onO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ29udHJvbE1vdXNlUG9zaXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBtYXA7XG4gICAgcHJpdmF0ZSBlbGVtZW50O1xuICAgIGluc3RhbmNlOiBNb3VzZVBvc2l0aW9uO1xuICAgIGNvb3JkaW5hdGVGb3JtYXQ6IENvb3JkaW5hdGVGb3JtYXQ7XG4gICAgcHJvamVjdGlvbjogUHJvamVjdGlvbkxpa2U7XG4gICAgdGFyZ2V0OiBFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKG1hcDogTWFwQ29tcG9uZW50LCBlbGVtZW50OiBFbGVtZW50UmVmKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=