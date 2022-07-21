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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL2F0dHJpYnV0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFNaEQ7SUFPRSxxQ0FBb0IsR0FBaUIsRUFBVSxPQUFtQjtRQUE5QyxRQUFHLEdBQUgsR0FBRyxDQUFjO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQU4zRCxrQkFBYSxHQUFHLFNBQVMsQ0FBQztJQU1vQyxDQUFDO0lBRXRFLDhDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQ3pDLHNEQUFzRDtRQUN0RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELGlEQUFXLEdBQVg7UUFDRSxtREFBbUQ7UUFDbkQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqRCxDQUFDOztnQkFad0IsWUFBWTtnQkFBbUIsVUFBVTs7SUFGbEU7UUFEQyxLQUFLLEVBQUU7b0VBQ2E7SUFMViwyQkFBMkI7UUFKdkMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHlCQUF5QjtZQUNuQyxRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUM7T0FDVywyQkFBMkIsQ0FvQnZDO0lBQUQsa0NBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQXBCWSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXR0cmlidXRpb24gfSBmcm9tICdvbC9jb250cm9sJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtY29udHJvbC1hdHRyaWJ1dGlvbicsXG4gIHRlbXBsYXRlOiBgYCxcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbEF0dHJpYnV0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdjb250cm9sJztcbiAgaW5zdGFuY2U6IEF0dHJpYnV0aW9uO1xuICB0YXJnZXQ6IEhUTUxFbGVtZW50O1xuICBASW5wdXQoKVxuICBjb2xsYXBzaWJsZTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50LCBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy50YXJnZXQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAvLyBjb25zb2xlLmxvZygnb2wuY29udHJvbC5BdHRyaWJ1dGlvbiBpbml0OiAnLCB0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IEF0dHJpYnV0aW9uKHRoaXMpO1xuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZENvbnRyb2wodGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygncmVtb3ZpbmcgYW9sLWNvbnRyb2wtYXR0cmlidXRpb24nKTtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=