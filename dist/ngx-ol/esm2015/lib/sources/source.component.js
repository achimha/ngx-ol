import { __decorate } from "tslib";
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
__decorate([
    Input()
], SourceComponent.prototype, "attributions", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9zb3VyY2VzL3NvdXJjZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFLakQsTUFBTSxPQUFnQixlQUFlO0lBT25DLFlBQXNCLElBQW9CO1FBQXBCLFNBQUksR0FBSixJQUFJLENBQWdCO1FBTG5DLGtCQUFhLEdBQUcsUUFBUSxDQUFDO0lBS2EsQ0FBQztJQUU5QyxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7SUFFUyxTQUFTLENBQUMsQ0FBUztRQUMzQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDakM7SUFDSCxDQUFDO0NBQ0Y7QUFmQztJQURDLEtBQUssRUFBRTtxREFDVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNvdXJjZSB9IGZyb20gJ29sJztcblxuaW1wb3J0IHsgTGF5ZXJDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXIuY29tcG9uZW50JztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBpbnN0YW5jZTogU291cmNlO1xuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdzb3VyY2UnO1xuXG4gIEBJbnB1dCgpXG4gIGF0dHJpYnV0aW9uczogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBob3N0OiBMYXllckNvbXBvbmVudCkge31cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5ob3N0ICYmIHRoaXMuaG9zdC5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFNvdXJjZShudWxsKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgX3JlZ2lzdGVyKHM6IFNvdXJjZSkge1xuICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2Uocyk7XG4gICAgfVxuICB9XG59XG4iXX0=