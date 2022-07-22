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

//# sourceMappingURL=geometrycircle.component.d.ts.map