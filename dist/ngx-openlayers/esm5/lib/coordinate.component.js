import { __decorate, __param } from "tslib";
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
    __decorate([
        Input()
    ], CoordinateComponent.prototype, "x", void 0);
    __decorate([
        Input()
    ], CoordinateComponent.prototype, "y", void 0);
    __decorate([
        Input()
    ], CoordinateComponent.prototype, "srid", void 0);
    CoordinateComponent = __decorate([
        Component({
            selector: 'aol-coordinate',
            template: " <div class=\"aol-coordinate\"></div> "
        }),
        __param(1, Optional()),
        __param(2, Optional()),
        __param(3, Optional()),
        __param(4, Optional())
    ], CoordinateComponent);
    return CoordinateComponent;
}());
export { CoordinateComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29vcmRpbmF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9jb29yZGluYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQWEsS0FBSyxFQUF5QixNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFNdkQ7SUFXRSw2QkFDVSxHQUFpQixFQUNiLFFBQXVCLEVBQ3ZCLGlCQUF5QyxFQUN6QyxrQkFBMkMsRUFDM0MsV0FBNkI7UUFKakMsUUFBRyxHQUFILEdBQUcsQ0FBYztRQVZuQixZQUFPLEdBQUcsV0FBVyxDQUFDO1FBTzlCLFNBQUksR0FBRyxXQUFXLENBQUM7UUFTakIsNENBQTRDO1FBQzVDLElBQUksaUJBQWlCLEtBQUssSUFBSSxFQUFFO1lBQzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUM7U0FDL0I7YUFBTSxJQUFJLGtCQUFrQixLQUFLLElBQUksRUFBRTtZQUN0QyxJQUFJLENBQUMsSUFBSSxHQUFHLGtCQUFrQixDQUFDO1NBQ2hDO2FBQU0sSUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1NBQ3RCO2FBQU0sSUFBSSxXQUFXLEtBQUssSUFBSSxFQUFFO1lBQy9CLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsVUFBQyxDQUFDLElBQUssT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQXhCLENBQXdCLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3JFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCx5Q0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVPLDhDQUFnQixHQUF4QixVQUF5QixLQUFLO1FBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3JFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTyxrREFBb0IsR0FBNUI7UUFDRSxJQUFJLHNCQUFnQyxDQUFDO1FBRXJDLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQzlCLHNCQUFzQixHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDM0M7YUFBTTtZQUNMLHNCQUFzQixHQUFHLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQy9FO1FBRUQsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUMvQixLQUFLLGdCQUFnQjtnQkFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLHNCQUFzQixDQUFDLENBQUM7Z0JBQzFELE1BQU07WUFDUixLQUFLLGlCQUFpQixDQUFDO1lBQ3ZCLEtBQUssTUFBTTtnQkFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUMsQ0FBQztnQkFDckQsTUFBTTtZQUNSLEtBQUssU0FBUztnQkFDWixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsc0JBQXNCLENBQUMsQ0FBQztnQkFDdkQsTUFBTTtTQUNUO0lBQ0gsQ0FBQzs7Z0JBdERjLFlBQVk7Z0JBQ0gsYUFBYSx1QkFBbEMsUUFBUTtnQkFDc0Isc0JBQXNCLHVCQUFwRCxRQUFRO2dCQUN1Qix1QkFBdUIsdUJBQXRELFFBQVE7Z0JBQ2dCLGdCQUFnQix1QkFBeEMsUUFBUTs7SUFYWDtRQURDLEtBQUssRUFBRTtrREFDRTtJQUVWO1FBREMsS0FBSyxFQUFFO2tEQUNFO0lBRVY7UUFEQyxLQUFLLEVBQUU7cURBQ1c7SUFUUixtQkFBbUI7UUFKL0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQUUsd0NBQXNDO1NBQ2pELENBQUM7UUFjRyxXQUFBLFFBQVEsRUFBRSxDQUFBO1FBQ1YsV0FBQSxRQUFRLEVBQUUsQ0FBQTtRQUNWLFdBQUEsUUFBUSxFQUFFLENBQUE7UUFDVixXQUFBLFFBQVEsRUFBRSxDQUFBO09BaEJGLG1CQUFtQixDQW1FL0I7SUFBRCwwQkFBQztDQUFBLEFBbkVELElBbUVDO1NBbkVZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT3B0aW9uYWwsIE9uQ2hhbmdlcywgSW5wdXQsIFNpbXBsZUNoYW5nZXMsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdHJhbnNmb3JtIH0gZnJvbSAnb2wvcHJvaic7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2VvbWV0cnlQb2ludENvbXBvbmVudCB9IGZyb20gJy4vZ2VvbS9nZW9tZXRyeXBvaW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHZW9tZXRyeUNpcmNsZUNvbXBvbmVudCB9IGZyb20gJy4vZ2VvbS9nZW9tZXRyeWNpcmNsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3ZlcmxheUNvbXBvbmVudCB9IGZyb20gJy4vb3ZlcmxheS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtY29vcmRpbmF0ZScsXG4gIHRlbXBsYXRlOiBgIDxkaXYgY2xhc3M9XCJhb2wtY29vcmRpbmF0ZVwiPjwvZGl2PiBgLFxufSlcbmV4cG9ydCBjbGFzcyBDb29yZGluYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuICBwcml2YXRlIGhvc3Q6IGFueTtcbiAgcHJpdmF0ZSBtYXBTcmlkID0gJ0VQU0c6Mzg1Nyc7XG5cbiAgQElucHV0KClcbiAgeDogbnVtYmVyO1xuICBASW5wdXQoKVxuICB5OiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHNyaWQgPSAnRVBTRzozODU3JztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50LFxuICAgIEBPcHRpb25hbCgpIHZpZXdIb3N0OiBWaWV3Q29tcG9uZW50LFxuICAgIEBPcHRpb25hbCgpIGdlb21ldHJ5UG9pbnRIb3N0OiBHZW9tZXRyeVBvaW50Q29tcG9uZW50LFxuICAgIEBPcHRpb25hbCgpIGdlb21ldHJ5Q2lyY2xlSG9zdDogR2VvbWV0cnlDaXJjbGVDb21wb25lbnQsXG4gICAgQE9wdGlvbmFsKCkgb3ZlcmxheUhvc3Q6IE92ZXJsYXlDb21wb25lbnRcbiAgKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2luc3RhbmNpbmcgYW9sLWNvb3JkaW5hdGUnKTtcbiAgICBpZiAoZ2VvbWV0cnlQb2ludEhvc3QgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuaG9zdCA9IGdlb21ldHJ5UG9pbnRIb3N0O1xuICAgIH0gZWxzZSBpZiAoZ2VvbWV0cnlDaXJjbGVIb3N0ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmhvc3QgPSBnZW9tZXRyeUNpcmNsZUhvc3Q7XG4gICAgfSBlbHNlIGlmICh2aWV3SG9zdCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5ob3N0ID0gdmlld0hvc3Q7XG4gICAgfSBlbHNlIGlmIChvdmVybGF5SG9zdCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5ob3N0ID0gb3ZlcmxheUhvc3Q7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2Uub24oJ2NoYW5nZTp2aWV3JywgKGUpID0+IHRoaXMub25NYXBWaWV3Q2hhbmdlZChlKSk7XG4gICAgdGhpcy5tYXBTcmlkID0gdGhpcy5tYXAuaW5zdGFuY2UuZ2V0VmlldygpLmdldFByb2plY3Rpb24oKS5nZXRDb2RlKCk7XG4gICAgdGhpcy50cmFuc2Zvcm1Db29yZGluYXRlcygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIHRoaXMudHJhbnNmb3JtQ29vcmRpbmF0ZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgb25NYXBWaWV3Q2hhbmdlZChldmVudCkge1xuICAgIHRoaXMubWFwU3JpZCA9IGV2ZW50LnRhcmdldC5nZXQoZXZlbnQua2V5KS5nZXRQcm9qZWN0aW9uKCkuZ2V0Q29kZSgpO1xuICAgIHRoaXMudHJhbnNmb3JtQ29vcmRpbmF0ZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgdHJhbnNmb3JtQ29vcmRpbmF0ZXMoKSB7XG4gICAgbGV0IHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXM6IG51bWJlcltdO1xuXG4gICAgaWYgKHRoaXMuc3JpZCA9PT0gdGhpcy5tYXBTcmlkKSB7XG4gICAgICB0cmFuc2Zvcm1lZENvb3JkaW5hdGVzID0gW3RoaXMueCwgdGhpcy55XTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNmb3JtZWRDb29yZGluYXRlcyA9IHRyYW5zZm9ybShbdGhpcy54LCB0aGlzLnldLCB0aGlzLnNyaWQsIHRoaXMubWFwU3JpZCk7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0aGlzLmhvc3QuY29tcG9uZW50VHlwZSkge1xuICAgICAgY2FzZSAnZ2VvbWV0cnktcG9pbnQnOlxuICAgICAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0Q29vcmRpbmF0ZXModHJhbnNmb3JtZWRDb29yZGluYXRlcyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZ2VvbWV0cnktY2lyY2xlJzpcbiAgICAgIGNhc2UgJ3ZpZXcnOlxuICAgICAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0Q2VudGVyKHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ292ZXJsYXknOlxuICAgICAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0UG9zaXRpb24odHJhbnNmb3JtZWRDb29yZGluYXRlcyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuIl19