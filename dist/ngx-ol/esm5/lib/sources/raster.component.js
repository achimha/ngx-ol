import * as tslib_1 from "tslib";
import { Component, ContentChild, EventEmitter, forwardRef, Host, Input, Output, } from '@angular/core';
import { Raster } from 'ol/source';
import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';
var SourceRasterComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SourceRasterComponent, _super);
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
    tslib_1.__decorate([
        Input()
    ], SourceRasterComponent.prototype, "operation", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceRasterComponent.prototype, "threads", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceRasterComponent.prototype, "lib", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceRasterComponent.prototype, "operationType", void 0);
    tslib_1.__decorate([
        Output()
    ], SourceRasterComponent.prototype, "beforeOperations", void 0);
    tslib_1.__decorate([
        Output()
    ], SourceRasterComponent.prototype, "afterOperations", void 0);
    tslib_1.__decorate([
        ContentChild(SourceComponent, { static: false })
    ], SourceRasterComponent.prototype, "source", null);
    SourceRasterComponent = SourceRasterComponent_1 = tslib_1.__decorate([
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
        tslib_1.__param(0, Host())
    ], SourceRasterComponent);
    return SourceRasterComponent;
}(SourceComponent));
export { SourceRasterComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFzdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9zb3VyY2VzL3Jhc3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksRUFDWixVQUFVLEVBQ1YsSUFBSSxFQUNKLEtBQUssRUFDTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE1BQU0sRUFBVSxNQUFNLFdBQVcsQ0FBQztBQUczQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFZckQ7SUFBMkMsaURBQWU7SUE0QnhELCtCQUFvQixLQUEwQjtRQUE5QyxZQUNFLGtCQUFNLEtBQUssQ0FBQyxTQUNiO1FBakJELHNCQUFnQixHQUFvQyxJQUFJLFlBQVksRUFBcUIsQ0FBQztRQUUxRixxQkFBZSxHQUFvQyxJQUFJLFlBQVksRUFBcUIsQ0FBQztRQUV6RixhQUFPLEdBQWEsRUFBRSxDQUFDOztJQWF2QixDQUFDOzhCQTlCVSxxQkFBcUI7SUFvQmhDLHNCQUFJLHlDQUFNO2FBQVYsVUFBVyxlQUFnQztZQUN6QyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzFDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDakIsMEVBQTBFO2dCQUMxRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDYjtRQUNILENBQUM7OztPQUFBO0lBTUQsa0RBQWtCLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVELG9DQUFJLEdBQUo7UUFBQSxpQkFLQztRQUpDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsVUFBQyxLQUF3QixJQUFLLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBakMsQ0FBaUMsQ0FBQyxDQUFDO1FBQ3RHLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGlCQUFpQixFQUFFLFVBQUMsS0FBd0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFoQyxDQUFnQyxDQUFDLENBQUM7UUFDcEcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7O2dCQWIwQixtQkFBbUIsdUJBQWpDLElBQUk7O0lBeEJqQjtRQURDLEtBQUssRUFBRTs0REFDYztJQUV0QjtRQURDLEtBQUssRUFBRTswREFDUztJQUVqQjtRQURDLEtBQUssRUFBRTtzREFDRTtJQUVWO1FBREMsS0FBSyxFQUFFO2dFQUMwQjtJQUdsQztRQURDLE1BQU0sRUFBRTttRUFDaUY7SUFFMUY7UUFEQyxNQUFNLEVBQUU7a0VBQ2dGO0lBS3pGO1FBREMsWUFBWSxDQUFDLGVBQWUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQzt1REFPaEQ7SUExQlUscUJBQXFCO1FBVmpDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsUUFBUSxFQUFFLDZCQUE2QjtZQUN2QyxTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHVCQUFxQixFQUFyQixDQUFxQixDQUFDO2lCQUNyRDthQUNGO1NBQ0YsQ0FBQztRQTZCYSxtQkFBQSxJQUFJLEVBQUUsQ0FBQTtPQTVCUixxQkFBcUIsQ0EwQ2pDO0lBQUQsNEJBQUM7Q0FBQSxBQTFDRCxDQUEyQyxlQUFlLEdBMEN6RDtTQTFDWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJhc3RlciwgU291cmNlIH0gZnJvbSAnb2wvc291cmNlJztcbmltcG9ydCB7IE9wZXJhdGlvbiwgUmFzdGVyU291cmNlRXZlbnQgfSBmcm9tICdvbC9zb3VyY2UvUmFzdGVyJztcblxuaW1wb3J0IHsgTGF5ZXJJbWFnZUNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcmltYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtc291cmNlLXJhc3RlcicsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlUmFzdGVyQ29tcG9uZW50KSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTb3VyY2VSYXN0ZXJDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgaW5zdGFuY2U6IFJhc3RlcjtcblxuICBASW5wdXQoKVxuICBvcGVyYXRpb24/OiBPcGVyYXRpb247XG4gIEBJbnB1dCgpXG4gIHRocmVhZHM/OiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIGxpYj86IGFueTtcbiAgQElucHV0KClcbiAgb3BlcmF0aW9uVHlwZT86ICdwaXhlbCcgfCAnaW1hZ2UnO1xuXG4gIEBPdXRwdXQoKVxuICBiZWZvcmVPcGVyYXRpb25zOiBFdmVudEVtaXR0ZXI8UmFzdGVyU291cmNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxSYXN0ZXJTb3VyY2VFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIGFmdGVyT3BlcmF0aW9uczogRXZlbnRFbWl0dGVyPFJhc3RlclNvdXJjZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8UmFzdGVyU291cmNlRXZlbnQ+KCk7XG5cbiAgc291cmNlczogU291cmNlW10gPSBbXTtcblxuICBAQ29udGVudENoaWxkKFNvdXJjZUNvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIHNldCBzb3VyY2Uoc291cmNlQ29tcG9uZW50OiBTb3VyY2VDb21wb25lbnQpIHtcbiAgICB0aGlzLnNvdXJjZXMgPSBbc291cmNlQ29tcG9uZW50Lmluc3RhbmNlXTtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgLy8gT3BlbmxheWVyIGRvZXNuJ3QgaGFuZGxlIHNvdXJjZXMgdXBkYXRlLiBKdXN0IHJlY3JlYXRlIFJhc3RlciBpbnN0YW5jZS5cbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgbGF5ZXI6IExheWVySW1hZ2VDb21wb25lbnQpIHtcbiAgICBzdXBlcihsYXllcik7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgUmFzdGVyKHRoaXMpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2JlZm9yZW9wZXJhdGlvbnMnLCAoZXZlbnQ6IFJhc3RlclNvdXJjZUV2ZW50KSA9PiB0aGlzLmJlZm9yZU9wZXJhdGlvbnMuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2FmdGVyb3BlcmF0aW9ucycsIChldmVudDogUmFzdGVyU291cmNlRXZlbnQpID0+IHRoaXMuYWZ0ZXJPcGVyYXRpb25zLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLl9yZWdpc3Rlcih0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19