import * as tslib_1 from "tslib";
import { Component, forwardRef, Input } from '@angular/core';
import { FormatComponent } from './format.component';
import { MVT } from 'ol/format';
var FormatMVTComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FormatMVTComponent, _super);
    function FormatMVTComponent() {
        var _this = _super.call(this) || this;
        _this.instance = new MVT(_this);
        return _this;
    }
    FormatMVTComponent_1 = FormatMVTComponent;
    var FormatMVTComponent_1;
    tslib_1.__decorate([
        Input()
    ], FormatMVTComponent.prototype, "featureClass", void 0);
    tslib_1.__decorate([
        Input()
    ], FormatMVTComponent.prototype, "geometryName", void 0);
    tslib_1.__decorate([
        Input()
    ], FormatMVTComponent.prototype, "layerName", void 0);
    tslib_1.__decorate([
        Input()
    ], FormatMVTComponent.prototype, "layers", void 0);
    FormatMVTComponent = FormatMVTComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'aol-format-mvt',
            template: '',
            providers: [{ provide: FormatComponent, useExisting: forwardRef(function () { return FormatMVTComponent_1; }) }]
        })
    ], FormatMVTComponent);
    return FormatMVTComponent;
}(FormatComponent));
export { FormatMVTComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXZ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9mb3JtYXRzL212dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQVFoQztJQUF3Qyw4Q0FBZTtJQVlyRDtRQUFBLFlBQ0UsaUJBQU8sU0FFUjtRQURDLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSSxDQUFDLENBQUM7O0lBQ2hDLENBQUM7MkJBZlUsa0JBQWtCOztJQUk3QjtRQURDLEtBQUssRUFBRTs0REFDbUI7SUFFM0I7UUFEQyxLQUFLLEVBQUU7NERBQ2E7SUFFckI7UUFEQyxLQUFLLEVBQUU7eURBQ1U7SUFFbEI7UUFEQyxLQUFLLEVBQUU7c0RBQ1M7SUFWTixrQkFBa0I7UUFMOUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQUUsRUFBRTtZQUNaLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxvQkFBa0IsRUFBbEIsQ0FBa0IsQ0FBQyxFQUFFLENBQUM7U0FDN0YsQ0FBQztPQUNXLGtCQUFrQixDQWdCOUI7SUFBRCx5QkFBQztDQUFBLEFBaEJELENBQXdDLGVBQWUsR0FnQnREO1NBaEJZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1hdENvbXBvbmVudCB9IGZyb20gJy4vZm9ybWF0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNVlQgfSBmcm9tICdvbC9mb3JtYXQnO1xuaW1wb3J0IHsgRmVhdHVyZUNsYXNzIH0gZnJvbSAnb2wvRmVhdHVyZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1mb3JtYXQtbXZ0JyxcbiAgdGVtcGxhdGU6ICcnLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IEZvcm1hdENvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRm9ybWF0TVZUQ29tcG9uZW50KSB9XSxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybWF0TVZUQ29tcG9uZW50IGV4dGVuZHMgRm9ybWF0Q29tcG9uZW50IHtcbiAgaW5zdGFuY2U6IE1WVDtcblxuICBASW5wdXQoKVxuICBmZWF0dXJlQ2xhc3M6IEZlYXR1cmVDbGFzcztcbiAgQElucHV0KClcbiAgZ2VvbWV0cnlOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGxheWVyTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBsYXllcnM6IHN0cmluZ1tdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBNVlQodGhpcyk7XG4gIH1cbn1cbiJdfQ==