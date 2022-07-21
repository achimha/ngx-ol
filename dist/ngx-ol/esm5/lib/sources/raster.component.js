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
        ContentChild(SourceComponent, { static: false })
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFzdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9zb3VyY2VzL3Jhc3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksRUFDWixVQUFVLEVBQ1YsSUFBSSxFQUNKLEtBQUssRUFDTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE1BQU0sRUFBVSxNQUFNLFdBQVcsQ0FBQztBQUczQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFZckQ7SUFBMkMseUNBQWU7SUE0QnhELCtCQUFvQixLQUEwQjtRQUE5QyxZQUNFLGtCQUFNLEtBQUssQ0FBQyxTQUNiO1FBakJELHNCQUFnQixHQUFvQyxJQUFJLFlBQVksRUFBcUIsQ0FBQztRQUUxRixxQkFBZSxHQUFvQyxJQUFJLFlBQVksRUFBcUIsQ0FBQztRQUV6RixhQUFPLEdBQWEsRUFBRSxDQUFDOztJQWF2QixDQUFDOzhCQTlCVSxxQkFBcUI7SUFvQmhDLHNCQUFJLHlDQUFNO2FBQVYsVUFBVyxlQUFnQztZQUN6QyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzFDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDakIsMEVBQTBFO2dCQUMxRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDYjtRQUNILENBQUM7OztPQUFBO0lBTUQsa0RBQWtCLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVELG9DQUFJLEdBQUo7UUFBQSxpQkFLQztRQUpDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsVUFBQyxLQUF3QixJQUFLLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBakMsQ0FBaUMsQ0FBQyxDQUFDO1FBQ3RHLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGlCQUFpQixFQUFFLFVBQUMsS0FBd0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFoQyxDQUFnQyxDQUFDLENBQUM7UUFDcEcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7O2dCQWIwQixtQkFBbUIsdUJBQWpDLElBQUk7O0lBeEJqQjtRQURDLEtBQUssRUFBRTs0REFDYztJQUV0QjtRQURDLEtBQUssRUFBRTswREFDUztJQUVqQjtRQURDLEtBQUssRUFBRTtzREFDRTtJQUVWO1FBREMsS0FBSyxFQUFFO2dFQUMwQjtJQUdsQztRQURDLE1BQU0sRUFBRTttRUFDaUY7SUFFMUY7UUFEQyxNQUFNLEVBQUU7a0VBQ2dGO0lBS3pGO1FBREMsWUFBWSxDQUFDLGVBQWUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQzt1REFPaEQ7SUExQlUscUJBQXFCO1FBVmpDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsUUFBUSxFQUFFLDZCQUE2QjtZQUN2QyxTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHVCQUFxQixFQUFyQixDQUFxQixDQUFDO2lCQUNyRDthQUNGO1NBQ0YsQ0FBQztRQTZCYSxXQUFBLElBQUksRUFBRSxDQUFBO09BNUJSLHFCQUFxQixDQTBDakM7SUFBRCw0QkFBQztDQUFBLEFBMUNELENBQTJDLGVBQWUsR0EwQ3pEO1NBMUNZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3QsXG4gIElucHV0LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmFzdGVyLCBTb3VyY2UgfSBmcm9tICdvbC9zb3VyY2UnO1xuaW1wb3J0IHsgT3BlcmF0aW9uLCBSYXN0ZXJTb3VyY2VFdmVudCB9IGZyb20gJ29sL3NvdXJjZS9SYXN0ZXInO1xuXG5pbXBvcnQgeyBMYXllckltYWdlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVyaW1hZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1zb3VyY2UtcmFzdGVyJyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VSYXN0ZXJDb21wb25lbnQpLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFNvdXJjZVJhc3RlckNvbXBvbmVudCBleHRlbmRzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBpbnN0YW5jZTogUmFzdGVyO1xuXG4gIEBJbnB1dCgpXG4gIG9wZXJhdGlvbj86IE9wZXJhdGlvbjtcbiAgQElucHV0KClcbiAgdGhyZWFkcz86IG51bWJlcjtcbiAgQElucHV0KClcbiAgbGliPzogYW55O1xuICBASW5wdXQoKVxuICBvcGVyYXRpb25UeXBlPzogJ3BpeGVsJyB8ICdpbWFnZSc7XG5cbiAgQE91dHB1dCgpXG4gIGJlZm9yZU9wZXJhdGlvbnM6IEV2ZW50RW1pdHRlcjxSYXN0ZXJTb3VyY2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFJhc3RlclNvdXJjZUV2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgYWZ0ZXJPcGVyYXRpb25zOiBFdmVudEVtaXR0ZXI8UmFzdGVyU291cmNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxSYXN0ZXJTb3VyY2VFdmVudD4oKTtcblxuICBzb3VyY2VzOiBTb3VyY2VbXSA9IFtdO1xuXG4gIEBDb250ZW50Q2hpbGQoU291cmNlQ29tcG9uZW50LCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgc2V0IHNvdXJjZShzb3VyY2VDb21wb25lbnQ6IFNvdXJjZUNvbXBvbmVudCkge1xuICAgIHRoaXMuc291cmNlcyA9IFtzb3VyY2VDb21wb25lbnQuaW5zdGFuY2VdO1xuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XG4gICAgICAvLyBPcGVubGF5ZXIgZG9lc24ndCBoYW5kbGUgc291cmNlcyB1cGRhdGUuIEp1c3QgcmVjcmVhdGUgUmFzdGVyIGluc3RhbmNlLlxuICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBsYXllcjogTGF5ZXJJbWFnZUNvbXBvbmVudCkge1xuICAgIHN1cGVyKGxheWVyKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBSYXN0ZXIodGhpcyk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignYmVmb3Jlb3BlcmF0aW9ucycsIChldmVudDogUmFzdGVyU291cmNlRXZlbnQpID0+IHRoaXMuYmVmb3JlT3BlcmF0aW9ucy5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignYWZ0ZXJvcGVyYXRpb25zJywgKGV2ZW50OiBSYXN0ZXJTb3VyY2VFdmVudCkgPT4gdGhpcy5hZnRlck9wZXJhdGlvbnMuZW1pdChldmVudCkpO1xuICAgIHRoaXMuX3JlZ2lzdGVyKHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=