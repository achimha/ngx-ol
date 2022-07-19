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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kaWZ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2ludGVyYWN0aW9ucy9tb2RpZnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBWXhDO0lBNkJFLG9DQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBVnJDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBZSxDQUFDO1FBRTVDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUU5QyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUUzQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFlLENBQUM7UUFFakQsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBZSxDQUFDO0lBRVQsQ0FBQztJQUV6Qyw2Q0FBUSxHQUFSO1FBQUEsaUJBUUM7UUFQQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFDLEtBQWtCLElBQUssT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxVQUFDLEtBQWtCLElBQUssT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDO1FBQzNGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLFVBQUMsS0FBa0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUEvQixDQUErQixDQUFDLENBQUM7UUFDNUYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQUMsS0FBa0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUExQixDQUEwQixDQUFDLENBQUM7UUFDbEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFVBQUMsS0FBa0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUE1QixDQUE0QixDQUFDLENBQUM7UUFDdEYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsZ0RBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyRCxDQUFDOztnQkFkd0IsWUFBWTs7SUF6QnJDO1FBREMsS0FBSyxFQUFFO2lFQUNjO0lBRXRCO1FBREMsS0FBSyxFQUFFO3VFQUNvQjtJQUU1QjtRQURDLEtBQUssRUFBRTtzRUFDZ0I7SUFFeEI7UUFEQyxLQUFLLEVBQUU7NkRBQ2dDO0lBRXhDO1FBREMsS0FBSyxFQUFFO2dFQUNzQjtJQUU5QjtRQURDLEtBQUssRUFBRTs2REFDUTtJQUVoQjtRQURDLEtBQUssRUFBRTs4REFDUTtJQUdoQjtRQURDLE1BQU0sRUFBRTtpRUFDbUM7SUFFNUM7UUFEQyxNQUFNLEVBQUU7bUVBQ3FDO0lBRTlDO1FBREMsTUFBTSxFQUFFO2dFQUNrQztJQUUzQztRQURDLE1BQU0sRUFBRTtzRUFDd0M7SUFFakQ7UUFEQyxNQUFNLEVBQUU7c0VBQ3dDO0lBM0J0QywwQkFBMEI7UUFKdEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQyxRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUM7T0FDVywwQkFBMEIsQ0E0Q3RDO0lBQUQsaUNBQUM7Q0FBQSxBQTVDRCxJQTRDQztTQTVDWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9kaWZ5IH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xuaW1wb3J0IHsgQ29sbGVjdGlvbiwgRmVhdHVyZSB9IGZyb20gJ29sJztcbmltcG9ydCB7IFN0eWxlIH0gZnJvbSAnb2wvc3R5bGUnO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnb2wvc291cmNlJztcbmltcG9ydCB7IE1vZGlmeUV2ZW50IH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24vTW9kaWZ5JztcbmltcG9ydCB7IFN0eWxlRnVuY3Rpb24gfSBmcm9tICdvbC9zdHlsZS9TdHlsZSc7XG5pbXBvcnQgeyBDb25kaXRpb24gfSBmcm9tICdvbC9ldmVudHMvY29uZGl0aW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWludGVyYWN0aW9uLW1vZGlmeScsXG4gIHRlbXBsYXRlOiAnJyxcbn0pXG5leHBvcnQgY2xhc3MgTW9kaWZ5SW50ZXJhY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGluc3RhbmNlOiBNb2RpZnk7XG5cbiAgQElucHV0KClcbiAgY29uZGl0aW9uPzogQ29uZGl0aW9uO1xuICBASW5wdXQoKVxuICBkZWxldGVDb25kaXRpb24/OiBDb25kaXRpb247XG4gIEBJbnB1dCgpXG4gIHBpeGVsVG9sZXJhbmNlPzogbnVtYmVyO1xuICBASW5wdXQoKVxuICBzdHlsZT86IFN0eWxlIHwgU3R5bGVbXSB8IFN0eWxlRnVuY3Rpb247XG4gIEBJbnB1dCgpXG4gIGZlYXR1cmVzOiBDb2xsZWN0aW9uPEZlYXR1cmU+O1xuICBASW5wdXQoKVxuICB3cmFwWD86IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHNvdXJjZT86IFZlY3RvcjtcblxuICBAT3V0cHV0KClcbiAgbW9kaWZ5RW5kID0gbmV3IEV2ZW50RW1pdHRlcjxNb2RpZnlFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIG1vZGlmeVN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxNb2RpZnlFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIG9sQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxNb2RpZnlFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIG9sQ2hhbmdlQWN0aXZlID0gbmV3IEV2ZW50RW1pdHRlcjxNb2RpZnlFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIHByb3BlcnR5Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxNb2RpZnlFdmVudD4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgTW9kaWZ5KHRoaXMpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZScsIChldmVudDogTW9kaWZ5RXZlbnQpID0+IHRoaXMub2xDaGFuZ2UuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZTphY3RpdmUnLCAoZXZlbnQ6IE1vZGlmeUV2ZW50KSA9PiB0aGlzLm9sQ2hhbmdlQWN0aXZlLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdwcm9wZXJ0eWNoYW5nZScsIChldmVudDogTW9kaWZ5RXZlbnQpID0+IHRoaXMucHJvcGVydHlDaGFuZ2UuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ21vZGlmeWVuZCcsIChldmVudDogTW9kaWZ5RXZlbnQpID0+IHRoaXMubW9kaWZ5RW5kLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdtb2RpZnlzdGFydCcsIChldmVudDogTW9kaWZ5RXZlbnQpID0+IHRoaXMubW9kaWZ5U3RhcnQuZW1pdChldmVudCkpO1xuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZEludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XG4gIH1cbn1cbiJdfQ==