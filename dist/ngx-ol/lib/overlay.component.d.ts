import { OnDestroy, OnInit } from '@angular/core';
import { MapComponent } from './map.component';
import Overlay, { PanOptions, Positioning } from 'ol/Overlay';
import { ContentComponent } from './content.component';
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
}
