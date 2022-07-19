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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvem9vbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQU1oRCxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQWdCL0IsWUFBb0IsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztRQUNuQyw4Q0FBOEM7SUFDaEQsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELFdBQVc7UUFDVCw0Q0FBNEM7UUFDNUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqRCxDQUFDO0NBQ0YsQ0FBQTs7WUFiMEIsWUFBWTs7QUFackM7SUFEQyxLQUFLLEVBQUU7c0RBQ1M7QUFFakI7SUFEQyxLQUFLLEVBQUU7eURBQ21CO0FBRTNCO0lBREMsS0FBSyxFQUFFOzBEQUNvQjtBQUU1QjtJQURDLEtBQUssRUFBRTs0REFDZTtBQUV2QjtJQURDLEtBQUssRUFBRTs2REFDZ0I7QUFFeEI7SUFEQyxLQUFLLEVBQUU7bURBQ007QUFkSCxvQkFBb0I7SUFKaEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixRQUFRLEVBQUUsNkJBQTZCO0tBQ3hDLENBQUM7R0FDVyxvQkFBb0IsQ0E2QmhDO1NBN0JZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBab29tIH0gZnJvbSAnb2wvY29udHJvbCc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWNvbnRyb2wtem9vbScsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbFpvb21Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGluc3RhbmNlOiBab29tO1xuXG4gIEBJbnB1dCgpXG4gIGR1cmF0aW9uOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHpvb21JbkxhYmVsOiBzdHJpbmcgfCBOb2RlO1xuICBASW5wdXQoKVxuICB6b29tT3V0TGFiZWw6IHN0cmluZyB8IE5vZGU7XG4gIEBJbnB1dCgpXG4gIHpvb21JblRpcExhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHpvb21PdXRUaXBMYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBkZWx0YTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnaW5zdGFuY2luZyBhb2wtY29udHJvbC16b29tJyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFpvb20odGhpcyk7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmluZyBhb2wtY29udHJvbC16b29tJyk7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19