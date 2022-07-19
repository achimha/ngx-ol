import { __decorate, __extends, __param } from "tslib";
import { Component, Host, Input, forwardRef } from '@angular/core';
import { Vector } from 'ol/source';
import { LayerVectorComponent } from '../layers/layervector.component';
import { SourceComponent } from './source.component';
var SourceVectorComponent = /** @class */ (function (_super) {
    __extends(SourceVectorComponent, _super);
    function SourceVectorComponent(layer) {
        return _super.call(this, layer) || this;
    }
    SourceVectorComponent_1 = SourceVectorComponent;
    SourceVectorComponent.prototype.ngOnInit = function () {
        this.instance = new Vector(this);
        this.host.instance.setSource(this.instance);
    };
    var SourceVectorComponent_1;
    SourceVectorComponent.ctorParameters = function () { return [
        { type: LayerVectorComponent, decorators: [{ type: Host }] }
    ]; };
    __decorate([
        Input()
    ], SourceVectorComponent.prototype, "overlaps", void 0);
    __decorate([
        Input()
    ], SourceVectorComponent.prototype, "useSpatialIndex", void 0);
    __decorate([
        Input()
    ], SourceVectorComponent.prototype, "wrapX", void 0);
    __decorate([
        Input()
    ], SourceVectorComponent.prototype, "url", void 0);
    __decorate([
        Input()
    ], SourceVectorComponent.prototype, "format", void 0);
    __decorate([
        Input()
    ], SourceVectorComponent.prototype, "strategy", void 0);
    SourceVectorComponent = SourceVectorComponent_1 = __decorate([
        Component({
            selector: 'aol-source-vector',
            template: " <ng-content></ng-content> ",
            providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceVectorComponent_1; }) }]
        }),
        __param(0, Host())
    ], SourceVectorComponent);
    return SourceVectorComponent;
}(SourceComponent));
export { SourceVectorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL3NvdXJjZXMvdmVjdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFVLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRW5DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVFyRDtJQUEyQyx5Q0FBZTtJQWV4RCwrQkFBb0IsS0FBMkI7ZUFDN0Msa0JBQU0sS0FBSyxDQUFDO0lBQ2QsQ0FBQzs4QkFqQlUscUJBQXFCO0lBbUJoQyx3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7OztnQkFQMEIsb0JBQW9CLHVCQUFsQyxJQUFJOztJQVpqQjtRQURDLEtBQUssRUFBRTsyREFDVTtJQUVsQjtRQURDLEtBQUssRUFBRTtrRUFDaUI7SUFFekI7UUFEQyxLQUFLLEVBQUU7d0RBQ087SUFFZjtRQURDLEtBQUssRUFBRTtzREFDSTtJQUVaO1FBREMsS0FBSyxFQUFFO3lEQUNRO0lBRWhCO1FBREMsS0FBSyxFQUFFOzJEQUNrQjtJQWJmLHFCQUFxQjtRQUxqQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFFBQVEsRUFBRSw2QkFBNkI7WUFDdkMsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHVCQUFxQixFQUFyQixDQUFxQixDQUFDLEVBQUUsQ0FBQztTQUNoRyxDQUFDO1FBZ0JhLFdBQUEsSUFBSSxFQUFFLENBQUE7T0FmUixxQkFBcUIsQ0F1QmpDO0lBQUQsNEJBQUM7Q0FBQSxBQXZCRCxDQUEyQyxlQUFlLEdBdUJ6RDtTQXZCWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3QsIElucHV0LCBPbkluaXQsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJ29sL3NvdXJjZSc7XG5pbXBvcnQgRmVhdHVyZSBmcm9tICdvbC9mb3JtYXQvRmVhdHVyZSc7XG5pbXBvcnQgeyBMYXllclZlY3RvckNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcnZlY3Rvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UuY29tcG9uZW50JztcbmltcG9ydCB7IExvYWRpbmdTdHJhdGVneSB9IGZyb20gJ29sL3NvdXJjZS9WZWN0b3InO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtc291cmNlLXZlY3RvcicsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZVZlY3RvckNvbXBvbmVudCkgfV0sXG59KVxuZXhwb3J0IGNsYXNzIFNvdXJjZVZlY3RvckNvbXBvbmVudCBleHRlbmRzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGluc3RhbmNlOiBWZWN0b3I7XG4gIEBJbnB1dCgpXG4gIG92ZXJsYXBzOiBib29sZWFuO1xuICBASW5wdXQoKVxuICB1c2VTcGF0aWFsSW5kZXg6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHdyYXBYOiBib29sZWFuO1xuICBASW5wdXQoKVxuICB1cmw6IHN0cmluZztcbiAgQElucHV0KClcbiAgZm9ybWF0OiBGZWF0dXJlO1xuICBASW5wdXQoKVxuICBzdHJhdGVneTogTG9hZGluZ1N0cmF0ZWd5O1xuXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgbGF5ZXI6IExheWVyVmVjdG9yQ29tcG9uZW50KSB7XG4gICAgc3VwZXIobGF5ZXIpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBWZWN0b3IodGhpcyk7XG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFNvdXJjZSh0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19