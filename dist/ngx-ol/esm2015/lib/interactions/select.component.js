import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MapComponent } from '../map.component';
import { Select } from 'ol/interaction';
export class SelectInteractionComponent {
    constructor(map) {
        this.map = map;
        this.olChange = new EventEmitter();
        this.olSelect = new EventEmitter();
        this.propertyChange = new EventEmitter();
    }
    ngOnInit() {
        this.instance = new Select(this);
        this.instance.on('change', (event) => this.olChange.emit(event));
        this.instance.on('select', (event) => this.olSelect.emit(event));
        // TODO this.instance.on('propertychange', (event: SelectEvent) => this.propertyChange.emit(event));
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
}
SelectInteractionComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-interaction-select',
                template: ''
            },] }
];
SelectInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];
SelectInteractionComponent.propDecorators = {
    addCondition: [{ type: Input }],
    condition: [{ type: Input }],
    layers: [{ type: Input }],
    style: [{ type: Input }],
    removeCondition: [{ type: Input }],
    toggleCondition: [{ type: Input }],
    multi: [{ type: Input }],
    features: [{ type: Input }],
    filter: [{ type: Input }],
    wrapX: [{ type: Input }],
    olChange: [{ type: Output }],
    olSelect: [{ type: Output }],
    propertyChange: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWNoaW1oYS9Qcm9qZWN0cy9uZ3gtb2wvcHJvamVjdHMvbmd4LW9sL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9pbnRlcmFjdGlvbnMvc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBWXhDLE1BQU0sT0FBTywwQkFBMEI7SUErQnJDLFlBQW9CLEdBQWlCO1FBQWpCLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFOckMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFlLENBQUM7UUFFM0MsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFlLENBQUM7UUFFM0MsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBZSxDQUFDO0lBRVQsQ0FBQztJQUV6QyxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVqQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFrQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQWtCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDOUUsb0dBQW9HO1FBRXBHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7O1lBakRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxRQUFRLEVBQUUsRUFBRTthQUNiOzs7WUFaUSxZQUFZOzs7MkJBZ0JsQixLQUFLO3dCQUVMLEtBQUs7cUJBRUwsS0FBSztvQkFFTCxLQUFLOzhCQUVMLEtBQUs7OEJBRUwsS0FBSztvQkFFTCxLQUFLO3VCQUVMLEtBQUs7cUJBRUwsS0FBSztvQkFFTCxLQUFLO3VCQUdMLE1BQU07dUJBRU4sTUFBTTs2QkFFTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJ29sL2ludGVyYWN0aW9uJztcbmltcG9ydCB7IExheWVyIH0gZnJvbSAnb2wvbGF5ZXInO1xuaW1wb3J0IHsgU3R5bGUgfSBmcm9tICdvbC9zdHlsZSc7XG5pbXBvcnQgeyBDb2xsZWN0aW9uLCBGZWF0dXJlIH0gZnJvbSAnb2wnO1xuaW1wb3J0IHsgU2VsZWN0RXZlbnQsIEZpbHRlckZ1bmN0aW9uIH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24vU2VsZWN0JztcbmltcG9ydCB7IFN0eWxlRnVuY3Rpb24gfSBmcm9tICdvbC9zdHlsZS9TdHlsZSc7XG5pbXBvcnQgeyBDb25kaXRpb24gfSBmcm9tICdvbC9ldmVudHMvY29uZGl0aW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWludGVyYWN0aW9uLXNlbGVjdCcsXG4gIHRlbXBsYXRlOiAnJyxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0SW50ZXJhY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGluc3RhbmNlOiBTZWxlY3Q7XG5cbiAgQElucHV0KClcbiAgYWRkQ29uZGl0aW9uPzogQ29uZGl0aW9uO1xuICBASW5wdXQoKVxuICBjb25kaXRpb24/OiBDb25kaXRpb247XG4gIEBJbnB1dCgpXG4gIGxheWVycz86IExheWVyW10gfCAoKGxheWVyOiBMYXllcikgPT4gYm9vbGVhbik7XG4gIEBJbnB1dCgpXG4gIHN0eWxlPzogU3R5bGUgfCBTdHlsZVtdIHwgU3R5bGVGdW5jdGlvbjtcbiAgQElucHV0KClcbiAgcmVtb3ZlQ29uZGl0aW9uPzogQ29uZGl0aW9uO1xuICBASW5wdXQoKVxuICB0b2dnbGVDb25kaXRpb24/OiBDb25kaXRpb247XG4gIEBJbnB1dCgpXG4gIG11bHRpPzogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgZmVhdHVyZXM/OiBDb2xsZWN0aW9uPEZlYXR1cmU+O1xuICBASW5wdXQoKVxuICBmaWx0ZXI/OiBGaWx0ZXJGdW5jdGlvbjtcbiAgQElucHV0KClcbiAgd3JhcFg/OiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKVxuICBvbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8U2VsZWN0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBvbFNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8U2VsZWN0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBwcm9wZXJ0eUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8U2VsZWN0RXZlbnQ+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFNlbGVjdCh0aGlzKTtcblxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZScsIChldmVudDogU2VsZWN0RXZlbnQpID0+IHRoaXMub2xDaGFuZ2UuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3NlbGVjdCcsIChldmVudDogU2VsZWN0RXZlbnQpID0+IHRoaXMub2xTZWxlY3QuZW1pdChldmVudCkpO1xuICAgIC8vIFRPRE8gdGhpcy5pbnN0YW5jZS5vbigncHJvcGVydHljaGFuZ2UnLCAoZXZlbnQ6IFNlbGVjdEV2ZW50KSA9PiB0aGlzLnByb3BlcnR5Q2hhbmdlLmVtaXQoZXZlbnQpKTtcblxuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZEludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XG4gIH1cbn1cbiJdfQ==