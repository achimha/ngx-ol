import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { OverviewMap } from 'ol/control';
import { MapComponent } from '../map.component';
let ControlOverviewMapComponent = class ControlOverviewMapComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = new OverviewMap(this);
        this.map.instance.addControl(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeControl(this.instance);
    }
    ngOnChanges(changes) {
        if (this.instance != null && changes.hasOwnProperty('view')) {
            this.reloadInstance();
        }
    }
    reloadInstance() {
        this.map.instance.removeControl(this.instance);
        this.instance = new OverviewMap(this);
        this.map.instance.addControl(this.instance);
    }
};
ControlOverviewMapComponent.ctorParameters = () => [
    { type: MapComponent }
];
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
        template: ` <ng-content></ng-content> `
    })
], ControlOverviewMapComponent);
export { ControlOverviewMapComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcnZpZXdtYXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvb3ZlcnZpZXdtYXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBK0MsTUFBTSxlQUFlLENBQUM7QUFHOUYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFNaEQsSUFBYSwyQkFBMkIsR0FBeEMsTUFBYSwyQkFBMkI7SUFtQnRDLFlBQW9CLEdBQWlCO1FBQWpCLFFBQUcsR0FBSCxHQUFHLENBQWM7SUFBRyxDQUFDO0lBRXpDLFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzNELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QjtJQUNILENBQUM7SUFFTyxjQUFjO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Q0FDRixDQUFBOztZQXRCMEIsWUFBWTs7QUFoQnJDO0lBREMsS0FBSyxFQUFFOzhEQUNXO0FBRW5CO0lBREMsS0FBSyxFQUFFO2tFQUNjO0FBRXRCO0lBREMsS0FBSyxFQUFFO2dFQUNhO0FBRXJCO0lBREMsS0FBSyxFQUFFOzBEQUNNO0FBRWQ7SUFEQyxLQUFLLEVBQUU7MkRBQ1E7QUFFaEI7SUFEQyxLQUFLLEVBQUU7MkRBQ1E7QUFFaEI7SUFEQyxLQUFLLEVBQUU7NkRBQ1M7QUFFakI7SUFEQyxLQUFLLEVBQUU7eURBQ0c7QUFqQkEsMkJBQTJCO0lBSnZDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSx5QkFBeUI7UUFDbkMsUUFBUSxFQUFFLDZCQUE2QjtLQUN4QyxDQUFDO0dBQ1csMkJBQTJCLENBeUN2QztTQXpDWSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYXllciB9IGZyb20gJ29sL2xheWVyJztcbmltcG9ydCB7IFZpZXcgfSBmcm9tICdvbCc7XG5pbXBvcnQgeyBPdmVydmlld01hcCB9IGZyb20gJ29sL2NvbnRyb2wnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1jb250cm9sLW92ZXJ2aWV3bWFwJyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxufSlcbmV4cG9ydCBjbGFzcyBDb250cm9sT3ZlcnZpZXdNYXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgaW5zdGFuY2U6IE92ZXJ2aWV3TWFwO1xuICBASW5wdXQoKVxuICBjb2xsYXBzZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGNvbGxhcHNlTGFiZWw6IHN0cmluZztcbiAgQElucHV0KClcbiAgY29sbGFwc2libGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGxheWVyczogTGF5ZXJbXTtcbiAgQElucHV0KClcbiAgdGFyZ2V0OiBFbGVtZW50O1xuICBASW5wdXQoKVxuICB0aXBMYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKVxuICB2aWV3OiBWaWV3O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBPdmVydmlld01hcCh0aGlzKTtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSAhPSBudWxsICYmIGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ3ZpZXcnKSkge1xuICAgICAgdGhpcy5yZWxvYWRJbnN0YW5jZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVsb2FkSW5zdGFuY2UoKSB7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IE92ZXJ2aWV3TWFwKHRoaXMpO1xuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZENvbnRyb2wodGhpcy5pbnN0YW5jZSk7XG4gIH1cbn1cbiJdfQ==