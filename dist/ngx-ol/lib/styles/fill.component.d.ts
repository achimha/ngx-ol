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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsbC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiZmlsbC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmlsbCB9IGZyb20gJ29sL3N0eWxlJztcbmltcG9ydCB7IFN0eWxlQ29tcG9uZW50IH0gZnJvbSAnLi9zdHlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3R5bGVDaXJjbGVDb21wb25lbnQgfSBmcm9tICcuL2NpcmNsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3R5bGVUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi90ZXh0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJ29sL2NvbG9yJztcbmltcG9ydCB7IENvbG9yTGlrZSB9IGZyb20gJ29sL2NvbG9ybGlrZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTdHlsZUZpbGxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gICAgcHJpdmF0ZSBob3N0O1xuICAgIGluc3RhbmNlOiBGaWxsO1xuICAgIGNvbG9yOiBDb2xvciB8IENvbG9yTGlrZTtcbiAgICBjb25zdHJ1Y3RvcihzdHlsZUhvc3Q6IFN0eWxlQ29tcG9uZW50LCBzdHlsZUNpcmNsZUhvc3Q6IFN0eWxlQ2lyY2xlQ29tcG9uZW50LCBzdHlsZVRleHRIb3N0OiBTdHlsZVRleHRDb21wb25lbnQpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XG59XG4iXX0=