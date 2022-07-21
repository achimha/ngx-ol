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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Ryb2tlLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJzdHJva2UuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdHJva2UgfSBmcm9tICdvbC9zdHlsZSc7XG5pbXBvcnQgeyBTdHlsZUNvbXBvbmVudCB9IGZyb20gJy4vc3R5bGUuY29tcG9uZW50JztcbmltcG9ydCB7IFN0eWxlQ2lyY2xlQ29tcG9uZW50IH0gZnJvbSAnLi9jaXJjbGUuY29tcG9uZW50JztcbmltcG9ydCB7IFN0eWxlVGV4dENvbXBvbmVudCB9IGZyb20gJy4vdGV4dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdvbC9jb2xvcic7XG5pbXBvcnQgeyBDb2xvckxpa2UgfSBmcm9tICdvbC9jb2xvcmxpa2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU3R5bGVTdHJva2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gICAgaW5zdGFuY2U6IFN0cm9rZTtcbiAgICBwcml2YXRlIGhvc3Q7XG4gICAgY29sb3I6IENvbG9yIHwgQ29sb3JMaWtlO1xuICAgIGxpbmVDYXA6IENhbnZhc0xpbmVDYXAgfCB1bmRlZmluZWQ7XG4gICAgbGluZURhc2g6IG51bWJlcltdO1xuICAgIGxpbmVKb2luOiBDYW52YXNMaW5lSm9pbiB8IHVuZGVmaW5lZDtcbiAgICBtaXRlckxpbWl0OiBudW1iZXI7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3RvcihzdHlsZUhvc3Q6IFN0eWxlQ29tcG9uZW50LCBzdHlsZUNpcmNsZUhvc3Q6IFN0eWxlQ2lyY2xlQ29tcG9uZW50LCBzdHlsZVRleHRIb3N0OiBTdHlsZVRleHRDb21wb25lbnQpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XG59XG4iXX0=