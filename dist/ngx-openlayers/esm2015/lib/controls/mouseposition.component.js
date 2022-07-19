import { __decorate } from "tslib";
import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import MousePosition from 'ol/control/MousePosition';
import { MapComponent } from '../map.component';
let ControlMousePositionComponent = class ControlMousePositionComponent {
    constructor(map, element) {
        this.map = map;
        this.element = element;
    }
    ngOnInit() {
        this.target = this.element.nativeElement;
        // console.log('ol.control.MousePosition init: ', this);
        this.instance = new MousePosition(this);
        this.map.instance.addControl(this.instance);
    }
    ngOnDestroy() {
        // console.log('removing aol-control-mouseposition');
        this.map.instance.removeControl(this.instance);
    }
};
ControlMousePositionComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: ElementRef }
];
__decorate([
    Input()
], ControlMousePositionComponent.prototype, "coordinateFormat", void 0);
__decorate([
    Input()
], ControlMousePositionComponent.prototype, "projection", void 0);
ControlMousePositionComponent = __decorate([
    Component({
        selector: 'aol-control-mouseposition',
        template: ``
    })
], ControlMousePositionComponent);
export { ControlMousePositionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW91c2Vwb3NpdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9scy9tb3VzZXBvc2l0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxhQUFhLE1BQU0sMEJBQTBCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBUWhELElBQWEsNkJBQTZCLEdBQTFDLE1BQWEsNkJBQTZCO0lBUXhDLFlBQW9CLEdBQWlCLEVBQVUsT0FBbUI7UUFBOUMsUUFBRyxHQUFILEdBQUcsQ0FBYztRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVk7SUFBRyxDQUFDO0lBRXRFLFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQ3pDLHdEQUF3RDtRQUN4RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELFdBQVc7UUFDVCxxREFBcUQ7UUFDckQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqRCxDQUFDO0NBQ0YsQ0FBQTs7WUFiMEIsWUFBWTtZQUFtQixVQUFVOztBQUxsRTtJQURDLEtBQUssRUFBRTt1RUFDMkI7QUFFbkM7SUFEQyxLQUFLLEVBQUU7aUVBQ21CO0FBTGhCLDZCQUE2QjtJQUp6QyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsMkJBQTJCO1FBQ3JDLFFBQVEsRUFBRSxFQUFFO0tBQ2IsQ0FBQztHQUNXLDZCQUE2QixDQXFCekM7U0FyQlksNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBNb3VzZVBvc2l0aW9uIGZyb20gJ29sL2NvbnRyb2wvTW91c2VQb3NpdGlvbic7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IENvb3JkaW5hdGVGb3JtYXQgfSBmcm9tICdvbC9jb29yZGluYXRlJztcbmltcG9ydCB7IFByb2plY3Rpb25MaWtlIH0gZnJvbSAnb2wvcHJvaic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1jb250cm9sLW1vdXNlcG9zaXRpb24nLFxuICB0ZW1wbGF0ZTogYGAsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xNb3VzZVBvc2l0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBpbnN0YW5jZTogTW91c2VQb3NpdGlvbjtcbiAgQElucHV0KClcbiAgY29vcmRpbmF0ZUZvcm1hdDogQ29vcmRpbmF0ZUZvcm1hdDtcbiAgQElucHV0KClcbiAgcHJvamVjdGlvbjogUHJvamVjdGlvbkxpa2U7XG4gIHRhcmdldDogRWxlbWVudDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50LCBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy50YXJnZXQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAvLyBjb25zb2xlLmxvZygnb2wuY29udHJvbC5Nb3VzZVBvc2l0aW9uIGluaXQ6ICcsIHRoaXMpO1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgTW91c2VQb3NpdGlvbih0aGlzKTtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3JlbW92aW5nIGFvbC1jb250cm9sLW1vdXNlcG9zaXRpb24nKTtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=