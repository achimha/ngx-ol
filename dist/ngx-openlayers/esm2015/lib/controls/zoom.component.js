import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { Zoom } from 'ol/control';
import { MapComponent } from '../map.component';
let ControlZoomComponent = class ControlZoomComponent {
    constructor(map) {
        this.map = map;
        // console.log('instancing aol-control-zoom');
    }
    ngOnInit() {
        this.instance = new Zoom(this);
        this.map.instance.addControl(this.instance);
    }
    ngOnDestroy() {
        // console.log('removing aol-control-zoom');
        this.map.instance.removeControl(this.instance);
    }
};
ControlZoomComponent.ctorParameters = () => [
    { type: MapComponent }
];
__decorate([
    Input()
], ControlZoomComponent.prototype, "duration", void 0);
__decorate([
    Input()
], ControlZoomComponent.prototype, "zoomInLabel", void 0);
__decorate([
    Input()
], ControlZoomComponent.prototype, "zoomOutLabel", void 0);
__decorate([
    Input()
], ControlZoomComponent.prototype, "zoomInTipLabel", void 0);
__decorate([
    Input()
], ControlZoomComponent.prototype, "zoomOutTipLabel", void 0);
__decorate([
    Input()
], ControlZoomComponent.prototype, "delta", void 0);
ControlZoomComponent = __decorate([
    Component({
        selector: 'aol-control-zoom',
        template: ` <ng-content></ng-content> `
    })
], ControlZoomComponent);
export { ControlZoomComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9scy96b29tLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDbEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBTWhELElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0lBZ0IvQixZQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBQ25DLDhDQUE4QztJQUNoRCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsV0FBVztRQUNULDRDQUE0QztRQUM1QyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Q0FDRixDQUFBOztZQWIwQixZQUFZOztBQVpyQztJQURDLEtBQUssRUFBRTtzREFDUztBQUVqQjtJQURDLEtBQUssRUFBRTt5REFDbUI7QUFFM0I7SUFEQyxLQUFLLEVBQUU7MERBQ29CO0FBRTVCO0lBREMsS0FBSyxFQUFFOzREQUNlO0FBRXZCO0lBREMsS0FBSyxFQUFFOzZEQUNnQjtBQUV4QjtJQURDLEtBQUssRUFBRTttREFDTTtBQWRILG9CQUFvQjtJQUpoQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsa0JBQWtCO1FBQzVCLFFBQVEsRUFBRSw2QkFBNkI7S0FDeEMsQ0FBQztHQUNXLG9CQUFvQixDQTZCaEM7U0E3Qlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFpvb20gfSBmcm9tICdvbC9jb250cm9sJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtY29udHJvbC16b29tJyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxufSlcbmV4cG9ydCBjbGFzcyBDb250cm9sWm9vbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaW5zdGFuY2U6IFpvb207XG5cbiAgQElucHV0KClcbiAgZHVyYXRpb246IG51bWJlcjtcbiAgQElucHV0KClcbiAgem9vbUluTGFiZWw6IHN0cmluZyB8IE5vZGU7XG4gIEBJbnB1dCgpXG4gIHpvb21PdXRMYWJlbDogc3RyaW5nIHwgTm9kZTtcbiAgQElucHV0KClcbiAgem9vbUluVGlwTGFiZWw6IHN0cmluZztcbiAgQElucHV0KClcbiAgem9vbU91dFRpcExhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGRlbHRhOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdpbnN0YW5jaW5nIGFvbC1jb250cm9sLXpvb20nKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgWm9vbSh0aGlzKTtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3JlbW92aW5nIGFvbC1jb250cm9sLXpvb20nKTtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=