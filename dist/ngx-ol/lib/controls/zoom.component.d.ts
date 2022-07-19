import { OnDestroy, OnInit } from '@angular/core';
import { Zoom } from 'ol/control';
import { MapComponent } from '../map.component';
import * as ɵngcc0 from '@angular/core';
export declare class ControlZoomComponent implements OnInit, OnDestroy {
    private map;
    instance: Zoom;
    duration: number;
    zoomInLabel: string | Node;
    zoomOutLabel: string | Node;
    zoomInTipLabel: string;
    zoomOutTipLabel: string;
    delta: number;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ControlZoomComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ControlZoomComponent, "aol-control-zoom", never, { "duration": "duration"; "zoomInLabel": "zoomInLabel"; "zoomOutLabel": "zoomOutLabel"; "zoomInTipLabel": "zoomInTipLabel"; "zoomOutTipLabel": "zoomOutTipLabel"; "delta": "delta"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiem9vbS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBab29tIH0gZnJvbSAnb2wvY29udHJvbCc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENvbnRyb2xab29tQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgbWFwO1xuICAgIGluc3RhbmNlOiBab29tO1xuICAgIGR1cmF0aW9uOiBudW1iZXI7XG4gICAgem9vbUluTGFiZWw6IHN0cmluZyB8IE5vZGU7XG4gICAgem9vbU91dExhYmVsOiBzdHJpbmcgfCBOb2RlO1xuICAgIHpvb21JblRpcExhYmVsOiBzdHJpbmc7XG4gICAgem9vbU91dFRpcExhYmVsOiBzdHJpbmc7XG4gICAgZGVsdGE6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3RvcihtYXA6IE1hcENvbXBvbmVudCk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19