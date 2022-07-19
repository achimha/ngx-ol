import { OnDestroy, OnInit } from '@angular/core';
import { FullScreen } from 'ol/control';
import { MapComponent } from '../map.component';
import * as ɵngcc0 from '@angular/core';
export declare class ControlFullScreenComponent implements OnInit, OnDestroy {
    private map;
    instance: FullScreen;
    className: string;
    label: string;
    labelActive: string;
    tipLabel: string;
    keys: boolean;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ControlFullScreenComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ControlFullScreenComponent, "aol-control-fullscreen", never, { "className": "className"; "label": "label"; "labelActive": "labelActive"; "tipLabel": "tipLabel"; "keys": "keys"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHNjcmVlbi5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiZnVsbHNjcmVlbi5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRnVsbFNjcmVlbiB9IGZyb20gJ29sL2NvbnRyb2wnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDb250cm9sRnVsbFNjcmVlbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIG1hcDtcbiAgICBpbnN0YW5jZTogRnVsbFNjcmVlbjtcbiAgICBjbGFzc05hbWU6IHN0cmluZztcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIGxhYmVsQWN0aXZlOiBzdHJpbmc7XG4gICAgdGlwTGFiZWw6IHN0cmluZztcbiAgICBrZXlzOiBib29sZWFuO1xuICAgIGNvbnN0cnVjdG9yKG1hcDogTWFwQ29tcG9uZW50KTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=