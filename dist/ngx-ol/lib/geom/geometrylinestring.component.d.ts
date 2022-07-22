import { OnInit } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MapComponent } from '../map.component';
import { LineString } from 'ol/geom';
import * as ɵngcc0 from '@angular/core';
export declare class GeometryLinestringComponent extends SimpleGeometryComponent implements OnInit {
    componentType: string;
    instance: LineString;
    constructor(map: MapComponent, host: FeatureComponent);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GeometryLinestringComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<GeometryLinestringComponent, "aol-geometry-linestring", never, {}, {}, never, ["*"]>;
}

//# sourceMappingURL=geometrylinestring.component.d.ts.map