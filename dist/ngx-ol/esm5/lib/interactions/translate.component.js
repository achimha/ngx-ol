import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Translate } from 'ol/interaction';
import { MapComponent } from '../map.component';
var TranslateInteractionComponent = /** @class */ (function () {
    function TranslateInteractionComponent(map) {
        this.map = map;
        this.olChange = new EventEmitter();
        this.propertyChange = new EventEmitter();
        this.translateEnd = new EventEmitter();
        this.translateStart = new EventEmitter();
        this.translating = new EventEmitter();
    }
    TranslateInteractionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.instance = new Translate(this);
        this.instance.on('change', function (event) { return _this.olChange.emit(event); });
        this.instance.on('propertychange', function (event) { return _this.propertyChange.emit(event); });
        this.instance.on('translateend', function (event) { return _this.translateEnd.emit(event); });
        this.instance.on('translatestart', function (event) { return _this.translateStart.emit(event); });
        this.instance.on('translating', function (event) { return _this.translating.emit(event); });
        this.map.instance.addInteraction(this.instance);
    };
    TranslateInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    TranslateInteractionComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    __decorate([
        Input()
    ], TranslateInteractionComponent.prototype, "features", void 0);
    __decorate([
        Input()
    ], TranslateInteractionComponent.prototype, "layers", void 0);
    __decorate([
        Input()
    ], TranslateInteractionComponent.prototype, "hitTolerance", void 0);
    __decorate([
        Output()
    ], TranslateInteractionComponent.prototype, "olChange", void 0);
    __decorate([
        Output()
    ], TranslateInteractionComponent.prototype, "propertyChange", void 0);
    __decorate([
        Output()
    ], TranslateInteractionComponent.prototype, "translateEnd", void 0);
    __decorate([
        Output()
    ], TranslateInteractionComponent.prototype, "translateStart", void 0);
    __decorate([
        Output()
    ], TranslateInteractionComponent.prototype, "translating", void 0);
    TranslateInteractionComponent = __decorate([
        Component({
            selector: 'aol-interaction-translate',
            template: ''
        })
    ], TranslateInteractionComponent);
    return TranslateInteractionComponent;
}());
export { TranslateInteractionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9pbnRlcmFjdGlvbnMvdHJhbnNsYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSTNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQU1oRDtJQXFCRSx1Q0FBb0IsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksWUFBWSxFQUFrQixDQUFDO1FBQ25ELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxZQUFZLEVBQWtCLENBQUM7UUFDekQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBa0IsQ0FBQztRQUN2RCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksWUFBWSxFQUFrQixDQUFDO1FBQ3pELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWtCLENBQUM7SUFDeEQsQ0FBQztJQUVELGdEQUFRLEdBQVI7UUFBQSxpQkFVQztRQVRDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUMsS0FBcUIsSUFBSyxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUF6QixDQUF5QixDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsVUFBQyxLQUFxQixJQUFLLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQS9CLENBQStCLENBQUMsQ0FBQztRQUMvRixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsVUFBQyxLQUFxQixJQUFLLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQTdCLENBQTZCLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFDLEtBQXFCLElBQUssT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDO1FBQy9GLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxVQUFDLEtBQXFCLElBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO1FBRXpGLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELG1EQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Z0JBdEJ3QixZQUFZOztJQWpCckM7UUFEQyxLQUFLLEVBQUU7bUVBQ3VCO0lBRS9CO1FBREMsS0FBSyxFQUFFO2lFQUN1QztJQUUvQztRQURDLEtBQUssRUFBRTt1RUFDYztJQUd0QjtRQURDLE1BQU0sRUFBRTttRUFDOEI7SUFFdkM7UUFEQyxNQUFNLEVBQUU7eUVBQ29DO0lBRTdDO1FBREMsTUFBTSxFQUFFO3VFQUNrQztJQUUzQztRQURDLE1BQU0sRUFBRTt5RUFDb0M7SUFFN0M7UUFEQyxNQUFNLEVBQUU7c0VBQ2lDO0lBbkIvQiw2QkFBNkI7UUFKekMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDJCQUEyQjtZQUNyQyxRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUM7T0FDVyw2QkFBNkIsQ0E0Q3pDO0lBQUQsb0NBQUM7Q0FBQSxBQTVDRCxJQTRDQztTQTVDWSw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zbGF0ZSB9IGZyb20gJ29sL2ludGVyYWN0aW9uJztcbmltcG9ydCB7IENvbGxlY3Rpb24sIEZlYXR1cmUgfSBmcm9tICdvbCc7XG5pbXBvcnQgeyBMYXllciB9IGZyb20gJ29sL2xheWVyJztcbmltcG9ydCB7IFRyYW5zbGF0ZUV2ZW50IH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24vVHJhbnNsYXRlJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtaW50ZXJhY3Rpb24tdHJhbnNsYXRlJyxcbiAgdGVtcGxhdGU6ICcnLFxufSlcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVJbnRlcmFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaW5zdGFuY2U6IFRyYW5zbGF0ZTtcblxuICBASW5wdXQoKVxuICBmZWF0dXJlcz86IENvbGxlY3Rpb248RmVhdHVyZT47XG4gIEBJbnB1dCgpXG4gIGxheWVycz86IExheWVyW10gfCAoKGxheWVyOiBMYXllcikgPT4gYm9vbGVhbik7XG4gIEBJbnB1dCgpXG4gIGhpdFRvbGVyYW5jZT86IG51bWJlcjtcblxuICBAT3V0cHV0KClcbiAgb2xDaGFuZ2U6IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGVFdmVudD47XG4gIEBPdXRwdXQoKVxuICBwcm9wZXJ0eUNoYW5nZTogRXZlbnRFbWl0dGVyPFRyYW5zbGF0ZUV2ZW50PjtcbiAgQE91dHB1dCgpXG4gIHRyYW5zbGF0ZUVuZDogRXZlbnRFbWl0dGVyPFRyYW5zbGF0ZUV2ZW50PjtcbiAgQE91dHB1dCgpXG4gIHRyYW5zbGF0ZVN0YXJ0OiBFdmVudEVtaXR0ZXI8VHJhbnNsYXRlRXZlbnQ+O1xuICBAT3V0cHV0KClcbiAgdHJhbnNsYXRpbmc6IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGVFdmVudD47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge1xuICAgIHRoaXMub2xDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFRyYW5zbGF0ZUV2ZW50PigpO1xuICAgIHRoaXMucHJvcGVydHlDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFRyYW5zbGF0ZUV2ZW50PigpO1xuICAgIHRoaXMudHJhbnNsYXRlRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGVFdmVudD4oKTtcbiAgICB0aGlzLnRyYW5zbGF0ZVN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGVFdmVudD4oKTtcbiAgICB0aGlzLnRyYW5zbGF0aW5nID0gbmV3IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGVFdmVudD4oKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVHJhbnNsYXRlKHRoaXMpO1xuXG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlJywgKGV2ZW50OiBUcmFuc2xhdGVFdmVudCkgPT4gdGhpcy5vbENoYW5nZS5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbigncHJvcGVydHljaGFuZ2UnLCAoZXZlbnQ6IFRyYW5zbGF0ZUV2ZW50KSA9PiB0aGlzLnByb3BlcnR5Q2hhbmdlLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCd0cmFuc2xhdGVlbmQnLCAoZXZlbnQ6IFRyYW5zbGF0ZUV2ZW50KSA9PiB0aGlzLnRyYW5zbGF0ZUVuZC5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbigndHJhbnNsYXRlc3RhcnQnLCAoZXZlbnQ6IFRyYW5zbGF0ZUV2ZW50KSA9PiB0aGlzLnRyYW5zbGF0ZVN0YXJ0LmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCd0cmFuc2xhdGluZycsIChldmVudDogVHJhbnNsYXRlRXZlbnQpID0+IHRoaXMudHJhbnNsYXRpbmcuZW1pdChldmVudCkpO1xuXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19