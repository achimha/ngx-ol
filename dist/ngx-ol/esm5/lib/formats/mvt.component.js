import { __decorate, __extends } from "tslib";
import { Component, forwardRef, Input } from '@angular/core';
import { FormatComponent } from './format.component';
import { MVT } from 'ol/format';
var FormatMVTComponent = /** @class */ (function (_super) {
    __extends(FormatMVTComponent, _super);
    function FormatMVTComponent() {
        var _this = _super.call(this) || this;
        _this.instance = new MVT(_this);
        return _this;
    }
    FormatMVTComponent_1 = FormatMVTComponent;
    var FormatMVTComponent_1;
    __decorate([
        Input()
    ], FormatMVTComponent.prototype, "featureClass", void 0);
    __decorate([
        Input()
    ], FormatMVTComponent.prototype, "geometryName", void 0);
    __decorate([
        Input()
    ], FormatMVTComponent.prototype, "layerName", void 0);
    __decorate([
        Input()
    ], FormatMVTComponent.prototype, "layers", void 0);
    FormatMVTComponent = FormatMVTComponent_1 = __decorate([
        Component({
            selector: 'aol-format-mvt',
            template: '',
            providers: [{ provide: FormatComponent, useExisting: forwardRef(function () { return FormatMVTComponent_1; }) }]
        })
    ], FormatMVTComponent);
    return FormatMVTComponent;
}(FormatComponent));
export { FormatMVTComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXZ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9mb3JtYXRzL212dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQVNoQztJQUF3QyxzQ0FBZTtJQWNyRDtRQUFBLFlBQ0UsaUJBQU8sU0FFUjtRQURDLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSSxDQUFDLENBQUM7O0lBQ2hDLENBQUM7MkJBakJVLGtCQUFrQjs7SUFJN0I7UUFEQyxLQUFLLEVBQUU7NERBR21HO0lBRTNHO1FBREMsS0FBSyxFQUFFOzREQUNhO0lBRXJCO1FBREMsS0FBSyxFQUFFO3lEQUNVO0lBRWxCO1FBREMsS0FBSyxFQUFFO3NEQUNTO0lBWk4sa0JBQWtCO1FBTDlCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUFFLEVBQUU7WUFDWixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsb0JBQWtCLEVBQWxCLENBQWtCLENBQUMsRUFBRSxDQUFDO1NBQzdGLENBQUM7T0FDVyxrQkFBa0IsQ0FrQjlCO0lBQUQseUJBQUM7Q0FBQSxBQWxCRCxDQUF3QyxlQUFlLEdBa0J0RDtTQWxCWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtYXRDb21wb25lbnQgfSBmcm9tICcuL2Zvcm1hdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTVZUIH0gZnJvbSAnb2wvZm9ybWF0JztcbmltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSAnb2wvZ2VvbSc7XG5pbXBvcnQgR2VvbWV0cnlUeXBlIGZyb20gJ29sL2dlb20vR2VvbWV0cnlUeXBlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWZvcm1hdC1tdnQnLFxuICB0ZW1wbGF0ZTogJycsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogRm9ybWF0Q29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBGb3JtYXRNVlRDb21wb25lbnQpIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtYXRNVlRDb21wb25lbnQgZXh0ZW5kcyBGb3JtYXRDb21wb25lbnQge1xuICBpbnN0YW5jZTogTVZUO1xuXG4gIEBJbnB1dCgpXG4gIGZlYXR1cmVDbGFzczpcbiAgICB8ICgoZ2VvbTogR2VvbWV0cnkgfCB7IFtrOiBzdHJpbmddOiBhbnkgfSkgPT4gYW55KVxuICAgIHwgKChnZW9tOiBHZW9tZXRyeVR5cGUsIGFyZzI6IG51bWJlcltdLCBhcmczOiBudW1iZXJbXSB8IG51bWJlcltdW10sIGFyZzQ6IHsgW2s6IHN0cmluZ106IGFueSB9KSA9PiBhbnkpO1xuICBASW5wdXQoKVxuICBnZW9tZXRyeU5hbWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgbGF5ZXJOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGxheWVyczogc3RyaW5nW107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IE1WVCh0aGlzKTtcbiAgfVxufVxuIl19