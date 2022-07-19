import { __decorate } from "tslib";
import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { Attribution } from 'ol/control';
import { MapComponent } from '../map.component';
var ControlAttributionComponent = /** @class */ (function () {
    function ControlAttributionComponent(map, element) {
        this.map = map;
        this.element = element;
        this.componentType = 'control';
    }
    ControlAttributionComponent.prototype.ngOnInit = function () {
        this.target = this.element.nativeElement;
        // console.log('ol.control.Attribution init: ', this);
        this.instance = new Attribution(this);
        this.map.instance.addControl(this.instance);
    };
    ControlAttributionComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-attribution');
        this.map.instance.removeControl(this.instance);
    };
    ControlAttributionComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], ControlAttributionComponent.prototype, "collapsible", void 0);
    ControlAttributionComponent = __decorate([
        Component({
            selector: 'aol-control-attribution',
            template: ""
        })
    ], ControlAttributionComponent);
    return ControlAttributionComponent;
}());
export { ControlAttributionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvYXR0cmlidXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQU1oRDtJQU9FLHFDQUFvQixHQUFpQixFQUFVLE9BQW1CO1FBQTlDLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBTjNELGtCQUFhLEdBQUcsU0FBUyxDQUFDO0lBTW9DLENBQUM7SUFFdEUsOENBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDekMsc0RBQXNEO1FBQ3RELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsaURBQVcsR0FBWDtRQUNFLG1EQUFtRDtRQUNuRCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pELENBQUM7O2dCQVp3QixZQUFZO2dCQUFtQixVQUFVOztJQUZsRTtRQURDLEtBQUssRUFBRTtvRUFDYTtJQUxWLDJCQUEyQjtRQUp2QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUseUJBQXlCO1lBQ25DLFFBQVEsRUFBRSxFQUFFO1NBQ2IsQ0FBQztPQUNXLDJCQUEyQixDQW9CdkM7SUFBRCxrQ0FBQztDQUFBLEFBcEJELElBb0JDO1NBcEJZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdHRyaWJ1dGlvbiB9IGZyb20gJ29sL2NvbnRyb2wnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1jb250cm9sLWF0dHJpYnV0aW9uJyxcbiAgdGVtcGxhdGU6IGBgLFxufSlcbmV4cG9ydCBjbGFzcyBDb250cm9sQXR0cmlidXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ2NvbnRyb2wnO1xuICBpbnN0YW5jZTogQXR0cmlidXRpb247XG4gIHRhcmdldDogRWxlbWVudDtcbiAgQElucHV0KClcbiAgY29sbGFwc2libGU6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCwgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgLy8gY29uc29sZS5sb2coJ29sLmNvbnRyb2wuQXR0cmlidXRpb24gaW5pdDogJywgdGhpcyk7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBBdHRyaWJ1dGlvbih0aGlzKTtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3JlbW92aW5nIGFvbC1jb250cm9sLWF0dHJpYnV0aW9uJyk7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19