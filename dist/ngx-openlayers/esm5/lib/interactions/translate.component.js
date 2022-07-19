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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2ludGVyYWN0aW9ucy90cmFuc2xhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBTWhEO0lBcUJFLHVDQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWtCLENBQUM7UUFDbkQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLFlBQVksRUFBa0IsQ0FBQztRQUN6RCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksWUFBWSxFQUFrQixDQUFDO1FBQ3ZELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxZQUFZLEVBQWtCLENBQUM7UUFDekQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLFlBQVksRUFBa0IsQ0FBQztJQUN4RCxDQUFDO0lBRUQsZ0RBQVEsR0FBUjtRQUFBLGlCQVVDO1FBVEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVwQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQyxLQUFxQixJQUFLLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFDLEtBQXFCLElBQUssT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDO1FBQy9GLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxVQUFDLEtBQXFCLElBQUssT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBN0IsQ0FBNkIsQ0FBQyxDQUFDO1FBQzNGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLFVBQUMsS0FBcUIsSUFBSyxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUEvQixDQUErQixDQUFDLENBQUM7UUFDL0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFVBQUMsS0FBcUIsSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUE1QixDQUE0QixDQUFDLENBQUM7UUFFekYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsbURBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyRCxDQUFDOztnQkF0QndCLFlBQVk7O0lBakJyQztRQURDLEtBQUssRUFBRTttRUFDdUI7SUFFL0I7UUFEQyxLQUFLLEVBQUU7aUVBQ3VDO0lBRS9DO1FBREMsS0FBSyxFQUFFO3VFQUNjO0lBR3RCO1FBREMsTUFBTSxFQUFFO21FQUM4QjtJQUV2QztRQURDLE1BQU0sRUFBRTt5RUFDb0M7SUFFN0M7UUFEQyxNQUFNLEVBQUU7dUVBQ2tDO0lBRTNDO1FBREMsTUFBTSxFQUFFO3lFQUNvQztJQUU3QztRQURDLE1BQU0sRUFBRTtzRUFDaUM7SUFuQi9CLDZCQUE2QjtRQUp6QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsMkJBQTJCO1lBQ3JDLFFBQVEsRUFBRSxFQUFFO1NBQ2IsQ0FBQztPQUNXLDZCQUE2QixDQTRDekM7SUFBRCxvQ0FBQztDQUFBLEFBNUNELElBNENDO1NBNUNZLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlIH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xuaW1wb3J0IHsgQ29sbGVjdGlvbiwgRmVhdHVyZSB9IGZyb20gJ29sJztcbmltcG9ydCB7IExheWVyIH0gZnJvbSAnb2wvbGF5ZXInO1xuaW1wb3J0IHsgVHJhbnNsYXRlRXZlbnQgfSBmcm9tICdvbC9pbnRlcmFjdGlvbi9UcmFuc2xhdGUnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1pbnRlcmFjdGlvbi10cmFuc2xhdGUnLFxuICB0ZW1wbGF0ZTogJycsXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZUludGVyYWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBpbnN0YW5jZTogVHJhbnNsYXRlO1xuXG4gIEBJbnB1dCgpXG4gIGZlYXR1cmVzPzogQ29sbGVjdGlvbjxGZWF0dXJlPjtcbiAgQElucHV0KClcbiAgbGF5ZXJzPzogTGF5ZXJbXSB8ICgobGF5ZXI6IExheWVyKSA9PiBib29sZWFuKTtcbiAgQElucHV0KClcbiAgaGl0VG9sZXJhbmNlPzogbnVtYmVyO1xuXG4gIEBPdXRwdXQoKVxuICBvbENoYW5nZTogRXZlbnRFbWl0dGVyPFRyYW5zbGF0ZUV2ZW50PjtcbiAgQE91dHB1dCgpXG4gIHByb3BlcnR5Q2hhbmdlOiBFdmVudEVtaXR0ZXI8VHJhbnNsYXRlRXZlbnQ+O1xuICBAT3V0cHV0KClcbiAgdHJhbnNsYXRlRW5kOiBFdmVudEVtaXR0ZXI8VHJhbnNsYXRlRXZlbnQ+O1xuICBAT3V0cHV0KClcbiAgdHJhbnNsYXRlU3RhcnQ6IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGVFdmVudD47XG4gIEBPdXRwdXQoKVxuICB0cmFuc2xhdGluZzogRXZlbnRFbWl0dGVyPFRyYW5zbGF0ZUV2ZW50PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7XG4gICAgdGhpcy5vbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8VHJhbnNsYXRlRXZlbnQ+KCk7XG4gICAgdGhpcy5wcm9wZXJ0eUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8VHJhbnNsYXRlRXZlbnQ+KCk7XG4gICAgdGhpcy50cmFuc2xhdGVFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPFRyYW5zbGF0ZUV2ZW50PigpO1xuICAgIHRoaXMudHJhbnNsYXRlU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPFRyYW5zbGF0ZUV2ZW50PigpO1xuICAgIHRoaXMudHJhbnNsYXRpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPFRyYW5zbGF0ZUV2ZW50PigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBUcmFuc2xhdGUodGhpcyk7XG5cbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoZXZlbnQ6IFRyYW5zbGF0ZUV2ZW50KSA9PiB0aGlzLm9sQ2hhbmdlLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdwcm9wZXJ0eWNoYW5nZScsIChldmVudDogVHJhbnNsYXRlRXZlbnQpID0+IHRoaXMucHJvcGVydHlDaGFuZ2UuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3RyYW5zbGF0ZWVuZCcsIChldmVudDogVHJhbnNsYXRlRXZlbnQpID0+IHRoaXMudHJhbnNsYXRlRW5kLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCd0cmFuc2xhdGVzdGFydCcsIChldmVudDogVHJhbnNsYXRlRXZlbnQpID0+IHRoaXMudHJhbnNsYXRlU3RhcnQuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3RyYW5zbGF0aW5nJywgKGV2ZW50OiBUcmFuc2xhdGVFdmVudCkgPT4gdGhpcy50cmFuc2xhdGluZy5lbWl0KGV2ZW50KSk7XG5cbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=