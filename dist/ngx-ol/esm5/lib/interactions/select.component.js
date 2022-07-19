import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MapComponent } from '../map.component';
import { Select } from 'ol/interaction';
var SelectInteractionComponent = /** @class */ (function () {
    function SelectInteractionComponent(map) {
        this.map = map;
        this.olChange = new EventEmitter();
        this.olSelect = new EventEmitter();
        this.propertyChange = new EventEmitter();
    }
    SelectInteractionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.instance = new Select(this);
        this.instance.on('change', function (event) { return _this.olChange.emit(event); });
        this.instance.on('select', function (event) { return _this.olSelect.emit(event); });
        this.instance.on('propertychange', function (event) { return _this.propertyChange.emit(event); });
        this.map.instance.addInteraction(this.instance);
    };
    SelectInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    SelectInteractionComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
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
    return SelectInteractionComponent;
}());
export { SelectInteractionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9pbnRlcmFjdGlvbnMvc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVl4QztJQStCRSxvQ0FBb0IsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztRQU5yQyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUUzQyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUUzQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFlLENBQUM7SUFFVCxDQUFDO0lBRXpDLDZDQUFRLEdBQVI7UUFBQSxpQkFRQztRQVBDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUMsS0FBa0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUF6QixDQUF5QixDQUFDLENBQUM7UUFDOUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUMsS0FBa0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUF6QixDQUF5QixDQUFDLENBQUM7UUFDOUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsVUFBQyxLQUFrQixJQUFLLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQS9CLENBQStCLENBQUMsQ0FBQztRQUU1RixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxnREFBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7O2dCQWR3QixZQUFZOztJQTNCckM7UUFEQyxLQUFLLEVBQUU7b0VBQ2lCO0lBRXpCO1FBREMsS0FBSyxFQUFFO2lFQUNjO0lBRXRCO1FBREMsS0FBSyxFQUFFOzhEQUN1QztJQUUvQztRQURDLEtBQUssRUFBRTs2REFDZ0M7SUFFeEM7UUFEQyxLQUFLLEVBQUU7dUVBQ29CO0lBRTVCO1FBREMsS0FBSyxFQUFFO3VFQUNvQjtJQUU1QjtRQURDLEtBQUssRUFBRTs2REFDUTtJQUVoQjtRQURDLEtBQUssRUFBRTtnRUFDdUI7SUFFL0I7UUFEQyxLQUFLLEVBQUU7OERBQ2dCO0lBRXhCO1FBREMsS0FBSyxFQUFFOzZEQUNRO0lBR2hCO1FBREMsTUFBTSxFQUFFO2dFQUNrQztJQUUzQztRQURDLE1BQU0sRUFBRTtnRUFDa0M7SUFFM0M7UUFEQyxNQUFNLEVBQUU7c0VBQ3dDO0lBN0J0QywwQkFBMEI7UUFKdEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQyxRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUM7T0FDVywwQkFBMEIsQ0E4Q3RDO0lBQUQsaUNBQUM7Q0FBQSxBQTlDRCxJQThDQztTQTlDWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xuaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICdvbC9sYXllcic7XG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gJ29sL3N0eWxlJztcbmltcG9ydCB7IENvbGxlY3Rpb24sIEZlYXR1cmUgfSBmcm9tICdvbCc7XG5pbXBvcnQgeyBTZWxlY3RFdmVudCwgRmlsdGVyRnVuY3Rpb24gfSBmcm9tICdvbC9pbnRlcmFjdGlvbi9TZWxlY3QnO1xuaW1wb3J0IHsgU3R5bGVGdW5jdGlvbiB9IGZyb20gJ29sL3N0eWxlL1N0eWxlJztcbmltcG9ydCB7IENvbmRpdGlvbiB9IGZyb20gJ29sL2V2ZW50cy9jb25kaXRpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtaW50ZXJhY3Rpb24tc2VsZWN0JyxcbiAgdGVtcGxhdGU6ICcnLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RJbnRlcmFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaW5zdGFuY2U6IFNlbGVjdDtcblxuICBASW5wdXQoKVxuICBhZGRDb25kaXRpb24/OiBDb25kaXRpb247XG4gIEBJbnB1dCgpXG4gIGNvbmRpdGlvbj86IENvbmRpdGlvbjtcbiAgQElucHV0KClcbiAgbGF5ZXJzPzogTGF5ZXJbXSB8ICgobGF5ZXI6IExheWVyKSA9PiBib29sZWFuKTtcbiAgQElucHV0KClcbiAgc3R5bGU/OiBTdHlsZSB8IFN0eWxlW10gfCBTdHlsZUZ1bmN0aW9uO1xuICBASW5wdXQoKVxuICByZW1vdmVDb25kaXRpb24/OiBDb25kaXRpb247XG4gIEBJbnB1dCgpXG4gIHRvZ2dsZUNvbmRpdGlvbj86IENvbmRpdGlvbjtcbiAgQElucHV0KClcbiAgbXVsdGk/OiBib29sZWFuO1xuICBASW5wdXQoKVxuICBmZWF0dXJlcz86IENvbGxlY3Rpb248RmVhdHVyZT47XG4gIEBJbnB1dCgpXG4gIGZpbHRlcj86IEZpbHRlckZ1bmN0aW9uO1xuICBASW5wdXQoKVxuICB3cmFwWD86IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpXG4gIG9sQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxTZWxlY3RFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIG9sU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxTZWxlY3RFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIHByb3BlcnR5Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxTZWxlY3RFdmVudD4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgU2VsZWN0KHRoaXMpO1xuXG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlJywgKGV2ZW50OiBTZWxlY3RFdmVudCkgPT4gdGhpcy5vbENoYW5nZS5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignc2VsZWN0JywgKGV2ZW50OiBTZWxlY3RFdmVudCkgPT4gdGhpcy5vbFNlbGVjdC5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbigncHJvcGVydHljaGFuZ2UnLCAoZXZlbnQ6IFNlbGVjdEV2ZW50KSA9PiB0aGlzLnByb3BlcnR5Q2hhbmdlLmVtaXQoZXZlbnQpKTtcblxuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZEludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XG4gIH1cbn1cbiJdfQ==