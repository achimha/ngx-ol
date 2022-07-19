import { OnDestroy, OnInit } from '@angular/core';
import { ScaleLine } from 'ol/control';
import { MapComponent } from '../map.component';
import * as ɵngcc0 from '@angular/core';
export declare class ControlScaleLineComponent implements OnInit, OnDestroy {
    private map;
    instance: ScaleLine;
    units: string;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ControlScaleLineComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ControlScaleLineComponent, "aol-control-scaleline", never, { "units": "units"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NhbGVsaW5lLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJzY2FsZWxpbmUuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTY2FsZUxpbmUgfSBmcm9tICdvbC9jb250cm9sJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ29udHJvbFNjYWxlTGluZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIG1hcDtcbiAgICBpbnN0YW5jZTogU2NhbGVMaW5lO1xuICAgIHVuaXRzOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IobWFwOiBNYXBDb21wb25lbnQpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==