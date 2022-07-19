import { __decorate, __extends, __param } from "tslib";
import { Component, ContentChild, EventEmitter, forwardRef, Host, Input, Output, } from '@angular/core';
import { Raster } from 'ol/source';
import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';
var SourceRasterComponent = /** @class */ (function (_super) {
    __extends(SourceRasterComponent, _super);
    function SourceRasterComponent(layer) {
        var _this = _super.call(this, layer) || this;
        _this.beforeOperations = new EventEmitter();
        _this.afterOperations = new EventEmitter();
        _this.sources = [];
        return _this;
    }
    SourceRasterComponent_1 = SourceRasterComponent;
    Object.defineProperty(SourceRasterComponent.prototype, "source", {
        set: function (sourceComponent) {
            this.sources = [sourceComponent.instance];
            if (this.instance) {
                // Openlayer doesn't handle sources update. Just recreate Raster instance.
                this.init();
            }
        },
        enumerable: true,
        configurable: true
    });
    SourceRasterComponent.prototype.ngAfterContentInit = function () {
        this.init();
    };
    SourceRasterComponent.prototype.init = function () {
        var _this = this;
        this.instance = new Raster(this);
        this.instance.on('beforeoperations', function (event) { return _this.beforeOperations.emit(event); });
        this.instance.on('afteroperations', function (event) { return _this.afterOperations.emit(event); });
        this._register(this.instance);
    };
    var SourceRasterComponent_1;
    SourceRasterComponent.ctorParameters = function () { return [
        { type: LayerImageComponent, decorators: [{ type: Host }] }
    ]; };
    __decorate([
        Input()
    ], SourceRasterComponent.prototype, "operation", void 0);
    __decorate([
        Input()
    ], SourceRasterComponent.prototype, "threads", void 0);
    __decorate([
        Input()
    ], SourceRasterComponent.prototype, "lib", void 0);
    __decorate([
        Input()
    ], SourceRasterComponent.prototype, "operationType", void 0);
    __decorate([
        Output()
    ], SourceRasterComponent.prototype, "beforeOperations", void 0);
    __decorate([
        Output()
    ], SourceRasterComponent.prototype, "afterOperations", void 0);
    __decorate([
        ContentChild(SourceComponent)
    ], SourceRasterComponent.prototype, "source", null);
    SourceRasterComponent = SourceRasterComponent_1 = __decorate([
        Component({
            selector: 'aol-source-raster',
            template: " <ng-content></ng-content> ",
            providers: [
                {
                    provide: SourceComponent,
                    useExisting: forwardRef(function () { return SourceRasterComponent_1; }),
                },
            ]
        }),
        __param(0, Host())
    ], SourceRasterComponent);
    return SourceRasterComponent;
}(SourceComponent));
export { SourceRasterComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFzdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9zb3VyY2VzL3Jhc3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksRUFDWixVQUFVLEVBQ1YsSUFBSSxFQUNKLEtBQUssRUFDTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE1BQU0sRUFBVSxNQUFNLFdBQVcsQ0FBQztBQUczQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFZckQ7SUFBMkMseUNBQWU7SUE0QnhELCtCQUFvQixLQUEwQjtRQUE5QyxZQUNFLGtCQUFNLEtBQUssQ0FBQyxTQUNiO1FBakJELHNCQUFnQixHQUFvQyxJQUFJLFlBQVksRUFBcUIsQ0FBQztRQUUxRixxQkFBZSxHQUFvQyxJQUFJLFlBQVksRUFBcUIsQ0FBQztRQUV6RixhQUFPLEdBQWEsRUFBRSxDQUFDOztJQWF2QixDQUFDOzhCQTlCVSxxQkFBcUI7SUFvQmhDLHNCQUFJLHlDQUFNO2FBQVYsVUFBVyxlQUFnQztZQUN6QyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzFDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDakIsMEVBQTBFO2dCQUMxRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDYjtRQUNILENBQUM7OztPQUFBO0lBTUQsa0RBQWtCLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVELG9DQUFJLEdBQUo7UUFBQSxpQkFLQztRQUpDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsVUFBQyxLQUF3QixJQUFLLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBakMsQ0FBaUMsQ0FBQyxDQUFDO1FBQ3RHLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGlCQUFpQixFQUFFLFVBQUMsS0FBd0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFoQyxDQUFnQyxDQUFDLENBQUM7UUFDcEcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7O2dCQWIwQixtQkFBbUIsdUJBQWpDLElBQUk7O0lBeEJqQjtRQURDLEtBQUssRUFBRTs0REFDYztJQUV0QjtRQURDLEtBQUssRUFBRTswREFDUztJQUVqQjtRQURDLEtBQUssRUFBRTtzREFDRTtJQUVWO1FBREMsS0FBSyxFQUFFO2dFQUM0QjtJQUdwQztRQURDLE1BQU0sRUFBRTttRUFDaUY7SUFFMUY7UUFEQyxNQUFNLEVBQUU7a0VBQ2dGO0lBS3pGO1FBREMsWUFBWSxDQUFDLGVBQWUsQ0FBQzt1REFPN0I7SUExQlUscUJBQXFCO1FBVmpDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsUUFBUSxFQUFFLDZCQUE2QjtZQUN2QyxTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHVCQUFxQixFQUFyQixDQUFxQixDQUFDO2lCQUNyRDthQUNGO1NBQ0YsQ0FBQztRQTZCYSxXQUFBLElBQUksRUFBRSxDQUFBO09BNUJSLHFCQUFxQixDQTBDakM7SUFBRCw0QkFBQztDQUFBLEFBMUNELENBQTJDLGVBQWUsR0EwQ3pEO1NBMUNZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3QsXG4gIElucHV0LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmFzdGVyLCBTb3VyY2UgfSBmcm9tICdvbC9zb3VyY2UnO1xuaW1wb3J0IHsgT3BlcmF0aW9uLCBSYXN0ZXJPcGVyYXRpb25UeXBlLCBSYXN0ZXJTb3VyY2VFdmVudCB9IGZyb20gJ29sL3NvdXJjZS9SYXN0ZXInO1xuXG5pbXBvcnQgeyBMYXllckltYWdlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVyaW1hZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1zb3VyY2UtcmFzdGVyJyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VSYXN0ZXJDb21wb25lbnQpLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFNvdXJjZVJhc3RlckNvbXBvbmVudCBleHRlbmRzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBpbnN0YW5jZTogUmFzdGVyO1xuXG4gIEBJbnB1dCgpXG4gIG9wZXJhdGlvbj86IE9wZXJhdGlvbjtcbiAgQElucHV0KClcbiAgdGhyZWFkcz86IG51bWJlcjtcbiAgQElucHV0KClcbiAgbGliPzogYW55O1xuICBASW5wdXQoKVxuICBvcGVyYXRpb25UeXBlPzogUmFzdGVyT3BlcmF0aW9uVHlwZTtcblxuICBAT3V0cHV0KClcbiAgYmVmb3JlT3BlcmF0aW9uczogRXZlbnRFbWl0dGVyPFJhc3RlclNvdXJjZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8UmFzdGVyU291cmNlRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBhZnRlck9wZXJhdGlvbnM6IEV2ZW50RW1pdHRlcjxSYXN0ZXJTb3VyY2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFJhc3RlclNvdXJjZUV2ZW50PigpO1xuXG4gIHNvdXJjZXM6IFNvdXJjZVtdID0gW107XG5cbiAgQENvbnRlbnRDaGlsZChTb3VyY2VDb21wb25lbnQpXG4gIHNldCBzb3VyY2Uoc291cmNlQ29tcG9uZW50OiBTb3VyY2VDb21wb25lbnQpIHtcbiAgICB0aGlzLnNvdXJjZXMgPSBbc291cmNlQ29tcG9uZW50Lmluc3RhbmNlXTtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgLy8gT3BlbmxheWVyIGRvZXNuJ3QgaGFuZGxlIHNvdXJjZXMgdXBkYXRlLiBKdXN0IHJlY3JlYXRlIFJhc3RlciBpbnN0YW5jZS5cbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgbGF5ZXI6IExheWVySW1hZ2VDb21wb25lbnQpIHtcbiAgICBzdXBlcihsYXllcik7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgUmFzdGVyKHRoaXMpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2JlZm9yZW9wZXJhdGlvbnMnLCAoZXZlbnQ6IFJhc3RlclNvdXJjZUV2ZW50KSA9PiB0aGlzLmJlZm9yZU9wZXJhdGlvbnMuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2FmdGVyb3BlcmF0aW9ucycsIChldmVudDogUmFzdGVyU291cmNlRXZlbnQpID0+IHRoaXMuYWZ0ZXJPcGVyYXRpb25zLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLl9yZWdpc3Rlcih0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19