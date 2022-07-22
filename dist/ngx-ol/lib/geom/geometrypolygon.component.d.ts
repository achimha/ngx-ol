import { OnInit } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MapComponent } from '../map.component';
import { Polygon } from 'ol/geom';
import * as ɵngcc0 from '@angular/core';
export declare class GeometryPolygonComponent extends SimpleGeometryComponent implements OnInit {
    componentType: string;
    instance: Polygon;
    constructor(map: MapComponent, host: FeatureComponent);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GeometryPolygonComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<GeometryPolygonComponent, "aol-geometry-polygon", never, {}, {}, never, ["*"]>;
}

//# sourceMappingURL=geometrypolygon.component.d.ts.map