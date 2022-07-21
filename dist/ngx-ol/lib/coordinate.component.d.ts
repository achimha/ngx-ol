import { OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { MapComponent } from './map.component';
import { GeometryPointComponent } from './geom/geometrypoint.component';
import { GeometryCircleComponent } from './geom/geometrycircle.component';
import { ViewComponent } from './view.component';
import { OverlayComponent } from './overlay.component';
import * as ɵngcc0 from '@angular/core';
export declare class CoordinateComponent implements OnChanges, OnInit {
    private map;
    private host;
    private mapSrid;
    x: number;
    y: number;
    srid: string;
    constructor(map: MapComponent, viewHost: ViewComponent, geometryPointHost: GeometryPointComponent, geometryCircleHost: GeometryCircleComponent, overlayHost: OverlayComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private onMapViewChanged;
    private transformCoordinates;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CoordinateComponent, [null, { optional: true; }, { optional: true; }, { optional: true; }, { optional: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CoordinateComponent, "aol-coordinate", never, { "srid": "srid"; "x": "x"; "y": "y"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29vcmRpbmF0ZS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiY29vcmRpbmF0ZS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2VvbWV0cnlQb2ludENvbXBvbmVudCB9IGZyb20gJy4vZ2VvbS9nZW9tZXRyeXBvaW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHZW9tZXRyeUNpcmNsZUNvbXBvbmVudCB9IGZyb20gJy4vZ2VvbS9nZW9tZXRyeWNpcmNsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3ZlcmxheUNvbXBvbmVudCB9IGZyb20gJy4vb3ZlcmxheS5jb21wb25lbnQnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ29vcmRpbmF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgICBwcml2YXRlIG1hcDtcbiAgICBwcml2YXRlIGhvc3Q7XG4gICAgcHJpdmF0ZSBtYXBTcmlkO1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG4gICAgc3JpZDogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKG1hcDogTWFwQ29tcG9uZW50LCB2aWV3SG9zdDogVmlld0NvbXBvbmVudCwgZ2VvbWV0cnlQb2ludEhvc3Q6IEdlb21ldHJ5UG9pbnRDb21wb25lbnQsIGdlb21ldHJ5Q2lyY2xlSG9zdDogR2VvbWV0cnlDaXJjbGVDb21wb25lbnQsIG92ZXJsYXlIb3N0OiBPdmVybGF5Q29tcG9uZW50KTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xuICAgIHByaXZhdGUgb25NYXBWaWV3Q2hhbmdlZDtcbiAgICBwcml2YXRlIHRyYW5zZm9ybUNvb3JkaW5hdGVzO1xufVxuIl19