import { OnDestroy, OnInit } from '@angular/core';
import { ZoomSlider } from 'ol/control';
import { MapComponent } from '../map.component';
import * as ɵngcc0 from '@angular/core';
export declare class ControlZoomSliderComponent implements OnInit, OnDestroy {
    private map;
    instance: ZoomSlider;
    className: string;
    duration: number;
    maxResolution: number;
    minResolution: number;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ControlZoomSliderComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ControlZoomSliderComponent, "aol-control-zoomslider", never, { "className": "className"; "duration": "duration"; "maxResolution": "maxResolution"; "minResolution": "minResolution"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbXNsaWRlci5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiem9vbXNsaWRlci5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFpvb21TbGlkZXIgfSBmcm9tICdvbC9jb250cm9sJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ29udHJvbFpvb21TbGlkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBtYXA7XG4gICAgaW5zdGFuY2U6IFpvb21TbGlkZXI7XG4gICAgY2xhc3NOYW1lOiBzdHJpbmc7XG4gICAgZHVyYXRpb246IG51bWJlcjtcbiAgICBtYXhSZXNvbHV0aW9uOiBudW1iZXI7XG4gICAgbWluUmVzb2x1dGlvbjogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKG1hcDogTWFwQ29tcG9uZW50KTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=