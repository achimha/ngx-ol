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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvanNvbi5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiZ2VvanNvbi5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGF5ZXJWZWN0b3JDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJ2ZWN0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XG5pbXBvcnQgRmVhdHVyZUZvcm1hdCBmcm9tICdvbC9mb3JtYXQvRmVhdHVyZSc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICdvbC9zb3VyY2UnO1xuaW1wb3J0IHsgUHJvamVjdGlvbkxpa2UgfSBmcm9tICdvbC9wcm9qJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFNvdXJjZUdlb0pTT05Db21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGluc3RhbmNlOiBWZWN0b3I7XG4gICAgZm9ybWF0OiBGZWF0dXJlRm9ybWF0O1xuICAgIGRlZmF1bHREYXRhUHJvamVjdGlvbjogUHJvamVjdGlvbkxpa2U7XG4gICAgZmVhdHVyZVByb2plY3Rpb246IFByb2plY3Rpb25MaWtlO1xuICAgIGdlb21ldHJ5TmFtZTogc3RyaW5nO1xuICAgIHVybDogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKGxheWVyOiBMYXllclZlY3RvckNvbXBvbmVudCk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbn1cbiJdfQ==