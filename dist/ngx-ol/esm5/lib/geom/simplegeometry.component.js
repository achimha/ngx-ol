import * as tslib_1 from "tslib";
import { Input } from '@angular/core';
var SimpleGeometryComponent = /** @class */ (function () {
    function SimpleGeometryComponent(map, host) {
        this.map = map;
        this.host = host;
        this.componentType = 'simple-geometry';
    }
    SimpleGeometryComponent.prototype.ngOnInit = function () {
        this.host.instance.setGeometry(this.instance);
    };
    tslib_1.__decorate([
        Input()
    ], SimpleGeometryComponent.prototype, "srid", void 0);
    return SimpleGeometryComponent;
}());
export { SimpleGeometryComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlZ2VvbWV0cnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9sLyIsInNvdXJjZXMiOlsibGliL2dlb20vc2ltcGxlZ2VvbWV0cnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBSzlDO0lBTUUsaUNBQXNCLEdBQWlCLEVBQVksSUFBc0I7UUFBbkQsUUFBRyxHQUFILEdBQUcsQ0FBYztRQUFZLFNBQUksR0FBSixJQUFJLENBQWtCO1FBSmxFLGtCQUFhLEdBQUcsaUJBQWlCLENBQUM7SUFJbUMsQ0FBQztJQUU3RSwwQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBTlE7UUFBUixLQUFLLEVBQUU7eURBQWM7SUFPeEIsOEJBQUM7Q0FBQSxBQVhELElBV0M7U0FYcUIsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmVhdHVyZUNvbXBvbmVudCB9IGZyb20gJy4uL2ZlYXR1cmUuY29tcG9uZW50JztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IFNpbXBsZUdlb21ldHJ5IGZyb20gJ29sL2dlb20vU2ltcGxlR2VvbWV0cnknO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU2ltcGxlR2VvbWV0cnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgaW5zdGFuY2U6IFNpbXBsZUdlb21ldHJ5O1xuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdzaW1wbGUtZ2VvbWV0cnknO1xuXG4gIEBJbnB1dCgpIHNyaWQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgbWFwOiBNYXBDb21wb25lbnQsIHByb3RlY3RlZCBob3N0OiBGZWF0dXJlQ29tcG9uZW50KSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRHZW9tZXRyeSh0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19