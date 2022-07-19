import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { MouseWheelZoom } from 'ol/interaction';
import { MapComponent } from '../map.component';
let MouseWheelZoomInteractionComponent = class MouseWheelZoomInteractionComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = new MouseWheelZoom(this);
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
};
MouseWheelZoomInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];
__decorate([
    Input()
], MouseWheelZoomInteractionComponent.prototype, "duration", void 0);
__decorate([
    Input()
], MouseWheelZoomInteractionComponent.prototype, "timeout", void 0);
__decorate([
    Input()
], MouseWheelZoomInteractionComponent.prototype, "useAnchor", void 0);
MouseWheelZoomInteractionComponent = __decorate([
    Component({
        selector: 'aol-interaction-mousewheelzoom',
        template: ''
    })
], MouseWheelZoomInteractionComponent);
export { MouseWheelZoomInteractionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW91c2V3aGVlbHpvb20uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvaW50ZXJhY3Rpb25zL21vdXNld2hlZWx6b29tLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFNaEQsSUFBYSxrQ0FBa0MsR0FBL0MsTUFBYSxrQ0FBa0M7SUFTN0MsWUFBb0IsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztJQUFHLENBQUM7SUFFekMsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyRCxDQUFDO0NBQ0YsQ0FBQTs7WUFWMEIsWUFBWTs7QUFOckM7SUFEQyxLQUFLLEVBQUU7b0VBQ1M7QUFFakI7SUFEQyxLQUFLLEVBQUU7bUVBQ1E7QUFFaEI7SUFEQyxLQUFLLEVBQUU7cUVBQ1c7QUFQUixrQ0FBa0M7SUFKOUMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGdDQUFnQztRQUMxQyxRQUFRLEVBQUUsRUFBRTtLQUNiLENBQUM7R0FDVyxrQ0FBa0MsQ0FtQjlDO1NBbkJZLGtDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb3VzZVdoZWVsWm9vbSB9IGZyb20gJ29sL2ludGVyYWN0aW9uJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtaW50ZXJhY3Rpb24tbW91c2V3aGVlbHpvb20nLFxuICB0ZW1wbGF0ZTogJycsXG59KVxuZXhwb3J0IGNsYXNzIE1vdXNlV2hlZWxab29tSW50ZXJhY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGluc3RhbmNlOiBNb3VzZVdoZWVsWm9vbTtcbiAgQElucHV0KClcbiAgZHVyYXRpb246IG51bWJlcjtcbiAgQElucHV0KClcbiAgdGltZW91dDogbnVtYmVyO1xuICBASW5wdXQoKVxuICB1c2VBbmNob3I6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IE1vdXNlV2hlZWxab29tKHRoaXMpO1xuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZEludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XG4gIH1cbn1cbiJdfQ==