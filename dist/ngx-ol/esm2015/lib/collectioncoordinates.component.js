import { Component, Input, Optional } from '@angular/core';
import { MapComponent } from './map.component';
import { GeometryLinestringComponent } from './geom/geometrylinestring.component';
import { GeometryPolygonComponent } from './geom/geometrypolygon.component';
import { GeometryMultiPointComponent } from './geom/geometrymultipoint.component';
import { GeometryMultiLinestringComponent } from './geom/geometrymultilinestring.component';
import { GeometryMultiPolygonComponent } from './geom/geometrymultipolygon.component';
import { transform } from 'ol/proj';
export class CollectionCoordinatesComponent {
    constructor(map, geometryLinestring, geometryPolygon, geometryMultipoint, geometryMultilinestring, geometryMultipolygon) {
        this.map = map;
        this.mapSrid = 'EPSG:3857';
        this.srid = 'EPSG:3857';
        if (!!geometryLinestring) {
            this.host = geometryLinestring;
        }
        else if (!!geometryPolygon) {
            this.host = geometryPolygon;
        }
        else if (!!geometryMultipoint) {
            this.host = geometryMultipoint;
        }
        else if (!!geometryMultilinestring) {
            this.host = geometryMultilinestring;
        }
        else if (!!geometryMultipolygon) {
            this.host = geometryMultipolygon;
        }
        else {
            throw new Error('aol-collection-coordinates must be a child of a geometry component');
        }
    }
    ngOnInit() {
        this.map.instance.on('change:view', (e) => this.onMapViewChanged(e));
        this.mapSrid = this.map.instance.getView().getProjection().getCode();
        this.transformCoordinates();
    }
    ngOnChanges(changes) {
        this.transformCoordinates();
    }
    onMapViewChanged(event) {
        this.mapSrid = event.target.get(event.key).getProjection().getCode();
        this.transformCoordinates();
    }
    transformCoordinates() {
        let transformedCoordinates;
        if (this.srid === this.mapSrid) {
            transformedCoordinates = this.coordinates;
        }
        else {
            switch (this.host.componentType) {
                case 'geometry-linestring':
                case 'geometry-multipoint':
                    transformedCoordinates = this.coordinates.map((c) => transform(c, this.srid, this.mapSrid));
                    break;
                case 'geometry-polygon':
                case 'geometry-multilinestring':
                    transformedCoordinates = this.coordinates.map((cc) => cc.map((c) => transform(c, this.srid, this.mapSrid)));
                    break;
                case 'geometry-multipolygon':
                    transformedCoordinates = this.coordinates.map((ccc) => ccc.map((cc) => cc.map((c) => transform(c, this.srid, this.mapSrid))));
                    break;
            }
        }
        this.host.instance.setCoordinates(transformedCoordinates);
    }
}
CollectionCoordinatesComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-collection-coordinates',
                template: ` <div class="aol-collection-coordinates"></div> `
            },] }
];
CollectionCoordinatesComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: GeometryLinestringComponent, decorators: [{ type: Optional }] },
    { type: GeometryPolygonComponent, decorators: [{ type: Optional }] },
    { type: GeometryMultiPointComponent, decorators: [{ type: Optional }] },
    { type: GeometryMultiLinestringComponent, decorators: [{ type: Optional }] },
    { type: GeometryMultiPolygonComponent, decorators: [{ type: Optional }] }
];
CollectionCoordinatesComponent.propDecorators = {
    coordinates: [{ type: Input }],
    srid: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbmNvb3JkaW5hdGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWNoaW1oYS9Qcm9qZWN0cy9uZ3gtb2wvcHJvamVjdHMvbmd4LW9sL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb2xsZWN0aW9uY29vcmRpbmF0ZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixRQUFRLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM1RixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUV0RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBTXBDLE1BQU0sT0FBTyw4QkFBOEI7SUFTekMsWUFDVSxHQUFpQixFQUNiLGtCQUErQyxFQUMvQyxlQUF5QyxFQUN6QyxrQkFBK0MsRUFDL0MsdUJBQXlELEVBQ3pELG9CQUFtRDtRQUx2RCxRQUFHLEdBQUgsR0FBRyxDQUFjO1FBUm5CLFlBQU8sR0FBRyxXQUFXLENBQUM7UUFLOUIsU0FBSSxHQUFHLFdBQVcsQ0FBQztRQVVqQixJQUFJLENBQUMsQ0FBQyxrQkFBa0IsRUFBRTtZQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLGtCQUFrQixDQUFDO1NBQ2hDO2FBQU0sSUFBSSxDQUFDLENBQUMsZUFBZSxFQUFFO1lBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsZUFBZSxDQUFDO1NBQzdC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RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFFBQVEsRUFBRSxrREFBa0Q7YUFDN0Q7OztZQVpRLFlBQVk7WUFDWiwyQkFBMkIsdUJBdUIvQixRQUFRO1lBdEJKLHdCQUF3Qix1QkF1QjVCLFFBQVE7WUF0QkosMkJBQTJCLHVCQXVCL0IsUUFBUTtZQXRCSixnQ0FBZ0MsdUJBdUJwQyxRQUFRO1lBdEJKLDZCQUE2Qix1QkF1QmpDLFFBQVE7OzswQkFYVixLQUFLO21CQUVMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3B0aW9uYWwsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4vbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHZW9tZXRyeUxpbmVzdHJpbmdDb21wb25lbnQgfSBmcm9tICcuL2dlb20vZ2VvbWV0cnlsaW5lc3RyaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHZW9tZXRyeVBvbHlnb25Db21wb25lbnQgfSBmcm9tICcuL2dlb20vZ2VvbWV0cnlwb2x5Z29uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHZW9tZXRyeU11bHRpUG9pbnRDb21wb25lbnQgfSBmcm9tICcuL2dlb20vZ2VvbWV0cnltdWx0aXBvaW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHZW9tZXRyeU11bHRpTGluZXN0cmluZ0NvbXBvbmVudCB9IGZyb20gJy4vZ2VvbS9nZW9tZXRyeW11bHRpbGluZXN0cmluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2VvbWV0cnlNdWx0aVBvbHlnb25Db21wb25lbnQgfSBmcm9tICcuL2dlb20vZ2VvbWV0cnltdWx0aXBvbHlnb24uY29tcG9uZW50JztcbmltcG9ydCB7IENvb3JkaW5hdGUgfSBmcm9tICdvbC9jb29yZGluYXRlJztcbmltcG9ydCB7IHRyYW5zZm9ybSB9IGZyb20gJ29sL3Byb2onO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtY29sbGVjdGlvbi1jb29yZGluYXRlcycsXG4gIHRlbXBsYXRlOiBgIDxkaXYgY2xhc3M9XCJhb2wtY29sbGVjdGlvbi1jb29yZGluYXRlc1wiPjwvZGl2PiBgLFxufSlcbmV4cG9ydCBjbGFzcyBDb2xsZWN0aW9uQ29vcmRpbmF0ZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIHByaXZhdGUgaG9zdDogYW55O1xuICBwcml2YXRlIG1hcFNyaWQgPSAnRVBTRzozODU3JztcblxuICBASW5wdXQoKVxuICBjb29yZGluYXRlczogQ29vcmRpbmF0ZVtdIHwgQ29vcmRpbmF0ZVtdW10gfCBDb29yZGluYXRlW11bXVtdO1xuICBASW5wdXQoKVxuICBzcmlkID0gJ0VQU0c6Mzg1Nyc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCxcbiAgICBAT3B0aW9uYWwoKSBnZW9tZXRyeUxpbmVzdHJpbmc6IEdlb21ldHJ5TGluZXN0cmluZ0NvbXBvbmVudCxcbiAgICBAT3B0aW9uYWwoKSBnZW9tZXRyeVBvbHlnb246IEdlb21ldHJ5UG9seWdvbkNvbXBvbmVudCxcbiAgICBAT3B0aW9uYWwoKSBnZW9tZXRyeU11bHRpcG9pbnQ6IEdlb21ldHJ5TXVsdGlQb2ludENvbXBvbmVudCxcbiAgICBAT3B0aW9uYWwoKSBnZW9tZXRyeU11bHRpbGluZXN0cmluZzogR2VvbWV0cnlNdWx0aUxpbmVzdHJpbmdDb21wb25lbnQsXG4gICAgQE9wdGlvbmFsKCkgZ2VvbWV0cnlNdWx0aXBvbHlnb246IEdlb21ldHJ5TXVsdGlQb2x5Z29uQ29tcG9uZW50XG4gICkge1xuICAgIGlmICghIWdlb21ldHJ5TGluZXN0cmluZykge1xuICAgICAgdGhpcy5ob3N0ID0gZ2VvbWV0cnlMaW5lc3RyaW5nO1xuICAgIH0gZWxzZSBpZiAoISFnZW9tZXRyeVBvbHlnb24pIHtcbiAgICAgIHRoaXMuaG9zdCA9IGdlb21ldHJ5UG9seWdvbjtcbiAgICB9IGVsc2UgaWYgKCEhZ2VvbWV0cnlNdWx0aXBvaW50KSB7XG4gICAgICB0aGlzLmhvc3QgPSBnZW9tZXRyeU11bHRpcG9pbnQ7XG4gICAgfSBlbHNlIGlmICghIWdlb21ldHJ5TXVsdGlsaW5lc3RyaW5nKSB7XG4gICAgICB0aGlzLmhvc3QgPSBnZW9tZXRyeU11bHRpbGluZXN0cmluZztcbiAgICB9IGVsc2UgaWYgKCEhZ2VvbWV0cnlNdWx0aXBvbHlnb24pIHtcbiAgICAgIHRoaXMuaG9zdCA9IGdlb21ldHJ5TXVsdGlwb2x5Z29uO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FvbC1jb2xsZWN0aW9uLWNvb3JkaW5hdGVzIG11c3QgYmUgYSBjaGlsZCBvZiBhIGdlb21ldHJ5IGNvbXBvbmVudCcpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubWFwLmluc3RhbmNlLm9uKCdjaGFuZ2U6dmlldycsIChlKSA9PiB0aGlzLm9uTWFwVmlld0NoYW5nZWQoZSkpO1xuICAgIHRoaXMubWFwU3JpZCA9IHRoaXMubWFwLmluc3RhbmNlLmdldFZpZXcoKS5nZXRQcm9qZWN0aW9uKCkuZ2V0Q29kZSgpO1xuICAgIHRoaXMudHJhbnNmb3JtQ29vcmRpbmF0ZXMoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICB0aGlzLnRyYW5zZm9ybUNvb3JkaW5hdGVzKCk7XG4gIH1cblxuICBwcml2YXRlIG9uTWFwVmlld0NoYW5nZWQoZXZlbnQpIHtcbiAgICB0aGlzLm1hcFNyaWQgPSBldmVudC50YXJnZXQuZ2V0KGV2ZW50LmtleSkuZ2V0UHJvamVjdGlvbigpLmdldENvZGUoKTtcbiAgICB0aGlzLnRyYW5zZm9ybUNvb3JkaW5hdGVzKCk7XG4gIH1cblxuICBwcml2YXRlIHRyYW5zZm9ybUNvb3JkaW5hdGVzKCkge1xuICAgIGxldCB0cmFuc2Zvcm1lZENvb3JkaW5hdGVzOiBDb29yZGluYXRlW10gfCBDb29yZGluYXRlW11bXSB8IENvb3JkaW5hdGVbXVtdW107XG5cbiAgICBpZiAodGhpcy5zcmlkID09PSB0aGlzLm1hcFNyaWQpIHtcbiAgICAgIHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXMgPSB0aGlzLmNvb3JkaW5hdGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2l0Y2ggKHRoaXMuaG9zdC5jb21wb25lbnRUeXBlKSB7XG4gICAgICAgIGNhc2UgJ2dlb21ldHJ5LWxpbmVzdHJpbmcnOlxuICAgICAgICBjYXNlICdnZW9tZXRyeS1tdWx0aXBvaW50JzpcbiAgICAgICAgICB0cmFuc2Zvcm1lZENvb3JkaW5hdGVzID0gKHRoaXMuY29vcmRpbmF0ZXMgYXMgQ29vcmRpbmF0ZVtdKS5tYXAoKGMpID0+IHRyYW5zZm9ybShjLCB0aGlzLnNyaWQsIHRoaXMubWFwU3JpZCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdnZW9tZXRyeS1wb2x5Z29uJzpcbiAgICAgICAgY2FzZSAnZ2VvbWV0cnktbXVsdGlsaW5lc3RyaW5nJzpcbiAgICAgICAgICB0cmFuc2Zvcm1lZENvb3JkaW5hdGVzID0gKHRoaXMuY29vcmRpbmF0ZXMgYXMgQ29vcmRpbmF0ZVtdW10pLm1hcCgoY2MpID0+XG4gICAgICAgICAgICBjYy5tYXAoKGMpID0+IHRyYW5zZm9ybShjLCB0aGlzLnNyaWQsIHRoaXMubWFwU3JpZCkpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZ2VvbWV0cnktbXVsdGlwb2x5Z29uJzpcbiAgICAgICAgICB0cmFuc2Zvcm1lZENvb3JkaW5hdGVzID0gKHRoaXMuY29vcmRpbmF0ZXMgYXMgQ29vcmRpbmF0ZVtdW11bXSkubWFwKChjY2MpID0+XG4gICAgICAgICAgICBjY2MubWFwKChjYykgPT4gY2MubWFwKChjKSA9PiB0cmFuc2Zvcm0oYywgdGhpcy5zcmlkLCB0aGlzLm1hcFNyaWQpKSlcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRDb29yZGluYXRlcyh0cmFuc2Zvcm1lZENvb3JkaW5hdGVzKTtcbiAgfVxufVxuIl19