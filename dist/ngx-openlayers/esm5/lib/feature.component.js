import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { Feature } from 'ol';
import { SourceVectorComponent } from './sources/vector.component';
var FeatureComponent = /** @class */ (function () {
    function FeatureComponent(host) {
        this.host = host;
        this.componentType = 'feature';
    }
    FeatureComponent.prototype.ngOnInit = function () {
        this.instance = new Feature();
        if (this.id !== undefined) {
            this.instance.setId(this.id);
        }
        this.host.instance.addFeature(this.instance);
    };
    FeatureComponent.prototype.ngOnDestroy = function () {
        this.host.instance.removeFeature(this.instance);
    };
    FeatureComponent.prototype.ngOnChanges = function (changes) {
        if (this.instance) {
            this.instance.setId(this.id);
        }
    };
    FeatureComponent.ctorParameters = function () { return [
        { type: SourceVectorComponent }
    ]; };
    __decorate([
        Input()
    ], FeatureComponent.prototype, "id", void 0);
    FeatureComponent = __decorate([
        Component({
            selector: 'aol-feature',
            template: " <ng-content></ng-content> "
        })
    ], FeatureComponent);
    return FeatureComponent;
}());
export { FeatureComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9mZWF0dXJlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBZ0MsS0FBSyxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sSUFBSSxDQUFDO0FBQzdCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBTW5FO0lBT0UsMEJBQW9CLElBQTJCO1FBQTNCLFNBQUksR0FBSixJQUFJLENBQXVCO1FBTnhDLGtCQUFhLEdBQUcsU0FBUyxDQUFDO0lBTWlCLENBQUM7SUFFbkQsbUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUM5QixJQUFJLElBQUksQ0FBQyxFQUFFLEtBQUssU0FBUyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUM5QjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELHNDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxzQ0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUM5QjtJQUNILENBQUM7O2dCQWxCeUIscUJBQXFCOztJQUYvQztRQURDLEtBQUssRUFBRTtnREFDd0I7SUFMckIsZ0JBQWdCO1FBSjVCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSw2QkFBNkI7U0FDeEMsQ0FBQztPQUNXLGdCQUFnQixDQTBCNUI7SUFBRCx1QkFBQztDQUFBLEFBMUJELElBMEJDO1NBMUJZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgSW5wdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZlYXR1cmUgfSBmcm9tICdvbCc7XG5pbXBvcnQgeyBTb3VyY2VWZWN0b3JDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZXMvdmVjdG9yLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1mZWF0dXJlJyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxufSlcbmV4cG9ydCBjbGFzcyBGZWF0dXJlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ2ZlYXR1cmUnO1xuICBwdWJsaWMgaW5zdGFuY2U6IEZlYXR1cmU7XG5cbiAgQElucHV0KClcbiAgaWQ6IHN0cmluZyB8IG51bWJlciB8IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhvc3Q6IFNvdXJjZVZlY3RvckNvbXBvbmVudCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IEZlYXR1cmUoKTtcbiAgICBpZiAodGhpcy5pZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldElkKHRoaXMuaWQpO1xuICAgIH1cbiAgICB0aGlzLmhvc3QuaW5zdGFuY2UuYWRkRmVhdHVyZSh0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5yZW1vdmVGZWF0dXJlKHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldElkKHRoaXMuaWQpO1xuICAgIH1cbiAgfVxufVxuIl19