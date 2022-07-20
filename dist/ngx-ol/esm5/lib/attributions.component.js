import * as tslib_1 from "tslib";
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
    tslib_1.__decorate([
        ContentChildren(AttributionComponent)
    ], AttributionsComponent.prototype, "attributions", void 0);
    AttributionsComponent = tslib_1.__decorate([
        Component({
            selector: 'aol-attributions',
            template: '<ng-content></ng-content>'
        }),
        tslib_1.__param(0, Host())
    ], AttributionsComponent);
    return AttributionsComponent;
}());
export { AttributionsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9hdHRyaWJ1dGlvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRTNGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQU0vRDtJQU1FLCtCQUE0QixNQUF1QjtRQUF2QixXQUFNLEdBQU4sTUFBTSxDQUFpQjtJQUFHLENBQUM7SUFFdkQsb0NBQW9DO0lBQ3BDLCtDQUFlLEdBQWY7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFO1lBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsS0FBSyxFQUFULENBQVMsQ0FBQyxDQUFDO1lBQzFELHVEQUF1RDtZQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3JEO0lBQ0gsQ0FBQzs7Z0JBVG1DLGVBQWUsdUJBQXRDLElBQUk7O0lBRmpCO1FBREMsZUFBZSxDQUFDLG9CQUFvQixDQUFDOytEQUNRO0lBSm5DLHFCQUFxQjtRQUpqQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFFBQVEsRUFBRSwyQkFBMkI7U0FDdEMsQ0FBQztRQU9hLG1CQUFBLElBQUksRUFBRSxDQUFBO09BTlIscUJBQXFCLENBZ0JqQztJQUFELDRCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FoQlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIEhvc3QsIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXR0cmlidXRpb24gfSBmcm9tICdvbC9jb250cm9sJztcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlcy9zb3VyY2UuY29tcG9uZW50JztcbmltcG9ydCB7IEF0dHJpYnV0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9hdHRyaWJ1dGlvbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtYXR0cmlidXRpb25zJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXR0cmlidXRpb25zQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIGluc3RhbmNlOiBBcnJheTxzdHJpbmc+O1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oQXR0cmlidXRpb25Db21wb25lbnQpXG4gIGF0dHJpYnV0aW9uczogUXVlcnlMaXN0PEF0dHJpYnV0aW9uQ29tcG9uZW50PjtcblxuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgc291cmNlOiBTb3VyY2VDb21wb25lbnQpIHt9XG5cbiAgLyogd2UgY2FuIGRvIHRoaXMgYXQgdGhlIHZlcnkgZW5kICovXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5hdHRyaWJ1dGlvbnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gdGhpcy5hdHRyaWJ1dGlvbnMubWFwKChjbXApID0+IGNtcC5sYWJlbCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc2V0dGluZyBhdHRyaWJ1dGlvbnM6JywgdGhpcy5pbnN0YW5jZSk7XG4gICAgICB0aGlzLnNvdXJjZS5pbnN0YW5jZS5zZXRBdHRyaWJ1dGlvbnModGhpcy5pbnN0YW5jZSk7XG4gICAgfVxuICB9XG59XG4iXX0=