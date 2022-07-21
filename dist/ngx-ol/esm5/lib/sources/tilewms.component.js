import { __decorate, __extends, __param } from "tslib";
import { Component, Host, Input, forwardRef } from '@angular/core';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';
import { TileWMS } from 'ol/source';
var SourceTileWMSComponent = /** @class */ (function (_super) {
    __extends(SourceTileWMSComponent, _super);
    function SourceTileWMSComponent(layer) {
        return _super.call(this, layer) || this;
    }
    SourceTileWMSComponent_1 = SourceTileWMSComponent;
    SourceTileWMSComponent.prototype.ngOnInit = function () {
        this.instance = new TileWMS(this);
        this.host.instance.setSource(this.instance);
    };
    SourceTileWMSComponent.prototype.ngOnChanges = function (changes) {
        if (this.instance && changes.hasOwnProperty('params')) {
            this.instance.updateParams(this.params);
        }
    };
    var SourceTileWMSComponent_1;
    SourceTileWMSComponent.ctorParameters = function () { return [
        { type: LayerTileComponent, decorators: [{ type: Host }] }
    ]; };
    __decorate([
        Input()
    ], SourceTileWMSComponent.prototype, "cacheSize", void 0);
    __decorate([
        Input()
    ], SourceTileWMSComponent.prototype, "crossOrigin", void 0);
    __decorate([
        Input()
    ], SourceTileWMSComponent.prototype, "gutter", void 0);
    __decorate([
        Input()
    ], SourceTileWMSComponent.prototype, "hidpi", void 0);
    __decorate([
        Input()
    ], SourceTileWMSComponent.prototype, "params", void 0);
    __decorate([
        Input()
    ], SourceTileWMSComponent.prototype, "projection", void 0);
    __decorate([
        Input()
    ], SourceTileWMSComponent.prototype, "reprojectionErrorThreshold", void 0);
    __decorate([
        Input()
    ], SourceTileWMSComponent.prototype, "serverType", void 0);
    __decorate([
        Input()
    ], SourceTileWMSComponent.prototype, "tileGrid", void 0);
    __decorate([
        Input()
    ], SourceTileWMSComponent.prototype, "tileLoadFunction", void 0);
    __decorate([
        Input()
    ], SourceTileWMSComponent.prototype, "url", void 0);
    __decorate([
        Input()
    ], SourceTileWMSComponent.prototype, "urls", void 0);
    __decorate([
        Input()
    ], SourceTileWMSComponent.prototype, "wrapX", void 0);
    SourceTileWMSComponent = SourceTileWMSComponent_1 = __decorate([
        Component({
            selector: 'aol-source-tilewms',
            template: " <ng-content></ng-content> ",
            providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceTileWMSComponent_1; }) }]
        }),
        __param(0, Host())
    ], SourceTileWMSComponent);
    return SourceTileWMSComponent;
}(SourceComponent));
export { SourceTileWMSComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZXdtcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWNoaW1oYS9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvc291cmNlcy90aWxld21zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFxQixVQUFVLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBVXBDO0lBQTRDLDBDQUFlO0lBNkJ6RCxnQ0FBb0IsS0FBeUI7ZUFDM0Msa0JBQU0sS0FBSyxDQUFDO0lBQ2QsQ0FBQzsrQkEvQlUsc0JBQXNCO0lBaUNqQyx5Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCw0Q0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQzs7O2dCQWIwQixrQkFBa0IsdUJBQWhDLElBQUk7O0lBMUJqQjtRQURDLEtBQUssRUFBRTs2REFDVTtJQUVsQjtRQURDLEtBQUssRUFBRTsrREFDWTtJQUVwQjtRQURDLEtBQUssRUFBRTswREFDTztJQUVmO1FBREMsS0FBSyxFQUFFO3lEQUNPO0lBRWY7UUFEQyxLQUFLLEVBQUU7MERBQ3VCO0lBRS9CO1FBREMsS0FBSyxFQUFFOzhEQUNXO0lBRW5CO1FBREMsS0FBSyxFQUFFOzhFQUMyQjtJQUVuQztRQURDLEtBQUssRUFBRTs4REFDZTtJQUV2QjtRQURDLEtBQUssRUFBRTs0REFDVztJQUVuQjtRQURDLEtBQUssRUFBRTtvRUFDdUI7SUFFL0I7UUFEQyxLQUFLLEVBQUU7dURBQ0k7SUFFWjtRQURDLEtBQUssRUFBRTt3REFDTztJQUVmO1FBREMsS0FBSyxFQUFFO3lEQUNPO0lBM0JKLHNCQUFzQjtRQUxsQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFFBQVEsRUFBRSw2QkFBNkI7WUFDdkMsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHdCQUFzQixFQUF0QixDQUFzQixDQUFDLEVBQUUsQ0FBQztTQUNqRyxDQUFDO1FBOEJhLFdBQUEsSUFBSSxFQUFFLENBQUE7T0E3QlIsc0JBQXNCLENBMkNsQztJQUFELDZCQUFDO0NBQUEsQUEzQ0QsQ0FBNEMsZUFBZSxHQTJDMUQ7U0EzQ1ksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIGZvcndhcmRSZWYsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExheWVyVGlsZUNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcnRpbGUuY29tcG9uZW50JztcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaWxlV01TIH0gZnJvbSAnb2wvc291cmNlJztcbmltcG9ydCBUaWxlR3JpZCBmcm9tICdvbC90aWxlZ3JpZC9UaWxlR3JpZCc7XG5pbXBvcnQgeyBMb2FkRnVuY3Rpb24gfSBmcm9tICdvbC9UaWxlJztcbmltcG9ydCB7IFNlcnZlclR5cGUgfSBmcm9tICdvbC9zb3VyY2Uvd21zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS10aWxld21zJyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFNvdXJjZUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlVGlsZVdNU0NvbXBvbmVudCkgfV0sXG59KVxuZXhwb3J0IGNsYXNzIFNvdXJjZVRpbGVXTVNDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIGluc3RhbmNlOiBUaWxlV01TO1xuICBASW5wdXQoKVxuICBjYWNoZVNpemU6IG51bWJlcjtcbiAgQElucHV0KClcbiAgY3Jvc3NPcmlnaW46IHN0cmluZztcbiAgQElucHV0KClcbiAgZ3V0dGVyOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIGhpZHBpOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBwYXJhbXM6IHsgW2tleTogc3RyaW5nXTogYW55IH07XG4gIEBJbnB1dCgpXG4gIHByb2plY3Rpb246IHN0cmluZztcbiAgQElucHV0KClcbiAgcmVwcm9qZWN0aW9uRXJyb3JUaHJlc2hvbGQ6IG51bWJlcjtcbiAgQElucHV0KClcbiAgc2VydmVyVHlwZTogU2VydmVyVHlwZTtcbiAgQElucHV0KClcbiAgdGlsZUdyaWQ6IFRpbGVHcmlkO1xuICBASW5wdXQoKVxuICB0aWxlTG9hZEZ1bmN0aW9uOiBMb2FkRnVuY3Rpb247XG4gIEBJbnB1dCgpXG4gIHVybDogc3RyaW5nO1xuICBASW5wdXQoKVxuICB1cmxzOiBzdHJpbmdbXTtcbiAgQElucHV0KClcbiAgd3JhcFg6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBsYXllcjogTGF5ZXJUaWxlQ29tcG9uZW50KSB7XG4gICAgc3VwZXIobGF5ZXIpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBUaWxlV01TKHRoaXMpO1xuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2UodGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UgJiYgY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgncGFyYW1zJykpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UudXBkYXRlUGFyYW1zKHRoaXMucGFyYW1zKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==