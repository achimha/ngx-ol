import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { DragZoom } from 'ol/interaction';
import { MapComponent } from '../map.component';
let DragZoomInteractionComponent = class DragZoomInteractionComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = new DragZoom(this);
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
};
DragZoomInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];
__decorate([
    Input()
], DragZoomInteractionComponent.prototype, "className", void 0);
__decorate([
    Input()
], DragZoomInteractionComponent.prototype, "condition", void 0);
__decorate([
    Input()
], DragZoomInteractionComponent.prototype, "duration", void 0);
__decorate([
    Input()
], DragZoomInteractionComponent.prototype, "out", void 0);
DragZoomInteractionComponent = __decorate([
    Component({
        selector: 'aol-interaction-dragzoom',
        template: ''
    })
], DragZoomInteractionComponent);
export { DragZoomInteractionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ3pvb20uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvaW50ZXJhY3Rpb25zL2RyYWd6b29tLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFPaEQsSUFBYSw0QkFBNEIsR0FBekMsTUFBYSw0QkFBNEI7SUFZdkMsWUFBb0IsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztJQUFHLENBQUM7SUFFekMsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyRCxDQUFDO0NBQ0YsQ0FBQTs7WUFWMEIsWUFBWTs7QUFSckM7SUFEQyxLQUFLLEVBQUU7K0RBQ1U7QUFFbEI7SUFEQyxLQUFLLEVBQUU7K0RBQ2E7QUFFckI7SUFEQyxLQUFLLEVBQUU7OERBQ1M7QUFFakI7SUFEQyxLQUFLLEVBQUU7eURBQ0s7QUFWRiw0QkFBNEI7SUFKeEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLDBCQUEwQjtRQUNwQyxRQUFRLEVBQUUsRUFBRTtLQUNiLENBQUM7R0FDVyw0QkFBNEIsQ0FzQnhDO1NBdEJZLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEcmFnWm9vbSB9IGZyb20gJ29sL2ludGVyYWN0aW9uJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29uZGl0aW9uIH0gZnJvbSAnb2wvZXZlbnRzL2NvbmRpdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1pbnRlcmFjdGlvbi1kcmFnem9vbScsXG4gIHRlbXBsYXRlOiAnJyxcbn0pXG5leHBvcnQgY2xhc3MgRHJhZ1pvb21JbnRlcmFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaW5zdGFuY2U6IERyYWdab29tO1xuXG4gIEBJbnB1dCgpXG4gIGNsYXNzTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBjb25kaXRpb246IENvbmRpdGlvbjtcbiAgQElucHV0KClcbiAgZHVyYXRpb246IG51bWJlcjtcbiAgQElucHV0KClcbiAgb3V0OiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBEcmFnWm9vbSh0aGlzKTtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=