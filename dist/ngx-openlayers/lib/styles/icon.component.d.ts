import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Icon } from 'ol/style';
import IconAnchorUnits from 'ol/style/IconAnchorUnits';
import IconOrigin from 'ol/style/IconOrigin';
import { StyleComponent } from './style.component';
import * as ɵngcc0 from '@angular/core';
export declare class StyleIconComponent implements OnInit, OnChanges {
    private host;
    instance: Icon;
    anchor: [number, number];
    anchorXUnits: IconAnchorUnits;
    anchorYUnits: IconAnchorUnits;
    anchorOrigin: IconOrigin;
    color: [number, number, number, number];
    crossOrigin: IconOrigin;
    img: string;
    offset: [number, number];
    offsetOrigin: IconOrigin;
    opacity: number;
    scale: number;
    snapToPixel: boolean;
    rotateWithView: boolean;
    rotation: number;
    size: [number, number];
    imgSize: [number, number];
    src: string;
    constructor(host: StyleComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StyleIconComponent, [{ host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<StyleIconComponent, "aol-style-icon", never, { "anchor": "anchor"; "anchorXUnits": "anchorXUnits"; "anchorYUnits": "anchorYUnits"; "anchorOrigin": "anchorOrigin"; "color": "color"; "crossOrigin": "crossOrigin"; "img": "img"; "offset": "offset"; "offsetOrigin": "offsetOrigin"; "opacity": "opacity"; "scale": "scale"; "snapToPixel": "snapToPixel"; "rotateWithView": "rotateWithView"; "rotation": "rotation"; "size": "size"; "imgSize": "imgSize"; "src": "src"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiaWNvbi5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEljb24gfSBmcm9tICdvbC9zdHlsZSc7XG5pbXBvcnQgSWNvbkFuY2hvclVuaXRzIGZyb20gJ29sL3N0eWxlL0ljb25BbmNob3JVbml0cyc7XG5pbXBvcnQgSWNvbk9yaWdpbiBmcm9tICdvbC9zdHlsZS9JY29uT3JpZ2luJztcbmltcG9ydCB7IFN0eWxlQ29tcG9uZW50IH0gZnJvbSAnLi9zdHlsZS5jb21wb25lbnQnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU3R5bGVJY29uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICAgIHByaXZhdGUgaG9zdDtcbiAgICBpbnN0YW5jZTogSWNvbjtcbiAgICBhbmNob3I6IFtudW1iZXIsIG51bWJlcl07XG4gICAgYW5jaG9yWFVuaXRzOiBJY29uQW5jaG9yVW5pdHM7XG4gICAgYW5jaG9yWVVuaXRzOiBJY29uQW5jaG9yVW5pdHM7XG4gICAgYW5jaG9yT3JpZ2luOiBJY29uT3JpZ2luO1xuICAgIGNvbG9yOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcbiAgICBjcm9zc09yaWdpbjogSWNvbk9yaWdpbjtcbiAgICBpbWc6IHN0cmluZztcbiAgICBvZmZzZXQ6IFtudW1iZXIsIG51bWJlcl07XG4gICAgb2Zmc2V0T3JpZ2luOiBJY29uT3JpZ2luO1xuICAgIG9wYWNpdHk6IG51bWJlcjtcbiAgICBzY2FsZTogbnVtYmVyO1xuICAgIHNuYXBUb1BpeGVsOiBib29sZWFuO1xuICAgIHJvdGF0ZVdpdGhWaWV3OiBib29sZWFuO1xuICAgIHJvdGF0aW9uOiBudW1iZXI7XG4gICAgc2l6ZTogW251bWJlciwgbnVtYmVyXTtcbiAgICBpbWdTaXplOiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIHNyYzogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKGhvc3Q6IFN0eWxlQ29tcG9uZW50KTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xufVxuIl19