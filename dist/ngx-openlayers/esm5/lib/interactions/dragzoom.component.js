import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { DragZoom } from 'ol/interaction';
import { MapComponent } from '../map.component';
var DragZoomInteractionComponent = /** @class */ (function () {
    function DragZoomInteractionComponent(map) {
        this.map = map;
    }
    DragZoomInteractionComponent.prototype.ngOnInit = function () {
        this.instance = new DragZoom(this);
        this.map.instance.addInteraction(this.instance);
    };
    DragZoomInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    DragZoomInteractionComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    __decorate([
        Input()
    ], DragZoomInteractionComponent.prototype, "className", void 0);
    __decorate([
        Input()
    ], DragZoomInteractionComponent.prototype, "condition", void 0);
    __decorate([
        Input()
    ], DragZoomInteractionComponent.prototype, "duration", void 0);
    __decorate([
        Input()
    ], DragZoomInteractionComponent.prototype, "out", void 0);
    DragZoomInteractionComponent = __decorate([
        Component({
            selector: 'aol-interaction-dragzoom',
            template: ''
        })
    ], DragZoomInteractionComponent);
    return DragZoomInteractionComponent;
}());
export { DragZoomInteractionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ3pvb20uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvaW50ZXJhY3Rpb25zL2RyYWd6b29tLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFPaEQ7SUFZRSxzQ0FBb0IsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztJQUFHLENBQUM7SUFFekMsK0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsa0RBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyRCxDQUFDOztnQkFUd0IsWUFBWTs7SUFSckM7UUFEQyxLQUFLLEVBQUU7bUVBQ1U7SUFFbEI7UUFEQyxLQUFLLEVBQUU7bUVBQ2E7SUFFckI7UUFEQyxLQUFLLEVBQUU7a0VBQ1M7SUFFakI7UUFEQyxLQUFLLEVBQUU7NkRBQ0s7SUFWRiw0QkFBNEI7UUFKeEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDBCQUEwQjtZQUNwQyxRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUM7T0FDVyw0QkFBNEIsQ0FzQnhDO0lBQUQsbUNBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQXRCWSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRHJhZ1pvb20gfSBmcm9tICdvbC9pbnRlcmFjdGlvbic7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IENvbmRpdGlvbiB9IGZyb20gJ29sL2V2ZW50cy9jb25kaXRpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtaW50ZXJhY3Rpb24tZHJhZ3pvb20nLFxuICB0ZW1wbGF0ZTogJycsXG59KVxuZXhwb3J0IGNsYXNzIERyYWdab29tSW50ZXJhY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGluc3RhbmNlOiBEcmFnWm9vbTtcblxuICBASW5wdXQoKVxuICBjbGFzc05hbWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgY29uZGl0aW9uOiBDb25kaXRpb247XG4gIEBJbnB1dCgpXG4gIGR1cmF0aW9uOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIG91dDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgRHJhZ1pvb20odGhpcyk7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19