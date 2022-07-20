import * as tslib_1 from "tslib";
import { Component, Host, Input, forwardRef } from '@angular/core';
import { BingMaps } from 'ol/source';
import { SourceComponent } from './source.component';
import { LayerTileComponent } from '../layers/layertile.component';
var SourceBingmapsComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SourceBingmapsComponent, _super);
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
    tslib_1.__decorate([
        Input()
    ], SourceBingmapsComponent.prototype, "cacheSize", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceBingmapsComponent.prototype, "hidpi", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceBingmapsComponent.prototype, "culture", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceBingmapsComponent.prototype, "key", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceBingmapsComponent.prototype, "imagerySet", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceBingmapsComponent.prototype, "maxZoom", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceBingmapsComponent.prototype, "reprojectionErrorThreshold", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceBingmapsComponent.prototype, "tileLoadFunction", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceBingmapsComponent.prototype, "wrapX", void 0);
    SourceBingmapsComponent = SourceBingmapsComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'aol-source-bingmaps',
            template: " <div class=\"aol-source-bingmaps\"></div> ",
            providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceBingmapsComponent_1; }) }]
        }),
        tslib_1.__param(0, Host())
    ], SourceBingmapsComponent);
    return SourceBingmapsComponent;
}(SourceComponent));
export { SourceBingmapsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluZ21hcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9sLyIsInNvdXJjZXMiOlsibGliL3NvdXJjZXMvYmluZ21hcHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQVUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDckMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBUW5FO0lBQTZDLG1EQUFlO0lBc0IxRCxpQ0FBb0IsS0FBeUI7UUFBN0MsWUFDRSxrQkFBTSxLQUFLLENBQUMsU0FDYjtRQVpELGdCQUFVLEdBQThFLFFBQVEsQ0FBQzs7SUFZakcsQ0FBQztnQ0F4QlUsdUJBQXVCO0lBMEJsQywwQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7OztnQkFQMEIsa0JBQWtCLHVCQUFoQyxJQUFJOztJQWxCakI7UUFEQyxLQUFLLEVBQUU7OERBQ1U7SUFFbEI7UUFEQyxLQUFLLEVBQUU7MERBQ087SUFFZjtRQURDLEtBQUssRUFBRTs0REFDUTtJQUVoQjtRQURDLEtBQUssRUFBRTt3REFDSTtJQUVaO1FBREMsS0FBSyxFQUFFOytEQUN5RjtJQUVqRztRQURDLEtBQUssRUFBRTs0REFDUTtJQUVoQjtRQURDLEtBQUssRUFBRTsrRUFDMkI7SUFFbkM7UUFEQyxLQUFLLEVBQUU7cUVBQ3VCO0lBRS9CO1FBREMsS0FBSyxFQUFFOzBEQUNPO0lBcEJKLHVCQUF1QjtRQUxuQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFFBQVEsRUFBRSw2Q0FBMkM7WUFDckQsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHlCQUF1QixFQUF2QixDQUF1QixDQUFDLEVBQUUsQ0FBQztTQUNsRyxDQUFDO1FBdUJhLG1CQUFBLElBQUksRUFBRSxDQUFBO09BdEJSLHVCQUF1QixDQThCbkM7SUFBRCw4QkFBQztDQUFBLEFBOUJELENBQTZDLGVBQWUsR0E4QjNEO1NBOUJZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdCwgSW5wdXQsIE9uSW5pdCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmluZ01hcHMgfSBmcm9tICdvbC9zb3VyY2UnO1xuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UuY29tcG9uZW50JztcbmltcG9ydCB7IExheWVyVGlsZUNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcnRpbGUuY29tcG9uZW50JztcbmltcG9ydCB7IExvYWRGdW5jdGlvbiB9IGZyb20gJ29sL1RpbGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtc291cmNlLWJpbmdtYXBzJyxcbiAgdGVtcGxhdGU6IGAgPGRpdiBjbGFzcz1cImFvbC1zb3VyY2UtYmluZ21hcHNcIj48L2Rpdj4gYCxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZUJpbmdtYXBzQ29tcG9uZW50KSB9XSxcbn0pXG5leHBvcnQgY2xhc3MgU291cmNlQmluZ21hcHNDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpbnN0YW5jZTogQmluZ01hcHM7XG5cbiAgQElucHV0KClcbiAgY2FjaGVTaXplOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIGhpZHBpOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBjdWx0dXJlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGtleTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBpbWFnZXJ5U2V0OiAnUm9hZCcgfCAnQWVyaWFsJyB8ICdBZXJpYWxXaXRoTGFiZWxzJyB8ICdjb2xsaW5zQmFydCcgfCAnb3JkbmFuY2VTdXJ2ZXknID0gJ0FlcmlhbCc7XG4gIEBJbnB1dCgpXG4gIG1heFpvb206IG51bWJlcjtcbiAgQElucHV0KClcbiAgcmVwcm9qZWN0aW9uRXJyb3JUaHJlc2hvbGQ6IG51bWJlcjtcbiAgQElucHV0KClcbiAgdGlsZUxvYWRGdW5jdGlvbjogTG9hZEZ1bmN0aW9uO1xuICBASW5wdXQoKVxuICB3cmFwWDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihASG9zdCgpIGxheWVyOiBMYXllclRpbGVDb21wb25lbnQpIHtcbiAgICBzdXBlcihsYXllcik7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IEJpbmdNYXBzKHRoaXMpO1xuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2UodGhpcy5pbnN0YW5jZSk7XG4gIH1cbn1cbiJdfQ==