import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Icon } from 'ol/style';
import { StyleComponent } from './style.component';
import * as ɵngcc0 from '@angular/core';
export declare class StyleIconComponent implements OnInit, OnChanges {
    private host;
    instance: Icon;
    anchor: [number, number];
    anchorXUnits: string;
    anchorYUnits: string;
    anchorOrigin: string;
    color: [number, number, number, number];
    crossOrigin: string;
    img: HTMLCanvasElement | HTMLImageElement;
    offset: [number, number];
    offsetOrigin: string;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiaWNvbi5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ29sL3N0eWxlJztcbmltcG9ydCB7IFN0eWxlQ29tcG9uZW50IH0gZnJvbSAnLi9zdHlsZS5jb21wb25lbnQnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU3R5bGVJY29uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICAgIHByaXZhdGUgaG9zdDtcbiAgICBpbnN0YW5jZTogSWNvbjtcbiAgICBhbmNob3I6IFtudW1iZXIsIG51bWJlcl07XG4gICAgYW5jaG9yWFVuaXRzOiBzdHJpbmc7XG4gICAgYW5jaG9yWVVuaXRzOiBzdHJpbmc7XG4gICAgYW5jaG9yT3JpZ2luOiBzdHJpbmc7XG4gICAgY29sb3I6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdO1xuICAgIGNyb3NzT3JpZ2luOiBzdHJpbmc7XG4gICAgaW1nOiBIVE1MQ2FudmFzRWxlbWVudCB8IEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgb2Zmc2V0OiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIG9mZnNldE9yaWdpbjogc3RyaW5nO1xuICAgIG9wYWNpdHk6IG51bWJlcjtcbiAgICBzY2FsZTogbnVtYmVyO1xuICAgIHNuYXBUb1BpeGVsOiBib29sZWFuO1xuICAgIHJvdGF0ZVdpdGhWaWV3OiBib29sZWFuO1xuICAgIHJvdGF0aW9uOiBudW1iZXI7XG4gICAgc2l6ZTogW251bWJlciwgbnVtYmVyXTtcbiAgICBpbWdTaXplOiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIHNyYzogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKGhvc3Q6IFN0eWxlQ29tcG9uZW50KTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xufVxuIl19