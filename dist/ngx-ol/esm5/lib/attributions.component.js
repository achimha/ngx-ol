import { __decorate, __param } from "tslib";
import { Component, ContentChildren, Host } from '@angular/core';
import { SourceComponent } from './sources/source.component';
import { AttributionComponent } from './attribution.component';
var AttributionsComponent = /** @class */ (function () {
    function AttributionsComponent(source) {
        this.source = source;
    }
    /* we can do this at the very end */
    AttributionsComponent.prototype.ngAfterViewInit = function () {
        if (this.attributions.length) {
            this.instance = this.attributions.map(function (cmp) { return cmp.label; });
            // console.log('setting attributions:', this.instance);
            this.source.instance.setAttributions(this.instance);
        }
    };
    AttributionsComponent.ctorParameters = function () { return [
        { type: SourceComponent, decorators: [{ type: Host }] }
    ]; };
    __decorate([
        ContentChildren(AttributionComponent)
    ], AttributionsComponent.prototype, "attributions", void 0);
    AttributionsComponent = __decorate([
        Component({
            selector: 'aol-attributions',
            template: '<ng-content></ng-content>'
        }),
        __param(0, Host())
    ], AttributionsComponent);
    return AttributionsComponent;
}());
export { AttributionsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9hdHRyaWJ1dGlvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRTNGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQU0vRDtJQU1FLCtCQUE0QixNQUF1QjtRQUF2QixXQUFNLEdBQU4sTUFBTSxDQUFpQjtJQUFHLENBQUM7SUFFdkQsb0NBQW9DO0lBQ3BDLCtDQUFlLEdBQWY7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFO1lBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsS0FBSyxFQUFULENBQVMsQ0FBQyxDQUFDO1lBQzFELHVEQUF1RDtZQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3JEO0lBQ0gsQ0FBQzs7Z0JBVG1DLGVBQWUsdUJBQXRDLElBQUk7O0lBRmpCO1FBREMsZUFBZSxDQUFDLG9CQUFvQixDQUFDOytEQUNRO0lBSm5DLHFCQUFxQjtRQUpqQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFFBQVEsRUFBRSwyQkFBMkI7U0FDdEMsQ0FBQztRQU9hLFdBQUEsSUFBSSxFQUFFLENBQUE7T0FOUixxQkFBcUIsQ0FnQmpDO0lBQUQsNEJBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQWhCWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgSG9zdCwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdHRyaWJ1dGlvbiB9IGZyb20gJ29sL2NvbnRyb2wnO1xuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2VzL3NvdXJjZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXR0cmlidXRpb25Db21wb25lbnQgfSBmcm9tICcuL2F0dHJpYnV0aW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1hdHRyaWJ1dGlvbnMnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxufSlcbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGlvbnNDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgaW5zdGFuY2U6IEFycmF5PHN0cmluZz47XG5cbiAgQENvbnRlbnRDaGlsZHJlbihBdHRyaWJ1dGlvbkNvbXBvbmVudClcbiAgYXR0cmlidXRpb25zOiBRdWVyeUxpc3Q8QXR0cmlidXRpb25Db21wb25lbnQ+O1xuXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgcHJpdmF0ZSBzb3VyY2U6IFNvdXJjZUNvbXBvbmVudCkge31cblxuICAvKiB3ZSBjYW4gZG8gdGhpcyBhdCB0aGUgdmVyeSBlbmQgKi9cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLmF0dHJpYnV0aW9ucy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSB0aGlzLmF0dHJpYnV0aW9ucy5tYXAoKGNtcCkgPT4gY21wLmxhYmVsKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzZXR0aW5nIGF0dHJpYnV0aW9uczonLCB0aGlzLmluc3RhbmNlKTtcbiAgICAgIHRoaXMuc291cmNlLmluc3RhbmNlLnNldEF0dHJpYnV0aW9ucyh0aGlzLmluc3RhbmNlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==