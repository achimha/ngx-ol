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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbXRvZXh0ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9scy96b29tdG9leHRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFlBQVksQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFPaEQsSUFBYSw0QkFBNEIsR0FBekMsTUFBYSw0QkFBNEI7SUFZdkMsWUFBb0IsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztRQUNuQyxzREFBc0Q7SUFDeEQsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELFdBQVc7UUFDVCxvREFBb0Q7UUFDcEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqRCxDQUFDO0NBQ0YsQ0FBQTs7WUFiMEIsWUFBWTs7QUFSckM7SUFEQyxLQUFLLEVBQUU7K0RBQ1U7QUFFbEI7SUFEQyxLQUFLLEVBQUU7MkRBQ2E7QUFFckI7SUFEQyxLQUFLLEVBQUU7OERBQ1M7QUFFakI7SUFEQyxLQUFLLEVBQUU7NERBQ087QUFWSiw0QkFBNEI7SUFKeEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLDBCQUEwQjtRQUNwQyxRQUFRLEVBQUUsNkJBQTZCO0tBQ3hDLENBQUM7R0FDVyw0QkFBNEIsQ0F5QnhDO1NBekJZLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBab29tVG9FeHRlbnQgfSBmcm9tICdvbC9jb250cm9sJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXh0ZW50IH0gZnJvbSAnb2wvZXh0ZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWNvbnRyb2wtem9vbXRvZXh0ZW50JyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxufSlcbmV4cG9ydCBjbGFzcyBDb250cm9sWm9vbVRvRXh0ZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBpbnN0YW5jZTogWm9vbVRvRXh0ZW50O1xuXG4gIEBJbnB1dCgpXG4gIGNsYXNzTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBsYWJlbDogc3RyaW5nIHwgTm9kZTtcbiAgQElucHV0KClcbiAgdGlwTGFiZWw6IHN0cmluZztcbiAgQElucHV0KClcbiAgZXh0ZW50OiBFeHRlbnQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdpbnN0YW5jaW5nIGFvbC1jb250cm9sLXpvb210b2V4dGVudCcpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBab29tVG9FeHRlbnQodGhpcyk7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmluZyBhb2wtY29udHJvbC16b29tdG9leHRlbnQnKTtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=