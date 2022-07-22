import { AfterContentInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Circle, Fill, Stroke } from 'ol/style';
import { StyleComponent } from './style.component';
import * as ɵngcc0 from '@angular/core';
export declare class StyleCircleComponent implements AfterContentInit, OnChanges, OnDestroy {
    private host;
    componentType: string;
    instance: Circle;
    fill: Fill;
    radius: number;
    snapToPixel: boolean;
    stroke: Stroke;
    constructor(host: StyleComponent);
    /**
     * WORK-AROUND: since the re-rendering is not triggered on style change
     * we trigger a radius change.
     * see openlayers #6233 and #5775
     */
    update(): void;
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StyleCircleComponent, [{ host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<StyleCircleComponent, "aol-style-circle", never, { "fill": "fill"; "radius": "radius"; "snapToPixel": "snapToPixel"; "stroke": "stroke"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=circle.component.d.ts.map