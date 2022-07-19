import { OnInit } from '@angular/core';
import { LayerVectorComponent } from '../layers/layervector.component';
import { SourceComponent } from './source.component';
import { Feature } from 'ol';
import { Vector } from 'ol/source';
import { ProjectionLike } from 'ol/proj';
import * as ɵngcc0 from '@angular/core';
export declare class SourceGeoJSONComponent extends SourceComponent implements OnInit {
    instance: Vector;
    format: Feature;
    defaultDataProjection: ProjectionLike;
    featureProjection: ProjectionLike;
    geometryName: string;
    url: string;
    constructor(layer: LayerVectorComponent);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SourceGeoJSONComponent, [{ host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SourceGeoJSONComponent, "aol-source-geojson", never, { "defaultDataProjection": "defaultDataProjection"; "featureProjection": "featureProjection"; "geometryName": "geometryName"; "url": "url"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvanNvbi5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiZ2VvanNvbi5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGF5ZXJWZWN0b3JDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJ2ZWN0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGZWF0dXJlIH0gZnJvbSAnb2wnO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnb2wvc291cmNlJztcbmltcG9ydCB7IFByb2plY3Rpb25MaWtlIH0gZnJvbSAnb2wvcHJvaic7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTb3VyY2VHZW9KU09OQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpbnN0YW5jZTogVmVjdG9yO1xuICAgIGZvcm1hdDogRmVhdHVyZTtcbiAgICBkZWZhdWx0RGF0YVByb2plY3Rpb246IFByb2plY3Rpb25MaWtlO1xuICAgIGZlYXR1cmVQcm9qZWN0aW9uOiBQcm9qZWN0aW9uTGlrZTtcbiAgICBnZW9tZXRyeU5hbWU6IHN0cmluZztcbiAgICB1cmw6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihsYXllcjogTGF5ZXJWZWN0b3JDb21wb25lbnQpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG59XG4iXX0=