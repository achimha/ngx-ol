import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { Rotate } from 'ol/control';
import { MapComponent } from '../map.component';
var ControlRotateComponent = /** @class */ (function () {
    function ControlRotateComponent(map) {
        this.map = map;
        // console.log('instancing aol-control-rotate');
    }
    ControlRotateComponent.prototype.ngOnInit = function () {
        this.instance = new Rotate(this);
        this.map.instance.addControl(this.instance);
    };
    ControlRotateComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-rotate');
        this.map.instance.removeControl(this.instance);
    };
    ControlRotateComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    __decorate([
        Input()
    ], ControlRotateComponent.prototype, "className", void 0);
    __decorate([
        Input()
    ], ControlRotateComponent.prototype, "label", void 0);
    __decorate([
        Input()
    ], ControlRotateComponent.prototype, "tipLabel", void 0);
    __decorate([
        Input()
    ], ControlRotateComponent.prototype, "duration", void 0);
    __decorate([
        Input()
    ], ControlRotateComponent.prototype, "autoHide", void 0);
    ControlRotateComponent = __decorate([
        Component({
            selector: 'aol-control-rotate',
            template: " <ng-content></ng-content> "
        })
    ], ControlRotateComponent);
    return ControlRotateComponent;
}());
export { ControlRotateComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm90YXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL3JvdGF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQU1oRDtJQWNFLGdDQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBQ25DLGdEQUFnRDtJQUNsRCxDQUFDO0lBRUQseUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsNENBQVcsR0FBWDtRQUNFLDhDQUE4QztRQUM5QyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pELENBQUM7O2dCQVp3QixZQUFZOztJQVZyQztRQURDLEtBQUssRUFBRTs2REFDVTtJQUVsQjtRQURDLEtBQUssRUFBRTt5REFDTTtJQUVkO1FBREMsS0FBSyxFQUFFOzREQUNTO0lBRWpCO1FBREMsS0FBSyxFQUFFOzREQUNTO0lBRWpCO1FBREMsS0FBSyxFQUFFOzREQUNVO0lBWlAsc0JBQXNCO1FBSmxDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsUUFBUSxFQUFFLDZCQUE2QjtTQUN4QyxDQUFDO09BQ1csc0JBQXNCLENBMkJsQztJQUFELDZCQUFDO0NBQUEsQUEzQkQsSUEyQkM7U0EzQlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdGF0ZSB9IGZyb20gJ29sL2NvbnRyb2wnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1jb250cm9sLXJvdGF0ZScsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbFJvdGF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaW5zdGFuY2U6IFJvdGF0ZTtcblxuICBASW5wdXQoKVxuICBjbGFzc05hbWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KClcbiAgdGlwTGFiZWw6IHN0cmluZztcbiAgQElucHV0KClcbiAgZHVyYXRpb246IG51bWJlcjtcbiAgQElucHV0KClcbiAgYXV0b0hpZGU6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdpbnN0YW5jaW5nIGFvbC1jb250cm9sLXJvdGF0ZScpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBSb3RhdGUodGhpcyk7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmluZyBhb2wtY29udHJvbC1yb3RhdGUnKTtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=