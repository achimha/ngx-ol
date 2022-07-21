import { __decorate, __extends, __param } from "tslib";
import { Component, Host, Input, forwardRef } from '@angular/core';
import { SourceComponent } from './source.component';
import { LayerTileComponent } from '../layers/layertile.component';
import { UTFGrid } from 'ol/source';
var SourceUTFGridComponent = /** @class */ (function (_super) {
    __extends(SourceUTFGridComponent, _super);
    function SourceUTFGridComponent(layer) {
        return _super.call(this, layer) || this;
    }
    SourceUTFGridComponent_1 = SourceUTFGridComponent;
    SourceUTFGridComponent.prototype.ngOnInit = function () {
        this.instance = new UTFGrid(this);
        this.host.instance.setSource(this.instance);
    };
    var SourceUTFGridComponent_1;
    SourceUTFGridComponent.ctorParameters = function () { return [
        { type: LayerTileComponent, decorators: [{ type: Host }] }
    ]; };
    __decorate([
        Input()
    ], SourceUTFGridComponent.prototype, "tileJSON", void 0);
    __decorate([
        Input()
    ], SourceUTFGridComponent.prototype, "url", void 0);
    SourceUTFGridComponent = SourceUTFGridComponent_1 = __decorate([
        Component({
            selector: 'aol-source-utfgrid',
            template: " <ng-content></ng-content> ",
            providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceUTFGridComponent_1; }) }]
        }),
        __param(0, Host())
    ], SourceUTFGridComponent);
    return SourceUTFGridComponent;
}(SourceComponent));
export { SourceUTFGridComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRmZ3JpZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWNoaW1oYS9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvc291cmNlcy91dGZncmlkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFVLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQVFwQztJQUE0QywwQ0FBZTtJQUt6RCxnQ0FBb0IsS0FBeUI7ZUFDM0Msa0JBQU0sS0FBSyxDQUFDO0lBQ2QsQ0FBQzsrQkFQVSxzQkFBc0I7SUFTakMseUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7Z0JBUDBCLGtCQUFrQix1QkFBaEMsSUFBSTs7SUFIUjtRQUFSLEtBQUssRUFBRTs0REFBa0I7SUFDakI7UUFBUixLQUFLLEVBQUU7dURBQWE7SUFIVixzQkFBc0I7UUFMbEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixRQUFRLEVBQUUsNkJBQTZCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSx3QkFBc0IsRUFBdEIsQ0FBc0IsQ0FBQyxFQUFFLENBQUM7U0FDakcsQ0FBQztRQU1hLFdBQUEsSUFBSSxFQUFFLENBQUE7T0FMUixzQkFBc0IsQ0FhbEM7SUFBRCw2QkFBQztDQUFBLEFBYkQsQ0FBNEMsZUFBZSxHQWExRDtTQWJZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdCwgSW5wdXQsIE9uSW5pdCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UuY29tcG9uZW50JztcbmltcG9ydCB7IExheWVyVGlsZUNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcnRpbGUuY29tcG9uZW50JztcbmltcG9ydCB7IFVURkdyaWQgfSBmcm9tICdvbC9zb3VyY2UnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnb2wvc291cmNlL1RpbGVKU09OJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS11dGZncmlkJyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFNvdXJjZUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlVVRGR3JpZENvbXBvbmVudCkgfV0sXG59KVxuZXhwb3J0IGNsYXNzIFNvdXJjZVVURkdyaWRDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpbnN0YW5jZTogVVRGR3JpZDtcbiAgQElucHV0KCkgdGlsZUpTT046IENvbmZpZztcbiAgQElucHV0KCkgdXJsOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBsYXllcjogTGF5ZXJUaWxlQ29tcG9uZW50KSB7XG4gICAgc3VwZXIobGF5ZXIpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBVVEZHcmlkKHRoaXMpO1xuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2UodGhpcy5pbnN0YW5jZSk7XG4gIH1cbn1cbiJdfQ==