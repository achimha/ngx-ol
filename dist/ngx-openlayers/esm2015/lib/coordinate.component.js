import { __decorate, __param } from "tslib";
import { Component, Optional, Input } from '@angular/core';
import { transform } from 'ol/proj';
import { MapComponent } from './map.component';
import { GeometryPointComponent } from './geom/geometrypoint.component';
import { GeometryCircleComponent } from './geom/geometrycircle.component';
import { ViewComponent } from './view.component';
import { OverlayComponent } from './overlay.component';
let CoordinateComponent = class CoordinateComponent {
    constructor(map, viewHost, geometryPointHost, geometryCircleHost, overlayHost) {
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
    }
};
CoordinateComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: ViewComponent, decorators: [{ type: Optional }] },
    { type: GeometryPointComponent, decorators: [{ type: Optional }] },
    { type: GeometryCircleComponent, decorators: [{ type: Optional }] },
    { type: OverlayComponent, decorators: [{ type: Optional }] }
];
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
        template: ` <div class="aol-coordinate"></div> `
    }),
    __param(1, Optional()),
    __param(2, Optional()),
    __param(3, Optional()),
    __param(4, Optional())
], CoordinateComponent);
export { CoordinateComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29vcmRpbmF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9jb29yZGluYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQWEsS0FBSyxFQUF5QixNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFNdkQsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFXOUIsWUFDVSxHQUFpQixFQUNiLFFBQXVCLEVBQ3ZCLGlCQUF5QyxFQUN6QyxrQkFBMkMsRUFDM0MsV0FBNkI7UUFKakMsUUFBRyxHQUFILEdBQUcsQ0FBYztRQVZuQixZQUFPLEdBQUcsV0FBVyxDQUFDO1FBTzlCLFNBQUksR0FBRyxXQUFXLENBQUM7UUFTakIsNENBQTRDO1FBQzVDLElBQUksaUJBQWlCLEtBQUssSUFBSSxFQUFFO1lBQzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUM7U0FDL0I7YUFBTSxJQUFJLGtCQUFrQixLQUFLLElBQUksRUFBRTtZQUN0QyxJQUFJLENBQUMsSUFBSSxHQUFHLGtCQUFrQixDQUFDO1NBQ2hDO2FBQU0sSUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1NBQ3RCO2FBQU0sSUFBSSxXQUFXLEtBQUssSUFBSSxFQUFFO1lBQy9CLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3JFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVPLGdCQUFnQixDQUFDLEtBQUs7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDckUsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVPLG9CQUFvQjtRQUMxQixJQUFJLHNCQUFnQyxDQUFDO1FBRXJDLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQzlCLHNCQUFzQixHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDM0M7YUFBTTtZQUNMLHNCQUFzQixHQUFHLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQy9FO1FBRUQsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUMvQixLQUFLLGdCQUFnQjtnQkFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLHNCQUFzQixDQUFDLENBQUM7Z0JBQzFELE1BQU07WUFDUixLQUFLLGlCQUFpQixDQUFDO1lBQ3ZCLEtBQUssTUFBTTtnQkFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUMsQ0FBQztnQkFDckQsTUFBTTtZQUNSLEtBQUssU0FBUztnQkFDWixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsc0JBQXNCLENBQUMsQ0FBQztnQkFDdkQsTUFBTTtTQUNUO0lBQ0gsQ0FBQztDQUNGLENBQUE7O1lBdkRnQixZQUFZO1lBQ0gsYUFBYSx1QkFBbEMsUUFBUTtZQUNzQixzQkFBc0IsdUJBQXBELFFBQVE7WUFDdUIsdUJBQXVCLHVCQUF0RCxRQUFRO1lBQ2dCLGdCQUFnQix1QkFBeEMsUUFBUTs7QUFYWDtJQURDLEtBQUssRUFBRTs4Q0FDRTtBQUVWO0lBREMsS0FBSyxFQUFFOzhDQUNFO0FBRVY7SUFEQyxLQUFLLEVBQUU7aURBQ1c7QUFUUixtQkFBbUI7SUFKL0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixRQUFRLEVBQUUsc0NBQXNDO0tBQ2pELENBQUM7SUFjRyxXQUFBLFFBQVEsRUFBRSxDQUFBO0lBQ1YsV0FBQSxRQUFRLEVBQUUsQ0FBQTtJQUNWLFdBQUEsUUFBUSxFQUFFLENBQUE7SUFDVixXQUFBLFFBQVEsRUFBRSxDQUFBO0dBaEJGLG1CQUFtQixDQW1FL0I7U0FuRVksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPcHRpb25hbCwgT25DaGFuZ2VzLCBJbnB1dCwgU2ltcGxlQ2hhbmdlcywgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0cmFuc2Zvcm0gfSBmcm9tICdvbC9wcm9qJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4vbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHZW9tZXRyeVBvaW50Q29tcG9uZW50IH0gZnJvbSAnLi9nZW9tL2dlb21ldHJ5cG9pbnQuY29tcG9uZW50JztcbmltcG9ydCB7IEdlb21ldHJ5Q2lyY2xlQ29tcG9uZW50IH0gZnJvbSAnLi9nZW9tL2dlb21ldHJ5Y2lyY2xlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi92aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPdmVybGF5Q29tcG9uZW50IH0gZnJvbSAnLi9vdmVybGF5LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1jb29yZGluYXRlJyxcbiAgdGVtcGxhdGU6IGAgPGRpdiBjbGFzcz1cImFvbC1jb29yZGluYXRlXCI+PC9kaXY+IGAsXG59KVxuZXhwb3J0IGNsYXNzIENvb3JkaW5hdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIHByaXZhdGUgaG9zdDogYW55O1xuICBwcml2YXRlIG1hcFNyaWQgPSAnRVBTRzozODU3JztcblxuICBASW5wdXQoKVxuICB4OiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHk6IG51bWJlcjtcbiAgQElucHV0KClcbiAgc3JpZCA9ICdFUFNHOjM4NTcnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQsXG4gICAgQE9wdGlvbmFsKCkgdmlld0hvc3Q6IFZpZXdDb21wb25lbnQsXG4gICAgQE9wdGlvbmFsKCkgZ2VvbWV0cnlQb2ludEhvc3Q6IEdlb21ldHJ5UG9pbnRDb21wb25lbnQsXG4gICAgQE9wdGlvbmFsKCkgZ2VvbWV0cnlDaXJjbGVIb3N0OiBHZW9tZXRyeUNpcmNsZUNvbXBvbmVudCxcbiAgICBAT3B0aW9uYWwoKSBvdmVybGF5SG9zdDogT3ZlcmxheUNvbXBvbmVudFxuICApIHtcbiAgICAvLyBjb25zb2xlLmxvZygnaW5zdGFuY2luZyBhb2wtY29vcmRpbmF0ZScpO1xuICAgIGlmIChnZW9tZXRyeVBvaW50SG9zdCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5ob3N0ID0gZ2VvbWV0cnlQb2ludEhvc3Q7XG4gICAgfSBlbHNlIGlmIChnZW9tZXRyeUNpcmNsZUhvc3QgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuaG9zdCA9IGdlb21ldHJ5Q2lyY2xlSG9zdDtcbiAgICB9IGVsc2UgaWYgKHZpZXdIb3N0ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmhvc3QgPSB2aWV3SG9zdDtcbiAgICB9IGVsc2UgaWYgKG92ZXJsYXlIb3N0ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmhvc3QgPSBvdmVybGF5SG9zdDtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5vbignY2hhbmdlOnZpZXcnLCAoZSkgPT4gdGhpcy5vbk1hcFZpZXdDaGFuZ2VkKGUpKTtcbiAgICB0aGlzLm1hcFNyaWQgPSB0aGlzLm1hcC5pbnN0YW5jZS5nZXRWaWV3KCkuZ2V0UHJvamVjdGlvbigpLmdldENvZGUoKTtcbiAgICB0aGlzLnRyYW5zZm9ybUNvb3JkaW5hdGVzKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgdGhpcy50cmFuc2Zvcm1Db29yZGluYXRlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbk1hcFZpZXdDaGFuZ2VkKGV2ZW50KSB7XG4gICAgdGhpcy5tYXBTcmlkID0gZXZlbnQudGFyZ2V0LmdldChldmVudC5rZXkpLmdldFByb2plY3Rpb24oKS5nZXRDb2RlKCk7XG4gICAgdGhpcy50cmFuc2Zvcm1Db29yZGluYXRlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSB0cmFuc2Zvcm1Db29yZGluYXRlcygpIHtcbiAgICBsZXQgdHJhbnNmb3JtZWRDb29yZGluYXRlczogbnVtYmVyW107XG5cbiAgICBpZiAodGhpcy5zcmlkID09PSB0aGlzLm1hcFNyaWQpIHtcbiAgICAgIHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXMgPSBbdGhpcy54LCB0aGlzLnldO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2Zvcm1lZENvb3JkaW5hdGVzID0gdHJhbnNmb3JtKFt0aGlzLngsIHRoaXMueV0sIHRoaXMuc3JpZCwgdGhpcy5tYXBTcmlkKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRoaXMuaG9zdC5jb21wb25lbnRUeXBlKSB7XG4gICAgICBjYXNlICdnZW9tZXRyeS1wb2ludCc6XG4gICAgICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRDb29yZGluYXRlcyh0cmFuc2Zvcm1lZENvb3JkaW5hdGVzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdnZW9tZXRyeS1jaXJjbGUnOlxuICAgICAgY2FzZSAndmlldyc6XG4gICAgICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRDZW50ZXIodHJhbnNmb3JtZWRDb29yZGluYXRlcyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnb3ZlcmxheSc6XG4gICAgICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRQb3NpdGlvbih0cmFuc2Zvcm1lZENvb3JkaW5hdGVzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG4iXX0=