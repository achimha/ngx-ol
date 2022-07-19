import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Attribution } from 'ol/control';
import { MapComponent } from '../map.component';
import * as ɵngcc0 from '@angular/core';
export declare class ControlAttributionComponent implements OnInit, OnDestroy {
    private map;
    private element;
    componentType: string;
    instance: Attribution;
    target: Element;
    collapsible: boolean;
    constructor(map: MapComponent, element: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ControlAttributionComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ControlAttributionComponent, "aol-control-attribution", never, { "collapsible": "collapsible"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRpb24uY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImF0dHJpYnV0aW9uLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXR0cmlidXRpb24gfSBmcm9tICdvbC9jb250cm9sJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ29udHJvbEF0dHJpYnV0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgbWFwO1xuICAgIHByaXZhdGUgZWxlbWVudDtcbiAgICBjb21wb25lbnRUeXBlOiBzdHJpbmc7XG4gICAgaW5zdGFuY2U6IEF0dHJpYnV0aW9uO1xuICAgIHRhcmdldDogRWxlbWVudDtcbiAgICBjb2xsYXBzaWJsZTogYm9vbGVhbjtcbiAgICBjb25zdHJ1Y3RvcihtYXA6IE1hcENvbXBvbmVudCwgZWxlbWVudDogRWxlbWVudFJlZik7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19