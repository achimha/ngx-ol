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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFzdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL3NvdXJjZXMvcmFzdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxZQUFZLEVBQ1osWUFBWSxFQUNaLFVBQVUsRUFDVixJQUFJLEVBQ0osS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsTUFBTSxFQUFVLE1BQU0sV0FBVyxDQUFDO0FBRzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVlyRDtJQUEyQyx5Q0FBZTtJQTRCeEQsK0JBQW9CLEtBQTBCO1FBQTlDLFlBQ0Usa0JBQU0sS0FBSyxDQUFDLFNBQ2I7UUFqQkQsc0JBQWdCLEdBQW9DLElBQUksWUFBWSxFQUFxQixDQUFDO1FBRTFGLHFCQUFlLEdBQW9DLElBQUksWUFBWSxFQUFxQixDQUFDO1FBRXpGLGFBQU8sR0FBYSxFQUFFLENBQUM7O0lBYXZCLENBQUM7OEJBOUJVLHFCQUFxQjtJQW9CaEMsc0JBQUkseUNBQU07YUFBVixVQUFXLGVBQWdDO1lBQ3pDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDMUMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQiwwRUFBMEU7Z0JBQzFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNiO1FBQ0gsQ0FBQzs7O09BQUE7SUFNRCxrREFBa0IsR0FBbEI7UUFDRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRUQsb0NBQUksR0FBSjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxVQUFDLEtBQXdCLElBQUssT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFqQyxDQUFpQyxDQUFDLENBQUM7UUFDdEcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsVUFBQyxLQUF3QixJQUFLLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQWhDLENBQWdDLENBQUMsQ0FBQztRQUNwRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7Z0JBYjBCLG1CQUFtQix1QkFBakMsSUFBSTs7SUF4QmpCO1FBREMsS0FBSyxFQUFFOzREQUNjO0lBRXRCO1FBREMsS0FBSyxFQUFFOzBEQUNTO0lBRWpCO1FBREMsS0FBSyxFQUFFO3NEQUNFO0lBRVY7UUFEQyxLQUFLLEVBQUU7Z0VBQzRCO0lBR3BDO1FBREMsTUFBTSxFQUFFO21FQUNpRjtJQUUxRjtRQURDLE1BQU0sRUFBRTtrRUFDZ0Y7SUFLekY7UUFEQyxZQUFZLENBQUMsZUFBZSxDQUFDO3VEQU83QjtJQTFCVSxxQkFBcUI7UUFWakMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixRQUFRLEVBQUUsNkJBQTZCO1lBQ3ZDLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsZUFBZTtvQkFDeEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsdUJBQXFCLEVBQXJCLENBQXFCLENBQUM7aUJBQ3JEO2FBQ0Y7U0FDRixDQUFDO1FBNkJhLFdBQUEsSUFBSSxFQUFFLENBQUE7T0E1QlIscUJBQXFCLENBMENqQztJQUFELDRCQUFDO0NBQUEsQUExQ0QsQ0FBMkMsZUFBZSxHQTBDekQ7U0ExQ1kscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSYXN0ZXIsIFNvdXJjZSB9IGZyb20gJ29sL3NvdXJjZSc7XG5pbXBvcnQgeyBPcGVyYXRpb24sIFJhc3Rlck9wZXJhdGlvblR5cGUsIFJhc3RlclNvdXJjZUV2ZW50IH0gZnJvbSAnb2wvc291cmNlL1Jhc3Rlcic7XG5cbmltcG9ydCB7IExheWVySW1hZ2VDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJpbWFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS1yYXN0ZXInLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFNvdXJjZUNvbXBvbmVudCxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZVJhc3RlckNvbXBvbmVudCksXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU291cmNlUmFzdGVyQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIGluc3RhbmNlOiBSYXN0ZXI7XG5cbiAgQElucHV0KClcbiAgb3BlcmF0aW9uPzogT3BlcmF0aW9uO1xuICBASW5wdXQoKVxuICB0aHJlYWRzPzogbnVtYmVyO1xuICBASW5wdXQoKVxuICBsaWI/OiBhbnk7XG4gIEBJbnB1dCgpXG4gIG9wZXJhdGlvblR5cGU/OiBSYXN0ZXJPcGVyYXRpb25UeXBlO1xuXG4gIEBPdXRwdXQoKVxuICBiZWZvcmVPcGVyYXRpb25zOiBFdmVudEVtaXR0ZXI8UmFzdGVyU291cmNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxSYXN0ZXJTb3VyY2VFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIGFmdGVyT3BlcmF0aW9uczogRXZlbnRFbWl0dGVyPFJhc3RlclNvdXJjZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8UmFzdGVyU291cmNlRXZlbnQ+KCk7XG5cbiAgc291cmNlczogU291cmNlW10gPSBbXTtcblxuICBAQ29udGVudENoaWxkKFNvdXJjZUNvbXBvbmVudClcbiAgc2V0IHNvdXJjZShzb3VyY2VDb21wb25lbnQ6IFNvdXJjZUNvbXBvbmVudCkge1xuICAgIHRoaXMuc291cmNlcyA9IFtzb3VyY2VDb21wb25lbnQuaW5zdGFuY2VdO1xuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XG4gICAgICAvLyBPcGVubGF5ZXIgZG9lc24ndCBoYW5kbGUgc291cmNlcyB1cGRhdGUuIEp1c3QgcmVjcmVhdGUgUmFzdGVyIGluc3RhbmNlLlxuICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBsYXllcjogTGF5ZXJJbWFnZUNvbXBvbmVudCkge1xuICAgIHN1cGVyKGxheWVyKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBSYXN0ZXIodGhpcyk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignYmVmb3Jlb3BlcmF0aW9ucycsIChldmVudDogUmFzdGVyU291cmNlRXZlbnQpID0+IHRoaXMuYmVmb3JlT3BlcmF0aW9ucy5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignYWZ0ZXJvcGVyYXRpb25zJywgKGV2ZW50OiBSYXN0ZXJTb3VyY2VFdmVudCkgPT4gdGhpcy5hZnRlck9wZXJhdGlvbnMuZW1pdChldmVudCkpO1xuICAgIHRoaXMuX3JlZ2lzdGVyKHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=