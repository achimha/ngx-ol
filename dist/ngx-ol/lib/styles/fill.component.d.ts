import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Fill } from 'ol/style';
import { StyleComponent } from './style.component';
import { StyleCircleComponent } from './circle.component';
import { StyleTextComponent } from './text.component';
import { Color } from 'ol/color';
import { ColorLike } from 'ol/colorlike';
import * as ɵngcc0 from '@angular/core';
export declare class StyleFillComponent implements OnInit, OnChanges {
    private host;
    instance: Fill;
    color: Color | ColorLike;
    constructor(styleHost: StyleComponent, styleCircleHost: StyleCircleComponent, styleTextHost: StyleTextComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StyleFillComponent, [{ optional: true; }, { optional: true; }, { optional: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<StyleFillComponent, "aol-style-fill", never, { "color": "color"; }, {}, never, never>;
}

//# sourceMappingURL=fill.component.d.ts.map