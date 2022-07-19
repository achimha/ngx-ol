import { __decorate } from "tslib";
import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { Attribution } from 'ol/control';
import { MapComponent } from '../map.component';
let ControlAttributionComponent = class ControlAttributionComponent {
    constructor(map, element) {
        this.map = map;
        this.element = element;
        this.componentType = 'control';
    }
    ngOnInit() {
        this.target = this.element.nativeElement;
        // console.log('ol.control.Attribution init: ', this);
        this.instance = new Attribution(this);
        this.map.instance.addControl(this.instance);
    }
    ngOnDestroy() {
        // console.log('removing aol-control-attribution');
        this.map.instance.removeControl(this.instance);
    }
};
ControlAttributionComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: ElementRef }
];
__decorate([
    Input()
], ControlAttributionComponent.prototype, "collapsible", void 0);
ControlAttributionComponent = __decorate([
    Component({
        selector: 'aol-control-attribution',
        template: ``
    })
], ControlAttributionComponent);
export { ControlAttributionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL2F0dHJpYnV0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFNaEQsSUFBYSwyQkFBMkIsR0FBeEMsTUFBYSwyQkFBMkI7SUFPdEMsWUFBb0IsR0FBaUIsRUFBVSxPQUFtQjtRQUE5QyxRQUFHLEdBQUgsR0FBRyxDQUFjO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQU4zRCxrQkFBYSxHQUFHLFNBQVMsQ0FBQztJQU1vQyxDQUFDO0lBRXRFLFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQ3pDLHNEQUFzRDtRQUN0RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELFdBQVc7UUFDVCxtREFBbUQ7UUFDbkQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqRCxDQUFDO0NBQ0YsQ0FBQTs7WUFiMEIsWUFBWTtZQUFtQixVQUFVOztBQUZsRTtJQURDLEtBQUssRUFBRTtnRUFDYTtBQUxWLDJCQUEyQjtJQUp2QyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUseUJBQXlCO1FBQ25DLFFBQVEsRUFBRSxFQUFFO0tBQ2IsQ0FBQztHQUNXLDJCQUEyQixDQW9CdkM7U0FwQlksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF0dHJpYnV0aW9uIH0gZnJvbSAnb2wvY29udHJvbCc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWNvbnRyb2wtYXR0cmlidXRpb24nLFxuICB0ZW1wbGF0ZTogYGAsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xBdHRyaWJ1dGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHVibGljIGNvbXBvbmVudFR5cGUgPSAnY29udHJvbCc7XG4gIGluc3RhbmNlOiBBdHRyaWJ1dGlvbjtcbiAgdGFyZ2V0OiBFbGVtZW50O1xuICBASW5wdXQoKVxuICBjb2xsYXBzaWJsZTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50LCBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy50YXJnZXQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAvLyBjb25zb2xlLmxvZygnb2wuY29udHJvbC5BdHRyaWJ1dGlvbiBpbml0OiAnLCB0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IEF0dHJpYnV0aW9uKHRoaXMpO1xuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZENvbnRyb2wodGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygncmVtb3ZpbmcgYW9sLWNvbnRyb2wtYXR0cmlidXRpb24nKTtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=