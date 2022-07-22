import { OnInit } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MapComponent } from '../map.component';
import { MultiPoint } from 'ol/geom';
import * as ɵngcc0 from '@angular/core';
export declare class GeometryMultiPointComponent extends SimpleGeometryComponent implements OnInit {
    componentType: string;
    instance: MultiPoint;
    constructor(map: MapComponent, host: FeatureComponent);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GeometryMultiPointComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<GeometryMultiPointComponent, "aol-geometry-multipoint", never, {}, {}, never, ["*"]>;
}

//# sourceMappingURL=geometrymultipoint.component.d.ts.map