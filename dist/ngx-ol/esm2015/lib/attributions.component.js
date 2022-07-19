import { __decorate, __param } from "tslib";
import { Component, ContentChildren, Host } from '@angular/core';
import { SourceComponent } from './sources/source.component';
import { AttributionComponent } from './attribution.component';
let AttributionsComponent = class AttributionsComponent {
    constructor(source) {
        this.source = source;
    }
    /* we can do this at the very end */
    ngAfterViewInit() {
        if (this.attributions.length) {
            this.instance = this.attributions.map((cmp) => cmp.instance);
            // console.log('setting attributions:', this.instance);
            this.source.instance.setAttributions(this.instance);
        }
    }
};
AttributionsComponent.ctorParameters = () => [
    { type: SourceComponent, decorators: [{ type: Host }] }
];
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
export { AttributionsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9hdHRyaWJ1dGlvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRTNGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQU0vRCxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtJQU1oQyxZQUE0QixNQUF1QjtRQUF2QixXQUFNLEdBQU4sTUFBTSxDQUFpQjtJQUFHLENBQUM7SUFFdkQsb0NBQW9DO0lBQ3BDLGVBQWU7UUFDYixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFO1lBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM3RCx1REFBdUQ7WUFDdkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNyRDtJQUNILENBQUM7Q0FDRixDQUFBOztZQVZxQyxlQUFlLHVCQUF0QyxJQUFJOztBQUZqQjtJQURDLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQzsyREFDUTtBQUpuQyxxQkFBcUI7SUFKakMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixRQUFRLEVBQUUsMkJBQTJCO0tBQ3RDLENBQUM7SUFPYSxXQUFBLElBQUksRUFBRSxDQUFBO0dBTlIscUJBQXFCLENBZ0JqQztTQWhCWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgSG9zdCwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdHRyaWJ1dGlvbiB9IGZyb20gJ29sL2NvbnRyb2wnO1xuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2VzL3NvdXJjZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXR0cmlidXRpb25Db21wb25lbnQgfSBmcm9tICcuL2F0dHJpYnV0aW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1hdHRyaWJ1dGlvbnMnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxufSlcbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGlvbnNDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgaW5zdGFuY2U6IEFycmF5PEF0dHJpYnV0aW9uPjtcblxuICBAQ29udGVudENoaWxkcmVuKEF0dHJpYnV0aW9uQ29tcG9uZW50KVxuICBhdHRyaWJ1dGlvbnM6IFF1ZXJ5TGlzdDxBdHRyaWJ1dGlvbkNvbXBvbmVudD47XG5cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBwcml2YXRlIHNvdXJjZTogU291cmNlQ29tcG9uZW50KSB7fVxuXG4gIC8qIHdlIGNhbiBkbyB0aGlzIGF0IHRoZSB2ZXJ5IGVuZCAqL1xuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMuYXR0cmlidXRpb25zLmxlbmd0aCkge1xuICAgICAgdGhpcy5pbnN0YW5jZSA9IHRoaXMuYXR0cmlidXRpb25zLm1hcCgoY21wKSA9PiBjbXAuaW5zdGFuY2UpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3NldHRpbmcgYXR0cmlidXRpb25zOicsIHRoaXMuaW5zdGFuY2UpO1xuICAgICAgdGhpcy5zb3VyY2UuaW5zdGFuY2Uuc2V0QXR0cmlidXRpb25zKHRoaXMuaW5zdGFuY2UpO1xuICAgIH1cbiAgfVxufVxuIl19