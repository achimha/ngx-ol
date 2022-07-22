import { Component, Input, EventEmitter, Output } from '@angular/core';
import { MapComponent } from '../map.component';
import { Draw } from 'ol/interaction';
export class DrawInteractionComponent {
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
}
DrawInteractionComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-interaction-draw',
                template: ''
            },] }
];
DrawInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];
DrawInteractionComponent.propDecorators = {
    clickTolerance: [{ type: Input }],
    features: [{ type: Input }],
    source: [{ type: Input }],
    snapTolerance: [{ type: Input }],
    type: [{ type: Input }],
    maxPoints: [{ type: Input }],
    minPoints: [{ type: Input }],
    finishCondition: [{ type: Input }],
    style: [{ type: Input }],
    geometryFunction: [{ type: Input }],
    geometryName: [{ type: Input }],
    condition: [{ type: Input }],
    freehandCondition: [{ type: Input }],
    freehand: [{ type: Input }],
    wrapX: [{ type: Input }],
    olChange: [{ type: Output }],
    olChangeActive: [{ type: Output }],
    drawEnd: [{ type: Output }],
    drawStart: [{ type: Output }],
    propertyChange: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FjaGltaGEvUHJvamVjdHMvbmd4LW9sL3Byb2plY3RzL25neC1vbC9zcmMvIiwic291cmNlcyI6WyJsaWIvaW50ZXJhY3Rpb25zL2RyYXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFhdEMsTUFBTSxPQUFPLHdCQUF3QjtJQTZDbkMsWUFBb0IsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztRQVZyQyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUV6QyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUFFL0MsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUFFeEMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUFFMUMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO0lBRVAsQ0FBQztJQUV6QyxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFnQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzVFLGlHQUFpRztRQUNqRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFnQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQWdCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDaEYsa0dBQWtHO1FBQ2xHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7O1lBL0RGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUUsRUFBRTthQUNiOzs7WUFiUSxZQUFZOzs7NkJBaUJsQixLQUFLO3VCQUVMLEtBQUs7cUJBRUwsS0FBSzs0QkFFTCxLQUFLO21CQUVMLEtBQUs7d0JBRUwsS0FBSzt3QkFFTCxLQUFLOzhCQUVMLEtBQUs7b0JBRUwsS0FBSzsrQkFFTCxLQUFLOzJCQUVMLEtBQUs7d0JBRUwsS0FBSztnQ0FFTCxLQUFLO3VCQUVMLEtBQUs7b0JBRUwsS0FBSzt1QkFHTCxNQUFNOzZCQUVOLE1BQU07c0JBRU4sTUFBTTt3QkFFTixNQUFNOzZCQUVOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHJhdyB9IGZyb20gJ29sL2ludGVyYWN0aW9uJztcbmltcG9ydCB7IENvbGxlY3Rpb24sIEZlYXR1cmUgfSBmcm9tICdvbCc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICdvbC9zb3VyY2UnO1xuaW1wb3J0IHsgU3R5bGUgfSBmcm9tICdvbC9zdHlsZSc7XG5pbXBvcnQgeyBEcmF3RXZlbnQsIEdlb21ldHJ5RnVuY3Rpb24gfSBmcm9tICdvbC9pbnRlcmFjdGlvbi9EcmF3JztcbmltcG9ydCB7IFN0eWxlRnVuY3Rpb24gfSBmcm9tICdvbC9zdHlsZS9TdHlsZSc7XG5pbXBvcnQgeyBDb25kaXRpb24gfSBmcm9tICdvbC9ldmVudHMvY29uZGl0aW9uJztcbmltcG9ydCB7IFR5cGUgfSBmcm9tICdvbC9nZW9tL0dlb21ldHJ5JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWludGVyYWN0aW9uLWRyYXcnLFxuICB0ZW1wbGF0ZTogJycsXG59KVxuZXhwb3J0IGNsYXNzIERyYXdJbnRlcmFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaW5zdGFuY2U6IERyYXc7XG5cbiAgQElucHV0KClcbiAgY2xpY2tUb2xlcmFuY2U/OiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIGZlYXR1cmVzPzogQ29sbGVjdGlvbjxGZWF0dXJlPjtcbiAgQElucHV0KClcbiAgc291cmNlPzogVmVjdG9yO1xuICBASW5wdXQoKVxuICBzbmFwVG9sZXJhbmNlPzogbnVtYmVyO1xuICBASW5wdXQoKVxuICB0eXBlOiBUeXBlO1xuICBASW5wdXQoKVxuICBtYXhQb2ludHM/OiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIG1pblBvaW50cz86IG51bWJlcjtcbiAgQElucHV0KClcbiAgZmluaXNoQ29uZGl0aW9uPzogQ29uZGl0aW9uO1xuICBASW5wdXQoKVxuICBzdHlsZT86IFN0eWxlIHwgU3R5bGVbXSB8IFN0eWxlRnVuY3Rpb247XG4gIEBJbnB1dCgpXG4gIGdlb21ldHJ5RnVuY3Rpb24/OiBHZW9tZXRyeUZ1bmN0aW9uO1xuICBASW5wdXQoKVxuICBnZW9tZXRyeU5hbWU/OiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGNvbmRpdGlvbj86IENvbmRpdGlvbjtcbiAgQElucHV0KClcbiAgZnJlZWhhbmRDb25kaXRpb24/OiBDb25kaXRpb247XG4gIEBJbnB1dCgpXG4gIGZyZWVoYW5kPzogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgd3JhcFg/OiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKVxuICBvbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhd0V2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgb2xDaGFuZ2VBY3RpdmUgPSBuZXcgRXZlbnRFbWl0dGVyPERyYXdFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIGRyYXdFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPERyYXdFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIGRyYXdTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhd0V2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgcHJvcGVydHlDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERyYXdFdmVudD4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgRHJhdyh0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoZXZlbnQ6IERyYXdFdmVudCkgPT4gdGhpcy5vbENoYW5nZS5lbWl0KGV2ZW50KSk7XG4gICAgLy8gVE9ETyB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2U6YWN0aXZlJywgKGV2ZW50OiBEcmF3RXZlbnQpID0+IHRoaXMub2xDaGFuZ2VBY3RpdmUuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2RyYXdlbmQnLCAoZXZlbnQ6IERyYXdFdmVudCkgPT4gdGhpcy5kcmF3RW5kLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdkcmF3c3RhcnQnLCAoZXZlbnQ6IERyYXdFdmVudCkgPT4gdGhpcy5kcmF3U3RhcnQuZW1pdChldmVudCkpO1xuICAgIC8vIFRPRE8gdGhpcy5pbnN0YW5jZS5vbigncHJvcGVydHljaGFuZ2UnLCAoZXZlbnQ6IERyYXdFdmVudCkgPT4gdGhpcy5wcm9wZXJ0eUNoYW5nZS5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19