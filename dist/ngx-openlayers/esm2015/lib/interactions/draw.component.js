import { __decorate } from "tslib";
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { MapComponent } from '../map.component';
import { Draw } from 'ol/interaction';
let DrawInteractionComponent = class DrawInteractionComponent {
    constructor(map) {
        this.map = map;
        this.olChange = new EventEmitter();
        this.olChangeActive = new EventEmitter();
        this.drawEnd = new EventEmitter();
        this.drawStart = new EventEmitter();
        this.propertyChange = new EventEmitter();
    }
    ngOnInit() {
        this.instance = new Draw(this);
        this.instance.on('change', (event) => this.olChange.emit(event));
        this.instance.on('change:active', (event) => this.olChangeActive.emit(event));
        this.instance.on('drawend', (event) => this.drawEnd.emit(event));
        this.instance.on('drawstart', (event) => this.drawStart.emit(event));
        this.instance.on('propertychange', (event) => this.propertyChange.emit(event));
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
};
DrawInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];
__decorate([
    Input()
], DrawInteractionComponent.prototype, "clickTolerance", void 0);
__decorate([
    Input()
], DrawInteractionComponent.prototype, "features", void 0);
__decorate([
    Input()
], DrawInteractionComponent.prototype, "source", void 0);
__decorate([
    Input()
], DrawInteractionComponent.prototype, "snapTolerance", void 0);
__decorate([
    Input()
], DrawInteractionComponent.prototype, "type", void 0);
__decorate([
    Input()
], DrawInteractionComponent.prototype, "maxPoints", void 0);
__decorate([
    Input()
], DrawInteractionComponent.prototype, "minPoints", void 0);
__decorate([
    Input()
], DrawInteractionComponent.prototype, "finishCondition", void 0);
__decorate([
    Input()
], DrawInteractionComponent.prototype, "style", void 0);
__decorate([
    Input()
], DrawInteractionComponent.prototype, "geometryFunction", void 0);
__decorate([
    Input()
], DrawInteractionComponent.prototype, "geometryName", void 0);
__decorate([
    Input()
], DrawInteractionComponent.prototype, "condition", void 0);
__decorate([
    Input()
], DrawInteractionComponent.prototype, "freehandCondition", void 0);
__decorate([
    Input()
], DrawInteractionComponent.prototype, "freehand", void 0);
__decorate([
    Input()
], DrawInteractionComponent.prototype, "wrapX", void 0);
__decorate([
    Output()
], DrawInteractionComponent.prototype, "olChange", void 0);
__decorate([
    Output()
], DrawInteractionComponent.prototype, "olChangeActive", void 0);
__decorate([
    Output()
], DrawInteractionComponent.prototype, "drawEnd", void 0);
__decorate([
    Output()
], DrawInteractionComponent.prototype, "drawStart", void 0);
__decorate([
    Output()
], DrawInteractionComponent.prototype, "propertyChange", void 0);
DrawInteractionComponent = __decorate([
    Component({
        selector: 'aol-interaction-draw',
        template: ''
    })
], DrawInteractionComponent);
export { DrawInteractionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9pbnRlcmFjdGlvbnMvZHJhdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFhdEMsSUFBYSx3QkFBd0IsR0FBckMsTUFBYSx3QkFBd0I7SUE2Q25DLFlBQW9CLEdBQWlCO1FBQWpCLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFWckMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUFFekMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBRS9DLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBRXhDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBRTFDLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztJQUVQLENBQUM7SUFFekMsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBZ0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxLQUFnQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQWdCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBZ0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEtBQWdCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDMUYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyRCxDQUFDO0NBQ0YsQ0FBQTs7WUFmMEIsWUFBWTs7QUF6Q3JDO0lBREMsS0FBSyxFQUFFO2dFQUNnQjtBQUV4QjtJQURDLEtBQUssRUFBRTswREFDdUI7QUFFL0I7SUFEQyxLQUFLLEVBQUU7d0RBQ1E7QUFFaEI7SUFEQyxLQUFLLEVBQUU7K0RBQ2U7QUFFdkI7SUFEQyxLQUFLLEVBQUU7c0RBQ1c7QUFFbkI7SUFEQyxLQUFLLEVBQUU7MkRBQ1c7QUFFbkI7SUFEQyxLQUFLLEVBQUU7MkRBQ1c7QUFFbkI7SUFEQyxLQUFLLEVBQUU7aUVBQ29CO0FBRTVCO0lBREMsS0FBSyxFQUFFO3VEQUNnQztBQUV4QztJQURDLEtBQUssRUFBRTtrRUFDNEI7QUFFcEM7SUFEQyxLQUFLLEVBQUU7OERBQ2M7QUFFdEI7SUFEQyxLQUFLLEVBQUU7MkRBQ2M7QUFFdEI7SUFEQyxLQUFLLEVBQUU7bUVBQ3NCO0FBRTlCO0lBREMsS0FBSyxFQUFFOzBEQUNXO0FBRW5CO0lBREMsS0FBSyxFQUFFO3VEQUNRO0FBR2hCO0lBREMsTUFBTSxFQUFFOzBEQUNnQztBQUV6QztJQURDLE1BQU0sRUFBRTtnRUFDc0M7QUFFL0M7SUFEQyxNQUFNLEVBQUU7eURBQytCO0FBRXhDO0lBREMsTUFBTSxFQUFFOzJEQUNpQztBQUUxQztJQURDLE1BQU0sRUFBRTtnRUFDc0M7QUEzQ3BDLHdCQUF3QjtJQUpwQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsc0JBQXNCO1FBQ2hDLFFBQVEsRUFBRSxFQUFFO0tBQ2IsQ0FBQztHQUNXLHdCQUF3QixDQTREcEM7U0E1RFksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IERyYXcgfSBmcm9tICdvbC9pbnRlcmFjdGlvbic7XG5pbXBvcnQgeyBDb2xsZWN0aW9uLCBGZWF0dXJlIH0gZnJvbSAnb2wnO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnb2wvc291cmNlJztcbmltcG9ydCBHZW9tZXRyeVR5cGUgZnJvbSAnb2wvZ2VvbS9HZW9tZXRyeVR5cGUnO1xuaW1wb3J0IHsgU3R5bGUgfSBmcm9tICdvbC9zdHlsZSc7XG5pbXBvcnQgeyBEcmF3RXZlbnQsIEdlb21ldHJ5RnVuY3Rpb24gfSBmcm9tICdvbC9pbnRlcmFjdGlvbi9EcmF3JztcbmltcG9ydCB7IFN0eWxlRnVuY3Rpb24gfSBmcm9tICdvbC9zdHlsZS9TdHlsZSc7XG5pbXBvcnQgeyBDb25kaXRpb24gfSBmcm9tICdvbC9ldmVudHMvY29uZGl0aW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWludGVyYWN0aW9uLWRyYXcnLFxuICB0ZW1wbGF0ZTogJycsXG59KVxuZXhwb3J0IGNsYXNzIERyYXdJbnRlcmFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaW5zdGFuY2U6IERyYXc7XG5cbiAgQElucHV0KClcbiAgY2xpY2tUb2xlcmFuY2U/OiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIGZlYXR1cmVzPzogQ29sbGVjdGlvbjxGZWF0dXJlPjtcbiAgQElucHV0KClcbiAgc291cmNlPzogVmVjdG9yO1xuICBASW5wdXQoKVxuICBzbmFwVG9sZXJhbmNlPzogbnVtYmVyO1xuICBASW5wdXQoKVxuICB0eXBlOiBHZW9tZXRyeVR5cGU7XG4gIEBJbnB1dCgpXG4gIG1heFBvaW50cz86IG51bWJlcjtcbiAgQElucHV0KClcbiAgbWluUG9pbnRzPzogbnVtYmVyO1xuICBASW5wdXQoKVxuICBmaW5pc2hDb25kaXRpb24/OiBDb25kaXRpb247XG4gIEBJbnB1dCgpXG4gIHN0eWxlPzogU3R5bGUgfCBTdHlsZVtdIHwgU3R5bGVGdW5jdGlvbjtcbiAgQElucHV0KClcbiAgZ2VvbWV0cnlGdW5jdGlvbj86IEdlb21ldHJ5RnVuY3Rpb247XG4gIEBJbnB1dCgpXG4gIGdlb21ldHJ5TmFtZT86IHN0cmluZztcbiAgQElucHV0KClcbiAgY29uZGl0aW9uPzogQ29uZGl0aW9uO1xuICBASW5wdXQoKVxuICBmcmVlaGFuZENvbmRpdGlvbj86IENvbmRpdGlvbjtcbiAgQElucHV0KClcbiAgZnJlZWhhbmQ/OiBib29sZWFuO1xuICBASW5wdXQoKVxuICB3cmFwWD86IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpXG4gIG9sQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEcmF3RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBvbENoYW5nZUFjdGl2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhd0V2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgZHJhd0VuZCA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhd0V2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgZHJhd1N0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxEcmF3RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBwcm9wZXJ0eUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhd0V2ZW50PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBEcmF3KHRoaXMpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZScsIChldmVudDogRHJhd0V2ZW50KSA9PiB0aGlzLm9sQ2hhbmdlLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2U6YWN0aXZlJywgKGV2ZW50OiBEcmF3RXZlbnQpID0+IHRoaXMub2xDaGFuZ2VBY3RpdmUuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2RyYXdlbmQnLCAoZXZlbnQ6IERyYXdFdmVudCkgPT4gdGhpcy5kcmF3RW5kLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdkcmF3c3RhcnQnLCAoZXZlbnQ6IERyYXdFdmVudCkgPT4gdGhpcy5kcmF3U3RhcnQuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3Byb3BlcnR5Y2hhbmdlJywgKGV2ZW50OiBEcmF3RXZlbnQpID0+IHRoaXMucHJvcGVydHlDaGFuZ2UuZW1pdChldmVudCkpO1xuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZEludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XG4gIH1cbn1cbiJdfQ==