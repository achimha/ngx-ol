import { __decorate, __extends, __param } from "tslib";
import { Component, Host, Input, forwardRef } from '@angular/core';
import { BingMaps } from 'ol/source';
import { SourceComponent } from './source.component';
import { LayerTileComponent } from '../layers/layertile.component';
var SourceBingmapsComponent = /** @class */ (function (_super) {
    __extends(SourceBingmapsComponent, _super);
    function SourceBingmapsComponent(layer) {
        var _this = _super.call(this, layer) || this;
        _this.imagerySet = 'Aerial';
        return _this;
    }
    SourceBingmapsComponent_1 = SourceBingmapsComponent;
    SourceBingmapsComponent.prototype.ngOnInit = function () {
        this.instance = new BingMaps(this);
        this.host.instance.setSource(this.instance);
    };
    var SourceBingmapsComponent_1;
    SourceBingmapsComponent.ctorParameters = function () { return [
        { type: LayerTileComponent, decorators: [{ type: Host }] }
    ]; };
    __decorate([
        Input()
    ], SourceBingmapsComponent.prototype, "cacheSize", void 0);
    __decorate([
        Input()
    ], SourceBingmapsComponent.prototype, "hidpi", void 0);
    __decorate([
        Input()
    ], SourceBingmapsComponent.prototype, "culture", void 0);
    __decorate([
        Input()
    ], SourceBingmapsComponent.prototype, "key", void 0);
    __decorate([
        Input()
    ], SourceBingmapsComponent.prototype, "imagerySet", void 0);
    __decorate([
        Input()
    ], SourceBingmapsComponent.prototype, "maxZoom", void 0);
    __decorate([
        Input()
    ], SourceBingmapsComponent.prototype, "reprojectionErrorThreshold", void 0);
    __decorate([
        Input()
    ], SourceBingmapsComponent.prototype, "tileLoadFunction", void 0);
    __decorate([
        Input()
    ], SourceBingmapsComponent.prototype, "wrapX", void 0);
    SourceBingmapsComponent = SourceBingmapsComponent_1 = __decorate([
        Component({
            selector: 'aol-source-bingmaps',
            template: " <div class=\"aol-source-bingmaps\"></div> ",
            providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceBingmapsComponent_1; }) }]
        }),
        __param(0, Host())
    ], SourceBingmapsComponent);
    return SourceBingmapsComponent;
}(SourceComponent));
export { SourceBingmapsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluZ21hcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9sLyIsInNvdXJjZXMiOlsibGliL3NvdXJjZXMvYmluZ21hcHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQVUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDckMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBUW5FO0lBQTZDLDJDQUFlO0lBc0IxRCxpQ0FBb0IsS0FBeUI7UUFBN0MsWUFDRSxrQkFBTSxLQUFLLENBQUMsU0FDYjtRQVpELGdCQUFVLEdBQThFLFFBQVEsQ0FBQzs7SUFZakcsQ0FBQztnQ0F4QlUsdUJBQXVCO0lBMEJsQywwQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7OztnQkFQMEIsa0JBQWtCLHVCQUFoQyxJQUFJOztJQWxCakI7UUFEQyxLQUFLLEVBQUU7OERBQ1U7SUFFbEI7UUFEQyxLQUFLLEVBQUU7MERBQ087SUFFZjtRQURDLEtBQUssRUFBRTs0REFDUTtJQUVoQjtRQURDLEtBQUssRUFBRTt3REFDSTtJQUVaO1FBREMsS0FBSyxFQUFFOytEQUN5RjtJQUVqRztRQURDLEtBQUssRUFBRTs0REFDUTtJQUVoQjtRQURDLEtBQUssRUFBRTsrRUFDMkI7SUFFbkM7UUFEQyxLQUFLLEVBQUU7cUVBQ3VCO0lBRS9CO1FBREMsS0FBSyxFQUFFOzBEQUNPO0lBcEJKLHVCQUF1QjtRQUxuQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFFBQVEsRUFBRSw2Q0FBMkM7WUFDckQsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHlCQUF1QixFQUF2QixDQUF1QixDQUFDLEVBQUUsQ0FBQztTQUNsRyxDQUFDO1FBdUJhLFdBQUEsSUFBSSxFQUFFLENBQUE7T0F0QlIsdUJBQXVCLENBOEJuQztJQUFELDhCQUFDO0NBQUEsQUE5QkQsQ0FBNkMsZUFBZSxHQThCM0Q7U0E5QlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0LCBJbnB1dCwgT25Jbml0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCaW5nTWFwcyB9IGZyb20gJ29sL3NvdXJjZSc7XG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5ZXJUaWxlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydGlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9hZEZ1bmN0aW9uIH0gZnJvbSAnb2wvVGlsZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1zb3VyY2UtYmluZ21hcHMnLFxuICB0ZW1wbGF0ZTogYCA8ZGl2IGNsYXNzPVwiYW9sLXNvdXJjZS1iaW5nbWFwc1wiPjwvZGl2PiBgLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFNvdXJjZUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlQmluZ21hcHNDb21wb25lbnQpIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBTb3VyY2VCaW5nbWFwc0NvbXBvbmVudCBleHRlbmRzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGluc3RhbmNlOiBCaW5nTWFwcztcblxuICBASW5wdXQoKVxuICBjYWNoZVNpemU6IG51bWJlcjtcbiAgQElucHV0KClcbiAgaGlkcGk6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGN1bHR1cmU6IHN0cmluZztcbiAgQElucHV0KClcbiAga2V5OiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGltYWdlcnlTZXQ6ICdSb2FkJyB8ICdBZXJpYWwnIHwgJ0FlcmlhbFdpdGhMYWJlbHMnIHwgJ2NvbGxpbnNCYXJ0JyB8ICdvcmRuYW5jZVN1cnZleScgPSAnQWVyaWFsJztcbiAgQElucHV0KClcbiAgbWF4Wm9vbTogbnVtYmVyO1xuICBASW5wdXQoKVxuICByZXByb2plY3Rpb25FcnJvclRocmVzaG9sZDogbnVtYmVyO1xuICBASW5wdXQoKVxuICB0aWxlTG9hZEZ1bmN0aW9uOiBMb2FkRnVuY3Rpb247XG4gIEBJbnB1dCgpXG4gIHdyYXBYOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgbGF5ZXI6IExheWVyVGlsZUNvbXBvbmVudCkge1xuICAgIHN1cGVyKGxheWVyKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgQmluZ01hcHModGhpcyk7XG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFNvdXJjZSh0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19