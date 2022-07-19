import { __decorate, __extends } from "tslib";
import { Component } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MapComponent } from '../map.component';
import { Polygon } from 'ol/geom';
var GeometryPolygonComponent = /** @class */ (function (_super) {
    __extends(GeometryPolygonComponent, _super);
    function GeometryPolygonComponent(map, host) {
        var _this = _super.call(this, map, host) || this;
        _this.componentType = 'geometry-polygon';
        return _this;
    }
    GeometryPolygonComponent.prototype.ngOnInit = function () {
        this.instance = new Polygon([
            [
                [0, 0],
                [1, 1],
                [0, 1],
            ],
        ]);
        _super.prototype.ngOnInit.call(this);
    };
    GeometryPolygonComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: FeatureComponent }
    ]; };
    GeometryPolygonComponent = __decorate([
        Component({
            selector: 'aol-geometry-polygon',
            template: " <ng-content></ng-content> "
        })
    ], GeometryPolygonComponent);
    return GeometryPolygonComponent;
}(SimpleGeometryComponent));
export { GeometryPolygonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbWV0cnlwb2x5Z29uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2dlb20vZ2VvbWV0cnlwb2x5Z29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFNBQVMsQ0FBQztBQU1sQztJQUE4Qyw0Q0FBdUI7SUFJbkUsa0NBQVksR0FBaUIsRUFBRSxJQUFzQjtRQUFyRCxZQUNFLGtCQUFNLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FDakI7UUFMTSxtQkFBYSxHQUFHLGtCQUFrQixDQUFDOztJQUsxQyxDQUFDO0lBRUQsMkNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUM7WUFDMUI7Z0JBQ0UsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDUDtTQUNGLENBQUMsQ0FBQztRQUNILGlCQUFNLFFBQVEsV0FBRSxDQUFDO0lBQ25CLENBQUM7O2dCQWJnQixZQUFZO2dCQUFRLGdCQUFnQjs7SUFKMUMsd0JBQXdCO1FBSnBDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsUUFBUSxFQUFFLDZCQUE2QjtTQUN4QyxDQUFDO09BQ1csd0JBQXdCLENBa0JwQztJQUFELCtCQUFDO0NBQUEsQUFsQkQsQ0FBOEMsdUJBQXVCLEdBa0JwRTtTQWxCWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmVhdHVyZUNvbXBvbmVudCB9IGZyb20gJy4uL2ZlYXR1cmUuY29tcG9uZW50JztcbmltcG9ydCB7IFNpbXBsZUdlb21ldHJ5Q29tcG9uZW50IH0gZnJvbSAnLi9zaW1wbGVnZW9tZXRyeS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQb2x5Z29uIH0gZnJvbSAnb2wvZ2VvbSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1nZW9tZXRyeS1wb2x5Z29uJyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxufSlcbmV4cG9ydCBjbGFzcyBHZW9tZXRyeVBvbHlnb25Db21wb25lbnQgZXh0ZW5kcyBTaW1wbGVHZW9tZXRyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ2dlb21ldHJ5LXBvbHlnb24nO1xuICBwdWJsaWMgaW5zdGFuY2U6IFBvbHlnb247XG5cbiAgY29uc3RydWN0b3IobWFwOiBNYXBDb21wb25lbnQsIGhvc3Q6IEZlYXR1cmVDb21wb25lbnQpIHtcbiAgICBzdXBlcihtYXAsIGhvc3QpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBQb2x5Z29uKFtcbiAgICAgIFtcbiAgICAgICAgWzAsIDBdLFxuICAgICAgICBbMSwgMV0sXG4gICAgICAgIFswLCAxXSxcbiAgICAgIF0sXG4gICAgXSk7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgfVxufVxuIl19