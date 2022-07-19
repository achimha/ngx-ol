import { __decorate, __param } from "tslib";
import { Component, Input, Optional } from '@angular/core';
import { MapComponent } from './map.component';
import { GeometryLinestringComponent } from './geom/geometrylinestring.component';
import { GeometryPolygonComponent } from './geom/geometrypolygon.component';
import { GeometryMultiPointComponent } from './geom/geometrymultipoint.component';
import { GeometryMultiLinestringComponent } from './geom/geometrymultilinestring.component';
import { GeometryMultiPolygonComponent } from './geom/geometrymultipolygon.component';
import { transform } from 'ol/proj';
var CollectionCoordinatesComponent = /** @class */ (function () {
    function CollectionCoordinatesComponent(map, geometryLinestring, geometryPolygon, geometryMultipoint, geometryMultilinestring, geometryMultipolygon) {
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
    CollectionCoordinatesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.map.instance.on('change:view', function (e) { return _this.onMapViewChanged(e); });
        this.mapSrid = this.map.instance.getView().getProjection().getCode();
        this.transformCoordinates();
    };
    CollectionCoordinatesComponent.prototype.ngOnChanges = function (changes) {
        this.transformCoordinates();
    };
    CollectionCoordinatesComponent.prototype.onMapViewChanged = function (event) {
        this.mapSrid = event.target.get(event.key).getProjection().getCode();
        this.transformCoordinates();
    };
    CollectionCoordinatesComponent.prototype.transformCoordinates = function () {
        var _this = this;
        var transformedCoordinates;
        if (this.srid === this.mapSrid) {
            transformedCoordinates = this.coordinates;
        }
        else {
            switch (this.host.componentType) {
                case 'geometry-linestring':
                case 'geometry-multipoint':
                    transformedCoordinates = this.coordinates.map(function (c) { return transform(c, _this.srid, _this.mapSrid); });
                    break;
                case 'geometry-polygon':
                case 'geometry-multilinestring':
                    transformedCoordinates = this.coordinates.map(function (cc) {
                        return cc.map(function (c) { return transform(c, _this.srid, _this.mapSrid); });
                    });
                    break;
                case 'geometry-multipolygon':
                    transformedCoordinates = this.coordinates.map(function (ccc) {
                        return ccc.map(function (cc) { return cc.map(function (c) { return transform(c, _this.srid, _this.mapSrid); }); });
                    });
                    break;
            }
        }
        this.host.instance.setCoordinates(transformedCoordinates);
    };
    CollectionCoordinatesComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: GeometryLinestringComponent, decorators: [{ type: Optional }] },
        { type: GeometryPolygonComponent, decorators: [{ type: Optional }] },
        { type: GeometryMultiPointComponent, decorators: [{ type: Optional }] },
        { type: GeometryMultiLinestringComponent, decorators: [{ type: Optional }] },
        { type: GeometryMultiPolygonComponent, decorators: [{ type: Optional }] }
    ]; };
    __decorate([
        Input()
    ], CollectionCoordinatesComponent.prototype, "coordinates", void 0);
    __decorate([
        Input()
    ], CollectionCoordinatesComponent.prototype, "srid", void 0);
    CollectionCoordinatesComponent = __decorate([
        Component({
            selector: 'aol-collection-coordinates',
            template: " <div class=\"aol-collection-coordinates\"></div> "
        }),
        __param(1, Optional()),
        __param(2, Optional()),
        __param(3, Optional()),
        __param(4, Optional()),
        __param(5, Optional())
    ], CollectionCoordinatesComponent);
    return CollectionCoordinatesComponent;
}());
export { CollectionCoordinatesComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbmNvb3JkaW5hdGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9jb2xsZWN0aW9uY29vcmRpbmF0ZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsUUFBUSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDNUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDNUYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFdEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQU1wQztJQVNFLHdDQUNVLEdBQWlCLEVBQ2Isa0JBQStDLEVBQy9DLGVBQXlDLEVBQ3pDLGtCQUErQyxFQUMvQyx1QkFBeUQsRUFDekQsb0JBQW1EO1FBTHZELFFBQUcsR0FBSCxHQUFHLENBQWM7UUFSbkIsWUFBTyxHQUFHLFdBQVcsQ0FBQztRQUs5QixTQUFJLEdBQUcsV0FBVyxDQUFDO1FBVWpCLElBQUksQ0FBQyxDQUFDLGtCQUFrQixFQUFFO1lBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsa0JBQWtCLENBQUM7U0FDaEM7YUFBTSxJQUFJLENBQUMsQ0FBQyxlQUFlLEVBQUU7WUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxlQUFlLENBQUM7U0FDN0I7YUFBTSxJQUFJLENBQUMsQ0FBQyxrQkFBa0IsRUFBRTtZQUMvQixJQUFJLENBQUMsSUFBSSxH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QUMsY0FBYyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDNUQsQ0FBQzs7Z0JBL0RjLFlBQVk7Z0JBQ08sMkJBQTJCLHVCQUExRCxRQUFRO2dCQUNvQix3QkFBd0IsdUJBQXBELFFBQVE7Z0JBQ3VCLDJCQUEyQix1QkFBMUQsUUFBUTtnQkFDNEIsZ0NBQWdDLHVCQUFwRSxRQUFRO2dCQUN5Qiw2QkFBNkIsdUJBQTlELFFBQVE7O0lBVlg7UUFEQyxLQUFLLEVBQUU7dUVBQ3NEO0lBRTlEO1FBREMsS0FBSyxFQUFFO2dFQUNXO0lBUFIsOEJBQThCO1FBSjFDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSw0QkFBNEI7WUFDdEMsUUFBUSxFQUFFLG9EQUFrRDtTQUM3RCxDQUFDO1FBWUcsV0FBQSxRQUFRLEVBQUUsQ0FBQTtRQUNWLFdBQUEsUUFBUSxFQUFFLENBQUE7UUFDVixXQUFBLFFBQVEsRUFBRSxDQUFBO1FBQ1YsV0FBQSxRQUFRLEVBQUUsQ0FBQTtRQUNWLFdBQUEsUUFBUSxFQUFFLENBQUE7T0FmRiw4QkFBOEIsQ0EwRTFDO0lBQUQscUNBQUM7Q0FBQSxBQTFFRCxJQTBFQztTQTFFWSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3B0aW9uYWwsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4vbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHZW9tZXRyeUxpbmVzdHJpbmdDb21wb25lbnQgfSBmcm9tICcuL2dlb20vZ2VvbWV0cnlsaW5lc3RyaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHZW9tZXRyeVBvbHlnb25Db21wb25lbnQgfSBmcm9tICcuL2dlb20vZ2VvbWV0cnlwb2x5Z29uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHZW9tZXRyeU11bHRpUG9pbnRDb21wb25lbnQgfSBmcm9tICcuL2dlb20vZ2VvbWV0cnltdWx0aXBvaW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHZW9tZXRyeU11bHRpTGluZXN0cmluZ0NvbXBvbmVudCB9IGZyb20gJy4vZ2VvbS9nZW9tZXRyeW11bHRpbGluZXN0cmluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2VvbWV0cnlNdWx0aVBvbHlnb25Db21wb25lbnQgfSBmcm9tICcuL2dlb20vZ2VvbWV0cnltdWx0aXBvbHlnb24uY29tcG9uZW50JztcbmltcG9ydCB7IENvb3JkaW5hdGUgfSBmcm9tICdvbC9jb29yZGluYXRlJztcbmltcG9ydCB7IHRyYW5zZm9ybSB9IGZyb20gJ29sL3Byb2onO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtY29sbGVjdGlvbi1jb29yZGluYXRlcycsXG4gIHRlbXBsYXRlOiBgIDxkaXYgY2xhc3M9XCJhb2wtY29sbGVjdGlvbi1jb29yZGluYXRlc1wiPjwvZGl2PiBgLFxufSlcbmV4cG9ydCBjbGFzcyBDb2xsZWN0aW9uQ29vcmRpbmF0ZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIHByaXZhdGUgaG9zdDogYW55O1xuICBwcml2YXRlIG1hcFNyaWQgPSAnRVBTRzozODU3JztcblxuICBASW5wdXQoKVxuICBjb29yZGluYXRlczogQ29vcmRpbmF0ZVtdIHwgQ29vcmRpbmF0ZVtdW10gfCBDb29yZGluYXRlW11bXVtdO1xuICBASW5wdXQoKVxuICBzcmlkID0gJ0VQU0c6Mzg1Nyc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCxcbiAgICBAT3B0aW9uYWwoKSBnZW9tZXRyeUxpbmVzdHJpbmc6IEdlb21ldHJ5TGluZXN0cmluZ0NvbXBvbmVudCxcbiAgICBAT3B0aW9uYWwoKSBnZW9tZXRyeVBvbHlnb246IEdlb21ldHJ5UG9seWdvbkNvbXBvbmVudCxcbiAgICBAT3B0aW9uYWwoKSBnZW9tZXRyeU11bHRpcG9pbnQ6IEdlb21ldHJ5TXVsdGlQb2ludENvbXBvbmVudCxcbiAgICBAT3B0aW9uYWwoKSBnZW9tZXRyeU11bHRpbGluZXN0cmluZzogR2VvbWV0cnlNdWx0aUxpbmVzdHJpbmdDb21wb25lbnQsXG4gICAgQE9wdGlvbmFsKCkgZ2VvbWV0cnlNdWx0aXBvbHlnb246IEdlb21ldHJ5TXVsdGlQb2x5Z29uQ29tcG9uZW50XG4gICkge1xuICAgIGlmICghIWdlb21ldHJ5TGluZXN0cmluZykge1xuICAgICAgdGhpcy5ob3N0ID0gZ2VvbWV0cnlMaW5lc3RyaW5nO1xuICAgIH0gZWxzZSBpZiAoISFnZW9tZXRyeVBvbHlnb24pIHtcbiAgICAgIHRoaXMuaG9zdCA9IGdlb21ldHJ5UG9seWdvbjtcbiAgICB9IGVsc2UgaWYgKCEhZ2VvbWV0cnlNdWx0aXBvaW50KSB7XG4gICAgICB0aGlzLmhvc3QgPSBnZW9tZXRyeU11bHRpcG9pbnQ7XG4gICAgfSBlbHNlIGlmICghIWdlb21ldHJ5TXVsdGlsaW5lc3RyaW5nKSB7XG4gICAgICB0aGlzLmhvc3QgPSBnZW9tZXRyeU11bHRpbGluZXN0cmluZztcbiAgICB9IGVsc2UgaWYgKCEhZ2VvbWV0cnlNdWx0aXBvbHlnb24pIHtcbiAgICAgIHRoaXMuaG9zdCA9IGdlb21ldHJ5TXVsdGlwb2x5Z29uO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FvbC1jb2xsZWN0aW9uLWNvb3JkaW5hdGVzIG11c3QgYmUgYSBjaGlsZCBvZiBhIGdlb21ldHJ5IGNvbXBvbmVudCcpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubWFwLmluc3RhbmNlLm9uKCdjaGFuZ2U6dmlldycsIChlKSA9PiB0aGlzLm9uTWFwVmlld0NoYW5nZWQoZSkpO1xuICAgIHRoaXMubWFwU3JpZCA9IHRoaXMubWFwLmluc3RhbmNlLmdldFZpZXcoKS5nZXRQcm9qZWN0aW9uKCkuZ2V0Q29kZSgpO1xuICAgIHRoaXMudHJhbnNmb3JtQ29vcmRpbmF0ZXMoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICB0aGlzLnRyYW5zZm9ybUNvb3JkaW5hdGVzKCk7XG4gIH1cblxuICBwcml2YXRlIG9uTWFwVmlld0NoYW5nZWQoZXZlbnQpIHtcbiAgICB0aGlzLm1hcFNyaWQgPSBldmVudC50YXJnZXQuZ2V0KGV2ZW50LmtleSkuZ2V0UHJvamVjdGlvbigpLmdldENvZGUoKTtcbiAgICB0aGlzLnRyYW5zZm9ybUNvb3JkaW5hdGVzKCk7XG4gIH1cblxuICBwcml2YXRlIHRyYW5zZm9ybUNvb3JkaW5hdGVzKCkge1xuICAgIGxldCB0cmFuc2Zvcm1lZENvb3JkaW5hdGVzOiBDb29yZGluYXRlW10gfCBDb29yZGluYXRlW11bXSB8IENvb3JkaW5hdGVbXVtdW107XG5cbiAgICBpZiAodGhpcy5zcmlkID09PSB0aGlzLm1hcFNyaWQpIHtcbiAgICAgIHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXMgPSB0aGlzLmNvb3JkaW5hdGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2l0Y2ggKHRoaXMuaG9zdC5jb21wb25lbnRUeXBlKSB7XG4gICAgICAgIGNhc2UgJ2dlb21ldHJ5LWxpbmVzdHJpbmcnOlxuICAgICAgICBjYXNlICdnZW9tZXRyeS1tdWx0aXBvaW50JzpcbiAgICAgICAgICB0cmFuc2Zvcm1lZENvb3JkaW5hdGVzID0gKHRoaXMuY29vcmRpbmF0ZXMgYXMgQ29vcmRpbmF0ZVtdKS5tYXAoKGMpID0+IHRyYW5zZm9ybShjLCB0aGlzLnNyaWQsIHRoaXMubWFwU3JpZCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdnZW9tZXRyeS1wb2x5Z29uJzpcbiAgICAgICAgY2FzZSAnZ2VvbWV0cnktbXVsdGlsaW5lc3RyaW5nJzpcbiAgICAgICAgICB0cmFuc2Zvcm1lZENvb3JkaW5hdGVzID0gKHRoaXMuY29vcmRpbmF0ZXMgYXMgQ29vcmRpbmF0ZVtdW10pLm1hcCgoY2MpID0+XG4gICAgICAgICAgICBjYy5tYXAoKGMpID0+IHRyYW5zZm9ybShjLCB0aGlzLnNyaWQsIHRoaXMubWFwU3JpZCkpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZ2VvbWV0cnktbXVsdGlwb2x5Z29uJzpcbiAgICAgICAgICB0cmFuc2Zvcm1lZENvb3JkaW5hdGVzID0gKHRoaXMuY29vcmRpbmF0ZXMgYXMgQ29vcmRpbmF0ZVtdW11bXSkubWFwKChjY2MpID0+XG4gICAgICAgICAgICBjY2MubWFwKChjYykgPT4gY2MubWFwKChjKSA9PiB0cmFuc2Zvcm0oYywgdGhpcy5zcmlkLCB0aGlzLm1hcFNyaWQpKSlcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRDb29yZGluYXRlcyh0cmFuc2Zvcm1lZENvb3JkaW5hdGVzKTtcbiAgfVxufVxuIl19