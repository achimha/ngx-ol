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
        // TODO this.instance.on('change:active', (event: DrawEvent) => this.olChangeActive.emit(event));
        this.instance.on('drawend', function (event) { return _this.drawEnd.emit(event); });
        this.instance.on('drawstart', function (event) { return _this.drawStart.emit(event); });
        // TODO this.instance.on('propertychange', (event: DrawEvent) => this.propertyChange.emit(event));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvaW50ZXJhY3Rpb25zL2RyYXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBYXRDO0lBNkNFLGtDQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBVnJDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBRXpDLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUUvQyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUV4QyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUUxQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7SUFFUCxDQUFDO0lBRXpDLDJDQUFRLEdBQVI7UUFBQSxpQkFRQztRQVBDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUMsS0FBZ0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUF6QixDQUF5QixDQUFDLENBQUM7UUFDNUUsaUdBQWlHO1FBQ2pHLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFDLEtBQWdCLElBQUssT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFDLEtBQWdCLElBQUssT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDO1FBQ2hGLGtHQUFrRztRQUNsRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCw4Q0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7O2dCQWR3QixZQUFZOztJQXpDckM7UUFEQyxLQUFLLEVBQUU7b0VBQ2dCO0lBRXhCO1FBREMsS0FBSyxFQUFFOzhEQUN1QjtJQUUvQjtRQURDLEtBQUssRUFBRTs0REFDUTtJQUVoQjtRQURDLEtBQUssRUFBRTttRUFDZTtJQUV2QjtRQURDLEtBQUssRUFBRTswREFDRztJQUVYO1FBREMsS0FBSyxFQUFFOytEQUNXO0lBRW5CO1FBREMsS0FBSyxFQUFFOytEQUNXO0lBRW5CO1FBREMsS0FBSyxFQUFFO3FFQUNvQjtJQUU1QjtRQURDLEtBQUssRUFBRTsyREFDZ0M7SUFFeEM7UUFEQyxLQUFLLEVBQUU7c0VBQzRCO0lBRXBDO1FBREMsS0FBSyxFQUFFO2tFQUNjO0lBRXRCO1FBREMsS0FBSyxFQUFFOytEQUNjO0lBRXRCO1FBREMsS0FBSyxFQUFFO3VFQUNzQjtJQUU5QjtRQURDLEtBQUssRUFBRTs4REFDVztJQUVuQjtRQURDLEtBQUssRUFBRTsyREFDUTtJQUdoQjtRQURDLE1BQU0sRUFBRTs4REFDZ0M7SUFFekM7UUFEQyxNQUFNLEVBQUU7b0VBQ3NDO0lBRS9DO1FBREMsTUFBTSxFQUFFOzZEQUMrQjtJQUV4QztRQURDLE1BQU0sRUFBRTsrREFDaUM7SUFFMUM7UUFEQyxNQUFNLEVBQUU7b0VBQ3NDO0lBM0NwQyx3QkFBd0I7UUFKcEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUM7T0FDVyx3QkFBd0IsQ0E0RHBDO0lBQUQsK0JBQUM7Q0FBQSxBQTVERCxJQTREQztTQTVEWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHJhdyB9IGZyb20gJ29sL2ludGVyYWN0aW9uJztcbmltcG9ydCB7IENvbGxlY3Rpb24sIEZlYXR1cmUgfSBmcm9tICdvbCc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICdvbC9zb3VyY2UnO1xuaW1wb3J0IHsgU3R5bGUgfSBmcm9tICdvbC9zdHlsZSc7XG5pbXBvcnQgeyBEcmF3RXZlbnQsIEdlb21ldHJ5RnVuY3Rpb24gfSBmcm9tICdvbC9pbnRlcmFjdGlvbi9EcmF3JztcbmltcG9ydCB7IFN0eWxlRnVuY3Rpb24gfSBmcm9tICdvbC9zdHlsZS9TdHlsZSc7XG5pbXBvcnQgeyBDb25kaXRpb24gfSBmcm9tICdvbC9ldmVudHMvY29uZGl0aW9uJztcbmltcG9ydCB7IFR5cGUgfSBmcm9tICdvbC9nZW9tL0dlb21ldHJ5JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWludGVyYWN0aW9uLWRyYXcnLFxuICB0ZW1wbGF0ZTogJycsXG59KVxuZXhwb3J0IGNsYXNzIERyYXdJbnRlcmFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaW5zdGFuY2U6IERyYXc7XG5cbiAgQElucHV0KClcbiAgY2xpY2tUb2xlcmFuY2U/OiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIGZlYXR1cmVzPzogQ29sbGVjdGlvbjxGZWF0dXJlPjtcbiAgQElucHV0KClcbiAgc291cmNlPzogVmVjdG9yO1xuICBASW5wdXQoKVxuICBzbmFwVG9sZXJhbmNlPzogbnVtYmVyO1xuICBASW5wdXQoKVxuICB0eXBlOiBUeXBlO1xuICBASW5wdXQoKVxuICBtYXhQb2ludHM/OiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIG1pblBvaW50cz86IG51bWJlcjtcbiAgQElucHV0KClcbiAgZmluaXNoQ29uZGl0aW9uPzogQ29uZGl0aW9uO1xuICBASW5wdXQoKVxuICBzdHlsZT86IFN0eWxlIHwgU3R5bGVbXSB8IFN0eWxlRnVuY3Rpb247XG4gIEBJbnB1dCgpXG4gIGdlb21ldHJ5RnVuY3Rpb24/OiBHZW9tZXRyeUZ1bmN0aW9uO1xuICBASW5wdXQoKVxuICBnZW9tZXRyeU5hbWU/OiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGNvbmRpdGlvbj86IENvbmRpdGlvbjtcbiAgQElucHV0KClcbiAgZnJlZWhhbmRDb25kaXRpb24/OiBDb25kaXRpb247XG4gIEBJbnB1dCgpXG4gIGZyZWVoYW5kPzogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgd3JhcFg/OiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKVxuICBvbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhd0V2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgb2xDaGFuZ2VBY3RpdmUgPSBuZXcgRXZlbnRFbWl0dGVyPERyYXdFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIGRyYXdFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPERyYXdFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIGRyYXdTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhd0V2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgcHJvcGVydHlDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERyYXdFdmVudD4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgRHJhdyh0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoZXZlbnQ6IERyYXdFdmVudCkgPT4gdGhpcy5vbENoYW5nZS5lbWl0KGV2ZW50KSk7XG4gICAgLy8gVE9ETyB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2U6YWN0aXZlJywgKGV2ZW50OiBEcmF3RXZlbnQpID0+IHRoaXMub2xDaGFuZ2VBY3RpdmUuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2RyYXdlbmQnLCAoZXZlbnQ6IERyYXdFdmVudCkgPT4gdGhpcy5kcmF3RW5kLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdkcmF3c3RhcnQnLCAoZXZlbnQ6IERyYXdFdmVudCkgPT4gdGhpcy5kcmF3U3RhcnQuZW1pdChldmVudCkpO1xuICAgIC8vIFRPRE8gdGhpcy5pbnN0YW5jZS5vbigncHJvcGVydHljaGFuZ2UnLCAoZXZlbnQ6IERyYXdFdmVudCkgPT4gdGhpcy5wcm9wZXJ0eUNoYW5nZS5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19