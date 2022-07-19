import { __decorate } from "tslib";
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { MapComponent } from '../map.component';
import { Draw } from 'ol/interaction';
var DrawInteractionComponent = /** @class */ (function () {
    function DrawInteractionComponent(map) {
        this.map = map;
        this.olChange = new EventEmitter();
        this.olChangeActive = new EventEmitter();
        this.drawEnd = new EventEmitter();
        this.drawStart = new EventEmitter();
        this.propertyChange = new EventEmitter();
    }
    DrawInteractionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.instance = new Draw(this);
        this.instance.on('change', function (event) { return _this.olChange.emit(event); });
        this.instance.on('change:active', function (event) { return _this.olChangeActive.emit(event); });
        this.instance.on('drawend', function (event) { return _this.drawEnd.emit(event); });
        this.instance.on('drawstart', function (event) { return _this.drawStart.emit(event); });
        this.instance.on('propertychange', function (event) { return _this.propertyChange.emit(event); });
        this.map.instance.addInteraction(this.instance);
    };
    DrawInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    DrawInteractionComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    __decorate([
        Input()
    ], DrawInteractionComponent.prototype, "clickTolerance", void 0);
    __decorate([
        Input()
    ], DrawInteractionComponent.prototype, "features", void 0);
    __decorate([
        Input()
    ], DrawInteractionComponent.prototype, "source", void 0);
    __decorate([
        Input()
    ], DrawInteractionComponent.prototype, "snapTolerance", void 0);
    __decorate([
        Input()
    ], DrawInteractionComponent.prototype, "type", void 0);
    __decorate([
        Input()
    ], DrawInteractionComponent.prototype, "maxPoints", void 0);
    __decorate([
        Input()
    ], DrawInteractionComponent.prototype, "minPoints", void 0);
    __decorate([
        Input()
    ], DrawInteractionComponent.prototype, "finishCondition", void 0);
    __decorate([
        Input()
    ], DrawInteractionComponent.prototype, "style", void 0);
    __decorate([
        Input()
    ], DrawInteractionComponent.prototype, "geometryFunction", void 0);
    __decorate([
        Input()
    ], DrawInteractionComponent.prototype, "geometryName", void 0);
    __decorate([
        Input()
    ], DrawInteractionComponent.prototype, "condition", void 0);
    __decorate([
        Input()
    ], DrawInteractionComponent.prototype, "freehandCondition", void 0);
    __decorate([
        Input()
    ], DrawInteractionComponent.prototype, "freehand", void 0);
    __decorate([
        Input()
    ], DrawInteractionComponent.prototype, "wrapX", void 0);
    __decorate([
        Output()
    ], DrawInteractionComponent.prototype, "olChange", void 0);
    __decorate([
        Output()
    ], DrawInteractionComponent.prototype, "olChangeActive", void 0);
    __decorate([
        Output()
    ], DrawInteractionComponent.prototype, "drawEnd", void 0);
    __decorate([
        Output()
    ], DrawInteractionComponent.prototype, "drawStart", void 0);
    __decorate([
        Output()
    ], DrawInteractionComponent.prototype, "propertyChange", void 0);
    DrawInteractionComponent = __decorate([
        Component({
            selector: 'aol-interaction-draw',
            template: ''
        })
    ], DrawInteractionComponent);
    return DrawInteractionComponent;
}());
export { DrawInteractionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9pbnRlcmFjdGlvbnMvZHJhdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFhdEM7SUE2Q0Usa0NBQW9CLEdBQWlCO1FBQWpCLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFWckMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUFFekMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBRS9DLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBRXhDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBRTFDLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztJQUVQLENBQUM7SUFFekMsMkNBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQyxLQUFnQixJQUFLLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsVUFBQyxLQUFnQixJQUFLLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQS9CLENBQStCLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBQyxLQUFnQixJQUFLLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQXhCLENBQXdCLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBQyxLQUFnQixJQUFLLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQTFCLENBQTBCLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFDLEtBQWdCLElBQUssT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDO1FBQzFGLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELDhDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Z0JBZHdCLFlBQVk7O0lBekNyQztRQURDLEtBQUssRUFBRTtvRUFDZ0I7SUFFeEI7UUFEQyxLQUFLLEVBQUU7OERBQ3VCO0lBRS9CO1FBREMsS0FBSyxFQUFFOzREQUNRO0lBRWhCO1FBREMsS0FBSyxFQUFFO21FQUNlO0lBRXZCO1FBREMsS0FBSyxFQUFFOzBEQUNXO0lBRW5CO1FBREMsS0FBSyxFQUFFOytEQUNXO0lBRW5CO1FBREMsS0FBSyxFQUFFOytEQUNXO0lBRW5CO1FBREMsS0FBSyxFQUFFO3FFQUNvQjtJQUU1QjtRQURDLEtBQUssRUFBRTsyREFDZ0M7SUFFeEM7UUFEQyxLQUFLLEVBQUU7c0VBQzRCO0lBRXBDO1FBREMsS0FBSyxFQUFFO2tFQUNjO0lBRXRCO1FBREMsS0FBSyxFQUFFOytEQUNjO0lBRXRCO1FBREMsS0FBSyxFQUFFO3VFQUNzQjtJQUU5QjtRQURDLEtBQUssRUFBRTs4REFDVztJQUVuQjtRQURDLEtBQUssRUFBRTsyREFDUTtJQUdoQjtRQURDLE1BQU0sRUFBRTs4REFDZ0M7SUFFekM7UUFEQyxNQUFNLEVBQUU7b0VBQ3NDO0lBRS9DO1FBREMsTUFBTSxFQUFFOzZEQUMrQjtJQUV4QztRQURDLE1BQU0sRUFBRTsrREFDaUM7SUFFMUM7UUFEQyxNQUFNLEVBQUU7b0VBQ3NDO0lBM0NwQyx3QkFBd0I7UUFKcEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUM7T0FDVyx3QkFBd0IsQ0E0RHBDO0lBQUQsK0JBQUM7Q0FBQSxBQTVERCxJQTREQztTQTVEWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHJhdyB9IGZyb20gJ29sL2ludGVyYWN0aW9uJztcbmltcG9ydCB7IENvbGxlY3Rpb24sIEZlYXR1cmUgfSBmcm9tICdvbCc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICdvbC9zb3VyY2UnO1xuaW1wb3J0IEdlb21ldHJ5VHlwZSBmcm9tICdvbC9nZW9tL0dlb21ldHJ5VHlwZSc7XG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gJ29sL3N0eWxlJztcbmltcG9ydCB7IERyYXdFdmVudCwgR2VvbWV0cnlGdW5jdGlvbiB9IGZyb20gJ29sL2ludGVyYWN0aW9uL0RyYXcnO1xuaW1wb3J0IHsgU3R5bGVGdW5jdGlvbiB9IGZyb20gJ29sL3N0eWxlL1N0eWxlJztcbmltcG9ydCB7IENvbmRpdGlvbiB9IGZyb20gJ29sL2V2ZW50cy9jb25kaXRpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtaW50ZXJhY3Rpb24tZHJhdycsXG4gIHRlbXBsYXRlOiAnJyxcbn0pXG5leHBvcnQgY2xhc3MgRHJhd0ludGVyYWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBpbnN0YW5jZTogRHJhdztcblxuICBASW5wdXQoKVxuICBjbGlja1RvbGVyYW5jZT86IG51bWJlcjtcbiAgQElucHV0KClcbiAgZmVhdHVyZXM/OiBDb2xsZWN0aW9uPEZlYXR1cmU+O1xuICBASW5wdXQoKVxuICBzb3VyY2U/OiBWZWN0b3I7XG4gIEBJbnB1dCgpXG4gIHNuYXBUb2xlcmFuY2U/OiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHR5cGU6IEdlb21ldHJ5VHlwZTtcbiAgQElucHV0KClcbiAgbWF4UG9pbnRzPzogbnVtYmVyO1xuICBASW5wdXQoKVxuICBtaW5Qb2ludHM/OiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIGZpbmlzaENvbmRpdGlvbj86IENvbmRpdGlvbjtcbiAgQElucHV0KClcbiAgc3R5bGU/OiBTdHlsZSB8IFN0eWxlW10gfCBTdHlsZUZ1bmN0aW9uO1xuICBASW5wdXQoKVxuICBnZW9tZXRyeUZ1bmN0aW9uPzogR2VvbWV0cnlGdW5jdGlvbjtcbiAgQElucHV0KClcbiAgZ2VvbWV0cnlOYW1lPzogc3RyaW5nO1xuICBASW5wdXQoKVxuICBjb25kaXRpb24/OiBDb25kaXRpb247XG4gIEBJbnB1dCgpXG4gIGZyZWVoYW5kQ29uZGl0aW9uPzogQ29uZGl0aW9uO1xuICBASW5wdXQoKVxuICBmcmVlaGFuZD86IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHdyYXBYPzogYm9vbGVhbjtcblxuICBAT3V0cHV0KClcbiAgb2xDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERyYXdFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIG9sQ2hhbmdlQWN0aXZlID0gbmV3IEV2ZW50RW1pdHRlcjxEcmF3RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBkcmF3RW5kID0gbmV3IEV2ZW50RW1pdHRlcjxEcmF3RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBkcmF3U3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPERyYXdFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIHByb3BlcnR5Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEcmF3RXZlbnQ+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IERyYXcodGhpcyk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlJywgKGV2ZW50OiBEcmF3RXZlbnQpID0+IHRoaXMub2xDaGFuZ2UuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZTphY3RpdmUnLCAoZXZlbnQ6IERyYXdFdmVudCkgPT4gdGhpcy5vbENoYW5nZUFjdGl2ZS5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignZHJhd2VuZCcsIChldmVudDogRHJhd0V2ZW50KSA9PiB0aGlzLmRyYXdFbmQuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2RyYXdzdGFydCcsIChldmVudDogRHJhd0V2ZW50KSA9PiB0aGlzLmRyYXdTdGFydC5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbigncHJvcGVydHljaGFuZ2UnLCAoZXZlbnQ6IERyYXdFdmVudCkgPT4gdGhpcy5wcm9wZXJ0eUNoYW5nZS5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19