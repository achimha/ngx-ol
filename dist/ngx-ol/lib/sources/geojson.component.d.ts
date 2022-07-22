import { OnInit } from '@angular/core';
import { LayerVectorComponent } from '../layers/layervector.component';
import { SourceComponent } from './source.component';
import FeatureFormat from 'ol/format/Feature';
import { Vector } from 'ol/source';
import { ProjectionLike } from 'ol/proj';
import * as ɵngcc0 from '@angular/core';
export declare class SourceGeoJSONComponent extends SourceComponent implements OnInit {
    instance: Vector;
    format: FeatureFormat;
    defaultDataProjection: ProjectionLike;
    featureProjection: ProjectionLike;
    geometryName: string;
    url: string;
    constructor(layer: LayerVectorComponent);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SourceGeoJSONComponent, [{ host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SourceGeoJSONComponent, "aol-source-geojson", never, { "defaultDataProjection": "defaultDataProjection"; "featureProjection": "featureProjection"; "geometryName": "geometryName"; "url": "url"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=geojson.component.d.ts.map