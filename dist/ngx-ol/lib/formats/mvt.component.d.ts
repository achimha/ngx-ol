import { FormatComponent } from './format.component';
import { MVT } from 'ol/format';
import { FeatureClass } from 'ol/Feature';
import * as ɵngcc0 from '@angular/core';
export declare class FormatMVTComponent extends FormatComponent {
    instance: MVT;
    featureClass: FeatureClass;
    geometryName: string;
    layerName: string;
    layers: string[];
    constructor();
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FormatMVTComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<FormatMVTComponent, "aol-format-mvt", never, { "featureClass": "featureClass"; "geometryName": "geometryName"; "layerName": "layerName"; "layers": "layers"; }, {}, never, never>;
}

//# sourceMappingURL=mvt.component.d.ts.map