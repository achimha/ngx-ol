import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { MouseWheelZoom } from 'ol/interaction';
import { MapComponent } from '../map.component';
var MouseWheelZoomInteractionComponent = /** @class */ (function () {
    function MouseWheelZoomInteractionComponent(map) {
        this.map = map;
    }
    MouseWheelZoomInteractionComponent.prototype.ngOnInit = function () {
        this.instance = new MouseWheelZoom(this);
        this.map.instance.addInteraction(this.instance);
    };
    MouseWheelZoomInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    MouseWheelZoomInteractionComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
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
    return MouseWheelZoomInteractionComponent;
}());
export { MouseWheelZoomInteractionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW91c2V3aGVlbHpvb20uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvaW50ZXJhY3Rpb25zL21vdXNld2hlZWx6b29tLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFNaEQ7SUFTRSw0Q0FBb0IsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztJQUFHLENBQUM7SUFFekMscURBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsd0RBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyRCxDQUFDOztnQkFUd0IsWUFBWTs7SUFOckM7UUFEQyxLQUFLLEVBQUU7d0VBQ1M7SUFFakI7UUFEQyxLQUFLLEVBQUU7dUVBQ1E7SUFFaEI7UUFEQyxLQUFLLEVBQUU7eUVBQ1c7SUFQUixrQ0FBa0M7UUFKOUMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdDQUFnQztZQUMxQyxRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUM7T0FDVyxrQ0FBa0MsQ0FtQjlDO0lBQUQseUNBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQW5CWSxrQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW91c2VXaGVlbFpvb20gfSBmcm9tICdvbC9pbnRlcmFjdGlvbic7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWludGVyYWN0aW9uLW1vdXNld2hlZWx6b29tJyxcbiAgdGVtcGxhdGU6ICcnLFxufSlcbmV4cG9ydCBjbGFzcyBNb3VzZVdoZWVsWm9vbUludGVyYWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBpbnN0YW5jZTogTW91c2VXaGVlbFpvb207XG4gIEBJbnB1dCgpXG4gIGR1cmF0aW9uOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHRpbWVvdXQ6IG51bWJlcjtcbiAgQElucHV0KClcbiAgdXNlQW5jaG9yOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBNb3VzZVdoZWVsWm9vbSh0aGlzKTtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=