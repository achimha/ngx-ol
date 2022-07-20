import { __decorate, __extends, __param } from "tslib";
import { Component, Host, Input, forwardRef, ContentChild, Output, EventEmitter, } from '@angular/core';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';
import { TileGridWMTSComponent } from '../tilegridwmts.component';
import { WMTS as SourceWMTS } from 'ol/source';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZXdtdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9sLyIsInNvdXJjZXMiOlsibGliL3NvdXJjZXMvdGlsZXdtdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULElBQUksRUFDSixLQUFLLEVBQ0wsVUFBVSxFQUVWLFlBQVksRUFHWixNQUFNLEVBQ04sWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsSUFBSSxJQUFJLFVBQVUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQVkvQztJQUE2QywyQ0FBZTtJQWlEMUQsaUNBQW9CLEtBQXlCO1FBQTdDLFlBQ0Usa0JBQU0sS0FBSyxDQUFDLFNBQ2I7UUFYRCxtQkFBYSxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUVuRixpQkFBVyxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUVqRixtQkFBYSxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQzs7SUFPbkYsQ0FBQztnQ0FuRFUsdUJBQXVCO0lBcURsQyw2Q0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBTSxVQUFVLEdBQTZCLEVBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixPQUFPO1NBQ1I7UUFDRCxLQUFLLElBQU0sR0FBRyxJQUFJLE9BQU8sRUFBRTtZQUN6QixJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQy9CLFFBQVEsR0FBRyxFQUFFO29CQUNYLEtBQUssS0FBSzt3QkFDUixJQUFJLENBQUMsR0FBRyxHQUFHLE9B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QUksRUFBRSxDQUFBO09BakRSLHVCQUF1QixDQXdGbkM7SUFBRCw4QkFBQztDQUFBLEFBeEZELENBQTZDLGVBQWUsR0F3RjNEO1NBeEZZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIGZvcndhcmRSZWYsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbnRlbnRDaGlsZCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYXllclRpbGVDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJ0aWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGlsZUdyaWRXTVRTQ29tcG9uZW50IH0gZnJvbSAnLi4vdGlsZWdyaWR3bXRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXTVRTIGFzIFNvdXJjZVdNVFMgfSBmcm9tICdvbC9zb3VyY2UnO1xuaW1wb3J0IFdNVFMgZnJvbSAnb2wvdGlsZWdyaWQvV01UUyc7XG5pbXBvcnQgeyBQcm9qZWN0aW9uTGlrZSB9IGZyb20gJ29sL3Byb2onO1xuaW1wb3J0IHsgTG9hZEZ1bmN0aW9uIH0gZnJvbSAnb2wvVGlsZSc7XG5pbXBvcnQgeyBUaWxlU291cmNlRXZlbnQgfSBmcm9tICdvbC9zb3VyY2UvVGlsZSc7XG5pbXBvcnQgeyBSZXF1ZXN0RW5jb2RpbmcgfSBmcm9tICdvbC9zb3VyY2UvV01UUyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1zb3VyY2UtdGlsZXdtdHMnLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VUaWxlV01UU0NvbXBvbmVudCkgfV0sXG59KVxuZXhwb3J0IGNsYXNzIFNvdXJjZVRpbGVXTVRTQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzIHtcbiAgaW5zdGFuY2U6IFNvdXJjZVdNVFM7XG4gIEBJbnB1dCgpXG4gIGNhY2hlU2l6ZT86IG51bWJlcjtcbiAgQElucHV0KClcbiAgY3Jvc3NPcmlnaW4/OiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHRpbGVHcmlkOiBXTVRTO1xuICBASW5wdXQoKVxuICBwcm9qZWN0aW9uOiBQcm9qZWN0aW9uTGlrZTtcbiAgQElucHV0KClcbiAgcmVwcm9qZWN0aW9uRXJyb3JUaHJlc2hvbGQ/OiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHJlcXVlc3RFbmNvZGluZz86IFJlcXVlc3RFbmNvZGluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KClcbiAgbGF5ZXI6IHN0cmluZztcbiAgQElucHV0KClcbiAgc3R5bGU6IHN0cmluZztcbiAgQElucHV0KClcbiAgdGlsZUNsYXNzPzogYW55O1xuICBASW5wdXQoKVxuICB0aWxlUGl4ZWxSYXRpbz86IG51bWJlcjtcbiAgQElucHV0KClcbiAgdmVyc2lvbj86IHN0cmluZztcbiAgQElucHV0KClcbiAgZm9ybWF0Pzogc3RyaW5nO1xuICBASW5wdXQoKVxuICBtYXRyaXhTZXQ6IHN0cmluZztcbiAgQElucHV0KClcbiAgZGltZW5zaW9ucz86IGFueTtcbiAgQElucHV0KClcbiAgdXJsPzogc3RyaW5nO1xuICBASW5wdXQoKVxuICB0aWxlTG9hZEZ1bmN0aW9uPzogTG9hZEZ1bmN0aW9uO1xuICBASW5wdXQoKVxuICB1cmxzPzogc3RyaW5nW107XG4gIEBJbnB1dCgpXG4gIHdyYXBYPzogYm9vbGVhbjtcblxuICBAT3V0cHV0KClcbiAgdGlsZUxvYWRTdGFydDogRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIHRpbGVMb2FkRW5kOiBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgdGlsZUxvYWRFcnJvcjogRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4oKTtcblxuICBAQ29udGVudENoaWxkKFRpbGVHcmlkV01UU0NvbXBvbmVudClcbiAgdGlsZUdyaWRXTVRTOiBUaWxlR3JpZFdNVFNDb21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBsYXllcjogTGF5ZXJUaWxlQ29tcG9uZW50KSB7XG4gICAgc3VwZXIobGF5ZXIpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGNvbnN0IHByb3BlcnRpZXM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjaGFuZ2VzKSB7XG4gICAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgY2FzZSAndXJsJzpcbiAgICAgICAgICAgIHRoaXMudXJsID0gY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMuc2V0TGF5ZXJTb3VyY2UoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBwcm9wZXJ0aWVzW2tleV0gPSBjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmluc3RhbmNlLnNldFByb3BlcnRpZXMocHJvcGVydGllcywgZmFsc2UpO1xuICB9XG5cbiAgc2V0TGF5ZXJTb3VyY2UoKTogdm9pZCB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBTb3VyY2VXTVRTKHRoaXMpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3RpbGVsb2Fkc3RhcnQnLCAoZXZlbnQ6IFRpbGVTb3VyY2VFdmVudCkgPT4gdGhpcy50aWxlTG9hZFN0YXJ0LmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCd0aWxlbG9hZGVuZCcsIChldmVudDogVGlsZVNvdXJjZUV2ZW50KSA9PiB0aGlzLnRpbGVMb2FkRW5kLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCd0aWxlbG9hZGVycm9yJywgKGV2ZW50OiBUaWxlU291cmNlRXZlbnQpID0+IHRoaXMudGlsZUxvYWRFcnJvci5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFNvdXJjZSh0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50aWxlR3JpZFdNVFMpIHtcbiAgICAgIHRoaXMudGlsZUdyaWQgPSB0aGlzLnRpbGVHcmlkV01UUy5pbnN0YW5jZTtcbiAgICAgIHRoaXMuc2V0TGF5ZXJTb3VyY2UoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==