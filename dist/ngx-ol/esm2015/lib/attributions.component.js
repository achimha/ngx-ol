import { Component, ContentChildren, Host } from '@angular/core';
import { SourceComponent } from './sources/source.component';
import { AttributionComponent } from './attribution.component';
export class AttributionsComponent {
    constructor(source) {
        this.source = source;
    }
    /* we can do this at the very end */
    ngAfterViewInit() {
        if (this.attributions.length) {
            this.instance = this.attributions.map((cmp) => cmp.label);
            // console.log('setting attributions:', this.instance);
            this.source.instance.setAttributions(this.instance);
        }
    }
}
AttributionsComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-attributions',
                template: '<ng-content></ng-content>'
            },] }
];
AttributionsComponent.ctorParameters = () => [
    { type: SourceComponent, decorators: [{ type: Host }] }
];
AttributionsComponent.propDecorators = {
    attributions: [{ type: ContentChildren, args: [AttributionComponent,] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWNoaW1oYS9Qcm9qZWN0cy9uZ3gtb2wvcHJvamVjdHMvbmd4LW9sL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9hdHRyaWJ1dGlvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFM0YsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBTS9ELE1BQU0sT0FBTyxxQkFBcUI7SUFNaEMsWUFBNEIsTUFBdUI7UUFBdkIsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7SUFBRyxDQUFDO0lBRXZELG9DQUFvQztJQUNwQyxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRTtZQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUQsdURBQXVEO1lBQ3ZELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDckQ7SUFDSCxDQUFDOzs7WUFuQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRSwyQkFBMkI7YUFDdEM7OztZQU5RLGVBQWUsdUJBYVQsSUFBSTs7OzJCQUhoQixlQUFlLFNBQUMsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIEhvc3QsIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXR0cmlidXRpb24gfSBmcm9tICdvbC9jb250cm9sJztcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlcy9zb3VyY2UuY29tcG9uZW50JztcbmltcG9ydCB7IEF0dHJpYnV0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9hdHRyaWJ1dGlvbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtYXR0cmlidXRpb25zJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXR0cmlidXRpb25zQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIGluc3RhbmNlOiBBcnJheTxzdHJpbmc+O1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oQXR0cmlidXRpb25Db21wb25lbnQpXG4gIGF0dHJpYnV0aW9uczogUXVlcnlMaXN0PEF0dHJpYnV0aW9uQ29tcG9uZW50PjtcblxuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgc291cmNlOiBTb3VyY2VDb21wb25lbnQpIHt9XG5cbiAgLyogd2UgY2FuIGRvIHRoaXMgYXQgdGhlIHZlcnkgZW5kICovXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5hdHRyaWJ1dGlvbnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gdGhpcy5hdHRyaWJ1dGlvbnMubWFwKChjbXApID0+IGNtcC5sYWJlbCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc2V0dGluZyBhdHRyaWJ1dGlvbnM6JywgdGhpcy5pbnN0YW5jZSk7XG4gICAgICB0aGlzLnNvdXJjZS5pbnN0YW5jZS5zZXRBdHRyaWJ1dGlvbnModGhpcy5pbnN0YW5jZSk7XG4gICAgfVxuICB9XG59XG4iXX0=