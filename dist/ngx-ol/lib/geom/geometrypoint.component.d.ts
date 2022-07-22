import { OnInit } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MapComponent } from '../map.component';
import { Point } from 'ol/geom';
import * as ɵngcc0 from '@angular/core';
export declare class GeometryPointComponent extends SimpleGeometryComponent implements OnInit {
    componentType: string;
    instance: Point;
    constructor(map: MapComponent, host: FeatureComponent);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GeometryPointComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<GeometryPointComponent, "aol-geometry-point", never, {}, {}, never, ["*"]>;
}

//# sourceMappingURL=geometrypoint.component.d.ts.map