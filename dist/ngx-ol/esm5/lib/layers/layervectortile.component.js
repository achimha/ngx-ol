import * as tslib_1 from "tslib";
import { Component, Input, Optional } from '@angular/core';
import { VectorTile } from 'ol/layer';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';
var LayerVectorTileComponent = /** @class */ (function (_super) {
    tslib_1.__extends(LayerVectorTileComponent, _super);
    function LayerVectorTileComponent(map, group) {
        return _super.call(this, group || map) || this;
    }
    LayerVectorTileComponent.prototype.ngOnInit = function () {
        // console.log('creating ol.layer.VectorTile instance with:', this);
        this.instance = new VectorTile(this);
        _super.prototype.ngOnInit.call(this);
    };
    LayerVectorTileComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
    };
    LayerVectorTileComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: LayerGroupComponent, decorators: [{ type: Optional }] }
    ]; };
    tslib_1.__decorate([
        Input()
    ], LayerVectorTileComponent.prototype, "renderBuffer", void 0);
    tslib_1.__decorate([
        Input()
    ], LayerVectorTileComponent.prototype, "renderMode", void 0);
    tslib_1.__decorate([
        Input()
    ], LayerVectorTileComponent.prototype, "renderOrder", void 0);
    tslib_1.__decorate([
        Input()
    ], LayerVectorTileComponent.prototype, "style", void 0);
    tslib_1.__decorate([
        Input()
    ], LayerVectorTileComponent.prototype, "updateWhileAnimating", void 0);
    tslib_1.__decorate([
        Input()
    ], LayerVectorTileComponent.prototype, "updateWhileInteracting", void 0);
    tslib_1.__decorate([
        Input()
    ], LayerVectorTileComponent.prototype, "visible", void 0);
    LayerVectorTileComponent = tslib_1.__decorate([
        Component({
            selector: 'aol-layer-vectortile',
            template: " <ng-content></ng-content> "
        }),
        tslib_1.__param(1, Optional())
    ], LayerVectorTileComponent);
    return LayerVectorTileComponent;
}(LayerComponent));
export { LayerVectorTileComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXJ2ZWN0b3J0aWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9sYXllcnMvbGF5ZXJ2ZWN0b3J0aWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsUUFBUSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBR3RDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFPN0Q7SUFBOEMsb0RBQWM7SUFpQjFELGtDQUFZLEdBQWlCLEVBQWMsS0FBMkI7ZUFDcEUsa0JBQU0sS0FBSyxJQUFJLEdBQUcsQ0FBQztJQUNyQixDQUFDO0lBRUQsMkNBQVEsR0FBUjtRQUNFLG9FQUFvRTtRQUNwRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLGlCQUFNLFFBQVEsV0FBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCw4Q0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDaEMsaUJBQU0sV0FBVyxZQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUM7O2dCQVpnQixZQUFZO2dCQUFzQixtQkFBbUIsdUJBQXRDLFFBQVE7O0lBZnhDO1FBREMsS0FBSyxFQUFFO2tFQUNhO0lBRXJCO1FBREMsS0FBSyxFQUFFO2dFQUNpQjtJQUd6QjtRQURDLEtBQUssRUFBRTtpRUFDc0Q7SUFFOUQ7UUFEQyxLQUFLLEVBQUU7MkRBQytCO0lBRXZDO1FBREMsS0FBSyxFQUFFOzBFQUNzQjtJQUU5QjtRQURDLEtBQUssRUFBRTs0RUFDd0I7SUFFaEM7UUFEQyxLQUFLLEVBQUU7NkRBQ1M7SUFmTix3QkFBd0I7UUFKcEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxRQUFRLEVBQUUsNkJBQTZCO1NBQ3hDLENBQUM7UUFrQmdDLG1CQUFBLFFBQVEsRUFBRSxDQUFBO09BakIvQix3QkFBd0IsQ0E4QnBDO0lBQUQsK0JBQUM7Q0FBQSxBQTlCRCxDQUE4QyxjQUFjLEdBOEIzRDtTQTlCWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE9wdGlvbmFsLCBTaW1wbGVDaGFuZ2VzLCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZlY3RvclRpbGUgfSBmcm9tICdvbC9sYXllcic7XG5pbXBvcnQgeyBGZWF0dXJlIH0gZnJvbSAnb2wnO1xuaW1wb3J0IHsgU3R5bGUgfSBmcm9tICdvbC9zdHlsZSc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IExheWVyQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5ZXJHcm91cENvbXBvbmVudCB9IGZyb20gJy4vbGF5ZXJncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3R5bGVGdW5jdGlvbiB9IGZyb20gJ29sL3N0eWxlL1N0eWxlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWxheWVyLXZlY3RvcnRpbGUnLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG59KVxuZXhwb3J0IGNsYXNzIExheWVyVmVjdG9yVGlsZUNvbXBvbmVudCBleHRlbmRzIExheWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKVxuICByZW5kZXJCdWZmZXI6IG51bWJlcjtcbiAgQElucHV0KClcbiAgcmVuZGVyTW9kZTogYW55IHwgc3RyaW5nO1xuICAvKiBub3QgbWFya2VkIGFzIG9wdGlvbmFsIGluIHRoZSB0eXBpbmdzICovXG4gIEBJbnB1dCgpXG4gIHJlbmRlck9yZGVyOiAoZmVhdHVyZTE6IEZlYXR1cmUsIGZlYXR1cmUyOiBGZWF0dXJlKSA9PiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHN0eWxlOiBTdHlsZSB8IFN0eWxlW10gfCBTdHlsZUZ1bmN0aW9uO1xuICBASW5wdXQoKVxuICB1cGRhdGVXaGlsZUFuaW1hdGluZzogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgdXBkYXRlV2hpbGVJbnRlcmFjdGluZzogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgdmlzaWJsZTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihtYXA6IE1hcENvbXBvbmVudCwgQE9wdGlvbmFsKCkgZ3JvdXA/OiBMYXllckdyb3VwQ29tcG9uZW50KSB7XG4gICAgc3VwZXIoZ3JvdXAgfHwgbWFwKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBvbC5sYXllci5WZWN0b3JUaWxlIGluc3RhbmNlIHdpdGg6JywgdGhpcyk7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBWZWN0b3JUaWxlKHRoaXMpO1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XG4gIH1cbn1cbiJdfQ==