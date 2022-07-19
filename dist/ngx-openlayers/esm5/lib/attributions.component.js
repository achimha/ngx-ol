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
            this.instance = this.attributions.map(function (cmp) { return cmp.instance; });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2F0dHJpYnV0aW9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFM0YsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBTS9EO0lBTUUsK0JBQTRCLE1BQXVCO1FBQXZCLFdBQU0sR0FBTixNQUFNLENBQWlCO0lBQUcsQ0FBQztJQUV2RCxvQ0FBb0M7SUFDcEMsK0NBQWUsR0FBZjtRQUNFLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEdBQUcsQ0FBQyxRQUFRLEVBQVosQ0FBWSxDQUFDLENBQUM7WUFDN0QsdURBQXVEO1lBQ3ZELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDckQ7SUFDSCxDQUFDOztnQkFUbUMsZUFBZSx1QkFBdEMsSUFBSTs7SUFGakI7UUFEQyxlQUFlLENBQUMsb0JBQW9CLENBQUM7K0RBQ1E7SUFKbkMscUJBQXFCO1FBSmpDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsUUFBUSxFQUFFLDJCQUEyQjtTQUN0QyxDQUFDO1FBT2EsV0FBQSxJQUFJLEVBQUUsQ0FBQTtPQU5SLHFCQUFxQixDQWdCakM7SUFBRCw0QkFBQztDQUFBLEFBaEJELElBZ0JDO1NBaEJZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBIb3N0LCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF0dHJpYnV0aW9uIH0gZnJvbSAnb2wvY29udHJvbCc7XG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZXMvc291cmNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBdHRyaWJ1dGlvbkNvbXBvbmVudCB9IGZyb20gJy4vYXR0cmlidXRpb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWF0dHJpYnV0aW9ucycsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG59KVxuZXhwb3J0IGNsYXNzIEF0dHJpYnV0aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBpbnN0YW5jZTogQXJyYXk8QXR0cmlidXRpb24+O1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oQXR0cmlidXRpb25Db21wb25lbnQpXG4gIGF0dHJpYnV0aW9uczogUXVlcnlMaXN0PEF0dHJpYnV0aW9uQ29tcG9uZW50PjtcblxuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgc291cmNlOiBTb3VyY2VDb21wb25lbnQpIHt9XG5cbiAgLyogd2UgY2FuIGRvIHRoaXMgYXQgdGhlIHZlcnkgZW5kICovXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5hdHRyaWJ1dGlvbnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gdGhpcy5hdHRyaWJ1dGlvbnMubWFwKChjbXApID0+IGNtcC5pbnN0YW5jZSk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc2V0dGluZyBhdHRyaWJ1dGlvbnM6JywgdGhpcy5pbnN0YW5jZSk7XG4gICAgICB0aGlzLnNvdXJjZS5pbnN0YW5jZS5zZXRBdHRyaWJ1dGlvbnModGhpcy5pbnN0YW5jZSk7XG4gICAgfVxuICB9XG59XG4iXX0=