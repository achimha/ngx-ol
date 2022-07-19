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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9zb3VyY2VzL3NvdXJjZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFLakQ7SUFPRSx5QkFBc0IsSUFBb0I7UUFBcEIsU0FBSSxHQUFKLElBQUksQ0FBZ0I7UUFMbkMsa0JBQWEsR0FBRyxRQUFRLENBQUM7SUFLYSxDQUFDO0lBRTlDLHFDQUFXLEdBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQUVTLG1DQUFTLEdBQW5CLFVBQW9CLENBQVM7UUFDM0IsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQztJQWREO1FBREMsS0FBSyxFQUFFO3lEQUNVO0lBZXBCLHNCQUFDO0NBQUEsQUFwQkQsSUFvQkM7U0FwQnFCLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTb3VyY2UgfSBmcm9tICdvbCc7XG5cbmltcG9ydCB7IExheWVyQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVyLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwdWJsaWMgaW5zdGFuY2U6IFNvdXJjZTtcbiAgcHVibGljIGNvbXBvbmVudFR5cGUgPSAnc291cmNlJztcblxuICBASW5wdXQoKVxuICBhdHRyaWJ1dGlvbnM6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaG9zdDogTGF5ZXJDb21wb25lbnQpIHt9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuaG9zdCAmJiB0aGlzLmhvc3QuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2UobnVsbCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIF9yZWdpc3RlcihzOiBTb3VyY2UpIHtcbiAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKHMpO1xuICAgIH1cbiAgfVxufVxuIl19