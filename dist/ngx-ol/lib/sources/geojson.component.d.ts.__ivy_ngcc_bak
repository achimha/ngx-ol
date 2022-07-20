import { OnInit } from '@angular/core';
import { LayerVectorComponent } from '../layers/layervector.component';
import { SourceComponent } from './source.component';
import FeatureFormat from 'ol/format/Feature';
import { Vector } from 'ol/source';
import { ProjectionLike } from 'ol/proj';
export declare class SourceGeoJSONComponent extends SourceComponent implements OnInit {
    instance: Vector;
    format: FeatureFormat;
    defaultDataProjection: ProjectionLike;
    featureProjection: ProjectionLike;
    geometryName: string;
    url: string;
    constructor(layer: LayerVectorComponent);
    ngOnInit(): void;
}
