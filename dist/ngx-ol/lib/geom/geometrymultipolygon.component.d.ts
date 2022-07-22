import { OnInit } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MapComponent } from '../map.component';
import { MultiPolygon } from 'ol/geom';
import * as ɵngcc0 from '@angular/core';
export declare class GeometryMultiPolygonComponent extends SimpleGeometryComponent implements OnInit {
    componentType: string;
    instance: MultiPolygon;
    constructor(map: MapComponent, host: FeatureComponent);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GeometryMultiPolygonComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<GeometryMultiPolygonComponent, "aol-geometry-multipolygon", never, {}, {}, never, ["*"]>;
}

//# sourceMappingURL=geometrymultipolygon.component.d.ts.map