import { OnInit, ElementRef, EventEmitter, AfterViewInit, SimpleChanges, OnChanges } from '@angular/core';
import Map from 'ol/Map';
import MapBrowserEvent from 'ol/MapBrowserEvent';
import MapEvent from 'ol/MapEvent';
import ObjectEvent from 'ol/Object';
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
    keyboardEventTarget: Element | string;
    loadTilesWhileAnimating: boolean;
    loadTilesWhileInteracting: boolean;
    logo: string | boolean;
    renderer: 'canvas' | 'webgl';
    olClick: EventEmitter<MapBrowserEvent>;
    dblClick: EventEmitter<MapBrowserEvent>;
    moveStart: EventEmitter<MapEvent>;
    moveEnd: EventEmitter<MapEvent>;
    pointerDrag: EventEmitter<MapBrowserEvent>;
    pointerMove: EventEmitter<MapBrowserEvent>;
    onpostrender: EventEmitter<RenderEvent>;
    postRender: EventEmitter<MapEvent>;
    onprerender: EventEmitter<RenderEvent>;
    propertyChange: EventEmitter<ObjectEvent>;
    singleClick: EventEmitter<MapBrowserEvent>;
    controls: Control[];
    interactions: Interaction[];
    constructor(host: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MapComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MapComponent, "aol-map", never, { "width": "width"; "height": "height"; "pixelRatio": "pixelRatio"; "keyboardEventTarget": "keyboardEventTarget"; "loadTilesWhileAnimating": "loadTilesWhileAnimating"; "loadTilesWhileInteracting": "loadTilesWhileInteracting"; "logo": "logo"; "renderer": "renderer"; }, { "olClick": "olClick"; "dblClick": "dblClick"; "moveStart": "moveStart"; "moveEnd": "moveEnd"; "pointerDrag": "pointerDrag"; "pointerMove": "pointerMove"; "onpostrender": "onpostrender"; "postRender": "postRender"; "onprerender": "onprerender"; "propertyChange": "propertyChange"; "singleClick": "singleClick"; }, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJtYXAuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBBZnRlclZpZXdJbml0LCBTaW1wbGVDaGFuZ2VzLCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBNYXAgZnJvbSAnb2wvTWFwJztcbmltcG9ydCBNYXBCcm93c2VyRXZlbnQgZnJvbSAnb2wvTWFwQnJvd3NlckV2ZW50JztcbmltcG9ydCBNYXBFdmVudCBmcm9tICdvbC9NYXBFdmVudCc7XG5pbXBvcnQgT2JqZWN0RXZlbnQgZnJvbSAnb2wvT2JqZWN0JztcbmltcG9ydCBSZW5kZXJFdmVudCBmcm9tICdvbC9yZW5kZXIvRXZlbnQnO1xuaW1wb3J0IHsgQ29udHJvbCB9IGZyb20gJ29sL2NvbnRyb2wnO1xuaW1wb3J0IHsgSW50ZXJhY3Rpb24gfSBmcm9tICdvbC9pbnRlcmFjdGlvbic7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBNYXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG4gICAgcHJpdmF0ZSBob3N0O1xuICAgIGluc3RhbmNlOiBNYXA7XG4gICAgY29tcG9uZW50VHlwZTogc3RyaW5nO1xuICAgIHdpZHRoOiBzdHJpbmc7XG4gICAgaGVpZ2h0OiBzdHJpbmc7XG4gICAgcGl4ZWxSYXRpbzogbnVtYmVyO1xuICAgIGtleWJvYXJkRXZlbnRUYXJnZXQ6IEVsZW1lbnQgfCBzdHJpbmc7XG4gICAgbG9hZFRpbGVzV2hpbGVBbmltYXRpbmc6IGJvb2xlYW47XG4gICAgbG9hZFRpbGVzV2hpbGVJbnRlcmFjdGluZzogYm9vbGVhbjtcbiAgICBsb2dvOiBzdHJpbmcgfCBib29sZWFuO1xuICAgIHJlbmRlcmVyOiAnY2FudmFzJyB8ICd3ZWJnbCc7XG4gICAgb2xDbGljazogRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudD47XG4gICAgZGJsQ2xpY2s6IEV2ZW50RW1pdHRlcjxNYXBCcm93c2VyRXZlbnQ+O1xuICAgIG1vdmVTdGFydDogRXZlbnRFbWl0dGVyPE1hcEV2ZW50PjtcbiAgICBtb3ZlRW5kOiBFdmVudEVtaXR0ZXI8TWFwRXZlbnQ+O1xuICAgIHBvaW50ZXJEcmFnOiBFdmVudEVtaXR0ZXI8TWFwQnJvd3NlckV2ZW50PjtcbiAgICBwb2ludGVyTW92ZTogRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudD47XG4gICAgb25wb3N0cmVuZGVyOiBFdmVudEVtaXR0ZXI8UmVuZGVyRXZlbnQ+O1xuICAgIHBvc3RSZW5kZXI6IEV2ZW50RW1pdHRlcjxNYXBFdmVudD47XG4gICAgb25wcmVyZW5kZXI6IEV2ZW50RW1pdHRlcjxSZW5kZXJFdmVudD47XG4gICAgcHJvcGVydHlDaGFuZ2U6IEV2ZW50RW1pdHRlcjxPYmplY3RFdmVudD47XG4gICAgc2luZ2xlQ2xpY2s6IEV2ZW50RW1pdHRlcjxNYXBCcm93c2VyRXZlbnQ+O1xuICAgIGNvbnRyb2xzOiBDb250cm9sW107XG4gICAgaW50ZXJhY3Rpb25zOiBJbnRlcmFjdGlvbltdO1xuICAgIGNvbnN0cnVjdG9yKGhvc3Q6IEVsZW1lbnRSZWYpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQ7XG59XG4iXX0=