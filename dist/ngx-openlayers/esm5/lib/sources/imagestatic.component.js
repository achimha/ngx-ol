import { __decorate, __extends, __param } from "tslib";
import { Component, Host, Input, forwardRef, Output, EventEmitter, } from '@angular/core';
import { ImageStatic } from 'ol/source';
import { SourceComponent } from './source.component';
import { LayerImageComponent } from '../layers/layerimage.component';
var SourceImageStaticComponent = /** @class */ (function (_super) {
    __extends(SourceImageStaticComponent, _super);
    function SourceImageStaticComponent(layer) {
        var _this = _super.call(this, layer) || this;
        _this.imageLoadStart = new EventEmitter();
        _this.imageLoadEnd = new EventEmitter();
        _this.imageLoadError = new EventEmitter();
        return _this;
    }
    SourceImageStaticComponent_1 = SourceImageStaticComponent;
    SourceImageStaticComponent.prototype.setLayerSource = function () {
        var _this = this;
        this.instance = new ImageStatic(this);
        this.host.instance.setSource(this.instance);
        this.instance.on('imageloadstart', function (event) { return _this.imageLoadStart.emit(event); });
        this.instance.on('imageloadend', function (event) { return _this.imageLoadEnd.emit(event); });
        this.instance.on('imageloaderror', function (event) { return _this.imageLoadError.emit(event); });
    };
    SourceImageStaticComponent.prototype.ngOnInit = function () {
        this.setLayerSource();
    };
    SourceImageStaticComponent.prototype.ngOnChanges = function (changes) {
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
    var SourceImageStaticComponent_1;
    SourceImageStaticComponent.ctorParameters = function () { return [
        { type: LayerImageComponent, decorators: [{ type: Host }] }
    ]; };
    __decorate([
        Input()
    ], SourceImageStaticComponent.prototype, "projection", void 0);
    __decorate([
        Input()
    ], SourceImageStaticComponent.prototype, "imageExtent", void 0);
    __decorate([
        Input()
    ], SourceImageStaticComponent.prototype, "url", void 0);
    __decorate([
        Input()
    ], SourceImageStaticComponent.prototype, "attributions", void 0);
    __decorate([
        Input()
    ], SourceImageStaticComponent.prototype, "crossOrigin", void 0);
    __decorate([
        Input()
    ], SourceImageStaticComponent.prototype, "imageLoadFunction", void 0);
    __decorate([
        Input()
    ], SourceImageStaticComponent.prototype, "imageSize", void 0);
    __decorate([
        Output()
    ], SourceImageStaticComponent.prototype, "imageLoadStart", void 0);
    __decorate([
        Output()
    ], SourceImageStaticComponent.prototype, "imageLoadEnd", void 0);
    __decorate([
        Output()
    ], SourceImageStaticComponent.prototype, "imageLoadError", void 0);
    SourceImageStaticComponent = SourceImageStaticComponent_1 = __decorate([
        Component({
            selector: 'aol-source-imagestatic',
            template: " <ng-content></ng-content> ",
            providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceImageStaticComponent_1; }) }]
        }),
        __param(0, Host())
    ], SourceImageStaticComponent);
    return SourceImageStaticComponent;
}(SourceComponent));
export { SourceImageStaticComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VzdGF0aWMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvc291cmNlcy9pbWFnZXN0YXRpYy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsSUFBSSxFQUNKLEtBQUssRUFDTCxVQUFVLEVBQ1YsTUFBTSxFQUNOLFlBQVksR0FJYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQWFyRTtJQUFnRCw4Q0FBZTtJQXlCN0Qsb0NBQW9CLEtBQTBCO1FBQTlDLFlBQ0Usa0JBQU0sS0FBSyxDQUFDLFNBQ2I7UUFSRCxvQkFBYyxHQUFHLElBQUksWUFBWSxFQUFvQixDQUFDO1FBRXRELGtCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7UUFFcEQsb0JBQWMsR0FBRyxJQUFJLFlBQVksRUFBb0IsQ0FBQzs7SUFJdEQsQ0FBQzttQ0EzQlUsMEJBQTBCO0lBNkJyQyxtREFBYyxHQUFkO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsVUFBQyxLQUF1QixJQUFLLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQS9CLENBQStCLENBQUMsQ0FBQztRQUNqRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsVUFBQyxLQUF1QixJQUFLLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQTdCLENBQTZCLENBQUMsQ0FBQztRQUM3RixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFDLEtBQXVCLElBQUssT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDO0lBQ25HLENBQUM7SUFFRCw2Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxnREFBVyxHQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBTSxVQUFVLEdBQTZCLEVBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixPQUFPO1NBQ1I7UUFDRCxLQUFLLElBQU0sR0FBRyxJQUFJLE9BQU8sRUFBRTtZQUN6QixJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQy9CLFFBQVEsR0FBRyxFQUFFO29CQUNYLEtBQUssS0FBSzt3QkFDUixJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUM7d0JBQ3JDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQzt3QkFDdEIsTUFBTTtvQkFDUjt3QkFDRSxNQUFNO2lCQUNUO2dCQUNELFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDO2FBQzdDO1NBQ0Y7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7O2dCQW5DMEIsbUJBQW1CLHVCQUFqQyxJQUFJOztJQXJCakI7UUFEQyxLQUFLLEVBQUU7a0VBQzRCO0lBRXBDO1FBREMsS0FBSyxFQUFFO21FQUNZO0lBRXBCO1FBREMsS0FBSyxFQUFFOzJEQUNJO0lBRVo7UUFEQyxLQUFLLEVBQUU7b0VBQ3NCO0lBRTlCO1FBREMsS0FBSyxFQUFFO21FQUNhO0lBRXJCO1FBREMsS0FBSyxFQUFFO3lFQUN5QjtJQUVqQztRQURDLEtBQUssRUFBRTtpRUFDUztJQUdqQjtRQURDLE1BQU0sRUFBRTtzRUFDNkM7SUFFdEQ7UUFEQyxNQUFNLEVBQUU7b0VBQzJDO0lBRXBEO1FBREMsTUFBTSxFQUFFO3NFQUM2QztJQXZCM0MsMEJBQTBCO1FBTHRDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx3QkFBd0I7WUFDbEMsUUFBUSxFQUFFLDZCQUE2QjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsNEJBQTBCLEVBQTFCLENBQTBCLENBQUMsRUFBRSxDQUFDO1NBQ3JHLENBQUM7UUEwQmEsV0FBQSxJQUFJLEVBQUUsQ0FBQTtPQXpCUiwwQkFBMEIsQ0E2RHRDO0lBQUQsaUNBQUM7Q0FBQSxBQTdERCxDQUFnRCxlQUFlLEdBNkQ5RDtTQTdEWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEhvc3QsXG4gIElucHV0LFxuICBmb3J3YXJkUmVmLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW1hZ2VTdGF0aWMgfSBmcm9tICdvbC9zb3VyY2UnO1xuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UuY29tcG9uZW50JztcbmltcG9ydCB7IExheWVySW1hZ2VDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJpbWFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvamVjdGlvbkxpa2UgfSBmcm9tICdvbC9wcm9qJztcbmltcG9ydCB7IEV4dGVudCB9IGZyb20gJ29sL2V4dGVudCc7XG5pbXBvcnQgeyBBdHRyaWJ1dGlvbkxpa2UgfSBmcm9tICdvbC9zb3VyY2UvU291cmNlJztcbmltcG9ydCB7IExvYWRGdW5jdGlvbiB9IGZyb20gJ29sL0ltYWdlJztcbmltcG9ydCB7IFNpemUgfSBmcm9tICdvbC9zaXplJztcbmltcG9ydCB7IEltYWdlU291cmNlRXZlbnQgfSBmcm9tICdvbC9zb3VyY2UvSW1hZ2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtc291cmNlLWltYWdlc3RhdGljJyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFNvdXJjZUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlSW1hZ2VTdGF0aWNDb21wb25lbnQpIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBTb3VyY2VJbWFnZVN0YXRpY0NvbXBvbmVudCBleHRlbmRzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgaW5zdGFuY2U6IEltYWdlU3RhdGljO1xuXG4gIEBJbnB1dCgpXG4gIHByb2plY3Rpb246IFByb2plY3Rpb25MaWtlIHwgc3RyaW5nO1xuICBASW5wdXQoKVxuICBpbWFnZUV4dGVudDogRXh0ZW50O1xuICBASW5wdXQoKVxuICB1cmw6IHN0cmluZztcbiAgQElucHV0KClcbiAgYXR0cmlidXRpb25zOiBBdHRyaWJ1dGlvbkxpa2U7XG4gIEBJbnB1dCgpXG4gIGNyb3NzT3JpZ2luPzogc3RyaW5nO1xuICBASW5wdXQoKVxuICBpbWFnZUxvYWRGdW5jdGlvbj86IExvYWRGdW5jdGlvbjtcbiAgQElucHV0KClcbiAgaW1hZ2VTaXplPzogU2l6ZTtcblxuICBAT3V0cHV0KClcbiAgaW1hZ2VMb2FkU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPEltYWdlU291cmNlRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBpbWFnZUxvYWRFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPEltYWdlU291cmNlRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBpbWFnZUxvYWRFcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8SW1hZ2VTb3VyY2VFdmVudD4oKTtcblxuICBjb25zdHJ1Y3RvcihASG9zdCgpIGxheWVyOiBMYXllckltYWdlQ29tcG9uZW50KSB7XG4gICAgc3VwZXIobGF5ZXIpO1xuICB9XG5cbiAgc2V0TGF5ZXJTb3VyY2UoKTogdm9pZCB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBJbWFnZVN0YXRpYyh0aGlzKTtcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKHRoaXMuaW5zdGFuY2UpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2ltYWdlbG9hZHN0YXJ0JywgKGV2ZW50OiBJbWFnZVNvdXJjZUV2ZW50KSA9PiB0aGlzLmltYWdlTG9hZFN0YXJ0LmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdpbWFnZWxvYWRlbmQnLCAoZXZlbnQ6IEltYWdlU291cmNlRXZlbnQpID0+IHRoaXMuaW1hZ2VMb2FkRW5kLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdpbWFnZWxvYWRlcnJvcicsIChldmVudDogSW1hZ2VTb3VyY2VFdmVudCkgPT4gdGhpcy5pbWFnZUxvYWRFcnJvci5lbWl0KGV2ZW50KSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldExheWVyU291cmNlKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgY29uc3QgcHJvcGVydGllczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0ge307XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IGluIGNoYW5nZXMpIHtcbiAgICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICBjYXNlICd1cmwnOlxuICAgICAgICAgICAgdGhpcy51cmwgPSBjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgdGhpcy5zZXRMYXllclNvdXJjZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHByb3BlcnRpZXNba2V5XSA9IGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuaW5zdGFuY2Uuc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBmYWxzZSk7XG4gIH1cbn1cbiJdfQ==