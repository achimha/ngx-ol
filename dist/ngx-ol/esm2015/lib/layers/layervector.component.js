import { __decorate, __param } from "tslib";
import { Component, Input, Optional } from '@angular/core';
import { MapComponent } from '../map.component';
import { Vector } from 'ol/layer';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';
let LayerVectorComponent = class LayerVectorComponent extends LayerComponent {
    constructor(map, group) {
        super(group || map);
    }
    ngOnInit() {
        // console.log('creating ol.layer.Vector instance with:', this);
        this.instance = new Vector(this);
        super.ngOnInit();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
};
LayerVectorComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: LayerGroupComponent, decorators: [{ type: Optional }] }
];
__decorate([
    Input()
], LayerVectorComponent.prototype, "renderBuffer", void 0);
__decorate([
    Input()
], LayerVectorComponent.prototype, "style", void 0);
__decorate([
    Input()
], LayerVectorComponent.prototype, "updateWhileAnimating", void 0);
__decorate([
    Input()
], LayerVectorComponent.prototype, "updateWhileInteracting", void 0);
LayerVectorComponent = __decorate([
    Component({
        selector: 'aol-layer-vector',
        template: ` <ng-content></ng-content> `
    }),
    __param(1, Optional())
], LayerVectorComponent);
export { LayerVectorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXJ2ZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9sLyIsInNvdXJjZXMiOlsibGliL2xheWVycy9sYXllcnZlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLEtBQUssRUFBRSxRQUFRLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBR2xDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQU03RCxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFxQixTQUFRLGNBQWM7SUFjdEQsWUFBWSxHQUFpQixFQUFjLEtBQTJCO1FBQ3BFLEtBQUssQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELFFBQVE7UUFDTixnRUFBZ0U7UUFDaEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUM7Q0FDRixDQUFBOztZQWJrQixZQUFZO1lBQXNCLG1CQUFtQix1QkFBdEMsUUFBUTs7QUFYeEM7SUFEQyxLQUFLLEVBQUU7MERBQ2E7QUFHckI7SUFEQyxLQUFLLEVBQUU7bURBQytCO0FBR3ZDO0lBREMsS0FBSyxFQUFFO2tFQUNzQjtBQUc5QjtJQURDLEtBQUssRUFBRTtvRUFDd0I7QUFackIsb0JBQW9CO0lBSmhDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsUUFBUSxFQUFFLDZCQUE2QjtLQUN4QyxDQUFDO0lBZWdDLFdBQUEsUUFBUSxFQUFFLENBQUE7R0FkL0Isb0JBQW9CLENBMkJoQztTQTNCWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0LCBJbnB1dCwgT3B0aW9uYWwsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICdvbC9sYXllcic7XG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gJ29sL3N0eWxlJztcbmltcG9ydCB7IFN0eWxlRnVuY3Rpb24gfSBmcm9tICdvbC9zdHlsZS9TdHlsZSc7XG5pbXBvcnQgeyBMYXllckNvbXBvbmVudCB9IGZyb20gJy4vbGF5ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IExheWVyR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2xheWVyZ3JvdXAuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWxheWVyLXZlY3RvcicsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbn0pXG5leHBvcnQgY2xhc3MgTGF5ZXJWZWN0b3JDb21wb25lbnQgZXh0ZW5kcyBMYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpXG4gIHJlbmRlckJ1ZmZlcjogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIHN0eWxlOiBTdHlsZSB8IFN0eWxlW10gfCBTdHlsZUZ1bmN0aW9uO1xuXG4gIEBJbnB1dCgpXG4gIHVwZGF0ZVdoaWxlQW5pbWF0aW5nOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIHVwZGF0ZVdoaWxlSW50ZXJhY3Rpbmc6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IobWFwOiBNYXBDb21wb25lbnQsIEBPcHRpb25hbCgpIGdyb3VwPzogTGF5ZXJHcm91cENvbXBvbmVudCkge1xuICAgIHN1cGVyKGdyb3VwIHx8IG1hcCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRpbmcgb2wubGF5ZXIuVmVjdG9yIGluc3RhbmNlIHdpdGg6JywgdGhpcyk7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBWZWN0b3IodGhpcyk7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBzdXBlci5uZ09uQ2hhbmdlcyhjaGFuZ2VzKTtcbiAgfVxufVxuIl19