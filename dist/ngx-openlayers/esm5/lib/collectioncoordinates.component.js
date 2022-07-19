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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbmNvb3JkaW5hdGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2NvbGxlY3Rpb25jb29yZGluYXRlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixRQUFRLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM1RixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUV0RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBTXBDO0lBU0Usd0NBQ1UsR0FBaUIsRUFDYixrQkFBK0MsRUFDL0MsZUFBeUMsRUFDekMsa0JBQStDLEVBQy9DLHVCQUF5RCxFQUN6RCxvQkFBbUQ7UUFMdkQsUUFBRyxHQUFILEdBQUcsQ0FBYztRQVJuQixZQUFPLEdBQUcsV0FBVyxDQUFDO1FBSzlCLFNBQUksR0FBRyxXQUFXLENBQUM7UUFVakIsSUFBSSxDQUFDLENBQUMsa0JBQWtCLEVBQUU7WUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxrQkFBa0IsQ0FBQztTQUNoQzthQUFNLElBQUksQ0FBQyxDQUFDLGVBQWUsRUFBRTtZQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLGVBQWUsQ0FBQztTQUM3QjthQUFNLElBQUksQ0FBQyxDQUFDLGtCQUFrQixFQUFFO1lBQy9CLElBQUksQ0FB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LFFBQVEsQ0FBQyxjQUFjLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUM1RCxDQUFDOztnQkEvRGMsWUFBWTtnQkFDTywyQkFBMkIsdUJBQTFELFFBQVE7Z0JBQ29CLHdCQUF3Qix1QkFBcEQsUUFBUTtnQkFDdUIsMkJBQTJCLHVCQUExRCxRQUFRO2dCQUM0QixnQ0FBZ0MsdUJBQXBFLFFBQVE7Z0JBQ3lCLDZCQUE2Qix1QkFBOUQsUUFBUTs7SUFWWDtRQURDLEtBQUssRUFBRTt1RUFDc0Q7SUFFOUQ7UUFEQyxLQUFLLEVBQUU7Z0VBQ1c7SUFQUiw4QkFBOEI7UUFKMUMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDRCQUE0QjtZQUN0QyxRQUFRLEVBQUUsb0RBQWtEO1NBQzdELENBQUM7UUFZRyxXQUFBLFFBQVEsRUFBRSxDQUFBO1FBQ1YsV0FBQSxRQUFRLEVBQUUsQ0FBQTtRQUNWLFdBQUEsUUFBUSxFQUFFLENBQUE7UUFDVixXQUFBLFFBQVEsRUFBRSxDQUFBO1FBQ1YsV0FBQSxRQUFRLEVBQUUsQ0FBQTtPQWZGLDhCQUE4QixDQTBFMUM7SUFBRCxxQ0FBQztDQUFBLEFBMUVELElBMEVDO1NBMUVZLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPcHRpb25hbCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi9tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IEdlb21ldHJ5TGluZXN0cmluZ0NvbXBvbmVudCB9IGZyb20gJy4vZ2VvbS9nZW9tZXRyeWxpbmVzdHJpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IEdlb21ldHJ5UG9seWdvbkNvbXBvbmVudCB9IGZyb20gJy4vZ2VvbS9nZW9tZXRyeXBvbHlnb24uY29tcG9uZW50JztcbmltcG9ydCB7IEdlb21ldHJ5TXVsdGlQb2ludENvbXBvbmVudCB9IGZyb20gJy4vZ2VvbS9nZW9tZXRyeW11bHRpcG9pbnQuY29tcG9uZW50JztcbmltcG9ydCB7IEdlb21ldHJ5TXVsdGlMaW5lc3RyaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9nZW9tL2dlb21ldHJ5bXVsdGlsaW5lc3RyaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHZW9tZXRyeU11bHRpUG9seWdvbkNvbXBvbmVudCB9IGZyb20gJy4vZ2VvbS9nZW9tZXRyeW11bHRpcG9seWdvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29vcmRpbmF0ZSB9IGZyb20gJ29sL2Nvb3JkaW5hdGUnO1xuaW1wb3J0IHsgdHJhbnNmb3JtIH0gZnJvbSAnb2wvcHJvaic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1jb2xsZWN0aW9uLWNvb3JkaW5hdGVzJyxcbiAgdGVtcGxhdGU6IGAgPGRpdiBjbGFzcz1cImFvbC1jb2xsZWN0aW9uLWNvb3JkaW5hdGVzXCI+PC9kaXY+IGAsXG59KVxuZXhwb3J0IGNsYXNzIENvbGxlY3Rpb25Db29yZGluYXRlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgcHJpdmF0ZSBob3N0OiBhbnk7XG4gIHByaXZhdGUgbWFwU3JpZCA9ICdFUFNHOjM4NTcnO1xuXG4gIEBJbnB1dCgpXG4gIGNvb3JkaW5hdGVzOiBDb29yZGluYXRlW10gfCBDb29yZGluYXRlW11bXSB8IENvb3JkaW5hdGVbXVtdW107XG4gIEBJbnB1dCgpXG4gIHNyaWQgPSAnRVBTRzozODU3JztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50LFxuICAgIEBPcHRpb25hbCgpIGdlb21ldHJ5TGluZXN0cmluZzogR2VvbWV0cnlMaW5lc3RyaW5nQ29tcG9uZW50LFxuICAgIEBPcHRpb25hbCgpIGdlb21ldHJ5UG9seWdvbjogR2VvbWV0cnlQb2x5Z29uQ29tcG9uZW50LFxuICAgIEBPcHRpb25hbCgpIGdlb21ldHJ5TXVsdGlwb2ludDogR2VvbWV0cnlNdWx0aVBvaW50Q29tcG9uZW50LFxuICAgIEBPcHRpb25hbCgpIGdlb21ldHJ5TXVsdGlsaW5lc3RyaW5nOiBHZW9tZXRyeU11bHRpTGluZXN0cmluZ0NvbXBvbmVudCxcbiAgICBAT3B0aW9uYWwoKSBnZW9tZXRyeU11bHRpcG9seWdvbjogR2VvbWV0cnlNdWx0aVBvbHlnb25Db21wb25lbnRcbiAgKSB7XG4gICAgaWYgKCEhZ2VvbWV0cnlMaW5lc3RyaW5nKSB7XG4gICAgICB0aGlzLmhvc3QgPSBnZW9tZXRyeUxpbmVzdHJpbmc7XG4gICAgfSBlbHNlIGlmICghIWdlb21ldHJ5UG9seWdvbikge1xuICAgICAgdGhpcy5ob3N0ID0gZ2VvbWV0cnlQb2x5Z29uO1xuICAgIH0gZWxzZSBpZiAoISFnZW9tZXRyeU11bHRpcG9pbnQpIHtcbiAgICAgIHRoaXMuaG9zdCA9IGdlb21ldHJ5TXVsdGlwb2ludDtcbiAgICB9IGVsc2UgaWYgKCEhZ2VvbWV0cnlNdWx0aWxpbmVzdHJpbmcpIHtcbiAgICAgIHRoaXMuaG9zdCA9IGdlb21ldHJ5TXVsdGlsaW5lc3RyaW5nO1xuICAgIH0gZWxzZSBpZiAoISFnZW9tZXRyeU11bHRpcG9seWdvbikge1xuICAgICAgdGhpcy5ob3N0ID0gZ2VvbWV0cnlNdWx0aXBvbHlnb247XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYW9sLWNvbGxlY3Rpb24tY29vcmRpbmF0ZXMgbXVzdCBiZSBhIGNoaWxkIG9mIGEgZ2VvbWV0cnkgY29tcG9uZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2Uub24oJ2NoYW5nZTp2aWV3JywgKGUpID0+IHRoaXMub25NYXBWaWV3Q2hhbmdlZChlKSk7XG4gICAgdGhpcy5tYXBTcmlkID0gdGhpcy5tYXAuaW5zdGFuY2UuZ2V0VmlldygpLmdldFByb2plY3Rpb24oKS5nZXRDb2RlKCk7XG4gICAgdGhpcy50cmFuc2Zvcm1Db29yZGluYXRlcygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIHRoaXMudHJhbnNmb3JtQ29vcmRpbmF0ZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgb25NYXBWaWV3Q2hhbmdlZChldmVudCkge1xuICAgIHRoaXMubWFwU3JpZCA9IGV2ZW50LnRhcmdldC5nZXQoZXZlbnQua2V5KS5nZXRQcm9qZWN0aW9uKCkuZ2V0Q29kZSgpO1xuICAgIHRoaXMudHJhbnNmb3JtQ29vcmRpbmF0ZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgdHJhbnNmb3JtQ29vcmRpbmF0ZXMoKSB7XG4gICAgbGV0IHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXM6IENvb3JkaW5hdGVbXSB8IENvb3JkaW5hdGVbXVtdIHwgQ29vcmRpbmF0ZVtdW11bXTtcblxuICAgIGlmICh0aGlzLnNyaWQgPT09IHRoaXMubWFwU3JpZCkge1xuICAgICAgdHJhbnNmb3JtZWRDb29yZGluYXRlcyA9IHRoaXMuY29vcmRpbmF0ZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXRjaCAodGhpcy5ob3N0LmNvbXBvbmVudFR5cGUpIHtcbiAgICAgICAgY2FzZSAnZ2VvbWV0cnktbGluZXN0cmluZyc6XG4gICAgICAgIGNhc2UgJ2dlb21ldHJ5LW11bHRpcG9pbnQnOlxuICAgICAgICAgIHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXMgPSAodGhpcy5jb29yZGluYXRlcyBhcyBDb29yZGluYXRlW10pLm1hcCgoYykgPT4gdHJhbnNmb3JtKGMsIHRoaXMuc3JpZCwgdGhpcy5tYXBTcmlkKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2dlb21ldHJ5LXBvbHlnb24nOlxuICAgICAgICBjYXNlICdnZW9tZXRyeS1tdWx0aWxpbmVzdHJpbmcnOlxuICAgICAgICAgIHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXMgPSAodGhpcy5jb29yZGluYXRlcyBhcyBDb29yZGluYXRlW11bXSkubWFwKChjYykgPT5cbiAgICAgICAgICAgIGNjLm1hcCgoYykgPT4gdHJhbnNmb3JtKGMsIHRoaXMuc3JpZCwgdGhpcy5tYXBTcmlkKSlcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdnZW9tZXRyeS1tdWx0aXBvbHlnb24nOlxuICAgICAgICAgIHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXMgPSAodGhpcy5jb29yZGluYXRlcyBhcyBDb29yZGluYXRlW11bXVtdKS5tYXAoKGNjYykgPT5cbiAgICAgICAgICAgIGNjYy5tYXAoKGNjKSA9PiBjYy5tYXAoKGMpID0+IHRyYW5zZm9ybShjLCB0aGlzLnNyaWQsIHRoaXMubWFwU3JpZCkpKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldENvb3JkaW5hdGVzKHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXMpO1xuICB9XG59XG4iXX0=