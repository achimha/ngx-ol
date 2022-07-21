import { __decorate } from "tslib";
import { Input } from '@angular/core';
var SourceComponent = /** @class */ (function () {
    function SourceComponent(host) {
        this.host = host;
        this.componentType = 'source';
    }
    SourceComponent.prototype.ngOnDestroy = function () {
        if (this.host && this.host.instance) {
            this.host.instance.setSource(null);
        }
    };
    SourceComponent.prototype._register = function (s) {
        if (this.host) {
            this.host.instance.setSource(s);
        }
    };
    __decorate([
        Input()
    ], SourceComponent.prototype, "attributions", void 0);
    return SourceComponent;
}());
export { SourceComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9zb3VyY2VzL3NvdXJjZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFLakQ7SUFPRSx5QkFBZ0MsSUFBb0I7UUFBcEIsU0FBSSxHQUFKLElBQUksQ0FBZ0I7UUFMN0Msa0JBQWEsR0FBRyxRQUFRLENBQUM7SUFLdUIsQ0FBQztJQUV4RCxxQ0FBVyxHQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7SUFFUyxtQ0FBUyxHQUFuQixVQUFvQixDQUFTO1FBQzNCLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7SUFkRDtRQURDLEtBQUssRUFBRTt5REFDVTtJQWVwQixzQkFBQztDQUFBLEFBcEJELElBb0JDO1NBcEJxQixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IFNvdXJjZSBmcm9tICdvbC9zb3VyY2UvU291cmNlJztcblxuaW1wb3J0IHsgTGF5ZXJDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXIuY29tcG9uZW50JztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBpbnN0YW5jZTogU291cmNlO1xuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdzb3VyY2UnO1xuXG4gIEBJbnB1dCgpXG4gIGF0dHJpYnV0aW9uczogYW55O1xuXG4gIHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaG9zdDogTGF5ZXJDb21wb25lbnQpIHt9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuaG9zdCAmJiB0aGlzLmhvc3QuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2UobnVsbCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIF9yZWdpc3RlcihzOiBTb3VyY2UpIHtcbiAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKHMpO1xuICAgIH1cbiAgfVxufVxuIl19