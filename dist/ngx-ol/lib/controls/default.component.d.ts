import { OnDestroy, OnInit } from '@angular/core';
import { Control } from 'ol/control';
import { Collection } from 'ol';
import { Options as AttributionOptions } from 'ol/control/Attribution';
import { Options as RotateOptions } from 'ol/control/Rotate';
import { Options as ZoomOptions } from 'ol/control/Zoom';
import { MapComponent } from '../map.component';
import * as ɵngcc0 from '@angular/core';
export declare class DefaultControlComponent implements OnInit, OnDestroy {
    private map;
    instance: Collection<Control>;
    attribution: boolean;
    attributionOptions: AttributionOptions;
    rotate: boolean;
    rotateOptions: RotateOptions;
    zoom: boolean;
    zoomOptions: ZoomOptions;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DefaultControlComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DefaultControlComponent, "aol-control-defaults", never, { "attribution": "attribution"; "attributionOptions": "attributionOptions"; "rotate": "rotate"; "rotateOptions": "rotateOptions"; "zoom": "zoom"; "zoomOptions": "zoomOptions"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiZGVmYXVsdC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2wgfSBmcm9tICdvbC9jb250cm9sJztcbmltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tICdvbCc7XG5pbXBvcnQgeyBPcHRpb25zIGFzIEF0dHJpYnV0aW9uT3B0aW9ucyB9IGZyb20gJ29sL2NvbnRyb2wvQXR0cmlidXRpb24nO1xuaW1wb3J0IHsgT3B0aW9ucyBhcyBSb3RhdGVPcHRpb25zIH0gZnJvbSAnb2wvY29udHJvbC9Sb3RhdGUnO1xuaW1wb3J0IHsgT3B0aW9ucyBhcyBab29tT3B0aW9ucyB9IGZyb20gJ29sL2NvbnRyb2wvWm9vbSc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIERlZmF1bHRDb250cm9sQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgbWFwO1xuICAgIGluc3RhbmNlOiBDb2xsZWN0aW9uPENvbnRyb2w+O1xuICAgIGF0dHJpYnV0aW9uOiBib29sZWFuO1xuICAgIGF0dHJpYnV0aW9uT3B0aW9uczogQXR0cmlidXRpb25PcHRpb25zO1xuICAgIHJvdGF0ZTogYm9vbGVhbjtcbiAgICByb3RhdGVPcHRpb25zOiBSb3RhdGVPcHRpb25zO1xuICAgIHpvb206IGJvb2xlYW47XG4gICAgem9vbU9wdGlvbnM6IFpvb21PcHRpb25zO1xuICAgIGNvbnN0cnVjdG9yKG1hcDogTWFwQ29tcG9uZW50KTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=