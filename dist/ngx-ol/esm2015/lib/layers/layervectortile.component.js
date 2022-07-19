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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXJ2ZWN0b3J0aWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9sYXllcnMvbGF5ZXJ2ZWN0b3J0aWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsUUFBUSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBSXRDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFPN0QsSUFBYSx3QkFBd0IsR0FBckMsTUFBYSx3QkFBeUIsU0FBUSxjQUFjO0lBaUIxRCxZQUFZLEdBQWlCLEVBQWMsS0FBMkI7UUFDcEUsS0FBSyxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsUUFBUTtRQUNOLG9FQUFvRTtRQUNwRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0IsQ0FBQztDQUNGLENBQUE7O1lBYmtCLFlBQVk7WUFBc0IsbUJBQW1CLHVCQUF0QyxRQUFROztBQWZ4QztJQURDLEtBQUssRUFBRTs4REFDYTtBQUVyQjtJQURDLEtBQUssRUFBRTs0REFDd0I7QUFHaEM7SUFEQyxLQUFLLEVBQUU7NkRBQ3NEO0FBRTlEO0lBREMsS0FBSyxFQUFFO3VEQUMrQjtBQUV2QztJQURDLEtBQUssRUFBRTtzRUFDc0I7QUFFOUI7SUFEQyxLQUFLLEVBQUU7d0VBQ3dCO0FBRWhDO0lBREMsS0FBSyxFQUFFO3lEQUNTO0FBZk4sd0JBQXdCO0lBSnBDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxzQkFBc0I7UUFDaEMsUUFBUSxFQUFFLDZCQUE2QjtLQUN4QyxDQUFDO0lBa0JnQyxXQUFBLFFBQVEsRUFBRSxDQUFBO0dBakIvQix3QkFBd0IsQ0E4QnBDO1NBOUJZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3B0aW9uYWwsIFNpbXBsZUNoYW5nZXMsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmVjdG9yVGlsZSB9IGZyb20gJ29sL2xheWVyJztcbmltcG9ydCB7IFJlbmRlclR5cGUgfSBmcm9tICdvbC9sYXllci9WZWN0b3JUaWxlJztcbmltcG9ydCB7IEZlYXR1cmUgfSBmcm9tICdvbCc7XG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gJ29sL3N0eWxlJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5ZXJDb21wb25lbnQgfSBmcm9tICcuL2xheWVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXllckdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllcmdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHlsZUZ1bmN0aW9uIH0gZnJvbSAnb2wvc3R5bGUvU3R5bGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtbGF5ZXItdmVjdG9ydGlsZScsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbn0pXG5leHBvcnQgY2xhc3MgTGF5ZXJWZWN0b3JUaWxlQ29tcG9uZW50IGV4dGVuZHMgTGF5ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpXG4gIHJlbmRlckJ1ZmZlcjogbnVtYmVyO1xuICBASW5wdXQoKVxuICByZW5kZXJNb2RlOiBSZW5kZXJUeXBlIHwgc3RyaW5nO1xuICAvKiBub3QgbWFya2VkIGFzIG9wdGlvbmFsIGluIHRoZSB0eXBpbmdzICovXG4gIEBJbnB1dCgpXG4gIHJlbmRlck9yZGVyOiAoZmVhdHVyZTE6IEZlYXR1cmUsIGZlYXR1cmUyOiBGZWF0dXJlKSA9PiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHN0eWxlOiBTdHlsZSB8IFN0eWxlW10gfCBTdHlsZUZ1bmN0aW9uO1xuICBASW5wdXQoKVxuICB1cGRhdGVXaGlsZUFuaW1hdGluZzogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgdXBkYXRlV2hpbGVJbnRlcmFjdGluZzogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgdmlzaWJsZTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihtYXA6IE1hcENvbXBvbmVudCwgQE9wdGlvbmFsKCkgZ3JvdXA/OiBMYXllckdyb3VwQ29tcG9uZW50KSB7XG4gICAgc3VwZXIoZ3JvdXAgfHwgbWFwKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBvbC5sYXllci5WZWN0b3JUaWxlIGluc3RhbmNlIHdpdGg6JywgdGhpcyk7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBWZWN0b3JUaWxlKHRoaXMpO1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XG4gIH1cbn1cbiJdfQ==