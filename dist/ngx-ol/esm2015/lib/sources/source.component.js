import { Input, Directive } from '@angular/core';
import { LayerComponent } from '../layers/layer.component';
export class SourceComponent {
    constructor(host) {
        this.host = host;
        this.componentType = 'source';
    }
    ngOnDestroy() {
        if (this.host && this.host.instance) {
            this.host.instance.setSource(null);
        }
    }
    _register(s) {
        if (this.host) {
            this.host.instance.setSource(s);
        }
    }
}
SourceComponent.decorators = [
    { type: Directive }
];
SourceComponent.ctorParameters = () => [
    { type: LayerComponent }
];
SourceComponent.propDecorators = {
    attributions: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWNoaW1oYS9Qcm9qZWN0cy9uZ3gtb2wvcHJvamVjdHMvbmd4LW9sL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zb3VyY2VzL3NvdXJjZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBYSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHNUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRzNELE1BQU0sT0FBZ0IsZUFBZTtJQU9uQyxZQUFnQyxJQUFvQjtRQUFwQixTQUFJLEdBQUosSUFBSSxDQUFnQjtRQUw3QyxrQkFBYSxHQUFHLFFBQVEsQ0FBQztJQUt1QixDQUFDO0lBRXhELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQUVTLFNBQVMsQ0FBQyxDQUFTO1FBQzNCLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7OztZQXBCRixTQUFTOzs7WUFGRCxjQUFjOzs7MkJBT3BCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgT25EZXN0cm95LCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBTb3VyY2UgZnJvbSAnb2wvc291cmNlL1NvdXJjZSc7XG5cbmltcG9ydCB7IExheWVyQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVyLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBpbnN0YW5jZTogU291cmNlO1xuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdzb3VyY2UnO1xuXG4gIEBJbnB1dCgpXG4gIGF0dHJpYnV0aW9uczogYW55O1xuXG4gIHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaG9zdDogTGF5ZXJDb21wb25lbnQpIHt9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuaG9zdCAmJiB0aGlzLmhvc3QuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2UobnVsbCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIF9yZWdpc3RlcihzOiBTb3VyY2UpIHtcbiAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKHMpO1xuICAgIH1cbiAgfVxufVxuIl19