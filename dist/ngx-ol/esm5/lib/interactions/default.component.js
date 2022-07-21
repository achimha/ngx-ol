import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { defaults } from 'ol/interaction';
import { MapComponent } from '../map.component';
var DefaultInteractionComponent = /** @class */ (function () {
    function DefaultInteractionComponent(map) {
        this.map = map;
    }
    DefaultInteractionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.instance = defaults();
        this.instance.forEach(function (i) { return _this.map.instance.addInteraction(i); });
    };
    DefaultInteractionComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this.instance.forEach(function (i) { return _this.map.instance.removeInteraction(i); });
    };
    DefaultInteractionComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    DefaultInteractionComponent = __decorate([
        Component({
            selector: 'aol-interaction-default',
            template: ''
        })
    ], DefaultInteractionComponent);
    return DefaultInteractionComponent;
}());
export { DefaultInteractionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWNoaW1oYS9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvaW50ZXJhY3Rpb25zL2RlZmF1bHQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsUUFBUSxFQUFlLE1BQU0sZ0JBQWdCLENBQUM7QUFFdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBTWhEO0lBR0UscUNBQW9CLEdBQWlCO1FBQWpCLFFBQUcsR0FBSCxHQUFHLENBQWM7SUFBRyxDQUFDO0lBRXpDLDhDQUFRLEdBQVI7UUFBQSxpQkFHQztRQUZDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxLQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQW5DLENBQW1DLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsaURBQVcsR0FBWDtRQUFBLGlCQUVDO1FBREMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxLQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsRUFBdEMsQ0FBc0MsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7O2dCQVR3QixZQUFZOztJQUgxQiwyQkFBMkI7UUFKdkMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHlCQUF5QjtZQUNuQyxRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUM7T0FDVywyQkFBMkIsQ0FhdkM7SUFBRCxrQ0FBQztDQUFBLEFBYkQsSUFhQztTQWJZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGRlZmF1bHRzLCBJbnRlcmFjdGlvbiB9IGZyb20gJ29sL2ludGVyYWN0aW9uJztcbmltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tICdvbCc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWludGVyYWN0aW9uLWRlZmF1bHQnLFxuICB0ZW1wbGF0ZTogJycsXG59KVxuZXhwb3J0IGNsYXNzIERlZmF1bHRJbnRlcmFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaW5zdGFuY2U6IENvbGxlY3Rpb248SW50ZXJhY3Rpb24+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IGRlZmF1bHRzKCk7XG4gICAgdGhpcy5pbnN0YW5jZS5mb3JFYWNoKChpKSA9PiB0aGlzLm1hcC5pbnN0YW5jZS5hZGRJbnRlcmFjdGlvbihpKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmluc3RhbmNlLmZvckVhY2goKGkpID0+IHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUludGVyYWN0aW9uKGkpKTtcbiAgfVxufVxuIl19