import { OnDestroy, OnInit } from '@angular/core';
import { MapComponent } from './map.component';
import { Overlay, PanOptions } from 'ol';
import { ContentComponent } from './content.component';
import OverlayPositioning from 'ol/OverlayPositioning';
import * as ɵngcc0 from '@angular/core';
export declare class OverlayComponent implements OnInit, OnDestroy {
    private map;
    componentType: string;
    instance: Overlay;
    element: Element;
    content: ContentComponent;
    id: number | string;
    offset: number[];
    positioning: OverlayPositioning | string;
    stopEvent: boolean;
    insertFirst: boolean;
    autoPan: boolean;
    autoPanAnimation: PanOptions;
    autoPanMargin: number;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OverlayComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<OverlayComponent, "aol-overlay", never, { "id": "id"; "offset": "offset"; "positioning": "positioning"; "stopEvent": "stopEvent"; "insertFirst": "insertFirst"; "autoPan": "autoPan"; "autoPanAnimation": "autoPanAnimation"; "autoPanMargin": "autoPanMargin"; }, {}, ["content"], ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsib3ZlcmxheS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4vbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPdmVybGF5LCBQYW5PcHRpb25zIH0gZnJvbSAnb2wnO1xuaW1wb3J0IHsgQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IE92ZXJsYXlQb3NpdGlvbmluZyBmcm9tICdvbC9PdmVybGF5UG9zaXRpb25pbmcnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgT3ZlcmxheUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIG1hcDtcbiAgICBjb21wb25lbnRUeXBlOiBzdHJpbmc7XG4gICAgaW5zdGFuY2U6IE92ZXJsYXk7XG4gICAgZWxlbWVudDogRWxlbWVudDtcbiAgICBjb250ZW50OiBDb250ZW50Q29tcG9uZW50O1xuICAgIGlkOiBudW1iZXIgfCBzdHJpbmc7XG4gICAgb2Zmc2V0OiBudW1iZXJbXTtcbiAgICBwb3NpdGlvbmluZzogT3ZlcmxheVBvc2l0aW9uaW5nIHwgc3RyaW5nO1xuICAgIHN0b3BFdmVudDogYm9vbGVhbjtcbiAgICBpbnNlcnRGaXJzdDogYm9vbGVhbjtcbiAgICBhdXRvUGFuOiBib29sZWFuO1xuICAgIGF1dG9QYW5BbmltYXRpb246IFBhbk9wdGlvbnM7XG4gICAgYXV0b1Bhbk1hcmdpbjogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKG1hcDogTWFwQ29tcG9uZW50KTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=