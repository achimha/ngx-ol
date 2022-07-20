import * as tslib_1 from "tslib";
import { Component, Optional, Input } from '@angular/core';
import { transform } from 'ol/proj';
import { MapComponent } from './map.component';
import { GeometryPointComponent } from './geom/geometrypoint.component';
import { GeometryCircleComponent } from './geom/geometrycircle.component';
import { ViewComponent } from './view.component';
import { OverlayComponent } from './overlay.component';
var CoordinateComponent = /** @class */ (function () {
    function CoordinateComponent(map, viewHost, geometryPointHost, geometryCircleHost, overlayHost) {
        this.map = map;
        this.mapSrid = 'EPSG:3857';
        this.srid = 'EPSG:3857';
        // console.log('instancing aol-coordinate');
        if (geometryPointHost !== null) {
            this.host = geometryPointHost;
        }
        else if (geometryCircleHost !== null) {
            this.host = geometryCircleHost;
        }
        else if (viewHost !== null) {
            this.host = viewHost;
        }
        else if (overlayHost !== null) {
            this.host = overlayHost;
        }
    }
    CoordinateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.map.instance.on('change:view', function (e) { return _this.onMapViewChanged(e); });
        this.mapSrid = this.map.instance.getView().getProjection().getCode();
        this.transformCoordinates();
    };
    CoordinateComponent.prototype.ngOnChanges = function (changes) {
        this.transformCoordinates();
    };
    CoordinateComponent.prototype.onMapViewChanged = function (event) {
        this.mapSrid = event.target.get(event.key).getProjection().getCode();
        this.transformCoordinates();
    };
    CoordinateComponent.prototype.transformCoordinates = function () {
        var transformedCoordinates;
        if (this.srid === this.mapSrid) {
            transformedCoordinates = [this.x, this.y];
        }
        else {
            transformedCoordinates = transform([this.x, this.y], this.srid, this.mapSrid);
        }
        switch (this.host.componentType) {
            case 'geometry-point':
                this.host.instance.setCoordinates(transformedCoordinates);
                break;
            case 'geometry-circle':
            case 'view':
                this.host.instance.setCenter(transformedCoordinates);
                break;
            case 'overlay':
                this.host.instance.setPosition(transformedCoordinates);
                break;
        }
    };
    CoordinateComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: ViewComponent, decorators: [{ type: Optional }] },
        { type: GeometryPointComponent, decorators: [{ type: Optional }] },
        { type: GeometryCircleComponent, decorators: [{ type: Optional }] },
        { type: OverlayComponent, decorators: [{ type: Optional }] }
    ]; };
    tslib_1.__decorate([
        Input()
    ], CoordinateComponent.prototype, "x", void 0);
    tslib_1.__decorate([
        Input()
    ], CoordinateComponent.prototype, "y", void 0);
    tslib_1.__decorate([
        Input()
    ], CoordinateComponent.prototype, "srid", void 0);
    CoordinateComponent = tslib_1.__decorate([
        Component({
            selector: 'aol-coordinate',
            template: " <div class=\"aol-coordinate\"></div> "
        }),
        tslib_1.__param(1, Optional()),
        tslib_1.__param(2, Optional()),
        tslib_1.__param(3, Optional()),
        tslib_1.__param(4, Optional())
    ], CoordinateComponent);
    return CoordinateComponent;
}());
export { CoordinateComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29vcmRpbmF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvY29vcmRpbmF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFhLEtBQUssRUFBeUIsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNwQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBTXZEO0lBV0UsNkJBQ1UsR0FBaUIsRUFDYixRQUF1QixFQUN2QixpQkFBeUMsRUFDekMsa0JBQTJDLEVBQzNDLFdBQTZCO1FBSmpDLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFWbkIsWUFBTyxHQUFHLFdBQVcsQ0FBQztRQU85QixTQUFJLEdBQUcsV0FBVyxDQUFDO1FBU2pCLDRDQUE0QztRQUM1QyxJQUFJLGlCQUFpQixLQUFLLElBQUksRUFBRTtZQUM5QixJQUFJLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDO1NBQy9CO2FBQU0sSUFBSSxrQkFBa0IsS0FBSyxJQUFJLEVBQUU7WUFDdEMsSUFBSSxDQUFDLElBQUksR0FBRyxrQkFBa0IsQ0FBQztTQUNoQzthQUFNLElBQUksUUFBUSxLQUFLLElBQUksRUFBRTtZQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztTQUN0QjthQUFNLElBQUksV0FBVyxLQUFLLElBQUksRUFBRTtZQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQztTQUN6QjtJQUNILENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFVBQUMsQ0FBQyxJQUFLLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUF4QixDQUF3QixDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNyRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQseUNBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTyw4Q0FBZ0IsR0FBeEIsVUFBeUIsS0FBSztRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNyRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRU8sa0RBQW9CLEdBQTVCO1FBQ0UsSUFBSSxzQkFBZ0MsQ0FBQztRQUVyQyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUM5QixzQkFBc0IsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNDO2FBQU07WUFDTCxzQkFBc0IsR0FBRyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMvRTtRQUVELFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDL0IsS0FBSyxnQkFBZ0I7Z0JBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2dCQUMxRCxNQUFNO1lBQ1IsS0FBSyxpQkFBaUIsQ0FBQztZQUN2QixLQUFLLE1BQU07Z0JBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLENBQUM7Z0JBQ3JELE1BQU07WUFDUixLQUFLLFNBQVM7Z0JBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLHNCQUFzQixDQUFDLENBQUM7Z0JBQ3ZELE1BQU07U0FDVDtJQUNILENBQUM7O2dCQXREYyxZQUFZO2dCQUNILGFBQWEsdUJBQWxDLFFBQVE7Z0JBQ3NCLHNCQUFzQix1QkFBcEQsUUFBUTtnQkFDdUIsdUJBQXVCLHVCQUF0RCxRQUFRO2dCQUNnQixnQkFBZ0IsdUJBQXhDLFFBQVE7O0lBWFg7UUFEQyxLQUFLLEVBQUU7a0RBQ0U7SUFFVjtRQURDLEtBQUssRUFBRTtrREFDRTtJQUVWO1FBREMsS0FBSyxFQUFFO3FEQUNXO0lBVFIsbUJBQW1CO1FBSi9CLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUFFLHdDQUFzQztTQUNqRCxDQUFDO1FBY0csbUJBQUEsUUFBUSxFQUFFLENBQUE7UUFDVixtQkFBQSxRQUFRLEVBQUUsQ0FBQTtRQUNWLG1CQUFBLFFBQVEsRUFBRSxDQUFBO1FBQ1YsbUJBQUEsUUFBUSxFQUFFLENBQUE7T0FoQkYsbUJBQW1CLENBbUUvQjtJQUFELDBCQUFDO0NBQUEsQUFuRUQsSUFtRUM7U0FuRVksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPcHRpb25hbCwgT25DaGFuZ2VzLCBJbnB1dCwgU2ltcGxlQ2hhbmdlcywgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0cmFuc2Zvcm0gfSBmcm9tICdvbC9wcm9qJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4vbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHZW9tZXRyeVBvaW50Q29tcG9uZW50IH0gZnJvbSAnLi9nZW9tL2dlb21ldHJ5cG9pbnQuY29tcG9uZW50JztcbmltcG9ydCB7IEdlb21ldHJ5Q2lyY2xlQ29tcG9uZW50IH0gZnJvbSAnLi9nZW9tL2dlb21ldHJ5Y2lyY2xlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi92aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPdmVybGF5Q29tcG9uZW50IH0gZnJvbSAnLi9vdmVybGF5LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1jb29yZGluYXRlJyxcbiAgdGVtcGxhdGU6IGAgPGRpdiBjbGFzcz1cImFvbC1jb29yZGluYXRlXCI+PC9kaXY+IGAsXG59KVxuZXhwb3J0IGNsYXNzIENvb3JkaW5hdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIHByaXZhdGUgaG9zdDogYW55O1xuICBwcml2YXRlIG1hcFNyaWQgPSAnRVBTRzozODU3JztcblxuICBASW5wdXQoKVxuICB4OiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHk6IG51bWJlcjtcbiAgQElucHV0KClcbiAgc3JpZCA9ICdFUFNHOjM4NTcnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQsXG4gICAgQE9wdGlvbmFsKCkgdmlld0hvc3Q6IFZpZXdDb21wb25lbnQsXG4gICAgQE9wdGlvbmFsKCkgZ2VvbWV0cnlQb2ludEhvc3Q6IEdlb21ldHJ5UG9pbnRDb21wb25lbnQsXG4gICAgQE9wdGlvbmFsKCkgZ2VvbWV0cnlDaXJjbGVIb3N0OiBHZW9tZXRyeUNpcmNsZUNvbXBvbmVudCxcbiAgICBAT3B0aW9uYWwoKSBvdmVybGF5SG9zdDogT3ZlcmxheUNvbXBvbmVudFxuICApIHtcbiAgICAvLyBjb25zb2xlLmxvZygnaW5zdGFuY2luZyBhb2wtY29vcmRpbmF0ZScpO1xuICAgIGlmIChnZW9tZXRyeVBvaW50SG9zdCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5ob3N0ID0gZ2VvbWV0cnlQb2ludEhvc3Q7XG4gICAgfSBlbHNlIGlmIChnZW9tZXRyeUNpcmNsZUhvc3QgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuaG9zdCA9IGdlb21ldHJ5Q2lyY2xlSG9zdDtcbiAgICB9IGVsc2UgaWYgKHZpZXdIb3N0ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmhvc3QgPSB2aWV3SG9zdDtcbiAgICB9IGVsc2UgaWYgKG92ZXJsYXlIb3N0ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmhvc3QgPSBvdmVybGF5SG9zdDtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5vbignY2hhbmdlOnZpZXcnLCAoZSkgPT4gdGhpcy5vbk1hcFZpZXdDaGFuZ2VkKGUpKTtcbiAgICB0aGlzLm1hcFNyaWQgPSB0aGlzLm1hcC5pbnN0YW5jZS5nZXRWaWV3KCkuZ2V0UHJvamVjdGlvbigpLmdldENvZGUoKTtcbiAgICB0aGlzLnRyYW5zZm9ybUNvb3JkaW5hdGVzKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgdGhpcy50cmFuc2Zvcm1Db29yZGluYXRlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbk1hcFZpZXdDaGFuZ2VkKGV2ZW50KSB7XG4gICAgdGhpcy5tYXBTcmlkID0gZXZlbnQudGFyZ2V0LmdldChldmVudC5rZXkpLmdldFByb2plY3Rpb24oKS5nZXRDb2RlKCk7XG4gICAgdGhpcy50cmFuc2Zvcm1Db29yZGluYXRlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSB0cmFuc2Zvcm1Db29yZGluYXRlcygpIHtcbiAgICBsZXQgdHJhbnNmb3JtZWRDb29yZGluYXRlczogbnVtYmVyW107XG5cbiAgICBpZiAodGhpcy5zcmlkID09PSB0aGlzLm1hcFNyaWQpIHtcbiAgICAgIHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXMgPSBbdGhpcy54LCB0aGlzLnldO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2Zvcm1lZENvb3JkaW5hdGVzID0gdHJhbnNmb3JtKFt0aGlzLngsIHRoaXMueV0sIHRoaXMuc3JpZCwgdGhpcy5tYXBTcmlkKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRoaXMuaG9zdC5jb21wb25lbnRUeXBlKSB7XG4gICAgICBjYXNlICdnZW9tZXRyeS1wb2ludCc6XG4gICAgICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRDb29yZGluYXRlcyh0cmFuc2Zvcm1lZENvb3JkaW5hdGVzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdnZW9tZXRyeS1jaXJjbGUnOlxuICAgICAgY2FzZSAndmlldyc6XG4gICAgICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRDZW50ZXIodHJhbnNmb3JtZWRDb29yZGluYXRlcyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnb3ZlcmxheSc6XG4gICAgICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRQb3NpdGlvbih0cmFuc2Zvcm1lZENvb3JkaW5hdGVzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG4iXX0=