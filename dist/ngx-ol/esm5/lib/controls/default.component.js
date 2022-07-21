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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvZGVmYXVsdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQVcsUUFBUSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBTS9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQU1oRDtJQWVFLGlDQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO0lBQUcsQ0FBQztJQUV6QywwQ0FBUSxHQUFSO1FBQUEsaUJBSUM7UUFIQyxtREFBbUQ7UUFDbkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxLQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQS9CLENBQStCLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsNkNBQVcsR0FBWDtRQUFBLGlCQUdDO1FBRkMsZ0RBQWdEO1FBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsS0FBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFsQyxDQUFrQyxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Z0JBWHdCLFlBQVk7O0lBWnJDO1FBREMsS0FBSyxFQUFFO2dFQUNhO0lBRXJCO1FBREMsS0FBSyxFQUFFO3VFQUMrQjtJQUV2QztRQURDLEtBQUssRUFBRTsyREFDUTtJQUVoQjtRQURDLEtBQUssRUFBRTtrRUFDcUI7SUFFN0I7UUFEQyxLQUFLLEVBQUU7eURBQ007SUFFZDtRQURDLEtBQUssRUFBRTtnRUFDaUI7SUFiZCx1QkFBdUI7UUFKbkMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUM7T0FDVyx1QkFBdUIsQ0EyQm5DO0lBQUQsOEJBQUM7Q0FBQSxBQTNCRCxJQTJCQztTQTNCWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbCwgZGVmYXVsdHMgfSBmcm9tICdvbC9jb250cm9sJztcbmltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tICdvbCc7XG5pbXBvcnQgeyBPcHRpb25zIGFzIEF0dHJpYnV0aW9uT3B0aW9ucyB9IGZyb20gJ29sL2NvbnRyb2wvQXR0cmlidXRpb24nO1xuaW1wb3J0IHsgT3B0aW9ucyBhcyBSb3RhdGVPcHRpb25zIH0gZnJvbSAnb2wvY29udHJvbC9Sb3RhdGUnO1xuaW1wb3J0IHsgT3B0aW9ucyBhcyBab29tT3B0aW9ucyB9IGZyb20gJ29sL2NvbnRyb2wvWm9vbSc7XG5cbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtY29udHJvbC1kZWZhdWx0cycsXG4gIHRlbXBsYXRlOiAnJyxcbn0pXG5leHBvcnQgY2xhc3MgRGVmYXVsdENvbnRyb2xDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGluc3RhbmNlOiBDb2xsZWN0aW9uPENvbnRyb2w+O1xuICBASW5wdXQoKVxuICBhdHRyaWJ1dGlvbjogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgYXR0cmlidXRpb25PcHRpb25zOiBBdHRyaWJ1dGlvbk9wdGlvbnM7XG4gIEBJbnB1dCgpXG4gIHJvdGF0ZTogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgcm90YXRlT3B0aW9uczogUm90YXRlT3B0aW9ucztcbiAgQElucHV0KClcbiAgem9vbTogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgem9vbU9wdGlvbnM6IFpvb21PcHRpb25zO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ29sLmNvbnRyb2wuZGVmYXVsdHMgaW5pdDogJywgdGhpcyk7XG4gICAgdGhpcy5pbnN0YW5jZSA9IGRlZmF1bHRzKHRoaXMpO1xuICAgIHRoaXMuaW5zdGFuY2UuZm9yRWFjaCgoYykgPT4gdGhpcy5tYXAuaW5zdGFuY2UuYWRkQ29udHJvbChjKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygncmVtb3ZpbmcgYW9sLWNvbnRyb2wtZGVmYXVsdHMnKTtcbiAgICB0aGlzLmluc3RhbmNlLmZvckVhY2goKGMpID0+IHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUNvbnRyb2woYykpO1xuICB9XG59XG4iXX0=