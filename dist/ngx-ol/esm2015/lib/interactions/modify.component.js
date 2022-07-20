import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MapComponent } from '../map.component';
import { Modify } from 'ol/interaction';
let ModifyInteractionComponent = class ModifyInteractionComponent {
    constructor(map) {
        this.map = map;
        this.modifyEnd = new EventEmitter();
        this.modifyStart = new EventEmitter();
        this.olChange = new EventEmitter();
        this.olChangeActive = new EventEmitter();
        this.propertyChange = new EventEmitter();
    }
    ngOnInit() {
        this.instance = new Modify(this);
        this.instance.on('change', (event) => this.olChange.emit(event));
        // TODO this.instance.on('change:active', (event: ModifyEvent) => this.olChangeActive.emit(event));
        // TODO this.instance.on('propertychange', (event: ModifyEvent) => this.propertyChange.emit(event));
        this.instance.on('modifyend', (event) => this.modifyEnd.emit(event));
        this.instance.on('modifystart', (event) => this.modifyStart.emit(event));
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
};
ModifyInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];
tslib_1.__decorate([
    Input()
], ModifyInteractionComponent.prototype, "condition", void 0);
tslib_1.__decorate([
    Input()
], ModifyInteractionComponent.prototype, "deleteCondition", void 0);
tslib_1.__decorate([
    Input()
], ModifyInteractionComponent.prototype, "pixelTolerance", void 0);
tslib_1.__decorate([
    Input()
], ModifyInteractionComponent.prototype, "style", void 0);
tslib_1.__decorate([
    Input()
], ModifyInteractionComponent.prototype, "features", void 0);
tslib_1.__decorate([
    Input()
], ModifyInteractionComponent.prototype, "wrapX", void 0);
tslib_1.__decorate([
    Input()
], ModifyInteractionComponent.prototype, "source", void 0);
tslib_1.__decorate([
    Output()
], ModifyInteractionComponent.prototype, "modifyEnd", void 0);
tslib_1.__decorate([
    Output()
], ModifyInteractionComponent.prototype, "modifyStart", void 0);
tslib_1.__decorate([
    Output()
], ModifyInteractionComponent.prototype, "olChange", void 0);
tslib_1.__decorate([
    Output()
], ModifyInteractionComponent.prototype, "olChangeActive", void 0);
tslib_1.__decorate([
    Output()
], ModifyInteractionComponent.prototype, "propertyChange", void 0);
ModifyInteractionComponent = tslib_1.__decorate([
    Component({
        selector: 'aol-interaction-modify',
        template: ''
    })
], ModifyInteractionComponent);
export { ModifyInteractionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kaWZ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9pbnRlcmFjdGlvbnMvbW9kaWZ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVl4QyxJQUFhLDBCQUEwQixHQUF2QyxNQUFhLDBCQUEwQjtJQTZCckMsWUFBb0IsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztRQVZyQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUU1QyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFlLENBQUM7UUFFOUMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFlLENBQUM7UUFFM0MsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBZSxDQUFDO1FBRWpELG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztJQUVULENBQUM7SUFFekMsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBa0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM5RSxtR0FBbUc7UUFDbkcsb0dBQW9HO1FBQ3BHLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQWtCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBa0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN0RixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Q0FDRixDQUFBOztZQWYwQixZQUFZOztBQXpCckM7SUFEQyxLQUFLLEVBQUU7NkRBQ2M7QUFFdEI7SUFEQyxLQUFLLEVBQUU7bUVBQ29CO0FBRTVCO0lBREMsS0FBSyxFQUFFO2tFQUNnQjtBQUV4QjtJQURDLEtBQUssRUFBRTt5REFDZ0M7QUFFeEM7SUFEQyxLQUFLLEVBQUU7NERBQ3NCO0FBRTlCO0lBREMsS0FBSyxFQUFFO3lEQUNRO0FBRWhCO0lBREMsS0FBSyxFQUFFOzBEQUNRO0FBR2hCO0lBREMsTUFBTSxFQUFFOzZEQUNtQztBQUU1QztJQURDLE1BQU0sRUFBRTsrREFDcUM7QUFFOUM7SUFEQyxNQUFNLEVBQUU7NERBQ2tDO0FBRTNDO0lBREMsTUFBTSxFQUFFO2tFQUN3QztBQUVqRDtJQURDLE1BQU0sRUFBRTtrRUFDd0M7QUEzQnRDLDBCQUEwQjtJQUp0QyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsd0JBQXdCO1FBQ2xDLFFBQVEsRUFBRSxFQUFFO0tBQ2IsQ0FBQztHQUNXLDBCQUEwQixDQTRDdEM7U0E1Q1ksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGlmeSB9IGZyb20gJ29sL2ludGVyYWN0aW9uJztcbmltcG9ydCB7IENvbGxlY3Rpb24sIEZlYXR1cmUgfSBmcm9tICdvbCc7XG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gJ29sL3N0eWxlJztcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJ29sL3NvdXJjZSc7XG5pbXBvcnQgeyBNb2RpZnlFdmVudCB9IGZyb20gJ29sL2ludGVyYWN0aW9uL01vZGlmeSc7XG5pbXBvcnQgeyBTdHlsZUZ1bmN0aW9uIH0gZnJvbSAnb2wvc3R5bGUvU3R5bGUnO1xuaW1wb3J0IHsgQ29uZGl0aW9uIH0gZnJvbSAnb2wvZXZlbnRzL2NvbmRpdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1pbnRlcmFjdGlvbi1tb2RpZnknLFxuICB0ZW1wbGF0ZTogJycsXG59KVxuZXhwb3J0IGNsYXNzIE1vZGlmeUludGVyYWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBpbnN0YW5jZTogTW9kaWZ5O1xuXG4gIEBJbnB1dCgpXG4gIGNvbmRpdGlvbj86IENvbmRpdGlvbjtcbiAgQElucHV0KClcbiAgZGVsZXRlQ29uZGl0aW9uPzogQ29uZGl0aW9uO1xuICBASW5wdXQoKVxuICBwaXhlbFRvbGVyYW5jZT86IG51bWJlcjtcbiAgQElucHV0KClcbiAgc3R5bGU/OiBTdHlsZSB8IFN0eWxlW10gfCBTdHlsZUZ1bmN0aW9uO1xuICBASW5wdXQoKVxuICBmZWF0dXJlczogQ29sbGVjdGlvbjxGZWF0dXJlPjtcbiAgQElucHV0KClcbiAgd3JhcFg/OiBib29sZWFuO1xuICBASW5wdXQoKVxuICBzb3VyY2U/OiBWZWN0b3I7XG5cbiAgQE91dHB1dCgpXG4gIG1vZGlmeUVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8TW9kaWZ5RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBtb2RpZnlTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8TW9kaWZ5RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBvbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TW9kaWZ5RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBvbENoYW5nZUFjdGl2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8TW9kaWZ5RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBwcm9wZXJ0eUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TW9kaWZ5RXZlbnQ+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IE1vZGlmeSh0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoZXZlbnQ6IE1vZGlmeUV2ZW50KSA9PiB0aGlzLm9sQ2hhbmdlLmVtaXQoZXZlbnQpKTtcbiAgICAvLyBUT0RPIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZTphY3RpdmUnLCAoZXZlbnQ6IE1vZGlmeUV2ZW50KSA9PiB0aGlzLm9sQ2hhbmdlQWN0aXZlLmVtaXQoZXZlbnQpKTtcbiAgICAvLyBUT0RPIHRoaXMuaW5zdGFuY2Uub24oJ3Byb3BlcnR5Y2hhbmdlJywgKGV2ZW50OiBNb2RpZnlFdmVudCkgPT4gdGhpcy5wcm9wZXJ0eUNoYW5nZS5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignbW9kaWZ5ZW5kJywgKGV2ZW50OiBNb2RpZnlFdmVudCkgPT4gdGhpcy5tb2RpZnlFbmQuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ21vZGlmeXN0YXJ0JywgKGV2ZW50OiBNb2RpZnlFdmVudCkgPT4gdGhpcy5tb2RpZnlTdGFydC5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19