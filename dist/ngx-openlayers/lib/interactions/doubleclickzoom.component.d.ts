import { OnDestroy, OnInit } from '@angular/core';
import { DoubleClickZoom } from 'ol/interaction';
import { MapComponent } from '../map.component';
import * as ɵngcc0 from '@angular/core';
export declare class DoubleClickZoomInteractionComponent implements OnInit, OnDestroy {
    private map;
    instance: DoubleClickZoom;
    duration: number;
    delta: number;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DoubleClickZoomInteractionComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DoubleClickZoomInteractionComponent, "aol-interaction-doubleclickzoom", never, { "duration": "duration"; "delta": "delta"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG91YmxlY2xpY2t6b29tLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJkb3VibGVjbGlja3pvb20uY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvdWJsZUNsaWNrWm9vbSB9IGZyb20gJ29sL2ludGVyYWN0aW9uJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRG91YmxlQ2xpY2tab29tSW50ZXJhY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBtYXA7XG4gICAgaW5zdGFuY2U6IERvdWJsZUNsaWNrWm9vbTtcbiAgICBkdXJhdGlvbjogbnVtYmVyO1xuICAgIGRlbHRhOiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IobWFwOiBNYXBDb21wb25lbnQpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==