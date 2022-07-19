import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { ZoomSlider } from 'ol/control';
import { MapComponent } from '../map.component';
var ControlZoomSliderComponent = /** @class */ (function () {
    function ControlZoomSliderComponent(map) {
        this.map = map;
        // console.log('instancing aol-control-zoomslider');
    }
    ControlZoomSliderComponent.prototype.ngOnInit = function () {
        this.instance = new ZoomSlider(this);
        this.map.instance.addControl(this.instance);
    };
    ControlZoomSliderComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-zoomslider');
        this.map.instance.removeControl(this.instance);
    };
    ControlZoomSliderComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    __decorate([
        Input()
    ], ControlZoomSliderComponent.prototype, "className", void 0);
    __decorate([
        Input()
    ], ControlZoomSliderComponent.prototype, "duration", void 0);
    __decorate([
        Input()
    ], ControlZoomSliderComponent.prototype, "maxResolution", void 0);
    __decorate([
        Input()
    ], ControlZoomSliderComponent.prototype, "minResolution", void 0);
    ControlZoomSliderComponent = __decorate([
        Component({
            selector: 'aol-control-zoomslider',
            template: " <ng-content></ng-content> "
        })
    ], ControlZoomSliderComponent);
    return ControlZoomSliderComponent;
}());
export { ControlZoomSliderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbXNsaWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvem9vbXNsaWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQU1oRDtJQVlFLG9DQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBQ25DLG9EQUFvRDtJQUN0RCxDQUFDO0lBRUQsNkNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsZ0RBQVcsR0FBWDtRQUNFLGtEQUFrRDtRQUNsRCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pELENBQUM7O2dCQVp3QixZQUFZOztJQVJyQztRQURDLEtBQUssRUFBRTtpRUFDVTtJQUVsQjtRQURDLEtBQUssRUFBRTtnRUFDUztJQUVqQjtRQURDLEtBQUssRUFBRTtxRUFDYztJQUV0QjtRQURDLEtBQUssRUFBRTtxRUFDYztJQVZYLDBCQUEwQjtRQUp0QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLFFBQVEsRUFBRSw2QkFBNkI7U0FDeEMsQ0FBQztPQUNXLDBCQUEwQixDQXlCdEM7SUFBRCxpQ0FBQztDQUFBLEFBekJELElBeUJDO1NBekJZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBab29tU2xpZGVyIH0gZnJvbSAnb2wvY29udHJvbCc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWNvbnRyb2wtem9vbXNsaWRlcicsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbFpvb21TbGlkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGluc3RhbmNlOiBab29tU2xpZGVyO1xuXG4gIEBJbnB1dCgpXG4gIGNsYXNzTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBkdXJhdGlvbjogbnVtYmVyO1xuICBASW5wdXQoKVxuICBtYXhSZXNvbHV0aW9uOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIG1pblJlc29sdXRpb246IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2luc3RhbmNpbmcgYW9sLWNvbnRyb2wtem9vbXNsaWRlcicpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBab29tU2xpZGVyKHRoaXMpO1xuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZENvbnRyb2wodGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygncmVtb3ZpbmcgYW9sLWNvbnRyb2wtem9vbXNsaWRlcicpO1xuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUNvbnRyb2wodGhpcy5pbnN0YW5jZSk7XG4gIH1cbn1cbiJdfQ==