import * as tslib_1 from "tslib";
import { Component, Host, Input, forwardRef, ContentChild, Output, EventEmitter, } from '@angular/core';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';
import { TileGridWMTSComponent } from '../tilegridwmts.component';
import { WMTS as SourceWMTS } from 'ol/source';
var SourceTileWMTSComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SourceTileWMTSComponent, _super);
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
        this.instance = new SourceWMTS(this);
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
    tslib_1.__decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "cacheSize", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "crossOrigin", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "tileGrid", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "projection", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "reprojectionErrorThreshold", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "requestEncoding", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "layer", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "style", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "tileClass", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "tilePixelRatio", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "version", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "format", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "matrixSet", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "dimensions", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "url", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "tileLoadFunction", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "urls", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceTileWMTSComponent.prototype, "wrapX", void 0);
    tslib_1.__decorate([
        Output()
    ], SourceTileWMTSComponent.prototype, "tileLoadStart", void 0);
    tslib_1.__decorate([
        Output()
    ], SourceTileWMTSComponent.prototype, "tileLoadEnd", void 0);
    tslib_1.__decorate([
        Output()
    ], SourceTileWMTSComponent.prototype, "tileLoadError", void 0);
    tslib_1.__decorate([
        ContentChild(TileGridWMTSComponent, { static: false })
    ], SourceTileWMTSComponent.prototype, "tileGridWMTS", void 0);
    SourceTileWMTSComponent = SourceTileWMTSComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'aol-source-tilewmts',
            template: " <ng-content></ng-content> ",
            providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceTileWMTSComponent_1; }) }]
        }),
        tslib_1.__param(0, Host())
    ], SourceTileWMTSComponent);
    return SourceTileWMTSComponent;
}(SourceComponent));
export { SourceTileWMTSComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZXdtdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9sLyIsInNvdXJjZXMiOlsibGliL3NvdXJjZXMvdGlsZXdtdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULElBQUksRUFDSixLQUFLLEVBQ0wsVUFBVSxFQUVWLFlBQVksRUFHWixNQUFNLEVBQ04sWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsSUFBSSxJQUFJLFVBQVUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQVkvQztJQUE2QyxtREFBZTtJQWlEMUQsaUNBQW9CLEtBQXlCO1FBQTdDLFlBQ0Usa0JBQU0sS0FBSyxDQUFDLFNBQ2I7UUFYRCxtQkFBYSxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUVuRixpQkFBVyxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUVqRixtQkFBYSxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQzs7SUFPbkYsQ0FBQztnQ0FuRFUsdUJBQXVCO0lBcURsQyw2Q0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBTSxVQUFVLEdBQTZCLEVBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixPQUFPO1NBQ1I7UUFDRCxLQUFLLElBQU0sR0FBRyxJQUFJLE9BQU8sRUFBRTtZQUN6QixJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQy9CLFFBQVEsR0FBRyxFQUFFO29CQUNYLEtBQUssS0FBSzt3QkFDUixJQUFJLENBQUMsR0FBRyxHQUFHLE9B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RSxDQUFDO1NBQ2xHLENBQUM7UUFrRGEsbUJBQUEsSUFBSSxFQUFFLENBQUE7T0FqRFIsdUJBQXVCLENBd0ZuQztJQUFELDhCQUFDO0NBQUEsQUF4RkQsQ0FBNkMsZUFBZSxHQXdGM0Q7U0F4RlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBIb3N0LFxuICBJbnB1dCxcbiAgZm9yd2FyZFJlZixcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29udGVudENoaWxkLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBPbkNoYW5nZXMsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExheWVyVGlsZUNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcnRpbGUuY29tcG9uZW50JztcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaWxlR3JpZFdNVFNDb21wb25lbnQgfSBmcm9tICcuLi90aWxlZ3JpZHdtdHMuY29tcG9uZW50JztcbmltcG9ydCB7IFdNVFMgYXMgU291cmNlV01UUyB9IGZyb20gJ29sL3NvdXJjZSc7XG5pbXBvcnQgV01UUyBmcm9tICdvbC90aWxlZ3JpZC9XTVRTJztcbmltcG9ydCB7IFByb2plY3Rpb25MaWtlIH0gZnJvbSAnb2wvcHJvaic7XG5pbXBvcnQgeyBMb2FkRnVuY3Rpb24gfSBmcm9tICdvbC9UaWxlJztcbmltcG9ydCB7IFRpbGVTb3VyY2VFdmVudCB9IGZyb20gJ29sL3NvdXJjZS9UaWxlJztcbmltcG9ydCB7IFJlcXVlc3RFbmNvZGluZyB9IGZyb20gJ29sL3NvdXJjZS9XTVRTJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS10aWxld210cycsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZVRpbGVXTVRTQ29tcG9uZW50KSB9XSxcbn0pXG5leHBvcnQgY2xhc3MgU291cmNlVGlsZVdNVFNDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMge1xuICBpbnN0YW5jZTogU291cmNlV01UUztcbiAgQElucHV0KClcbiAgY2FjaGVTaXplPzogbnVtYmVyO1xuICBASW5wdXQoKVxuICBjcm9zc09yaWdpbj86IHN0cmluZztcbiAgQElucHV0KClcbiAgdGlsZUdyaWQ6IFdNVFM7XG4gIEBJbnB1dCgpXG4gIHByb2plY3Rpb246IFByb2plY3Rpb25MaWtlO1xuICBASW5wdXQoKVxuICByZXByb2plY3Rpb25FcnJvclRocmVzaG9sZD86IG51bWJlcjtcbiAgQElucHV0KClcbiAgcmVxdWVzdEVuY29kaW5nPzogUmVxdWVzdEVuY29kaW5nIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKVxuICBsYXllcjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzdHlsZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICB0aWxlQ2xhc3M/OiBhbnk7XG4gIEBJbnB1dCgpXG4gIHRpbGVQaXhlbFJhdGlvPzogbnVtYmVyO1xuICBASW5wdXQoKVxuICB2ZXJzaW9uPzogc3RyaW5nO1xuICBASW5wdXQoKVxuICBmb3JtYXQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIG1hdHJpeFNldDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBkaW1lbnNpb25zPzogYW55O1xuICBASW5wdXQoKVxuICB1cmw/OiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHRpbGVMb2FkRnVuY3Rpb24/OiBMb2FkRnVuY3Rpb247XG4gIEBJbnB1dCgpXG4gIHVybHM/OiBzdHJpbmdbXTtcbiAgQElucHV0KClcbiAgd3JhcFg/OiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKVxuICB0aWxlTG9hZFN0YXJ0OiBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgdGlsZUxvYWRFbmQ6IEV2ZW50RW1pdHRlcjxUaWxlU291cmNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUaWxlU291cmNlRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICB0aWxlTG9hZEVycm9yOiBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PigpO1xuXG4gIEBDb250ZW50Q2hpbGQoVGlsZUdyaWRXTVRTQ29tcG9uZW50LCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgdGlsZUdyaWRXTVRTOiBUaWxlR3JpZFdNVFNDb21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBsYXllcjogTGF5ZXJUaWxlQ29tcG9uZW50KSB7XG4gICAgc3VwZXIobGF5ZXIpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGNvbnN0IHByb3BlcnRpZXM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjaGFuZ2VzKSB7XG4gICAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgY2FzZSAndXJsJzpcbiAgICAgICAgICAgIHRoaXMudXJsID0gY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMuc2V0TGF5ZXJTb3VyY2UoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBwcm9wZXJ0aWVzW2tleV0gPSBjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmluc3RhbmNlLnNldFByb3BlcnRpZXMocHJvcGVydGllcywgZmFsc2UpO1xuICB9XG5cbiAgc2V0TGF5ZXJTb3VyY2UoKTogdm9pZCB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBTb3VyY2VXTVRTKHRoaXMpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3RpbGVsb2Fkc3RhcnQnLCAoZXZlbnQ6IFRpbGVTb3VyY2VFdmVudCkgPT4gdGhpcy50aWxlTG9hZFN0YXJ0LmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCd0aWxlbG9hZGVuZCcsIChldmVudDogVGlsZVNvdXJjZUV2ZW50KSA9PiB0aGlzLnRpbGVMb2FkRW5kLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCd0aWxlbG9hZGVycm9yJywgKGV2ZW50OiBUaWxlU291cmNlRXZlbnQpID0+IHRoaXMudGlsZUxvYWRFcnJvci5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFNvdXJjZSh0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50aWxlR3JpZFdNVFMpIHtcbiAgICAgIHRoaXMudGlsZUdyaWQgPSB0aGlzLnRpbGVHcmlkV01UUy5pbnN0YW5jZTtcbiAgICAgIHRoaXMuc2V0TGF5ZXJTb3VyY2UoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==