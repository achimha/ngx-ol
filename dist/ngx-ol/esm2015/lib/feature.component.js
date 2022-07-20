import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { Feature } from 'ol';
import { SourceVectorComponent } from './sources/vector.component';
let FeatureComponent = class FeatureComponent {
    constructor(host) {
        this.host = host;
        this.componentType = 'feature';
    }
    ngOnInit() {
        this.instance = new Feature();
        if (this.id !== undefined) {
            this.instance.setId(this.id);
        }
        this.host.instance.addFeature(this.instance);
    }
    ngOnDestroy() {
        this.host.instance.removeFeature(this.instance);
    }
    ngOnChanges(changes) {
        if (this.instance) {
            this.instance.setId(this.id);
        }
    }
};
FeatureComponent.ctorParameters = () => [
    { type: SourceVectorComponent }
];
tslib_1.__decorate([
    Input()
], FeatureComponent.prototype, "id", void 0);
FeatureComponent = tslib_1.__decorate([
    Component({
        selector: 'aol-feature',
        template: ` <ng-content></ng-content> `
    })
], FeatureComponent);
export { FeatureComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvZmVhdHVyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWdDLEtBQUssRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLElBQUksQ0FBQztBQUM3QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQU1uRSxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtJQU8zQixZQUFvQixJQUEyQjtRQUEzQixTQUFJLEdBQUosSUFBSSxDQUF1QjtRQU54QyxrQkFBYSxHQUFHLFNBQVMsQ0FBQztJQU1pQixDQUFDO0lBRW5ELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDOUIsSUFBSSxJQUFJLENBQUMsRUFBRSxLQUFLLFNBQVMsRUFBRTtZQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDOUI7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDOUI7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUFuQjJCLHFCQUFxQjs7QUFGL0M7SUFEQyxLQUFLLEVBQUU7NENBQ3dCO0FBTHJCLGdCQUFnQjtJQUo1QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsYUFBYTtRQUN2QixRQUFRLEVBQUUsNkJBQTZCO0tBQ3hDLENBQUM7R0FDVyxnQkFBZ0IsQ0EwQjVCO1NBMUJZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgSW5wdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZlYXR1cmUgfSBmcm9tICdvbCc7XG5pbXBvcnQgeyBTb3VyY2VWZWN0b3JDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZXMvdmVjdG9yLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1mZWF0dXJlJyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxufSlcbmV4cG9ydCBjbGFzcyBGZWF0dXJlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ2ZlYXR1cmUnO1xuICBwdWJsaWMgaW5zdGFuY2U6IEZlYXR1cmU7XG5cbiAgQElucHV0KClcbiAgaWQ6IHN0cmluZyB8IG51bWJlciB8IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhvc3Q6IFNvdXJjZVZlY3RvckNvbXBvbmVudCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IEZlYXR1cmUoKTtcbiAgICBpZiAodGhpcy5pZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldElkKHRoaXMuaWQpO1xuICAgIH1cbiAgICB0aGlzLmhvc3QuaW5zdGFuY2UuYWRkRmVhdHVyZSh0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5yZW1vdmVGZWF0dXJlKHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldElkKHRoaXMuaWQpO1xuICAgIH1cbiAgfVxufVxuIl19