import * as tslib_1 from "tslib";
import { Component, Input, Optional } from '@angular/core';
import { Tile } from 'ol/layer';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';
var LayerTileComponent = /** @class */ (function (_super) {
    tslib_1.__extends(LayerTileComponent, _super);
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
    tslib_1.__decorate([
        Input()
    ], LayerTileComponent.prototype, "preload", void 0);
    tslib_1.__decorate([
        Input()
    ], LayerTileComponent.prototype, "useInterimTilesOnError", void 0);
    LayerTileComponent = tslib_1.__decorate([
        Component({
            selector: 'aol-layer-tile',
            template: " <ng-content></ng-content> "
        }),
        tslib_1.__param(1, Optional())
    ], LayerTileComponent);
    return LayerTileComponent;
}(LayerComponent));
export { LayerTileComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXJ0aWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9sYXllcnMvbGF5ZXJ0aWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsS0FBSyxFQUFFLFFBQVEsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDeEcsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNoQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBTTdEO0lBQXdDLDhDQUFjO0lBT3BELDRCQUFZLEdBQWlCLEVBQWMsS0FBMkI7ZUFDcEUsa0JBQU0sS0FBSyxJQUFJLEdBQUcsQ0FBQztJQUNyQixDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUNFLDhEQUE4RDtRQUM5RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLGlCQUFNLFFBQVEsV0FBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCx3Q0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDaEMsaUJBQU0sV0FBVyxZQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUM7O2dCQVpnQixZQUFZO2dCQUFzQixtQkFBbUIsdUJBQXRDLFFBQVE7O0lBSnhDO1FBREMsS0FBSyxFQUFFO3VEQUNRO0lBRWhCO1FBREMsS0FBSyxFQUFFO3NFQUN3QjtJQUxyQixrQkFBa0I7UUFKOUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQUUsNkJBQTZCO1NBQ3hDLENBQUM7UUFRZ0MsbUJBQUEsUUFBUSxFQUFFLENBQUE7T0FQL0Isa0JBQWtCLENBb0I5QjtJQUFELHlCQUFDO0NBQUEsQUFwQkQsQ0FBd0MsY0FBYyxHQW9CckQ7U0FwQlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCwgSW5wdXQsIE9wdGlvbmFsLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRpbGUgfSBmcm9tICdvbC9sYXllcic7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IExheWVyQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5ZXJHcm91cENvbXBvbmVudCB9IGZyb20gJy4vbGF5ZXJncm91cC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtbGF5ZXItdGlsZScsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbn0pXG5leHBvcnQgY2xhc3MgTGF5ZXJUaWxlQ29tcG9uZW50IGV4dGVuZHMgTGF5ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKVxuICBwcmVsb2FkOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHVzZUludGVyaW1UaWxlc09uRXJyb3I6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IobWFwOiBNYXBDb21wb25lbnQsIEBPcHRpb25hbCgpIGdyb3VwPzogTGF5ZXJHcm91cENvbXBvbmVudCkge1xuICAgIHN1cGVyKGdyb3VwIHx8IG1hcCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRpbmcgb2wubGF5ZXIuVGlsZSBpbnN0YW5jZSB3aXRoOicsIHRoaXMpO1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVGlsZSh0aGlzKTtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIHN1cGVyLm5nT25DaGFuZ2VzKGNoYW5nZXMpO1xuICB9XG59XG4iXX0=