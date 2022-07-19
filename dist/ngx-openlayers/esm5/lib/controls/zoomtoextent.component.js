import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { ZoomToExtent } from 'ol/control';
import { MapComponent } from '../map.component';
var ControlZoomToExtentComponent = /** @class */ (function () {
    function ControlZoomToExtentComponent(map) {
        this.map = map;
        // console.log('instancing aol-control-zoomtoextent');
    }
    ControlZoomToExtentComponent.prototype.ngOnInit = function () {
        this.instance = new ZoomToExtent(this);
        this.map.instance.addControl(this.instance);
    };
    ControlZoomToExtentComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-zoomtoextent');
        this.map.instance.removeControl(this.instance);
    };
    ControlZoomToExtentComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    __decorate([
        Input()
    ], ControlZoomToExtentComponent.prototype, "className", void 0);
    __decorate([
        Input()
    ], ControlZoomToExtentComponent.prototype, "label", void 0);
    __decorate([
        Input()
    ], ControlZoomToExtentComponent.prototype, "tipLabel", void 0);
    __decorate([
        Input()
    ], ControlZoomToExtentComponent.prototype, "extent", void 0);
    ControlZoomToExtentComponent = __decorate([
        Component({
            selector: 'aol-control-zoomtoextent',
            template: " <ng-content></ng-content> "
        })
    ], ControlZoomToExtentComponent);
    return ControlZoomToExtentComponent;
}());
export { ControlZoomToExtentComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbXRvZXh0ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL3pvb210b2V4dGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQU9oRDtJQVlFLHNDQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBQ25DLHNEQUFzRDtJQUN4RCxDQUFDO0lBRUQsK0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsa0RBQVcsR0FBWDtRQUNFLG9EQUFvRDtRQUNwRCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pELENBQUM7O2dCQVp3QixZQUFZOztJQVJyQztRQURDLEtBQUssRUFBRTttRUFDVTtJQUVsQjtRQURDLEtBQUssRUFBRTsrREFDYTtJQUVyQjtRQURDLEtBQUssRUFBRTtrRUFDUztJQUVqQjtRQURDLEtBQUssRUFBRTtnRUFDTztJQVZKLDRCQUE0QjtRQUp4QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsMEJBQTBCO1lBQ3BDLFFBQVEsRUFBRSw2QkFBNkI7U0FDeEMsQ0FBQztPQUNXLDRCQUE0QixDQXlCeEM7SUFBRCxtQ0FBQztDQUFBLEFBekJELElBeUJDO1NBekJZLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBab29tVG9FeHRlbnQgfSBmcm9tICdvbC9jb250cm9sJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXh0ZW50IH0gZnJvbSAnb2wvZXh0ZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWNvbnRyb2wtem9vbXRvZXh0ZW50JyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxufSlcbmV4cG9ydCBjbGFzcyBDb250cm9sWm9vbVRvRXh0ZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBpbnN0YW5jZTogWm9vbVRvRXh0ZW50O1xuXG4gIEBJbnB1dCgpXG4gIGNsYXNzTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBsYWJlbDogc3RyaW5nIHwgTm9kZTtcbiAgQElucHV0KClcbiAgdGlwTGFiZWw6IHN0cmluZztcbiAgQElucHV0KClcbiAgZXh0ZW50OiBFeHRlbnQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdpbnN0YW5jaW5nIGFvbC1jb250cm9sLXpvb210b2V4dGVudCcpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBab29tVG9FeHRlbnQodGhpcyk7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmluZyBhb2wtY29udHJvbC16b29tdG9leHRlbnQnKTtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=