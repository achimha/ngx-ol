import * as tslib_1 from "tslib";
import { Component, Host, Input, forwardRef } from '@angular/core';
import { TileJSON } from 'ol/source';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';
var SourceTileJSONComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SourceTileJSONComponent, _super);
    function SourceTileJSONComponent(layer) {
        return _super.call(this, layer) || this;
    }
    SourceTileJSONComponent_1 = SourceTileJSONComponent;
    SourceTileJSONComponent.prototype.ngOnInit = function () {
        this.instance = new TileJSON(this);
        this.host.instance.setSource(this.instance);
    };
    var SourceTileJSONComponent_1;
    SourceTileJSONComponent.ctorParameters = function () { return [
        { type: LayerTileComponent, decorators: [{ type: Host }] }
    ]; };
    tslib_1.__decorate([
        Input()
    ], SourceTileJSONComponent.prototype, "url", void 0);
    SourceTileJSONComponent = SourceTileJSONComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'aol-source-tilejson',
            template: " <ng-content></ng-content> ",
            providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceTileJSONComponent_1; }) }]
        }),
        tslib_1.__param(0, Host())
    ], SourceTileJSONComponent);
    return SourceTileJSONComponent;
}(SourceComponent));
export { SourceTileJSONComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZWpzb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9sLyIsInNvdXJjZXMiOlsibGliL3NvdXJjZXMvdGlsZWpzb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQVUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDckMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBT3JEO0lBQTZDLG1EQUFlO0lBTTFELGlDQUFvQixLQUF5QjtlQUMzQyxrQkFBTSxLQUFLLENBQUM7SUFDZCxDQUFDO2dDQVJVLHVCQUF1QjtJQVVsQywwQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7OztnQkFQMEIsa0JBQWtCLHVCQUFoQyxJQUFJOztJQUZqQjtRQURDLEtBQUssRUFBRTt3REFDSTtJQUpELHVCQUF1QjtRQUxuQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFFBQVEsRUFBRSw2QkFBNkI7WUFDdkMsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHlCQUF1QixFQUF2QixDQUF1QixDQUFDLEVBQUUsQ0FBQztTQUNsRyxDQUFDO1FBT2EsbUJBQUEsSUFBSSxFQUFFLENBQUE7T0FOUix1QkFBdUIsQ0FjbkM7SUFBRCw4QkFBQztDQUFBLEFBZEQsQ0FBNkMsZUFBZSxHQWMzRDtTQWRZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdCwgSW5wdXQsIE9uSW5pdCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGlsZUpTT04gfSBmcm9tICdvbC9zb3VyY2UnO1xuaW1wb3J0IHsgTGF5ZXJUaWxlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydGlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS10aWxlanNvbicsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZVRpbGVKU09OQ29tcG9uZW50KSB9XSxcbn0pXG5leHBvcnQgY2xhc3MgU291cmNlVGlsZUpTT05Db21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpbnN0YW5jZTogVGlsZUpTT047XG5cbiAgQElucHV0KClcbiAgdXJsOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBsYXllcjogTGF5ZXJUaWxlQ29tcG9uZW50KSB7XG4gICAgc3VwZXIobGF5ZXIpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBUaWxlSlNPTih0aGlzKTtcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=