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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZXdtdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9sLyIsInNvdXJjZXMiOlsibGliL3NvdXJjZXMvdGlsZXdtdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULElBQUksRUFDSixLQUFLLEVBQ0wsVUFBVSxFQUVWLFlBQVksRUFHWixNQUFNLEVBQ04sWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBWWpDO0lBQTZDLDJDQUFlO0lBaUQxRCxpQ0FBb0IsS0FBeUI7UUFBN0MsWUFDRSxrQkFBTSxLQUFLLENBQUMsU0FDYjtRQVhELG1CQUFhLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDO1FBRW5GLGlCQUFXLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDO1FBRWpGLG1CQUFhLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDOztJQU9uRixDQUFDO2dDQW5EVSx1QkFBdUI7SUFxRGxDLDZDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFNLFVBQVUsR0FBNkIsRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE9BQU87U0FDUjtRQUNELEtBQUssSUFBTSxHQUFHLElBQUksT0FBTyxFQUFFO1lBQ3pCLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDL0IsUUFBUSxHQUFHLEVBQUU7b0JBQ1gsS0FBSyxLQUFLO3dCQUNSLElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLEdB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QUFBO09BakRSLHVCQUF1QixDQXdGbkM7SUFBRCw4QkFBQztDQUFBLEFBeEZELENBQTZDLGVBQWUsR0F3RjNEO1NBeEZZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIGZvcndhcmRSZWYsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbnRlbnRDaGlsZCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYXllclRpbGVDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJ0aWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGlsZUdyaWRXTVRTQ29tcG9uZW50IH0gZnJvbSAnLi4vdGlsZWdyaWR3bXRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXTVRTIH0gZnJvbSAnb2wvc291cmNlJztcbmltcG9ydCB7IFdNVFMgYXMgVGlsZUdyaWRXTVRTIH0gZnJvbSAnb2wvdGlsZWdyaWQnO1xuaW1wb3J0IHsgV01UU1JlcXVlc3RFbmNvZGluZyB9IGZyb20gJ29sL3NvdXJjZSc7XG5pbXBvcnQgeyBQcm9qZWN0aW9uTGlrZSB9IGZyb20gJ29sL3Byb2onO1xuaW1wb3J0IHsgTG9hZEZ1bmN0aW9uIH0gZnJvbSAnb2wvVGlsZSc7XG5pbXBvcnQgeyBUaWxlU291cmNlRXZlbnQgfSBmcm9tICdvbC9zb3VyY2UvVGlsZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1zb3VyY2UtdGlsZXdtdHMnLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VUaWxlV01UU0NvbXBvbmVudCkgfV0sXG59KVxuZXhwb3J0IGNsYXNzIFNvdXJjZVRpbGVXTVRTQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzIHtcbiAgaW5zdGFuY2U6IFdNVFM7XG4gIEBJbnB1dCgpXG4gIGNhY2hlU2l6ZT86IG51bWJlcjtcbiAgQElucHV0KClcbiAgY3Jvc3NPcmlnaW4/OiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHRpbGVHcmlkOiBUaWxlR3JpZFdNVFM7XG4gIEBJbnB1dCgpXG4gIHByb2plY3Rpb246IFByb2plY3Rpb25MaWtlO1xuICBASW5wdXQoKVxuICByZXByb2plY3Rpb25FcnJvclRocmVzaG9sZD86IG51bWJlcjtcbiAgQElucHV0KClcbiAgcmVxdWVzdEVuY29kaW5nPzogV01UU1JlcXVlc3RFbmNvZGluZyB8IHN0cmluZztcbiAgQElucHV0KClcbiAgbGF5ZXI6IHN0cmluZztcbiAgQElucHV0KClcbiAgc3R5bGU6IHN0cmluZztcbiAgQElucHV0KClcbiAgdGlsZUNsYXNzPzogYW55O1xuICBASW5wdXQoKVxuICB0aWxlUGl4ZWxSYXRpbz86IG51bWJlcjtcbiAgQElucHV0KClcbiAgdmVyc2lvbj86IHN0cmluZztcbiAgQElucHV0KClcbiAgZm9ybWF0Pzogc3RyaW5nO1xuICBASW5wdXQoKVxuICBtYXRyaXhTZXQ6IHN0cmluZztcbiAgQElucHV0KClcbiAgZGltZW5zaW9ucz86IGFueTtcbiAgQElucHV0KClcbiAgdXJsPzogc3RyaW5nO1xuICBASW5wdXQoKVxuICB0aWxlTG9hZEZ1bmN0aW9uPzogTG9hZEZ1bmN0aW9uO1xuICBASW5wdXQoKVxuICB1cmxzPzogc3RyaW5nW107XG4gIEBJbnB1dCgpXG4gIHdyYXBYPzogYm9vbGVhbjtcblxuICBAT3V0cHV0KClcbiAgdGlsZUxvYWRTdGFydDogRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIHRpbGVMb2FkRW5kOiBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgdGlsZUxvYWRFcnJvcjogRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4oKTtcblxuICBAQ29udGVudENoaWxkKFRpbGVHcmlkV01UU0NvbXBvbmVudClcbiAgdGlsZUdyaWRXTVRTOiBUaWxlR3JpZFdNVFNDb21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBsYXllcjogTGF5ZXJUaWxlQ29tcG9uZW50KSB7XG4gICAgc3VwZXIobGF5ZXIpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGNvbnN0IHByb3BlcnRpZXM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjaGFuZ2VzKSB7XG4gICAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgY2FzZSAndXJsJzpcbiAgICAgICAgICAgIHRoaXMudXJsID0gY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMuc2V0TGF5ZXJTb3VyY2UoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBwcm9wZXJ0aWVzW2tleV0gPSBjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmluc3RhbmNlLnNldFByb3BlcnRpZXMocHJvcGVydGllcywgZmFsc2UpO1xuICB9XG5cbiAgc2V0TGF5ZXJTb3VyY2UoKTogdm9pZCB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBXTVRTKHRoaXMpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3RpbGVsb2Fkc3RhcnQnLCAoZXZlbnQ6IFRpbGVTb3VyY2VFdmVudCkgPT4gdGhpcy50aWxlTG9hZFN0YXJ0LmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCd0aWxlbG9hZGVuZCcsIChldmVudDogVGlsZVNvdXJjZUV2ZW50KSA9PiB0aGlzLnRpbGVMb2FkRW5kLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCd0aWxlbG9hZGVycm9yJywgKGV2ZW50OiBUaWxlU291cmNlRXZlbnQpID0+IHRoaXMudGlsZUxvYWRFcnJvci5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFNvdXJjZSh0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50aWxlR3JpZFdNVFMpIHtcbiAgICAgIHRoaXMudGlsZUdyaWQgPSB0aGlzLnRpbGVHcmlkV01UUy5pbnN0YW5jZTtcbiAgICAgIHRoaXMuc2V0TGF5ZXJTb3VyY2UoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==