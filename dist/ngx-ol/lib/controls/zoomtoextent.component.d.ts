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

//# sourceMappingURL=zoomtoextent.component.d.ts.map