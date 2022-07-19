import { __decorate, __extends, __param } from "tslib";
import { Component, Host, Input, forwardRef, ContentChild, Output, EventEmitter, } from '@angular/core';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';
import { TileGridWMTSComponent } from '../tilegridwmts.component';
import { WMTS } from 'ol/source';
var SourceTileWMTSComponent = /** @class */ (function (_super) {
    __extends(SourceTileWMTSComponent, _super);
    function SourceTileWMTSComponent(layer) {
        var _this = _super.call(this, layer) || this;
        _this.tileLoadStart = new EventEmitter();
        _this.tileLoadEnd = new EventEmitter();
        _this.tileLoadError = new EventEmitter();
        return _this;
    }
    SourceTileWMTSComponent_1 = SourceTileWMTSComponent;
    SourceTileWMTSComponent.prototype.ngOnChanges = function (changes) {
        var properties = {};
        if (!this.instance) {
            return;
        }
        for (var key in changes) {
            if (changes.hasOwnProperty(key)) {
                switch (key) {
                    case 'url':
                        this.url = changes[key].currentValue;
                        this.setLayerSource();
                        break;
                    default:
                        break;
                }
                properties[key] = changes[key].currentValue;
            }
        }
        this.instance.setProperties(properties, false);
    };
    SourceTileWMTSComponent.prototype.setLayerSource = function () {
        var _this = this;
        this.instance = new WMTS(this);
        this.instance.on('tileloadstart', function (event) { return _this.tileLoadStart.emit(event); });
        this.instance.on('tileloadend', function (event) { return _this.tileLoadEnd.emit(event); });
        this.instance.on('tileloaderror', function (event) { return _this.tileLoadError.emit(event); });
        this.host.instance.setSource(this.instance);
    };
    SourceTileWMTSComponent.prototype.ngAfterContentInit = function () {
        if (this.tileGridWMTS) {
            this.tileGrid = this.tileGridWMTS.instance;
            this.setLayerSource();
        }
    };
    var SourceTileWMTSComponent_1;
    SourceTileWMTSComponent.ctorParameters = function () { return [
        { type: LayerTileComponent, decorators: [{ type: Host }] }
    ]; };
    __decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "cacheSize", void 0);
    __decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "crossOrigin", void 0);
    __decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "tileGrid", void 0);
    __decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "projection", void 0);
    __decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "reprojectionErrorThreshold", void 0);
    __decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "requestEncoding", void 0);
    __decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "layer", void 0);
    __decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "style", void 0);
    __decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "tileClass", void 0);
    __decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "tilePixelRatio", void 0);
    __decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "version", void 0);
    __decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "format", void 0);
    __decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "matrixSet", void 0);
    __decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "dimensions", void 0);
    __decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "url", void 0);
    __decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "tileLoadFunction", void 0);
    __decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "urls", void 0);
    __decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "wrapX", void 0);
    __decorate([
        Output()
    ], SourceTileWMTSComponent.prototype, "tileLoadStart", void 0);
    __decorate([
        Output()
    ], SourceTileWMTSComponent.prototype, "tileLoadEnd", void 0);
    __decorate([
        Output()
    ], SourceTileWMTSComponent.prototype, "tileLoadError", void 0);
    __decorate([
        ContentChild(TileGridWMTSComponent)
    ], SourceTileWMTSComponent.prototype, "tileGridWMTS", void 0);
    SourceTileWMTSComponent = SourceTileWMTSComponent_1 = __decorate([
        Component({
            selector: 'aol-source-tilewmts',
            template: " <ng-content></ng-content> ",
            providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceTileWMTSComponent_1; }) }]
        }),
        __param(0, Host())
    ], SourceTileWMTSComponent);
    return SourceTileWMTSComponent;
}(SourceComponent));
export { SourceTileWMTSComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZXdtdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvc291cmNlcy90aWxld210cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsSUFBSSxFQUNKLEtBQUssRUFDTCxVQUFVLEVBRVYsWUFBWSxFQUdaLE1BQU0sRUFDTixZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFZakM7SUFBNkMsMkNBQWU7SUFpRDFELGlDQUFvQixLQUF5QjtRQUE3QyxZQUNFLGtCQUFNLEtBQUssQ0FBQyxTQUNiO1FBWEQsbUJBQWEsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFFbkYsaUJBQVcsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFFakYsbUJBQWEsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7O0lBT25GLENBQUM7Z0NBbkRVLHVCQUF1QjtJQXFEbEMsNkNBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQU0sVUFBVSxHQUE2QixFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsT0FBTztTQUNSO1FBQ0QsS0FBSyxJQUFNLEdBQUcsSUFBSSxPQUFPLEVBQUU7WUFDekIsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUMvQixRQUFRLEdBQUcsRUFBRTtvQkFDWCxLQUFLLEtBQUs7d0JBQ1IsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFP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SSxFQUFFLENBQUE7T0FqRFIsdUJBQXVCLENBd0ZuQztJQUFELDhCQUFDO0NBQUEsQUF4RkQsQ0FBNkMsZUFBZSxHQXdGM0Q7U0F4RlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBIb3N0LFxuICBJbnB1dCxcbiAgZm9yd2FyZFJlZixcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29udGVudENoaWxkLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBPbkNoYW5nZXMsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExheWVyVGlsZUNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcnRpbGUuY29tcG9uZW50JztcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaWxlR3JpZFdNVFNDb21wb25lbnQgfSBmcm9tICcuLi90aWxlZ3JpZHdtdHMuY29tcG9uZW50JztcbmltcG9ydCB7IFdNVFMgfSBmcm9tICdvbC9zb3VyY2UnO1xuaW1wb3J0IHsgV01UUyBhcyBUaWxlR3JpZFdNVFMgfSBmcm9tICdvbC90aWxlZ3JpZCc7XG5pbXBvcnQgeyBXTVRTUmVxdWVzdEVuY29kaW5nIH0gZnJvbSAnb2wvc291cmNlJztcbmltcG9ydCB7IFByb2plY3Rpb25MaWtlIH0gZnJvbSAnb2wvcHJvaic7XG5pbXBvcnQgeyBMb2FkRnVuY3Rpb24gfSBmcm9tICdvbC9UaWxlJztcbmltcG9ydCB7IFRpbGVTb3VyY2VFdmVudCB9IGZyb20gJ29sL3NvdXJjZS9UaWxlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS10aWxld210cycsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZVRpbGVXTVRTQ29tcG9uZW50KSB9XSxcbn0pXG5leHBvcnQgY2xhc3MgU291cmNlVGlsZVdNVFNDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMge1xuICBpbnN0YW5jZTogV01UUztcbiAgQElucHV0KClcbiAgY2FjaGVTaXplPzogbnVtYmVyO1xuICBASW5wdXQoKVxuICBjcm9zc09yaWdpbj86IHN0cmluZztcbiAgQElucHV0KClcbiAgdGlsZUdyaWQ6IFRpbGVHcmlkV01UUztcbiAgQElucHV0KClcbiAgcHJvamVjdGlvbjogUHJvamVjdGlvbkxpa2U7XG4gIEBJbnB1dCgpXG4gIHJlcHJvamVjdGlvbkVycm9yVGhyZXNob2xkPzogbnVtYmVyO1xuICBASW5wdXQoKVxuICByZXF1ZXN0RW5jb2Rpbmc/OiBXTVRTUmVxdWVzdEVuY29kaW5nIHwgc3RyaW5nO1xuICBASW5wdXQoKVxuICBsYXllcjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzdHlsZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICB0aWxlQ2xhc3M/OiBhbnk7XG4gIEBJbnB1dCgpXG4gIHRpbGVQaXhlbFJhdGlvPzogbnVtYmVyO1xuICBASW5wdXQoKVxuICB2ZXJzaW9uPzogc3RyaW5nO1xuICBASW5wdXQoKVxuICBmb3JtYXQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIG1hdHJpeFNldDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBkaW1lbnNpb25zPzogYW55O1xuICBASW5wdXQoKVxuICB1cmw/OiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHRpbGVMb2FkRnVuY3Rpb24/OiBMb2FkRnVuY3Rpb247XG4gIEBJbnB1dCgpXG4gIHVybHM/OiBzdHJpbmdbXTtcbiAgQElucHV0KClcbiAgd3JhcFg/OiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKVxuICB0aWxlTG9hZFN0YXJ0OiBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgdGlsZUxvYWRFbmQ6IEV2ZW50RW1pdHRlcjxUaWxlU291cmNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUaWxlU291cmNlRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICB0aWxlTG9hZEVycm9yOiBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PigpO1xuXG4gIEBDb250ZW50Q2hpbGQoVGlsZUdyaWRXTVRTQ29tcG9uZW50KVxuICB0aWxlR3JpZFdNVFM6IFRpbGVHcmlkV01UU0NvbXBvbmVudDtcblxuICBjb25zdHJ1Y3RvcihASG9zdCgpIGxheWVyOiBMYXllclRpbGVDb21wb25lbnQpIHtcbiAgICBzdXBlcihsYXllcik7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgY29uc3QgcHJvcGVydGllczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0ge307XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IGluIGNoYW5nZXMpIHtcbiAgICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICBjYXNlICd1cmwnOlxuICAgICAgICAgICAgdGhpcy51cmwgPSBjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgdGhpcy5zZXRMYXllclNvdXJjZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHByb3BlcnRpZXNba2V5XSA9IGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuaW5zdGFuY2Uuc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBmYWxzZSk7XG4gIH1cblxuICBzZXRMYXllclNvdXJjZSgpOiB2b2lkIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFdNVFModGhpcyk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbigndGlsZWxvYWRzdGFydCcsIChldmVudDogVGlsZVNvdXJjZUV2ZW50KSA9PiB0aGlzLnRpbGVMb2FkU3RhcnQuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3RpbGVsb2FkZW5kJywgKGV2ZW50OiBUaWxlU291cmNlRXZlbnQpID0+IHRoaXMudGlsZUxvYWRFbmQuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3RpbGVsb2FkZXJyb3InLCAoZXZlbnQ6IFRpbGVTb3VyY2VFdmVudCkgPT4gdGhpcy50aWxlTG9hZEVycm9yLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRpbGVHcmlkV01UUykge1xuICAgICAgdGhpcy50aWxlR3JpZCA9IHRoaXMudGlsZUdyaWRXTVRTLmluc3RhbmNlO1xuICAgICAgdGhpcy5zZXRMYXllclNvdXJjZSgpO1xuICAgIH1cbiAgfVxufVxuIl19