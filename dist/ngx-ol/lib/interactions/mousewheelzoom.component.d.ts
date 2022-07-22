import { OnDestroy, OnInit } from '@angular/core';
import { MouseWheelZoom } from 'ol/interaction';
import { MapComponent } from '../map.component';
import * as ɵngcc0 from '@angular/core';
export declare class MouseWheelZoomInteractionComponent implements OnInit, OnDestroy {
    private map;
    instance: MouseWheelZoom;
    duration: number;
    timeout: number;
    useAnchor: boolean;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MouseWheelZoomInteractionComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MouseWheelZoomInteractionComponent, "aol-interaction-mousewheelzoom", never, { "duration": "duration"; "timeout": "timeout"; "useAnchor": "useAnchor"; }, {}, never, never>;
}

//# sourceMappingURL=mousewheelzoom.component.d.ts.map