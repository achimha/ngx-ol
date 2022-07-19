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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXJ2ZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvbGF5ZXJzL2xheWVydmVjdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsS0FBSyxFQUFFLFFBQVEsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDeEcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFHbEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBTTdELElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQXFCLFNBQVEsY0FBYztJQWV0RCxZQUFZLEdBQWlCLEVBQWMsS0FBMkI7UUFDcEUsS0FBSyxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsUUFBUTtRQUNOLGdFQUFnRTtRQUNoRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0IsQ0FBQztDQUNGLENBQUE7O1lBYmtCLFlBQVk7WUFBc0IsbUJBQW1CLHVCQUF0QyxRQUFROztBQVh4QztJQURDLEtBQUssRUFBRTswREFDYTtBQUdyQjtJQURDLEtBQUssRUFBRTttREFDK0I7QUFHdkM7SUFEQyxLQUFLLEVBQUU7a0VBQ3NCO0FBRzlCO0lBREMsS0FBSyxFQUFFO29FQUN3QjtBQWJyQixvQkFBb0I7SUFKaEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixRQUFRLEVBQUUsNkJBQTZCO0tBQ3hDLENBQUM7SUFnQmdDLFdBQUEsUUFBUSxFQUFFLENBQUE7R0FmL0Isb0JBQW9CLENBNEJoQztTQTVCWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0LCBJbnB1dCwgT3B0aW9uYWwsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICdvbC9sYXllcic7XG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gJ29sL3N0eWxlJztcbmltcG9ydCB7IFN0eWxlRnVuY3Rpb24gfSBmcm9tICdvbC9zdHlsZS9TdHlsZSc7XG5pbXBvcnQgeyBMYXllckNvbXBvbmVudCB9IGZyb20gJy4vbGF5ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IExheWVyR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2xheWVyZ3JvdXAuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWxheWVyLXZlY3RvcicsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbn0pXG5leHBvcnQgY2xhc3MgTGF5ZXJWZWN0b3JDb21wb25lbnQgZXh0ZW5kcyBMYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICBwdWJsaWMgc291cmNlOiBWZWN0b3I7XG5cbiAgQElucHV0KClcbiAgcmVuZGVyQnVmZmVyOiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgc3R5bGU6IFN0eWxlIHwgU3R5bGVbXSB8IFN0eWxlRnVuY3Rpb247XG5cbiAgQElucHV0KClcbiAgdXBkYXRlV2hpbGVBbmltYXRpbmc6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgdXBkYXRlV2hpbGVJbnRlcmFjdGluZzogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihtYXA6IE1hcENvbXBvbmVudCwgQE9wdGlvbmFsKCkgZ3JvdXA/OiBMYXllckdyb3VwQ29tcG9uZW50KSB7XG4gICAgc3VwZXIoZ3JvdXAgfHwgbWFwKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBvbC5sYXllci5WZWN0b3IgaW5zdGFuY2Ugd2l0aDonLCB0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFZlY3Rvcih0aGlzKTtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIHN1cGVyLm5nT25DaGFuZ2VzKGNoYW5nZXMpO1xuICB9XG59XG4iXX0=