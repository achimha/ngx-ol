import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { DragPan } from 'ol/interaction';
import { MapComponent } from '../map.component';
var DragPanInteractionComponent = /** @class */ (function () {
    function DragPanInteractionComponent(map) {
        this.map = map;
    }
    DragPanInteractionComponent.prototype.ngOnInit = function () {
        this.instance = new DragPan(this);
        this.map.instance.addInteraction(this.instance);
    };
    DragPanInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    DragPanInteractionComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    __decorate([
        Input()
    ], DragPanInteractionComponent.prototype, "condition", void 0);
    __decorate([
        Input()
    ], DragPanInteractionComponent.prototype, "kinetic", void 0);
    DragPanInteractionComponent = __decorate([
        Component({
            selector: 'aol-interaction-dragpan',
            template: ''
        })
    ], DragPanInteractionComponent);
    return DragPanInteractionComponent;
}());
export { DragPanInteractionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ3Bhbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvaW50ZXJhY3Rpb25zL2RyYWdwYW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQU9oRDtJQVFFLHFDQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO0lBQUcsQ0FBQztJQUV6Qyw4Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxpREFBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7O2dCQVR3QixZQUFZOztJQUpyQztRQURDLEtBQUssRUFBRTtrRUFDYTtJQUVyQjtRQURDLEtBQUssRUFBRTtnRUFDUztJQU5OLDJCQUEyQjtRQUp2QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUseUJBQXlCO1lBQ25DLFFBQVEsRUFBRSxFQUFFO1NBQ2IsQ0FBQztPQUNXLDJCQUEyQixDQWtCdkM7SUFBRCxrQ0FBQztDQUFBLEFBbEJELElBa0JDO1NBbEJZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEcmFnUGFuIH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xuaW1wb3J0IEtpbmV0aWMgZnJvbSAnb2wvS2luZXRpYyc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IENvbmRpdGlvbiB9IGZyb20gJ29sL2V2ZW50cy9jb25kaXRpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtaW50ZXJhY3Rpb24tZHJhZ3BhbicsXG4gIHRlbXBsYXRlOiAnJyxcbn0pXG5leHBvcnQgY2xhc3MgRHJhZ1BhbkludGVyYWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBpbnN0YW5jZTogRHJhZ1BhbjtcblxuICBASW5wdXQoKVxuICBjb25kaXRpb246IENvbmRpdGlvbjtcbiAgQElucHV0KClcbiAga2luZXRpYzogS2luZXRpYztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgRHJhZ1Bhbih0aGlzKTtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=