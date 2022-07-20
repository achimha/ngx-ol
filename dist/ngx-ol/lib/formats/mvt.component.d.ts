import { FormatComponent } from './format.component';
import { MVT } from 'ol/format';
import { FeatureClass } from 'ol/Feature';
export declare class FormatMVTComponent extends FormatComponent {
    instance: MVT;
    featureClass: FeatureClass;
    geometryName: string;
    layerName: string;
    layers: string[];
    constructor();
}
