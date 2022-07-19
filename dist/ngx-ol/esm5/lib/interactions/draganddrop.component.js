import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { DragAndDrop } from 'ol/interaction';
import { MapComponent } from '../map.component';
var DragAndDropInteractionComponent = /** @class */ (function () {
    function DragAndDropInteractionComponent(map) {
        this.map = map;
    }
    DragAndDropInteractionComponent.prototype.ngOnInit = function () {
        this.instance = new DragAndDrop(this);
        this.map.instance.addInteraction(this.instance);
    };
    DragAndDropInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    DragAndDropInteractionComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    __decorate([
        Input()
    ], DragAndDropInteractionComponent.prototype, "formatConstructors", void 0);
    __decorate([
        Input()
    ], DragAndDropInteractionComponent.prototype, "projection", void 0);
    __decorate([
        Input()
    ], DragAndDropInteractionComponent.prototype, "target", void 0);
    DragAndDropInteractionComponent = __decorate([
        Component({
            selector: 'aol-interaction-draganddrop',
            template: ''
        })
    ], DragAndDropInteractionComponent);
    return DragAndDropInteractionComponent;
}());
export { DragAndDropInteractionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2FuZGRyb3AuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9sLyIsInNvdXJjZXMiOlsibGliL2ludGVyYWN0aW9ucy9kcmFnYW5kZHJvcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBT2hEO0lBVUUseUNBQW9CLEdBQWlCO1FBQWpCLFFBQUcsR0FBSCxHQUFHLENBQWM7SUFBRyxDQUFDO0lBRXpDLGtEQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELHFEQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Z0JBVHdCLFlBQVk7O0lBTnJDO1FBREMsS0FBSyxFQUFFOytFQUNvQztJQUU1QztRQURDLEtBQUssRUFBRTt1RUFDbUI7SUFFM0I7UUFEQyxLQUFLLEVBQUU7bUVBQ1E7SUFSTCwrQkFBK0I7UUFKM0MsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDZCQUE2QjtZQUN2QyxRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUM7T0FDVywrQkFBK0IsQ0FvQjNDO0lBQUQsc0NBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQXBCWSwrQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRHJhZ0FuZERyb3AgfSBmcm9tICdvbC9pbnRlcmFjdGlvbic7XG5pbXBvcnQgRmVhdHVyZSBmcm9tICdvbC9mb3JtYXQvRmVhdHVyZSc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2plY3Rpb25MaWtlIH0gZnJvbSAnb2wvcHJvaic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1pbnRlcmFjdGlvbi1kcmFnYW5kZHJvcCcsXG4gIHRlbXBsYXRlOiAnJyxcbn0pXG5leHBvcnQgY2xhc3MgRHJhZ0FuZERyb3BJbnRlcmFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaW5zdGFuY2U6IERyYWdBbmREcm9wO1xuXG4gIEBJbnB1dCgpXG4gIGZvcm1hdENvbnN0cnVjdG9yczogKChuOiBGZWF0dXJlKSA9PiBhbnkpW107XG4gIEBJbnB1dCgpXG4gIHByb2plY3Rpb246IFByb2plY3Rpb25MaWtlO1xuICBASW5wdXQoKVxuICB0YXJnZXQ6IEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IERyYWdBbmREcm9wKHRoaXMpO1xuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZEludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XG4gIH1cbn1cbiJdfQ==