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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2ludGVyYWN0aW9ucy9zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBWXhDO0lBK0JFLG9DQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBTnJDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBZSxDQUFDO1FBRTNDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBZSxDQUFDO1FBRTNDLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztJQUVULENBQUM7SUFFekMsNkNBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVqQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQyxLQUFrQixJQUFLLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQyxLQUFrQixJQUFLLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFDLEtBQWtCLElBQUssT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDO1FBRTVGLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELGdEQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Z0JBZHdCLFlBQVk7O0lBM0JyQztRQURDLEtBQUssRUFBRTtvRUFDaUI7SUFFekI7UUFEQyxLQUFLLEVBQUU7aUVBQ2M7SUFFdEI7UUFEQyxLQUFLLEVBQUU7OERBQ3VDO0lBRS9DO1FBREMsS0FBSyxFQUFFOzZEQUNnQztJQUV4QztRQURDLEtBQUssRUFBRTt1RUFDb0I7SUFFNUI7UUFEQyxLQUFLLEVBQUU7dUVBQ29CO0lBRTVCO1FBREMsS0FBSyxFQUFFOzZEQUNRO0lBRWhCO1FBREMsS0FBSyxFQUFFO2dFQUN1QjtJQUUvQjtRQURDLEtBQUssRUFBRTs4REFDZ0I7SUFFeEI7UUFEQyxLQUFLLEVBQUU7NkRBQ1E7SUFHaEI7UUFEQyxNQUFNLEVBQUU7Z0VBQ2tDO0lBRTNDO1FBREMsTUFBTSxFQUFFO2dFQUNrQztJQUUzQztRQURDLE1BQU0sRUFBRTtzRUFDd0M7SUE3QnRDLDBCQUEwQjtRQUp0QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLFFBQVEsRUFBRSxFQUFFO1NBQ2IsQ0FBQztPQUNXLDBCQUEwQixDQThDdEM7SUFBRCxpQ0FBQztDQUFBLEFBOUNELElBOENDO1NBOUNZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICdvbC9pbnRlcmFjdGlvbic7XG5pbXBvcnQgeyBMYXllciB9IGZyb20gJ29sL2xheWVyJztcbmltcG9ydCB7IFN0eWxlIH0gZnJvbSAnb2wvc3R5bGUnO1xuaW1wb3J0IHsgQ29sbGVjdGlvbiwgRmVhdHVyZSB9IGZyb20gJ29sJztcbmltcG9ydCB7IFNlbGVjdEV2ZW50LCBGaWx0ZXJGdW5jdGlvbiB9IGZyb20gJ29sL2ludGVyYWN0aW9uL1NlbGVjdCc7XG5pbXBvcnQgeyBTdHlsZUZ1bmN0aW9uIH0gZnJvbSAnb2wvc3R5bGUvU3R5bGUnO1xuaW1wb3J0IHsgQ29uZGl0aW9uIH0gZnJvbSAnb2wvZXZlbnRzL2NvbmRpdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1pbnRlcmFjdGlvbi1zZWxlY3QnLFxuICB0ZW1wbGF0ZTogJycsXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdEludGVyYWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBpbnN0YW5jZTogU2VsZWN0O1xuXG4gIEBJbnB1dCgpXG4gIGFkZENvbmRpdGlvbj86IENvbmRpdGlvbjtcbiAgQElucHV0KClcbiAgY29uZGl0aW9uPzogQ29uZGl0aW9uO1xuICBASW5wdXQoKVxuICBsYXllcnM/OiBMYXllcltdIHwgKChsYXllcjogTGF5ZXIpID0+IGJvb2xlYW4pO1xuICBASW5wdXQoKVxuICBzdHlsZT86IFN0eWxlIHwgU3R5bGVbXSB8IFN0eWxlRnVuY3Rpb247XG4gIEBJbnB1dCgpXG4gIHJlbW92ZUNvbmRpdGlvbj86IENvbmRpdGlvbjtcbiAgQElucHV0KClcbiAgdG9nZ2xlQ29uZGl0aW9uPzogQ29uZGl0aW9uO1xuICBASW5wdXQoKVxuICBtdWx0aT86IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGZlYXR1cmVzPzogQ29sbGVjdGlvbjxGZWF0dXJlPjtcbiAgQElucHV0KClcbiAgZmlsdGVyPzogRmlsdGVyRnVuY3Rpb247XG4gIEBJbnB1dCgpXG4gIHdyYXBYPzogYm9vbGVhbjtcblxuICBAT3V0cHV0KClcbiAgb2xDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFNlbGVjdEV2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgb2xTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPFNlbGVjdEV2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgcHJvcGVydHlDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFNlbGVjdEV2ZW50PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBTZWxlY3QodGhpcyk7XG5cbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoZXZlbnQ6IFNlbGVjdEV2ZW50KSA9PiB0aGlzLm9sQ2hhbmdlLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdzZWxlY3QnLCAoZXZlbnQ6IFNlbGVjdEV2ZW50KSA9PiB0aGlzLm9sU2VsZWN0LmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdwcm9wZXJ0eWNoYW5nZScsIChldmVudDogU2VsZWN0RXZlbnQpID0+IHRoaXMucHJvcGVydHlDaGFuZ2UuZW1pdChldmVudCkpO1xuXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19