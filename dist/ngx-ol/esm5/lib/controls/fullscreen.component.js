import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { FullScreen } from 'ol/control';
import { MapComponent } from '../map.component';
var ControlFullScreenComponent = /** @class */ (function () {
    function ControlFullScreenComponent(map) {
        this.map = map;
        // console.log('instancing aol-control-fullscreen');
    }
    ControlFullScreenComponent.prototype.ngOnInit = function () {
        this.instance = new FullScreen(this);
        this.map.instance.addControl(this.instance);
    };
    ControlFullScreenComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-fullscreen');
        this.map.instance.removeControl(this.instance);
    };
    ControlFullScreenComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    __decorate([
        Input()
    ], ControlFullScreenComponent.prototype, "className", void 0);
    __decorate([
        Input()
    ], ControlFullScreenComponent.prototype, "label", void 0);
    __decorate([
        Input()
    ], ControlFullScreenComponent.prototype, "labelActive", void 0);
    __decorate([
        Input()
    ], ControlFullScreenComponent.prototype, "tipLabel", void 0);
    __decorate([
        Input()
    ], ControlFullScreenComponent.prototype, "keys", void 0);
    ControlFullScreenComponent = __decorate([
        Component({
            selector: 'aol-control-fullscreen',
            template: " <ng-content></ng-content> "
        })
    ], ControlFullScreenComponent);
    return ControlFullScreenComponent;
}());
export { ControlFullScreenComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHNjcmVlbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWNoaW1oYS9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvZnVsbHNjcmVlbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQU1oRDtJQWNFLG9DQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBQ25DLG9EQUFvRDtJQUN0RCxDQUFDO0lBRUQsNkNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsZ0RBQVcsR0FBWDtRQUNFLGtEQUFrRDtRQUNsRCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pELENBQUM7O2dCQVp3QixZQUFZOztJQVZyQztRQURDLEtBQUssRUFBRTtpRUFDVTtJQUVsQjtRQURDLEtBQUssRUFBRTs2REFDTTtJQUVkO1FBREMsS0FBSyxFQUFFO21FQUNZO0lBRXBCO1FBREMsS0FBSyxFQUFFO2dFQUNTO0lBRWpCO1FBREMsS0FBSyxFQUFFOzREQUNNO0lBWkgsMEJBQTBCO1FBSnRDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx3QkFBd0I7WUFDbEMsUUFBUSxFQUFFLDZCQUE2QjtTQUN4QyxDQUFDO09BQ1csMEJBQTBCLENBMkJ0QztJQUFELGlDQUFDO0NBQUEsQUEzQkQsSUEyQkM7U0EzQlksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZ1bGxTY3JlZW4gfSBmcm9tICdvbC9jb250cm9sJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtY29udHJvbC1mdWxsc2NyZWVuJyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxufSlcbmV4cG9ydCBjbGFzcyBDb250cm9sRnVsbFNjcmVlbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaW5zdGFuY2U6IEZ1bGxTY3JlZW47XG5cbiAgQElucHV0KClcbiAgY2xhc3NOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGxhYmVsQWN0aXZlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHRpcExhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGtleXM6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdpbnN0YW5jaW5nIGFvbC1jb250cm9sLWZ1bGxzY3JlZW4nKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgRnVsbFNjcmVlbih0aGlzKTtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3JlbW92aW5nIGFvbC1jb250cm9sLWZ1bGxzY3JlZW4nKTtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=