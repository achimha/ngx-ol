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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2FuZGRyb3AuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvaW50ZXJhY3Rpb25zL2RyYWdhbmRkcm9wLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFPaEQ7SUFVRSx5Q0FBb0IsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztJQUFHLENBQUM7SUFFekMsa0RBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQscURBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyRCxDQUFDOztnQkFUd0IsWUFBWTs7SUFOckM7UUFEQyxLQUFLLEVBQUU7K0VBQ29DO0lBRTVDO1FBREMsS0FBSyxFQUFFO3VFQUNtQjtJQUUzQjtRQURDLEtBQUssRUFBRTttRUFDUTtJQVJMLCtCQUErQjtRQUozQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsNkJBQTZCO1lBQ3ZDLFFBQVEsRUFBRSxFQUFFO1NBQ2IsQ0FBQztPQUNXLCtCQUErQixDQW9CM0M7SUFBRCxzQ0FBQztDQUFBLEFBcEJELElBb0JDO1NBcEJZLCtCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEcmFnQW5kRHJvcCB9IGZyb20gJ29sL2ludGVyYWN0aW9uJztcbmltcG9ydCBGZWF0dXJlIGZyb20gJ29sL2Zvcm1hdC9GZWF0dXJlJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvamVjdGlvbkxpa2UgfSBmcm9tICdvbC9wcm9qJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWludGVyYWN0aW9uLWRyYWdhbmRkcm9wJyxcbiAgdGVtcGxhdGU6ICcnLFxufSlcbmV4cG9ydCBjbGFzcyBEcmFnQW5kRHJvcEludGVyYWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBpbnN0YW5jZTogRHJhZ0FuZERyb3A7XG5cbiAgQElucHV0KClcbiAgZm9ybWF0Q29uc3RydWN0b3JzOiAoKG46IEZlYXR1cmUpID0+IGFueSlbXTtcbiAgQElucHV0KClcbiAgcHJvamVjdGlvbjogUHJvamVjdGlvbkxpa2U7XG4gIEBJbnB1dCgpXG4gIHRhcmdldDogRWxlbWVudDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgRHJhZ0FuZERyb3AodGhpcyk7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19