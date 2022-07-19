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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbWV0cnljaXJjbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvZ2VvbS9nZW9tZXRyeWNpcmNsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDakMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDckUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBTWhEO0lBQTZDLDJDQUF1QjtJQVlsRSxpQ0FBWSxHQUFpQixFQUFFLElBQXNCO1FBQXJELFlBQ0Usa0JBQU0sR0FBRyxFQUFFLElBQUksQ0FBQyxTQUdqQjtRQWZNLG1CQUFhLEdBQUcsaUJBQWlCLENBQUM7UUFhdkMsd0VBQXdFO1FBQ3hFLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7SUFDckMsQ0FBQztJQVhELHNCQUFJLDJDQUFNO2FBQVY7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkMsQ0FBQzthQUNELFVBQVcsTUFBYztZQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxDQUFDOzs7T0FIQTs7Z0JBS2dCLFlBQVk7Z0JBQVEsZ0JBQWdCOztJQVByRDtRQURDLEtBQUssRUFBRTt5REFHUDtJQVBVLHVCQUF1QjtRQUpuQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFFBQVEsRUFBRSw2QkFBNkI7U0FDeEMsQ0FBQztPQUNXLHVCQUF1QixDQWlCbkM7SUFBRCw4QkFBQztDQUFBLEFBakJELENBQTZDLHVCQUF1QixHQWlCbkU7U0FqQlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGZWF0dXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2lyY2xlIH0gZnJvbSAnb2wvZ2VvbSc7XG5pbXBvcnQgeyBTaW1wbGVHZW9tZXRyeUNvbXBvbmVudCB9IGZyb20gJy4vc2ltcGxlZ2VvbWV0cnkuY29tcG9uZW50JztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtZ2VvbWV0cnktY2lyY2xlJyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxufSlcbmV4cG9ydCBjbGFzcyBHZW9tZXRyeUNpcmNsZUNvbXBvbmVudCBleHRlbmRzIFNpbXBsZUdlb21ldHJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIGNvbXBvbmVudFR5cGUgPSAnZ2VvbWV0cnktY2lyY2xlJztcbiAgcHVibGljIGluc3RhbmNlOiBDaXJjbGU7XG5cbiAgQElucHV0KClcbiAgZ2V0IHJhZGl1cygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlLmdldFJhZGl1cygpO1xuICB9XG4gIHNldCByYWRpdXMocmFkaXVzOiBudW1iZXIpIHtcbiAgICB0aGlzLmluc3RhbmNlLnNldFJhZGl1cyhyYWRpdXMpO1xuICB9XG5cbiAgY29uc3RydWN0b3IobWFwOiBNYXBDb21wb25lbnQsIGhvc3Q6IEZlYXR1cmVDb21wb25lbnQpIHtcbiAgICBzdXBlcihtYXAsIGhvc3QpO1xuICAgIC8vIGRlZmF1bHRpbmcgY29vcmRpbmF0ZXMgdG8gWzAsMF0uIFRvIGJlIG92ZXJyaWRkZW4gaW4gY2hpbGQgY29tcG9uZW50LlxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgQ2lyY2xlKFswLCAwXSk7XG4gIH1cbn1cbiJdfQ==