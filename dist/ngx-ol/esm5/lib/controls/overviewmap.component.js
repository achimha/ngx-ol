import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { OverviewMap } from 'ol/control';
import { MapComponent } from '../map.component';
var ControlOverviewMapComponent = /** @class */ (function () {
    function ControlOverviewMapComponent(map) {
        this.map = map;
    }
    ControlOverviewMapComponent.prototype.ngOnInit = function () {
        this.instance = new OverviewMap(this);
        this.map.instance.addControl(this.instance);
    };
    ControlOverviewMapComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeControl(this.instance);
    };
    ControlOverviewMapComponent.prototype.ngOnChanges = function (changes) {
        if (this.instance != null && changes.hasOwnProperty('view')) {
            this.reloadInstance();
        }
    };
    ControlOverviewMapComponent.prototype.reloadInstance = function () {
        this.map.instance.removeControl(this.instance);
        this.instance = new OverviewMap(this);
        this.map.instance.addControl(this.instance);
    };
    ControlOverviewMapComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    __decorate([
        Input()
    ], ControlOverviewMapComponent.prototype, "collapsed", void 0);
    __decorate([
        Input()
    ], ControlOverviewMapComponent.prototype, "collapseLabel", void 0);
    __decorate([
        Input()
    ], ControlOverviewMapComponent.prototype, "collapsible", void 0);
    __decorate([
        Input()
    ], ControlOverviewMapComponent.prototype, "label", void 0);
    __decorate([
        Input()
    ], ControlOverviewMapComponent.prototype, "layers", void 0);
    __decorate([
        Input()
    ], ControlOverviewMapComponent.prototype, "target", void 0);
    __decorate([
        Input()
    ], ControlOverviewMapComponent.prototype, "tipLabel", void 0);
    __decorate([
        Input()
    ], ControlOverviewMapComponent.prototype, "view", void 0);
    ControlOverviewMapComponent = __decorate([
        Component({
            selector: 'aol-control-overviewmap',
            template: " <ng-content></ng-content> "
        })
    ], ControlOverviewMapComponent);
    return ControlOverviewMapComponent;
}());
export { ControlOverviewMapComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcnZpZXdtYXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFjaGltaGEvbmd4LW9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL292ZXJ2aWV3bWFwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQStDLE1BQU0sZUFBZSxDQUFDO0FBRzlGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBTWhEO0lBbUJFLHFDQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO0lBQUcsQ0FBQztJQUV6Qyw4Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxpREFBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsaURBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMzRCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdkI7SUFDSCxDQUFDO0lBRU8sb0RBQWMsR0FBdEI7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDOztnQkFyQndCLFlBQVk7O0lBaEJyQztRQURDLEtBQUssRUFBRTtrRUFDVztJQUVuQjtRQURDLEtBQUssRUFBRTtzRUFDYztJQUV0QjtRQURDLEtBQUssRUFBRTtvRUFDYTtJQUVyQjtRQURDLEtBQUssRUFBRTs4REFDTTtJQUVkO1FBREMsS0FBSyxFQUFFOytEQUNRO0lBRWhCO1FBREMsS0FBSyxFQUFFOytEQUNZO0lBRXBCO1FBREMsS0FBSyxFQUFFO2lFQUNTO0lBRWpCO1FBREMsS0FBSyxFQUFFOzZEQUNHO0lBakJBLDJCQUEyQjtRQUp2QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUseUJBQXlCO1lBQ25DLFFBQVEsRUFBRSw2QkFBNkI7U0FDeEMsQ0FBQztPQUNXLDJCQUEyQixDQXlDdkM7SUFBRCxrQ0FBQztDQUFBLEFBekNELElBeUNDO1NBekNZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExheWVyIH0gZnJvbSAnb2wvbGF5ZXInO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gJ29sJztcbmltcG9ydCB7IE92ZXJ2aWV3TWFwIH0gZnJvbSAnb2wvY29udHJvbCc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWNvbnRyb2wtb3ZlcnZpZXdtYXAnLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xPdmVydmlld01hcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBpbnN0YW5jZTogT3ZlcnZpZXdNYXA7XG4gIEBJbnB1dCgpXG4gIGNvbGxhcHNlZDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgY29sbGFwc2VMYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBjb2xsYXBzaWJsZTogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KClcbiAgbGF5ZXJzOiBMYXllcltdO1xuICBASW5wdXQoKVxuICB0YXJnZXQ6IEhUTUxFbGVtZW50O1xuICBASW5wdXQoKVxuICB0aXBMYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKVxuICB2aWV3OiBWaWV3O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBPdmVydmlld01hcCh0aGlzKTtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSAhPSBudWxsICYmIGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ3ZpZXcnKSkge1xuICAgICAgdGhpcy5yZWxvYWRJbnN0YW5jZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVsb2FkSW5zdGFuY2UoKSB7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IE92ZXJ2aWV3TWFwKHRoaXMpO1xuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZENvbnRyb2wodGhpcy5pbnN0YW5jZSk7XG4gIH1cbn1cbiJdfQ==