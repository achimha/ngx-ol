import { __decorate, __param } from "tslib";
import { Component, Input, Optional } from '@angular/core';
import { VectorTile } from 'ol/layer';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';
let LayerVectorTileComponent = class LayerVectorTileComponent extends LayerComponent {
    constructor(map, group) {
        super(group || map);
    }
    ngOnInit() {
        // console.log('creating ol.layer.VectorTile instance with:', this);
        this.instance = new VectorTile(this);
        super.ngOnInit();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
};
LayerVectorTileComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: LayerGroupComponent, decorators: [{ type: Optional }] }
];
__decorate([
    Input()
], LayerVectorTileComponent.prototype, "renderBuffer", void 0);
__decorate([
    Input()
], LayerVectorTileComponent.prototype, "renderMode", void 0);
__decorate([
    Input()
], LayerVectorTileComponent.prototype, "renderOrder", void 0);
__decorate([
    Input()
], LayerVectorTileComponent.prototype, "style", void 0);
__decorate([
    Input()
], LayerVectorTileComponent.prototype, "updateWhileAnimating", void 0);
__decorate([
    Input()
], LayerVectorTileComponent.prototype, "updateWhileInteracting", void 0);
__decorate([
    Input()
], LayerVectorTileComponent.prototype, "visible", void 0);
LayerVectorTileComponent = __decorate([
    Component({
        selector: 'aol-layer-vectortile',
        template: ` <ng-content></ng-content> `
    }),
    __param(1, Optional())
], LayerVectorTileComponent);
export { LayerVectorTileComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXJ2ZWN0b3J0aWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2xheWVycy9sYXllcnZlY3RvcnRpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxRQUFRLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFJdEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQU83RCxJQUFhLHdCQUF3QixHQUFyQyxNQUFhLHdCQUF5QixTQUFRLGNBQWM7SUFpQjFELFlBQVksR0FBaUIsRUFBYyxLQUEyQjtRQUNwRSxLQUFLLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxRQUFRO1FBQ04sb0VBQW9FO1FBQ3BFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDO0NBQ0YsQ0FBQTs7WUFia0IsWUFBWTtZQUFzQixtQkFBbUIsdUJBQXRDLFFBQVE7O0FBZnhDO0lBREMsS0FBSyxFQUFFOzhEQUNhO0FBRXJCO0lBREMsS0FBSyxFQUFFOzREQUN3QjtBQUdoQztJQURDLEtBQUssRUFBRTs2REFDc0Q7QUFFOUQ7SUFEQyxLQUFLLEVBQUU7dURBQytCO0FBRXZDO0lBREMsS0FBSyxFQUFFO3NFQUNzQjtBQUU5QjtJQURDLEtBQUssRUFBRTt3RUFDd0I7QUFFaEM7SUFEQyxLQUFLLEVBQUU7eURBQ1M7QUFmTix3QkFBd0I7SUFKcEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHNCQUFzQjtRQUNoQyxRQUFRLEVBQUUsNkJBQTZCO0tBQ3hDLENBQUM7SUFrQmdDLFdBQUEsUUFBUSxFQUFFLENBQUE7R0FqQi9CLHdCQUF3QixDQThCcEM7U0E5Qlksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPcHRpb25hbCwgU2ltcGxlQ2hhbmdlcywgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWZWN0b3JUaWxlIH0gZnJvbSAnb2wvbGF5ZXInO1xuaW1wb3J0IHsgUmVuZGVyVHlwZSB9IGZyb20gJ29sL2xheWVyL1ZlY3RvclRpbGUnO1xuaW1wb3J0IHsgRmVhdHVyZSB9IGZyb20gJ29sJztcbmltcG9ydCB7IFN0eWxlIH0gZnJvbSAnb2wvc3R5bGUnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXllckNvbXBvbmVudCB9IGZyb20gJy4vbGF5ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IExheWVyR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2xheWVyZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IFN0eWxlRnVuY3Rpb24gfSBmcm9tICdvbC9zdHlsZS9TdHlsZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1sYXllci12ZWN0b3J0aWxlJyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxufSlcbmV4cG9ydCBjbGFzcyBMYXllclZlY3RvclRpbGVDb21wb25lbnQgZXh0ZW5kcyBMYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KClcbiAgcmVuZGVyQnVmZmVyOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHJlbmRlck1vZGU6IFJlbmRlclR5cGUgfCBzdHJpbmc7XG4gIC8qIG5vdCBtYXJrZWQgYXMgb3B0aW9uYWwgaW4gdGhlIHR5cGluZ3MgKi9cbiAgQElucHV0KClcbiAgcmVuZGVyT3JkZXI6IChmZWF0dXJlMTogRmVhdHVyZSwgZmVhdHVyZTI6IEZlYXR1cmUpID0+IG51bWJlcjtcbiAgQElucHV0KClcbiAgc3R5bGU6IFN0eWxlIHwgU3R5bGVbXSB8IFN0eWxlRnVuY3Rpb247XG4gIEBJbnB1dCgpXG4gIHVwZGF0ZVdoaWxlQW5pbWF0aW5nOiBib29sZWFuO1xuICBASW5wdXQoKVxuICB1cGRhdGVXaGlsZUludGVyYWN0aW5nOiBib29sZWFuO1xuICBASW5wdXQoKVxuICB2aXNpYmxlOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKG1hcDogTWFwQ29tcG9uZW50LCBAT3B0aW9uYWwoKSBncm91cD86IExheWVyR3JvdXBDb21wb25lbnQpIHtcbiAgICBzdXBlcihncm91cCB8fCBtYXApO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIG9sLmxheWVyLlZlY3RvclRpbGUgaW5zdGFuY2Ugd2l0aDonLCB0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFZlY3RvclRpbGUodGhpcyk7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBzdXBlci5uZ09uQ2hhbmdlcyhjaGFuZ2VzKTtcbiAgfVxufVxuIl19