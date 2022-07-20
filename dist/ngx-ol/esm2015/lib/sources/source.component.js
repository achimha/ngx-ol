import * as tslib_1 from "tslib";
import { Input } from '@angular/core';
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
tslib_1.__decorate([
    Input()
], SourceComponent.prototype, "attributions", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9zb3VyY2VzL3NvdXJjZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFLakQsTUFBTSxPQUFnQixlQUFlO0lBT25DLFlBQWdDLElBQW9CO1FBQXBCLFNBQUksR0FBSixJQUFJLENBQWdCO1FBTDdDLGtCQUFhLEdBQUcsUUFBUSxDQUFDO0lBS3VCLENBQUM7SUFFeEQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDO0lBRVMsU0FBUyxDQUFDLENBQVM7UUFDM0IsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQztDQUNGO0FBZkM7SUFEQyxLQUFLLEVBQUU7cURBQ1UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgU291cmNlIGZyb20gJ29sL3NvdXJjZS9Tb3VyY2UnO1xuXG5pbXBvcnQgeyBMYXllckNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllci5jb21wb25lbnQnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHVibGljIGluc3RhbmNlOiBTb3VyY2U7XG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ3NvdXJjZSc7XG5cbiAgQElucHV0KClcbiAgYXR0cmlidXRpb25zOiBhbnk7XG5cbiAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBob3N0OiBMYXllckNvbXBvbmVudCkge31cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5ob3N0ICYmIHRoaXMuaG9zdC5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFNvdXJjZShudWxsKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgX3JlZ2lzdGVyKHM6IFNvdXJjZSkge1xuICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2Uocyk7XG4gICAgfVxuICB9XG59XG4iXX0=