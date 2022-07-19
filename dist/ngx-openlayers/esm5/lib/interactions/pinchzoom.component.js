import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { PinchZoom } from 'ol/interaction';
import { MapComponent } from '../map.component';
var PinchZoomInteractionComponent = /** @class */ (function () {
    function PinchZoomInteractionComponent(map) {
        this.map = map;
    }
    PinchZoomInteractionComponent.prototype.ngOnInit = function () {
        this.instance = new PinchZoom(this);
        this.map.instance.addInteraction(this.instance);
    };
    PinchZoomInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    PinchZoomInteractionComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    __decorate([
        Input()
    ], PinchZoomInteractionComponent.prototype, "duration", void 0);
    __decorate([
        Input()
    ], PinchZoomInteractionComponent.prototype, "constrainResolution", void 0);
    PinchZoomInteractionComponent = __decorate([
        Component({
            selector: 'aol-interaction-pinchzoom',
            template: ''
        })
    ], PinchZoomInteractionComponent);
    return PinchZoomInteractionComponent;
}());
export { PinchZoomInteractionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGluY2h6b29tLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2ludGVyYWN0aW9ucy9waW5jaHpvb20uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQU1oRDtJQVFFLHVDQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO0lBQUcsQ0FBQztJQUV6QyxnREFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxtREFBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7O2dCQVR3QixZQUFZOztJQUpyQztRQURDLEtBQUssRUFBRTttRUFDUztJQUVqQjtRQURDLEtBQUssRUFBRTs4RUFDcUI7SUFObEIsNkJBQTZCO1FBSnpDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSwyQkFBMkI7WUFDckMsUUFBUSxFQUFFLEVBQUU7U0FDYixDQUFDO09BQ1csNkJBQTZCLENBa0J6QztJQUFELG9DQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FsQlksNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBpbmNoWm9vbSB9IGZyb20gJ29sL2ludGVyYWN0aW9uJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtaW50ZXJhY3Rpb24tcGluY2h6b29tJyxcbiAgdGVtcGxhdGU6ICcnLFxufSlcbmV4cG9ydCBjbGFzcyBQaW5jaFpvb21JbnRlcmFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaW5zdGFuY2U6IFBpbmNoWm9vbTtcblxuICBASW5wdXQoKVxuICBkdXJhdGlvbjogbnVtYmVyO1xuICBASW5wdXQoKVxuICBjb25zdHJhaW5SZXNvbHV0aW9uOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBQaW5jaFpvb20odGhpcyk7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19