import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MapComponent } from './map.component';
import { GeometryLinestringComponent } from './geom/geometrylinestring.component';
import { GeometryPolygonComponent } from './geom/geometrypolygon.component';
import { GeometryMultiPointComponent } from './geom/geometrymultipoint.component';
import { GeometryMultiLinestringComponent } from './geom/geometrymultilinestring.component';
import { GeometryMultiPolygonComponent } from './geom/geometrymultipolygon.component';
import { Coordinate } from 'ol/coordinate';
import * as ɵngcc0 from '@angular/core';
export declare class CollectionCoordinatesComponent implements OnChanges, OnInit {
    private map;
    private host;
    private mapSrid;
    coordinates: Coordinate[] | Coordinate[][] | Coordinate[][][];
    srid: string;
    constructor(map: MapComponent, geometryLinestring: GeometryLinestringComponent, geometryPolygon: GeometryPolygonComponent, geometryMultipoint: GeometryMultiPointComponent, geometryMultilinestring: GeometryMultiLinestringComponent, geometryMultipolygon: GeometryMultiPolygonComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private onMapViewChanged;
    private transformCoordinates;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CollectionCoordinatesComponent, [null, { optional: true; }, { optional: true; }, { optional: true; }, { optional: true; }, { optional: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CollectionCoordinatesComponent, "aol-collection-coordinates", never, { "srid": "srid"; "coordinates": "coordinates"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbmNvb3JkaW5hdGVzLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJjb2xsZWN0aW9uY29vcmRpbmF0ZXMuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2VvbWV0cnlMaW5lc3RyaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9nZW9tL2dlb21ldHJ5bGluZXN0cmluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2VvbWV0cnlQb2x5Z29uQ29tcG9uZW50IH0gZnJvbSAnLi9nZW9tL2dlb21ldHJ5cG9seWdvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2VvbWV0cnlNdWx0aVBvaW50Q29tcG9uZW50IH0gZnJvbSAnLi9nZW9tL2dlb21ldHJ5bXVsdGlwb2ludC5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2VvbWV0cnlNdWx0aUxpbmVzdHJpbmdDb21wb25lbnQgfSBmcm9tICcuL2dlb20vZ2VvbWV0cnltdWx0aWxpbmVzdHJpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IEdlb21ldHJ5TXVsdGlQb2x5Z29uQ29tcG9uZW50IH0gZnJvbSAnLi9nZW9tL2dlb21ldHJ5bXVsdGlwb2x5Z29uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb29yZGluYXRlIH0gZnJvbSAnb2wvY29vcmRpbmF0ZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDb2xsZWN0aW9uQ29vcmRpbmF0ZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBtYXA7XG4gICAgcHJpdmF0ZSBob3N0O1xuICAgIHByaXZhdGUgbWFwU3JpZDtcbiAgICBjb29yZGluYXRlczogQ29vcmRpbmF0ZVtdIHwgQ29vcmRpbmF0ZVtdW10gfCBDb29yZGluYXRlW11bXVtdO1xuICAgIHNyaWQ6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihtYXA6IE1hcENvbXBvbmVudCwgZ2VvbWV0cnlMaW5lc3RyaW5nOiBHZW9tZXRyeUxpbmVzdHJpbmdDb21wb25lbnQsIGdlb21ldHJ5UG9seWdvbjogR2VvbWV0cnlQb2x5Z29uQ29tcG9uZW50LCBnZW9tZXRyeU11bHRpcG9pbnQ6IEdlb21ldHJ5TXVsdGlQb2ludENvbXBvbmVudCwgZ2VvbWV0cnlNdWx0aWxpbmVzdHJpbmc6IEdlb21ldHJ5TXVsdGlMaW5lc3RyaW5nQ29tcG9uZW50LCBnZW9tZXRyeU11bHRpcG9seWdvbjogR2VvbWV0cnlNdWx0aVBvbHlnb25Db21wb25lbnQpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBvbk1hcFZpZXdDaGFuZ2VkO1xuICAgIHByaXZhdGUgdHJhbnNmb3JtQ29vcmRpbmF0ZXM7XG59XG4iXX0=