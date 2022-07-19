import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { defaults } from 'ol/control';
import { MapComponent } from '../map.component';
var DefaultControlComponent = /** @class */ (function () {
    function DefaultControlComponent(map) {
        this.map = map;
    }
    DefaultControlComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log('ol.control.defaults init: ', this);
        this.instance = defaults(this);
        this.instance.forEach(function (c) { return _this.map.instance.addControl(c); });
    };
    DefaultControlComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        // console.log('removing aol-control-defaults');
        this.instance.forEach(function (c) { return _this.map.instance.removeControl(c); });
    };
    DefaultControlComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    __decorate([
        Input()
    ], DefaultControlComponent.prototype, "attribution", void 0);
    __decorate([
        Input()
    ], DefaultControlComponent.prototype, "attributionOptions", void 0);
    __decorate([
        Input()
    ], DefaultControlComponent.prototype, "rotate", void 0);
    __decorate([
        Input()
    ], DefaultControlComponent.prototype, "rotateOptions", void 0);
    __decorate([
        Input()
    ], DefaultControlComponent.prototype, "zoom", void 0);
    __decorate([
        Input()
    ], DefaultControlComponent.prototype, "zoomOptions", void 0);
    DefaultControlComponent = __decorate([
        Component({
            selector: 'aol-control-defaults',
            template: ''
        })
    ], DefaultControlComponent);
    return DefaultControlComponent;
}());
export { DefaultControlComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9scy9kZWZhdWx0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBVyxRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFNL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBTWhEO0lBZUUsaUNBQW9CLEdBQWlCO1FBQWpCLFFBQUcsR0FBSCxHQUFHLENBQWM7SUFBRyxDQUFDO0lBRXpDLDBDQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhDLG1EQUFtRDtRQUNuRCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLEtBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCw2Q0FBVyxHQUFYO1FBQUEsaUJBR0M7UUFGQyxnREFBZ0Q7UUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxLQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQWxDLENBQWtDLENBQUMsQ0FBQztJQUNuRSxDQUFDOztnQkFYd0IsWUFBWTs7SUFackM7UUFEQyxLQUFLLEVBQUU7Z0VBQ2E7SUFFckI7UUFEQyxLQUFLLEVBQUU7dUVBQytCO0lBRXZDO1FBREMsS0FBSyxFQUFFOzJEQUNRO0lBRWhCO1FBREMsS0FBSyxFQUFFO2tFQUNxQjtJQUU3QjtRQURDLEtBQUssRUFBRTt5REFDTTtJQUVkO1FBREMsS0FBSyxFQUFFO2dFQUNpQjtJQWJkLHVCQUF1QjtRQUpuQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLFFBQVEsRUFBRSxFQUFFO1NBQ2IsQ0FBQztPQUNXLHVCQUF1QixDQTJCbkM7SUFBRCw4QkFBQztDQUFBLEFBM0JELElBMkJDO1NBM0JZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sLCBkZWZhdWx0cyB9IGZyb20gJ29sL2NvbnRyb2wnO1xuaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJ29sJztcbmltcG9ydCB7IE9wdGlvbnMgYXMgQXR0cmlidXRpb25PcHRpb25zIH0gZnJvbSAnb2wvY29udHJvbC9BdHRyaWJ1dGlvbic7XG5pbXBvcnQgeyBPcHRpb25zIGFzIFJvdGF0ZU9wdGlvbnMgfSBmcm9tICdvbC9jb250cm9sL1JvdGF0ZSc7XG5pbXBvcnQgeyBPcHRpb25zIGFzIFpvb21PcHRpb25zIH0gZnJvbSAnb2wvY29udHJvbC9ab29tJztcblxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1jb250cm9sLWRlZmF1bHRzJyxcbiAgdGVtcGxhdGU6ICcnLFxufSlcbmV4cG9ydCBjbGFzcyBEZWZhdWx0Q29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaW5zdGFuY2U6IENvbGxlY3Rpb248Q29udHJvbD47XG4gIEBJbnB1dCgpXG4gIGF0dHJpYnV0aW9uOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBhdHRyaWJ1dGlvbk9wdGlvbnM6IEF0dHJpYnV0aW9uT3B0aW9ucztcbiAgQElucHV0KClcbiAgcm90YXRlOiBib29sZWFuO1xuICBASW5wdXQoKVxuICByb3RhdGVPcHRpb25zOiBSb3RhdGVPcHRpb25zO1xuICBASW5wdXQoKVxuICB6b29tOiBib29sZWFuO1xuICBASW5wdXQoKVxuICB6b29tT3B0aW9uczogWm9vbU9wdGlvbnM7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnb2wuY29udHJvbC5kZWZhdWx0cyBpbml0OiAnLCB0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlID0gZGVmYXVsdHModGhpcyk7XG4gICAgdGhpcy5pbnN0YW5jZS5mb3JFYWNoKChjKSA9PiB0aGlzLm1hcC5pbnN0YW5jZS5hZGRDb250cm9sKGMpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmluZyBhb2wtY29udHJvbC1kZWZhdWx0cycpO1xuICAgIHRoaXMuaW5zdGFuY2UuZm9yRWFjaCgoYykgPT4gdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlQ29udHJvbChjKSk7XG4gIH1cbn1cbiJdfQ==