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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsib3ZlcmxheS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IE92ZXJsYXksIHsgUGFuT3B0aW9ucywgUG9zaXRpb25pbmcgfSBmcm9tICdvbC9PdmVybGF5JztcbmltcG9ydCB7IENvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2NvbnRlbnQuY29tcG9uZW50JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE92ZXJsYXlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBtYXA7XG4gICAgY29tcG9uZW50VHlwZTogc3RyaW5nO1xuICAgIGluc3RhbmNlOiBPdmVybGF5O1xuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIGNvbnRlbnQ6IENvbnRlbnRDb21wb25lbnQ7XG4gICAgaWQ6IG51bWJlciB8IHN0cmluZztcbiAgICBvZmZzZXQ6IG51bWJlcltdO1xuICAgIHBvc2l0aW9uaW5nOiBQb3NpdGlvbmluZztcbiAgICBzdG9wRXZlbnQ6IGJvb2xlYW47XG4gICAgaW5zZXJ0Rmlyc3Q6IGJvb2xlYW47XG4gICAgYXV0b1BhbjogYm9vbGVhbjtcbiAgICBhdXRvUGFuQW5pbWF0aW9uOiBQYW5PcHRpb25zO1xuICAgIGF1dG9QYW5NYXJnaW46IG51bWJlcjtcbiAgICBjb25zdHJ1Y3RvcihtYXA6IE1hcENvbXBvbmVudCk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19