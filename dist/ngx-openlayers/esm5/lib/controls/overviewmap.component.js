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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcnZpZXdtYXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvb3ZlcnZpZXdtYXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBK0MsTUFBTSxlQUFlLENBQUM7QUFHOUYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFNaEQ7SUFtQkUscUNBQW9CLEdBQWlCO1FBQWpCLFFBQUcsR0FBSCxHQUFHLENBQWM7SUFBRyxDQUFDO0lBRXpDLDhDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELGlEQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxpREFBVyxHQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzNELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QjtJQUNILENBQUM7SUFFTyxvREFBYyxHQUF0QjtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7O2dCQXJCd0IsWUFBWTs7SUFoQnJDO1FBREMsS0FBSyxFQUFFO2tFQUNXO0lBRW5CO1FBREMsS0FBSyxFQUFFO3NFQUNjO0lBRXRCO1FBREMsS0FBSyxFQUFFO29FQUNhO0lBRXJCO1FBREMsS0FBSyxFQUFFOzhEQUNNO0lBRWQ7UUFEQyxLQUFLLEVBQUU7K0RBQ1E7SUFFaEI7UUFEQyxLQUFLLEVBQUU7K0RBQ1E7SUFFaEI7UUFEQyxLQUFLLEVBQUU7aUVBQ1M7SUFFakI7UUFEQyxLQUFLLEVBQUU7NkRBQ0c7SUFqQkEsMkJBQTJCO1FBSnZDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx5QkFBeUI7WUFDbkMsUUFBUSxFQUFFLDZCQUE2QjtTQUN4QyxDQUFDO09BQ1csMkJBQTJCLENBeUN2QztJQUFELGtDQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7U0F6Q1ksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICdvbC9sYXllcic7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAnb2wnO1xuaW1wb3J0IHsgT3ZlcnZpZXdNYXAgfSBmcm9tICdvbC9jb250cm9sJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtY29udHJvbC1vdmVydmlld21hcCcsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbE92ZXJ2aWV3TWFwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIGluc3RhbmNlOiBPdmVydmlld01hcDtcbiAgQElucHV0KClcbiAgY29sbGFwc2VkOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBjb2xsYXBzZUxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGNvbGxhcHNpYmxlOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBsYXllcnM6IExheWVyW107XG4gIEBJbnB1dCgpXG4gIHRhcmdldDogRWxlbWVudDtcbiAgQElucHV0KClcbiAgdGlwTGFiZWw6IHN0cmluZztcbiAgQElucHV0KClcbiAgdmlldzogVmlldztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgT3ZlcnZpZXdNYXAodGhpcyk7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUNvbnRyb2wodGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UgIT0gbnVsbCAmJiBjaGFuZ2VzLmhhc093blByb3BlcnR5KCd2aWV3JykpIHtcbiAgICAgIHRoaXMucmVsb2FkSW5zdGFuY2UoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbG9hZEluc3RhbmNlKCkge1xuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUNvbnRyb2wodGhpcy5pbnN0YW5jZSk7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBPdmVydmlld01hcCh0aGlzKTtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=