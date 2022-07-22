import { OnInit } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MapComponent } from '../map.component';
import { MultiLineString } from 'ol/geom';
import * as ɵngcc0 from '@angular/core';
export declare class GeometryMultiLinestringComponent extends SimpleGeometryComponent implements OnInit {
    componentType: string;
    instance: MultiLineString;
    constructor(map: MapComponent, host: FeatureComponent);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GeometryMultiLinestringComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<GeometryMultiLinestringComponent, "aol-geometry-multilinestring", never, {}, {}, never, ["*"]>;
}

//# sourceMappingURL=geometrymultilinestring.component.d.ts.map