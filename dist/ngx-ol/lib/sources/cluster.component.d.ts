import { AfterContentInit, OnChanges, SimpleChanges } from '@angular/core';
import { Feature } from 'ol';
import { Point } from 'ol/geom';
import { Cluster, Vector } from 'ol/source';
import { LayerVectorComponent } from '../layers/layervector.component';
import { SourceComponent } from './source.component';
import { SourceVectorComponent } from './vector.component';
export declare class SourceClusterComponent extends SourceComponent implements AfterContentInit, OnChanges {
    instance: Cluster;
    distance: number;
    geometryFunction?: (feature: Feature) => Point;
    wrapX?: boolean;
    sourceVectorComponent: SourceVectorComponent;
    source: Vector;
    constructor(layer: LayerVectorComponent);
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
