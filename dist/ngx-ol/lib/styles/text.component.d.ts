import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Text } from 'ol/style';
import { StyleComponent } from './style.component';
import * as ɵngcc0 from '@angular/core';
export declare class StyleTextComponent implements OnInit, OnChanges {
    private host;
    instance: Text;
    componentType: string;
    font: string | undefined;
    offsetX: number | undefined;
    offsetY: number | undefined;
    scale: number | undefined;
    rotateWithView: boolean | undefined;
    rotation: number | undefined;
    text: string | undefined;
    textAlign: string | undefined;
    textBaseLine: string | undefined;
    constructor(host: StyleComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StyleTextComponent, [{ optional: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<StyleTextComponent, "aol-style-text", never, { "font": "font"; "offsetX": "offsetX"; "offsetY": "offsetY"; "scale": "scale"; "rotateWithView": "rotateWithView"; "rotation": "rotation"; "text": "text"; "textAlign": "textAlign"; "textBaseLine": "textBaseLine"; }, {}, never, never>;
}

//# sourceMappingURL=text.component.d.ts.map