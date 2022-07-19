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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcnZpZXdtYXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL292ZXJ2aWV3bWFwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQStDLE1BQU0sZUFBZSxDQUFDO0FBRzlGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBTWhELElBQWEsMkJBQTJCLEdBQXhDLE1BQWEsMkJBQTJCO0lBbUJ0QyxZQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO0lBQUcsQ0FBQztJQUV6QyxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMzRCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdkI7SUFDSCxDQUFDO0lBRU8sY0FBYztRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDO0NBQ0YsQ0FBQTs7WUF0QjBCLFlBQVk7O0FBaEJyQztJQURDLEtBQUssRUFBRTs4REFDVztBQUVuQjtJQURDLEtBQUssRUFBRTtrRUFDYztBQUV0QjtJQURDLEtBQUssRUFBRTtnRUFDYTtBQUVyQjtJQURDLEtBQUssRUFBRTswREFDTTtBQUVkO0lBREMsS0FBSyxFQUFFOzJEQUNRO0FBRWhCO0lBREMsS0FBSyxFQUFFOzJEQUNRO0FBRWhCO0lBREMsS0FBSyxFQUFFOzZEQUNTO0FBRWpCO0lBREMsS0FBSyxFQUFFO3lEQUNHO0FBakJBLDJCQUEyQjtJQUp2QyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUseUJBQXlCO1FBQ25DLFFBQVEsRUFBRSw2QkFBNkI7S0FDeEMsQ0FBQztHQUNXLDJCQUEyQixDQXlDdkM7U0F6Q1ksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICdvbC9sYXllcic7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAnb2wnO1xuaW1wb3J0IHsgT3ZlcnZpZXdNYXAgfSBmcm9tICdvbC9jb250cm9sJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtY29udHJvbC1vdmVydmlld21hcCcsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbE92ZXJ2aWV3TWFwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIGluc3RhbmNlOiBPdmVydmlld01hcDtcbiAgQElucHV0KClcbiAgY29sbGFwc2VkOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBjb2xsYXBzZUxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGNvbGxhcHNpYmxlOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBsYXllcnM6IExheWVyW107XG4gIEBJbnB1dCgpXG4gIHRhcmdldDogRWxlbWVudDtcbiAgQElucHV0KClcbiAgdGlwTGFiZWw6IHN0cmluZztcbiAgQElucHV0KClcbiAgdmlldzogVmlldztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgT3ZlcnZpZXdNYXAodGhpcyk7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUNvbnRyb2wodGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UgIT0gbnVsbCAmJiBjaGFuZ2VzLmhhc093blByb3BlcnR5KCd2aWV3JykpIHtcbiAgICAgIHRoaXMucmVsb2FkSW5zdGFuY2UoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbG9hZEluc3RhbmNlKCkge1xuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUNvbnRyb2wodGhpcy5pbnN0YW5jZSk7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBPdmVydmlld01hcCh0aGlzKTtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=