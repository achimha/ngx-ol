import { OnDestroy, OnInit } from '@angular/core';
import { Control } from 'ol/control';
import { MapComponent } from '../map.component';
import { ContentComponent } from '../content.component';
import * as ɵngcc0 from '@angular/core';
export declare class ControlComponent implements OnInit, OnDestroy {
    private map;
    componentType: string;
    instance: Control;
    element: HTMLElement;
    content: ContentComponent;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ControlComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ControlComponent, "aol-control", never, {}, {}, ["content"], ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiY29udHJvbC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2wgfSBmcm9tICdvbC9jb250cm9sJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRlbnQuY29tcG9uZW50JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENvbnRyb2xDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBtYXA7XG4gICAgY29tcG9uZW50VHlwZTogc3RyaW5nO1xuICAgIGluc3RhbmNlOiBDb250cm9sO1xuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIGNvbnRlbnQ6IENvbnRlbnRDb21wb25lbnQ7XG4gICAgY29uc3RydWN0b3IobWFwOiBNYXBDb21wb25lbnQpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==