import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { Rotate } from 'ol/control';
import { MapComponent } from '../map.component';
var ControlRotateComponent = /** @class */ (function () {
    function ControlRotateComponent(map) {
        this.map = map;
        // console.log('instancing aol-control-rotate');
    }
    ControlRotateComponent.prototype.ngOnInit = function () {
        this.instance = new Rotate(this);
        this.map.instance.addControl(this.instance);
    };
    ControlRotateComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-rotate');
        this.map.instance.removeControl(this.instance);
    };
    ControlRotateComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    tslib_1.__decorate([
        Input()
    ], ControlRotateComponent.prototype, "className", void 0);
    tslib_1.__decorate([
        Input()
    ], ControlRotateComponent.prototype, "label", void 0);
    tslib_1.__decorate([
        Input()
    ], ControlRotateComponent.prototype, "tipLabel", void 0);
    tslib_1.__decorate([
        Input()
    ], ControlRotateComponent.prototype, "duration", void 0);
    tslib_1.__decorate([
        Input()
    ], ControlRotateComponent.prototype, "autoHide", void 0);
    ControlRotateComponent = tslib_1.__decorate([
        Component({
            selector: 'aol-control-rotate',
            template: " <ng-content></ng-content> "
        })
    ], ControlRotateComponent);
    return ControlRotateComponent;
}());
export { ControlRotateComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm90YXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9scy9yb3RhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNwQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFNaEQ7SUFjRSxnQ0FBb0IsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztRQUNuQyxnREFBZ0Q7SUFDbEQsQ0FBQztJQUVELHlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELDRDQUFXLEdBQVg7UUFDRSw4Q0FBOEM7UUFDOUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqRCxDQUFDOztnQkFad0IsWUFBWTs7SUFWckM7UUFEQyxLQUFLLEVBQUU7NkRBQ1U7SUFFbEI7UUFEQyxLQUFLLEVBQUU7eURBQ007SUFFZDtRQURDLEtBQUssRUFBRTs0REFDUztJQUVqQjtRQURDLEtBQUssRUFBRTs0REFDUztJQUVqQjtRQURDLEtBQUssRUFBRTs0REFDVTtJQVpQLHNCQUFzQjtRQUpsQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFFBQVEsRUFBRSw2QkFBNkI7U0FDeEMsQ0FBQztPQUNXLHNCQUFzQixDQTJCbEM7SUFBRCw2QkFBQztDQUFBLEFBM0JELElBMkJDO1NBM0JZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3RhdGUgfSBmcm9tICdvbC9jb250cm9sJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtY29udHJvbC1yb3RhdGUnLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xSb3RhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGluc3RhbmNlOiBSb3RhdGU7XG5cbiAgQElucHV0KClcbiAgY2xhc3NOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHRpcExhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGR1cmF0aW9uOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIGF1dG9IaWRlOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnaW5zdGFuY2luZyBhb2wtY29udHJvbC1yb3RhdGUnKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgUm90YXRlKHRoaXMpO1xuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZENvbnRyb2wodGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygncmVtb3ZpbmcgYW9sLWNvbnRyb2wtcm90YXRlJyk7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19