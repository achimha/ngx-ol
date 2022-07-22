import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Stroke } from 'ol/style';
import { StyleComponent } from './style.component';
import { StyleCircleComponent } from './circle.component';
import { StyleTextComponent } from './text.component';
import { Color } from 'ol/color';
import { ColorLike } from 'ol/colorlike';
import * as ɵngcc0 from '@angular/core';
export declare class StyleStrokeComponent implements OnInit, OnChanges {
    instance: Stroke;
    private host;
    color: Color | ColorLike;
    lineCap: CanvasLineCap | undefined;
    lineDash: number[];
    lineJoin: CanvasLineJoin | undefined;
    miterLimit: number;
    width: number;
    constructor(styleHost: StyleComponent, styleCircleHost: StyleCircleComponent, styleTextHost: StyleTextComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StyleStrokeComponent, [{ optional: true; }, { optional: true; }, { optional: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<StyleStrokeComponent, "aol-style-stroke", never, { "color": "color"; "lineCap": "lineCap"; "lineDash": "lineDash"; "lineJoin": "lineJoin"; "miterLimit": "miterLimit"; "width": "width"; }, {}, never, never>;
}

//# sourceMappingURL=stroke.component.d.ts.map