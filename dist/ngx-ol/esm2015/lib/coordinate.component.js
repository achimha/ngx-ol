import * as tslib_1 from "tslib";
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
        template: ` <div class="aol-coordinate"></div> `
    }),
    tslib_1.__param(1, Optional()),
    tslib_1.__param(2, Optional()),
    tslib_1.__param(3, Optional()),
    tslib_1.__param(4, Optional())
], CoordinateComponent);
export { CoordinateComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29vcmRpbmF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvY29vcmRpbmF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFhLEtBQUssRUFBeUIsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNwQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBTXZELElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBVzlCLFlBQ1UsR0FBaUIsRUFDYixRQUF1QixFQUN2QixpQkFBeUMsRUFDekMsa0JBQTJDLEVBQzNDLFdBQTZCO1FBSmpDLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFWbkIsWUFBTyxHQUFHLFdBQVcsQ0FBQztRQU85QixTQUFJLEdBQUcsV0FBVyxDQUFDO1FBU2pCLDRDQUE0QztRQUM1QyxJQUFJLGlCQUFpQixLQUFLLElBQUksRUFBRTtZQUM5QixJQUFJLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDO1NBQy9CO2FBQU0sSUFBSSxrQkFBa0IsS0FBSyxJQUFJLEVBQUU7WUFDdEMsSUFBSSxDQUFDLElBQUksR0FBRyxrQkFBa0IsQ0FBQztTQUNoQzthQUFNLElBQUksUUFBUSxLQUFLLElBQUksRUFBRTtZQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztTQUN0QjthQUFNLElBQUksV0FBVyxLQUFLLElBQUksRUFBRTtZQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQztTQUN6QjtJQUNILENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNyRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTyxnQkFBZ0IsQ0FBQyxLQUFLO1FBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3JFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTyxvQkFBb0I7UUFDMUIsSUFBSSxzQkFBZ0MsQ0FBQztRQUVyQyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUM5QixzQkFBc0IsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNDO2FBQU07WUFDTCxzQkFBc0IsR0FBRyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMvRTtRQUVELFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDL0IsS0FBSyxnQkFBZ0I7Z0JBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2dCQUMxRCxNQUFNO1lBQ1IsS0FBSyxpQkFBaUIsQ0FBQztZQUN2QixLQUFLLE1BQU07Z0JBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLENBQUM7Z0JBQ3JELE1BQU07WUFDUixLQUFLLFNBQVM7Z0JBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLHNCQUFzQixDQUFDLENBQUM7Z0JBQ3ZELE1BQU07U0FDVDtJQUNILENBQUM7Q0FDRixDQUFBOztZQXZEZ0IsWUFBWTtZQUNILGFBQWEsdUJBQWxDLFFBQVE7WUFDc0Isc0JBQXNCLHVCQUFwRCxRQUFRO1lBQ3VCLHVCQUF1Qix1QkFBdEQsUUFBUTtZQUNnQixnQkFBZ0IsdUJBQXhDLFFBQVE7O0FBWFg7SUFEQyxLQUFLLEVBQUU7OENBQ0U7QUFFVjtJQURDLEtBQUssRUFBRTs4Q0FDRTtBQUVWO0lBREMsS0FBSyxFQUFFO2lEQUNXO0FBVFIsbUJBQW1CO0lBSi9CLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsUUFBUSxFQUFFLHNDQUFzQztLQUNqRCxDQUFDO0lBY0csbUJBQUEsUUFBUSxFQUFFLENBQUE7SUFDVixtQkFBQSxRQUFRLEVBQUUsQ0FBQTtJQUNWLG1CQUFBLFFBQVEsRUFBRSxDQUFBO0lBQ1YsbUJBQUEsUUFBUSxFQUFFLENBQUE7R0FoQkYsbUJBQW1CLENBbUUvQjtTQW5FWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9wdGlvbmFsLCBPbkNoYW5nZXMsIElucHV0LCBTaW1wbGVDaGFuZ2VzLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRyYW5zZm9ybSB9IGZyb20gJ29sL3Byb2onO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi9tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IEdlb21ldHJ5UG9pbnRDb21wb25lbnQgfSBmcm9tICcuL2dlb20vZ2VvbWV0cnlwb2ludC5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2VvbWV0cnlDaXJjbGVDb21wb25lbnQgfSBmcm9tICcuL2dlb20vZ2VvbWV0cnljaXJjbGUuY29tcG9uZW50JztcbmltcG9ydCB7IFZpZXdDb21wb25lbnQgfSBmcm9tICcuL3ZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IE92ZXJsYXlDb21wb25lbnQgfSBmcm9tICcuL292ZXJsYXkuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWNvb3JkaW5hdGUnLFxuICB0ZW1wbGF0ZTogYCA8ZGl2IGNsYXNzPVwiYW9sLWNvb3JkaW5hdGVcIj48L2Rpdj4gYCxcbn0pXG5leHBvcnQgY2xhc3MgQ29vcmRpbmF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgcHJpdmF0ZSBob3N0OiBhbnk7XG4gIHByaXZhdGUgbWFwU3JpZCA9ICdFUFNHOjM4NTcnO1xuXG4gIEBJbnB1dCgpXG4gIHg6IG51bWJlcjtcbiAgQElucHV0KClcbiAgeTogbnVtYmVyO1xuICBASW5wdXQoKVxuICBzcmlkID0gJ0VQU0c6Mzg1Nyc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCxcbiAgICBAT3B0aW9uYWwoKSB2aWV3SG9zdDogVmlld0NvbXBvbmVudCxcbiAgICBAT3B0aW9uYWwoKSBnZW9tZXRyeVBvaW50SG9zdDogR2VvbWV0cnlQb2ludENvbXBvbmVudCxcbiAgICBAT3B0aW9uYWwoKSBnZW9tZXRyeUNpcmNsZUhvc3Q6IEdlb21ldHJ5Q2lyY2xlQ29tcG9uZW50LFxuICAgIEBPcHRpb25hbCgpIG92ZXJsYXlIb3N0OiBPdmVybGF5Q29tcG9uZW50XG4gICkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdpbnN0YW5jaW5nIGFvbC1jb29yZGluYXRlJyk7XG4gICAgaWYgKGdlb21ldHJ5UG9pbnRIb3N0ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmhvc3QgPSBnZW9tZXRyeVBvaW50SG9zdDtcbiAgICB9IGVsc2UgaWYgKGdlb21ldHJ5Q2lyY2xlSG9zdCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5ob3N0ID0gZ2VvbWV0cnlDaXJjbGVIb3N0O1xuICAgIH0gZWxzZSBpZiAodmlld0hvc3QgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuaG9zdCA9IHZpZXdIb3N0O1xuICAgIH0gZWxzZSBpZiAob3ZlcmxheUhvc3QgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuaG9zdCA9IG92ZXJsYXlIb3N0O1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubWFwLmluc3RhbmNlLm9uKCdjaGFuZ2U6dmlldycsIChlKSA9PiB0aGlzLm9uTWFwVmlld0NoYW5nZWQoZSkpO1xuICAgIHRoaXMubWFwU3JpZCA9IHRoaXMubWFwLmluc3RhbmNlLmdldFZpZXcoKS5nZXRQcm9qZWN0aW9uKCkuZ2V0Q29kZSgpO1xuICAgIHRoaXMudHJhbnNmb3JtQ29vcmRpbmF0ZXMoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICB0aGlzLnRyYW5zZm9ybUNvb3JkaW5hdGVzKCk7XG4gIH1cblxuICBwcml2YXRlIG9uTWFwVmlld0NoYW5nZWQoZXZlbnQpIHtcbiAgICB0aGlzLm1hcFNyaWQgPSBldmVudC50YXJnZXQuZ2V0KGV2ZW50LmtleSkuZ2V0UHJvamVjdGlvbigpLmdldENvZGUoKTtcbiAgICB0aGlzLnRyYW5zZm9ybUNvb3JkaW5hdGVzKCk7XG4gIH1cblxuICBwcml2YXRlIHRyYW5zZm9ybUNvb3JkaW5hdGVzKCkge1xuICAgIGxldCB0cmFuc2Zvcm1lZENvb3JkaW5hdGVzOiBudW1iZXJbXTtcblxuICAgIGlmICh0aGlzLnNyaWQgPT09IHRoaXMubWFwU3JpZCkge1xuICAgICAgdHJhbnNmb3JtZWRDb29yZGluYXRlcyA9IFt0aGlzLngsIHRoaXMueV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXMgPSB0cmFuc2Zvcm0oW3RoaXMueCwgdGhpcy55XSwgdGhpcy5zcmlkLCB0aGlzLm1hcFNyaWQpO1xuICAgIH1cblxuICAgIHN3aXRjaCAodGhpcy5ob3N0LmNvbXBvbmVudFR5cGUpIHtcbiAgICAgIGNhc2UgJ2dlb21ldHJ5LXBvaW50JzpcbiAgICAgICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldENvb3JkaW5hdGVzKHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2dlb21ldHJ5LWNpcmNsZSc6XG4gICAgICBjYXNlICd2aWV3JzpcbiAgICAgICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldENlbnRlcih0cmFuc2Zvcm1lZENvb3JkaW5hdGVzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdvdmVybGF5JzpcbiAgICAgICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFBvc2l0aW9uKHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXMpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cbiJdfQ==