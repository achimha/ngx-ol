import { __decorate, __extends, __param } from "tslib";
import { Component, SkipSelf, Optional } from '@angular/core';
import { Group } from 'ol/layer';
import { LayerComponent } from './layer.component';
import { MapComponent } from '../map.component';
var LayerGroupComponent = /** @class */ (function (_super) {
    __extends(LayerGroupComponent, _super);
    function LayerGroupComponent(map, group) {
        return _super.call(this, group || map) || this;
    }
    LayerGroupComponent.prototype.ngOnInit = function () {
        // console.log(`creating ol.layer.Group instance with:`, this);
        this.instance = new Group(this);
        _super.prototype.ngOnInit.call(this);
    };
    LayerGroupComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: LayerGroupComponent, decorators: [{ type: SkipSelf }, { type: Optional }] }
    ]; };
    LayerGroupComponent = __decorate([
        Component({
            selector: 'aol-layer-group',
            template: " <ng-content></ng-content> "
        }),
        __param(1, SkipSelf()),
        __param(1, Optional())
    ], LayerGroupComponent);
    return LayerGroupComponent;
}(LayerComponent));
export { LayerGroupComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXJncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvbGF5ZXJzL2xheWVyZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDakMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQU1oRDtJQUF5Qyx1Q0FBYztJQUdyRCw2QkFDRSxHQUFpQixFQUdqQixLQUEyQjtlQUUzQixrQkFBTSxLQUFLLElBQUksR0FBRyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQ0UsK0RBQStEO1FBQy9ELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsaUJBQU0sUUFBUSxXQUFFLENBQUM7SUFDbkIsQ0FBQzs7Z0JBWk0sWUFBWTtnQkFHVCxtQkFBbUIsdUJBRjFCLFFBQVEsWUFDUixRQUFROztJQU5BLG1CQUFtQjtRQUovQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSw2QkFBNkI7U0FDeEMsQ0FBQztRQU1HLFdBQUEsUUFBUSxFQUFFLENBQUE7UUFDVixXQUFBLFFBQVEsRUFBRSxDQUFBO09BTkYsbUJBQW1CLENBaUIvQjtJQUFELDBCQUFDO0NBQUEsQUFqQkQsQ0FBeUMsY0FBYyxHQWlCdEQ7U0FqQlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCwgU2tpcFNlbGYsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHcm91cCB9IGZyb20gJ29sL2xheWVyJztcbmltcG9ydCB7IExheWVyQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1sYXllci1ncm91cCcsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbn0pXG5leHBvcnQgY2xhc3MgTGF5ZXJHcm91cENvbXBvbmVudCBleHRlbmRzIExheWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgaW5zdGFuY2U6IEdyb3VwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIG1hcDogTWFwQ29tcG9uZW50LFxuICAgIEBTa2lwU2VsZigpXG4gICAgQE9wdGlvbmFsKClcbiAgICBncm91cD86IExheWVyR3JvdXBDb21wb25lbnRcbiAgKSB7XG4gICAgc3VwZXIoZ3JvdXAgfHwgbWFwKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKGBjcmVhdGluZyBvbC5sYXllci5Hcm91cCBpbnN0YW5jZSB3aXRoOmAsIHRoaXMpO1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgR3JvdXAodGhpcyk7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgfVxufVxuIl19