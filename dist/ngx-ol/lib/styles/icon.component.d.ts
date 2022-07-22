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

//# sourceMappingURL=icon.component.d.ts.map