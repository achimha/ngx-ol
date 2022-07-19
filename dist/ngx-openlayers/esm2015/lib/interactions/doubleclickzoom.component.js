import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { DoubleClickZoom } from 'ol/interaction';
import { MapComponent } from '../map.component';
let DoubleClickZoomInteractionComponent = class DoubleClickZoomInteractionComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = new DoubleClickZoom(this);
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
};
DoubleClickZoomInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];
__decorate([
    Input()
], DoubleClickZoomInteractionComponent.prototype, "duration", void 0);
__decorate([
    Input()
], DoubleClickZoomInteractionComponent.prototype, "delta", void 0);
DoubleClickZoomInteractionComponent = __decorate([
    Component({
        selector: 'aol-interaction-doubleclickzoom',
        template: ''
    })
], DoubleClickZoomInteractionComponent);
export { DoubleClickZoomInteractionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG91YmxlY2xpY2t6b29tLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2ludGVyYWN0aW9ucy9kb3VibGVjbGlja3pvb20uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQU1oRCxJQUFhLG1DQUFtQyxHQUFoRCxNQUFhLG1DQUFtQztJQVE5QyxZQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO0lBQUcsQ0FBQztJQUV6QyxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Q0FDRixDQUFBOztZQVYwQixZQUFZOztBQUpyQztJQURDLEtBQUssRUFBRTtxRUFDUztBQUVqQjtJQURDLEtBQUssRUFBRTtrRUFDTTtBQU5ILG1DQUFtQztJQUovQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsaUNBQWlDO1FBQzNDLFFBQVEsRUFBRSxFQUFFO0tBQ2IsQ0FBQztHQUNXLG1DQUFtQyxDQWtCL0M7U0FsQlksbUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvdWJsZUNsaWNrWm9vbSB9IGZyb20gJ29sL2ludGVyYWN0aW9uJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtaW50ZXJhY3Rpb24tZG91YmxlY2xpY2t6b29tJyxcbiAgdGVtcGxhdGU6ICcnLFxufSlcbmV4cG9ydCBjbGFzcyBEb3VibGVDbGlja1pvb21JbnRlcmFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaW5zdGFuY2U6IERvdWJsZUNsaWNrWm9vbTtcblxuICBASW5wdXQoKVxuICBkdXJhdGlvbjogbnVtYmVyO1xuICBASW5wdXQoKVxuICBkZWx0YTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBEb3VibGVDbGlja1pvb20odGhpcyk7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19