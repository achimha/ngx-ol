import * as tslib_1 from "tslib";
import { Component, EventEmitter, forwardRef, Host, Input, Output, } from '@angular/core';
import ImageArcGISRest from 'ol/source/ImageArcGISRest';
import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';
var SourceImageArcGISRestComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SourceImageArcGISRestComponent, _super);
    function SourceImageArcGISRestComponent(layer) {
        var _this = _super.call(this, layer) || this;
        _this.ratio = 1.5;
        _this.imageLoadStart = new EventEmitter();
        _this.imageLoadEnd = new EventEmitter();
        _this.imageLoadError = new EventEmitter();
        return _this;
    }
    SourceImageArcGISRestComponent_1 = SourceImageArcGISRestComponent;
    SourceImageArcGISRestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.instance = new ImageArcGISRest(this);
        this.host.instance.setSource(this.instance);
        this.instance.on('imageloadstart', function (event) { return _this.imageLoadStart.emit(event); });
        this.instance.on('imageloadend', function (event) { return _this.imageLoadEnd.emit(event); });
        this.instance.on('imageloaderror', function (event) { return _this.imageLoadError.emit(event); });
    };
    SourceImageArcGISRestComponent.prototype.ngOnChanges = function (changes) {
        if (this.instance && changes.hasOwnProperty('params')) {
            this.instance.updateParams(this.params);
        }
    };
    var SourceImageArcGISRestComponent_1;
    SourceImageArcGISRestComponent.ctorParameters = function () { return [
        { type: LayerImageComponent, decorators: [{ type: Host }] }
    ]; };
    tslib_1.__decorate([
        Input()
    ], SourceImageArcGISRestComponent.prototype, "projection", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceImageArcGISRestComponent.prototype, "url", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceImageArcGISRestComponent.prototype, "attributions", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceImageArcGISRestComponent.prototype, "crossOrigin", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceImageArcGISRestComponent.prototype, "imageLoadFunction", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceImageArcGISRestComponent.prototype, "params", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceImageArcGISRestComponent.prototype, "ratio", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceImageArcGISRestComponent.prototype, "resolutions", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceImageArcGISRestComponent.prototype, "wrapX", void 0);
    tslib_1.__decorate([
        Output()
    ], SourceImageArcGISRestComponent.prototype, "imageLoadStart", void 0);
    tslib_1.__decorate([
        Output()
    ], SourceImageArcGISRestComponent.prototype, "imageLoadEnd", void 0);
    tslib_1.__decorate([
        Output()
    ], SourceImageArcGISRestComponent.prototype, "imageLoadError", void 0);
    SourceImageArcGISRestComponent = SourceImageArcGISRestComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'aol-source-imagearcgisrest',
            template: " <ng-content></ng-content> ",
            providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceImageArcGISRestComponent_1; }) }]
        }),
        tslib_1.__param(0, Host())
    ], SourceImageArcGISRestComponent);
    return SourceImageArcGISRestComponent;
}(SourceComponent));
export { SourceImageArcGISRestComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VhcmNnaXNyZXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9zb3VyY2VzL2ltYWdlYXJjZ2lzcmVzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixJQUFJLEVBQ0osS0FBSyxFQUdMLE1BQU0sR0FFUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLGVBQWUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFXckQ7SUFBb0QsMERBQWU7SUFvQmpFLHdDQUFvQixLQUEwQjtRQUE5QyxZQUNFLGtCQUFNLEtBQUssQ0FBQyxTQUNiO1FBYlEsV0FBSyxHQUFHLEdBQUcsQ0FBQztRQUtyQixvQkFBYyxHQUFHLElBQUksWUFBWSxFQUFvQixDQUFDO1FBRXRELGtCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7UUFFcEQsb0JBQWMsR0FBRyxJQUFJLFlBQVksRUFBb0IsQ0FBQzs7SUFJdEQsQ0FBQzt1Q0F0QlUsOEJBQThCO0lBd0J6QyxpREFBUSxHQUFSO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsVUFBQyxLQUF1QixJQUFLLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQS9CLENBQStCLENBQUMsQ0FBQztRQUNqRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsVUFBQyxLQUF1QixJQUFLLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQTdCLENBQTZCLENBQUMsQ0FBQztRQUM3RixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFDLEtBQXVCLElBQUssT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDO0lBQ25HLENBQUM7SUFFRCxvREFBVyxHQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQzs7O2dCQWhCMEIsbUJBQW1CLHVCQUFqQyxJQUFJOztJQWpCUjtRQUFSLEtBQUssRUFBRTtzRUFBcUM7SUFDcEM7UUFBUixLQUFLLEVBQUU7K0RBQWE7SUFDWjtRQUFSLEtBQUssRUFBRTt3RUFBK0I7SUFDOUI7UUFBUixLQUFLLEVBQUU7dUVBQXNCO0lBQ3JCO1FBQVIsS0FBSyxFQUFFOzZFQUFrQztJQUNqQztRQUFSLEtBQUssRUFBRTtrRUFBK0I7SUFDOUI7UUFBUixLQUFLLEVBQUU7aUVBQWE7SUFDWjtRQUFSLEtBQUssRUFBRTt1RUFBd0I7SUFDdkI7UUFBUixLQUFLLEVBQUU7aUVBQWlCO0lBR3pCO1FBREMsTUFBTSxFQUFFOzBFQUM2QztJQUV0RDtRQURDLE1BQU0sRUFBRTt3RUFDMkM7SUFFcEQ7UUFEQyxNQUFNLEVBQUU7MEVBQzZDO0lBbEIzQyw4QkFBOEI7UUFMMUMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDRCQUE0QjtZQUN0QyxRQUFRLEVBQUUsNkJBQTZCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxnQ0FBOEIsRUFBOUIsQ0FBOEIsQ0FBQyxFQUFFLENBQUM7U0FDekcsQ0FBQztRQXFCYSxtQkFBQSxJQUFJLEVBQUUsQ0FBQTtPQXBCUiw4QkFBOEIsQ0FxQzFDO0lBQUQscUNBQUM7Q0FBQSxBQXJDRCxDQUFvRCxlQUFlLEdBcUNsRTtTQXJDWSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IEltYWdlQXJjR0lTUmVzdCBmcm9tICdvbC9zb3VyY2UvSW1hZ2VBcmNHSVNSZXN0JztcbmltcG9ydCB7IExheWVySW1hZ2VDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJpbWFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2plY3Rpb25MaWtlIH0gZnJvbSAnb2wvcHJvaic7XG5pbXBvcnQgeyBBdHRyaWJ1dGlvbkxpa2UgfSBmcm9tICdvbC9zb3VyY2UvU291cmNlJztcbmltcG9ydCB7IExvYWRGdW5jdGlvbiB9IGZyb20gJ29sL0ltYWdlJztcbmltcG9ydCB7IEltYWdlU291cmNlRXZlbnQgfSBmcm9tICdvbC9zb3VyY2UvSW1hZ2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtc291cmNlLWltYWdlYXJjZ2lzcmVzdCcsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZUltYWdlQXJjR0lTUmVzdENvbXBvbmVudCkgfV0sXG59KVxuZXhwb3J0IGNsYXNzIFNvdXJjZUltYWdlQXJjR0lTUmVzdENvbXBvbmVudCBleHRlbmRzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgaW5zdGFuY2U6IEltYWdlQXJjR0lTUmVzdDtcblxuICBASW5wdXQoKSBwcm9qZWN0aW9uOiBQcm9qZWN0aW9uTGlrZSB8IHN0cmluZztcbiAgQElucHV0KCkgdXJsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGF0dHJpYnV0aW9uczogQXR0cmlidXRpb25MaWtlO1xuICBASW5wdXQoKSBjcm9zc09yaWdpbj86IHN0cmluZztcbiAgQElucHV0KCkgaW1hZ2VMb2FkRnVuY3Rpb24/OiBMb2FkRnVuY3Rpb247XG4gIEBJbnB1dCgpIHBhcmFtcz86IHsgW2s6IHN0cmluZ106IGFueSB9O1xuICBASW5wdXQoKSByYXRpbyA9IDEuNTtcbiAgQElucHV0KCkgcmVzb2x1dGlvbnM/OiBudW1iZXJbXTtcbiAgQElucHV0KCkgd3JhcFg/OiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKVxuICBpbWFnZUxvYWRTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8SW1hZ2VTb3VyY2VFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIGltYWdlTG9hZEVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8SW1hZ2VTb3VyY2VFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIGltYWdlTG9hZEVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxJbWFnZVNvdXJjZUV2ZW50PigpO1xuXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgbGF5ZXI6IExheWVySW1hZ2VDb21wb25lbnQpIHtcbiAgICBzdXBlcihsYXllcik7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IEltYWdlQXJjR0lTUmVzdCh0aGlzKTtcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKHRoaXMuaW5zdGFuY2UpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2ltYWdlbG9hZHN0YXJ0JywgKGV2ZW50OiBJbWFnZVNvdXJjZUV2ZW50KSA9PiB0aGlzLmltYWdlTG9hZFN0YXJ0LmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdpbWFnZWxvYWRlbmQnLCAoZXZlbnQ6IEltYWdlU291cmNlRXZlbnQpID0+IHRoaXMuaW1hZ2VMb2FkRW5kLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdpbWFnZWxvYWRlcnJvcicsIChldmVudDogSW1hZ2VTb3VyY2VFdmVudCkgPT4gdGhpcy5pbWFnZUxvYWRFcnJvci5lbWl0KGV2ZW50KSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UgJiYgY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgncGFyYW1zJykpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UudXBkYXRlUGFyYW1zKHRoaXMucGFyYW1zKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==