import { __decorate, __extends, __param } from "tslib";
import { Component, EventEmitter, forwardRef, Host, Input, Optional, Output } from '@angular/core';
import { OSM } from 'ol/source';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';
import { SourceXYZComponent } from './xyz.component';
var SourceOsmComponent = /** @class */ (function (_super) {
    __extends(SourceOsmComponent, _super);
    function SourceOsmComponent(layer) {
        var _this = _super.call(this, layer) || this;
        _this.layer = layer;
        _this.tileLoadStart = new EventEmitter();
        _this.tileLoadEnd = new EventEmitter();
        _this.tileLoadError = new EventEmitter();
        return _this;
    }
    SourceOsmComponent_1 = SourceOsmComponent;
    SourceOsmComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.tileGridXYZ) {
            this.tileGrid = this.tileGridXYZ.instance;
        }
        this.instance = new OSM(this);
        this.instance.on('tileloadstart', function (event) { return _this.tileLoadStart.emit(event); });
        this.instance.on('tileloadend', function (event) { return _this.tileLoadEnd.emit(event); });
        this.instance.on('tileloaderror', function (event) { return _this.tileLoadError.emit(event); });
        this._register(this.instance);
    };
    var SourceOsmComponent_1;
    SourceOsmComponent.ctorParameters = function () { return [
        { type: LayerTileComponent, decorators: [{ type: Optional }, { type: Host }] }
    ]; };
    __decorate([
        Input()
    ], SourceOsmComponent.prototype, "attributions", void 0);
    __decorate([
        Input()
    ], SourceOsmComponent.prototype, "cacheSize", void 0);
    __decorate([
        Input()
    ], SourceOsmComponent.prototype, "crossOrigin", void 0);
    __decorate([
        Input()
    ], SourceOsmComponent.prototype, "maxZoom", void 0);
    __decorate([
        Input()
    ], SourceOsmComponent.prototype, "opaque", void 0);
    __decorate([
        Input()
    ], SourceOsmComponent.prototype, "reprojectionErrorThreshold", void 0);
    __decorate([
        Input()
    ], SourceOsmComponent.prototype, "tileLoadFunction", void 0);
    __decorate([
        Input()
    ], SourceOsmComponent.prototype, "url", void 0);
    __decorate([
        Input()
    ], SourceOsmComponent.prototype, "wrapX", void 0);
    __decorate([
        Output()
    ], SourceOsmComponent.prototype, "tileLoadStart", void 0);
    __decorate([
        Output()
    ], SourceOsmComponent.prototype, "tileLoadEnd", void 0);
    __decorate([
        Output()
    ], SourceOsmComponent.prototype, "tileLoadError", void 0);
    SourceOsmComponent = SourceOsmComponent_1 = __decorate([
        Component({
            selector: 'aol-source-osm',
            template: " <div class=\"aol-source-osm\"></div> ",
            providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceOsmComponent_1; }) }]
        }),
        __param(0, Optional()),
        __param(0, Host())
    ], SourceOsmComponent);
    return SourceOsmComponent;
}(SourceXYZComponent));
export { SourceOsmComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3NtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9zb3VyY2VzL29zbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBb0IsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JILE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFJaEMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBT3JEO0lBQXdDLHNDQUFrQjtJQTZCeEQsNEJBR1ksS0FBMEI7UUFIdEMsWUFLRSxrQkFBTSxLQUFLLENBQUMsU0FDYjtRQUhXLFdBQUssR0FBTCxLQUFLLENBQXFCO1FBVHRDLG1CQUFhLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDO1FBRW5GLGlCQUFXLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDO1FBRWpGLG1CQUFhLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDOztJQVFuRixDQUFDOzJCQW5DVSxrQkFBa0I7SUFxQzdCLCtDQUFrQixHQUFsQjtRQUFBLGlCQVdDO1FBVkMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7U0FDM0M7UUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTlCLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxVQUFDLEtBQXNCLElBQUssT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO1FBQzlGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxVQUFDLEtBQXNCLElBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO1FBQzFGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxVQUFDLEtBQXNCLElBQUssT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO1FBQzlGLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7OztnQkFoQm1CLGtCQUFrQix1QkFGbkMsUUFBUSxZQUNSLElBQUk7O0lBM0JQO1FBREMsS0FBSyxFQUFFOzREQUNzQjtJQUU5QjtRQURDLEtBQUssRUFBRTt5REFDVTtJQUVsQjtRQURDLEtBQUssRUFBRTsyREFDWTtJQUVwQjtRQURDLEtBQUssRUFBRTt1REFDUTtJQUVoQjtRQURDLEtBQUssRUFBRTtzREFDUTtJQUVoQjtRQURDLEtBQUssRUFBRTswRUFDMkI7SUFFbkM7UUFEQyxLQUFLLEVBQUU7Z0VBQ3VCO0lBRS9CO1FBREMsS0FBSyxFQUFFO21EQUNJO0lBRVo7UUFEQyxLQUFLLEVBQUU7cURBQ087SUFHZjtRQURDLE1BQU0sRUFBRTs2REFDMEU7SUFFbkY7UUFEQyxNQUFNLEVBQUU7MkRBQ3dFO0lBRWpGO1FBREMsTUFBTSxFQUFFOzZEQUMwRTtJQTNCeEUsa0JBQWtCO1FBTDlCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUFFLHdDQUFzQztZQUNoRCxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsb0JBQWtCLEVBQWxCLENBQWtCLENBQUMsRUFBRSxDQUFDO1NBQzdGLENBQUM7UUErQkcsV0FBQSxRQUFRLEVBQUUsQ0FBQTtRQUNWLFdBQUEsSUFBSSxFQUFFLENBQUE7T0EvQkUsa0JBQWtCLENBaUQ5QjtJQUFELHlCQUFDO0NBQUEsQUFqREQsQ0FBd0Msa0JBQWtCLEdBaUR6RDtTQWpEWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgSG9zdCwgSW5wdXQsIE9wdGlvbmFsLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9TTSB9IGZyb20gJ29sL3NvdXJjZSc7XG5pbXBvcnQgeyBBdHRyaWJ1dGlvbkxpa2UgfSBmcm9tICdvbC9zb3VyY2UvU291cmNlJztcbmltcG9ydCB7IFRpbGVTb3VyY2VFdmVudCB9IGZyb20gJ29sL3NvdXJjZS9UaWxlJztcbmltcG9ydCB7IExvYWRGdW5jdGlvbiB9IGZyb20gJ29sL1RpbGUnO1xuaW1wb3J0IHsgTGF5ZXJUaWxlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydGlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UuY29tcG9uZW50JztcbmltcG9ydCB7IFNvdXJjZVhZWkNvbXBvbmVudCB9IGZyb20gJy4veHl6LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1zb3VyY2Utb3NtJyxcbiAgdGVtcGxhdGU6IGAgPGRpdiBjbGFzcz1cImFvbC1zb3VyY2Utb3NtXCI+PC9kaXY+IGAsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VPc21Db21wb25lbnQpIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBTb3VyY2VPc21Db21wb25lbnQgZXh0ZW5kcyBTb3VyY2VYWVpDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgaW5zdGFuY2U6IE9TTTtcblxuICBASW5wdXQoKVxuICBhdHRyaWJ1dGlvbnM6IEF0dHJpYnV0aW9uTGlrZTtcbiAgQElucHV0KClcbiAgY2FjaGVTaXplOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIGNyb3NzT3JpZ2luOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIG1heFpvb206IG51bWJlcjtcbiAgQElucHV0KClcbiAgb3BhcXVlOiBib29sZWFuO1xuICBASW5wdXQoKVxuICByZXByb2plY3Rpb25FcnJvclRocmVzaG9sZDogbnVtYmVyO1xuICBASW5wdXQoKVxuICB0aWxlTG9hZEZ1bmN0aW9uOiBMb2FkRnVuY3Rpb247XG4gIEBJbnB1dCgpXG4gIHVybDogc3RyaW5nO1xuICBASW5wdXQoKVxuICB3cmFwWDogYm9vbGVhbjtcblxuICBAT3V0cHV0KClcbiAgdGlsZUxvYWRTdGFydDogRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIHRpbGVMb2FkRW5kOiBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgdGlsZUxvYWRFcnJvcjogRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBIb3N0KClcbiAgICBwcm90ZWN0ZWQgbGF5ZXI/OiBMYXllclRpbGVDb21wb25lbnRcbiAgKSB7XG4gICAgc3VwZXIobGF5ZXIpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIGlmICh0aGlzLnRpbGVHcmlkWFlaKSB7XG4gICAgICB0aGlzLnRpbGVHcmlkID0gdGhpcy50aWxlR3JpZFhZWi5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IE9TTSh0aGlzKTtcblxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3RpbGVsb2Fkc3RhcnQnLCAoZXZlbnQ6IFRpbGVTb3VyY2VFdmVudCkgPT4gdGhpcy50aWxlTG9hZFN0YXJ0LmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCd0aWxlbG9hZGVuZCcsIChldmVudDogVGlsZVNvdXJjZUV2ZW50KSA9PiB0aGlzLnRpbGVMb2FkRW5kLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCd0aWxlbG9hZGVycm9yJywgKGV2ZW50OiBUaWxlU291cmNlRXZlbnQpID0+IHRoaXMudGlsZUxvYWRFcnJvci5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5fcmVnaXN0ZXIodGhpcy5pbnN0YW5jZSk7XG4gIH1cbn1cbiJdfQ==