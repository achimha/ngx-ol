import { OnInit } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { MapComponent } from '../map.component';
import SimpleGeometry from 'ol/geom/SimpleGeometry';
import * as ɵngcc0 from '@angular/core';
export declare abstract class SimpleGeometryComponent implements OnInit {
    protected map: MapComponent;
    protected host: FeatureComponent;
    instance: SimpleGeometry;
    componentType: string;
    srid: string;
    constructor(map: MapComponent, host: FeatureComponent);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SimpleGeometryComponent, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<SimpleGeometryComponent, never, never, { "srid": "srid"; }, {}, never>;
}

//# sourceMappingURL=simplegeometry.component.d.ts.map