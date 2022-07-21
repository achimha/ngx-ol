import { OnDestroy, OnInit } from '@angular/core';
import { ZoomToExtent } from 'ol/control';
import { MapComponent } from '../map.component';
import { Extent } from 'ol/extent';
import * as ɵngcc0 from '@angular/core';
export declare class ControlZoomToExtentComponent implements OnInit, OnDestroy {
    private map;
    instance: ZoomToExtent;
    className: string;
    label: string | HTMLElement;
    tipLabel: string;
    extent: Extent;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ControlZoomToExtentComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ControlZoomToExtentComponent, "aol-control-zoomtoextent", never, { "className": "className"; "label": "label"; "tipLabel": "tipLabel"; "extent": "extent"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbXRvZXh0ZW50LmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJ6b29tdG9leHRlbnQuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFpvb21Ub0V4dGVudCB9IGZyb20gJ29sL2NvbnRyb2wnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFeHRlbnQgfSBmcm9tICdvbC9leHRlbnQnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ29udHJvbFpvb21Ub0V4dGVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIG1hcDtcbiAgICBpbnN0YW5jZTogWm9vbVRvRXh0ZW50O1xuICAgIGNsYXNzTmFtZTogc3RyaW5nO1xuICAgIGxhYmVsOiBzdHJpbmcgfCBIVE1MRWxlbWVudDtcbiAgICB0aXBMYWJlbDogc3RyaW5nO1xuICAgIGV4dGVudDogRXh0ZW50O1xuICAgIGNvbnN0cnVjdG9yKG1hcDogTWFwQ29tcG9uZW50KTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=