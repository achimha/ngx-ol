import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { ZoomToExtent } from 'ol/control';
import { MapComponent } from '../map.component';
let ControlZoomToExtentComponent = class ControlZoomToExtentComponent {
    constructor(map) {
        this.map = map;
        // console.log('instancing aol-control-zoomtoextent');
    }
    ngOnInit() {
        this.instance = new ZoomToExtent(this);
        this.map.instance.addControl(this.instance);
    }
    ngOnDestroy() {
        // console.log('removing aol-control-zoomtoextent');
        this.map.instance.removeControl(this.instance);
    }
};
ControlZoomToExtentComponent.ctorParameters = () => [
    { type: MapComponent }
];
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
        template: ` <ng-content></ng-content> `
    })
], ControlZoomToExtentComponent);
export { ControlZoomToExtentComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbXRvZXh0ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL3pvb210b2V4dGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQU9oRCxJQUFhLDRCQUE0QixHQUF6QyxNQUFhLDRCQUE0QjtJQVl2QyxZQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBQ25DLHNEQUFzRDtJQUN4RCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsV0FBVztRQUNULG9EQUFvRDtRQUNwRCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Q0FDRixDQUFBOztZQWIwQixZQUFZOztBQVJyQztJQURDLEtBQUssRUFBRTsrREFDVTtBQUVsQjtJQURDLEtBQUssRUFBRTsyREFDYTtBQUVyQjtJQURDLEtBQUssRUFBRTs4REFDUztBQUVqQjtJQURDLEtBQUssRUFBRTs0REFDTztBQVZKLDRCQUE0QjtJQUp4QyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsMEJBQTBCO1FBQ3BDLFFBQVEsRUFBRSw2QkFBNkI7S0FDeEMsQ0FBQztHQUNXLDRCQUE0QixDQXlCeEM7U0F6QlksNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFpvb21Ub0V4dGVudCB9IGZyb20gJ29sL2NvbnRyb2wnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFeHRlbnQgfSBmcm9tICdvbC9leHRlbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtY29udHJvbC16b29tdG9leHRlbnQnLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xab29tVG9FeHRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGluc3RhbmNlOiBab29tVG9FeHRlbnQ7XG5cbiAgQElucHV0KClcbiAgY2xhc3NOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGxhYmVsOiBzdHJpbmcgfCBOb2RlO1xuICBASW5wdXQoKVxuICB0aXBMYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBleHRlbnQ6IEV4dGVudDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2luc3RhbmNpbmcgYW9sLWNvbnRyb2wtem9vbXRvZXh0ZW50Jyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFpvb21Ub0V4dGVudCh0aGlzKTtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3JlbW92aW5nIGFvbC1jb250cm9sLXpvb210b2V4dGVudCcpO1xuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUNvbnRyb2wodGhpcy5pbnN0YW5jZSk7XG4gIH1cbn1cbiJdfQ==