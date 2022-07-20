import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MapComponent } from '../map.component';
import { Select } from 'ol/interaction';
let SelectInteractionComponent = class SelectInteractionComponent {
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
};
SelectInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];
__decorate([
    Input()
], SelectInteractionComponent.prototype, "addCondition", void 0);
__decorate([
    Input()
], SelectInteractionComponent.prototype, "condition", void 0);
__decorate([
    Input()
], SelectInteractionComponent.prototype, "layers", void 0);
__decorate([
    Input()
], SelectInteractionComponent.prototype, "style", void 0);
__decorate([
    Input()
], SelectInteractionComponent.prototype, "removeCondition", void 0);
__decorate([
    Input()
], SelectInteractionComponent.prototype, "toggleCondition", void 0);
__decorate([
    Input()
], SelectInteractionComponent.prototype, "multi", void 0);
__decorate([
    Input()
], SelectInteractionComponent.prototype, "features", void 0);
__decorate([
    Input()
], SelectInteractionComponent.prototype, "filter", void 0);
__decorate([
    Input()
], SelectInteractionComponent.prototype, "wrapX", void 0);
__decorate([
    Output()
], SelectInteractionComponent.prototype, "olChange", void 0);
__decorate([
    Output()
], SelectInteractionComponent.prototype, "olSelect", void 0);
__decorate([
    Output()
], SelectInteractionComponent.prototype, "propertyChange", void 0);
SelectInteractionComponent = __decorate([
    Component({
        selector: 'aol-interaction-select',
        template: ''
    })
], SelectInteractionComponent);
export { SelectInteractionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9pbnRlcmFjdGlvbnMvc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVl4QyxJQUFhLDBCQUEwQixHQUF2QyxNQUFhLDBCQUEwQjtJQStCckMsWUFBb0IsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztRQU5yQyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUUzQyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUUzQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFlLENBQUM7SUFFVCxDQUFDO0lBRXpDLFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWpDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQWtCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDOUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBa0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM5RSxvR0FBb0c7UUFFcEcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyRCxDQUFDO0NBQ0YsQ0FBQTs7WUFmMEIsWUFBWTs7QUEzQnJDO0lBREMsS0FBSyxFQUFFO2dFQUNpQjtBQUV6QjtJQURDLEtBQUssRUFBRTs2REFDYztBQUV0QjtJQURDLEtBQUssRUFBRTswREFDdUM7QUFFL0M7SUFEQyxLQUFLLEVBQUU7eURBQ2dDO0FBRXhDO0lBREMsS0FBSyxFQUFFO21FQUNvQjtBQUU1QjtJQURDLEtBQUssRUFBRTttRUFDb0I7QUFFNUI7SUFEQyxLQUFLLEVBQUU7eURBQ1E7QUFFaEI7SUFEQyxLQUFLLEVBQUU7NERBQ3VCO0FBRS9CO0lBREMsS0FBSyxFQUFFOzBEQUNnQjtBQUV4QjtJQURDLEtBQUssRUFBRTt5REFDUTtBQUdoQjtJQURDLE1BQU0sRUFBRTs0REFDa0M7QUFFM0M7SUFEQyxNQUFNLEVBQUU7NERBQ2tDO0FBRTNDO0lBREMsTUFBTSxFQUFFO2tFQUN3QztBQTdCdEMsMEJBQTBCO0lBSnRDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSx3QkFBd0I7UUFDbEMsUUFBUSxFQUFFLEVBQUU7S0FDYixDQUFDO0dBQ1csMEJBQTBCLENBOEN0QztTQTlDWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xuaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICdvbC9sYXllcic7XG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gJ29sL3N0eWxlJztcbmltcG9ydCB7IENvbGxlY3Rpb24sIEZlYXR1cmUgfSBmcm9tICdvbCc7XG5pbXBvcnQgeyBTZWxlY3RFdmVudCwgRmlsdGVyRnVuY3Rpb24gfSBmcm9tICdvbC9pbnRlcmFjdGlvbi9TZWxlY3QnO1xuaW1wb3J0IHsgU3R5bGVGdW5jdGlvbiB9IGZyb20gJ29sL3N0eWxlL1N0eWxlJztcbmltcG9ydCB7IENvbmRpdGlvbiB9IGZyb20gJ29sL2V2ZW50cy9jb25kaXRpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtaW50ZXJhY3Rpb24tc2VsZWN0JyxcbiAgdGVtcGxhdGU6ICcnLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RJbnRlcmFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaW5zdGFuY2U6IFNlbGVjdDtcblxuICBASW5wdXQoKVxuICBhZGRDb25kaXRpb24/OiBDb25kaXRpb247XG4gIEBJbnB1dCgpXG4gIGNvbmRpdGlvbj86IENvbmRpdGlvbjtcbiAgQElucHV0KClcbiAgbGF5ZXJzPzogTGF5ZXJbXSB8ICgobGF5ZXI6IExheWVyKSA9PiBib29sZWFuKTtcbiAgQElucHV0KClcbiAgc3R5bGU/OiBTdHlsZSB8IFN0eWxlW10gfCBTdHlsZUZ1bmN0aW9uO1xuICBASW5wdXQoKVxuICByZW1vdmVDb25kaXRpb24/OiBDb25kaXRpb247XG4gIEBJbnB1dCgpXG4gIHRvZ2dsZUNvbmRpdGlvbj86IENvbmRpdGlvbjtcbiAgQElucHV0KClcbiAgbXVsdGk/OiBib29sZWFuO1xuICBASW5wdXQoKVxuICBmZWF0dXJlcz86IENvbGxlY3Rpb248RmVhdHVyZT47XG4gIEBJbnB1dCgpXG4gIGZpbHRlcj86IEZpbHRlckZ1bmN0aW9uO1xuICBASW5wdXQoKVxuICB3cmFwWD86IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpXG4gIG9sQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxTZWxlY3RFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIG9sU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxTZWxlY3RFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIHByb3BlcnR5Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxTZWxlY3RFdmVudD4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgU2VsZWN0KHRoaXMpO1xuXG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlJywgKGV2ZW50OiBTZWxlY3RFdmVudCkgPT4gdGhpcy5vbENoYW5nZS5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignc2VsZWN0JywgKGV2ZW50OiBTZWxlY3RFdmVudCkgPT4gdGhpcy5vbFNlbGVjdC5lbWl0KGV2ZW50KSk7XG4gICAgLy8gVE9ETyB0aGlzLmluc3RhbmNlLm9uKCdwcm9wZXJ0eWNoYW5nZScsIChldmVudDogU2VsZWN0RXZlbnQpID0+IHRoaXMucHJvcGVydHlDaGFuZ2UuZW1pdChldmVudCkpO1xuXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19