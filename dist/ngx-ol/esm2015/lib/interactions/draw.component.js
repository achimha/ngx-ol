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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvaW50ZXJhY3Rpb25zL2RyYXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBYXRDLElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXdCO0lBNkNuQyxZQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBVnJDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBRXpDLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUUvQyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUV4QyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUUxQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7SUFFUCxDQUFDO0lBRXpDLFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQWdCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsS0FBZ0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFnQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQWdCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxLQUFnQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzFGLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckQsQ0FBQztDQUNGLENBQUE7O1lBZjBCLFlBQVk7O0FBekNyQztJQURDLEtBQUssRUFBRTtnRUFDZ0I7QUFFeEI7SUFEQyxLQUFLLEVBQUU7MERBQ3VCO0FBRS9CO0lBREMsS0FBSyxFQUFFO3dEQUNRO0FBRWhCO0lBREMsS0FBSyxFQUFFOytEQUNlO0FBRXZCO0lBREMsS0FBSyxFQUFFO3NEQUNXO0FBRW5CO0lBREMsS0FBSyxFQUFFOzJEQUNXO0FBRW5CO0lBREMsS0FBSyxFQUFFOzJEQUNXO0FBRW5CO0lBREMsS0FBSyxFQUFFO2lFQUNvQjtBQUU1QjtJQURDLEtBQUssRUFBRTt1REFDZ0M7QUFFeEM7SUFEQyxLQUFLLEVBQUU7a0VBQzRCO0FBRXBDO0lBREMsS0FBSyxFQUFFOzhEQUNjO0FBRXRCO0lBREMsS0FBSyxFQUFFOzJEQUNjO0FBRXRCO0lBREMsS0FBSyxFQUFFO21FQUNzQjtBQUU5QjtJQURDLEtBQUssRUFBRTswREFDVztBQUVuQjtJQURDLEtBQUssRUFBRTt1REFDUTtBQUdoQjtJQURDLE1BQU0sRUFBRTswREFDZ0M7QUFFekM7SUFEQyxNQUFNLEVBQUU7Z0VBQ3NDO0FBRS9DO0lBREMsTUFBTSxFQUFFO3lEQUMrQjtBQUV4QztJQURDLE1BQU0sRUFBRTsyREFDaUM7QUFFMUM7SUFEQyxNQUFNLEVBQUU7Z0VBQ3NDO0FBM0NwQyx3QkFBd0I7SUFKcEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHNCQUFzQjtRQUNoQyxRQUFRLEVBQUUsRUFBRTtLQUNiLENBQUM7R0FDVyx3QkFBd0IsQ0E0RHBDO1NBNURZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEcmF3IH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xuaW1wb3J0IHsgQ29sbGVjdGlvbiwgRmVhdHVyZSB9IGZyb20gJ29sJztcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJ29sL3NvdXJjZSc7XG5pbXBvcnQgR2VvbWV0cnlUeXBlIGZyb20gJ29sL2dlb20vR2VvbWV0cnlUeXBlJztcbmltcG9ydCB7IFN0eWxlIH0gZnJvbSAnb2wvc3R5bGUnO1xuaW1wb3J0IHsgRHJhd0V2ZW50LCBHZW9tZXRyeUZ1bmN0aW9uIH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24vRHJhdyc7XG5pbXBvcnQgeyBTdHlsZUZ1bmN0aW9uIH0gZnJvbSAnb2wvc3R5bGUvU3R5bGUnO1xuaW1wb3J0IHsgQ29uZGl0aW9uIH0gZnJvbSAnb2wvZXZlbnRzL2NvbmRpdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1pbnRlcmFjdGlvbi1kcmF3JyxcbiAgdGVtcGxhdGU6ICcnLFxufSlcbmV4cG9ydCBjbGFzcyBEcmF3SW50ZXJhY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGluc3RhbmNlOiBEcmF3O1xuXG4gIEBJbnB1dCgpXG4gIGNsaWNrVG9sZXJhbmNlPzogbnVtYmVyO1xuICBASW5wdXQoKVxuICBmZWF0dXJlcz86IENvbGxlY3Rpb248RmVhdHVyZT47XG4gIEBJbnB1dCgpXG4gIHNvdXJjZT86IFZlY3RvcjtcbiAgQElucHV0KClcbiAgc25hcFRvbGVyYW5jZT86IG51bWJlcjtcbiAgQElucHV0KClcbiAgdHlwZTogR2VvbWV0cnlUeXBlO1xuICBASW5wdXQoKVxuICBtYXhQb2ludHM/OiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIG1pblBvaW50cz86IG51bWJlcjtcbiAgQElucHV0KClcbiAgZmluaXNoQ29uZGl0aW9uPzogQ29uZGl0aW9uO1xuICBASW5wdXQoKVxuICBzdHlsZT86IFN0eWxlIHwgU3R5bGVbXSB8IFN0eWxlRnVuY3Rpb247XG4gIEBJbnB1dCgpXG4gIGdlb21ldHJ5RnVuY3Rpb24/OiBHZW9tZXRyeUZ1bmN0aW9uO1xuICBASW5wdXQoKVxuICBnZW9tZXRyeU5hbWU/OiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGNvbmRpdGlvbj86IENvbmRpdGlvbjtcbiAgQElucHV0KClcbiAgZnJlZWhhbmRDb25kaXRpb24/OiBDb25kaXRpb247XG4gIEBJbnB1dCgpXG4gIGZyZWVoYW5kPzogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgd3JhcFg/OiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKVxuICBvbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhd0V2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgb2xDaGFuZ2VBY3RpdmUgPSBuZXcgRXZlbnRFbWl0dGVyPERyYXdFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIGRyYXdFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPERyYXdFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIGRyYXdTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhd0V2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgcHJvcGVydHlDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERyYXdFdmVudD4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgRHJhdyh0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoZXZlbnQ6IERyYXdFdmVudCkgPT4gdGhpcy5vbENoYW5nZS5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlOmFjdGl2ZScsIChldmVudDogRHJhd0V2ZW50KSA9PiB0aGlzLm9sQ2hhbmdlQWN0aXZlLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdkcmF3ZW5kJywgKGV2ZW50OiBEcmF3RXZlbnQpID0+IHRoaXMuZHJhd0VuZC5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignZHJhd3N0YXJ0JywgKGV2ZW50OiBEcmF3RXZlbnQpID0+IHRoaXMuZHJhd1N0YXJ0LmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdwcm9wZXJ0eWNoYW5nZScsIChldmVudDogRHJhd0V2ZW50KSA9PiB0aGlzLnByb3BlcnR5Q2hhbmdlLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=