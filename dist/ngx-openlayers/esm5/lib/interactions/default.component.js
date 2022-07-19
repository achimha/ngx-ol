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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9pbnRlcmFjdGlvbnMvZGVmYXVsdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxRQUFRLEVBQWUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFNaEQ7SUFHRSxxQ0FBb0IsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztJQUFHLENBQUM7SUFFekMsOENBQVEsR0FBUjtRQUFBLGlCQUdDO1FBRkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLEtBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBbkMsQ0FBbUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCxpREFBVyxHQUFYO1FBQUEsaUJBRUM7UUFEQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLEtBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxFQUF0QyxDQUFzQyxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7Z0JBVHdCLFlBQVk7O0lBSDFCLDJCQUEyQjtRQUp2QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUseUJBQXlCO1lBQ25DLFFBQVEsRUFBRSxFQUFFO1NBQ2IsQ0FBQztPQUNXLDJCQUEyQixDQWF2QztJQUFELGtDQUFDO0NBQUEsQUFiRCxJQWFDO1NBYlksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZGVmYXVsdHMsIEludGVyYWN0aW9uIH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xuaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJ29sJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtaW50ZXJhY3Rpb24tZGVmYXVsdCcsXG4gIHRlbXBsYXRlOiAnJyxcbn0pXG5leHBvcnQgY2xhc3MgRGVmYXVsdEludGVyYWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBpbnN0YW5jZTogQ29sbGVjdGlvbjxJbnRlcmFjdGlvbj47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gZGVmYXVsdHMoKTtcbiAgICB0aGlzLmluc3RhbmNlLmZvckVhY2goKGkpID0+IHRoaXMubWFwLmluc3RhbmNlLmFkZEludGVyYWN0aW9uKGkpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuaW5zdGFuY2UuZm9yRWFjaCgoaSkgPT4gdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlSW50ZXJhY3Rpb24oaSkpO1xuICB9XG59XG4iXX0=