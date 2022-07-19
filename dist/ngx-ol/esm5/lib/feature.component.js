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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvZmVhdHVyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWdDLEtBQUssRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLElBQUksQ0FBQztBQUM3QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQU1uRTtJQU9FLDBCQUFvQixJQUEyQjtRQUEzQixTQUFJLEdBQUosSUFBSSxDQUF1QjtRQU54QyxrQkFBYSxHQUFHLFNBQVMsQ0FBQztJQU1pQixDQUFDO0lBRW5ELG1DQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDOUIsSUFBSSxJQUFJLENBQUMsRUFBRSxLQUFLLFNBQVMsRUFBRTtZQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDOUI7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxzQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsc0NBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDOUI7SUFDSCxDQUFDOztnQkFsQnlCLHFCQUFxQjs7SUFGL0M7UUFEQyxLQUFLLEVBQUU7Z0RBQ3dCO0lBTHJCLGdCQUFnQjtRQUo1QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUsNkJBQTZCO1NBQ3hDLENBQUM7T0FDVyxnQkFBZ0IsQ0EwQjVCO0lBQUQsdUJBQUM7Q0FBQSxBQTFCRCxJQTBCQztTQTFCWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMsIElucHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGZWF0dXJlIH0gZnJvbSAnb2wnO1xuaW1wb3J0IHsgU291cmNlVmVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2VzL3ZlY3Rvci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtZmVhdHVyZScsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbn0pXG5leHBvcnQgY2xhc3MgRmVhdHVyZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdmZWF0dXJlJztcbiAgcHVibGljIGluc3RhbmNlOiBGZWF0dXJlO1xuXG4gIEBJbnB1dCgpXG4gIGlkOiBzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBob3N0OiBTb3VyY2VWZWN0b3JDb21wb25lbnQpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBGZWF0dXJlKCk7XG4gICAgaWYgKHRoaXMuaWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRJZCh0aGlzLmlkKTtcbiAgICB9XG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLmFkZEZlYXR1cmUodGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2UucmVtb3ZlRmVhdHVyZSh0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRJZCh0aGlzLmlkKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==