import { __decorate, __extends, __param } from "tslib";
import { Component, ContentChild, EventEmitter, forwardRef, Host, Input, Optional, Output, } from '@angular/core';
import { XYZ } from 'ol/source';
import { LayerTileComponent } from '../layers/layertile.component';
import { TileGridComponent } from '../tilegrid.component';
import { SourceComponent } from './source.component';
var SourceXYZComponent = /** @class */ (function (_super) {
    __extends(SourceXYZComponent, _super);
    function SourceXYZComponent(layer) {
        var _this = _super.call(this, layer) || this;
        _this.layer = layer;
        _this.tileLoadStart = new EventEmitter();
        _this.tileLoadEnd = new EventEmitter();
        _this.tileLoadError = new EventEmitter();
        return _this;
    }
    SourceXYZComponent_1 = SourceXYZComponent;
    SourceXYZComponent.prototype.ngAfterContentInit = function () {
        if (this.tileGridXYZ) {
            this.tileGrid = this.tileGridXYZ.instance;
        }
        this.init();
    };
    SourceXYZComponent.prototype.ngOnChanges = function (changes) {
        var properties = {};
        if (!this.instance) {
            return;
        }
        for (var key in changes) {
            if (changes.hasOwnProperty(key)) {
                properties[key] = changes[key].currentValue;
            }
        }
        this.instance.setProperties(properties, false);
        if (changes.hasOwnProperty('url')) {
            this.init();
        }
    };
    SourceXYZComponent.prototype.init = function () {
        var _this = this;
        this.instance = new XYZ(this);
        this.instance.on('tileloadstart', function (event) { return _this.tileLoadStart.emit(event); });
        this.instance.on('tileloadend', function (event) { return _this.tileLoadEnd.emit(event); });
        this.instance.on('tileloaderror', function (event) { return _this.tileLoadError.emit(event); });
        this._register(this.instance);
    };
    var SourceXYZComponent_1;
    SourceXYZComponent.ctorParameters = function () { return [
        { type: LayerTileComponent, decorators: [{ type: Optional }, { type: Host }] }
    ]; };
    __decorate([
        Input()
    ], SourceXYZComponent.prototype, "cacheSize", void 0);
    __decorate([
        Input()
    ], SourceXYZComponent.prototype, "crossOrigin", void 0);
    __decorate([
        Input()
    ], SourceXYZComponent.prototype, "opaque", void 0);
    __decorate([
        Input()
    ], SourceXYZComponent.prototype, "projection", void 0);
    __decorate([
        Input()
    ], SourceXYZComponent.prototype, "reprojectionErrorThreshold", void 0);
    __decorate([
        Input()
    ], SourceXYZComponent.prototype, "minZoom", void 0);
    __decorate([
        Input()
    ], SourceXYZComponent.prototype, "maxZoom", void 0);
    __decorate([
        Input()
    ], SourceXYZComponent.prototype, "tileGrid", void 0);
    __decorate([
        Input()
    ], SourceXYZComponent.prototype, "tileLoadFunction", void 0);
    __decorate([
        Input()
    ], SourceXYZComponent.prototype, "tilePixelRatio", void 0);
    __decorate([
        Input()
    ], SourceXYZComponent.prototype, "tileSize", void 0);
    __decorate([
        Input()
    ], SourceXYZComponent.prototype, "tileUrlFunction", void 0);
    __decorate([
        Input()
    ], SourceXYZComponent.prototype, "url", void 0);
    __decorate([
        Input()
    ], SourceXYZComponent.prototype, "urls", void 0);
    __decorate([
        Input()
    ], SourceXYZComponent.prototype, "wrapX", void 0);
    __decorate([
        ContentChild(TileGridComponent)
    ], SourceXYZComponent.prototype, "tileGridXYZ", void 0);
    __decorate([
        Output()
    ], SourceXYZComponent.prototype, "tileLoadStart", void 0);
    __decorate([
        Output()
    ], SourceXYZComponent.prototype, "tileLoadEnd", void 0);
    __decorate([
        Output()
    ], SourceXYZComponent.prototype, "tileLoadError", void 0);
    SourceXYZComponent = SourceXYZComponent_1 = __decorate([
        Component({
            selector: 'aol-source-xyz',
            template: " <ng-content></ng-content> ",
            providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceXYZComponent_1; }) }]
        }),
        __param(0, Optional()),
        __param(0, Host())
    ], SourceXYZComponent);
    return SourceXYZComponent;
}(SourceComponent));
export { SourceXYZComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHl6LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL3NvdXJjZXMveHl6LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxZQUFZLEVBQ1osWUFBWSxFQUNaLFVBQVUsRUFDVixJQUFJLEVBQ0osS0FBSyxFQUVMLFFBQVEsRUFDUixNQUFNLEdBRVAsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUtoQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFPckQ7SUFBd0Msc0NBQWU7SUEyQ3JELDRCQUdZLEtBQTBCO1FBSHRDLFlBS0Usa0JBQU0sS0FBSyxDQUFDLFNBQ2I7UUFIVyxXQUFLLEdBQUwsS0FBSyxDQUFxQjtRQVR0QyxtQkFBYSxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUVuRixpQkFBVyxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUVqRixtQkFBYSxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQzs7SUFRbkYsQ0FBQzsyQkFqRFUsa0JBQWtCO0lBbUQ3QiwrQ0FBa0IsR0FBbEI7UUFDRSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztTQUMzQztRQUNELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRCx3Q0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBTSxVQUFVLEdBQTZCLEVBQUUsQ0FBQztRQUVoRCxJQUFJLENBQUMsSUFBSSxDQUFD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bnRJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNpemUgfSBmcm9tICdvbC9zaXplJztcbmltcG9ydCB7IFhZWiB9IGZyb20gJ29sL3NvdXJjZSc7XG5pbXBvcnQgeyBUaWxlU291cmNlRXZlbnQgfSBmcm9tICdvbC9zb3VyY2UvVGlsZSc7XG5pbXBvcnQgeyBMb2FkRnVuY3Rpb24sIFVybEZ1bmN0aW9uIH0gZnJvbSAnb2wvVGlsZSc7XG5pbXBvcnQgVGlsZUdyaWQgZnJvbSAnb2wvdGlsZWdyaWQvVGlsZUdyaWQnO1xuXG5pbXBvcnQgeyBMYXllclRpbGVDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJ0aWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaWxlR3JpZENvbXBvbmVudCB9IGZyb20gJy4uL3RpbGVncmlkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtc291cmNlLXh5eicsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZVhZWkNvbXBvbmVudCkgfV0sXG59KVxuZXhwb3J0IGNsYXNzIFNvdXJjZVhZWkNvbXBvbmVudCBleHRlbmRzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcyB7XG4gIGluc3RhbmNlOiBYWVo7XG4gIEBJbnB1dCgpXG4gIGNhY2hlU2l6ZTogbnVtYmVyO1xuICBASW5wdXQoKVxuICBjcm9zc09yaWdpbjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBvcGFxdWU6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHByb2plY3Rpb246IHN0cmluZztcbiAgQElucHV0KClcbiAgcmVwcm9qZWN0aW9uRXJyb3JUaHJlc2hvbGQ6IG51bWJlcjtcbiAgQElucHV0KClcbiAgbWluWm9vbTogbnVtYmVyO1xuICBASW5wdXQoKVxuICBtYXhab29tOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHRpbGVHcmlkOiBUaWxlR3JpZDtcbiAgQElucHV0KClcbiAgdGlsZUxvYWRGdW5jdGlvbj86IExvYWRGdW5jdGlvbjtcbiAgQElucHV0KClcbiAgdGlsZVBpeGVsUmF0aW86IG51bWJlcjtcbiAgQElucHV0KClcbiAgdGlsZVNpemU6IG51bWJlciB8IFNpemU7XG4gIEBJbnB1dCgpXG4gIHRpbGVVcmxGdW5jdGlvbj86IFVybEZ1bmN0aW9uO1xuICBASW5wdXQoKVxuICB1cmw6IHN0cmluZztcbiAgQElucHV0KClcbiAgdXJsczogc3RyaW5nW107XG4gIEBJbnB1dCgpXG4gIHdyYXBYOiBib29sZWFuO1xuXG4gIEBDb250ZW50Q2hpbGQoVGlsZUdyaWRDb21wb25lbnQpXG4gIHRpbGVHcmlkWFlaOiBUaWxlR3JpZENvbXBvbmVudDtcblxuICBAT3V0cHV0KClcbiAgdGlsZUxvYWRTdGFydDogRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIHRpbGVMb2FkRW5kOiBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgdGlsZUxvYWRFcnJvcjogRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBIb3N0KClcbiAgICBwcm90ZWN0ZWQgbGF5ZXI/OiBMYXllclRpbGVDb21wb25lbnRcbiAgKSB7XG4gICAgc3VwZXIobGF5ZXIpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIGlmICh0aGlzLnRpbGVHcmlkWFlaKSB7XG4gICAgICB0aGlzLnRpbGVHcmlkID0gdGhpcy50aWxlR3JpZFhZWi5pbnN0YW5jZTtcbiAgICB9XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgY29uc3QgcHJvcGVydGllczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0ge307XG5cbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgaW4gY2hhbmdlcykge1xuICAgICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBwcm9wZXJ0aWVzW2tleV0gPSBjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuaW5zdGFuY2Uuc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBmYWxzZSk7XG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ3VybCcpKSB7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgWFlaKHRoaXMpO1xuXG4gICAgdGhpcy5pbnN0YW5jZS5vbigndGlsZWxvYWRzdGFydCcsIChldmVudDogVGlsZVNvdXJjZUV2ZW50KSA9PiB0aGlzLnRpbGVMb2FkU3RhcnQuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3RpbGVsb2FkZW5kJywgKGV2ZW50OiBUaWxlU291cmNlRXZlbnQpID0+IHRoaXMudGlsZUxvYWRFbmQuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3RpbGVsb2FkZXJyb3InLCAoZXZlbnQ6IFRpbGVTb3VyY2VFdmVudCkgPT4gdGhpcy50aWxlTG9hZEVycm9yLmVtaXQoZXZlbnQpKTtcblxuICAgIHRoaXMuX3JlZ2lzdGVyKHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=