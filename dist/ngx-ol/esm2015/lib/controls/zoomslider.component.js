import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { ZoomSlider } from 'ol/control';
import { MapComponent } from '../map.component';
let ControlZoomSliderComponent = class ControlZoomSliderComponent {
    constructor(map) {
        this.map = map;
        // console.log('instancing aol-control-zoomslider');
    }
    ngOnInit() {
        this.instance = new ZoomSlider(this);
        this.map.instance.addControl(this.instance);
    }
    ngOnDestroy() {
        // console.log('removing aol-control-zoomslider');
        this.map.instance.removeControl(this.instance);
    }
};
ControlZoomSliderComponent.ctorParameters = () => [
    { type: MapComponent }
];
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
        template: ` <ng-content></ng-content> `
    })
], ControlZoomSliderComponent);
export { ControlZoomSliderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbXNsaWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvem9vbXNsaWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQU1oRCxJQUFhLDBCQUEwQixHQUF2QyxNQUFhLDBCQUEwQjtJQVlyQyxZQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBQ25DLG9EQUFvRDtJQUN0RCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsV0FBVztRQUNULGtEQUFrRDtRQUNsRCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Q0FDRixDQUFBOztZQWIwQixZQUFZOztBQVJyQztJQURDLEtBQUssRUFBRTs2REFDVTtBQUVsQjtJQURDLEtBQUssRUFBRTs0REFDUztBQUVqQjtJQURDLEtBQUssRUFBRTtpRUFDYztBQUV0QjtJQURDLEtBQUssRUFBRTtpRUFDYztBQVZYLDBCQUEwQjtJQUp0QyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsd0JBQXdCO1FBQ2xDLFFBQVEsRUFBRSw2QkFBNkI7S0FDeEMsQ0FBQztHQUNXLDBCQUEwQixDQXlCdEM7U0F6QlksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFpvb21TbGlkZXIgfSBmcm9tICdvbC9jb250cm9sJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtY29udHJvbC16b29tc2xpZGVyJyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxufSlcbmV4cG9ydCBjbGFzcyBDb250cm9sWm9vbVNsaWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaW5zdGFuY2U6IFpvb21TbGlkZXI7XG5cbiAgQElucHV0KClcbiAgY2xhc3NOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGR1cmF0aW9uOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIG1heFJlc29sdXRpb246IG51bWJlcjtcbiAgQElucHV0KClcbiAgbWluUmVzb2x1dGlvbjogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnaW5zdGFuY2luZyBhb2wtY29udHJvbC16b29tc2xpZGVyJyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFpvb21TbGlkZXIodGhpcyk7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmluZyBhb2wtY29udHJvbC16b29tc2xpZGVyJyk7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19