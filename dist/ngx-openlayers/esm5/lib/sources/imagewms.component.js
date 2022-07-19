import { __decorate, __extends, __param } from "tslib";
import { Component, Host, Input, forwardRef, Output, EventEmitter, } from '@angular/core';
import { ImageWMS } from 'ol/source';
import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';
var SourceImageWMSComponent = /** @class */ (function (_super) {
    __extends(SourceImageWMSComponent, _super);
    function SourceImageWMSComponent(layer) {
        var _this = _super.call(this, layer) || this;
        _this.imageLoadStart = new EventEmitter();
        _this.imageLoadEnd = new EventEmitter();
        _this.imageLoadError = new EventEmitter();
        return _this;
    }
    SourceImageWMSComponent_1 = SourceImageWMSComponent;
    SourceImageWMSComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.instance = new ImageWMS(this);
        this.host.instance.setSource(this.instance);
        this.instance.on('imageloadstart', function (event) { return _this.imageLoadStart.emit(event); });
        this.instance.on('imageloadend', function (event) { return _this.imageLoadEnd.emit(event); });
        this.instance.on('imageloaderror', function (event) { return _this.imageLoadError.emit(event); });
    };
    SourceImageWMSComponent.prototype.ngOnChanges = function (changes) {
        if (this.instance && changes.hasOwnProperty('params')) {
            this.instance.updateParams(this.params);
        }
    };
    var SourceImageWMSComponent_1;
    SourceImageWMSComponent.ctorParameters = function () { return [
        { type: LayerImageComponent, decorators: [{ type: Host }] }
    ]; };
    __decorate([
        Input()
    ], SourceImageWMSComponent.prototype, "attributions", void 0);
    __decorate([
        Input()
    ], SourceImageWMSComponent.prototype, "crossOrigin", void 0);
    __decorate([
        Input()
    ], SourceImageWMSComponent.prototype, "hidpi", void 0);
    __decorate([
        Input()
    ], SourceImageWMSComponent.prototype, "serverType", void 0);
    __decorate([
        Input()
    ], SourceImageWMSComponent.prototype, "imageLoadFunction", void 0);
    __decorate([
        Input()
    ], SourceImageWMSComponent.prototype, "params", void 0);
    __decorate([
        Input()
    ], SourceImageWMSComponent.prototype, "projection", void 0);
    __decorate([
        Input()
    ], SourceImageWMSComponent.prototype, "ratio", void 0);
    __decorate([
        Input()
    ], SourceImageWMSComponent.prototype, "resolutions", void 0);
    __decorate([
        Input()
    ], SourceImageWMSComponent.prototype, "url", void 0);
    __decorate([
        Output()
    ], SourceImageWMSComponent.prototype, "imageLoadStart", void 0);
    __decorate([
        Output()
    ], SourceImageWMSComponent.prototype, "imageLoadEnd", void 0);
    __decorate([
        Output()
    ], SourceImageWMSComponent.prototype, "imageLoadError", void 0);
    SourceImageWMSComponent = SourceImageWMSComponent_1 = __decorate([
        Component({
            selector: 'aol-source-imagewms',
            template: " <ng-content></ng-content> ",
            providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceImageWMSComponent_1; }) }]
        }),
        __param(0, Host())
    ], SourceImageWMSComponent);
    return SourceImageWMSComponent;
}(SourceComponent));
export { SourceImageWMSComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2V3bXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvc291cmNlcy9pbWFnZXdtcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsSUFBSSxFQUNKLEtBQUssRUFHTCxVQUFVLEVBRVYsTUFBTSxFQUNOLFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVdyRDtJQUE2QywyQ0FBZTtJQStCMUQsaUNBQW9CLEtBQTBCO1FBQTlDLFlBQ0Usa0JBQU0sS0FBSyxDQUFDLFNBQ2I7UUFSRCxvQkFBYyxHQUFHLElBQUksWUFBWSxFQUFvQixDQUFDO1FBRXRELGtCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7UUFFcEQsb0JBQWMsR0FBRyxJQUFJLFlBQVksRUFBb0IsQ0FBQzs7SUFJdEQsQ0FBQztnQ0FqQ1UsdUJBQXVCO0lBbUNsQywwQ0FBUSxHQUFSO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsVUFBQyxLQUF1QixJQUFLLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQS9CLENBQStCLENBQUMsQ0FBQztRQUNqRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsVUFBQyxLQUF1QixJQUFLLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQTdCLENBQTZCLENBQUMsQ0FBQztRQUM3RixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFDLEtBQXVCLElBQUssT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDO0lBQ25HLENBQUM7SUFFRCw2Q0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQzs7O2dCQWhCMEIsbUJBQW1CLHVCQUFqQyxJQUFJOztJQTNCakI7UUFEQyxLQUFLLEVBQUU7aUVBQ3NCO0lBRTlCO1FBREMsS0FBSyxFQUFFO2dFQUNZO0lBRXBCO1FBREMsS0FBSyxFQUFFOzBEQUNPO0lBRWY7UUFEQyxLQUFLLEVBQUU7K0RBQ1c7SUFFbkI7UUFEQyxLQUFLLEVBQUU7c0VBQ3lCO0lBRWpDO1FBREMsS0FBSyxFQUFFOzJEQUN1QjtJQUUvQjtRQURDLEtBQUssRUFBRTsrREFDNEI7SUFFcEM7UUFEQyxLQUFLLEVBQUU7MERBQ007SUFFZDtRQURDLEtBQUssRUFBRTtnRUFDbUI7SUFFM0I7UUFEQyxLQUFLLEVBQUU7d0RBQ0k7SUFHWjtRQURDLE1BQU0sRUFBRTttRUFDNkM7SUFFdEQ7UUFEQyxNQUFNLEVBQUU7aUVBQzJDO0lBRXBEO1FBREMsTUFBTSxFQUFFO21FQUM2QztJQTdCM0MsdUJBQXVCO1FBTG5DLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsUUFBUSxFQUFFLDZCQUE2QjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEseUJBQXVCLEVBQXZCLENBQXVCLENBQUMsRUFBRSxDQUFDO1NBQ2xHLENBQUM7UUFnQ2EsV0FBQSxJQUFJLEVBQUUsQ0FBQTtPQS9CUix1QkFBdUIsQ0FnRG5DO0lBQUQsOEJBQUM7Q0FBQSxBQWhERCxDQUE2QyxlQUFlLEdBZ0QzRDtTQWhEWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEhvc3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgZm9yd2FyZFJlZixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW1hZ2VXTVMgfSBmcm9tICdvbC9zb3VyY2UnO1xuaW1wb3J0IHsgTGF5ZXJJbWFnZUNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcmltYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvamVjdGlvbkxpa2UgfSBmcm9tICdvbC9wcm9qJztcbmltcG9ydCB7IEF0dHJpYnV0aW9uTGlrZSB9IGZyb20gJ29sL3NvdXJjZS9Tb3VyY2UnO1xuaW1wb3J0IHsgTG9hZEZ1bmN0aW9uIH0gZnJvbSAnb2wvSW1hZ2UnO1xuaW1wb3J0IHsgSW1hZ2VTb3VyY2VFdmVudCB9IGZyb20gJ29sL3NvdXJjZS9JbWFnZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1zb3VyY2UtaW1hZ2V3bXMnLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VJbWFnZVdNU0NvbXBvbmVudCkgfV0sXG59KVxuZXhwb3J0IGNsYXNzIFNvdXJjZUltYWdlV01TQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuICBpbnN0YW5jZTogSW1hZ2VXTVM7XG5cbiAgQElucHV0KClcbiAgYXR0cmlidXRpb25zOiBBdHRyaWJ1dGlvbkxpa2U7XG4gIEBJbnB1dCgpXG4gIGNyb3NzT3JpZ2luOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGhpZHBpOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBzZXJ2ZXJUeXBlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGltYWdlTG9hZEZ1bmN0aW9uPzogTG9hZEZ1bmN0aW9uO1xuICBASW5wdXQoKVxuICBwYXJhbXM6IHsgW2tleTogc3RyaW5nXTogYW55IH07XG4gIEBJbnB1dCgpXG4gIHByb2plY3Rpb246IFByb2plY3Rpb25MaWtlIHwgc3RyaW5nO1xuICBASW5wdXQoKVxuICByYXRpbzogbnVtYmVyO1xuICBASW5wdXQoKVxuICByZXNvbHV0aW9uczogQXJyYXk8bnVtYmVyPjtcbiAgQElucHV0KClcbiAgdXJsOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpXG4gIGltYWdlTG9hZFN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxJbWFnZVNvdXJjZUV2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgaW1hZ2VMb2FkRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxJbWFnZVNvdXJjZUV2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgaW1hZ2VMb2FkRXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPEltYWdlU291cmNlRXZlbnQ+KCk7XG5cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBsYXllcjogTGF5ZXJJbWFnZUNvbXBvbmVudCkge1xuICAgIHN1cGVyKGxheWVyKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgSW1hZ2VXTVModGhpcyk7XG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFNvdXJjZSh0aGlzLmluc3RhbmNlKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdpbWFnZWxvYWRzdGFydCcsIChldmVudDogSW1hZ2VTb3VyY2VFdmVudCkgPT4gdGhpcy5pbWFnZUxvYWRTdGFydC5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignaW1hZ2Vsb2FkZW5kJywgKGV2ZW50OiBJbWFnZVNvdXJjZUV2ZW50KSA9PiB0aGlzLmltYWdlTG9hZEVuZC5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignaW1hZ2Vsb2FkZXJyb3InLCAoZXZlbnQ6IEltYWdlU291cmNlRXZlbnQpID0+IHRoaXMuaW1hZ2VMb2FkRXJyb3IuZW1pdChldmVudCkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICh0aGlzLmluc3RhbmNlICYmIGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ3BhcmFtcycpKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnVwZGF0ZVBhcmFtcyh0aGlzLnBhcmFtcyk7XG4gICAgfVxuICB9XG59XG4iXX0=