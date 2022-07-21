import { OnInit } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { Circle } from 'ol/geom';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MapComponent } from '../map.component';
import * as ɵngcc0 from '@angular/core';
export declare class GeometryCircleComponent extends SimpleGeometryComponent implements OnInit {
    componentType: string;
    instance: Circle;
    get radius(): number;
    set radius(radius: number);
    constructor(map: MapComponent, host: FeatureComponent);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GeometryCircleComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<GeometryCircleComponent, "aol-geometry-circle", never, { "radius": "radius"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbWV0cnljaXJjbGUuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImdlb21ldHJ5Y2lyY2xlLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmVhdHVyZUNvbXBvbmVudCB9IGZyb20gJy4uL2ZlYXR1cmUuY29tcG9uZW50JztcbmltcG9ydCB7IENpcmNsZSB9IGZyb20gJ29sL2dlb20nO1xuaW1wb3J0IHsgU2ltcGxlR2VvbWV0cnlDb21wb25lbnQgfSBmcm9tICcuL3NpbXBsZWdlb21ldHJ5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEdlb21ldHJ5Q2lyY2xlQ29tcG9uZW50IGV4dGVuZHMgU2ltcGxlR2VvbWV0cnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGNvbXBvbmVudFR5cGU6IHN0cmluZztcbiAgICBpbnN0YW5jZTogQ2lyY2xlO1xuICAgIGdldCByYWRpdXMoKTogbnVtYmVyO1xuICAgIHNldCByYWRpdXMocmFkaXVzOiBudW1iZXIpO1xuICAgIGNvbnN0cnVjdG9yKG1hcDogTWFwQ29tcG9uZW50LCBob3N0OiBGZWF0dXJlQ29tcG9uZW50KTtcbn1cbiJdfQ==