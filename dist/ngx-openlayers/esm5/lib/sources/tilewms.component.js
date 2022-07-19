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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZXdtcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9zb3VyY2VzL3RpbGV3bXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQXFCLFVBQVUsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDckcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFTcEM7SUFBNEMsMENBQWU7SUE2QnpELGdDQUFvQixLQUF5QjtlQUMzQyxrQkFBTSxLQUFLLENBQUM7SUFDZCxDQUFDOytCQS9CVSxzQkFBc0I7SUFpQ2pDLHlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELDRDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNyRCxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDOzs7Z0JBYjBCLGtCQUFrQix1QkFBaEMsSUFBSTs7SUExQmpCO1FBREMsS0FBSyxFQUFFOzZEQUNVO0lBRWxCO1FBREMsS0FBSyxFQUFFOytEQUNZO0lBRXBCO1FBREMsS0FBSyxFQUFFOzBEQUNPO0lBRWY7UUFEQyxLQUFLLEVBQUU7eURBQ087SUFFZjtRQURDLEtBQUssRUFBRTswREFDdUI7SUFFL0I7UUFEQyxLQUFLLEVBQUU7OERBQ1c7SUFFbkI7UUFEQyxLQUFLLEVBQUU7OEVBQzJCO0lBRW5DO1FBREMsS0FBSyxFQUFFOzhEQUNXO0lBRW5CO1FBREMsS0FBSyxFQUFFOzREQUNXO0lBRW5CO1FBREMsS0FBSyxFQUFFO29FQUN1QjtJQUUvQjtRQURDLEtBQUssRUFBRTt1REFDSTtJQUVaO1FBREMsS0FBSyxFQUFFO3dEQUNPO0lBRWY7UUFEQyxLQUFLLEVBQUU7eURBQ087SUEzQkosc0JBQXNCO1FBTGxDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsUUFBUSxFQUFFLDZCQUE2QjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsd0JBQXNCLEVBQXRCLENBQXNCLENBQUMsRUFBRSxDQUFDO1NBQ2pHLENBQUM7UUE4QmEsV0FBQSxJQUFJLEVBQUUsQ0FBQTtPQTdCUixzQkFBc0IsQ0EyQ2xDO0lBQUQsNkJBQUM7Q0FBQSxBQTNDRCxDQUE0QyxlQUFlLEdBMkMxRDtTQTNDWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3QsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgZm9yd2FyZFJlZiwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGF5ZXJUaWxlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydGlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UuY29tcG9uZW50JztcbmltcG9ydCB7IFRpbGVXTVMgfSBmcm9tICdvbC9zb3VyY2UnO1xuaW1wb3J0IHsgVGlsZUdyaWQgfSBmcm9tICdvbC90aWxlZ3JpZCc7XG5pbXBvcnQgeyBMb2FkRnVuY3Rpb24gfSBmcm9tICdvbC9UaWxlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS10aWxld21zJyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFNvdXJjZUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlVGlsZVdNU0NvbXBvbmVudCkgfV0sXG59KVxuZXhwb3J0IGNsYXNzIFNvdXJjZVRpbGVXTVNDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIGluc3RhbmNlOiBUaWxlV01TO1xuICBASW5wdXQoKVxuICBjYWNoZVNpemU6IG51bWJlcjtcbiAgQElucHV0KClcbiAgY3Jvc3NPcmlnaW46IHN0cmluZztcbiAgQElucHV0KClcbiAgZ3V0dGVyOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIGhpZHBpOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBwYXJhbXM6IHsgW2tleTogc3RyaW5nXTogYW55IH07XG4gIEBJbnB1dCgpXG4gIHByb2plY3Rpb246IHN0cmluZztcbiAgQElucHV0KClcbiAgcmVwcm9qZWN0aW9uRXJyb3JUaHJlc2hvbGQ6IG51bWJlcjtcbiAgQElucHV0KClcbiAgc2VydmVyVHlwZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICB0aWxlR3JpZDogVGlsZUdyaWQ7XG4gIEBJbnB1dCgpXG4gIHRpbGVMb2FkRnVuY3Rpb246IExvYWRGdW5jdGlvbjtcbiAgQElucHV0KClcbiAgdXJsOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHVybHM6IHN0cmluZ1tdO1xuICBASW5wdXQoKVxuICB3cmFwWDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihASG9zdCgpIGxheWVyOiBMYXllclRpbGVDb21wb25lbnQpIHtcbiAgICBzdXBlcihsYXllcik7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFRpbGVXTVModGhpcyk7XG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFNvdXJjZSh0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSAmJiBjaGFuZ2VzLmhhc093blByb3BlcnR5KCdwYXJhbXMnKSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS51cGRhdGVQYXJhbXModGhpcy5wYXJhbXMpO1xuICAgIH1cbiAgfVxufVxuIl19