import { OnDestroy, OnInit } from '@angular/core';
import { MapComponent } from './map.component';
import Overlay, { PanOptions, Positioning } from 'ol/Overlay';
import { ContentComponent } from './content.component';
import * as ɵngcc0 from '@angular/core';
export declare class OverlayComponent implements OnInit, OnDestroy {
    private map;
    componentType: string;
    instance: Overlay;
    element: HTMLElement;
    content: ContentComponent;
    id: number | string;
    offset: number[];
    positioning: Positioning;
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

//# sourceMappingURL=overlay.component.d.ts.map