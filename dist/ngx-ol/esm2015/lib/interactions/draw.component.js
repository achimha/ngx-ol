import * as tslib_1 from "tslib";
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
        // TODO this.instance.on('change:active', (event: DrawEvent) => this.olChangeActive.emit(event));
        this.instance.on('drawend', (event) => this.drawEnd.emit(event));
        this.instance.on('drawstart', (event) => this.drawStart.emit(event));
        // TODO this.instance.on('propertychange', (event: DrawEvent) => this.propertyChange.emit(event));
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
};
DrawInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];
tslib_1.__decorate([
    Input()
], DrawInteractionComponent.prototype, "clickTolerance", void 0);
tslib_1.__decorate([
    Input()
], DrawInteractionComponent.prototype, "features", void 0);
tslib_1.__decorate([
    Input()
], DrawInteractionComponent.prototype, "source", void 0);
tslib_1.__decorate([
    Input()
], DrawInteractionComponent.prototype, "snapTolerance", void 0);
tslib_1.__decorate([
    Input()
], DrawInteractionComponent.prototype, "type", void 0);
tslib_1.__decorate([
    Input()
], DrawInteractionComponent.prototype, "maxPoints", void 0);
tslib_1.__decorate([
    Input()
], DrawInteractionComponent.prototype, "minPoints", void 0);
tslib_1.__decorate([
    Input()
], DrawInteractionComponent.prototype, "finishCondition", void 0);
tslib_1.__decorate([
    Input()
], DrawInteractionComponent.prototype, "style", void 0);
tslib_1.__decorate([
    Input()
], DrawInteractionComponent.prototype, "geometryFunction", void 0);
tslib_1.__decorate([
    Input()
], DrawInteractionComponent.prototype, "geometryName", void 0);
tslib_1.__decorate([
    Input()
], DrawInteractionComponent.prototype, "condition", void 0);
tslib_1.__decorate([
    Input()
], DrawInteractionComponent.prototype, "freehandCondition", void 0);
tslib_1.__decorate([
    Input()
], DrawInteractionComponent.prototype, "freehand", void 0);
tslib_1.__decorate([
    Input()
], DrawInteractionComponent.prototype, "wrapX", void 0);
tslib_1.__decorate([
    Output()
], DrawInteractionComponent.prototype, "olChange", void 0);
tslib_1.__decorate([
    Output()
], DrawInteractionComponent.prototype, "olChangeActive", void 0);
tslib_1.__decorate([
    Output()
], DrawInteractionComponent.prototype, "drawEnd", void 0);
tslib_1.__decorate([
    Output()
], DrawInteractionComponent.prototype, "drawStart", void 0);
tslib_1.__decorate([
    Output()
], DrawInteractionComponent.prototype, "propertyChange", void 0);
DrawInteractionComponent = tslib_1.__decorate([
    Component({
        selector: 'aol-interaction-draw',
        template: ''
    })
], DrawInteractionComponent);
export { DrawInteractionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvaW50ZXJhY3Rpb25zL2RyYXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBYXRDLElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXdCO0lBNkNuQyxZQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBVnJDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBRXpDLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUUvQyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUV4QyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUUxQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7SUFFUCxDQUFDO0lBRXpDLFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQWdCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDNUUsaUdBQWlHO1FBQ2pHLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQWdCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBZ0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNoRixrR0FBa0c7UUFDbEcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyRCxDQUFDO0NBQ0YsQ0FBQTs7WUFmMEIsWUFBWTs7QUF6Q3JDO0lBREMsS0FBSyxFQUFFO2dFQUNnQjtBQUV4QjtJQURDLEtBQUssRUFBRTswREFDdUI7QUFFL0I7SUFEQyxLQUFLLEVBQUU7d0RBQ1E7QUFFaEI7SUFEQyxLQUFLLEVBQUU7K0RBQ2U7QUFFdkI7SUFEQyxLQUFLLEVBQUU7c0RBQ0c7QUFFWDtJQURDLEtBQUssRUFBRTsyREFDVztBQUVuQjtJQURDLEtBQUssRUFBRTsyREFDVztBQUVuQjtJQURDLEtBQUssRUFBRTtpRUFDb0I7QUFFNUI7SUFEQyxLQUFLLEVBQUU7dURBQ2dDO0FBRXhDO0lBREMsS0FBSyxFQUFFO2tFQUM0QjtBQUVwQztJQURDLEtBQUssRUFBRTs4REFDYztBQUV0QjtJQURDLEtBQUssRUFBRTsyREFDYztBQUV0QjtJQURDLEtBQUssRUFBRTttRUFDc0I7QUFFOUI7SUFEQyxLQUFLLEVBQUU7MERBQ1c7QUFFbkI7SUFEQyxLQUFLLEVBQUU7dURBQ1E7QUFHaEI7SUFEQyxNQUFNLEVBQUU7MERBQ2dDO0FBRXpDO0lBREMsTUFBTSxFQUFFO2dFQUNzQztBQUUvQztJQURDLE1BQU0sRUFBRTt5REFDK0I7QUFFeEM7SUFEQyxNQUFNLEVBQUU7MkRBQ2lDO0FBRTFDO0lBREMsTUFBTSxFQUFFO2dFQUNzQztBQTNDcEMsd0JBQXdCO0lBSnBDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxzQkFBc0I7UUFDaEMsUUFBUSxFQUFFLEVBQUU7S0FDYixDQUFDO0dBQ1csd0JBQXdCLENBNERwQztTQTVEWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHJhdyB9IGZyb20gJ29sL2ludGVyYWN0aW9uJztcbmltcG9ydCB7IENvbGxlY3Rpb24sIEZlYXR1cmUgfSBmcm9tICdvbCc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICdvbC9zb3VyY2UnO1xuaW1wb3J0IHsgU3R5bGUgfSBmcm9tICdvbC9zdHlsZSc7XG5pbXBvcnQgeyBEcmF3RXZlbnQsIEdlb21ldHJ5RnVuY3Rpb24gfSBmcm9tICdvbC9pbnRlcmFjdGlvbi9EcmF3JztcbmltcG9ydCB7IFN0eWxlRnVuY3Rpb24gfSBmcm9tICdvbC9zdHlsZS9TdHlsZSc7XG5pbXBvcnQgeyBDb25kaXRpb24gfSBmcm9tICdvbC9ldmVudHMvY29uZGl0aW9uJztcbmltcG9ydCB7IFR5cGUgfSBmcm9tICdvbC9nZW9tL0dlb21ldHJ5JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWludGVyYWN0aW9uLWRyYXcnLFxuICB0ZW1wbGF0ZTogJycsXG59KVxuZXhwb3J0IGNsYXNzIERyYXdJbnRlcmFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaW5zdGFuY2U6IERyYXc7XG5cbiAgQElucHV0KClcbiAgY2xpY2tUb2xlcmFuY2U/OiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIGZlYXR1cmVzPzogQ29sbGVjdGlvbjxGZWF0dXJlPjtcbiAgQElucHV0KClcbiAgc291cmNlPzogVmVjdG9yO1xuICBASW5wdXQoKVxuICBzbmFwVG9sZXJhbmNlPzogbnVtYmVyO1xuICBASW5wdXQoKVxuICB0eXBlOiBUeXBlO1xuICBASW5wdXQoKVxuICBtYXhQb2ludHM/OiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIG1pblBvaW50cz86IG51bWJlcjtcbiAgQElucHV0KClcbiAgZmluaXNoQ29uZGl0aW9uPzogQ29uZGl0aW9uO1xuICBASW5wdXQoKVxuICBzdHlsZT86IFN0eWxlIHwgU3R5bGVbXSB8IFN0eWxlRnVuY3Rpb247XG4gIEBJbnB1dCgpXG4gIGdlb21ldHJ5RnVuY3Rpb24/OiBHZW9tZXRyeUZ1bmN0aW9uO1xuICBASW5wdXQoKVxuICBnZW9tZXRyeU5hbWU/OiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGNvbmRpdGlvbj86IENvbmRpdGlvbjtcbiAgQElucHV0KClcbiAgZnJlZWhhbmRDb25kaXRpb24/OiBDb25kaXRpb247XG4gIEBJbnB1dCgpXG4gIGZyZWVoYW5kPzogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgd3JhcFg/OiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKVxuICBvbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhd0V2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgb2xDaGFuZ2VBY3RpdmUgPSBuZXcgRXZlbnRFbWl0dGVyPERyYXdFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIGRyYXdFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPERyYXdFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIGRyYXdTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhd0V2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgcHJvcGVydHlDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERyYXdFdmVudD4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgRHJhdyh0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoZXZlbnQ6IERyYXdFdmVudCkgPT4gdGhpcy5vbENoYW5nZS5lbWl0KGV2ZW50KSk7XG4gICAgLy8gVE9ETyB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2U6YWN0aXZlJywgKGV2ZW50OiBEcmF3RXZlbnQpID0+IHRoaXMub2xDaGFuZ2VBY3RpdmUuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2RyYXdlbmQnLCAoZXZlbnQ6IERyYXdFdmVudCkgPT4gdGhpcy5kcmF3RW5kLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdkcmF3c3RhcnQnLCAoZXZlbnQ6IERyYXdFdmVudCkgPT4gdGhpcy5kcmF3U3RhcnQuZW1pdChldmVudCkpO1xuICAgIC8vIFRPRE8gdGhpcy5pbnN0YW5jZS5vbigncHJvcGVydHljaGFuZ2UnLCAoZXZlbnQ6IERyYXdFdmVudCkgPT4gdGhpcy5wcm9wZXJ0eUNoYW5nZS5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19