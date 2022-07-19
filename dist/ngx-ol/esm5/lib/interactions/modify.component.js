import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MapComponent } from '../map.component';
import { Modify } from 'ol/interaction';
var ModifyInteractionComponent = /** @class */ (function () {
    function ModifyInteractionComponent(map) {
        this.map = map;
        this.modifyEnd = new EventEmitter();
        this.modifyStart = new EventEmitter();
        this.olChange = new EventEmitter();
        this.olChangeActive = new EventEmitter();
        this.propertyChange = new EventEmitter();
    }
    ModifyInteractionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.instance = new Modify(this);
        this.instance.on('change', function (event) { return _this.olChange.emit(event); });
        this.instance.on('change:active', function (event) { return _this.olChangeActive.emit(event); });
        this.instance.on('propertychange', function (event) { return _this.propertyChange.emit(event); });
        this.instance.on('modifyend', function (event) { return _this.modifyEnd.emit(event); });
        this.instance.on('modifystart', function (event) { return _this.modifyStart.emit(event); });
        this.map.instance.addInteraction(this.instance);
    };
    ModifyInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    ModifyInteractionComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    __decorate([
        Input()
    ], ModifyInteractionComponent.prototype, "condition", void 0);
    __decorate([
        Input()
    ], ModifyInteractionComponent.prototype, "deleteCondition", void 0);
    __decorate([
        Input()
    ], ModifyInteractionComponent.prototype, "pixelTolerance", void 0);
    __decorate([
        Input()
    ], ModifyInteractionComponent.prototype, "style", void 0);
    __decorate([
        Input()
    ], ModifyInteractionComponent.prototype, "features", void 0);
    __decorate([
        Input()
    ], ModifyInteractionComponent.prototype, "wrapX", void 0);
    __decorate([
        Input()
    ], ModifyInteractionComponent.prototype, "source", void 0);
    __decorate([
        Output()
    ], ModifyInteractionComponent.prototype, "modifyEnd", void 0);
    __decorate([
        Output()
    ], ModifyInteractionComponent.prototype, "modifyStart", void 0);
    __decorate([
        Output()
    ], ModifyInteractionComponent.prototype, "olChange", void 0);
    __decorate([
        Output()
    ], ModifyInteractionComponent.prototype, "olChangeActive", void 0);
    __decorate([
        Output()
    ], ModifyInteractionComponent.prototype, "propertyChange", void 0);
    ModifyInteractionComponent = __decorate([
        Component({
            selector: 'aol-interaction-modify',
            template: ''
        })
    ], ModifyInteractionComponent);
    return ModifyInteractionComponent;
}());
export { ModifyInteractionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kaWZ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9pbnRlcmFjdGlvbnMvbW9kaWZ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVl4QztJQTZCRSxvQ0FBb0IsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztRQVZyQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUU1QyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFlLENBQUM7UUFFOUMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFlLENBQUM7UUFFM0MsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBZSxDQUFDO1FBRWpELG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztJQUVULENBQUM7SUFFekMsNkNBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQyxLQUFrQixJQUFLLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsVUFBQyxLQUFrQixJQUFLLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQS9CLENBQStCLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFDLEtBQWtCLElBQUssT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDO1FBQzVGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFDLEtBQWtCLElBQUssT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDO1FBQ2xGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxVQUFDLEtBQWtCLElBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO1FBQ3RGLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELGdEQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Z0JBZHdCLFlBQVk7O0lBekJyQztRQURDLEtBQUssRUFBRTtpRUFDYztJQUV0QjtRQURDLEtBQUssRUFBRTt1RUFDb0I7SUFFNUI7UUFEQyxLQUFLLEVBQUU7c0VBQ2dCO0lBRXhCO1FBREMsS0FBSyxFQUFFOzZEQUNnQztJQUV4QztRQURDLEtBQUssRUFBRTtnRUFDc0I7SUFFOUI7UUFEQyxLQUFLLEVBQUU7NkRBQ1E7SUFFaEI7UUFEQyxLQUFLLEVBQUU7OERBQ1E7SUFHaEI7UUFEQyxNQUFNLEVBQUU7aUVBQ21DO0lBRTVDO1FBREMsTUFBTSxFQUFFO21FQUNxQztJQUU5QztRQURDLE1BQU0sRUFBRTtnRUFDa0M7SUFFM0M7UUFEQyxNQUFNLEVBQUU7c0VBQ3dDO0lBRWpEO1FBREMsTUFBTSxFQUFFO3NFQUN3QztJQTNCdEMsMEJBQTBCO1FBSnRDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx3QkFBd0I7WUFDbEMsUUFBUSxFQUFFLEVBQUU7U0FDYixDQUFDO09BQ1csMEJBQTBCLENBNEN0QztJQUFELGlDQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7U0E1Q1ksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGlmeSB9IGZyb20gJ29sL2ludGVyYWN0aW9uJztcbmltcG9ydCB7IENvbGxlY3Rpb24sIEZlYXR1cmUgfSBmcm9tICdvbCc7XG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gJ29sL3N0eWxlJztcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJ29sL3NvdXJjZSc7XG5pbXBvcnQgeyBNb2RpZnlFdmVudCB9IGZyb20gJ29sL2ludGVyYWN0aW9uL01vZGlmeSc7XG5pbXBvcnQgeyBTdHlsZUZ1bmN0aW9uIH0gZnJvbSAnb2wvc3R5bGUvU3R5bGUnO1xuaW1wb3J0IHsgQ29uZGl0aW9uIH0gZnJvbSAnb2wvZXZlbnRzL2NvbmRpdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1pbnRlcmFjdGlvbi1tb2RpZnknLFxuICB0ZW1wbGF0ZTogJycsXG59KVxuZXhwb3J0IGNsYXNzIE1vZGlmeUludGVyYWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBpbnN0YW5jZTogTW9kaWZ5O1xuXG4gIEBJbnB1dCgpXG4gIGNvbmRpdGlvbj86IENvbmRpdGlvbjtcbiAgQElucHV0KClcbiAgZGVsZXRlQ29uZGl0aW9uPzogQ29uZGl0aW9uO1xuICBASW5wdXQoKVxuICBwaXhlbFRvbGVyYW5jZT86IG51bWJlcjtcbiAgQElucHV0KClcbiAgc3R5bGU/OiBTdHlsZSB8IFN0eWxlW10gfCBTdHlsZUZ1bmN0aW9uO1xuICBASW5wdXQoKVxuICBmZWF0dXJlczogQ29sbGVjdGlvbjxGZWF0dXJlPjtcbiAgQElucHV0KClcbiAgd3JhcFg/OiBib29sZWFuO1xuICBASW5wdXQoKVxuICBzb3VyY2U/OiBWZWN0b3I7XG5cbiAgQE91dHB1dCgpXG4gIG1vZGlmeUVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8TW9kaWZ5RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBtb2RpZnlTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8TW9kaWZ5RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBvbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TW9kaWZ5RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBvbENoYW5nZUFjdGl2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8TW9kaWZ5RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBwcm9wZXJ0eUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TW9kaWZ5RXZlbnQ+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IE1vZGlmeSh0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoZXZlbnQ6IE1vZGlmeUV2ZW50KSA9PiB0aGlzLm9sQ2hhbmdlLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2U6YWN0aXZlJywgKGV2ZW50OiBNb2RpZnlFdmVudCkgPT4gdGhpcy5vbENoYW5nZUFjdGl2ZS5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbigncHJvcGVydHljaGFuZ2UnLCAoZXZlbnQ6IE1vZGlmeUV2ZW50KSA9PiB0aGlzLnByb3BlcnR5Q2hhbmdlLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdtb2RpZnllbmQnLCAoZXZlbnQ6IE1vZGlmeUV2ZW50KSA9PiB0aGlzLm1vZGlmeUVuZC5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignbW9kaWZ5c3RhcnQnLCAoZXZlbnQ6IE1vZGlmeUV2ZW50KSA9PiB0aGlzLm1vZGlmeVN0YXJ0LmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=