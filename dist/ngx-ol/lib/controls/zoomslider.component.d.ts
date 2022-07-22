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

//# sourceMappingURL=zoomslider.component.d.ts.map