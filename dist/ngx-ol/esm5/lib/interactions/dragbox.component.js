import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { DragBox } from 'ol/interaction';
import { MapComponent } from '../map.component';
var DragBoxInteractionComponent = /** @class */ (function () {
    function DragBoxInteractionComponent(map) {
        this.map = map;
    }
    DragBoxInteractionComponent.prototype.ngOnInit = function () {
        this.instance = new DragBox(this);
        this.map.instance.addInteraction(this.instance);
    };
    DragBoxInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    DragBoxInteractionComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    __decorate([
        Input()
    ], DragBoxInteractionComponent.prototype, "className", void 0);
    __decorate([
        Input()
    ], DragBoxInteractionComponent.prototype, "condition", void 0);
    __decorate([
        Input()
    ], DragBoxInteractionComponent.prototype, "boxEndCondition", void 0);
    DragBoxInteractionComponent = __decorate([
        Component({
            selector: 'aol-interaction-dragbox',
            template: ''
        })
    ], DragBoxInteractionComponent);
    return DragBoxInteractionComponent;
}());
export { DragBoxInteractionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2JveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvaW50ZXJhY3Rpb25zL2RyYWdib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQVFoRDtJQVVFLHFDQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO0lBQUcsQ0FBQztJQUV6Qyw4Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxpREFBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7O2dCQVR3QixZQUFZOztJQU5yQztRQURDLEtBQUssRUFBRTtrRUFDVTtJQUVsQjtRQURDLEtBQUssRUFBRTtrRUFDYTtJQUVyQjtRQURDLEtBQUssRUFBRTt3RUFDc0I7SUFSbkIsMkJBQTJCO1FBSnZDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx5QkFBeUI7WUFDbkMsUUFBUSxFQUFFLEVBQUU7U0FDYixDQUFDO09BQ1csMkJBQTJCLENBb0J2QztJQUFELGtDQUFDO0NBQUEsQUFwQkQsSUFvQkM7U0FwQlksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERyYWdCb3ggfSBmcm9tICdvbC9pbnRlcmFjdGlvbic7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IENvbmRpdGlvbiB9IGZyb20gJ29sL2V2ZW50cy9jb25kaXRpb24nO1xuaW1wb3J0IHsgRW5kQ29uZGl0aW9uIH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24vRHJhZ0JveCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1pbnRlcmFjdGlvbi1kcmFnYm94JyxcbiAgdGVtcGxhdGU6ICcnLFxufSlcbmV4cG9ydCBjbGFzcyBEcmFnQm94SW50ZXJhY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGluc3RhbmNlOiBEcmFnQm94O1xuXG4gIEBJbnB1dCgpXG4gIGNsYXNzTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBjb25kaXRpb246IENvbmRpdGlvbjtcbiAgQElucHV0KClcbiAgYm94RW5kQ29uZGl0aW9uOiBFbmRDb25kaXRpb247XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IERyYWdCb3godGhpcyk7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19