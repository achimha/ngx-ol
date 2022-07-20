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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY2xlLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJjaXJjbGUuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2lyY2xlLCBGaWxsLCBTdHJva2UgfSBmcm9tICdvbC9zdHlsZSc7XG5pbXBvcnQgeyBTdHlsZUNvbXBvbmVudCB9IGZyb20gJy4vc3R5bGUuY29tcG9uZW50JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFN0eWxlQ2lyY2xlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgaG9zdDtcbiAgICBjb21wb25lbnRUeXBlOiBzdHJpbmc7XG4gICAgaW5zdGFuY2U6IENpcmNsZTtcbiAgICBmaWxsOiBGaWxsO1xuICAgIHJhZGl1czogbnVtYmVyO1xuICAgIHNuYXBUb1BpeGVsOiBib29sZWFuO1xuICAgIHN0cm9rZTogU3Ryb2tlO1xuICAgIGNvbnN0cnVjdG9yKGhvc3Q6IFN0eWxlQ29tcG9uZW50KTtcbiAgICAvKipcbiAgICAgKiBXT1JLLUFST1VORDogc2luY2UgdGhlIHJlLXJlbmRlcmluZyBpcyBub3QgdHJpZ2dlcmVkIG9uIHN0eWxlIGNoYW5nZVxuICAgICAqIHdlIHRyaWdnZXIgYSByYWRpdXMgY2hhbmdlLlxuICAgICAqIHNlZSBvcGVubGF5ZXJzICM2MjMzIGFuZCAjNTc3NVxuICAgICAqL1xuICAgIHVwZGF0ZSgpOiB2b2lkO1xuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkO1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=