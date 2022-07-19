import { __decorate, __extends, __param } from "tslib";
import { Component, EventEmitter, forwardRef, Host, Input, Output, } from '@angular/core';
import { ImageArcGISRest } from 'ol/source';
import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';
var SourceImageArcGISRestComponent = /** @class */ (function (_super) {
    __extends(SourceImageArcGISRestComponent, _super);
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
    __decorate([
        Input()
    ], SourceImageArcGISRestComponent.prototype, "projection", void 0);
    __decorate([
        Input()
    ], SourceImageArcGISRestComponent.prototype, "url", void 0);
    __decorate([
        Input()
    ], SourceImageArcGISRestComponent.prototype, "attributions", void 0);
    __decorate([
        Input()
    ], SourceImageArcGISRestComponent.prototype, "crossOrigin", void 0);
    __decorate([
        Input()
    ], SourceImageArcGISRestComponent.prototype, "imageLoadFunction", void 0);
    __decorate([
        Input()
    ], SourceImageArcGISRestComponent.prototype, "params", void 0);
    __decorate([
        Input()
    ], SourceImageArcGISRestComponent.prototype, "ratio", void 0);
    __decorate([
        Input()
    ], SourceImageArcGISRestComponent.prototype, "resolutions", void 0);
    __decorate([
        Input()
    ], SourceImageArcGISRestComponent.prototype, "wrapX", void 0);
    __decorate([
        Output()
    ], SourceImageArcGISRestComponent.prototype, "imageLoadStart", void 0);
    __decorate([
        Output()
    ], SourceImageArcGISRestComponent.prototype, "imageLoadEnd", void 0);
    __decorate([
        Output()
    ], SourceImageArcGISRestComponent.prototype, "imageLoadError", void 0);
    SourceImageArcGISRestComponent = SourceImageArcGISRestComponent_1 = __decorate([
        Component({
            selector: 'aol-source-imagearcgisrest',
            template: " <ng-content></ng-content> ",
            providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceImageArcGISRestComponent_1; }) }]
        }),
        __param(0, Host())
    ], SourceImageArcGISRestComponent);
    return SourceImageArcGISRestComponent;
}(SourceComponent));
export { SourceImageArcGISRestComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VhcmNnaXNyZXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9zb3VyY2VzL2ltYWdlYXJjZ2lzcmVzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixJQUFJLEVBQ0osS0FBSyxFQUdMLE1BQU0sR0FFUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzVDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVdyRDtJQUFvRCxrREFBZTtJQW9CakUsd0NBQW9CLEtBQTBCO1FBQTlDLFlBQ0Usa0JBQU0sS0FBSyxDQUFDLFNBQ2I7UUFiUSxXQUFLLEdBQUcsR0FBRyxDQUFDO1FBS3JCLG9CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7UUFFdEQsa0JBQVksR0FBRyxJQUFJLFlBQVksRUFBb0IsQ0FBQztRQUVwRCxvQkFBYyxHQUFHLElBQUksWUFBWSxFQUFvQixDQUFDOztJQUl0RCxDQUFDO3VDQXRCVSw4QkFBOEI7SUF3QnpDLGlEQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFDLEtBQXVCLElBQUssT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDO1FBQ2pHLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxVQUFDLEtBQXVCLElBQUssT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBN0IsQ0FBNkIsQ0FBQyxDQUFDO1FBQzdGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLFVBQUMsS0FBdUIsSUFBSyxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUEvQixDQUErQixDQUFDLENBQUM7SUFDbkcsQ0FBQztJQUVELG9EQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNyRCxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDOzs7Z0JBaEIwQixtQkFBbUIsdUJBQWpDLElBQUk7O0lBakJSO1FBQVIsS0FBSyxFQUFFO3NFQUFxQztJQUNwQztRQUFSLEtBQUssRUFBRTsrREFBYTtJQUNaO1FBQVIsS0FBSyxFQUFFO3dFQUFpQztJQUNoQztRQUFSLEtBQUssRUFBRTt1RUFBc0I7SUFDckI7UUFBUixLQUFLLEVBQUU7NkVBQWtDO0lBQ2pDO1FBQVIsS0FBSyxFQUFFO2tFQUErQjtJQUM5QjtRQUFSLEtBQUssRUFBRTtpRUFBYTtJQUNaO1FBQVIsS0FBSyxFQUFFO3VFQUF3QjtJQUN2QjtRQUFSLEtBQUssRUFBRTtpRUFBaUI7SUFHekI7UUFEQyxNQUFNLEVBQUU7MEVBQzZDO0lBRXREO1FBREMsTUFBTSxFQUFFO3dFQUMyQztJQUVwRDtRQURDLE1BQU0sRUFBRTswRUFDNkM7SUFsQjNDLDhCQUE4QjtRQUwxQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsNEJBQTRCO1lBQ3RDLFFBQVEsRUFBRSw2QkFBNkI7WUFDdkMsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGdDQUE4QixFQUE5QixDQUE4QixDQUFDLEVBQUUsQ0FBQztTQUN6RyxDQUFDO1FBcUJhLFdBQUEsSUFBSSxFQUFFLENBQUE7T0FwQlIsOEJBQThCLENBcUMxQztJQUFELHFDQUFDO0NBQUEsQUFyQ0QsQ0FBb0QsZUFBZSxHQXFDbEU7U0FyQ1ksOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEltYWdlQXJjR0lTUmVzdCB9IGZyb20gJ29sL3NvdXJjZSc7XG5pbXBvcnQgeyBMYXllckltYWdlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVyaW1hZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9qZWN0aW9uTGlrZSB9IGZyb20gJ29sL3Byb2onO1xuaW1wb3J0IHsgQXR0cmlidXRpb25MaWtlIH0gZnJvbSAnb2wvc291cmNlL1NvdXJjZSc7XG5pbXBvcnQgeyBMb2FkRnVuY3Rpb24gfSBmcm9tICdvbC9JbWFnZSc7XG5pbXBvcnQgeyBJbWFnZVNvdXJjZUV2ZW50IH0gZnJvbSAnb2wvc291cmNlL0ltYWdlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS1pbWFnZWFyY2dpc3Jlc3QnLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VJbWFnZUFyY0dJU1Jlc3RDb21wb25lbnQpIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBTb3VyY2VJbWFnZUFyY0dJU1Jlc3RDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIGluc3RhbmNlOiBJbWFnZUFyY0dJU1Jlc3Q7XG5cbiAgQElucHV0KCkgcHJvamVjdGlvbjogUHJvamVjdGlvbkxpa2UgfCBzdHJpbmc7XG4gIEBJbnB1dCgpIHVybDogc3RyaW5nO1xuICBASW5wdXQoKSBhdHRyaWJ1dGlvbnM6IEF0dHJpYnV0aW9uTGlrZVtdO1xuICBASW5wdXQoKSBjcm9zc09yaWdpbj86IHN0cmluZztcbiAgQElucHV0KCkgaW1hZ2VMb2FkRnVuY3Rpb24/OiBMb2FkRnVuY3Rpb247XG4gIEBJbnB1dCgpIHBhcmFtcz86IHsgW2s6IHN0cmluZ106IGFueSB9O1xuICBASW5wdXQoKSByYXRpbyA9IDEuNTtcbiAgQElucHV0KCkgcmVzb2x1dGlvbnM/OiBudW1iZXJbXTtcbiAgQElucHV0KCkgd3JhcFg/OiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKVxuICBpbWFnZUxvYWRTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8SW1hZ2VTb3VyY2VFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIGltYWdlTG9hZEVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8SW1hZ2VTb3VyY2VFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIGltYWdlTG9hZEVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxJbWFnZVNvdXJjZUV2ZW50PigpO1xuXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgbGF5ZXI6IExheWVySW1hZ2VDb21wb25lbnQpIHtcbiAgICBzdXBlcihsYXllcik7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IEltYWdlQXJjR0lTUmVzdCh0aGlzKTtcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKHRoaXMuaW5zdGFuY2UpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2ltYWdlbG9hZHN0YXJ0JywgKGV2ZW50OiBJbWFnZVNvdXJjZUV2ZW50KSA9PiB0aGlzLmltYWdlTG9hZFN0YXJ0LmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdpbWFnZWxvYWRlbmQnLCAoZXZlbnQ6IEltYWdlU291cmNlRXZlbnQpID0+IHRoaXMuaW1hZ2VMb2FkRW5kLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdpbWFnZWxvYWRlcnJvcicsIChldmVudDogSW1hZ2VTb3VyY2VFdmVudCkgPT4gdGhpcy5pbWFnZUxvYWRFcnJvci5lbWl0KGV2ZW50KSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UgJiYgY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgncGFyYW1zJykpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UudXBkYXRlUGFyYW1zKHRoaXMucGFyYW1zKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==