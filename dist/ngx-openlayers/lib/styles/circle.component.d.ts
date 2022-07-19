import { AfterContentInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { AtlasManager, Circle, Fill, Stroke } from 'ol/style';
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
    atlasManager: AtlasManager;
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
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<StyleCircleComponent, "aol-style-circle", never, { "fill": "fill"; "radius": "radius"; "snapToPixel": "snapToPixel"; "stroke": "stroke"; "atlasManager": "atlasManager"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY2xlLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJjaXJjbGUuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdGxhc01hbmFnZXIsIENpcmNsZSwgRmlsbCwgU3Ryb2tlIH0gZnJvbSAnb2wvc3R5bGUnO1xuaW1wb3J0IHsgU3R5bGVDb21wb25lbnQgfSBmcm9tICcuL3N0eWxlLmNvbXBvbmVudCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTdHlsZUNpcmNsZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIGhvc3Q7XG4gICAgY29tcG9uZW50VHlwZTogc3RyaW5nO1xuICAgIGluc3RhbmNlOiBDaXJjbGU7XG4gICAgZmlsbDogRmlsbDtcbiAgICByYWRpdXM6IG51bWJlcjtcbiAgICBzbmFwVG9QaXhlbDogYm9vbGVhbjtcbiAgICBzdHJva2U6IFN0cm9rZTtcbiAgICBhdGxhc01hbmFnZXI6IEF0bGFzTWFuYWdlcjtcbiAgICBjb25zdHJ1Y3Rvcihob3N0OiBTdHlsZUNvbXBvbmVudCk7XG4gICAgLyoqXG4gICAgICogV09SSy1BUk9VTkQ6IHNpbmNlIHRoZSByZS1yZW5kZXJpbmcgaXMgbm90IHRyaWdnZXJlZCBvbiBzdHlsZSBjaGFuZ2VcbiAgICAgKiB3ZSB0cmlnZ2VyIGEgcmFkaXVzIGNoYW5nZS5cbiAgICAgKiBzZWUgb3BlbmxheWVycyAjNjIzMyBhbmQgIzU3NzVcbiAgICAgKi9cbiAgICB1cGRhdGUoKTogdm9pZDtcbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZDtcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19