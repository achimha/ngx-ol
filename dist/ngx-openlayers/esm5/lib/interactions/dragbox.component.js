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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2JveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9pbnRlcmFjdGlvbnMvZHJhZ2JveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBUWhEO0lBVUUscUNBQW9CLEdBQWlCO1FBQWpCLFFBQUcsR0FBSCxHQUFHLENBQWM7SUFBRyxDQUFDO0lBRXpDLDhDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELGlEQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Z0JBVHdCLFlBQVk7O0lBTnJDO1FBREMsS0FBSyxFQUFFO2tFQUNVO0lBRWxCO1FBREMsS0FBSyxFQUFFO2tFQUNhO0lBRXJCO1FBREMsS0FBSyxFQUFFO3dFQUNzQjtJQVJuQiwyQkFBMkI7UUFKdkMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHlCQUF5QjtZQUNuQyxRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUM7T0FDVywyQkFBMkIsQ0FvQnZDO0lBQUQsa0NBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQXBCWSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRHJhZ0JveCB9IGZyb20gJ29sL2ludGVyYWN0aW9uJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29uZGl0aW9uIH0gZnJvbSAnb2wvZXZlbnRzL2NvbmRpdGlvbic7XG5pbXBvcnQgeyBFbmRDb25kaXRpb24gfSBmcm9tICdvbC9pbnRlcmFjdGlvbi9EcmFnQm94JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWludGVyYWN0aW9uLWRyYWdib3gnLFxuICB0ZW1wbGF0ZTogJycsXG59KVxuZXhwb3J0IGNsYXNzIERyYWdCb3hJbnRlcmFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaW5zdGFuY2U6IERyYWdCb3g7XG5cbiAgQElucHV0KClcbiAgY2xhc3NOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGNvbmRpdGlvbjogQ29uZGl0aW9uO1xuICBASW5wdXQoKVxuICBib3hFbmRDb25kaXRpb246IEVuZENvbmRpdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgRHJhZ0JveCh0aGlzKTtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=