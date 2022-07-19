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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvaW50ZXJhY3Rpb25zL2RyYXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBYXRDO0lBNkNFLGtDQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBVnJDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBRXpDLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUUvQyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUV4QyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUUxQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7SUFFUCxDQUFDO0lBRXpDLDJDQUFRLEdBQVI7UUFBQSxpQkFRQztRQVBDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUMsS0FBZ0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUF6QixDQUF5QixDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLFVBQUMsS0FBZ0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUEvQixDQUErQixDQUFDLENBQUM7UUFDekYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQUMsS0FBZ0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUF4QixDQUF3QixDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQUMsS0FBZ0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUExQixDQUEwQixDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsVUFBQyxLQUFnQixJQUFLLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQS9CLENBQStCLENBQUMsQ0FBQztRQUMxRixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCw4Q0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7O2dCQWR3QixZQUFZOztJQXpDckM7UUFEQyxLQUFLLEVBQUU7b0VBQ2dCO0lBRXhCO1FBREMsS0FBSyxFQUFFOzhEQUN1QjtJQUUvQjtRQURDLEtBQUssRUFBRTs0REFDUTtJQUVoQjtRQURDLEtBQUssRUFBRTttRUFDZTtJQUV2QjtRQURDLEtBQUssRUFBRTswREFDVztJQUVuQjtRQURDLEtBQUssRUFBRTsrREFDVztJQUVuQjtRQURDLEtBQUssRUFBRTsrREFDVztJQUVuQjtRQURDLEtBQUssRUFBRTtxRUFDb0I7SUFFNUI7UUFEQyxLQUFLLEVBQUU7MkRBQ2dDO0lBRXhDO1FBREMsS0FBSyxFQUFFO3NFQUM0QjtJQUVwQztRQURDLEtBQUssRUFBRTtrRUFDYztJQUV0QjtRQURDLEtBQUssRUFBRTsrREFDYztJQUV0QjtRQURDLEtBQUssRUFBRTt1RUFDc0I7SUFFOUI7UUFEQyxLQUFLLEVBQUU7OERBQ1c7SUFFbkI7UUFEQyxLQUFLLEVBQUU7MkRBQ1E7SUFHaEI7UUFEQyxNQUFNLEVBQUU7OERBQ2dDO0lBRXpDO1FBREMsTUFBTSxFQUFFO29FQUNzQztJQUUvQztRQURDLE1BQU0sRUFBRTs2REFDK0I7SUFFeEM7UUFEQyxNQUFNLEVBQUU7K0RBQ2lDO0lBRTFDO1FBREMsTUFBTSxFQUFFO29FQUNzQztJQTNDcEMsd0JBQXdCO1FBSnBDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsUUFBUSxFQUFFLEVBQUU7U0FDYixDQUFDO09BQ1csd0JBQXdCLENBNERwQztJQUFELCtCQUFDO0NBQUEsQUE1REQsSUE0REM7U0E1RFksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IERyYXcgfSBmcm9tICdvbC9pbnRlcmFjdGlvbic7XG5pbXBvcnQgeyBDb2xsZWN0aW9uLCBGZWF0dXJlIH0gZnJvbSAnb2wnO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnb2wvc291cmNlJztcbmltcG9ydCBHZW9tZXRyeVR5cGUgZnJvbSAnb2wvZ2VvbS9HZW9tZXRyeVR5cGUnO1xuaW1wb3J0IHsgU3R5bGUgfSBmcm9tICdvbC9zdHlsZSc7XG5pbXBvcnQgeyBEcmF3RXZlbnQsIEdlb21ldHJ5RnVuY3Rpb24gfSBmcm9tICdvbC9pbnRlcmFjdGlvbi9EcmF3JztcbmltcG9ydCB7IFN0eWxlRnVuY3Rpb24gfSBmcm9tICdvbC9zdHlsZS9TdHlsZSc7XG5pbXBvcnQgeyBDb25kaXRpb24gfSBmcm9tICdvbC9ldmVudHMvY29uZGl0aW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWludGVyYWN0aW9uLWRyYXcnLFxuICB0ZW1wbGF0ZTogJycsXG59KVxuZXhwb3J0IGNsYXNzIERyYXdJbnRlcmFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaW5zdGFuY2U6IERyYXc7XG5cbiAgQElucHV0KClcbiAgY2xpY2tUb2xlcmFuY2U/OiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIGZlYXR1cmVzPzogQ29sbGVjdGlvbjxGZWF0dXJlPjtcbiAgQElucHV0KClcbiAgc291cmNlPzogVmVjdG9yO1xuICBASW5wdXQoKVxuICBzbmFwVG9sZXJhbmNlPzogbnVtYmVyO1xuICBASW5wdXQoKVxuICB0eXBlOiBHZW9tZXRyeVR5cGU7XG4gIEBJbnB1dCgpXG4gIG1heFBvaW50cz86IG51bWJlcjtcbiAgQElucHV0KClcbiAgbWluUG9pbnRzPzogbnVtYmVyO1xuICBASW5wdXQoKVxuICBmaW5pc2hDb25kaXRpb24/OiBDb25kaXRpb247XG4gIEBJbnB1dCgpXG4gIHN0eWxlPzogU3R5bGUgfCBTdHlsZVtdIHwgU3R5bGVGdW5jdGlvbjtcbiAgQElucHV0KClcbiAgZ2VvbWV0cnlGdW5jdGlvbj86IEdlb21ldHJ5RnVuY3Rpb247XG4gIEBJbnB1dCgpXG4gIGdlb21ldHJ5TmFtZT86IHN0cmluZztcbiAgQElucHV0KClcbiAgY29uZGl0aW9uPzogQ29uZGl0aW9uO1xuICBASW5wdXQoKVxuICBmcmVlaGFuZENvbmRpdGlvbj86IENvbmRpdGlvbjtcbiAgQElucHV0KClcbiAgZnJlZWhhbmQ/OiBib29sZWFuO1xuICBASW5wdXQoKVxuICB3cmFwWD86IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpXG4gIG9sQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEcmF3RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBvbENoYW5nZUFjdGl2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhd0V2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgZHJhd0VuZCA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhd0V2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgZHJhd1N0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxEcmF3RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBwcm9wZXJ0eUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhd0V2ZW50PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBEcmF3KHRoaXMpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZScsIChldmVudDogRHJhd0V2ZW50KSA9PiB0aGlzLm9sQ2hhbmdlLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2U6YWN0aXZlJywgKGV2ZW50OiBEcmF3RXZlbnQpID0+IHRoaXMub2xDaGFuZ2VBY3RpdmUuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2RyYXdlbmQnLCAoZXZlbnQ6IERyYXdFdmVudCkgPT4gdGhpcy5kcmF3RW5kLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdkcmF3c3RhcnQnLCAoZXZlbnQ6IERyYXdFdmVudCkgPT4gdGhpcy5kcmF3U3RhcnQuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3Byb3BlcnR5Y2hhbmdlJywgKGV2ZW50OiBEcmF3RXZlbnQpID0+IHRoaXMucHJvcGVydHlDaGFuZ2UuZW1pdChldmVudCkpO1xuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZEludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XG4gIH1cbn1cbiJdfQ==