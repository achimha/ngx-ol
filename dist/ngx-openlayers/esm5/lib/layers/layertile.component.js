import { __decorate, __extends, __param } from "tslib";
import { Component, Input, Optional } from '@angular/core';
import { Tile } from 'ol/layer';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';
var LayerTileComponent = /** @class */ (function (_super) {
    __extends(LayerTileComponent, _super);
    function LayerTileComponent(map, group) {
        return _super.call(this, group || map) || this;
    }
    LayerTileComponent.prototype.ngOnInit = function () {
        // console.log('creating ol.layer.Tile instance with:', this);
        this.instance = new Tile(this);
        _super.prototype.ngOnInit.call(this);
    };
    LayerTileComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
    };
    LayerTileComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: LayerGroupComponent, decorators: [{ type: Optional }] }
    ]; };
    __decorate([
        Input()
    ], LayerTileComponent.prototype, "preload", void 0);
    __decorate([
        Input()
    ], LayerTileComponent.prototype, "useInterimTilesOnError", void 0);
    LayerTileComponent = __decorate([
        Component({
            selector: 'aol-layer-tile',
            template: " <ng-content></ng-content> "
        }),
        __param(1, Optional())
    ], LayerTileComponent);
    return LayerTileComponent;
}(LayerComponent));
export { LayerTileComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXJ0aWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2xheWVycy9sYXllcnRpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixLQUFLLEVBQUUsUUFBUSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUN4RyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ2hDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFNN0Q7SUFBd0Msc0NBQWM7SUFRcEQsNEJBQVksR0FBaUIsRUFBYyxLQUEyQjtlQUNwRSxrQkFBTSxLQUFLLElBQUksR0FBRyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQ0UsOERBQThEO1FBQzlELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsaUJBQU0sUUFBUSxXQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELHdDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNoQyxpQkFBTSxXQUFXLFlBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Z0JBWmdCLFlBQVk7Z0JBQXNCLG1CQUFtQix1QkFBdEMsUUFBUTs7SUFKeEM7UUFEQyxLQUFLLEVBQUU7dURBQ1E7SUFFaEI7UUFEQyxLQUFLLEVBQUU7c0VBQ3dCO0lBTnJCLGtCQUFrQjtRQUo5QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFFBQVEsRUFBRSw2QkFBNkI7U0FDeEMsQ0FBQztRQVNnQyxXQUFBLFFBQVEsRUFBRSxDQUFBO09BUi9CLGtCQUFrQixDQXFCOUI7SUFBRCx5QkFBQztDQUFBLEFBckJELENBQXdDLGNBQWMsR0FxQnJEO1NBckJZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIElucHV0LCBPcHRpb25hbCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaWxlIH0gZnJvbSAnb2wvbGF5ZXInO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXllckNvbXBvbmVudCB9IGZyb20gJy4vbGF5ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IExheWVyR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2xheWVyZ3JvdXAuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWxheWVyLXRpbGUnLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG59KVxuZXhwb3J0IGNsYXNzIExheWVyVGlsZUNvbXBvbmVudCBleHRlbmRzIExheWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIHB1YmxpYyBzb3VyY2U6IFRpbGU7XG5cbiAgQElucHV0KClcbiAgcHJlbG9hZDogbnVtYmVyO1xuICBASW5wdXQoKVxuICB1c2VJbnRlcmltVGlsZXNPbkVycm9yOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKG1hcDogTWFwQ29tcG9uZW50LCBAT3B0aW9uYWwoKSBncm91cD86IExheWVyR3JvdXBDb21wb25lbnQpIHtcbiAgICBzdXBlcihncm91cCB8fCBtYXApO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIG9sLmxheWVyLlRpbGUgaW5zdGFuY2Ugd2l0aDonLCB0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFRpbGUodGhpcyk7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBzdXBlci5uZ09uQ2hhbmdlcyhjaGFuZ2VzKTtcbiAgfVxufVxuIl19