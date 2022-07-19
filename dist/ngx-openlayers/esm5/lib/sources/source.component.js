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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL3NvdXJjZXMvc291cmNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUtqRDtJQU9FLHlCQUFzQixJQUFvQjtRQUFwQixTQUFJLEdBQUosSUFBSSxDQUFnQjtRQUxuQyxrQkFBYSxHQUFHLFFBQVEsQ0FBQztJQUthLENBQUM7SUFFOUMscUNBQVcsR0FBWDtRQUNFLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDO0lBRVMsbUNBQVMsR0FBbkIsVUFBb0IsQ0FBUztRQUMzQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDakM7SUFDSCxDQUFDO0lBZEQ7UUFEQyxLQUFLLEVBQUU7eURBQ1U7SUFlcEIsc0JBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQXBCcUIsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNvdXJjZSB9IGZyb20gJ29sJztcblxuaW1wb3J0IHsgTGF5ZXJDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXIuY29tcG9uZW50JztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBpbnN0YW5jZTogU291cmNlO1xuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdzb3VyY2UnO1xuXG4gIEBJbnB1dCgpXG4gIGF0dHJpYnV0aW9uczogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBob3N0OiBMYXllckNvbXBvbmVudCkge31cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5ob3N0ICYmIHRoaXMuaG9zdC5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFNvdXJjZShudWxsKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgX3JlZ2lzdGVyKHM6IFNvdXJjZSkge1xuICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2Uocyk7XG4gICAgfVxuICB9XG59XG4iXX0=