import { OnInit, ElementRef, EventEmitter, AfterViewInit, SimpleChanges, OnChanges } from '@angular/core';
import { Map } from 'ol';
import MapBrowserEvent from 'ol/MapBrowserEvent';
import MapEvent from 'ol/MapEvent';
import { ObjectEvent } from 'ol/Object';
import RenderEvent from 'ol/render/Event';
import { Control } from 'ol/control';
import { Interaction } from 'ol/interaction';
import * as ɵngcc0 from '@angular/core';
export declare class MapComponent implements OnInit, AfterViewInit, OnChanges {
    private host;
    instance: Map;
    componentType: string;
    width: string;
    height: string;
    pixelRatio: number;
    keyboardEventTarget: HTMLElement | string;
    loadTilesWhileAnimating: boolean;
    loadTilesWhileInteracting: boolean;
    logo: string | boolean;
    renderer: 'canvas' | 'webgl';
    olClick: EventEmitter<MapBrowserEvent<MouseEvent>>;
    dblClick: EventEmitter<MapBrowserEvent<MouseEvent>>;
    moveStart: EventEmitter<MapEvent>;
    moveEnd: EventEmitter<MapEvent>;
    pointerDrag: EventEmitter<MapBrowserEvent<MouseEvent>>;
    pointerMove: EventEmitter<MapBrowserEvent<MouseEvent>>;
    onpostrender: EventEmitter<RenderEvent>;
    postRender: EventEmitter<MapEvent>;
    onprerender: EventEmitter<RenderEvent>;
    propertyChange: EventEmitter<ObjectEvent>;
    singleClick: EventEmitter<MapBrowserEvent<MouseEvent>>;
    controls: Control[];
    interactions: Interaction[];
    constructor(host: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MapComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MapComponent, "aol-map", never, { "width": "width"; "height": "height"; "pixelRatio": "pixelRatio"; "keyboardEventTarget": "keyboardEventTarget"; "loadTilesWhileAnimating": "loadTilesWhileAnimating"; "loadTilesWhileInteracting": "loadTilesWhileInteracting"; "logo": "logo"; "renderer": "renderer"; }, { "olClick": "olClick"; "dblClick": "dblClick"; "moveStart": "moveStart"; "moveEnd": "moveEnd"; "pointerDrag": "pointerDrag"; "pointerMove": "pointerMove"; "onpostrender": "onpostrender"; "postRender": "postRender"; "onprerender": "onprerender"; "propertyChange": "propertyChange"; "singleClick": "singleClick"; }, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJtYXAuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBBZnRlclZpZXdJbml0LCBTaW1wbGVDaGFuZ2VzLCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hcCB9IGZyb20gJ29sJztcbmltcG9ydCBNYXBCcm93c2VyRXZlbnQgZnJvbSAnb2wvTWFwQnJvd3NlckV2ZW50JztcbmltcG9ydCBNYXBFdmVudCBmcm9tICdvbC9NYXBFdmVudCc7XG5pbXBvcnQgeyBPYmplY3RFdmVudCB9IGZyb20gJ29sL09iamVjdCc7XG5pbXBvcnQgUmVuZGVyRXZlbnQgZnJvbSAnb2wvcmVuZGVyL0V2ZW50JztcbmltcG9ydCB7IENvbnRyb2wgfSBmcm9tICdvbC9jb250cm9sJztcbmltcG9ydCB7IEludGVyYWN0aW9uIH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTWFwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuICAgIHByaXZhdGUgaG9zdDtcbiAgICBpbnN0YW5jZTogTWFwO1xuICAgIGNvbXBvbmVudFR5cGU6IHN0cmluZztcbiAgICB3aWR0aDogc3RyaW5nO1xuICAgIGhlaWdodDogc3RyaW5nO1xuICAgIHBpeGVsUmF0aW86IG51bWJlcjtcbiAgICBrZXlib2FyZEV2ZW50VGFyZ2V0OiBIVE1MRWxlbWVudCB8IHN0cmluZztcbiAgICBsb2FkVGlsZXNXaGlsZUFuaW1hdGluZzogYm9vbGVhbjtcbiAgICBsb2FkVGlsZXNXaGlsZUludGVyYWN0aW5nOiBib29sZWFuO1xuICAgIGxvZ286IHN0cmluZyB8IGJvb2xlYW47XG4gICAgcmVuZGVyZXI6ICdjYW52YXMnIHwgJ3dlYmdsJztcbiAgICBvbENsaWNrOiBFdmVudEVtaXR0ZXI8TWFwQnJvd3NlckV2ZW50PE1vdXNlRXZlbnQ+PjtcbiAgICBkYmxDbGljazogRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudDxNb3VzZUV2ZW50Pj47XG4gICAgbW92ZVN0YXJ0OiBFdmVudEVtaXR0ZXI8TWFwRXZlbnQ+O1xuICAgIG1vdmVFbmQ6IEV2ZW50RW1pdHRlcjxNYXBFdmVudD47XG4gICAgcG9pbnRlckRyYWc6IEV2ZW50RW1pdHRlcjxNYXBCcm93c2VyRXZlbnQ8TW91c2VFdmVudD4+O1xuICAgIHBvaW50ZXJNb3ZlOiBFdmVudEVtaXR0ZXI8TWFwQnJvd3NlckV2ZW50PE1vdXNlRXZlbnQ+PjtcbiAgICBvbnBvc3RyZW5kZXI6IEV2ZW50RW1pdHRlcjxSZW5kZXJFdmVudD47XG4gICAgcG9zdFJlbmRlcjogRXZlbnRFbWl0dGVyPE1hcEV2ZW50PjtcbiAgICBvbnByZXJlbmRlcjogRXZlbnRFbWl0dGVyPFJlbmRlckV2ZW50PjtcbiAgICBwcm9wZXJ0eUNoYW5nZTogRXZlbnRFbWl0dGVyPE9iamVjdEV2ZW50PjtcbiAgICBzaW5nbGVDbGljazogRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudDxNb3VzZUV2ZW50Pj47XG4gICAgY29udHJvbHM6IENvbnRyb2xbXTtcbiAgICBpbnRlcmFjdGlvbnM6IEludGVyYWN0aW9uW107XG4gICAgY29uc3RydWN0b3IoaG9zdDogRWxlbWVudFJlZik7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZDtcbn1cbiJdfQ==