import { __decorate, __extends, __param } from "tslib";
import { Component, Input, Optional } from '@angular/core';
import { Image } from 'ol/layer';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';
var LayerImageComponent = /** @class */ (function (_super) {
    __extends(LayerImageComponent, _super);
    function LayerImageComponent(map, group) {
        return _super.call(this, group || map) || this;
    }
    LayerImageComponent.prototype.ngOnInit = function () {
        this.instance = new Image(this);
        _super.prototype.ngOnInit.call(this);
    };
    LayerImageComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
    };
    LayerImageComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: LayerGroupComponent, decorators: [{ type: Optional }] }
    ]; };
    __decorate([
        Input()
    ], LayerImageComponent.prototype, "opacity", void 0);
    __decorate([
        Input()
    ], LayerImageComponent.prototype, "visible", void 0);
    __decorate([
        Input()
    ], LayerImageComponent.prototype, "extent", void 0);
    __decorate([
        Input()
    ], LayerImageComponent.prototype, "minResolution", void 0);
    __decorate([
        Input()
    ], LayerImageComponent.prototype, "maxResolution", void 0);
    __decorate([
        Input()
    ], LayerImageComponent.prototype, "zIndex", void 0);
    LayerImageComponent = __decorate([
        Component({
            selector: 'aol-layer-image',
            template: " <ng-content></ng-content> "
        }),
        __param(1, Optional())
    ], LayerImageComponent);
    return LayerImageComponent;
}(LayerComponent));
export { LayerImageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXJpbWFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvbGF5ZXJzL2xheWVyaW1hZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsUUFBUSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFPN0Q7SUFBeUMsdUNBQWM7SUFnQnJELDZCQUFZLEdBQWlCLEVBQWMsS0FBMkI7ZUFDcEUsa0JBQU0sS0FBSyxJQUFJLEdBQUcsQ0FBQztJQUNyQixDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsaUJBQU0sUUFBUSxXQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELHlDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNoQyxpQkFBTSxXQUFXLFlBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Z0JBWGdCLFlBQVk7Z0JBQXNCLG1CQUFtQix1QkFBdEMsUUFBUTs7SUFaeEM7UUFEQyxLQUFLLEVBQUU7d0RBQ1E7SUFFaEI7UUFEQyxLQUFLLEVBQUU7d0RBQ1M7SUFFakI7UUFEQyxLQUFLLEVBQUU7dURBQ087SUFFZjtRQURDLEtBQUssRUFBRTs4REFDYztJQUV0QjtRQURDLEtBQUssRUFBRTs4REFDYztJQUV0QjtRQURDLEtBQUssRUFBRTt1REFDTztJQWRKLG1CQUFtQjtRQUovQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSw2QkFBNkI7U0FDeEMsQ0FBQztRQWlCZ0MsV0FBQSxRQUFRLEVBQUUsQ0FBQTtPQWhCL0IsbUJBQW1CLENBNEIvQjtJQUFELDBCQUFDO0NBQUEsQUE1QkQsQ0FBeUMsY0FBYyxHQTRCdEQ7U0E1QlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE9wdGlvbmFsLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ29sL2xheWVyJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5ZXJDb21wb25lbnQgfSBmcm9tICcuL2xheWVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXllckdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllcmdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFeHRlbnQgfSBmcm9tICdvbC9leHRlbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtbGF5ZXItaW1hZ2UnLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG59KVxuZXhwb3J0IGNsYXNzIExheWVySW1hZ2VDb21wb25lbnQgZXh0ZW5kcyBMYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgcHVibGljIHNvdXJjZTogSW1hZ2U7XG5cbiAgQElucHV0KClcbiAgb3BhY2l0eTogbnVtYmVyO1xuICBASW5wdXQoKVxuICB2aXNpYmxlOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBleHRlbnQ6IEV4dGVudDtcbiAgQElucHV0KClcbiAgbWluUmVzb2x1dGlvbjogbnVtYmVyO1xuICBASW5wdXQoKVxuICBtYXhSZXNvbHV0aW9uOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHpJbmRleDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKG1hcDogTWFwQ29tcG9uZW50LCBAT3B0aW9uYWwoKSBncm91cD86IExheWVyR3JvdXBDb21wb25lbnQpIHtcbiAgICBzdXBlcihncm91cCB8fCBtYXApO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBJbWFnZSh0aGlzKTtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIHN1cGVyLm5nT25DaGFuZ2VzKGNoYW5nZXMpO1xuICB9XG59XG4iXX0=