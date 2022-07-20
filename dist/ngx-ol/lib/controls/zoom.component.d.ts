import { OnDestroy, OnInit } from '@angular/core';
import { Zoom } from 'ol/control';
import { MapComponent } from '../map.component';
import * as ɵngcc0 from '@angular/core';
export declare class ControlZoomComponent implements OnInit, OnDestroy {
    private map;
    instance: Zoom;
    duration: number;
    zoomInLabel: string | HTMLElement;
    zoomOutLabel: string | HTMLElement;
    zoomInTipLabel: string;
    zoomOutTipLabel: string;
    delta: number;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ControlZoomComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ControlZoomComponent, "aol-control-zoom", never, { "duration": "duration"; "zoomInLabel": "zoomInLabel"; "zoomOutLabel": "zoomOutLabel"; "zoomInTipLabel": "zoomInTipLabel"; "zoomOutTipLabel": "zoomOutTipLabel"; "delta": "delta"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiem9vbS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBab29tIH0gZnJvbSAnb2wvY29udHJvbCc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENvbnRyb2xab29tQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgbWFwO1xuICAgIGluc3RhbmNlOiBab29tO1xuICAgIGR1cmF0aW9uOiBudW1iZXI7XG4gICAgem9vbUluTGFiZWw6IHN0cmluZyB8IEhUTUxFbGVtZW50O1xuICAgIHpvb21PdXRMYWJlbDogc3RyaW5nIHwgSFRNTEVsZW1lbnQ7XG4gICAgem9vbUluVGlwTGFiZWw6IHN0cmluZztcbiAgICB6b29tT3V0VGlwTGFiZWw6IHN0cmluZztcbiAgICBkZWx0YTogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKG1hcDogTWFwQ29tcG9uZW50KTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=