import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Stroke } from 'ol/style';
import { StyleComponent } from './style.component';
import { StyleCircleComponent } from './circle.component';
import { StyleTextComponent } from './text.component';
import { Color } from 'ol/color';
import { ColorLike } from 'ol/colorlike';
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
}
