import { __decorate, __extends } from "tslib";
import { Component, Input } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { Circle } from 'ol/geom';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MapComponent } from '../map.component';
var GeometryCircleComponent = /** @class */ (function (_super) {
    __extends(GeometryCircleComponent, _super);
    function GeometryCircleComponent(map, host) {
        var _this = _super.call(this, map, host) || this;
        _this.componentType = 'geometry-circle';
        // defaulting coordinates to [0,0]. To be overridden in child component.
        _this.instance = new Circle([0, 0]);
        return _this;
    }
    Object.defineProperty(GeometryCircleComponent.prototype, "radius", {
        get: function () {
            return this.instance.getRadius();
        },
        set: function (radius) {
            this.instance.setRadius(radius);
        },
        enumerable: true,
        configurable: true
    });
    GeometryCircleComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: FeatureComponent }
    ]; };
    __decorate([
        Input()
    ], GeometryCircleComponent.prototype, "radius", null);
    GeometryCircleComponent = __decorate([
        Component({
            selector: 'aol-geometry-circle',
            template: " <ng-content></ng-content> "
        })
    ], GeometryCircleComponent);
    return GeometryCircleComponent;
}(SimpleGeometryComponent));
export { GeometryCircleComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbWV0cnljaXJjbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9sLyIsInNvdXJjZXMiOlsibGliL2dlb20vZ2VvbWV0cnljaXJjbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ2pDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQU1oRDtJQUE2QywyQ0FBdUI7SUFZbEUsaUNBQVksR0FBaUIsRUFBRSxJQUFzQjtRQUFyRCxZQUNFLGtCQUFNLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FHakI7UUFmTSxtQkFBYSxHQUFHLGlCQUFpQixDQUFDO1FBYXZDLHdFQUF3RTtRQUN4RSxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7O0lBQ3JDLENBQUM7SUFYRCxzQkFBSSwyQ0FBTTthQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25DLENBQUM7YUFDRCxVQUFXLE1BQWM7WUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsQ0FBQzs7O09BSEE7O2dCQUtnQixZQUFZO2dCQUFRLGdCQUFnQjs7SUFQckQ7UUFEQyxLQUFLLEVBQUU7eURBR1A7SUFQVSx1QkFBdUI7UUFKbkMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixRQUFRLEVBQUUsNkJBQTZCO1NBQ3hDLENBQUM7T0FDVyx1QkFBdUIsQ0FpQm5DO0lBQUQsOEJBQUM7Q0FBQSxBQWpCRCxDQUE2Qyx1QkFBdUIsR0FpQm5FO1NBakJZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmVhdHVyZUNvbXBvbmVudCB9IGZyb20gJy4uL2ZlYXR1cmUuY29tcG9uZW50JztcbmltcG9ydCB7IENpcmNsZSB9IGZyb20gJ29sL2dlb20nO1xuaW1wb3J0IHsgU2ltcGxlR2VvbWV0cnlDb21wb25lbnQgfSBmcm9tICcuL3NpbXBsZWdlb21ldHJ5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWdlb21ldHJ5LWNpcmNsZScsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbn0pXG5leHBvcnQgY2xhc3MgR2VvbWV0cnlDaXJjbGVDb21wb25lbnQgZXh0ZW5kcyBTaW1wbGVHZW9tZXRyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ2dlb21ldHJ5LWNpcmNsZSc7XG4gIHB1YmxpYyBpbnN0YW5jZTogQ2lyY2xlO1xuXG4gIEBJbnB1dCgpXG4gIGdldCByYWRpdXMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5nZXRSYWRpdXMoKTtcbiAgfVxuICBzZXQgcmFkaXVzKHJhZGl1czogbnVtYmVyKSB7XG4gICAgdGhpcy5pbnN0YW5jZS5zZXRSYWRpdXMocmFkaXVzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG1hcDogTWFwQ29tcG9uZW50LCBob3N0OiBGZWF0dXJlQ29tcG9uZW50KSB7XG4gICAgc3VwZXIobWFwLCBob3N0KTtcbiAgICAvLyBkZWZhdWx0aW5nIGNvb3JkaW5hdGVzIHRvIFswLDBdLiBUbyBiZSBvdmVycmlkZGVuIGluIGNoaWxkIGNvbXBvbmVudC5cbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IENpcmNsZShbMCwgMF0pO1xuICB9XG59XG4iXX0=